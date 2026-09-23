import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { shouldShowDemoContent } from "@/config/content-source";
import { formatDate, readingMinutes } from "@/lib/format";
import type { BlogPost } from "@/types/content";

export function ArticleCard({ post }: { post: BlogPost }) {
  const minutes = readingMinutes(post.body);

  return (
    <article className="group border-border relative grid gap-5 py-7 transition-colors md:grid-cols-[minmax(0,1.5fr)_minmax(14rem,.5fr)] md:items-end">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          {shouldShowDemoContent && post.demo ? (
            <Badge variant="outline">Contenido de ejemplo</Badge>
          ) : null}
        </div>

        <h3 className="mt-4 text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-semibold">
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <p className="text-muted-foreground text-xs md:text-right">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden="true"> · </span>
        {minutes} min de lectura
      </p>
    </article>
  );
}
