"use client"

import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { PageBanner } from "@/components/layout/PageBanner"
import { useMedia } from "@/hooks/useMedia"

export function MediaPage() {
  const t = useTranslations("media")
  const tc = useTranslations("common")
  const locale = useLocale()
  const { data, isLoading, isError } = useMedia(locale)

  return (
    <>
      <PageBanner title={t("title")} description={t("subtitle")} />
      <Container className="py-16">
        {isLoading && <p className="text-graphite/60">{tc("loading")}</p>}
        {isError && <p className="text-graphite/60">{tc("error")}</p>}
        {data && data.length === 0 && (
          <p className="text-graphite/60">{tc("empty")}</p>
        )}
        {data && data.length > 0 && (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-graphite/10 p-6 transition-colors hover:border-accent"
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-heading text-lg font-medium text-graphite">
                    {item.title}
                  </h3>
                  {item.source && (
                    <p className="mt-2 text-sm text-graphite/60">
                      {item.source}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  )
}
