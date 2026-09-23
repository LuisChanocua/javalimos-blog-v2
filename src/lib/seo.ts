import { siteConfig } from "@/config/site";

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}

type MetaTag = Record<string, string>;

/** Construye meta + canonical coherentes para una ruta indexable. */
export function pageMeta({ title, description, path, type = "website", noindex }: MetaInput): {
  meta: MetaTag[];
  links: { rel: string; href: string }[];
} {
  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:image", content: siteConfig.shareImage },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: siteConfig.shareImage },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex" });

  return { meta, links: [{ rel: "canonical", href: path }] };
}

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: "/",
};
