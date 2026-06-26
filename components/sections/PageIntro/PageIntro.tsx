import { Container } from "@/components/layout/Container";

/** Dark intro band with page title + optional subtitle (used on inner pages). */
export function PageIntro({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-hero text-on-dark">
      <Container className="py-16 md:py-20">
        <h1 className="font-heading text-3xl font-semibold md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-on-dark/70">{subtitle}</p>
        ) : null}
      </Container>
    </section>
  );
}
