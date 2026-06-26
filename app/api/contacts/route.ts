import { NextResponse, type NextRequest } from "next/server";
import { ZodError } from "zod";
import { submitContact } from "@/lib/api/contacts";
import { contactRequestSchema } from "@/lib/api/schemas";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
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
