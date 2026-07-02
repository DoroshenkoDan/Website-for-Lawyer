import { NewsList } from "./Sections/NewsList"
import { PageBanner } from '@/components/layout/PageBanner'
import { useTranslations } from 'next-intl'

export function NewsPage() {
  const t = useTranslations("news")
  return (
    <>
      <PageBanner title={t("title")} description={t("lead")} />
      <NewsList />
    </>
  )
}
