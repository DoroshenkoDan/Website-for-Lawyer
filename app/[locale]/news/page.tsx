import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NewsPage } from "@/views/NewsPage";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Loc, namespace: "news" });
  return buildPageMetadata({
    locale,
    title: t("title"),
    description: t("subtitle"),
    path: "/news",
  });
}

export default async function Page({ params, searchParams }: Props) {
  const { locale } = await params;
  const { page } = await searchParams;
  setRequestLocale(locale as Loc);
  const currentPage = Math.max(1, Number(page) || 1);
  return <NewsPage page={currentPage} />;
}
