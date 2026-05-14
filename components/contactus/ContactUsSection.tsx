"use client";

import { useTranslation } from "react-i18next";

import Container from "@/components/Container";
import { Typography } from "@/components/Typography";

import ContactForm from "./ContactForm";

const ContactUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-grayWhite py-12 pt-32 sm:py-14 sm:pt-36 md:py-16 md:pt-40">
      <Container size="lg">
        {/* 3/9 Column Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left Column - Headings (3/12) */}
          <div className="px-4 md:col-span-4 md:px-0">
            <div className="flex flex-col gap-4">
              <Typography
                variant="subheading"
                className="text-bluish-cyan-dark font-medium"
              >
                {t("contact.subtitle")}
              </Typography>
              <Typography className="text-primary font-bold" variant="title">
                {t("contact.title")}
              </Typography>
            </div>
          </div>

          {/* Right Column - Contact Form (9/12) */}
          <div className="flex w-full justify-start px-4 md:col-span-8 md:justify-center md:px-0">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;
