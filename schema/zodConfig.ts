import { z } from "zod";

export const createValidationSchema = (t: (key: string) => string) => ({
  string: () => z.string().min(1, { error: t("validationErrors.required") }),

  email: () =>
    z
      .email({ error: t("validationErrors.invalidEmail") })
      .min(1, { error: t("validationErrors.required") }),

  password: () =>
    z
      .string()
      .nonempty(t("validationErrors.required"))
      .min(
        8,
        t("validationErrors.minimumLength").replace("{{minimumLength}}", "8")
      )
      .regex(/[a-z]/, t("validationErrors.lowerCase"))
      .regex(/[A-Z]/, t("validationErrors.upperCase"))
      .regex(/[0-9]/, t("validationErrors.number"))
      .regex(/[^a-zA-Z0-9]/, t("validationErrors.specialChar")),

  number: () => z.number().min(1, { error: t("validationErrors.required") }),

  minLength: (min: number) =>
    z.string().min(min, {
      error: t("validationErrors.minimumLength").replace(
        "{{minimumLength}}",
        min.toString()
      ),
    }),

  maxLength: (max: number) =>
    z.string().max(max, {
      error: t("validationErrors.maximumLength").replace(
        "{{maximumLength}}",
        max.toString()
      ),
    }),

  minValue: (min: number) =>
    z.number().min(min, {
      error: t("validationErrors.minimumValue").replace(
        "{{minimumValue}}",
        min.toString()
      ),
    }),

  maxValue: (max: number) =>
    z.number().max(max, {
      error: t("validationErrors.maximumValue").replace(
        "{{maximumValue}}",
        max.toString()
      ),
    }),

  enum: <T extends [string, ...string[]]>(values: T) =>
    z.string().refine((val) => values.includes(val), {
      error: t("validationErrors.invalidOption"),
    }),

  regex: (pattern: RegExp) =>
    z.string().regex(pattern, {
      error: t("validationErrors.invalidFormat"),
    }),
});
