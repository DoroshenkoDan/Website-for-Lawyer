import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactsPage } from "@/views/ContactsPage";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Loc, namespace: "contacts" });
  return buildPageMetadata({
    locale,
    title: t("title"),
    description: t("subtitle"),
    path: "/contacts",
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Loc);
  return <ContactsPage />;
}
