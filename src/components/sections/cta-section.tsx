import { Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { OPENNESS_NOTE } from "@/config/site";
import type { AppRoute } from "@/types/routes";

/** CTA final reutilizable en varias páginas. */
export function CtaSection({
  title = "Una comunidad abierta a más personas",
  body = "No necesitas estudiar Ingeniería en Sistemas ni pertenecer al ITSH para acercarte a JavaLimo++.",
  ctaLabel = "Quiero participar",
  ctaTo = "/comunidad" as AppRoute,
}: {
  title?: string | undefined;
  body?: string | undefined;
  ctaLabel?: string | undefined;
  ctaTo?: AppRoute | undefined;
}) {
  return (
    <Section ariaLabelledby="cta-final">
      <div className="border-border bg-surface relative overflow-hidden rounded-2xl border p-8 sm:p-12">
        <div aria-hidden="true" className="surface-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-2xl">
          <h2 id="cta-final" className="text-2xl font-semibold sm:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">{body}</p>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{OPENNESS_NOTE}</p>
          <Button asChild size="lg" className="mt-7">
            <Link to={ctaTo}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
