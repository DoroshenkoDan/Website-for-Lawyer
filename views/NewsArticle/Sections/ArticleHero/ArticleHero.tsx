import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { formatArticleDate } from "@/lib/formatDate"
import type { NewsItem } from "@/types/news"

export function ArticleHero({
  article,
  locale,
}: {
  article: NewsItem
  locale: string
}) {
  const tNav = useTranslations("nav")
  const tNews = useTranslations("news")

  return (
    <section className="pt-24 lg:pt-28">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
            <li>
              <Link
                href="/"
                className="text-accent-hover transition-colors hover:text-white"
              >
                {tNav("home")}
              </Link>
            </li>
            <li aria-hidden className="text-white/30">
              /
            </li>
            <li>
              <Link
                href="/news"
                className="text-accent-hover transition-colors hover:text-white"
              >
                {tNav("news")}
              </Link>
            </li>
            <li aria-hidden className="text-white/30">
              /
            </li>
            <li className="text-white/70">{tNews("article")}</li>
          </ol>
        </nav>

        <div className="mt-8 md:mt-0 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:flex-1">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-accent-hover">
              {formatArticleDate(article.publishedAt, locale)}
            </p>

            <h1 className="mt-3 font-heading text-[2rem] font-medium leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div
              aria-hidden
              className="mt-6 h-px w-24 bg-linear-to-r from-accent-hover to-accent-hover/0"
            />
          </div>

          {article.coverImage && (
            <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-2xl bg-metrics lg:w-80 xl:w-96">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 100vw"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
