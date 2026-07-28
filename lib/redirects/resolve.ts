import { LEGACY_PAGE_REDIRECTS } from "./legacy-pages";
import { LEGACY_POST_REDIRECTS } from "./legacy-posts";

function normalize(pathname: string): string {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }
  const lowered = decoded.toLowerCase();
  return lowered.length > 1 && lowered.endsWith("/")
    ? lowered.slice(0, -1)
    : lowered;
}

export function resolveLegacyRedirect(pathname: string): string | null {
  const key = normalize(pathname);
  const target =
    LEGACY_PAGE_REDIRECTS.get(key) ?? LEGACY_POST_REDIRECTS.get(key) ?? null;
  return target === key ? null : target;
}
