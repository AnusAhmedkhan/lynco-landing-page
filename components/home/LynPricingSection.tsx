"use client";

import Link from "next/link";

import Container from "@/components/Container";
import {
  LYN_PRICING_AUTONOMOUS_FEATURES,
  LYN_PRICING_MULTI_FEATURES,
} from "@/constants/lyn-landing-content";
import { APP_ROUTES } from "@/constants/routes";

function formatFeature(line: string) {
  const parts = line.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const LynPricingSection = () => {
  return (
    <section id="plans" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              Choose the ideal
            </h2>
            <p className="lyn-gradient-text mt-1 text-3xl font-extrabold md:text-[2.6rem]">
              plan for your business.
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            Get started in minutes and automate your customer service,
            scheduling, and billing on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="border-lyn-border relative flex min-h-[640px] flex-col overflow-hidden rounded-[32px] border bg-lyn-surface/80 p-8 md:p-10">
            <div className="border-white/80 bg-lyn-chip-bg inline-flex w-fit rounded-full border px-4 py-2 shadow-lg">
              <span className="text-white text-lg font-semibold">
                Autonomous Plan
              </span>
            </div>
            <div className="text-white mt-6">
              <span className="text-5xl font-semibold">R$497 </span>
              <span className="text-lyn-muted text-xl font-light">/month</span>
            </div>
            <p className="text-lyn-muted mt-1 text-xl font-light">For 1 professional</p>
            <ul className="text-white mt-8 flex-1 space-y-4 text-lg">
              {LYN_PRICING_AUTONOMOUS_FEATURES.map((line, idx) => (
                <li key={`a-${idx}`} className="flex gap-3">
                  <GradientDot />
                  <span className="leading-relaxed">{formatFeature(line)}</span>
                </li>
              ))}
            </ul>
            <Link
              href={APP_ROUTES.SIGNUP}
              className="lyn-btn-primary mt-10 flex h-14 items-center justify-center rounded-xl text-center text-lg font-medium text-white"
            >
              Subscribe now
            </Link>
          </div>

          <div className="border-lyn-card-border relative flex min-h-[720px] flex-col overflow-hidden rounded-[44px] border bg-gradient-to-br from-[#12192b] via-[#172345] to-[#151a32] p-8 shadow-[0_0_58px_rgba(255,255,255,0.25)] md:p-10">
            <div className="border-white/80 bg-lyn-chip-bg absolute right-8 top-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-lg md:right-10">
              <span className="text-white text-sm">Most Popular</span>
            </div>
            <div className="border-white/80 bg-lyn-chip-bg mt-10 inline-flex w-fit rounded-full border px-4 py-2 shadow-lg md:mt-4">
              <span className="text-white text-lg font-semibold">
                Multiprofessional Plan
              </span>
            </div>
            <div className="text-white mt-6">
              <span className="text-5xl font-semibold">R$997 </span>
              <span className="text-lyn-muted text-xl font-light">/month</span>
            </div>
            <p className="text-lyn-muted mt-1 text-xl font-light">
              For up to 20 professionals
            </p>
            <ul className="text-white mt-8 flex-1 space-y-3 text-base md:text-lg">
              {LYN_PRICING_MULTI_FEATURES.map((line, idx) => (
                <li key={`m-${idx}`} className="flex gap-3">
                  <GradientDot />
                  <span className="leading-relaxed">{formatFeature(line)}</span>
                </li>
              ))}
            </ul>
            <Link
              href={APP_ROUTES.SIGNUP}
              className="lyn-btn-primary mt-10 flex h-14 items-center justify-center rounded-xl text-center text-lg font-medium text-white"
            >
              Subscribe now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GradientDot() {
  return (
    <span
      className="mt-2 h-3 w-3 shrink-0 rounded-full shadow-[inset_2px_2px_2px_rgba(255,255,255,0.4),inset_0_-6px_4px_rgba(255,255,255,0.25)]"
      style={{
        background:
          "linear-gradient(91deg, var(--color-lyn-accent-from), var(--color-lyn-accent-to))",
      }}
    />
  );
}

export default LynPricingSection;
