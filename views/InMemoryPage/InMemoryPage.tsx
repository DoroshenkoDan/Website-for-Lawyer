import { TributeHero } from "./Sections/TributeHero"
import { Interview } from "./Sections/Interview"
import { ClosingQuote } from "./Sections/ClosingQuote"

export function InMemoryPage() {
  return (
    <>
      <TributeHero />
      <Interview />
      <ClosingQuote />
    </>
  )
}
