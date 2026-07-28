import type { Block, Localized } from "@/types/practices"

export type LegalDocId = "terms" | "privacy"

export interface LegalSection {
  id: string
  title: Localized<string>
  body: Localized<Block[]>
}

export interface LegalDocument {
  id: LegalDocId
  sections: LegalSection[]
}
