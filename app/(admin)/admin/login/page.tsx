import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import { getAdmin } from "@/lib/auth";
import LoginForm from "./LoginForm";

export default async function AdminLoginPage() {
  if (await getAdmin()) redirect("/admin");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 py-16">
      <Logo tone="dark" />
      <div className="mt-10 w-full max-w-sm rounded-[4px] border border-line border-t-2 border-t-beacon bg-white p-8 shadow-[0_30px_60px_-40px_rgba(6,17,29,0.4)]">
        <h1 className="text-2xl font-light">Admin login</h1>
        <p className="mt-2 mb-7 text-sm text-stone">Edit the blog, recent results and About page.</p>
        <LoginForm />
      </div>
    </div>
  );
}
