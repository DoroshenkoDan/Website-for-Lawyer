import { describe, expect, test } from "vitest";
import { resolveLegacyRedirect } from "@/lib/redirects/resolve";
import { LEGACY_POST_REDIRECTS } from "@/lib/redirects/legacy-posts";
import { LEGACY_PAGE_REDIRECTS } from "@/lib/redirects/legacy-pages";

describe("resolveLegacyRedirect", () => {
  test("maps a latin page path", () => {
    expect(resolveLegacyRedirect("/contact")).toBe("/contacts");
  });

  test("ignores a trailing slash", () => {
    expect(resolveLegacyRedirect("/blog/")).toBe("/news");
  });

  test("maps a decoded cyrillic path", () => {
    expect(resolveLegacyRedirect("/семінари/")).toBe("/media");
  });

  test("maps a percent-encoded cyrillic path", () => {
    expect(
      resolveLegacyRedirect(
        "/%d1%81%d0%b5%d0%bc%d1%96%d0%bd%d0%b0%d1%80%d0%b8/",
      ),
    ).toBe("/media");
  });

  test("maps a nested practice path", () => {
    expect(resolveLegacyRedirect("/практики/crime-law/")).toBe(
      "/practices/criminal-law",
    );
  });

  test("returns null for an unknown path", () => {
    expect(resolveLegacyRedirect("/партнери/")).toBeNull();
  });

  test("returns null for the root", () => {
    expect(resolveLegacyRedirect("/")).toBeNull();
  });

  test("survives malformed percent-encoding", () => {
    expect(resolveLegacyRedirect("/%e0%a4%a")).toBeNull();
  });

  test("does not fall through to Object prototype keys", () => {
    expect(resolveLegacyRedirect("/__proto__")).toBeNull();
    expect(resolveLegacyRedirect("/constructor")).toBeNull();
  });
});

describe("LEGACY_POST_REDIRECTS", () => {
  test("is populated", () => {
    expect(LEGACY_POST_REDIRECTS.size).toBeGreaterThan(250);
  });

  test("every key is a single root segment", () => {
    for (const key of LEGACY_POST_REDIRECTS.keys()) {
      expect(key.startsWith("/")).toBe(true);
      expect(key.slice(1).includes("/")).toBe(false);
    }
  });

  test("every target lands in news or media", () => {
    for (const target of LEGACY_POST_REDIRECTS.values()) {
      expect(target.startsWith("/news/") || target.startsWith("/media/")).toBe(
        true,
      );
    }
  });

  test("no post shadows an app route", () => {
    for (const key of LEGACY_POST_REDIRECTS.keys()) {
      expect([
        "/about",
        "/news",
        "/media",
        "/practices",
        "/contacts",
      ]).not.toContain(key);
    }
  });

  test("no post collides with a legacy page redirect", () => {
    for (const key of LEGACY_POST_REDIRECTS.keys()) {
      expect(LEGACY_PAGE_REDIRECTS.has(key)).toBe(false);
    }
  });

  test("resolver reaches a generated entry", () => {
    const [from, to] = [...LEGACY_POST_REDIRECTS.entries()][0];
    expect(resolveLegacyRedirect(from)).toBe(to);
    expect(resolveLegacyRedirect(`${from}/`)).toBe(to);
    expect(resolveLegacyRedirect(encodeURI(from))).toBe(to);
  });
});
