"use client"

import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { useNews } from "@/hooks/useNews"
import { ArticleCard } from "./ArticleCard"
import { ArticleCardSkeleton } from "./ArticleCardSkeleton"

const LIST_CLASS = "flex flex-col gap-10"

export function NewsList() {
  const t = useTranslations("news")
  const tc = useTranslations("common")
  const locale = useLocale()
  const { data, isLoading, isError } = useNews(locale)

  return (
    <section className="bg-haze pb-16 lg:pb-24 pt-16 lg:pt-24">
      <Container>
        {isError ? (
          <p className="text-graphite/60 text-center py-6">{tc("error")}</p>
        ) : data && data.length === 0 ? (
          <p className="text-graphite/60">{tc("empty")}</p>
        ) : (
          <div className={LIST_CLASS}>
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
              ))
              : data?.map((item) => (
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
        )}
      </Container>
    </section>
  )
}
