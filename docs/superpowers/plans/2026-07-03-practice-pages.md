# Practice Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the real content structure for all 8 practice pages (dark title band → light photo+text → CTA), plus a "Practical tips" longread (sticky TOC + scroll-spy) on the `electronic-declarations` page.

**Architecture:** One shared `PracticeArticle` composes per-practice sections. Short strings stay in next-intl messages; rich long-form content (practice body + 9 tips) lives in typed content modules under `content/`, localized `uk/en/pl`, rendered by a shared `RichContent` block renderer. Only `electronic-declarations` inserts the `PracticeTips` section.

**Tech Stack:** Next.js 16 (App Router, React 19, RSC), next-intl 4, Tailwind v4 (CSS-first `@theme` tokens), lucide-react, TypeScript.

## Global Constraints

- **This is a modified Next.js** (see `AGENTS.md`). Before writing component code, read: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`, `.../12-images.md`, and `node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md`. Heed deprecation notices.
- **Colors: palette tokens only** — from `app/globals.css` `@theme` (`accent`, `accent-hover`, `hero`, `graphite`, `graphite-deep`, `haze`, `metrics`, `on-dark`, `white`). No off-palette hex.
- **Icons: lucide-react** (already a dep). Brand socials use local SVGs — not relevant here.
- **Locales:** `uk` (default, served at `/`), `en` (`/en`), `pl` (`/pl`). Locale union is the global type `Loc`. Every message key added MUST exist in all three of `messages/uk.json`, `messages/en.json`, `messages/pl.json`.
- **Navigation:** use `Link` from `@/i18n/navigation` (not `next/link`).
- **No test runner exists** in this repo (scripts: `dev`, `build`, `lint` only) and UI is not unit-tested anywhere. Verification per task = `npx tsc --noEmit` (types) + `npm run lint` + `npm run build` (compiles RSC/client boundaries) + a browser smoke check on `npm run dev`. The one pure algorithm (`parseEmphasis`) is written as a standalone pure function so it stays trivially testable if a runner is added later.
- **Do NOT run `git commit`** — the repo owner commits. Each task's final "Commit" step gives the exact `git add` + message to propose; stage the files and surface the message, but the human runs the commit.
- Commit message style: no `Co-Authored-By` / self-attribution lines.

---

## File Structure

**Create:**
- `types/practices.ts` — `Localized<T>`, `Block` union, `PracticeContent`, `Tip`.
- `content/practices/index.ts` — practice content registry + `getPracticeContent(id)`.
- `content/practices/electronic-declarations.tips.ts` — `declarationTips: Tip[]` + `getDeclarationTips()` (scaffolded with sample tips).
- `components/RichContent/RichContent.tsx` — `parseEmphasis()` + `RichContent` block renderer.
- `components/RichContent/index.ts` — barrel.
- `views/PracticeArticle/PracticeHero.tsx` — dark title band + light photo|text body.
- `views/PracticeArticle/PracticeCta.tsx` — shared dark CTA band.
- `views/PracticeArticle/PracticeTips/PracticeTips.tsx` — tips longread (server).
- `views/PracticeArticle/PracticeTips/TipsToc.tsx` — sticky TOC + scroll-spy (client).
- `views/PracticeArticle/PracticeTips/index.ts` — barrel.

**Modify:**
- `views/PracticeArticle/PracticeArticle.tsx` — replace placeholder with the composition.
- `messages/uk.json`, `messages/en.json`, `messages/pl.json` — add `practices.article.cta.*` and `practices.tips.*`.

**Known non-goal (do NOT implement):** `app/[locale]/practices/electronic-declarations/[category]/page.tsx` still renders `<PracticeArticle id="electronic-declarations" />`, so a category URL will also show the tips section. Categories are undefined (existing TODO); leave as-is. Follow-up when categories are specified.

---

## Task 1: Content types + registry + tips scaffold

**Files:**
- Create: `types/practices.ts`
- Create: `content/practices/index.ts`
- Create: `content/practices/electronic-declarations.tips.ts`

**Interfaces:**
- Consumes: `PracticeId` from `@/config/practices`; global `Loc`.
- Produces:
  - `type Localized<T> = Record<Loc, T>`
  - `type Block = { type: "paragraph"; text: string } | { type: "subheading"; text: string } | { type: "list"; ordered?: boolean; items: string[] } | { type: "callout"; variant: "example" | "note"; text: string }`
  - `interface PracticeContent { image?: string; imageAlt?: Localized<string>; body?: Localized<Block[]> }`
  - `interface Tip { id: string; title: Localized<string>; body: Localized<Block[]> }`
  - `getPracticeContent(id: PracticeId): PracticeContent | undefined`
  - `getDeclarationTips(): Tip[]`

- [ ] **Step 1: Write the types module**

Create `types/practices.ts`:

```ts
import type { PracticeId } from "@/config/practices"

