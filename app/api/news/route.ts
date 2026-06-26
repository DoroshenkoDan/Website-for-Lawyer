import { NextResponse, type NextRequest } from "next/server";
import { getNews } from "@/lib/api/news";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") ?? "uk";
  try {
    const news = await getNews(locale);
    return NextResponse.json(news);
  } catch {
    return NextResponse.json(
      { error: "Failed to load news" },
      { status: 502 },
    );
  }
}
