"use client";

import { useTranslation } from "react-i18next";

import LegalHero from "@/components/legal/LegalHero";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/legacy-typography";

const ContactUsPageContent = () => {
  const { t, i18n } = useTranslation();
  const tArray = (key: string) => {
    const v = i18n.getResource(i18n.language, "translation", key);
    return Array.isArray(v) ? v : [];
  };

  return (
    <div>
      <LegalHero
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <LegalPageLayout>
        <Typography className="text-white max-w-3xl">
          {t("contact.intro")}
        </Typography>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-lyn-border/40 bg-lyn-surface p-6 flex flex-col">
            <Typography
              variant="caption"
              className="uppercase tracking-widest text-lyn-muted font-semibold"
            >
              {t("contact.cards.general.label")}
            </Typography>
            <Typography variant="headline" className="mt-2 text-white">
              {t("contact.cards.general.title")}
            </Typography>
            <Typography className="mt-2 text-lyn-muted flex-1">
              {t("contact.cards.general.description")}
            </Typography>
            <div className="mt-5">
              <Button asChild className="w-full">
                <a href="mailto:contato@lynco.com.br">
                  {t("contact.cards.general.cta")}
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-lyn-border/40 bg-lyn-surface p-6 flex flex-col">
            <Typography
              variant="caption"
              className="uppercase tracking-widest text-lyn-muted font-semibold"
            >
              {t("contact.cards.support.label")}
            </Typography>
            <Typography variant="headline" className="mt-2 text-white">
              {t("contact.cards.support.title")}
            </Typography>
            <Typography className="mt-2 text-lyn-muted flex-1">
              {t("contact.cards.support.description")}
            </Typography>
            <div className="mt-5 flex flex-col gap-2">
              <Button asChild className="w-full">
                <a href="mailto:suporte@lynco.com.br">
                  {t("contact.cards.support.ctaEmail")}
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <a
                  href="https://wa.me/5511997717311"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.cards.support.ctaWhatsApp")}
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-lyn-border/40 bg-lyn-secondary/5 p-6 flex flex-col">
            <Typography variant="headline" className="text-lyn-secondary">
              {t("contact.company.title")}
            </Typography>
            <div className="mt-4 space-y-2">
              <Typography className="text-white">
                {t("contact.company.legalName")}
              </Typography>
              <Typography className="text-lyn-muted">
                {t("contact.company.cnpj")}
              </Typography>
              <Typography className="text-lyn-muted">
                {t("contact.company.email")}
              </Typography>
            </div>
          </div>
        </div>
      </LegalPageLayout>
    </div>
  );
};

export default ContactUsPageContent;
