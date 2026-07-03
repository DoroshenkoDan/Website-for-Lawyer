import type { PracticeContent } from "@/types/practices"

/**
 * Criminal-law practice body. Intro paragraphs then a flat list of five
 * services. Emphasis (`**…**`) is restrained — one key phrase per item.
 */
export const criminalLaw: PracticeContent = {
  body: {
    uk: [
      {
        type: "paragraph",
        text: "Банальний вислів **«Від тюрми і суми не зарікайтесь»** в нашій країні – абсолютно реальне застереження.",
      },
      {
        type: "paragraph",
        text: "Буду рада запропонувати **повний супровід усіх кримінальних справ** на всіх стадіях процесу.",
      },
      {
        type: "paragraph",
        text: "Чим раніше звернетесь до адвоката, тим менше у вас буде проблем.",
      },
      {
        type: "list",
        items: [
          "**Захист** від кримінального переслідування на будь-якій стадії досудового слідства.",
          "Захист на стадії **судового розгляду** в першій, апеляційній та касаційній інстанціях.",
          "Оскарження **дій та бездіяльності** органів досудового розслідування.",
          "**Звільнення майна з-під арешту**.",
          "Оскарження рішень національних судів до **Європейського суду з прав людини**.",
        ],
      },
    ],
    en: [
      {
        type: "paragraph",
        text: "The well-worn saying **“Never swear you'll be spared prison or poverty”** is, in our country, an entirely real warning.",
      },
      {
        type: "paragraph",
        text: "I'll be glad to offer **full support in all criminal cases** at every stage of the process.",
      },
      {
        type: "paragraph",
        text: "The sooner you turn to a lawyer, the fewer problems you'll have.",
      },
      {
        type: "list",
        items: [
          "**Defense** against criminal prosecution at any stage of the pre-trial investigation.",
          "Defense at the **trial stage** in the first-instance, appellate and cassation courts.",
          "Challenging the **acts and omissions** of pre-trial investigation bodies.",
          "**Release of property from seizure**.",
          "Appealing decisions of national courts to the **European Court of Human Rights**.",
        ],
      },
    ],
    pl: [
      {
        type: "paragraph",
        text: "Utarte powiedzenie **„Nie zarzekaj się więzienia ani biedy”** jest w naszym kraju całkowicie realnym ostrzeżeniem.",
      },
      {
        type: "paragraph",
        text: "Chętnie zaproponuję **pełne wsparcie we wszystkich sprawach karnych** na wszystkich etapach procesu.",
      },
      {
        type: "paragraph",
        text: "Im wcześniej zwrócisz się do adwokata, tym mniej będziesz mieć problemów.",
      },
      {
        type: "list",
        items: [
          "**Obrona** przed ściganiem karnym na każdym etapie postępowania przygotowawczego.",
          "Obrona na etapie **rozprawy sądowej** w pierwszej instancji, apelacji i kasacji.",
          "Zaskarżanie **działań i bezczynności** organów postępowania przygotowawczego.",
          "**Zwolnienie mienia spod zajęcia**.",
          "Zaskarżanie orzeczeń sądów krajowych do **Europejskiego Trybunału Praw Człowieka**.",
        ],
      },
    ],
  },
}
