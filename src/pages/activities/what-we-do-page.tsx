import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { AreasEditorial } from "@/components/sections/areas-editorial";
import { CtaSection } from "@/components/sections/cta-section";
import { UpcomingActivities } from "@/components/sections/upcoming-activities";
import { Button } from "@/components/ui/button";
import { areas } from "@/content/site/areas";
import type { Event, EventLabels } from "@/domains/events/events-repository";

export function WhatWeDoPage({
  upcomingEvents,
  eventLabels,
}: {
  upcomingEvents: readonly Event[];
  eventLabels: EventLabels;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Lo que hacemos"
        title="Aprendemos poniendo las ideas en práctica."
        description="Entrenamos, compartimos, organizamos y construimos. Las actividades cambian; estas líneas de trabajo nos dan continuidad."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Lo que hacemos" }]}
      />

      <Section ariaLabelledby="areas">
        <SectionHeader id="areas" title="Nuestras áreas" />
        <div className="mt-10">
          <AreasEditorial items={areas} showDetails />
        </div>
      </Section>

      <UpcomingActivities events={upcomingEvents} labels={eventLabels} />

      <Section ariaLabel="Contenido relacionado" tone="muted" size="narrow">
        <p className="text-muted-foreground leading-relaxed">
          Cada área se refleja en actividades concretas. Puedes revisar{" "}
          <Link to="/experiencias" className="text-primary underline underline-offset-4">
            las experiencias que hemos documentado
          </Link>{" "}
          o leer{" "}
          <Link to="/blog" className="text-primary underline underline-offset-4">
            los artículos del blog de la comunidad
          </Link>
          .
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
