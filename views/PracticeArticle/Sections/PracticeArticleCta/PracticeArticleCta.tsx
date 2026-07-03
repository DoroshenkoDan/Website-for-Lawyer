import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/**
 * Closing CTA shared by every practice page. A full-width dark band, centered,
 * with an accent glow — the visual bookend to the dark title band up top.
 */
export function PracticeArticleCta() {
  const t = useTranslations("practices.article.cta")
  const { email } = siteConfig.contacts

  return (
    <section className="bg-haze pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-hero to-graphite-deep px-6 py-12 text-center sm:px-10 lg:py-16">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
          />
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
            <h2 className="font-heading text-2xl font-medium leading-tight tracking-tight text-white lg:text-[1.75rem]">
              {t("title")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-dark">
              {t("text")}
            </p>
            <Link
              href="/contacts"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "mt-8",
              )}
            >
              {t("button")}
            </Link>
            <a
              href={`mailto:${email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-on-dark transition-colors hover:text-accent-hover"
            >
              <Mail className="size-4 text-accent-hover" aria-hidden />
              {email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
