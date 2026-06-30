import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"

export function AboutPage() {
  const t = useTranslations("about")

  return (
    <>
      <Container className="py-16">
        {/* TODO: biography content */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/about/awards"
            className={buttonVariants({ variant: "outline" })}
          >
            {t("awards.title")}
          </Link>
          <Link
            href="/about/in-memory"
            className={buttonVariants({ variant: "outline" })}
          >
            {t("inMemory.title")}
          </Link>
        </div>
      </Container>
    </>
  )
}
