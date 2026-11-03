import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/content/legal";
import { pageTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("Privacy Policy"),
  description: "How Lighthouse Law APC collects, uses and protects the information you share through our website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} path="/privacy-policy" />;
}
