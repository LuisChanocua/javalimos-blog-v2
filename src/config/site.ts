/** Configuración central del sitio. Única fuente de verdad de la marca. */
export const siteConfig = {
  name: "JavaLimo++",
  tagline: "Comunidad de programación y tecnología",
  description:
    "JavaLimo++ es una comunidad de programación, algoritmia y tecnología: aprendemos, compartimos y crecemos juntos.",
  shareImage: "/share.webp",
  locale: "es-MX",
  origin: {
    institution: "Instituto Tecnológico Superior de Huetamo (ITSH)",
    place: "Huetamo, Michoacán, México",
  },
  /** Correo de contacto. Reemplazar por el correo real de la comunidad. */
  email: "",
  socials: [] as { id: string; label: string; url: string }[],
} as const;

export const OPENNESS_NOTE =
  "Algunas actividades desarrolladas junto con instituciones educativas u otros organizadores pueden estar sujetas a requisitos particulares.";
