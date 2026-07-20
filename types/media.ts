export type MediaCategory = "tv" | "radio" | "print" | "seminars";

export interface MediaItem {
  id: string;
  title: string;
  category: MediaCategory;
  url: string;
  source?: string;
  thumbnail?: string;
  publishedAt: string;
}

export interface MediaGroup {
  category: MediaCategory;
  items: MediaItem[];
}

export const MEDIA_CATEGORIES: readonly MediaCategory[] = [
  "tv",
  "radio",
  "print",
  "seminars",
];
