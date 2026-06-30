import { Hero } from "./Sections/Hero"
import { PracticesPreview } from "./Sections/PracticesPreview"
import { AboutPreview } from "./Sections/AboutPreview"
import { Quote } from "./Sections/Quote"

export function HomePage() {
  return (
    <>
      <Hero />
      <PracticesPreview />
      <AboutPreview />
      <Quote />
    </>
  )
}

