import { useLocale, useTranslations } from "next-intl"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { RichContent } from "@/components/RichContent"
import { getDeclarationTips } from "@/content/practices/electronic-declarations.tips"

function format(index: number) {
  return String(index + 1).padStart(2, "0")
}

/**
 * "Practical tips" — only on the electronic-declarations page. An exclusive
 * accordion (native `<details name>`, no client JS): all nine titles stay
 * compact, opening one closes the others. Bodies render server-side so they
 * stay indexable; each item keeps a slug id anchor for deep-linking.
 */
export function PracticeArticleTips() {
  const locale = useLocale() as Loc
  const t = useTranslations("practices.tips")
  const tips = getDeclarationTips()

  return (
    <section className="bg-haze pb-16 lg:pb-24">
      <Container>
        <div className="border-t border-graphite/10 pt-14 lg:pt-20">
          <h2 className="max-w-3xl font-heading text-2xl font-medium tracking-tight text-graphite lg:text-3xl">
            {t("title")}
          </h2>

          <div className="mt-10 divide-y divide-graphite/10 border-y border-graphite/10">
            {tips.map((tip, i) => (
              <details
                key={tip.id}
                id={tip.id}
                name="ed-tips"
                className="group scroll-mt-28"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-sm font-semibold tabular-nums text-accent">
                    {format(i)}
                  </span>
                  <h3 className="flex-1 font-heading text-lg font-medium leading-snug text-graphite">
                    {tip.title[locale]}
                  </h3>
                  <ChevronDown
                    className="size-5 shrink-0 text-graphite/40 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="pb-6 pl-9 pr-2">
                  <RichContent blocks={tip.body[locale]} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
