"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  uk: "УКР",
  en: "ENG",
  pl: "POL",
};

/** Switches the active locale, preserving the current pathname. */
export function LocaleSwitcher() {
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function switchTo(nextLocale: string) {
    if (nextLocale === activeLocale) return;
    router.replace(
      // Preserve dynamic params across the locale change.
      // @ts-expect-error -- pathname & params are compatible at runtime
      { pathname, params },
      { locale: nextLocale },
    );
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-current={locale === activeLocale ? "true" : undefined}
          className={cn(
            "rounded px-2 py-1 text-xs font-medium transition-colors",
            locale === activeLocale
              ? "text-accent"
              : "text-on-dark/60 hover:text-on-dark",
          )}
        >
          {localeLabels[locale] ?? locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
