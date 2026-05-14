"use client";

import Image from "next/image";

import Container from "@/components/Container";
import { LYN_AUTOMATION_STEPS } from "@/constants/lyn-landing-content";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";
import ChatBg from "@/public/assets/chatBg.png";
import ChatBg2 from "@/public/assets/chatBg2.png";
import ChatPhone from "@/public/assets/chatPhone.png";
const LynAutomationSection = () => {
  return (
    <section id="features" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white max-w-xl text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              From initial contact to payment.
            </h2>
            <p className="lyn-gradient-text mt-2 text-3xl font-extrabold md:text-[2.6rem]">
              Everything is automatic.
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            It handles inquiries like a person, scheduling and finalizing them
            automatically —{" "}
            <span className="font-bold">
              including sending payment when necessary.
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-lyn-border relative min-h-[520px] overflow-hidden rounded-[32px] border p-6 md:p-8">
            <div className="bg-lyn-surface absolute inset-0 -z-10 rounded-[32px]" />
            <Image
              src={ChatBg.src}
              alt=""
              fill
              className="object-cover "
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative z-10 flex flex-col gap-10">
              {LYN_AUTOMATION_STEPS.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-lyn-glass-strong flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                    {"stepNumber" in step && step.stepNumber ? (
                      <span className="text-white text-lg">
                        {step.stepNumber}
                      </span>
                    ) : (
                      <Image
                        src={lynLandingAssets.checkIcon}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-lyn-muted mt-1 text-base md:text-lg">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-lyn-border relative min-h-[520px] overflow-hidden rounded-[32px] border">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={ChatBg2.src}
              alt=""
              fill
              className="object-cover mix-blend-lighten"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <Image
              src={lynLandingAssets.chatBg3}
              alt=""
              fill
              className="object-cover object-bottom mix-blend-screen opacity-80"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative mx-auto flex max-w-[280px] justify-center py-10 md:max-w-[320px] md:py-16">
              <div className="relative aspect-[315/646] w-full">
                <Image
                  src={ChatPhone.src}
                  alt="WhatsApp automation"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                {/* <Image
                  src={lynLandingAssets.phoneFrameAlt}
                  alt=""
                  fill
                  className="pointer-events-none object-contain"
                  sizes="320px"
                /> */}
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                boxShadow: "inset 0 0 80px 15px rgba(44,45,185,0.31)",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynAutomationSection;
