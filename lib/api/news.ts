import "server-only";
import { apiFetch } from "./client";
import { newsItemSchema, newsListSchema } from "./schemas";

/** Fetch the news list for a locale. TODO: confirm endpoint/params with backend. */
export async function getNews(locale: string) {
  const data = await apiFetch(`/news?locale=${encodeURIComponent(locale)}`);
  return newsListSchema.parse(data);
}

/** Fetch a single news article by slug. TODO: confirm endpoint with backend. */
export async function getNewsBySlug(slug: string, locale: string) {
  const data = await apiFetch(
    `/news/${encodeURIComponent(slug)}?locale=${encodeURIComponent(locale)}`,
  );
  return newsItemSchema.parse(data);
}
