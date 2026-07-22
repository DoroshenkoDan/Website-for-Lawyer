import { siteConfig } from "@/config/site";

export function attorneyJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.attorneyName,
    url: siteConfig.url,
    inLanguage: locale,
    ...(siteConfig.contacts.email ? { email: siteConfig.contacts.email } : {}),
    ...(siteConfig.contacts.phone
      ? { telephone: siteConfig.contacts.phone }
      : {}),
  };
}
