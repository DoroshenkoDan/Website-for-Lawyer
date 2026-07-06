import { COLUMN } from "./column"

/** A question with its answer paragraphs, in the narrow reading column. */
export function QA({
  question,
  answer,
}: {
  question: string
  answer: string[]
}) {
  return (
    <div className={COLUMN}>
      <h3 className="flex gap-3 font-heading text-xl font-medium leading-snug text-graphite lg:text-2xl">
        <span aria-hidden className="text-sage-deep">
          —
        </span>
        <span>{question}</span>
      </h3>
      <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-graphite/80">
        {answer.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
