// Lobo Cinzento — Units 1-7 (Week 1). European Portuguese throughout.
// Schema: {day, title, titleEn, vocab:[{pt,en,pr}], dialogue:[{sp,pt,en}], decodes:[{title,html}], drills:[{id,q,options,answer,explain}]}
window.UNITS = window.UNITS || [];

window.UNITS.push({
  day: 1, title: "Olá", titleEn: "Hello — meeting someone",
  vocab: [
    { pt: "olá", en: "hello", pr: "oh-LA" },
    { pt: "bom dia", en: "good morning", pr: "bo(n) DEE-uh" },
    { pt: "boa tarde", en: "good afternoon", pr: "BO-uh TARD" },
    { pt: "boa noite", en: "good evening / night", pr: "BO-uh NOYT" },
    { pt: "Como te chamas?", en: "What's your name? (informal)", pr: "KOH-moo tuh SHA-mush" },
    { pt: "chamo-me", en: "my name is (I call myself)", pr: "SHA-moo-muh" },
    { pt: "muito prazer", en: "nice to meet you", pr: "MWEE(N)-too pruh-ZAIR" },
    { pt: "Como estás?", en: "How are you? (informal)", pr: "KOH-moo shTASH" },
    { pt: "estou bem", en: "I'm well", pr: "shTOH BAY(N)" },
    { pt: "obrigado / obrigada", en: "thank you (m. / f. speaker)", pr: "oo-bree-GAH-doo" },
    { pt: "até logo", en: "see you later", pr: "uh-TEH LOH-goo" },
    { pt: "até já", en: "see you soon", pr: "uh-TEH ZHA" }
  ],
  dialogue: [
    { sp: "Ana", pt: "Olá! Bom dia!", en: "Hello! Good morning!" },
    { sp: "Miguel", pt: "Olá, bom dia!", en: "Hello, good morning!" },
    { sp: "Ana", pt: "Como te chamas?", en: "What's your name?" },
    { sp: "Miguel", pt: "Chamo-me Miguel. E tu?", en: "My name is Miguel. And you?" },
    { sp: "Ana", pt: "Eu sou a Ana. Muito prazer.", en: "I'm Ana. Nice to meet you." },
    { sp: "Miguel", pt: "Igualmente. Como estás?", en: "Likewise. How are you?" },
    { sp: "Ana", pt: "Estou bem, obrigada. E tu?", en: "I'm well, thank you. And you?" },
    { sp: "Miguel", pt: "Também estou bem, obrigado.", en: "I'm also well, thank you." },
    { sp: "Ana", pt: "Até logo, Miguel!", en: "See you later, Miguel!" },
    { sp: "Miguel", pt: "Até já, Ana!", en: "See you soon, Ana!" }
  ],
  decodes: [
    { title: "obrigado agrees with YOU, not with them", html: "A man says <em>obrigado</em>, a woman says <em>obrigada</em> — always. It's short for \"(I am) obliged,\" so it agrees with the speaker. Greg says <strong>obrigado</strong>, everywhere, forever." },
    { title: "«Eu sou a Ana» — the article before names", html: "Portuguese puts <em>the</em> before people's names: <em>a Ana</em>, <em>o Miguel</em> — literally \"the Ana.\" It sounds affectionate-normal in Portugal, and dropping it sounds foreign. Say <em>Eu sou o Greg</em>." },
    { title: "também", html: "<em>Também</em> = also/too — tam-BAY(N), nasal ending from Lição 0. <em>Também estou bem</em> = I'm also well." }
  ],
  drills: [
    { id: "u1-1", q: "It's 15:00 and you walk into a shop. You say…", options: ["Bom dia", "Boa tarde", "Boa noite"], answer: 1, explain: "Afternoon runs from lunch until dusk: boa tarde." },
    { id: "u1-2", q: "«Como te chamas?» means…", options: ["How are you?", "What's your name?", "Where are you from?"], answer: 1, explain: "Literally: how do you call yourself?" },
    { id: "u1-3", q: "Greg (male) thanks someone. He says…", options: ["obrigada", "obrigado", "obrigade"], answer: 1, explain: "It agrees with the speaker — Greg is male, so obrigado." },
    { id: "u1-4", q: "«Muito prazer» is said when…", options: ["saying goodbye", "meeting someone for the first time", "apologizing"], answer: 1, explain: "Literally 'much pleasure' — nice to meet you." },
    { id: "u1-5", q: "The natural EP way to say «I'm Greg»:", options: ["Eu sou Greg", "Eu sou o Greg", "Eu estou Greg"], answer: 1, explain: "The article before names: Eu sou o Greg." },
    { id: "u1-6", q: "«Como estás?» — a natural reply:", options: ["Chamo-me Ana.", "Estou bem, obrigado.", "Até logo."], answer: 1 },
    { id: "u1-7", q: "«Até já» vs «até logo»:", options: ["já = soon (minutes), logo = later (today)", "já = tomorrow, logo = next week", "they're interchangeable with 'never'"], answer: 0, explain: "Até já — you'll be back in minutes. Até logo — later the same day." },
    { id: "u1-8", q: "«Também estou bem» means…", options: ["I'm very well", "I'm also well", "I'm not well"], answer: 1 }
  ]
});

