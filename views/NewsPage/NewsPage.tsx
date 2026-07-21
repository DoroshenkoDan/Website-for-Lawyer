import { Suspense } from "react"
import { useTranslations } from "next-intl"
import { PageBanner } from "@/components/layout/PageBanner"
import { Container } from "@/components/layout/Container"
import { NewsList } from "./Sections/NewsList"
import { NewsListSkeleton } from "./Sections/NewsList/NewsListSkeleton"

export function NewsPage({ page }: { page: number }) {
  const t = useTranslations("news")
  return (
    <>
      <PageBanner title={t("title")} description={t("lead")} />
      <section className="bg-haze pb-16 lg:pb-24 pt-16 lg:pt-24">
        <Container>
          <Suspense fallback={<NewsListSkeleton />}>
            <NewsList page={page} />
          </Suspense>
        </Container>
      </section>
    </>
  )
}
