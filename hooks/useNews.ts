"use client";

import { useQuery } from "@tanstack/react-query";
import type { NewsItem } from "@/types/news";

async function fetchNews(locale: string): Promise<NewsItem[]> {
  const res = await fetch(`/api/news?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to load news");
  return res.json();
}

export function useNews(locale: string) {
  return useQuery({
    queryKey: ["news", locale],
    queryFn: () => fetchNews(locale),
  });
}