window.UNITS.push({
  day: 2, title: "No café", titleEn: "At the café — ordering",
  vocab: [
    { pt: "o café", en: "coffee / the café", pr: "kuh-FEH" },
    { pt: "a água", en: "water", pr: "AH-gwuh" },
    { pt: "o chá", en: "tea", pr: "SHA" },
    { pt: "o pastel de nata", en: "custard tart", pr: "push-TEL duh NAH-tuh" },
    { pt: "queria", en: "I'd like (polite)", pr: "kree-UH" },
    { pt: "por favor / se faz favor", en: "please", pr: "poor fuh-VOR / suh fash fuh-VOR" },
    { pt: "mais", en: "more", pr: "MYSH" },
    { pt: "nada", en: "nothing", pr: "NAH-duh" },
    { pt: "Quanto é?", en: "How much is it?", pr: "KWAN-too EH" },
    { pt: "o euro", en: "euro", pr: "EH-oo-roo" },
    { pt: "aqui está", en: "here you are", pr: "uh-KEE shTA" },
    { pt: "com certeza", en: "certainly / of course", pr: "ko(n) sir-TAY-zuh" }
  ],
  dialogue: [
    { sp: "Empregado", pt: "Bom dia. Faz favor?", en: "Good morning. What can I get you?" },
    { sp: "Greg", pt: "Bom dia. Queria um café, por favor.", en: "Good morning. I'd like a coffee, please." },
    { sp: "Empregado", pt: "Mais alguma coisa?", en: "Anything else?" },
    { sp: "Greg", pt: "Sim, um pastel de nata, se faz favor.", en: "Yes, a custard tart, please." },
    { sp: "Empregado", pt: "Com certeza. Mais nada?", en: "Certainly. Nothing else?" },
    { sp: "Greg", pt: "Mais nada, obrigado. Quanto é?", en: "Nothing else, thank you. How much is it?" },
    { sp: "Empregado", pt: "São dois euros e dez.", en: "That's two euros ten." },
    { sp: "Greg", pt: "Aqui está.", en: "Here you are." },
    { sp: "Empregado", pt: "Obrigado. Bom dia!", en: "Thank you. Good day!" }
  ],
  decodes: [
    { title: "«um café» is an espresso", html: "Order <em>um café</em> in Portugal and you get a small strong espresso — in Lisbon it's also called <em>uma bica</em>. Want it with milk? <em>um galão</em> (tall glass, mostly milk) or <em>uma meia de leite</em> (half and half, in a cup)." },
    { title: "queria — the polite ask", html: "<em>Queria</em> is literally \"I wanted\" — the past tense softens the request, exactly like English \"I wanted to ask…\". <em>Quero</em> (I want) is grammatical but blunt in a café. <em>Queria um café</em> is the native move." },
    { title: "se faz favor", html: "Portugal's own \"please.\" <em>Por favor</em> works everywhere; <em>se faz favor</em> (or just <em>faz favor</em>) is the EP classic — also what waiters say to mean \"what would you like?\" or \"right this way.\"" }
  ],
  drills: [
    { id: "u2-1", q: "You order «um café» in Lisbon. You get…", options: ["a large filter coffee", "a small espresso", "a latte"], answer: 1, explain: "Um café = espresso. The Lisbon nickname: uma bica." },
    { id: "u2-2", q: "The polite way to order:", options: ["Quero um café.", "Queria um café, por favor.", "Dá café."], answer: 1, explain: "Queria — 'I wanted' — softens it, like English 'I wanted to ask…'" },
    { id: "u2-3", q: "«Mais alguma coisa?» means…", options: ["Anything else?", "How much?", "Is that all?"], answer: 0 },
    { id: "u2-4", q: "«Quanto é?» asks…", options: ["What is it?", "How much is it?", "How many are there?"], answer: 1 },
    { id: "u2-5", q: "«São dois euros e dez» —", options: ["It's 2 euros 10", "It's 12 euros", "It's 10 euros 2"], answer: 0 },
    { id: "u2-6", q: "The very Portuguese 'please' is…", options: ["se faz favor", "por gentileza", "prego"], answer: 0, explain: "Se faz favor — and waiters use «Faz favor?» to mean 'what'll it be?'" },
    { id: "u2-7", q: "«Mais nada» means…", options: ["more of everything", "nothing else", "not yet"], answer: 1 },
    { id: "u2-8", q: "The famous Portuguese custard tart:", options: ["o pastel de nata", "a bica", "o galão"], answer: 0 }
  ]
});

