import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/contact/contact-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    ...pageMeta({
      title: "Contacto | JavaLimo++",
      description:
        "Escríbele a JavaLimo++ para participar, colaborar o proponer actividades relacionadas con programación y tecnología.",
      path: "/contacto",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ]),
      ),
    ],
  }),
  component: ContactPage,
});
