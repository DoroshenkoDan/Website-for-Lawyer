import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { RichContent } from "@/components/RichContent"
import { getPracticeContent } from "@/content/practices"
import type { PracticeId } from "@/config/practices"

export function PracticeArticleBody({ id }: { id: PracticeId }) {
  const locale = useLocale() as Loc
  const t = useTranslations("practices.items")
  const content = getPracticeContent(id)
  const title = t(`${id}.title`)
  const bodyBlocks = content?.body?.[locale]
  const imageAlt = content?.imageAlt?.[locale] ?? title

  return (
    <section className="mt-10 bg-haze py-14 lg:mt-14 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-2xl border border-accent/40"
          />
          <figure className="relative rounded-2xl border border-graphite/10 bg-white p-2.5 shadow-[0_24px_60px_-28px_rgba(35,43,44,0.4)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-metrics">
              {content?.image ? (
                <Image
                  src={content.image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                  priority
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <ImageIcon className="size-8 text-graphite/25" aria-hidden />
                </div>
              )}
            </div>
          </figure>
        </div>

        <div>
          {bodyBlocks ? (
            <RichContent blocks={bodyBlocks} />
          ) : (
            <p className="text-base leading-relaxed text-graphite/80">
              {t(`${id}.short`)}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