/** A value supplied in every supported locale (uk | en | pl). */
export type Localized<T> = Record<Loc, T>

/**
 * One block of rich body content. `text` fields may contain `**emphasis**`
 * markers, rendered in the accent color by RichContent.
 */
export type Block =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "example" | "note"; text: string }

/** Rich content for one practice page (hero photo + body beside it). */
export interface PracticeContent {
  /** Path under `public/` for the hero photo; omit to render a placeholder. */
  image?: string
  /** Localized alt text for the hero photo; falls back to the title. */
  imageAlt?: Localized<string>
  /** Localized rich body shown beside the hero photo. */
  body?: Localized<Block[]>
}

/** One practical tip on the electronic-declarations page. */
export interface Tip {
  /** Stable slug used as the anchor id, e.g. "who-must-file". */
  id: string
  title: Localized<string>
  body: Localized<Block[]>
}

/** Re-export so consumers can import the practice id union from one place. */
export type { PracticeId }
```

- [ ] **Step 2: Write the practice content registry**

Create `content/practices/index.ts`:

```ts
import type { PracticeId } from "@/config/practices"
import type { PracticeContent } from "@/types/practices"

/**
 * Rich content for practice pages. Add an entry per practice as real copy
 * arrives (uk provided by the client, en/pl translated). Pages fall back to
 * the localized `short` message + a placeholder photo when a practice has no
 * entry yet, so all 8 pages render before content is authored.
 */
const practiceContent: Partial<Record<PracticeId, PracticeContent>> = {}

export function getPracticeContent(
  id: PracticeId,
): PracticeContent | undefined {
  return practiceContent[id]
}
```

- [ ] **Step 3: Write the tips scaffold**

Create `content/practices/electronic-declarations.tips.ts` (two sample tips; replace/extend with the real 9 once provided):

```ts
import type { Tip } from "@/types/practices"

/**
 * Practical tips shown on the electronic-declarations practice page.
 * Scaffolded with sample entries that exercise every Block type. Extend to
 * the real 9 tips (uk from the client, en/pl translated) as they arrive.
 */
export const declarationTips: Tip[] = [
  {
    id: "who-must-file",
    title: {
      uk: "Хто зобов'язаний подавати декларацію",
      en: "Who is required to file a declaration",
      pl: "Kto jest zobowiązany do złożenia deklaracji",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Декларацію подають **суб'єкти декларування** — особи, уповноважені на виконання функцій держави або місцевого самоврядування.",
        },
        { type: "subheading", text: "Основні категорії" },
        {
          type: "list",
          items: [
            "Державні службовці всіх категорій",
            "Депутати місцевих рад",
            "Керівники державних та комунальних підприємств",
          ],
        },
        {
          type: "callout",
          variant: "example",
          text: "Приклад: новопризначений держслужбовець подає декларацію **перед призначенням** на посаду.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Declarations are filed by **declaration subjects** — persons authorized to perform functions of the state or local self-government.",
        },
        { type: "subheading", text: "Main categories" },
        {
          type: "list",
          items: [
            "Civil servants of all grades",
            "Local council deputies",
            "Heads of state and municipal enterprises",
          ],
        },
        {
          type: "callout",
          variant: "example",
          text: "Example: a newly appointed civil servant files a declaration **before appointment** to the post.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Deklaracje składają **podmioty deklarujące** — osoby upoważnione do pełnienia funkcji państwa lub samorządu terytorialnego.",
        },
        { type: "subheading", text: "Główne kategorie" },
        {
          type: "list",
          items: [
            "Urzędnicy państwowi wszystkich kategorii",
            "Radni rad lokalnych",
            "Kierownicy przedsiębiorstw państwowych i komunalnych",
          ],
        },
        {
          type: "callout",
          variant: "example",
          text: "Przykład: nowo powołany urzędnik składa deklarację **przed powołaniem** na stanowisko.",
        },
      ],
    },
  },
  {
    id: "filing-deadlines",
    title: {
      uk: "Строки подання",
      en: "Filing deadlines",
      pl: "Terminy składania",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Щорічна декларація подається до **1 квітня** року, наступного за звітним. Пропуск строку тягне відповідальність.",
        },
        {
          type: "callout",
          variant: "note",
          text: "Примітка: перевіряйте актуальні строки на офіційному порталі НАЗК перед поданням.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "The annual declaration is filed by **April 1** of the year following the reporting year. Missing the deadline carries liability.",
        },
        {
          type: "callout",
          variant: "note",
          text: "Note: check the current deadlines on the official NAZK portal before filing.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Deklarację roczną składa się do **1 kwietnia** roku następującego po roku sprawozdawczym. Przekroczenie terminu pociąga odpowiedzialność.",
        },
        {
          type: "callout",
          variant: "note",
          text: "Uwaga: przed złożeniem sprawdź aktualne terminy na oficjalnym portalu NAZK.",
        },
      ],
    },
  },
]

