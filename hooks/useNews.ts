"use client";

import { useQuery } from "@tanstack/react-query";
import type { NewsItem } from "@/types/news";
import { getMockNews, MOCK_NEWS_DELAY_MS } from "@/config/mockNews";

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
