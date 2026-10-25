# Lighthouse Law APC — Project Specs

## 1. What the app does and who uses it
A marketing website for **Lighthouse Law APC**, an **employment law and personal injury** trial firm serving **Los Angeles**, with its office in **Beverly Hills, CA**. Visitors are workers wronged by an employer (fired, harassed, underpaid, etc.) and people hurt in accidents. The site's job is to build trust quickly and get them to **call** or **submit a free consultation form**.

The layout, scroll behaviour and animations closely mirror **https://blairdefense.com** — only the branding (name, logo, colors, copy, photos) changes.

## 2. Tech stack
| Piece | Choice |
|---|---|
| Language | TypeScript |
| Framework | Next.js (latest, App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (Postgres + RLS) — stores consultation form submissions only |
| Auth | None (public site; no logins in this phase) |
| Hosting | Vercel |
| Fonts | Roboto Slab (headings, light 300) + IBM Plex Sans (body) — same pairing as reference |

## 3. Design system (copied from reference, recolored)
- **Palette structure** (reference → ours). Until we design the logo, I'll use a temporary lighthouse palette (deep navy + warm beacon gold) set up as easy-to-swap color variables:
  - Deep navy `#010E1B` (header, form band, footer) → *Lighthouse primary dark*
  - Muted gold `#C6A66A` (buttons, divider lines, links) → *Lighthouse accent*
  - Warm off-white `#FAF9F7` / `#F3F1ED` (section backgrounds)
- Uppercase, letter-spaced button labels; thin gold rule above each stat.
- No emoji icons, no generic gradients — line icons (SVG) only.

## 4. Pages & user flows (all public)
**Phase 1 — Homepage only (this task).** Sections, top to bottom, matching the reference:

1. **Header** — logo left, "Call us at: (xxx)" top right, nav (Home, About, Practice Areas, Resources, Areas Served, Contact). Transparent over hero → turns solid navy when you scroll. Hamburger menu on mobile.
2. **Hero** — full-height background video (muted, looping) with dark overlay — until a video is provided, a slowly drifting photo is used (set `heroVideo` in `lib/site.ts` to switch), Google-review badge with stars, big H1, subline, gold "Get a Free Consultation" button, circular play button (opens video in a modal), **angled/diagonal bottom edge**.
3. **Intro** — checkmark icon, H2, two-column paragraph text.
4. **Stats** — 3 big numbers (e.g. 15+, 150+, 5,000+) that **count up** when scrolled into view, gold line above each.
5. **Free case review form (navy band)** — Name / Email / Phone / Describe your case → Submit.
6. **Awards/trust slider** — auto-scrolling carousel of badge logos with arrows.
7. **"Why hire us" panel** — dark translucent card over a background photo, bulleted reasons.
8. **Case results** — result cards (placeholder "Settlement" / "Verdict" amounts, clearly marked as sample content) + "View all case results".
9. **Office location** — address, phone, "Get Directions" + map.
10. **Process explainer** — side-image section: "What is the California employment claim process?" (consultation → evidence gathering → agency filing (CRD/EEOC) → demand & negotiation → lawsuit → mediation → trial).
11. **Testimonials** — slider of client reviews.
12. **Tagline video block** — "Protecting…"-style statement over video.
13. **Practice areas** — heading + button on left; on the right two groups, **Employment Law** and **Personal Injury**, each with 6 featured areas (icon + name); clicking one opens a **popup** with a short description; "View all" links go to the Practice Areas page. The full list (44 areas, matching mesrianilaw.com's practice areas at the client's request, with original descriptions) lives in `lib/content/practiceAreas.ts`.
14. **Closing CTA** — side-image section + button.
15. **Latest blog posts** — 3 cards with "Read More".
16. **Footer** — consultation form, contact info, embedded map, about blurb, areas served, link columns, legal line.
17. **Floating Google-rating badge** bottom-left (as on reference).

**Animations/effects (kept minimal, per user feedback 2026-09-27):** header turns solid on scroll, very slow drift on the hero photo, soft opacity-only fade-in of each section on scroll (no sliding), sliders (awards, testimonials, blog), popup windows, simple color changes on hover. No count-ups, parallax, hover zooms or pulsing.

**Flow:** Visitor lands → scrolls → either taps phone number (opens dialer) or fills the form → sees a success message (or a clear error if it fails).

**Practice Areas page** (`/practice-areas`, added 2026-10-22): navy title band, then every Employment Law and Personal Injury area with a short description.

Other inner pages (About, individual practice areas, Case Results, Blog, Contact) are **not** in this phase — nav links point to placeholder pages until we build them.

## 4b. Individual practice area pages + SEO (requested 2026-10-25, approved, built 2026-10-25)

**Goal:** every service gets its own page, with on-page SEO built around real search data (Semrush, US database, Oct 2026).

**Structure (46 pages)**
- 2 hub pages: `/practice-areas/employment-law` → "employment lawyer los angeles" (1,900/mo) and `/practice-areas/personal-injury` → "personal injury attorney los angeles" (8,100/mo)
- 44 service pages: `/practice-areas/<service>` (e.g. `/practice-areas/wrongful-termination`)
- The existing `/practice-areas` page stays as the overview and links to every page.

**Each page includes (on-page SEO checklist)**
1. Unique title tag, keyword first, under 60 characters (e.g. "Los Angeles Wrongful Termination Lawyer | Lighthouse Law APC")
2. Unique meta description with the keyword and a call to action, under 155 characters
3. One H1 containing the primary keyword; keyword in the first 100 words
4. H2/H3 sections using secondary variations ("attorney", "Beverly Hills", "California")
5. ~900–1,200 words of original content: what the claim is, California law basics, signs you have a case, compensation, how the firm helps, deadlines, local LA/Beverly Hills relevance
6. FAQ section (questions people actually search, from Semrush) with FAQPage structured data
7. Structured data: LegalService (firm name, address, phone), BreadcrumbList
8. Canonical URL + Open Graph tags, all on https://lighthouselawapc.com
9. Internal links: breadcrumb, hub page, 3–4 related services, contact CTA; homepage pop-ups link to the real page
10. Descriptive image alt text, fast static pages (pre-built at deploy)
- Site-wide: `sitemap.xml`, `robots.txt`, `metadataBase` set to the domain.

**Primary keyword per page** (monthly searches · difficulty 0–100, lower = easier)

| Page | Primary keyword | Vol | KD |
|---|---|---|---|
| Wrongful Termination | wrongful termination lawyer los angeles | 1,900 | 29 |
| Whistleblower Violations | los angeles whistleblower lawyer | 590 | 4 |
| Workplace Harassment | los angeles workplace harassment lawyer | 140 | 12 |
| Wage & Hour Violations | los angeles wage and hour lawyer | 480 | 37 |
| Employment Discrimination | los angeles employment discrimination lawyer | 590 | 30 |
| Employment Retaliation | los angeles retaliation lawyer | 210 | 5 |
| Age Discrimination | los angeles age discrimination lawyer | 390 | 16 |
| Civil Rights Discrimination | civil rights attorney los angeles | 590 | 20 |
| Disability Discrimination | los angeles disability discrimination lawyer | 590 | 14 |
| Equal Pay Act | equal pay attorney los angeles | 50 | 6 |
| Gender Discrimination | los angeles gender discrimination lawyer | 210 | 5 |
| Hostile Work Environment | hostile work environment lawyer los angeles | 170 | 14 |
| Labor Law Violations | labor law attorney los angeles | 1,900 | 55 |
| Family and Medical Leave Act | fmla attorney los angeles | 170 | 6 |
| Class Action | employment class action lawyer los angeles | 110 | 15 |
| Pregnancy Discrimination | los angeles pregnancy discrimination lawyer | 320 | 4 |
| Racial Discrimination | racial discrimination attorney los angeles | 260 | 15 |
| Religious Discrimination | los angeles religious discrimination lawyer | 170 | 3 |
| Severance Package | severance lawyer los angeles | 50 | 3 |
| Sexual Harassment | los angeles sexual harassment lawyer | 1,300 | 22 |
| Wrongful Discharge (Public Policy) | wrongful discharge lawyer los angeles | 20 | 0 |
| Marital Status Discrimination | los angeles marital status discrimination lawyer | 40 | 8 |
| Car Accidents | car accident lawyer los angeles | 6,600 | 42 |
| Motorcycle Accidents | motorcycle accident lawyer los angeles | 3,600 | 15 |
| Pedestrian Accidents | los angeles pedestrian accident lawyer | 1,600 | 21 |
| Slip & Fall Accidents | los angeles slip and fall lawyer | 1,000 | 22 |
| Bicycle Accidents | los angeles bicycle accident lawyer | 2,900 | 30 |
| Work Injury | work injury lawyer los angeles | 320 | 41 |
| Aviation Accident | aviation accident lawyer los angeles | 170 | 19 |
| Uber & Lyft Accident | uber accident lawyer los angeles (+ lyft 590) | 1,000 | 20 |
| Electric Scooter Accident | los angeles scooter accident lawyer | 50 | 4 |
| Brain Injury | brain injury attorney los angeles | 1,900 | 17 |
| Burn Injury | los angeles burn injury lawyer | 480 | 16 |
| Bus Accident | bus accident lawyer los angeles | 1,000 | 14 |
| Dog Bite | dog bite lawyer los angeles | 1,300 | 18 |
| General Negligence | negligence lawyer los angeles | 30 | 0 |
| Animal Attack | animal attack lawyer los angeles | 30 | 0 |
| Premises Liability | los angeles premises liability lawyer | 590 | 6 |
| Spinal Cord Injury | spinal cord injury lawyer los angeles | 1,000 | 19 |
| Traffic Accident | traffic accident attorney los angeles | 260 | 29 |
| Train Accident | train accident lawyer los angeles | 320 | 8 |
| Truck Accident | truck accident lawyer los angeles | 3,600 | 38 |
| Construction Accident | los angeles construction accident lawyer | 720 | 13 |
| Wrongful Death | los angeles wrongful death lawyer | 1,900 | 18 |

**Data & code**
- Page content lives in `lib/content/services/` (one file per group), so text is easy to edit without touching code.
- One shared page template `app/practice-areas/[slug]/page.tsx` renders every service; hub pages get their own template.

**Important before launch:** all legal content is general information written for the firm. The attorney should review it for accuracy and California State Bar advertising rules (no guarantees, "Attorney Advertising" notice stays in the footer). No attorney name anywhere.

**Done =** all 46 pages live, each passing the checklist above, sitemap lists them, build passes, spot-checked on desktop and phone.

## 5. Data models & storage
Supabase table `consultation_requests`:
| column | type |
|---|---|
| id | uuid (primary key) |
| name | text |
| email | text |
| phone | text |
| message | text |
| source | text (which form: "hero-band" or "footer") |
| created_at | timestamptz |

- RLS **on**. No public read access. Inserts happen only through our API route `/app/api/consultation` using the server-side client.
- Blog posts, case results, testimonials, practice areas: stored as simple TypeScript data files in `/lib/content/` for now (easy to edit, no database needed).

## 6. Third-party services
- **Supabase** — saves form submissions.
- **Vercel** — hosting.
- **Google Maps embed** — office map (no API key needed for basic embed).
- **Resend** — emails each new consultation request to havahstudios@gmail.com (added 2026-09-27 at user request). Free tier; sends from `onboarding@resend.dev` until the firm's own domain is verified.

## 7. Content & assets
Copy will be **original text written for Lighthouse Law** — we copy the reference's design, not its words, photos, video or logos (those are the other firm's property). Until you send real assets I'll use tasteful placeholders.

