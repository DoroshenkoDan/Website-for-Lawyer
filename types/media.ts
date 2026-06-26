/** A media item (article, interview, video) fetched from the backend. */
export interface MediaItem {
  id: string;
  title: string;
  type: "article" | "video" | "interview" | "publication";
  url: string;
  source?: string;
  thumbnail?: string;
  publishedAt: string; // ISO date
}
