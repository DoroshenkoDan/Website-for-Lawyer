import { Hero } from "./Sections/Hero"
import { PracticesPreview } from "./Sections/PracticesPreview"
import { AboutPreview } from "./Sections/AboutPreview"
import { Quote } from "./Sections/Quote"
import { Expertise } from "./Sections/Expertise"
import { NewsPreview } from "./Sections/NewsPreview"

export function HomePage() {
  return (
    <>
      <Hero />
      <PracticesPreview />
      <AboutPreview />
      <Quote />
      <Expertise />
      <NewsPreview />
    </>
  )
}

