import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { resolveLegacyRedirect } from "./lib/redirects/resolve";

const handleIntl = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const target = resolveLegacyRedirect(pathname);
  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const stripped = pathname.replace(/\/+$/, "") || "/";
    const url = new URL(stripped + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 308);
  }

  return handleIntl(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
