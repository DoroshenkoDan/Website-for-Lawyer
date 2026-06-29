import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AboutGallery } from "./AboutGallery"

export function AboutPreview() {
  const t = useTranslations("home.aboutPreview")
  const credentials = t.raw("credentials") as string[]

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[558fr_682fr] lg:gap-10">
          <div className="flex flex-col">
            <Badge variant="outline" className="self-start border-accent text-accent">
              {t("badge")}
            </Badge>

            <h2 className="mt-6 max-w-lg font-heading text-[1.75rem] font-semibold leading-tight text-graphite lg:text-[2rem]">
              {t("title")}
            </h2>

            <p className="mt-5 text-[15px] leading-[1.65] text-graphite/90">
              {t("lead")}
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-graphite/55">
              {t("secondary")}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 size-1.75 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-[15px] leading-snug text-graphite/90">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8 w-full text-white lg:w-auto lg:self-start")}
            >
              {t("cta")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <AboutGallery className="order-first lg:order-0" />
        </div>
      </Container>
    </section>
  )
}