## 8. What "done" looks like
- Homepage with all 17 sections above, visually matching the reference's layout, spacing, typography and effects, in Lighthouse branding.
- Works on phone, tablet and desktop.
- Consultation form saves to Supabase, emails the request to havahstudios@gmail.com (reply goes straight to the visitor), and shows success / error messages. The request counts as received if either the Supabase save or the email succeeds, so a lead is never lost when one service is down.
- `npm run build` passes with no errors; no console errors; tested in the browser.

## 9. Answers so far
1. Practice: **Employment law**.
2. Office: **8889 West Olympic Boulevard, Suite 226, Beverly Hills, CA 90211** · Phone **(310) 487-0024** (from client, 2026-10-22). **Do not show the attorney's name anywhere** (client request) — this includes his personal email address.
3. Logo: we'll design it together later → text-based placeholder logo for now.
4. Stats, case results, testimonials, awards: not yet → clearly marked placeholders.
5. Photos/video: placeholders for now.
6. Supabase: project `seogkpnzrbjztqjqsgsc` connected via `.env.local` (URL + secret key, server-only). User has an account. I build the form + API route + database setup file now; after the site is built I walk the user through connecting it step by step. Until then the form shows a friendly "not connected yet" error instead of silently failing.

## 10. Status
- 2026-09-27: Homepage (Phase 1) built and tested locally. Form shows a "not connected yet" message until Supabase keys are added.
- 2026-10-22: Live on Vercel (project `light-house-apc`, auto-deploys from GitHub `main`). Domain lighthouselawapc.com (GoDaddy DNS) attached; www redirects to the main domain. The domain also hosts Microsoft 365 email — never change its MX or root TXT records.
- 2026-10-25: 46 practice pages live (44 services + 2 hubs) with titles, descriptions, canonicals, LegalService/Breadcrumb/FAQ structured data, sitemap.xml and robots.txt. Readable text per page ~790–1,125 words (avg ~940). Content awaits attorney review.
