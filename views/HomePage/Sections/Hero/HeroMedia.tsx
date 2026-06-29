import { HeroQuote } from "./HeroQuote";

/**
 * Left hero column. Holds a placeholder for the portrait video — swap the inner
 * box for a `<video autoPlay muted loop playsInline poster=… />` once the asset
 * is ready; the wrapper keeps the final framing so no layout change is needed.
 */
export function HeroMedia() {
  return (
    <div className="relative h-120 overflow-hidden rounded-[14px] bg-linear-to-br from-accent-deep to-[#0f2a31] sm:h-140 xl:h-155">
      {/* Video placeholder */}
      <div
        aria-hidden
        className="absolute inset-0 grid place-items-center text-sm text-on-dark/30"
      >
        Video
      </div>
      <HeroQuote />
    </div>
  );
}
