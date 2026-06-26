/**
 * The 8 legal practice areas.
 *
 * Each practice has a dedicated route folder under `app/[locale]/practices/<route>`
 * (pages can differ structurally — e.g. electronic-declarations has sub-categories).
 * Display text (title / description) comes from `messages` under `practices.items.<id>`.
 */
export interface Practice {
  /** Stable id, also the i18n key under `practices.items`. */
  id: string;
  /** URL path (relative to the app root, locale-prefixed automatically). */
  href: string;
  /** Whether this practice has sub-category pages. */
  hasCategories?: boolean;
}

export const practices = [
  {
    id: "electronic-declarations",
    href: "/practices/electronic-declarations",
    hasCategories: true,
  },
  { id: "anti-corruption", href: "/practices/anti-corruption" },
  { id: "administrative-law", href: "/practices/administrative-law" },
  { id: "mediation", href: "/practices/mediation" },
  { id: "medical-law", href: "/practices/medical-law" },
  { id: "civil-servants-support", href: "/practices/civil-servants-support" },
  { id: "civil-law", href: "/practices/civil-law" },
  { id: "criminal-law", href: "/practices/criminal-law" },
] as const satisfies readonly Practice[];

export type PracticeId = (typeof practices)[number]["id"];
