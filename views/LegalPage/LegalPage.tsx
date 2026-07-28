import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { getLegalDocument } from "@/content/legal"
import type { LegalDocId } from "@/types/legal"
import { LegalMasthead } from "./LegalMasthead"
import { ClauseIndex } from "./ClauseIndex"
import { ClauseList } from "./ClauseList"

export function LegalPage({ id }: { id: LegalDocId }) {
  const locale = useLocale() as Loc
  const t = useTranslations("legal")
  const doc = getLegalDocument(id)

  const clauses = doc.sections.map((section, index) => ({
    id: section.id,
    number: index + 1,
    title: section.title[locale],
    body: section.body[locale],
  }))

  return (
    <>
      <LegalMasthead title={t(`${id}.title`)} lede={t(`${id}.lede`)} />

      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="rounded-3xl bg-haze px-5 py-10 sm:px-9 lg:px-14 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-14">
              <ClauseIndex
                items={clauses.map(({ id, number, title }) => ({
                  id,
                  number,
                  title,
                }))}
                title={t("indexTitle")}
              />

              <ClauseList clauses={clauses} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
