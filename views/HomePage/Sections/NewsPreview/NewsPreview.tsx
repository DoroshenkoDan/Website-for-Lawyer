import { getLocale, getTranslations } from "next-intl/server"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatArticleDate } from "@/lib/formatDate"
import { readLatestNews } from "@/lib/api/read"
import { NewsCard } from "./NewsCard"

const TRACK_CLASS =
  "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0"

const CARD_CLASS = "shrink-0 basis-[85%] snap-start sm:basis-[48%] lg:basis-auto"

export async function NewsPreview() {
  const t = await getTranslations("home.newsPreview")
  const locale = await getLocale()
  const items = await readLatestNews(3)

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

        {items.length > 0 && (
          <div className={TRACK_CLASS}>
            {items.map((item) => (
              <NewsCard
                key={item.id}
                className={CARD_CLASS}
                href={`/news/${item.slug}`}
                date={formatArticleDate(item.publishedAt, locale)}
                title={item.title}
                excerpt={item.excerpt}
                image={item.coverImage ?? null}
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
