import { afterEach, describe, expect, test, vi } from "vitest";

function wpResponse(body: unknown, totalPages: number) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "X-WP-TotalPages": String(totalPages),
      "X-WP-Total": String(Array.isArray(body) ? body.length : 0),
    },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("getSitemapRefs", () => {
  test("walks every page and splits by the news category", async () => {
    vi.stubEnv("API_BASE_URL", "https://cms.example.com/wp-json/wp/v2");

    const fetchMock = vi.fn(async (input: string | URL) =>
      String(input).includes("&page=1&")
        ? wpResponse(
            [
              {
                slug: "novyna-1",
                modified_gmt: "2024-01-01T00:00:00",
                categories: [21],
              },
              {
                slug: "efir-1",
                modified_gmt: "2024-03-01T00:00:00",
                categories: [7],
              },
            ],
            2,
          )
        : wpResponse(
            [
              {
                slug: "novyna-2",
                modified_gmt: "2024-02-01T00:00:00",
                categories: [21, 7],
              },
            ],
            2,
          ),
    );

    vi.stubGlobal("fetch", fetchMock);

    const { getSitemapRefs } = await import("@/lib/api/sitemap");
    const refs = await getSitemapRefs();

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(refs.news.map((r) => r.slug)).toEqual(["novyna-1", "novyna-2"]);
    expect(refs.media.map((r) => r.slug)).toEqual(["efir-1"]);
  });

  test("treats a post without categories as media", async () => {
    vi.stubEnv("API_BASE_URL", "https://cms.example.com/wp-json/wp/v2");
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        wpResponse([{ slug: "orphan", modified_gmt: "2024-01-01T00:00:00" }], 1),
      ),
    );

    const { getSitemapRefs } = await import("@/lib/api/sitemap");
    const refs = await getSitemapRefs();

    expect(refs.news).toEqual([]);
    expect(refs.media.map((r) => r.slug)).toEqual(["orphan"]);
  });

  test("normalises the WP timestamp to UTC", async () => {
    vi.stubEnv("API_BASE_URL", "https://cms.example.com/wp-json/wp/v2");
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        wpResponse(
          [
            {
              slug: "a",
              modified_gmt: "2024-01-01T10:20:30",
              categories: [21],
            },
          ],
          1,
        ),
      ),
    );

    const { getSitemapRefs } = await import("@/lib/api/sitemap");
    const refs = await getSitemapRefs();

    expect(refs.news[0].lastModified).toBe("2024-01-01T10:20:30Z");
  });

  test("does not repeat a slug seen on an earlier page", async () => {
    vi.stubEnv("API_BASE_URL", "https://cms.example.com/wp-json/wp/v2");
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        wpResponse(
          [{ slug: "dup", modified_gmt: "2024-01-01T00:00:00", categories: [21] }],
          2,
        ),
      ),
    );

    const { getSitemapRefs } = await import("@/lib/api/sitemap");
    const refs = await getSitemapRefs();

    expect(refs.news.map((r) => r.slug)).toEqual(["dup"]);
  });
});
