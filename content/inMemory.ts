import type { TributeContent } from "@/types/inMemory"

const HERO_IMAGE = "/inMemory/zhanna_guseinova_advokat1-768x504.webp"
const FIGURE_HEARING = "/inMemory/zhanna_guseinova_advokat3.webp"
const FIGURE_YOUTH = "/inMemory/zhanna_guseinova_advokat4.webp"

export const tribute: TributeContent = {
  heroImage: HERO_IMAGE,
  heroQuote: {
    uk: "Щоб бути справжнім адвокатом, треба любити НЕ гроші, а передусім — професію.",
    en: "To be a true advocate you must love NOT money, but above all — the profession.",
    pl: "Aby być prawdziwym adwokatem, trzeba kochać NIE pieniądze, lecz przede wszystkim — zawód.",
  },
  heroAlt: {
    uk: "Жанна Гусейнова за читанням, архівне фото",
    en: "Zhanna Guseynova reading, an archival photograph",
    pl: "Żanna Gusejnowa czytająca, zdjęcie archiwalne",
  },
  interview: {
    uk: [
      {
        type: "lead",
        text: "ГУСЕЙНОВА ЖАННА ВОЛОДИМИРІВНА — адвокат, член Дисциплінарної палати Київської обласної кваліфікаційно-дисциплінарної комісії. До цього виборного органу, що представляє адвокатів Києва та Київської області, Жанна Володимирівна обирається втретє, з 1993 року.",
      },
      {
        type: "qa",
        question: "Як починався Ваш шлях у професію?",
        answer: [
          "Мені завжди хотілося стати адвокатом! Ще у школі обожнювала дивитися старі фільми, де інтелігентні, поважні літні адвокати виголошували красиві, справедливі промови. На перервах, між уроками, бігала до сусіднього книжкового магазину, діставала з полиць юридичні книжки й намагалася осягнути таємничі слова: кримінальний злочин, міра покарання, стаття така-то й така-то. Ці слова й терміни, значення яких я, звісно, розуміла не до кінця, звучали для мене, як музика. Детективи, яких тоді було не так багато, я зачитувала до дірок.",
          "Після школи спробувала вступити на юридичний факультет Київського державного університету імені Тараса Шевченка. Перше зіткнення з реальністю виявилося суворим: з абітурієнтки на студентку я не перетворилася — не добрала бал. Сказати, що я засмутилася, — значить нічого не сказати. Здавалося, життя скінчилося. Утішила мене одна з моїх тіток: «Який же з тебе юрист, якщо після першої невдачі лапки — догори? Отже, не хочеш бути адвокатом».",
          "Щоб довести протилежне, щоб перевірити себе, я влаштувалася працювати секретарем судового засідання у Броварський суд. Уже за рік зрозуміла, яка це праця. І не лише в адвоката, — а й у судді, і в прокурора. Однак романтика адвокатської професії вабила нездоланно — я вступала до університету 6 разів! Навіть не знаю, що саме переломило ситуацію: чи то моя впертість, чи то просто випадок допоміг — я вступила на заочне відділення юрфаку.",
          "Поки навчалася, продовжувала працювати в суді, вже судовим виконавцем. Потім перейшла на посаду юрисконсульта до київського «Облрембутбудтресту», де пропрацювала 4 роки. І весь цей час мене не покидало відчуття якоїсь незадоволеності. Начебто робота за фахом, але, на жаль, була вона надто, якщо хочете, якоюсь паперовою. Дедалі частіше я згадувала свою роботу в суді.",
        ],
      },
      {
        type: "qa",
        question:
          "І Ви все ж таки вирішили стати адвокатом, щоб здійснити дитячу мрію, хоча задля цього довелося відмовитися від роботи в тресті — доволі престижної та добре оплачуваної?",
        answer: [
          "Так, на ті часи оплата праці адвоката й юрисконсульта була приблизно однаковою. Але річ не лише в грошах. У тресті, як я вже казала, майже не доводилося працювати з людьми. Я складала й перевіряла правильність оформлення договорів, актів. Загалом це була звичайна паперова рутина. А хотілося допомагати реальним, живим людям. Ще бувши секретарем судового засідання, я заслуховувалася промовами адвокатів, бачила, як вони прагнуть довести невинуватість своїх підзахисних, коли йшлося про кримінальну справу, або як у цивільних процесах відстоюють права людини, якщо ці права порушено.",
        ],
      },
      {
        type: "qa",
        question: "Чи відповідали Вашим уявленням реалії адвокатської практики?",
        answer: [
          "За дванадцять років роботи в суді я вже мала певне уявлення про роботу адвоката. Але, зізнаюся, не підозрювала, що це так важко.",
        ],
      },
      {
        type: "qa",
        question: "Що виявилося найважчим?",
        answer: [
          "Річ у тім, що дуже складно встановити контакт із людиною. Усі люди різні, і вимоги в них різні. У кожного своє уявлення про адвоката та його роботу. А ти зобов'язана надавати юридичну допомогу лише в межах правового поля. Приміром, людина скоїла злочин. Ти розповідаєш, яке покарання передбачене за цією статтею. А вона заявляє: «Я вам гроші заплатив, нехай мене відпустять!». Ти знову пояснюєш, що, згідно з такою-то статтею, міра покарання — така. А оплатила вона твою роботу, твій час, витрачений на ознайомлення зі справою, на участь у слідчих діях і так далі. На жаль, не всі розуміють, що допомога адвоката — це лише юридична допомога.",
          "Працюючи з клієнтом, необхідно бути тонким психологом. Уважно вислухати, з'ясувати, чи визнає він себе винним, чи каже правду, чи намагається щось приховати, щоб виглядати краще. Адвокату треба довіряти, як лікарю. Якщо людина не скоювала злочину, то саме адвокат має зібрати всі докази її невинуватості. Це право адвоката — збирати всі потрібні відомості й надавати їх суду.",
          "Обов'язково слід з'ясувати, чого людина хоче. Буває, що претензії клієнта неправомірні. І тоді це потрібно чітко їй пояснити. Якщо не вдається досягти взаєморозуміння з клієнтом у якихось питаннях щодо тактики захисту, то працювати разом — неможливо. Якщо ти бачиш, що людина каже неправду, працювати з нею не варто. Адже доведеться шукати докази там, де їх немає. Усе сказане адвокату є таємницею. Як на сповіді. Брехати просто не має сенсу. Що правдивішу інформацію отримає адвокат, то більше в нього шансів знайти правильну схему захисту.",
        ],
      },
      {
        type: "aside",
        text: "Працюючи з підзахисним, необхідно бути тонким психологом",
      },
      {
        type: "para",
        text: "Адже захисник — завжди на боці клієнта. Був у моїй адвокатській практиці випадок, коли батько затриманого уклав зі мною угоду. Уже на першій зустрічі в ізоляторі тимчасового тримання мій потенційний підзахисний почав казати, що в мене в сумці — підслуховувальний пристрій, що я хочу йому нашкодити. На жаль, у таких умовах я не змогла працювати й розірвала угоду.",
      },
      {
        type: "para",
        text: "З іншого боку, саме професіоналізм і уважність адвоката можуть врятувати людину. Якось я вела справу, за якою мій підзахисний обвинувачувався в чиненні опору працівникам міліції та завданні одному з них тілесних ушкоджень, зокрема удару пляшкою по голові. Ознайомившись із матеріалами справи, я дізналася, що на потерпілому була хутряна шапка. Замовила експертизу щодо характеру ушкоджень, яка показала, що, по-перше, ушкодження були незначні, а по-друге, їх не могли завдати пляшкою. І людину виправдали.",
      },
      {
        type: "qa",
        question: "Чи бувають випадки, коли адвокат не погоджується вести справу?",
        answer: [
          "Не виправдовує свого високого звання адвокат, який відмовляється захищати людину, що звернулася до нього по допомогу, незалежно від того, який злочин вона скоїла. Але зізнаюся, що особисто я лише у виняткових випадках погоджуюся захищати тих, хто скоїв зґвалтування малолітніх чи неповнолітніх. Як жінці, як матері, мені дуже складно вести такі справи. Безумовно, адвокат зобов'язаний надавати допомогу будь-якій людині, адже її провину може бути доведено лише в суді. Навіть якщо слідство стверджує, що ця людина — злочинець, міру провини може визначити тільки суд.",
        ],
      },
      {
        type: "qa",
        question: "Що таке адвокатська етика? Що адвокату можна, а чого — не можна?",
        answer: [
          "По-перше, адвокат не може захищати кількох людей, які проходять по одній справі, якщо в них різні позиції, коли кожен заперечує свою провину й стверджує, що винен інший. Як правило, адвокат укладає угоду про захист із родичами. Коли на першому побаченні з підзахисним я бачу розбіжності в їхніх показаннях, я можу захищати лише одного з них. По-друге — у випадку, якщо консультував позивача, а потім хочеш захищати відповідача. По-третє, захисником не може бути людина, яка проходила у цій справі як понятий чи свідок, якого потрібно допитати, родич слідчого чи інспектора карного розшуку, що брав участь у цій справі. Хоча це радше правовий аспект, ніж етичний.",
          "А етика — річ значно тонша, делікатніша, якщо хочете. На мою думку, був випадок, коли ми, кілька адвокатів, захищали обвинувачених, а наш колега — потерпілу. І він, бачачи, що до потерпілої більше уваги й співчуття, почав дозволяти собі робити зауваження адвокату іншої сторони. Звісно, не в залі суду, де суддя обов'язково зробив би йому зауваження й написав подання до дисциплінарної комісії. Але він почав ображати й принижувати свою ж колегу, можливо, щоб деморалізувати її. Така поведінка — негідна. Це найяскравіший, найнеприпустиміший приклад порушення адвокатської етики.",
        ],
      },
      {
        type: "figure",
        image: FIGURE_HEARING,
        alt: "Жанна Гусейнова на засіданні, архівне фото",
        quote: "Адвокату треба довіряти, як лікарю",
      },
      {
        type: "qa",
        question:
          "Як складаються стосунки адвоката зі слідчими органами, міліцією, прокуратурою?",
        answer: [
          "Нині в кримінальному кодексі передбачено відповідальність за ненадання зустрічі обвинуваченого з адвокатом. Раніше було важко, бо органи прокуратури та міліції могли всіляко цьому перешкоджати. Іноді захисник просто не міг знайти свого підзахисного. Ми змушені були їздити всім містом і шукати своїх клієнтів. Наприклад, кажуть, що він у слідчому ізоляторі. Приїжджаєш — а його там немає, мовляв, він десь в Іванкові. Їдеш туди — і знову не знаходиш свого підзахисного, і все повторюється по новому колу.",
          "Ще одна, не менш серйозна проблема, що хвилює зараз усіх адвокатів, — складна пропускна система, за якої дуже невелика кількість людей має право підпису дозволу на побачення. Приміром, мені як захиснику потрібно зустрітися з клієнтом. У провадженні слідчого перебуває кримінальна справа, отже, обвинувачений обов'язково числиться за цим слідчим прокуратури. Але щоб потрапити на побачення, потрібно йти до начальника того відділу міліції, де тримають обвинуваченого. Уже маючи дозвіл слідчого на зустріч, необхідно ще отримати санкцію цього начальника, якого може не бути на місці. І адвокат змушений чекати. І чекає, іноді — годинами… Потрапити до ізолятора тимчасового тримання можна лише до 18.00. Не встиг — завтра все доведеться повторювати спочатку.",
          "Але навіть коли підпис отримано і ти прийшов до ізолятора тимчасового тримання, знову доводиться чекати. Бо або підслідних вивозять, або в них перевірка, або називають ще якусь причину. Унаслідок цього адвокат марнує неймовірну кількість часу, перш ніж дістанеться до клієнта. А з того моменту, як адвокат вступає у справу, він має право зустрічатися з підзахисним хоч п'ять разів на день. Уявіть: п'ять разів підписувати перепустку в слідчого й начальника міліції! А цей начальник і гадки може не мати про цю справу й цю людину! Але ти щоразу зобов'язана підписувати перепустку, адже без цього дозволу до ізолятора тимчасового тримання — не потрапити. Іноді складається враження, що це робиться навмисне. І ситуація, коли затриманий тривалий час змушений перебувати без адвокатської допомоги, без можливості порадитися, створюється штучно.",
        ],
      },
      {
        type: "figure",
        image: FIGURE_YOUTH,
        alt: "Жанна Гусейнова, портрет замолоду",
        quote:
          "Романтика адвокатської професії вабила нездоланно — я вступала до університету 6 разів!",
      },
    ],
    en: [
      {
        type: "lead",
        text: "ZHANNA VOLODYMYRIVNA GUSEYNOVA — advocate, member of the Disciplinary Chamber of the Kyiv Regional Qualification and Disciplinary Commission. To this elected body, which represents the advocates of Kyiv and the Kyiv region, Zhanna Volodymyrivna has been elected for the third time, since 1993.",
      },
      {
        type: "qa",
        question: "How did your path into the profession begin?",
        answer: [
          "I always wanted to be an advocate! Back in school I adored old films in which cultured, dignified elderly advocates delivered beautiful, righteous speeches. Between lessons, during the breaks, I would run to the bookshop next door, pull law books off the shelves and try to grasp the mysterious words: criminal offence, measure of punishment, article such-and-such. Those words and terms — whose meaning, of course, I did not fully understand — sounded to me like music. Detective novels, of which there were not so many back then, I read to tatters.",
          "After school I tried to enrol in the law faculty of the Taras Shevchenko Kyiv State University. My first collision with reality proved harsh: I did not turn from an applicant into a student — I fell short by a single point. To say I was upset would be to say nothing at all. It felt as though life was over. One of my aunts consoled me: «What kind of lawyer are you, if after the first setback your paws go up? Then you don't really want to be an advocate».",
          "To prove the opposite, to test myself, I took a job as a court-session secretary at the Brovary court. Within a year I understood what hard work it is — and not only for the advocate, but for the judge and the prosecutor too. Yet the romance of the advocate's profession beckoned irresistibly — I applied to the university six times! I don't even know what exactly turned the tide: my stubbornness, or simply chance — but I was admitted to the correspondence department of the law faculty.",
          "While I studied, I kept working at the court, now as a bailiff. Then I moved to the post of legal counsel at the Kyiv «Oblrembutbudtrest», where I worked for four years. And all that time a certain feeling of dissatisfaction never left me. It looked like work in my field, yet, unfortunately, it was too — how shall I put it — paper-bound. More and more often I recalled my work at the court.",
        ],
      },
      {
        type: "qa",
        question:
          "And you nonetheless decided to become an advocate, to fulfil your childhood dream — even though it meant giving up your job at the trust, which was rather prestigious and well paid?",
        answer: [
          "Yes, in those days the pay of an advocate and of a legal counsel was roughly the same. But it isn't only about the money. At the trust, as I've said, one hardly ever worked with people. I drew up contracts and deeds and checked that they were in order. On the whole it was ordinary paperwork. Yet I longed to help real, living people. Even as a court-session secretary I would lose myself in the advocates' speeches; I saw how they strove to prove the innocence of those they defended in criminal cases, or how in civil proceedings they stood up for a person's rights whenever those rights had been violated.",
        ],
      },
      {
        type: "qa",
        question: "Did the realities of practice match your expectations?",
        answer: [
          "Over twelve years of work at the court I already had some notion of an advocate's work. But, I confess, I never suspected it would be so hard.",
        ],
      },
      {
        type: "qa",
        question: "What turned out to be the hardest?",
        answer: [
          "The thing is, it is very difficult to establish contact with a person. Everyone is different, and their demands differ too. Each has their own idea of the advocate and their work. And you are obliged to give legal assistance only within the bounds of the law. Say a person has committed a crime. You tell them what punishment the relevant article provides. And they declare: «I paid you money — let them release me!». You explain again that, under such-and-such an article, the measure of punishment is this. What they paid for was your work, your time spent studying the case, taking part in investigative actions, and so on. Unfortunately, not everyone understands that an advocate's help is only legal help.",
          "Working with a client, you must be a subtle psychologist. Listen carefully; find out whether he admits his guilt or not, whether he is telling the truth or trying to hide something to look better. An advocate must be trusted like a doctor. If a person has not committed a crime, it is precisely the advocate who must gather all the proof of their innocence. It is the advocate's right to collect all the relevant information and present it to the court.",
          "One must always find out what the person wants. Sometimes a client's claims are unfounded — and then this has to be explained to them clearly. If you cannot reach an understanding with a client on certain questions of defence tactics, working together is impossible. If you see that a person is lying, it isn't worth working with them, for you would have to look for evidence where there is none. Everything told to an advocate is a secret — as at confession. Lying simply makes no sense. The more truthful the information an advocate receives, the better their chances of finding the right line of defence.",
        ],
      },
      {
        type: "aside",
        text: "Working with the person you defend, you must be a subtle psychologist",
      },
      {
        type: "para",
        text: "For the defender is always on the client's side. There was a case in my practice when the father of a detained man signed an agreement with me. At our very first meeting in the temporary detention facility, my prospective client began saying that I had a listening device in my bag, that I meant to harm him. Alas, I could not work under such conditions, and I terminated the agreement.",
      },
      {
        type: "para",
        text: "On the other hand, it is precisely an advocate's professionalism and attention that can save a person. Once I handled a case in which my client was accused of resisting police officers and inflicting bodily harm on one of them — in particular, a blow to the head with a bottle. Studying the case file, I learned that the injured officer had been wearing a fur hat. I requested an examination of the nature of the injuries, which showed that, first, the injuries were minor, and second, they could not have been inflicted with a bottle. And the man was acquitted.",
      },
      {
        type: "qa",
        question: "Are there cases when an advocate refuses to take on a case?",
        answer: [
          "An advocate who refuses to defend a person who has come to them for help does not live up to their high calling, no matter what crime that person has committed. But I confess that I personally agree only in exceptional cases to defend those who have raped minors. As a woman, as a mother, it is very hard for me to take on such cases. Of course, an advocate is obliged to help any person, for their guilt can be proven only in court. Even if the investigation insists that this person is a criminal, only the court can determine the degree of guilt.",
        ],
      },
      {
        type: "qa",
        question: "What is legal ethics? What may an advocate do, and what may they not?",
        answer: [
          "First, an advocate cannot defend several people in the same case if their positions differ — when each denies his own guilt and claims the other is to blame. As a rule, the advocate signs the defence agreement with the relatives. When, at the first meeting with those I am to defend, I see discrepancies in their testimony, I may defend only one of them. Second — the case where you have advised the plaintiff and then wish to defend the defendant. Third, the defender cannot be someone who took part in the case as an attesting witness or a witness who must be questioned, nor a relative of the investigator or of the criminal-investigation officer involved in the case. Though that is more a legal matter than an ethical one.",
          "And ethics is a far subtler, more delicate thing, if you will. To my mind — there was a case when several of us advocates were defending the accused, and our colleague was representing the injured party. Seeing that the injured party drew more attention and sympathy, he began allowing himself to make remarks to the advocate of the other side. Not in the courtroom, of course, where the judge would surely have reprimanded him and filed a report with the disciplinary commission. But he took to insulting and humiliating his own colleague — perhaps to demoralise her. Such conduct is unworthy. It is the starkest, most inadmissible example of a breach of legal ethics.",
        ],
      },
      {
        type: "figure",
        image: FIGURE_HEARING,
        alt: "Zhanna Guseynova at a hearing, an archival photograph",
        quote: "An advocate must be trusted like a doctor",
      },
      {
        type: "qa",
        question:
          "How do an advocate's relations with the investigative bodies, the police and the prosecutor's office develop?",
        answer: [
          "At present the criminal code provides for liability for denying a meeting between the accused and their advocate. Earlier it was hard, because the prosecutor's office and the police could obstruct it in every way. Sometimes a defender simply could not find the person he was defending. We were forced to drive all over the city looking for our clients. For instance, they say he is in the remand prison. You arrive — and he isn't there; he's supposedly somewhere in Ivankiv. You drive there — and again you don't find your client, and the whole thing starts over.",
          "Another, no less serious problem that troubles all advocates today is the cumbersome pass system, in which very few people have the right to sign a permit for a visit. Say I, as the defender, need to meet a client. The criminal case is with the investigator, so the accused is, of course, listed under that prosecution investigator. But to get the visit, you have to go to the head of the police department where the accused is held. Already holding the investigator's permission for the meeting, you must still obtain that chief's authorisation — and he may not be in. And the advocate has to wait. And waits, sometimes for hours… You can enter the temporary detention facility only until 6 p.m. If you don't make it, tomorrow you must start all over again.",
          "But even once the signature has been obtained and you have arrived at the temporary detention facility, you must wait again — because either the detainees are being taken away, or there's an inspection, or some other reason is named. As a result, the advocate wastes an incredible amount of time before reaching the client. Yet from the moment an advocate enters a case, they have the right to meet the person they defend even five times a day. Imagine signing a pass five times with the investigator and the police chief! And that chief may have no idea about this case or this person! But each time you are obliged to sign the pass, since without that permit you cannot enter the temporary detention facility. Sometimes one gets the impression it is done on purpose — that the situation in which a detainee is left for a long time without legal help, without the chance to consult anyone, is created artificially.",
        ],
      },
      {
        type: "figure",
        image: FIGURE_YOUTH,
        alt: "Zhanna Guseynova, a portrait from her youth",
        quote:
          "The romance of the advocate's profession beckoned irresistibly — I applied to the university six times!",
      },
    ],
    pl: [
      {
        type: "lead",
        text: "ŻANNA WOŁODYMYRIWNA GUSEJNOWA — adwokat, członkini Izby Dyscyplinarnej Kijowskiej Obwodowej Komisji Kwalifikacyjno-Dyscyplinarnej. Do tego organu wybieralnego, reprezentującego adwokatów Kijowa i obwodu kijowskiego, Żanna Wołodymyriwna jest wybierana po raz trzeci, od 1993 roku.",
      },
      {
        type: "qa",
        question: "Jak zaczynała się Pani droga do zawodu?",
        answer: [
          "Zawsze chciałam zostać adwokatem! Jeszcze w szkole uwielbiałam oglądać stare filmy, w których kulturalni, dostojni starsi adwokaci wygłaszali piękne, sprawiedliwe mowy. Na przerwach między lekcjami biegłam do sąsiedniej księgarni, wyciągałam z półek książki prawnicze i starałam się pojąć tajemnicze słowa: przestępstwo kryminalne, wymiar kary, artykuł taki a taki. Te słowa i terminy, których znaczenia, rzecz jasna, nie rozumiałam do końca, brzmiały dla mnie jak muzyka. Kryminały, których wówczas nie było tak wiele, czytałam do znudzenia.",
          "Po szkole spróbowałam dostać się na wydział prawa Kijowskiego Uniwersytetu Państwowego imienia Tarasa Szewczenki. Pierwsze zderzenie z rzeczywistością okazało się surowe: z kandydatki nie zamieniłam się w studentkę — zabrakło mi jednego punktu. Powiedzieć, że się zmartwiłam, to nie powiedzieć nic. Zdawało się, że życie się skończyło. Pocieszyła mnie jedna z moich ciotek: «Jaki z ciebie prawnik, skoro po pierwszej porażce łapki do góry? Znaczy, że nie chcesz być adwokatem».",
          "Żeby udowodnić coś przeciwnego, żeby sprawdzić samą siebie, zatrudniłam się jako sekretarz posiedzeń sądowych w sądzie w Browarach. Już po roku zrozumiałam, jaka to praca. I to nie tylko dla adwokata, ale i dla sędziego, i dla prokuratora. Jednak romantyka zawodu adwokata nęciła nieodparcie — zdawałam na studia sześć razy! Sama nie wiem, co właściwie przeważyło: mój upór czy po prostu przypadek — dostałam się na zaoczny wydział prawa.",
          "Ucząc się, nadal pracowałam w sądzie, już jako komornik sądowy. Potem przeszłam na stanowisko radcy prawnego do kijowskiego «Obłrembutbudtrestu», gdzie przepracowałam cztery lata. I przez cały ten czas nie opuszczało mnie poczucie jakiegoś niespełnienia. Niby praca w zawodzie, ale niestety była nazbyt, jeśli można tak rzec, papierkowa. Coraz częściej wspominałam swoją pracę w sądzie.",
        ],
      },
      {
        type: "qa",
        question:
          "I mimo wszystko postanowiła Pani zostać adwokatem, żeby spełnić dziecięce marzenie, choć trzeba było w tym celu zrezygnować z pracy w treście — dość prestiżowej i dobrze płatnej?",
        answer: [
          "Tak, w owych czasach wynagrodzenie adwokata i radcy prawnego było mniej więcej takie samo. Ale nie chodzi tylko o pieniądze. W treście, jak już mówiłam, prawie nie pracowało się z ludźmi. Sporządzałam i sprawdzałam poprawność umów i aktów. Ogólnie była to zwykła papierkowa robota. A chciało się pomagać realnym, żywym ludziom. Jeszcze jako sekretarz posiedzeń sądowych zasłuchiwałam się w mowy adwokatów, widziałam, jak dążą do udowodnienia niewinności swoich podopiecznych, gdy chodziło o sprawę karną, albo jak w procesach cywilnych bronią praw człowieka, jeśli prawa te zostały naruszone.",
        ],
      },
      {
        type: "qa",
        question: "Czy realia praktyki odpowiadały Pani wyobrażeniom?",
        answer: [
          "Przez dwanaście lat pracy w sądzie miałam już pewne wyobrażenie o pracy adwokata. Ale, przyznaję, nie przypuszczałam, że jest to tak trudne.",
        ],
      },
      {
        type: "qa",
        question: "Co okazało się najtrudniejsze?",
        answer: [
          "Rzecz w tym, że bardzo trudno nawiązać kontakt z człowiekiem. Wszyscy ludzie są różni i różne mają wymagania. Każdy ma własne wyobrażenie o adwokacie i jego pracy. A ty jesteś zobowiązana udzielać pomocy prawnej wyłącznie w granicach prawa. Na przykład człowiek popełnił przestępstwo. Tłumaczysz, jaka kara jest przewidziana w danym artykule. A on oświadcza: «Zapłaciłem wam pieniądze, niech mnie wypuszczą!». Znów tłumaczysz, że zgodnie z takim a takim artykułem wymiar kary jest taki. A zapłacił za twoją pracę, za twój czas poświęcony na zapoznanie się ze sprawą, na udział w czynnościach śledczych i tak dalej. Niestety nie wszyscy rozumieją, że pomoc adwokata to tylko pomoc prawna.",
          "Pracując z klientem, trzeba być subtelnym psychologiem. Uważnie wysłuchać, ustalić, czy przyznaje się do winy, czy mówi prawdę, czy próbuje coś ukryć, by wypaść lepiej. Adwokatowi trzeba ufać jak lekarzowi. Jeśli człowiek nie popełnił przestępstwa, to właśnie adwokat musi zebrać wszystkie dowody jego niewinności. To prawo adwokata — gromadzić wszelkie potrzebne informacje i przedstawiać je sądowi.",
          "Koniecznie należy ustalić, czego człowiek chce. Bywa, że roszczenia klienta są bezpodstawne — i wtedy trzeba mu to jasno wytłumaczyć. Jeśli nie udaje się dojść z klientem do porozumienia w pewnych kwestiach taktyki obrony, to wspólna praca jest niemożliwa. Jeśli widzisz, że człowiek mówi nieprawdę, nie warto z nim pracować, trzeba by bowiem szukać dowodów tam, gdzie ich nie ma. Wszystko, co powiedziano adwokatowi, jest tajemnicą. Jak na spowiedzi. Kłamać po prostu nie ma sensu. Im prawdziwsze informacje otrzyma adwokat, tym większe ma szanse znaleźć właściwą linię obrony.",
        ],
      },
      {
        type: "aside",
        text: "Pracując z podopiecznym, trzeba być subtelnym psychologiem",
      },
      {
        type: "para",
        text: "Wszak obrońca zawsze stoi po stronie klienta. Zdarzył się w mojej praktyce przypadek, gdy ojciec zatrzymanego zawarł ze mną umowę. Już na pierwszym spotkaniu w areszcie mój potencjalny podopieczny zaczął twierdzić, że mam w torbie urządzenie podsłuchowe, że chcę mu zaszkodzić. Niestety w takich warunkach nie mogłam pracować i rozwiązałam umowę.",
      },
      {
        type: "para",
        text: "Z drugiej strony to właśnie profesjonalizm i uwaga adwokata mogą uratować człowieka. Kiedyś prowadziłam sprawę, w której mój podopieczny był oskarżony o stawianie oporu funkcjonariuszom milicji i spowodowanie u jednego z nich obrażeń ciała, w szczególności uderzenia butelką w głowę. Zapoznawszy się z aktami sprawy, dowiedziałam się, że poszkodowany miał futrzaną czapkę. Zamówiłam ekspertyzę charakteru obrażeń, która wykazała, że po pierwsze obrażenia były nieznaczne, a po drugie nie mogły powstać od uderzenia butelką. I człowieka uniewinniono.",
      },
      {
        type: "qa",
        question: "Czy zdarzają się przypadki, gdy adwokat nie zgadza się prowadzić sprawy?",
        answer: [
          "Nie zasługuje na swoje wysokie miano adwokat, który odmawia obrony człowieka, jaki zwrócił się do niego o pomoc, niezależnie od tego, jakie przestępstwo popełnił. Ale przyznaję, że osobiście tylko w wyjątkowych przypadkach zgadzam się bronić tych, którzy dopuścili się gwałtu na małoletnich lub nieletnich. Jako kobiecie, jako matce, bardzo trudno mi prowadzić takie sprawy. Rzecz jasna, adwokat jest zobowiązany pomóc każdemu człowiekowi, ponieważ jego wina może zostać udowodniona wyłącznie w sądzie. Nawet jeśli śledztwo twierdzi, że ten człowiek jest przestępcą, wymiar winy może określić tylko sąd.",
        ],
      },
      {
        type: "qa",
        question: "Czym jest etyka adwokacka? Co adwokatowi wolno, a czego nie?",
        answer: [
          "Po pierwsze, adwokat nie może bronić kilku osób w jednej sprawie, jeśli mają różne stanowiska, gdy każdy zaprzecza swojej winie i twierdzi, że winny jest inny. Z reguły adwokat zawiera umowę o obronę z krewnymi. Kiedy na pierwszym widzeniu z podopiecznymi widzę rozbieżności w ich zeznaniach, mogę bronić tylko jednego z nich. Po drugie — w przypadku, gdy doradzałeś powodowi, a potem chcesz bronić pozwanego. Po trzecie, obrońcą nie może być osoba, która występowała w danej sprawie jako świadek wymagający przesłuchania czy świadek czynności, ani krewny śledczego lub funkcjonariusza wydziału kryminalnego biorącego udział w tej sprawie. Choć to bardziej aspekt prawny niż etyczny.",
          "A etyka to rzecz znacznie subtelniejsza, delikatniejsza, jeśli można tak powiedzieć. Moim zdaniem — zdarzył się przypadek, gdy my, kilkoro adwokatów, broniliśmy oskarżonych, a nasz kolega — poszkodowaną. I widząc, że poszkodowanej okazuje się więcej uwagi i współczucia, zaczął pozwalać sobie na uwagi wobec adwokata strony przeciwnej. Oczywiście nie na sali sądowej, gdzie sędzia z pewnością zwróciłby mu uwagę i skierował wniosek do komisji dyscyplinarnej. Ale zaczął obrażać i poniżać własną koleżankę, być może po to, by ją zdemoralizować. Takie zachowanie jest niegodne. To najjaskrawszy, najbardziej niedopuszczalny przykład naruszenia etyki adwokackiej.",
        ],
      },
      {
        type: "figure",
        image: FIGURE_HEARING,
        alt: "Żanna Gusejnowa na posiedzeniu, zdjęcie archiwalne",
        quote: "Adwokatowi trzeba ufać jak lekarzowi",
      },
      {
        type: "qa",
        question:
          "Jak układają się relacje adwokata z organami śledczymi, milicją, prokuraturą?",
        answer: [
          "Obecnie kodeks karny przewiduje odpowiedzialność za uniemożliwienie spotkania oskarżonego z adwokatem. Wcześniej było ciężko, bo organy prokuratury i milicji mogły na wszelkie sposoby temu przeszkadzać. Czasem obrońca po prostu nie mógł odnaleźć swojego podopiecznego. Byliśmy zmuszeni jeździć po całym mieście i szukać swoich klientów. Na przykład mówią, że jest w areszcie śledczym. Przyjeżdżasz — a jego tam nie ma, bo rzekomo jest gdzieś w Iwankowie. Jedziesz tam — i znów nie znajdujesz swojego podopiecznego, i wszystko powtarza się od nowa.",
          "Kolejny, nie mniej poważny problem, który dziś niepokoi wszystkich adwokatów, to skomplikowany system przepustek, w którym bardzo niewiele osób ma prawo podpisać zezwolenie na widzenie. Na przykład ja jako obrońca muszę spotkać się z klientem. Sprawę karną prowadzi śledczy, więc oskarżony jest oczywiście przypisany do tego śledczego prokuratury. Ale żeby dostać się na widzenie, trzeba iść do naczelnika tego wydziału milicji, gdzie przetrzymywany jest oskarżony. Mając już zgodę śledczego na spotkanie, trzeba jeszcze uzyskać zezwolenie tego naczelnika, którego może nie być na miejscu. I adwokat musi czekać. I czeka, czasem godzinami… Do aresztu można wejść tylko do godziny 18.00. Nie zdążyłeś — jutro wszystko trzeba powtórzyć od początku.",
          "Ale nawet gdy podpis został uzyskany i przyszedłeś do aresztu, znów trzeba czekać. Bo albo wywożą podsądnych, albo mają kontrolę, albo podaje się jeszcze jakiś powód. W efekcie adwokat marnuje niewiarygodnie dużo czasu, zanim dotrze do klienta. A od chwili, gdy adwokat wstępuje do sprawy, ma prawo spotykać się z podopiecznym choćby pięć razy dziennie. Proszę sobie wyobrazić: pięć razy podpisywać przepustkę u śledczego i naczelnika milicji! A ten naczelnik może nie mieć pojęcia o danej sprawie i danym człowieku! Ale za każdym razem jesteś zobowiązana podpisać przepustkę, bo bez tego zezwolenia do aresztu nie da się wejść. Czasem odnosi się wrażenie, że robi się to celowo — i sytuacja, w której zatrzymany przez długi czas musi pozostawać bez pomocy adwokata, bez możliwości konsultacji, tworzona jest sztucznie.",
        ],
      },
      {
        type: "figure",
        image: FIGURE_YOUTH,
        alt: "Żanna Gusejnowa, portret z młodości",
        quote:
          "Romantyka zawodu adwokata nęciła nieodparcie — zdawałam na studia sześć razy!",
      },
    ],
  },
  closingQuote: {
    uk: "Не виправдовує свого високого звання адвокат, який відмовляється захищати людину, що звернулася до нього по допомогу.",
    en: "An advocate who refuses to defend a person who has come to them for help does not live up to their high calling.",
    pl: "Nie zasługuje na swoje wysokie miano adwokat, który odmawia obrony człowieka, jaki zwrócił się do niego o pomoc.",
  },
}
