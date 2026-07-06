/** A value supplied in every supported locale (uk | en | pl). */
export type Localized<T> = Record<Loc, T>

/**
 * One segment of the tribute long-read, rendered in order by the Interview
 * section. The interview is a Q&A, broken up by highlighted lines and
 * pull-quote photographs.
 */
export type TributeSegment =
  /** Opening biographical note that introduces the interview. */
  | { type: "lead"; text: string }
  /** A question with one or more answer paragraphs. */
  | { type: "qa"; question: string; answer: string[] }
  /** A standalone paragraph continuing the previous answer (no question). */
  | { type: "para"; text: string }
  /** A short highlighted line pulled from the conversation. */
  | { type: "aside"; text: string }
  /** A portrait with an overlaid pull-quote drawn from the interview. */
  | { type: "figure"; image: string; alt: string; quote: string }

/** All localized copy for the "In memory" tribute page. */
export interface TributeContent {
  /** Path under `public/` for the hero portrait (photo #1). */
  heroImage: string
  /** Headline quote shown over the hero portrait. */
  heroQuote: Localized<string>
  /** Alt text for the hero portrait (photo #1). */
  heroAlt: Localized<string>
  /** Ordered segments: bio note, Q&A, asides and pull-quote photos. */
  interview: Localized<TributeSegment[]>
  /** Closing quote shown in the dark band at the foot of the page. */
  closingQuote: Localized<string>
}
