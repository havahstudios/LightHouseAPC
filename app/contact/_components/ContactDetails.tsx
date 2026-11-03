import Icon, { type IconName } from "@/components/Icon";
import { site } from "@/lib/site";

type Detail = {
  icon: IconName;
  label: string;
  children: React.ReactNode;
};

function DetailRow({ icon, label, children }: Detail) {
  return (
    <li className="flex gap-5 border-b border-line py-6 first:pt-0">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-beacon/50 text-beacon-dark">
        <Icon name={icon} className="size-[18px]" />
      </span>
      <div>
        <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-stone uppercase">{label}</p>
        <div className="mt-2 text-ink">{children}</div>
      </div>
    </li>
  );
}

// Phone, office address and directions, shown beside the contact form.
export default function ContactDetails() {
  return (
    <ul>
      <DetailRow icon="phone" label="Call us">
        <a href={site.phoneHref} className="font-serif text-2xl transition-colors hover:text-beacon-dark">
          {site.phone}
        </a>
        <p className="mt-1 text-sm text-stone">Free, confidential consultations</p>
      </DetailRow>
      <DetailRow icon="pin" label="Visit our office">
        <address className="leading-relaxed not-italic">
          {site.address.line1}
          <br />
          {site.address.line2}
        </address>
        <a
          href={site.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 border-b border-beacon pb-0.5 text-sm text-beacon-dark transition-colors hover:text-ink"
        >
          Get Directions <Icon name="arrowRight" className="size-3.5" />
        </a>
      </DetailRow>
    </ul>
  );
}
