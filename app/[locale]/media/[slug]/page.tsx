import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { MediaArticle } from "@/views/MediaArticle"
import { readMediaArticle } from "@/lib/api/read"
import { buildPageMetadata } from "@/lib/seo"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const article = await readMediaArticle(slug)
  if (!article) return {}
  return buildPageMetadata({
    locale,
    title: article.title,
    description: article.excerpt,
    path: `/media/${slug}`,
  })
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Loc)

  const article = await readMediaArticle(slug)
  if (!article) notFound()

  return <MediaArticle article={article} locale={locale} />
}
