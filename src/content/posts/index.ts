import type { BlogPost } from "@/types/content";

/**
 * Colección de artículos del blog.
 * Agregar un artículo = agregar un objeto aquí. La ruta /blog/{slug},
 * el listado y la metadata se generan automáticamente.
 */
export const posts: BlogPost[] = [
  {
    slug: "como-empezar-en-programacion-competitiva",
    title: "Cómo empezar en programación competitiva",
    excerpt: "Una ruta sencilla para dar los primeros pasos resolviendo problemas de algoritmia.",
    publishedAt: "2026-03-02",
    author: { name: "Equipo JavaLimo++" },
    category: "Algoritmia",
    tags: ["programación competitiva", "aprendizaje"],
    demo: true,
    body: [
      {
        type: "paragraph",
        text: "La programación competitiva consiste en resolver problemas con restricciones de tiempo y memoria. Más allá de los concursos, es una forma muy directa de mejorar tu forma de pensar y de escribir código.",
      },
      { type: "heading", text: "Primeros pasos" },
      {
        type: "list",
        items: [
          "Elige un lenguaje y quédate con él mientras aprendes lo básico.",
          "Resuelve problemas sencillos de manera constante, no en maratones aislados.",
          "Aprende a leer con calma el enunciado y a identificar las restricciones.",
          "Repasa las soluciones de otras personas después de resolver.",
        ],
      },
      { type: "heading", text: "Qué practicar al principio" },
      {
        type: "paragraph",
        text: "Entrada, salida, condicionales, ciclos, arreglos, cadenas y ordenamiento cubren buena parte de los problemas introductorios. Con esa base ya puedes acercarte a búsqueda binaria, recursión y estructuras de datos básicas.",
      },
      {
        type: "quote",
        text: "No se trata de resolver rápido desde el primer día, sino de entender bien y mejorar de forma sostenida.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function sortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
