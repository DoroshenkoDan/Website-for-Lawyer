import type { PracticeId } from "@/config/practices"

export type Localized<T> = Record<Loc, T>

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "example" | "note"; text: string }

export interface PracticeContent {
  image?: string
  imageAlt?: Localized<string>
  body?: Localized<Block[]>
}

export interface Tip {
  id: string
  title: Localized<string>
  body: Localized<Block[]>
}

export type { PracticeId }
