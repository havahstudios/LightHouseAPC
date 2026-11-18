import { centralCounties } from "./central";
import { industries, type Industry } from "./industries";
import { northernCounties } from "./northern";
import { southernCounties } from "./southern";
import type { County, Region } from "./types";

export type { County, Region } from "./types";

// Regions in the order they appear on the Areas We Serve page (south to north).
export const regions: Region[] = [
  "Southern California",
  "Central Coast",
  "Central Valley",
  "Sacramento Valley",
  "Bay Area",
  "Sierra Nevada",
  "Far North",
];

// All 58 California counties.
export const counties: County[] = [...southernCounties, ...centralCounties, ...northernCounties];

export function findCounty(slug: string) {
  return counties.find((c) => c.slug === slug);
}

export function countiesInRegion(region: Region) {
  return counties.filter((c) => c.region === region).sort((a, b) => a.name.localeCompare(b.name));
}

export function industriesFor(county: County): Industry[] {
  return county.industries.map((key) => industries[key]);
}

// "Los Angeles" -> "Los Angeles County"
export function countyName(county: County) {
  return `${county.name} County`;
}
