import { useTranslations } from "next-intl"
import { Mail } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { siteConfig } from "@/config/site"

/**
 * Sticky bottom action bar — mobile only. Two full-width halves:
 * "Contact me" (links to the contacts page) and a quick mail button.
 */
export function MobileContactBar() {
  const t = useTranslations("header")

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex md:hidden">
      <Link
        href="/contacts"
        className="flex h-14 flex-1 items-center justify-center border-r border-white/10 bg-graphite text-sm font-semibold leading-5.25 text-white"
      >
        {t("contact")}
      </Link>

      {siteConfig.contacts.email && (
        <a
          href={`mailto:${siteConfig.contacts.email}`}
          className="flex h-14 min-w-0 flex-1 items-center justify-center gap-2 bg-accent-deep px-3 text-[13px] font-semibold leading-[19.5px] text-white"
        >
          <Mail size={14} className="shrink-0" />
          <span className="truncate">{siteConfig.contacts.email}</span>
        </a>
      )}
    </div>
  )
}
