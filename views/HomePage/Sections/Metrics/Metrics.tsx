import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

export function Metrics() {
  const t = useTranslations("home.metrics");

  // Placeholder figures — replace with real numbers.
  const items = [
    { value: "10+", label: t("yearsLabel") },
    { value: "500+", label: t("casesLabel") },
    { value: "300+", label: t("clientsLabel") },
  ];

  return (
    <section className="bg-metrics text-graphite">
      <Container className="grid gap-8 py-16 sm:grid-cols-3">
        {items.map((m) => (
          <div key={m.label} className="text-center">
            <div className="font-heading text-4xl font-semibold text-accent">
              {m.value}
            </div>
            <div className="mt-2 text-sm">{m.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}
