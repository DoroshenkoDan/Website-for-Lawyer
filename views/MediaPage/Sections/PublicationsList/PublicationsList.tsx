const styles = [
  "text-base leading-relaxed text-graphite/80",
  "[&_p]:border-b [&_p]:border-graphite/10 [&_p]:py-3 [&_p:first-child]:pt-0 [&_p:last-child]:border-b-0 [&_p:last-child]:pb-0",
  "[&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent-deep",
].join(" ")

export function PublicationsList({ html }: { html: string }) {
  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-graphite/10 bg-white p-6 sm:p-8">
      <div className={styles} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
