"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/Container"
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher"
import { Crown, Mail } from "lucide-react"
import { MenuButton } from "./MenuButton"
import { HeaderMenu } from "./HeaderMenu"

export function Header() {
  const t = useTranslations()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-5 z-50 w-[calc(100%-40px)] overflow-hidden rounded-2xl bg-header/60 text-on-dark backdrop-blur-md">
      {/* Top bar */}
      <Container className="flex h-18 items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.25 font-semibold tracking-[-0.15px] text-white"
        >
          <Crown size={19} className="shrink-0 text-accent" />
          <span className="text-base">Регіна Гусейнова</span>
        </Link>

        <div className="flex-1" />

        <div className="hidden items-center gap-3.5 md:flex">
          <LocaleSwitcher />

          <span className="h-4.5 w-px bg-white/10" aria-hidden="true" />

          <a
            href={`mailto:${siteConfig.contacts.email}`}
            className="flex items-center gap-2 text-xs text-white transition-colors hover:text-accent"
          >
            <Mail size={14} className="shrink-0 text-accent" />
            {siteConfig.contacts.email}
          </a>

          <Link
            href="/contacts"
            className="rounded-lg bg-accent px-4.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {t("header.contact")}
          </Link>

          <span className="h-4.5 w-px bg-white/10" aria-hidden="true" />
        </div>

        <MenuButton open={open} onToggle={() => setOpen((v) => !v)} />
      </Container>

      {/* Expanding menu */}
      <HeaderMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
