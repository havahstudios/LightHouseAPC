import "server-only";
import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client. Uses the secret key, so it must never be imported
// into browser code — the "server-only" import above makes the build fail if it is.
// Returns null when the keys haven't been added to .env.local yet.
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secretKey) return null;

  return createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
