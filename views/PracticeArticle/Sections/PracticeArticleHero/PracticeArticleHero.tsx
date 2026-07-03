import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import type { PracticeId } from "@/config/practices"

/**
 * Dark title band: breadcrumb + H1, on the page's default dark background.
 * The lead/description lives below in the Body section, beside the photo.
 */
export function PracticeArticleHero({ id }: { id: PracticeId }) {
  const t = useTranslations("practices.items")
  const tNav = useTranslations("nav")
  const title = t(`${id}.title`)

  return (
    <section className="pt-24 lg:pt-28">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
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
            <li>
              <Link
                href="/practices"
                className="text-accent-hover transition-colors hover:text-white"
              >
                {tNav("practices")}
              </Link>
            </li>
            <li aria-hidden className="text-white/30">
              /
            </li>
            <li className="text-white/70">{title}</li>
          </ol>
        </nav>

        <h1 className="mt-4 max-w-4xl font-heading text-[2.5rem] font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
          {title}
        </h1>

        <div
          aria-hidden
          className="mt-6 h-px w-24 bg-linear-to-r from-accent-hover to-accent-hover/0"
        />
      </Container>
    </section>
  )
}
