import { createFileRoute } from "@tanstack/react-router";
import { experiencesRepository } from "@/domains/experiences/experiences-repository";
import { ExperiencesPage } from "@/pages/experiences/experiences-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experiencias/")({
  loader: async () => {
    const [experiences, categories] = await Promise.all([
      experiencesRepository.list(),
      experiencesRepository.listCategories(),
    ]);
    return { experiences, categories };
  },
  head: () => ({
    ...pageMeta({
      title: "Experiencias | Concursos, talleres y eventos de JavaLimo++",
      description:
        "La memoria de la comunidad: concursos de programación, talleres, charlas, visitas y encuentros en los que hemos participado.",
      path: "/experiencias",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Experiencias", path: "/experiencias" },
        ]),
      ),
    ],
  }),
  component: ExperiencesRoute,
});

function ExperiencesRoute() {
  const { experiences, categories } = Route.useLoaderData();
  return <ExperiencesPage experiences={experiences} categories={categories} />;
}
