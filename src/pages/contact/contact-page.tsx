import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  const hasChannels = Boolean(siteConfig.email) || siteConfig.socials.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Escríbele a JavaLimo++"
        description="¿Quieres participar, colaborar o proponer una actividad? Cuéntanos y buscamos la mejor forma de sumarte."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]}
      />

      {hasChannels ? (
        <Section ariaLabelledby="canales" size="narrow">
          <SectionHeader id="canales" title="Canales de contacto" />
          <div className="mt-6">
            <ul className="space-y-3">
              {siteConfig.email ? (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary underline underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              {siteConfig.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

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
