import { COLUMN } from "./column"

export function Paragraph({ text }: { text: string }) {
  return (
    <p className={`${COLUMN} text-[15px] leading-[1.75] text-graphite/80`}>
      {text}
    </p>
  )
}
