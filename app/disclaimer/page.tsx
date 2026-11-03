import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { disclaimer } from "@/lib/content/legal";
import { pageTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("Legal Disclaimer"),
  description:
    "Important information about the Lighthouse Law APC website: attorney advertising, no legal advice, and no attorney-client relationship.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return <LegalPage doc={disclaimer} path="/disclaimer" />;
}
