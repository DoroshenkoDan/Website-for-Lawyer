import { useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import type { PracticeId } from "@/config/practices"

/**
 * Generic skeleton for a single practice page.
 * Each practice has its own route folder, so a page can stop using this and
 * render bespoke content/sections (e.g. electronic-declarations sub-categories).
 */
export function PracticeArticle({ id }: { id: PracticeId }) {
  const t = useTranslations("practices.items")
  const short = t(`${id}.short`)

  return (
    <>
      <Container className="py-16">
        <article className="max-w-3xl text-graphite/80">
          {/* TODO: content for practice "{id}" */}
        </article>
      </Container>
    </>
  )
}
