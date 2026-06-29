import { Container } from "@/components/layout/Container"
import { HeroAurora } from "./HeroAurora"
import { HeroMedia } from "./HeroMedia"
import { HeroContent } from "./HeroContent"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-on-dark pt-10 ">
      <HeroAurora />
      <Container className="relative z-10 grid items-stretch gap-8 py-14 md:py-20 lg:grid-cols-2 lg:gap-6 xl:max-w-350 xl:grid-cols-[3fr_2fr] xl:gap-7.5">
        <HeroMedia />
        <HeroContent />
      </Container>
    </section>
  )
}
