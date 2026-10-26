import BackgroundImage from "@/components/BackgroundImage";
import ConsultationForm from "@/components/ConsultationForm";
import { darkScrim, photos } from "@/lib/site";

// Dark band over an office photo, with the free case review form.
export default function CaseReviewBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-24">
      <BackgroundImage src={photos.office} overlay={darkScrim} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-10 text-3xl font-light text-white md:text-[2.5rem]">Get a free case review now</h2>
        <ConsultationForm source="case-review" />
      </div>
    </section>
  );
}
