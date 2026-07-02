import { useFormatter } from "next-intl"
import type { MediaItem } from "@/types/media"

/** A single media coverage card: title link with source and date. */
export function MediaCard({ item }: { item: MediaItem }) {
  const format = useFormatter()

  return (
    <li className="rounded-xl border border-graphite/10 bg-white p-6 transition-colors hover:border-accent">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <h3 className="font-heading text-lg font-medium leading-snug text-graphite">
          {item.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-graphite/55">
          {item.source && (
            <>
              <span>{item.source}</span>
              <span aria-hidden>·</span>
            </>
          )}
          <time dateTime={item.publishedAt}>
            {format.dateTime(new Date(item.publishedAt), {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </a>
    </li>
  )
}
