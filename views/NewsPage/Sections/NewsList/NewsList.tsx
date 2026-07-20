import { getTranslations } from "next-intl/server"
import { readNewsList } from "@/lib/api/read"
import { ArticleCard } from "./ArticleCard"

export async function NewsList({ locale }: { locale: string }) {
  const t = await getTranslations("news")
  const tc = await getTranslations("common")
  const items = await readNewsList(locale)

  if (items.length === 0) {
    return <p className="text-graphite/60 text-center py-6">{tc("empty")}</p>
  }

  return (
    <div className="flex flex-col gap-10">
      {items.map((item) => (
        <ArticleCard
          key={item.id}
          href={`/news/${item.slug}`}
          title={item.title}
          excerpt={item.excerpt}
          image={item.coverImage ?? null}
          readLabel={t("readArticle")}
        />
      ))}
    </div>
  )
}
