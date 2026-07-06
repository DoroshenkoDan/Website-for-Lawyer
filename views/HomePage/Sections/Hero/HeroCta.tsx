import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

/** Right hero column: supporting subtitle and the primary call to action. */
export function HeroCta() {
  const t = useTranslations("home.hero")

  return (
    <div className="flex max-w-md flex-col items-center text-center lg:max-w-none lg:items-end lg:text-right">
      <p className="max-w-[340px] text-base leading-relaxed text-grey">
        {t("subtitle")}
      </p>
      <Link
        href="/contacts"
        className="group mt-7 inline-flex items-center gap-2.5 border-b border-accent pb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-accent-hover"
      >
        {t("cta")}
        <ArrowRight
          aria-hidden
          className="size-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}
