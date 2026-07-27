export interface AboutGalleryItem {
  id: "A" | "B" | "C" | "D" | "E";
  image: string | null;
}

export const aboutGallery = [
  { id: "A", image: "/images/HomePage/HomePageAbout1.webp" },
  { id: "B", image: "/images/HomePage/HomePageAbout7.webp" },
  { id: "C", image: "/images/HomePage/HomePageAbout6.webp" },
  { id: "D", image: "/images/HomePage/HomePageAbout4.webp" },
  { id: "E", image: "/images/HomePage/HomePageAbout5.webp" },
] as const satisfies readonly AboutGalleryItem[];
