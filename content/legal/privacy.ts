import type { LegalDocument } from "@/types/legal"

export const privacy: LegalDocument = {
  id: "privacy",
  sections: [
    {
      id: "controller",
      title: {
        uk: "Хто обробляє ваші дані",
        en: "Who processes your data",
        pl: "Kto przetwarza Twoje dane",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Володільцем персональних даних, зібраних через цей сайт, є адвокат Регіна Гусейнова.",
          },
          {
            type: "paragraph",
            text: "Обробка здійснюється відповідно до Закону України «Про захист персональних даних», Закону України «Про адвокатуру та адвокатську діяльність», а для відвідувачів з Європейського Союзу — також відповідно до Загального регламенту про захист даних (GDPR).",
          },
          {
            type: "paragraph",
            text: "Ця Політика стосується лише сайту. Обробка даних клієнтів у межах договору про надання правової допомоги регулюється самим договором і законодавством про адвокатуру.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The controller of personal data collected through this website is attorney Regina Guseinova.",
          },
          {
            type: "paragraph",
            text: "Processing is carried out under the Law of Ukraine “On Personal Data Protection” and the Law of Ukraine “On the Bar and Practice of Law”, and — for visitors from the European Union — under the General Data Protection Regulation (GDPR).",
          },
          {
            type: "paragraph",
            text: "This Policy covers the website only. Processing of client data under a legal services agreement is governed by that agreement and by the legislation on the bar.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Administratorem danych osobowych zbieranych za pośrednictwem tej strony jest adwokat Regina Gusejnowa.",
          },
          {
            type: "paragraph",
            text: "Przetwarzanie odbywa się zgodnie z ustawą Ukrainy „O ochronie danych osobowych” i ustawą Ukrainy „O adwokaturze i działalności adwokackiej”, a wobec odwiedzających z Unii Europejskiej — również zgodnie z RODO.",
          },
          {
            type: "paragraph",
            text: "Niniejsza Polityka dotyczy wyłącznie strony internetowej. Przetwarzanie danych klientów w ramach umowy o świadczenie pomocy prawnej reguluje sama umowa oraz przepisy o adwokaturze.",
          },
        ],
      },
    },
    {
      id: "data-collected",
      title: {
        uk: "Які дані ми отримуємо",
        en: "What data we receive",
        pl: "Jakie dane otrzymujemy",
      },
      body: {
        uk: [
          { type: "subheading", text: "Дані, які ви надаєте самі" },
          {
            type: "paragraph",
            text: "Через форму зворотного зв'язку: ім'я, електронна пошта, телефон (необов'язково), текст повідомлення та мова інтерфейсу. Обов'язкові лише ім'я та електронна пошта — без них ми не зможемо відповісти.",
          },
          {
            type: "paragraph",
            text: "Якщо ви пишете напряму на пошту або телефонуєте, ми отримуємо ті дані, які ви повідомляєте у зверненні.",
          },
          { type: "subheading", text: "Технічні дані" },
          {
            type: "paragraph",
            text: "Сервер хостинг-провайдера веде стандартні журнали доступу: IP-адреса, дата і час запиту, адреса сторінки, тип браузера. Ці записи потрібні для роботи та безпеки сайту.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Сайт не використовує систем веб-аналітики, рекламних пікселів і трекерів соціальних мереж. Ми не будуємо профілів відвідувачів і не приймаємо рішень щодо вас автоматизовано.",
          },
        ],
        en: [
          { type: "subheading", text: "Data you provide yourself" },
          {
            type: "paragraph",
            text: "Through the contact form: name, email, phone (optional), the message text and the interface language. Only the name and email are required — without them we cannot reply.",
          },
          {
            type: "paragraph",
            text: "If you write to the mailbox or call directly, we receive whatever data you include in your enquiry.",
          },
          { type: "subheading", text: "Technical data" },
          {
            type: "paragraph",
            text: "The hosting provider's server keeps standard access logs: IP address, date and time of the request, page address, browser type. These records are needed to run and secure the website.",
          },
          {
            type: "callout",
            variant: "note",
            text: "The website uses no web analytics, advertising pixels or social network trackers. We do not build visitor profiles and make no automated decisions about you.",
          },
        ],
        pl: [
          { type: "subheading", text: "Dane, które podajesz samodzielnie" },
          {
            type: "paragraph",
            text: "Przez formularz kontaktowy: imię, adres e-mail, telefon (opcjonalnie), treść wiadomości i język interfejsu. Obowiązkowe są tylko imię i e-mail — bez nich nie będziemy mogli odpowiedzieć.",
          },
          {
            type: "paragraph",
            text: "Jeśli piszesz bezpośrednio na adres e-mail lub dzwonisz, otrzymujemy te dane, które podajesz w zgłoszeniu.",
          },
          { type: "subheading", text: "Dane techniczne" },
          {
            type: "paragraph",
            text: "Serwer dostawcy hostingu prowadzi standardowe dzienniki dostępu: adres IP, data i godzina zapytania, adres strony, typ przeglądarki. Zapisy te są niezbędne do działania i bezpieczeństwa strony.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Strona nie korzysta z systemów analityki internetowej, pikseli reklamowych ani trackerów serwisów społecznościowych. Nie tworzymy profili odwiedzających i nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany.",
          },
        ],
      },
    },
    {
      id: "purposes",
      title: {
        uk: "Мета і правові підстави обробки",
        en: "Purposes and legal bases",
        pl: "Cele i podstawy prawne przetwarzania",
      },
      body: {
        uk: [
          {
            type: "list",
            items: [
              "**Відповідь на звернення** — підстава: ваша згода, надана позначкою у формі, та вжиття заходів до укладення договору за вашим запитом.",
              "**Оцінка можливості прийняти доручення**, зокрема перевірка на конфлікт інтересів — підстава: законний інтерес адвоката та вимоги Правил адвокатської етики.",
              "**Робота і безпека сайту**, захист від спаму та автоматичних розсилок — підстава: законний інтерес.",
              "**Виконання вимог закону** — підстава: юридичний обов'язок володільця даних.",
            ],
          },
          {
            type: "paragraph",
            text: "Ми не використовуємо ваші контакти для розсилок і не передаємо їх для маркетингу.",
          },
        ],
        en: [
          {
            type: "list",
            items: [
              "**Replying to your enquiry** — basis: your consent given via the form checkbox, and steps taken at your request prior to entering into a contract.",
              "**Assessing whether the matter can be accepted**, including a conflict-of-interest check — basis: the attorney's legitimate interest and the Rules of Attorney Ethics.",
              "**Running and securing the website**, protection against spam and automated submissions — basis: legitimate interest.",
              "**Complying with the law** — basis: the controller's legal obligation.",
            ],
          },
          {
            type: "paragraph",
            text: "We do not use your contact details for mailings and do not pass them on for marketing.",
          },
        ],
        pl: [
          {
            type: "list",
            items: [
              "**Odpowiedź na zapytanie** — podstawa: Twoja zgoda wyrażona w formularzu oraz działania podejmowane na Twoje żądanie przed zawarciem umowy.",
              "**Ocena możliwości przyjęcia sprawy**, w tym weryfikacja konfliktu interesów — podstawa: prawnie uzasadniony interes adwokata i Zasady etyki adwokackiej.",
              "**Działanie i bezpieczeństwo strony**, ochrona przed spamem i automatycznymi wysyłkami — podstawa: prawnie uzasadniony interes.",
              "**Wypełnienie obowiązków prawnych** — podstawa: obowiązek prawny administratora.",
            ],
          },
          {
            type: "paragraph",
            text: "Nie wykorzystujemy Twoich danych kontaktowych do wysyłek marketingowych i nie przekazujemy ich w celach marketingowych.",
          },
        ],
      },
    },
    {
      id: "attorney-secrecy",
      title: {
        uk: "Адвокатська таємниця",
        en: "Attorney–client privilege",
        pl: "Tajemnica adwokacka",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Зміст вашого звернення, сам факт звернення та питання, з яких ви зверталися, становлять адвокатську таємницю відповідно до статті 22 Закону України «Про адвокатуру та адвокатську діяльність». Це діє з моменту звернення — незалежно від того, чи буде укладено договір.",
          },
          {
            type: "paragraph",
            text: "Адвокат не має права розголошувати ці відомості й використовувати їх у власних інтересах або в інтересах третіх осіб. Обов'язок є безстроковим.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Захист адвокатської таємниці не робить безпечним сам канал зв'язку. Електронна пошта передається відкритими мережами — не надсилайте нею матеріали, розголошення яких є критичним.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The content of your enquiry, the fact that you made it, and the questions you raised are covered by attorney–client privilege under Article 22 of the Law of Ukraine “On the Bar and Practice of Law”. This applies from the moment of the enquiry — whether or not an agreement follows.",
          },
          {
            type: "paragraph",
            text: "The attorney may not disclose this information or use it in their own interest or in the interest of third parties. The duty has no time limit.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Privilege does not make the channel itself secure. Email travels over open networks — do not send materials whose disclosure would be critical.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Treść Twojego zapytania, sam fakt jego złożenia oraz kwestie, z którymi się zwracasz, stanowią tajemnicę adwokacką zgodnie z art. 22 ustawy Ukrainy „O adwokaturze i działalności adwokackiej”. Obowiązuje to od chwili kontaktu — niezależnie od tego, czy dojdzie do zawarcia umowy.",
          },
          {
            type: "paragraph",
            text: "Adwokat nie może ujawniać tych informacji ani wykorzystywać ich we własnym interesie lub w interesie osób trzecich. Obowiązek jest bezterminowy.",
          },
          {
            type: "callout",
            variant: "note",
            text: "Tajemnica adwokacka nie czyni bezpiecznym samego kanału komunikacji. Poczta elektroniczna przesyłana jest przez sieci otwarte — nie wysyłaj nią materiałów, których ujawnienie byłoby krytyczne.",
          },
        ],
      },
    },
    {
      id: "cookies",
      title: {
        uk: "Файли cookie",
        en: "Cookies",
        pl: "Pliki cookie",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Сайт не встановлює аналітичних і рекламних файлів cookie, тому банер згоди на cookie не потрібен.",
          },
          {
            type: "paragraph",
            text: "Вибрана мова визначається адресою сторінки, а шрифти завантажуються з нашого ж сервера — звернень до сторонніх мереж доставки контенту не відбувається.",
          },
          {
            type: "paragraph",
            text: "Виняток — вбудовані відео: коли ви запускаєте ролик, YouTube може встановити власні файли cookie. До натискання кнопки відтворення жодних запитів до YouTube не надсилається.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The website sets no analytics or advertising cookies, so a cookie consent banner is not required.",
          },
          {
            type: "paragraph",
            text: "The selected language is determined by the page address, and fonts are served from our own server — no requests go to third-party content delivery networks.",
          },
          {
            type: "paragraph",
            text: "The exception is embedded video: when you start a clip, YouTube may set its own cookies. Until you press play, no requests are sent to YouTube.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Strona nie ustawia analitycznych ani reklamowych plików cookie, dlatego baner zgody na cookies nie jest potrzebny.",
          },
          {
            type: "paragraph",
            text: "Wybrany język wynika z adresu strony, a czcionki ładowane są z naszego serwera — nie są wysyłane zapytania do zewnętrznych sieci dostarczania treści.",
          },
          {
            type: "paragraph",
            text: "Wyjątkiem są osadzone filmy: po uruchomieniu odtwarzania YouTube może ustawić własne pliki cookie. Do momentu naciśnięcia przycisku odtwarzania żadne zapytania do YouTube nie są wysyłane.",
          },
        ],
      },
    },
    {
      id: "recipients",
      title: {
        uk: "Кому передаються дані",
        en: "Who receives the data",
        pl: "Komu przekazywane są dane",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Ми не продаємо персональні дані. Доступ до них мають лише ті, без кого сайт і листування не працюватимуть:",
          },
          {
            type: "list",
            items: [
              "хостинг-провайдер, що розміщує сайт і веде журнали сервера;",
              "провайдер електронної пошти, через який надходять і зберігаються звернення з форми;",
              "YouTube — лише якщо ви самостійно запустили вбудоване відео.",
            ],
          },
          {
            type: "paragraph",
            text: "Дані також можуть бути надані державним органам, якщо цього прямо вимагає закон і якщо на них не поширюється режим адвокатської таємниці.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "We do not sell personal data. Access is limited to those without whom the website and correspondence would not work:",
          },
          {
            type: "list",
            items: [
              "the hosting provider that hosts the website and keeps server logs;",
              "the email provider through which form enquiries arrive and are stored;",
              "YouTube — only if you started an embedded video yourself.",
            ],
          },
          {
            type: "paragraph",
            text: "Data may also be disclosed to public authorities where the law expressly requires it and where attorney–client privilege does not apply.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Nie sprzedajemy danych osobowych. Dostęp mają wyłącznie podmioty, bez których strona i korespondencja nie mogłyby działać:",
          },
          {
            type: "list",
            items: [
              "dostawca hostingu, który utrzymuje stronę i prowadzi dzienniki serwera;",
              "dostawca poczty elektronicznej, przez którego trafiają i są przechowywane zapytania z formularza;",
              "YouTube — wyłącznie jeśli samodzielnie uruchomisz osadzony film.",
            ],
          },
          {
            type: "paragraph",
            text: "Dane mogą zostać udostępnione organom państwowym, jeżeli wymaga tego wprost przepis prawa i jeżeli nie są objęte tajemnicą adwokacką.",
          },
        ],
      },
    },
    {
      id: "retention",
      title: {
        uk: "Скільки зберігаються дані",
        en: "How long data is kept",
        pl: "Jak długo przechowujemy dane",
      },
      body: {
        uk: [
          {
            type: "list",
            items: [
              "Звернення, які не привели до укладення договору, — до 12 місяців, після чого листування видаляється.",
              "Звернення, за якими укладено договір, — протягом строку зберігання адвокатського досьє відповідно до законодавства про адвокатуру.",
              "Журнали сервера — у строки, встановлені хостинг-провайдером, зазвичай до кількох місяців.",
            ],
          },
          {
            type: "paragraph",
            text: "Ми зберігаємо звернення протягом 12 місяців насамперед для перевірки конфлікту інтересів: адвокат не має права прийняти доручення проти особи, яка раніше зверталася з тим самим питанням.",
          },
        ],
        en: [
          {
            type: "list",
            items: [
              "Enquiries that did not lead to an agreement — up to 12 months, after which the correspondence is deleted.",
              "Enquiries that led to an agreement — for as long as the attorney's case file must be retained under the legislation on the bar.",
              "Server logs — for the period set by the hosting provider, usually a few months.",
            ],
          },
          {
            type: "paragraph",
            text: "We keep enquiries for 12 months chiefly for conflict-of-interest checks: an attorney may not accept a matter against a person who previously sought advice on the same question.",
          },
        ],
        pl: [
          {
            type: "list",
            items: [
              "Zapytania, które nie doprowadziły do zawarcia umowy — do 12 miesięcy, po czym korespondencja jest usuwana.",
              "Zapytania zakończone zawarciem umowy — przez okres przechowywania akt adwokackich zgodnie z przepisami o adwokaturze.",
              "Dzienniki serwera — przez okres ustalony przez dostawcę hostingu, zwykle do kilku miesięcy.",
            ],
          },
          {
            type: "paragraph",
            text: "Zapytania przechowujemy przez 12 miesięcy przede wszystkim na potrzeby weryfikacji konfliktu interesów: adwokat nie może przyjąć sprawy przeciwko osobie, która wcześniej zwracała się w tej samej kwestii.",
          },
        ],
      },
    },
    {
      id: "your-rights",
      title: {
        uk: "Ваші права",
        en: "Your rights",
        pl: "Twoje prawa",
      },
      body: {
        uk: [
          { type: "paragraph", text: "Щодо своїх персональних даних ви маєте право:" },
          {
            type: "list",
            items: [
              "знати, які саме дані ми обробляємо, і отримати їх копію;",
              "виправити неточні дані;",
              "видалити дані або обмежити їх обробку;",
              "відкликати згоду — це не впливає на законність обробки до відкликання;",
              "заперечити проти обробки на підставі законного інтересу;",
              "отримати дані у структурованому форматі та передати їх іншому володільцю (для відвідувачів з ЄС);",
              "звернутися зі скаргою до Уповноваженого Верховної Ради України з прав людини, а в ЄС — до наглядового органу за місцем проживання.",
            ],
          },
          {
            type: "paragraph",
            text: "Щоб скористатися будь-яким із цих прав, напишіть на електронну пошту, вказану нижче. Ми відповідаємо протягом 30 днів. Якщо запит стосується відомостей, захищених адвокатською таємницею, обсяг відповіді може бути обмежено — ми пояснимо підставу.",
          },
        ],
        en: [
          { type: "paragraph", text: "In respect of your personal data you have the right to:" },
          {
            type: "list",
            items: [
              "know exactly what data we process and receive a copy of it;",
              "correct inaccurate data;",
              "have data erased or its processing restricted;",
              "withdraw consent — this does not affect the lawfulness of processing before withdrawal;",
              "object to processing based on legitimate interest;",
              "receive your data in a structured format and transfer it to another controller (for EU visitors);",
              "lodge a complaint with the Ukrainian Parliament Commissioner for Human Rights, or in the EU with the supervisory authority of your place of residence.",
            ],
          },
          {
            type: "paragraph",
            text: "To exercise any of these rights, write to the email address below. We reply within 30 days. If a request concerns information covered by attorney–client privilege, the scope of the reply may be limited — we will explain the grounds.",
          },
        ],
        pl: [
          { type: "paragraph", text: "W odniesieniu do swoich danych osobowych masz prawo:" },
          {
            type: "list",
            items: [
              "wiedzieć, jakie dokładnie dane przetwarzamy, i otrzymać ich kopię;",
              "sprostować nieprawidłowe dane;",
              "usunąć dane lub ograniczyć ich przetwarzanie;",
              "wycofać zgodę — nie wpływa to na zgodność z prawem przetwarzania przed jej wycofaniem;",
              "wnieść sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie;",
              "otrzymać dane w ustrukturyzowanym formacie i przenieść je do innego administratora (dla odwiedzających z UE);",
              "wnieść skargę do Rzecznika Praw Człowieka Rady Najwyższej Ukrainy, a w UE — do organu nadzorczego właściwego dla miejsca zamieszkania.",
            ],
          },
          {
            type: "paragraph",
            text: "Aby skorzystać z któregokolwiek z tych praw, napisz na adres e-mail podany poniżej. Odpowiadamy w ciągu 30 dni. Jeżeli wniosek dotyczy informacji objętych tajemnicą adwokacką, zakres odpowiedzi może być ograniczony — wyjaśnimy podstawę.",
          },
        ],
      },
    },
    {
      id: "security",
      title: {
        uk: "Захист даних",
        en: "Data security",
        pl: "Ochrona danych",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "З'єднання із сайтом захищене протоколом HTTPS. Доступ до поштової скриньки, куди надходять звернення, має лише адвокат; вхід захищено паролем і двофакторною автентифікацією.",
          },
          {
            type: "paragraph",
            text: "Форма зворотного зв'язку перевіряє коректність введених даних і містить приховане поле для відсіювання автоматичних надсилань. Дані з форми не зберігаються в базі даних сайту — вони одразу пересилаються електронною поштою.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The connection to the website is protected by HTTPS. Only the attorney has access to the mailbox that receives enquiries; sign-in is protected by a password and two-factor authentication.",
          },
          {
            type: "paragraph",
            text: "The contact form validates the data entered and includes a hidden field that filters out automated submissions. Form data is not stored in a website database — it is forwarded by email immediately.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Połączenie ze stroną jest zabezpieczone protokołem HTTPS. Dostęp do skrzynki pocztowej, na którą trafiają zapytania, ma wyłącznie adwokat; logowanie chronione jest hasłem i uwierzytelnianiem dwuskładnikowym.",
          },
          {
            type: "paragraph",
            text: "Formularz kontaktowy weryfikuje poprawność wprowadzonych danych i zawiera ukryte pole odsiewające automatyczne wysyłki. Dane z formularza nie są zapisywane w bazie danych strony — są od razu przesyłane pocztą elektroniczną.",
          },
        ],
      },
    },
    {
      id: "transfers",
      title: {
        uk: "Передавання даних за кордон",
        en: "International transfers",
        pl: "Przekazywanie danych za granicę",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Сервери сайту та поштового сервісу можуть розташовуватися в Україні або в Європейському Союзі. Якщо постачальник послуг перебуває за межами цих юрисдикцій, передавання відбувається на підставі стандартних договірних положень або іншого механізму, передбаченого GDPR.",
          },
          {
            type: "paragraph",
            text: "Адвокат співпрацює з адвокатськими канцеляріями у Варшаві та Кракові. Дані вашого звернення передаються партнерам лише за вашою окремою згодою — наприклад, якщо справу необхідно вести за польським правом.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "The website and email servers may be located in Ukraine or in the European Union. If a service provider is outside these jurisdictions, transfers rely on standard contractual clauses or another mechanism provided for by the GDPR.",
          },
          {
            type: "paragraph",
            text: "The attorney co-operates with law firms in Warsaw and Kraków. Details of your enquiry are shared with partners only with your separate consent — for example, if the matter must be handled under Polish law.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Serwery strony i poczty mogą znajdować się na Ukrainie lub w Unii Europejskiej. Jeżeli usługodawca działa poza tymi jurysdykcjami, przekazanie odbywa się na podstawie standardowych klauzul umownych lub innego mechanizmu przewidzianego w RODO.",
          },
          {
            type: "paragraph",
            text: "Adwokat współpracuje z kancelariami adwokackimi w Warszawie i Krakowie. Dane z Twojego zapytania przekazujemy partnerom wyłącznie za Twoją odrębną zgodą — na przykład gdy sprawa wymaga prowadzenia według prawa polskiego.",
          },
        ],
      },
    },
    {
      id: "changes",
      title: {
        uk: "Зміни до Політики",
        en: "Changes to this Policy",
        pl: "Zmiany Polityki",
      },
      body: {
        uk: [
          {
            type: "paragraph",
            text: "Політика оновлюється, якщо змінюються законодавство, склад інструментів сайту або способи обробки даних. Чинною є та редакція, яка опублікована на цій сторінці.",
          },
          {
            type: "paragraph",
            text: "Про суттєві зміни, що стосуються вже надісланих звернень, ми повідомимо електронною поштою.",
          },
        ],
        en: [
          {
            type: "paragraph",
            text: "This Policy is updated when legislation, the website's tooling or the ways data is processed change. The version published on this page is the one in force.",
          },
          {
            type: "paragraph",
            text: "We will notify you by email of material changes that affect enquiries already sent.",
          },
        ],
        pl: [
          {
            type: "paragraph",
            text: "Politykę aktualizujemy, gdy zmieniają się przepisy, zestaw narzędzi strony lub sposoby przetwarzania danych. Obowiązuje ta wersja, która jest opublikowana na tej stronie.",
          },
          {
            type: "paragraph",
            text: "O istotnych zmianach dotyczących już wysłanych zapytań poinformujemy pocztą elektroniczną.",
          },
        ],
      },
    },
  ],
}
