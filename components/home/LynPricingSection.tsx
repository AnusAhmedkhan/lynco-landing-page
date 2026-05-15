"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynPlanBadge } from "@/components/home/LynPlanBadge";
import { APP_ROUTES } from "@/constants/routes";
import { useLynPricingFeatures } from "@/hooks/use-lyn-landing";
import ChatBg from "@/public/assets/chatBg.png";

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
  const { t } = useTranslation();
  const autonomousFeatures = useLynPricingFeatures("autonomous");
  const multiFeatures = useLynPricingFeatures("multi");

  return (
    <section id="plans" className="bg-lyn-bg scroll-mt-24 py-16 md:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              {t("lynLanding.pricing.title")}
            </h2>
            <p className="lyn-gradient-text mt-1 text-3xl font-extrabold md:text-[2.6rem]">
              {t("lynLanding.pricing.titleAccent")}
            </p>
          </div>
          <p className="text-white max-w-md text-lg md:text-xl">
            {t("lynLanding.pricing.aside")}
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:items-center">
          <div className="border-lyn-border relative min-h-[640px] overflow-hidden rounded-[32px] border lg:self-center">
            <div className="bg-lyn-surface absolute inset-0" aria-hidden />
            <Image
              src={ChatBg.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="relative z-10 flex min-h-[640px] flex-col p-8 md:p-10">
              <LynPlanBadge variant="multipro" className="w-fit">
                {t("lynLanding.pricing.autonomousPlan")}
              </LynPlanBadge>
              <div className="text-white mt-6">
                <span className="text-5xl font-semibold">R$497 </span>
                <span className="text-lyn-muted text-xl font-light">
                  {t("lynLanding.pricing.perMonth")}
                </span>
              </div>
              <p className="text-lyn-muted mt-1 text-xl font-light">
                {t("lynLanding.pricing.autonomousFor")}
              </p>
              <ul className="text-white mt-8 flex-1 space-y-4 text-lg">
                {autonomousFeatures.map((line, idx) => (
                  <li key={`a-${idx}`} className="flex gap-3">
                    <GradientDot />
                    <span className="leading-relaxed">
                      {formatFeature(line)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={APP_ROUTES.SIGNUP}
                className="lyn-btn-subscribe mt-10 flex h-14 items-center justify-center rounded-xl text-center text-lg font-medium text-white"
              >
                {t("lynLanding.pricing.subscribe")}
              </Link>
            </div>
          </div>

          <div className="border-lyn-card-border relative min-h-[720px] overflow-hidden rounded-[44px] border shadow-[0_0_36px_rgba(255,255,255,0.12)]">
            <div className="lyn-plan-card-multi absolute inset-0" aria-hidden />
            <Image
              src="/assets/planShadow.png"
              alt=""
              width={400}
              height={280}
              className="pointer-events-none absolute left-0  z-[1] h-auto max-w-none object-contain object-right-top  sm:top-0"
              priority
            />
            <Image
              src="/assets/stars.png"
              alt=""
              width={160}
              height={120}
              className="pointer-events-none absolute right-5 top-5 z-[2] h-auto w-[min(38%,140px)] object-contain object-right-top md:right-8 md:top-6"
            />
            <LynPlanBadge
              variant="black"
              iconSrc="/assets/social/tick-circle.png"
              className="absolute right-6 top-5 z-20 w-fit sm:right-8 sm:top-6"
            >
              {t("lynLanding.pricing.mostPopular")}
            </LynPlanBadge>
            <div className="relative z-10 flex min-h-[720px] flex-col p-8 pt-14 md:p-10 md:pt-16">
              <LynPlanBadge variant="multipro" className="w-fit">
                {t("lynLanding.pricing.multiPlan")}
              </LynPlanBadge>
              <div className="text-white mt-6">
                <span className="text-5xl font-semibold">R$997 </span>
                <span className="text-lyn-muted text-xl font-light">
                  {t("lynLanding.pricing.perMonth")}
                </span>
              </div>
              <p className="text-lyn-muted mt-1 text-xl font-light">
                {t("lynLanding.pricing.multiFor")}
              </p>
              <ul className="text-white mt-8 flex-1 space-y-3 text-base md:text-lg">
                {multiFeatures.map((line, idx) => (
                  <li key={`m-${idx}`} className="flex gap-3">
                    <GradientDot />
                    <span className="leading-relaxed">
                      {formatFeature(line)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={APP_ROUTES.SIGNUP}
                className="lyn-btn-subscribe mt-10 flex h-14 items-center justify-center rounded-xl text-center text-lg font-medium text-white"
              >
                {t("lynLanding.pricing.subscribe")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

function GradientDot() {
  return (
    <span
      className="mt-2 h-3 w-3 shrink-0 rounded-full shadow-[inset_1px_1px_1px_rgba(255,255,255,0.25),inset_0_-3px_2px_rgba(255,255,255,0.12)]"
      style={{
        background:
          "linear-gradient(91deg, var(--color-lyn-accent-from), var(--color-lyn-accent-to))",
      }}
    />
  );
}

export default LynPricingSection;
