/** Áreas permanentes de actividad de la comunidad. */
export interface Area {
  id: string;
  title: string;
  summary: string;
  /** Detalle usado en la página "Lo que hacemos". */
  details?: string[];
  icon: "code" | "graduation" | "calendar" | "users" | "rocket";
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
  },
];

/** Área adicional que solo se muestra en la página "Lo que hacemos". */
export const projectsArea: Area = {
  id: "proyectos",
  title: "Proyectos y colaboración",
  summary:
    "Espacio preparado para futuras iniciativas desarrolladas por la comunidad.",
  details: [
    "Proyectos abiertos propuestos por integrantes.",
    "Colaboraciones con otras comunidades u organizaciones.",
  ],
  icon: "rocket",
};
