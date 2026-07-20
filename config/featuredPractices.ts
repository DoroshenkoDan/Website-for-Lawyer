import type { PracticeId } from "./practices";

export interface FeaturedPractice {
  practiceId: PracticeId;
  image: string | null;
}

export const featuredPractices = [
  { practiceId: "electronic-declarations", image: null },
  { practiceId: "civil-servants-support", image: null },
  { practiceId: "criminal-law", image: null },
] as const satisfies readonly FeaturedPractice[];
