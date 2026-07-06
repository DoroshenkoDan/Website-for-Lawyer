import { useTranslations } from "next-intl"

/** Left hero column: the attorney's name as an eyebrow above the headline. */
export function HeroHeadline() {
  const t = useTranslations("home.hero")

  return (
    <div className="max-w-md text-center lg:max-w-none lg:text-left">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-grey">
        <span aria-hidden className="text-accent">
          —{" "}
        </span>
        {t("label")}
      </p>
      <h1 className="mt-4 font-heading text-2xl text-white lg:mt-5 lg:text-[2.75rem] lg:leading-[1.18]">
        {t.rich("title", {
          em: (chunks) => <em className="text-accent-hover">{chunks}</em>,
        })}
      </h1>
    </div>
  )
}
