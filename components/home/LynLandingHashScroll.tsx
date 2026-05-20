"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useLynLandingReady } from "@/context/LynLandingAnimationContext";
import {
  isLandingHomePath,
  scrollToHashFromUrl,
} from "@/lib/scroll-to-hash";

/** Scrolls to `#section` after splash / route transitions on the landing home page. */
export function LynLandingHashScroll() {
  const pathname = usePathname();
  const landingReady = useLynLandingReady();

  useEffect(() => {
    if (!landingReady || !isLandingHomePath(pathname)) return;
    scrollToHashFromUrl();
  }, [landingReady, pathname]);

  useEffect(() => {
    if (!landingReady || !isLandingHomePath(pathname)) return;

    const onHashChange = () => scrollToHashFromUrl();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [landingReady, pathname]);

  return null;
}
