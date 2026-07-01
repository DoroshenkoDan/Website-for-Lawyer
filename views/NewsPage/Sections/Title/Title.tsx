import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

/**
 * Hero image behind the news page title. `null` renders an on-palette
 * placeholder — drop a path under `public/` here once the asset is ready and it
 * fills the same frame (`<Image fill>`), so no layout change is needed.
 */
const heroImage: string | null = null

/**
 * News page hero: a near-full-width photo (capped at 1440px) with the breadcrumb
 * and title pinned bottom-left, and the lead in a second column on the right.
 * Light text over a dark bottom gradient.
 */
export function Title() {
  const t = useTranslations("news")
  const tNav = useTranslations("nav")

  return (
    <section className=" pb-14 pt-22 lg:pb-16 lg:pt-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative h-[420px] overflow-hidden rounded-3xl bg-graphite sm:h-[460px]">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={t("title")}
              fill
              className="object-cover"
              sizes="(min-width: 1440px) 1440px, 100vw"
              preload
            />
          ) : (
            <div
              aria-hidden
              className="absolute inset-0 grid place-items-center bg-linear-to-br from-graphite via-graphite-deep to-firefly"
            >
              <ImageIcon className="size-10 text-white/15" />
            </div>
          )}

          {/* Bottom gradient keeps the text legible over any photo */}
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-graphite-deep/85 via-graphite-deep/25 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 lg:px-14 lg:pb-12">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
              <div className="flex flex-col">
                <nav aria-label="breadcrumb">
                  <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
                    <li>
                      <Link
                        href="/"
                        className="text-accent-hover transition-colors hover:text-white"
                      >
                        {tNav("home")}
                      </Link>
                    </li>
                    <li aria-hidden className="text-white/30">
                      /
                    </li>
                    <li className="text-white/70">{t("title")}</li>
                  </ol>
                </nav>

                <h1 className="mt-4 font-heading text-[2.5rem] font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
                  {t("title")}
                </h1>

                <div
                  aria-hidden
                  className="mt-6 h-px w-24 bg-linear-to-r from-accent-hover to-accent-hover/0"
                />
              </div>

              <p className="max-w-[460px] text-base leading-relaxed text-on-dark lg:pb-1">
                {t("lead")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
