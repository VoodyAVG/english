// Тексты для читалки. Новые тексты добавляет Claude.
// Формат: {фраза} в тексте = устойчивое выражение, переводится целиком.
// glossary: [основная форма, перевод, ...формы, как они встречаются в тексте]
// questions: [вопрос, [варианты], номер правильного (с нуля)]
window.TEXTS = [
{
  id: "hockey-night",
  title: "A Night at the Arena",
  level: "A2+",
  topic: "Хоккей",
  text: `Last Saturday my friend Max and I went to a hockey game. We had bought the tickets online two weeks before, so we had great seats close to the ice. When we arrived, the arena was already full. Thousands of fans were wearing the team's colours, and the noise was incredible.

The game started badly for us. The other team scored in the first five minutes, and the fans around us went quiet. Our goalkeeper looked nervous. But in the second period everything changed. Our captain stole the puck, skated past two defenders and shot. Goal! Everybody jumped up and hugged strangers.

The third period was the most exciting part. With only forty seconds left, the score was 2–2. The coach called a timeout, and the whole arena {held its breath}. Then our youngest player scored the winning goal. I have never heard a crowd shout so loudly.

After the game we {hung out} near the arena for a while because we didn't want the evening to end. On the way home Max said, "Next season, let's buy tickets for every home game." I think it's a great idea.`,
  glossary: [
    ["arrive", "прибывать, приходить", "arrived"],
    ["incredible", "невероятный"],
    ["score", "забить (гол); счёт", "scored"],
    ["goalkeeper", "вратарь"],
    ["nervous", "нервный, взволнованный"],
    ["period", "период (в хоккее)"],
    ["steal", "украсть; отобрать", "stole", "stolen"],
    ["puck", "шайба"],
    ["skate", "кататься на коньках; ехать (на коньках)", "skated"],
    ["defender", "защитник", "defenders"],
    ["hug", "обнимать", "hugged"],
    ["stranger", "незнакомец", "strangers"],
    ["exciting", "захватывающий"],
    ["coach", "тренер"],
    ["hold one's breath", "затаить дыхание", "held its breath"],
    ["crowd", "толпа"],
    ["shout", "кричать"],
    ["loudly", "громко"],
    ["hang out", "тусоваться, проводить время", "hung out"],
    ["season", "сезон"]
  ],
  questions: [
    ["How did they get the tickets?", ["At the arena on the day of the game", "Online two weeks before", "From Max's friend"], 1],
    ["What happened in the first five minutes?", ["The other team scored", "Our captain scored", "The coach called a timeout"], 0],
    ["Who scored the winning goal?", ["The captain", "The goalkeeper", "The youngest player"], 2],
    ["What does Max want to do next season?", ["Play hockey himself", "Go to every home game", "Become a coach"], 1]
  ]
},
{
  id: "first-week-gym",
  title: "My First Week at the Gym",
  level: "A2+",
  topic: "Спорт",
  text: `For years I promised myself that I would {start going} to the gym. Every January I made the same plan, and every January I found a reason to wait. This autumn I finally did it. I bought a membership at a gym ten minutes from my house.

On the first day I felt a little lost. Everybody seemed to know exactly what to do, and I didn't even know how some machines worked. A trainer noticed me and offered to help. She showed me how to {warm up} properly and explained that good technique is more important than heavy weights.

We made a simple plan: three workouts a week, each about an hour long. Every workout includes squats, push-ups and a few exercises for the back. After the first workout my legs hurt so much that I could hardly walk downstairs. The trainer laughed and said that it was normal.

Now, after one week, I already feel {proud of} myself. I sleep better and have more energy during the day. I've also started to {pay attention to} what I eat. My goal is not to look like a superhero. I just want to {stick to} the plan for the next six months.`,
  glossary: [
    ["promise", "обещать", "promised"],
    ["start doing something", "начать что-то делать", "start going"],
    ["reason", "причина"],
    ["finally", "наконец"],
    ["membership", "абонемент; членство"],
    ["lost", "растерянный (букв. потерянный)"],
    ["seem", "казаться", "seemed"],
    ["notice", "заметить", "noticed"],
    ["offer", "предлагать", "offered"],
    ["warm up", "размяться"],
    ["properly", "правильно, как следует"],
    ["technique", "техника (выполнения)"],
    ["heavy", "тяжёлый"],
    ["weight", "вес; отягощение", "weights"],
    ["workout", "тренировка", "workouts"],
    ["include", "включать", "includes"],
    ["squat", "приседание", "squats"],
    ["push-up", "отжимание", "push-ups"],
    ["hurt", "болеть, причинять боль"],
    ["hardly", "едва, с трудом"],
    ["downstairs", "вниз (по лестнице)"],
    ["be proud of", "гордиться", "proud of"],
    ["pay attention to", "обращать внимание на"],
    ["goal", "цель"],
    ["stick to", "придерживаться"]
  ],
  questions: [
    ["When did the author finally start going to the gym?", ["In January", "This autumn", "Last summer"], 1],
    ["Who helped on the first day?", ["A friend", "Nobody", "A trainer"], 2],
    ["What is more important than heavy weights?", ["Good technique", "New clothes", "A long workout"], 0],
    ["What is the author's goal?", ["To look like a superhero", "To stick to the plan for six months", "To lose ten kilos"], 1]
  ]
},
{
  id: "flat-abroad",
  title: "Looking for a Flat in a New Country",
  level: "B1",
  topic: "Переезд",
  text: `When Anna moved to Lisbon for a new job, the hardest part was not the language or the weather. It was finding a place to live. She started {looking for} a flat a month before the move, but most of the good ones disappeared within a day.

Anna learned a few important things very quickly. First, many landlords ask for a deposit, which is usually {equal to} one or two months' rent. Second, she needed to show a work contract and sometimes even {bank statements}. Third, some advertisements looked {too good to be true}, and they were. One "owner" asked her to send money before she had seen the flat. Anna refused, and later she {found out} that it was a scam.

In the end she signed a contract for a small one-bedroom flat in a quiet neighbourhood. The rent includes water, but she pays for electricity and the internet separately. Before signing, she checked the flat carefully and took photos of every scratch on the walls, so the landlord can't keep her deposit later.

Her advice for anyone who is planning to move abroad is simple: start early, never pay before you see the place, and read the contract twice.`,
  glossary: [
    ["move", "переезжать; переезд", "moved"],
    ["look for", "искать", "looking for"],
    ["disappear", "исчезать", "disappeared"],
    ["within", "в течение, в пределах"],
    ["landlord", "арендодатель, хозяин жилья", "landlords"],
    ["deposit", "залог, депозит"],
    ["be equal to", "равняться", "equal to"],
    ["rent", "арендная плата; арендовать"],
    ["contract", "договор, контракт"],
    ["bank statement", "выписка из банка", "bank statements"],
    ["advertisement", "объявление, реклама", "advertisements"],
    ["too good to be true", "слишком хорошо, чтобы быть правдой"],
    ["owner", "владелец"],
    ["refuse", "отказаться", "refused"],
    ["find out", "узнать, выяснить", "found out"],
    ["scam", "мошенничество, развод"],
    ["sign", "подписать", "signed", "signing"],
    ["neighbourhood", "район"],
    ["electricity", "электричество"],
    ["separately", "отдельно"],
    ["carefully", "внимательно, тщательно"],
    ["scratch", "царапина"],
    ["advice", "совет"],
    ["abroad", "за границу; за границей"]
  ],
  questions: [
    ["What was the hardest part of moving for Anna?", ["The language", "Finding a place to live", "The weather"], 1],
    ["How much is a deposit usually?", ["One or two months' rent", "Half of the monthly rent", "One year's rent"], 0],
    ["What did the fake owner ask Anna to do?", ["Show her passport", "Pay by card", "Send money before seeing the flat"], 2],
    ["Why did Anna take photos of the scratches?", ["To post them online", "So the landlord can't keep her deposit", "To show her friends"], 1]
  ]
},
{
  id: "bank-account",
  title: "Opening a Bank Account",
  level: "A2+",
  topic: "Переезд · диалог",
  text: `Bank employee: Good morning! How can I help you?

Tom: Hi. {I'd like to} open a bank account. I've just moved here.

Bank employee: Of course. Can I see your passport and {proof of address}, please?

Tom: Here's my passport. For the address, I have my {rental contract}. Is that OK?

Bank employee: Yes, that's fine. What kind of account do you need?

Tom: Just a {current account} for my salary and everyday payments.

Bank employee: Our basic account is free. If you want a premium card, there's a monthly fee of three euros.

Tom: The basic one is enough, thanks. Can I use the card abroad?

Bank employee: Yes, but there's a small fee for withdrawing cash in other currencies. You can manage everything in our mobile app.

Tom: Great. How long will it take to get the card?

Bank employee: About five {working days}. We'll send it to your address.

Tom: Perfect. Thank you for your help!

Bank employee: {You're welcome}. Have a nice day!`,
  glossary: [
    ["employee", "сотрудник"],
    ["I'd like to", "я бы хотел(а)"],
    ["account", "счёт (в банке)"],
    ["proof of address", "подтверждение адреса"],
    ["rental contract", "договор аренды"],
    ["current account", "текущий (расчётный) счёт"],
    ["salary", "зарплата"],
    ["payment", "платёж", "payments"],
    ["basic", "базовый"],
    ["monthly", "ежемесячный"],
    ["fee", "плата, комиссия"],
    ["enough", "достаточно"],
    ["abroad", "за границей"],
    ["withdraw", "снимать (деньги)", "withdrawing"],
    ["cash", "наличные"],
    ["currency", "валюта", "currencies"],
    ["manage", "управлять, справляться"],
    ["working days", "рабочие дни"],
    ["You're welcome", "пожалуйста (в ответ на спасибо)"]
  ],
  questions: [
    ["Why does Tom need a bank account?", ["For his salary and everyday payments", "To save money for a car", "For his business"], 0],
    ["Which documents does the bank need?", ["Only a passport", "A work contract", "A passport and proof of address"], 2],
    ["Which account does Tom choose?", ["Premium", "Basic", "Student"], 1],
    ["How long will it take to get the card?", ["One day", "About a month", "About five working days"], 2]
  ]
},
{
  id: "digital-gifts",
  title: "Digital Gifts That People Collect",
  level: "B1",
  topic: "Технологии · деньги",
  text: `A few years ago, a gift in a messenger was just a small picture. You sent it, your friend smiled, and that was all. Today some digital gifts have become collectibles, and people buy and sell them like stamps or rare coins.

How does it work? A gift can be {turned into} a unique item with its own number, design and background. Because some designs are rare, collectors are ready to pay much more for them. The price {depends on} demand: when many people want the same gift, the price goes up, and when interest falls, the price drops.

For some people this is a hobby. They enjoy looking for beautiful or unusual designs and building a collection. For others it is a way to make money. They try to buy cheap, wait, and sell at a higher price. However, this market can be risky. Prices can change very fast, and nobody can predict them {for sure}.

Experts usually give the same advice: never invest money you can't afford to lose, follow the market for a while before you buy, and don't trust people who promise quick profit.`,
  glossary: [
    ["collectible", "предмет коллекционирования", "collectibles"],
    ["stamp", "почтовая марка", "stamps"],
    ["rare", "редкий"],
    ["coin", "монета", "coins"],
    ["turn into", "превращать в", "turned into"],
    ["unique", "уникальный"],
    ["item", "предмет, вещь"],
    ["background", "фон"],
    ["collector", "коллекционер", "collectors"],
    ["depend on", "зависеть от", "depends on"],
    ["demand", "спрос"],
    ["interest", "интерес"],
    ["drop", "падать, снижаться", "drops"],
    ["unusual", "необычный"],
    ["however", "однако"],
    ["market", "рынок"],
    ["risky", "рискованный"],
    ["predict", "предсказать"],
    ["for sure", "наверняка, точно"],
    ["invest", "вкладывать (деньги)"],
    ["afford", "позволить себе"],
    ["trust", "доверять"],
    ["profit", "прибыль"]
  ],
  questions: [
    ["What was a gift in a messenger a few years ago?", ["Just a small picture", "A real coin", "A unique item with a number"], 0],
    ["What does the price depend on?", ["The weather", "Demand", "The number of your friends"], 1],
    ["Why can this market be risky?", ["Gifts can disappear", "It is illegal", "Prices can change very fast"], 2],
    ["Which advice do experts give?", ["Never invest money you can't afford to lose", "Buy as many gifts as possible", "Trust people who promise quick profit"], 0]
  ]
},
{
  id: "english-series",
  title: "Learning English with TV Series",
  level: "B1",
  topic: "Учёба",
  text: `Watching TV series in English is one of the most enjoyable ways to learn the language. You hear how real people speak: fast, with jokes, short forms and everyday phrases that you will never find in a textbook.

At the beginning it can be frustrating. Characters speak quickly, and you might understand only half of the dialogue. That's why many learners {turn on} English subtitles. Subtitles help you connect the sound of a word with the way it is written. {Over time}, you will need them less and less.

{To get the most out of} series, don't just watch passively. Choose one or two new phrases from each episode and {write them down}. Pause the video and repeat lines after the actors. It may feel strange, but it's great practice for your pronunciation. It's also a good idea to rewatch an episode you liked a week later. You'll be surprised how much more you understand.

The most important thing is regularity. Twenty minutes every day is much better than four hours once a week. So find a series you really love, make yourself comfortable and press play.`,
  glossary: [
    ["enjoyable", "приятный, доставляющий удовольствие"],
    ["joke", "шутка", "jokes"],
    ["textbook", "учебник"],
    ["frustrating", "досадный, выматывающий"],
    ["character", "персонаж", "characters"],
    ["might", "может быть, возможно"],
    ["learner", "изучающий (язык)", "learners"],
    ["turn on", "включить"],
    ["subtitles", "субтитры"],
    ["connect", "связывать"],
    ["over time", "со временем"],
    ["get the most out of", "извлечь максимум из", "to get the most out of"],
    ["passively", "пассивно"],
    ["episode", "серия, эпизод"],
    ["write down", "записать", "write them down"],
    ["pause", "поставить на паузу"],
    ["repeat", "повторять"],
    ["line", "реплика; строка", "lines"],
    ["pronunciation", "произношение"],
    ["rewatch", "пересмотреть"],
    ["surprised", "удивлённый"],
    ["regularity", "регулярность"],
    ["comfortable", "удобный; make yourself comfortable = устройтесь поудобнее"]
  ],
  questions: [
    ["Why are TV series good for learning English?", ["They are always short", "You hear how real people speak", "They explain grammar rules"], 1],
    ["How do subtitles help?", ["They connect the sound of a word with its spelling", "They translate everything", "They make the video slower"], 0],
    ["What should you do with new phrases?", ["Ignore them", "Learn the whole episode by heart", "Choose one or two and write them down"], 2],
    ["What is the most important thing?", ["Regularity", "Watching four hours at once", "Watching only films"], 0]
  ]
}
];
