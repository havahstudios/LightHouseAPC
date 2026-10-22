import "server-only";
import { sendConsultationEmail } from "@/lib/email";
import { createAdminClient } from "@/lib/supabase/admin";

export type ConsultationInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
};

export type ConsultationResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCES = ["case-review", "footer"];

// Checks the form fields and returns a friendly error message, or null if all is well.
function validate(input: ConsultationInput): string | null {
  if (!input.name || input.name.length > 120) return "Please enter your name.";
  if (!EMAIL_PATTERN.test(input.email) || input.email.length > 200)
    return "Please enter a valid email address.";
  if (input.phone.length > 40) return "Please enter a valid phone number.";
  if (!input.message || input.message.length > 5000)
    return "Please tell us a little about your situation.";
  if (!SOURCES.includes(input.source)) return "Something went wrong. Please try again.";
  return null;
}

// Saves a consultation request to Supabase. Returns whether it was saved (false if not set up or down).
async function saveToDatabase(input: ConsultationInput): Promise<boolean> {
  const supabase = createAdminClient();
  if (!supabase) {
    console.log("[consultation] Supabase not configured");
    return false;
  }
  const { error } = await supabase.from("consultation_requests").insert(input);
  if (error) {
    console.error("[consultation] Supabase insert failed:", error.message);
    return false;
  }
  return true;
}

// Validates a consultation request, saves it to Supabase and emails it to the firm.
// It counts as received if EITHER step works, so a lead is never lost because one service is down.
export async function saveConsultationRequest(raw: Partial<ConsultationInput>): Promise<ConsultationResult> {
  const input: ConsultationInput = {
    name: String(raw.name ?? "").trim(),
    email: String(raw.email ?? "").trim(),
    phone: String(raw.phone ?? "").trim(),
    message: String(raw.message ?? "").trim(),
    source: String(raw.source ?? "").trim(),
  };

  const problem = validate(input);
  if (problem) return { ok: false, status: 400, error: problem };

  const saved = await saveToDatabase(input);
  const emailResult = await sendConsultationEmail(input);
  console.log("[consultation] saved:", saved, "email:", emailResult);

  if (saved || emailResult === "sent") return { ok: true };

  return {
    ok: false,
    status: 503,
    error: "We couldn't send your message right now. Please try again or call us directly.",
  };
}
