import { useTranslations } from "next-intl";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/layout/Container";

export function AwardsPage() {
  const t = useTranslations("about.awards");

  return (
    <>
      <PageIntro title={t("title")} subtitle={t("intro") || undefined} />
      <Container className="py-16">
        {/* TODO: awards list */}
      </Container>
    </>
  );
}
