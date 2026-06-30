/**
 * The curated articles shown in the homepage "News / Blog" preview
 * (`NewsPreview`). Array order defines display order.
 *
 * Only structural / asset data lives here — the copy (category, title,
 * excerpt) comes from `messages` under `home.newsPreview.articles.<id>`.
 *
 * This is the static stand-in for the future news API: the shape mirrors
 * `NewsItem` (`types/news`) so swapping `useFeaturedNews` over to live data
 * (latest 3 from `/api/news`) is a drop-in change.
 */
export interface FeaturedArticleSource {
  /** Stable id; matches `home.newsPreview.articles.<id>` in messages. */
  id: string;
  /** Article slug, used to build the `/news/<slug>` link. */
  slug: string;
  /** ISO publish date; formatted per-locale at render time. */
  publishedAt: string;
  /** Cover image path under `public/`; `null` renders a placeholder. */
  coverImage: string | null;
}

export const featuredArticles = [
  { id: "nazk-checklist", slug: "nazk-checklist", publishedAt: "2026-06-12", coverImage: null },
  { id: "proceedings-opened", slug: "proceedings-opened", publishedAt: "2026-06-03", coverImage: null },
  { id: "declaration-mistakes", slug: "declaration-mistakes", publishedAt: "2026-05-28", coverImage: null },
] as const satisfies readonly FeaturedArticleSource[];
