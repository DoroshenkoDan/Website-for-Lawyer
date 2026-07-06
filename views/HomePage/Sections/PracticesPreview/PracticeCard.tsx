import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { Link } from "@/i18n/navigation"

export interface PracticeCardProps {
  /** Display order, pre-formatted (e.g. "01"). */
  number: string
  /** Short practice name shown in the card header. */
  name: string
  /** Marketing hook headline (H3). */
  question: string
  /** One-line tagline under the headline. */
  tagline: string
  /** Supporting paragraph. */
  description: string
  /** Link to the practice page. */
  href: string
  /** Thumbnail path; `null` renders a placeholder. */
  image: string | null
  /** Localised "read more" link label. */
  readMoreLabel: string
}

/**
 * A single featured practice on the homepage. Stacks vertically on mobile and
 * lays out as `[thumbnail | headline | description]` columns from `lg` up.
 */
export function PracticeCard({
  number,
  name,
  question,
  tagline,
  description,
  href,
  image,
  readMoreLabel,
}: PracticeCardProps) {
  return (
    <article className="flex flex-col gap-6 overflow-hidden rounded-2xl bg-background px-5 py-5.5 lg:p-7">
      <div className="flex items-center gap-4 border-b border-white/10 pb-[21px]">
        <span className="font-sans text-lg font-semibold tracking-[-0.36px] text-accent">
          {number}
        </span>
        <span className="font-sans text-sm font-semibold tracking-[0.14px] text-on-dark">
          {name}
        </span>
      </div>

      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[200px_1fr_1fr] lg:items-start lg:gap-7">
        <div className="relative flex h-45 w-full items-center justify-center overflow-hidden rounded-[10px] border border-white/10 bg-accent-deep lg:h-40">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 200px, 100vw"
            />
          ) : (
            <ImageIcon className="size-8 text-white/30" aria-hidden />
          )}
        </div>

        <div>
          <h3 className="font-heading text-[1.375rem] leading-[1.2] text-white">
            {question}
          </h3>
          <p className="mt-3 text-[0.9375rem] font-semibold leading-[1.4] text-submarine">
            {tagline}
          </p>
          <div className="mt-4 h-px w-full bg-white/10" />
        </div>

        <div className="flex flex-col items-start gap-5">
          <p className="text-sm leading-[1.65] text-submarine">{description}</p>
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center rounded-lg bg-white px-[18px] py-2.5 text-[0.8125rem] font-medium text-graphite transition-colors hover:bg-white/90 lg:w-auto"
          >
            {readMoreLabel}
          </Link>
        </div>
      </div>
    </article>
  )
}
