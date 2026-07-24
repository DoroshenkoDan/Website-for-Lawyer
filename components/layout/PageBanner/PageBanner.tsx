import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Medallion } from "./Medallion"

type PageBannerProps = {
  title: string
  description: string
  breadcrumb?: string
}

export function PageBanner({
  title,
  description,
  breadcrumb = title,
}: PageBannerProps) {
  const tNav = useTranslations("nav")

  return (
    <section className="pb-14 pt-24 lg:pb-16 lg:pt-32">
      <div className="mx-auto w-full max-w-[1440px] overflow-x-clip px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative flex h-[300px] items-center overflow-hidden rounded-3xl md:bg-linear-to-br md:from-hero md:to-graphite-deep h-[380px]">
            <div aria-hidden className="hidden md:block absolute inset-0 bg-white/6" />

            <div
              aria-hidden
              className="hidden md:block absolute right-0 top-1/2 size-105 -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/20 blur-[100px] lg:size-140"
            />

            <div
              aria-hidden
              className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]"
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

              <p className="mt-6 max-w-115 text-base leading-relaxed text-on-dark">
                {description}
              </p>
            </div>
          </div>

          <Medallion className="pointer-events-none absolute right-2 top-1/2 z-9 hidden size-85 -translate-y-1/2 select-none md:block lg:right-6" />
        </div>
      </div>
    </section>
  )
}
