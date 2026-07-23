import { getTranslations } from "next-intl/server"
import { PageBanner } from "@/components/layout/PageBanner"
import { readMediaCounts, readMediaPanel, readPublications } from "@/lib/api/read"
import { MEDIA_CATEGORIES, isMediaCategory } from "@/types/media"
import { MediaTabs } from "./Sections/MediaTabs"

export async function MediaPage({
  tab,
  page,
}: {
  tab?: string
  page: number
}) {
  const t = await getTranslations("media")
  const activeCategory = isMediaCategory(tab) ? tab : MEDIA_CATEGORIES[0]

  if (activeCategory === "print") {
    const [counts, publications] = await Promise.all([
      readMediaCounts(),
      readPublications(),
    ])
    return (
      <>
        <PageBanner title={t("title")} description={t("lead")} />
        <MediaTabs
          activeCategory={activeCategory}
          counts={counts}
          publications={publications.html}
        />
      </>
    )
  }

  const [counts, panel] = await Promise.all([
    readMediaCounts(),
    readMediaPanel(activeCategory, page, 10),
  ])

  return (
    <>
      <PageBanner title={t("title")} description={t("lead")} />
      <MediaTabs
        activeCategory={activeCategory}
        counts={counts}
        items={panel.items}
        page={page}
        totalPages={panel.totalPages}
      />
    </>
  )
}
