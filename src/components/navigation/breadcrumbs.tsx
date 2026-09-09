import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  /** Sin `to` se considera la página actual. */
  to?: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Ruta de navegación" className={cn("text-muted-foreground text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
              {!isLast ? <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
