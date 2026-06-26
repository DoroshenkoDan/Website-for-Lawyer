import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Ukrainian, English, Polish
  locales: ["uk", "en", "pl"],
  defaultLocale: "uk",
  // Default locale (uk) is served at "/", others at "/en", "/pl"
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
