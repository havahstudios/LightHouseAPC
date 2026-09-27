"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  source: "case-review" | "footer";
};

const inputClass =
  "w-full rounded-[3px] border border-transparent bg-white px-4 py-4 text-[0.9rem] text-ink placeholder:text-stone/70 outline-none transition focus:border-beacon focus:ring-2 focus:ring-beacon/30";

// The free consultation form. Sends the answers to /api/consultation.
export default function ConsultationForm({ source }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const id = (field: string) => `${source}-${field}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label htmlFor={id("name")} className="sr-only">Name</label>
          <input id={id("name")} name="name" required maxLength={120} placeholder="Name" autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor={id("email")} className="sr-only">Email</label>
          <input id={id("email")} name="email" type="email" required maxLength={200} placeholder="Email" autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor={id("phone")} className="sr-only">Phone</label>
          <input id={id("phone")} name="phone" type="tel" maxLength={40} placeholder="Phone" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor={id("message")} className="sr-only">Describe your case</label>
        <textarea id={id("message")} name="message" required maxLength={5000} rows={3} placeholder="Briefly describe what happened at work" className={`${inputClass} resize-y`} />
      </div>

      {/* Spam trap: hidden from people, bots fill it in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-[3px] bg-beacon px-10 py-4 font-serif text-[0.8rem] font-medium tracking-[0.16em] text-ink uppercase transition-colors duration-300 hover:bg-beacon-light disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
        <p className="text-xs text-white/50">Free &amp; confidential. Submitting this form does not create an attorney-client relationship.</p>
      </div>

      {status === "success" && (
        <p role="status" className="flex items-center gap-2 text-sm text-beacon-light">
          <Icon name="check" className="size-5" /> Thank you — we&apos;ve received your message and will be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-[3px] border border-red-300/40 bg-red-400/10 px-4 py-3 text-sm text-red-100">
          {error}
        </p>
      )}
    </form>
  );
}
