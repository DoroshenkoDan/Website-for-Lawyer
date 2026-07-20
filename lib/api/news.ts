import "server-only";
import { apiFetch } from "./client";
import { newsItemSchema, newsListSchema } from "./schemas";

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
