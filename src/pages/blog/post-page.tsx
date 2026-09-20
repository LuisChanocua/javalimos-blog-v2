import { Link } from "@tanstack/react-router";
import { ArticleCard } from "@/components/cards/article-card";
import { ContentBlocks } from "@/components/content/content-blocks";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, readingMinutes } from "@/lib/format";
import type { BlogPost } from "@/types/content";

export function PostPage({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: readonly BlogPost[];
}) {
  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        crumbs={[
          { label: "Inicio", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: post.title },
        ]}
      >
        <p className="text-muted-foreground text-sm">
          Por {post.author.name}
          <span aria-hidden="true"> · </span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true"> · </span>
          {readingMinutes(post.body)} min de lectura
        </p>
        {post.demo ? (
          <div className="mt-4">
            <Badge variant="outline">Contenido de ejemplo</Badge>
          </div>
        ) : null}
      </PageHeader>

      <Section size="narrow" ariaLabel="Contenido del artículo">
        <article>
          {post.coverImage ? (
            <img
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              width={post.coverImage.width ?? 1200}
              height={post.coverImage.height ?? 675}
              className="border-border mb-8 aspect-video w-full rounded-xl border object-cover"
            />
          ) : null}
          <ContentBlocks blocks={post.body} />
        </article>

        {post.tags?.length ? (
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Etiquetas">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary">{tag}</Badge>
              </li>
            ))}
          </ul>
        ) : null}

        <Button asChild variant="outline" className="mt-10">
          <Link to="/blog">Volver al blog de JavaLimo++</Link>
        </Button>
      </Section>

      {relatedPosts.length > 0 ? (
        <Section tone="muted" ariaLabelledby="articulos-relacionados">
          <SectionHeader id="articulos-relacionados" title="Artículos relacionados" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((item) => (
              <li key={item.slug}>
                <ArticleCard post={item} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
