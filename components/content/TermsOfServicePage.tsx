"use client";

import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalHero from "@/components/legal/LegalHero";
import Typography from "@/components/ui/legacy-typography";
import { useTranslation } from "react-i18next";

const NumberedHeading = ({
  index,
  title,
}: {
  index: number;
  title: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="lyn-btn-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white">
      {index}
    </div>
    <Typography variant="headline" className="text-lyn-secondary">
      {title}
    </Typography>
  </div>
);

const TermsOfServicePageContent = () => {
  const { t, i18n } = useTranslation();
  const tArray = (key: string) => {
    const v = i18n.getResource(i18n.language, "translation", key);
    return Array.isArray(v) ? v : [];
  };

  return (
    <div>
      <LegalHero
        title={t("legal.terms.title")}
        description={`${t("legal.terms.lastUpdatedPrefix")} ${t("legal.terms.lastUpdated")}`}
      />

      <LegalPageLayout>
        <section id="scope" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={1}
            title={t("legal.terms.sections.scope.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.scope.body")}
          </Typography>
        </section>

        <section id="content" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={2}
            title={t("legal.terms.sections.content.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.content.body")}
          </Typography>
        </section>

        <section id="ip" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={3}
            title={t("legal.terms.sections.ip.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.ip.body")}
          </Typography>
        </section>

        <section id="use" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={4}
            title={t("legal.terms.sections.use.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.use.bodyIntro")}
          </Typography>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-white">
            <li>{t("legal.terms.sections.use.bullets.lawful")}</li>
            <li>{t("legal.terms.sections.use.bullets.stability")}</li>
            <li>{t("legal.terms.sections.use.bullets.unauthorized")}</li>
          </ul>
        </section>

        <section id="no-offer" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={5}
            title={t("legal.terms.sections.noOffer.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.noOffer.body")}
          </Typography>
        </section>

        <section id="liability" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={6}
            title={t("legal.terms.sections.liability.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.liability.body")}
          </Typography>
        </section>

        <section id="privacy" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={7}
            title={t("legal.terms.sections.privacy.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.privacy.body")}
          </Typography>
        </section>

        <section id="changes" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={8}
            title={t("legal.terms.sections.changes.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.changes.body")}
          </Typography>
        </section>

        <section id="official" className="scroll-mt-24 mb-10">
          <NumberedHeading
            index={9}
            title={t("legal.terms.sections.official.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.official.body")}
          </Typography>
        </section>

        <section id="jurisdiction" className="scroll-mt-24">
          <NumberedHeading
            index={10}
            title={t("legal.terms.sections.jurisdiction.title")}
          />
          <Typography className="mt-3 text-white">
            {t("legal.terms.sections.jurisdiction.body")}
          </Typography>
        </section>
      </LegalPageLayout>
    </div>
  );
};

export default TermsOfServicePageContent;
