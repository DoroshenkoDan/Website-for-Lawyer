export function formatArticleDate(iso: string, locale: string): string {
  const formatted = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

  return formatted.replace(/\s*р\.$/u, "");
}
