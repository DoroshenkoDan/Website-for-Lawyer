"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const t = useTranslations("contacts.form");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const schema = z.object({
    name: z.string().min(1, t("validation.nameRequired")),
    email: z.email(t("validation.emailInvalid")),
    phone: z.string().optional(),
    message: z.string().min(1, t("validation.messageRequired")),
  });
  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      if (!res.ok) throw new Error();
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl space-y-4"
      noValidate
    >
      <div>
        <label className="mb-1 block text-sm text-graphite">{t("name")}</label>
        <Input {...register("name")} aria-invalid={!!errors.name} />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-graphite">{t("email")}</label>
        <Input type="email" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-graphite">{t("phone")}</label>
        <Input type="tel" {...register("phone")} />
      </div>

      <div>
        <label className="mb-1 block text-sm text-graphite">
          {t("message")}
        </label>
        <Textarea {...register("message")} aria-invalid={!!errors.message} />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>

      {status === "success" && (
        <p className="text-sm text-accent">{t("success")}</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">{t("error")}</p>}
    </form>
  );
}
