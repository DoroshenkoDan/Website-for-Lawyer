export interface Practice {
  id: string;
  href: string;
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
