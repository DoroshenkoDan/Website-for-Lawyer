# Regina Guseinova, Attorney Website

Live site: [rglawyer.com.ua](https://rglawyer.com.ua)

This is the site I built for Regina Guseinova, a practicing attorney in Kyiv focused on anti-corruption, administrative, medical, civil and criminal law, mediation, and support with electronic asset declarations.

The project started as a full migration off an aging WordPress setup. WordPress is still around, but only as a headless CMS that feeds the news and media sections. Everything a visitor actually sees now runs on Next.js: practice pages, the about section, and legal pages are statically generated, news and media pull live from the WordPress REST API, and the whole site is available in Ukrainian, English, and Polish.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- next-intl for the three locales
- Zod and React Hook Form for the contact form
- Nodemailer for sending contact submissions
- A headless WordPress instance as the CMS for news and media

## What's in here

- Full internationalization with locale-aware routing, hreflang tags, and a generated sitemap
- Permanent redirects mapped from every old WordPress URL so nothing that used to rank in Google breaks after the move
- Structured data (JSON-LD) for the attorney profile
- Branded 404 and error pages instead of the framework defaults
- A contact form wired to a real mailbox through SMTP

## Running locally

```bash
yarn install
yarn dev
```

Copy `.env.example` to `.env` and fill in the values first. The site needs `API_BASE_URL` to talk to the WordPress backend, and SMTP credentials for the contact form to actually send mail.

```bash
yarn build
yarn test
```
