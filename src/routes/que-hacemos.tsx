import { createFileRoute } from "@tanstack/react-router";
import { eventsRepository } from "@/domains/events/events-repository";
import { WhatWeDoPage } from "@/pages/activities/what-we-do-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/que-hacemos")({
  loader: async () => {
    const [upcomingEvents, eventLabels] = await Promise.all([
      eventsRepository.listUpcoming(),
      eventsRepository.getLabels(),
    ]);

    return { upcomingEvents, eventLabels };
  },
  head: () => ({
    ...pageMeta({
      title: "Lo que hacemos | JavaLimo++",
      description:
        "Practicamos programación competitiva, talleres, eventos tecnológicos y espacios de aprendizaje en comunidad.",
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
  component: WhatWeDoRoute,
});

function WhatWeDoRoute() {
  const { upcomingEvents, eventLabels } = Route.useLoaderData();

  return <WhatWeDoPage upcomingEvents={upcomingEvents} eventLabels={eventLabels} />;
}
