// Shapes of the content the firm edits in /admin (stored in Supabase).

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string; // HTML from the editor
  cover_image: string | null;
  practice_slug: string | null;
  published: boolean;
  published_at: string | null;
  updated_at: string;
};

export type CaseResult = {
  id: string;
  slug: string;
  amount: string; // e.g. "$1,250,000"
  case_type: string; // e.g. "Wrongful Termination"
  summary: string; // one or two sentences on the card
  body: string; // HTML: the full story
  sort_order: number;
  published: boolean;
  updated_at: string;
};

export type PageSection = {
  page: string;
  key: string;
  heading: string;
  body: string;
};
