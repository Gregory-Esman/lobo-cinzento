// Lobo Cinzento — A Cidadania: CIPLE A2 exam info + civics scaffold.
// CIVICS STATUS: the official syllabus for Portugal's new civic-knowledge test (law in force
// 2026-05-19) is NOT yet published. Everything below is PRÉ-OFICIAL — seeded from the announced
// topic areas (history, democratic institutions, rights and duties, public life) and to be
// replaced by the official program the day the implementing decree drops.
window.CIPLE = {
  intro: `The <strong>CIPLE</strong> (Certificado Inicial de Português Língua Estrangeira) is the A2 exam
    that satisfies the language requirement for Portuguese citizenship. Run by CAPLE at the University
    of Lisbon, offered several times a year (typically May, July, November), around €75.
    <em>Confirm current dates and rules at caple.letras.ulisboa.pt.</em>`,
  parts: [
    { name: "Compreensão da Leitura + Produção e Interação Escritas", weight: "45%", desc: "Reading short everyday texts (signs, notices, messages, forms) and writing two short pieces — typically a brief message (~25 words) and a short text (~60 words) about daily life." },
    { name: "Compreensão do Oral", weight: "30%", desc: "Listening to short everyday dialogues and announcements, answering multiple-choice questions. European Portuguese audio — exactly what your ear is training on." },
    { name: "Produção e Interação Orais", weight: "25%", desc: "A short spoken exam with an examiner (often in pairs): introduce yourself, answer questions about daily life, handle a simple interaction. A Conversa is this, every day." }
  ],
  passing: "Grades: Suficiente (55–69%), Bom (70–84%), Muito Bom (85–100%). Citizenship needs a pass — 55%.",
  writingPrompts: [
    "Escreve uma mensagem a um amigo: convida-o para um café na sexta-feira. (20–30 palavras)",
    "Escreve um texto sobre a tua família. (50–70 palavras)",
    "Escreve um texto sobre o teu dia normal: a que horas te levantas, o que comes, onde trabalhas. (50–70 palavras)",
    "Escreve uma mensagem à tua senhoria: há um problema na cozinha. (20–30 palavras)",
    "Escreve um texto sobre a tua casa. (50–70 palavras)"
  ],
  oralPrompts: [
    "Apresenta-te: nome, de onde és, onde moras, o que fazes.",
    "Descreve a tua família.",
    "O que fizeste ontem? (usa o passado: fui, comi, vi…)",
    "Do que gostas mais em Portugal?",
    "Descreve o teu dia, da manhã à noite."
  ]
};

