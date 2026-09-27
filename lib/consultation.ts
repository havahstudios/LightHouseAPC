import "server-only";
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

// Validates a consultation request and saves it to Supabase.
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

  const supabase = createAdminClient();
  if (!supabase) {
    return {
      ok: false,
      status: 503,
      error: "Our online form isn't connected yet. Please call us — we'd be glad to help.",
    };
  }

  const { error } = await supabase.from("consultation_requests").insert(input);
  if (error) {
    console.error("[consultation] Supabase insert failed:", error.message);
    return {
      ok: false,
      status: 500,
      error: "We couldn't send your message. Please try again or call us directly.",
    };
  }

  return { ok: true };
}
