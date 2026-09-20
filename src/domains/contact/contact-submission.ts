import { contactReasons } from "@/content/site/community";

export type ContactReason = (typeof contactReasons)[number];

const CONTACT_REASON_VALUES: readonly string[] = contactReasons;

export const CONTACT_SUBMISSION_LIMITS = {
  nameMaxLength: 120,
  emailMaxLength: 254,
  messageMaxLength: 3000,
} as const;

export interface ContactSubmission {
  name: string;
  email: string;
  reason: ContactReason;
  message: string;
}

export interface ContactSubmissionInput {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export interface ContactSubmissionErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

export type ContactSubmissionValidationResult =
  { ok: true; submission: ContactSubmission } | { ok: false; errors: ContactSubmissionErrors };

export function toContactSubmissionInput(input: unknown): ContactSubmissionInput | null {
  if (input == null || typeof input !== "object") return null;

  const payload = input as Record<string, unknown>;
  const { name, email, reason, message } = payload;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof reason !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  return { name, email, reason, message };
}

export function validateContactSubmission(
  input: ContactSubmissionInput,
): ContactSubmissionValidationResult {
  const submission = {
    name: input.name.trim(),
    email: input.email.trim(),
    reason: input.reason,
    message: input.message.trim(),
  };
  const errors: ContactSubmissionErrors = {};

  if (submission.name.length < 2) errors.name = "Escribe tu nombre.";
  if (submission.name.length > CONTACT_SUBMISSION_LIMITS.nameMaxLength) {
    errors.name = `Usa ${CONTACT_SUBMISSION_LIMITS.nameMaxLength} caracteres o menos.`;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    errors.email = "Escribe un correo válido.";
  }
  if (submission.email.length > CONTACT_SUBMISSION_LIMITS.emailMaxLength) {
    errors.email = `Usa ${CONTACT_SUBMISSION_LIMITS.emailMaxLength} caracteres o menos.`;
  }
  if (!submission.reason) errors.reason = "Elige un motivo de contacto.";
  if (submission.reason && !CONTACT_REASON_VALUES.includes(submission.reason)) {
    errors.reason = "Elige un motivo de contacto válido.";
  }
  if (submission.message.length < 10) {
    errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
  }
  if (submission.message.length > CONTACT_SUBMISSION_LIMITS.messageMaxLength) {
    errors.message = `Usa ${CONTACT_SUBMISSION_LIMITS.messageMaxLength} caracteres o menos.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    submission: submission as ContactSubmission,
  };
}
