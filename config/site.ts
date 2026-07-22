export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  attorneyName: "Regina",
  contacts: {
    email: "r.guseinova.lawyer@gmail.com",
    phone: "",
  },
  social: {
    facebook: "",
    youtube: "",
    linkedin: "",
  },
  partners: [
    { name: "Національна колегія адвокатів", href: "" },
    { name: "Яр.ВАЛ", href: "" },
    { name: "Легітимус", href: "" },
    { name: "Національна асоціація медіаторів України", href: "" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
