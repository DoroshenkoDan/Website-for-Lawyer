import Image from "next/image"
import { useTranslations } from "next-intl"
import { PageBanner } from "@/components/layout/PageBanner"
import { Container } from "@/components/layout/Container"
import { awards } from "@/config/awards"

export function AwardsPage() {
  const t = useTranslations("about.awards")

  return (
    <>
      <PageBanner title={t("title")} description={t("teaser")} />
      <section className="bg-haze py-16 lg:py-20">
        <Container>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {awards.map((award) => (
              <li key={award.src} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-graphite/10 bg-white">
                  <Image
                    src={award.src}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <p className="mt-3 text-sm leading-snug text-graphite/70">
                  {award.title}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
