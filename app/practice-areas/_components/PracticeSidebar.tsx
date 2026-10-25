import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import { site } from "@/lib/site";

type LinkItem = { label: string; href: string };

type Props = {
  linksTitle: string;
  links: LinkItem[];
  allLink: LinkItem;
};

// Sticky side panel: free case review box and links to related practice areas.
export default function PracticeSidebar({ linksTitle, links, allLink }: Props) {
  return (
    <aside className="space-y-8 self-start lg:sticky lg:top-28">
      <div className="bg-navy p-8 text-white">
        <p className="font-serif text-2xl font-light">Free case review</p>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Tell us what happened. We&apos;ll explain your options — free and confidential.
        </p>
        <a href={site.phoneHref} className="mt-6 block font-serif text-2xl text-beacon transition hover:text-beacon-light">
          {site.phone}
        </a>
        <ButtonLink href="/contact" className="mt-6 w-full">
          Contact Us
        </ButtonLink>
        <p className="mt-5 text-xs leading-5 text-white/50">
          {site.address.line1}
          <br />
          {site.address.line2}
        </p>
      </div>

      <div className="border border-line bg-white p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">{linksTitle}</p>
        <ul className="mt-4 divide-y divide-line">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block py-3 font-serif text-[1.02rem] text-ink transition-colors hover:text-beacon-dark">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={allLink.href}
          className="mt-5 inline-block border-b border-beacon pb-1 text-sm text-beacon-dark transition hover:text-ink"
        >
          {allLink.label}
        </Link>
      </div>
    </aside>
  );
}
