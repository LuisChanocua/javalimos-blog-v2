import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/about/about-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    ...pageMeta({
      title: "Nosotros | JavaLimo++",
      description:
        "Conoce la historia, origen y principios de JavaLimo++, una comunidad para aprender tecnología y compartir conocimiento.",
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
