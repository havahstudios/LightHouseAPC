import { requireAdmin } from "@/lib/auth";
import AdminNav from "../_components/AdminNav";

// Every page in here requires an admin login.
export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();
  return (
    <>
      <AdminNav email={admin.email} />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-14">{children}</main>
    </>
  );
}
