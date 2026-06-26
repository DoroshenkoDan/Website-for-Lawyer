import { NextResponse, type NextRequest } from "next/server";
import { getMedia } from "@/lib/api/media";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") ?? "uk";
  try {
    const media = await getMedia(locale);
    return NextResponse.json(media);
  } catch {
    return NextResponse.json(
      { error: "Failed to load media" },
      { status: 502 },
    );
  }
}
