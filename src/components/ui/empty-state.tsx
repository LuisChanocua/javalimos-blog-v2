import type { ReactNode } from "react";

/** Estado vacío explícito: evita inventar contenido cuando aún no existe. */
export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode | undefined;
}) {
  return (
    <div className="border-border border-y py-9">
      <p className="font-display text-xl font-semibold">{title}</p>
      <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
        {description}
      </p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
