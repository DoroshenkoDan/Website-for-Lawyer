import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { mainNav } from "@/config/navigation";
import { Container } from "@/components/layout/Container";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-header text-on-dark">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-heading text-lg font-semibold tracking-wide">
          Regina
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-on-dark/80 transition-colors hover:text-accent"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher />
      </Container>
    </header>
  );
}
