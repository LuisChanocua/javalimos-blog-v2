import { useState } from "react";
import { ExperienceCard } from "@/components/cards/experience-card";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaSection } from "@/components/sections/cta-section";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
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
        title="Lo que vivimos también forma parte de lo que aprendemos."
        description="Concursos, talleres y encuentros: una memoria abierta de los retos, las personas y las ideas que nos han movido."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Experiencias" }]}
      />

      <Section ariaLabel="Listado de experiencias">
        {available.length > 1 ? (
          <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
            {[{ value: "todas" as const, label: "Todas" }, ...available].map((option) => {
              const active = filter === option.value;
              return (
                <Button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(option.value)}
                  variant="outline"
                  size="sm"
                  className={cn(
                    active
                      ? "border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {option.label}
                </Button>
              );
            })}
          </div>
        ) : null}

        <div className="mt-8">
          {visible.length > 0 ? (
            <ul className="grid gap-5 lg:grid-cols-2">
              {visible.map((experience, index) => (
                <li key={experience.id} className={index === 0 ? "lg:row-span-2" : undefined}>
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
