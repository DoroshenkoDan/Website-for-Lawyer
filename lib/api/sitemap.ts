import "server-only";
import { z } from "zod";
import { apiFetchWithMeta } from "./client";

const SITEMAP_REVALIDATE_SECONDS = 3600;
const NEWS_CATEGORY_ID = 21;
const PER_PAGE = 100;

const postRefListSchema = z.array(
  z.object({
    slug: z.string(),
    modified_gmt: z.string(),
    categories: z.array(z.number()).optional(),
  }),
);

export type PostRef = { slug: string; lastModified: string };

export async function getSitemapRefs(): Promise<{
  news: PostRef[];
  media: PostRef[];
}> {
  const news: PostRef[] = [];
  const media: PostRef[] = [];
  const seen = new Set<string>();

  for (let page = 1; ; page++) {
    const query = new URLSearchParams({
      orderby: "date",
      order: "desc",
      per_page: String(PER_PAGE),
      page: String(page),
      _fields: "slug,modified_gmt,categories",
    }).toString();

    const { data, totalPages } = await apiFetchWithMeta(`/posts?${query}`, {
      next: { revalidate: SITEMAP_REVALIDATE_SECONDS },
    });

    const batch = postRefListSchema.parse(data);
    for (const post of batch) {
      if (seen.has(post.slug)) continue;
      seen.add(post.slug);
      const ref = {
        slug: post.slug,
        lastModified: `${post.modified_gmt}Z`,
      };
      if (post.categories?.includes(NEWS_CATEGORY_ID)) {
        news.push(ref);
      } else {
        media.push(ref);
      }
    }
    if (page >= totalPages || batch.length === 0) break;
  }

  return { news, media };
}
