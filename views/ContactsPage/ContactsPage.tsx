import { useTranslations } from "next-intl";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";

export function ContactsPage() {
  const t = useTranslations("contacts");

  return (
    <>
      <PageIntro title={t("title")} subtitle={t("subtitle")} />
      <Container className="py-16">
        <ContactForm />
      </Container>
    </>
  );
}
