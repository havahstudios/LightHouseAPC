import Link from "next/link";
import { logout } from "../(panel)/actions";

const links = [
  { label: "Dashboard", href: "/admin" },
  { label: "Blog", href: "/admin/blog" },
  { label: "Recent Results", href: "/admin/results" },
  { label: "About Page", href: "/admin/about" },
];

// Top bar of the admin area.
export default function AdminNav({ email }: { email: string }) {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <Link href="/admin" className="font-serif tracking-[0.14em] uppercase">
            Lighthouse <span className="text-beacon">Admin</span>
          </Link>
          <nav aria-label="Admin">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/75">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" target="_blank" className="text-white/75 transition-colors hover:text-white">
            View site ↗
          </Link>
          <span className="hidden text-white/50 md:inline">{email}</span>
          <form action={logout}>
            <button type="submit" className="rounded-[3px] border border-white/25 px-3 py-1.5 transition-colors hover:border-beacon hover:text-beacon">
              Log out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
