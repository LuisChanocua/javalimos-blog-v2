import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, School, type LucideIcon } from "lucide-react";
import { footerNav } from "@/config/navigation";
import { academicReferenceLinks, siteConfig } from "@/config/site";
import { Container } from "./container";

const footerLinkClass =
  "rounded-sm text-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-foreground";

const footerExternalLinkClass = `${footerLinkClass} inline-flex items-center gap-2`;

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
} satisfies Record<(typeof siteConfig.socials)[number]["id"], LucideIcon>;

function FooterSocialLink({ social }: { social: (typeof siteConfig.socials)[number] }) {
  const Icon = socialIcons[social.id];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={footerExternalLinkClass}
    >
      <Icon className="size-4 md:size-5" aria-hidden="true" />
      <span>{social.label}</span>
    </a>
  );
}

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
                    <Link to={item.to} className={footerLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Síguenos">
            <h2 className="text-sm font-semibold">Síguenos</h2>
            <ul className="mt-4 space-y-2">
              {siteConfig.socials.map((social) => (
                <li key={social.id}>
                  <FooterSocialLink social={social} />
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Referencia académica">
            <h2 className="text-sm font-semibold">Referencia académica</h2>
            <ul className="mt-4 space-y-2">
              {academicReferenceLinks.map((reference) => (
                <li key={reference.id}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerExternalLinkClass}
                  >
                    <School className="size-4 md:size-5" aria-hidden="true" />
                    <span>{reference.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-accent-foreground/20 pt-6 text-xs opacity-65">
          © {new Date().getFullYear()} {siteConfig.name}. Comunidad de programación y tecnología.
        </p>
      </Container>
    </footer>
  );
}
