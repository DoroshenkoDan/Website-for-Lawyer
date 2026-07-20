import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { expertiseLectures } from "@/config/expertise"

export function LectureList() {
  const t = useTranslations("home.expertise.lectures")

  return (
    <div>
      <h3 className="font-heading text-lg font-medium text-firefly">{t("title")}</h3>
      <hr className="mt-4 border-graphite/10" />

      <ul className="mt-2">
        {expertiseLectures.map((lecture, index) => (
          <li key={lecture.id}>
            <a
              href={lecture.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center justify-between gap-4 py-3.5",
                index > 0 && "border-t border-graphite/5",
              )}
            >
              <span className="text-sm text-graphite transition-colors group-hover:text-accent">
                {t(lecture.id)}
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-graphite/30 transition-colors group-hover:text-accent"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
