import "server-only";
import type { NewsItem } from "@/types/news";
import type { MediaCategory, MediaItem } from "@/types/media";
import { apiFetch, apiFetchWithMeta } from "./client";
import { wpPostListSchema, mapWpPost } from "./wp";

const MEDIA_REVALIDATE_SECONDS = 300;

export const MEDIA_TAGS: Partial<Record<MediaCategory, number[]>> = {
  tv: [40, 36],
  radio: [42, 55],
  seminars: [32, 44],
};

export async function getMediaPage(
  category: MediaCategory,
  page: number,
  perPage: number,
): Promise<{ items: MediaItem[]; totalPages: number }> {
  const tags = MEDIA_TAGS[category];
  if (!tags) return { items: [], totalPages: 1 };

  const query = new URLSearchParams({
    tags: tags.join(","),
    orderby: "date",
    order: "desc",
    per_page: String(perPage),
    page: String(page),
    _embed: "1",
    _fields: "id,slug,date,title,excerpt,_links,_embedded",
  }).toString();

  const { data, totalPages } = await apiFetchWithMeta(`/posts?${query}`, {
    next: { revalidate: MEDIA_REVALIDATE_SECONDS },
  });

  const items = wpPostListSchema.parse(data).map((post) => {
    const mapped = mapWpPost(post);
    return {
      id: mapped.id,
      title: mapped.title,
      category,
      slug: mapped.slug,
      thumbnail: mapped.coverImage,
      publishedAt: mapped.publishedAt,
    } satisfies MediaItem;
  });

  return { items, totalPages };
}

export async function getMediaCount(category: MediaCategory): Promise<number> {
  const tags = MEDIA_TAGS[category];
  if (!tags) return 0;

  const query = new URLSearchParams({
    tags: tags.join(","),
    per_page: "1",
    _fields: "id",
  }).toString();

  const { total } = await apiFetchWithMeta(`/posts?${query}`, {
    next: { revalidate: MEDIA_REVALIDATE_SECONDS },
  });

  return total;
}

export async function getMediaBySlug(slug: string): Promise<NewsItem | null> {
  const query = new URLSearchParams({
    slug,
    per_page: "1",
    _embed: "1",
    _fields: "id,slug,date,title,excerpt,content,_links,_embedded",
  }).toString();

  const data = await apiFetch(`/posts?${query}`, {
    next: { revalidate: MEDIA_REVALIDATE_SECONDS },
  });

  const post = wpPostListSchema.parse(data)[0];
  return post ? mapWpPost(post) : null;
}
