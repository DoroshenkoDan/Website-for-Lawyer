import "server-only";
import type { NewsItem } from "@/types/news";
import { apiFetch } from "./client";
import { newsItemSchema, newsListSchema } from "./schemas";
import { wpPostListSchema, mapWpPost } from "./wp";

const NEWS_CATEGORY_ID = 21;
const NEWS_REVALIDATE_SECONDS = 300;

export async function getLatestNews(limit: number): Promise<NewsItem[]> {
  const params = new URLSearchParams({
    categories: String(NEWS_CATEGORY_ID),
    per_page: String(limit),
    _embed: "1",
    _fields: "id,slug,date,title,excerpt,_links,_embedded",
  });
  const data = await apiFetch(`/posts?${params.toString()}`, {
    next: { revalidate: NEWS_REVALIDATE_SECONDS },
  });
  return wpPostListSchema.parse(data).map(mapWpPost);
}

export async function getNews(locale: string) {
  const data = await apiFetch(`/news?locale=${encodeURIComponent(locale)}`);
  return newsListSchema.parse(data);
}

export async function getNewsBySlug(slug: string, locale: string) {
  const data = await apiFetch(
    `/news/${encodeURIComponent(slug)}?locale=${encodeURIComponent(locale)}`,
  );
  return newsItemSchema.parse(data);
}
