import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, involvementOptions } from "@/content/site/community";
import { OPENNESS_NOTE } from "@/config/site";

export function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comunidad"
        title="Forma parte de JavaLimo++"
        description="No importa si estudias en el ITSH, en otra institución, si eres egresado, autodidacta o simplemente tienes interés en programación y tecnología. Existen distintas formas de acercarte y colaborar con la comunidad."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Comunidad" }]}
      >
        <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">{OPENNESS_NOTE}</p>
      </PageHeader>

      <Section ariaLabelledby="formas-de-participar">
        <SectionHeader
          id="formas-de-participar"
          eyebrow="Participación"
          title="Formas de involucrarte"
          description="Elige la que mejor describa tu interés y escríbenos desde la página de contacto."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {involvementOptions.map((option) => (
            <li
              key={option.id}
              id={option.id}
              className="border-border bg-card rounded-xl border p-5"
            >
              <h3 className="text-lg font-semibold">{option.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {option.description}
              </p>
            </li>
          ))}
        </ul>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contacto">Escríbenos para participar</Link>
        </Button>
      </Section>

      <Section ariaLabelledby="faq" tone="muted" size="narrow">
        <SectionHeader id="faq" title="Preguntas frecuentes" />
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section ariaLabel="Contenido relacionado" size="narrow">
        <p className="text-muted-foreground leading-relaxed">
          Si quieres conocernos mejor antes de escribir, revisa{" "}
          <Link to="/nosotros" className="text-primary underline underline-offset-4">
            la historia de la comunidad
          </Link>{" "}
          o{" "}
          <Link to="/que-hacemos" className="text-primary underline underline-offset-4">
            nuestras áreas de actividad
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
