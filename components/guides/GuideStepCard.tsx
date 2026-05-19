"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

interface GuideStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  note?: string;
  url?: string;
  stepId: string;
  isLast?: boolean;
}

const GuideStepCard = ({
  stepNumber,
  title,
  description,
  imageSrc,
  note,
  url,
  stepId,
  isLast = false,
}: GuideStepCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      id={stepId}
      className={cn(
        "bg-lyn-surface border-lyn-card-border mb-6 max-w-full overflow-hidden rounded-xl border p-4 shadow-lg sm:p-6 md:mb-12 md:p-8",
        !isLast && "border-b-0"
      )}
    >
      <div className="mb-4">
        <p className="text-lyn-secondary text-xs font-semibold uppercase md:text-sm">
          {t("guides.stepPrefix")} {stepNumber}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{title}</h3>
        <p className="text-lyn-muted mt-3 text-sm leading-relaxed md:text-base">
          {description}
          {url ? (
            <>
              {" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lyn-secondary break-all hover:underline"
              >
                {url}
              </a>
            </>
          ) : null}
        </p>
      </div>
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={`${t("connectionGuide.stepLabel")} ${stepNumber}: ${title}`}
          width={800}
          height={600}
          className="h-auto w-full rounded-lg"
          priority={stepNumber === 1}
        />
      </div>
      {note ? (
        <div className="border-lyn-secondary/30 bg-lyn-secondary/10 flex items-center gap-3 rounded-lg border p-4">
          <Image src="/guides/info.svg" alt="" width={20} height={20} />
          <p className="text-lyn-secondary text-sm md:text-base">{note}</p>
        </div>
      ) : null}
    </div>
  );
};

export default GuideStepCard;
