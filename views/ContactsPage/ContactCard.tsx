import { useTranslations } from "next-intl"
import { Mail, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { ContactForm } from "./ContactForm"

export function ContactCard() {
  const t = useTranslations("contacts")
  const { email, phone } = siteConfig.contacts

  return (
    <div className=" max-w-96 rounded-2xl border border-white/10 p-6 sm:p-8 bg-hero/40">
      <header className="border-b border-white/10 pb-5 text-center">
        <h2 className="font-heading text-2xl text-white">{t("card.title")}</h2>
      </header>

      {(phone || email) && (
        <address className="mt-5 flex flex-col gap-3 not-italic text-center">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 text-sm text-submarine transition-colors hover:text-accent self-center"
            >
              <Phone size={16} className="shrink-0 text-accent" />
              {phone}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm text-submarine transition-colors hover:text-accent self-center"
            >
              <Mail size={16} className="shrink-0 text-accent" />
              {email}
            </a>
          )}
        </address>
      )}

      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  )
}
