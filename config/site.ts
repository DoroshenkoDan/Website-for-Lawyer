/**
 * Global, locale-independent site configuration.
 * Locale-specific strings live in `messages/*.json`.
 */
export const siteConfig = {
  /** Public base URL, used for canonical links, sitemap and OG tags. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Attorney / brand name. */
  attorneyName: "Regina",
  /** Contact details (override via content later). */
  contacts: {
    email: "r.guseinova.lawyer@gmail.com",
    phone: "",
    address: "",
  },
  /** Social links (empty = falls back to "#" until provided). */
  social: {
    facebook: "",
    youtube: "",
    linkedin: "",
  },
  /** Professional partners / associations shown in the footer. */
  partners: [
    { name: "Національна колегія адвокатів", href: "" },
    { name: "Яр.ВАЛ", href: "" },
    { name: "Легітимус", href: "" },
    { name: "Національна асоціація медіаторів України", href: "" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
