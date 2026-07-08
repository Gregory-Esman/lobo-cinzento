// Lobo Cinzento — Units 8-14 (Week 2). European Portuguese throughout.
window.UNITS = window.UNITS || [];

window.UNITS.push({
  day: 8, title: "As compras", titleEn: "Shopping — and numbers to 100",
  vocab: [
    { pt: "comprar", en: "to buy", pr: "ko(n)-PRAR" },
    { pt: "a loja", en: "shop", pr: "LOH-zhuh" },
    { pt: "o mercado", en: "market", pr: "mer-KAH-doo" },
    { pt: "Quanto custa?", en: "How much does it cost?", pr: "KWAN-too KOOSH-tuh" },
    { pt: "caro / barato", en: "expensive / cheap", pr: "KAH-roo / buh-RAH-too" },
    { pt: "onze, doze, treze, catorze, quinze", en: "11 12 13 14 15", pr: "O(N)Z, DOHZ, TREHZ, kuh-TORZ, KEE(N)Z" },
    { pt: "dezasseis, dezassete, dezoito, dezanove", en: "16 17 18 19 (EP forms!)", pr: "duh-zuh-SAYSH…" },
    { pt: "vinte, trinta, quarenta, cinquenta", en: "20 30 40 50", pr: "VEE(N)T, TREE(N)-tuh…" },
    { pt: "sessenta, setenta, oitenta, noventa, cem", en: "60 70 80 90 100", pr: "…SAY(N)" },
    { pt: "levar / levo", en: "to take / I'll take", pr: "luh-VAR / LEH-voo" },
    { pt: "este / esta", en: "this (m / f)", pr: "ESHT / ESH-tuh" },
    { pt: "o queijo", en: "cheese", pr: "KAY-zhoo" }
  ],
  dialogue: [
    { sp: "Greg", pt: "Bom dia. Quanto custa este queijo?", en: "Good morning. How much is this cheese?" },
    { sp: "Vendedora", pt: "São doze euros o quilo.", en: "It's twelve euros a kilo." },
    { sp: "Greg", pt: "Hmm, é um pouco caro. E aquele?", en: "Hmm, it's a bit expensive. And that one?" },
    { sp: "Vendedora", pt: "Esse é mais barato: oito euros. É muito bom.", en: "That one is cheaper: eight euros. It's very good." },
    { sp: "Greg", pt: "Está bem, levo esse.", en: "All right, I'll take that one." },
    { sp: "Vendedora", pt: "Meio quilo chega?", en: "Is half a kilo enough?" },
    { sp: "Greg", pt: "Chega, sim. Obrigado.", en: "It's enough, yes. Thank you." },
    { sp: "Vendedora", pt: "Quatro euros, se faz favor.", en: "Four euros, please." }
  ],
  decodes: [
    { title: "dezasseis, not dezesseis — the EP teens", html: "16–19 are a instant EP/BP tell: Portugal says <em>dezAsseis, dezAssete, dezanove</em> (with A); Brazil says <em>dezEsseis, dezEssete</em> (with E). Eighteen is <em>dezoito</em> on both sides. Learn the A-forms." },
    { title: "este / esse / aquele — three distances", html: "<em>Este</em> = this, near me. <em>Esse</em> = that, near YOU. <em>Aquele</em> = that over there, far from both. Greg points at the far cheese (<em>aquele</em>); the seller answers about the one near her (<em>esse</em>). English lost this three-way split; Portuguese kept it." },
    { title: "«Chega» — it's enough", html: "<em>Chegar</em> means to arrive AND to suffice. <em>Chega?</em> — enough? <em>Chega, sim.</em> — that's plenty. Shouted alone (<em>Chega!</em>) it's \"Enough already!\"" }
  ],
  drills: [
    { id: "u8-1", q: "Sixteen, in Portugal:", options: ["dezesseis", "dezasseis", "seisdez"], answer: 1, explain: "EP teens take A: dezasseis, dezassete, dezanove." },
    { id: "u8-2", q: "«Quanto custa?» —", options: ["How much does it cost?", "How many are there?", "What is it?"], answer: 0 },
    { id: "u8-3", q: "The cheese near the person you're talking to is…", options: ["este queijo", "esse queijo", "aquele queijo"], answer: 1, explain: "Este=near me, esse=near you, aquele=far from both." },
    { id: "u8-4", q: "«caro» / «barato»:", options: ["expensive / cheap", "cheap / expensive", "big / small"], answer: 0 },
    { id: "u8-5", q: "«Levo esse» means…", options: ["I'll leave that one", "I'll take that one", "I broke that one"], answer: 1 },
    { id: "u8-6", q: "cinquenta =", options: ["15", "50", "500"], answer: 1 },
    { id: "u8-7", q: "«Meio quilo chega?» —", options: ["Does half a kilo arrive?", "Is half a kilo enough?", "Do you want a whole kilo?"], answer: 1, explain: "Chegar = to arrive AND to be enough." },
    { id: "u8-8", q: "noventa e dois =", options: ["29", "92", "902"], answer: 1 }
  ]
});

