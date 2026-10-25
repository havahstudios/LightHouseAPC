import type { ServiceFaq } from "@/lib/content/services/types";
import { site } from "@/lib/site";

// Google shows roughly 60 characters of a title. Add as much of the firm name as fits.
export function pageTitle(heading: string) {
  const full = `${heading} | ${site.name}`;
  if (full.length <= 60) return full;
  const short = `${heading} | ${site.shortName}`;
  return short.length <= 60 ? short : heading;
}

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}

// The firm as a LegalService, tied to this page's topic. No attorney names (client request).
export function legalServiceSchema(path: string, serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: absoluteUrl(path),
    description,
    telephone: site.phoneHref.replace("tel:", ""),
    image: absoluteUrl("/email-logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Beverly Hills",
      addressRegion: "CA",
      postalCode: "90211",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Beverly Hills" },
    ],
    knowsAbout: serviceName,
  };
}

export function breadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function faqSchema(faqs: ServiceFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
