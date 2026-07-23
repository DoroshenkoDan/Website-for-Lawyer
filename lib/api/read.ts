import "server-only";
import type { NewsItem } from "@/types/news";
import type { MediaCategory, MediaItem } from "@/types/media";
import { MEDIA_CATEGORIES } from "@/types/media";
import { getLatestNews, getNewsPage, getNewsBySlug } from "./news";
import { getMediaPage, getMediaCount, getMediaBySlug, MEDIA_TAGS } from "./media";
import { getPublications, type Publications } from "./publications";
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

export async function readNewsPage(
  page: number,
  perPage = 10,
): Promise<{ items: NewsItem[]; totalPages: number }> {
  try {
    return await getNewsPage(page, perPage);
  } catch {
    if (isDev) {
      const all = getMockNews("uk");
      const start = (page - 1) * perPage;
      return {
        items: all.slice(start, start + perPage),
        totalPages: Math.max(1, Math.ceil(all.length / perPage)),
      };
    }
    return { items: [], totalPages: 0 };
  }
}

export async function readNewsArticle(
  slug: string,
  locale: string,
): Promise<NewsItem | null> {
  try {
    return await getNewsBySlug(slug);
  } catch {
    return isDev ? getMockNewsBySlug(slug, locale) : null;
  }
}

function sampleFor(category: MediaCategory): MediaItem[] {
  return sampleMedia.filter((item) => item.category === category);
}

export async function readMediaPanel(
  category: MediaCategory,
  page: number,
  perPage = 10,
): Promise<{ items: MediaItem[]; totalPages: number }> {
  const fallback = () =>
    isDev
      ? { items: sampleFor(category), totalPages: 1 }
      : { items: [], totalPages: 1 };

  if (!MEDIA_TAGS[category]) return fallback();

  try {
    return await getMediaPage(category, page, perPage);
  } catch {
    return fallback();
  }
}

export async function readMediaArticle(
  slug: string,
): Promise<NewsItem | null> {
  try {
    return await getMediaBySlug(slug);
  } catch {
    return null;
  }
}

export async function readPublications(): Promise<Publications> {
  try {
    return await getPublications();
  } catch {
    return { html: "", count: 0 };
  }
}

export async function readMediaCounts(): Promise<Record<MediaCategory, number>> {
  const entries = await Promise.all(
    MEDIA_CATEGORIES.map(async (category) => {
      const fallback = isDev ? sampleFor(category).length : 0;
      if (category === "print") {
        try {
          return [category, (await getPublications()).count] as const;
        } catch {
          return [category, fallback] as const;
        }
      }
      if (!MEDIA_TAGS[category]) return [category, fallback] as const;
      try {
        return [category, await getMediaCount(category)] as const;
      } catch {
        return [category, fallback] as const;
      }
    }),
  );
  return Object.fromEntries(entries) as Record<MediaCategory, number>;
}
