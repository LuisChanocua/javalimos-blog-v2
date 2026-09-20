import { createFileRoute } from "@tanstack/react-router";
import { postsRepository } from "@/domains/blog/posts-repository";
import { BlogPage } from "@/pages/blog/blog-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await postsRepository.list();
    return { posts };
  },
  head: () => ({
    ...pageMeta({
      title: "Blog | Programación, algoritmos y tecnología | JavaLimo++",
      description:
        "Guías, apuntes y reflexiones sobre programación competitiva, algoritmos, herramientas y desarrollo, escritas por la comunidad JavaLimo++.",
      path: "/blog",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ),
    ],
  }),
  component: BlogRoute,
});

function BlogRoute() {
  const { posts } = Route.useLoaderData();
  return <BlogPage posts={posts} />;
}