window.UNITS.push({
  day: 9, title: "A comida", titleEn: "Food — liking and wanting",
  vocab: [
    { pt: "gostar de / gosto de", en: "to like / I like", pr: "goosh-TAR duh / GOSH-too duh" },
    { pt: "querer — quero, queres, quer", en: "to want — I, you, he/she", pr: "KEH-roo, KEH-rush, KAIR" },
    { pt: "comer", en: "to eat", pr: "koo-MAIR" },
    { pt: "beber", en: "to drink", pr: "buh-BAIR" },
    { pt: "o peixe", en: "fish", pr: "PAYSH" },
    { pt: "a carne", en: "meat", pr: "KARN" },
    { pt: "o bacalhau", en: "salted cod (the national dish)", pr: "buh-kuh-LYOW" },
    { pt: "o pão", en: "bread", pr: "POW(N)" },
    { pt: "a sopa", en: "soup", pr: "SOH-puh" },
    { pt: "o vinho tinto / branco", en: "red / white wine", pr: "VEE-nyoo TEE(N)-too / BRA(N)-koo" },
    { pt: "delicioso / deliciosa", en: "delicious", pr: "duh-lee-see-OH-zoo" },
    { pt: "a ementa", en: "menu (EP)", pr: "ee-ME(N)-tuh" }
  ],
  dialogue: [
    { sp: "Rita", pt: "Gostas de peixe, Greg?", en: "Do you like fish, Greg?" },
    { sp: "Greg", pt: "Gosto muito. Gosto de bacalhau!", en: "I like it a lot. I like bacalhau!" },
    { sp: "Rita", pt: "Boa escolha. Dizem que há mil receitas de bacalhau.", en: "Good choice. They say there are a thousand bacalhau recipes." },
    { sp: "Greg", pt: "Mil? A sério?", en: "A thousand? Seriously?" },
    { sp: "Rita", pt: "A sério. O que queres beber?", en: "Seriously. What do you want to drink?" },
    { sp: "Greg", pt: "Quero um copo de vinho tinto, por favor.", en: "I want a glass of red wine, please." },
    { sp: "Rita", pt: "E de sobremesa? Queres um pastel de nata?", en: "And for dessert? Do you want a pastel de nata?" },
    { sp: "Greg", pt: "Claro que quero. São deliciosos.", en: "Of course I do. They're delicious." }
  ],
  decodes: [
    { title: "gostar DE — liking needs its de", html: "<em>Gostar</em> never travels alone: <em>gosto de peixe, gostas de café, gosto de aprender</em>. Before o/a it fuses: <em>gosto do bacalhau, gosto da sopa</em>. Forgetting the <em>de</em> is a top-3 learner error — drill it until it's automatic." },
    { title: "bacalhau — the faithful friend", html: "Salted dried cod is Portugal's national obsession — <em>o fiel amigo</em>, the faithful friend. The mil receitas (thousand recipes) line is a national proverb, and knowing it wins instant points. At A Conversa, try asking the wolf about <em>bacalhau à Brás</em>." },
    { title: "«Claro que quero» — answer with the verb, upgraded", html: "Day 6's rule, one level up: <em>Queres? — Quero. / Claro que quero.</em> (Of course I want [one].) The verb echo is the heartbeat of natural Portuguese conversation." }
  ],
  drills: [
    { id: "u9-1", q: "«I like fish»:", options: ["Gosto peixe", "Gosto de peixe", "Gosto o peixe"], answer: 1, explain: "Gostar always takes de." },
    { id: "u9-2", q: "querer: eu ___, tu ___", options: ["quero, queres", "queres, quero", "quer, queros"], answer: 0 },
    { id: "u9-3", q: "Portugal's 'faithful friend' is…", options: ["o pastel de nata", "o bacalhau", "o vinho do Porto"], answer: 1, explain: "O fiel amigo — with famously a thousand recipes." },
    { id: "u9-4", q: "«Queres um café? » Natural yes:", options: ["Sim.", "Quero, obrigado.", "OK café."], answer: 1 },
    { id: "u9-5", q: "«o vinho tinto» is…", options: ["white wine", "red wine", "port wine"], answer: 1, explain: "Red wine is tinto (dyed), not vermelho." },
    { id: "u9-6", q: "The menu, in Portugal:", options: ["a ementa", "o cardápio", "a lista"], answer: 0, explain: "Ementa is EP; cardápio is Brazilian." },
    { id: "u9-7", q: "«A sério?» means…", options: ["Seriously?", "Is it expensive?", "In series?"], answer: 0 },
    { id: "u9-8", q: "«comer» / «beber»:", options: ["to eat / to drink", "to drink / to eat", "to cook / to serve"], answer: 0 }
  ]
});

