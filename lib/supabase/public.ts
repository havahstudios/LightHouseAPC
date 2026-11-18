import { createClient } from "@supabase/supabase-js";
import { supabasePublicEnv } from "./env";

// Read-only client for public pages (blog, results, About text).
// No login, so Row Level Security only lets it see published content.
export function createPublicClient() {
  const env = supabasePublicEnv();
  if (!env) return null;
  return createClient(env.url, env.key, { auth: { persistSession: false, autoRefreshToken: false } });
}
