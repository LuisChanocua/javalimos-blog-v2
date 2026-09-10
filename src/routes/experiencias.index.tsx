import { createFileRoute } from "@tanstack/react-router";
import { ExperiencesPage } from "@/pages/experiences/experiences-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experiencias/")({
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
  component: ExperiencesPage,
});
