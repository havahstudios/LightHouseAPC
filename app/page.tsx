import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { show } from "@/lib/site";
import Hero from "./_sections/Hero";
import Intro from "./_sections/Intro";
import Stats from "./_sections/Stats";
import CaseReviewBand from "./_sections/CaseReviewBand";
import TrustSlider from "./_sections/TrustSlider";
import WhyHire from "./_sections/WhyHire";
import CaseResults from "./_sections/CaseResults";
import Location from "./_sections/Location";
import Process from "./_sections/Process";
import Testimonials from "./_sections/Testimonials";
import VideoStatement from "./_sections/VideoStatement";
import PracticeAreas from "./_sections/PracticeAreas";
import ClosingCta from "./_sections/ClosingCta";
import BlogPosts from "./_sections/BlogPosts";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Homepage — sections appear in the same order as the reference site.
// Every section after the hero gently fades in as you scroll to it.
// Sections showing sample content stay hidden until switched on in lib/site.ts (`show`).
export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <Intro />
      </FadeIn>
      {show.stats && (
        <FadeIn>
          <Stats />
        </FadeIn>
      )}
      <FadeIn>
        <CaseReviewBand />
      </FadeIn>
      {show.awards && (
        <FadeIn>
          <TrustSlider />
        </FadeIn>
      )}
      {show.caseResults && (
        <FadeIn>
          <CaseResults />
        </FadeIn>
      )}
      <FadeIn>
        <Location />
      </FadeIn>
      <FadeIn>
        <WhyHire />
      </FadeIn>
      <FadeIn>
        <Process />
      </FadeIn>
      {show.testimonials && (
        <FadeIn>
          <Testimonials />
        </FadeIn>
      )}
      <FadeIn>
        <VideoStatement />
      </FadeIn>
      <FadeIn>
        <PracticeAreas />
      </FadeIn>
      <FadeIn>
        <ClosingCta />
      </FadeIn>
      {show.blog && (
        <FadeIn>
          <BlogPosts />
        </FadeIn>
      )}
    </>
  );
}
