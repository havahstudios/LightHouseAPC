"use client";

import { startTransition, useActionState } from "react";

// Like useActionState, but the form keeps what the person typed after saving or after an error.
// (React normally clears a form once its action finishes.)
export function useKeptForm<State extends object>(
  action: (state: Awaited<State>, formData: FormData) => Promise<State>,
  initial: Awaited<State>,
) {
  const [state, run, pending] = useActionState<State, FormData>(action, initial);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => run(formData));
  }

  return { state, pending, onSubmit };
}
