"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { LYN_APP_SHOWCASE_PHONE_IMAGES } from "@/constants/lyn-app-showcase";
import type { LynAppShowcaseTabId } from "@/hooks/use-lyn-landing";

const PHONE_TRANSITION = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function LynAppShowcasePhone({
  activeTabId,
  alt,
}: {
  activeTabId: LynAppShowcaseTabId;
  alt: string;
}) {
  const [topTab, setTopTab] = useState(activeTabId);
  const [bottomTab, setBottomTab] = useState(activeTabId);

  useEffect(() => {
    if (activeTabId === topTab) return;
    setBottomTab(topTab);
    setTopTab(activeTabId);
  }, [activeTabId, topTab]);

  const isTransitioning = bottomTab !== topTab;

  return (
    <div className="relative aspect-[283/581] w-full max-w-[260px] sm:max-w-[283px]">
      <div
        className="absolute inset-[3%] rounded-[20px] bg-black"
        aria-hidden
      />

      {isTransitioning ? (
        <div className="absolute inset-0 z-[1]">
          <Image
            src={LYN_APP_SHOWCASE_PHONE_IMAGES[bottomTab]}
            alt=""
            fill
            className="object-contain object-center"
            sizes="283px"
          />
        </div>
      ) : null}

      <motion.div
        key={topTab}
        className="absolute inset-0 z-[2]"
        initial={{ opacity: isTransitioning ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={PHONE_TRANSITION}
        onAnimationComplete={() => {
          if (bottomTab !== topTab) setBottomTab(topTab);
        }}
      >
        <Image
          src={LYN_APP_SHOWCASE_PHONE_IMAGES[topTab]}
          alt={alt}
          fill
          className="object-contain object-center"
          sizes="283px"
          priority={topTab === "calendar"}
        />
      </motion.div>
    </div>
  );
}
