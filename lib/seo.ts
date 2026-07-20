import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

function localizedPath(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}` || "/";
}

export function buildPageMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: string;
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = localizedPath(l, path);
  }
  languages["x-default"] = localizedPath(routing.defaultLocale, path);

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages,
    },
  };
}
