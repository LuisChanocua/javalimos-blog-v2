import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/pages/community/community-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    ...pageMeta({
      title: "Comunidad | Participa y colabora con JavaLimo++",
      description:
        "Formas de participar, unirte, compartir o colaborar con JavaLimo++, una comunidad abierta a personas de cualquier carrera o institución.",
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
