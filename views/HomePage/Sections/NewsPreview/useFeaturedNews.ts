"use client"

import { useTranslations } from "next-intl"
import { featuredArticles } from "@/config/featuredArticles"

export interface FeaturedNewsItem {
  id: string
  slug: string
  category: string
  title: string
  excerpt: string
  publishedAt: string
  coverImage: string | null
}

interface FeaturedNewsResult {
  data: FeaturedNewsItem[]
  isLoading: boolean
  isError: boolean
}

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
