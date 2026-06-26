import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AwardsPage } from "@/views/AwardsPage";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Loc, namespace: "about.awards" });
  return buildPageMetadata({
    locale,
    title: t("title"),
    path: "/about/awards",
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Loc);
  return <AwardsPage />;
}
