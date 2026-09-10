import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/contact/contact-page";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    ...pageMeta({
      title: "Contacto | Escríbele a JavaLimo++",
      description:
        "Contacta a JavaLimo++ para participar en actividades, proponer un taller o charla, o colaborar como escuela, comunidad u organización.",
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
