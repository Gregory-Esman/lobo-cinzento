// Lobo Cinzento — As Leituras Cívicas: civics for the citizenship test, written as
// A2-level European Portuguese comprehensible input. Civics time IS Portuguese time.
// One reading unlocks each week (day 7, 14, 21…) on the lighter revision cadence.
// PRÉ-OFICIAL: rebuilt on the official syllabus when the implementing decree publishes.
// Schema: {id, week, title, titleEn, paras:[{pt,en}], drills:[{id,q,options,answer,explain}]}
window.CIVICS_READINGS = [
  {
    id: "cr1", week: 1, title: "A fundação de Portugal", titleEn: "The founding of Portugal",
    paras: [
      { pt: "Portugal é um país muito antigo. Nasce no ano de 1143.", en: "Portugal is a very old country. It is born in the year 1143." },
      { pt: "O primeiro rei chama-se Dom Afonso Henriques. Também tem um nome especial: «o Conquistador».", en: "The first king is called Dom Afonso Henriques. He also has a special name: 'the Conqueror.'" },
      { pt: "Em 1143, Portugal e Leão assinam (sign) o Tratado de Zamora. Portugal fica independente.", en: "In 1143, Portugal and León sign the Treaty of Zamora. Portugal becomes independent." },
      { pt: "As fronteiras (borders) de Portugal são das mais antigas da Europa. Quase não mudam há 800 anos.", en: "Portugal's borders are among the oldest in Europe. They have barely changed in 800 years." },
      { pt: "Por isso, os portugueses têm muito orgulho (pride) na sua história.", en: "That is why the Portuguese take great pride in their history." }
    ],
    drills: [
      { id: "cr1-1", q: "Em que ano nasce Portugal?  —  In what year is Portugal born?", options: ["1143", "1498", "1910"], answer: 0, explain: "1143 — o Tratado de Zamora. Nasce = is born (nascer)." },
      { id: "cr1-2", q: "Quem é o primeiro rei de Portugal?  —  Who is the first king?", options: ["Dom Dinis", "Dom Afonso Henriques", "Dom Manuel I"], answer: 1, explain: "Dom Afonso Henriques, «o Conquistador»." },
      { id: "cr1-3", q: "«As fronteiras são das mais antigas da Europa» significa…  —  means…", options: ["the borders are among Europe's oldest", "the borders are new", "the borders are closed"], answer: 0, explain: "Antigo = old/ancient. Note the pattern «das mais antigas» — among the most ancient." },
      { id: "cr1-4", q: "O que assinam Portugal e Leão em 1143?", options: ["O Tratado de Zamora", "A Constituição", "O Tratado de Lisboa"], answer: 0, explain: "The Treaty of Zamora — independence. (The Constitution comes in 1976; the Treaty of Lisbon is an EU treaty.)" }
    ]
  },
  {
    id: "cr2", week: 2, title: "Os Descobrimentos", titleEn: "The Age of Discoveries",
    paras: [
      { pt: "Nos séculos XV e XVI, os portugueses vão pelo mar para todo o mundo. Esta época chama-se «os Descobrimentos».", en: "In the 15th and 16th centuries, the Portuguese go by sea to the whole world. This era is called 'the Discoveries.'" },
      { pt: "O Infante Dom Henrique, «o Navegador», começa esta história. Ele não navega muito — mas organiza tudo.", en: "Prince Henry 'the Navigator' begins this story. He doesn't sail much — but he organizes everything." },
      { pt: "Em 1498, Vasco da Gama chega à Índia pelo mar. Em 1500, Pedro Álvares Cabral chega ao Brasil.", en: "In 1498, Vasco da Gama reaches India by sea. In 1500, Pedro Álvares Cabral reaches Brazil." },
      { pt: "O grande poeta Luís de Camões escreve «Os Lusíadas» sobre estas viagens (voyages).", en: "The great poet Luís de Camões writes 'The Lusiads' about these voyages." },
      { pt: "O dia 10 de junho é o Dia de Portugal — o dia de Camões.", en: "June 10 is Portugal Day — Camões' day." }
    ],
    drills: [
      { id: "cr2-1", q: "Quem chega à Índia pelo mar em 1498?", options: ["Pedro Álvares Cabral", "Vasco da Gama", "Fernão de Magalhães"], answer: 1, explain: "Vasco da Gama — à Índia. Cabral → Brasil (1500)." },
      { id: "cr2-2", q: "«Os Lusíadas» é…", options: ["um poema épico de Camões", "uma lei", "uma cidade"], answer: 0, explain: "The national epic, about the voyages. Camões morre a 10 de junho — Portugal Day." },
      { id: "cr2-3", q: "O que se celebra a 10 de junho?", options: ["O Dia de Portugal, de Camões e das Comunidades", "O Natal", "O Dia da Liberdade"], answer: 0, explain: "Portugal Day. (Dia da Liberdade = 25 de abril — next week's reading.)" },
      { id: "cr2-4", q: "«chega à Índia» — «chegar» significa…", options: ["to leave", "to arrive", "to sail"], answer: 1, explain: "Chegar = to arrive — the same verb as Day 8's «chega» (it's enough). One verb, two lives." }
    ]
  },
  {
    id: "cr3", week: 3, title: "O terramoto de Lisboa", titleEn: "The Lisbon earthquake",
    paras: [
      { pt: "No dia 1 de novembro de 1755, há um grande terramoto (earthquake) em Lisboa.", en: "On November 1, 1755, there is a great earthquake in Lisbon." },
      { pt: "Depois do terramoto, vem o fogo (fire) e vem o mar. Grande parte da cidade fica destruída.", en: "After the earthquake comes the fire and comes the sea. A large part of the city is destroyed." },
      { pt: "Um homem forte do governo, o Marquês de Pombal, reconstrói a cidade.", en: "A strong man of the government, the Marquis of Pombal, rebuilds the city." },
      { pt: "Ele diz uma frase famosa: «Enterrar os mortos e cuidar dos vivos» — bury the dead and care for the living.", en: "He says a famous phrase: 'Bury the dead and care for the living.'" },
      { pt: "Hoje, o centro de Lisboa chama-se «a Baixa Pombalina», por causa dele.", en: "Today, downtown Lisbon is called 'the Baixa Pombalina,' because of him." }
    ],
    drills: [
      { id: "cr3-1", q: "O que acontece a 1 de novembro de 1755?", options: ["Um grande terramoto em Lisboa", "A independência do Brasil", "Uma revolução"], answer: 0, explain: "The great Lisbon earthquake — followed by fire and tsunami." },
      { id: "cr3-2", q: "Quem reconstrói Lisboa?", options: ["O Marquês de Pombal", "Dom Afonso Henriques", "Vasco da Gama"], answer: 0, explain: "Pombal — hence «a Baixa Pombalina»." },
      { id: "cr3-3", q: "«reconstrói» significa…", options: ["destroys", "rebuilds", "visits"], answer: 1, explain: "re + construir = rebuild. Portuguese re- works like English re-." },
      { id: "cr3-4", q: "«por causa dele» significa…", options: ["because of him", "instead of him", "against him"], answer: 0, explain: "Por causa de = because of — an everyday high-frequency chunk hiding in a history lesson." }
    ]
  },
  {
    id: "cr4", week: 4, title: "A República", titleEn: "The Republic",
    paras: [
      { pt: "Durante quase 800 anos, Portugal é uma monarquia — um país com reis.", en: "For almost 800 years, Portugal is a monarchy — a country with kings." },
      { pt: "No dia 5 de outubro de 1910, isso acaba. Portugal fica uma república.", en: "On October 5, 1910, that ends. Portugal becomes a republic." },
      { pt: "A bandeira (flag) nova é verde e vermelha, com a esfera armilar — um instrumento dos navegadores.", en: "The new flag is green and red, with the armillary sphere — an instrument of the navigators." },
      { pt: "O hino nacional chama-se «A Portuguesa». Começa assim: «Heróis do mar, nobre povo…»", en: "The national anthem is called 'A Portuguesa.' It begins: 'Heroes of the sea, noble people…'" },
      { pt: "O 5 de outubro é feriado (public holiday) — o Dia da Implantação da República.", en: "October 5 is a public holiday — Republic Day." }
    ],
    drills: [
      { id: "cr4-1", q: "Quando fica Portugal uma república?", options: ["5 de outubro de 1910", "25 de abril de 1974", "1 de janeiro de 1986"], answer: 0, explain: "October 5, 1910 — the monarchy ends." },
      { id: "cr4-2", q: "De que cores é a bandeira portuguesa?", options: ["Verde e vermelha", "Azul e branca", "Verde e amarela"], answer: 0, explain: "Green and red, with the armillary sphere and shield." },
      { id: "cr4-3", q: "Como se chama o hino nacional?", options: ["A Portuguesa", "Grândola, Vila Morena", "Fado de Coimbra"], answer: 0, explain: "A Portuguesa (1890). Grândola belongs to 1974 — next reading." },
      { id: "cr4-4", q: "«feriado» significa…", options: ["a public holiday", "a funeral", "a fair"], answer: 0, explain: "Feriado = public holiday — a word you'll use constantly in Portugal, which has a LOT of them." }
    ]
  },
  {
    id: "cr5", week: 5, title: "O 25 de Abril", titleEn: "April 25 — the Carnation Revolution",
    paras: [
      { pt: "De 1933 a 1974, Portugal vive numa ditadura (dictatorship): o Estado Novo, de António de Oliveira Salazar.", en: "From 1933 to 1974, Portugal lives under a dictatorship: the Estado Novo, of António de Oliveira Salazar." },
      { pt: "Nesse tempo, não há eleições livres e não há liberdade de expressão.", en: "In that time, there are no free elections and no freedom of expression." },
      { pt: "Na madrugada de 25 de abril de 1974, uma canção toca na rádio: «Grândola, Vila Morena». É o sinal (signal).", en: "In the early morning of April 25, 1974, a song plays on the radio: 'Grândola, Vila Morena.' It is the signal." },
      { pt: "Os militares saem à rua, e o povo põe cravos (carnations) nas armas. Quase ninguém morre.", en: "The military takes to the streets, and the people put carnations in the guns. Almost no one dies." },
      { pt: "É a Revolução dos Cravos. Portugal fica livre. O 25 de abril é hoje o Dia da Liberdade.", en: "It is the Carnation Revolution. Portugal becomes free. April 25 is today Freedom Day." }
    ],
    drills: [
      { id: "cr5-1", q: "O que é o 25 de Abril de 1974?", options: ["A Revolução dos Cravos — o fim da ditadura", "A entrada na União Europeia", "O fim da monarquia"], answer: 0, explain: "The Carnation Revolution ends the Estado Novo. (Monarchy ended 1910; EU came 1986.)" },
      { id: "cr5-2", q: "Quem governa durante o Estado Novo?", options: ["Salazar", "Camões", "Pombal"], answer: 0, explain: "António de Oliveira Salazar (with Caetano at the end)." },
      { id: "cr5-3", q: "Que canção é o sinal da revolução?", options: ["A Portuguesa", "Grândola, Vila Morena", "Uma canção de fado"], answer: 1, explain: "Grândola, Vila Morena, by Zeca Afonso — played on the radio as the go-signal." },
      { id: "cr5-4", q: "«liberdade» significa…", options: ["freedom", "library", "delivery"], answer: 0, explain: "Liberdade — as in Dia da Liberdade, and Lisbon's Avenida da Liberdade. (Library = biblioteca — classic false friend.)" }
    ]
  },
  {
    id: "cr6", week: 6, title: "A Constituição e o Estado", titleEn: "The Constitution and the State",
    paras: [
      { pt: "Depois da revolução, Portugal escreve a sua lei fundamental: a Constituição de 1976.", en: "After the revolution, Portugal writes its fundamental law: the Constitution of 1976." },
      { pt: "Portugal é uma república semipresidencialista. Há um Presidente e há um Governo.", en: "Portugal is a semi-presidential republic. There is a President and there is a Government." },
      { pt: "O Presidente da República é eleito por cinco anos. Ele mora no Palácio de Belém, em Lisboa.", en: "The President of the Republic is elected for five years. He lives in the Belém Palace, in Lisbon." },
      { pt: "O Governo é do Primeiro-Ministro. O parlamento chama-se Assembleia da República e tem 230 deputados.", en: "The Government belongs to the Prime Minister. The parliament is called the Assembly of the Republic and has 230 deputies." },
      { pt: "Todos os cidadãos podem votar a partir dos 18 anos. A saúde pública chama-se SNS — Serviço Nacional de Saúde.", en: "All citizens can vote from age 18. Public healthcare is called SNS — National Health Service." }
    ],
    drills: [
      { id: "cr6-1", q: "Qual é a lei fundamental de Portugal?", options: ["A Constituição de 1976", "O Tratado de Zamora", "O Código da Estrada"], answer: 0, explain: "The 1976 Constitution, born of the revolution." },
      { id: "cr6-2", q: "Quem chefia o Governo?", options: ["O Presidente da República", "O Primeiro-Ministro", "O rei"], answer: 1, explain: "The PM heads the Government; the President is head of state (5-year term, Belém)." },
      { id: "cr6-3", q: "Quantos deputados tem a Assembleia da República?", options: ["230", "100", "500"], answer: 0, explain: "230, in the Palácio de São Bento." },
      { id: "cr6-4", q: "«A partir dos 18 anos» significa…", options: ["from age 18 onwards", "until age 18", "only at exactly 18"], answer: 0, explain: "A partir de = from … onwards — a chunk you'll meet on every form and schedule in Portugal." }
    ]
  },
  {
    id: "cr7", week: 7, title: "O território", titleEn: "The territory",
    paras: [
      { pt: "Portugal fica no oeste da Europa, ao lado de Espanha. A capital é Lisboa; a segunda cidade é o Porto.", en: "Portugal sits in the west of Europe, next to Spain. The capital is Lisbon; the second city is Porto." },
      { pt: "O território continental tem 18 distritos e 308 municípios.", en: "The mainland has 18 districts and 308 municipalities." },
      { pt: "No oceano Atlântico, há duas regiões autónomas: os Açores e a Madeira. Cada uma tem o seu próprio governo.", en: "In the Atlantic Ocean, there are two autonomous regions: the Azores and Madeira. Each has its own government." },
      { pt: "A língua oficial é o português. Em Miranda do Douro, o mirandês também é oficial.", en: "The official language is Portuguese. In Miranda do Douro, Mirandese is also official." },
      { pt: "O rio mais importante é o Tejo. Ele passa por Lisboa e vai até ao mar.", en: "The most important river is the Tagus. It passes through Lisbon and goes to the sea." }
    ],
    drills: [
      { id: "cr7-1", q: "Quais são as duas regiões autónomas?", options: ["Os Açores e a Madeira", "O Algarve e o Alentejo", "Lisboa e Porto"], answer: 0, explain: "The Atlantic archipelagos, each with its own government and assembly." },
      { id: "cr7-2", q: "Além do português, que língua é oficial em Miranda do Douro?", options: ["O mirandês", "O espanhol", "O galego"], answer: 0, explain: "Mirandese — co-official locally since 1999. A favorite exam curveball." },
      { id: "cr7-3", q: "Quantos distritos tem o continente?", options: ["18", "308", "230"], answer: 0, explain: "18 districts; 308 is municípios; 230 is deputados. Three numbers worth keeping straight." },
      { id: "cr7-4", q: "«Cada uma tem o seu próprio governo» significa…", options: ["each one has its own government", "neither has a government", "they share one government"], answer: 0, explain: "Cada = each; próprio = own. «O seu próprio…» = its very own." }
    ]
  },
  {
    id: "cr8", week: 8, title: "A cultura e a Europa", titleEn: "Culture and Europe",
    paras: [
      { pt: "A música mais portuguesa chama-se fado — canções de saudade. A grande voz do fado é Amália Rodrigues.", en: "The most Portuguese music is called fado — songs of saudade. The great voice of fado is Amália Rodrigues." },
      { pt: "«Saudade» é uma palavra especial: é o amor por uma coisa que está longe. Dizem que não existe em mais nenhuma língua.", en: "'Saudade' is a special word: the love for something far away. They say it exists in no other language." },
      { pt: "O fado é Património da Humanidade da UNESCO. O grande poeta moderno é Fernando Pessoa.", en: "Fado is UNESCO World Heritage. The great modern poet is Fernando Pessoa." },
      { pt: "Em 1986, Portugal entra na Comunidade Europeia — hoje, a União Europeia. A moeda é o euro.", en: "In 1986, Portugal joins the European Community — today, the European Union. The currency is the euro." },
      { pt: "Portugal também é membro fundador da NATO (1949) e faz parte da CPLP — a comunidade dos países de língua portuguesa.", en: "Portugal is also a founding member of NATO (1949) and part of the CPLP — the community of Portuguese-speaking countries." }
    ],
    drills: [
      { id: "cr8-1", q: "Que música portuguesa é Património da Humanidade?", options: ["O fado", "O rock", "A morna"], answer: 0, explain: "Fado — Amália Rodrigues is its great voice. (Morna is Cape Verdean.)" },
      { id: "cr8-2", q: "Em que ano entra Portugal na Comunidade Europeia?", options: ["1974", "1986", "2002"], answer: 1, explain: "1986, with Spain. Euro notes and coins arrived in 2002." },
      { id: "cr8-3", q: "«saudade» é…", options: ["love/longing for something far away", "a type of health", "a greeting"], answer: 0, explain: "The untranslatable word — and a cousin of «saúde» (health) in sound only. You'll feel it about pastéis de nata soon." },
      { id: "cr8-4", q: "Portugal é membro fundador de…", options: ["da NATO (1949)", "da ONU antes de todos", "do euro em 1986"], answer: 0, explain: "NATO founding member 1949. UN entry came 1955; the euro is currency, not a membership date of 1986." }
    ]
  }
];
