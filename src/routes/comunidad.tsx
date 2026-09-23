import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/pages/community/community-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    ...pageMeta({
      title: "Comunidad | JavaLimo++",
      description:
        "Conoce formas de participar, compartir ideas o colaborar con JavaLimo++, una comunidad abierta alrededor de la programación.",
      path: "/comunidad",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Comunidad", path: "/comunidad" },
        ]),
      ),
    ],
  }),
  component: CommunityPage,
});
