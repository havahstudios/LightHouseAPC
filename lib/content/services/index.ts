import { practiceGroups, type PracticeArea, type PracticeGroup } from "@/lib/content/practiceAreas";
import { employmentA } from "./employment-a";
import { employmentB } from "./employment-b";
import { hubs } from "./hubs";
import { injuryA } from "./injury-a";
import { injuryB } from "./injury-b";
import type { ServiceContent } from "./types";

const serviceContent: Record<string, ServiceContent> = {
  ...employmentA,
  ...employmentB,
  ...injuryA,
  ...injuryB,
};

export type ServicePageData = {
  kind: "service";
  area: PracticeArea;
  group: PracticeGroup;
  content: ServiceContent;
};

export type HubPageData = {
  kind: "hub";
  group: PracticeGroup;
  content: ServiceContent;
};

// Every page address under /practice-areas/ (services and the two hubs).
export function allPracticeSlugs(): string[] {
  return [
    ...practiceGroups.map((group) => group.id),
    ...practiceGroups.flatMap((group) => group.areas.map((area) => area.slug)),
  ];
}

// Looks up everything a page needs from its address. Returns null for unknown addresses.
export function getPracticePage(slug: string): ServicePageData | HubPageData | null {
  const group = practiceGroups.find((g) => g.id === slug);
  if (group) return { kind: "hub", group, content: hubs[slug] };

  for (const g of practiceGroups) {
    const area = g.areas.find((a) => a.slug === slug);
    if (area) return { kind: "service", area, group: g, content: serviceContent[slug] };
  }
  return null;
}

// Finds a practice area by slug (used for "related services" links).
export function findArea(slug: string): PracticeArea | undefined {
  return practiceGroups.flatMap((g) => g.areas).find((a) => a.slug === slug);
}
