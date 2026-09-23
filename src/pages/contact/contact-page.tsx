import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Escríbele a JavaLimo++"
        description="¿Quieres participar, colaborar o proponer una actividad? Cuéntanos y buscamos la mejor forma de sumarte."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]}
      />

      <Section ariaLabelledby="formulario" tone="muted" size="narrow">
        <SectionHeader
          id="formulario"
          title="Formulario de contacto"
          description="Completa tus datos y el motivo por el que quieres acercarte."
        />
        <div className="mt-6">
          <ContactForm />
        </div>
      </Section>

      <Section ariaLabel="Contenido relacionado" size="narrow">
        <p className="text-muted-foreground leading-relaxed">
          Antes de escribir puedes revisar{" "}
          <Link to="/comunidad" className="text-primary underline underline-offset-4">
            las formas de participar en la comunidad
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
