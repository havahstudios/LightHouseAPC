"use server";

import { redirect } from "next/navigation";
import { signOutAdmin } from "@/lib/auth";

export async function logout() {
  console.log("[admin] logout");
  await signOutAdmin();
  redirect("/admin/login");
}
