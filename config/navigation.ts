export interface NavItem {
  labelKey: string;
  href: string;
}

export const mainNav = [
  { labelKey: "home", href: "/" },
  { labelKey: "about", href: "/about" },
  { labelKey: "practices", href: "/practices" },
  { labelKey: "media", href: "/media" },
  { labelKey: "news", href: "/news" },
  { labelKey: "contacts", href: "/contacts" },
] as const satisfies readonly NavItem[];
