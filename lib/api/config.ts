import "server-only";

/**
 * Server-only backend configuration. These env vars are never exposed to the
 * browser — the app talks to the backend exclusively through Next route handlers
 * under `app/api/*` (proxy pattern).
 */
export const apiConfig = {
  baseUrl: process.env.API_BASE_URL ?? "",
  apiKey: process.env.API_KEY ?? "",
};
