import type { PracticeId } from "./practices";

export interface FeaturedPractice {
  practiceId: PracticeId;
  image: string | null;
  imagePosition: string;
}

export const featuredPractices = [
  {
    practiceId: "electronic-declarations",
    image: "/images/HomePage/HomePractices1.webp",
    imagePosition: "50% 50%",
  },
  {
    practiceId: "civil-servants-support",
    image: "/images/HomePage/HomePractices2.webp",
    imagePosition: "50% 20%",
  },
  {
    practiceId: "criminal-law",
    image: "/images/HomePage/HomePractices3.webp",
    imagePosition: "50% 50%",
  },
] as const satisfies readonly FeaturedPractice[];
