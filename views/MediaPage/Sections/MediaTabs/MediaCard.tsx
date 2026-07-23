import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { useFormatter } from "next-intl"
import { Link } from "@/i18n/navigation"
import type { MediaItem } from "@/types/media"

function CardInner({ item }: { item: MediaItem }) {
  const format = useFormatter()

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-metrics">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <span className="grid h-full place-items-center">
            <ImageIcon className="size-8 text-graphite/25" aria-hidden />
          </span>
        )}
      </div>

      <h3 className="mt-4 font-heading text-lg font-medium leading-snug text-graphite transition-colors group-hover:text-accent-deep">
        {item.title}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-graphite/55">
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
    </>
  )
}

export function MediaCard({ item }: { item: MediaItem }) {
  const cardClass =
    "group rounded-xl border border-graphite/10 bg-white p-4 transition-colors hover:border-accent"

  if (item.slug) {
    return (
      <li className={cardClass}>
        <Link href={`/media/${item.slug}`} className="block">
          <CardInner item={item} />
        </Link>
      </li>
    )
  }

  return (
    <li className={cardClass}>
      <a
        href={item.url ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardInner item={item} />
      </a>
    </li>
  )
}
