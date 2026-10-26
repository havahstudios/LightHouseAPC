// Password gate for the private preview. The password lives in the SITE_PASSWORD setting.
// If SITE_PASSWORD isn't set, the gate is off and the site is public.

export const ACCESS_COOKIE = "lh_site_access";
export const ACCESS_DAYS = 30;

// The cookie stores a fingerprint of the password, never the password itself.
export async function accessToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`lighthouse-site-access:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

// True when the visitor's cookie matches the current password.
export async function hasAccess(cookieValue: string | undefined): Promise<boolean> {
  const password = process.env.SITE_PASSWORD;
  if (!password) return true; // gate turned off
  if (!cookieValue) return false;
  return cookieValue === (await accessToken(password));
}

// Checks a typed password. Returns the cookie value to set, or null if it's wrong.
export async function checkPassword(attempt: string): Promise<string | null> {
  const password = process.env.SITE_PASSWORD;
  if (!password || attempt !== password) return null;
  return accessToken(password);
}

// Only allow sending visitors back to a page on this site after unlocking.
export function safeNextPath(next: unknown): string {
  return typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : "/";
}
