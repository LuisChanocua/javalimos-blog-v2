import { createFileRoute, notFound } from "@tanstack/react-router";
import { postsRepository } from "@/domains/blog/posts-repository";
import { PostPage } from "@/pages/blog/post-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await postsRepository.findBySlug(params.slug);
    if (!post) throw notFound();
    const posts = await postsRepository.list();
    const relatedPosts = posts
      .filter((item) => item.slug !== post.slug && item.category === post.category)
      .slice(0, 3);
    return { post, relatedPosts };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artículo no disponible | JavaLimo++" },
          { name: "robots", content: "noindex" },
        ],
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
  const { post, relatedPosts } = Route.useLoaderData();
  return <PostPage post={post} relatedPosts={relatedPosts} />;
}
