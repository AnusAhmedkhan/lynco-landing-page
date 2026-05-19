"use client";

import { createContext, useContext } from "react";

type LynLandingAnimationContextValue = {
  landingReady: boolean;
};

export const LynLandingAnimationContext =
  createContext<LynLandingAnimationContextValue>({
    landingReady: true,
  });

export function useLynLandingReady() {
  return useContext(LynLandingAnimationContext).landingReady;
}
