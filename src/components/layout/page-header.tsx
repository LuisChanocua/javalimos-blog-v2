import type { ReactNode } from "react";
import { Container } from "./container";
import { Breadcrumbs, type Crumb } from "@/components/navigation/breadcrumbs";

interface PageHeaderProps {
  title: string;
  description?: string | undefined;
  eyebrow?: string | undefined;
  crumbs?: Crumb[] | undefined;
  children?: ReactNode;
}

/** Encabezado de página: único H1 de cada ruta. */
export function PageHeader({ title, description, eyebrow, crumbs, children }: PageHeaderProps) {
  return (
    <header className="border-border relative border-b">
      <div aria-hidden="true" className="surface-grid pointer-events-none absolute inset-0" />
      <Container className="relative py-10 sm:py-16">
        {crumbs ? <Breadcrumbs items={crumbs} className="mb-6" /> : null}
        {eyebrow ? (
          <p className="text-primary mb-3 font-mono text-xs tracking-[0.2em] uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        {description ? (
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </Container>
    </header>
  );
}
