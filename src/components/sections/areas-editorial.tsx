import { Container } from "@/components/layout/container";
import { MediaFrame } from "@/components/media/media-frame";
import type { Area } from "@/content/site/areas";
import { cn } from "@/lib/utils";

/**
 * Áreas de actividad como bloques editoriales numerados y alternados.
 * En móvil se convierte en un flujo vertical natural.
 */
export function AreasEditorial({
  items,
  showDetails,
  labelledby,
}: {
  items: Area[];
  showDetails?: boolean | undefined;
  labelledby?: string | undefined;
}) {
  return (
    <ol aria-labelledby={labelledby} className="divide-border divide-y">
      {items.map((area, index) => {
        const reversed = index % 2 === 1;
        return (
          <li key={area.id}>
            <Container className="py-14 sm:py-20">
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
                  <p className="type-meta text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="type-title mt-5">{area.title}</h3>
                  <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed lg:text-lg">
                    {area.summary}
                  </p>
                  {showDetails && area.details ? (
                    <ul className="text-muted-foreground mt-6 max-w-xl space-y-2 text-sm">
                      {area.details.map((detail) => (
                        <li key={detail} className="border-border border-t pt-2">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
                  <MediaFrame
                    placeholder="Espacio para fotografía de la comunidad"
                    ratio="portrait"
                    shape={index % 3 === 0 ? "hex" : "rect"}
                    className="mx-auto max-w-sm"
                  />
                </div>
              </div>
            </Container>
          </li>
        );
      })}
    </ol>
  );
}
