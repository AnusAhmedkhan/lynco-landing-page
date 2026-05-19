"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import { HERO_METRIC_IMAGES } from "@/constants/hero-metric-assets";
import { useLynLandingReady } from "@/context/LynLandingAnimationContext";
import { cn } from "@/lib/utils";

const METRIC_FLOAT_DURATION = 2.6;
const METRIC_FLOAT_TRAVEL = 12;

const METRIC_LAYOUT = [
  {
    src: HERO_METRIC_IMAGES.leftTop,
    className:
      "left-[10%] -top-[2%] w-[min(150px,12vw)] -rotate-[14deg] min-[1200px]:left-[3%] min-[1200px]:w-[min(172px,14vw)]",
    delay: 0.95,
  },
  {
    src: HERO_METRIC_IMAGES.leftMid,
    className:
      "left-18 top-[37%] w-[min(150px,12vw)] -rotate-[4deg] min-[1200px]:left-[1%] min-[1200px]:top-[37%] min-[1200px]:w-[min(172px,14vw)]",
    delay: 1.05,
  },
  {
    src: HERO_METRIC_IMAGES.leftBottom,
    className:
      "left-[8%] top-[70%] w-[min(158px,13vw)] -rotate-[5deg] min-[1200px]:left-[8%] min-[1200px]:top-[70%] min-[1200px]:w-[min(188px,15vw)]",
    delay: 1.15,
  },
  {
    src: HERO_METRIC_IMAGES.rightTop,
    className:
      "right-[10%] top-[1%] w-[min(150px,12vw)] rotate-[14deg] min-[1200px]:right-[2%] min-[1200px]:-top-[2%] min-[1200px]:w-[min(172px,14vw)]",
    delay: 1,
  },
  {
    src: HERO_METRIC_IMAGES.rightMid,
    className:
      "right-0 top-[36%] w-[min(220px,18vw)] rotate-[2deg] min-[1200px]:right-[1%] min-[1200px]:top-[32%] min-[1200px]:w-[min(256px,22vw)]",
    delay: 1.1,
  },
  {
    src: HERO_METRIC_IMAGES.rightBottom,
    className:
      "right-[0%] top-[68%] w-[min(150px,12vw)] rotate-[11deg] min-[1200px]:right-[9%] min-[1200px]:top-[70%] min-[1200px]:w-[min(172px,14vw)]",
    delay: 1.2,
  },
] as const;

/**
 * Floating metric PNGs — `md` and up only (same phone as mobile, no cards on small screens).
 */
export function LynHeroMetricsDesktop() {
  const landingReady = useLynLandingReady();

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 hidden md:block"
      style={
        landingReady
          ? ({
              "--lyn-float-duration": `${METRIC_FLOAT_DURATION}s`,
              "--lyn-float-travel": `${METRIC_FLOAT_TRAVEL}px`,
            } as CSSProperties)
          : undefined
      }
    >
      {METRIC_LAYOUT.map((metric, index) => (
        <MetricFloat
          key={metric.src}
          {...metric}
          index={index}
          landingReady={landingReady}
        />
      ))}
    </motion.div>
  );
}

function MetricFloat({
  src,
  className,
  delay,
  index,
  landingReady,
}: {
  src: string;
  className: string;
  delay: number;
  index: number;
  landingReady: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "absolute flex items-center justify-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]",
        landingReady && !reduceMotion && "lyn-metric-float",
        className
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.94 }}
      animate={
        landingReady
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.94 }
      }
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <Image
        src={src}
        alt=""
        width={280}
        height={320}
        className="h-auto w-full max-w-none object-contain"
        sizes="(max-width:1280px) 22vw, 280px"
        priority={index < 2}
      />
    </motion.div>
  );
}
