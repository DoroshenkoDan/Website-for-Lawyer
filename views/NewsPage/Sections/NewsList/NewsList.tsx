import { getTranslations } from "next-intl/server"
import { readNewsPage } from "@/lib/api/read"
import { ArticleCard } from "./ArticleCard"
import { NewsPagination } from "./NewsPagination"

export async function NewsList({ page }: { page: number }) {
  const t = await getTranslations("news")
  const tc = await getTranslations("common")
  const { items, totalPages } = await readNewsPage(page, 10)

  if (items.length === 0) {
    return <p className="text-graphite/60 text-center py-6">{tc("empty")}</p>
  }

  return (
    <>
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
      <NewsPagination page={page} totalPages={totalPages} />
    </>
  )
}
