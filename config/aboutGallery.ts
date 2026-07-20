export interface AboutGalleryItem {
  id: "A" | "B" | "C" | "D" | "E";
  image: string | null;
}

export const aboutGallery = [
  { id: "A", image: null },
  { id: "B", image: null },
  { id: "C", image: null },
  { id: "D", image: null },
  { id: "E", image: null },
] as const satisfies readonly AboutGalleryItem[];
