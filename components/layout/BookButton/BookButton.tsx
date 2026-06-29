import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

/**
 * Floating "book a consultation" CTA — tablet/desktop only.
 * Counterpart to the mobile sticky contact bar (which is `md:hidden`),
 * so the two never appear together.
 */
export function BookButton() {
  const t = useTranslations("header");

  return (
    <Link
      href="/contacts"
      className="fixed bottom-6 right-5 z-40 hidden items-center gap-2 rounded-full bg-accent px-5.5 py-3.25 text-sm font-semibold text-white shadow-[0_6px_10px_rgba(15,42,49,0.25)] transition-colors hover:bg-accent-hover md:inline-flex"
    >
      {t("book")}
      <ArrowRight size={16} className="shrink-0" />
    </Link>
  );
}
