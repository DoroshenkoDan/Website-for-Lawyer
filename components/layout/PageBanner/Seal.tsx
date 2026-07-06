import type { SVGProps } from "react"

/** RG seal — rim + monogram */
export function Seal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
      {...props}
    >
      <defs>
        <style>{`
          .seal-text { font-family: var(--font-heading); font-weight: 500; font-size: 18px; letter-spacing: 0.15em; }
          .seal-monogram { font-family: var(--font-heading); font-weight: 600; font-size: 128px; letter-spacing: 0.02em; }
        `}</style>
        <path id="textCircle" d="M 200 30 A 170 170 0 1 1 199.99 30 Z" fill="none" />
      </defs>

      {/* Rim */}
      <circle cx="200" cy="200" r="195" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="200" cy="200" r="185" fill="none" stroke="currentColor" strokeWidth="1" />
      <text className="seal-text" fill="currentColor">
        <textPath href="#textCircle" startOffset="0" textLength={1068.142} lengthAdjust="spacing">
          REGINA GUSEINOVA &#183; ATTORNEY AT LAW &#183; UKRAINE &#183; REGINA GUSEINOVA &#183; ATTORNEY AT LAW &#183; UKRAINE &#183;
        </textPath>
      </text>
      <circle cx="200" cy="200" r="155" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Monogram */}
      <text
        className="seal-monogram"
        x="200"
        y="200"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="central"
      >
        RG
      </text>
    </svg>
  )
}
