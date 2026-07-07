"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocale, useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { createContactSchema, type ContactFormValues } from "./contactSchema"

const fieldBase =
  "w-full border-b bg-transparent px-0 py-1 text-sm text-on-dark focus:outline-none transition-colors"

function line(hasError: boolean) {
  return cn(
    fieldBase,
    hasError ? "border-red-500" : "border-white/25 focus:border-accent",
  )
}

function ErrorBadge({ message }: { message?: string }) {
  if (!message) return null
  return (
    <span className="absolute right-0 top-0 rounded bg-red-500 px-2 py-0.5 text-[11px] font-medium leading-tight text-white">
      {message}
    </span>
  )
}

export function ContactForm() {
  const t = useTranslations("contacts.form")
  const locale = useLocale()
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const schema = createContactSchema(t)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle")
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      })
      if (!res.ok) throw new Error()
      reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="relative">
        <label className="mb-0.5 block text-sm text-submarine">
          {t("name")} <span className="text-accent">*</span>
        </label>
        <input
          {...register("name")}
          aria-invalid={!!errors.name}
          className={line(!!errors.name)}
        />
        <ErrorBadge message={errors.name?.message} />
      </div>

      <div className="relative">
        <label className="mb-0.5 block text-sm text-submarine">
          {t("email")} <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={line(!!errors.email)}
        />
        <ErrorBadge message={errors.email?.message} />
      </div>

      <div className="relative">
        <label className="mb-0.5 block text-sm text-submarine">{t("phone")}</label>
        <input type="tel" {...register("phone")} className={line(false)} />
      </div>

      <div className="relative">
        <label className="mb-0.5 block text-sm text-submarine">
          {t("message")}
        </label>
        <textarea
          rows={3}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={cn(line(!!errors.message), "resize-none")}
        />
        <ErrorBadge message={errors.message?.message} />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>

      {status === "success" && (
        <p className="text-sm text-accent">{t("success")}</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">{t("error")}</p>}
    </form>
  )
}
