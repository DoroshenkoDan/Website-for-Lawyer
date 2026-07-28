import "server-only";
import { buildContactMessage } from "@/lib/mail/contact-message";
import { getTransport, mailConfig } from "@/lib/mail/transport";
import { contactRequestSchema, type ContactRequestInput } from "./schemas";

export async function submitContact(input: ContactRequestInput) {
  const payload = contactRequestSchema.parse(input);
  const message = buildContactMessage(payload);
  await getTransport().sendMail({
    from: mailConfig.from,
    to: mailConfig.to,
    replyTo: message.replyTo,
    subject: message.subject,
    text: message.text,
  });
}
