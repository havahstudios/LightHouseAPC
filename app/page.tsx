import FadeIn from "@/components/FadeIn";
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

// Homepage — sections appear in the same order as the reference site.
// Every section after the hero gently fades in as you scroll to it.
export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <Intro />
      </FadeIn>
      <FadeIn>
        <Stats />
      </FadeIn>
      <FadeIn>
        <CaseReviewBand />
      </FadeIn>
      <FadeIn>
        <TrustSlider />
      </FadeIn>
      <FadeIn>
        <WhyHire />
      </FadeIn>
      <FadeIn>
        <CaseResults />
      </FadeIn>
      <FadeIn>
        <Location />
      </FadeIn>
      <FadeIn>
        <Process />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <VideoStatement />
      </FadeIn>
      <FadeIn>
        <PracticeAreas />
      </FadeIn>
      <FadeIn>
        <ClosingCta />
      </FadeIn>
      <FadeIn>
        <BlogPosts />
      </FadeIn>
    </>
  );
}
