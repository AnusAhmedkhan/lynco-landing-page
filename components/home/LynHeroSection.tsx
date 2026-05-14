"use client";

import Image from "next/image";

import Container from "@/components/Container";
import { LynHeroMetricsDesktop } from "@/components/home/LynHeroMetrics";

const LynHeroSection = () => {
  return (
    <section
      id="how-it-works"
      className="bg-lyn-bg relative flex min-h-[100svh] flex-col overflow-x-hidden pb-0 pt-8 md:min-h-[min(100dvh,960px)] md:pt-12"
    >
      {/* Glow — full-bleed from 951px up; below that keep width + vertical span tighter so it matches the handset */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 left-1/2 top-[17%] w-[min(86vw,500px)] -translate-x-1/2 mix-blend-screen min-[951px]:top-[6%] min-[951px]:w-[min(1240px,132vw)] min-[951px]:max-w-[1500px] md:min-[951px]:top-[4%] md:min-[951px]:w-[min(1240px,100vw)]">
        <Image
          src="/assets/heroBlur.png"
          alt=""
          fill
          className="object-cover object-[center_74%] min-[951px]:object-[center_65%] md:min-[951px]:object-top"
          priority
          sizes="(max-width: 950px) 90vw, 100vw"
        />
      </div>

      <Container
        size="xl"
        className="relative z-10 flex min-h-0 flex-1 flex-col px-4 pb-0 sm:px-6 lg:px-8"
      >
        <div className="mx-auto mt-4 max-w-xl shrink-0 px-2 text-center md:mt-5">
          <p className="text-white text-base font-medium leading-snug md:text-[1.465rem] md:leading-normal">
            You don&apos;t need to work 24/7.
            <br />
            But your business does.
          </p>
        </div>

        {/* One stage: flex-1 + explicit min-heights so the layer has real height even with only abspos children; phone stays bottom-anchored at every width */}
        <div className="relative mx-auto mt-6 w-full max-w-[1240px] flex-1 min-h-[max(52vh,420px)] self-stretch md:mt-8 md:min-h-[min(560px,58vh)] min-[1200px]:min-h-[min(640px,68vh)]">
          <div className="absolute inset-0">
            <LynHeroMetricsDesktop />

            <div className="absolute bottom-0 left-1/2 z-20 w-[min(90vw,340px)] -translate-x-1/2 min-[450px]:w-[min(88vw,380px)] min-[480px]:w-[min(85vw,440px)] md:w-[min(499px,48vw)] min-[1200px]:w-[min(499px,42vw)]">
              <div className="relative w-full">
                <Image
                  src="/assets/phoneFrame.png"
                  alt="Lynco app preview"
                  width={499}
                  height={1024}
                  className="relative z-0 block h-auto w-full"
                  priority
                  sizes="(max-width:768px) 90vw, 42vw"
                />
                <Image
                  src="/assets/PhoneMain.png"
                  alt=""
                  width={499}
                  height={1024}
                  className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
                  sizes="(max-width:768px) 90vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynHeroSection;
