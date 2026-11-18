"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";
import Field, { inputClass } from "../_components/Field";
import FormNotice from "../_components/FormNotice";
import SubmitButton from "../_components/SubmitButton";

export default function LoginForm() {
  const [state, action] = useActionState<LoginState, FormData>(login, {});

  return (
    <form action={action} className="space-y-5">
      <FormNotice error={state.error} />
      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </Field>
      <Field label="Password" htmlFor="password">
        <input id="password" name="password" type="password" autoComplete="current-password" required className={inputClass} />
      </Field>
      <SubmitButton pendingText="Logging in…">Log in</SubmitButton>
    </form>
  );
}
