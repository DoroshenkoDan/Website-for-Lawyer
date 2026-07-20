import { getTranslations } from "next-intl/server"
import { PageBanner } from "@/components/layout/PageBanner"
import { readMediaList } from "@/lib/api/read"
import { MEDIA_CATEGORIES } from "@/types/media"
import { MediaTabs } from "./Sections/MediaTabs"

export async function MediaPage({ locale }: { locale: string }) {
  const t = await getTranslations("media")

  const items = await readMediaList(locale)

  const groups = MEDIA_CATEGORIES.map((category) => ({
    category,
    items: items.filter((item) => item.category === category),
  }))

  return (
    <>
      <PageBanner title={t("title")} description={t("lead")} />
      <MediaTabs groups={groups} />
    </>
  )
}
