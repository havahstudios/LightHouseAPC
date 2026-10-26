import type { ConsultationInput } from "@/lib/consultation";

// Brand colors (same as the website). Emails can't read the site's CSS, so they're repeated here.
const NAVY = "#0b1d30";
const INK = "#06111d";
const GOLD = "#cfa45c";
const STONE = "#5b6470";
const PAGE = "#f4f1ec";
const SHELL = "#faf8f4";
const LINE = "#e8e2d6";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";

// Logo image hosted on the website (public/email-logo.png). Email apps need a full web address.
// It's excluded from the password gate in proxy.ts so emails can always load it.
const LOGO_URL = "https://lighthouselawapc.com/email-logo.png";

// Builds the subject, HTML and plain-text versions of the "new consultation request" email.
// Uses tables and inline styles because that's what email apps (Gmail, Outlook) support.
export function buildConsultationEmail(input: ConsultationInput) {
  const firstName = input.name.split(" ")[0];
  const where = input.source === "footer" ? "Footer form" : "Case review form";
  const received = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const replyLink = `mailto:${input.email}?subject=${encodeURIComponent("Your consultation request with Lighthouse Law")}`;
  const phoneLink = `tel:${input.phone.replace(/[^\d+]/g, "")}`;
  const preview = input.message.replace(/\s+/g, " ").slice(0, 110);

  const subject = `New consultation request — ${input.name}`;

  const text = [
    "NEW CONSULTATION REQUEST",
    `${received} Pacific · ${where}`,
    "",
    `Name:   ${input.name}`,
    `Email:  ${input.email}`,
    `Phone:  ${input.phone || "Not provided"}`,
    "",
    "Message:",
    input.message,
    "",
    `Reply to this email to respond directly to ${input.name}.`,
  ].join("\n");

  // One detail: small label on top, value underneath (reads well on phones).
  const detail = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 18px">
        <div style="font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${STONE}">${label}</div>
        <div style="font-family:${SANS};font-size:16px;color:${INK};margin-top:4px;word-break:break-word">${value}</div>
      </td>
    </tr>`;

  const linkStyle = `color:${INK};text-decoration:underline;text-decoration-color:${GOLD}`;
  const emailValue = `<a href="${escapeHtml(replyLink)}" style="${linkStyle}">${escapeHtml(input.email)}</a>`;
  const phoneValue = input.phone
    ? `<a href="${escapeHtml(phoneLink)}" style="${linkStyle}">${escapeHtml(input.phone)}</a>`
    : `<span style="color:${STONE}">Not provided</span>`;

  // Buttons are inline links so they wrap onto a new line on narrow phones.
  const buttonBase = `display:inline-block;margin:0 8px 10px 0;font-family:${SANS};font-size:13px;font-weight:bold;text-decoration:none;padding:13px 22px;border-radius:4px;white-space:nowrap`;
  const callButton = input.phone
    ? `<a href="${escapeHtml(phoneLink)}" style="${buttonBase};border:1px solid ${NAVY};color:${NAVY}">Call ${escapeHtml(firstName)}</a>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(subject)}</title>
  <style>
    @media (max-width: 480px) {
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .outer { padding: 16px 8px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${PAGE}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preview)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE}">
    <tr>
      <td class="outer" align="center" style="padding:40px 16px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid ${LINE};border-top:3px solid ${GOLD}">

          <!-- Logo -->
          <tr>
            <td class="px" style="padding:32px 40px 26px;border-bottom:1px solid ${LINE}">
              <img src="${LOGO_URL}" width="200" alt="Lighthouse Law APC — Trial Lawyers" style="display:block;width:200px;max-width:100%;height:auto;border:0">
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td class="px" style="padding:32px 40px 6px">
              <h1 style="margin:0;font-family:${SERIF};font-size:24px;font-weight:normal;color:${INK};line-height:1.3">New consultation request</h1>
              <p style="margin:8px 0 0;font-family:${SANS};font-size:13px;color:${STONE}">${escapeHtml(received)} Pacific &middot; ${where}</p>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td class="px" style="padding:24px 40px 6px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${detail("Name", escapeHtml(input.name))}
                ${detail("Email", emailValue)}
                ${detail("Phone", phoneValue)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td class="px" style="padding:0 40px">
              <div style="font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${STONE};margin-bottom:8px">Message</div>
              <div style="background:${SHELL};border-radius:4px;padding:18px 20px;font-family:${SANS};font-size:15px;line-height:1.65;color:${INK};white-space:pre-wrap">${escapeHtml(input.message)}</div>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td class="px" style="padding:28px 40px 30px">
              <a href="${escapeHtml(replyLink)}" style="${buttonBase};background:${NAVY};color:#ffffff;border:1px solid ${NAVY}">Reply to ${escapeHtml(firstName)}</a>
              ${callButton}
            </td>
          </tr>

        </table>

        <!-- Footer -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">
          <tr>
            <td align="center" style="padding:20px 24px 0;font-family:${SANS};font-size:12px;line-height:1.6;color:${STONE}">
              Lighthouse Law APC &middot; Trial Lawyers &middot; Los Angeles<br>
              Sent from the consultation form on your website. Replying goes straight to ${escapeHtml(input.name)}.
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
