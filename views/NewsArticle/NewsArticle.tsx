import type { NewsItem } from "@/types/news"
import { ArticleHero } from "./Sections/ArticleHero"
import { ArticleBody } from "./Sections/ArticleBody"

export function NewsArticle({
  article,
  locale,
}: {
  article: NewsItem
  locale: string
}) {
  return (
    <>
      <ArticleHero article={article} locale={locale} />
      <ArticleBody html={article.body} fallback={article.excerpt} />
    </>
  )
}
