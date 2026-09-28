import "server-only";
import type { ConsultationInput } from "@/lib/consultation";
import { buildConsultationEmail } from "@/lib/consultationEmailTemplate";

// Emails a new consultation request to the firm using Resend (https://resend.com).
// Returns "skipped" when the email settings haven't been added to .env.local yet.
export async function sendConsultationEmail(input: ConsultationInput): Promise<"sent" | "skipped" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_EMAIL_TO;
  if (!apiKey || !to) return "skipped";

  // Until the firm's own domain is verified in Resend, emails must come from onboarding@resend.dev.
  const from = process.env.CONSULTATION_EMAIL_FROM || "Lighthouse Law Website <onboarding@resend.dev>";
  const { subject, html, text } = buildConsultationEmail(input);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: input.email,
        subject,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[email] Resend rejected the email:", res.status, await res.text());
      return "failed";
    }
    return "sent";
  } catch (err) {
    console.error("[email] Could not reach Resend:", err);
    return "failed";
  }
}
