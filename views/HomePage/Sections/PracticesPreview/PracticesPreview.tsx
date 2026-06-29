import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { practices } from "@/config/practices"

export function PracticesPreview() {
  const t = useTranslations("home.practicesPreview")
  const ti = useTranslations("practices.items")

  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="font-heading text-3xl font-semibold text-graphite">
          {t("title")}
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => (
            <li key={p.id}>
              <Link
                href={p.href}
                className="block h-full rounded-lg border border-graphite/10 p-6 transition-colors hover:border-accent hover:bg-graphite/5"
              >
                <span className="font-heading text-lg font-medium text-graphite">
                  {ti(`${p.id}.title`)}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/practices"
            className={buttonVariants({ variant: "outline" })}
          >
            {t("viewAll")}
          </Link>
        </div>
      </Container>
    </section>
  )
}
