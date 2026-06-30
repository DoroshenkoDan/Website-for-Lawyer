"use client"

import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { useNews } from "@/hooks/useNews"

export function NewsPage() {
  const t = useTranslations("news")
  const tc = useTranslations("common")
  const locale = useLocale()
  const { data, isLoading, isError } = useNews(locale)

  return (
    <>
      <Container className="py-16">
        {isLoading && <p className="text-graphite/60">{tc("loading")}</p>}
        {isError && <p className="text-graphite/60">{tc("error")}</p>}
        {data && data.length === 0 && (
          <p className="text-graphite/60">{tc("empty")}</p>
        )}
        {data && data.length > 0 && (
          <ul className="grid gap-6 sm:grid-cols-2">
            {data.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-graphite/10 p-6 transition-colors hover:border-accent"
              >
                <Link href={`/news/${item.slug}`}>
                  <h3 className="font-heading text-lg font-medium text-graphite">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-graphite/60">{item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  )
}
