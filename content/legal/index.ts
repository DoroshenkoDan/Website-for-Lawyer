import type { LegalDocId, LegalDocument } from "@/types/legal"
import { terms } from "./terms"
import { privacy } from "./privacy"

const legalDocuments: Record<LegalDocId, LegalDocument> = { terms, privacy }

export function getLegalDocument(id: LegalDocId): LegalDocument {
  return legalDocuments[id]
}
