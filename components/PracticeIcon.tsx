import type { PracticeIconName } from "@/lib/content/practiceAreas";

// Gold line icons for each practice area.
const icons: Record<PracticeIconName, React.ReactNode> = {
  termination: (
    <>
      <path d="M14 4H6a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h8" />
      <path d="M14 4l8 3v20l-8 3z" />
      <path d="M19 16v1" />
      <path d="M22 16h7m-3-3 3 3-3 3" />
    </>
  ),
  discrimination: (
    <>
      <path d="M16 4v24M10 28h12M6 8h20" />
      <path d="M8 8l-4 9a4 4 0 0 0 8 0zM24 8l-4 9a4 4 0 0 0 8 0z" />
    </>
  ),
  harassment: (
    <>
      <path d="M16 3 5 7v8c0 7 4.7 12.3 11 14 6.3-1.7 11-7 11-14V7z" />
      <path d="M16 10v7M16 21v.5" />
    </>
  ),
  retaliation: (
    <>
      <path d="M6 12h17a5 5 0 0 1 0 10h-5" />
      <path d="m10 8-4 4 4 4" />
      <path d="M8 26h6" />
    </>
  ),
  wage: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9v7l5 3" />
    </>
  ),
  whistleblower: (
    <>
      <path d="M5 13v6h4l10 6V7L9 13z" />
      <path d="M9 19l2 7h3l-1.5-6" />
      <path d="M23 12a5 5 0 0 1 0 8M26 9a9 9 0 0 1 0 14" />
    </>
  ),
  car: (
    <>
      <path d="M4 21v-4.5L7.5 10h17l3.5 6.5V21z" />
      <path d="M8 16.5h16" />
      <circle cx="9.5" cy="21.5" r="2.5" />
      <circle cx="22.5" cy="21.5" r="2.5" />
    </>
  ),
  motorcycle: (
    <>
      <circle cx="7.5" cy="21" r="4" />
      <circle cx="24.5" cy="21" r="4" />
      <path d="M7.5 21l5-8h7l5 8" />
      <path d="M12.5 13l-1.5-3H8M19.5 13l2-4h3" />
    </>
  ),
  pedestrian: (
    <>
      <circle cx="17" cy="5.5" r="2.5" />
      <path d="M16 10l-2.5 8 3.5 4v6" />
      <path d="M13.5 18l-4 5.5" />
      <path d="M15.5 12.5l-5 2.5M16.5 11.5l3.5 3.5 3.5-1" />
    </>
  ),
  slip: (
    <>
      <circle cx="10" cy="8" r="2.5" />
      <path d="M11.5 11.5l4.5 6 6.5 1" />
      <path d="M16 17.5l-4 5.5" />
      <path d="M13 13.5l7-3.5" />
      <path d="M4 27h24" />
      <path d="M17 24.5q2-1.5 4 0t4 0" />
    </>
  ),
  bicycle: (
    <>
      <circle cx="7.5" cy="21" r="5" />
      <circle cx="24.5" cy="21" r="5" />
      <path d="M7.5 21l5-9h8l4 9" />
      <path d="M12.5 12l4 9h-9M19.5 8.5h3M11 8.5h3l-1.5 3.5" />
    </>
  ),
  workInjury: (
    <>
      <path d="M6.5 20a9.5 9.5 0 0 1 19 0" />
      <path d="M4 20h24v3H4z" />
      <path d="M16 10.5v5M12 12v4M20 12v4" />
    </>
  ),
};

export default function PracticeIcon({ name, className = "size-9" }: { name: PracticeIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-beacon ${className}`}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
