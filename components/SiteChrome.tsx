"use client";

import { usePathname } from "next/navigation";

type Props = {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

// Wraps pages in the site header and footer — except the password page and the admin area, which stand alone.
export default function SiteChrome({ header, footer, children }: Props) {
  const pathname = usePathname();
  if (pathname === "/unlock") return <main>{children}</main>;
  if (pathname.startsWith("/admin")) return <>{children}</>;

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
