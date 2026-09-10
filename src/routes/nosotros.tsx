import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/about/about-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    ...pageMeta({
      title: "Nosotros | Historia y comunidad JavaLimo++",
      description:
        "Cómo nació JavaLimo++, por qué existe y los principios que sostienen a esta comunidad de programación y tecnología.",
      path: "/nosotros",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});
