import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

// The gold, uppercase, letter-spaced button used across the site.
export default function ButtonLink({ href, children, variant = "solid", className = "" }: Props) {
  const styles =
    variant === "solid"
      ? "bg-beacon text-ink hover:bg-beacon-light"
      : "border border-beacon text-beacon hover:bg-beacon hover:text-ink";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[3px] px-8 py-4 font-serif text-[0.8rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
