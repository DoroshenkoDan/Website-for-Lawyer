import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Seal } from "./Seal"

type PageBannerProps = {
  /** Page heading (H1). */
  title: string
  /** Lead paragraph shown under the title. */
  description: string
  /**
   * Label for the current page in the breadcrumb trail (the crumb after the
   * "Home" link). Defaults to `title` when omitted.
   */
  breadcrumb?: string
}

/**
 * Reusable page banner: the hero surface lifted one tone lighter into a soft
 * gradient, with an accent glow blooming behind the RG seal (radially masked so
 * its cropped edge dissolves) and a light vignette for depth. Breadcrumb, title
 * and lead sit left in light text. The "Home" crumb is constant; everything
 * else is passed in per page.
 */
export function PageBanner({
  title,
  description,
  breadcrumb = title,
}: PageBannerProps) {
  const tNav = useTranslations("nav")

  return (
    <section className="pb-14 pt-24 lg:pb-16 lg:pt-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[300px] items-center overflow-hidden rounded-3xl bg-linear-to-br from-hero to-graphite-deep sm:h-[380px]">
          {/* Lift the hero gradient one tone lighter */}
          <div aria-hidden className="absolute inset-0 bg-white/6" />

          {/* Accent glow blooming behind the seal */}
          <div
            aria-hidden
            className="absolute right-0 top-1/2 size-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/20 blur-[100px] sm:size-[560px]"
          />

          {/* Seal — accent emblem, radially masked so its cropped edge dissolves */}
          <Seal
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 h-auto w-[380px] -translate-y-1/2 translate-x-1/4 select-none text-accent opacity-50 mask-[radial-gradient(circle_at_center,black_62%,transparent_88%)] sm:w-[560px]"
          />

          {/* Vignette for depth at the edges (also softens the cropped seal) */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]"
          />

          <div className="relative z-10 px-6 sm:px-10 lg:px-14">
            <nav aria-label="breadcrumb">
              <ol className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
                <li>
                  <Link
                    href="/"
                    className="text-accent-hover transition-colors hover:text-white"
                  >
                    {tNav("home")}
                  </Link>
                </li>
                <li aria-hidden className="text-white/30">
                  /
                </li>
                <li className="text-white/70">{breadcrumb}</li>
              </ol>
            </nav>

            <h1 className="mt-4 font-heading text-[2.5rem] font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>

            <div
              aria-hidden
              className="mt-6 h-px w-24 bg-linear-to-r from-accent-hover to-accent-hover/0"
            />

            <p className="mt-6 max-w-[460px] text-base leading-relaxed text-on-dark">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
