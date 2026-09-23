import type { ContactSubmission, ContactSubmissionErrors } from "./contact-submission";
import { submitContact } from "./submit-contact";

export type ContactSubmissionResult =
  | { status: "success" }
  | { status: "validation-error"; errors: ContactSubmissionErrors }
  | { status: "failed" }
  | { status: "unavailable" };

export interface ContactGateway {
  submit(submission: ContactSubmission): Promise<ContactSubmissionResult>;
}

export const serverContactGateway: ContactGateway = {
  async submit(submission) {
    try {
      return await submitContact({ data: submission });
    } catch {
      return { status: "failed" };
    }
  },
};

export const contactGateway: ContactGateway = serverContactGateway;
