"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";

import LynSplashScreen from "@/components/home/LynSplashScreen";
import { LynLandingAnimationContext } from "@/context/LynLandingAnimationContext";

export default function LynLandingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [landingReady, setLandingReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

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
