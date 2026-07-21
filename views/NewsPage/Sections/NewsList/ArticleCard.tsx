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

export function ArticleCard({
  href,
  title,
  excerpt,
  image,
  readLabel,
}: ArticleCardProps) {
  return (
    <article className="group flex flex-col gap-5 border-b border-accent pb-10 lg:flex-row">
      <Link
        href={href}
        aria-label={title}
        className="relative block aspect-square w-full shrink-0 overflow-hidden rounded-lg bg-metrics lg:w-80"
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 320px, 100vw"
          />
        ) : (
          <span className="grid h-full place-items-center">
            <ImageIcon className="size-8 text-graphite/25" aria-hidden />
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3">
        <Link href={href}>
          <h3 className="font-heading text-2xl font-medium leading-snug text-firefly transition-colors group-hover:text-accent-deep">
            {title}
          </h3>
        </Link>
        <p className="line-clamp-3 text-base leading-relaxed text-graphite/70">
          {excerpt}
        </p>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "mt-6 w-fit self-end px-5",
          )}
        >
          {readLabel}
        </Link>
      </div>
    </article>
  )
}
