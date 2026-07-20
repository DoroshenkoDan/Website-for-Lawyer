export interface FeaturedArticleSource {
  id: string;
  slug: string;
  publishedAt: string;
  coverImage: string | null;
}

export const featuredArticles = [
  { id: "nazk-checklist", slug: "nazk-checklist", publishedAt: "2026-06-12", coverImage: null },
  { id: "proceedings-opened", slug: "proceedings-opened", publishedAt: "2026-06-03", coverImage: null },
  { id: "declaration-mistakes", slug: "declaration-mistakes", publishedAt: "2026-05-28", coverImage: null },
] as const satisfies readonly FeaturedArticleSource[];
