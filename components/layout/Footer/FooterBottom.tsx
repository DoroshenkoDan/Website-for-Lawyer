import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";

const legalLinks = [
  { href: "/terms", labelKey: "terms" },
  { href: "/privacy", labelKey: "privacy" },
] as const;

/** Bottom legal bar: copyright, legal links and the developer credit. */
export function FooterBottom() {
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-white/[0.08] bg-graphite-deep">
      {/*
        max-md:pb-20 reserves room at the very bottom for the fixed
        MobileContactBar (h-14 / 56px) so it never overlaps this bar on mobile.
      */}
      <Container className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 pb-5 pt-5.25 max-md:pb-20">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <p className="text-xs leading-[19.5px] text-muted">
            © {year} Адвокат Регіна Гусейнова. {tFooter("rights")}
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-xs leading-[19.5px] text-grey transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:translate-y-1 after:bg-white after:opacity-0 after:transition hover:after:translate-y-0 hover:after:opacity-100"
              >
                {tFooter(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs leading-[19.5px] text-muted">
          Design &amp; Development by Doroshenko.D
        </p>
      </Container>
    </div>
  );
}
