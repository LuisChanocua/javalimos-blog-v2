import { Link } from "@tanstack/react-router";
import { ArticleCard } from "@/components/cards/article-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { Section, SectionHeader } from "@/components/layout/section";
import { AlliesSection } from "@/components/sections/allies-section";
import { AreasGrid } from "@/components/sections/areas-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { UpcomingActivities } from "@/components/sections/upcoming-activities";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { allies } from "@/content/allies";
import { experiences } from "@/content/experiences";
import { sortedPosts } from "@/content/posts";
import { areas } from "@/content/site/areas";

export function HomePage() {
  const recentExperiences = [...experiences]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const recentPosts = sortedPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <Section ariaLabelledby="quienes-somos" tone="muted">
        <SectionHeader
          id="quienes-somos"
          eyebrow="Quiénes somos"
          title="Una comunidad, no un club cerrado"
          description="JavaLimo++ reúne a personas interesadas en programación, algoritmia y tecnología. Nació dentro de un entorno universitario, pero está abierta a estudiantes de cualquier institución, egresados, autodidactas, docentes y profesionales."
        />
        <Button asChild variant="outline" className="mt-6">
          <Link to="/nosotros">Conoce nuestra historia y principios</Link>
        </Button>
      </Section>

      <Section ariaLabelledby="lo-que-hacemos">
        <SectionHeader
          id="lo-que-hacemos"
          eyebrow="Lo que hacemos"
          title="Cuatro áreas que nos mueven"
          description="Practicamos, enseñamos, participamos y conectamos personas alrededor de la tecnología."
        />
        <div className="mt-8">
          <AreasGrid items={areas} />
        </div>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/que-hacemos">Ver todas nuestras áreas de actividad</Link>
        </Button>
      </Section>

      <UpcomingActivities />

      <Section ariaLabelledby="experiencias-recientes" tone="muted">
        <SectionHeader
          id="experiencias-recientes"
          eyebrow="Experiencias"
          title="Lo que hemos vivido"
          description="Concursos, talleres, charlas y encuentros en los que ha participado la comunidad."
        />
        <div className="mt-8">
          {recentExperiences.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentExperiences.map((experience) => (
                <li key={experience.id}>
                  <ExperienceCard experience={experience} />
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
        <Button asChild variant="outline" className="mt-6">
          <Link to="/experiencias">Ver todas las experiencias de la comunidad</Link>
        </Button>
      </Section>

      <Section ariaLabelledby="blog-reciente">
        <SectionHeader
          id="blog-reciente"
          eyebrow="Blog"
          title="Lo que escribimos"
          description="Guías, apuntes y reflexiones sobre programación, algoritmia y tecnología."
        />
        <div className="mt-8">
          {recentPosts.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        <Button asChild variant="outline" className="mt-6">
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
