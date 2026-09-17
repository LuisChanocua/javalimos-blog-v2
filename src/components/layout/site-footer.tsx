import { Link } from "@tanstack/react-router";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-border bg-accent text-accent-foreground border-t">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-bold">JavaLimo++</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-75">
              {siteConfig.description} Aprendemos, resolvemos y compartimos conocimiento en
              comunidad.
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
                      className="text-sm opacity-70 transition-opacity hover:opacity-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-10 border-t border-accent-foreground/20 pt-6 text-xs opacity-65">
          © {new Date().getFullYear()} {siteConfig.name}. Comunidad de programación y tecnología.
        </p>
      </Container>
    </footer>
  );
}
