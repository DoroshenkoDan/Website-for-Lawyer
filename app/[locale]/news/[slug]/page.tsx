import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { NewsArticle } from "@/views/NewsArticle"
import { readNewsArticle } from "@/lib/api/read"
import { buildPageMetadata } from "@/lib/seo"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const article = await readNewsArticle(slug, locale)
  if (!article) return {}
  return buildPageMetadata({
    locale,
    title: article.title,
    description: article.excerpt,
    path: `/news/${slug}`,
  })
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Loc)

  const article = await readNewsArticle(slug, locale)
  if (!article) notFound()

  return <NewsArticle article={article} locale={locale} />
}
