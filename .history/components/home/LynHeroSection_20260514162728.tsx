"use client";

import Image from "next/image";

import Container from "@/components/Container";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const LynHeroSection = () => {
  return (
    <section
      id="how-it-works"
      className="bg-lyn-bg relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12"
    >
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative h-[min(90vh,900px)] w-full max-w-[1240px] mix-blend-screen">
          <Image
            src={lynLandingAssets.heroBlur}
            alt=""
            fill
            className="object-cover object-top opacity-90"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <Container size="xl" className="relative z-10">
        <p className="text-lyn-secondary mb-2 text-center text-sm font-medium md:text-base">
          Your WhatsApp Service
        </p>
        <h1 className="lyn-gradient-text mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight md:text-4xl lg:text-[2.2rem]">
          Running Automatically
        </h1>
        <p className="text-white mx-auto mt-6 max-w-xl text-center text-lg font-medium md:text-2xl">
          You don&apos;t need to work 24/7.
          <br />
          But your business does.
        </p>

        <div className="relative mx-auto mt-10 max-w-[min(100%,520px)]">
          {/* <LynHeroMetrics /> */}
          <div className="relative mx-auto aspect-[499/1024] w-[min(100%,380px)] md:w-[420px]">
            <Image
              src={lynLandingAssets.phoneMain}
              alt="Lynco app preview"
              fill
              className="object-cover"
              sizes="(max-width:768px) 90vw,420px"
              priority
            />
            <Image
              src={lynLandingAssets.phoneFrame}
              alt=""
              fill
              className="pointer-events-none object-contain"
              sizes="(max-width:768px) 90vw,420px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynHeroSection;
