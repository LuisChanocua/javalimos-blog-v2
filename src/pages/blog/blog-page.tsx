import { ArticleCard } from "@/components/cards/article-card";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaSection } from "@/components/sections/cta-section";
import { EmptyState } from "@/components/ui/empty-state";
import { sortedPosts } from "@/content/posts";

export function BlogPage() {
  const posts = sortedPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Programación, algoritmos y tecnología"
        description="Guías, apuntes y reflexiones escritas por la comunidad. A diferencia de las experiencias, aquí compartimos lo que queremos enseñar y explicar."
        crumbs={[{ label: "Inicio", to: "/" }, { label: "Blog" }]}
      />

      <Section ariaLabel="Listado de artículos">
        {posts.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
