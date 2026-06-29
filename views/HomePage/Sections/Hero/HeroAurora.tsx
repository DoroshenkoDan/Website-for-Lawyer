/**
 * Decorative aurora backdrop for the hero section. Static for now.
 *
 * Each glow is a standalone, heavily-blurred blob so motion can be added later
 * without touching layout: attach drift/pulse animation utilities (or keyframes)
 * to the individual `.aurora-blob` elements. The wrapper is full-bleed and sits
 * behind the hero content (`HeroAurora` first, content gets `relative z-10`).
 */
export function HeroAurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Teal — primary glow, bottom center (mirrors the Figma blob) */}
      <div className="aurora-blob absolute bottom-[-20%] left-1/2 h-175 w-[1300px] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]" />
      {/* Cool blue — top left */}
      <div className="aurora-blob absolute left-[-10%] top-[-15%] size-130 rounded-full bg-[#2f6e9e]/25 blur-[120px]" />
      {/* Green — mid right */}
      <div className="aurora-blob absolute right-[-8%] top-[18%] size-120 rounded-full bg-[#2f9e6e]/20 blur-[120px]" />
    </div>
  );
}
