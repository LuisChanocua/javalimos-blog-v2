import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string | undefined;
  id?: string | undefined;
  /** Etiqueta accesible cuando la sección no tiene encabezado visible. */
  ariaLabel?: string | undefined;
  ariaLabelledby?: string | undefined;
  size?: "default" | "narrow" | undefined;
  tone?: "default" | "muted" | undefined;
}

/** Bloque vertical estándar: ritmo de espaciado único para todas las páginas. */
export function Section({
  children,
  className,
  id,
  ariaLabel,
  ariaLabelledby,
  size,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-16 sm:py-24 lg:py-32",
        tone === "muted" && "bg-surface border-y border-border",
        className,
      )}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string | undefined;
  title: string;
  description?: string | undefined;
  id?: string | undefined;
  /** Nivel semántico del encabezado; por defecto h2. */
  as?: "h2" | "h3";
  align?: "start" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  as: Heading = "h2",
  align = "start",
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="text-primary mb-5 text-xs font-bold uppercase">{eyebrow}</p> : null}
      <Heading id={id} className="section-title">
        {title}
      </Heading>
      {description ? (
        <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
