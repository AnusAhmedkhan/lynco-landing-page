"use client";

import Container from "@/components/Container";
import { LynAppShowcaseGallery } from "@/components/home/LynAppShowcaseGallery";
import LynAppShowcaseSection from "@/components/home/LynAppShowcaseSection";
import LynAutomationSection from "@/components/home/LynAutomationSection";
import LynFaqSection from "@/components/home/LynFaqSection";
import LynHeroSection from "@/components/home/LynHeroSection";
import LynPartnerLogos from "@/components/home/LynPartnerLogos";
import LynPosSection from "@/components/home/LynPosSection";
import LynPricingSection from "@/components/home/LynPricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LynHeroSection />
      <LynPartnerLogos />
      <LynAutomationSection />
      <LynPosSection />
      <LynAppShowcaseSection />
      <Container size="xl">
        <LynAppShowcaseGallery />
      </Container>

      <LynPricingSection />
      <LynFaqSection />
    </div>
  );
}
