"use client"

import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { mainNav } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/Container"
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher"
import { cn } from "@/lib/utils"
import { Mail } from "lucide-react"

interface HeaderMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * Expanding navigation menu that grows the header card downward.
 * Uses the `grid-rows-[0fr]→[1fr]` technique so the card animates to its
 * natural height. Holds the primary navigation, plus — on small screens —
 * the header utilities that are hidden from the bar.
 */
export function HeaderMenu({ open, onClose }: HeaderMenuProps) {
  const t = useTranslations()
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <div
      id="header-menu"
      inert={open ? undefined : true}
      className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-out",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="overflow-hidden">
        <Container className="flex flex-col pb-4">
          <nav
            className="flex flex-col items-start md:flex-row md:items-center md:justify-center"
            onClick={onClose}
          >
            {mainNav.map((item) => {
              const active = isActive(item.href)
              const underline =
                "relative px-2 py-3 text-base transition-colors after:absolute after:inset-x-2 after:bottom-2 after:h-px after:origin-center after:transition-transform after:duration-300 after:ease-out after:content-['']"

              if (active) {
                return (
                  <span
                    key={item.href}
                    aria-current="page"
                    className={cn(
                      underline,
                      "pointer-events-none text-white after:scale-x-100 after:bg-accent",
                    )}
                  >
                    {t(`nav.${item.labelKey}`)}
                  </span>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    underline,
                    "text-on-dark/90 hover:text-white after:scale-x-0 after:bg-accent-hover hover:after:scale-x-100",
                  )}
                >
                  {t(`nav.${item.labelKey}`)}
                </Link>
              )
            })}
          </nav>

          {/* Utilities — only shown here on small screens (in the bar otherwise) */}
          <div
            className="mt-2 flex flex-col gap-4 border-t border-white/10 pt-5 md:hidden"
            onClick={onClose}
          >
            <LocaleSwitcher />
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="flex items-center gap-2 text-xs text-white transition-colors hover:text-accent"
            >
              <Mail size={14} className="shrink-0 text-accent" />
              {siteConfig.contacts.email}
            </a>
            <Link
              href="/contacts"
              className="flex w-full justify-center rounded-lg bg-accent px-4.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {t("header.contact")}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
