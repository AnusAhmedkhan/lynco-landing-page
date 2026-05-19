"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import LynSplashScreen, {
  hasSeenLynSplash,
} from "@/components/home/LynSplashScreen";
import { LynLandingAnimationContext } from "@/context/LynLandingAnimationContext";

export default function LynLandingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [landingReady, setLandingReady] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (hasSeenLynSplash()) {
      setLandingReady(true);
    } else {
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setLandingReady(true);
  }, []);

  return (
    <LynLandingAnimationContext.Provider value={{ landingReady }}>
      <AnimatePresence mode="wait">
        {showSplash && (
          <LynSplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      {children}
    </LynLandingAnimationContext.Provider>
  );
}
