"use client"

import { useLocale } from "next-intl"
import { useParams } from "next/navigation"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const localeLabels: Record<string, string> = {
  uk: "UA",
  en: "EN",
  pl: "PL",
}

export function LocaleSwitcher() {
  const activeLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function switchTo(nextLocale: string) {
    if (nextLocale === activeLocale) return
    router.replace(
      // @ts-expect-error -- pathname & params are compatible at runtime
      { pathname, params },
      { locale: nextLocale },
    )
  }

  return (
    <div className="flex items-center gap-3.5">
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "border-b border-solid pb-0.75 pt-0.5 text-[13px] leading-[19.5px] tracking-[0.52px] font-medium transition-colors cursor-pointer",
              isActive
                ? "border-accent text-accent"
                : "border-transparent text-[#9fb2b3] hover:text-on-dark",
            )}
          >
            {localeLabels[locale] ?? locale.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
