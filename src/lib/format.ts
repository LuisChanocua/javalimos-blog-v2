import { siteConfig } from "@/config/site";
import type { ContentBlock } from "@/types/content";

/** Fecha ISO -> texto legible en español. Devuelve el valor original si no es válida. */
export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(siteConfig.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

const WORDS_PER_MINUTE = 200;

/** Tiempo estimado de lectura a partir de los bloques reales del artículo. */
export function readingMinutes(body: ContentBlock[]): number {
  const words = body.reduce((total, block) => {
    const text = block.type === "list" ? block.items.join(" ") : block.text;
    return total + text.trim().split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
