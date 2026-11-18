"use client";

import { useState } from "react";
import Link from "next/link";
import { practiceGroups } from "@/lib/content/practiceAreas";
import type { CaseResult } from "@/lib/cms/types";
import { slugify } from "@/lib/slug";
import Field, { inputClass } from "../../../_components/Field";
import FormNotice from "../../../_components/FormNotice";
import RichTextEditor from "../../../_components/RichTextEditor";
import SubmitButton from "../../../_components/SubmitButton";
import { useKeptForm } from "../../../_components/useKeptForm";
import { saveResultAction, type ResultFormState } from "../actions";

const caseTypes = practiceGroups.flatMap((g) => g.areas.map((a) => a.title));

// Add or edit a case result: the card (amount, type, summary) and the full story behind it.
export default function ResultForm({ result, justCreated }: { result: CaseResult | null; justCreated?: boolean }) {
  const { state, pending, onSubmit } = useKeptForm<ResultFormState>(
    saveResultAction,
    justCreated ? { success: result?.published ? "Saved. The result is live on the website." : "Saved as a draft." } : {},
  );
  const [amount, setAmount] = useState(result?.amount ?? "");
  const [caseType, setCaseType] = useState(result?.case_type ?? "");
  const [slug, setSlug] = useState(result?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(result));
  const autoSlug = (a: string, t: string) => !slugEdited && setSlug(slugify(`${a} ${t}`));

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <FormNotice error={state.error} success={state.success} />
      <input type="hidden" name="id" value={result?.id ?? ""} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-7">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Dollar amount" htmlFor="amount" hint="e.g. 1250000 or $1.2 Million">
              <input
                id="amount"
                name="amount"
                required
                maxLength={40}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  autoSlug(e.target.value, caseType);
                }}
                className={`${inputClass} font-serif text-xl`}
              />
            </Field>
            <Field label="Type of case" htmlFor="case_type" hint="Pick from the list or type your own.">
              <input
                id="case_type"
                name="case_type"
                list="case-types"
                required
                maxLength={120}
                value={caseType}
                onChange={(e) => {
                  setCaseType(e.target.value);
                  autoSlug(amount, e.target.value);
                }}
                className={inputClass}
              />
              <datalist id="case-types">
                {caseTypes.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
            </Field>
          </div>

          <Field label="Short description" htmlFor="summary" hint="One or two sentences shown on the result card. Don't include client names.">
            <textarea id="summary" name="summary" rows={3} required maxLength={300} defaultValue={result?.summary ?? ""} className={inputClass} />
          </Field>

          <Field label="The full story" hint="What happened, what we did, and how we got this result. Shown when someone clicks the amount.">
            <RichTextEditor name="body" defaultValue={result?.body ?? ""} />
          </Field>
        </div>

        <aside className="space-y-7 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-[4px] border border-line bg-white p-5">
            <label className="flex items-start gap-3">
              <input type="checkbox" name="published" defaultChecked={result?.published ?? false} className="mt-1 size-4 accent-[#0b1d30]" />
              <span>
                <span className="block text-sm font-semibold text-ink">Published</span>
                <span className="block text-xs leading-5 text-stone">Untick to keep it as a private draft.</span>
              </span>
            </label>
            <div className="mt-5 flex flex-wrap gap-3">
              <SubmitButton pending={pending}>Save</SubmitButton>
              {result?.published && (
                <Link href={`/case-results/${result.slug}`} target="_blank" className="self-center text-sm text-beacon-dark hover:text-ink">
                  View result ↗
                </Link>
              )}
            </div>
          </div>
          <p className="rounded-[4px] bg-sand px-4 py-3 text-xs leading-5 text-stone">
            Every result automatically shows: “Prior results do not guarantee a similar outcome.” Only use client names
            with the client&apos;s written permission.
          </p>
          <Field label="Web address" htmlFor="slug" hint={`lighthouselawapc.com/case-results/${slug || "…"}`}>
            <input
              id="slug"
              name="slug"
              value={slug}
              onChange={(e) => {
                setSlugEdited(true);
                setSlug(e.target.value);
              }}
              onBlur={() => setSlug(slugify(slug))}
              className={inputClass}
            />
          </Field>
        </aside>
      </div>
    </form>
  );
}
