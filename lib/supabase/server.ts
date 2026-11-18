import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { supabasePublicEnv } from "./env";

// Client that acts as the logged-in admin (their login lives in cookies).
// Use in /admin pages and server actions. Row Level Security decides what it may change.
export async function createSessionClient() {
  const env = supabasePublicEnv();
  if (!env) throw new Error("Supabase keys are missing from .env.local");
  const cookieStore = await cookies();

  return createServerClient(env.url, env.key, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll(cookiesToSet) {
        // Pages can't set cookies (only actions can); the proxy refreshes them instead.
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {}
      },
    },
  });
}
