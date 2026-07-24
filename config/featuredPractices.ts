import type { PracticeId } from "./practices";

export interface FeaturedPractice {
  practiceId: PracticeId;
  image: string | null;
}

export const featuredPractices = [
  { practiceId: "electronic-declarations", image: "/images/HomePage/HomePagePract3.webp" },
  { practiceId: "civil-servants-support", image: "/images/HomePage/HomePagePract1.webp" },
  { practiceId: "criminal-law", image: "/images/HomePage/HomePagePract2.webp" },
] as const satisfies readonly FeaturedPractice[];
