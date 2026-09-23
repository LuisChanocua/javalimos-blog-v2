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
      title: "Blog | JavaLimo++",
      description:
        "Ideas, guías y reflexiones de JavaLimo++ sobre programación, algoritmia, aprendizaje, tecnología y vida en comunidad.",
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
