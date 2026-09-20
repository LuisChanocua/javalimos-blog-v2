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

/**
 * Formulario de contacto con validación en cliente.
 * Todavía NO existe backend: el envío no se simula como exitoso.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<ContactSubmissionErrors>({});
  const [validated, setValidated] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const reason = String(data.get("reason") ?? "");
    const message = String(data.get("message") ?? "");
    const result = validateContactSubmission({ name, email, reason, message });

    if (!result.ok) {
      setErrors(result.errors);
      setValidated(false);
      return;
    }

    const submissionResult = await contactGateway.submit(result.submission);

    setErrors({});
    setValidated(submissionResult.status === "unavailable");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

      <Button type="submit">Validar mensaje</Button>

      <p aria-live="polite" className="text-muted-foreground text-sm leading-relaxed">
        {validated
          ? "Los datos son correctos, pero el envío todavía no está conectado: este formulario aún no manda el mensaje a nadie. La integración de envío se implementará más adelante."
          : "Este formulario todavía no envía mensajes. Por ahora solo valida los datos; la integración de envío se implementará más adelante."}
      </p>
    </form>
  );
}
