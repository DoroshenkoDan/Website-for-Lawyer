import type { NewsItem } from "@/types/news"
import { MediaArticleHero } from "./Sections/MediaArticleHero"
import { ArticleBody } from "./Sections/ArticleBody"

export function MediaArticle({
  article,
  locale,
}: {
  article: NewsItem
  locale: string
}) {
  return (
    <>
      <MediaArticleHero article={article} locale={locale} />
      <ArticleBody html={article.body} fallback={article.excerpt} />
    </>
  )
}
