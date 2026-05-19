"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { cn } from "@/lib/utils";

export interface GuidedPageHeroProps {
  badgeKey: string;
  titleKey: string;
  titleHighlightKey?: string;
  descriptionKey: string;
  requirementsTitleKey?: string;
  requirementsDescriptionKey?: string;
  className?: string;
}

const GuidedPageHero = ({
  badgeKey,
  titleKey,
  titleHighlightKey,
  descriptionKey,
  requirementsTitleKey,
  requirementsDescriptionKey,
  className,
}: GuidedPageHeroProps) => {
  const { t } = useTranslation();

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-lyn-border/70 bg-lyn-bg pt-28 pb-12 sm:pt-32 sm:pb-16",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* <Image
          src="/assets/heroBlur.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        /> */}
      </div>
      <Container size="xl" className="relative z-10">
        <div className="w-full lg:w-[90%]">
          <div className="lyn-glass border-lyn-border mb-6 inline-flex w-fit items-center rounded-full border px-4 py-2">
            <span className="text-lyn-muted text-sm sm:text-base">
              {t(badgeKey)}
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t(titleKey)}{" "}
            {titleHighlightKey ? (
              <span className="lyn-gradient-text">{t(titleHighlightKey)}</span>
            ) : null}
          </h1>
          <p className="text-lyn-muted mt-6 max-w-3xl text-sm leading-relaxed sm:text-base md:text-xl">
            {t(descriptionKey)}
          </p>
          {requirementsTitleKey && requirementsDescriptionKey ? (
            <div className="lyn-glass border-lyn-border mt-8 max-w-3xl rounded-lg border p-4 sm:p-6">
              <p className="font-semibold text-white">{t(requirementsTitleKey)}</p>
              <p className="text-lyn-muted mt-2 text-sm sm:text-base">
                {t(requirementsDescriptionKey)}
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default GuidedPageHero;
