import "server-only";
import type { NewsItem } from "@/types/news";
import { apiFetch, apiFetchWithMeta } from "./client";
import { newsItemSchema } from "./schemas";
import { wpPostListSchema, mapWpPost } from "./wp";

const NEWS_CATEGORY_ID = 21;
const NEWS_REVALIDATE_SECONDS = 300;

function newsQuery(extra: Record<string, string>): string {
  return new URLSearchParams({
    categories: String(NEWS_CATEGORY_ID),
    _embed: "1",
    _fields: "id,slug,date,title,excerpt,_links,_embedded",
    ...extra,
  }).toString();
}

export async function getLatestNews(limit: number): Promise<NewsItem[]> {
  const data = await apiFetch(`/posts?${newsQuery({ per_page: String(limit) })}`, {
    next: { revalidate: NEWS_REVALIDATE_SECONDS },
  });
  return wpPostListSchema.parse(data).map(mapWpPost);
}

export async function getNewsPage(
  page: number,
  perPage: number,
): Promise<{ items: NewsItem[]; totalPages: number }> {
  const { data, totalPages } = await apiFetchWithMeta(
    `/posts?${newsQuery({ per_page: String(perPage), page: String(page) })}`,
    { next: { revalidate: NEWS_REVALIDATE_SECONDS } },
  );
  return { items: wpPostListSchema.parse(data).map(mapWpPost), totalPages };
}

export async function getNewsBySlug(slug: string, locale: string) {
  const data = await apiFetch(
    `/news/${encodeURIComponent(slug)}?locale=${encodeURIComponent(locale)}`,
  );
  return newsItemSchema.parse(data);
}
