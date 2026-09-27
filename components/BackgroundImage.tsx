import Image from "next/image";

// Full-bleed background photo with a dark tint. Place inside a `relative` section.
export default function BackgroundImage({ src, overlay = "bg-ink/40" }: { src: string; overlay?: string }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
