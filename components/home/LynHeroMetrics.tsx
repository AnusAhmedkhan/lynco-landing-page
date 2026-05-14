"use client";

import Image from "next/image";

import { HERO_METRIC_IMAGES } from "@/constants/hero-metric-assets";

/**
 * Floating metric PNGs — `md` and up only (same phone as mobile, no cards on small screens).
 * Positions use top % (Figma ~747px frame) so cards stay around the handset when it is bottom-anchored.
 */
export function LynHeroMetricsDesktop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
      {/* Left — 1, 2, 3 */}
      <MetricFloat
        src={HERO_METRIC_IMAGES.leftTop}
        alt=""
        className="left-[1%] top-0 w-[min(150px,12vw)] -rotate-[17deg] min-[1200px]:left-[3%] min-[1200px]:w-[min(172px,14vw)]"
      />
      <MetricFloat
        src={HERO_METRIC_IMAGES.leftMid}
        alt=""
        className="left-0 top-[38%] w-[min(150px,12vw)] -rotate-[9deg] min-[1200px]:left-[1%] min-[1200px]:top-[40%] min-[1200px]:w-[min(172px,14vw)]"
      />
      <MetricFloat
        src={HERO_METRIC_IMAGES.leftBottom}
        alt=""
        className="left-[1%] top-[70%] w-[min(158px,13vw)] -rotate-[8deg] min-[1200px]:left-[3%] min-[1200px]:top-[72%] min-[1200px]:w-[min(188px,15vw)]"
      />

      {/* Right — 4, 5, 6 */}
      <MetricFloat
        src={HERO_METRIC_IMAGES.rightTop}
        alt=""
        className="right-[0%] top-[1%] w-[min(150px,12vw)] rotate-[21deg] min-[1200px]:right-[2%] min-[1200px]:top-[3%] min-[1200px]:w-[min(172px,14vw)]"
      />
      <MetricFloat
        src={HERO_METRIC_IMAGES.rightMid}
        alt=""
        className="right-0 top-[36%] w-[min(220px,18vw)] rotate-[6deg] min-[1200px]:right-[1%] min-[1200px]:top-[38%] min-[1200px]:w-[min(256px,22vw)]"
      />
      <MetricFloat
        src={HERO_METRIC_IMAGES.rightBottom}
        alt=""
        className="right-[0%] top-[68%] w-[min(150px,12vw)] rotate-[21deg] min-[1200px]:right-[2%] min-[1200px]:top-[70%] min-[1200px]:w-[min(172px,14vw)]"
      />
    </div>
  );
}

function MetricFloat({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div
      className={`absolute ${className} flex items-center justify-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]`}
    >
      <Image
        src={src}
        alt={alt}
        width={280}
        height={320}
        className="h-auto w-full max-w-none object-contain"
        sizes="(max-width:1280px) 22vw, 280px"
      />
    </div>
  );
}
