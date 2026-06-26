import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PracticeArticle } from "@/views/PracticeArticle";
import { buildPageMetadata } from "@/lib/seo";

const ID = "mediation" as const;
const PATH = "/practices/mediation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Loc, namespace: "practices.items" });
  return buildPageMetadata({ locale, title: t(`${ID}.title`), path: PATH });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Loc);
  return <PracticeArticle id={ID} />;
}
