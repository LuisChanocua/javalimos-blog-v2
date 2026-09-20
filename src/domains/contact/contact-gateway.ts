import type { ContactSubmission, ContactSubmissionErrors } from "./contact-submission";

export type ContactSubmissionResult =
  | { status: "success" }
  | { status: "validation-error"; errors: ContactSubmissionErrors }
  | { status: "rate-limited" }
  | { status: "server-error" }
  | { status: "network-error" }
  | { status: "unavailable" };

export interface ContactGateway {
  submit(submission: ContactSubmission): Promise<ContactSubmissionResult>;
}

export const unavailableContactGateway: ContactGateway = {
  async submit() {
    return { status: "unavailable" };
  },
};

export const contactGateway: ContactGateway = unavailableContactGateway;
