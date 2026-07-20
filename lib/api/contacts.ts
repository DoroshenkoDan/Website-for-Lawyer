import "server-only";
import { apiFetch } from "./client";
import { contactRequestSchema, type ContactRequestInput } from "./schemas";

export async function submitContact(input: ContactRequestInput) {
  const payload = contactRequestSchema.parse(input);
  await apiFetch(`/contact`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
