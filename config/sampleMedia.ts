import type { MediaItem } from "@/types/media";

/**
 * Temporary sample media, shown ONLY in development until the backend serves
 * categorized items (see MediaPage). Safe to delete once `/media` returns real
 * data. Titles are Ukrainian placeholders for previewing the layout.
 */
export const sampleMedia: MediaItem[] = [
  {
    id: "tv-1",
    category: "tv",
    title: "Коментар для телеканалу — новели антикорупційного законодавства",
    source: "Телеканал «Україна»",
    url: "#",
    publishedAt: "2024-03-12",
  },
  {
    id: "tv-2",
    category: "tv",
    title: "Ефір: електронне декларування для держслужбовців категорії А",
    source: "UA:Перший",
    url: "#",
    publishedAt: "2023-11-05",
  },
  {
    id: "radio-1",
    category: "radio",
    title: "Радіоінтерв'ю: типові помилки у деклараціях",
    source: "Радіо НВ",
    url: "#",
    publishedAt: "2024-01-20",
  },
  {
    id: "radio-2",
    category: "radio",
    title: "Про доступ до публічної інформації",
    source: "Громадське радіо",
    url: "#",
    publishedAt: "2023-09-14",
  },
  {
    id: "print-1",
    category: "print",
    title: "Колонка: практика повних перевірок електронних декларацій",
    source: "Юридична газета",
    url: "#",
    publishedAt: "2024-02-08",
  },
  {
    id: "print-2",
    category: "print",
    title: "Захист персональних даних у роботі адвоката",
    source: "Закон і Бізнес",
    url: "#",
    publishedAt: "2023-12-01",
  },
  {
    id: "seminars-1",
    category: "seminars",
    title: "Авторський семінар для суб'єктів декларування",
    source: "Академія Адвокатури України",
    url: "#",
    publishedAt: "2024-04-18",
  },
  {
    id: "seminars-2",
    category: "seminars",
    title: "Медіація у публічно-правових спорах",
    source: "НААУ",
    url: "#",
    publishedAt: "2023-10-22",
  },
];
