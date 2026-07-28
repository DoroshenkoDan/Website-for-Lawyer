"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export type ClauseRef = { id: string; number: number; title: string }

const ACTIVE_OFFSET = 130

function IndexLinks({
  items,
  active,
}: {
  items: ClauseRef[]
  active: string | null
}) {
  return (
    <ol className="flex flex-col">
      {items.map((item) => {
        const isActive = item.id === active
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex gap-2.5 border-l py-1.5 pl-3 text-[13px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isActive
                  ? "border-accent text-firefly"
                  : "border-graphite/10 text-graphite/55 hover:border-graphite/30 hover:text-graphite",
              )}
            >
              <span className="tabular-nums text-accent/70">{item.number}</span>
              <span>{item.title}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

export function ClauseIndex({
  items,
  title,
}: {
  items: ClauseRef[]
  title: string
}) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const ids = items.map((item) => item.id)
    if (ids.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      let current = ids[0]
      for (const id of ids) {
        const node = document.getElementById(id)
        if (!node) continue
        if (node.getBoundingClientRect().top > ACTIVE_OFFSET) break
        current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [items])

  return (
    <>
      <details className="group rounded-xl border border-graphite/10 bg-white/60 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-xs font-medium uppercase tracking-[0.14em] text-graphite/70 marker:content-none">
          {title}
          <span
            aria-hidden
            className="text-lg leading-none text-accent transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <nav aria-label={title} className="px-4 pb-4">
          <IndexLinks items={items} active={active} />
        </nav>
      </details>

      <nav
        aria-label={title}
        className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {title}
        </p>
        <IndexLinks items={items} active={active} />
      </nav>
    </>
  )
}
