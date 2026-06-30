import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"

export function InMemoryPage() {
  const t = useTranslations("about.inMemory")

  return (
    <>
      <Container className="py-16">
        {/* TODO: tribute content */}
      </Container>
    </>
  )
}
