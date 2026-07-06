import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { HeroHeadline } from "./HeroHeadline"
import { HeroMedallion } from "./HeroMedallion"
import { HeroCta } from "./HeroCta"

export function Hero() {
  const t = useTranslations("home.hero")

  return (
    <section className="relative flex min-h-lvh flex-col overflow-hidden text-on-dark">
      {/* Centre light — hero surface lifted with a white radial overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_46%,rgba(255,255,255,0.055),transparent_70%)]"
      />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 pb-16 pt-24 lg:pt-32 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-12 lg:pb-24 xl:max-w-350">
        <HeroHeadline />
        <HeroMedallion />
        <HeroCta />
      </Container>

      {/* Practice areas footline */}
      <p className="relative z-10 px-6 pb-8 text-center text-xs uppercase tracking-[0.16em] text-metrics">
        {t("footline")}
      </p>
    </section>
  )
}
