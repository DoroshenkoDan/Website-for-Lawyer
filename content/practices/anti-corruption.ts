import type { PracticeContent } from "@/types/practices"

/**
 * Anti-corruption practice body. Grouped services list: an intro paragraph
 * then five subheaded groups. Emphasis (`**…**`) is restrained — key bodies,
 * laws and registers only.
 */
export const antiCorruption: PracticeContent = {
  body: {
    uk: [
      {
        type: "paragraph",
        text: "Надання правової допомоги особам, що є суб'єктами, на яких поширюється дія **Закону України «Про запобігання корупції»**.",
      },
      {
        type: "subheading",
        text: "Взаємодія з правоохоронними та контролюючими органами",
      },
      {
        type: "list",
        items: [
          "Робота з запитами та листами від **НАЗК**, **поліції**, **НАБУ**.",
          "Моніторинг обставин та можливої активності НАЗК та інших структур щодо замовника.",
          "Правова допомога при проведенні **кримінально-процесуальних дій** НАБУ, поліцією та іншими правоохоронними органами.",
          "Послуги у сфері дій НАЗК щодо **фінансового контролю та моніторингу способу життя**.",
        ],
      },
      { type: "subheading", text: "Консультації та перевірки" },
      {
        type: "list",
        items: [
          "Консультації у суміжних з е-декларуванням галузях: **оподаткування**, валютне декларування та контроль тощо.",
          "Разові перевірки **майнового стану** за всіма видами відкритих та закритих реєстрів.",
        ],
      },
      { type: "subheading", text: "Електронне декларування" },
      {
        type: "list",
        items: [
          "Електронне декларування.",
          "Отримання **електронно-цифрових підписів** (за потреби).",
          "Оперативне отримання довідки про доходи в місцевій **ДФІ** в режимі online (за потреби).",
          "Аналіз декларацій за минулий період.",
          "Перевірка наданої замовником інформації для **повноти декларування**.",
        ],
      },
      { type: "subheading", text: "Робота з реєстрами" },
      {
        type: "list",
        items: [
          "**Реєстр речових прав** на нерухоме майно та пов'язані реєстри.",
          "**Єдиний державний реєстр МВС** (транспортні засоби).",
          "**Єдиний державний реєстр** (корпоративні права).",
          "**Земельний кадастр**.",
          "Інші відкриті та закриті джерела для повноти декларування.",
        ],
      },
      { type: "subheading", text: "Підготовка та подання декларації" },
      {
        type: "list",
        items: [
          "Обробка та систематизація наданих і додатково отриманих даних.",
          "Заповнення, подання та контроль прийняття декларації **НАЗК**.",
          "Супроводження **перевірки НАЗК** поданої декларації (за наявності).",
          "Супроводження внесення змін до декларації за потреби.",
          "Поточний моніторинг та оформлення змін у майновому стані згідно із **ЗУ «Про запобігання корупції»**, повідомлення НАЗК (за потреби).",
        ],
      },
    ],
    en: [
      {
        type: "paragraph",
        text: "Legal assistance for persons who are subjects of the **Law of Ukraine “On Prevention of Corruption”**.",
      },
      {
        type: "subheading",
        text: "Dealing with law enforcement and oversight bodies",
      },
      {
        type: "list",
        items: [
          "Handling requests and letters from the **NACP**, the **police**, and the **NABU**.",
          "Monitoring the circumstances and possible activity of the NACP and other bodies regarding the client.",
          "Legal assistance during **criminal-procedural actions** by the NABU, the police and other law enforcement agencies.",
          "Services related to NACP actions on **financial control and lifestyle monitoring**.",
        ],
      },
      { type: "subheading", text: "Consultations and checks" },
      {
        type: "list",
        items: [
          "Consultations in fields adjacent to e-declaration: **taxation**, currency declaration and control, and so on.",
          "One-off checks of **asset status** across all types of open and closed registers.",
        ],
      },
      { type: "subheading", text: "Electronic declaration" },
      {
        type: "list",
        items: [
          "Electronic declaration.",
          "Obtaining **digital signatures** (if required).",
          "Prompt online retrieval of an income certificate from the local **tax office** (if required).",
          "Analysis of declarations for the previous period.",
          "Verifying the information provided by the client to ensure **completeness of declaration**.",
        ],
      },
      { type: "subheading", text: "Working with registers" },
      {
        type: "list",
        items: [
          "The **Register of Property Rights** to immovable property and related registers.",
          "The **Unified State Register of the MIA** (vehicles).",
          "The **Unified State Register** (corporate rights).",
          "The **Land Cadastre**.",
          "Other open and closed sources to ensure completeness of declaration.",
        ],
      },
      { type: "subheading", text: "Preparing and filing the declaration" },
      {
        type: "list",
        items: [
          "Processing and systematizing the data provided and additionally obtained.",
          "Completing, filing and monitoring acceptance of the declaration by the **NACP**.",
          "Supporting the **NACP review** of the filed declaration (if any).",
          "Supporting amendments to the declaration where necessary.",
          "Ongoing monitoring and recording of changes in the client's asset status under the **Law “On Prevention of Corruption”**, notifying the NACP (where necessary).",
        ],
      },
    ],
    pl: [
      {
        type: "paragraph",
        text: "Pomoc prawna dla osób będących podmiotami objętymi **Ustawą Ukrainy „O zapobieganiu korupcji”**.",
      },
      {
        type: "subheading",
        text: "Współpraca z organami ścigania i kontroli",
      },
      {
        type: "list",
        items: [
          "Obsługa zapytań i pism od **NAZK**, **policji**, **NABU**.",
          "Monitorowanie okoliczności i możliwej aktywności NAZK oraz innych struktur wobec klienta.",
          "Pomoc prawna podczas **czynności karnoprocesowych** NABU, policji i innych organów ścigania.",
          "Usługi w zakresie działań NAZK dotyczących **kontroli finansowej i monitoringu stylu życia**.",
        ],
      },
      { type: "subheading", text: "Konsultacje i weryfikacje" },
      {
        type: "list",
        items: [
          "Konsultacje w dziedzinach powiązanych z e-deklaracją: **opodatkowanie**, deklarowanie i kontrola walutowa itp.",
          "Jednorazowe weryfikacje **stanu majątkowego** we wszystkich rodzajach otwartych i zamkniętych rejestrów.",
        ],
      },
      { type: "subheading", text: "Deklarowanie elektroniczne" },
      {
        type: "list",
        items: [
          "Deklarowanie elektroniczne.",
          "Uzyskanie **podpisu elektronicznego** (w razie potrzeby).",
          "Szybkie uzyskanie zaświadczenia o dochodach w lokalnym **urzędzie skarbowym** online (w razie potrzeby).",
          "Analiza deklaracji za poprzedni okres.",
          "Weryfikacja informacji przekazanych przez klienta w celu zapewnienia **kompletności deklaracji**.",
        ],
      },
      { type: "subheading", text: "Praca z rejestrami" },
      {
        type: "list",
        items: [
          "**Rejestr praw rzeczowych** do nieruchomości i powiązane rejestry.",
          "**Jednolity Rejestr Państwowy MSW** (pojazdy).",
          "**Jednolity Rejestr Państwowy** (prawa korporacyjne).",
          "**Kataster gruntów**.",
          "Inne otwarte i zamknięte źródła dla zapewnienia kompletności deklaracji.",
        ],
      },
      { type: "subheading", text: "Przygotowanie i złożenie deklaracji" },
      {
        type: "list",
        items: [
          "Przetwarzanie i systematyzacja danych przekazanych i dodatkowo uzyskanych.",
          "Wypełnienie, złożenie i kontrola przyjęcia deklaracji przez **NAZK**.",
          "Wsparcie podczas **kontroli NAZK** złożonej deklaracji (jeśli dotyczy).",
          "Wsparcie przy wprowadzaniu zmian do deklaracji w razie potrzeby.",
          "Bieżący monitoring i rejestrowanie zmian w stanie majątkowym zgodnie z **Ustawą „O zapobieganiu korupcji”**, powiadamianie NAZK (w razie potrzeby).",
        ],
      },
    ],
  },
}
