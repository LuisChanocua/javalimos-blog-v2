import { createFileRoute } from "@tanstack/react-router";
import { postsRepository } from "@/domains/blog/posts-repository";
import { HomePage } from "@/pages/home/home-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loader: async () => {
    const recentPosts = (await postsRepository.list()).slice(0, 3);
    return { recentPosts };
  },
  head: () =>
    pageMeta({
      title: "JavaLimo++ | Comunidad de programación y tecnología",
      description:
        "Comunidad de programación, algoritmia y tecnología abierta a estudiantes, egresados, autodidactas y profesionales. Aprendemos, compartimos y crecemos juntos.",
      path: "/",
    }),
  component: HomeRoute,
});

function HomeRoute() {
  const { recentPosts } = Route.useLoaderData();
  return <HomePage recentPosts={recentPosts} />;
}
