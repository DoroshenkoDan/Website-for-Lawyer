import { getTranslations } from "next-intl/server"
import { Container } from "@/components/layout/Container"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { MEDIA_CATEGORIES } from "@/types/media"
import type { MediaCategory, MediaItem } from "@/types/media"
import { PublicationsList } from "../PublicationsList"
import { MediaCard } from "./MediaCard"
import { MediaPagination } from "./MediaPagination"

export async function MediaTabs({
  activeCategory,
  counts,
  items = [],
  page,
  totalPages,
  publications,
}: {
  activeCategory: MediaCategory
  counts: Record<MediaCategory, number>
  items?: MediaItem[]
  page?: number
  totalPages?: number
  publications?: string
}) {
  const t = await getTranslations("media")
  const tc = await getTranslations("common")

  return (
    <section className="bg-haze py-16 lg:py-20">
      <Container>
        <nav
          aria-label={t("title")}
          className="flex flex-wrap gap-x-7 gap-y-3 border-b border-graphite/10"
        >
          {MEDIA_CATEGORIES.map((category) => {
            const isActive = category === activeCategory
            return (
              <Link
                key={category}
                href={`/media?tab=${category}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "-mb-px inline-flex items-start gap-1 border-b-2 pb-3 font-heading text-lg leading-none transition-colors sm:text-xl",
                  isActive
                    ? "border-accent font-medium text-firefly"
                    : "border-transparent text-graphite/45 hover:border-graphite/25 hover:text-graphite",
                )}
              >
                {t(`categories.${category}`)}
                <span className="text-[0.7rem] font-normal tabular-nums text-graphite/40">
                  {counts[category]}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="mt-10">
          <h2 className="sr-only">{t(`categories.${activeCategory}`)}</h2>

          {activeCategory === "print" ? (
            publications ? (
              <PublicationsList html={publications} />
            ) : (
              <p className="text-graphite/55">{tc("empty")}</p>
            )
          ) : items.length > 0 ? (
            <>
              <ul className="grid gap-6 md:grid-cols-2">
                {items.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </ul>
              {typeof page === "number" && typeof totalPages === "number" && (
                <MediaPagination
                  category={activeCategory}
                  page={page}
                  totalPages={totalPages}
                />
              )}
            </>
          ) : (
            <p className="text-graphite/55">{tc("empty")}</p>
          )}
        </div>
      </Container>
    </section>
  )
}
