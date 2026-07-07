import { useTranslations } from "next-intl"
import { HeroVideo } from "./HeroVideo"
import { HeroHeadline } from "./HeroHeadline"
import { HeroCta } from "./HeroCta"

export function Hero() {
  const t = useTranslations("home.hero")

  return (
    <section className="flex min-h-lvh flex-col text-on-dark">
      <div className="mx-auto flex w-full flex-1 flex-col px-4 pb-5 pt-24 sm:px-6 lg:px-8">
        <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10">
          <HeroVideo />
          <div aria-hidden className="absolute inset-0 bg-hero/35" />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-hero/90 via-hero/50 to-transparent lg:w-3/5"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-hero/85 to-transparent"
          />

          {/* Text column tracks the frame itself, not the page container */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <HeroHeadline />
              <HeroCta />
            </div>
          </div>

          {/* Practice areas footline */}
          <p className="relative z-10 px-6 pb-7 text-center text-xs uppercase tracking-[0.16em] text-metrics">
            {t("footline")}
          </p>
        </div>
      </div>
    </section>
  )
}
