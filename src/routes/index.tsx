import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/home/home-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "JavaLimo++ | Comunidad de programación y tecnología",
      description:
        "Comunidad de programación, algoritmia y tecnología abierta a estudiantes, egresados, autodidactas y profesionales. Aprendemos, compartimos y crecemos juntos.",
      path: "/",
    }),
  component: HomePage,
});
