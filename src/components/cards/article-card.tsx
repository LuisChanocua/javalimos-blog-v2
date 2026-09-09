import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { formatDate, readingMinutes } from "@/lib/format";
import type { BlogPost } from "@/types/content";

export function ArticleCard({ post }: { post: BlogPost }) {
  const minutes = readingMinutes(post.body);

  return (
    <article className="group border-border bg-card hover:border-primary/50 relative flex flex-col rounded-xl border p-5 transition-colors">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{post.category}</Badge>
        {post.demo ? <Badge variant="outline">Contenido de ejemplo</Badge> : null}
      </div>

      <h3 className="mt-3 text-lg font-semibold">
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {post.title}
        </Link>
      </h3>

      <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">{post.excerpt}</p>

      <p className="text-muted-foreground mt-4 text-xs">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden="true"> · </span>
        {minutes} min de lectura
      </p>
    </article>
  );
}
