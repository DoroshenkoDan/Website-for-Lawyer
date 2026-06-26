"use client";

import { useQuery } from "@tanstack/react-query";
import type { MediaItem } from "@/types/media";

async function fetchMedia(locale: string): Promise<MediaItem[]> {
  const res = await fetch(`/api/media?locale=${locale}`);
  if (!res.ok) throw new Error("Failed to load media");
  return res.json();
}

export function useMedia(locale: string) {
  return useQuery({
    queryKey: ["media", locale],
    queryFn: () => fetchMedia(locale),
  });
}
