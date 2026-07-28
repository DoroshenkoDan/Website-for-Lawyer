import { useTranslations } from "next-intl"
import { Link as LinkIcon } from "lucide-react"
import { RichContent } from "@/components/RichContent"
import type { Block } from "@/types/practices"

export type Clause = {
  id: string
  number: number
  title: string
  body: Block[]
}

export function ClauseList({ clauses }: { clauses: Clause[] }) {
  const t = useTranslations("legal")

  return (
    <div className="flex flex-col">
      {clauses.map((clause) => (
        <section
          key={clause.id}
          id={clause.id}
          className="grid scroll-mt-28 grid-cols-[2rem_1fr] gap-x-4 border-t border-graphite/10 py-9 first:border-t-0 first:pt-0 sm:grid-cols-[2.75rem_1fr] lg:py-11"
        >
          <a
            href={`#${clause.id}`}
            aria-label={t("clauseLink", { number: clause.number })}
            className="group inline-flex h-7 items-center gap-1 font-heading text-lg leading-none tabular-nums text-accent transition-colors hover:text-firefly focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {clause.number}.
            <LinkIcon
              aria-hidden
              className="size-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </a>

          <div>
            <h2 className="font-heading text-xl font-medium leading-tight text-firefly lg:text-[1.5rem]">
              {clause.title}
            </h2>
            <RichContent blocks={clause.body} className="mt-5 max-w-2xl" />
          </div>
        </section>
      ))}
    </div>
  )
}
