// Firm details used across the site. Replace the placeholders once real details are ready.

export const site = {
  name: "Lighthouse Law APC",
  shortName: "Lighthouse Law",
  tagline: "Trial Lawyers",
  phone: "(000) 000-0000", // placeholder
  phoneHref: "tel:+10000000000", // placeholder
  address: {
    line1: "000 Placeholder Ave, Suite 000", // placeholder
    line2: "Los Angeles, CA 90000",
  },
  mapQuery: "Downtown Los Angeles, CA",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Downtown+Los+Angeles,+CA",
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
