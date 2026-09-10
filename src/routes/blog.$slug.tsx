import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPost } from "@/content/posts";
import { PostPage } from "@/pages/blog/post-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artículo no disponible | JavaLimo++" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    return {
      ...pageMeta({
        title: post.seo?.title ?? `${post.title} | Blog JavaLimo++`,
        description: post.seo?.description ?? post.excerpt,
        path,
        type: "article",
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          author: { "@type": "Person", name: post.author.name },
          mainEntityOfPage: path,
        }),
        jsonLd(
          breadcrumbLd([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ),
      ],
    };
  },
  component: PostRoute,
});

function PostRoute() {
  const { post } = Route.useLoaderData();
  return <PostPage post={post} />;
}
