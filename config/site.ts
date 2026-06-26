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
    email: "",
    phone: "",
    address: "",
  },
  /** Social links (empty = hidden). */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
