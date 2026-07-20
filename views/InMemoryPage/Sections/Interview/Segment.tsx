import type { TributeSegment } from "@/types/inMemory"
import { QA } from "./QA"
import { Figure } from "./Figure"
import { Lead } from "./Lead"
import { Paragraph } from "./Paragraph"
import { Aside } from "./Aside"

export function Segment({
  segment,
  flip,
}: {
  segment: TributeSegment
  flip: boolean
}) {
  switch (segment.type) {
    case "lead":
      return <Lead text={segment.text} />
    case "qa":
      return <QA question={segment.question} answer={segment.answer} />
    case "para":
      return <Paragraph text={segment.text} />
    case "aside":
      return <Aside text={segment.text} />
    case "figure":
      return (
        <Figure
          image={segment.image}
          alt={segment.alt}
          quote={segment.quote}
          flip={flip}
        />
      )
  }
}
