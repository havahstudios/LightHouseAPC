import "server-only";
import { redirect } from "next/navigation";
import { createSessionClient } from "@/lib/supabase/server";

// Returns the logged-in admin and a database client acting as them, or null if the
// visitor isn't logged in or isn't on the admin list.
export async function getAdmin() {
  const supabase = await createSessionClient();
  const { data } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) return null;

  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (!isAdmin) return null;

  return { supabase, email: (data.claims.email as string | undefined) ?? "" };
}

// For admin pages and actions: sends anyone who isn't an admin to the login page.
export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

// Logs someone in with email + password. Returns an error message, or null on success.
// People who can log in but aren't on the admin list are logged straight back out.
export async function signInAdmin(email: string, password: string): Promise<string | null> {
  const supabase = await createSessionClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return "That email and password don't match. Please try again.";

  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (!isAdmin) {
    await supabase.auth.signOut();
    return "This account doesn't have access to the admin area.";
  }
  return null;
}

export async function signOutAdmin() {
  const supabase = await createSessionClient();
  await supabase.auth.signOut();
}

// Database client acting as the logged-in admin.
export type AdminDb = Awaited<ReturnType<typeof createSessionClient>>;
