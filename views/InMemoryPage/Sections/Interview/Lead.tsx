import { COLUMN } from "./column"

export function Lead({ text }: { text: string }) {
  return (
    <p className={`${COLUMN} text-lg leading-[1.75] text-graphite/90`}>{text}</p>
  )
}
