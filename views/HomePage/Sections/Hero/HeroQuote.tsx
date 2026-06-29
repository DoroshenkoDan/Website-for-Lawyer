import { useTranslations } from "next-intl"

/** Glass quote card overlaid on the hero media. */
export function HeroQuote() {
  const t = useTranslations("home.hero")

  return (
    <figure className="absolute bottom-4.5 left-[3%] right-[3%] rounded-xl border border-white/8 bg-black/40 px-5 py-4 backdrop-blur-xs lg:right-auto lg:max-w-47">
      <blockquote className="font-heading text-[15px] font-medium italic leading-normal text-[#edefee]">
        <span className="text-accent">&ldquo;</span>
        {t("quote")}
        <span className="text-accent">&rdquo;</span>
      </blockquote>
      <figcaption className="mt-1.5 text-[11px] leading-normal text-accent">
        - {t("quoteAuthor")}
      </figcaption>
    </figure>
  )
}
