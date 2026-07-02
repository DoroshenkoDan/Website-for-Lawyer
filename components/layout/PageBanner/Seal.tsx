import type { SVGProps } from "react"

/**
 * Official RG seal as an inline SVG so its colour and opacity are controllable
 * from the parent: every stroke/fill uses `currentColor`, so a `text-*` utility
 * (plus opacity) tints the whole mark. Lora comes from the app's `next/font`
 * wiring via `--font-heading`, so no external font import lives in here.
 *
 * Sized via `className` width (e.g. `w-[560px]`); the viewBox keeps it square.
 * Decorative by default — pass `aria-hidden` when used as a watermark.
 */
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
          .seal-monogram { font-family: var(--font-heading); font-weight: 600; font-size: 44px; letter-spacing: 0.02em; }
        `}</style>
        <path id="textCircle" d="M 200 30 A 170 170 0 1 1 199.99 30 Z" fill="none" />
      </defs>

      <circle cx="200" cy="200" r="195" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="200" cy="200" r="185" fill="none" stroke="currentColor" strokeWidth="1" />
      <text className="seal-text" fill="currentColor">
        <textPath href="#textCircle" startOffset="0" textLength={1068.142} lengthAdjust="spacing">
          REGINA GUSEINOVA &#183; ATTORNEY AT LAW &#183; UKRAINE &#183; REGINA GUSEINOVA &#183; ATTORNEY AT LAW &#183; UKRAINE &#183;
        </textPath>
      </text>
      <circle cx="200" cy="200" r="155" fill="none" stroke="currentColor" strokeWidth="1" />
      <g>
        <circle cx="200.0" cy="55.0" r="1.5" fill="currentColor" />
        <circle cx="237.529" cy="59.941" r="1.5" fill="currentColor" />
        <circle cx="272.5" cy="74.426" r="1.5" fill="currentColor" />
        <circle cx="302.53" cy="97.47" r="1.5" fill="currentColor" />
        <circle cx="325.574" cy="127.5" r="1.5" fill="currentColor" />
        <circle cx="340.059" cy="162.471" r="1.5" fill="currentColor" />
        <circle cx="345.0" cy="200.0" r="1.5" fill="currentColor" />
        <circle cx="340.059" cy="237.529" r="1.5" fill="currentColor" />
        <circle cx="325.574" cy="272.5" r="1.5" fill="currentColor" />
        <circle cx="302.53" cy="302.53" r="1.5" fill="currentColor" />
        <circle cx="272.5" cy="325.574" r="1.5" fill="currentColor" />
        <circle cx="237.529" cy="340.059" r="1.5" fill="currentColor" />
        <circle cx="200.0" cy="345.0" r="1.5" fill="currentColor" />
        <circle cx="162.471" cy="340.059" r="1.5" fill="currentColor" />
        <circle cx="127.5" cy="325.574" r="1.5" fill="currentColor" />
        <circle cx="97.47" cy="302.53" r="1.5" fill="currentColor" />
        <circle cx="74.426" cy="272.5" r="1.5" fill="currentColor" />
        <circle cx="59.941" cy="237.529" r="1.5" fill="currentColor" />
        <circle cx="55.0" cy="200.0" r="1.5" fill="currentColor" />
        <circle cx="59.941" cy="162.471" r="1.5" fill="currentColor" />
        <circle cx="74.426" cy="127.5" r="1.5" fill="currentColor" />
        <circle cx="97.47" cy="97.47" r="1.5" fill="currentColor" />
        <circle cx="127.5" cy="74.426" r="1.5" fill="currentColor" />
        <circle cx="162.471" cy="59.941" r="1.5" fill="currentColor" />
      </g>
      <circle cx="200" cy="200" r="135" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <g>
        <line x1="200.0" y1="160.0" x2="200.0" y2="70.0" stroke="currentColor" strokeWidth="1" />
        <line x1="215.307" y1="163.045" x2="249.749" y2="79.896" stroke="currentColor" strokeWidth="1" />
        <line x1="228.284" y1="171.716" x2="291.924" y2="108.076" stroke="currentColor" strokeWidth="1" />
        <line x1="236.955" y1="184.693" x2="320.104" y2="150.251" stroke="currentColor" strokeWidth="1" />
        <line x1="240.0" y1="200.0" x2="330.0" y2="200.0" stroke="currentColor" strokeWidth="1" />
        <line x1="236.955" y1="215.307" x2="320.104" y2="249.749" stroke="currentColor" strokeWidth="1" />
        <line x1="228.284" y1="228.284" x2="291.924" y2="291.924" stroke="currentColor" strokeWidth="1" />
        <line x1="215.307" y1="236.955" x2="249.749" y2="320.104" stroke="currentColor" strokeWidth="1" />
        <line x1="200.0" y1="240.0" x2="200.0" y2="330.0" stroke="currentColor" strokeWidth="1" />
        <line x1="184.693" y1="236.955" x2="150.251" y2="320.104" stroke="currentColor" strokeWidth="1" />
        <line x1="171.716" y1="228.284" x2="108.076" y2="291.924" stroke="currentColor" strokeWidth="1" />
        <line x1="163.045" y1="215.307" x2="79.896" y2="249.749" stroke="currentColor" strokeWidth="1" />
        <line x1="160.0" y1="200.0" x2="70.0" y2="200.0" stroke="currentColor" strokeWidth="1" />
        <line x1="163.045" y1="184.693" x2="79.896" y2="150.251" stroke="currentColor" strokeWidth="1" />
        <line x1="171.716" y1="171.716" x2="108.076" y2="108.076" stroke="currentColor" strokeWidth="1" />
        <line x1="184.693" y1="163.045" x2="150.251" y2="79.896" stroke="currentColor" strokeWidth="1" />
      </g>
      <g>
        <line x1="211.705" y1="141.153" x2="223.411" y2="82.306" stroke="currentColor" strokeWidth="0.5" />
        <line x1="233.334" y1="150.112" x2="266.668" y2="100.224" stroke="currentColor" strokeWidth="0.5" />
        <line x1="249.888" y1="166.666" x2="299.776" y2="133.332" stroke="currentColor" strokeWidth="0.5" />
        <line x1="258.847" y1="188.295" x2="317.694" y2="176.589" stroke="currentColor" strokeWidth="0.5" />
        <line x1="258.847" y1="211.705" x2="317.694" y2="223.411" stroke="currentColor" strokeWidth="0.5" />
        <line x1="249.888" y1="233.334" x2="299.776" y2="266.668" stroke="currentColor" strokeWidth="0.5" />
        <line x1="233.334" y1="249.888" x2="266.668" y2="299.776" stroke="currentColor" strokeWidth="0.5" />
        <line x1="211.705" y1="258.847" x2="223.411" y2="317.694" stroke="currentColor" strokeWidth="0.5" />
        <line x1="188.295" y1="258.847" x2="176.589" y2="317.694" stroke="currentColor" strokeWidth="0.5" />
        <line x1="166.666" y1="249.888" x2="133.332" y2="299.776" stroke="currentColor" strokeWidth="0.5" />
        <line x1="150.112" y1="233.334" x2="100.224" y2="266.668" stroke="currentColor" strokeWidth="0.5" />
        <line x1="141.153" y1="211.705" x2="82.306" y2="223.411" stroke="currentColor" strokeWidth="0.5" />
        <line x1="141.153" y1="188.295" x2="82.306" y2="176.589" stroke="currentColor" strokeWidth="0.5" />
        <line x1="150.112" y1="166.666" x2="100.224" y2="133.332" stroke="currentColor" strokeWidth="0.5" />
        <line x1="166.666" y1="150.112" x2="133.332" y2="100.224" stroke="currentColor" strokeWidth="0.5" />
        <line x1="188.295" y1="141.153" x2="176.589" y2="82.306" stroke="currentColor" strokeWidth="0.5" />
      </g>
      <circle cx="200" cy="200" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
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
