import type { ConsultationInput } from "@/lib/consultation";

// Brand colors (same as the website). Emails can't read the site's CSS, so they're repeated here.
const NAVY = "#0b1d30";
const INK = "#06111d";
const GOLD = "#cfa45c";
const GOLD_DARK = "#9a7432";
const STONE = "#5b6470";
const SAND = "#f3efe8";
const SHELL = "#faf8f4";
const LINE = "#e3ddd2";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";

// Builds the subject, HTML and plain-text versions of the "new consultation request" email.
// Uses tables and inline styles because that's what email apps (Gmail, Outlook) support.
export function buildConsultationEmail(input: ConsultationInput) {
  const firstName = input.name.split(" ")[0];
  const where = input.source === "footer" ? "footer form" : "case review form";
  const received = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "long",
    timeStyle: "short",
  });
  const replyLink = `mailto:${input.email}?subject=${encodeURIComponent("Your consultation request with Lighthouse Law")}`;
  const phoneLink = `tel:${input.phone.replace(/[^\d+]/g, "")}`;
  const preview = input.message.replace(/\s+/g, " ").slice(0, 110);

  const subject = `New consultation request — ${input.name}`;

  const text = [
    "NEW CONSULTATION REQUEST",
    `Received ${received} (Pacific) via the ${where}`,
    "",
    `Name:   ${input.name}`,
    `Email:  ${input.email}`,
    `Phone:  ${input.phone || "Not provided"}`,
    "",
    "What happened:",
    input.message,
    "",
    `Reply to this email to respond directly to ${input.name}.`,
  ].join("\n");

  const detailRow = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${LINE};font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${STONE};width:78px;padding-right:12px;vertical-align:top">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${LINE};font-family:${SANS};font-size:16px;color:${INK};vertical-align:top;word-break:break-word">${value}</td>
    </tr>`;

  const emailValue = `<a href="${escapeHtml(replyLink)}" style="color:${GOLD_DARK};text-decoration:none">${escapeHtml(input.email)}</a>`;
  const phoneValue = input.phone
    ? `<a href="${escapeHtml(phoneLink)}" style="color:${GOLD_DARK};text-decoration:none">${escapeHtml(input.phone)}</a>`
    : `<span style="color:${STONE}">Not provided</span>`;

  // Buttons are inline links so they wrap onto a new line on narrow phones.
  const callButton = input.phone
    ? `<a href="${escapeHtml(phoneLink)}" style="display:inline-block;margin:0 0 10px;border:1px solid ${GOLD};color:${GOLD_DARK};font-family:${SANS};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 20px;border-radius:3px;white-space:nowrap">Call ${escapeHtml(firstName)}</a>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(subject)}</title>
  <style>
    @media (max-width: 480px) {
      .px { padding-left: 20px !important; padding-right: 20px !important; }
      .outer { padding: 20px 8px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${SAND}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preview)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND}">
    <tr>
      <td class="outer" align="center" style="padding:32px 16px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff">

          <!-- Header -->
          <tr>
            <td class="px" style="background:${NAVY};padding:30px 40px 26px">
              <div style="font-family:${SERIF};font-size:26px;color:#ffffff;line-height:1">Lighthouse Law</div>
              <div style="font-family:${SANS};font-size:10px;font-weight:bold;letter-spacing:3px;color:#ffffff;margin-top:10px">TRIAL LAWYERS</div>
              <div style="font-family:${SANS};font-size:10px;letter-spacing:3px;color:${GOLD};margin-top:4px">APC &middot; LOS ANGELES</div>
            </td>
          </tr>
          <tr><td style="background:${GOLD};height:3px;line-height:3px;font-size:0">&nbsp;</td></tr>

          <!-- Title -->
          <tr>
            <td class="px" style="padding:36px 40px 8px">
              <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${GOLD_DARK}">New inquiry</div>
              <h1 style="margin:10px 0 0;font-family:${SERIF};font-size:28px;font-weight:normal;color:${INK};line-height:1.25">Consultation request from ${escapeHtml(input.name)}</h1>
              <p style="margin:10px 0 0;font-family:${SANS};font-size:14px;color:${STONE}">Received ${escapeHtml(received)} (Pacific) via the ${where} on your website.</p>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td class="px" style="padding:20px 40px 0">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${LINE}">
                ${detailRow("Name", escapeHtml(input.name))}
                ${detailRow("Email", emailValue)}
                ${detailRow("Phone", phoneValue)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td class="px" style="padding:30px 40px 0">
              <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${STONE};margin-bottom:10px">What happened</div>
              <div style="background:${SHELL};border-left:3px solid ${GOLD};padding:20px 22px;font-family:${SANS};font-size:15px;line-height:1.65;color:${INK};white-space:pre-wrap">${escapeHtml(input.message)}</div>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td class="px" style="padding:32px 40px 30px">
              <a href="${escapeHtml(replyLink)}" style="display:inline-block;margin:0 10px 10px 0;background:${GOLD};color:${INK};font-family:${SANS};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:15px 22px;border-radius:3px;white-space:nowrap">Reply to ${escapeHtml(firstName)}</a>
              ${callButton}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="background:${SHELL};border-top:1px solid ${LINE};padding:20px 40px;font-family:${SANS};font-size:12px;line-height:1.6;color:${STONE}">
              Sent automatically from the free consultation form on the Lighthouse Law APC website.
              Replying to this email goes straight to ${escapeHtml(input.name)}.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
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
