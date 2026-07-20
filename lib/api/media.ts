import "server-only";
import { apiFetch } from "./client";
import { mediaListSchema } from "./schemas";

export async function getMedia(locale: string) {
  const data = await apiFetch(`/media?locale=${encodeURIComponent(locale)}`);
  return mediaListSchema.parse(data);
}