export function getDeclarationTips(): Tip[] {
  return declarationTips
}
```

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Lint**

Run: `npm run lint`
Expected: no errors for the new files.

- [ ] **Step 6: Commit**

```bash
git add types/practices.ts content/practices/
```
Propose message (human commits):
```
feat: add practice content model and e-declaration tips scaffold
```

---

## Task 2: RichContent block renderer

**Files:**
- Create: `components/RichContent/RichContent.tsx`
- Create: `components/RichContent/index.ts`

**Interfaces:**
- Consumes: `Block` from `@/types/practices`; `cn` from `@/lib/utils`.
- Produces:
  - `parseEmphasis(text: string): Array<{ text: string; emphasis: boolean }>`
  - `RichContent({ blocks, className }: { blocks: Block[]; className?: string }): JSX.Element`

- [ ] **Step 1: Write the renderer + inline parser**

Create `components/RichContent/RichContent.tsx`:

```tsx
import type { Block } from "@/types/practices"
import { cn } from "@/lib/utils"

/**
 * Split text into runs, marking `**…**` spans as emphasized. `String.split`
 * with a capture group interleaves captured groups at odd indices.
 * "a **b** c" -> [{a }, {b*}, { c}].
 */
export function parseEmphasis(
  text: string,
): Array<{ text: string; emphasis: boolean }> {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => ({ text: part, emphasis: i % 2 === 1 }))
    .filter((run) => run.text.length > 0)
}

/** Inline text with `**…**` rendered in the accent color (not bold). */
function Inline({ text }: { text: string }) {
  return (
    <>
      {parseEmphasis(text).map((run, i) =>
        run.emphasis ? (
          <span key={i} className="text-accent">
            {run.text}
          </span>
        ) : (
          <span key={i}>{run.text}</span>
        ),
      )}
    </>
  )
}

/**
 * Renders an array of rich content blocks. Shared by the practice hero body
 * and the practical tips. Subheadings render as <h4> (correct under an <h3>
 * tip title; acceptable under the hero <h1>).
 */
