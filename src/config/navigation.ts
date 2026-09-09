/** Navegación centralizada: agregar una ruta aquí la publica en header y footer. */
export interface NavItem {
  label: string;
  to: string;
  description?: string;
}

export const mainNav: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Lo que hacemos", to: "/que-hacemos" },
  { label: "Experiencias", to: "/experiencias" },
  { label: "Blog", to: "/blog" },
  { label: "Comunidad", to: "/comunidad" },
];

export const primaryCta = { label: "Participa", to: "/comunidad" };

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Comunidad",
    items: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Lo que hacemos", to: "/que-hacemos" },
      { label: "Comunidad", to: "/comunidad" },
    ],
  },
  {
    title: "Contenido",
    items: [
      { label: "Experiencias", to: "/experiencias" },
      { label: "Blog", to: "/blog" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
];
