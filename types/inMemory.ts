export type Localized<T> = Record<Loc, T>

export type TributeSegment =
  | { type: "lead"; text: string }
  | { type: "qa"; question: string; answer: string[] }
  | { type: "para"; text: string }
  | { type: "aside"; text: string }
  | { type: "figure"; image: string; alt: string; quote: string }

export interface TributeContent {
  heroImage: string
  heroQuote: Localized<string>
  heroAlt: Localized<string>
  interview: Localized<TributeSegment[]>
  closingQuote: Localized<string>
}
