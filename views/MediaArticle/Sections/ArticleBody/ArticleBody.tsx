import { Container } from "@/components/layout/Container"

const prose = [
  "article-prose mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-graphite/80",
  "[&_h2]:pt-2 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-firefly",
  "[&_h3]:pt-2 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-firefly",
  "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent-deep",
  "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5",
  "[&_blockquote]:border-l-2 [&_blockquote]:border-accent/40 [&_blockquote]:pl-4 [&_blockquote]:text-graphite/70",
  "[&_img]:inline [&_img]:max-w-full [&_img]:align-[-0.2em]",
  "[&_.wp-block-columns]:flex [&_.wp-block-columns]:flex-wrap [&_.wp-block-columns]:gap-3",
  "[&_.wp-block-column]:min-w-[12rem] [&_.wp-block-column]:flex-1",
  "[&_figure]:my-2 [&_figure_img]:block [&_figure_img]:w-full [&_figure_img]:h-auto [&_figure_img]:max-h-96 [&_figure_img]:rounded-lg [&_figure_img]:object-cover",
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
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-graphite/80">
            {fallback}
          </p>
        )}
      </Container>
    </section>
  )
}
