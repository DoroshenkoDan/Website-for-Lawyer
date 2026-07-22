"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { Check } from "lucide-react"
import { Link } from "@/i18n/navigation"
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const schema = createContactSchema(t)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, website: "" },
  })

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle")
    try {
      const res = await fetch("/lib/api/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          website: values.website,
        }),
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
      <div
        aria-hidden
        className="absolute left-[-9999px] top-[-9999px] h-px w-px overflow-hidden"
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

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
        <label className="mb-0.5 block text-sm text-submarine">{t("message")}</label>
        <textarea
          rows={3}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={cn(line(!!errors.message), "resize-none")}
        />
        <ErrorBadge message={errors.message?.message} />
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-submarine">
          <span className="relative mt-0.5 block size-5 shrink-0">
            <input
              type="checkbox"
              {...register("consent")}
              aria-invalid={!!errors.consent}
              className="peer size-5 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 transition-colors hover:border-accent-hover checked:border-accent checked:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 aria-invalid:border-red-500"
            />
            <Check
              aria-hidden
              strokeWidth={3}
              className="pointer-events-none absolute inset-0 m-auto size-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
            />
          </span>
          <span>
            {t.rich("consent", {
              link: (chunks) => (
                <Link
                  href="/privacy"
                  className="text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
                >
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-[11px] text-red-500">
            {errors.consent.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>

      {status === "success" && (
        <p className="text-sm text-accent">{t("success")}</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">{t("error")}</p>}
    </form>
  )
}
