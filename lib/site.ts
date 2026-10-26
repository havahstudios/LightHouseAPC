// Firm details used across the site.
// The client asked that the attorney's name (and his personal email) never appear on the site.

export const site = {
  name: "Lighthouse Law APC",
  url: "https://lighthouselawapc.com", // official address used for Google (canonical links, sitemap)
  shortName: "Lighthouse Law",
  tagline: "Trial Lawyers",
  phone: "(310) 487-0024",
  phoneHref: "tel:+13104870024",
  address: {
    city: "Beverly Hills, CA",
    line1: "8889 West Olympic Boulevard, Suite 226",
    line2: "Beverly Hills, CA 90211",
  },
  mapQuery: "8889 West Olympic Boulevard Suite 226, Beverly Hills, CA 90211",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=8889+West+Olympic+Boulevard+Suite+226,+Beverly+Hills,+CA+90211",
  // Placeholder rating — replace with the firm's real Google numbers before launch.
  google: { rating: "5.0", reviewCount: "100+" },
  // Drop a video file in /public/videos and put its path here (e.g. "/videos/hero.mp4").
  heroVideo: null as string | null,
  firmVideo: null as string | null,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Resources", href: "/resources" },
  { label: "Areas Served", href: "/areas-served" },
  { label: "Contact", href: "/contact" },
];

// Unsplash placeholder photos (swap for the firm's own photography later).
export const photos = {
  hero: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=2400&q=80",
  skyline: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=80",
  attorney: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=80",
  signing: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
  justice: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
  palms: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=2400&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80",
};

// Photo behind each practice group's page banners.
export const groupPhotos: Record<string, string> = {
  "employment-law": photos.skyline,
  "personal-injury": photos.palms,
};

// Dark fade laid over photos in dark bands: strongest on the left where text sits.
export const darkScrim = "bg-linear-to-r from-ink via-ink/88 to-ink/60";
