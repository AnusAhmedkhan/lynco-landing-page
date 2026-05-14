"use client";

import { Manrope } from "next/font/google";

import LynLandingFooter from "@/components/home/LynLandingFooter";
import LynLandingHeader from "@/components/home/LynLandingHeader";

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
    <div className={`${manrope.className} bg-lyn-bg text-white antialiased`}>
      <LynLandingHeader />
      <main className="relative">{children}</main>
      <LynLandingFooter />
    </div>
  );
}