window.UNITS.push({
  day: 3, title: "De onde és?", titleEn: "Where are you from?",
  vocab: [
    { pt: "De onde és?", en: "Where are you from? (informal)", pr: "duh OND ESH" },
    { pt: "sou de…", en: "I'm from…", pr: "SOH duh" },
    { pt: "os Estados Unidos", en: "the United States", pr: "oosh shTAH-doosh oo-NEE-doosh" },
    { pt: "morar / moro", en: "to live / I live", pr: "moo-RAR / MOH-roo" },
    { pt: "falar / falo", en: "to speak / I speak", pr: "fuh-LAR / FAH-loo" },
    { pt: "um pouco", en: "a little", pr: "oo(n) POH-koo" },
    { pt: "aprender", en: "to learn", pr: "uh-pren-DAIR" },
    { pt: "o mês / os meses", en: "month / months", pr: "MESH / MEH-zush" },
    { pt: "há", en: "there is / ago-for (time)", pr: "AH" },
    { pt: "cá", en: "here (EP favorite)", pr: "KA" },
    { pt: "bem", en: "well", pr: "BAY(N)" },
    { pt: "a cidade", en: "city", pr: "see-DAHD" }
  ],
  dialogue: [
    { sp: "Rita", pt: "De onde és, Greg?", en: "Where are you from, Greg?" },
    { sp: "Greg", pt: "Sou dos Estados Unidos. E tu?", en: "I'm from the United States. And you?" },
    { sp: "Rita", pt: "Sou de Lisboa. Moras cá em Portugal?", en: "I'm from Lisbon. Do you live here in Portugal?" },
    { sp: "Greg", pt: "Sim, moro no Porto.", en: "Yes, I live in Porto." },
    { sp: "Rita", pt: "Falas bem português!", en: "You speak Portuguese well!" },
    { sp: "Greg", pt: "Falo um pouco. Estou a aprender.", en: "I speak a little. I'm learning." },
    { sp: "Rita", pt: "Há quanto tempo estás em Portugal?", en: "How long have you been in Portugal?" },
    { sp: "Greg", pt: "Há dois meses. Gosto muito de cá estar.", en: "For two months. I really like being here." }
  ],
  decodes: [
    { title: "ser vs estar — the two 'to be's", html: "<em>Ser</em> (sou, és, é) = what you ARE: identity, origin, permanent-ish. <em>Sou dos Estados Unidos.</em> <em>Estar</em> (estou, estás, está) = how/where you are right now: state, location, mood. <em>Estou em Portugal. Estou bem.</em> Origin is ser; being somewhere is estar." },
    { title: "«no Porto» — the city with an article", html: "Porto is literally \"the port,\" so it keeps its article: <em>o Porto</em>, and \"in Porto\" = <em>no</em> (em + o) <em>Porto</em>. Lisboa takes none: <em>em Lisboa</em>. That's also why English says \"Oporto\" — it swallowed the article." },
    { title: "há — one tiny word, two jobs", html: "<em>Há</em> = \"there is/are\" (<em>há uma farmácia</em>) AND time-distance: <em>há dois meses</em> = two months ago / for two months. From the verb <em>haver</em>. Sounds exactly like <em>a</em> — context carries it." }
  ],
  drills: [
    { id: "u3-1", q: "Origin — I'm from the US:", options: ["Estou dos Estados Unidos", "Sou dos Estados Unidos", "Há dos Estados Unidos"], answer: 1, explain: "Origin is identity → ser: sou." },
    { id: "u3-2", q: "Location right now — I'm in Portugal:", options: ["Sou em Portugal", "Estou em Portugal", "É em Portugal"], answer: 1, explain: "Where you are now → estar: estou." },
    { id: "u3-3", q: "«Moro no Porto» — why «no»?", options: ["Porto is masculine plural", "Porto keeps its article: em + o Porto = no Porto", "no means 'near'"], answer: 1 },
    { id: "u3-4", q: "«Há dois meses» can mean…", options: ["in two months", "two months ago / for two months", "every two months"], answer: 1 },
    { id: "u3-5", q: "«Estou a aprender» is…", options: ["the EP way to say 'I am learning'", "the Brazilian way", "wrong — should be aprendendo"], answer: 0 },
    { id: "u3-6", q: "«cá» means…", options: ["here", "there", "now"], answer: 0, explain: "EP loves cá for 'here' — aqui also works." },
    { id: "u3-7", q: "Someone says «Falas bem português!» A modest reply:", options: ["Sim, falo perfeitamente.", "Falo um pouco. Estou a aprender.", "Não falo."], answer: 1 },
    { id: "u3-8", q: "«De onde és?» uses which verb form?", options: ["és — ser, informal you", "estás — estar, informal you", "é — formal"], answer: 0 }
  ]
});

