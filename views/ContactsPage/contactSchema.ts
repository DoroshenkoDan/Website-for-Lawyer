import { z } from "zod";
import type { useTranslations } from "next-intl";

type Translate = ReturnType<typeof useTranslations<"contacts.form">>;

export function createContactSchema(t: Translate) {
  return z.object({
    name: z.string().min(1, t("validation.nameRequired")),
    email: z.email(t("validation.emailInvalid")),
    phone: z.string().optional(),
    message: z.string().max(450, t("validation.messageToBig")).optional(),
    website: z.string().optional(),
    consent: z
      .boolean()
      .refine((value) => value === true, t("validation.consentRequired")),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;
