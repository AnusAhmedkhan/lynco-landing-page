"use client";

import Image from "next/image";

const ROW = [
  { src: "/assets/meta.png", alt: "Meta", w: 120, h: 32 },
  { src: "/assets/whatsapp.png", alt: "WhatsApp", w: 120, h: 32 },
  { src: "/assets/google.png", alt: "Google", w: 120, h: 32 },
  { src: "/assets/openAI.png", alt: "OpenAI", w: 120, h: 32 },
  { src: "/assets/slack.png", alt: "Slack", w: 120, h: 32 },
  { src: "/assets/amazon.png", alt: "Amazon", w: 120, h: 32 },
] as const;

const LynPartnerLogos = () => {
  const doubled = [...ROW, ...ROW];
  return (
    <section className="bg-lyn-bg border-lyn-border/30 border-y py-8">
      <div className="overflow-hidden">
        <div className="animate-logo-scroll flex w-max items-center gap-16 ">
          {doubled.map((logo, i) => (
            <Image
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className={` w-auto  object-contain  opacity-40 grayscale`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LynPartnerLogos;
