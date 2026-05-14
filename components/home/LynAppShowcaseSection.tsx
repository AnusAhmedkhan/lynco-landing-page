"use client";

import Image from "next/image";

import Container from "@/components/Container";
import { LYN_APP_CONTROL } from "@/constants/lyn-landing-content";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";
import ChatBg from "@/public/assets/chatBg.png";
const LynAppShowcaseSection = () => {
  return (
    <section className="bg-lyn-bg py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              Everything your business needs,
            </h2>
            <p className="lyn-gradient-text mt-1 text-3xl font-extrabold md:text-[2.6rem]">
              all in one place.
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
          <div className="border-lyn-border relative min-h-[480px] overflow-hidden rounded-[32px] border">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={lynLandingAssets.chatBg2}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <Image
              src={lynLandingAssets.chatBg3}
              alt=""
              fill
              className="object-cover object-bottom mix-blend-screen opacity-70"
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative mx-auto flex max-w-[300px] justify-center py-12 md:max-w-[320px] md:py-20">
              <div className="relative aspect-[283/581] w-full">
                <Image
                  src={lynLandingAssets.phoneMain}
                  alt="Lynco mobile app"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <Image
                  src={lynLandingAssets.phoneFrameShowcase}
                  alt=""
                  fill
                  className="pointer-events-none object-contain"
                  sizes="320px"
                />
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                boxShadow: "inset 0 0 80px 15px rgba(44,45,185,0.31)",
              }}
            />
          </div>

          <div className="border-lyn-border relative flex min-h-[60px] flex-col justify-between overflow-hidden rounded-[32px] border p-6 md:p-8">
            <div className="bg-lyn-surface absolute inset-0 -z-10" />
            <Image
              src={ChatBg.src}
              alt=""
              fill
              className="object-cover "
              sizes="(max-width:1024px) 100vw,50vw"
            />
            <div className="relative z-10">
              <p className="text-lyn-secondary text-lg font-extrabold uppercase tracking-wide">
                Full control
              </p>
              <h3 className="text-white mt-2 text-2xl font-bold md:text-3xl">
                Everything organized, in real time.
              </h3>
              <p className="text-lyn-muted mt-2 max-w-lg text-base md:text-lg">
                Track appointments, clients, and payments directly through the
                app.
              </p>
            </div>
            <ul className="relative z-10 space-y-6">
              {LYN_APP_CONTROL.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="bg-lyn-glass-strong flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                    <Image
                      src={lynLandingAssets.checkIcon}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <p className="text-white text-lg font-semibold md:text-xl">
                      {item.title}
                    </p>
                    <p className="text-lyn-muted mt-1 text-base">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="relative z-10 mt-10 flex flex-wrap gap-2">
              <Image
                src={lynLandingAssets.badgeAppStore}
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-9 w-auto"
              />
              <Image
                src={lynLandingAssets.badgeGooglePlay}
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-9 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="border-lyn-border relative aspect-[4/3] overflow-hidden rounded-3xl border md:col-span-2">
            <Image
              src={lynLandingAssets.galleryWide}
              alt="App analytics"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw,66vw"
            />
          </div>
          <div className="border-lyn-border relative min-h-[200px] overflow-hidden rounded-3xl border">
            <Image
              src={lynLandingAssets.galleryHandBg}
              alt=""
              fill
              className="object-cover"
              sizes="33vw"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-4">
              <div className="relative h-[220px] w-[140px]">
                <Image
                  src={lynLandingAssets.showcaseHandMain}
                  alt="Hand holding phone"
                  fill
                  className="object-contain object-bottom"
                  sizes="200px"
                />
                <Image
                  src={lynLandingAssets.showcaseHandLabel}
                  alt=""
                  fill
                  className="pointer-events-none object-contain object-bottom"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynAppShowcaseSection;
