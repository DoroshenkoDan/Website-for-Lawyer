import Image from "next/image"
import { ArrowRight, ImageIcon } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

interface NewsCardProps {
  href: string
  category?: string
  date: string
  title: string
  excerpt: string
  image: string | null
  readLabel: string
  className?: string
}

export function NewsCard({
  href,
  category,
  date,
  title,
  excerpt,
  image,
  readLabel,
  className,
}: NewsCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-graphite/10 bg-white transition-colors hover:border-accent",
        className,
      )}
    >
      <div className="relative flex aspect-[2/1] items-center justify-center bg-metrics">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 410px, (min-width: 640px) 48vw, 85vw"
          />
        ) : (
          <ImageIcon className="size-8 text-graphite/25" aria-hidden />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex flex-wrap items-center gap-x-1.5 text-xs">
          {category && (
            <>
              <span className="font-medium text-accent">{category}</span>
              <span className="text-graphite/30" aria-hidden>
                ·
              </span>
            </>
          )}
          <span className="text-graphite/55">{date}</span>
        </div>

        <h3 className="font-heading text-lg font-medium leading-snug text-firefly">{title}</h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-graphite/70">{excerpt}</p>

        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-accent">
          {readLabel}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
