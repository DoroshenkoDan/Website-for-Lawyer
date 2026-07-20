export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  coverImage?: string;
  publishedAt: string;
}
