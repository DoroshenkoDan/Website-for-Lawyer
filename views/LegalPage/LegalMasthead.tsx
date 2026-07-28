import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"

export function LegalMasthead({ title, lede }: { title: string; lede: string }) {
  const t = useTranslations("legal")

  return (
    <section className="pb-10 pt-30 lg:pb-14 lg:pt-36">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {t("eyebrow")}
        </p>

        <h1 className="mt-4 max-w-3xl font-heading text-[2.25rem] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>

        <div
          aria-hidden
          className="mt-6 h-px w-24 bg-linear-to-r from-accent-hover to-accent-hover/0"
        />

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-dark">
          {lede}
        </p>
      </Container>
    </section>
  )
}
