import Link from "next/link";
import ResultForm from "../_components/ResultForm";

export default function NewResultPage() {
  return (
    <>
      <Link href="/admin/results" className="text-sm text-beacon-dark hover:text-ink">← All results</Link>
      <h1 className="mt-3 mb-8 text-3xl font-light md:text-4xl">Add a result</h1>
      <ResultForm result={null} />
    </>
  );
}
