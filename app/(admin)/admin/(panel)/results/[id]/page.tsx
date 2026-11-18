import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getResult } from "@/lib/cms/resultsAdmin";
import DeleteResultButton from "../_components/DeleteResultButton";
import ResultForm from "../_components/ResultForm";

export default async function EditResultPage({ params, searchParams }: PageProps<"/admin/results/[id]">) {
  const { id } = await params;
  const { saved } = await searchParams;
  const { supabase } = await requireAdmin();
  const result = await getResult(supabase, id);
  if (!result) notFound();

  return (
    <>
      <Link href="/admin/results" className="text-sm text-beacon-dark hover:text-ink">← All results</Link>
      <h1 className="mt-3 mb-8 text-3xl font-light md:text-4xl">Edit result</h1>
      <ResultForm key={result.updated_at} result={result} justCreated={saved === "1"} />
      <div className="mt-14 border-t border-line pt-8">
        <DeleteResultButton id={result.id} />
      </div>
    </>
  );
}
