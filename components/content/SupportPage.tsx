"use client";

import { useMemo } from "react";

import LegalHero from "@/components/legal/LegalHero";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/legacy-typography";
import { useTranslationArray } from "@/hooks/useTranslationArray";

type FaqItem = { q: string; a: string };

const SupportPageContent = () => {
  const { t, tArray } = useTranslationArray();
  const query = "";

  const faqs: FaqItem[] = useMemo(() => {
    const qs = tArray("support.faq.questions");
    const as = tArray("support.faq.answers");
    return qs.map((q, idx) => ({ q, a: as[idx] ?? "" })).filter((x) => x.q);
  }, [tArray]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q));
  }, [faqs, query]);

  return (
    <div className="min-h-screen bg-lyn-surface">
      <LegalHero
        title={t("support.hero.title")}
        description={t("support.hero.subtitle")}
      />

      <div className="mx-auto  max-w-6xl px-4 sm:px-8 py-12">
        <section>
          <Typography variant="headline" className="text-lyn-secondary">
            {t("support.contact.title")}
          </Typography>
          <Typography className="mt-2 text-lyn-muted">
            {t("support.contact.subtitle")}
          </Typography>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <a
              href="https://wa.me/5511997717311"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-lyn-border/40 bg-lyn-surface p-6 transition hover:border-secondary hover:shadow-md"
            >
              <Typography
                variant="caption"
                className="uppercase tracking-widest text-lyn-muted font-semibold"
              >
                {t("support.contact.cards.whatsapp.label")}
              </Typography>
              <Typography variant="headline" className="mt-2 text-white">
                {t("support.contact.cards.whatsapp.title")}
              </Typography>
              <Typography className="mt-2 text-lyn-muted">
                {t("support.contact.cards.whatsapp.description")}
              </Typography>
              <Typography className="mt-4 text-lyn-secondary font-semibold">
                {t("support.contact.cards.whatsapp.cta")}
              </Typography>
            </a>

            <a
              href="mailto:suporte@lynco.com.br"
              className="rounded-2xl border border-lyn-border/40 bg-lyn-surface p-6 transition hover:border-secondary hover:shadow-md"
            >
              <Typography
                variant="caption"
                className="uppercase tracking-widest text-lyn-muted font-semibold"
              >
                {t("support.contact.cards.email.label")}
              </Typography>
              <Typography variant="headline" className="mt-2 text-white">
                {t("support.contact.cards.email.title")}
              </Typography>
              <Typography className="mt-2 text-lyn-muted">
                {t("support.contact.cards.email.description")}
              </Typography>
              <Typography className="mt-4 text-lyn-secondary font-semibold">
                {t("support.contact.cards.email.cta")}
              </Typography>
            </a>

            <a
              href="mailto:contato@lynco.com.br"
              className="rounded-2xl border border-lyn-border/40 bg-lyn-surface p-6 transition hover:border-secondary hover:shadow-md"
            >
              <Typography
                variant="caption"
                className="uppercase tracking-widest text-lyn-muted font-semibold"
              >
                {t("support.contact.cards.general.label")}
              </Typography>
              <Typography variant="headline" className="mt-2 text-white">
                {t("support.contact.cards.general.title")}
              </Typography>
              <Typography className="mt-2 text-lyn-muted">
                {t("support.contact.cards.general.description")}
              </Typography>
              <Typography className="mt-4 text-lyn-secondary font-semibold">
                {t("support.contact.cards.general.cta")}
              </Typography>
            </a>
          </div>
        </section>

        <section className="mt-12">
          <Typography variant="headline" className="text-lyn-secondary">
            {t("support.faq.title")}
          </Typography>
          <Typography className="mt-2 text-lyn-muted">
            {t("support.faq.subtitle")}
          </Typography>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {filtered.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-lyn-border/40 bg-lyn-surface overflow-hidden open:border-secondary"
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3">
                  <Typography className="text-white font-semibold">
                    {item.q}
                  </Typography>
                  <div className="h-7 w-7 rounded-full bg-lyn-secondary/10 text-lyn-secondary flex items-center justify-center transition-transform group-open:rotate-180">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="border-t border-lyn-border/30 px-5 pb-5 pt-4">
                  <Typography className="text-white">{item.a}</Typography>
                </div>
              </details>
            ))}
          </div>

          {filtered.length === 0 ? (
            <Typography className="mt-6 text-lyn-muted">
              {t("support.faq.noResults")}
            </Typography>
          ) : null}
        </section>

        <section className="mt-12">
          <div className="rounded-2xl border border-lyn-border/40 bg-lyn-secondary/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <Typography variant="headline" className="text-lyn-secondary">
                {t("support.banner.title")}
              </Typography>
              <Typography className="mt-2 text-lyn-muted">
                {t("support.banner.subtitle")}
              </Typography>
            </div>
            <Button asChild>
              <a
                href="https://wa.me/5511997717311"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("support.banner.cta")}
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportPageContent;
