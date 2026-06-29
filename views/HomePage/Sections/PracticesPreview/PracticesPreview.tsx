import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { practices } from "@/config/practices"
import { featuredPractices } from "@/config/featuredPractices"
import { PracticeCard } from "./PracticeCard"

export function PracticesPreview() {
  const t = useTranslations("home.practicesPreview")
  const tc = useTranslations("home.practicesPreview.cards")
  const common = useTranslations("common")

  return (
    <section className="bg-white py-20">
      <Container>
        <header className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <h2 className="font-heading text-[1.75rem] font-semibold text-graphite">
            {t("title")}
          </h2>
          <p className="text-sm text-[#51666a] lg:max-w-sm lg:text-right">
            {t("subtitle")}
          </p>
        </header>

        <hr className="mt-6 border-t border-graphite/10" />

        <ul className="mt-8 flex flex-col gap-7">
          {featuredPractices.map((featured, index) => {
            const practice = practices.find((p) => p.id === featured.practiceId)!
            const id = featured.practiceId

            return (
              <li key={id}>
                <PracticeCard
                  number={String(index + 1).padStart(2, "0")}
                  name={tc(`${id}.name`)}
                  question={tc(`${id}.question`)}
                  tagline={tc(`${id}.tagline`)}
                  description={tc(`${id}.description`)}
                  href={practice.href}
                  image={featured.image}
                  readMoreLabel={common("readMore")}
                />
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/practices"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            {t("viewAll")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  )
}