window.UNITS.push({
  day: 10, title: "O tempo", titleEn: "The weather — and the seasons",
  vocab: [
    { pt: "o tempo", en: "weather (also: time)", pr: "TE(N)-poo" },
    { pt: "Está calor / frio", en: "It's hot / cold", pr: "shta kuh-LOR / FREE-oo" },
    { pt: "Está sol", en: "It's sunny", pr: "shta SOL" },
    { pt: "chover / está a chover", en: "to rain / it's raining", pr: "shoo-VAIR" },
    { pt: "o vento", en: "wind", pr: "VE(N)-too" },
    { pt: "a praia", en: "beach", pr: "PRY-uh" },
    { pt: "a primavera / o verão", en: "spring / summer", pr: "pree-muh-VEH-ruh / vuh-ROW(N)" },
    { pt: "o outono / o inverno", en: "autumn / winter", pr: "oh-TOH-noo / ee(n)-VAIR-noo" },
    { pt: "hoje / amanhã", en: "today / tomorrow", pr: "OHZH / ah-muh-NYA(N)" },
    { pt: "gostar mais de", en: "to prefer (like more)", pr: "goosh-TAR MYSH duh" },
    { pt: "então", en: "so / then / well", pr: "e(n)-TOW(N)" },
    { pt: "talvez", en: "maybe", pr: "tal-VESH" }
  ],
  dialogue: [
    { sp: "Miguel", pt: "Que tempo faz hoje?", en: "What's the weather like today?" },
    { sp: "Greg", pt: "Está sol e está calor. Um dia bonito.", en: "It's sunny and hot. A beautiful day." },
    { sp: "Miguel", pt: "Então vamos à praia?", en: "So shall we go to the beach?" },
    { sp: "Greg", pt: "Boa ideia! E amanhã?", en: "Good idea! And tomorrow?" },
    { sp: "Miguel", pt: "Amanhã vai chover, talvez.", en: "Tomorrow it's going to rain, maybe." },
    { sp: "Greg", pt: "Não faz mal. Gosto da chuva.", en: "No harm done. I like the rain." },
    { sp: "Miguel", pt: "Gostas mais do verão ou do inverno?", en: "Do you prefer summer or winter?" },
    { sp: "Greg", pt: "Gosto mais do verão, claro. Sou do deserto!", en: "I prefer summer, of course. I'm from the desert!" }
  ],
  decodes: [
    { title: "Weather runs on estar and fazer", html: "<em>Está calor / está frio / está sol / está a chover</em> — weather is a passing state, so estar. Asking uses fazer: <em>Que tempo faz?</em> (What weather does it make? — same logic as French). Both <em>está calor</em> and <em>faz calor</em> are heard; you're safe with estar." },
    { title: "«vamos à praia?» — let's…?", html: "<em>Vamos</em> (we go) doubles as \"let's\": <em>Vamos à praia?</em> — shall we go to the beach? <em>Vamos!</em> — let's go! And à = a + a (at/to + the, fem.), the same fusion as Day 5's às." },
    { title: "«Não faz mal» — the national shrug", html: "Literally \"it does no harm\" — it means no worries / never mind / it's fine. Someone bumps you, plans change, it rains: <em>não faz mal</em>. One of the most-used phrases in Portugal." }
  ],
  drills: [
    { id: "u10-1", q: "«It's raining» (EP):", options: ["Está chovendo", "Está a chover", "Chove-se"], answer: 1, explain: "Estar a + infinitive — the EP continuous, again." },
    { id: "u10-2", q: "«Que tempo faz?» asks about…", options: ["the time", "the weather", "the schedule"], answer: 1, explain: "Tempo = weather AND time; faz asks about weather." },
    { id: "u10-3", q: "«Não faz mal» means…", options: ["it doesn't work", "no worries / never mind", "it's not bad quality"], answer: 1 },
    { id: "u10-4", q: "The seasons, in order from spring:", options: ["primavera, verão, outono, inverno", "verão, outono, primavera, inverno", "inverno, verão, primavera, outono"], answer: 0 },
    { id: "u10-5", q: "«Vamos à praia?» —", options: ["Are they at the beach?", "Shall we go to the beach?", "Is the beach far?"], answer: 1 },
    { id: "u10-6", q: "«amanhã» =", options: ["yesterday", "tomorrow", "morning"], answer: 1, explain: "Tomorrow. Morning is a manhã — one letter apart, nasal twins." },
    { id: "u10-7", q: "«Gosto mais do verão» =", options: ["I like summer the least", "I prefer summer", "I only like summer"], answer: 1 },
    { id: "u10-8", q: "«talvez» =", options: ["maybe", "always", "too late"], answer: 0 }
  ]
});

