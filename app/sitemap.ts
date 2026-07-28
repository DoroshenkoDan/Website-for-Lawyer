import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { practices } from "@/config/practices";
import { getSitemapRefs, type PostRef } from "@/lib/api/sitemap";

const staticPaths = [
  "",
  "/about",
  "/about/awards",
  "/about/in-memory",
  "/practices",
  "/media",
  "/news",
  "/contacts",
  ...practices.map((p) => p.href),
];

function url(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${path}`;
}

function entry(path: string, lastModified?: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = url(locale, path);
  }
  return {
    url: url(routing.defaultLocale, path),
    ...(lastModified ? { lastModified } : {}),
    alternates: { languages },
  };
}

function postEntry(section: string) {
  return (ref: PostRef) =>
    entry(`/${section}/${encodeURIComponent(ref.slug)}`, ref.lastModified);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { news, media } = await getSitemapRefs();
  return [
    ...staticPaths.map((path) => entry(path)),
    ...news.map(postEntry("news")),
    ...media.map(postEntry("media")),
  ];
}
