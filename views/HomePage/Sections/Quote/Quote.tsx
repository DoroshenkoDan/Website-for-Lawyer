import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"

export function Quote() {
  const t = useTranslations("home.quote")

  return (
    <section className="relative isolate overflow-hidden bg-graphite py-18 lg:py-30">
      <Container className="relative z-10">
        <figure className="mx-auto flex max-w-225 flex-col items-center gap-7.75 text-center">
          <blockquote className="font-heading text-lg--line-height font-medium leading-tight tracking-[-0.46px] text-pampas lg:text-[46px] lg:leading-[57.5px]">
            {t("text")}
          </blockquote>
          <figcaption className="font-sans text-base font-semibold leading-[22.5px] tracking-[0.3px] text-submarine">
            — {t("author")}
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
