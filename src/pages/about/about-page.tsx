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
        title="Existimos para que aprender tecnología no sea un camino solitario."
        description="Nos reúne la curiosidad, el gusto por resolver problemas y la voluntad de compartir lo que sabemos."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Nosotros" }]}
      />

      <Section ariaLabelledby="quienes-somos">
        <SectionHeader
          id="quienes-somos"
          eyebrow="01 / Por qué"
          title="Una comunidad antes que una institución."
          description="JavaLimo++ existe para practicar, enseñar, preguntar y crecer con otras personas."
        />
        <div className="text-muted-foreground mt-10 grid gap-6 text-lg leading-relaxed md:grid-cols-2 md:gap-14">
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

      <Section ariaLabelledby="historia" tone="muted">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-20">
          <SectionHeader id="historia" eyebrow="02 / Origen" title="Nuestra historia" />
          <div className="text-muted-foreground space-y-5 text-lg leading-relaxed">
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
        </div>
        {/* Espacio preparado para una línea de tiempo histórica con datos reales. */}
        <div className="mt-14">
          <EmptyState
            title="Línea de tiempo en construcción"
            description="Aquí documentaremos los momentos clave de la comunidad conforme confirmemos fechas y hechos verificables."
          />
        </div>
      </Section>

      <Section ariaLabelledby="por-que-existe">
        <SectionHeader
          id="por-que-existe"
          title="Por qué existe JavaLimo++"
          description="Más que una misión corporativa, estas son las razones por las que seguimos reuniéndonos."
        />
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {reasons.map((reason, index) => (
            <li
              key={reason}
              className="grid gap-3 py-5 text-lg leading-relaxed sm:grid-cols-[3rem_1fr]"
            >
              <span className="text-primary text-xs font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section ariaLabelledby="principios" tone="muted">
        <SectionHeader id="principios" title="Principios" />
        <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <li key={principle.title} className="border-primary border-t-2 pt-5">
              <p className="text-primary text-xs font-bold">{`[ ${String(index + 1).padStart(2, "0")} ]`}</p>
              <h3 className="mt-5 text-xl font-semibold">{principle.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
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
