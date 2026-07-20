import { useTranslations } from "next-intl"

export function HeroHeadline() {
  const t = useTranslations("home.hero")

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-grey">
        <span aria-hidden className="text-accent">
          —{" "}
        </span>
        {t("eyebrow")}
      </p>
      <h1 className="mt-4 font-heading text-3xl text-white lg:mt-5 lg:text-[3.75rem] lg:leading-[1.1]">
        {t("label")}
      </h1>
      <p className="mt-4 max-w-lg font-heading text-lg text-on-dark lg:mt-5 lg:text-xl">
        {t.rich("title", {
          em: (chunks) => <em className="text-accent-hover">{chunks}</em>,
        })}
      </p>
    </div>
  )
}
