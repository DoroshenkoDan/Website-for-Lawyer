"use client"

import { useLocale, useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatArticleDate } from "@/lib/formatDate"
import { NewsCard } from "./NewsCard"
import { NewsCardSkeleton } from "./NewsCardSkeleton"
import { useFeaturedNews } from "./useFeaturedNews"

/**
 * Below `lg` the cards become a swipeable scroll-snap slider; from `lg` they
 * lay out as a 3-up grid. One element, CSS-only — no carousel dependency.
 */
const TRACK_CLASS =
  "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0"

const CARD_CLASS = "shrink-0 basis-[85%] snap-start sm:basis-[48%] lg:basis-auto"

export function NewsPreview() {
  const t = useTranslations("home.newsPreview")
  const common = useTranslations("common")
  const locale = useLocale()
  const { data, isLoading, isError } = useFeaturedNews()

  const viewAllLink = (className?: string) => (
    <Link
      href="/news"
      className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "gap-2", className)}
    >
      {t("viewAll")}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  )

  return (
    <section className="bg-haze py-20">
      <Container>
        <header className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="font-heading text-[1.75rem] font-semibold text-firefly lg:text-[2rem]">
              {t("title")}
            </h2>
          </div>
          {viewAllLink("hidden sm:inline-flex")}
        </header>

        <hr className="mt-7 border-graphite/10" />

        {isError ? (
          <p className="mt-8 text-graphite/60">{common("error")}</p>
        ) : (
          <div className={TRACK_CLASS}>
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <NewsCardSkeleton key={index} className={CARD_CLASS} />
                ))
              : data.map((article) => (
                  <NewsCard
                    key={article.id}
                    className={CARD_CLASS}
                    href={`/news/${article.slug}`}
                    category={article.category}
                    date={formatArticleDate(article.publishedAt, locale)}
                    title={article.title}
                    excerpt={article.excerpt}
                    image={article.coverImage}
                    readLabel={t("read")}
                  />
                ))}
          </div>
        )}

        {viewAllLink("mt-6 flex w-full sm:hidden")}
      </Container>
    </section>
  )
}
