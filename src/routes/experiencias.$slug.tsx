import { createFileRoute, notFound } from "@tanstack/react-router";
import { experiences } from "@/content/experiences";
import { ExperienceDetailPage } from "@/pages/experiences/experience-detail-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experiencias/$slug")({
  loader: ({ params }) => {
    const experience = experiences.find((item) => item.slug === params.slug);
    if (!experience) throw notFound();
    return { experience };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Experiencia no disponible | JavaLimo++" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { experience } = loaderData;
    const path = `/experiencias/${params.slug}`;
    return {
      ...pageMeta({
        title: `${experience.title} | Experiencias JavaLimo++`,
        description: experience.excerpt,
        path,
        type: "article",
      }),
      scripts: [
        jsonLd(
          breadcrumbLd([
            { name: "Inicio", path: "/" },
            { name: "Experiencias", path: "/experiencias" },
            { name: experience.title, path },
          ]),
        ),
      ],
    };
  },
  component: ExperienceDetailRoute,
});

function ExperienceDetailRoute() {
  const { experience } = Route.useLoaderData();
  return <ExperienceDetailPage experience={experience} />;
}
