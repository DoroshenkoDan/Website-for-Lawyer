import { useTranslations } from "next-intl"
import { PageBanner } from "@/components/layout/PageBanner"
import { AllPractices } from "./Sections/AllPractices"
import { ContactCta } from "./Sections/ContactCta"

export function PracticesPage() {
  const t = useTranslations("practices")

  return (
    <>
      <PageBanner title={t("title")} description={t("lead")} />
      <AllPractices />
      <ContactCta />
    </>
  )
}
