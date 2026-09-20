import { Link } from "@tanstack/react-router";
import { ArticleCard } from "@/components/cards/article-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { Section, SectionHeader } from "@/components/layout/section";
import { AlliesSection } from "@/components/sections/allies-section";
import { AreasEditorial } from "@/components/sections/areas-editorial";
import { CtaSection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { UpcomingActivities } from "@/components/sections/upcoming-activities";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { allies } from "@/content/allies";
import { areas } from "@/content/site/areas";
import { getExperienceCategoryLabel } from "@/domains/experiences/experience-categories";
import type { ExperienceCategoryOption } from "@/domains/experiences/experiences-repository";
import type { BlogPost, Experience } from "@/types/content";

export function HomePage({
  recentPosts,
  recentExperiences,
  experienceCategories,
}: {
  recentPosts: readonly BlogPost[];
  recentExperiences: readonly Experience[];
  experienceCategories: readonly ExperienceCategoryOption[];
}) {
  return (
    <>
      <Hero />

      <Section ariaLabelledby="quienes-somos" tone="muted">
        <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16 lg:gap-24">
          <p className="text-primary text-xs font-bold uppercase">{`{ esencia }`}</p>
          <div>
            <h2 id="quienes-somos" className="section-title">
              La curiosidad nos reúne. El código nos pone en movimiento.
            </h2>
            <p className="text-muted-foreground lead-copy mt-7 max-w-3xl">
              Practicamos algoritmia, compartimos lo que aprendemos y construimos espacios donde
              preguntar, intentar y equivocarse también forman parte del proceso.
            </p>
            <Button asChild variant="link" className="mt-7 px-0 text-foreground">
              <Link to="/nosotros">Conoce por qué existe JavaLimo++ →</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section ariaLabelledby="lo-que-hacemos">
        <SectionHeader
          id="lo-que-hacemos"
          eyebrow="Lo que hacemos"
          title="Aprender haciendo, compartir aprendiendo."
          description="Practicamos, enseñamos, participamos y conectamos personas alrededor de la tecnología."
        />
        <div className="mt-12">
          <AreasEditorial items={areas} />
        </div>
        <Button asChild variant="link" className="mt-8 px-0 text-foreground">
          <Link to="/que-hacemos">Ver todas nuestras áreas de actividad</Link>
        </Button>
      </Section>

      <UpcomingActivities />

      <Section ariaLabelledby="experiencias-recientes" tone="muted">
        <SectionHeader
          id="experiencias-recientes"
          eyebrow="Experiencias"
          title="La memoria también se programa."
          description="Concursos, talleres, charlas y encuentros que dejan ideas, aprendizajes y nuevas preguntas."
        />
        <div className="mt-8">
          {recentExperiences.length > 0 ? (
            <ul className="grid gap-5 lg:grid-cols-2">
              {recentExperiences.map((experience, index) => (
                <li
                  key={experience.id}
                  className={index === 0 ? "min-w-0 lg:row-span-2" : "min-w-0"}
                >
                  <ExperienceCard
                    experience={experience}
                    categoryLabel={getExperienceCategoryLabel(
                      experienceCategories,
                      experience.category,
                    )}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Todavía no publicamos experiencias"
              description="Aquí aparecerán los concursos, talleres y eventos que la comunidad vaya documentando."
            />
          )}
        </div>
        <Button asChild variant="link" className="mt-7 px-0 text-foreground">
          <Link to="/experiencias">Ver todas las experiencias de la comunidad</Link>
        </Button>
      </Section>

      <Section ariaLabelledby="blog-reciente">
        <SectionHeader
          id="blog-reciente"
          eyebrow="Blog"
          title="Ideas que merecen una segunda lectura."
          description="Guías, apuntes y reflexiones para entender mejor la programación, la algoritmia y la tecnología."
        />
        <div className="mt-8">
          {recentPosts.length > 0 ? (
            <ul className="divide-y divide-border border-y border-border">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <ArticleCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Todavía no hay artículos"
              description="Pronto publicaremos contenido escrito por integrantes de la comunidad."
            />
          )}
        </div>
        <Button asChild variant="link" className="mt-7 px-0 text-foreground">
          <Link to="/blog">Leer más artículos del blog</Link>
        </Button>
      </Section>

      <AlliesSection
        id="aliados"
        eyebrow="Colaboración"
        title="Aliados"
        description="Instituciones, comunidades y organizaciones con las que colaboramos."
        items={allies}
        emptyDescription="Aún no publicamos aliados. Cuando existan colaboraciones confirmadas se mostrarán en esta sección."
      />

      <CtaSection />
    </>
  );
}
