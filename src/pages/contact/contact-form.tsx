import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactReasons } from "@/content/site/community";
import { contactGateway } from "@/domains/contact/contact-gateway";
import {
  validateContactSubmission,
  type ContactSubmissionErrors,
} from "@/domains/contact/contact-submission";

type SubmissionStatus = "idle" | "submitting" | "success" | "failed" | "unavailable";

/**
 * Formulario de contacto con validación en cliente y envío server-side temporal.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<ContactSubmissionErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const reason = String(data.get("reason") ?? "");
    const message = String(data.get("message") ?? "");
    const result = validateContactSubmission({ name, email, reason, message });

    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");
    const submissionResult = await contactGateway.submit(result.submission);

    if (submissionResult.status === "success") {
      form.reset();
      setStatus("success");
      return;
    }

    if (submissionResult.status === "validation-error") {
      setErrors(submissionResult.errors);
      setStatus("idle");
      return;
    }

    setStatus(submissionResult.status);
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting} className="space-y-5">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2"
        />
        {errors.name ? (
          <p id="name-error" className="text-destructive mt-1.5 text-sm">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="email">Correo</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-2"
        />
        {errors.email ? (
          <p id="email-error" className="text-destructive mt-1.5 text-sm">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="reason">Motivo de contacto</Label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.reason)}
          aria-describedby={errors.reason ? "reason-error" : undefined}
          className="border-input bg-background mt-2 h-10 w-full rounded-md border px-3 text-sm"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason ? (
          <p id="reason-error" className="text-destructive mt-1.5 text-sm">
            {errors.reason}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2"
        />
        {errors.message ? (
          <p id="message-error" className="text-destructive mt-1.5 text-sm">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>

      <p aria-live="polite" className="text-muted-foreground text-sm leading-relaxed">
        {getStatusMessage(status)}
      </p>
    </form>
  );
}

function getStatusMessage(status: SubmissionStatus): string {
  switch (status) {
    case "submitting":
      return "Estamos enviando tu mensaje.";
    case "success":
      return "Mensaje enviado. Gracias por escribirnos; revisaremos tu mensaje y responderemos por correo.";
    case "unavailable":
      return "El envío no está disponible por ahora. Intenta más tarde.";
    case "failed":
      return "No pudimos enviar el mensaje. Intenta más tarde.";
    case "idle":
      return "Completa el formulario y enviaremos tu mensaje al equipo de JavaLimo++.";
  }
}
