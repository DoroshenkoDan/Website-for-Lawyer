import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-on-dark">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">
            {siteConfig.attorneyName}
          </p>
        </div>

        <nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-on-dark/60">
            {tFooter("navTitle")}
          </p>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-on-dark/80 transition-colors hover:text-accent"
                >
                  {tNav(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-on-dark/60">
            {tFooter("contactsTitle")}
          </p>
          <ul className="space-y-2 text-sm text-on-dark/80">
            {siteConfig.contacts.email && <li>{siteConfig.contacts.email}</li>}
            {siteConfig.contacts.phone && <li>{siteConfig.contacts.phone}</li>}
            {siteConfig.contacts.address && (
              <li>{siteConfig.contacts.address}</li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-on-dark/10">
        <Container className="py-4">
          <p className="text-xs text-on-dark/50">
            © {year} {siteConfig.attorneyName}. {tFooter("rights")}
          </p>
        </Container>
      </div>
    </footer>
  );
}
