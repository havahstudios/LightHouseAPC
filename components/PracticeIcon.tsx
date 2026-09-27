import type { PracticeArea } from "@/lib/content/practiceAreas";

// Gold line icons for each practice area.
const icons: Record<PracticeArea["icon"], React.ReactNode> = {
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
  overtime: (
    <>
      <rect x="4" y="8" width="24" height="16" rx="1.5" />
      <circle cx="16" cy="16" r="4" />
      <path d="M8 12v.5M24 19.5v.5" />
    </>
  ),
  disability: (
    <>
      <path d="M5 17c3-1 5 0 7 2l3 3a2 2 0 0 0 3-3l-3-3" />
      <path d="M12 12l3-3c2-2 5-2 7 0l5 5v6l-4 3" />
      <path d="M5 13v10" />
    </>
  ),
  leave: (
    <>
      <path d="M4 15 16 5l12 10" />
      <path d="M7 13v14h18V13" />
      <path d="M16 24s-5-3-5-6.5a2.5 2.5 0 0 1 5-1 2.5 2.5 0 0 1 5 1C21 21 16 24 16 24z" />
    </>
  ),
  whistleblower: (
    <>
      <path d="M5 13v6h4l10 6V7L9 13z" />
      <path d="M9 19l2 7h3l-1.5-6" />
      <path d="M23 12a5 5 0 0 1 0 8M26 9a9 9 0 0 1 0 14" />
    </>
  ),
};

export default function PracticeIcon({ name, className = "size-9" }: { name: PracticeArea["icon"]; className?: string }) {
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
