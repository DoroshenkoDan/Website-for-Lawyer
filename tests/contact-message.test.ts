import { describe, expect, test } from "vitest";
import { buildContactMessage } from "@/lib/mail/contact-message";

describe("buildContactMessage", () => {
  test("puts the sender name in the subject", () => {
    const message = buildContactMessage({
      name: "Олена",
      email: "olena@example.com",
      message: "Доброго дня",
    });
    expect(message.subject).toContain("Олена");
  });

  test("uses the sender address as reply-to", () => {
    const message = buildContactMessage({
      name: "Олена",
      email: "olena@example.com",
      message: "Доброго дня",
    });
    expect(message.replyTo).toBe("olena@example.com");
  });

  test("includes phone, locale and body", () => {
    const message = buildContactMessage({
      name: "Олена",
      email: "olena@example.com",
      phone: "+380671112233",
      locale: "pl",
      message: "Потрібна консультація",
    });
    expect(message.text).toContain("+380671112233");
    expect(message.text).toContain("pl");
    expect(message.text).toContain("Потрібна консультація");
  });

  test("marks a missing phone", () => {
    const message = buildContactMessage({
      name: "Олена",
      email: "olena@example.com",
      message: "Доброго дня",
    });
    expect(message.text).toContain("—");
  });

  test("strips CRLF from the subject", () => {
    const message = buildContactMessage({
      name: "Олена\r\nBcc: attacker@example.com",
      email: "olena@example.com",
      message: "Доброго дня",
    });
    expect(message.subject).not.toContain("\r");
    expect(message.subject).not.toContain("\n");
  });

  test("keeps newlines inside the body", () => {
    const message = buildContactMessage({
      name: "Олена",
      email: "olena@example.com",
      message: "Перший рядок\nДругий рядок",
    });
    expect(message.text).toContain("Перший рядок\nДругий рядок");
  });
});