window.CIVICS = {
  status: "PRÉ-OFICIAL — the official test syllabus has not been published yet (regulations pending). These are the announced topic areas, seeded with the facts most likely to matter. This section will be rebuilt on the official program when it exists.",
  questions: [
    { id: "c1", q: "Em que ano foi fundado Portugal como reino independente?", en: "In what year was Portugal founded as an independent kingdom?", options: ["1143", "1385", "1580"], answer: 0, explain: "1143 — Tratado de Zamora; Afonso Henriques becomes the first king. Portugal's borders are among the oldest in Europe." },
    { id: "c2", q: "Quem foi o primeiro rei de Portugal?", en: "Who was the first king of Portugal?", options: ["D. Dinis", "D. Afonso Henriques", "D. Manuel I"], answer: 1, explain: "Dom Afonso Henriques, o Conquistador." },
    { id: "c3", q: "Que navegador português chegou à Índia por mar em 1498?", en: "Which Portuguese navigator reached India by sea in 1498?", options: ["Pedro Álvares Cabral", "Vasco da Gama", "Fernão de Magalhães"], answer: 1, explain: "Vasco da Gama. Cabral reached Brazil in 1500; Magalhães' expedition first circled the globe." },
    { id: "c4", q: "Qual é a grande obra épica da literatura portuguesa?", en: "What is the great epic of Portuguese literature?", options: ["Os Lusíadas, de Luís de Camões", "A Mensagem, de Fernando Pessoa", "Memorial do Convento, de Saramago"], answer: 0, explain: "Os Lusíadas (1572) — Camões' epic of the voyages. June 10, Portugal's national day, is Camões Day." },
    { id: "c5", q: "O que aconteceu a 1 de novembro de 1755?", en: "What happened on November 1, 1755?", options: ["A independência do Brasil", "O grande terramoto de Lisboa", "A implantação da República"], answer: 1, explain: "The Lisbon earthquake — the Marquês de Pombal rebuilt the city (the Baixa Pombalina)." },
    { id: "c6", q: "Quando foi implantada a República Portuguesa?", en: "When was the Portuguese Republic established?", options: ["5 de outubro de 1910", "25 de abril de 1974", "1 de dezembro de 1640"], answer: 0, explain: "October 5, 1910 — the monarchy ends. (Dec 1, 1640 was the restoration of independence from Spain.)" },
    { id: "c7", q: "O que foi o 25 de Abril de 1974?", en: "What was April 25, 1974?", options: ["A entrada na União Europeia", "A Revolução dos Cravos — o fim da ditadura", "O fim da Segunda Guerra Mundial"], answer: 1, explain: "The Carnation Revolution — a nearly bloodless military coup ended the Estado Novo dictatorship and opened the way to democracy. National holiday: Dia da Liberdade." },
    { id: "c8", q: "Quem governou Portugal durante o Estado Novo?", en: "Who governed Portugal during the Estado Novo?", options: ["António de Oliveira Salazar", "Mário Soares", "D. Carlos I"], answer: 0, explain: "Salazar's authoritarian regime (1933–1974, with Caetano at the end)." },
    { id: "c9", q: "Em que ano entrou Portugal na CEE (atual União Europeia)?", en: "When did Portugal join the EEC (now EU)?", options: ["1974", "1986", "1999"], answer: 1, explain: "1986, together with Spain. The euro replaced the escudo (notes and coins in 2002)." },
    { id: "c10", q: "Qual é a forma de governo de Portugal?", en: "What is Portugal's form of government?", options: ["Monarquia constitucional", "República semipresidencialista", "República federal"], answer: 1, explain: "A semi-presidential republic: a directly elected President plus a Government led by the Prime Minister, answerable to parliament." },
    { id: "c11", q: "Quantos deputados tem a Assembleia da República?", en: "How many deputies does the Assembly of the Republic have?", options: ["230", "308", "150"], answer: 0, explain: "230 deputies, elected by proportional representation. It sits in the Palácio de São Bento, Lisbon. (308 is the number of municípios.)" },
    { id: "c12", q: "Por quantos anos é eleito o Presidente da República?", en: "For how many years is the President elected?", options: ["4 anos", "5 anos", "7 anos"], answer: 1, explain: "Five years, maximum two consecutive terms. Official residence: Palácio de Belém." },
    { id: "c13", q: "Quem chefia o Governo em Portugal?", en: "Who heads the Government in Portugal?", options: ["O Presidente da República", "O Primeiro-Ministro", "O Presidente da Assembleia"], answer: 1, explain: "The Prime Minister heads the Government; the President is head of state." },
    { id: "c14", q: "Quais são as duas regiões autónomas de Portugal?", en: "What are Portugal's two autonomous regions?", options: ["Açores e Madeira", "Algarve e Alentejo", "Minho e Trás-os-Montes"], answer: 0, explain: "The Azores and Madeira archipelagos — each with its own government and assembly." },
    { id: "c15", q: "Qual é a lei fundamental do país, e de que ano é?", en: "What is the country's fundamental law, and from what year?", options: ["A Constituição de 1976", "O Código Civil de 1867", "A Carta de 1826"], answer: 0, explain: "The Constitution of 1976, adopted after the Carnation Revolution — rights, duties, and the organization of the state." },
    { id: "c16", q: "A partir de que idade se pode votar em Portugal?", en: "From what age can one vote in Portugal?", options: ["16 anos", "18 anos", "21 anos"], answer: 1, explain: "18. Voting is a right and civic duty, though not legally compulsory." },
    { id: "c17", q: "O que é o SNS?", en: "What is the SNS?", options: ["O Serviço Nacional de Saúde", "O Sindicato Nacional", "O Serviço de Notícias"], answer: 0, explain: "The National Health Service — universal public healthcare, a pillar of the 1976 Constitution." },
    { id: "c18", q: "Quais são as cores da bandeira portuguesa?", en: "What are the colors of the Portuguese flag?", options: ["Verde e vermelha", "Azul e branca", "Vermelha e amarela"], answer: 0, explain: "Green and red, with the armillary sphere (the navigators' instrument) and the national shield." },
    { id: "c19", q: "Como se chama o hino nacional?", en: "What is the national anthem called?", options: ["A Portuguesa", "Grândola, Vila Morena", "Fado de Lisboa"], answer: 0, explain: "A Portuguesa (1890). Grândola, Vila Morena is the song that signaled the start of the 1974 revolution — also worth knowing." },
    { id: "c20", q: "Que género musical português é Património da Humanidade?", en: "Which Portuguese music genre is UNESCO heritage?", options: ["O fado", "A morna", "O flamenco"], answer: 0, explain: "Fado — urban song of saudade; Amália Rodrigues is its great voice. (Morna is Cape Verdean; flamenco Spanish.)" },
    { id: "c21", q: "Qual é a capital de Portugal, e a segunda maior cidade?", en: "Capital and second city?", options: ["Lisboa e Porto", "Porto e Coimbra", "Lisboa e Faro"], answer: 0, explain: "Lisbon (capital) and Porto. Coimbra holds the historic university (1290, UNESCO)." },
    { id: "c22", q: "Além do português, que língua tem estatuto oficial local em Portugal?", en: "Besides Portuguese, which language has local official status?", options: ["O mirandês", "O galego", "O basco"], answer: 0, explain: "Mirandese, spoken around Miranda do Douro — co-official there since 1999. A famous exam-style curveball." },
    { id: "c23", q: "Portugal é membro fundador de que aliança de defesa?", en: "Portugal is a founding member of which defense alliance?", options: ["Da NATO/OTAN (1949)", "Do Pacto de Varsóvia", "Da CPLP"], answer: 0, explain: "NATO founding member, 1949. The CPLP is the community of Portuguese-speaking countries — Portugal belongs, but it's not a defense alliance." },
    { id: "c24", q: "O que se celebra a 10 de junho?", en: "What is celebrated on June 10?", options: ["O Dia de Portugal, de Camões e das Comunidades", "O Dia da Liberdade", "O Dia da República"], answer: 0, explain: "Portugal Day — Camões' death date (1580). Liberdade = April 25; República = October 5." }
  ]
};

// Static audio manifest — filled when real EP audio is generated with ElevenLabs (M2 audio pass).
// Keys: "u{day}-d{dialogueIndex}" and "u{day}-v{vocabIndex}" → file path under audio/.
window.AUDIO_MANIFEST = {};
