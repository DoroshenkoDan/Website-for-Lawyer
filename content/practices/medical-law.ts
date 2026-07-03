import type { PracticeContent } from "@/types/practices"

/**
 * Medical-law practice body. Two intro paragraphs on the field's complexity,
 * then a flat list of 10 services. Emphasis (`**…**`) is restrained — one key
 * phrase per paragraph/item.
 */
export const medicalLaw: PracticeContent = {
  body: {
    uk: [
      {
        type: "paragraph",
        text: "Сфера медичного права дуже складна. Деякі юристи стверджують, що немає такого права, як медичне, і вважають його несамостійною галуззю права.",
      },
      {
        type: "paragraph",
        text: "Проблема галузі — у **відсутності кодифікації** та неймовірній кількості наказів, постанов та інших нормативних актів. Деякі з них постійно оновлюються, а деякі без змін уже десятки років, і це не заважає бути чинними і одним, і іншим. Розібратися в усьому цьому навіть юристу, який не має досвіду в цій сфері, неймовірно важко. Тому пропоную наступні послуги:",
      },
      {
        type: "list",
        items: [
          "Забезпечимо консультації та роз'яснення щодо **законодавчої та нормативної бази**, яка регулює медичне право в Україні.",
          "Забезпечимо правовий та документальний супровід **ліцензування** господарської діяльності медичної практики незалежно від регіону України.",
          "Розробимо **договори про надання медичних послуг** для закладів охорони здоров'я.",
          "Складемо **індивідуальний договір** про надання медичних послуг для пацієнта.",
          "Розробимо схеми та договори при трьохсторонніх чи багатосторонніх **складних лікувальних схемах**, де задіяно декілька медичних закладів або медичні заклади та посередницькі структури.",
          "Проведемо **юридичний аудит** наявних медико-правових документів медичних закладів, дамо висновки та рекомендації відповідно до потреб і цілей конкретного закладу охорони здоров'я.",
          "Здійснюємо **представництво** лікувальних закладів та лікарів, що провадять приватну медичну практику, у судах України.",
          "Здійснюємо **абонентське обслуговування** приватних закладів охорони здоров'я та лікарів, які провадять самостійну господарську діяльність.",
          "Здійснюємо правовий та організаційний супровід **пацієнтів — громадян іноземних держав**, що прибули на лікування до України.",
          "Здійснюємо консультації та підготовку документів для **державної реєстрації лікарських засобів**.",
        ],
      },
    ],
    en: [
      {
        type: "paragraph",
        text: "Medical law is a highly complex field. Some lawyers argue that medical law does not exist as such and consider it a non-independent branch of law.",
      },
      {
        type: "paragraph",
        text: "The problem of the field lies in the **absence of codification** and an overwhelming number of orders, resolutions and other regulations. Some are updated constantly, others have stayed unchanged for decades — and that doesn't stop either from being in force. Making sense of it all is incredibly hard even for a lawyer without experience in this area. That's why I offer the following services:",
      },
      {
        type: "list",
        items: [
          "Consultations and clarifications on the **legislative and regulatory framework** that governs medical law in Ukraine.",
          "Legal and documentary support for **licensing** the business activity of a medical practice in any region of Ukraine.",
          "Drafting **medical-services agreements** for healthcare institutions.",
          "Preparing an **individual medical-services agreement** for a patient.",
          "Developing schemes and contracts for **complex three-party or multi-party treatment arrangements** involving several medical institutions, or medical institutions and intermediary structures.",
          "A **legal audit** of a medical institution's existing medico-legal documents, with conclusions and recommendations tailored to the needs and goals of the particular healthcare institution.",
          "**Representation** of medical institutions and doctors in private practice before the courts of Ukraine.",
          "**Retainer services** for private healthcare institutions and doctors running independent business activity.",
          "Legal and organizational support for **patients who are foreign nationals** arriving in Ukraine for treatment.",
          "Consultations and preparation of documents for the **state registration of medicinal products**.",
        ],
      },
    ],
    pl: [
      {
        type: "paragraph",
        text: "Prawo medyczne to bardzo złożona dziedzina. Niektórzy prawnicy twierdzą, że prawo medyczne jako takie nie istnieje, i uważają je za niesamodzielną gałąź prawa.",
      },
      {
        type: "paragraph",
        text: "Problem tej dziedziny tkwi w **braku kodyfikacji** oraz ogromnej liczbie zarządzeń, uchwał i innych aktów normatywnych. Niektóre są stale aktualizowane, inne pozostają niezmienione od dziesięcioleci — i nie przeszkadza to, by jedne i drugie obowiązywały. Zorientowanie się w tym wszystkim jest niezwykle trudne nawet dla prawnika bez doświadczenia w tej dziedzinie. Dlatego oferuję następujące usługi:",
      },
      {
        type: "list",
        items: [
          "Konsultacje i wyjaśnienia dotyczące **podstawy prawnej i normatywnej** regulującej prawo medyczne na Ukrainie.",
          "Wsparcie prawne i dokumentacyjne przy **licencjonowaniu** działalności gospodarczej praktyki medycznej niezależnie od regionu Ukrainy.",
          "Opracowanie **umów o świadczenie usług medycznych** dla placówek ochrony zdrowia.",
          "Sporządzenie **indywidualnej umowy** o świadczenie usług medycznych dla pacjenta.",
          "Opracowanie schematów i umów przy **złożonych trój- lub wielostronnych schematach leczenia**, w które zaangażowanych jest kilka placówek medycznych lub placówki medyczne i struktury pośredniczące.",
          "**Audyt prawny** istniejących dokumentów medyczno-prawnych placówek medycznych wraz z wnioskami i rekomendacjami odpowiednio do potrzeb i celów konkretnej placówki ochrony zdrowia.",
          "**Reprezentacja** placówek leczniczych i lekarzy prowadzących prywatną praktykę medyczną przed sądami Ukrainy.",
          "**Obsługa abonamentowa** prywatnych placówek ochrony zdrowia oraz lekarzy prowadzących samodzielną działalność gospodarczą.",
          "Wsparcie prawne i organizacyjne dla **pacjentów będących obywatelami innych państw**, którzy przybyli na leczenie do Ukrainy.",
          "Konsultacje i przygotowanie dokumentów do **rejestracji państwowej produktów leczniczych**.",
        ],
      },
    ],
  },
}
