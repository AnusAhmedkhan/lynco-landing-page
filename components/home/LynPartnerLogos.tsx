"use client";

import Image from "next/image";

import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const ROW = [
  { src: lynLandingAssets.partnerMeta, alt: "Meta", w: 120, h: 32 },
  { src: lynLandingAssets.partnerWhatsapp, alt: "WhatsApp", w: 140, h: 48 },
  { src: lynLandingAssets.partnerGoogle, alt: "Google", w: 100, h: 32 },
  { src: lynLandingAssets.partnerOpenai, alt: "OpenAI", w: 120, h: 32 },
  { src: lynLandingAssets.partnerSlack, alt: "Slack", w: 120, h: 32 },
  { src: lynLandingAssets.partnerAmazon, alt: "Amazon", w: 110, h: 32 },
] as const;

const LynPartnerLogos = () => {
  const doubled = [...ROW, ...ROW];
  return (
    <section className="bg-lyn-bg border-lyn-border/30 border-y py-8">
      <div className="overflow-hidden">
        <div className="animate-logo-scroll flex w-max items-center gap-16 opacity-40 grayscale">
          {doubled.map((logo, i) => (
            <Image
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="h-8 w-auto object-contain md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LynPartnerLogos;
