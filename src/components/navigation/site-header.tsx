import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { mainNav, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display flex min-w-0 items-center gap-2.5 text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.webp"
            alt="JavaLimo++"
            width="40"
            height="40"
            decoding="async"
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <span aria-hidden="true" className="whitespace-nowrap">
            Java<span className="text-primary">Limo++</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.to)
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link to={primaryCta.to}>{primaryCta.label}</Link>
          </Button>
        </nav>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </Button>
      </Container>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-border bg-background border-t lg:hidden"
      >
        <Container className="py-4">
          <nav aria-label="Navegación principal móvil">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.to) ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base font-medium",
                      isActive(item.to)
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:bg-secondary/60",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild className="mt-3 w-full">
            <Link to={primaryCta.to} onClick={() => setOpen(false)}>
              {primaryCta.label} en {siteConfig.name}
            </Link>
          </Button>
        </Container>
      </div>
    </header>
  );
}
