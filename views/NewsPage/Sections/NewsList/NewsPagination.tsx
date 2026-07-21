import { ChevronLeft, ChevronRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

function hrefFor(page: number) {
  return page <= 1 ? "/news" : `/news?page=${page}`
}

function pageList(current: number, total: number): (number | "ellipsis")[] {
  const out: (number | "ellipsis")[] = []
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || (p >= current - 1 && p <= current + 1)) {
      out.push(p)
    } else if (out[out.length - 1] !== "ellipsis") {
      out.push("ellipsis")
    }
  }
  return out
}

const itemBase =
  "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm transition-colors"

export async function NewsPagination({
  page,
  totalPages,
}: {
  page: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const t = await getTranslations("news")
  const pages = pageList(page, totalPages)

  return (
    <nav
      className="mt-12 flex items-center justify-center gap-1.5"
      aria-label={t("pagination")}
    >
      {page > 1 ? (
        <Link
          href={hrefFor(page - 1)}
          aria-label={t("prevPage")}
          rel="prev"
          className={cn(itemBase, "border border-graphite/15 hover:border-accent")}
        >
          <ChevronLeft className="size-4" aria-hidden />
        </Link>
      ) : (
        <span className={cn(itemBase, "border border-graphite/10 text-graphite/25")} aria-hidden>
          <ChevronLeft className="size-4" />
        </span>
      )}

      {pages.map((p, index) =>
        p === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className={cn(itemBase, "text-graphite/40")} aria-hidden>
            …
          </span>
        ) : p === page ? (
          <span
            key={p}
            aria-current="page"
            className={cn(itemBase, "border border-accent bg-background/10  text-accent-deep")}
          >
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={hrefFor(p)}
            className={cn(itemBase, "border border-graphite/15 text-graphite/70 hover:border-accent")}
          >
            {p}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link
          href={hrefFor(page + 1)}
          aria-label={t("nextPage")}
          rel="next"
          className={cn(itemBase, "border border-graphite/15 hover:border-accent")}
        >
          <ChevronRight className="size-4" aria-hidden />
        </Link>
      ) : (
        <span className={cn(itemBase, "border border-graphite/10 text-graphite/25")} aria-hidden>
          <ChevronRight className="size-4" />
        </span>
      )}
    </nav>
  )
}