window.UNITS.push({
  day: 11, title: "Ontem", titleEn: "Yesterday — first steps into the past",
  vocab: [
    { pt: "ontem", en: "yesterday", pr: "O(N)-tay(n)" },
    { pt: "fui", en: "I went / I was (ser)", pr: "FWEE" },
    { pt: "estive", en: "I was (estar — somewhere)", pr: "shTEEV" },
    { pt: "falei", en: "I spoke", pr: "fuh-LAY" },
    { pt: "comi", en: "I ate", pr: "koo-MEE" },
    { pt: "bebi", en: "I drank", pr: "buh-BEE" },
    { pt: "comprei", en: "I bought", pr: "ko(n)-PRAY" },
    { pt: "vi", en: "I saw", pr: "VEE" },
    { pt: "gostei", en: "I liked (it)", pr: "goosh-TAY" },
    { pt: "o fim de semana", en: "the weekend", pr: "fee(n) duh suh-MAH-nuh" },
    { pt: "o museu", en: "museum", pr: "moo-ZEH-oo" },
    { pt: "lindo / linda", en: "beautiful", pr: "LEE(N)-doo" }
  ],
  dialogue: [
    { sp: "Rita", pt: "O que fizeste ontem?", en: "What did you do yesterday?" },
    { sp: "Greg", pt: "Fui a Lisboa. Estive lá o dia todo.", en: "I went to Lisbon. I was there all day." },
    { sp: "Rita", pt: "E o que viste?", en: "And what did you see?" },
    { sp: "Greg", pt: "Vi o museu dos azulejos. É lindo!", en: "I saw the tile museum. It's beautiful!" },
    { sp: "Rita", pt: "Gostaste?", en: "Did you like it?" },
    { sp: "Greg", pt: "Gostei muito. Depois comi bacalhau e bebi vinho tinto.", en: "I liked it a lot. Then I ate bacalhau and drank red wine." },
    { sp: "Rita", pt: "Um dia perfeito, então.", en: "A perfect day, then." },
    { sp: "Greg", pt: "Quase. Também comprei três pastéis de nata. Comi todos.", en: "Almost. I also bought three pastéis de nata. I ate them all." }
  ],
  decodes: [
    { title: "The past, eu-first", html: "Portuguese past tense (o pretérito perfeito) is a big machine — so we enter through one door: the <em>eu</em> (I) forms. -AR verbs → -ei (<em>falei, comprei, gostei</em>); -ER/-IR verbs → -i (<em>comi, bebi, vi</em>). Tell your own yesterday first; everyone else's past comes later." },
    { title: "fui — one word, two verbs", html: "<em>Fui</em> is the past of BOTH ir (I went) and ser (I was). <em>Fui a Lisboa</em> — I went to Lisbon. <em>Fui professor</em> — I was a teacher. Context always disambiguates. For being IN a place, use <em>estive</em>: <em>estive lá</em> — I was there." },
    { title: "azulejos — the blue tiles", html: "<em>Azulejo</em> — the painted ceramic tile on half the walls of Portugal. From Arabic <em>az-zulayj</em>, \"polished stone\" (not from <em>azul</em>, blue — a false friend inside the language itself). The Museu Nacional do Azulejo in Lisbon is the pilgrimage. This app's accent color is azulejo cobalt." }
  ],
  drills: [
    { id: "u11-1", q: "«I spoke» —", options: ["falei", "falo", "falar"], answer: 0, explain: "-AR past, eu form: -ei." },
    { id: "u11-2", q: "«I ate» —", options: ["comei", "comi", "como"], answer: 1, explain: "-ER past, eu form: -i. Comi." },
    { id: "u11-3", q: "«Fui a Lisboa» —", options: ["I went to Lisbon", "I am in Lisbon", "I will go to Lisbon"], answer: 0 },
    { id: "u11-4", q: "«I was there all day» —", options: ["Fui lá o dia todo", "Estive lá o dia todo", "Sou lá o dia todo"], answer: 1, explain: "Being located somewhere in the past → estive." },
    { id: "u11-5", q: "«Gostaste?» asks…", options: ["Do you like it?", "Did you like it?", "Will you like it?"], answer: 1 },
    { id: "u11-6", q: "«fui» can mean…", options: ["only 'I went'", "'I went' (ir) or 'I was' (ser)", "only 'I was'"], answer: 1 },
    { id: "u11-7", q: "azulejo means…", options: ["anything blue", "the painted ceramic tile", "the sky"], answer: 1, explain: "From Arabic az-zulayj, polished stone — not from azul." },
    { id: "u11-8", q: "«ontem» / «hoje» / «amanhã»:", options: ["yesterday / today / tomorrow", "today / tomorrow / yesterday", "morning / noon / night"], answer: 0 }
  ]
});

