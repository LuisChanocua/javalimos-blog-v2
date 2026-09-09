import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { AreasGrid } from "@/components/sections/areas-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { UpcomingActivities } from "@/components/sections/upcoming-activities";
import { Button } from "@/components/ui/button";
import { areas, projectsArea } from "@/content/site/areas";

export function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lo que hacemos"
        title="Áreas de actividad de JavaLimo++"
        description="Estas son las líneas permanentes de trabajo de la comunidad. Las actividades concretas cambian; estas áreas son las que nos dan continuidad."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Lo que hacemos" }]}
      />

      <Section ariaLabelledby="areas">
        <SectionHeader id="areas" title="Nuestras áreas" />
        <div className="mt-8">
          <AreasGrid items={[...areas, projectsArea]} showDetails />
        </div>
      </Section>

      <UpcomingActivities />

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
