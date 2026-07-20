import { Flower2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { tribute } from "@/content/inMemory"

export function ClosingQuote() {
  const locale = useLocale() as Loc
  const t = useTranslations("about.inMemory")

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <figure className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <Flower2 className="size-8 text-sage" aria-hidden />
          <blockquote className="font-heading text-2xl font-medium leading-snug tracking-tight text-pampas lg:text-[2.25rem] lg:leading-[1.2]">
            {tribute.closingQuote[locale]}
          </blockquote>
          <figcaption className="text-sm font-semibold uppercase tracking-[0.18em] text-submarine">
            {t("attribution")}
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
