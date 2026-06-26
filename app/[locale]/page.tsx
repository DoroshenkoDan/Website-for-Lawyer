import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HomePage } from "@/views/HomePage";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Loc, namespace: "metadata" });
  return buildPageMetadata({ locale, description: t("description"), path: "" });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Loc);
  return <HomePage />;
}
