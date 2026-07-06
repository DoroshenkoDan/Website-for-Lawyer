import { Seal } from "./Seal"
import { cn } from "@/lib/utils"

const rad = (deg: number) => (deg * Math.PI) / 180

/* Seal-style engraving geometry */
const SPOKES = Array.from({ length: 16 }, (_, i) => {
  const a = rad(i * 22.5)
  return {
    x1: 200 + 95 * Math.sin(a),
    y1: 200 - 95 * Math.cos(a),
    x2: 200 + 160 * Math.sin(a),
    y2: 200 - 160 * Math.cos(a),
  }
})

const TICKS = Array.from({ length: 16 }, (_, i) => {
  const a = rad(i * 22.5 + 11.25)
  return {
    x1: 200 + 105 * Math.sin(a),
    y1: 200 - 105 * Math.cos(a),
    x2: 200 + 150 * Math.sin(a),
    y2: 200 - 150 * Math.cos(a),
  }
})

const DOTS = Array.from({ length: 24 }, (_, i) => {
  const a = rad(i * 15)
  return {
    cx: 200 + 180 * Math.sin(a),
    cy: 200 - 180 * Math.cos(a),
  }
})

/** RG medallion */
export function Medallion({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-80", className)}>
      {/* Revolving seal */}
      <Seal
        aria-hidden
        className="absolute inset-0 h-full w-full animate-[spin_90s_linear_infinite] text-muted/60 motion-reduce:animate-none"
      />

      {/* Orbiting dot */}
      <div
        aria-hidden
        className="absolute inset-0.5 animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
      >
        <div className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-accent-hover" />
      </div>

      {/* Inner disc */}
      <div className="absolute inset-[10%] rounded-full border border-accent/55  p-1.5 shadow-[0_30px_60px_rgba(22,25,26,0.6)]">
        <div
          aria-hidden
          className="relative h-full w-full overflow-hidden rounded-full bg-background"
        >
          {/* Engraving + monogram */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full text-muted/50"
          >
            <g stroke="currentColor" strokeWidth="1">
              {SPOKES.map((s, i) => (
                <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} />
              ))}
            </g>
            <g stroke="currentColor" strokeWidth="0.5">
              {TICKS.map((s, i) => (
                <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} />
              ))}
            </g>
            <circle cx="200" cy="200" r="168" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <g fill="currentColor">
              {DOTS.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r="1.5" />
              ))}
            </g>
            <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text
              x="200"
              y="200"
              fill="white"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "72px",
                letterSpacing: "0.02em",
              }}
            >
              RG
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