window.UNITS.push({
  day: 12, title: "A casa", titleEn: "Home — living somewhere",
  vocab: [
    { pt: "a casa", en: "house / home", pr: "KAH-zuh" },
    { pt: "o apartamento", en: "apartment", pr: "uh-pur-tuh-ME(N)-too" },
    { pt: "o quarto", en: "bedroom", pr: "KWAR-too" },
    { pt: "a cozinha", en: "kitchen", pr: "koo-ZEE-nyuh" },
    { pt: "a casa de banho", en: "bathroom (EP!)", pr: "KAH-zuh duh BAH-nyoo" },
    { pt: "a sala", en: "living room", pr: "SAH-luh" },
    { pt: "a janela", en: "window", pr: "zhuh-NEH-luh" },
    { pt: "a porta", en: "door", pr: "POR-tuh" },
    { pt: "grande / pequeno", en: "big / small", pr: "GRAND / puh-KEH-noo" },
    { pt: "novo / velho", en: "new / old", pr: "NOH-voo / VEH-lyoo" },
    { pt: "a vista", en: "view", pr: "VEESH-tuh" },
    { pt: "alugar", en: "to rent", pr: "uh-loo-GAR" }
  ],
  dialogue: [
    { sp: "Miguel", pt: "Onde moras, Greg?", en: "Where do you live, Greg?" },
    { sp: "Greg", pt: "Moro num apartamento no centro do Porto.", en: "I live in an apartment in the center of Porto." },
    { sp: "Miguel", pt: "É grande?", en: "Is it big?" },
    { sp: "Greg", pt: "Não, é pequeno: um quarto, uma sala e uma cozinha.", en: "No, it's small: one bedroom, a living room and a kitchen." },
    { sp: "Miguel", pt: "E casa de banho, não tens?", en: "And a bathroom — don't you have one?" },
    { sp: "Greg", pt: "Tenho, claro! Uma casa de banho pequena.", en: "I have one, of course! A small bathroom." },
    { sp: "Miguel", pt: "Tem boa vista?", en: "Does it have a good view?" },
    { sp: "Greg", pt: "Tem. Da janela da sala, vejo o rio. É lindo à noite.", en: "It does. From the living-room window, I see the river. It's beautiful at night." }
  ],
  decodes: [
    { title: "casa de banho — the EP bathroom", html: "Portugal: <em>a casa de banho</em> (\"the bath house\"). Brazil: <em>o banheiro</em> — which in Portugal means a lifeguard! Asking in public: <em>Onde é a casa de banho?</em> — the single most useful sentence in any language." },
    { title: "em + um = num", html: "The fusions keep coming: <em>em + um = num</em>, <em>em + uma = numa</em>. <em>Moro num apartamento</em> — I live in an apartment. You already own no/na (em+o/a) from Day 3, ao/à (a+o/a) from Days 5–10. Same machine." },
    { title: "Adjectives follow and agree", html: "<em>Uma casa de banho pequenA, um quarto pequenO</em> — the adjective sits AFTER the noun and matches its gender. <em>Boa vista</em> (good is an exception that often leads). When in doubt: noun first, adjective after, endings agree." }
  ],
  drills: [
    { id: "u12-1", q: "The bathroom, in Portugal:", options: ["o banheiro", "a casa de banho", "o lavabo"], answer: 1, explain: "Casa de banho. In Portugal a banheiro is a lifeguard." },
    { id: "u12-2", q: "«I live in an apartment»:", options: ["Moro em um apartamento", "Moro num apartamento", "Moro no apartamento um"], answer: 1, explain: "em + um fuses to num." },
    { id: "u12-3", q: "«a small house»:", options: ["uma pequena casa (only)", "uma casa pequena", "uma casa pequeno"], answer: 1, explain: "Adjective after the noun, agreeing: casa pequenA." },
    { id: "u12-4", q: "«a cozinha» is…", options: ["the kitchen", "the cushion", "the neighborhood"], answer: 0 },
    { id: "u12-5", q: "«novo» / «velho»:", options: ["new / old", "old / new", "near / far"], answer: 0 },
    { id: "u12-6", q: "«E não tens?» — «Tenho, claro!» is…", options: ["answering with the verb, again", "wrong grammar", "a question"], answer: 0, explain: "The verb-echo rule never stops paying." },
    { id: "u12-7", q: "«Da janela, vejo o rio» =", options: ["From the window, I see the river", "The window faces the street", "I clean the window daily"], answer: 0 },
    { id: "u12-8", q: "«alugar» =", options: ["to buy", "to rent", "to clean"], answer: 1 }
  ]
});

