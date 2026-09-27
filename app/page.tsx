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
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <CaseReviewBand />
      <TrustSlider />
      <WhyHire />
      <CaseResults />
      <Location />
      <Process />
      <Testimonials />
      <VideoStatement />
      <PracticeAreas />
      <ClosingCta />
      <BlogPosts />
    </>
  );
}
