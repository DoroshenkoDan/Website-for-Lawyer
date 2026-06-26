import "server-only";
import { apiConfig } from "./config";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Low-level fetch wrapper for the existing backend.
 * Runs server-side only; injects auth and base URL.
 * Callers validate the returned JSON with a zod schema.
 */
export async function apiFetch(
  path: string,
  init: RequestInit = {},
): Promise<unknown> {
  if (!apiConfig.baseUrl) {
    // Backend not wired yet — surface a clear error the proxy can translate.
    throw new ApiError(500, "API_BASE_URL is not configured");
  }

  const res = await fetch(`${apiConfig.baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(apiConfig.apiKey
        ? { Authorization: `Bearer ${apiConfig.apiKey}` }
        : {}),
      ...init.headers,
    },
  });

  if (!res.ok) {
    throw new ApiError(res.status, `Backend request failed: ${path}`);
  }

  return res.json();
}
