"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

interface GuideAllSetSectionProps {
  prefix: "creditGuide" | "whatsappGuide";
  nextHref: string;
}

const GuideAllSetSection = ({ prefix, nextHref }: GuideAllSetSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <Image
        src="/guides/tick.svg"
        alt=""
        width={56}
        height={56}
        className="mb-4 h-14 w-14"
      />
      <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
        {t(`${prefix}.allSet.title`)} 🎉
      </h3>
      <p className="text-lyn-muted mb-6 text-base leading-relaxed md:text-lg">
        {t(`${prefix}.allSet.message`)}
      </p>
      <div className="mb-6 space-y-3">
        {[1, 2].map((n) => (
          <div key={n} className="flex items-center gap-3">
            <Image
              src="/guides/tick.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
            />
            <p className="text-lyn-muted text-sm md:text-base">
              {t(`${prefix}.allSet.feature${n}`)}
            </p>
          </div>
        ))}
      </div>
      <div className="border-lyn-border my-8 border-t md:my-12" />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/guides/trust.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-lyn-secondary text-xs font-bold uppercase md:text-sm">
              {t(`${prefix}.allSet.trustTitle`)}
            </span>
          </div>
          <p className="text-lyn-muted text-sm md:max-w-md md:text-base">
            {t(`${prefix}.allSet.trustDescription`)}
          </p>
        </div>
        <Link href={nextHref} className="w-full shrink-0 md:w-auto">
          <Button
            // variant="solidBlue"
            className="lyn-btn-primary rounded-xl border-0 w-full gap-2 px-6 py-6 md:w-auto"
          >
            {t(`${prefix}.allSet.ctaButton`)}
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GuideAllSetSection;
