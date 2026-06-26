import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/layout/Container";
import { practices } from "@/config/practices";

export function PracticesPage() {
  const t = useTranslations("practices");
  const ti = useTranslations("practices.items");

  return (
    <>
      <PageIntro title={t("title")} subtitle={t("subtitle")} />
      <Container className="py-16">
        <ul className="grid gap-4 sm:grid-cols-2">
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
      </Container>
    </>
  );
}
