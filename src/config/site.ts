/** Configuración central del sitio. Única fuente de verdad de la marca. */
export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/javalimocpp/",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/javalimocpp",
  },
] as const;

export const academicReferenceLinks = [
  {
    id: "itsh-omegaup",
    label: "ITSH en omegaUp",
    url: "https://omegaup.com/schools/profile/4062/",
  },
] as const;

export const siteConfig = {
  name: "JavaLimo++",
  tagline: "Comunidad de programación",
  description:
    "Comunidad de programación, aprendizaje y colaboración para practicar, compartir conocimiento y crecer con otras personas.",
  shareImage: "/share.webp",
  locale: "es-MX",
  origin: {
    institution: "Instituto Tecnológico Superior de Huetamo (ITSH)",
    place: "Huetamo, Michoacán, México",
  },
  /** Correo de contacto. Reemplazar por el correo real de la comunidad. */
  email: "",
  socials: socialLinks,
} as const;

export const OPENNESS_NOTE =
  "Algunas actividades desarrolladas junto con instituciones educativas u otros organizadores pueden estar sujetas a requisitos particulares.";