export function RichContent({
  blocks,
  className,
}: {
  blocks: Block[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "space-y-4 text-base leading-relaxed text-graphite/80",
        className,
      )}
    >
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i}>
                <Inline text={block.text} />
              </p>
            )
          case "subheading":
            return (
              <h4
                key={i}
                className="pt-2 font-heading text-lg font-medium text-graphite"
              >
                {block.text}
              </h4>
            )
          case "list": {
            const items = block.items.map((item, j) => (
              <li key={j}>
                <Inline text={item} />
              </li>
            ))
            return block.ordered ? (
              <ol key={i} className="list-decimal space-y-1.5 pl-5">
                {items}
              </ol>
            ) : (
              <ul key={i} className="list-disc space-y-1.5 pl-5">
                {items}
              </ul>
            )
          }
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-xl border border-accent/25 bg-accent/5 px-4 py-3 text-sm text-graphite/80"
              >
                <Inline text={block.text} />
              </aside>
            )
        }
      })}
    </div>
  )
}
```

- [ ] **Step 2: Write the barrel**

Create `components/RichContent/index.ts`:

```ts
export { RichContent, parseEmphasis } from "./RichContent"
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add components/RichContent/
```
Propose message:
```
feat: add RichContent block renderer with accent emphasis
```

---

## Task 3: PracticeHero + wire into PracticeArticle

**Files:**
- Create: `views/PracticeArticle/PracticeHero.tsx`
- Modify: `views/PracticeArticle/PracticeArticle.tsx`

**Interfaces:**
- Consumes: `getPracticeContent` (Task 1), `RichContent` (Task 2), `PracticeId` from `@/config/practices`, `Container`, `Link`, `useLocale`/`useTranslations`, `next/image`, `ImageIcon`.
- Produces: `PracticeHero({ id }: { id: PracticeId })`.

- [ ] **Step 1: Write PracticeHero**

Create `views/PracticeArticle/PracticeHero.tsx`. Pattern mirrors `views/AboutPage/Sections/Title/Title.tsx` (framed photo + `ImageIcon` placeholder) but splits into a dark title band and a light `bg-haze` body:

```tsx
import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { RichContent } from "@/components/RichContent"
import { getPracticeContent } from "@/content/practices"
import type { PracticeId } from "@/config/practices"

/**
 * Top of a practice page. A dark band carries the breadcrumb + H1 (on the
 * page's default dark background); below it a light `bg-haze` section lays out
 * the hero photo beside the practice body. Photo falls back to a placeholder,
 * body falls back to the localized `short` string, so pages render before
 * real content exists.
 */
