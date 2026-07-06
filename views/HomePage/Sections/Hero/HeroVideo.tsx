"use client"

import { useEffect, useRef } from "react"

/** Background video */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => {
      if (media.matches) {
        video.pause()
      } else {
        void video.play().catch(() => {})
      }
    }

    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
      className="absolute inset-0 size-full object-cover"
    >
      <source src="/HomePage/reginaLawyer.webm" type="video/webm" />
      <source src="/HomePage/reginaLawyer.mp4" type="video/mp4" />
    </video>
  )
}
