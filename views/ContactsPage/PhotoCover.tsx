import Image from "next/image"

const PORTRAIT = "/law.avif"

export function PhotoCover() {
	return (
		<div aria-hidden className="absolute inset-0">
			<Image
				src={PORTRAIT}
				alt=""
				fill
				sizes="(min-width: 1024px) 1100px, 100vw"
				className="hidden object-cover object-left lg:block"
			/>

			<div className="absolute inset-0 hidden bg-linear-to-l from-hero via-hero/50 to-transparent lg:block" />
		</div>
	)
}