window.UNITS.push({
  day: 4, title: "A família", titleEn: "Family — and the verb ter",
  vocab: [
    { pt: "a família", en: "family", pr: "fuh-MEE-lyuh" },
    { pt: "o pai / a mãe", en: "father / mother", pr: "PIE / MYE(N)" },
    { pt: "os pais", en: "parents", pr: "PIESH" },
    { pt: "o irmão / a irmã", en: "brother / sister", pr: "eer-MOW(N) / eer-MA(N)" },
    { pt: "o filho / a filha", en: "son / daughter", pr: "FEE-lyoo / FEE-lyuh" },
    { pt: "o avô / a avó", en: "grandfather / grandmother", pr: "uh-VOH / uh-VAW" },
    { pt: "ter — tenho, tens, tem", en: "to have — I have, you have, he/she has", pr: "TAY-nyoo, TAY(N)SH, TAY(N)" },
    { pt: "o ano", en: "year", pr: "AH-noo" },
    { pt: "a idade", en: "age", pr: "ee-DAHD" },
    { pt: "um, dois, três, quatro, cinco", en: "1 2 3 4 5", pr: "oo(n), DOYSH, TRESH, KWA-troo, SEE(N)-koo" },
    { pt: "seis, sete, oito, nove, dez", en: "6 7 8 9 10", pr: "SAYSH, SET, OY-too, NOV, DESH" },
    { pt: "filho único / filha única", en: "only child", pr: "FEE-lyoo OO-nee-koo" }
  ],
  dialogue: [
    { sp: "Miguel", pt: "Tens irmãos, Ana?", en: "Do you have siblings, Ana?" },
    { sp: "Ana", pt: "Tenho uma irmã e um irmão. E tu?", en: "I have a sister and a brother. And you?" },
    { sp: "Miguel", pt: "Não tenho irmãos. Sou filho único.", en: "I don't have siblings. I'm an only child." },
    { sp: "Ana", pt: "Tens filhos?", en: "Do you have children?" },
    { sp: "Miguel", pt: "Tenho dois: um menino e uma menina.", en: "I have two: a boy and a girl." },
    { sp: "Ana", pt: "Que idade têm?", en: "How old are they?" },
    { sp: "Miguel", pt: "O menino tem oito anos e a menina tem cinco.", en: "The boy is eight and the girl is five." },
    { sp: "Ana", pt: "E os teus pais, onde moram?", en: "And your parents, where do they live?" },
    { sp: "Miguel", pt: "Moram em Lisboa, com a minha avó.", en: "They live in Lisbon, with my grandmother." }
  ],
  decodes: [
    { title: "Age uses ter, not ser", html: "Portuguese HAS years: <em>Tenho quarenta anos</em> = I am forty (literally \"I have forty years\"). Asking: <em>Que idade tens?</em> or <em>Quantos anos tens?</em> Never «sou quarenta»." },
    { title: "«a minha avó» — possessives take the article", html: "My mother = <em>a minha mãe</em> (literally \"the my mother\"). <em>O meu pai, a minha irmã, os meus filhos.</em> Same habit as <em>o Miguel</em> — Portuguese likes its articles." },
    { title: "irmãos = brothers OR siblings", html: "The masculine plural covers mixed groups: <em>irmãos</em> = brothers, or brother(s)+sister(s). <em>Pais</em> = fathers or parents. <em>Filhos</em> = sons or children. Context decides; the feminine plural (<em>irmãs</em>) is only sisters." }
  ],
  drills: [
    { id: "u4-1", q: "«I am 40 years old» in Portuguese:", options: ["Sou quarenta anos", "Tenho quarenta anos", "Estou quarenta anos"], answer: 1, explain: "Age uses ter — you HAVE years." },
    { id: "u4-2", q: "«my mother» —", options: ["minha mãe", "a minha mãe", "la minha mãe"], answer: 1, explain: "Possessives take the article: a minha mãe." },
    { id: "u4-3", q: "«Tens irmãos?» can mean…", options: ["only 'do you have brothers?'", "'do you have siblings?' — masculine plural covers both", "'do you have children?'"], answer: 1 },
    { id: "u4-4", q: "ter: eu ___, tu ___, ele ___", options: ["tenho, tens, tem", "tem, tens, tenho", "tenho, tem, tens"], answer: 0 },
    { id: "u4-5", q: "«oito» is…", options: ["8", "80", "18"], answer: 0 },
    { id: "u4-6", q: "dois, quatro, seis, …", options: ["sete", "oito", "nove"], answer: 1, explain: "Even numbers: dois, quatro, seis, oito." },
    { id: "u4-7", q: "«Sou filho único» means…", options: ["I'm the oldest son", "I'm an only child", "I'm single"], answer: 1 },
    { id: "u4-8", q: "«Que idade têm?» asks about…", options: ["their names", "their ages", "their heights"], answer: 1 }
  ]
});

