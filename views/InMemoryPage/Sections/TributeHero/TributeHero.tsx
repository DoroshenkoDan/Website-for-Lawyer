import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { tribute } from "@/content/inMemory"

export function TributeHero() {
  const locale = useLocale() as Loc
  const t = useTranslations("about.inMemory")
  const tNav = useTranslations("nav")

  return (
    <section className="pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-3xl bg-graphite-deep sm:min-h-[620px] lg:min-h-[680px]">
          <Image
            src={tribute.heroImage}
            alt={tribute.heroAlt[locale]}
            fill
            priority
            sizes="(min-width: 1440px) 1376px, 100vw"
            className="object-cover object-[72%_center]"
          />

          {/* Legibility scrims */}
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-r from-graphite-deep via-graphite-deep/80 to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-graphite-deep/90 via-graphite-deep/10 to-transparent"
          />

          {/* Breadcrumb, pinned top-left. */}
          <nav
            aria-label="breadcrumb"
            className="absolute left-0 top-0 z-10 px-6 pt-6 sm:px-10 sm:pt-8 lg:px-14"
          >
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
              <li>
                <Link
                  href="/"
                  className="text-sage transition-colors hover:text-white"
                >
                  {tNav("home")}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sage transition-colors hover:text-white"
                >
                  {tNav("about")}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li className="text-white/70">{t("title")}</li>
            </ol>
          </nav>

          {/* Headline quote block. */}
          <div className="relative z-10 max-w-[720px] px-6 pb-10 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
              {t("kicker")}
            </p>
            <blockquote className="mt-5 font-heading text-[1.75rem] font-medium leading-[1.15] tracking-tight text-pampas sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {tribute.heroQuote[locale]}
            </blockquote>
            <div
              aria-hidden
              className="mt-6 h-px w-24 bg-linear-to-r from-sage to-sage/0"
            />
            <figcaption className="mt-5 text-sm font-medium tracking-[0.02em] text-submarine">
              — {t("attribution")}
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  )
}
