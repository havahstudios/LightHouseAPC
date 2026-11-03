"use client";

import { usePathname } from "next/navigation";

type Props = {
  paths: string[];
  children: React.ReactNode;
};

// Shows its contents on every page except the listed ones.
export default function HiddenOn({ paths, children }: Props) {
  const pathname = usePathname();
  if (paths.includes(pathname)) return null;
  return <>{children}</>;
}
