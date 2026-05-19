"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { ROUTES } from "@/constants/routes";
import { useLynPosFeatures } from "@/hooks/use-lyn-landing";
import { cn } from "@/lib/utils";

function PosCardShell({
  children,
  bordered = false,
  className,
}: {
  children: ReactNode;
  bordered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[280px] overflow-hidden rounded-[28px] sm:max-w-[300px] lg:max-w-[260px] lg:rounded-[20px]",
        bordered && "border border-white/10",
        className
      )}
    >
      <Image
        src="/assets/chatBg.png"
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 300px, 260px"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_12.8px_rgba(255,255,255,0.4)]"
      />
      <div className="relative z-10 p-5 lg:p-5">{children}</div>
    </div>
  );
}

function PosPriceContent() {
  const { t } = useTranslation();
  return (
    <>
      <p className="lyn-gradient-text text-center text-4xl font-extrabold leading-none md:text-5xl lg:text-left lg:text-[40px]">
        R$ 300
      </p>
      <p className="text-white mt-1 text-center text-xl font-medium md:text-2xl lg:text-left lg:text-[32px] lg:leading-none">
        {t("lynLanding.pos.oneTimeFee")}
      </p>
    </>
  );
}

function PosFeaturesContent() {
  const { t } = useTranslation();
  const features = useLynPosFeatures();
  return (
    <>
      <p className="lyn-gradient-text text-center text-xl font-extrabold sm:text-2xl lg:text-left lg:text-[24px]">
        {t("lynLanding.pos.featuresTitle")}
      </p>
      <ul className="text-lyn-muted mx-auto mt-3 max-w-[260px] space-y-2 text-xs font-semibold sm:text-sm lg:mx-0 lg:max-w-none lg:text-[11px] lg:leading-[17px]">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="bg-lyn-muted mt-1.5 h-1 w-1 shrink-0 rounded-full" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p className="text-white mt-4 text-center text-[10px] font-bold sm:text-[11px] lg:text-left lg:text-[10px] lg:leading-[16px]">
        {t("lynLanding.pos.optionalNote")}
      </p>
    </>
  );
}

/** Skewed absolute card — desktop (lg+) only */
function PosSkewCard({
  children,
  className,
  bordered = false,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <div className={cn("absolute w-[32%] max-w-[260px]", className)}>
      <div className="-rotate-[9deg] -skew-x-[8deg] transform-gpu">
        <PosCardShell bordered={bordered}>{children}</PosCardShell>
      </div>
    </div>
  );
}

const LynPosSection = () => {
  const { t } = useTranslation();

  return (
    <section id="pos" className="bg-lyn-bg scroll-mt-24 py-16 ">
      <Container size="xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 lg:pt-4">
            <h2 className="text-white text-3xl font-medium md:text-[2.6rem] md:leading-tight">
              {t("lynLanding.pos.titleIntegrated")}{" "}
              <span className="lyn-gradient-text font-extrabold">
                {t("lynLanding.pos.titlePos")}
              </span>
            </h2>
            <p className="text-white mt-2 text-3xl font-medium md:text-[2.6rem]">
              {t("lynLanding.pos.titleCard")}
            </p>
            <p className="text-white mt-6 text-lg md:mt-8 md:text-xl">
              {t("lynLanding.pos.aside")}
            </p>
          </div>

          <div className="relative min-h-[min(88vw,520px)] overflow-hidden rounded-[22px] sm:min-h-[480px] sm:rounded-[26px] lg:col-span-8 lg:min-h-0 lg:rounded-[26px]">
            <Image
              src="/assets/posBackdrop.png"
              alt=""
              fill
              className="object-cover object-center lg:object-bottom"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />

            <div className="absolute left-3 top-3 z-30 sm:left-3.5 sm:top-4 md:left-[14px]">
              <div className="flex items-center justify-between gap-2 rounded-[14px] bg-black px-3 py-3 sm:gap-4 sm:px-5 sm:py-[14px] md:min-w-[min(300px,68vw)]">
                <Image
                  src="/assets/logo.svg"
                  alt="Lynco"
                  width={122}
                  height={25}
                  className="h-5 w-auto sm:h-6"
                />
                <Link
                  href={ROUTES.CONTACT}
                  className="lyn-btn-primary shrink-0 rounded-xl px-2 py-1.5 text-center text-[11px] font-semibold text-white sm:px-2.5 sm:py-[7px] sm:text-[13px] sm:leading-[19.5px]"
                >
                  {t("lynLanding.talkToSales")}
                </Link>
              </div>
            </div>

            {/* Mobile / tablet */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-4 pb-10 pt-24 sm:gap-10 sm:px-6 sm:pb-12 lg:hidden">
              <PosCardShell bordered>
                <PosPriceContent />
              </PosCardShell>

              <div className="w-full max-w-[240px] sm:max-w-[260px]">
                <Image
                  src="/assets/posDevice.png"
                  alt={t("lynLanding.pos.deviceAlt")}
                  width={357}
                  height={352}
                  className="mx-auto h-auto w-full drop-shadow-[-6px_10px_15px_rgba(0,0,0,0.53)]"
                  sizes="(max-width: 1024px) 75vw, 260px"
                />
              </div>

              <PosCardShell>
                <PosFeaturesContent />
              </PosCardShell>
            </div>

            {/* Desktop: skewed Figma layout (scaled for 8-col card) */}
            <div className="relative z-10 hidden aspect-[1000/514] min-h-[420px] w-full lg:block">
              <PosSkewCard bordered className="bottom-[12.7%] left-[2%] z-20">
                <PosPriceContent />
              </PosSkewCard>

              <div className="pointer-events-none absolute left-[31%] top-[13.6%] z-30 w-[min(34%,260px)]">
                <div className="rotate-[4deg] drop-shadow-[-6px_10px_15px_rgba(0,0,0,0.53)]">
                  <Image
                    src="/assets/posDevice.png"
                    alt={t("lynLanding.pos.deviceAlt")}
                    width={357}
                    height={352}
                    className="h-auto w-full"
                    sizes="260px"
                  />
                </div>
              </div>

              <PosSkewCard className="left-[63%] top-[13.8%] z-20">
                <PosFeaturesContent />
              </PosSkewCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynPosSection;
