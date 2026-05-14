import React from "react";

import HeroSection from "@/components/aboutus/HeroSection";
import OurStorySection from "@/components/aboutus/OurStorySection";
import CallToActionSection from "@/components/home/CallToActionSection";

const AboutUsPage = () => {
  return (
    <div className="bg-grayWhite min-h-screen overflow-x-hidden">
      <HeroSection />
      <OurStorySection />
      <CallToActionSection />
    </div>
  );
};

export default AboutUsPage;
