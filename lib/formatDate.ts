/**
 * Format an ISO date (e.g. "2026-06-12") as a localized long date,
 * matching the design: "12 червня 2026" / "June 12, 2026".
 *
 * Dates are treated as UTC so a date-only value never shifts a day across
 * timezones. The Ukrainian long format appends " р." — it is trimmed to match
 * the design.
 */
export function formatArticleDate(iso: string, locale: string): string {
  const formatted = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

  return formatted.replace(/\s*р\.$/u, "");
}