export function PracticeHero({ id }: { id: PracticeId }) {
  const locale = useLocale() as Loc
  const t = useTranslations("practices.items")
  const tNav = useTranslations("nav")
  const content = getPracticeContent(id)
  const title = t(`${id}.title`)
  const bodyBlocks = content?.body?.[locale]
  const imageAlt = content?.imageAlt?.[locale] ?? title

  return (
    <>
      {/* Dark title band (page's default dark background) */}
      <section className="pt-24 lg:pt-28">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
              <li>
                <Link
                  href="/"
                  className="text-accent-hover transition-colors hover:text-white"
                >
                  {tNav("home")}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li>
                <Link
                  href="/practices"
                  className="text-accent-hover transition-colors hover:text-white"
                >
                  {tNav("practices")}
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li className="text-white/70">{title}</li>
            </ol>
          </nav>

          <h1 className="mt-4 max-w-4xl font-heading text-[2.5rem] font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>

          <div
            aria-hidden
            className="mt-6 h-px w-24 bg-linear-to-r from-accent-hover to-accent-hover/0"
          />
        </Container>
      </section>

      {/* Light photo | text body */}
      <section className="mt-10 bg-haze py-14 lg:mt-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-2xl border border-accent/40"
            />
            <figure className="relative rounded-2xl border border-graphite/10 bg-white p-2.5 shadow-[0_24px_60px_-28px_rgba(35,43,44,0.4)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-metrics">
                {content?.image ? (
                  <Image
                    src={content.image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 400px, 100vw"
                    priority
                  />
                ) : (
                  <div className="grid h-full place-items-center">
                    <ImageIcon className="size-8 text-graphite/25" aria-hidden />
                  </div>
                )}
              </div>
            </figure>
          </div>

          <div>
            {bodyBlocks ? (
              <RichContent blocks={bodyBlocks} />
            ) : (
              <p className="text-base leading-relaxed text-graphite/80">
                {t(`${id}.short`)}
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Wire PracticeHero into PracticeArticle**

Replace the entire contents of `views/PracticeArticle/PracticeArticle.tsx`:

```tsx
import { PracticeHero } from "./PracticeHero"
import type { PracticeId } from "@/config/practices"

/** A single practice page. All practices share this composition. */
export function PracticeArticle({ id }: { id: PracticeId }) {
  return (
    <>
      <PracticeHero id={id} />
    </>
  )
}
```

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: build succeeds (all 8 practice routes compile).

- [ ] **Step 5: Browser smoke check**

Run `npm run dev`, open `http://localhost:3000/practices/criminal-law` and `http://localhost:3000/practices/electronic-declarations`.
Confirm: breadcrumb (Home / Practices / title), H1 title on dark, then a light section with a framed photo placeholder (image icon) beside the `short` text. Check `/en/practices/criminal-law` renders English strings.

- [ ] **Step 6: Commit**

```bash
git add views/PracticeArticle/PracticeHero.tsx views/PracticeArticle/PracticeArticle.tsx
```
Propose message:
```
feat: build practice hero (dark title + light photo/text)
```

---

## Task 4: PracticeCta + messages + wire in

**Files:**
- Create: `views/PracticeArticle/PracticeCta.tsx`
- Modify: `messages/uk.json`, `messages/en.json`, `messages/pl.json`
- Modify: `views/PracticeArticle/PracticeArticle.tsx`

**Interfaces:**
- Consumes: `useTranslations("practices.article.cta")`, `siteConfig.contacts.email` from `@/config/site`, `buttonVariants`, `Container`, `Link`, `Mail` icon.
- Produces: `PracticeCta()`.

- [ ] **Step 1: Add CTA messages to all three locales**

In each `messages/<locale>.json`, inside the `"practices"` object, add an `"article"` key as a sibling of `"cta"` and `"items"`.

`messages/uk.json`:
```json
    "article": {
      "cta": {
        "title": "Потрібна консультація з цього питання?",
        "text": "Опишіть свою ситуацію — я оціню перспективи та запропоную конкретний план дій.",
        "button": "Записатися на консультацію"
      }
    },
```

`messages/en.json`:
```json
    "article": {
      "cta": {
        "title": "Need advice on this matter?",
        "text": "Describe your situation — I'll assess the prospects and propose a concrete plan of action.",
        "button": "Book a consultation"
      }
    },
```

`messages/pl.json`:
```json
    "article": {
      "cta": {
        "title": "Potrzebujesz porady w tej sprawie?",
        "text": "Opisz swoją sytuację — ocenię perspektywy i zaproponuję konkretny plan działania.",
        "button": "Umów konsultację"
      }
    },
```

- [ ] **Step 2: Write PracticeCta**

Create `views/PracticeArticle/PracticeCta.tsx` (dark centered band; distinct from the left-aligned card in `ContactCta`):

```tsx
import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/**
 * Closing CTA shared by every practice page. A full-width dark band, centered,
 * with an accent glow — the visual bookend to the dark title band up top.
 */
export function PracticeCta() {
  const t = useTranslations("practices.article.cta")
  const { email } = siteConfig.contacts

  return (
    <section className="bg-haze pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-hero to-graphite-deep px-6 py-12 text-center sm:px-10 lg:py-16">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
          />
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
            <h2 className="font-heading text-2xl font-medium leading-tight tracking-tight text-white lg:text-[1.75rem]">
              {t("title")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-dark">
              {t("text")}
            </p>
            <Link
              href="/contacts"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8")}
            >
              {t("button")}
            </Link>
            <a
              href={`mailto:${email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-on-dark transition-colors hover:text-accent-hover"
            >
              <Mail className="size-4 text-accent-hover" aria-hidden />
              {email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 3: Wire PracticeCta into PracticeArticle**

Replace `views/PracticeArticle/PracticeArticle.tsx`:

```tsx
import { PracticeHero } from "./PracticeHero"
import { PracticeCta } from "./PracticeCta"
import type { PracticeId } from "@/config/practices"

/** A single practice page. All practices share this composition. */
export function PracticeArticle({ id }: { id: PracticeId }) {
  return (
    <>
      <PracticeHero id={id} />
      <PracticeCta />
    </>
  )
}
```

- [ ] **Step 4: Typecheck + lint + build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: no errors; build succeeds.

- [ ] **Step 5: Browser smoke check**

On `npm run dev`, open `http://localhost:3000/practices/mediation`. Confirm the dark centered CTA band with accent glow, "Записатися на консультацію" button linking to `/contacts`, and the email link below. Verify `/en/...` and `/pl/...` show translated copy.

- [ ] **Step 6: Commit**

```bash
git add views/PracticeArticle/PracticeCta.tsx views/PracticeArticle/PracticeArticle.tsx messages/uk.json messages/en.json messages/pl.json
```
Propose message:
```
feat: add shared practice-page CTA band
```

---

## Task 5: PracticeTips longread (sticky TOC + scroll-spy)

**Files:**
- Create: `views/PracticeArticle/PracticeTips/PracticeTips.tsx`
- Create: `views/PracticeArticle/PracticeTips/TipsToc.tsx`
- Create: `views/PracticeArticle/PracticeTips/index.ts`
- Modify: `messages/uk.json`, `messages/en.json`, `messages/pl.json`
- Modify: `views/PracticeArticle/PracticeArticle.tsx`

**Interfaces:**
- Consumes: `getDeclarationTips` (Task 1), `RichContent` (Task 2), `Container`, `useLocale`/`useTranslations`, `cn`.
- Produces:
  - `PracticeTips()` (server component)
  - `TipsToc({ items, label, jumpLabel }: { items: { id: string; title: string }[]; label: string; jumpLabel: string })` (client component)

- [ ] **Step 1: Add tips messages to all three locales**

In each `messages/<locale>.json`, inside `"practices"`, add a `"tips"` key (sibling of `"article"`).

`messages/uk.json`:
```json
    "tips": {
      "title": "Практичні поради з електронного декларування",
      "toc": "Зміст",
      "jump": "Перейти до поради"
    },
```

`messages/en.json`:
```json
    "tips": {
      "title": "Practical tips on electronic declaration",
      "toc": "Contents",
      "jump": "Jump to a tip"
    },
```

`messages/pl.json`:
```json
    "tips": {
      "title": "Praktyczne porady dotyczące e-deklaracji",
      "toc": "Spis treści",
      "jump": "Przejdź do porady"
    },
```

- [ ] **Step 2: Write the client TOC (scroll-spy + mobile dropdown)**

Create `views/PracticeArticle/PracticeTips/TipsToc.tsx`:

```tsx
"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type TocItem = { id: string; title: string }

function format(index: number) {
  return String(index + 1).padStart(2, "0")
}

function scrollToTip(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

/**
 * Sticky table of contents for the tips longread. On desktop it renders a
 * sticky list whose active item (the tip currently in view) is highlighted via
 * IntersectionObserver. On mobile it collapses to a jump <select>.
 */
export function TipsToc({
  items,
  label,
  jumpLabel,
}: {
  items: TocItem[]
  label: string
  jumpLabel: string
}) {
  const [active, setActive] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  return (
    <>
      {/* Mobile: jump dropdown */}
      <div className="lg:hidden">
        <label htmlFor="tips-jump" className="sr-only">
          {jumpLabel}
        </label>
        <select
          id="tips-jump"
          value={active}
          onChange={(e) => {
            setActive(e.target.value)
            scrollToTip(e.target.value)
          }}
          className="w-full rounded-lg border border-graphite/20 bg-white px-4 py-3 text-sm text-graphite"
        >
          {items.map((item, i) => (
            <option key={item.id} value={item.id}>
              {format(i)}. {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: sticky TOC */}
      <nav aria-label={label} className="hidden lg:block">
        <div className="sticky top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-graphite/50">
            {label}
          </p>
          <ol className="mt-4 space-y-2.5">
            {items.map((item, i) => {
              const isActive = item.id === active
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(e) => {
                      e.preventDefault()
                      setActive(item.id)
                      scrollToTip(item.id)
                    }}
                    className={cn(
                      "flex gap-3 text-sm leading-snug transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-graphite/60 hover:text-graphite",
                    )}
                  >
                    <span className="tabular-nums">{format(i)}</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
```

- [ ] **Step 3: Write the tips section (server)**

Create `views/PracticeArticle/PracticeTips/PracticeTips.tsx`:

```tsx
import { useLocale, useTranslations } from "next-intl"
import { Container } from "@/components/layout/Container"
import { RichContent } from "@/components/RichContent"
import { getDeclarationTips } from "@/content/practices/electronic-declarations.tips"
import { TipsToc } from "./TipsToc"

function format(index: number) {
  return String(index + 1).padStart(2, "0")
}

/**
 * "Practical tips" longread — only on the electronic-declarations page.
 * All tips render server-side (indexable); the sticky TOC is the sole client
 * island. Each tip has a slug id anchor for deep-linking.
 */
export function PracticeTips() {
  const locale = useLocale() as Loc
  const t = useTranslations("practices.tips")
  const tips = getDeclarationTips()
  const tocItems = tips.map((tip) => ({ id: tip.id, title: tip.title[locale] }))

  return (
    <section className="bg-haze pb-16 lg:pb-24">
      <Container>
        <div className="border-t border-graphite/10 pt-14 lg:pt-20">
          <h2 className="max-w-3xl font-heading text-2xl font-medium tracking-tight text-graphite lg:text-3xl">
            {t("title")}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
            <TipsToc items={tocItems} label={t("toc")} jumpLabel={t("jump")} />

            <div className="space-y-14">
              {tips.map((tip, i) => (
                <article key={tip.id} id={tip.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-lg font-semibold tabular-nums text-accent">
                      {format(i)}
                    </span>
                    <h3 className="font-heading text-xl font-medium leading-snug text-graphite lg:text-2xl">
                      {tip.title[locale]}
                    </h3>
                  </div>
                  <RichContent blocks={tip.body[locale]} className="mt-4" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 4: Write the barrel**

Create `views/PracticeArticle/PracticeTips/index.ts`:

```ts
export { PracticeTips } from "./PracticeTips"
```

- [ ] **Step 5: Wire PracticeTips into PracticeArticle (guarded by id)**

Replace `views/PracticeArticle/PracticeArticle.tsx`:

```tsx
import { PracticeHero } from "./PracticeHero"
import { PracticeTips } from "./PracticeTips"
import { PracticeCta } from "./PracticeCta"
import type { PracticeId } from "@/config/practices"

/**
 * A single practice page. All practices share the hero + CTA; only
 * electronic-declarations adds the practical-tips longread.
 */
export function PracticeArticle({ id }: { id: PracticeId }) {
  return (
    <>
      <PracticeHero id={id} />
      {id === "electronic-declarations" && <PracticeTips />}
      <PracticeCta />
    </>
  )
}
```

- [ ] **Step 6: Typecheck + lint + build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: no errors; build succeeds (confirms the `"use client"` boundary in `TipsToc` compiles).

- [ ] **Step 7: Browser smoke check**

On `npm run dev`, open `http://localhost:3000/practices/electronic-declarations`:
- Between the photo/text section and the CTA, a "Practical tips" heading, a sticky TOC on the left (desktop), numbered tip sections 01/02 on the right with accent emphasis, subheadings, lists and callout boxes.
- Scroll down: the active TOC item follows the tip in view (accent color).
- Click a TOC item: smooth-scrolls to that tip.
- Narrow the window to mobile width: the TOC becomes a "jump" `<select>`; choosing an option scrolls to the tip.
- Open a non-special page (`/practices/civil-law`): NO tips section between text and CTA.

- [ ] **Step 8: Commit**

```bash
git add views/PracticeArticle/PracticeTips/ views/PracticeArticle/PracticeArticle.tsx messages/uk.json messages/en.json messages/pl.json
```
Propose message:
```
feat: add practical-tips longread with sticky TOC to e-declarations
```

---

## Self-Review Notes

- **Spec coverage:** dark-title/light-body hero (Task 3), photo per-practice with placeholder (Task 3), full body beside photo with `short` fallback (Task 3), rich content model + `**…**` accent emphasis (Tasks 1–2), tips longread with sticky TOC + scroll-spy + mobile jump + anchors + server-rendered content (Task 5), new shared dark CTA (Task 4), trilingual messages for new UI strings (Tasks 4–5), content in typed modules (Task 1). Covered.
- **Type consistency:** `getPracticeContent`/`getDeclarationTips`/`parseEmphasis`/`RichContent`/`PracticeHero`/`PracticeCta`/`PracticeTips`/`TipsToc` names/signatures match across producing and consuming tasks.
- **Deferred (real content):** actual practice bodies + photos, and the remaining 7 of 9 tips, are authored later (uk from the client → en/pl translated) by extending the content modules from Task 1; no code change needed.
