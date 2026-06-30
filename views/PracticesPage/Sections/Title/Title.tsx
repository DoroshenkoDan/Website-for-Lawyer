import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"

/**
 * Portrait shown inside the framed photo. `null` renders a placeholder — drop a
 * path under `public/` here once the asset is ready; the frame keeps its size,
 * so no layout change is needed.
 */
const portrait: string | null = null

/** Practices page hero: breadcrumb, title, lead and a framed portrait. */
export function Title() {
  const t = useTranslations("practices")
  const tNav = useTranslations("nav")

  return (
    <section className="overflow-hidden bg-haze">
      <Container className="grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-38">
        <div className="flex flex-col">
          <nav aria-label="breadcrumb">
            <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
              <li>
                <Link
                  href="/"
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  {tNav("home")}
                </Link>
              </li>
              <li aria-hidden className="text-graphite/40">
                /
              </li>
              <li className="text-graphite/70">{t("title")}</li>
            </ol>
          </nav>

          <h1 className="mt-5 font-heading text-[2.75rem] font-medium leading-[1.05] tracking-tight text-graphite sm:text-6xl lg:text-[5rem] xl:text-[5.5rem]">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-graphite/70">
            {t("lead")}
          </p>

          <div
            aria-hidden
            className="mt-8 h-px w-30 bg-linear-to-r from-accent to-accent/20"
          />
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          {/* Offset accent frame peeking behind the photo */}
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-2xl border border-accent/40"
          />
          <figure className="relative rounded-2xl border border-graphite/10 bg-white p-2.5 shadow-[0_24px_60px_-28px_rgba(35,43,44,0.4)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-metrics">
              {portrait ? (
                <Image
                  src={portrait}
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 384px, 100vw"
                  priority
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <ImageIcon className="size-8 text-graphite/25" aria-hidden />
                </div>
              )}
            </div>
          </figure>
        </div>
      </Container>
    </section>
  )
}
