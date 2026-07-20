import type { Block } from "@/types/practices"
import { cn } from "@/lib/utils"

export function parseEmphasis(
  text: string,
): Array<{ text: string; emphasis: boolean }> {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => ({ text: part, emphasis: i % 2 === 1 }))
    .filter((run) => run.text.length > 0)
}

function Inline({ text }: { text: string }) {
  return (
    <>
      {parseEmphasis(text).map((run, i) =>
        run.emphasis ? (
          <span key={i} className="text-accent">
            {run.text}
          </span>
        ) : (
          <span key={i}>{run.text}</span>
        ),
      )}
    </>
  )
}

export function RichContent({
  blocks,
  className,
}: {
  blocks: Block[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "space-y-4 text-base leading-relaxed text-graphite/80",
        className,
      )}
    >
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i}>
                <Inline text={block.text} />
              </p>
            )
          case "subheading":
            return (
              <h4
                key={i}
                className="pt-2 font-heading text-lg font-medium text-graphite"
              >
                {block.text}
              </h4>
            )
          case "list": {
            const items = block.items.map((item, j) => (
              <li key={j}>
                <Inline text={item} />
              </li>
            ))
            return block.ordered ? (
              <ol key={i} className="list-decimal space-y-1.5 pl-5">
                {items}
              </ol>
            ) : (
              <ul key={i} className="list-disc space-y-1.5 pl-5">
                {items}
              </ul>
            )
          }
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-xl border border-accent/25 bg-accent/5 px-4 py-3 text-sm text-graphite/80"
              >
                <Inline text={block.text} />
              </aside>
            )
        }
      })}
    </div>
  )
}
