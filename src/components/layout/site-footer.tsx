import { Link } from "@tanstack/react-router";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface/50 mt-8 border-t">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-bold">
              Java<span className="text-primary">Limo++</span>
            </p>
            <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
              {siteConfig.description} Nacimos en {siteConfig.origin.place} y estamos abiertos a
              quien quiera aprender y compartir.
            </p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="text-muted-foreground border-border mt-10 border-t pt-6 text-xs">
          © {new Date().getFullYear()} {siteConfig.name}. Comunidad de programación y tecnología.
        </p>
      </Container>
    </footer>
  );
}
