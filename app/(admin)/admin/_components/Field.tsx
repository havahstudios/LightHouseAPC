type Props = {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: React.ReactNode;
};

// Label + optional help text around one admin form input.
export default function Field({ label, htmlFor, hint, children }: Props) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      {hint && <p className="mt-1 text-xs leading-5 text-stone">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>
  );
}

export const inputClass =
  "w-full rounded-[4px] border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition focus:border-beacon focus:ring-2 focus:ring-beacon/20";
