import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { ContactForm } from "./ContactForm"

export function ContactsPage() {
  const t = useTranslations("contacts")

  return (
    <>
      <Container className="py-16">
        <ContactForm />
      </Container>
    </>
  )
}
