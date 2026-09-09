import type { Experience, ExperienceCategory } from "@/types/content";

/**
 * Colección de experiencias.
 * Para publicar una nueva experiencia basta con agregar un objeto aquí
 * (o un archivo importado en este índice): la lista, los filtros y la
 * página de detalle se generan solos.
 *
 * Las entradas marcadas con `demo: true` son contenido de demostración.
 */
export const experiences: Experience[] = [
  {
    id: "exp-demo-1",
    slug: "sesion-de-entrenamiento-algoritmico",
    title: "Sesión de entrenamiento algorítmico",
    excerpt:
      "Contenido de demostración: una sesión de práctica para resolver problemas de algoritmia en equipo.",
    date: "2026-03-14",
    category: "concursos",
    tags: ["algoritmia", "práctica"],
    featured: true,
    demo: true,
    body: [
      {
        type: "paragraph",
        text: "Esta entrada es un ejemplo para mostrar cómo se ve una experiencia publicada. Reemplázala por una actividad real de la comunidad.",
      },
      {
        type: "heading",
        text: "Cómo reemplazar este contenido",
      },
      {
        type: "list",
        items: [
          "Edita o elimina esta entrada en la colección de experiencias.",
          "Agrega título, fecha, categoría y descripción reales.",
          "Suma fotografías con texto alternativo descriptivo.",
        ],
      },
    ],
    learnings: ["Ejemplo de sección de aprendizajes."],
  },
  {
    id: "exp-demo-2",
    slug: "taller-introductorio-de-programacion",
    title: "Taller introductorio de programación",
    excerpt:
      "Contenido de demostración: un taller abierto para quienes empiezan a programar, sin importar su carrera o institución.",
    date: "2026-02-20",
    category: "talleres",
    tags: ["taller", "principiantes"],
    demo: true,
    body: [
      {
        type: "paragraph",
        text: "Entrada de ejemplo. Sustitúyela por la memoria de un taller realmente impartido por la comunidad.",
      },
    ],
  },
];

export const experienceCategories: { value: ExperienceCategory; label: string }[] = [
  { value: "concursos", label: "Concursos" },
  { value: "eventos", label: "Eventos" },
  { value: "talleres", label: "Talleres" },
  { value: "charlas", label: "Charlas" },
  { value: "visitas", label: "Visitas" },
  { value: "comunidad", label: "Comunidad" },
  { value: "otros", label: "Otros" },
];

export function categoryLabel(value: ExperienceCategory): string {
  return experienceCategories.find((c) => c.value === value)?.label ?? "Otros";
}
