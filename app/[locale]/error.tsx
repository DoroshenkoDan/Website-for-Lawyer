"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  const t = useTranslations("errorPages.serverError")

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <h1 className="font-heading text-2xl font-medium leading-tight tracking-tight text-white lg:text-[1.75rem]">
            {t("title")}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-on-dark">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => unstable_retry()}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              {t("retryCta")}
            </button>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              {t("homeCta")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
