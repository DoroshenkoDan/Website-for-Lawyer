import type { NewsItem } from "@/types/news";

interface LocalizedCopy {
  title: string;
  excerpt: string;
  body?: string;
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
        body: "<p>Велика Палата Верховного Суду відступила від попередньої практики та роз'яснила, коли платник податків може одразу звертатися до суду, оминаючи адміністративне оскарження.</p><h2>Що змінилося</h2><p>Ключовий висновок: обов'язкова досудова процедура застосовується не до всіх категорій спорів. Суд навів перелік винятків, серед яких:</p><ul><li>оскарження рішень, прийнятих із порушенням строків;</li><li>випадки явної відсутності підстав для нарахування;</li><li>спори, де адміністративне оскарження вже вичерпане.</li></ul><p>Позиція має значення для планування стратегії захисту в податкових спорах.</p>",
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
        body: "<p>Цьогоріч суб'єктів декларування чекає кілька важливих змін у порядку заповнення та подання електронної декларації.</p><h2>Основні нововведення</h2><p>Розширено перелік обов'язкових полів, а також уточнено підстави для подання декларації про суттєві зміни майнового стану.</p><ol><li>Отримання доходу понад встановлений поріг.</li><li>Придбання майна.</li><li>Здійснення видатку на суму, що перевищує 50 прожиткових мінімумів.</li></ol><p>Радимо перевірити строки подання заздалегідь, аби уникнути відповідальності за несвоєчасне декларування.</p>",
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
        body: "<p>Законодавець посилив відповідальність за неврегульований конфлікт інтересів та розширив підстави для перевірок з боку НАЗК.</p><p>Керівникам варто переглянути внутрішні процедури врегулювання конфлікту інтересів і оновити відповідні положення.</p><blockquote>Своєчасне повідомлення про конфлікт інтересів залишається найнадійнішим способом уникнути відповідальності.</blockquote>",
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

function toNewsItem(article: MockArticle, locale: string): NewsItem {
  const copy = article.copy[locale] ?? article.copy.uk;
  return {
    id: article.id,
    slug: article.slug,
    title: copy.title,
    excerpt: copy.excerpt,
    body: copy.body,
    coverImage: article.coverImage ?? undefined,
    publishedAt: article.publishedAt,
  };
}

export function getMockNews(locale: string): NewsItem[] {
  return articles.map((article) => toNewsItem(article, locale));
}

export function getMockNewsBySlug(slug: string, locale: string): NewsItem | null {
  const article = articles.find((item) => item.slug === slug);
  return article ? toNewsItem(article, locale) : null;
}
