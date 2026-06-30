"use client"

import { useTranslations } from "next-intl"
import { featuredArticles } from "@/config/featuredArticles"

export interface FeaturedNewsItem {
  id: string
  slug: string
  category: string
  title: string
  excerpt: string
  /** ISO publish date. */
  publishedAt: string
  /** Cover image path or `null` for a placeholder. */
  coverImage: string | null
}

interface FeaturedNewsResult {
  data: FeaturedNewsItem[]
  isLoading: boolean
  isError: boolean
}

/**
 * Source for the homepage news preview.
 *
 * Currently assembled synchronously from static config + i18n copy, so
 * `isLoading`/`isError` are constant. The component already renders skeletons
 * on `isLoading` — when the backend is ready, swap the body for a react-query
 * fetch of `/api/news` (latest 3) and the loading UI works unchanged.
 */
export function useFeaturedNews(): FeaturedNewsResult {
  const t = useTranslations("home.newsPreview.articles")

  const data = featuredArticles.map((article) => ({
    id: article.id,
    slug: article.slug,
    publishedAt: article.publishedAt,
    coverImage: article.coverImage,
    category: t(`${article.id}.category`),
    title: t(`${article.id}.title`),
    excerpt: t(`${article.id}.excerpt`),
  }))

  return { data, isLoading: false, isError: false }
}
