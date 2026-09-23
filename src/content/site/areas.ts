/** Áreas permanentes de actividad de la comunidad. */
import type { ImageAsset } from "@/types/content";

export interface Area {
  id: string;
  title: string;
  summary: string;
  /** Detalle usado en la página "Lo que hacemos". */
  details?: string[];
  icon: "code" | "graduation" | "calendar" | "users" | "rocket";
  image?: ImageAsset;
}

export const areas: Area[] = [
  {
    id: "programacion-competitiva",
    title: "Programación competitiva",
    summary:
      "Entrenamos, resolvemos problemas y participamos en concursos de programación y algoritmia.",
    details: [
      "Entrenamientos y sesiones de práctica.",
      "Algoritmia y resolución de problemas.",
      "Simulacros y participación en concursos.",
    ],
    icon: "code",
    image: {
      src: "/images/areas/programacion-competitiva.webp",
      alt: "Actividad de programación competitiva de JavaLimo++",
    },
  },
  {
    id: "talleres",
    title: "Talleres y aprendizaje",
    summary:
      "Creamos espacios para aprender y compartir conocimientos relacionados con programación, desarrollo y tecnología.",
    details: [
      "Talleres de programación y herramientas.",
      "Sesiones de desarrollo y buenas prácticas.",
      "Temas de tecnología propuestos por la comunidad.",
    ],
    icon: "graduation",
    image: {
      src: "/images/areas/talleres-y-aprendizaje.webp",
      alt: "Taller de aprendizaje sobre programación y herramientas",
    },
  },
  {
    id: "eventos",
    title: "Eventos tecnológicos",
    summary:
      "Participamos y colaboramos en encuentros, congresos, actividades y experiencias relacionadas con tecnología.",
    details: [
      "Congresos, encuentros y exposiciones.",
      "Hackathons y conferencias.",
      "Visitas y actividades relacionadas con tecnología.",
    ],
    icon: "calendar",
    image: {
      src: "/images/areas/eventos-tecnologicos.webp",
      alt: "Entrada de un evento tecnológico con asistentes",
    },
  },
  {
    id: "comunidad",
    title: "Comunidad",
    summary:
      "Conectamos estudiantes, egresados, mentores y personas interesadas en aprender y compartir.",
    details: [
      "Colaboración entre estudiantes y egresados.",
      "Mentorías y acompañamiento.",
      "Vínculos con otras comunidades.",
    ],
    icon: "users",
    image: {
      src: "/images/areas/comunidad.webp",
      alt: "Actividad de comunidad de JavaLimo++",
    },
  },
];

/** Área adicional que solo se muestra en la página "Lo que hacemos". */
export const projectsArea: Area = {
  id: "proyectos",
  title: "Proyectos y colaboración",
  summary: "Espacio preparado para futuras iniciativas desarrolladas por la comunidad.",
  details: [
    "Proyectos abiertos propuestos por integrantes.",
    "Colaboraciones con otras comunidades u organizaciones.",
  ],
  icon: "rocket",
};
