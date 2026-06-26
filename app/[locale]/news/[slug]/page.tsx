import { setRequestLocale } from "next-intl/server";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/layout/Container";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Loc);

  // TODO: fetch the article via `getNewsBySlug(slug, locale)` from lib/api/news
  // once the backend endpoint is confirmed, then render its content + metadata.
  return (
    <>
      <PageIntro title={slug} />
      <Container className="py-16">
        <article className="max-w-3xl text-graphite/80" />
      </Container>
    </>
  );
}
