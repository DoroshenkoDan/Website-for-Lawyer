import { cn } from "@/lib/utils"

/** Loading placeholder matching `NewsCard`'s layout. Shown while news loads. */
export function NewsCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-graphite/10 bg-white",
        className,
      )}
      aria-hidden
    >
      <div className="aspect-[2/1] animate-pulse bg-graphite/5" />

      <div className="flex flex-col gap-3 p-5">
        <div className="h-3 w-1/2 animate-pulse rounded bg-graphite/10" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-graphite/10" />
        <div className="mt-1 flex flex-col gap-2">
          <div className="h-3 w-full animate-pulse rounded bg-graphite/10" />
          <div className="h-3 w-full animate-pulse rounded bg-graphite/10" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-graphite/10" />
        </div>
        <div className="mt-2 h-3 w-16 animate-pulse rounded bg-graphite/10" />
      </div>
    </div>
  )
}
