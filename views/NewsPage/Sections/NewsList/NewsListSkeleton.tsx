import { ArticleCardSkeleton } from "./ArticleCardSkeleton"

export function NewsListSkeleton() {
  return (
    <div className="flex flex-col gap-10" aria-hidden>
      {Array.from({ length: 3 }).map((_, index) => (
        <ArticleCardSkeleton key={index} />
      ))}
    </div>
  )
}
