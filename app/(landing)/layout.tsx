"use client";

import { Manrope } from "next/font/google";

import LynLandingFooter from "@/components/home/LynLandingFooter";
import { LynLandingHashScroll } from "@/components/home/LynLandingHashScroll";
import LynLandingHeader from "@/components/home/LynLandingHeader";
import LynLandingShell from "@/components/home/LynLandingShell";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LynLandingShell>
      <div className={`${manrope.className} bg-lyn-bg text-white antialiased`}>
        <LynLandingHashScroll />
        <LynLandingHeader />
        <main className="relative">{children}</main>
        <LynLandingFooter />
      </div>
    </LynLandingShell>
  );
}
