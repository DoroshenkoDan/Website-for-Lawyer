"use client";

import { useQuery } from "@tanstack/react-query";
import type { NewsItem } from "@/types/news";
import { getMockNews, MOCK_NEWS_DELAY_MS } from "@/config/mockNews";

/**
 * TEMP: serves mock data after an artificial delay so the News page can be
 * previewed. To restore live data, delete `config/mockNews.ts` and swap the
 * body for the real fetch:
 *
 *   const res = await fetch(`/api/news?locale=${locale}`);
 *   if (!res.ok) throw new Error("Failed to load news");
 *   return res.json();
 */
async function fetchNews(locale: string): Promise<NewsItem[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_NEWS_DELAY_MS));
  return getMockNews(locale);
}

export function useNews(locale: string) {
  return useQuery({
    queryKey: ["news", locale],
    queryFn: () => fetchNews(locale),
  });
}
