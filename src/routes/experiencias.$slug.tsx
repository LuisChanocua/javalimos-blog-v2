import { createFileRoute, notFound } from "@tanstack/react-router";
import { experiencesRepository } from "@/domains/experiences/experiences-repository";
import { ExperienceDetailPage } from "@/pages/experiences/experience-detail-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experiencias/$slug")({
  loader: async ({ params }) => {
    const experience = await experiencesRepository.findBySlug(params.slug);
    if (!experience) throw notFound();
    const [experiences, categories] = await Promise.all([
      experiencesRepository.list(),
      experiencesRepository.listCategories(),
    ]);
    const relatedExperiences = experiences
      .filter((item) => item.slug !== experience.slug && item.category === experience.category)
      .slice(0, 3);
    return { experience, relatedExperiences, categories };
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
  const { experience, relatedExperiences, categories } = Route.useLoaderData();
  return (
    <ExperienceDetailPage
      experience={experience}
      relatedExperiences={relatedExperiences}
      categories={categories}
    />
  );
}
