"use server";

import { redirect } from "next/navigation";
import { signInAdmin } from "@/lib/auth";

export type LoginState = { error?: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  console.log("[admin] login: start");
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password." };

  const error = await signInAdmin(email, password);
  if (error) {
    console.log("[admin] login: failed");
    await new Promise((resolve) => setTimeout(resolve, 600)); // slows down password guessing
    return { error };
  }
  console.log("[admin] login: success");
  redirect("/admin");
}
