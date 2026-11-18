// Success or error message at the top of an admin form.
export default function FormNotice({ error, success }: { error?: string; success?: string }) {
  if (error) {
    return (
      <p role="alert" className="rounded-[4px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
        {error}
      </p>
    );
  }
  if (success) {
    return (
      <p role="status" className="rounded-[4px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
        {success}
      </p>
    );
  }
  return null;
}
