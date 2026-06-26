import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="bg-hero text-on-dark">
      <Container className="py-24 md:py-32">
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-on-dark/70">{t("subtitle")}</p>
        <div className="mt-10">
          <Link href="/contacts" className={buttonVariants({ size: "lg" })}>
            {t("cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
