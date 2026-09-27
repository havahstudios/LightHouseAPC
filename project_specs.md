# Lighthouse Law APC — Project Specs

## 1. What the app does and who uses it
A marketing website for **Lighthouse Law APC**, an **employment law** firm in **Los Angeles, CA**. Visitors are workers who have been wronged by an employer (fired, harassed, underpaid, etc.). The site's job is to build trust quickly and get them to **call** or **submit a free consultation form**.

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
2. **Hero** — full-height background video (muted, looping) with dark overlay — until a video is provided, a still photo is used (set `heroVideo` in `lib/site.ts` to switch), Google-review badge with stars, big H1, subline, gold "Get a Free Consultation" button, circular play button (opens video in a modal), **angled/diagonal bottom edge**.
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
13. **Practice areas** — heading + button on left, icon grid on right; clicking an item opens a **popup** with a short description. Employment law areas: Wrongful Termination, Discrimination, Sexual Harassment, Retaliation, Wage & Hour, Unpaid Overtime, Disability Accommodation, Pregnancy & Family Leave, Whistleblower Claims.
14. **Closing CTA** — side-image section + button.
15. **Latest blog posts** — 3 cards with "Read More".
16. **Footer** — consultation form, contact info, embedded map, about blurb, areas served, link columns, legal line.
17. **Floating Google-rating badge** bottom-left (as on reference).

**Animations/effects (kept minimal, per user feedback 2026-09-27):** header turns solid on scroll, sliders (awards, testimonials, blog), popup windows, simple color changes on hover. No fade-ins, count-ups, parallax, zooms or pulsing.

**Flow:** Visitor lands → scrolls → either taps phone number (opens dialer) or fills the form → sees a success message (or a clear error if it fails).

Inner pages (About, each Practice Area, Case Results, Blog, Contact) are **not** in this phase — nav links will point to placeholder pages until we build them.

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
- *(Optional later)* email notification when a form is submitted (e.g. Resend) — not in this phase.

## 7. Content & assets
Copy will be **original text written for Lighthouse Law** — we copy the reference's design, not its words, photos, video or logos (those are the other firm's property). Until you send real assets I'll use tasteful placeholders.

## 8. What "done" looks like
- Homepage with all 17 sections above, visually matching the reference's layout, spacing, typography and effects, in Lighthouse branding.
- Works on phone, tablet and desktop.
- Consultation form saves to Supabase and shows success / error messages.
- `npm run build` passes with no errors; no console errors; tested in the browser.

## 9. Answers so far
1. Practice: **Employment law**.
2. Location: **Los Angeles, CA**. Address, phone, attorney names: not yet → placeholders like `(000) 000-0000`.
3. Logo: we'll design it together later → text-based placeholder logo for now.
4. Stats, case results, testimonials, awards: not yet → clearly marked placeholders.
5. Photos/video: placeholders for now.
6. Supabase: project `seogkpnzrbjztqjqsgsc` connected via `.env.local` (URL + secret key, server-only). User has an account. I build the form + API route + database setup file now; after the site is built I walk the user through connecting it step by step. Until then the form shows a friendly "not connected yet" error instead of silently failing.

## 10. Status
- 2026-09-27: Homepage (Phase 1) built and tested locally. Form shows a "not connected yet" message until Supabase keys are added.
