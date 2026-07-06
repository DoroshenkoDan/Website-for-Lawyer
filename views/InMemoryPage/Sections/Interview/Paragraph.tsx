import { COLUMN } from "./column"

/** A plain body paragraph continuing the previous answer. */
export function Paragraph({ text }: { text: string }) {
  return (
    <p className={`${COLUMN} text-[15px] leading-[1.75] text-graphite/80`}>
      {text}
    </p>
  )
}
