"use client";

import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  pendingText?: string;
  variant?: "primary" | "danger" | "quiet";
  formAction?: (formData: FormData) => void;
};

// Form button that shows "Saving…" while the form is being sent.
export default function SubmitButton({ children, pendingText = "Saving…", variant = "primary", formAction }: Props) {
  const { pending } = useFormStatus();
  const styles = {
    primary: "bg-ink text-white hover:bg-navy",
    danger: "border border-red-300 text-red-700 hover:bg-red-50",
    quiet: "border border-line text-ink hover:border-ink",
  }[variant];

  return (
    <button
      type="submit"
      formAction={formAction}
      disabled={pending}
      className={`inline-flex items-center justify-center rounded-[3px] px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-wait disabled:opacity-60 ${styles}`}
    >
      {pending ? pendingText : children}
    </button>
  );
}
