import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { Container } from "@/components/layout/Container"
import { readNewsArticle } from "@/lib/api/read"
import { formatArticleDate } from "@/lib/formatDate"
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

  const paragraphs = (article.body ?? article.excerpt).split("\n\n")

  return (
    <Container className="py-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-graphite/55">
          {formatArticleDate(article.publishedAt, locale)}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold leading-snug text-firefly lg:text-4xl">
          {article.title}
        </h1>
        <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-graphite/80">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  )
}