window.UNITS.push({
  day: 5, title: "O dia", titleEn: "The day — routine and time",
  vocab: [
    { pt: "levantar-me / levanto-me", en: "to get up / I get up", pr: "luh-van-TAR-muh / luh-VAN-too-muh" },
    { pt: "o pequeno-almoço", en: "breakfast (EP!)", pr: "puh-KEH-noo al-MOH-soo" },
    { pt: "almoçar / o almoço", en: "to have lunch / lunch", pr: "al-moo-SAR / al-MOH-soo" },
    { pt: "jantar / o jantar", en: "to have dinner / dinner", pr: "zhan-TAR" },
    { pt: "trabalhar", en: "to work", pr: "truh-buh-LYAR" },
    { pt: "estudar", en: "to study", pr: "shtoo-DAR" },
    { pt: "A que horas…?", en: "At what time…?", pr: "uh kuh OH-rush" },
    { pt: "às sete", en: "at seven", pr: "ash SET" },
    { pt: "de manhã / à tarde / à noite", en: "in the morning / afternoon / at night", pr: "duh muh-NYA(N)" },
    { pt: "o meio-dia", en: "noon", pr: "MAY-oo DEE-uh" },
    { pt: "agora", en: "now", pr: "uh-GOH-ruh" },
    { pt: "claro", en: "of course", pr: "KLAH-roo" }
  ],
  dialogue: [
    { sp: "Rita", pt: "A que horas te levantas?", en: "What time do you get up?" },
    { sp: "Greg", pt: "Levanto-me às sete da manhã.", en: "I get up at seven in the morning." },
    { sp: "Rita", pt: "E o que fazes de manhã?", en: "And what do you do in the morning?" },
    { sp: "Greg", pt: "Tomo o pequeno-almoço e vou trabalhar.", en: "I have breakfast and go to work." },
    { sp: "Rita", pt: "Onde almoças?", en: "Where do you have lunch?" },
    { sp: "Greg", pt: "Almoço em casa, ao meio-dia.", en: "I have lunch at home, at noon." },
    { sp: "Rita", pt: "E agora, o que estás a fazer?", en: "And now, what are you doing?" },
    { sp: "Greg", pt: "Estou a estudar português, claro!", en: "I'm studying Portuguese, of course!" }
  ],
  decodes: [
    { title: "pequeno-almoço — the EP breakfast", html: "Breakfast in Portugal is <em>o pequeno-almoço</em> (\"the little lunch\"). Brazil says <em>café da manhã</em>. Say the Brazilian one in Lisbon and you'll be understood — and instantly placed." },
    { title: "levanto-ME — the reflexive", html: "Some verbs carry a mirror pronoun: <em>levantar-se</em> = to raise oneself = get up. <em>Levanto-me</em> (I get up), <em>levantas-te</em> (you get up). You already know one: <em>chamo-me</em> — I call myself. In EP the pronoun usually hangs AFTER the verb with a hyphen." },
    { title: "às sete = at seven", html: "<em>a</em> (at) + <em>as</em> (the, fem. plural) = <em>às</em> — that grave accent (à) marks two words fused. <em>Às sete, às dez e meia</em> (at 10:30), <em>ao meio-dia</em> (at noon — a + o)." }
  ],
  drills: [
    { id: "u5-1", q: "Breakfast, in Portugal:", options: ["o café da manhã", "o pequeno-almoço", "a merenda"], answer: 1, explain: "Pequeno-almoço — 'the little lunch'. Café da manhã is Brazilian." },
    { id: "u5-2", q: "«I get up at seven»:", options: ["Levanto às sete", "Levanto-me às sete", "Me levanto às sete"], answer: 1, explain: "Reflexive, pronoun after the verb in EP: levanto-me." },
    { id: "u5-3", q: "«às» in «às sete» is…", options: ["a typo for 'as'", "a (at) + as (the) fused — the accent marks it", "plural of à"], answer: 1 },
    { id: "u5-4", q: "«What are you doing right now?» (EP):", options: ["O que estás a fazer?", "O que está fazendo?", "O que fazes sempre?"], answer: 0 },
    { id: "u5-5", q: "«ao meio-dia» =", options: ["at midnight", "at noon", "in the middle of the week"], answer: 1 },
    { id: "u5-6", q: "Order the day: pequeno-almoço → ___ → jantar", options: ["almoço", "lanche da meia-noite", "bica"], answer: 0 },
    { id: "u5-7", q: "«de manhã» vs «à noite»:", options: ["in the morning / at night", "at dawn / at noon", "today / tomorrow"], answer: 0 },
    { id: "u5-8", q: "Another verb you know with -me:", options: ["chamo-me", "falo-me", "moro-me"], answer: 0, explain: "Chamo-me — I call myself. Same reflexive pattern as levanto-me." }
  ]
});

