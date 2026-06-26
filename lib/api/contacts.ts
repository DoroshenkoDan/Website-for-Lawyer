import "server-only";
import { apiFetch } from "./client";
import { contactRequestSchema, type ContactRequestInput } from "./schemas";

/** Submit a contact / call-back request. TODO: confirm endpoint with backend. */
export async function submitContact(input: ContactRequestInput) {
  const payload = contactRequestSchema.parse(input);
  await apiFetch(`/contact`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
