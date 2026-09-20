import { createFileRoute } from "@tanstack/react-router";
import { experiencesRepository } from "@/domains/experiences/experiences-repository";
import { postsRepository } from "@/domains/blog/posts-repository";
import { HomePage } from "@/pages/home/home-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [posts, experiences, experienceCategories] = await Promise.all([
      postsRepository.list(),
      experiencesRepository.list(),
      experiencesRepository.listCategories(),
    ]);
    const recentPosts = posts.slice(0, 3);
    const recentExperiences = [...experiences]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3);
    return { recentPosts, recentExperiences, experienceCategories };
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
  const { recentPosts, recentExperiences, experienceCategories } = Route.useLoaderData();
  return (
    <HomePage
      recentPosts={recentPosts}
      recentExperiences={recentExperiences}
      experienceCategories={experienceCategories}
    />
  );
}
