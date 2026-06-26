import { Hero } from "./Sections/Hero";
import { Metrics } from "./Sections/Metrics";
import { PracticesPreview } from "./Sections/PracticesPreview";

export function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <PracticesPreview />
    </>
  );
}
