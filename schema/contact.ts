import { z } from "zod";

import { createValidationSchema } from "./zodConfig";

export const createContactValidationSchema = (t: (key: string) => string) => {
  const validation = createValidationSchema(t);

  return z.object({
    name: validation.minLength(2).max(50),

    companyName: validation.minLength(2).max(100),

    email: validation.email(),

    inquiry: validation.string(),

    message: validation.minLength(10).max(1000),
  });
};

export type ContactFormData = z.infer<
  ReturnType<typeof createContactValidationSchema>
>;
