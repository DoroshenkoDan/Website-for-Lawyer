import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { practices } from "@/config/practices"
import { PracticeCard } from "./PracticeCard"

/**
 * The full grid of practice areas. Driven by `config/practices` (the areas we
 * actually offer) — title and description come from `practices.items.<id>`,
 * numbering follows the config order.
 */
export function AllPractices() {
  const ti = useTranslations("practices.items")
  const common = useTranslations("common")

  return (
    <section className="bg-haze pb-16 lg:pb-24 pt-16 lg:pt-24">
      <Container>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {practices.map((p, index) => (
            <li key={p.id} className="h-full">
              <PracticeCard
                number={String(index + 1).padStart(2, "0")}
                title={ti(`${p.id}.title`)}
                description={ti(`${p.id}.short`)}
                href={p.href}
                readMoreLabel={common("readMore")}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
