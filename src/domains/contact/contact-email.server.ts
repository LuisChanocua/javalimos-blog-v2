import { Resend } from "resend";
import type { ContactSubmissionResult } from "./contact-gateway";
import type { ContactSubmission } from "./contact-submission";

interface ContactEmailEnv {
  RESEND_API_KEY?: string | undefined;
  CONTACT_TO_EMAIL?: string | undefined;
  CONTACT_FROM_EMAIL?: string | undefined;
}

interface ContactEmailPayload {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}

export type ContactEmailProvider = (
  payload: ContactEmailPayload,
  apiKey: string,
) => Promise<{ ok: true } | { ok: false }>;

interface SendContactEmailOptions {
  env?: ContactEmailEnv;
  provider?: ContactEmailProvider;
}

export async function sendContactEmail(
  submission: ContactSubmission,
  options: SendContactEmailOptions = {},
): Promise<ContactSubmissionResult> {
  const config = getContactEmailConfig(options.env ?? process.env);

  if (!config) {
    return { status: "unavailable" };
  }

  const payload = buildContactEmailPayload(submission, config);
  const provider = options.provider ?? sendWithResend;

  try {
    const result = await provider(payload, config.apiKey);
    return result.ok ? { status: "success" } : { status: "failed" };
  } catch (error) {
    console.error("Contact email provider request failed", {
      errorType: error instanceof Error ? error.name : typeof error,
    });
    return { status: "failed" };
  }
}

function getContactEmailConfig(env: ContactEmailEnv) {
  const apiKey = cleanRequiredEnvValue(env.RESEND_API_KEY);
  const toEmail = cleanEmailEnvValue(env.CONTACT_TO_EMAIL);
  const fromEmail = cleanEmailEnvValue(env.CONTACT_FROM_EMAIL);

  if (!apiKey || !toEmail || !fromEmail) {
    return null;
  }

  return { apiKey, toEmail, fromEmail };
}

function cleanRequiredEnvValue(value: string | undefined): string | null {
  const cleaned = value?.trim();
  if (!cleaned || hasHeaderBreak(cleaned)) return null;
  return cleaned;
}

function cleanEmailEnvValue(value: string | undefined): string | null {
  const cleaned = cleanRequiredEnvValue(value);
  if (!cleaned || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) return null;
  return cleaned;
}

function buildContactEmailPayload(
  submission: ContactSubmission,
  config: { toEmail: string; fromEmail: string },
): ContactEmailPayload {
  return {
    from: `JavaLimo++ <${config.fromEmail}>`,
    to: config.toEmail,
    replyTo: submission.email,
    subject: buildContactEmailSubject(submission.reason),
    text: [
      "Nuevo mensaje desde el formulario de contacto de JavaLimo++.",
      "",
      `Nombre: ${submission.name}`,
      `Correo: ${submission.email}`,
      `Motivo: ${submission.reason}`,
      "",
      "Mensaje:",
      submission.message,
    ].join("\n"),
  };
}

function buildContactEmailSubject(reason: string): string {
  const safeReason = reason
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
  return `Contacto JavaLimo++: ${safeReason}`;
}

function hasHeaderBreak(value: string): boolean {
  return /[\r\n]/.test(value);
}

const sendWithResend: ContactEmailProvider = async (payload, apiKey) => {
  const resend = new Resend(apiKey);
  const response = await resend.emails.send(payload);

  if (response.error) {
    console.error("Contact email provider failed", {
      errorName: response.error.name,
    });
    return { ok: false };
  }

  return response.data?.id ? { ok: true } : { ok: false };
};
