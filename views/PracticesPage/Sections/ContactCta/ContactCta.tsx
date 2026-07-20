import { useTranslations } from "next-intl"
import { Mail } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function ContactCta() {
  const t = useTranslations("practices.cta")
  const { email } = siteConfig.contacts

  return (
    <section className="bg-haze pb-20 lg:pb-28">
      <Container>
        <div className="flex flex-col gap-8 rounded-[20px] border border-accent bg-hero px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-12">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-medium leading-tight tracking-tight text-white lg:text-[1.75rem]">
              {t("title")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-dark">
              {t("text")}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7 lg:shrink-0">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-base font-medium text-on-dark transition-colors hover:text-accent-hover"
            >
              <Mail className="size-4 text-accent-hover" aria-hidden />
              {email}
            </a>
            <Link
              href="/contacts"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
