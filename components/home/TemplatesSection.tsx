"use client";

import Container from "@/components/Container";

import TemplatesCarousel from "./TemplatesCarousel";
import TemplatesStaticContent from "./TemplatesStaticContent";

const TemplatesSection = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container size="lg">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12">
          {/* Left Column - Static Content (4/12) */}
          <div className="lg:col-span-4">
            <TemplatesStaticContent />
          </div>

          {/* Right Column - Carousel (8/12) */}
          <div className="lg:col-span-8">
            <TemplatesCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TemplatesSection;
