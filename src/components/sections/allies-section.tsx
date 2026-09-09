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
  eyebrow?: string;
  title: string;
  description?: string;
  items: Ally[];
  emptyDescription: string;
}) {
  return (
    <Section ariaLabelledby={id} tone="muted">
      <SectionHeader id={id} eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">
        {items.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((ally) => (
              <li key={ally.id} className="border-border bg-card rounded-xl border p-5">
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
                <h3 className="font-semibold">
                  {ally.url ? (
                    <a
                      href={ally.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:text-primary transition-colors"
                    >
                      {ally.name}
                    </a>
                  ) : (
                    ally.name
                  )}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {ally.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState title="Sección preparada, sin datos todavía" description={emptyDescription} />
        )}
      </div>
    </Section>
  );
}
