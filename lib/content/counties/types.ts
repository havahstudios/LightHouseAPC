import type { IndustryKey } from "./industries";

export type Region =
  | "Southern California"
  | "Central Coast"
  | "Central Valley"
  | "Sacramento Valley"
  | "Bay Area"
  | "Sierra Nevada"
  | "Far North";

export type County = {
  slug: string; // page address: /areas-served/<slug>
  name: string; // "Fresno" (pages add "County")
  region: Region;
  seat: string; // county seat
  cities: string[]; // largest communities
  economy: string; // a few sentences about local work
  industries: IndustryKey[]; // most important first
  employers: string[]; // well-known large employers (public information, neutral wording)
};
