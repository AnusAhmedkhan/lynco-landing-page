"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import { ROUTES } from "@/constants/routes";
import { lynLandingAssets } from "@/lib/lyn-landing-assets";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: ROUTES.PRICING },
  { label: "FAQ", href: "#faq" },
] as const;

const companyLinks = [
  { label: "Contact Us", href: ROUTES.CONTACT },
  { label: "Facebook", href: "#" },
  { label: "Linkedin", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
] as const;

const LynLandingFooter = () => {
  return (
    <footer id="download" className="bg-lyn-bg border-lyn-border border-t pb-10 pt-16">
      <Container size="xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm space-y-4">
            <Image
              src={lynLandingAssets.logo}
              alt="Lynco"
              width={123}
              height={25}
              className="h-6 w-auto"
            />
            <p className="text-white text-xs font-bold leading-relaxed">
              Intelligent scheduling automation via WhatsApp.
              <br />
              Official Meta Business Partner.
            </p>
            <p className="text-white text-xs leading-relaxed">
              LYNCO TECHNOLOGIES LTDA
              <br />
              CNPJ: 62.624.475/0001-06
              <br />
              Av. Paulista, 1636, Conj. 1504 – Bela Vista
              <br />
              São Paulo/SP – CEP 01320-200
            </p>
            <div>
              <p className="text-white mb-2 text-xs font-bold">Download the app</p>
              <div className="flex flex-wrap gap-2">
                <Image
                  src={lynLandingAssets.badgeAppStore}
                  alt="App Store"
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                />
                <Image
                  src={lynLandingAssets.badgeGooglePlay}
                  alt="Google Play"
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 text-sm md:gap-20">
            <div>
              <p className="text-white mb-3 text-xs font-normal uppercase tracking-wide">
                Product
              </p>
              <ul className="text-white/80 space-y-2">
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white mb-3 text-xs font-normal uppercase tracking-wide">
                Company
              </p>
              <ul className="text-white/80 space-y-2">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white mb-3 text-xs font-normal uppercase tracking-wide">
                Legal
              </p>
              <ul className="text-white/80 space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-lyn-border mt-14 flex flex-col gap-6 border-t pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-white text-xs font-normal uppercase tracking-wide">
            © 2026 LYNCO TECHNOLOGIES LTDA. All rights reserved.
          </p>
          <div className="text-white flex items-center gap-2 text-xs">
            <Image
              src={lynLandingAssets.footerMetaIcon}
              alt=""
              width={21}
              height={14}
              className="opacity-90"
            />
            <span>Meta Business Partner</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default LynLandingFooter;
