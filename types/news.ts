/** A news article fetched from the backend (shape to be confirmed). */
export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  coverImage?: string;
  publishedAt: string; // ISO date
}
