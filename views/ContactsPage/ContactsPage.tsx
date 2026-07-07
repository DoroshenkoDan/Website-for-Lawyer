import { Container } from "@/components/layout/Container"
import { PhotoCover } from "./PhotoCover"
import { ContactCard } from "./ContactCard"

export function ContactsPage() {
  return (
    <Container className="py-24 lg:py-32 max-w-7xl">
      <div className="relative flex min-h-135 overflow-hidden rounded-3xl bg-hero/70 p-6 sm:p-10 lg:min-h-165 lg:items-center lg:p-14">
        <PhotoCover />
        <div className="relative z-10  lg:ml-auto">
          <ContactCard />
        </div>
      </div>
    </Container>
  )
}