window.UNITS.push({
  day: 13, title: "O trabalho", titleEn: "Work — what you do",
  vocab: [
    { pt: "trabalhar em / como", en: "to work at / as", pr: "truh-buh-LYAR" },
    { pt: "O que fazes?", en: "What do you do?", pr: "oo kuh FAH-zush" },
    { pt: "fazer — faço, fazes, faz", en: "to do/make — I, you, he/she", pr: "FAH-soo, FAH-zush, FASH" },
    { pt: "o professor / a professora", en: "teacher", pr: "proo-fuh-SOR" },
    { pt: "o médico / a médica", en: "doctor", pr: "MEH-dee-koo" },
    { pt: "o engenheiro / a engenheira", en: "engineer", pr: "e(n)-zhuh-NYAY-roo" },
    { pt: "a empresa", en: "company", pr: "e(n)-PREH-zuh" },
    { pt: "a reunião", en: "meeting", pr: "ree-oo-nee-OW(N)" },
    { pt: "segunda, terça, quarta, quinta, sexta-feira", en: "Mon Tue Wed Thu Fri", pr: "suh-GOO(N)-duh…" },
    { pt: "o sábado / o domingo", en: "Saturday / Sunday", pr: "SAH-buh-doo / doo-MEE(N)-goo" },
    { pt: "ocupado / ocupada", en: "busy", pr: "oh-koo-PAH-doo" },
    { pt: "as férias", en: "vacation", pr: "FEH-ree-ush" }
  ],
  dialogue: [
    { sp: "Rita", pt: "O que fazes, Greg?", en: "What do you do, Greg?" },
    { sp: "Greg", pt: "Trabalho com computadores. E tu?", en: "I work with computers. And you?" },
    { sp: "Rita", pt: "Sou professora. Ensino inglês numa escola.", en: "I'm a teacher. I teach English at a school." },
    { sp: "Greg", pt: "Trabalhas todos os dias?", en: "Do you work every day?" },
    { sp: "Rita", pt: "De segunda a sexta. Ao sábado, descanso.", en: "Monday to Friday. On Saturdays, I rest." },
    { sp: "Greg", pt: "E estás ocupada esta semana?", en: "And are you busy this week?" },
    { sp: "Rita", pt: "Muito. Tenho reuniões na quarta e na quinta.", en: "Very. I have meetings on Wednesday and Thursday." },
    { sp: "Greg", pt: "Então marcamos o café para sexta?", en: "So shall we set the coffee for Friday?" },
    { sp: "Rita", pt: "Combinado!", en: "Deal!" }
  ],
  decodes: [
    { title: "The counted weekdays", html: "Portuguese weekdays are numbered church-style from Sunday: <em>segunda-feira</em> (2nd), <em>terça</em> (3rd)… <em>sexta-feira</em> (6th = Friday). In speech the <em>-feira</em> usually drops: <em>na quarta</em> = on Wednesday. Sábado and domingo keep their names." },
    { title: "Professions drop the article", html: "<em>Sou professora. Sou engenheiro.</em> — no \"a/an\": you say \"I am teacher.\" Adding the article (<em>sou um professor</em>) sounds like you're one specimen of the species. Profession = bare noun after ser." },
    { title: "«Combinado!» — deal!", html: "From <em>combinar</em>, to arrange. When plans click, Portugal says <em>Combinado!</em> — agreed, it's set, deal. You'll hear (and want to say) it constantly." }
  ],
  drills: [
    { id: "u13-1", q: "Wednesday, in speech:", options: ["a quarta", "o quarto", "a quatro-feira"], answer: 0, explain: "Quarta(-feira) — the counted weekday; -feira drops in speech." },
    { id: "u13-2", q: "«I am a teacher» —", options: ["Sou um professor", "Sou professor", "Estou professor"], answer: 1, explain: "Professions take no article: sou professor." },
    { id: "u13-3", q: "fazer: eu ___, tu ___", options: ["faço, fazes", "fazo, faces", "faço, faz"], answer: 0 },
    { id: "u13-4", q: "«De segunda a sexta» =", options: ["from Monday to Friday", "from the second to the sixth", "twice on Fridays"], answer: 0 },
    { id: "u13-5", q: "«Combinado!» means…", options: ["Combined chemistry", "Deal! / it's set", "Maybe"], answer: 1 },
    { id: "u13-6", q: "«ocupada» — Rita is…", options: ["busy", "employed", "worried"], answer: 0 },
    { id: "u13-7", q: "«as férias» =", options: ["the fairs", "the holidays/vacation", "the ferries"], answer: 1 },
    { id: "u13-8", q: "Friday is «sexta-feira» because…", options: ["it's the sixth day counted from Sunday", "sexta means party", "it rhymes"], answer: 0 }
  ]
});

