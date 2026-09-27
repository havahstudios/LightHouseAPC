import ConsultationForm from "@/components/ConsultationForm";

// Navy band with the free case review form.
export default function CaseReviewBand() {
  return (
    <section className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-10 text-3xl font-light text-white md:text-[2.5rem]">Get a free case review now</h2>
        <ConsultationForm source="case-review" />
      </div>
    </section>
  );
}
