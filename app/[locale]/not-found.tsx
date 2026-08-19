import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("errorPages.notFound")
  return { title: t("title") }
}

export default async function NotFound() {
  const t = await getTranslations("errorPages.notFound")

  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="font-heading text-7xl font-medium tracking-tight text-accent">
            {t("eyebrow")}
          </span>
          <h1 className="mt-4 font-heading text-2xl font-medium leading-tight tracking-tight text-white lg:text-[1.75rem]">
            {t("title")}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-on-dark">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              {t("homeCta")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
