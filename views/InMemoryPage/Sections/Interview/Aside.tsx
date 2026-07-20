import { COLUMN } from "./column"

export function Aside({ text }: { text: string }) {
  return (
    <blockquote
      className={`${COLUMN} border-l-2 border-sage pl-6 font-heading text-xl italic leading-snug text-graphite lg:text-2xl`}
    >
      {text}
    </blockquote>
  )
}
