"use client";

import LegalHero from "@/components/legal/LegalHero";
import LegalTwoColumnLayout from "@/components/legal/LegalTwoColumnLayout";
import Typography from "@/components/ui/legacy-typography";
import { useTranslationArray } from "@/hooks/useTranslationArray";

type DefinitionItem = { term: string; desc: string };
type TableRow = [string, string] | [string, string, string];

const SectionHeader = ({ index, title }: { index: number; title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="lyn-btn-primary flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
      {index}
    </div>
    <Typography variant="headline" className="text-lyn-secondary">
      {title}
    </Typography>
  </div>
);

const DocList = ({ items }: { items: string[] }) => (
  <ul className="mt-3 flex flex-col gap-2">
    {items.map((x) => (
      <li key={x} className="flex gap-3 text-white leading-relaxed">
        <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-lyn-secondary flex-shrink-0" />
        <span>{x}</span>
      </li>
    ))}
  </ul>
);

const PrivacyPolicyPageContent = () => {
  const { t, tArray } = useTranslationArray();

  const whoParagraphs = tArray("legal.privacyHtml.sections.who.paragraphs");
  const definitions = tArray(
    "legal.privacyHtml.sections.definitions.items"
  ) as unknown as DefinitionItem[];

  const userDataList = tArray("legal.privacyHtml.sections.data.userDataList");
  const finalCustomerList = tArray(
    "legal.privacyHtml.sections.data.finalCustomerList"
  );

  const purposesHeaders = tArray(
    "legal.privacyHtml.sections.purposes.tableHeaders"
  );
  const purposesRows = tArray(
    "legal.privacyHtml.sections.purposes.tableRows"
  ) as unknown as TableRow[];

  const sharingHeaders = tArray(
    "legal.privacyHtml.sections.sharing.tableHeaders"
  );
  const sharingRows = tArray(
    "legal.privacyHtml.sections.sharing.tableRows"
  ) as unknown as Array<[string, string]>;

  const retentionHeaders = tArray(
    "legal.privacyHtml.sections.retention.tableHeaders"
  );
  const retentionRows = tArray(
    "legal.privacyHtml.sections.retention.tableRows"
  ) as unknown as Array<[string, string]>;

  const rightsList = tArray("legal.privacyHtml.sections.rights.list");
  const securityList = tArray("legal.privacyHtml.sections.security.list");
  const cookiesList = tArray("legal.privacyHtml.sections.cookies.list");
  const transferParagraphs = tArray(
    "legal.privacyHtml.sections.transfer.paragraphs"
  );
  const minorsParagraphs = tArray(
    "legal.privacyHtml.sections.minors.paragraphs"
  );
  const changesParagraphs = tArray(
    "legal.privacyHtml.sections.changes.paragraphs"
  );

  const nav = [
    { id: "quem-somos", label: `1. ${t("legal.privacyHtml.nav.who")}` },
    {
      id: "definicoes",
      label: `2. ${t("legal.privacyHtml.nav.definitions")}`,
    },
    { id: "dados", label: `3. ${t("legal.privacyHtml.nav.data")}` },
    {
      id: "finalidades",
      label: `4. ${t("legal.privacyHtml.nav.purposes")}`,
    },
    {
      id: "compartilhamento",
      label: `5. ${t("legal.privacyHtml.nav.sharing")}`,
    },
    {
      id: "retencao",
      label: `6. ${t("legal.privacyHtml.nav.retention")}`,
    },
    { id: "direitos", label: `7. ${t("legal.privacyHtml.nav.rights")}` },
    { id: "seguranca", label: `8. ${t("legal.privacyHtml.nav.security")}` },
    { id: "cookies", label: `9. ${t("legal.privacyHtml.nav.cookies")}` },
    {
      id: "transferencia",
      label: `10. ${t("legal.privacyHtml.nav.transfer")}`,
    },
    { id: "menores", label: `11. ${t("legal.privacyHtml.nav.minors")}` },
    { id: "alteracoes", label: `12. ${t("legal.privacyHtml.nav.changes")}` },
    { id: "contato", label: `13. ${t("legal.privacyHtml.nav.contact")}` },
  ];

  return (
    <div>
      <LegalHero
        title={t("legal.privacyHtml.title")}
        description={t("legal.privacyHtml.description")}
      />

      <LegalTwoColumnLayout nav={nav}>
        <div className="border-b border-lyn-border/40 pb-10 mb-12">
          <Typography className="text-lyn-muted uppercase tracking-[0.2em] text-xs font-semibold">
            {t("legal.privacyHtml.eyebrow")}
          </Typography>
          <Typography
            variant="display"
            className="text-lyn-secondary text-3xl sm:text-4xl mt-2"
          >
            {t("legal.privacyHtml.title")}
          </Typography>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <Typography variant="caption" className="text-lyn-muted">
              <span className="font-semibold text-white">
                {t("legal.privacyHtml.meta.effectiveLabel")}
              </span>{" "}
              {t("legal.privacyHtml.meta.effectiveValue")}
            </Typography>
            <Typography variant="caption" className="text-lyn-muted">
              <span className="font-semibold text-white">
                {t("legal.privacyHtml.meta.versionLabel")}
              </span>{" "}
              {t("legal.privacyHtml.meta.versionValue")}
            </Typography>
            <Typography variant="caption" className="text-lyn-muted">
              <span className="font-semibold text-white">
                {t("legal.privacyHtml.meta.companyLabel")}
              </span>{" "}
              {t("legal.privacyHtml.meta.companyValue")}
            </Typography>
          </div>
        </div>

        <section className="mb-14" id="quem-somos">
          <SectionHeader
            index={1}
            title={t("legal.privacyHtml.sections.who.title")}
          />
          {whoParagraphs.map((p) => (
            <Typography key={p} className="text-white leading-relaxed mb-4">
              {p}
            </Typography>
          ))}
        </section>

        <section className="mb-14" id="definicoes">
          <SectionHeader
            index={2}
            title={t("legal.privacyHtml.sections.definitions.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.definitions.intro")}
          </Typography>

          <div className="mt-4 overflow-hidden rounded-xl border border-lyn-border/40">
            {definitions.map((item) => (
              <div
                key={item.term}
                className="grid sm:grid-cols-[160px_1fr] border-b border-lyn-border/40 last:border-b-0"
              >
                <div className="bg-lyn-secondary/5 px-4 py-3 font-semibold text-lyn-secondary">
                  {item.term}
                </div>
                <div className="px-4 py-3 text-white">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14" id="dados">
          <SectionHeader
            index={3}
            title={t("legal.privacyHtml.sections.data.title")}
          />

          <Typography variant="subheading" className="text-white mt-2">
            {t("legal.privacyHtml.sections.data.userDataTitle")}
          </Typography>
          <Typography className="text-white leading-relaxed mt-2">
            {t("legal.privacyHtml.sections.data.userDataIntro")}
          </Typography>
          <DocList items={userDataList} />

          <Typography variant="subheading" className="text-white mt-6">
            {t("legal.privacyHtml.sections.data.finalCustomerTitle")}
          </Typography>
          <Typography className="text-white leading-relaxed mt-2">
            {t("legal.privacyHtml.sections.data.finalCustomerIntro")}
          </Typography>
          <DocList items={finalCustomerList} />

          <div className="mt-5 rounded-lg bg-lyn-secondary/10 border border-secondary/30 border-l-4 border-l-main p-5 text-lyn-secondary">
            <Typography className="text-lyn-secondary">
              {t("legal.privacyHtml.sections.data.importantNote")}
            </Typography>
          </div>
        </section>

        <section className="mb-14" id="finalidades">
          <SectionHeader
            index={4}
            title={t("legal.privacyHtml.sections.purposes.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.purposes.intro")}
          </Typography>

          <div className="mt-4 overflow-auto rounded-xl border border-lyn-border/40">
            <table className="min-w-[860px] w-full border-collapse text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {purposesHeaders.map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {purposesRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 1 ? "bg-lyn-secondary/5" : undefined}
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="px-4 py-3 border-t border-lyn-border/30"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14" id="compartilhamento">
          <SectionHeader
            index={5}
            title={t("legal.privacyHtml.sections.sharing.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.sharing.intro")}
          </Typography>

          <div className="mt-4 overflow-auto rounded-xl border border-lyn-border/40">
            <table className="min-w-[860px] w-full border-collapse text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {sharingHeaders.map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sharingRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 1 ? "bg-lyn-secondary/5" : undefined}
                  >
                    <td className="px-4 py-3 border-t border-lyn-border/30 font-semibold">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 border-t border-lyn-border/30">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Typography className="mt-4 text-white leading-relaxed">
            {t("legal.privacyHtml.sections.sharing.footer")}
          </Typography>
        </section>

        <section className="mb-14" id="retencao">
          <SectionHeader
            index={6}
            title={t("legal.privacyHtml.sections.retention.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.retention.intro")}
          </Typography>

          <div className="mt-4 overflow-auto rounded-xl border border-lyn-border/40">
            <table className="min-w-[720px] w-full border-collapse text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  {retentionHeaders.map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {retentionRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 1 ? "bg-lyn-secondary/5" : undefined}
                  >
                    <td className="px-4 py-3 border-t border-lyn-border/30">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 border-t border-lyn-border/30">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Typography className="mt-4 text-white leading-relaxed">
            {t("legal.privacyHtml.sections.retention.footer")}
          </Typography>
        </section>

        <section className="mb-14" id="direitos">
          <SectionHeader
            index={7}
            title={t("legal.privacyHtml.sections.rights.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.rights.intro")}
          </Typography>
          <DocList items={rightsList} />

          <div className="mt-5 rounded-lg bg-lyn-secondary/10 border border-secondary/30 border-l-4 border-l-main p-5 text-lyn-secondary">
            <Typography className="text-lyn-secondary">
              {t("legal.privacyHtml.sections.rights.infoCard")}
            </Typography>
          </div>
        </section>

        <section className="mb-14" id="seguranca">
          <SectionHeader
            index={8}
            title={t("legal.privacyHtml.sections.security.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.security.intro")}
          </Typography>
          <DocList items={securityList} />
          <Typography className="mt-4 text-white leading-relaxed">
            {t("legal.privacyHtml.sections.security.footer")}
          </Typography>
        </section>

        <section className="mb-14" id="cookies">
          <SectionHeader
            index={9}
            title={t("legal.privacyHtml.sections.cookies.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.cookies.intro")}
          </Typography>
          <DocList items={cookiesList} />
          <Typography className="mt-4 text-white leading-relaxed">
            {t("legal.privacyHtml.sections.cookies.footer")}
          </Typography>
        </section>

        <section className="mb-14" id="transferencia">
          <SectionHeader
            index={10}
            title={t("legal.privacyHtml.sections.transfer.title")}
          />
          {transferParagraphs.map((p) => (
            <Typography key={p} className="text-white leading-relaxed mb-4">
              {p}
            </Typography>
          ))}
        </section>

        <section className="mb-14" id="menores">
          <SectionHeader
            index={11}
            title={t("legal.privacyHtml.sections.minors.title")}
          />
          {minorsParagraphs.map((p) => (
            <Typography key={p} className="text-white leading-relaxed mb-4">
              {p}
            </Typography>
          ))}
        </section>

        <section className="mb-14" id="alteracoes">
          <SectionHeader
            index={12}
            title={t("legal.privacyHtml.sections.changes.title")}
          />
          {changesParagraphs.map((p) => (
            <Typography key={p} className="text-white leading-relaxed mb-4">
              {p}
            </Typography>
          ))}
        </section>

        <section className="mb-2" id="contato">
          <SectionHeader
            index={13}
            title={t("legal.privacyHtml.sections.contact.title")}
          />
          <Typography className="text-white leading-relaxed">
            {t("legal.privacyHtml.sections.contact.intro")}
          </Typography>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-lyn-secondary/5 border border-lyn-border/40 p-5">
              <Typography className="text-[11px] font-bold uppercase tracking-[0.15em] text-lyn-muted">
                {t("legal.privacyHtml.sections.contact.cards.dpoEmailLabel")}
              </Typography>
              <Typography className="mt-2 font-medium text-white">
                <a
                  className="text-secondary hover:underline"
                  href={t(
                    "legal.privacyHtml.sections.contact.cards.dpoEmailHref"
                  )}
                >
                  {t("legal.privacyHtml.sections.contact.cards.dpoEmailValue")}
                </a>
              </Typography>
            </div>
            <div className="rounded-xl bg-lyn-secondary/5 border border-lyn-border/40 p-5">
              <Typography className="text-[11px] font-bold uppercase tracking-[0.15em] text-lyn-muted">
                {t("legal.privacyHtml.sections.contact.cards.companyLabel")}
              </Typography>
              <Typography className="mt-2 font-medium text-white">
                {t("legal.privacyHtml.sections.contact.cards.companyValue")}
              </Typography>
            </div>
            <div className="rounded-xl bg-lyn-secondary/5 border border-lyn-border/40 p-5">
              <Typography className="text-[11px] font-bold uppercase tracking-[0.15em] text-lyn-muted">
                {t("legal.privacyHtml.sections.contact.cards.cnpjLabel")}
              </Typography>
              <Typography className="mt-2 font-medium text-white">
                {t("legal.privacyHtml.sections.contact.cards.cnpjValue")}
              </Typography>
            </div>
            <div className="rounded-xl bg-lyn-secondary/5 border border-lyn-border/40 p-5">
              <Typography className="text-[11px] font-bold uppercase tracking-[0.15em] text-lyn-muted">
                {t("legal.privacyHtml.sections.contact.cards.addressLabel")}
              </Typography>
              <Typography className="mt-2 font-medium text-white">
                {t("legal.privacyHtml.sections.contact.cards.addressValue")}
              </Typography>
            </div>
            <div className="rounded-xl bg-lyn-secondary/5 border border-lyn-border/40 p-5 sm:col-span-2">
              <Typography className="text-[11px] font-bold uppercase tracking-[0.15em] text-lyn-muted">
                {t("legal.privacyHtml.sections.contact.cards.anpdLabel")}
              </Typography>
              <Typography className="mt-2 text-white">
                <a
                  className="text-secondary hover:underline"
                  href={t("legal.privacyHtml.sections.contact.cards.anpdHref")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("legal.privacyHtml.sections.contact.cards.anpdHrefLabel")}
                </a>{" "}
                {t("legal.privacyHtml.sections.contact.cards.anpdSuffix")}
              </Typography>
            </div>
          </div>
        </section>
      </LegalTwoColumnLayout>
    </div>
  );
};

export default PrivacyPolicyPageContent;
