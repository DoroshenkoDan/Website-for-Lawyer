import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { LectureList } from "./LectureList"
import { MediaComments } from "./MediaComments"

export function Expertise() {
  const t = useTranslations("home.expertise")

  return (
    <section className="bg-white py-20">
      <Container>
        <header className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="font-heading text-[1.75rem] font-semibold text-firefly lg:text-[2rem]">
            {t("title")}
          </h2>
        </header>

        <hr className="mt-7 border-graphite/10" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <LectureList />
          <MediaComments />
        </div>
      </Container>
    </section>
  )
}
