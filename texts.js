// Тексты для читалки. Новые тексты добавляет Claude.
// Формат: {фраза} в тексте = устойчивое выражение, переводится целиком.
// glossary: [основная форма, перевод, ...формы, как они встречаются в тексте]
// questions: [вопрос, [варианты], номер правильного (с нуля), уровень: "e" лёгкий | "m" средний | "h" сложный]
window.TEXTS = [
{
  id: "chess-online",
  title: "How Chess Conquered the Internet",
  level: "B1",
  topic: "Шахматы",
  text: `For most of its long history, chess had an image problem. People imagined two old men sitting silently in a park, or serious professors thinking for hours about a single move. The game was respected, but it was not exactly cool. Then, in the early 2020s, everything changed, and chess became one of the most popular games on the internet.

Several things happened at the same time. In 2020, millions of people were {stuck} at home because of the pandemic. They were bored, and they were looking for something to do online. A few months later, a TV series called The Queen's Gambit appeared on Netflix. It told the story of a young orphan girl who becomes a chess genius, and it was watched by tens of millions of households in its first month. Suddenly, everyone wanted to learn the game. Sales of chess sets went up dramatically, and websites like Chess.com and Lichess {could hardly} handle the number of new players.

Streaming also played a huge role. Professional players and entertainers started playing live on platforms like Twitch and YouTube, explaining their ideas and joking with viewers. Watching a strong player {think out loud} {turned out} to be surprisingly entertaining. Some chess streamers now have millions of followers, more than many famous footballers.

Online chess is also very different from the traditional version. Most games online are fast: in "blitz", each player has only three or five minutes for the whole game, and in "bullet", just one minute. This makes chess exciting to watch and easy to {fit into} a busy day. You can play a quick game on your phone while you are waiting for a bus.

Of course, the internet has also brought new problems. The biggest one is cheating. Because computer programs now play much better than any human, a dishonest player can secretly use one to choose the best moves. Websites use complex systems to detect cheaters, and they close thousands of accounts every month. Even at the highest level, cheating scandals have {made headlines}.

Despite these problems, most experts agree that the online boom has been good for chess. More children are learning the game, more women are {taking part}, and top players can {make a living} from streaming and online tournaments, not only from traditional competitions. Teachers say that chess helps students develop concentration, patience and logical thinking.

So if you haven't played since school, maybe it's time to {give it another try}. All you need is a phone and a few free minutes. Just be careful: many players say that "one more game" is the most dangerous phrase in chess, because it is almost never just one.`,
  glossary: [
    ["image", "имидж, образ"],
    ["silently", "молча"],
    ["respected", "уважаемый"],
    ["exactly", "точно, именно; not exactly = не то чтобы"],
    ["be stuck", "застрять", "stuck"],
    ["pandemic", "пандемия"],
    ["bored", "скучающий; кому скучно"],
    ["orphan", "сирота"],
    ["genius", "гений"],
    ["household", "семья, домохозяйство", "households"],
    ["suddenly", "внезапно"],
    ["sales", "продажи"],
    ["dramatically", "резко, сильно"],
    ["could hardly", "едва могли"],
    ["handle", "справляться с"],
    ["entertainer", "артист, развлекатель", "entertainers"],
    ["viewer", "зритель", "viewers"],
    ["think out loud", "рассуждать вслух"],
    ["turn out", "оказаться", "turned out"],
    ["surprisingly", "удивительно"],
    ["follower", "подписчик", "followers"],
    ["fit into", "вписать, уместить в"],
    ["cheating", "жульничество, читерство"],
    ["dishonest", "нечестный"],
    ["secretly", "тайно"],
    ["detect", "обнаруживать, выявлять"],
    ["cheater", "жулик, читер", "cheaters"],
    ["account", "аккаунт, учётная запись", "accounts"],
    ["make headlines", "попасть в заголовки новостей", "made headlines"],
    ["despite", "несмотря на"],
    ["boom", "бум, резкий рост"],
    ["take part", "участвовать", "taking part"],
    ["make a living", "зарабатывать на жизнь"],
    ["tournament", "турнир", "tournaments"],
    ["patience", "терпение"],
    ["give it another try", "попробовать ещё раз"]
  ],
  questions: [
    ["What image did chess have in the past?", ["A game for serious, older people", "A game for small children", "A dangerous hobby"], 0, "e"],
    ["What is The Queen's Gambit?", ["A chess website", "A TV series on Netflix", "A chess tournament"], 1, "e"],
    ["How much time does each player have in a bullet game?", ["Three minutes", "Five minutes", "One minute"], 2, "e"],
    ["What is the biggest problem of online chess?", ["Cheating", "Slow games", "Expensive apps"], 0, "e"],
    ["Why did many people start playing chess online in 2020?", ["Chess became part of school programmes", "They were at home because of the pandemic and looking for something to do", "Chess websites gave away prizes"], 1, "m"],
    ["What do chess streamers do?", ["Organise tournaments in parks", "Write books about openings", "Play live online and explain their ideas to viewers"], 2, "m"],
    ["How do websites fight cheating?", ["They use systems to detect cheaters and close their accounts", "They ban phones", "They only allow slow games"], 0, "m"],
    ["What does \"could hardly handle the number of new players\" suggest?", ["Websites had problems because there were so many new players", "Websites didn't want new players", "New players couldn't use the websites"], 0, "h"],
    ["Why does the author mention that some streamers have more followers than famous footballers?", ["To criticise footballers", "To show how popular chess has become online", "To explain how streamers earn money"], 1, "h"],
    ["What is the joke in the last sentence?", ["Chess can be physically dangerous", "Online games often crash", "Once you start playing, it's hard to stop"], 2, "h"]
  ]
},
{
  id: "football-world-game",
  title: "Why Football Is the World's Game",
  level: "B1",
  topic: "Футбол",
  text: `Every four years, billions of people around the world watch {at least} part of the FIFA World Cup. No other sport {comes close}. Football is played in almost every country on Earth, from the beaches of Brazil to the frozen fields of Siberia. But why has this simple game become so popular?

The first reason is its simplicity. To play football, you don't need expensive equipment. A ball, or even something that looks like a ball, is enough. Children in poor neighbourhoods often make balls from plastic bags and string, and they use stones or shoes as goalposts. The basic rules are easy to understand: put the ball in the other team's goal and don't touch it with your hands. A child can learn them in five minutes.

The modern game was born in England in the nineteenth century. In 1863, a group of clubs met in a London pub and created the Football Association, which wrote the first official rules. British sailors, workers and teachers then carried the game around the world. In many countries, the oldest clubs were founded by British people, which is why some of them still have English names, like Athletic Bilbao in Spain or Genoa Cricket and Football Club in Italy.

Another reason for football's success is that it is unpredictable. In basketball, the better team almost always wins. In football, goals are rare, so one lucky moment can decide a match. A small team from a small town can sometimes beat a famous club with a budget a hundred times bigger. Fans love these surprises, and they keep everybody watching until the final whistle.

Football is also much more than a game. For many people, supporting a club is part of their identity, something they inherit from their parents and {pass on} to their children. Some rivalries between clubs, such as Real Madrid and Barcelona or Celtic and Rangers in Glasgow, are connected to history, politics and religion. On match days, whole cities can be divided into two colours.

Finally, football connects people who have nothing else {in common}. Two strangers who don't speak the same language can have a "conversation" about Messi or Ronaldo using just names and gestures. When a national team plays at the World Cup, whole countries stop working and celebrate together, whatever their age, job or income.

Of course, the sport has its dark sides, from corruption scandals to violent fans. But for billions of people, football remains the most beautiful game in the world. As the famous Liverpool manager Bill Shankly once joked, "Some people believe football is {a matter of life and death}. I can assure you it is much, much more important than that."`,
  glossary: [
    ["at least", "по крайней мере, хотя бы"],
    ["come close", "приблизиться, сравниться", "comes close"],
    ["frozen", "замёрзший"],
    ["simplicity", "простота"],
    ["equipment", "снаряжение, оборудование"],
    ["neighbourhood", "район", "neighbourhoods"],
    ["string", "верёвка, бечёвка"],
    ["goalpost", "штанга ворот", "goalposts"],
    ["touch", "трогать, касаться"],
    ["association", "ассоциация"],
    ["sailor", "моряк", "sailors"],
    ["found", "основать", "founded"],
    ["unpredictable", "непредсказуемый"],
    ["rare", "редкий"],
    ["lucky", "удачный, везучий"],
    ["beat", "победить, обыграть"],
    ["budget", "бюджет"],
    ["whistle", "свисток"],
    ["support", "поддерживать; болеть за (команду)", "supporting"],
    ["identity", "идентичность, часть личности"],
    ["inherit", "унаследовать"],
    ["pass on", "передать (дальше)"],
    ["rivalry", "соперничество", "rivalries"],
    ["religion", "религия"],
    ["divided", "разделённый"],
    ["in common", "общего (have nothing in common = не иметь ничего общего)"],
    ["gesture", "жест", "gestures"],
    ["celebrate", "праздновать"],
    ["whatever", "каким бы ни был; что бы ни"],
    ["income", "доход"],
    ["corruption", "коррупция"],
    ["violent", "агрессивный, жестокий"],
    ["remain", "оставаться", "remains"],
    ["a matter of life and death", "вопрос жизни и смерти"],
    ["assure", "уверять"]
  ],
  questions: [
    ["Where was the modern game of football born?", ["Brazil", "England", "Spain"], 1, "e"],
    ["What do children in poor neighbourhoods sometimes use as goalposts?", ["Stones or shoes", "Trees", "Chairs"], 0, "e"],
    ["When was the Football Association created?", ["1763", "1963", "1863"], 2, "e"],
    ["Who was Bill Shankly?", ["A Liverpool manager", "A Real Madrid player", "The founder of FIFA"], 0, "e"],
    ["Why do some old clubs in Spain and Italy have English names?", ["Their owners are English", "They were founded by British people", "It was a FIFA rule"], 1, "m"],
    ["According to the text, why is football unpredictable?", ["Referees often make mistakes", "Matches are very long", "Goals are rare, so one lucky moment can decide a match"], 2, "m"],
    ["What does the text say about supporting a club?", ["It is often passed from parents to children", "It is mostly a hobby for teenagers", "The city usually chooses it for you"], 0, "m"],
    ["Why does the author compare football with basketball?", ["To show that basketball is more popular", "To explain why surprises are more common in football", "To show that footballers are better athletes"], 1, "h"],
    ["What is the main idea of the paragraph about strangers and the World Cup?", ["Football unites people who are otherwise very different", "Football fans don't need to learn languages", "The World Cup is bad for the economy"], 0, "h"],
    ["Why is Shankly's quote funny?", ["He was talking about a real tragedy", "Football is really dangerous", "He exaggerates on purpose: nothing is more important than life and death"], 2, "h"]
  ]
},
{
  id: "football-money",
  title: "How Football Clubs Make Money",
  level: "B1+",
  topic: "Футбол · деньги",
  text: `When a top club pays more than 100 million euros for one player, many fans ask the same question: where does all this money come from? Modern football is a huge business, and the biggest clubs earn more than many medium-sized companies. Their income usually comes from three main sources.

The first and most important source is {broadcasting rights}. Television companies and streaming services pay enormous amounts to show matches. The English Premier League, for example, sells its rights for billions of pounds every few years, and the money is shared between its twenty clubs. This is why even a team at the bottom of the English league can be richer than a top club in many other countries. For smaller leagues, this gap is a serious problem: their best players are quickly bought by richer clubs abroad.

The second source is commercial income. This includes {sponsorship deals}, shirt sales and everything else connected to the club's brand. A famous company name on the front of a shirt can be worth tens of millions per year. Clubs also sell the name of their stadium: that is why some arenas are named after airlines, banks or insurance companies. Big clubs travel to Asia and America in summer, not only to train, but also to win new fans who will buy shirts and subscribe to their channels.

The third source is match-day income: tickets, food, drinks and expensive VIP boxes. For a club with a large stadium, this can be a lot of money, but its share has become smaller over the years. Today, for most top clubs, it {makes up} less than a quarter of their total income.

Then there is the {transfer market}. Clubs buy and sell players, and some survive mainly by finding talented teenagers cheaply and selling them later for much more. Clubs in Portugal, the Netherlands and Belgium are famous for this model. A young player who costs almost nothing at sixteen can be sold for fifty million at twenty-one.

But football clubs also spend a lot. Players' salaries are {by far} the biggest cost; in many clubs, they take more than half of the budget. Because fans demand success, owners are often tempted to spend money they don't have. To {deal with} this, organisations like UEFA have introduced financial rules which limit how much clubs can lose. Clubs that break these rules can be fined or even banned from European competitions.

So the next time you buy a shirt or a streaming subscription to watch your team, remember: you are not just a fan. You are also a customer of a very large business, and your money is part of the reason why your favourite players earn so much.`,
  glossary: [
    ["earn", "зарабатывать"],
    ["medium-sized", "средних размеров"],
    ["source", "источник", "sources"],
    ["broadcasting rights", "права на трансляцию"],
    ["enormous", "огромный"],
    ["amount", "сумма, количество", "amounts"],
    ["share", "делить; доля", "shared"],
    ["bottom", "низ, дно (таблицы)"],
    ["gap", "разрыв"],
    ["commercial", "коммерческий"],
    ["sponsorship deal", "спонсорский контракт", "sponsorship deals"],
    ["brand", "бренд"],
    ["worth", "стоящий; be worth = стоить"],
    ["insurance", "страхование"],
    ["subscribe", "подписаться"],
    ["make up", "составлять", "makes up"],
    ["quarter", "четверть"],
    ["transfer market", "трансферный рынок"],
    ["survive", "выживать"],
    ["talented", "талантливый"],
    ["cheaply", "дёшево"],
    ["salary", "зарплата", "salaries"],
    ["by far", "безусловно, с большим отрывом"],
    ["cost", "расход, затраты; стоить"],
    ["demand", "требовать"],
    ["tempt", "соблазнять; be tempted = испытывать соблазн", "tempted"],
    ["deal with", "справиться с, решить"],
    ["introduce", "вводить", "introduced"],
    ["limit", "ограничивать"],
    ["break the rules", "нарушать правила", "break"],
    ["fine", "оштрафовать; штраф", "fined"],
    ["ban", "запретить, отстранить", "banned"],
    ["customer", "клиент, покупатель"]
  ],
  questions: [
    ["What is the most important source of income for big clubs?", ["Tickets", "Broadcasting rights", "Shirt sales"], 1, "e"],
    ["How many clubs share the Premier League TV money?", ["Twenty", "Ten", "Fifty"], 0, "e"],
    ["Why do big clubs travel to Asia and America in summer?", ["Only for holidays", "To play in local leagues", "To train and win new fans"], 2, "e"],
    ["What is the biggest cost for most clubs?", ["Players' salaries", "Stadiums", "Travel"], 0, "e"],
    ["Why can a weak English team be richer than a top club in another country?", ["English fans pay more for tickets", "Premier League TV money is shared between all its clubs", "English clubs pay lower taxes"], 1, "m"],
    ["Why are some stadiums named after banks or airlines?", ["Clubs sell the name of the stadium", "These companies built the stadiums", "The law requires it"], 0, "m"],
    ["What business model are clubs in Portugal and the Netherlands famous for?", ["Buying famous old players", "Selling stadium names", "Buying young talent cheaply and selling it later"], 2, "m"],
    ["Why is the money gap a serious problem for smaller leagues?", ["Their stadiums are too small", "They lose their best players to richer clubs abroad", "Their seasons are too short"], 1, "h"],
    ["Why have UEFA's financial rules been introduced?", ["To stop clubs spending money they don't have", "To make tickets cheaper", "To help players earn more"], 0, "h"],
    ["What is the author's point in the last paragraph?", ["Fans should stop buying shirts", "Streaming is better than going to the stadium", "Fans' money is an important part of football's business"], 2, "h"]
  ]
},
{
  id: "footballer-day",
  title: "A Day in the Life of a Professional Footballer",
  level: "B1",
  topic: "Футбол · спорт",
  text: `Many people imagine that professional footballers have an easy life: they train for an hour or two, play once a week and spend the rest of the time driving expensive cars. The reality is very different. At the top level, being a footballer is a full-time job that controls almost every part of a player's day.

A typical day starts early. Players usually arrive at the {training ground} around eight or nine in the morning. Before they even touch a ball, they have a breakfast prepared by the club's chefs and go through medical checks. Many clubs ask players to wear special devices which measure how well they slept and how tired their muscles are. If the data shows that a player is too tired, the coaches may change his training or let him rest.

Training itself rarely lasts more than ninety minutes, but it is very intense. It starts with a warm-up, followed by exercises with the ball, tactical work and small games. Every player wears a GPS vest that records how far he runs, how fast he sprints and how many times he changes direction. A midfielder can run more than eleven kilometres in one match, so this information helps the staff {keep track of} each player's fitness.

After training, the work continues. Players spend time in the gym, often doing exercises to prevent injuries {rather than} to build big muscles. Then comes recovery: ice baths, massage, stretching and sometimes a short sleep. Lunch is planned by nutritionists. Players eat a lot of carbohydrates, such as rice and pasta, before matches, and more protein afterwards to help their muscles repair.

In the afternoon, there may be video sessions. Coaches show clips of the next opponent and explain how the team will press, defend and attack. Some players also work individually with analysts to study their own mistakes. {On top of that}, there are interviews, sponsor events and community visits to hospitals or schools.

Even free time is not completely free. Players have to go to bed early, avoid alcohol and {junk food}, and be careful on social media, where one stupid comment can become a scandal. During the season, they rarely have a whole weekend off, and they spend many nights in hotels before {away games}.

Of course, top footballers are extremely well paid, and most of them would not change their job for anything. But behind the ninety minutes we see on TV, there are hundreds of hours of hard and often boring work. Many players describe it like this: "The match is the reward. The rest of the week is the price."`,
  glossary: [
    ["reality", "реальность"],
    ["full-time", "на полный рабочий день"],
    ["training ground", "тренировочная база"],
    ["chef", "повар", "chefs"],
    ["device", "устройство", "devices"],
    ["measure", "измерять"],
    ["muscle", "мышца", "muscles"],
    ["data", "данные"],
    ["rarely", "редко"],
    ["last", "длиться", "lasts"],
    ["intense", "интенсивный"],
    ["warm-up", "разминка"],
    ["tactical", "тактический"],
    ["vest", "жилет, манишка"],
    ["record", "записывать, фиксировать", "records"],
    ["sprint", "делать рывок, спринтовать", "sprints"],
    ["direction", "направление"],
    ["midfielder", "полузащитник"],
    ["staff", "персонал, штаб"],
    ["keep track of", "следить за, отслеживать"],
    ["fitness", "физическая форма"],
    ["prevent", "предотвращать"],
    ["injury", "травма", "injuries"],
    ["rather than", "а не, вместо того чтобы"],
    ["recovery", "восстановление"],
    ["stretching", "растяжка"],
    ["nutritionist", "диетолог, нутрициолог", "nutritionists"],
    ["carbohydrates", "углеводы"],
    ["protein", "белок"],
    ["afterwards", "потом, после этого"],
    ["repair", "восстанавливать(ся), чинить"],
    ["opponent", "соперник"],
    ["defend", "обороняться"],
    ["analyst", "аналитик", "analysts"],
    ["on top of that", "вдобавок ко всему"],
    ["community", "местное сообщество"],
    ["avoid", "избегать"],
    ["junk food", "вредная еда, фастфуд"],
    ["away game", "выездной матч", "away games"],
    ["extremely", "чрезвычайно"],
    ["reward", "награда"]
  ],
  questions: [
    ["When do players usually arrive at the training ground?", ["Around eight or nine in the morning", "At noon", "In the afternoon"], 0, "e"],
    ["How long does training usually last?", ["Three hours", "Rarely more than ninety minutes", "Thirty minutes"], 1, "e"],
    ["How far can a midfielder run in one match?", ["Five kilometres", "Twenty-five kilometres", "More than eleven kilometres"], 2, "e"],
    ["What do players eat before matches?", ["Mostly protein", "Fast food", "A lot of carbohydrates like rice and pasta"], 2, "e"],
    ["Why do players wear GPS vests?", ["To record how far and how fast they run", "To find them if they get lost", "For sponsors"], 0, "m"],
    ["What is the main aim of gym work for footballers?", ["Building big muscles", "Preventing injuries", "Losing weight"], 1, "m"],
    ["What happens in video sessions?", ["Players watch films to relax", "Coaches show clips of the next opponent and explain tactics", "Players record videos for social media"], 1, "m"],
    ["What does the author want to show in the first paragraph?", ["That footballers drive expensive cars", "That many people have a wrong idea about footballers' lives", "That footballers train too little"], 1, "h"],
    ["Why does the text say that \"even free time is not completely free\"?", ["Players must follow rules about sleep, food and behaviour", "Players must work a second job", "Clubs take away their phones"], 0, "h"],
    ["What does \"The match is the reward. The rest of the week is the price.\" mean?", ["Players earn money only for matches", "Players pay to play matches", "Hard everyday work is the price players pay for the joy of playing"], 2, "h"]
  ]
},
{
  id: "japan",
  title: "Japan: Where Tradition Meets the Future",
  level: "B1",
  topic: "Страны",
  text: `Japan is a country of contrasts. In Tokyo, one of the largest cities in the world, you can ride a train that travels at more than 300 kilometres per hour and then, ten minutes later, find yourself in a quiet temple garden that looks almost the same as it did four hundred years ago. This mix of old and new is what makes Japan so fascinating for visitors.

Japan {consists of} four main islands and thousands of smaller ones. Most of the country is covered by mountains and forests, so its population of around 124 million people lives mainly on narrow {coastal plains}. This is why Japanese cities are so crowded and why space is so valuable. Apartments are small, and many people commute for an hour or more to get to work.

Japan is also famous for its efficiency. Trains are so punctual that a delay of a few minutes is announced with an apology. The famous Shinkansen, or "bullet train", has carried billions of passengers since 1964 without a single fatal crash. Streets are remarkably clean, even though there are very few public {rubbish bins}: people simply take their rubbish home.

Politeness plays a central role in everyday life. People bow when they greet each other, thank each other and apologise. Shoes are taken off before entering a home, and in some restaurants too. Tipping is not common and can even seem rude, because good service is considered normal. Many visitors are surprised that lost wallets are often returned to their owners with all the money still inside.

Japanese food has become popular all over the world, but sushi is only a small part of it. Locals eat ramen noodles, rice with grilled fish, tempura and countless regional dishes. {Convenience stores}, called konbini, are open twenty-four hours a day and sell surprisingly good fresh food. Meals are usually eaten with chopsticks, and it is polite to say "itadakimasu" before eating.

However, Japan also faces serious challenges. Its population is ageing and shrinking: more people die each year than are born, and almost thirty percent of Japanese people are over sixty-five. Many villages in the countryside are becoming empty. The country is also regularly hit by earthquakes and typhoons, so buildings are designed to survive strong shaking, and children practise earthquake drills at school.

For foreigners who want to live there, the language is the biggest barrier. Japanese uses three different writing systems, including thousands of Chinese characters. But the number of foreign workers is growing, and the government is slowly opening the country to immigration. For many people who love the culture, the effort is definitely {worth it}.`,
  glossary: [
    ["contrast", "контраст", "contrasts"],
    ["ride", "ехать (на транспорте)"],
    ["temple", "храм"],
    ["fascinating", "увлекательный, завораживающий"],
    ["consist of", "состоять из", "consists of"],
    ["island", "остров", "islands"],
    ["narrow", "узкий"],
    ["coastal plain", "прибрежная равнина", "coastal plains"],
    ["crowded", "переполненный"],
    ["valuable", "ценный"],
    ["commute", "ездить на работу (издалека)"],
    ["efficiency", "эффективность"],
    ["punctual", "пунктуальный"],
    ["delay", "задержка, опоздание"],
    ["announce", "объявлять", "announced"],
    ["apology", "извинение"],
    ["passenger", "пассажир", "passengers"],
    ["fatal", "смертельный"],
    ["crash", "авария, крушение"],
    ["remarkably", "удивительно, замечательно"],
    ["rubbish bin", "мусорный бак, урна", "rubbish bins"],
    ["rubbish", "мусор"],
    ["politeness", "вежливость"],
    ["bow", "кланяться"],
    ["greet", "здороваться, приветствовать"],
    ["apologise", "извиняться"],
    ["tipping", "чаевые (обычай давать их)"],
    ["rude", "грубый, невежливый"],
    ["wallet", "кошелёк", "wallets"],
    ["countless", "бесчисленный"],
    ["regional", "региональный, местный"],
    ["dish", "блюдо", "dishes"],
    ["convenience store", "круглосуточный магазин у дома", "convenience stores"],
    ["chopsticks", "палочки для еды"],
    ["face", "сталкиваться с", "faces"],
    ["challenge", "вызов, трудная задача", "challenges"],
    ["ageing", "стареющий"],
    ["shrink", "сокращаться, уменьшаться", "shrinking"],
    ["countryside", "сельская местность"],
    ["earthquake", "землетрясение", "earthquakes"],
    ["shaking", "тряска"],
    ["drill", "учебная тревога, тренировка", "drills"],
    ["barrier", "барьер"],
    ["character", "иероглиф, символ", "characters"],
    ["effort", "усилие"],
    ["worth it", "оно того стоит"]
  ],
  questions: [
    ["How fast can trains in Japan travel?", ["More than 300 km/h", "About 100 km/h", "About 600 km/h"], 0, "e"],
    ["How many main islands does Japan have?", ["Two", "Four", "Seven"], 1, "e"],
    ["What do people in Japan do with their rubbish in the street?", ["Throw it in public bins", "Leave it on the street", "Take it home"], 2, "e"],
    ["What are konbini?", ["Traditional restaurants", "Convenience stores open 24 hours", "Train stations"], 1, "e"],
    ["Why are Japanese cities so crowded?", ["Most of the country is mountains and forests", "People don't like the countryside", "Building in villages is not allowed"], 0, "m"],
    ["Why can tipping seem rude in Japan?", ["Japanese people don't like money", "Good service is considered normal", "Tips are illegal"], 1, "m"],
    ["What problem does Japan's population have?", ["It is growing too fast", "Too many young people come from abroad", "It is ageing and shrinking"], 2, "m"],
    ["What does \"a delay of a few minutes is announced with an apology\" tell us?", ["Trains are often late", "Punctuality is taken very seriously", "Passengers complain a lot"], 1, "h"],
    ["Why do children practise earthquake drills at school?", ["Earthquakes happen regularly in Japan", "It is part of a sports lesson", "School buildings are very old"], 0, "h"],
    ["What is the author's view of living in Japan as a foreigner?", ["It is impossible", "It is easy for everyone", "The language is difficult, but for many the effort is worth it"], 2, "h"]
  ]
},
{
  id: "iceland",
  title: "Iceland: An Island of Fire and Ice",
  level: "B1",
  topic: "Страны",
  text: `Iceland is a small island in the North Atlantic, just south of the Arctic Circle. With fewer than 400,000 people, it has a smaller population than many European cities, but it is one of the most unusual and beautiful countries in the world. Its nickname, "the land of fire and ice", describes it perfectly.

The "ice" part is easy to understand. Glaciers cover about a tenth of the country, and winters are long and dark. In December, the sun rises around eleven in the morning and sets at about half past three. However, {thanks to} the warm Gulf Stream, the climate is milder than most people expect. Winters in Reykjavik, the capital, are much warmer than in Moscow. Summers, {on the other hand}, are cool, but the days seem endless: in June it never really gets dark.

The "fire" part comes from volcanoes. Iceland sits on the border between two {tectonic plates}, which are slowly moving apart. {As a result}, the island has around thirty active volcanic systems, and eruptions happen every few years. In 2010, the eruption of Eyjafjallajökull sent so much ash into the sky that flights across Europe were cancelled for days, and millions of passengers were stuck at airports.

Icelanders have learned to {make use of} this dangerous power. Almost all of the country's electricity and heating comes from renewable sources: hydroelectric power from rivers and geothermal energy from hot water under the ground. Homes are heated by water from natural {hot springs}, and outdoor swimming pools are open {all year round}, even in the middle of winter. Going to the local pool and sitting in a {hot tub} is an important social activity, a bit like going to a café in other countries.

The country's economy {used to} depend mainly on fishing. Today, tourism is just as important. Every year, millions of visitors come to see waterfalls, black sand beaches, glaciers, whales and, in winter, the {northern lights}. This has brought money, but also problems: in some popular places, there are now more tourists than locals, and prices for food and accommodation are among the highest in Europe.

Icelanders are proud of their language, which has changed very little since the time of the Vikings. Instead of borrowing foreign words, they often create new Icelandic ones. The word for "computer", for example, combines the old words for "number" and "prophetess". At the same time, most Icelanders speak excellent English, so visitors have no problems communicating.

One more surprising fact: Iceland has no army, and it regularly appears at the top of international rankings for safety, equality and quality of life. Living on a cold volcanic rock in the middle of the ocean, it seems, can be surprisingly good.`,
  glossary: [
    ["nickname", "прозвище"],
    ["describe", "описывать", "describes"],
    ["glacier", "ледник", "glaciers"],
    ["rise", "подниматься, вставать (о солнце)", "rises"],
    ["set", "садиться (о солнце)", "sets"],
    ["thanks to", "благодаря"],
    ["mild", "мягкий (о климате)", "milder"],
    ["expect", "ожидать"],
    ["on the other hand", "с другой стороны"],
    ["endless", "бесконечный"],
    ["volcano", "вулкан", "volcanoes"],
    ["border", "граница"],
    ["tectonic plate", "тектоническая плита", "tectonic plates"],
    ["apart", "в разные стороны, врозь"],
    ["as a result", "в результате"],
    ["eruption", "извержение", "eruptions"],
    ["ash", "пепел"],
    ["cancel", "отменять", "cancelled"],
    ["make use of", "использовать, извлекать пользу из"],
    ["heating", "отопление"],
    ["renewable", "возобновляемый"],
    ["hydroelectric", "гидроэлектрический"],
    ["geothermal", "геотермальный"],
    ["hot spring", "горячий источник", "hot springs"],
    ["all year round", "круглый год"],
    ["hot tub", "горячая ванна, джакузи"],
    ["used to", "раньше (делал что-то, а теперь нет)"],
    ["waterfall", "водопад", "waterfalls"],
    ["whale", "кит", "whales"],
    ["northern lights", "северное сияние"],
    ["accommodation", "жильё (временное), проживание"],
    ["proud", "гордый; be proud of = гордиться"],
    ["borrow", "заимствовать, брать взаймы", "borrowing"],
    ["combine", "объединять, сочетать", "combines"],
    ["prophetess", "пророчица"],
    ["army", "армия"],
    ["ranking", "рейтинг", "rankings"],
    ["equality", "равенство"]
  ],
  questions: [
    ["How many people live in Iceland?", ["Fewer than 400,000", "About 4 million", "About 40 million"], 0, "e"],
    ["Where does most of Iceland's electricity come from?", ["Coal and gas", "Renewable sources like rivers and hot water", "Nuclear power"], 1, "e"],
    ["What happened in 2010?", ["A volcanic eruption cancelled flights across Europe", "Iceland built its first airport", "An earthquake destroyed Reykjavik"], 0, "e"],
    ["What did Iceland's economy mainly depend on in the past?", ["Tourism", "Banking", "Fishing"], 2, "e"],
    ["Why is Iceland's climate milder than people expect?", ["Because of the volcanoes", "Because of the warm Gulf Stream", "Because the island is small"], 1, "m"],
    ["Why does Iceland have so many volcanoes?", ["It sits on the border between two tectonic plates", "It is close to the Arctic", "It has many mountains"], 0, "m"],
    ["What problems has tourism brought?", ["Fewer flights", "Too many tourists in some places and very high prices", "Polluted rivers"], 1, "m"],
    ["According to the text, going to the swimming pool in Iceland is similar to...", ["doing sport at a gym", "going to a café in other countries", "visiting a doctor"], 1, "h"],
    ["What does the example of the word \"computer\" show?", ["Icelanders don't use computers much", "Icelandic borrows many English words", "Icelanders prefer creating their own words to borrowing"], 2, "h"],
    ["What is the main idea of the last paragraph?", ["Despite harsh nature, life in Iceland is good", "Iceland needs an army", "Icelanders are unhappy because of the cold"], 0, "h"]
  ]
},
{
  id: "canada",
  title: "Canada: A Country Built by Immigrants",
  level: "B1",
  topic: "Страны · переезд",
  text: `Canada is the second-largest country in the world by area, but it has only about 41 million inhabitants. Most of them live within a few hundred kilometres of the border with the United States, where the climate is less severe. The north is huge, cold and almost empty. Yet this enormous, quiet country has become one of the most popular destinations for people who want to start a new life abroad.

Immigration is part of Canada's identity. {Apart from} the Indigenous peoples, who have lived there for thousands of years, almost every Canadian family came from somewhere else {at some point}. Today, about a quarter of the population was born outside the country. In cities like Toronto and Vancouver, the share is much higher, and you can hear dozens of languages on a single bus ride. Toronto is often called one of the most multicultural cities on the planet.

Unlike many countries, Canada actively invites newcomers. Its population is ageing and the economy needs workers, so every year the government accepts hundreds of thousands of new {permanent residents}. Many of them come through a points-based system: applicants receive points for their age, education, work experience and, very importantly, their knowledge of English or French. A good result in a language exam such as IELTS can make a huge difference. That's right: your English level can directly affect your chances of moving to Canada.

French is not just a formality. Canada has two official languages, and in the province of Quebec, French is the main language of work, school and everyday life. Montreal, its largest city, is one of the biggest French-speaking cities in the world. Government documents, product labels and even cereal boxes across the country are printed in both languages.

Life in Canada has many advantages. The country is considered safe and stable, and the public healthcare system covers most medical services for residents. Nature is spectacular, from the Rocky Mountains to millions of lakes. Canadians have a reputation for being friendly and polite; they apologise so often that "sorry" has become a national joke.

However, newcomers also face difficulties. Housing in big cities is very expensive, and finding a first job can be hard, because many employers ask for "Canadian experience". Some immigrants with university degrees {end up} working as taxi drivers or in shops for several years before they can work in their profession again. And then there is the winter: in many regions, temperatures fall below minus twenty for weeks.

Still, every year hundreds of thousands of people decide that the challenges are {worth it}. For many of them, the journey starts in exactly the same way: with an English exam and the hope of getting the best possible score.`,
  glossary: [
    ["area", "площадь; территория"],
    ["inhabitant", "житель", "inhabitants"],
    ["severe", "суровый"],
    ["yet", "однако, тем не менее"],
    ["destination", "место назначения, направление", "destinations"],
    ["identity", "идентичность, самосознание"],
    ["apart from", "кроме, помимо"],
    ["Indigenous", "коренной"],
    ["at some point", "в какой-то момент"],
    ["quarter", "четверть"],
    ["dozens", "десятки"],
    ["multicultural", "многокультурный"],
    ["unlike", "в отличие от"],
    ["newcomer", "новоприбывший, новичок", "newcomers"],
    ["accept", "принимать"],
    ["permanent resident", "постоянный житель (с ПМЖ)", "permanent residents"],
    ["points-based", "балльный"],
    ["applicant", "заявитель, кандидат", "applicants"],
    ["receive", "получать"],
    ["affect", "влиять на"],
    ["formality", "формальность"],
    ["official", "официальный"],
    ["province", "провинция"],
    ["label", "этикетка", "labels"],
    ["cereal", "хлопья (для завтрака)"],
    ["advantage", "преимущество", "advantages"],
    ["stable", "стабильный"],
    ["healthcare", "здравоохранение"],
    ["spectacular", "потрясающий, зрелищный"],
    ["reputation", "репутация"],
    ["housing", "жильё"],
    ["employer", "работодатель", "employers"],
    ["degree", "диплом, учёная степень", "degrees"],
    ["end up", "в итоге оказаться, закончить тем, что"],
    ["profession", "профессия"],
    ["worth it", "оно того стоит"],
    ["journey", "путь, путешествие"],
    ["score", "балл, результат"]
  ],
  questions: [
    ["Where do most Canadians live?", ["In the north", "Near the border with the United States", "On islands"], 1, "e"],
    ["What are Canada's two official languages?", ["English and Spanish", "French and Spanish", "English and French"], 2, "e"],
    ["In which province is French the main language?", ["Quebec", "Ontario", "British Columbia"], 0, "e"],
    ["Which word has become a national joke in Canada?", ["\"Sorry\"", "\"Hello\"", "\"Winter\""], 0, "e"],
    ["Why does Canada actively invite immigrants?", ["Its population is ageing and the economy needs workers", "It wants to collect more taxes", "The north needs more soldiers"], 0, "m"],
    ["What gives applicants points in the immigration system?", ["Hobbies and family size", "Age, education, work experience and language skills", "The amount of money they bring"], 1, "m"],
    ["Why is finding a first job hard for many newcomers?", ["There are no jobs in Canada", "Employers often ask for Canadian experience", "Newcomers can't work for the first year"], 1, "m"],
    ["Why does the author write \"That's right: your English level can directly affect your chances\"?", ["To connect the text to the reader's own goal of learning English", "To criticise the exam", "To advertise IELTS courses"], 0, "h"],
    ["What does the example of cereal boxes show?", ["Canadians eat a lot of cereal", "Both official languages are used everywhere, even on everyday products", "Food in Canada comes from France"], 1, "h"],
    ["Which statement best summarises the text?", ["Canada is easy for everyone and has no problems", "Canada is closed to immigrants", "Canada welcomes immigrants and offers a good life, but newcomers face real challenges"], 2, "h"]
  ]
},
{
  id: "dubai",
  title: "Dubai: From Desert Town to Global City",
  level: "B1",
  topic: "Страны",
  text: `Sixty years ago, Dubai was a small town on the edge of the desert. Most of its residents lived in simple houses, and the local economy depended on fishing, trade and diving for pearls. There were no tall buildings, few paved roads and no airport {worth mentioning}. Today, Dubai is a city of more than three million people, with the world's tallest building, one of its busiest airports and some of the most luxurious hotels on Earth. How did this happen so fast?

The story begins with oil, which was discovered in 1966. The rulers of Dubai used the money to build roads, ports, schools and hospitals. But they also understood something important: Dubai's oil reserves were small and would not last forever. So instead of {relying on} oil, they decided to turn the city into a centre for trade, tourism, finance and transport. Today, oil makes up only a tiny share of Dubai's economy.

One of the secrets of Dubai's success is its location. It lies between Europe, Asia and Africa, and about a third of the world's population lives within a four-hour flight. Dubai's airport has become a giant hub where millions of travellers change planes every year, and the port of Jebel Ali is one of the largest in the world.

The city has also attracted people with low taxes and a business-friendly environment. There is no personal {income tax}, so many companies and professionals have moved there. As a result, Dubai is extremely international: the large majority of its residents are foreigners, mostly from India, Pakistan, the Philippines and many other countries. English is the language most people use at work, even though Arabic is the official language.

Life in Dubai can feel like science fiction. You can go skiing on real snow inside a shopping mall while it is forty-five degrees outside. Some police cars are luxury sports cars, and whole islands have been built in the sea {in the shape of} palm trees. Shopping malls are not just shops but entire worlds, with aquariums, cinemas and {ice rinks}.

But the city has another side. In summer, temperatures regularly exceed forty degrees, and life moves indoors, from one air-conditioned building to another. Many of the workers who built the city's towers came from poor countries and worked in hard conditions for low wages; their treatment has been criticised by {human rights} organisations. Visitors and residents must also respect strict local laws, for example about alcohol and behaviour in public places.

Dubai is {not to everyone's taste}. Some people find it artificial and too focused on money and luxury. Others see it as a symbol of what ambition and long-term planning can achieve. {Either way}, it is a place that is very hard to ignore.`,
  glossary: [
    ["edge", "край"],
    ["resident", "житель", "residents"],
    ["trade", "торговля"],
    ["dive", "нырять", "diving"],
    ["pearl", "жемчуг, жемчужина", "pearls"],
    ["paved", "мощёный, асфальтированный"],
    ["worth mentioning", "достойный упоминания"],
    ["luxurious", "роскошный"],
    ["discover", "обнаружить, открыть", "discovered"],
    ["ruler", "правитель", "rulers"],
    ["reserve", "запас", "reserves"],
    ["rely on", "полагаться на", "relying on"],
    ["tiny", "крошечный"],
    ["location", "расположение"],
    ["hub", "узел, центр (пересадочный)"],
    ["attract", "привлекать", "attracted"],
    ["environment", "среда, обстановка"],
    ["income tax", "подоходный налог"],
    ["majority", "большинство"],
    ["mall", "торговый центр", "malls"],
    ["luxury", "роскошь; роскошный"],
    ["in the shape of", "в форме"],
    ["palm tree", "пальма", "palm trees"],
    ["entire", "целый"],
    ["ice rink", "каток", "ice rinks"],
    ["exceed", "превышать"],
    ["indoors", "в помещении"],
    ["air-conditioned", "с кондиционером"],
    ["wage", "зарплата (обычно почасовая)", "wages"],
    ["conditions", "условия"],
    ["treatment", "обращение (с кем-то)"],
    ["criticise", "критиковать", "criticised"],
    ["human rights", "права человека"],
    ["strict", "строгий"],
    ["behaviour", "поведение"],
    ["not to everyone's taste", "не всем по вкусу"],
    ["artificial", "искусственный"],
    ["ambition", "амбиции, стремление"],
    ["achieve", "достигать"],
    ["either way", "так или иначе"],
    ["ignore", "игнорировать"]
  ],
  questions: [
    ["When was oil discovered in Dubai?", ["1966", "1996", "1936"], 0, "e"],
    ["About how many people live in Dubai today?", ["Three hundred thousand", "More than three million", "Thirty million"], 1, "e"],
    ["What language do most people use at work in Dubai?", ["Arabic", "Hindi", "English"], 2, "e"],
    ["Where can you go skiing in Dubai?", ["In the mountains", "Inside a shopping mall", "On artificial islands"], 1, "e"],
    ["Why did Dubai's rulers decide not to depend on oil?", ["Oil prices were too low", "Their oil reserves were small and would not last forever", "Other countries banned their oil"], 1, "m"],
    ["Why is Dubai's location an advantage?", ["It lies between Europe, Asia and Africa", "It is close to the North Pole", "It has a cool climate"], 0, "m"],
    ["What criticism of Dubai does the text mention?", ["Hard working conditions and low wages for many workers", "Too few hotels", "Slow internet"], 0, "m"],
    ["What does \"life moves indoors\" mean here?", ["People move to other countries", "People spend their time inside air-conditioned buildings because of the heat", "Shops close for the summer"], 1, "h"],
    ["Why do so many foreigners live in Dubai?", ["Because of low taxes and business opportunities", "Because the government forces them", "Because it is the cheapest city in the world"], 0, "h"],
    ["What is the author's attitude to Dubai in the last paragraph?", ["Completely negative", "Completely positive", "Balanced: some dislike it, others admire it"], 2, "h"]
  ]
},
{
  id: "singapore",
  title: "Singapore: The City That Works",
  level: "B1",
  topic: "Страны",
  text: `Singapore is a tiny island country at the southern tip of the Malay Peninsula. You can drive from one side of it to the other in less than an hour, and it has almost no {natural resources}: no oil, no gas, not even enough fresh water. Yet it is one of the richest countries in the world. Its story is often used as an example of how good planning can transform a nation.

When Singapore became independent in 1965, the situation looked almost hopeless. Many people lived in slums, unemployment was high, and the new country had to buy much of its water from neighbouring Malaysia. The government, led by Prime Minister Lee Kuan Yew, {focused on} a few clear goals: attract foreign companies, educate the population and build a clean, efficient city.

Education became a top priority. Today, Singaporean students regularly come first in international tests in maths, science and reading. Lessons are taught in English, which helps Singapore do business with the whole world. But most Singaporeans also speak a second language, such as Mandarin Chinese, Malay or Tamil, because the country is a mix of different ethnic groups. Many people also speak "Singlish", a colourful local form of English full of words from other languages. "Can or not?", for example, means "Is it possible?"

Housing is another success story. Around eighty percent of Singaporeans live in public apartments built by the government, and most of them own their homes. These huge {housing estates} have their own schools, shops, parks and {food courts}, so people don't need to travel far for everyday needs.

Singapore is also famous for its rules. Selling {chewing gum} has been banned since 1992, and people can be fined for not flushing a public toilet, for eating on the metro or for crossing the road in the wrong place. Visitors often joke that Singapore is a "fine city", which has two meanings. Critics say that the government controls too much, including the media. Supporters reply that the rules are the reason why the streets are so clean and safe.

For many visitors, though, the best thing about Singapore is the food. {Hawker centres}, large open-air food halls, sell delicious dishes from all over Asia for just a few dollars. Some simple food stalls there have even received Michelin stars. Eating is something like a national hobby, and people will happily queue for half an hour for a famous bowl of noodles.

Not everything is perfect. Singapore is one of the most expensive cities in the world, especially for cars and private apartments, and the climate is hot and humid {all year round}. But for a country that started with almost nothing, it is a remarkable achievement.`,
  glossary: [
    ["tip", "оконечность, край"],
    ["peninsula", "полуостров"],
    ["natural resources", "природные ресурсы"],
    ["transform", "преобразить"],
    ["independent", "независимый"],
    ["hopeless", "безнадёжный"],
    ["slum", "трущобы", "slums"],
    ["unemployment", "безработица"],
    ["neighbouring", "соседний"],
    ["lead", "вести, руководить", "led"],
    ["focus on", "сосредоточиться на", "focused on"],
    ["efficient", "эффективный"],
    ["priority", "приоритет"],
    ["ethnic", "этнический"],
    ["colourful", "яркий, колоритный"],
    ["housing estate", "жилой микрорайон", "housing estates"],
    ["food court", "фуд-корт", "food courts"],
    ["chewing gum", "жевательная резинка"],
    ["ban", "запрещать", "banned"],
    ["fine", "штрафовать; штраф; хороший", "fined"],
    ["flush", "смывать (в туалете)", "flushing"],
    ["critic", "критик", "critics"],
    ["media", "СМИ"],
    ["supporter", "сторонник", "supporters"],
    ["though", "однако, всё же"],
    ["hawker centre", "фудкорт с уличной едой (в Сингапуре)", "hawker centres"],
    ["delicious", "очень вкусный"],
    ["stall", "ларёк, прилавок", "stalls"],
    ["queue", "стоять в очереди; очередь"],
    ["bowl", "миска, тарелка"],
    ["humid", "влажный"],
    ["all year round", "круглый год"],
    ["remarkable", "замечательный, выдающийся"],
    ["achievement", "достижение"]
  ],
  questions: [
    ["When did Singapore become independent?", ["1965", "1945", "1995"], 0, "e"],
    ["What natural resources does Singapore have?", ["A lot of oil", "Almost none", "Gold and gas"], 1, "e"],
    ["In what language are school lessons taught?", ["Mandarin Chinese", "Malay", "English"], 2, "e"],
    ["What has been banned since 1992?", ["Selling chewing gum", "Driving cars", "Smoking at home"], 0, "e"],
    ["Where do most Singaporeans live?", ["In private houses", "In public apartments built by the government, which they usually own", "In rented rooms"], 1, "m"],
    ["What are hawker centres?", ["Large open-air halls selling cheap food", "Shopping malls", "Government offices"], 0, "m"],
    ["What do critics say about Singapore?", ["That it is too dirty", "That the government controls too much", "That food is too expensive"], 1, "m"],
    ["Why is \"a fine city\" a joke with two meanings?", ["\"Fine\" means both \"good\" and \"money paid as a punishment\"", "The city is both big and small", "The city has two names"], 0, "h"],
    ["What is \"Singlish\"?", ["The official language of Singapore", "A local form of English with words from other languages", "A school subject"], 1, "h"],
    ["What is the main idea of the text?", ["Singapore is perfect and has no problems", "Strict rules are always bad", "A tiny country without resources became rich through planning, despite some drawbacks"], 2, "h"]
  ]
},
{
  id: "doctor-abroad",
  title: "Seeing a Doctor in a New Country",
  level: "B1",
  topic: "Переезд · здоровье",
  text: `Getting sick is unpleasant anywhere, but getting sick in a foreign country can be really stressful. You don't know how the system works, where to go, or how to explain what is wrong. That's why people who move abroad should learn the basics of the local healthcare system before they actually need it.

In many countries, your first contact with medicine is a {general practitioner}, or GP. This is a family doctor who treats common problems, writes prescriptions and, if necessary, sends you to a specialist. In the United Kingdom, for example, you usually need to register with a GP near your home soon after you arrive. Without a GP's referral, you often cannot see a specialist such as a cardiologist or a dermatologist.

{Making an appointment} can take time. In some places you can see a doctor the same day; in others, you might wait a week or more for a routine visit. For urgent problems that are not life-threatening, there are {walk-in clinics} or urgent care centres. For real emergencies, such as {chest pain}, serious injuries or difficulty breathing, you should go to the emergency department of a hospital (called A&E in Britain and the ER in America) or call the emergency number: 112 in Europe, 911 in North America, 999 in the UK.

Money is another important question. In countries with public healthcare, such as Canada or most of Europe, residents pay through taxes or obligatory insurance, and visits are free or cheap. In the United States, healthcare depends heavily on private insurance, and a single visit to the emergency room can cost thousands of dollars. Before moving, always check what your insurance covers.

Then comes the conversation itself. Doctors will usually ask: "What seems to be the problem?" or "What brings you in today?" You should be able to describe your symptoms clearly: where it hurts, how long you have had the problem, and whether it is getting better or worse. Useful phrases include "I've had a {sore throat} for three days", "I feel dizzy", "I've got a rash on my arm" and "I'm {allergic to} penicillin." Don't be afraid to ask the doctor to speak more slowly or to write things down.

After the appointment, you may receive a prescription to take to a pharmacy. In Britain, a pharmacy is also called a chemist's, and in America, a drugstore. The pharmacist will explain how to take the medicine: for example, "twice a day after meals" or "{on an empty stomach}".

It is a good idea to prepare a short medical summary in English before you move: your {blood type}, allergies, {chronic conditions} and the medicines you take regularly. Keep it on your phone. In an emergency, it could save precious time, and maybe even your life.`,
  glossary: [
    ["unpleasant", "неприятный"],
    ["stressful", "напряжённый, вызывающий стресс"],
    ["basics", "основы"],
    ["general practitioner", "терапевт, семейный врач (GP)"],
    ["treat", "лечить", "treats"],
    ["prescription", "рецепт", "prescriptions"],
    ["specialist", "узкий специалист"],
    ["register", "зарегистрироваться, прикрепиться"],
    ["referral", "направление (к врачу)"],
    ["making an appointment", "запись на приём"],
    ["appointment", "приём, встреча (по записи)"],
    ["routine", "плановый, обычный"],
    ["urgent", "срочный"],
    ["life-threatening", "угрожающий жизни"],
    ["walk-in clinic", "клиника без записи", "walk-in clinics"],
    ["emergency", "экстренный случай", "emergencies"],
    ["chest pain", "боль в груди"],
    ["injury", "травма", "injuries"],
    ["breathing", "дыхание"],
    ["obligatory", "обязательный"],
    ["insurance", "страховка"],
    ["heavily", "сильно, в большой степени"],
    ["cover", "покрывать", "covers"],
    ["symptom", "симптом", "symptoms"],
    ["sore throat", "больное горло"],
    ["dizzy", "чувствующий головокружение"],
    ["rash", "сыпь"],
    ["allergic to", "с аллергией на"],
    ["pharmacy", "аптека"],
    ["chemist's", "аптека (брит.)"],
    ["drugstore", "аптека (амер.)"],
    ["pharmacist", "фармацевт"],
    ["on an empty stomach", "натощак"],
    ["blood type", "группа крови"],
    ["chronic condition", "хроническое заболевание", "chronic conditions"],
    ["precious", "драгоценный"]
  ],
  questions: [
    ["What is a GP?", ["A family doctor who treats common problems", "A hospital surgeon", "A pharmacist"], 0, "e"],
    ["What is the emergency number in Europe?", ["999", "112", "911"], 1, "e"],
    ["What is a pharmacy also called in Britain?", ["A drugstore", "A chemist's", "A surgery"], 1, "e"],
    ["What does the text suggest keeping on your phone?", ["Only doctors' phone numbers", "A short medical summary in English", "Photos of medicines"], 1, "e"],
    ["Why should you register with a GP soon after arriving in the UK?", ["It is required for a visa", "Without a GP you often cannot see a specialist", "GPs give free medicine"], 1, "m"],
    ["Where should you go with chest pain or difficulty breathing?", ["To a pharmacy", "To a walk-in clinic next week", "To a hospital emergency department, or call the emergency number"], 2, "m"],
    ["Why should you check your insurance before moving to the USA?", ["Healthcare there depends on private insurance and can be very expensive", "Insurance is illegal there", "Doctors only accept cash"], 0, "m"],
    ["Which question would a doctor most likely ask at the start of an appointment?", ["What brings you in today?", "How much do you earn?", "Where did you buy your medicine?"], 0, "h"],
    ["What does \"on an empty stomach\" mean?", ["After a big meal", "Before eating, when you haven't eaten", "With a glass of milk"], 1, "h"],
    ["What is the main purpose of the text?", ["To criticise healthcare in the USA", "To compare doctors' salaries", "To prepare people moving abroad for dealing with doctors"], 2, "h"]
  ]
},
{
  id: "job-interview",
  title: "The Job Interview: How to Make a Good Impression",
  level: "B1",
  topic: "Работа · переезд",
  text: `A job interview in a foreign language can be frightening. You have to talk about yourself, answer unexpected questions and {make a good impression}, all at the same time, and in a language that is not your own. The good news is that most interviews follow similar patterns, so you can prepare for them almost like an exam.

Almost every interview begins with the same request: "Tell me about yourself." This is not an invitation to tell your whole life story. Interviewers want a short professional summary of about one or two minutes: who you are, what you have done, and why you are interested in this position. A simple structure works well: present, past, future. For example: "I'm currently working as a sales manager at a logistics company. Before that, I spent three years in {customer service}. Now I'm looking for a role where I can use both of these experiences."

Another classic question is "What are your strengths and weaknesses?" For strengths, choose two or three qualities that are relevant to the job and support each one with a real example. Weaknesses are trickier. Saying "I'm a perfectionist" or "I work too hard" sounds like a cliché. It is better to mention a real but small weakness and explain what you are doing to improve it: "{Public speaking} used to make me nervous, so I took a course, and now I regularly present at team meetings."

Many companies also use behavioural questions, which usually start with "Tell me about a time when..." {For instance}: "Tell me about a time when you had a conflict with a colleague." A popular way to answer is the STAR method: describe the Situation, the Task, the Action you took and the Result. This keeps your story clear and shows that you can solve problems.

Research is essential. Before the interview, read about the company: its products, its customers and recent news. Interviewers often ask, "Why do you want to work here?", and a general answer like "Because it's a big company" will not impress anyone. At the end, you will almost certainly hear, "Do you have any questions for us?" Never say no. Ask about the team, the first months in the job or the company's plans. It shows that you are genuinely interested.

{Body language} matters too. Arrive a few minutes early, make {eye contact}, smile and don't interrupt. For online interviews, check your camera, microphone and internet connection {in advance}, and choose a quiet room with a neutral background.

Finally, don't worry too much about your accent or small grammar mistakes. Interviewers care much more about whether you can communicate clearly and confidently. Practise your answers {out loud}, ideally with someone who can give you feedback. After a few rehearsals, even the scariest questions will start to feel familiar.`,
  glossary: [
    ["frightening", "пугающий"],
    ["unexpected", "неожиданный"],
    ["make a good impression", "произвести хорошее впечатление"],
    ["pattern", "схема, шаблон", "patterns"],
    ["request", "просьба"],
    ["invitation", "приглашение"],
    ["summary", "краткое изложение, резюме"],
    ["position", "должность"],
    ["currently", "в настоящее время"],
    ["logistics", "логистика"],
    ["customer service", "обслуживание клиентов"],
    ["role", "роль, должность"],
    ["strength", "сильная сторона", "strengths"],
    ["weakness", "слабость, слабая сторона", "weaknesses"],
    ["quality", "качество (черта)", "qualities"],
    ["relevant", "относящийся к делу, уместный"],
    ["tricky", "каверзный, непростой", "trickier"],
    ["cliché", "клише, банальность"],
    ["improve", "улучшать"],
    ["public speaking", "публичные выступления"],
    ["behavioural", "поведенческий"],
    ["for instance", "например"],
    ["conflict", "конфликт"],
    ["colleague", "коллега"],
    ["solve", "решать"],
    ["essential", "необходимый, очень важный"],
    ["recent", "недавний"],
    ["impress", "впечатлить"],
    ["genuinely", "искренне, по-настоящему"],
    ["body language", "язык тела"],
    ["eye contact", "зрительный контакт"],
    ["interrupt", "перебивать"],
    ["in advance", "заранее"],
    ["neutral", "нейтральный"],
    ["accent", "акцент"],
    ["confidently", "уверенно"],
    ["out loud", "вслух"],
    ["feedback", "обратная связь"],
    ["rehearsal", "репетиция", "rehearsals"],
    ["familiar", "знакомый, привычный"]
  ],
  questions: [
    ["What is the usual first request in an interview?", ["\"Tell me about yourself.\"", "\"What salary do you want?\"", "\"Why did you leave your last job?\""], 0, "e"],
    ["How long should your answer to \"Tell me about yourself\" be?", ["About ten minutes", "One or two minutes", "Ten seconds"], 1, "e"],
    ["What does the S in the STAR method stand for?", ["Strength", "Salary", "Situation"], 2, "e"],
    ["What should you do when they ask \"Do you have any questions for us?\"", ["Say \"No, thank you\"", "Ask about the team, the first months or the company's plans", "Ask only about holidays"], 1, "e"],
    ["What structure does the text suggest for \"Tell me about yourself\"?", ["Present, past, future", "Family, hobbies, dreams", "Past, salary, weaknesses"], 0, "m"],
    ["Why is \"I'm a perfectionist\" a weak answer about weaknesses?", ["It is rude", "It sounds like a cliché", "It is too long"], 1, "m"],
    ["What should you check before an online interview?", ["Your camera, microphone and internet connection", "Your social media", "The interviewer's age"], 0, "m"],
    ["Why does the text recommend researching the company?", ["So you can ask for a higher salary", "So you can give a specific answer to \"Why do you want to work here?\"", "So you can criticise their products"], 1, "h"],
    ["What does the example about public speaking show?", ["How to avoid talking about weaknesses", "That public speaking is not important", "How to describe a real weakness and how you are improving it"], 2, "h"],
    ["According to the last paragraph, what matters most to interviewers?", ["A perfect accent", "No grammar mistakes at all", "Communicating clearly and confidently"], 2, "h"]
  ]
},
{
  id: "small-talk",
  title: "The Art of Small Talk",
  level: "B1",
  topic: "Общение",
  text: `In many English-speaking countries, conversations with strangers, neighbours and colleagues often begin with something called small talk. It is light, friendly conversation about unimportant topics: the weather, the weekend, traffic or a recent football match. For people from cultures where you only talk when you have something important to say, small talk can seem strange or even fake. But it has an important social function.

Small talk is a way of showing that you are friendly and open. It helps people feel comfortable with each other before moving on to more serious topics. In business, it builds trust: few people want to sign a contract with someone who {goes straight to} the numbers without a single smile. At work, a short chat by the coffee machine can slowly turn a colleague into a friend.

The most famous topic, especially in Britain, is the weather. Phrases like "Lovely day, isn't it?" or "Terrible weather today!" are not really about meteorology. They are an invitation to talk. The correct response is not a scientific analysis, but agreement and a small addition: "Yes, finally some sun! Are you doing anything nice this weekend?"

Other safe topics include weekend plans, holidays, food, sports, films and series, and the place where you are {at the moment}. Questions like "How do you know the host?" at a party or "Have you been working here long?" at a new job are perfect conversation starters. On the other hand, some topics are usually avoided with people you don't know well: salary, politics, religion, weight and age. Asking someone how much they earn or how much they paid for their flat is considered rude in most English-speaking cultures.

The secret of good small talk is asking {open questions}. A question like "Did you have a good weekend?" can be answered with just "yes". "What did you {get up to} at the weekend?" invites a longer answer. Listening is just as important as speaking: {pick up} details from the other person's answer and ask a {follow-up question}. If someone mentions they went hiking, ask where they went or whether they go often.

It is also useful to know how to end a conversation politely. Native speakers rarely just {walk away}. Instead, they use phrases like "Well, it was great talking to you", "{I'd better} {get going}" or "I'll let you get back to work." These signal that the conversation is over without sounding rude.

For language learners, small talk is actually a gift. The topics are predictable, the vocabulary is simple, and the same phrases appear again and again. Learn {a dozen} good questions and responses, practise them, and you will be able to start a conversation almost anywhere: in a lift, at a bus stop or at the gym.`,
  glossary: [
    ["stranger", "незнакомец", "strangers"],
    ["unimportant", "неважный"],
    ["fake", "фальшивый, ненастоящий"],
    ["function", "функция"],
    ["trust", "доверие"],
    ["go straight to", "сразу переходить к", "goes straight to"],
    ["lovely", "чудесный, прекрасный"],
    ["meteorology", "метеорология"],
    ["response", "ответ, реакция"],
    ["analysis", "анализ"],
    ["agreement", "согласие"],
    ["addition", "добавление"],
    ["at the moment", "в данный момент"],
    ["host", "хозяин (вечеринки), принимающая сторона"],
    ["starter", "начало, «затравка»; закуска", "starters"],
    ["earn", "зарабатывать"],
    ["open questions", "открытые вопросы (на которые не ответишь «да/нет»)"],
    ["get up to", "заниматься чем-то, затевать"],
    ["pick up", "подхватить, уловить"],
    ["follow-up question", "уточняющий вопрос"],
    ["hiking", "пеший туризм, поход"],
    ["walk away", "уйти"],
    ["I'd better", "мне лучше, пожалуй, я"],
    ["get going", "идти, отправляться"],
    ["signal", "сигнализировать, показывать"],
    ["predictable", "предсказуемый"],
    ["vocabulary", "словарный запас, лексика"],
    ["a dozen", "дюжина, около десятка"],
    ["lift", "лифт (брит.)"]
  ],
  questions: [
    ["What is small talk?", ["Light, friendly conversation about unimportant topics", "A serious business discussion", "A short public speech"], 0, "e"],
    ["What is the most famous small talk topic in Britain?", ["Football", "Money", "The weather"], 2, "e"],
    ["Which topic should usually be avoided with people you don't know well?", ["Weekend plans", "Salary", "Films"], 1, "e"],
    ["Where can you use small talk, according to the last paragraph?", ["Only at work", "In a lift, at a bus stop or at the gym", "Only at parties"], 1, "e"],
    ["Why is small talk important in business?", ["It builds trust before serious topics", "It saves time", "It helps to get discounts"], 0, "m"],
    ["What is a good reply to \"Lovely day, isn't it?\"", ["A scientific explanation of the weather", "Silence", "Agreement and a small question, for example about the weekend"], 2, "m"],
    ["Why is \"What did you get up to at the weekend?\" better than \"Did you have a good weekend?\"", ["It is more polite", "It is shorter", "It invites a longer answer"], 2, "m"],
    ["What is a \"follow-up question\"?", ["A question that continues from what the other person just said", "The last question before leaving", "A question you prepare at home"], 0, "h"],
    ["What does \"I'll let you get back to work\" do in a conversation?", ["It asks the person to work harder", "It ends the conversation politely", "It invites the person for coffee"], 1, "h"],
    ["Why does the author call small talk \"a gift\" for language learners?", ["It is the only way to make friends", "Native speakers give presents", "It uses predictable topics and simple, repeated phrases"], 2, "h"]
  ]
},
{
  id: "ai-everyday",
  title: "How Artificial Intelligence Is Changing Everyday Life",
  level: "B1+",
  topic: "Технологии",
  text: `Only a few years ago, {artificial intelligence}, or AI, sounded like something from a science fiction film. Today, many of us use it every day, often without noticing. It recommends the next video we watch, corrects our spelling, filters spam from our email and helps our phone camera take better photos in the dark.

The biggest change came with so-called {large language models}: AI systems trained on enormous amounts of text. They can answer questions, write emails, translate, summarise long documents and even write computer code. Millions of people now use AI assistants at work and at home. A student might ask one to explain a difficult topic; a small business owner might use it to write product descriptions; a programmer might use it to find a bug in minutes instead of hours.

For language learners, these tools are especially interesting. An AI assistant can act as a patient conversation partner that is available at any time of day and never gets tired of your mistakes. It can explain grammar, create exercises on any topic, or turn a difficult article into a simpler text at your level. It can't replace real conversations with people, but it can make practice much more accessible.

AI is also changing medicine, transport and science. Some systems can analyse X-rays and help doctors detect diseases earlier. Self-driving taxis already operate in several cities, although they are still far from common. In science, AI programs have helped researchers predict the shapes of proteins, a problem that had puzzled biologists for decades.

However, these developments raise serious questions. One concern is jobs. If a machine can write texts, answer customer questions or analyse data, what will happen to the people who do this work today? Most experts think that AI will change many jobs {rather than} simply destroy them, but some professions will certainly shrink, and workers will need to learn new skills.

Another problem is reliability. AI systems can sound very confident even when they are wrong. They sometimes invent facts, sources or quotes, which is known as "hallucination". That's why it is important to check important information, especially about health, law or money. There are also concerns about privacy, fake images and videos, and the huge amount of energy used by {data centres}.

So how should ordinary people approach AI? Probably the same way we approach any powerful tool: with curiosity, but also with {common sense}. Use it to save time and learn faster, but keep thinking for yourself. The calculator didn't make maths unnecessary; it changed what we need to learn. AI {is likely to} do the same with many other skills, and those who learn to use it wisely will have a clear advantage.`,
  glossary: [
    ["artificial intelligence", "искусственный интеллект"],
    ["notice", "замечать", "noticing"],
    ["recommend", "рекомендовать", "recommends"],
    ["filter", "фильтровать", "filters"],
    ["so-called", "так называемый"],
    ["large language models", "большие языковые модели"],
    ["train", "обучать", "trained"],
    ["summarise", "кратко излагать"],
    ["assistant", "помощник, ассистент", "assistants"],
    ["description", "описание", "descriptions"],
    ["bug", "ошибка в программе, баг"],
    ["patient", "терпеливый"],
    ["available", "доступный"],
    ["replace", "заменять"],
    ["accessible", "доступный"],
    ["analyse", "анализировать"],
    ["X-ray", "рентгеновский снимок", "X-rays"],
    ["disease", "болезнь", "diseases"],
    ["self-driving", "беспилотный"],
    ["operate", "работать, действовать"],
    ["although", "хотя"],
    ["researcher", "исследователь", "researchers"],
    ["protein", "белок", "proteins"],
    ["puzzle", "озадачивать", "puzzled"],
    ["decade", "десятилетие", "decades"],
    ["development", "развитие, событие", "developments"],
    ["raise", "поднимать (вопрос)"],
    ["concern", "беспокойство, опасение"],
    ["rather than", "а не, вместо того чтобы"],
    ["destroy", "уничтожать"],
    ["skill", "навык", "skills"],
    ["reliability", "надёжность"],
    ["confident", "уверенный"],
    ["invent", "выдумывать, изобретать"],
    ["hallucination", "галлюцинация (выдуманный ИИ факт)"],
    ["privacy", "конфиденциальность, частная жизнь"],
    ["data centre", "дата-центр", "data centres"],
    ["approach", "подходить к, относиться к"],
    ["curiosity", "любопытство"],
    ["common sense", "здравый смысл"],
    ["unnecessary", "ненужный"],
    ["be likely to", "вероятно (сделает что-то)", "is likely to"],
    ["wisely", "мудро, разумно"],
    ["advantage", "преимущество"]
  ],
  questions: [
    ["Which of these is an example of everyday AI from the text?", ["Filtering spam from email", "Cooking dinner", "Cleaning windows"], 0, "e"],
    ["What are large language models trained on?", ["Photos", "Enormous amounts of text", "Music"], 1, "e"],
    ["What can AI help doctors do?", ["Perform operations alone", "Pay salaries", "Detect diseases earlier by analysing X-rays"], 2, "e"],
    ["What is \"hallucination\" in AI?", ["When AI invents facts, sources or quotes", "When AI stops working", "When AI draws pictures"], 0, "e"],
    ["Why can an AI assistant be useful for language learners?", ["It replaces all teachers", "It is a patient partner available at any time", "It gives official certificates"], 1, "m"],
    ["What do most experts think AI will do to jobs?", ["Destroy all jobs", "Have no effect", "Change many jobs rather than simply destroy them"], 2, "m"],
    ["Why should you check important information from AI?", ["AI can sound confident even when it is wrong", "AI is always outdated", "It is required by law"], 0, "m"],
    ["Why does the author mention protein shapes?", ["To show that AI is useful in cooking", "As an example of AI helping to solve a difficult scientific problem", "To explain how AI was invented"], 1, "h"],
    ["What is the point of the calculator comparison?", ["AI will change which skills we need to learn, as calculators did", "Calculators are better than AI", "Maths is no longer important"], 0, "h"],
    ["What is the author's general attitude to AI?", ["Fear and rejection", "Uncritical excitement", "Curiosity combined with common sense"], 2, "h"]
  ]
},
{
  id: "sleep",
  title: "Sleep: Your Secret Superpower",
  level: "B1",
  topic: "Здоровье",
  text: `In a world that praises being busy, sleep is often the first thing people sacrifice. Students {stay up} late before exams, workers check emails in bed, and many of us scroll through our phones long after we should be asleep. Yet scientists keep finding that sleep is one of the most powerful tools we have for health, learning and even sports performance.

Most adults need between seven and nine hours of sleep a night, and teenagers need even more. However, surveys show that a large share of adults regularly sleep less than seven hours. The effects of a single bad night are familiar: tiredness, a bad mood and difficulty concentrating. Studies have shown that after about 17 to 19 hours without sleep, people react about as badly as someone who has drunk alcohol. That's why driving when you are very tired is so dangerous.

Long-term {lack of} sleep is even more serious. It is {linked to} a higher risk of obesity, diabetes, heart disease and depression. One reason is that sleep affects the hormones that control hunger. When we are tired, we feel hungrier and crave sugary, fatty food, which explains why late nights often end with a trip to the fridge.

Sleep is also essential for memory. During {deep sleep}, the brain replays what we learned during the day and moves it into long-term memory. This means that studying late into the night instead of sleeping is often a bad strategy: you lose part of what you studied. For language learners, this is good news. Reviewing new words before going to bed and then getting a good night's sleep is one of the easiest ways to remember them.

Athletes have also discovered the power of sleep. In one well-known experiment at Stanford University, basketball players who extended their sleep to about ten hours a night for several weeks became faster and more accurate. Many professional teams now employ sleep specialists and even plan their travel around players' sleep.

So how can you sleep better? Experts usually recommend a few simple habits. Go to bed and wake up at the same time every day, even at weekends. Keep your bedroom dark, quiet and cool. Avoid caffeine in the afternoon; its effects can last for six hours or more. Limit alcohol, which may help you {fall asleep} but makes sleep lighter later in the night. And try to stop using screens at least half an hour before bed, not only because of the light, but because messages and videos keep your brain active.

If you exercise regularly, you will probably sleep better too, {as long as} you don't do intense workouts right before bed. Sleep is not wasted time. It is the time when your body and brain repair themselves and prepare for tomorrow.`,
  glossary: [
    ["praise", "хвалить, превозносить", "praises"],
    ["sacrifice", "жертвовать"],
    ["stay up", "не ложиться спать допоздна"],
    ["scroll", "листать (ленту)"],
    ["asleep", "спящий"],
    ["performance", "результаты, работоспособность"],
    ["survey", "опрос", "surveys"],
    ["effect", "эффект, последствие", "effects"],
    ["tiredness", "усталость"],
    ["mood", "настроение"],
    ["concentrate", "сосредоточиться", "concentrating"],
    ["react", "реагировать"],
    ["long-term", "долгосрочный"],
    ["lack of", "нехватка"],
    ["be linked to", "быть связанным с", "linked to"],
    ["obesity", "ожирение"],
    ["diabetes", "диабет"],
    ["depression", "депрессия"],
    ["hormone", "гормон", "hormones"],
    ["hunger", "голод"],
    ["crave", "сильно хотеть, тянуть на"],
    ["sugary", "сладкий, с сахаром"],
    ["fatty", "жирный"],
    ["essential", "необходимый"],
    ["memory", "память"],
    ["deep sleep", "глубокий сон"],
    ["replay", "проигрывать заново", "replays"],
    ["strategy", "стратегия"],
    ["review", "повторять (материал)", "reviewing"],
    ["athlete", "спортсмен", "athletes"],
    ["extend", "продлить, увеличить", "extended"],
    ["accurate", "точный"],
    ["employ", "нанимать"],
    ["habit", "привычка", "habits"],
    ["caffeine", "кофеин"],
    ["fall asleep", "заснуть"],
    ["screen", "экран", "screens"],
    ["as long as", "при условии, что; если только"],
    ["waste", "тратить впустую", "wasted"]
  ],
  questions: [
    ["How many hours of sleep do most adults need?", ["Five to six", "Seven to nine", "Ten to twelve"], 1, "e"],
    ["What happens after 17–19 hours without sleep?", ["People react about as badly as someone who has drunk alcohol", "People become more creative", "Nothing special"], 0, "e"],
    ["How long did the Stanford basketball players sleep in the experiment?", ["About six hours", "About eight hours", "About ten hours"], 2, "e"],
    ["How long before bed should you stop using screens?", ["At least half an hour", "Five minutes", "Three hours"], 0, "e"],
    ["Why do tired people often eat more sugary food?", ["They have more free time at night", "Lack of sleep affects the hormones that control hunger", "Sugar helps them sleep"], 1, "m"],
    ["What happens to new information during deep sleep?", ["It is deleted", "The brain moves it into long-term memory", "It turns into dreams"], 1, "m"],
    ["Why should you avoid caffeine in the afternoon?", ["Its effects can last six hours or more", "It is bad for your teeth", "It makes you hungry"], 0, "m"],
    ["Why is studying all night before an exam often a bad strategy?", ["Libraries close at night", "Teachers can see you are tired", "Without sleep you lose part of what you studied"], 2, "h"],
    ["What does the text say about alcohol and sleep?", ["It improves sleep quality", "It may help you fall asleep but makes sleep lighter later", "It has no effect on sleep"], 1, "h"],
    ["What is the message of the final sentences?", ["Sleep is a waste of time for busy people", "Sleep is an active, useful process for body and brain", "Exercise is more important than sleep"], 1, "h"]
  ]
},
{
  id: "money-habits",
  title: "Smart Money Habits for Everyday Life",
  level: "B1",
  topic: "Деньги",
  text: `Many people don't have money problems because they earn too little; they have them because they don't know where their money goes. A coffee here, a food delivery there, a subscription you forgot to cancel: small expenses {add up} quickly. The good news is that managing money well doesn't require a degree in economics, just a few simple habits.

The first step is knowing your numbers. For one month, write down everything you spend, or use a banking app that sorts your expenses into categories. Many people are shocked when they see the result. You might discover that you spend more on food delivery than on books, sport and transport combined. You can't change what you don't measure.

Next, make a budget. A popular rule is the 50/30/20 method: about 50 percent of your income goes to needs, such as rent, bills, food and transport; 30 percent goes to wants, like restaurants, hobbies and travel; and 20 percent goes to savings or {paying off debt}. The exact numbers can be adapted, but the idea is to decide {in advance} where your money should go, instead of wondering at the end of the month where it went.

One of the most effective tricks is to "{pay yourself first}". On the day you receive your salary, automatically move a fixed amount into a separate {savings account}. If you wait to save whatever is left at the end of the month, there is usually nothing left. When the money disappears from your main account immediately, you quickly learn to live without it.

Every {financial advisor} will also tell you to build an {emergency fund}: money {set aside} for unexpected events like losing your job, a broken phone or a medical bill. A common recommendation is to keep enough to cover three to six months of basic expenses. This is especially important if you are planning a big life change, such as moving to another country, where the first months can be expensive and unpredictable.

Be careful with debt. Credit cards and "buy now, pay later" services make shopping feel painless, but high interest can turn a small purchase into a big problem. A useful rule: if you can't afford something without a loan, {think twice} about whether you really need it. Some people use a 48-hour rule: when they want to buy something non-essential, they wait two days. Often the desire simply disappears.

Finally, remember that money is a tool, not a goal in itself. The point of saving is not to live like a miser, but to have choices: to change jobs, to travel, to learn, to move abroad. Spending on things that truly matter to you, like education or experiences with friends, is not a waste. The aim is to spend consciously, not to stop spending.`,
  glossary: [
    ["earn", "зарабатывать"],
    ["delivery", "доставка"],
    ["subscription", "подписка"],
    ["cancel", "отменить"],
    ["expense", "расход, трата", "expenses"],
    ["add up", "накапливаться, складываться"],
    ["manage", "управлять, распоряжаться", "managing"],
    ["require", "требовать"],
    ["category", "категория", "categories"],
    ["shocked", "шокированный"],
    ["combined", "вместе взятые"],
    ["measure", "измерять"],
    ["budget", "бюджет"],
    ["needs", "потребности, необходимое"],
    ["wants", "желания, необязательные траты"],
    ["savings", "сбережения"],
    ["pay off debt", "выплачивать долг", "paying off debt"],
    ["debt", "долг"],
    ["adapt", "приспособить, адаптировать", "adapted"],
    ["in advance", "заранее"],
    ["wonder", "задаваться вопросом", "wondering"],
    ["effective", "эффективный"],
    ["pay yourself first", "сначала заплати себе (сразу откладывай)"],
    ["fixed", "фиксированный"],
    ["separate", "отдельный"],
    ["savings account", "сберегательный счёт"],
    ["immediately", "немедленно, сразу"],
    ["financial advisor", "финансовый консультант"],
    ["emergency fund", "финансовая подушка, резервный фонд"],
    ["set aside", "отложить"],
    ["bill", "счёт (к оплате)"],
    ["cover", "покрывать"],
    ["interest", "проценты (по кредиту)"],
    ["purchase", "покупка"],
    ["afford", "позволить себе (по деньгам)"],
    ["loan", "кредит, заём"],
    ["think twice", "хорошо подумать"],
    ["non-essential", "необязательный"],
    ["desire", "желание"],
    ["miser", "скряга"],
    ["consciously", "осознанно"]
  ],
  questions: [
    ["According to the text, why do many people have money problems?", ["They earn too little", "They don't know where their money goes", "Banks take too much"], 1, "e"],
    ["In the 50/30/20 rule, what are the 20 percent for?", ["Savings or paying off debt", "Restaurants", "Rent"], 0, "e"],
    ["How many months of expenses should an emergency fund cover?", ["One month", "One year", "Three to six months"], 2, "e"],
    ["How long do people wait under the 48-hour rule?", ["Two days", "Two weeks", "Two hours"], 0, "e"],
    ["What is the first step to managing money?", ["Taking a loan", "Writing down everything you spend for a month", "Buying shares"], 1, "m"],
    ["What does \"pay yourself first\" mean?", ["Pay your debts last", "Buy something nice on payday", "Move money into savings as soon as you are paid"], 2, "m"],
    ["Why is an emergency fund especially important when moving abroad?", ["The first months can be expensive and unpredictable", "Banks abroad don't accept foreigners", "It is required for every visa"], 0, "m"],
    ["What does \"You can't change what you don't measure\" mean?", ["Money cannot be measured", "You need to know your spending before you can improve it", "Measuring is more important than saving"], 1, "h"],
    ["Why can \"buy now, pay later\" services be dangerous?", ["They make spending feel painless, but interest can make debt grow", "They are illegal", "They only work online"], 0, "h"],
    ["What is the author's view in the last paragraph?", ["You should save everything and spend nothing", "Money is the main goal in life", "Saving gives you choices, and spending on what matters is fine"], 2, "h"]
  ]
},
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
    ["How did they get the tickets?", ["At the arena on the day of the game", "Online two weeks before", "From Max's friend"], 1, "e"],
    ["What happened in the first five minutes?", ["The other team scored", "Our captain scored", "The coach called a timeout"], 0, "e"],
    ["Who scored the winning goal?", ["The captain", "The goalkeeper", "The youngest player"], 2, "e"],
    ["What does Max want to do next season?", ["Play hockey himself", "Go to every home game", "Become a coach"], 1, "e"],
    ["Why were their seats great?", ["They were close to the ice", "They were in a VIP box", "They were free"], 0, "m"],
    ["How did the fans react to the captain's goal?", ["They went quiet", "They jumped up and hugged strangers", "They left the arena"], 1, "m"],
    ["What did the coach do with forty seconds left?", ["Changed the goalkeeper", "Argued with the referee", "Called a timeout"], 2, "m"],
    ["What does \"the whole arena held its breath\" mean?", ["Everyone was very tense, waiting for what would happen", "The air in the arena was bad", "Fans stopped singing because they were tired"], 0, "h"],
    ["Why did they hang out near the arena after the game?", ["They were waiting for a taxi", "They didn't want the great evening to end", "They wanted autographs"], 1, "h"],
    ["How did the author's feelings change during the game?", ["From happy to angry", "From bored to tired", "From worried to very excited"], 2, "h"]
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
    ["When did the author finally start going to the gym?", ["In January", "This autumn", "Last summer"], 1, "e"],
    ["Who helped on the first day?", ["A friend", "Nobody", "A trainer"], 2, "e"],
    ["How far is the gym from the author's house?", ["Ten minutes", "An hour", "Next door"], 0, "e"],
    ["How many workouts a week are in the plan?", ["Five", "Three", "One"], 1, "e"],
    ["What is more important than heavy weights?", ["Good technique", "New clothes", "A long workout"], 0, "m"],
    ["What happened after the first workout?", ["The author's legs hurt a lot", "The author quit", "The author got injured"], 0, "m"],
    ["What is the author's goal?", ["To look like a superhero", "To stick to the plan for six months", "To lose ten kilos"], 1, "m"],
    ["Why did nothing happen every January?", ["The gym was closed", "The author always found a reason to wait", "The author had no money"], 1, "h"],
    ["What does \"I felt a little lost\" mean here?", ["The author couldn't find the gym", "The author lost a bag", "The author didn't know what to do or how the machines worked"], 2, "h"],
    ["What changes has the author noticed after one week?", ["Better sleep and more energy", "Big muscles", "Ten kilos less"], 0, "h"]
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
    ["What was the hardest part of moving for Anna?", ["The language", "Finding a place to live", "The weather"], 1, "e"],
    ["How much is a deposit usually?", ["One or two months' rent", "Half of the monthly rent", "One year's rent"], 0, "e"],
    ["Which city did Anna move to?", ["Lisbon", "Madrid", "London"], 0, "e"],
    ["What kind of flat did she rent?", ["A big house", "A small one-bedroom flat", "A room in a shared flat"], 1, "e"],
    ["What did the fake owner ask Anna to do?", ["Show her passport", "Pay by card", "Send money before seeing the flat"], 2, "m"],
    ["Why did Anna take photos of the scratches?", ["To post them online", "So the landlord can't keep her deposit", "To show her friends"], 1, "m"],
    ["What does Anna pay for separately?", ["Water", "Electricity and the internet", "Nothing"], 1, "m"],
    ["What does \"too good to be true\" suggest about some advertisements?", ["They were suspiciously perfect and actually fake", "They were very honest", "They were written badly"], 0, "h"],
    ["Why did most good flats disappear within a day?", ["They were demolished", "Landlords changed their minds", "Demand for good flats was very high"], 2, "h"],
    ["Which piece of advice is NOT in Anna's list?", ["Start early", "Read the contract twice", "Always pay in cash"], 2, "h"]
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
    ["Why does Tom need a bank account?", ["For his salary and everyday payments", "To save money for a car", "For his business"], 0, "e"],
    ["Which account does Tom choose?", ["Premium", "Basic", "Student"], 1, "e"],
    ["How long will it take to get the card?", ["One day", "About a month", "About five working days"], 2, "e"],
    ["How much does the premium card cost per month?", ["Three euros", "Five euros", "Nothing"], 0, "e"],
    ["Which documents does the bank need?", ["Only a passport", "A work contract", "A passport and proof of address"], 2, "m"],
    ["What can Tom use the mobile app for?", ["Only to see his balance", "To manage everything", "To call the bank"], 1, "m"],
    ["When is there a small fee?", ["For every card payment", "When withdrawing cash in other currencies", "For opening the account"], 1, "m"],
    ["Why does Tom show his rental contract?", ["As proof of address", "As proof of salary", "Because he wants a loan"], 0, "h"],
    ["What does \"You're welcome\" mean in this dialogue?", ["Welcome to the bank", "A polite answer to \"thank you\"", "An invitation to come again"], 1, "h"],
    ["Why does Tom choose the basic account?", ["The employee insists", "It has more features", "It is free and enough for what he needs"], 2, "h"]
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
    ["What was a gift in a messenger a few years ago?", ["Just a small picture", "A real coin", "A unique item with a number"], 0, "e"],
    ["What does the price depend on?", ["The weather", "Demand", "The number of your friends"], 1, "e"],
    ["What can a gift be turned into?", ["A real coin", "A unique item with its own number and design", "A stamp"], 1, "e"],
    ["What do people compare collectible gifts to?", ["Stamps or rare coins", "Paintings", "Cars"], 0, "e"],
    ["Why can this market be risky?", ["Gifts can disappear", "It is illegal", "Prices can change very fast"], 2, "m"],
    ["Which advice do experts give?", ["Never invest money you can't afford to lose", "Buy as many gifts as possible", "Trust people who promise quick profit"], 0, "m"],
    ["Why are collectors ready to pay more for some gifts?", ["They are bigger", "They are older", "Some designs are rare"], 2, "m"],
    ["What happens to the price when interest falls?", ["It drops", "It rises", "It stays the same"], 0, "h"],
    ["What does \"money you can't afford to lose\" mean?", ["Money you borrowed", "Money you need and couldn't live without", "Money in a foreign currency"], 1, "h"],
    ["Which people do experts warn about?", ["Collectors of rare designs", "People who follow the market", "People who promise quick profit"], 2, "h"]
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
    ["Why are TV series good for learning English?", ["They are always short", "You hear how real people speak", "They explain grammar rules"], 1, "e"],
    ["What is the most important thing?", ["Regularity", "Watching four hours at once", "Watching only films"], 0, "e"],
    ["What kind of subtitles do many learners turn on?", ["Russian", "English", "None"], 1, "e"],
    ["When is it a good idea to rewatch an episode?", ["A week later", "The next day", "A year later"], 0, "e"],
    ["How do subtitles help?", ["They connect the sound of a word with its spelling", "They translate everything", "They make the video slower"], 0, "m"],
    ["What should you do with new phrases?", ["Ignore them", "Learn the whole episode by heart", "Choose one or two and write them down"], 2, "m"],
    ["Why should you repeat lines after the actors?", ["It is required", "It makes episodes shorter", "It is great practice for pronunciation"], 2, "m"],
    ["What does \"frustrating\" describe in the text?", ["The feeling when characters speak too fast to understand", "Expensive subscriptions", "Boring series"], 0, "h"],
    ["What does \"watch passively\" mean?", ["Watch in bed", "Just watch without actively working on the language", "Watch with friends"], 1, "h"],
    ["Why is twenty minutes every day better than four hours once a week?", ["Short sessions are more fun", "Regular practice works better than rare long sessions", "Four hours is too expensive"], 1, "h"]
  ]
}
];
