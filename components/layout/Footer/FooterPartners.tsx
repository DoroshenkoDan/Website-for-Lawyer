import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { siteConfig } from "@/config/site";

/** Partner associations row, separated by middots. */
export function FooterPartners() {
  const tFooter = useTranslations("footer");

  return (
    <div className="flex flex-col gap-3.5 border-t border-white/10 pt-[29px]">
      <p className="text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.76px] text-sage-dim">
        {tFooter("partnersTitle")}
      </p>
      <p className="flex flex-wrap items-center text-sm leading-[21px] text-sage">
        {siteConfig.partners.map((partner, index) => (
          <Fragment key={partner.name}>
            {index > 0 && <span className="px-3 text-sage-deep">·</span>}
            {partner.href ? (
              <a
                href={partner.href}
                className="transition-colors hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {partner.name}
              </a>
            ) : (
              <span>{partner.name}</span>
            )}
          </Fragment>
        ))}
      </p>
    </div>
  );
}
