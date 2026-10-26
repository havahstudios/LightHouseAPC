"use client";

import { useState } from "react";

// Password box on the private preview page. Sends the password to /api/unlock.
export default function UnlockForm({ next }: { next: string }) {
  const [status, setStatus] = useState<"idle" | "checking" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("checking");
    setError("");
    const password = String(new FormData(e.currentTarget).get("password") ?? "");

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      window.location.href = json.next; // full reload so the new cookie is used
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          placeholder="Enter password"
          className="w-full flex-1 rounded-[3px] border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-beacon focus:bg-white/10"
        />
        <button
          type="submit"
          disabled={status === "checking"}
          className="rounded-[3px] bg-beacon px-8 py-4 font-serif text-[0.8rem] font-medium tracking-[0.16em] text-ink uppercase transition-colors hover:bg-beacon-light disabled:cursor-wait disabled:opacity-70"
        >
          {status === "checking" ? "Checking…" : "Enter"}
        </button>
      </div>
      <p role="alert" className="mt-4 min-h-5 text-sm text-red-200">
        {error}
      </p>
    </form>
  );
}
