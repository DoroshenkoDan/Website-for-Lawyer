import { setRequestLocale } from "next-intl/server";
import { PracticeArticle } from "@/views/PracticeArticle";

type Props = { params: Promise<{ locale: string; category: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Loc);
  // TODO: render category-specific content for electronic declarations
  // using the `category` param once sub-categories are defined.
  return <PracticeArticle id="electronic-declarations" />;
}
