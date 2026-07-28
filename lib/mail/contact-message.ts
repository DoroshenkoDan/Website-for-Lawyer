import type { ContactRequestInput } from "@/lib/api/schemas";

export type ContactMessage = {
  subject: string;
  text: string;
  replyTo: string;
};

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function buildContactMessage(
  input: ContactRequestInput,
): ContactMessage {
  const name = singleLine(input.name);
  const text = [
    `Ім'я: ${name}`,
    `Email: ${singleLine(input.email)}`,
    `Телефон: ${input.phone ? singleLine(input.phone) : "—"}`,
    `Мова: ${input.locale ?? "uk"}`,
    "",
    input.message,
  ].join("\n");

  return {
    subject: `Заявка з сайту — ${name}`,
    text,
    replyTo: singleLine(input.email),
  };
}
