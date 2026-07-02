/** Media coverage category — drives the tabs/sections on the Media page. */
export type MediaCategory = "tv" | "radio" | "print" | "seminars";

/** A media item (TV / radio / print / seminar) fetched from the backend. */
export interface MediaItem {
  id: string;
  title: string;
  category: MediaCategory;
  url: string;
  source?: string;
  thumbnail?: string;
  publishedAt: string; // ISO date
}

/** One category with its items, in display order. */
export interface MediaGroup {
  category: MediaCategory;
  items: MediaItem[];
}

/** Display order for the media category tabs/sections. */
export const MEDIA_CATEGORIES: readonly MediaCategory[] = [
  "tv",
  "radio",
  "print",
  "seminars",
];
