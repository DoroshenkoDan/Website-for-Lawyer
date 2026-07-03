import { PracticeArticleHero } from "./Sections/PracticeArticleHero"
import { PracticeArticleBody } from "./Sections/PracticeArticleBody"
import { PracticeArticleTips } from "./Sections/PracticeArticleTips"
import { PracticeArticleCta } from "./Sections/PracticeArticleCta"
import type { PracticeId } from "@/config/practices"

/**
 * A single practice page. All practices share Hero + Body + CTA; only
 * electronic-declarations inserts the practical-tips longread before the CTA.
 */
export function PracticeArticle({ id }: { id: PracticeId }) {
  return (
    <>
      <PracticeArticleHero id={id} />
      <PracticeArticleBody id={id} />
      {id === "electronic-declarations" && <PracticeArticleTips />}
      <PracticeArticleCta />
    </>
  )
}
