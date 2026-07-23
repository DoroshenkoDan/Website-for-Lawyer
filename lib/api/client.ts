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

async function request(path: string, init: RequestInit): Promise<Response> {
  if (!apiConfig.baseUrl) {
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

  return res;
}

export async function apiFetch(
  path: string,
  init: RequestInit = {},
): Promise<unknown> {
  const res = await request(path, init);
  return res.json();
}

export async function apiFetchWithMeta(
  path: string,
  init: RequestInit = {},
): Promise<{ data: unknown; totalPages: number; total: number }> {
  const res = await request(path, init);
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");
  const total = Number(res.headers.get("X-WP-Total") ?? "0");
  return {
    data: await res.json(),
    totalPages: Number.isFinite(totalPages) && totalPages > 0 ? totalPages : 1,
    total: Number.isFinite(total) && total > 0 ? total : 0,
  };
}
