"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { INQUIRY_OPTIONS } from "@/constants/landing";
import {
  type ContactFormData,
  createContactValidationSchema,
} from "@/schema/contact";

import InputField from "../InputField";
import { Select } from "../Select";
import TextareaField from "../TextareaField";

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    mode: "all",
    resolver: zodResolver(createContactValidationSchema(t)),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      inquiry: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    try {
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 px-4 sm:px-0">
      {/* Description */}
      <Typography variant="p" className="text-secondary-text leading-relaxed">
        {t("contact.description")}
      </Typography>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        {/* Name Field */}
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <InputField
              {...field}
              name="name"
              placeholder={t("contact.form.name")}
              variant="underlined"
              errors={errors}
            />
          )}
        />

        {/* Company Name Field */}
        <Controller
          control={control}
          name="companyName"
          render={({ field }) => (
            <InputField
              {...field}
              name="companyName"
              placeholder={t("contact.form.companyName")}
              variant="underlined"
              errors={errors}
            />
          )}
        />

        {/* Email and Inquiry Row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Email Field */}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <InputField
                {...field}
                name="email"
                placeholder={t("contact.form.email")}
                type="email"
                variant="underlined"
                errors={errors}
              />
            )}
          />

          {/* Inquiry Dropdown */}
          <Controller
            control={control}
            name="inquiry"
            render={({ field }) => (
              <Select
                {...field}
                name="inquiry"
                placeholder={t("contact.form.inquiry")}
                variant="underlined"
                options={INQUIRY_OPTIONS.map((option) => ({
                  ...option,
                  label: t(option.label),
                }))}
                errors={errors}
              />
            )}
          />
        </div>

        {/* Message Field */}
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <TextareaField
              {...field}
              name="message"
              placeholder={t("contact.form.message")}
              variant="underlined"
              rows={1}
              errors={errors}
            />
          )}
        />

        {/* Action Buttons */}
        <div className="flex max-w-sm flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            type="submit"
            variant="solidBlue"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("common.loading")
              : t("contact.form.submitButton")}
          </Button>
        </div>
      </form>

      {/* Email Contact */}
      <div className="pt-4">
        <Typography variant="p" className="text-secondary-text text-sm">
          {t("contact.form.emailContact")}{" "}
          <a
            href={`mailto:${t("contact.form.emailAddress")}`}
            className="text-bluish-cyan-dark hover:underline"
          >
            {t("contact.form.emailAddress")}
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default ContactForm;
