import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { listAllResults } from "@/lib/cms/resultsAdmin";
import { moveResultAction } from "./actions";

// All case results in the order they appear on the website, with up/down buttons to reorder.
export default async function AdminResultsList() {
  const { supabase } = await requireAdmin();
  const results = await listAllResults(supabase);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light md:text-4xl">Recent Results</h1>
          <p className="mt-2 text-stone">The first three published results appear on the homepage.</p>
        </div>
        <Link href="/admin/results/new" className="rounded-[3px] bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy">
          Add a result
        </Link>
      </div>

      {results.length === 0 ? (
        <p className="mt-10 rounded-[4px] border border-dashed border-line bg-white p-10 text-center text-stone">
          No results yet. Click “Add a result” to add your first one.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-line rounded-[4px] border border-line bg-white">
          {results.map((result, i) => (
            <li key={result.id} className="flex items-center gap-4 px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-1">
                {(["up", "down"] as const).map((direction) => {
                  const disabled = direction === "up" ? i === 0 : i === results.length - 1;
                  return (
                    <form key={direction} action={moveResultAction}>
                      <input type="hidden" name="id" value={result.id} />
                      <input type="hidden" name="direction" value={direction} />
                      <button
                        type="submit"
                        disabled={disabled}
                        aria-label={`Move ${result.amount} ${direction}`}
                        className="flex size-7 items-center justify-center rounded-[3px] border border-line text-xs text-ink transition-colors hover:border-ink disabled:opacity-30"
                      >
                        {direction === "up" ? "↑" : "↓"}
                      </button>
                    </form>
                  );
                })}
              </div>
              <Link href={`/admin/results/${result.id}`} className="flex flex-1 flex-wrap items-center justify-between gap-3 py-1 transition-colors hover:text-beacon-dark">
                <span>
                  <span className="block font-serif text-2xl text-ink">{result.amount}</span>
                  <span className="mt-0.5 block text-sm text-stone">{result.case_type}</span>
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    result.published ? "bg-emerald-50 text-emerald-800" : "bg-sand text-stone"
                  }`}
                >
                  {result.published ? "Published" : "Draft"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
