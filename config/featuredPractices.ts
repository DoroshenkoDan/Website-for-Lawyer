import type { PracticeId } from "./practices";

/**
 * The curated subset of practices showcased on the homepage
 * (`PracticesPreview`). Array order defines the displayed numbering (01, 02, …).
 *
 * Only structural / asset data lives here — the marketing copy
 * (name, question, tagline, description) comes from `messages` under
 * `home.practicesPreview.cards.<practiceId>`, and the link `href` is resolved
 * from `config/practices` by `practiceId`.
 */
export interface FeaturedPractice {
  /** Must match an id in `config/practices`. */
  practiceId: PracticeId;
  /** Thumbnail path under `public/`; `null` renders a placeholder. */
  image: string | null;
}

export const featuredPractices = [
  { practiceId: "electronic-declarations", image: null },
  { practiceId: "civil-servants-support", image: null },
  { practiceId: "criminal-law", image: null },
] as const satisfies readonly FeaturedPractice[];
