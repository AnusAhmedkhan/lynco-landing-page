"use client";

import Image from "next/image";

import Container from "@/components/Container";
import { LYN_POS_FEATURES } from "@/constants/lyn-landing-content";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const LynPosSection = () => {
  return (
    <section className="bg-lyn-bg py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              Integrated{" "}
              <span className="lyn-gradient-text font-extrabold">POS</span>
            </h2>
            <p className="text-white mt-2 text-3xl font-medium md:text-[2.6rem]">
              Card Machine
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            No hassle, no lengthy setup. Start automating your customer service
            today.
          </p>
        </div>

        <div className="border-lyn-border relative mt-12 min-h-[420px] overflow-hidden rounded-[26px] border md:min-h-[480px]">
          <Image
            src={lynLandingAssets.posBackdrop}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="relative z-10 flex flex-col items-center gap-10 px-4 py-12 md:flex-row md:justify-between md:px-10 md:py-16">
            <div className="border-lyn-border w-full max-w-[280px] rotate-[-4deg] rounded-[32px] border bg-lyn-surface/95 p-6 shadow-inner md:max-w-[300px]">
              <p className="lyn-gradient-text text-4xl font-extrabold md:text-5xl">
                R$ 300
              </p>
              <p className="text-white mt-1 text-2xl font-medium md:text-3xl">
                One-time fee
              </p>
            </div>

            <div className="relative w-[min(100%,320px)] shrink-0 rotate-[3deg]">
              <Image
                src={lynLandingAssets.posDevice}
                alt="Lynco POS terminal"
                width={357}
                height={352}
                className="h-auto w-full drop-shadow-xl"
              />
            </div>

            <div className="border-lyn-border w-full max-w-[320px] rotate-[-3deg] rounded-[32px] border bg-lyn-surface/95 p-6 shadow-[inset_0_0_13px_rgba(255,255,255,0.35)] md:max-w-[340px]">
              <p className="lyn-gradient-text text-2xl font-extrabold">Features</p>
              <ul className="text-lyn-muted mt-4 space-y-3 text-sm md:text-base">
                {LYN_POS_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="bg-lyn-muted mt-2 h-1 w-1 shrink-0 rounded-full" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white mt-6 text-xs font-bold md:text-sm">
                Optional use — you can use Lynco without the card reader.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynPosSection;
