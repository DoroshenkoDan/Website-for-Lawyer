import { Scale, ChessKnight, type LucideIcon } from "lucide-react"
import { useTranslations } from "next-intl"

function Card({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon
  title: string
  text: string
}) {
  return (
    <div className="rounded-[14px] border border-white/[0.06] bg-graphite-deep px-6 py-5">
      <div className="flex items-center gap-3">
        <Icon className="size-[26px] shrink-0 text-accent" strokeWidth={1.5} />
        <h3 className="font-sans text-base font-semibold text-on-dark">
          {title}
        </h3>
      </div>
      <div className="my-4 h-px bg-white/10" />
      <p className="text-[15px] leading-6 text-submarine">{text}</p>
    </div>
  )
}

/** Two static value cards beneath the hero copy. */
export function HeroHighlights() {
  const t = useTranslations("home.hero.highlights")

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <Card icon={ChessKnight} title={t("approach.title")} text={t("approach.text")} />
      <Card
        icon={Scale}
        title={t("position.title")}
        text={t("position.text")}
      />
    </div>
  )
}
