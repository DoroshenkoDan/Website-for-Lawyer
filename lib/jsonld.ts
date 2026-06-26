import { siteConfig } from "@/config/site";

/** Structured data describing the attorney (schema.org/Attorney). */
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
    ...(siteConfig.contacts.address
      ? { address: siteConfig.contacts.address }
      : {}),
  };
}
