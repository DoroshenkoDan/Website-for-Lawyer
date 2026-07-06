import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

export interface PracticeCardProps {
  /** Display order, pre-formatted (e.g. "01"). */
  number: string
  /** Practice name shown as the card heading. */
  title: string
  /** Short supporting description. */
  description: string
  /** Link to the practice page. */
  href: string
  /** Localised "read more" link label. */
  readMoreLabel: string
}

/** A single practice on the practices page: a numbered dark card linking to its page. */
export function PracticeCard({
  number,
  title,
  description,
  href,
  readMoreLabel,
}: PracticeCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-background p-7 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] sm:p-9"
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
        {number}
      </span>

      <h3 className="mt-5 font-heading text-[1.25rem] font-medium leading-[1.3] tracking-tight text-white">
        {title}
      </h3>

      <div aria-hidden className="mt-4 h-px w-8 bg-white/15" />

      <p className="mt-4 text-sm leading-relaxed text-submarine">{description}</p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium tracking-wide text-accent transition-colors group-hover:text-accent-hover">
        {readMoreLabel}
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  )
}
