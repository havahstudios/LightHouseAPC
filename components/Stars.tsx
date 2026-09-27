import Icon from "@/components/Icon";

export default function Stars({ className = "size-5" }: { className?: string }) {
  return (
    <span className="flex gap-1 text-beacon" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}
