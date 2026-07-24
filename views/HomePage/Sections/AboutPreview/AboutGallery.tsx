import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { aboutGallery } from "@/config/aboutGallery"
import { cn } from "@/lib/utils"

const SLOT_CLASS: Record<string, string> = {
  A: "hidden lg:flex lg:col-span-2",
  B: "hidden lg:flex lg:col-span-1",
  C: "flex col-span-1 lg:col-span-3",
  D: "hidden lg:flex lg:col-span-1",
  E: "hidden lg:flex lg:col-span-2",
}

const SLOT_POSITION: Record<string, string> = {
  A: "object-[center_20%]",
  B: "object-center",
  C: "object-[center_35%]",
  D: "object-center",
  E: "object-[center_35%]",
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
              className={cn("object-cover", SLOT_POSITION[item.id])}
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
