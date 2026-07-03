import type { Tip } from "@/types/practices"

/**
 * Practical tips shown on the electronic-declarations page (uk from the client,
 * en/pl translated). Each id is a stable slug used as the accordion anchor.
 */
export const declarationTips: Tip[] = [
  {
    id: "family-members",
    title: {
      uk: "Хто належить до членів сім'ї?",
      en: "Who counts as a family member?",
      pl: "Kto należy do członków rodziny?",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Відповідно до статті 1 **Закону України «Про запобігання корупції»**:",
        },
        {
          type: "callout",
          variant: "note",
          text: "Члени сім'ї – особи, які перебувають у шлюбі, а також їхні діти, у тому числі повнолітні, батьки, особи, які перебувають під опікою і піклуванням, інші особи, які спільно проживають, пов'язані спільним побутом, мають взаємні права та обов'язки (крім осіб, взаємні права та обов'язки яких не мають характеру сімейних), у тому числі особи, які спільно проживають, але не перебувають у шлюбі.",
        },
        {
          type: "paragraph",
          text: "Дуже часто плутають два поняття — **«близькі особи»** та **«члени сім'ї»**.",
        },
        {
          type: "paragraph",
          text: "Для перевірки треба уважно подивитися норму закону і перевірити **триєдиним чинником**:",
        },
        {
          type: "list",
          items: [
            "спільне проживання;",
            "пов'язані спільним побутом;",
            "мають взаємні права та обов'язки.",
          ],
        },
        {
          type: "paragraph",
          text: "**Зверніть увагу:** за наявності зареєстрованого шлюбу у декларацію вписуємо чоловіка/дружину незалежно від їх спільного проживання. Дітей суб'єкта декларування до досягнення ними повноліття — незалежно від спільного проживання із суб'єктом.",
        },
        {
          type: "paragraph",
          text: "Членами сім'ї суб'єкта декларування, які не є його подружжям або дітьми, вважаються особи, що спільно проживали із суб'єктом станом на останній день звітного періоду або сукупно **не менше 183 днів** протягом року, що передує року подання декларації.",
        },
        {
          type: "paragraph",
          text: "Батьки, сестри, брати, цивільні чоловіки/дружини, партнери в одностатевих стосунках вказуються в декларації за умови збігу **всіх ознак триєдиного чинника**.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Подружжя у зареєстрованому шлюбі, обоє — суб'єкти декларування. Чоловік проживає в одному місті, дружина — в іншому. З чоловіком проживають розлучена дочка та онук, з дружиною — син, невістка та онучка. У декларацію вони обов'язково вносять одне одного (незалежно від того, що проживають окремо); крім того, чоловік декларує дочку та онука, а дружина — сина, невістку та онучку.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 2.** Суб'єкт декларування не перебуває у шлюбі, проте спільно проживає у «цивільному шлюбі» з жінкою та її сином від попередніх стосунків. До декларації вносять і жінку, і її дитину.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 3.** Суб'єкт декларування винаймає квартиру разом з іншою особою. Таку особу не вносять до декларації навіть за умови спільного проживання, бо характер стосунків не містить прав та обов'язків, які є сімейними.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Under Article 1 of the **Law of Ukraine “On Prevention of Corruption”**:",
        },
        {
          type: "callout",
          variant: "note",
          text: "Family members are persons who are married, as well as their children (including adult children) and parents; persons under guardianship or care; and other persons who live together, share a common household and have mutual rights and obligations (except persons whose mutual rights and obligations are not of a family nature), including persons who live together but are not married.",
        },
        {
          type: "paragraph",
          text: "Two concepts are very often confused — **“close persons”** and **“family members.”**",
        },
        {
          type: "paragraph",
          text: "To check, read the statutory wording carefully and apply the **three-part test**:",
        },
        {
          type: "list",
          items: [
            "living together;",
            "sharing a common household;",
            "having mutual rights and obligations.",
          ],
        },
        {
          type: "paragraph",
          text: "**Please note:** if there is a registered marriage, you enter the spouse in the declaration regardless of whether you live together. Children of the declaration subject under the age of majority are entered regardless of whether they live with the subject.",
        },
        {
          type: "paragraph",
          text: "Family members other than the spouse or children are persons who lived together with the declaration subject as of the last day of the reporting period, or for a total of **at least 183 days** during the year preceding the year the declaration is filed.",
        },
        {
          type: "paragraph",
          text: "Parents, sisters, brothers, common-law spouses and same-sex partners are listed in the declaration only if **all elements of the three-part test** coincide.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** A married couple; both are declaration subjects. The husband lives in one city, the wife in another. The husband lives with his divorced daughter and grandson; the wife with her son, daughter-in-law and granddaughter. They must each enter one another in the declaration (regardless of living apart); in addition, the husband declares his daughter and grandson, and the wife declares her son, daughter-in-law and granddaughter.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 2.** The declaration subject is not married but lives together in a “civil marriage” with a woman and her son from a previous relationship. Both the woman and her child are entered in the declaration.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 3.** The declaration subject rents an apartment together with another person. That person is not entered in the declaration even though they live together, because the nature of the relationship does not involve rights and obligations of a family character.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Zgodnie z artykułem 1 **Ustawy Ukrainy „O zapobieganiu korupcji”**:",
        },
        {
          type: "callout",
          variant: "note",
          text: "Członkowie rodziny to osoby pozostające w związku małżeńskim, a także ich dzieci, w tym pełnoletnie, rodzice, osoby pozostające pod opieką i kuratelą oraz inne osoby, które wspólnie zamieszkują, są związane wspólnym gospodarstwem domowym i mają wzajemne prawa i obowiązki (z wyjątkiem osób, których wzajemne prawa i obowiązki nie mają charakteru rodzinnego), w tym osoby, które wspólnie zamieszkują, lecz nie pozostają w związku małżeńskim.",
        },
        {
          type: "paragraph",
          text: "Bardzo często myli się dwa pojęcia — **„osoby bliskie”** i **„członkowie rodziny”**.",
        },
        {
          type: "paragraph",
          text: "Aby to sprawdzić, należy uważnie przeczytać przepis i zastosować **trójelementowy test**:",
        },
        {
          type: "list",
          items: [
            "wspólne zamieszkiwanie;",
            "wspólne gospodarstwo domowe;",
            "wzajemne prawa i obowiązki.",
          ],
        },
        {
          type: "paragraph",
          text: "**Zwróć uwagę:** w przypadku zarejestrowanego małżeństwa wpisujemy do deklaracji małżonka niezależnie od wspólnego zamieszkiwania. Dzieci podmiotu deklarującego do osiągnięcia pełnoletności — niezależnie od wspólnego zamieszkiwania z podmiotem.",
        },
        {
          type: "paragraph",
          text: "Za członków rodziny niebędących małżonkiem ani dziećmi uważa się osoby, które zamieszkiwały wspólnie z podmiotem deklarującym w ostatnim dniu okresu sprawozdawczego lub łącznie przez **co najmniej 183 dni** w roku poprzedzającym rok złożenia deklaracji.",
        },
        {
          type: "paragraph",
          text: "Rodzice, siostry, bracia, konkubenci oraz partnerzy w związkach jednopłciowych są wykazywani w deklaracji pod warunkiem zbieżności **wszystkich cech trójelementowego testu**.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** Małżeństwo w zarejestrowanym związku; oboje są podmiotami deklarującymi. Mąż mieszka w jednym mieście, żona w innym. Z mężem mieszka rozwiedziona córka i wnuk, z żoną — syn, synowa i wnuczka. W deklaracji obowiązkowo wpisują siebie nawzajem (niezależnie od tego, że mieszkają osobno); ponadto mąż deklaruje córkę i wnuka, a żona — syna, synową i wnuczkę.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 2.** Podmiot deklarujący nie pozostaje w związku małżeńskim, ale wspólnie zamieszkuje w „konkubinacie” z kobietą i jej synem z poprzedniego związku. Do deklaracji wpisuje się zarówno kobietę, jak i jej dziecko.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 3.** Podmiot deklarujący wynajmuje mieszkanie razem z inną osobą. Takiej osoby nie wpisuje się do deklaracji nawet w przypadku wspólnego zamieszkiwania, ponieważ charakter relacji nie obejmuje praw i obowiązków o charakterze rodzinnym.",
        },
      ],
    },
  },
  {
    id: "real-estate",
    title: {
      uk: "Об'єкти нерухомості. Що і як декларувати?",
      en: "Real estate: what and how to declare?",
      pl: "Nieruchomości: co i jak deklarować?",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Відповідно до **Закону України «Про запобігання корупції»** суб'єкт декларування повинен внести до декларації **усі** об'єкти нерухомості незалежно від їх вартості, якщо ці об'єкти належать йому на праві власності, перебувають в оренді чи в іншому праві користування на останній день звітного періоду або протягом не менше половини днів звітного періоду.",
        },
        {
          type: "paragraph",
          text: "Звертаю увагу, що **дата набуття права власності** вказується та, яка зазначена в документах, на підставі яких було набуто право власності.",
        },
        {
          type: "paragraph",
          text: "Окрему увагу варто звернути на те, що інформація про об'єкт, який перебував у володінні або користуванні суб'єкта декларування чи членів його сім'ї, зазначається в декларації, якщо такий об'єкт перебував у володінні або користуванні станом на останній день звітного періоду або протягом не менше половини днів звітного періоду. Наголошую, що **право власності – це не право володіння**, а два окремих поняття.",
        },
        {
          type: "paragraph",
          text: "Право власності декларуємо станом на **31.12 звітного року**.",
        },
        {
          type: "paragraph",
          text: "Також звертаю увагу, що відомості про об'єкти нерухомості, які є зареєстрованим місцем проживання суб'єкта декларування або членів його сім'ї, необхідно зазначати у **розділі 3 «Об'єкти нерухомості»** декларації, навіть якщо особа проживає в іншому місці.",
        },
        {
          type: "paragraph",
          text: "На думку НАЗК, відображаючи вартість об'єктів нерухомості, набутих за договором купівлі-продажу (обміну) **після 01.01.2018**, доцільно зазначати оціночну вартість, розраховану уповноваженим органом відповідно до закону та зареєстровану в єдиній базі даних звітів про оцінку, відомості про яку зазначено у правовстановлюючих документах.",
        },
        {
          type: "paragraph",
          text: "Для об'єктів, набутих **до 01.01.2018**, вартість зазначається відповідно до правовстановлюючих документів — за ціною, вказаною в договорі купівлі-продажу (обміну), за відсутності в договорі відомостей про експертну оцінку. НАЗК також наголошує: якщо у правовстановлюючому документі вказано і ціну, і вартість за грошовою оцінкою, для цілей декларування доцільно зазначати вартість за грошовою оцінкою.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Суб'єкт декларування має право власності на квартиру, але зареєстрований в іншому житлі, право власності на яке відсутнє. Чи треба зазначати квартиру за місцем реєстрації у декларації? **Відповідь:** Так — на думку НАЗК, у зв'язку з реєстрацією місця проживання у суб'єкта декларування та членів його сім'ї виникає право користування об'єктом нерухомості.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 2.** У звітному році (у березні) суб'єкт декларування перестав користуватися квартирою, яку винаймав. Чи потрібно зазначати цю нерухомість у декларації? **Відповідь:** Ні — це майно перебувало в користуванні суб'єкта менше 183 днів.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Under the **Law of Ukraine “On Prevention of Corruption”**, the declaration subject must enter in the declaration **all** real estate regardless of its value, if these objects belong to them by right of ownership, are leased, or are held under another right of use as of the last day of the reporting period, or for at least half of the days of the reporting period.",
        },
        {
          type: "paragraph",
          text: "Note that the **date of acquiring ownership** is the one stated in the documents on the basis of which ownership was acquired.",
        },
        {
          type: "paragraph",
          text: "Special attention should be paid to the fact that information about an object held in the possession or use of the declaration subject or their family members is stated in the declaration if the object was in possession or use as of the last day of the reporting period, or for at least half of the days of the reporting period. Note that **ownership is not the same as possession** — these are two separate concepts.",
        },
        {
          type: "paragraph",
          text: "Ownership is declared as of **31 December of the reporting year**.",
        },
        {
          type: "paragraph",
          text: "Also note that information about real estate that is the registered place of residence of the declaration subject or their family members must be stated in **Section 3 “Real Estate”** of the declaration, even if the person actually lives elsewhere.",
        },
        {
          type: "paragraph",
          text: "In the NACP's view, when stating the value of real estate acquired under a sale-and-purchase (exchange) agreement **after 1 January 2018**, it is advisable to state the appraised value calculated by the body authorized to perform such valuation in accordance with the law and registered in the unified database of valuation reports, details of which are given in the title documents.",
        },
        {
          type: "paragraph",
          text: "For objects acquired **before 1 January 2018**, the value is stated according to the title documents — at the price indicated in the sale-and-purchase (exchange) agreement, absent details of an expert appraisal in the agreement. The NACP also stresses: if the title document states both the price and the value by monetary valuation, for declaration purposes it is advisable to state the value by monetary valuation.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** The declaration subject owns an apartment but is registered at a different dwelling that they do not own. Must the apartment be listed at the place of registration in the declaration? **Answer:** Yes — in the NACP's view, registration of a place of residence gives the declaration subject and their family members a right to use the real estate.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 2.** In the reporting year, in March, the declaration subject stopped using an apartment they had been renting. Must this property be listed in the declaration? **Answer:** No — this property was in the subject's use for fewer than 183 days.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Zgodnie z **Ustawą Ukrainy „O zapobieganiu korupcji”** podmiot deklarujący musi wpisać do deklaracji **wszystkie** nieruchomości niezależnie od ich wartości, jeżeli obiekty te należą do niego na prawie własności, są w najmie lub w innym prawie użytkowania w ostatnim dniu okresu sprawozdawczego albo przez co najmniej połowę dni okresu sprawozdawczego.",
        },
        {
          type: "paragraph",
          text: "Zwróć uwagę, że **datę nabycia prawa własności** podaje się taką, jaka jest wskazana w dokumentach, na podstawie których nabyto prawo własności.",
        },
        {
          type: "paragraph",
          text: "Szczególną uwagę należy zwrócić na to, że informację o obiekcie będącym w posiadaniu lub użytkowaniu podmiotu deklarującego lub członków jego rodziny podaje się w deklaracji, jeżeli obiekt ten był w posiadaniu lub użytkowaniu w ostatnim dniu okresu sprawozdawczego albo przez co najmniej połowę dni okresu sprawozdawczego. Podkreślam, że **prawo własności to nie prawo posiadania** — to dwa odrębne pojęcia.",
        },
        {
          type: "paragraph",
          text: "Prawo własności deklarujemy według stanu na **31.12 roku sprawozdawczego**.",
        },
        {
          type: "paragraph",
          text: "Zwracam także uwagę, że informacje o nieruchomościach będących zarejestrowanym miejscem zamieszkania podmiotu deklarującego lub członków jego rodziny należy podać w **sekcji 3 „Nieruchomości”** deklaracji, nawet jeśli osoba mieszka w innym miejscu.",
        },
        {
          type: "paragraph",
          text: "Zdaniem NAZK, wskazując wartość nieruchomości nabytych na podstawie umowy kupna-sprzedaży (zamiany) **po 01.01.2018**, wskazane jest podanie wartości szacunkowej obliczonej przez organ uprawniony do dokonania takiej wyceny zgodnie z ustawą i zarejestrowanej w jednolitej bazie danych raportów z wyceny, o której informacje podano w dokumentach potwierdzających tytuł prawny.",
        },
        {
          type: "paragraph",
          text: "Dla obiektów nabytych **przed 01.01.2018** wartość podaje się zgodnie z dokumentami potwierdzającymi tytuł prawny — według ceny wskazanej w umowie kupna-sprzedaży (zamiany), w razie braku w umowie informacji o wycenie eksperckiej. NAZK podkreśla też: jeśli w dokumencie podano zarówno cenę, jak i wartość według wyceny pieniężnej, dla celów deklarowania wskazane jest podanie wartości według wyceny pieniężnej.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** Podmiot deklarujący jest właścicielem mieszkania, ale jest zameldowany w innym lokalu, którego nie jest właścicielem. Czy należy wskazać mieszkanie w miejscu zameldowania w deklaracji? **Odpowiedź:** Tak — zdaniem NAZK w związku z rejestracją miejsca zamieszkania u podmiotu deklarującego i członków jego rodziny powstaje prawo do użytkowania nieruchomości.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 2.** W roku sprawozdawczym, w marcu, podmiot deklarujący przestał korzystać z wynajmowanego mieszkania. Czy trzeba wskazać tę nieruchomość w deklaracji? **Odpowiedź:** Nie — mienie to było w użytkowaniu podmiotu krócej niż 183 dni.",
        },
      ],
    },
  },
  {
    id: "movable-property",
    title: {
      uk: "Цінне рухоме майно (крім транспортних засобів)",
      en: "Valuable movable property (other than vehicles)",
      pl: "Wartościowe mienie ruchome (poza pojazdami)",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Відповідно до **п. 2 ст. 182**:",
        },
        {
          type: "callout",
          variant: "note",
          text: "Рухомими речами є речі, які можна вільно переміщувати у просторі.",
        },
        {
          type: "paragraph",
          text: "Тобто у розділі «Цінне рухоме майно (крім транспортних засобів)» суб'єкт декларування зазначає коштовні ювелірні вироби, антикваріат, меблі, твори мистецтва, картини, скульптури, цінний фарфор, рідкісні букіністичні видання, дорогий брендовий одяг, хутра, коштовну зброю (як вогнепальну, так і холодну), аксесуари — сумки відомих брендів, портсигари тощо.",
        },
        {
          type: "paragraph",
          text: "Шкала виміру одна: **сума одного предмета має перевищувати 100 прожиткових мінімумів**.",
        },
        {
          type: "paragraph",
          text: "З мого досвіду типова помилка — коли суб'єкт декларування вказує «колекція картин», «зібрання скульптур», «колекція фарфору». І ось тут починаються проблеми.",
        },
        {
          type: "paragraph",
          text: "**Зверніть увагу:** цінне рухоме майно декларуємо кожен предмет окремо!",
        },
        {
          type: "paragraph",
          text: "Якщо цінне рухоме майно є одночасно подарунком, воно декларується у **двох розділах одночасно** — «Цінне рухоме майно (крім транспортних засобів)» (у разі перевищення порогу) та «Доходи, у тому числі подарунки». Відомості зазначаються, якщо вартість речі перевищує встановлений Законом поріг — **100 ПМ**, встановлених для працездатних осіб на 1 січня звітного року.",
        },
        {
          type: "paragraph",
          text: "Вартість цінної рухомої речі, що перебуває у власності суб'єкта декларування або члена його сім'ї, зазначається у **гривні** на дату набуття права власності, володіння або користування річчю.",
        },
        {
          type: "paragraph",
          text: "Порядок придбання значення не має: якщо вартість об'єкта (наприклад, ювелірного виробу) перевищує 100 ПМ, встановлених для працездатних осіб на 1 січня звітного року, його треба відобразити в декларації. Вартість кожної цінної рухомої речі вказується окремо, крім випадків, коли речі придбані як **набір** (столовий сервіз, набір меблів, набір ювелірних прикрас тощо) одночасно.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Дружина суб'єкта декларування придбала за кордоном сумку, вартість якої перевищує 100 ПМ, за євро у 2018 році. У декларації вказуємо ціну в гривнях станом на 2018 рік — за курсом НБУ.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 2.** Суб'єкт декларування має колекцію фарфору. Уся колекція значно перевищує 100 ПМ, але поштучно лише деякі предмети коштують понад 100 ПМ. Декларуємо лише ті, чия вартість перевищує 100 ПМ.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Under **paragraph 2 of Article 182**:",
        },
        {
          type: "callout",
          variant: "note",
          text: "Movable things are things that can be freely moved in space.",
        },
        {
          type: "paragraph",
          text: "So in the section “Valuable movable property (other than vehicles)” the declaration subject lists precious jewellery, antiques, furniture, works of art, paintings, sculptures, fine porcelain, rare antiquarian books, expensive branded clothing, furs, valuable weapons (both firearms and bladed weapons), and accessories — bags of well-known brands, cigarette cases and the like.",
        },
        {
          type: "paragraph",
          text: "There is a single yardstick: **the value of a single item must exceed 100 subsistence minimums**.",
        },
        {
          type: "paragraph",
          text: "In my experience, a typical mistake is when the declaration subject writes “a collection of paintings,” “a set of sculptures,” “a porcelain collection.” And that is where the problems begin.",
        },
        {
          type: "paragraph",
          text: "**Please note:** valuable movable property is declared item by item!",
        },
        {
          type: "paragraph",
          text: "If valuable movable property is at the same time a gift, it is declared in **two sections at once** — “Valuable movable property (other than vehicles)” (where the threshold is exceeded) and “Income, including gifts.” The item is stated if its value exceeds the threshold set by law — **100 subsistence minimums** for able-bodied persons as of 1 January of the reporting year.",
        },
        {
          type: "paragraph",
          text: "The value of a valuable movable item owned by the declaration subject or a family member is stated in **hryvnia** as of the date of acquiring ownership, possession or use of the item.",
        },
        {
          type: "paragraph",
          text: "The manner of acquisition does not matter: if the value of an object (for example, a piece of jewellery) exceeds 100 subsistence minimums for able-bodied persons as of 1 January of the reporting year, it must be shown in the declaration. The value of each valuable movable item is stated separately, except where items were acquired as a **set** (a dinner service, a furniture set, a set of jewellery, etc.) at the same time.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** The declaration subject's wife bought a bag abroad worth more than 100 subsistence minimums, paying in euros in 2018. In the declaration, the price is stated in hryvnia as of 2018 — at the NBU exchange rate.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 2.** The declaration subject has a porcelain collection. The whole collection far exceeds 100 subsistence minimums, but individually only some items are worth more than 100. Only those whose value exceeds 100 subsistence minimums are declared.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Zgodnie z **ust. 2 art. 182**:",
        },
        {
          type: "callout",
          variant: "note",
          text: "Rzeczy ruchome to rzeczy, które można swobodnie przemieszczać w przestrzeni.",
        },
        {
          type: "paragraph",
          text: "Zatem w sekcji „Wartościowe mienie ruchome (poza pojazdami)” podmiot deklarujący wskazuje kosztowną biżuterię, antyki, meble, dzieła sztuki, obrazy, rzeźby, wartościową porcelanę, rzadkie książki antykwaryczne, drogą odzież markową, futra, wartościową broń (zarówno palną, jak i białą) oraz akcesoria — torebki znanych marek, papierośnice itp.",
        },
        {
          type: "paragraph",
          text: "Miara jest jedna: **wartość jednego przedmiotu musi przekraczać 100 minimów egzystencji**.",
        },
        {
          type: "paragraph",
          text: "Z mojego doświadczenia typowym błędem jest, gdy podmiot deklarujący wpisuje „kolekcja obrazów”, „zbiór rzeźb”, „kolekcja porcelany”. I tu zaczynają się problemy.",
        },
        {
          type: "paragraph",
          text: "**Zwróć uwagę:** wartościowe mienie ruchome deklarujemy każdy przedmiot osobno!",
        },
        {
          type: "paragraph",
          text: "Jeżeli wartościowe mienie ruchome jest jednocześnie prezentem, deklaruje się je w **dwóch sekcjach jednocześnie** — „Wartościowe mienie ruchome (poza pojazdami)” (w razie przekroczenia progu) oraz „Dochody, w tym prezenty”. Informacje podaje się, jeżeli wartość rzeczy przekracza ustawowy próg — **100 minimów egzystencji** dla osób zdolnych do pracy według stanu na 1 stycznia roku sprawozdawczego.",
        },
        {
          type: "paragraph",
          text: "Wartość wartościowej rzeczy ruchomej będącej własnością podmiotu deklarującego lub członka jego rodziny podaje się w **hrywnie** według stanu na dzień nabycia prawa własności, posiadania lub użytkowania rzeczy.",
        },
        {
          type: "paragraph",
          text: "Sposób nabycia nie ma znaczenia: jeżeli wartość obiektu (np. wyrobu jubilerskiego) przekracza 100 minimów egzystencji dla osób zdolnych do pracy według stanu na 1 stycznia roku sprawozdawczego, należy go wykazać w deklaracji. Wartość każdej wartościowej rzeczy ruchomej podaje się osobno, z wyjątkiem przypadków, gdy rzeczy nabyto jako **komplet** (serwis stołowy, komplet mebli, komplet biżuterii itp.) jednocześnie.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** Żona podmiotu deklarującego kupiła za granicą torebkę o wartości przekraczającej 100 minimów egzystencji, płacąc w euro w 2018 roku. W deklaracji cenę podaje się w hrywnach według stanu na 2018 rok — po kursie NBU.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 2.** Podmiot deklarujący ma kolekcję porcelany. Cała kolekcja znacznie przekracza 100 minimów egzystencji, ale pojedynczo tylko niektóre przedmioty są warte więcej niż 100. Deklarujemy tylko te, których wartość przekracza 100 minimów egzystencji.",
        },
      ],
    },
  },
  {
    id: "unfinished-construction",
    title: {
      uk: "Об'єкти незавершеного будівництва",
      en: "Unfinished construction",
      pl: "Obiekty w budowie (niezakończone)",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Відповідно до вимог **ЗУ «Про запобігання корупції»** усі об'єкти нерухомості мають бути зазначені у щорічній декларації. Відповідно до **п. 2 ч. 1 ст. 46** у розділі «Об'єкти незавершеного будівництва» слід зазначити об'єкти незавершеного будівництва, об'єкти, що не прийняті в експлуатацію, та об'єкти, право власності на які не було зареєстровано у встановленому законом порядку у звітному році.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Суб'єкт декларування у декларації за 2018 рік вказував об'єкт незавершеного будівництва. У 2019 об'єкт добудували, прийняли в експлуатацію і право власності зареєстрували в установленому законом порядку. Такий об'єкт не треба вносити до «Об'єктів незавершеного будівництва» — його вказують у розділі «Нерухоме майно».",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 2.** Суб'єкт декларування у декларації за 2018 рік вказував об'єкт незавершеного будівництва. У 2019 об'єкт добудували і прийняли в експлуатацію, проте станом на 31 грудня право власності ще не було зареєстровано в установленому законом порядку. Такий об'єкт треба вносити до «Об'єктів незавершеного будівництва».",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Under the requirements of the **Law “On Prevention of Corruption”**, all real estate must be stated in the annual declaration. Under **clause 2 of part 1 of Article 46**, the section “Unfinished construction” must list objects of unfinished construction, objects not yet commissioned, and objects the ownership of which was not registered in the manner established by law during the reporting year.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** In the 2018 declaration, the subject listed an object of unfinished construction. In 2019 the object was completed, commissioned, and ownership was registered in the manner established by law. Such an object should not be entered under “Unfinished construction” — it is listed in the “Real estate” section.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 2.** In the 2018 declaration, the subject listed an object of unfinished construction. In 2019 the object was completed and commissioned, but as of 31 December ownership had not yet been registered in the manner established by law. Such an object must be entered under “Unfinished construction.”",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Zgodnie z wymogami **Ustawy „O zapobieganiu korupcji”** wszystkie nieruchomości muszą być wskazane w deklaracji rocznej. Zgodnie z **pkt 2 ust. 1 art. 46** w sekcji „Obiekty w budowie (niezakończone)” należy wskazać obiekty niezakończonej budowy, obiekty nieoddane do użytku oraz obiekty, których prawo własności nie zostało zarejestrowane w trybie określonym ustawą w roku sprawozdawczym.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** W deklaracji za 2018 rok podmiot wskazał obiekt niezakończonej budowy. W 2019 obiekt ukończono, oddano do użytku i zarejestrowano prawo własności w trybie określonym ustawą. Takiego obiektu nie wpisuje się do „Obiektów w budowie” — wskazuje się go w sekcji „Nieruchomości”.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 2.** W deklaracji za 2018 rok podmiot wskazał obiekt niezakończonej budowy. W 2019 obiekt ukończono i oddano do użytku, jednak na 31 grudnia prawo własności nie zostało jeszcze zarejestrowane w trybie określonym ustawą. Taki obiekt należy wpisać do „Obiektów w budowie”.",
        },
      ],
    },
  },
  {
    id: "gifts",
    title: { uk: "Подарунки", en: "Gifts", pl: "Prezenty" },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Подарунки – це взагалі дуже цікава історія. Відомості про подарунок зазначаються в електронній декларації лише якщо його вартість перевищує **п'ять прожиткових мінімумів**, встановлених для працездатних осіб на 1 січня звітного року. Але згадаємо про особливості подарунків та обмеження щодо їх отримання.",
        },
        {
          type: "paragraph",
          text: "Особи, зазначені у пункті 1 частини першої статті 3 Закону «Про запобігання корупції», можуть приймати подарунки, які відповідають загальновизнаним уявленням про гостинність (крім випадків, передбачених частиною першою цієї статті), якщо вартість таких подарунків не перевищує **один прожитковий мінімум** для працездатних осіб на день прийняття, одноразово, а сукупна вартість подарунків від однієї особи (групи осіб) протягом року не перевищує **двох прожиткових мінімумів**, встановлених для працездатної особи на 1 січня того року, в якому прийнято подарунки.",
        },
        {
          type: "paragraph",
          text: "Обмеження щодо вартості подарунків не поширюється на подарунки, які:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "даруються **близькими особами** (близькі особи – ті, які спільно проживають, пов'язані спільним побутом і мають взаємні права та обов'язки із суб'єктом, у тому числі особи, які спільно проживають, але не перебувають у шлюбі; а також — незалежно від цих умов — чоловік, дружина, батько, мати, вітчим, мачуха, син, дочка, пасинок, падчерка, рідний брат, рідна сестра, дід, баба, прадід, прабаба, внук, внучка, правнук, правнучка, зять, невістка, тесть, теща, свекор, свекруха, усиновлювач чи усиновлений, опікун чи піклувальник, особа під опікою або піклуванням);",
            "одержуються як загальнодоступні знижки на товари, послуги, загальнодоступні виграші, призи, премії, бонуси.",
          ],
        },
        {
          type: "paragraph",
          text: "Цінну річ, яка є подарунком, потрібно відображати не лише в розділі «Цінне рухоме майно», а й у розділі «Подарунки».",
        },
        {
          type: "paragraph",
          text: "Якщо цінне рухоме майно (крім грошей) є одночасно подарунком, то в разі перевищення встановленого Законом порогу декларування у **100 ПМ** воно декларується як у розділі «Цінне рухоме майно (крім транспортних засобів)», так і в розділі «Доходи, у тому числі подарунки». Аналогічний підхід застосовується до будь-якого іншого майна, яке одночасно є подарунком.",
        },
        {
          type: "paragraph",
          text: "Наприклад, подарунки у вигляді цінних паперів або транспортного засобу додатково декларуються у розділах «Цінні папери» та «Транспортні засоби» відповідно. Крім того, цінне майно, набуте у звітному періоді як подарунок, слід також відобразити в розділі «Видатки та правочини» як предмет «Іншого правочину», який не спричинив видаток (за умови, що його вартість перевищує встановлений у цьому розділі поріг — **50 ПМ**).",
        },
        {
          type: "callout",
          variant: "note",
          text: "**Увага:** у розділі «Цінне рухоме майно (крім транспортних засобів)» такий об'єкт зазначається лише якщо він перебуває у суб'єкта декларування або члена його сім'ї на праві володіння, користування чи власності станом на останній день звітного періоду. Натомість у розділі «Доходи, у тому числі подарунки» майно зазначається, якщо його отримано як подарунок упродовж звітного періоду — незалежно від того, чи залишилося воно у власності станом на останній день періоду.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Суб'єктові декларування подарували коштовну прикрасу протягом звітного року. Згодом суб'єкт декларування подарував цю коштовність своїй родичці. Але у щорічній декларації він усе одно вносить цей предмет у розділ «Подарунки».",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Gifts are a very interesting story altogether. Information about a gift is stated in the electronic declaration only if its value exceeds **five subsistence minimums** for able-bodied persons as of 1 January of the reporting year. But let us recall the specifics of gifts and the restrictions on receiving them.",
        },
        {
          type: "paragraph",
          text: "Persons listed in clause 1 of part 1 of Article 3 of the Law “On Prevention of Corruption” may accept gifts that meet generally accepted notions of hospitality (except as provided in part 1 of that Article) if the value of such gifts does not exceed **one subsistence minimum** for able-bodied persons as of the day the gift is accepted, on a one-off basis, and the aggregate value of such gifts from one person (group of persons) during the year does not exceed **two subsistence minimums** for an able-bodied person as of 1 January of the year in which the gifts are accepted.",
        },
        {
          type: "paragraph",
          text: "The value restriction does not apply to gifts that:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "are given by **close persons** (close persons are those who live together, share a common household and have mutual rights and obligations with the subject, including persons who live together but are not married; and also — regardless of these conditions — spouse, father, mother, stepfather, stepmother, son, daughter, stepson, stepdaughter, brother, sister, grandfather, grandmother, great-grandfather, great-grandmother, grandson, granddaughter, great-grandson, great-granddaughter, son-in-law, daughter-in-law, father-in-law, mother-in-law, adopter or adoptee, guardian or custodian, and a person under the guardianship or care of the subject);",
            "are received as generally available discounts on goods and services, generally available winnings, prizes, awards and bonuses.",
          ],
        },
        {
          type: "paragraph",
          text: "A valuable item that is a gift must be shown not only in the “Valuable movable property” section but also in the “Gifts” section.",
        },
        {
          type: "paragraph",
          text: "If valuable movable property (other than money) is at the same time a gift, then where the statutory threshold of **100 subsistence minimums** is exceeded, it is declared both in “Valuable movable property (other than vehicles)” and in “Income, including gifts.” The same approach applies to any other property that is at the same time a gift.",
        },
        {
          type: "paragraph",
          text: "For example, gifts in the form of securities or a vehicle are additionally declared in the “Securities” and “Vehicles” sections respectively. In addition, valuable property acquired during the reporting period as a gift should also be reflected in the “Expenditures and transactions” section as an item of “Another transaction” that did not entail an expenditure (provided its value exceeds the threshold of **50 subsistence minimums** set for that section).",
        },
        {
          type: "callout",
          variant: "note",
          text: "**Attention:** in the “Valuable movable property (other than vehicles)” section such an object is stated only if it is held by the declaration subject or a family member by right of possession, use or ownership as of the last day of the reporting period. In the “Income, including gifts” section, by contrast, the property is stated if it was received as a gift during the reporting period — regardless of whether it remained in ownership as of the last day of the period.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** The declaration subject received a valuable piece of jewellery during the reporting year. Later the subject gave that valuable item to a relative. But in the annual declaration the subject still enters this item in the “Gifts” section.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Prezenty to w ogóle bardzo ciekawa historia. Informacje o prezencie podaje się w deklaracji elektronicznej tylko wtedy, gdy jego wartość przekracza **pięć minimów egzystencji** dla osób zdolnych do pracy według stanu na 1 stycznia roku sprawozdawczego. Przypomnijmy jednak o specyfice prezentów i ograniczeniach dotyczących ich przyjmowania.",
        },
        {
          type: "paragraph",
          text: "Osoby wymienione w pkt 1 ust. 1 art. 3 Ustawy „O zapobieganiu korupcji” mogą przyjmować prezenty odpowiadające ogólnie przyjętym pojęciom gościnności (poza przypadkami przewidzianymi w ust. 1 tego artykułu), jeżeli wartość takich prezentów nie przekracza **jednego minimum egzystencji** dla osób zdolnych do pracy według stanu na dzień przyjęcia, jednorazowo, a łączna wartość takich prezentów od jednej osoby (grupy osób) w ciągu roku nie przekracza **dwóch minimów egzystencji** dla osoby zdolnej do pracy według stanu na 1 stycznia roku, w którym prezenty przyjęto.",
        },
        {
          type: "paragraph",
          text: "Ograniczenie wartości nie dotyczy prezentów, które:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "są darowane przez **osoby bliskie** (osoby bliskie to osoby, które wspólnie zamieszkują, są związane wspólnym gospodarstwem domowym i mają wzajemne prawa i obowiązki z podmiotem, w tym osoby wspólnie zamieszkujące, lecz niebędące w związku małżeńskim; a także — niezależnie od tych warunków — mąż, żona, ojciec, matka, ojczym, macocha, syn, córka, pasierb, pasierbica, rodzony brat, rodzona siostra, dziadek, babcia, pradziadek, prababcia, wnuk, wnuczka, prawnuk, prawnuczka, zięć, synowa, teść, teściowa, świekier, świekra, przysposabiający lub przysposobiony, opiekun lub kurator oraz osoba pozostająca pod opieką lub kuratelą podmiotu);",
            "są otrzymywane jako ogólnodostępne rabaty na towary i usługi, ogólnodostępne wygrane, nagrody, premie, bonusy.",
          ],
        },
        {
          type: "paragraph",
          text: "Wartościową rzecz będącą prezentem należy wykazać nie tylko w sekcji „Wartościowe mienie ruchome”, ale także w sekcji „Prezenty”.",
        },
        {
          type: "paragraph",
          text: "Jeżeli wartościowe mienie ruchome (poza pieniędzmi) jest jednocześnie prezentem, to w razie przekroczenia ustawowego progu **100 minimów egzystencji** deklaruje się je zarówno w sekcji „Wartościowe mienie ruchome (poza pojazdami)”, jak i w sekcji „Dochody, w tym prezenty”. Takie samo podejście stosuje się do każdego innego mienia będącego jednocześnie prezentem.",
        },
        {
          type: "paragraph",
          text: "Na przykład prezenty w postaci papierów wartościowych lub pojazdu deklaruje się dodatkowo odpowiednio w sekcjach „Papiery wartościowe” i „Pojazdy”. Ponadto wartościowe mienie nabyte w okresie sprawozdawczym jako prezent należy również wykazać w sekcji „Wydatki i czynności prawne” jako przedmiot „Innej czynności prawnej”, która nie spowodowała wydatku (pod warunkiem, że jego wartość przekracza ustalony w tej sekcji próg **50 minimów egzystencji**).",
        },
        {
          type: "callout",
          variant: "note",
          text: "**Uwaga:** w sekcji „Wartościowe mienie ruchome (poza pojazdami)” taki obiekt podaje się tylko wtedy, gdy jest w posiadaniu, użytkowaniu lub własności podmiotu deklarującego albo członka jego rodziny według stanu na ostatni dzień okresu sprawozdawczego. Natomiast w sekcji „Dochody, w tym prezenty” mienie podaje się, jeżeli otrzymano je jako prezent w okresie sprawozdawczym — niezależnie od tego, czy pozostało we własności na ostatni dzień okresu.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** Podmiot deklarujący otrzymał wartościową biżuterię w roku sprawozdawczym. Później podarował tę kosztowność swojej krewnej. Mimo to w deklaracji rocznej podmiot i tak wpisuje ten przedmiot w sekcji „Prezenty”.",
        },
      ],
    },
  },
  {
    id: "expenditures-transactions",
    title: {
      uk: "Видатки і правочини",
      en: "Expenditures and transactions",
      pl: "Wydatki i czynności prawne",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Почнемо з кінця — кому не потрібно заповнювати цей розділ. Звертаю увагу, що в розділі «Видатки та правочини» вказуються лише видатки та правочини **суб'єкта декларування**; видатки та правочини членів його сім'ї не зазначаються.",
        },
        {
          type: "paragraph",
          text: "Відповідно до **пункту 10 частини першої статті 46** Закону, у декларації зазначаються видатки та всі правочини, вчинені у звітному періоді, на підставі яких у суб'єкта декларування виникає або припиняється право власності, володіння чи користування на об'єкти декларування, зазначені у пунктах 2–9 частини першої цієї статті. Установлено поріг декларування для видатків: якщо окремий видаток перевищує **50 ПМ**, встановлених на 1 січня звітного року, він має бути відображений у декларації. Зроблені у звітному періоді видатки не сумуються — у декларації зазначається інформація про кожний окремий видаток, якщо він перевищує зазначену межу.",
        },
        {
          type: "paragraph",
          text: "Звертаю особливу увагу: не має значення, чи перебуває відповідний предмет правочину у власності чи на іншому праві у суб'єкта декларування станом на останній день звітного періоду. Зазначається інформація про правочини та видатки, здійснені упродовж звітного періоду, навіть якщо вони стосувалися того самого об'єкта.",
        },
        {
          type: "paragraph",
          text: "І не забудьте: у разі суттєвої зміни у майновому стані — отримання доходу, придбання майна або здійснення видатку на суму, що перевищує **50 прожиткових мінімумів**, встановлених для працездатних осіб на 1 січня відповідного року, — суб'єкт зобов'язаний у **десятиденний строк** повідомити про це Національне агентство.",
        },
        {
          type: "paragraph",
          text: "Подавати повідомлення про зміни майнового стану зобов'язані лише службові особи, які займають **відповідальне та особливо відповідальне становище**, а також суб'єкти декларування на посадах, пов'язаних з високим рівнем корупційних ризиків.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** У звітному періоді суб'єкт декларування придбав транспортний засіб і далі, до завершення періоду, вчинив правочин, на підставі якого його право власності на це майно припинилося (наприклад, продав його). Обидва правочини мають бути відображені в декларації у розділі «Видатки і правочини», а сума, отримана від продажу, — у розділі «Доходи».",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Let's start from the end — who does not need to fill in this section. Note that the “Expenditures and transactions” section lists only the expenditures and transactions of the **declaration subject**; those of family members are not stated.",
        },
        {
          type: "paragraph",
          text: "Under **clause 10 of part 1 of Article 46** of the Law, the declaration states expenditures and all transactions made during the reporting period on the basis of which the declaration subject acquires or terminates ownership, possession or use of the objects listed in clauses 2–9 of part 1 of that Article. A declaration threshold is set for expenditures: if a single expenditure exceeds **50 subsistence minimums** as of 1 January of the reporting year, it must be reflected in the declaration. Expenditures made during the reporting period are not summed — the declaration states each separate expenditure that exceeds that limit.",
        },
        {
          type: "paragraph",
          text: "I draw special attention to the fact that it does not matter whether the object of the transaction is owned or held on another right by the declaration subject as of the last day of the reporting period. Information is stated about transactions and expenditures carried out during the reporting period, even if they concerned the same object.",
        },
        {
          type: "paragraph",
          text: "And don't forget: in the event of a significant change in the subject's financial situation — receiving income, acquiring property or making an expenditure exceeding **50 subsistence minimums** for able-bodied persons as of 1 January of the relevant year — the subject is obliged to notify the National Agency within **ten days**.",
        },
        {
          type: "paragraph",
          text: "Only officials holding a **responsible or especially responsible position**, as well as declaration subjects in positions associated with a high level of corruption risks, are obliged to submit notifications of changes in their financial situation.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** During the reporting period the declaration subject acquired a vehicle and then, before the end of the period, entered into a transaction that terminated their ownership of that property (for example, sold it). Both transactions must be reflected in the declaration in the “Expenditures and transactions” section, and the amount received from the sale — in the “Income” section.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Zacznijmy od końca — kto nie musi wypełniać tej sekcji. Zwracam uwagę, że w sekcji „Wydatki i czynności prawne” wskazuje się wyłącznie wydatki i czynności prawne **podmiotu deklarującego**; wydatków i czynności członków jego rodziny nie podaje się.",
        },
        {
          type: "paragraph",
          text: "Zgodnie z **pkt 10 ust. 1 art. 46** Ustawy w deklaracji podaje się wydatki oraz wszystkie czynności prawne dokonane w okresie sprawozdawczym, na podstawie których u podmiotu deklarującego powstaje lub ustaje prawo własności, posiadania lub użytkowania obiektów wymienionych w pkt 2–9 ust. 1 tego artykułu. Ustalono próg deklarowania dla wydatków: jeżeli pojedynczy wydatek przekracza **50 minimów egzystencji** według stanu na 1 stycznia roku sprawozdawczego, należy go wykazać w deklaracji. Wydatków dokonanych w okresie sprawozdawczym nie sumuje się — w deklaracji podaje się każdy odrębny wydatek, jeżeli przekracza on wskazany limit.",
        },
        {
          type: "paragraph",
          text: "Zwracam szczególną uwagę na to, że nie ma znaczenia, czy dany przedmiot czynności prawnej jest własnością lub innym prawem podmiotu deklarującego według stanu na ostatni dzień okresu sprawozdawczego. Podaje się informacje o czynnościach prawnych i wydatkach dokonanych w okresie sprawozdawczym, nawet jeśli dotyczyły tego samego obiektu.",
        },
        {
          type: "paragraph",
          text: "I nie zapomnij: w razie istotnej zmiany w stanie majątkowym — uzyskania dochodu, nabycia mienia lub dokonania wydatku na kwotę przekraczającą **50 minimów egzystencji** dla osób zdolnych do pracy według stanu na 1 stycznia danego roku — podmiot jest zobowiązany w **terminie dziesięciu dni** powiadomić o tym Narodową Agencję.",
        },
        {
          type: "paragraph",
          text: "Do składania powiadomień o zmianach stanu majątkowego zobowiązane są wyłącznie osoby urzędowe zajmujące **odpowiedzialne i szczególnie odpowiedzialne stanowisko**, a także podmioty deklarujące na stanowiskach związanych z wysokim poziomem ryzyka korupcyjnego.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** W okresie sprawozdawczym podmiot deklarujący nabył pojazd, a następnie, przed końcem okresu, dokonał czynności prawnej, na podstawie której jego prawo własności do tego mienia ustało (np. sprzedał je). Obie czynności należy wykazać w deklaracji w sekcji „Wydatki i czynności prawne”, a kwotę uzyskaną ze sprzedaży — w sekcji „Dochody”.",
        },
      ],
    },
  },
  {
    id: "vehicles",
    title: { uk: "Транспортні засоби", en: "Vehicles", pl: "Pojazdy" },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Транспортні засоби — це не лише автомобілі: це й автобуси, самохідні машини на шасі автомобілів, мотоцикли всіх типів, марок і моделей, причепи, напівпричепи, мотоколяски, інші прирівняні до них транспортні засоби та мопеди, сільськогосподарська техніка, водні та повітряні судна.",
        },
        {
          type: "paragraph",
          text: "На відміну від іншого цінного рухомого майна, відомості про транспортні засоби зазначаються **незалежно від їх вартості**.",
        },
        {
          type: "paragraph",
          text: "У декларації зазначається вартість транспортного засобу на дату його набуття у власність, володіння або користування. Нагадую, що відповідно до **ст. 334 Цивільного кодексу України** «право власності у набувача майна за договором виникає з моменту передання майна, якщо інше не встановлено договором або законом».",
        },
        {
          type: "paragraph",
          text: "Витрати на митне оформлення чи реєстрацію транспортного засобу в його вартість не включаються. Водночас, якщо такий видаток перевищує поріг декларування (**50 ПМ**) і був здійснений суб'єктом декларування у звітному періоді, він має бути відображений у розділі «Видатки та правочини».",
        },
        {
          type: "paragraph",
          text: "Якщо суб'єкт декларування користується транспортним засобом на підставі довіреності, а повна інформація про власника йому не відома, як відобразити відомості про власника? У довіреності зазначені дані володільця майна. Нагадую, що інформацію про власників транспортних засобів можна отримати у відкритому **Єдиному державному реєстрі МВС** щодо зареєстрованих транспортних засобів та їх власників.",
        },
        {
          type: "paragraph",
          text: "Якщо транспортний засіб перебуває на праві власності у суб'єкта декларування, він зазначається як об'єкт такого суб'єкта; я б рекомендувала також зазначити його як об'єкт, що перебуває у користуванні членів сім'ї, якщо вони хоча б час від часу ним користуються.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Суб'єкт декларування має декларувати навіть гумовий човен, якщо на ньому є двигун. Звертаю увагу: декларуючи катер, треба вказати в декларації і лафет для його транспортування. Також у цьому розділі вказуємо снігоходи, карти, трактори тощо.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Vehicles are not only cars: they also include buses, self-propelled machines built on car chassis, motorcycles of all types, makes and models, trailers, semi-trailers, motor sidecars, other vehicles equated to them and mopeds, agricultural machinery, and water and air craft.",
        },
        {
          type: "paragraph",
          text: "Unlike other valuable movable property, information about vehicles is stated **regardless of their value**.",
        },
        {
          type: "paragraph",
          text: "The declaration states the value of a vehicle as of the date it was acquired into ownership, possession or use. As a reminder, under **Article 334 of the Civil Code of Ukraine**, “the acquirer's ownership of property under a contract arises from the moment the property is transferred, unless otherwise established by the contract or law.”",
        },
        {
          type: "paragraph",
          text: "The costs of customs clearance or registration of a vehicle are not included in its value. At the same time, if such an expenditure exceeds the declaration threshold (**50 subsistence minimums**) and was made by the declaration subject during the reporting period, it must be reflected in the “Expenditures and transactions” section.",
        },
        {
          type: "paragraph",
          text: "If the declaration subject uses a vehicle under a power of attorney and does not know full information about the owner, how should the owner's details be reflected in the declaration? The power of attorney contains the details of the property's holder. As a reminder, information about vehicle owners can be obtained from the open **Unified State Register of the Ministry of Internal Affairs** regarding registered vehicles and their owners.",
        },
        {
          type: "paragraph",
          text: "If a vehicle is owned by the declaration subject, it is stated as that subject's object; I would also recommend stating it as an object used by family members if they use it at least from time to time.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** The declaration subject must declare even a rubber boat if it has an engine. Note that when declaring a motorboat, you must also state in the declaration the trailer for transporting it. This section also covers snowmobiles, go-karts, tractors and the like.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Pojazdy to nie tylko samochody: to także autobusy, maszyny samojezdne skonstruowane na podwoziach samochodów, motocykle wszystkich typów, marek i modeli, przyczepy, naczepy, motocykle z wózkiem bocznym, inne zrównane z nimi pojazdy oraz motorowery, technika rolnicza, jednostki wodne i powietrzne.",
        },
        {
          type: "paragraph",
          text: "W odróżnieniu od innego wartościowego mienia ruchomego informacje o pojazdach podaje się **niezależnie od ich wartości**.",
        },
        {
          type: "paragraph",
          text: "W deklaracji podaje się wartość pojazdu na dzień jego nabycia na własność, w posiadanie lub użytkowanie. Przypominam, że zgodnie z **art. 334 Kodeksu cywilnego Ukrainy** „prawo własności u nabywcy mienia na podstawie umowy powstaje z chwilą przekazania mienia, jeżeli umowa lub ustawa nie stanowi inaczej”.",
        },
        {
          type: "paragraph",
          text: "Koszty odprawy celnej lub rejestracji pojazdu nie są wliczane do jego wartości. Jednocześnie, jeżeli taki wydatek przekracza próg deklarowania (**50 minimów egzystencji**) i został poniesiony przez podmiot deklarujący w okresie sprawozdawczym, należy go wykazać w sekcji „Wydatki i czynności prawne”.",
        },
        {
          type: "paragraph",
          text: "Jeżeli podmiot deklarujący korzysta z pojazdu na podstawie pełnomocnictwa, a pełna informacja o właścicielu nie jest mu znana, jak wykazać w deklaracji dane właściciela? W pełnomocnictwie wskazane są dane posiadacza mienia. Przypominam, że informacje o właścicielach pojazdów można uzyskać w otwartym **Jednolitym Rejestrze Państwowym MSW** dotyczącym zarejestrowanych pojazdów i ich właścicieli.",
        },
        {
          type: "paragraph",
          text: "Jeżeli pojazd jest własnością podmiotu deklarującego, wskazuje się go jako obiekt tego podmiotu; zalecałabym również wskazać go jako obiekt użytkowany przez członków rodziny, jeżeli choćby od czasu do czasu z niego korzystają.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** Podmiot deklarujący musi zadeklarować nawet ponton, jeśli ma silnik. Zwracam uwagę, że deklarując motorówkę, należy wskazać w deklaracji także przyczepę do jej transportu. W tej sekcji wskazujemy również skutery śnieżne, gokarty, ciągniki itp.",
        },
      ],
    },
  },
  {
    id: "membership-organizations",
    title: {
      uk: "Членство в організаціях та їхніх органах",
      en: "Membership in organizations and their bodies",
      pl: "Członkostwo w organizacjach i ich organach",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Відповідно до **пункту 12 частини першої статті 46 Закону України «Про запобігання корупції»** у декларації зазначається інформація про членство суб'єкта декларування в громадських об'єднаннях, благодійних організаціях, саморегулівних чи самоврядних професійних об'єднаннях, а також про входження до керівних, ревізійних чи наглядових органів таких об'єднань (організацій).",
        },
        {
          type: "paragraph",
          text: "До об'єднань (організацій), членство в яких (членство в органах яких) слід відображати в декларації, належать:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "об'єднання, на які поширюється дія Закону України «Про громадські об'єднання», — громадські організації та громадські спілки зі статусом юридичної особи;",
            "громадські організації роботодавців та їх об'єднання (Закон України «Про організації роботодавців, їх об'єднання, права і гарантії їх діяльності»);",
            "благодійні організації (Закон України «Про благодійну діяльність та благодійні організації»);",
            "саморегулівні об'єднання — некомерційні об'єднання фізичних та юридичних осіб, які здійснюють професійну діяльність на певному ринку чи у певній сфері (зокрема об'єднання професійних учасників ринку цінних паперів та фондового ринку, адміністраторів недержавних пенсійних фондів, кредитних спілок, організації у сфері архітектурної діяльності, землеустрою, учасників ринку електричної енергії, оцінювачів, аудиторів, арбітражних керуючих тощо);",
            "самоврядні професійні об'єднання — об'єднання фізичних осіб, які здійснюють професійну діяльність (зокрема самоврядні об'єднання адвокатів — Національна асоціація адвокатів України, нотаріусів — Нотаріальна палата України, лікарів).",
          ],
        },
        {
          type: "paragraph",
          text: "У декларації **не** зазначається членство (членство в органах) у таких організаціях (об'єднаннях):",
        },
        {
          type: "list",
          items: [
            "політичні партії;",
            "релігійні організації;",
            "професійні спілки;",
            "об'єднання співвласників багатоквартирного будинку;",
            "асоціації органів місцевого самоврядування та їх добровільні об'єднання;",
            "об'єднання юридичних осіб приватного права, які не є громадськими об'єднаннями;",
            "органи суддівського та прокурорського самоврядування.",
          ],
        },
        {
          type: "paragraph",
          text: "Інформація про членство в організаціях (об'єднаннях) або їх органах зазначається станом на останній день звітного періоду (станом на **31 грудня** звітного року для щорічних декларацій). Якщо суб'єкт декларування був членом об'єднання або входив до складу його органів, але припинив членство (входження до органів) станом на останній день звітного року, інформація про це в декларації не зазначається.",
        },
        {
          type: "paragraph",
          text: "Якщо суб'єкт декларування є адвокатом, але право на здійснення адвокатської діяльності зупинено: відповідно до частини п'ятої статті 45 Закону України «Про адвокатуру та адвокатську діяльність», з моменту складення присяги кожен адвокат стає членом **Національної асоціації адвокатів України**. НААУ об'єднує всіх адвокатів України, тож її слід вважати самоврядним професійним об'єднанням адвокатів. Інформація про членство в такому об'єднанні або про входження до його керівних, ревізійних чи наглядових органів має бути відображена у декларації відповідно до п. 12 ч. 1 ст. 46 ЗУ «Про запобігання корупції».",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 1.** Суб'єкт декларування до обрання на посаду, яка займає відповідальне становище, був адвокатом; свідоцтво призупинив. У електронній декларації членство в **НААУ** треба вказувати.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Приклад 2.** Суб'єкт декларування був членом **ОСББ**. Це членство не потрібно вказувати в електронній декларації.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Under **clause 12 of part 1 of Article 46 of the Law of Ukraine “On Prevention of Corruption”**, the declaration states information about the declaration subject's membership in civic associations, charitable organizations, self-regulatory or self-governing professional associations, as well as being part of the governing, audit or supervisory bodies of such associations (organizations).",
        },
        {
          type: "paragraph",
          text: "Associations (organizations) membership in which (membership in whose bodies) must be reflected in the declaration include:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "associations covered by the Law of Ukraine “On Civic Associations” — civic organizations and civic unions with the status of a legal entity;",
            "civic organizations of employers and their associations (the Law of Ukraine “On Employers' Organizations, Their Associations, Rights and Guarantees of Their Activity”);",
            "charitable organizations (the Law of Ukraine “On Charitable Activity and Charitable Organizations”);",
            "self-regulatory associations — non-profit associations of individuals and legal entities engaged in professional activity in a particular market or field (in particular, associations of professional participants in the securities and stock markets, administrators of non-state pension funds, credit unions, organizations in architecture and land management, participants in Ukraine's electricity market, appraisers, auditors, insolvency practitioners, etc.);",
            "self-governing professional associations — associations of individuals engaged in professional activity (in particular, self-governing associations of lawyers — the Ukrainian National Bar Association, notaries — the Notarial Chamber of Ukraine, and physicians).",
          ],
        },
        {
          type: "paragraph",
          text: "The declaration does **not** state membership (membership in bodies) in the following organizations (associations):",
        },
        {
          type: "list",
          items: [
            "political parties;",
            "religious organizations;",
            "trade unions;",
            "homeowners' associations of an apartment building;",
            "associations of local self-government bodies and their voluntary associations;",
            "associations of private-law legal entities that are not civic associations;",
            "bodies of judicial and prosecutorial self-government.",
          ],
        },
        {
          type: "paragraph",
          text: "Information about membership in organizations (associations) or their bodies is stated as of the last day of the reporting period (as of **31 December** of the reporting year for annual declarations). If the declaration subject was a member of an association or was part of its bodies but ceased that membership (participation in bodies) as of the last day of the reporting year, this information is not stated in the declaration.",
        },
        {
          type: "paragraph",
          text: "If the declaration subject is a lawyer but the right to practise law has been suspended: under part 5 of Article 45 of the Law of Ukraine “On the Bar and Advocacy,” from the moment of taking the lawyer's oath every lawyer becomes a member of the **Ukrainian National Bar Association**. The UNBA unites all lawyers of Ukraine, so it should be considered a self-governing professional association of lawyers. Information about membership in such an association or about being part of its governing, audit or supervisory bodies must be reflected in the declaration in accordance with clause 12 of part 1 of Article 46 of the Law “On Prevention of Corruption.”",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 1.** Before being elected to a position holding a responsible status, the declaration subject was a lawyer and suspended their certificate. Membership in the **UNBA** must be stated in the electronic declaration.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Example 2.** The declaration subject was a member of a **homeowners' association (HOA)**. This membership does not need to be stated in the electronic declaration.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Zgodnie z **pkt 12 ust. 1 art. 46 Ustawy Ukrainy „O zapobieganiu korupcji”** w deklaracji podaje się informacje o członkostwie podmiotu deklarującego w stowarzyszeniach społecznych, organizacjach charytatywnych, samoregulacyjnych lub samorządnych zrzeszeniach zawodowych, a także o wejściu do organów kierowniczych, rewizyjnych lub nadzorczych takich zrzeszeń (organizacji).",
        },
        {
          type: "paragraph",
          text: "Do zrzeszeń (organizacji), których członkostwo (członkostwo w organach) należy wykazać w deklaracji, należą:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "zrzeszenia objęte Ustawą Ukrainy „O stowarzyszeniach społecznych” — organizacje społeczne i związki społeczne posiadające status osoby prawnej;",
            "organizacje społeczne pracodawców i ich zrzeszenia (Ustawa Ukrainy „O organizacjach pracodawców, ich zrzeszeniach, prawach i gwarancjach ich działalności”);",
            "organizacje charytatywne (Ustawa Ukrainy „O działalności charytatywnej i organizacjach charytatywnych”);",
            "zrzeszenia samoregulacyjne — niekomercyjne zrzeszenia osób fizycznych i prawnych prowadzących działalność zawodową na określonym rynku lub w określonej sferze (w szczególności zrzeszenia profesjonalnych uczestników rynku papierów wartościowych i rynku giełdowego, administratorów niepaństwowych funduszy emerytalnych, spółdzielczych kas oszczędnościowo-kredytowych, organizacje w sferze działalności architektonicznej, gospodarki gruntami, uczestników rynku energii elektrycznej Ukrainy, rzeczoznawców, audytorów, zarządców restrukturyzacyjnych itp.);",
            "samorządne zrzeszenia zawodowe — zrzeszenia osób fizycznych prowadzących działalność zawodową (w szczególności samorządne zrzeszenia adwokatów — Krajowe Stowarzyszenie Adwokatów Ukrainy, notariuszy — Izba Notarialna Ukrainy, lekarzy).",
          ],
        },
        {
          type: "paragraph",
          text: "W deklaracji **nie** podaje się członkostwa (członkostwa w organach) w następujących organizacjach (zrzeszeniach):",
        },
        {
          type: "list",
          items: [
            "partie polityczne;",
            "organizacje religijne;",
            "związki zawodowe;",
            "wspólnoty mieszkaniowe budynku wielorodzinnego;",
            "asocjacje organów samorządu terytorialnego i ich dobrowolne zrzeszenia;",
            "zrzeszenia osób prawnych prawa prywatnego, które nie są stowarzyszeniami społecznymi;",
            "organy samorządu sędziowskiego i prokuratorskiego.",
          ],
        },
        {
          type: "paragraph",
          text: "Informację o członkostwie w organizacjach (zrzeszeniach) lub ich organach podaje się według stanu na ostatni dzień okresu sprawozdawczego (na **31 grudnia** roku sprawozdawczego dla deklaracji rocznych). Jeżeli podmiot deklarujący był członkiem zrzeszenia lub wchodził w skład jego organów, ale zakończył członkostwo (udział w organach) na ostatni dzień roku sprawozdawczego, informacji tej nie podaje się w deklaracji.",
        },
        {
          type: "paragraph",
          text: "Jeżeli podmiot deklarujący jest adwokatem, ale prawo do wykonywania działalności adwokackiej zostało zawieszone: zgodnie z ust. 5 art. 45 Ustawy Ukrainy „O adwokaturze i działalności adwokackiej” od chwili złożenia przysięgi każdy adwokat staje się członkiem **Krajowego Stowarzyszenia Adwokatów Ukrainy**. KSAU zrzesza wszystkich adwokatów Ukrainy, dlatego należy je uznać za samorządne zrzeszenie zawodowe adwokatów. Informacja o członkostwie w takim zrzeszeniu lub o wejściu do jego organów kierowniczych, rewizyjnych czy nadzorczych musi być wykazana w deklaracji zgodnie z pkt 12 ust. 1 art. 46 Ustawy „O zapobieganiu korupcji”.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 1.** Przed wyborem na stanowisko zajmujące odpowiedzialny status podmiot deklarujący był adwokatem i zawiesił świadectwo. Członkostwo w **KSAU** należy wskazać w deklaracji elektronicznej.",
        },
        {
          type: "callout",
          variant: "example",
          text: "**Przykład 2.** Podmiot deklarujący był członkiem **wspólnoty mieszkaniowej**. Tego członkostwa nie trzeba wskazywać w deklaracji elektronicznej.",
        },
      ],
    },
  },
  {
    id: "secondary-employment",
    title: {
      uk: "Робота за сумісництвом",
      en: "Secondary (concurrent) employment",
      pl: "Praca dodatkowa (łączenie stanowisk)",
    },
    body: {
      uk: [
        {
          type: "paragraph",
          text: "Одразу зауважу: у декларації зазначається лише робота, яку виконує або виконував **за сумісництвом** сам суб'єкт декларування. Члени сім'ї у цьому розділі не вказуються.",
        },
        {
          type: "paragraph",
          text: "Відповідно до **пункту 11 частини першої статті 46** Закону, у декларації зазначаються відомості про посаду чи роботу, що виконується або виконувалася за сумісництвом. Це означає, що зайняття посади чи робота за сумісництвом відображається в декларації, якщо їх зайняття (виконання) розпочалося або тривало під час звітного періоду — незалежно від тривалості.",
        },
        {
          type: "paragraph",
          text: "Отже, якщо у звітному періоді суб'єкт декларування займав посаду або упродовж будь-якого часу здійснював роботу за сумісництвом, і при цьому станом на останній день періоду він таку посаду вже не займає (роботу не здійснює), — така посада (робота) все одно має бути відображена в декларації. Зазначаються дані про займану посаду чи роботу (оплачувану чи ні), що виконується за договором (контрактом), та найменування юридичної чи фізичної особи, в якій особа працює або працювала за сумісництвом.",
        },
        {
          type: "callout",
          variant: "note",
          text: "**Зверніть увагу:** посада чи робота за сумісництвом декларується незалежно від того, чи була вона оплачуваною.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Right away I'll note: the declaration states only the work that the declaration subject **performs or performed as secondary employment**. Family members are not listed in this section.",
        },
        {
          type: "paragraph",
          text: "Under **clause 11 of part 1 of Article 46** of the Law, the declaration states information about a position or work performed or that was performed as secondary employment. This means that holding a position or working as secondary employment is reflected in the declaration if it started or continued during the reporting period — regardless of its duration.",
        },
        {
          type: "paragraph",
          text: "So, if during the reporting period the declaration subject held a position or, for any length of time, performed work as secondary employment, and as of the last day of the period no longer holds that position (does not perform the work), such a position (work) must still be reflected in the declaration. The declaration states data about the position or work held (paid or not) performed under a contract, and the name of the legal entity or individual for whom the person works or worked as secondary employment.",
        },
        {
          type: "callout",
          variant: "note",
          text: "**Please note:** a position or work as secondary employment is declared regardless of whether it was paid.",
        },
      ],
      pl: [
        {
          type: "paragraph",
          text: "Od razu zaznaczę: w deklaracji podaje się wyłącznie pracę, którą podmiot deklarujący **wykonuje lub wykonywał w ramach pracy dodatkowej**. Członków rodziny w tej sekcji nie wskazuje się.",
        },
        {
          type: "paragraph",
          text: "Zgodnie z **pkt 11 ust. 1 art. 46** Ustawy w deklaracji podaje się informacje o stanowisku lub pracy wykonywanej lub wykonywanej w ramach pracy dodatkowej. Oznacza to, że zajmowanie stanowiska lub praca dodatkowa jest wykazywana w deklaracji, jeżeli jej podjęcie (wykonywanie) rozpoczęło się lub trwało w okresie sprawozdawczym — niezależnie od czasu trwania.",
        },
        {
          type: "paragraph",
          text: "Zatem jeżeli w okresie sprawozdawczym podmiot deklarujący zajmował stanowisko lub przez dowolny czas wykonywał pracę dodatkową, a przy tym na ostatni dzień okresu już tego stanowiska nie zajmuje (pracy nie wykonuje), takie stanowisko (praca) i tak musi być wykazane w deklaracji. Podaje się dane o zajmowanym stanowisku lub pracy (płatnej lub nie) wykonywanej na podstawie umowy (kontraktu) oraz nazwę osoby prawnej lub fizycznej, u której osoba pracuje lub pracowała dodatkowo.",
        },
        {
          type: "callout",
          variant: "note",
          text: "**Zwróć uwagę:** stanowisko lub praca dodatkowa jest deklarowana niezależnie od tego, czy była płatna.",
        },
      ],
    },
  },
]

export function getDeclarationTips(): Tip[] {
  return declarationTips
}
