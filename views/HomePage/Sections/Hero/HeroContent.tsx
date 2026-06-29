import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Badge } from "@/components/ui/badge"
import { HeroHighlights } from "./HeroHighlights"

/** Right hero column: badge, heading, subtitle and value cards. */
export function HeroContent() {
  const t = useTranslations("home.hero")
  const tHeader = useTranslations("header")

  return (
    <div className="flex flex-col justify-center">
      <Badge className="self-start">{t("badge")}</Badge>
      <h1 className="mt-6 max-w-md font-heading text-[1.75rem] font-semibold  text-white sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65] text-grey">
        {t("subtitle")}
      </p>
      <HeroHighlights />
      <Link
        href="/contacts"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent to-accent-hover px-7 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-200 "
      >
        {tHeader("contact")}
        <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
