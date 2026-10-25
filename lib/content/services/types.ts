// The shape of each practice area page's written content.

export type ServiceSection = {
  heading: string; // becomes an H2
  paragraphs: string[];
  bullets?: string[]; // optional checklist shown after the paragraphs
};

export type ServiceFaq = {
  question: string; // based on real Google searches (Semrush) where available
  answer: string;
};

export type ServiceContent = {
  h1: string; // contains the page's main keyword
  metaDescription: string; // shown in Google results, under 155 characters
  intro: string[]; // first paragraph includes the keyword
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  related: string[]; // slugs of related practice areas to link to
};
