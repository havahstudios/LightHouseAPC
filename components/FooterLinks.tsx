import Link from "next/link";

type Props = { title: string; links: { label: string; href: string }[] };

export default function FooterLinks({ title, links }: Props) {
  return (
    <div>
      <h3 className="font-serif text-lg font-medium">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="transition hover:text-beacon-dark">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
