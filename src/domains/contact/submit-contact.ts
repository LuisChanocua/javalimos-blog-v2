import { createServerFn } from "@tanstack/react-start";
import type { ContactSubmissionResult } from "./contact-gateway";
import { toContactSubmissionInput, validateContactSubmission } from "./contact-submission";

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => data)
  .handler(async ({ data }): Promise<ContactSubmissionResult> => {
    const input = toContactSubmissionInput(data);

    if (!input) {
      return {
        status: "validation-error",
        errors: { message: "Revisa los datos del formulario." },
      };
    }

    const validation = validateContactSubmission(input);

    if (!validation.ok) {
      return { status: "validation-error", errors: validation.errors };
    }

    const { sendContactEmail } = await import("./contact-email.server");
    return await sendContactEmail(validation.submission);
  });
