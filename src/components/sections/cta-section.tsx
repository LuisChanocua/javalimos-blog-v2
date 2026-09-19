import { Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { AppRoute } from "@/types/routes";

/** CTA final reutilizable en varias páginas. */
export function CtaSection({
  title = "La siguiente idea puede empezar contigo.",
  body = "Ven a aprender, comparte lo que sabes o propón una nueva forma de hacer comunidad alrededor de la tecnología.",
  ctaLabel = "Quiero participar",
  ctaTo = "/comunidad" as AppRoute,
}: {
  title?: string | undefined;
  body?: string | undefined;
  ctaLabel?: string | undefined;
  ctaTo?: AppRoute | undefined;
}) {
  return (
    <Section ariaLabelledby="cta-final" tone="muted">
      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-4xl">
          <p className="text-primary mb-5 text-xs font-bold uppercase">++ seguimos</p>
          <h2 id="cta-final" className="section-title">
            {title}
          </h2>
          <p className="text-muted-foreground lead-copy mt-6 max-w-2xl">{body}</p>
        </div>
        <Button asChild size="lg">
          <Link to={ctaTo}>{ctaLabel}</Link>
        </Button>
      </div>
    </Section>
  );
}
