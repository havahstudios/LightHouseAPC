import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, hasAccess } from "@/lib/siteAccess";

// Runs before every page: visitors without the preview password are sent to /unlock.
export async function proxy(request: NextRequest) {
  if (await hasAccess(request.cookies.get(ACCESS_COOKIE)?.value)) return NextResponse.next();

  const { pathname, search } = request.nextUrl;

  // Behind-the-scenes requests get a plain "not allowed" instead of a redirect.
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "This site is in private preview." }, { status: 401 });
  }

  const unlockUrl = new URL("/unlock", request.url);
  unlockUrl.searchParams.set("next", pathname + search);
  return NextResponse.redirect(unlockUrl);
}

export const config = {
  // Everything except: the unlock page and its API, Next.js files, the tab icon,
  // and the logo image that notification emails load.
  matcher: ["/((?!unlock|api/unlock|_next/static|_next/image|icon.svg|email-logo.png).*)"],
};
