import type { SectionDefault } from "@/lib/cms/pageSections";
import { site } from "@/lib/site";

// Built-in About page text. The firm can change any of it in /admin -> About page;
// saved changes replace these. No attorney names (client request).
export const aboutDefaults: SectionDefault[] = [
  {
    key: "banner",
    label: "Top banner",
    heading: "Trial Lawyers for California Workers and Injury Victims",
    body: `${site.name} stands up for people against employers, corporations and insurance companies, and guides them safely through one of the hardest times of their lives.`,
    format: "plain",
  },
  {
    key: "who-we-are",
    label: "Who We Are",
    heading: "Who We Are",
    body: [
      `<p>${site.name} is a Beverly Hills law firm focused on two things: protecting employees who have been treated unfairly at work, and helping people who have been hurt because of someone else's carelessness.</p>`,
      "<p>Losing a job, facing harassment or recovering from an accident is overwhelming. The other side usually has a team of lawyers working to pay you as little as possible. We level the playing field — investigating what happened, gathering the evidence and fighting for the full compensation the law allows.</p>",
      "<p>Like a lighthouse, our job is to help you see the way forward. We explain your rights clearly, handle the legal work and stay with you from the first call to the final result.</p>",
    ].join(""),
    format: "rich",
  },
  { key: "how-we-work", label: "How We Work (section title)", heading: "How We Work", body: "", format: "none" },
  {
    key: "value-1",
    label: "How We Work — point 1",
    heading: "Prepared for trial",
    body: "We build every case as if it will go before a jury. Insurance companies and employers know the difference, and it shows in what they're willing to offer.",
    format: "plain",
  },
  {
    key: "value-2",
    label: "How We Work — point 2",
    heading: "Straight answers",
    body: "We tell you what your case is really worth and what to expect, in plain language. No legal jargon, no false promises.",
    format: "plain",
  },
  {
    key: "value-3",
    label: "How We Work — point 3",
    heading: "Personal attention",
    body: "You won't be passed around or left waiting for a call back. We keep you updated and respond when you have questions.",
    format: "plain",
  },
  {
    key: "value-4",
    label: "How We Work — point 4",
    heading: "Free to talk",
    body: "Your first consultation is free and confidential, so you can learn your options before deciding anything.",
    format: "plain",
  },
  { key: "what-we-handle", label: "What We Handle (section title)", heading: "What We Handle", body: "", format: "none" },
  {
    key: "our-office",
    label: "Our Office",
    heading: "Based in Beverly Hills, Serving All of California",
    body: "Our office sits on West Olympic Boulevard in Beverly Hills, minutes from Century City, West Hollywood and Downtown Los Angeles. We represent clients across all 58 California counties and meet in person, by phone or by video, whichever is easiest for you.",
    format: "plain",
  },
];
