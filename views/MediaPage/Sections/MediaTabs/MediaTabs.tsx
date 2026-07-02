"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"
import type { MediaCategory, MediaGroup } from "@/types/media"
import { MediaCard } from "./MediaCard"

/**
 * Client island over the server-rendered category panels. All panels stay in
 * the DOM (inactive ones just get `hidden`), so switching tabs is instant and
 * the content remains fully indexable.
 */
export function MediaTabs({ groups }: { groups: MediaGroup[] }) {
  const t = useTranslations("media")
  const tc = useTranslations("common")
  const [active, setActive] = useState<MediaCategory>(
    groups[0]?.category ?? "tv",
  )

  return (
    <section className="bg-haze py-16 lg:py-20">
      <Container>
        <div
          role="tablist"
          aria-label={t("title")}
          className="flex flex-wrap gap-2.5"
        >
          {groups.map((group) => {
            const isActive = group.category === active
            return (
              <button
                key={group.category}
                type="button"
                role="tab"
                id={`tab-${group.category}`}
                aria-selected={isActive}
                aria-controls={`panel-${group.category}`}
                onClick={() => setActive(group.category)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-accent bg-accent text-white"
                    : "border-graphite/15 text-graphite/70 hover:border-accent hover:text-graphite",
                )}
              >
                {t(`categories.${group.category}`)}
                <span
                  className={cn(
                    "text-xs tabular-nums",
                    isActive ? "text-white/70" : "text-graphite/40",
                  )}
                >
                  {group.items.length}
                </span>
              </button>
            )
          })}
        </div>

        {groups.map((group) => (
          <section
            key={group.category}
            id={`panel-${group.category}`}
            role="tabpanel"
            aria-labelledby={`tab-${group.category}`}
            hidden={group.category !== active}
            className="mt-10"
          >
            <h2 className="sr-only">{t(`categories.${group.category}`)}</h2>

            {group.items.length > 0 ? (
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </ul>
            ) : (
              <p className="text-graphite/55">{tc("empty")}</p>
            )}
          </section>
        ))}
      </Container>
    </section>
  )
}
