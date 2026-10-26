import { ACCESS_COOKIE, ACCESS_DAYS, checkPassword, safeNextPath } from "@/lib/siteAccess";

// Checks the preview password and, if correct, sets the access cookie.
export async function POST(request: Request) {
  console.log("[api/unlock] request received");

  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const token = await checkPassword(String(body.password ?? ""));
  if (!token) {
    // A short pause makes guessing passwords much slower.
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("[api/unlock] finished: wrong password");
    return Response.json({ error: "That password isn't right. Please try again." }, { status: 401 });
  }

  const response = Response.json({ ok: true, next: safeNextPath(body.next) });
  const maxAge = ACCESS_DAYS * 24 * 60 * 60;
  response.headers.set(
    "Set-Cookie",
    `${ACCESS_COOKIE}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`,
  );
  console.log("[api/unlock] finished: unlocked");
  return response;
}
