import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { AlliesSection } from "@/components/sections/allies-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { inspirations } from "@/content/allies";
import { principles } from "@/content/site/community";
import { OPENNESS_NOTE, siteConfig } from "@/config/site";

const reasons = [
  "Aprender juntos y acompañarnos en el proceso.",
  "Compartir conocimientos sin esperar a ser expertos.",
  "Fomentar la programación y la algoritmia.",
  "Desarrollar habilidades técnicas y de colaboración.",
  "Competir como una forma de crecer, no de excluir.",
  "Acercar la tecnología a nuevas personas.",
];

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Historia y comunidad de JavaLimo++"
        description="Somos una comunidad de programación y tecnología. Esta es la manera en que nos entendemos y por qué existimos."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Nosotros" }]}
      />

      <Section ariaLabelledby="quienes-somos" size="narrow">
        <SectionHeader
          id="quienes-somos"
          title="Quiénes somos"
          description="JavaLimo++ es, antes que nada, una comunidad."
        />
        <div className="text-muted-foreground mt-5 space-y-4 leading-relaxed">
          <p>
            Reunimos a personas interesadas en aprender, compartir, competir y crear con tecnología.
            No importa la carrera que estudies, la institución a la que pertenezcas o tu nivel de
            experiencia: lo que nos une es el interés por la programación y la algoritmia.
          </p>
          <p>
            Pueden acercarse estudiantes del ITSH, de otras universidades, de preparatoria y de
            secundaria cuando la actividad sea apropiada, así como egresados, autodidactas,
            profesionales, mentores, docentes, otras comunidades y organizaciones interesadas en
            colaborar.
          </p>
          <p>{OPENNESS_NOTE}</p>
        </div>
      </Section>

      <Section ariaLabelledby="historia" tone="muted" size="narrow">
        <SectionHeader id="historia" title="Nuestra historia" />
        <div className="text-muted-foreground mt-5 space-y-4 leading-relaxed">
          <p>
            JavaLimo++ nació por iniciativa de estudiantes de Ingeniería en Sistemas durante su
            formación en el {siteConfig.origin.institution}, en {siteConfig.origin.place}.
          </p>
          <p>
            Ese origen forma parte de nuestra memoria, pero no define quién puede pertenecer a la
            comunidad. Con el tiempo, la intención ha sido abrir el espacio a más personas y a más
            contextos.
          </p>
        </div>
        {/* Espacio preparado para una línea de tiempo histórica con datos reales. */}
        <div className="mt-8">
          <EmptyState
            title="Línea de tiempo en construcción"
            description="Aquí documentaremos los momentos clave de la comunidad conforme confirmemos fechas y hechos verificables."
          />
        </div>
      </Section>

      <Section ariaLabelledby="por-que-existe" size="narrow">
        <SectionHeader
          id="por-que-existe"
          title="Por qué existe JavaLimo++"
          description="Más que una misión corporativa, estas son las razones por las que seguimos reuniéndonos."
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="border-border bg-card text-muted-foreground rounded-xl border p-4 text-sm leading-relaxed"
            >
              {reason}
            </li>
          ))}
        </ul>
      </Section>

      <Section ariaLabelledby="principios" tone="muted">
        <SectionHeader id="principios" title="Principios" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <li key={principle.title} className="border-border bg-card rounded-xl border p-5">
              <h3 className="font-semibold">{principle.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <AlliesSection
        id="inspiraciones"
        title="Comunidades que nos inspiran"
        description="Clubes, organizaciones y comunidades cuyo trabajo ha influido en la forma en que hacemos las cosas."
        items={inspirations}
        emptyDescription="Reservamos este espacio para reconocer a esas comunidades. Lo publicaremos cuando tengamos su información confirmada."
      />

      <Section ariaLabel="Enlaces relacionados" size="narrow">
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/que-hacemos">Descubre lo que hacemos</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/experiencias">Revisa nuestras experiencias</Link>
          </Button>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
