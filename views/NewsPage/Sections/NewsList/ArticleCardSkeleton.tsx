/** Loading placeholder matching `ArticleCard`'s layout. Shown while news loads. */
export function ArticleCardSkeleton() {
  return (
    <div className="flex flex-col border-b border-accent pb-10" aria-hidden>
      <div className="aspect-16/10 w-full max-w-75 animate-pulse rounded-lg bg-graphite/5" />

      <div className="mt-5 flex flex-col gap-3">
        <div className="h-7 w-3/4 animate-pulse rounded bg-graphite/10" />
        <div className="mt-1 flex flex-col gap-2">
          <div className="h-4 w-full animate-pulse rounded bg-graphite/10" />
          <div className="h-4 w-full animate-pulse rounded bg-graphite/10" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-graphite/10" />
        </div>
      </div>

      <div className="mt-6 h-9 w-28 animate-pulse rounded-md bg-graphite/10" />
    </div>
  )
}
