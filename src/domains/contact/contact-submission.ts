import type { contactReasons } from "@/content/site/community";

export type ContactReason = (typeof contactReasons)[number];

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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    errors.email = "Escribe un correo válido.";
  }
  if (!submission.reason) errors.reason = "Elige un motivo de contacto.";
  if (submission.message.length < 10) {
    errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    submission: submission as ContactSubmission,
  };
}