window.UNITS.push({
  day: 6, title: "Onde fica?", titleEn: "Where is it? — directions",
  vocab: [
    { pt: "Onde fica…?", en: "Where is…? (location)", pr: "OND FEE-kuh" },
    { pt: "a rua", en: "street", pr: "ROO-uh (throat R)" },
    { pt: "a estação", en: "station", pr: "shtuh-SOW(N)" },
    { pt: "a farmácia", en: "pharmacy", pr: "fur-MA-syuh" },
    { pt: "à direita / à esquerda", en: "on the right / on the left", pr: "ah dee-RAY-tuh / ah shKAIR-duh" },
    { pt: "perto / longe", en: "near / far", pr: "PAIR-too / LO(N)ZH" },
    { pt: "ao lado de", en: "next to", pr: "ow LAH-doo duh" },
    { pt: "ali / aqui", en: "over there / here", pr: "uh-LEE / uh-KEE" },
    { pt: "a pé", en: "on foot", pr: "uh PEH" },
    { pt: "virar", en: "to turn", pr: "vee-RAR" },
    { pt: "desculpe", en: "excuse me (polite)", pr: "dush-KULP" },
    { pt: "de nada", en: "you're welcome", pr: "duh NAH-duh" }
  ],
  dialogue: [
    { sp: "Greg", pt: "Desculpe, onde fica a estação?", en: "Excuse me, where is the station?" },
    { sp: "Senhora", pt: "Fica ali, ao fundo da rua, à direita.", en: "It's over there, at the end of the street, on the right." },
    { sp: "Greg", pt: "É longe?", en: "Is it far?" },
    { sp: "Senhora", pt: "Não, é perto. Cinco minutos a pé.", en: "No, it's near. Five minutes on foot." },
    { sp: "Greg", pt: "E há uma farmácia aqui perto?", en: "And is there a pharmacy nearby?" },
    { sp: "Senhora", pt: "Há, sim. Vire à esquerda, ao lado do supermercado.", en: "There is. Turn left, next to the supermarket." },
    { sp: "Greg", pt: "Muito obrigado!", en: "Thank you very much!" },
    { sp: "Senhora", pt: "De nada. Bom dia!", en: "You're welcome. Good day!" }
  ],
  decodes: [
    { title: "ficar — where things sit", html: "For where a place IS, Portuguese prefers <em>ficar</em> (to stay/be located): <em>Onde fica a estação?</em> <em>Fica ali.</em> <em>É</em> also works (<em>é longe</em> — it's far as a quality). Buildings ficam; qualities são." },
    { title: "«Há, sim» — answer with the verb", html: "Portuguese rarely answers with a bare <em>sim</em>. It echoes the verb: <em>Falas inglês? — Falo.</em> <em>Há uma farmácia? — Há, sim.</em> <em>Tens filhos? — Tenho.</em> Answering with just \"sim\" is understood but sounds like a form being filled in." },
    { title: "desculpe vs desculpa", html: "<em>Desculpe</em> — polite/formal (to a stranger, exactly who you ask directions from). <em>Desculpa</em> — informal (friends, kids). To get attention politely you can also say <em>com licença</em>. The stranger in the street gets <em>desculpe</em>." }
  ],
  drills: [
    { id: "u6-1", q: "Asking a stranger where the station is:", options: ["Desculpa, onde fica a estação?", "Desculpe, onde fica a estação?", "Ó! Estação?"], answer: 1, explain: "Stranger → polite desculpe." },
    { id: "u6-2", q: "«Falas inglês?» — the natural Portuguese yes:", options: ["Sim.", "Falo.", "OK."], answer: 1, explain: "Answer with the verb: Falo. (Falo, sim is also natural.)" },
    { id: "u6-3", q: "«à direita» / «à esquerda»:", options: ["right / left", "left / right", "straight / back"], answer: 0 },
    { id: "u6-4", q: "«Fica perto» means…", options: ["it's closed", "it's near", "it's expensive"], answer: 1 },
    { id: "u6-5", q: "«a pé» =", options: ["by foot", "by bus", "quickly"], answer: 0 },
    { id: "u6-6", q: "«ao lado do supermercado» =", options: ["inside the supermarket", "next to the supermarket", "far from the supermarket"], answer: 1 },
    { id: "u6-7", q: "«Há uma farmácia aqui perto?» asks…", options: ["Is the pharmacy open?", "Is there a pharmacy nearby?", "Where is the hospital?"], answer: 1, explain: "Há = there is/are — Day 3's little word at work." },
    { id: "u6-8", q: "Someone thanks you. You say…", options: ["De nada.", "Mais nada.", "Até nada."], answer: 0 }
  ]
});

