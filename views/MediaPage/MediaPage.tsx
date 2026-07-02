import { getTranslations } from "next-intl/server"
import { PageBanner } from "@/components/layout/PageBanner"
import { getMedia } from "@/lib/api/media"
import { MEDIA_CATEGORIES, type MediaItem } from "@/types/media"
import { sampleMedia } from "@/config/sampleMedia"
import { MediaTabs } from "./Sections/MediaTabs"

/**
 * Media page. Fetches on the server so every item lands in the HTML (with a
 * per-category <h2>) — the tab switching is a thin client island over the
 * already-rendered panels, so the categorized content stays indexable.
 */
export async function MediaPage({ locale }: { locale: string }) {
  const t = await getTranslations("media")

  let items: MediaItem[] = []
  try {
    items = await getMedia(locale)
  } catch {
    // Backend not wired / unavailable — still render the structure (empty tabs).
    items = []
  }

  // Preview the layout in dev until the backend serves categorized media.
  if (items.length === 0 && process.env.NODE_ENV === "development") {
    items = sampleMedia
  }

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
