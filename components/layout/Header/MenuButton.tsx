"use client"

import { useTranslations } from "next-intl"

interface MenuButtonProps {
  open: boolean
  onToggle: () => void
}

/** Burger button that morphs between burger and "X". */
export function MenuButton({ open, onToggle }: MenuButtonProps) {
  const t = useTranslations()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="header-menu"
      aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
      className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-on-dark transition-colors hover:bg-white/10"
    >
      <span className="relative block h-4 w-5" aria-hidden="true">
        <span
          style={{ transform: open ? "translateY(4px) rotate(45deg)" : undefined }}
          className="absolute inset-x-0 top-0.75 h-0.5 origin-center rounded-full bg-current transition-transform duration-300 ease-out"
        />
        <span
          style={{ opacity: open ? 0 : 1 }}
          className="absolute inset-x-0 top-1.75 h-0.5 rounded-full bg-current transition-opacity duration-200 ease-out"
        />
        <span
          style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : undefined }}
          className="absolute inset-x-0 top-2.75 h-0.5 origin-center rounded-full bg-current transition-transform duration-300 ease-out"
        />
      </span>
    </button>
  )
}
