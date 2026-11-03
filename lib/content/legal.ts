import { site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

// Plain-language legal pages for a California law firm website.
// Written as a starting point — the firm's attorney should review both before launch.
// No attorney names or personal emails here (client request); people reach the firm by phone or mail.

const contactLine = `You can reach ${site.name} by phone at ${site.phone}, or by mail at ${site.address.line1}, ${site.address.line2}.`;

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated: "November 2, 2026",
  intro: `This policy explains what information ${site.name} ("we," "us") collects through this website, how we use it, and the choices you have. We keep it short and in plain English.`,
  sections: [
    {
      heading: "Information you give us",
      paragraphs: [
        "When you fill out a consultation form, we collect the details you choose to share: your name, email address, phone number and your description of what happened. We use this only to review your inquiry and contact you about it.",
      ],
    },
    {
      heading: "Information collected automatically",
      paragraphs: [
        "Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type, device type, the pages you view and the date and time of your visit. This helps keep the site secure and working properly.",
        "We use only the cookies the site needs to function. We do not use advertising cookies, and we do not sell or share your information for targeted advertising.",
      ],
    },
    {
      heading: "How we use your information",
      bullets: [
        "To respond to your consultation request and evaluate whether we can help",
        "To communicate with you about your inquiry",
        "To operate, secure and improve this website",
        "To comply with our legal and professional obligations",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We do not sell your personal information. We share it only with trusted service providers that help us run this website — for website hosting, secure data storage and email delivery — and only so they can perform those services for us. The map on our site is provided by Google Maps, which may collect information under Google's own privacy policy.",
        "We may also disclose information if required by law, court order or professional rules, or to protect our rights or the safety of others.",
      ],
    },
    {
      heading: "Please don't send confidential details through the form",
      paragraphs: [
        "Contacting us through this website does not create an attorney-client relationship. Until we have agreed to represent you, please share only the general facts we need to understand your situation, and avoid sending confidential or time-sensitive information.",
      ],
    },
    {
      heading: "How long we keep it and how we protect it",
      paragraphs: [
        "We keep consultation requests only as long as needed to respond to you and to meet our legal and professional record-keeping obligations. We use reasonable technical and organizational safeguards to protect your information, though no method of transmission over the internet is completely secure.",
      ],
    },
    {
      heading: "Your California privacy rights",
      paragraphs: [
        "California residents may ask us what personal information we hold about them, ask us to correct it, or ask us to delete it, subject to the exceptions the law allows (for example, records we must keep). We will not treat you differently for making a request. California's \"Shine the Light\" law also lets you ask whether we have shared personal information with third parties for their own marketing — we do not.",
        `To make a request, contact us using the details at the bottom of this page. We may need to confirm your identity before responding.`,
      ],
    },
    {
      heading: "Do Not Track",
      paragraphs: [
        "Some browsers send a \"Do Not Track\" signal. Because we do not track visitors across other websites or use advertising cookies, our site works the same way whether or not this signal is turned on.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "This website is not directed to children under 13, and we do not knowingly collect personal information from them. If a parent or guardian needs to reach us on a child's behalf, please call us.",
      ],
    },
    {
      heading: "Other websites",
      paragraphs: [
        "Our site may link to other websites. We are not responsible for their content or privacy practices, so we encourage you to read their policies.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. When we do, we will post the new version here and change the \"Last updated\" date above.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [contactLine],
    },
  ],
};

export const disclaimer: LegalDoc = {
  title: "Disclaimer",
  updated: "November 2, 2026",
  intro: `Please read this disclaimer before using the ${site.name} website. By using the site, you agree to the terms below.`,
  sections: [
    {
      heading: "Attorney advertising",
      paragraphs: [
        "This website may be considered attorney advertising under the rules of professional conduct in California and other jurisdictions.",
      ],
    },
    {
      heading: "Not legal advice",
      paragraphs: [
        "The information on this website is for general informational purposes only. It is not legal advice, and it may not reflect the most current legal developments. Every situation is different, so you should not act or rely on anything on this site without first speaking with a qualified attorney about your specific facts.",
      ],
    },
    {
      heading: "No attorney-client relationship",
      paragraphs: [
        "Reading this website, calling us or sending us a message through it does not create an attorney-client relationship. An attorney-client relationship is formed only after we have checked for conflicts of interest and both you and the firm have signed a written agreement.",
        "Until then, please do not send confidential or time-sensitive information through the website or by email.",
      ],
    },
    {
      heading: "Past results",
      paragraphs: [
        "Any case results, verdicts, settlements or client reviews described on this website depend on the specific facts and law of each matter. Prior results do not guarantee or predict a similar outcome in any future case.",
      ],
    },
    {
      heading: "Time limits apply",
      paragraphs: [
        "Legal claims are subject to strict deadlines, called statutes of limitations and filing deadlines. If you believe you have a claim, do not delay in speaking with an attorney — waiting could affect your rights.",
      ],
    },
    {
      heading: "Jurisdiction",
      paragraphs: [
        `${site.name} is a California professional law corporation. Our attorneys are licensed to practice law in California, and this website is not intended to solicit clients in any jurisdiction where it would not comply with local rules.`,
      ],
    },
    {
      heading: "Links and accuracy",
      paragraphs: [
        "Links to other websites are provided for convenience only; we do not endorse and are not responsible for their content. While we try to keep this site accurate and up to date, it is provided \"as is,\" without any warranty that the information is complete or current.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [contactLine],
    },
  ],
};
