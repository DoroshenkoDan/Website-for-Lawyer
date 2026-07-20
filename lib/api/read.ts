import "server-only";
import type { NewsItem } from "@/types/news";
import type { MediaItem } from "@/types/media";
import { getLatestNews, getNews, getNewsBySlug } from "./news";
import { getMedia } from "./media";
import { getMockNews, getMockNewsBySlug } from "@/config/mockNews";
import { sampleMedia } from "@/config/sampleMedia";

const isDev = process.env.NODE_ENV === "development";

export async function readLatestNews(limit = 3): Promise<NewsItem[]> {
  try {
    return await getLatestNews(limit);
  } catch {
    return isDev ? getMockNews("uk").slice(0, limit) : [];
  }
}

export async function readNewsList(locale: string): Promise<NewsItem[]> {
  try {
    return await getNews(locale);
  } catch {
    return isDev ? getMockNews(locale) : [];
  }
}

export async function readNewsArticle(
  slug: string,
  locale: string,
): Promise<NewsItem | null> {
  try {
    return await getNewsBySlug(slug, locale);
  } catch {
    return isDev ? getMockNewsBySlug(slug, locale) : null;
  }
}

export async function readMediaList(locale: string): Promise<MediaItem[]> {
  try {
    const items = await getMedia(locale);
    return items.length === 0 && isDev ? sampleMedia : items;
  } catch {
    return isDev ? sampleMedia : [];
  }
}
