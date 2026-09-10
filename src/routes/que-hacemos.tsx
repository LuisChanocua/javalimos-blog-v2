import { createFileRoute } from "@tanstack/react-router";
import { WhatWeDoPage } from "@/pages/activities/what-we-do-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/que-hacemos")({
  head: () => ({
    ...pageMeta({
      title: "Lo que hacemos | Áreas de actividad de JavaLimo++",
      description:
        "Programación competitiva, talleres, eventos tecnológicos, proyectos y comunidad: las áreas permanentes de trabajo de JavaLimo++.",
      path: "/que-hacemos",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Lo que hacemos", path: "/que-hacemos" },
        ]),
      ),
    ],
  }),
  component: WhatWeDoPage,
});
