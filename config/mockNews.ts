import type { NewsItem } from "@/types/news";

export const MOCK_NEWS_DELAY_MS = 3000;

interface LocalizedCopy {
  title: string;
  excerpt: string;
}

interface MockArticle {
  id: string;
  slug: string;
  publishedAt: string;
  coverImage: string | null;
  copy: Record<string, LocalizedCopy>;
}

const articles: MockArticle[] = [
  {
    id: "supreme-court-tax",
    slug: "supreme-court-tax-position",
    publishedAt: "2026-06-24",
    coverImage: null,
    copy: {
      uk: {
        title:
          "Верховний Суд оновив позицію щодо оскарження податкових повідомлень-рішень",
        excerpt:
          "Велика Палата роз'яснила, у яких випадках платник може оскаржити нарахування без попереднього адміністративного оскарження.",
      },
      en: {
        title:
          "Supreme Court updates its position on appealing tax assessment notices",
        excerpt:
          "The Grand Chamber clarified when a taxpayer may challenge an assessment without a prior administrative appeal.",
      },
      pl: {
        title:
          "Sąd Najwyższy zaktualizował stanowisko w sprawie zaskarżania decyzji podatkowych",
        excerpt:
          "Wielka Izba wyjaśniła, kiedy podatnik może zaskarżyć naliczenie bez uprzedniego odwołania administracyjnego.",
      },
    },
  },
  {
    id: "e-declaration-2026",
    slug: "e-declaration-2026-changes",
    publishedAt: "2026-06-11",
    coverImage: null,
    copy: {
      uk: {
        title: "Електронне декларування 2026: ключові зміни для посадовців",
        excerpt:
          "Оновлено перелік обов'язкових полів і строки подання — розбираємо, що врахувати цьогоріч.",
      },
      en: {
        title: "E-declaration 2026: key changes for public officials",
        excerpt:
          "The list of mandatory fields and filing deadlines has changed — here is what to account for this year.",
      },
      pl: {
        title: "E-deklaracja 2026: kluczowe zmiany dla urzędników",
        excerpt:
          "Zmieniono listę obowiązkowych pól i terminy składania — wyjaśniamy, co uwzględnić w tym roku.",
      },
    },
  },
  {
    id: "anti-corruption-amendments",
    slug: "anti-corruption-amendments",
    publishedAt: "2026-05-30",
    coverImage: null,
    copy: {
      uk: {
        title:
          "Антикорупційні новели: посилення відповідальності за конфлікт інтересів",
        excerpt:
          "Нові санкції та розширені підстави для перевірок НАЗК — на що звернути увагу керівникам.",
      },
      en: {
        title:
          "Anti-corruption amendments: stricter liability for conflicts of interest",
        excerpt:
          "New sanctions and broader grounds for NACP checks — what managers should watch for.",
      },
      pl: {
        title:
          "Nowelizacje antykorupcyjne: surowsza odpowiedzialność za konflikt interesów",
        excerpt:
          "Nowe sankcje i szersze podstawy kontroli — na co powinni zwrócić uwagę kierownicy.",
      },
    },
  },
  {
    id: "medical-law-compensation",
    slug: "medical-law-compensation",
    publishedAt: "2026-05-14",
    coverImage: null,
    copy: {
      uk: {
        title: "Медичне право: судова практика відшкодування шкоди пацієнтам",
        excerpt:
          "Аналізуємо свіжі рішення щодо доведення причинного зв'язку та розміру компенсації.",
      },
      en: {
        title: "Medical law: court practice on compensating patient harm",
        excerpt:
          "We analyze recent rulings on proving causation and the amount of compensation.",
      },
      pl: {
        title: "Prawo medyczne: praktyka sądowa w sprawie odszkodowań dla pacjentów",
        excerpt:
          "Analizujemy najnowsze orzeczenia dotyczące wykazania związku przyczynowego i wysokości odszkodowania.",
      },
    },
  },
  {
    id: "mediation-in-business",
    slug: "mediation-in-business",
    publishedAt: "2026-04-28",
    coverImage: null,
    copy: {
      uk: {
        title: "Медіація у бізнес-спорах: коли вона вигідніша за суд",
        excerpt:
          "Порівнюємо строки, витрати та збереження ділових відносин у медіації та судовому процесі.",
      },
      en: {
        title: "Mediation in business disputes: when it beats litigation",
        excerpt:
          "We compare timelines, costs, and preserving business relationships in mediation versus court.",
      },
      pl: {
        title: "Mediacja w sporach biznesowych: kiedy jest korzystniejsza niż sąd",
        excerpt:
          "Porównujemy terminy, koszty i zachowanie relacji biznesowych w mediacji i procesie sądowym.",
      },
    },
  },
  {
    id: "inheritance-disputes",
    slug: "inheritance-disputes",
    publishedAt: "2026-04-09",
    coverImage: null,
    copy: {
      uk: {
        title: "Спадкові спори: як захистити свої права у суді",
        excerpt:
          "Покрокові поради щодо строків прийняття спадщини та оскарження заповіту.",
      },
      en: {
        title: "Inheritance disputes: how to protect your rights in court",
        excerpt:
          "Step-by-step guidance on inheritance acceptance deadlines and contesting a will.",
      },
      pl: {
        title: "Spory spadkowe: jak chronić swoje prawa w sądzie",
        excerpt:
          "Praktyczne wskazówki dotyczące terminów przyjęcia spadku i zaskarżenia testamentu.",
      },
    },
  },
];

export function getMockNews(locale: string): NewsItem[] {
  return articles.map((article) => {
    const copy = article.copy[locale] ?? article.copy.uk;
    return {
      id: article.id,
      slug: article.slug,
      title: copy.title,
      excerpt: copy.excerpt,
      coverImage: article.coverImage ?? undefined,
      publishedAt: article.publishedAt,
    };
  });
}
