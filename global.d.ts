import type { routing } from "./i18n/routing";
import type messages from "./messages/uk.json";

// Type-safe locales & message keys for next-intl
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

declare global {
  /**
   * Supported locale union. Route `params.locale` is typed `string` by Next,
   * so cast it (`locale as Loc`) when passing to next-intl server APIs.
   */
  type Loc = (typeof routing.locales)[number];
}
