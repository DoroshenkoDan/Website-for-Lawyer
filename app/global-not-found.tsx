import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Inter, Lora } from "next/font/google"
import { routing } from "@/i18n/routing"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-lora",
  display: "swap",
})

const copy = {
  uk: {
    eyebrow: "404",
    title: "Сторінку не знайдено",
    description:
      "Можливо, її перенесли або вона більше не існує. Перевірте адресу або поверніться на головну.",
    homeCta: "На головну",
  },
  en: {
    eyebrow: "404",
    title: "Page not found",
    description:
      "It may have been moved or no longer exists. Check the address or return to the homepage.",
    homeCta: "Back to homepage",
  },
  pl: {
    eyebrow: "404",
    title: "Strony nie znaleziono",
    description:
      "Być może została przeniesiona lub już nie istnieje. Sprawdź adres lub wróć na stronę główną.",
    homeCta: "Strona główna",
  },
} satisfies Record<string, { eyebrow: string; title: string; description: string; homeCta: string }>

type SupportedLocale = keyof typeof copy

function resolveLocale(cookieLocale: string | undefined): SupportedLocale {
  const locales = routing.locales as readonly string[]
  return locales.includes(cookieLocale ?? "")
    ? (cookieLocale as SupportedLocale)
    : (routing.defaultLocale as SupportedLocale)
}

export const metadata: Metadata = {
  title: "404",
}

export default async function GlobalNotFound() {
  const jar = await cookies()
  const locale = resolveLocale(jar.get("NEXT_LOCALE")?.value)
  const t = copy[locale]
  const home = locale === routing.defaultLocale ? "/" : `/${locale}`

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center px-6 text-center">
          <span className="font-heading text-7xl font-medium tracking-tight text-accent">
            {t.eyebrow}
          </span>
          <h1 className="mt-4 font-heading text-2xl font-medium leading-tight tracking-tight text-white lg:text-[1.75rem]">
            {t.title}
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-on-dark">
            {t.description}
          </p>
          <a
            href={home}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-base font-medium text-on-dark transition-colors hover:bg-accent-hover"
          >
            {t.homeCta}
          </a>
        </div>
      </body>
    </html>
  )
}
