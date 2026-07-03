import type { PracticeId } from "@/config/practices"
import type { PracticeContent } from "@/types/practices"
import { antiCorruption } from "./anti-corruption"
import { administrativeLaw } from "./administrative-law"
import { mediation } from "./mediation"
import { medicalLaw } from "./medical-law"
import { civilServantsSupport } from "./civil-servants-support"
import { civilLaw } from "./civil-law"
import { criminalLaw } from "./criminal-law"
import { electronicDeclarations } from "./electronic-declarations"

/**
 * Rich content for practice pages. Add an entry per practice as real copy
 * arrives (uk provided by the client, en/pl translated). Pages fall back to
 * the localized `short` message + a placeholder photo when a practice has no
 * entry yet, so all 8 pages render before content is authored.
 */
const practiceContent: Partial<Record<PracticeId, PracticeContent>> = {
  "electronic-declarations": electronicDeclarations,
  "anti-corruption": antiCorruption,
  "administrative-law": administrativeLaw,
  mediation,
  "medical-law": medicalLaw,
  "civil-servants-support": civilServantsSupport,
  "civil-law": civilLaw,
  "criminal-law": criminalLaw,
}

export function getPracticeContent(
  id: PracticeId,
): PracticeContent | undefined {
  return practiceContent[id]
}
