import { useTranslations } from "next-intl"
import { Mail } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { mainNav } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "./social-icons"
import { Seal } from "@/components/layout/PageBanner/Seal"

const socialLinks = [
  { Icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { Icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { Icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
] as const

/** Brand, navigation and contacts — the main three-column footer block. */
export function FooterTop() {
  const tNav = useTranslations("nav")
  const tFooter = useTranslations("footer")

  return (
    <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      {/* Brand */}
      <div className="flex flex-col gap-3.25">
        <Link
          href="/"
          className="flex items-center gap-2.25 font-heading text-base font-semibold text-white"
        >
          <Seal aria-hidden className="size-9 shrink-0 text-accent" />
          <span className="font-heading text-sm leading-tight tracking-[0.02em] text-metrics">
            Regina Guseinova
          </span>
        </Link>
        <p className="max-w-70 text-sm leading-[1.6] text-grey">
          {tFooter("tagline")}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3.5">
        <p className="text-sm font-semibold leading-5.25 text-white">
          {tFooter("navTitle")}
        </p>
        <ul className="flex flex-col gap-2.5">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm leading-5.25 text-grey transition-colors hover:text-accent"
              >
                {tNav(item.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contacts */}
      <div className="flex flex-col gap-3.5">
        <p className="text-sm font-semibold leading-5.25 text-white">
          {tFooter("contactsTitle")}
        </p>
        {siteConfig.contacts.email && (
          <a
            href={`mailto:${siteConfig.contacts.email}`}
            className="flex items-center gap-2 text-sm leading-5.25 text-grey transition-colors hover:text-accent"
          >
            <Mail size={14} className="shrink-0 text-grey" />
            {siteConfig.contacts.email}
          </a>
        )}
        <div className="flex items-center gap-4 pt-1">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href || "#"}
              aria-label={label}
              className="text-grey transition-colors hover:text-accent"
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
