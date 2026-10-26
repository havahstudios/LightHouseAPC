import Image from "next/image";

type Props = {
  src: string;
  overlay?: string;
  priority?: boolean; // load right away (use for photos at the top of a page)
};

// Full-bleed background photo with a dark tint. Place inside a `relative` section.
export default function BackgroundImage({ src, overlay = "bg-ink/40", priority = false }: Props) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" priority={priority} className="object-cover" />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
