import { useTranslations } from "next-intl";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/layout/Container";

export function InMemoryPage() {
  const t = useTranslations("about.inMemory");

  return (
    <>
      <PageIntro title={t("title")} subtitle={t("intro") || undefined} />
      <Container className="py-16">
        {/* TODO: tribute content */}
      </Container>
    </>
  );
}
