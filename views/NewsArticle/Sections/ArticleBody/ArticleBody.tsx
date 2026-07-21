import { Container } from "@/components/layout/Container"

const prose = [
  "article-prose mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-graphite/80",
  "[&_h2]:pt-2 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-firefly",
  "[&_h3]:pt-2 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-firefly",
  "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent-deep",
  "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5",
  "[&_blockquote]:border-l-2 [&_blockquote]:border-accent/40 [&_blockquote]:pl-4 [&_blockquote]:text-graphite/70",
  "[&_figure]:my-2 [&_img]:mx-auto [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg",
].join(" ")

export function ArticleBody({
  html,
  fallback,
}: {
  html?: string
  fallback: string
}) {
  return (
    <section className="mt-4 bg-haze py-4 lg:mt-8 lg:py-8">
      <Container className='bg-white p-8'>
        {html ? (
          <div className={prose} dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-graphite/80">
            {fallback}
          </p>
        )}
      </Container>
    </section>
  )
}
