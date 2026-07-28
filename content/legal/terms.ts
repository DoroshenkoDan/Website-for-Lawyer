import type { LegalDocument } from "@/types/legal"

export const terms: LegalDocument = {
  id: "terms",
  sections: [
    {
      id: "general",
      title: {
        uk: "Загальні положення",
        en: "General provisions",
        pl: "Postanowienia ogólne",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Цей сайт належить адвокату Регіні Гусейновій, яка здійснює адвокатську діяльність відповідно до Закону України «Про адвокатуру та адвокатську діяльність» і є членом Ради адвокатів Київської області.",
          },
          {
            type: "paragraph",
            text: "Ці Умови визначають правила користування сайтом. Відкриваючи будь-яку сторінку, ви приймаєте ці Умови. Якщо ви з ними не згодні — не користуйтеся сайтом.",
          },
          {
            type: "paragraph",
            text: "Сайт доступний українською, англійською та польською мовами. У разі розбіжностей між версіями пріоритет має **україномовна версія**.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "This website belongs to attorney Regina Guseinova, who practises law under the Law of Ukraine “On the Bar and Practice of Law” and is a member of the Bar Council of the Kyiv Region.",
          },
          {
            type: "paragraph",
            text: "These Terms set out the rules for using the website. By opening any page you accept them. If you do not agree with them, do not use the website.",
          },
          {
            type: "paragraph",
            text: "The website is available in Ukrainian, English and Polish. If the versions differ, the **Ukrainian version prevails**.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Ta strona należy do adwokat Reginy Gusejnowej, która wykonuje zawód adwokata zgodnie z ustawą Ukrainy „O adwokaturze i działalności adwokackiej” i jest członkiem Rady Adwokackiej Obwodu Kijowskiego.",
          },
          {
            type: "paragraph",
            text: "Niniejszy Regulamin określa zasady korzystania ze strony. Otwierając dowolną podstronę, akceptujesz te zasady. Jeśli się z nimi nie zgadzasz — nie korzystaj ze strony.",
          },
          {
            type: "paragraph",
            text: "Strona jest dostępna w językach ukraińskim, angielskim i polskim. W razie rozbieżności między wersjami rozstrzygająca jest **wersja ukraińska**.",
          },
        ],
      },
    },
    {
      id: "information-only",
      title: {
        uk: "Матеріали сайту не є правовою консультацією",
        en: "The content is not legal advice",
        pl: "Treści na stronie nie są poradą prawną",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Статті, новини, описи практик, коментарі для медіа та матеріали семінарів опубліковані з інформаційною метою. Вони описують загальний підхід до типових ситуацій і не враховують обставин вашої справи.",
          },
          {
            type: "paragraph",
            text: "Правова консультація надається лише персонально — після ознайомлення з документами та фактами. Не приймайте рішень і не пропускайте процесуальних строків, спираючись тільки на матеріали сайту.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Законодавство і судова практика змінюються. Матеріал, актуальний на дату публікації, згодом може застаріти. Дата публікації зазначена в кожній статті.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "Articles, news, practice descriptions, media comments and seminar materials are published for information purposes. They describe a general approach to typical situations and do not account for the circumstances of your case.",
          },
          {
            type: "paragraph",
            text: "Legal advice is given individually only — after reviewing your documents and facts. Do not make decisions or let procedural deadlines pass based on website content alone.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Legislation and case law change. Material that was accurate on its publication date may later become outdated. Every article shows its publication date.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Artykuły, aktualności, opisy praktyk, komentarze dla mediów i materiały seminaryjne publikowane są w celach informacyjnych. Opisują ogólne podejście do typowych sytuacji i nie uwzględniają okoliczności Twojej sprawy.",
          },
          {
            type: "paragraph",
            text: "Porada prawna udzielana jest wyłącznie indywidualnie — po zapoznaniu się z dokumentami i faktami. Nie podejmuj decyzji ani nie dopuszczaj do upływu terminów procesowych, opierając się wyłącznie na treściach ze strony.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Przepisy i orzecznictwo się zmieniają. Materiał aktualny w dniu publikacji może z czasem stać się nieaktualny. Data publikacji jest podana przy każdym artykule.",
          },
        ],
      },
    },
    {
      id: "engagement",
      title: {
        uk: "Звернення через сайт і момент укладення договору",
        en: "Enquiries and when representation begins",
        pl: "Kontakt przez stronę a moment zawarcia umowy",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Надсилання повідомлення через форму зворотного зв'язку або лист на електронну пошту **не створює відносин «адвокат — клієнт»** і не зобов'язує адвоката прийняти доручення.",
          },
          {
            type: "paragraph",
            text: "Правова допомога надається на підставі письмового договору про надання правової допомоги. До його підписання адвокат не представляє ваші інтереси, не відстежує строки у вашій справі та не вчиняє процесуальних дій.",
          },
          {
            type: "paragraph",
            text: "Адвокат має право відмовитися від прийняття доручення — зокрема через конфлікт інтересів, брак ресурсу або невідповідність справи спеціалізації.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Не надсилайте через форму сканів справи, персональних даних третіх осіб і документів з обмеженим доступом. Для передавання таких матеріалів домовтеся про безпечний спосіб під час першої розмови.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "Sending a message through the contact form or by email **does not create an attorney–client relationship** and does not oblige the attorney to accept the matter.",
          },
          {
            type: "paragraph",
            text: "Legal assistance is provided under a written legal services agreement. Until it is signed, the attorney does not represent you, does not track deadlines in your case and takes no procedural steps.",
          },
          {
            type: "paragraph",
            text: "The attorney may decline a matter — in particular because of a conflict of interest, capacity, or because the matter falls outside the practice areas.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Do not send case files, third parties' personal data or restricted documents through the form. Agree on a secure channel for such materials during the first conversation.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Wysłanie wiadomości przez formularz kontaktowy lub e-mailem **nie tworzy relacji adwokat — klient** i nie zobowiązuje adwokata do przyjęcia sprawy.",
          },
          {
            type: "paragraph",
            text: "Pomoc prawna świadczona jest na podstawie pisemnej umowy o świadczenie pomocy prawnej. Do czasu jej podpisania adwokat nie reprezentuje Twoich interesów, nie pilnuje terminów w Twojej sprawie i nie podejmuje czynności procesowych.",
          },
          {
            type: "paragraph",
            text: "Adwokat ma prawo odmówić przyjęcia sprawy — w szczególności z powodu konfliktu interesów, braku możliwości czasowych lub niezgodności sprawy ze specjalizacją.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Nie przesyłaj przez formularz skanów akt, danych osobowych osób trzecich ani dokumentów o ograniczonym dostępie. Bezpieczny sposób przekazania takich materiałów ustal podczas pierwszej rozmowy.",
          },
        ],
      },
    },
    {
      id: "no-guarantees",
      title: {
        uk: "Відсутність гарантій результату",
        en: "No guarantee of outcome",
        pl: "Brak gwarancji rezultatu",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Описи справ, нагороди та відгуки на сайті ілюструють досвід адвоката. Вони не є обіцянкою досягти такого самого результату у вашій справі: результат залежить від доказів, поведінки інших учасників і позиції суду.",
          },
          {
            type: "paragraph",
            text: "Матеріали сайту не є рекламою у розумінні Правил адвокатської етики, не містять оцінних тверджень про перевагу над іншими адвокатами і не є публічною офертою.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "Case descriptions, awards and testimonials illustrate the attorney's experience. They are not a promise of the same outcome in your case: the outcome depends on the evidence, the conduct of other participants and the court's position.",
          },
          {
            type: "paragraph",
            text: "Website content is not advertising within the meaning of the Rules of Attorney Ethics, contains no claims of superiority over other attorneys, and is not a public offer.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Opisy spraw, nagrody i opinie na stronie ilustrują doświadczenie adwokata. Nie są obietnicą osiągnięcia takiego samego rezultatu w Twojej sprawie: wynik zależy od dowodów, postawy pozostałych uczestników i stanowiska sądu.",
          },
          {
            type: "paragraph",
            text: "Treści strony nie stanowią reklamy w rozumieniu Zasad etyki adwokackiej, nie zawierają twierdzeń o przewadze nad innymi adwokatami i nie są ofertą publiczną.",
          },
        ],
      },
    },
    {
      id: "intellectual-property",
      title: {
        uk: "Інтелектуальна власність і цитування",
        en: "Intellectual property and citation",
        pl: "Własność intelektualna i cytowanie",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Тексти, авторські програми семінарів, лекційні матеріали, фотографії, дизайн і структура сайту охороняються авторським правом.",
          },
          { type: "subheading", text: "Що дозволено без окремого дозволу" },
          {
            type: "list",
            items: [
              "цитувати фрагменти публікацій з обов'язковим зазначенням автора та активним посиланням на сторінку-джерело;",
              "зберігати та роздруковувати матеріали для особистого некомерційного використання;",
              "ділитися посиланням на сторінку в соціальних мережах і месенджерах.",
            ],
          },
          { type: "subheading", text: "Що потребує письмової згоди" },
          {
            type: "list",
            items: [
              "повне або часткове передрукування статей на інших ресурсах;",
              "використання матеріалів у навчальних, комерційних чи рекламних продуктах;",
              "використання фотографій, зображень нагород і елементів фірмового стилю;",
              "переклад матеріалів та їх подальше поширення.",
            ],
          },
          {
            type: "paragraph",
            text: "Запит на використання надсилайте на електронну пошту, зазначену в розділі «Контакти».",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "Texts, original seminar programmes, lecture materials, photographs, and the design and structure of the website are protected by copyright.",
          },
          { type: "subheading", text: "Allowed without separate permission" },
          {
            type: "list",
            items: [
              "quoting excerpts from publications with attribution and an active link to the source page;",
              "saving and printing materials for personal, non-commercial use;",
              "sharing a link to a page on social networks and messengers.",
            ],
          },
          { type: "subheading", text: "Requires written consent" },
          {
            type: "list",
            items: [
              "republishing articles in full or in part on other resources;",
              "using materials in educational, commercial or advertising products;",
              "using photographs, images of awards and brand identity elements;",
              "translating materials and distributing the translations.",
            ],
          },
          {
            type: "paragraph",
            text: "Send permission requests to the email address listed under “Contacts”.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Teksty, autorskie programy seminariów, materiały wykładowe, zdjęcia oraz projekt i struktura strony są chronione prawem autorskim.",
          },
          { type: "subheading", text: "Co jest dozwolone bez odrębnej zgody" },
          {
            type: "list",
            items: [
              "cytowanie fragmentów publikacji z obowiązkowym podaniem autora i aktywnym linkiem do strony źródłowej;",
              "zapisywanie i drukowanie materiałów do użytku osobistego, niekomercyjnego;",
              "udostępnianie linku do strony w mediach społecznościowych i komunikatorach.",
            ],
          },
          { type: "subheading", text: "Co wymaga pisemnej zgody" },
          {
            type: "list",
            items: [
              "przedruk artykułów w całości lub w części na innych zasobach;",
              "wykorzystanie materiałów w produktach edukacyjnych, komercyjnych lub reklamowych;",
              "wykorzystanie zdjęć, wizerunków nagród i elementów identyfikacji wizualnej;",
              "tłumaczenie materiałów i ich dalsze rozpowszechnianie.",
            ],
          },
          {
            type: "paragraph",
            text: "Prośby o zgodę prosimy kierować na adres e-mail wskazany w sekcji „Kontakt”.",
          },
        ],
      },
    },
    {
      id: "third-party",
      title: {
        uk: "Матеріали третіх сторін і зовнішні посилання",
        en: "Third-party content and external links",
        pl: "Materiały osób trzecich i linki zewnętrzne",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "У розділі «Медіа» зібрані згадки в телепрограмах, на радіо та в друкованих виданнях. Права на ці матеріали належать відповідним редакціям; вони наведені як посилання або короткі цитати із зазначенням джерела.",
          },
          {
            type: "paragraph",
            text: "Відео відтворюються з YouTube і завантажуються лише після того, як ви натиснете кнопку відтворення. З цього моменту діють умови та політика конфіденційності YouTube.",
          },
          {
            type: "paragraph",
            text: "Сайт містить посилання на зовнішні ресурси — судові реєстри, законодавчі бази, сайти партнерів. Адвокат не контролює їхній зміст і не відповідає за нього.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The “Media” section collects appearances on television, radio and in print. Rights to those materials belong to the respective editorial offices; they appear here as links or short quotations with the source named.",
          },
          {
            type: "paragraph",
            text: "Videos play from YouTube and load only after you press play. From that moment YouTube's terms and privacy policy apply.",
          },
          {
            type: "paragraph",
            text: "The website links to external resources — court registers, legislative databases, partner websites. The attorney does not control their content and is not responsible for it.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "W sekcji „Media” zebrano wystąpienia w telewizji, radiu i prasie. Prawa do tych materiałów należą do odpowiednich redakcji; są one prezentowane jako linki lub krótkie cytaty ze wskazaniem źródła.",
          },
          {
            type: "paragraph",
            text: "Filmy odtwarzane są z YouTube i ładują się dopiero po naciśnięciu przycisku odtwarzania. Od tego momentu obowiązują regulamin i polityka prywatności YouTube.",
          },
          {
            type: "paragraph",
            text: "Strona zawiera linki do zasobów zewnętrznych — rejestrów sądowych, baz aktów prawnych, stron partnerów. Adwokat nie kontroluje ich treści i nie ponosi za nią odpowiedzialności.",
          },
        ],
      },
    },
    {
      id: "acceptable-use",
      title: {
        uk: "Правила користування сайтом",
        en: "Acceptable use",
        pl: "Zasady korzystania ze strony",
      },
      body: {
        uk: [
          { type: "paragraph", text: "Користуючись сайтом, ви зобов'язуєтеся не:" },
          {
            type: "list",
            items: [
              "надсилати через форму рекламні розсилки, спам чи пропозиції послуг;",
              "вказувати чужі контактні дані або видавати себе за іншу особу;",
              "автоматизовано збирати вміст сайту, створювати надмірне навантаження на сервер;",
              "намагатися отримати неавторизований доступ до сайту, поштової скриньки чи адміністративної панелі;",
              "поширювати шкідливий код.",
            ],
          },
          {
            type: "paragraph",
            text: "Форма захищена технічними засобами проти автоматичних надсилань. У разі порушення цих правил доступ до сайту може бути обмежено, а звернення — залишено без відповіді.",
          },
        ],
        en: [
          { type: "paragraph", text: "When using the website, you agree not to:" },
          {
            type: "list",
            items: [
              "send marketing mailings, spam or service offers through the form;",
              "provide other people's contact details or impersonate another person;",
              "scrape the website automatically or place excessive load on the server;",
              "attempt unauthorised access to the website, the mailbox or the admin panel;",
              "distribute malicious code.",
            ],
          },
          {
            type: "paragraph",
            text: "The form is protected against automated submissions. If these rules are broken, access to the website may be restricted and the enquiry left unanswered.",
          },
        ],
        pl: [
          { type: "paragraph", text: "Korzystając ze strony, zobowiązujesz się nie:" },
          {
            type: "list",
            items: [
              "wysyłać przez formularz mailingów reklamowych, spamu ani ofert usług;",
              "podawać cudzych danych kontaktowych ani podszywać się pod inną osobę;",
              "automatycznie pobierać treści strony ani nadmiernie obciążać serwera;",
              "próbować uzyskać nieautoryzowany dostęp do strony, skrzynki pocztowej lub panelu administracyjnego;",
              "rozpowszechniać szkodliwego kodu.",
            ],
          },
          {
            type: "paragraph",
            text: "Formularz jest zabezpieczony przed automatycznymi wysyłkami. W razie naruszenia tych zasad dostęp do strony może zostać ograniczony, a zapytanie pozostawione bez odpowiedzi.",
          },
        ],
      },
    },
    {
      id: "availability",
      title: {
        uk: "Доступність сайту та обмеження відповідальності",
        en: "Availability and limitation of liability",
        pl: "Dostępność strony i ograniczenie odpowiedzialności",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Сайт надається «як є». Ми не гарантуємо безперервної роботи: можливі технічні перерви, оновлення та збої на боці хостинг-провайдера чи каналів зв'язку.",
          },
          {
            type: "paragraph",
            text: "Адвокат не відповідає за збитки, що виникли внаслідок використання або неможливості використання сайту, зокрема за рішення, ухвалені на підставі опублікованих матеріалів без персональної консультації.",
          },
          {
            type: "paragraph",
            text: "Це обмеження не поширюється на випадки умисних дій та на відповідальність, яку не можна обмежити за законом.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The website is provided “as is”. We do not guarantee uninterrupted operation: technical breaks, updates and failures on the side of the hosting provider or communication channels are possible.",
          },
          {
            type: "paragraph",
            text: "The attorney is not liable for losses arising from the use of, or inability to use, the website — in particular for decisions taken on the basis of published materials without an individual consultation.",
          },
          {
            type: "paragraph",
            text: "This limitation does not apply to intentional acts or to liability that cannot be limited by law.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Strona udostępniana jest „w stanie, w jakim jest”. Nie gwarantujemy nieprzerwanego działania: możliwe są przerwy techniczne, aktualizacje i awarie po stronie dostawcy hostingu lub łączy.",
          },
          {
            type: "paragraph",
            text: "Adwokat nie odpowiada za szkody powstałe wskutek korzystania lub niemożności korzystania ze strony, w szczególności za decyzje podjęte na podstawie opublikowanych materiałów bez indywidualnej konsultacji.",
          },
          {
            type: "paragraph",
            text: "Ograniczenie to nie dotyczy działań umyślnych ani odpowiedzialności, której nie można ograniczyć na mocy prawa.",
          },
        ],
      },
    },
    {
      id: "changes",
      title: {
        uk: "Зміни до Умов",
        en: "Changes to these Terms",
        pl: "Zmiany Regulaminu",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Умови можуть оновлюватися — наприклад, після зміни законодавства або появи нових розділів сайту. Чинною є та редакція, яка опублікована на цій сторінці.",
          },
          {
            type: "paragraph",
            text: "Подальше користування сайтом після оновлення означає прийняття нової редакції.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "These Terms may be updated — for example, after a change in legislation or when new sections appear on the website. The version published on this page is the one in force.",
          },
          {
            type: "paragraph",
            text: "Continued use of the website after an update means you accept the new version.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Regulamin może być aktualizowany — na przykład po zmianie przepisów lub po dodaniu nowych sekcji strony. Obowiązuje ta wersja, która jest opublikowana na tej stronie.",
          },
          {
            type: "paragraph",
            text: "Dalsze korzystanie ze strony po aktualizacji oznacza akceptację nowej wersji.",
          },
        ],
      },
    },
    {
      id: "governing-law",
      title: {
        uk: "Застосовне право та вирішення спорів",
        en: "Governing law and disputes",
        pl: "Prawo właściwe i rozstrzyganie sporów",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "До цих Умов застосовується право України. Спори, не врегульовані переговорами, розглядаються судами України за встановленою підсудністю.",
          },
          {
            type: "paragraph",
            text: "Якщо ви є споживачем із держави — члена Європейського Союзу, ви зберігаєте захист, наданий імперативними нормами права країни вашого постійного проживання.",
          },
          {
            type: "paragraph",
            text: "Скарги на дії адвоката розглядає кваліфікаційно-дисциплінарна комісія адвокатури за адресою робочого місця адвоката.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "These Terms are governed by the law of Ukraine. Disputes not settled through negotiation are heard by the courts of Ukraine under the applicable rules of jurisdiction.",
          },
          {
            type: "paragraph",
            text: "If you are a consumer resident in an EU member state, you keep the protection granted by the mandatory rules of your country of habitual residence.",
          },
          {
            type: "paragraph",
            text: "Complaints about an attorney's conduct are considered by the qualification and disciplinary commission of the bar at the attorney's registered place of practice.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Do niniejszego Regulaminu stosuje się prawo Ukrainy. Spory nierozwiązane w drodze negocjacji rozpoznają sądy Ukrainy zgodnie z właściwością.",
          },
          {
            type: "paragraph",
            text: "Jeżeli jesteś konsumentem z państwa członkowskiego Unii Europejskiej, zachowujesz ochronę wynikającą z bezwzględnie obowiązujących przepisów kraju Twojego zwykłego pobytu.",
          },
          {
            type: "paragraph",
            text: "Skargi na czynności adwokata rozpatruje komisja kwalifikacyjno-dyscyplinarna adwokatury właściwa dla miejsca wykonywania zawodu.",
          },
        ],
      },
    },
  ],
}
