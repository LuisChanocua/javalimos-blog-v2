import { useState } from "react";
import { ExperienceCard } from "@/components/cards/experience-card";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaSection } from "@/components/sections/cta-section";
import { EmptyState } from "@/components/ui/empty-state";
import { experienceCategories, experiences } from "@/content/experiences";
import { cn } from "@/lib/utils";
import type { ExperienceCategory } from "@/types/content";

type Filter = ExperienceCategory | "todas";

export function ExperiencesPage() {
  const [filter, setFilter] = useState<Filter>("todas");

  const sorted = [...experiences].sort((a, b) => b.date.localeCompare(a.date));
  const visible = filter === "todas" ? sorted : sorted.filter((e) => e.category === filter);

  // Solo se ofrecen filtros para categorías que realmente tienen contenido.
  const available = experienceCategories.filter((category) =>
    experiences.some((experience) => experience.category === category.value),
  );

  return (
    <>
      <PageHeader
        eyebrow="Experiencias"
        title="Concursos, talleres y eventos que hemos vivido"
        description="La memoria de la comunidad: lo que hemos hecho, dónde hemos estado y qué aprendimos en el camino."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Experiencias" }]}
      />

      <Section ariaLabel="Listado de experiencias">
        {available.length > 1 ? (
          <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
            {[{ value: "todas" as const, label: "Todas" }, ...available].map((option) => {
              const active = filter === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(option.value)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="mt-8">
          {visible.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((experience) => (
                <li key={experience.id}>
                  <ExperienceCard experience={experience} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Sin experiencias en esta categoría"
              description="Prueba con otra categoría o vuelve más adelante: la comunidad documenta sus actividades conforme ocurren."
            />
          )}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
