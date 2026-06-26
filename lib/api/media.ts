import "server-only";
import { apiFetch } from "./client";
import { mediaListSchema } from "./schemas";

/** Fetch media items for a locale. TODO: confirm endpoint/params with backend. */
export async function getMedia(locale: string) {
  const data = await apiFetch(`/media?locale=${encodeURIComponent(locale)}`);
  return mediaListSchema.parse(data);
}
