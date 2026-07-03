import type { PracticeId } from "@/config/practices"

/** A value supplied in every supported locale (uk | en | pl). */
export type Localized<T> = Record<Loc, T>

/**
 * One block of rich body content. `text` fields may contain `**emphasis**`
 * markers, rendered in the accent color by RichContent.
 */
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "example" | "note"; text: string }

/** Rich content for one practice page (hero photo + body beside it). */
export interface PracticeContent {
  /** Path under `public/` for the hero photo; omit to render a placeholder. */
  image?: string
  /** Localized alt text for the hero photo; falls back to the title. */
  imageAlt?: Localized<string>
  /** Localized rich body shown beside the hero photo. */
  body?: Localized<Block[]>
}

/** One practical tip on the electronic-declarations page. */
export interface Tip {
  /** Stable slug used as the anchor id, e.g. "who-must-file". */
  id: string
  title: Localized<string>
  body: Localized<Block[]>
}

/** Re-export so consumers can import the practice id union from one place. */
export type { PracticeId }
