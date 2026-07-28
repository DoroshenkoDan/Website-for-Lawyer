import { expect, test } from "vitest";

test("vitest resolves tsconfig paths", async () => {
  const { routing } = await import("@/i18n/routing");
  expect(routing.defaultLocale).toBe("uk");
});
