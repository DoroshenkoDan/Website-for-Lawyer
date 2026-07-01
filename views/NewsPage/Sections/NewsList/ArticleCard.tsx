import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
  href: string
  title: string
  excerpt: string
  image: string | null
  readLabel: string
}

/**
 * News-page article entry: a small cover top-left, then the title, excerpt and
 * a "read article" button spanning the full container width, divided from the
 * next by a bottom border. Rendered one-per-row in a single column.
 */
export function ArticleCard({
  href,
  title,
  excerpt,
  image,
  readLabel,
}: ArticleCardProps) {
  return (
    <article className="group flex flex-col border-b border-accent pb-10">
      <Link href={href} className="flex flex-col gap-5">
        <div className="relative aspect-16/10 w-full max-w-75 overflow-hidden rounded-lg bg-metrics">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="300px"
            />
          ) : (
            <div className="grid h-full place-items-center">
              <ImageIcon className="size-8 text-graphite/25" aria-hidden />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-2xl font-medium leading-snug text-firefly transition-colors group-hover:text-accent-deep">
            {title}
          </h3>
          <p className="line-clamp-3 text-base leading-relaxed text-graphite/70">
            {excerpt}
          </p>
        </div>
      </Link>

      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "mt-6 w-fit px-5",
        )}
      >
        {readLabel}
      </Link>
    </article>
  )
}
