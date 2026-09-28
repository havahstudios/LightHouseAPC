import "server-only";
import type { ConsultationInput } from "@/lib/consultation";

// Emails a new consultation request to the firm using Resend (https://resend.com).
// Returns "skipped" when the email settings haven't been added to .env.local yet.
export async function sendConsultationEmail(input: ConsultationInput): Promise<"sent" | "skipped" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_EMAIL_TO;
  if (!apiKey || !to) return "skipped";

  // Until the firm's own domain is verified in Resend, emails must come from onboarding@resend.dev.
  const from = process.env.CONSULTATION_EMAIL_FROM || "Lighthouse Law Website <onboarding@resend.dev>";
  const where = input.source === "footer" ? "footer form" : "case review form";

  const text = [
    `New free consultation request (${where})`,
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "Not provided"}`,
    "",
    "What happened:",
    input.message,
  ].join("\n");

  const html = `
    <h2 style="font-family:Georgia,serif;font-weight:normal;color:#06111d">New free consultation request</h2>
    <p style="color:#5b6470;margin-top:0">Sent from the ${where} on the website</p>
    <table style="font-family:Arial,sans-serif;font-size:15px;color:#06111d;border-collapse:collapse">
      <tr><td style="padding:4px 16px 4px 0;color:#5b6470">Name</td><td>${escapeHtml(input.name)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#5b6470">Email</td><td>${escapeHtml(input.email)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#5b6470">Phone</td><td>${escapeHtml(input.phone || "Not provided")}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:15px;color:#5b6470;margin:20px 0 4px">What happened</p>
    <p style="font-family:Arial,sans-serif;font-size:15px;color:#06111d;white-space:pre-wrap;margin:0">${escapeHtml(input.message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:13px;color:#5b6470;margin-top:24px">Hit reply to respond directly to ${escapeHtml(input.name)}.</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: input.email,
        subject: `New consultation request from ${input.name}`,
        text,
        html,
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

// Stops anything a visitor types from being treated as HTML in the email.
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
