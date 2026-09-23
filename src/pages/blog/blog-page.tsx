import { ArticleCard } from "@/components/cards/article-card";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaSection } from "@/components/sections/cta-section";
import { EmptyState } from "@/components/ui/empty-state";
import type { BlogPost } from "@/types/content";

export function BlogPage({ posts }: { posts: readonly BlogPost[] }) {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Pensar mejor también se entrena."
        description="Guías, apuntes y reflexiones escritas para explicar lo aprendido, ordenar ideas y abrir nuevas preguntas."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Blog" }]}
      />

      <Section ariaLabel="Listado de artículos">
        {posts.length > 0 ? (
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <ArticleCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Todavía no hay artículos publicados"
            description="Estamos preparando los primeros textos de la comunidad."
          />
        )}
      </Section>

      <CtaSection />
    </>
  );
}
