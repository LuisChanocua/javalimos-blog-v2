import { Section, SectionHeader } from "@/components/layout/section";
import { EmptyState } from "@/components/ui/empty-state";
import type { Ally } from "@/types/content";

/**
 * Sección reutilizable para aliados o comunidades que nos inspiran.
 * No inventa datos: si la colección está vacía muestra un estado explícito.
 */
export function AlliesSection({
  id,
  eyebrow,
  title,
  description,
  items,
  emptyDescription,
}: {
  id: string;
  eyebrow?: string | undefined;
  title: string;
  description?: string | undefined;
  items: readonly Ally[];
  emptyDescription: string;
}) {
  return (
    <Section ariaLabelledby={id} tone="muted">
      <SectionHeader id={id} eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">
        {items.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((ally) => {
              const cardContent = (
                <>
                  {ally.logo ? (
                    <img
                      src={ally.logo.src}
                      alt={ally.logo.alt}
                      width={ally.logo.width ?? 120}
                      height={ally.logo.height ?? 40}
                      loading="lazy"
                      decoding="async"
                      className="mb-4 h-10 w-auto"
                    />
                  ) : null}
                  <h3 className="font-semibold">{ally.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {ally.description}
                  </p>
                </>
              );

              return (
                <li key={ally.id}>
                  {ally.url ? (
                    <a
                      href={ally.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={`Conocer ${ally.name}`}
                      className="border-border bg-card hover:border-primary/50 focus-visible:ring-ring block h-full rounded-xl border p-5 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div className="border-border bg-card h-full rounded-xl border p-5">
                      {cardContent}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <EmptyState title="Aún no hay información publicada" description={emptyDescription} />
        )}
      </div>
    </Section>
  );
}
