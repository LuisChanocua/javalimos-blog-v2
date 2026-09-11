import { cn } from "@/lib/utils";

/**
 * Isotipo hexagonal de JavaLimo++.
 * Recurso gráfico vectorial reutilizable (marca, separadores, fondos).
 */
export function Isotype({
  className,
  title,
}: {
  className?: string | undefined;
  title?: string | undefined;
}) {
  return (
    <svg
      viewBox="0 0 100 112"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("text-primary", className)}
    >
      {title ? <title>{title}</title> : null}
      <polygon
        points="50,2 96,28 96,84 50,110 4,84 4,28"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <polygon
        points="50,20 80,37 80,71 50,88 20,71 20,37"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M38 44v20a8 8 0 0 1-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M56 46v20M46 56h20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** Marca tipográfica del sitio. */
export function Wordmark({ className }: { className?: string | undefined }) {
  return (
    <span className={cn("font-display font-bold tracking-tight", className)}>
      Java<span className="text-primary">Limo</span>
      <span className="text-brand-dark">++</span>
    </span>
  );
}
