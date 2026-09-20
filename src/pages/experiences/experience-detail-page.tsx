import { Link } from "@tanstack/react-router";
import { ContentBlocks } from "@/components/content/content-blocks";
import { ExperienceCard } from "@/components/cards/experience-card";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getExperienceCategoryLabel } from "@/domains/experiences/experience-categories";
import type { ExperienceCategoryOption } from "@/domains/experiences/experiences-repository";
import { formatDate } from "@/lib/format";
import type { Experience } from "@/types/content";

/** Plantilla de detalle: tolera campos ausentes sin romper el diseño. */
export function ExperienceDetailPage({
  experience,
  relatedExperiences,
  categories,
}: {
  experience: Experience;
  relatedExperiences: readonly Experience[];
  categories: readonly ExperienceCategoryOption[];
}) {
  return (
    <>
      <PageHeader
        eyebrow={getExperienceCategoryLabel(categories, experience.category)}
        title={experience.title}
        description={experience.excerpt}
        crumbs={[
          { label: "Inicio", to: "/" },
          { label: "Experiencias", to: "/experiencias" },
          { label: experience.title },
        ]}
      >
        <dl className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div>
            <dt className="sr-only">Fecha</dt>
            <dd>
              <time dateTime={experience.date}>{formatDate(experience.date)}</time>
            </dd>
          </div>
          {experience.location ? (
            <div>
              <dt className="sr-only">Lugar</dt>
              <dd>{experience.location}</dd>
            </div>
          ) : null}
        </dl>
        {experience.demo ? (
          <div className="mt-4">
            <Badge variant="outline">Contenido de ejemplo</Badge>
          </div>
        ) : null}
      </PageHeader>

      <Section size="narrow" ariaLabel="Detalle de la experiencia">
        {experience.coverImage ? (
          <img
            src={experience.coverImage.src}
            alt={experience.coverImage.alt}
            width={experience.coverImage.width ?? 1200}
            height={experience.coverImage.height ?? 675}
            className="border-border mb-8 aspect-video w-full rounded-xl border object-cover"
          />
        ) : null}

        {experience.body ? <ContentBlocks blocks={experience.body} /> : null}

        {experience.participants?.length ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Participantes</h2>
            <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-5">
              {experience.participants.map((person) => (
                <li key={person}>{person}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {experience.results?.length ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Resultados</h2>
            <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-5">
              {experience.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {experience.learnings?.length ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Aprendizajes</h2>
            <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-5">
              {experience.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {experience.gallery?.length ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Galería</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {experience.gallery.map((image) => (
                <li key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 640}
                    height={image.height ?? 360}
                    loading="lazy"
                    decoding="async"
                    className="border-border w-full rounded-lg border object-cover"
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {experience.tags?.length ? (
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Etiquetas">
            {experience.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary">{tag}</Badge>
              </li>
            ))}
          </ul>
        ) : null}

        <Button asChild variant="outline" className="mt-10">
          <Link to="/experiencias">Volver a todas las experiencias</Link>
        </Button>
      </Section>

      {relatedExperiences.length > 0 ? (
        <Section tone="muted" ariaLabelledby="relacionadas">
          <SectionHeader id="relacionadas" title="Experiencias relacionadas" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedExperiences.map((item) => (
              <li key={item.id}>
                <ExperienceCard
                  experience={item}
                  categoryLabel={getExperienceCategoryLabel(categories, item.category)}
                />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
