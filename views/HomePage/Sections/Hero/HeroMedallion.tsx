import { Seal } from "@/components/layout/PageBanner/Seal"

/**
 * Central medallion: the official RG seal slowly revolving around a circular
 * portrait slot, plus an accent dot orbiting the outer ring. The slot keeps the
 * old HeroMedia gradient as a placeholder — swap the inner circle's content for
 * an `<Image>` (later a `<video>`) once the portrait asset is ready; the
 * framing needs no layout change.
 */
export function HeroMedallion() {
  return (
    <div className="relative size-80 sm:size-96 xl:size-104">
      {/* Revolving seal */}
      <Seal
        aria-hidden
        className="absolute inset-0 h-full w-full animate-[spin_90s_linear_infinite] text-muted/60 motion-reduce:animate-none"
      />

      {/* Accent dot orbiting the outer ring */}
      <div
        aria-hidden
        className="absolute inset-0.5 animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
      >
        <div className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-accent-hover" />
      </div>

      {/* Portrait slot: accent rim, hero-coloured gap ring, then the photo */}
      <div className="absolute inset-[10%] rounded-full border border-accent/55 bg-hero p-1.5 shadow-[0_30px_60px_rgba(22,25,26,0.6)]">
        {/* Photo placeholder — the old hero-media gradient */}
        <div
          aria-hidden
          className="h-full w-full overflow-hidden rounded-full bg-linear-to-br from-accent-deep to-firefly"
        />
      </div>
    </div>
  )
}
