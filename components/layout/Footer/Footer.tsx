import { Container } from "@/components/layout/Container"
import { FooterTop } from "./FooterTop"
import { FooterPartners } from "./FooterPartners"
import { FooterBottom } from "./FooterBottom"

export function Footer() {
  return (
    <footer className="bg-graphite text-on-dark">
      <Container className="flex flex-col gap-9 py-14">
        <FooterTop />
        <FooterPartners />
      </Container>
      <FooterBottom />
    </footer>
  )
}
