import { useTranslations } from "next-intl"
import { ArrowRight, Award, Flower2 } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"

export function Bio() {
  const t = useTranslations("about")
  const credentials = t.raw("bio.credentials") as string[]

  return (
    <section className="bg-haze py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-lg leading-relaxed text-graphite/90">
            {t("bio.specialization")}
          </p>

          <blockquote className="my-8 border-l-2 border-accent pl-6 font-heading text-[1.35rem] leading-snug text-graphite">
            {t("bio.highlight")}
          </blockquote>

          <p className="text-[15px] leading-[1.7] text-graphite/80">
            {t("bio.experience")}
          </p>

          <p className="mt-6 text-[15px] leading-[1.7] text-graphite/80">
            {t("bio.practice")}
          </p>

          <p className="mt-6 text-[15px] leading-[1.7] text-graphite/80">
            {t("bio.teaching")}
          </p>

          <p className="mt-6 text-[15px] leading-[1.7] text-graphite/80">
            {t("bio.international")}
          </p>

          <p className="mt-6 text-[15px] leading-[1.7] text-graphite/80">
            {t("bio.media")}
          </p>

          <p className="mt-6 text-[15px] leading-[1.7] text-graphite/80">
            {t("bio.mediationLead")}
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 size-1.75 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-[15px] leading-snug text-graphite/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-5 sm:grid-cols-2">
          <Link
            href="/about/awards"
            className="group flex items-start gap-4 rounded-2xl border border-graphite/10 bg-white p-6 transition-colors hover:border-accent"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
              <Award className="size-5" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 font-heading text-lg font-medium text-graphite">
                {t("awards.title")}
                <ArrowRight
                  className="ml-auto size-4 text-accent transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
              <span className="mt-1 block text-sm leading-snug text-graphite/60">
                {t("awards.teaser")}
              </span>
            </span>
          </Link>

          <Link
            href="/about/in-memory"
            className="group flex items-start gap-4 rounded-2xl border border-graphite/10 bg-white p-6 transition-colors hover:border-sage"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sage/15 text-sage-deep">
              <Flower2 className="size-5" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 font-heading text-lg font-medium text-graphite">
                {t("inMemory.title")}
                <ArrowRight
                  className="ml-auto size-4 text-sage-deep transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
              <span className="mt-1 block text-sm leading-snug text-graphite/60">
                {t("inMemory.teaser")}
              </span>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
