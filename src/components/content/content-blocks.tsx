import type { ContentBlock } from "@/types/content";

/**
 * Renderiza bloques de contenido estructurado.
 * Aísla la presentación de la fuente de datos: el mismo contenido puede
 * venir después de un CMS o una API sin tocar este componente.
 */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="mt-10 text-xl font-semibold sm:text-2xl">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="text-muted-foreground list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-primary text-foreground border-l-2 pl-4 text-lg italic"
              >
                {block.text}
              </blockquote>
            );
          default:
            return (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
