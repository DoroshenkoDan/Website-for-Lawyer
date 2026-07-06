import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

export function HeroCta() {
  const t = useTranslations("home.hero")

  return (
    <div className="flex flex-col items-start">
      <p className="mt-6 max-w-100 text-base leading-relaxed text-submarine">
        {t("subtitle")}
      </p>
      <Link
        href="/contacts"
        className="group mt-8 inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        {t("cta")}
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}