window.UNITS.push({
  day: 7, title: "Revisão — Uma manhã em Lisboa", titleEn: "Review — A morning in Lisbon",
  vocab: [
    { pt: "depois", en: "afterwards / then", pr: "duh-POYSH" },
    { pt: "encontrar", en: "to meet / find", pr: "e(n)-ko(n)-TRAR" },
    { pt: "ir — vou, vais, vai", en: "to go — I go, you go, he/she goes", pr: "VOH, VYSH, VY" },
    { pt: "para", en: "to / for", pr: "PRUH (yes, reduced!)" },
    { pt: "o trabalho", en: "work (the job/place)", pr: "truh-BAH-lyoo" },
    { pt: "que", en: "that / who", pr: "kuh" },
    { pt: "como", en: "like / as / how", pr: "KOH-moo" },
    { pt: "muito", en: "very / a lot", pr: "MWEE(N)-too" }
  ],
  dialogue: [
    { sp: "—", pt: "São oito da manhã. A Ana levanta-se e toma o pequeno-almoço: um café e um pastel de nata.", en: "It's eight in the morning. Ana gets up and has breakfast: a coffee and a custard tart." },
    { sp: "—", pt: "Depois, vai a pé para o trabalho. Na rua, encontra o Miguel.", en: "Then she walks to work. In the street, she meets Miguel." },
    { sp: "Ana", pt: "Olá, Miguel! Como estás?", en: "Hello, Miguel! How are you?" },
    { sp: "Miguel", pt: "Estou bem, obrigado. Onde vais?", en: "I'm well, thanks. Where are you going?" },
    { sp: "Ana", pt: "Vou trabalhar. E tu?", en: "I'm going to work. And you?" },
    { sp: "Miguel", pt: "Vou ao café ao lado da estação. Até logo!", en: "I'm going to the café next to the station. See you later!" },
    { sp: "—", pt: "A Ana trabalha em Lisboa. Tem uma irmã, a Rita, que mora no Porto.", en: "Ana works in Lisbon. She has a sister, Rita, who lives in Porto." },
    { sp: "—", pt: "À noite, a Ana estuda inglês. Está a aprender, um pouco como tu.", en: "At night, Ana studies English. She's learning — a little like you." }
  ],
  decodes: [
    { title: "Day 7 is a mirror", html: "Nothing in this story is new — every word came from Days 1–6 plus <em>ir</em> and <em>depois</em>. If a line resisted you, that's not failure: that's the system finding a weak spot. Tap it, hear it, reread the day it came from. This is the refinement loop working." },
    { title: "ir — the most useful irregular verb", html: "<em>Vou</em> (I go / I'm going), <em>vais</em> (you), <em>vai</em> (he/she). <em>Vou trabalhar</em> = I'm going to work — and just like English, <em>vou + verb</em> is also the future: <em>vou aprender</em> = I'm going to learn." },
    { title: "«para» sounds like 'pruh'", html: "The most-used preposition is also the most-reduced word in the language: <em>para</em> comes out <em>pruh</em> — often written <em>p'ra</em> in songs. Lição 0's vowel reduction, live." }
  ],
  drills: [
    { id: "u7-1", q: "«Onde vais?» means…", options: ["Where are you?", "Where are you going?", "Where do you live?"], answer: 1 },
    { id: "u7-2", q: "ir: eu ___, tu ___, ela ___", options: ["vou, vais, vai", "vai, vais, vou", "vou, vai, vais"], answer: 0 },
    { id: "u7-3", q: "«Vou aprender português» expresses…", options: ["past", "the future — going to learn", "doubt"], answer: 1 },
    { id: "u7-4", q: "In fast speech, «para» sounds like…", options: ["PA-RA, both vowels clear", "pruh", "por"], answer: 1 },
    { id: "u7-5", q: "«Tem uma irmã que mora no Porto» — «que» here means…", options: ["what", "who/that", "because"], answer: 1 },
    { id: "u7-6", q: "«depois» =", options: ["before", "afterwards / then", "during"], answer: 1 },
    { id: "u7-7", q: "«São oito da manhã» =", options: ["There are eight mornings", "It's 8 a.m.", "It's August"], answer: 1, explain: "Clock time uses são (plural ser): são oito. One o'clock: é uma." },
    { id: "u7-8", q: "«encontra o Miguel» =", options: ["she meets Miguel", "she calls Miguel", "she avoids Miguel"], answer: 0 }
  ]
});
