import { NextResponse, type NextRequest } from "next/server";
import { ZodError } from "zod";
import { submitContact } from "@/lib/api/contacts";
import { contactRequestSchema } from "@/lib/api/schemas";

function isHoneypotFilled(body: unknown): boolean {
  if (typeof body !== "object" || body === null) return false;
  const value = (body as Record<string, unknown>).website;
  return typeof value === "string" && value.trim() !== "";
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (isHoneypotFilled(body)) {
    return NextResponse.json({ ok: true });
  }

  try {
    const payload = contactRequestSchema.parse(body);
    await submitContact(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", issues: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
