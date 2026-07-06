import Image from "next/image"

/**
 * A portrait breaking out of the reading column, paired with a pull-quote
 * drawn from the interview. `flip` swaps which side the portrait sits on so
 * the two figures on the page mirror each other.
 */
export function Figure({
  image,
  alt,
  quote,
  flip,
}: {
  image: string
  alt: string
  quote: string
  flip: boolean
}) {
  return (
    <figure className="mx-auto grid max-w-[60rem] overflow-hidden rounded-3xl border border-graphite/10 bg-white shadow-[0_30px_70px_-40px_rgba(35,43,44,0.5)] sm:grid-cols-2">
      <div
        className={`relative min-h-[320px] bg-metrics sm:min-h-[420px] ${
          flip ? "sm:order-2" : ""
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 640px) 30rem, 100vw"
          className="object-cover"
        />
      </div>
      <blockquote
        className={`flex items-center bg-sage/8 px-8 py-10 sm:px-10 ${
          flip ? "sm:order-1" : ""
        }`}
      >
        <p className="font-heading text-2xl font-medium leading-[1.2] tracking-tight text-graphite lg:text-[1.75rem]">
          <span aria-hidden className="mr-1 text-sage-deep">
            “
          </span>
          {quote}
        </p>
      </blockquote>
    </figure>
  )
}
