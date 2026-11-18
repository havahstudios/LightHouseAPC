import type { Metadata } from "next";

// Everything under /admin is private: keep it out of Google.
export const metadata: Metadata = {
  title: "Admin | Lighthouse Law",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: LayoutProps<"/admin">) {
  return <div className="min-h-svh bg-shell">{children}</div>;
}
