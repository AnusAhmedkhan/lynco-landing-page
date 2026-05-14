"use client";

import Image from "next/image";

import { LOGO_SLIDER_ANIMATION, LOGO_SLIDER_DATA } from "@/constants/landing";

const LogoSlider = () => {
  // Get the first logo (fixed) and the rest (sliding)
  const firstLogo = LOGO_SLIDER_DATA[0];
  const slidingLogos = LOGO_SLIDER_DATA.slice(1);

  // Create multiple copies of sliding logos to ensure seamless infinite scroll
  const duplicatedSlidingLogos = [
    ...slidingLogos,
    ...slidingLogos,
    ...slidingLogos,
    ...slidingLogos,
    ...slidingLogos,
    ...slidingLogos,
  ];

  return (
    <section className="bg-bluish-cyan overflow-hidden py-8 sm:py-12">
      {/* <Container size="lg" className="relative"> */}
      {/* Logo Slider Container */}
      <div className=" md:ml-20 relative w-full flex items-center">
        {/* Fixed First Logo */}
        <div className="flex flex-shrink-0 items-center justify-center px-3 sm:px-4 z-20 relative">
          <div
            style={{ minWidth: `${Math.min(240, firstLogo.width)}px` }}
            className="flex items-center justify-center"
          >
            <Image
              src={firstLogo.src}
              alt={firstLogo.alt}
              width={Math.min(320, firstLogo.width * 1.2)}
              height={Math.min(100, firstLogo.height * 1.2)}
              className="h-16 w-auto object-contain filter transition-all duration-300 lg:h-20 xl:h-24"
              priority
            />
          </div>
        </div>

        {/* Animated Sliding Logos Track */}
        <div className="flex-1 overflow-hidden relative w-full">
          <div
            className="animate-logo-scroll flex items-center"
            style={{
              gap: `${Math.max(8, LOGO_SLIDER_ANIMATION.GAP * 0.25)}px`,
              width: "max-content", // Let it size naturally based on content
            }}
          >
            {duplicatedSlidingLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex flex-shrink-0 items-center justify-center px-3 sm:px-4"
                style={{ minWidth: `${Math.min(240, logo.width)}px` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={Math.min(320, logo.width * 1.2)}
                  height={Math.min(100, logo.height * 1.2)}
                  className="h-16 w-auto object-contain filter transition-all duration-300 lg:h-20 xl:h-24"
                  priority={index < 8}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default LogoSlider;
