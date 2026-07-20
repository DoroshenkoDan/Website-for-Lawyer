import { PracticeArticleHero } from "./Sections/PracticeArticleHero"
import { PracticeArticleBody } from "./Sections/PracticeArticleBody"
import { PracticeArticleTips } from "./Sections/PracticeArticleTips"
import { PracticeArticleCta } from "./Sections/PracticeArticleCta"
import type { PracticeId } from "@/config/practices"

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
