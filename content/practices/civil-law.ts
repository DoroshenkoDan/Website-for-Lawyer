import type { PracticeContent } from "@/types/practices"

/**
 * Civil-law practice body. Three short intro paragraphs then a flat list of
 * six services. Emphasis (`**…**`) is restrained — one key phrase per item.
 */
export const civilLaw: PracticeContent = {
  body: {
    uk: [
      {
        type: "paragraph",
        text: "Цивільні спори – одна з **найпоширеніших** юридичних практик.",
      },
      {
        type: "paragraph",
        text: "Це усі **побутові спори**, що виникають у людей протягом життя.",
      },
      {
        type: "paragraph",
        text: "Ми народжуємося і нас реєструють, одружуємося, розлучаємося і помираємо – й усе це не обходиться без оформлення.",
      },
      {
        type: "list",
        items: [
          "Допомога у прийнятті та оформленні **спадщини**.",
          "Встановлення **права власності на майно**.",
          "Вирішення питань із **проблемними кредитами** будь-якої складності.",
          "**Розподіл спільного майна подружжя**.",
          "Стягнення **заборгованості за розписками та договорами позики**.",
          "Допомога в отриманні **страхового відшкодування**.",
        ],
      },
    ],
    en: [
      {
        type: "paragraph",
        text: "Civil disputes are one of the **most common** areas of legal practice.",
      },
      {
        type: "paragraph",
        text: "These are all the **everyday disputes** that arise in people's lives.",
      },
      {
        type: "paragraph",
        text: "We are born and registered, we marry, divorce and die — and none of it happens without paperwork.",
      },
      {
        type: "list",
        items: [
          "Help with accepting and formalizing an **inheritance**.",
          "Establishing **ownership of property**.",
          "Resolving **problem loans** of any complexity.",
          "**Division of marital property**.",
          "Recovery of **debt under promissory notes and loan agreements**.",
          "Help in obtaining **insurance compensation**.",
        ],
      },
    ],
    pl: [
      {
        type: "paragraph",
        text: "Spory cywilne to jedna z **najczęstszych** praktyk prawnych.",
      },
      {
        type: "paragraph",
        text: "To wszystkie **codzienne spory**, które pojawiają się w życiu ludzi.",
      },
      {
        type: "paragraph",
        text: "Rodzimy się i jesteśmy rejestrowani, bierzemy ślub, rozwodzimy się i umieramy — i nic z tego nie obywa się bez formalności.",
      },
      {
        type: "list",
        items: [
          "Pomoc w przyjęciu i sformalizowaniu **spadku**.",
          "Ustalenie **prawa własności do majątku**.",
          "Rozwiązywanie kwestii **problematycznych kredytów** o dowolnym stopniu złożoności.",
          "**Podział wspólnego majątku małżonków**.",
          "Windykacja **zadłużenia z tytułu rewersów i umów pożyczki**.",
          "Pomoc w uzyskaniu **odszkodowania ubezpieczeniowego**.",
        ],
      },
    ],
  },
}
