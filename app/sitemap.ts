import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { practices } from "@/config/practices";

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

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = url(locale, path);
    }
    return {
      url: url(routing.defaultLocale, path),
      alternates: { languages },
    };
  });
}
