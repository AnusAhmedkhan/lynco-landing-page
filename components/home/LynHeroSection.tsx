"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { LynHeroMetricsDesktop } from "@/components/home/LynHeroMetrics";
import { cn } from "@/lib/utils";

function LynHeroPhone({ wrapperClassName }: { wrapperClassName?: string }) {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "relative z-20 w-[min(88vw,300px)] max-[599px]:mx-auto",
        wrapperClassName
      )}
    >
      <div className="relative w-full">
        <Image
          src="/assets/phoneFrame.png"
          alt={t("lynLanding.hero.phoneAlt")}
          width={499}
          height={1024}
          className="relative z-0 block h-auto w-full"
          priority
          sizes="(max-width:599px) 88vw, (max-width:768px) 90vw, 42vw"
        />
        <Image
          src="/assets/PhoneMain.png"
          alt=""
          width={499}
          height={1024}
          className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
          sizes="(max-width:599px) 88vw, (max-width:768px) 90vw, 42vw"
        />
      </div>
    </div>
  );
}

const LynHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className="bg-lyn-bg relative flex flex-col overflow-x-hidden pb-6 pt-6 max-[599px]:min-h-0 min-[600px]:min-h-[100svh] min-[600px]:pb-0 min-[600px]:pt-8 md:min-h-[min(100dvh,960px)] md:pt-12"
    >
      <div className="pointer-events-none absolute bottom-[6%] left-1/2 top-[18%] hidden w-[min(58vw,400px)] -translate-x-1/2 opacity-75 mix-blend-screen min-[600px]:block min-[1000px]:bottom-0 min-[1000px]:top-[4%] min-[1000px]:w-[min(1240px,100vw)] min-[1000px]:max-w-[1500px] min-[1000px]:opacity-100">
        <Image
          src="/assets/heroBlur.png"
          alt=""
          fill
          className="object-cover object-[center_78%] min-[1000px]:object-top"
          priority
          sizes="(max-width: 999px) 60vw, 100vw"
        />
      </div>

      <Container
        size="xl"
        className="relative z-10 flex min-h-0 flex-col px-4 pb-0 sm:px-6 min-[600px]:flex-1 lg:px-8"
      >
        <div className="relative z-30 mx-auto max-w-xl shrink-0 px-2 text-center min-[600px]:mt-4 md:mt-5">
          <p className="text-white text-base font-medium leading-snug md:text-[1.465rem] md:leading-normal">
            {t("lynLanding.hero.taglineLine1")}
            <br />
            {t("lynLanding.hero.taglineLine2")}
          </p>
        </div>

        <div className="relative z-20 mt-4 flex flex-col items-center min-[600px]:hidden">
          <LynHeroPhone />
        </div>

        <div className="relative mx-auto mt-6 hidden w-full max-w-[1240px] min-h-[max(52vh,420px)] flex-1 self-stretch min-[600px]:block md:mt-8 md:min-h-[min(560px,58vh)] min-[1200px]:min-h-[min(640px,68vh)]">
          <div className="absolute inset-0">
            <LynHeroMetricsDesktop />
            <LynHeroPhone wrapperClassName="absolute bottom-0 left-1/2 w-[min(90vw,340px)] -translate-x-1/2 min-[450px]:w-[min(88vw,380px)] min-[480px]:w-[min(85vw,440px)] md:w-[min(499px,48vw)] min-[1200px]:w-[min(499px,42vw)]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LynHeroSection;
