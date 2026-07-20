import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { tribute } from "@/content/inMemory"
import { COLUMN } from "./column"
import { Segment } from "./Segment"

export function Interview() {
  const locale = useLocale() as Loc
  const t = useTranslations("about.inMemory")
  const segments = tribute.interview[locale]

  let figureCount = 0

  return (
    <section className="bg-haze py-16 lg:py-24">
      <Container>
        <header className={`${COLUMN} mb-12 lg:mb-16`}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-deep">
            {t("kicker")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium leading-tight tracking-tight text-graphite lg:text-4xl">
            {t("detailsHeading")}
          </h2>
        </header>

        <div className="space-y-10 lg:space-y-12">
          {segments.map((segment, i) => {
            const flip = segment.type === "figure" && figureCount++ % 2 === 1
            return <Segment key={i} segment={segment} flip={flip} />
          })}
        </div>
      </Container>
    </section>
  )
}
