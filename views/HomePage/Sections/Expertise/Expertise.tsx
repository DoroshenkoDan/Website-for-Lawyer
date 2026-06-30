import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LectureList } from "./LectureList"
import { MediaComments } from "./MediaComments"

export function Expertise() {
  const t = useTranslations("home.expertise")

  const viewAllLink = (className?: string) => (
    <Link
      href="/media"
      className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "gap-2", className)}
    >
      {t("viewAll")}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  )

  return (
    <section className="bg-white py-20">
      <Container>
        <header className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="font-heading text-[1.75rem] font-semibold text-firefly lg:text-[2rem]">
              {t("title")}
            </h2>
          </div>
          {viewAllLink("hidden sm:inline-flex")}
        </header>

        <hr className="mt-7 border-graphite/10" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <LectureList />
          <MediaComments />
        </div>

        {viewAllLink("mt-8 flex w-full sm:hidden")}
      </Container>
    </section>
  )
}
