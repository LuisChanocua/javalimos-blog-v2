/**
 * Modelos de contenido de JavaLimo++.
 * La UI consume estos tipos, nunca la fuente de datos concreta.
 */

export type ExperienceCategory =
  "concursos" | "eventos" | "talleres" | "charlas" | "visitas" | "comunidad" | "otros";

export interface ImageAsset {
  /** URL o ruta pública de la imagen. */
  src: string;
  /** Texto alternativo descriptivo. Vacío solo si es decorativa. */
  alt: string;
  width?: number;
  height?: number;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Cuerpo en bloques estructurados, independiente del renderizador. */
  body?: ContentBlock[];
  /** Fecha ISO (YYYY-MM-DD). */
  date: string;
  category: ExperienceCategory;
  location?: string;
  coverImage?: ImageAsset;
  gallery?: ImageAsset[];
  participants?: string[];
  results?: string[];
  learnings?: string[];
  tags?: string[];
  featured?: boolean;
  /** Contenido de demostración, reemplazable por datos reales. */
  demo?: boolean;
}

export interface Author {
  name: string;
  role?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: ContentBlock[];
  /** Fecha ISO (YYYY-MM-DD). */
  publishedAt: string;
  author: Author;
  category: string;
  tags?: string[];
  coverImage?: ImageAsset;
  seo?: {
    title?: string;
    description?: string;
  };
  demo?: boolean;
}

export type ActivityStatus = "programada" | "por-confirmar" | "finalizada";
export type ActivityMode = "presencial" | "en-linea" | "hibrida";
export type ParticipationType =
  "abierto-al-publico" | "registro-requerido" | "actividad-institucional";

export interface Activity {
  id: string;
  name: string;
  description: string;
  /** Fecha ISO o etiqueta textual cuando aún no hay fecha cerrada. */
  date?: string;
  dateLabel?: string;
  type: string;
  mode: ActivityMode;
  location?: string;
  status: ActivityStatus;
  participation: ParticipationType;
}

export interface Ally {
  id: string;
  name: string;
  description: string;
  url?: string;
  logo?: ImageAsset;
}

/** Bloques de contenido: mantienen el texto libre de HTML crudo. */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };
