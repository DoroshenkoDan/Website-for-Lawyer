"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoEmbedProps {
  youtubeId: string
  title: string
  playLabel: string
  className?: string
}

export function VideoEmbed({ youtubeId, title, playLabel, className }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-xl bg-graphite", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- thumbnail facade, avoids next/image remote config */}
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <span
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-transparent"
            aria-hidden
          />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 transition-colors group-hover:bg-accent">
            <Play className="size-6 translate-x-0.5 fill-white text-white" aria-hidden />
          </span>
        </button>
      )}
    </div>
  )
}