window.UNITS.push({
  day: 14, title: "Revisão — Duas semanas", titleEn: "Review — Two weeks in",
  vocab: [
    { pt: "a semana", en: "week", pr: "suh-MAH-nuh" },
    { pt: "aprendi", en: "I learned", pr: "uh-pre(n)-DEE" },
    { pt: "já", en: "already", pr: "ZHA" },
    { pt: "ainda", en: "still / yet", pr: "uh-EE(N)-duh" },
    { pt: "tudo", en: "everything", pr: "TOO-doo" },
    { pt: "a palavra", en: "word", pr: "puh-LAH-vruh" },
    { pt: "difícil / fácil", en: "difficult / easy", pr: "dee-FEE-seel / FAH-seel" },
    { pt: "continuar", en: "to continue", pr: "ko(n)-tee-noo-AR" }
  ],
  dialogue: [
    { sp: "—", pt: "O Greg está em Portugal há dois meses. Estuda português há duas semanas.", en: "Greg has been in Portugal for two months. He's been studying Portuguese for two weeks." },
    { sp: "—", pt: "Já sabe pedir um café e um pastel de nata. Já sabe perguntar onde fica a estação.", en: "He already knows how to order a coffee and a custard tart. He already knows how to ask where the station is." },
    { sp: "Rita", pt: "Então, Greg, o que aprendeste em duas semanas?", en: "So, Greg, what have you learned in two weeks?" },
    { sp: "Greg", pt: "Aprendi muito! Falo com o empregado do café todos os dias.", en: "I've learned a lot! I speak with the café waiter every day." },
    { sp: "Rita", pt: "E o que é difícil?", en: "And what's difficult?" },
    { sp: "Greg", pt: "As vogais! Ainda não ouço todas as palavras.", en: "The vowels! I still don't hear all the words." },
    { sp: "Rita", pt: "Não faz mal. Isso vem com o tempo.", en: "No worries. That comes with time." },
    { sp: "Greg", pt: "Eu sei. Vou continuar. Todos os dias, quando o sino toca.", en: "I know. I'll keep going. Every day, when the bell rings." }
  ],
  decodes: [
    { title: "já vs ainda — the progress pair", html: "<em>Já</em> = already (<em>já sei</em> — I already know). <em>Ainda</em> = still (<em>ainda estou a aprender</em>). Negated they swap: <em>já não</em> = not anymore; <em>ainda não</em> = not yet. Four positions on one dial — and you can now honestly say <em>ainda não</em> about most of Portuguese, and <em>já</em> about two real weeks of it." },
    { title: "What two weeks bought", html: "~150 words — but frequency-ordered, so they carry a huge share of daily talk. You can greet, order, shop, ask directions, describe home, family, work, weather, and narrate your yesterday. That's CIPLE A2 territory in embryo. From here the drills keep everything alive while new days add muscle. <em>O sino tira as desculpas; o trabalho é teu.</em>" }
  ],
  drills: [
    { id: "u14-1", q: "«já sei» / «ainda não sei»:", options: ["I already know / I don't know yet", "I never knew / I still know", "I know / I forgot"], answer: 0 },
    { id: "u14-2", q: "«Aprendi muito» —", options: ["I learn a lot", "I learned a lot", "I will learn a lot"], answer: 1, explain: "-ER past, eu: aprendi. Same family as comi, bebi." },
    { id: "u14-3", q: "«Estuda português há duas semanas» — há here marks…", options: ["location", "duration — for two weeks", "possession"], answer: 1 },
    { id: "u14-4", q: "«difícil» / «fácil»:", options: ["difficult / easy", "easy / difficult", "possible / impossible"], answer: 0 },
    { id: "u14-5", q: "«Isso vem com o tempo» =", options: ["That comes with time", "The weather is coming", "It's about time"], answer: 0, explain: "Tempo = time here. Day 10's double-life word." },
    { id: "u14-6", q: "«tudo» =", options: ["everything", "all people", "always"], answer: 0 },
    { id: "u14-7", q: "«Vou continuar» is…", options: ["past", "the ir-future: I'm going to continue", "a command"], answer: 1 },
    { id: "u14-8", q: "«quando o sino toca» =", options: ["when the bell rings", "when the wolf howls", "when class ends"], answer: 0 }
  ]
});
