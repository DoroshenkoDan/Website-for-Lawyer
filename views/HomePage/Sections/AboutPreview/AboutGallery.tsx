import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { aboutGallery } from "@/config/aboutGallery"
import { cn } from "@/lib/utils"

/**
 * Visibility + column-span class per gallery slot (A–E).
 * Mobile: only the main photo (C) is shown, full width.
 * Desktop: 3-col mosaic — A/E wide, B/D narrow, C full width.
 */
const SLOT_CLASS: Record<string, string> = {
  A: "hidden lg:flex lg:col-span-2",
  B: "hidden lg:flex lg:col-span-1",
  C: "flex col-span-1 lg:col-span-3",
  D: "hidden lg:flex lg:col-span-1",
  E: "hidden lg:flex lg:col-span-2",
}

export function AboutGallery({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid auto-rows-[196px] grid-cols-1 gap-3 lg:auto-rows-auto lg:grid-cols-3 lg:grid-rows-[133px_301px_133px]",
        className,
      )}
    >
      {aboutGallery.map((item) => (
        <li
          key={item.id}
          className={cn(
            "relative items-center justify-center overflow-hidden rounded-xl bg-metrics shadow-sm",
            SLOT_CLASS[item.id],
          )}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 682px, 100vw"
            />
          ) : (
            <ImageIcon className="size-7 text-graphite/25" aria-hidden />
          )}
        </li>
      ))}
    </ul>
  )
}
