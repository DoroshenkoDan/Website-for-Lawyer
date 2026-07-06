import { COLUMN } from "./column"

/** Opening biographical note that introduces the interview. */
export function Lead({ text }: { text: string }) {
  return (
    <p className={`${COLUMN} text-lg leading-[1.75] text-graphite/90`}>{text}</p>
  )
}
