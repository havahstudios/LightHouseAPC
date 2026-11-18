"use client";

import Link from "next/link";
import type { SectionDefault } from "@/lib/cms/pageSections";
import Field, { inputClass } from "../../_components/Field";
import FormNotice from "../../_components/FormNotice";
import RichTextEditor from "../../_components/RichTextEditor";
import SubmitButton from "../../_components/SubmitButton";
import { useKeptForm } from "../../_components/useKeptForm";
import { saveAboutAction, type AboutFormState } from "./actions";

// One block per About page section, in the order they appear on the page.
export default function AboutForm({ sections }: { sections: SectionDefault[] }) {
  const { state, pending, onSubmit } = useKeptForm<AboutFormState>(saveAboutAction, {});

  const saveBar = (
    <div className="flex flex-wrap items-center gap-4">
      <SubmitButton pending={pending}>Save changes</SubmitButton>
      <Link href="/about" target="_blank" className="text-sm text-beacon-dark hover:text-ink">
        View About page ↗
      </Link>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FormNotice error={state.error} success={state.success} />
      {saveBar}
      {sections.map((section) => (
        <fieldset key={section.key} className="space-y-5 rounded-[4px] border border-line bg-white p-6">
          <legend className="px-1 text-xs font-semibold tracking-[0.18em] text-stone uppercase">{section.label}</legend>
          <Field label="Heading" htmlFor={`${section.key}.heading`}>
            <input id={`${section.key}.heading`} name={`${section.key}.heading`} defaultValue={section.heading} className={`${inputClass} font-serif text-lg`} />
          </Field>
          {section.format === "rich" && (
            <Field label="Text">
              <RichTextEditor name={`${section.key}.body`} defaultValue={section.body} minHeight="min-h-[220px]" />
            </Field>
          )}
          {section.format === "plain" && (
            <Field label="Text" htmlFor={`${section.key}.body`}>
              <textarea id={`${section.key}.body`} name={`${section.key}.body`} rows={4} defaultValue={section.body} className={inputClass} />
            </Field>
          )}
        </fieldset>
      ))}
      {saveBar}
    </form>
  );
}
