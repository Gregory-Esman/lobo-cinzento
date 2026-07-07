// Lição 0 — Os Sons do Português Europeu
// Loaded as a plain script (no modules, no build step). Exposes window.LESSON0.
window.LESSON0 = {
  id: "licao0",
  title: "Lição 0 — Os Sons",
  subtitle: "The Sounds of European Portuguese",
  sections: [
    {
      id: "bemvindo",
      title: "Bem-vindo · Welcome",
      html: `
        <p><em>Bem-vindo</em> (bay(n)-VEE(N)-doo) means <strong>welcome</strong> — literally "well-come," same bones as the English word. That's the first convention of this whole course, decoded: <strong>nothing will be left as insider knowledge.</strong> Every term, every squiggle over a letter, every "everyone knows that" gets explained the first time it appears.</p>
        <p>This is Lição 0 (lesson zero). It teaches no vocabulary lists and no grammar tables. It teaches the <strong>sound system</strong> of European Portuguese — because until your ear knows what it's listening for, every hour of study leaks. Read it once, carefully. At the end, the gate: <strong>three questions, answered from memory. Wrong answers send you back to the text.</strong> Pass, and you earn your calendar — the bells that will ring four times a day and bring the language to you.</p>
        <p class="decode"><strong>Decoded:</strong> "Lição" = lesson. The ç ("c-cedilha") is always an S sound, never K. So: lee-SOWN(G), with a nasal ending you'll meet in section 3.</p>
      `
    },
    {
      id: "porque",
      title: "1 · Why European Portuguese sounds the way it does",
      html: `
        <p>People hearing European Portuguese for the first time often guess it's Russian or Polish. A Romance language that sounds Slavic — that's the puzzle, and solving it is the key to the whole sound system.</p>
        <p>The reason is <strong>rhythm</strong>. Spanish and Brazilian Portuguese are <em>syllable-timed</em>: every syllable gets roughly equal space — ta-ta-ta-ta. European Portuguese is <em>stress-timed</em>, like English: stressed syllables get the time, and everything between them gets <strong>compressed, reduced, or swallowed whole</strong>.</p>
        <p>Take the word for telephone, <em>telefone</em>. A Brazilian says all four syllables: teh-leh-FOH-nee. A Portuguese speaker says something closer to <strong>tlefón</strong> — the unstressed vowels collapse and the final e all but vanishes.</p>
        <p>This is why learners say European Portuguese is "harder to hear." It isn't harder — it just refuses to pronounce what you expect from the spelling. Once you know <em>which</em> vowels get swallowed (next section), the fog lifts fast. And here's the payoff: because EP is stress-timed <strong>like English</strong>, your mouth already knows this rhythm. You do this to English words every day ("chocolate" → choc-lit).</p>
        <p class="decode"><strong>Decoded:</strong> "EP" = European Portuguese (Portugal); "BP" = Brazilian Portuguese. This course teaches EP — it's what the citizenship exam uses and what you'll hear in Portugal.</p>
      `
    },
    {
      id: "vogais",
      title: "2 · Vowels — the clear five and their ghosts",
      html: `
        <p>Portuguese has five written vowels — a, e, i, o, u — but each lives a double life. <strong>Stressed</strong> (in the emphasized syllable), it's clear and full. <strong>Unstressed</strong>, it reduces to a ghost of itself. The three reductions that matter:</p>
        <ul>
          <li><strong>Unstressed A → "uh"</strong> (a quick, relaxed sound). <em>casa</em> (house) = KA-zuh — first a full, second a ghosted.</li>
          <li><strong>Unstressed O → "oo"</strong>. <em>obrigado</em> (thank you) = oo-bree-GAH-doo. Both unstressed o's become u-sounds.</li>
          <li><strong>Unstressed E → almost nothing.</strong> The signature EP move. <em>pequeno</em> (small) = p'KAY-noo. Word-final e essentially disappears: <em>noite</em> (night) = NOYT.</li>
        </ul>
        <p>Say these aloud, exaggerating the reduction:</p>
        <div class="wordlist" data-words="casa|house|KA-zuh;obrigado|thank you|oo-bree-GAH-doo;pequeno|small|p'KAY-noo;noite|night|NOYT;telefone|telephone|tle-FON"></div>
        <p class="decode"><strong>Decoded:</strong> "Stress" = the syllable a word leans on (English "baNAna"). Portuguese words mostly stress the second-to-last syllable; a written accent mark (á, é, ó…) overrides that and tells you exactly where the stress lives. The accents are stress road-signs, not decoration.</p>
      `
    },
    {
      id: "nasais",
      title: "3 · The nasal sounds — ão, em, õe",
      html: `
        <p>The tilde (the ~ squiggle, called <em>til</em>) means: <strong>send this vowel through your nose</strong>. Say "sing" and stop before the g — that trapped nasal air is the mechanism. No final N or NG is actually pronounced; the vowel itself is nasal.</p>
        <ul>
          <li><strong>ão</strong> — the most Portuguese sound in Portuguese. Like "ow" in "now," but nasal. <em>não</em> (no), <em>mão</em> (hand), <em>pão</em> (bread).</li>
          <li><strong>em / en</strong> at the end of a word — close to "ay(n)". <em>bem</em> (well) = bay(n). <em>também</em> (also) = tam-BAY(N).</li>
          <li><strong>õe</strong> — nasal "oy". <em>põe</em> (he/she puts), <em>limões</em> (lemons).</li>
        </ul>
        <div class="wordlist" data-words="não|no|NOW(N);mão|hand|MOW(N);pão|bread|POW(N);bem|well|BAY(N);põe|puts|POY(N)"></div>
        <p class="decode"><strong>Decoded:</strong> when this course writes a pronunciation like BAY(N), the letters in parentheses are <em>nasal coloring</em>, not sounds you articulate. Nothing touches — no tongue-to-roof N. The air just goes through the nose.</p>
      `
    },
    {
      id: "consoantes",
      title: "4 · Consonants that surprise English speakers",
      html: `
        <p>Six patterns cover nearly every surprise:</p>
        <ul>
          <li><strong>S at the end of a syllable → SH.</strong> The most important EP consonant rule. <em>dois</em> (two) = DOYSH. <em>está</em> (is) = shTA. <em>Lisboa</em> = lizh-BO-uh. Plural words hiss: <em>as casas</em> = uhsh KA-zush.</li>
          <li><strong>CH → SH</strong> (never "tch"). <em>chá</em> (tea) = SHA. <em>chamo-me</em> (my name is) = SHA-moo-muh.</li>
          <li><strong>J, and G before e/i → ZH</strong> (the s in "measure"). <em>já</em> (already) = ZHA. <em>gente</em> (people) = ZHENT.</li>
          <li><strong>LH → "lli"</strong> as in "million". <em>filho</em> (son) = FEE-lyoo. <strong>NH → "ny"</strong> as in "canyon". <em>vinho</em> (wine) = VEE-nyoo.</li>
          <li><strong>R at the start of a word, and RR → a throat R</strong>, like French. <em>rua</em> (street), <em>carro</em> (car). A single R between vowels is a quick tap, like the tt in American "butter": <em>caro</em> (expensive).</li>
          <li><strong>Ç → always S.</strong> <em>coração</em> (heart) = koo-ruh-SOW(N).</li>
        </ul>
        <div class="wordlist" data-words="dois|two|DOYSH;está|is|shTA;chá|tea|SHA;gente|people|ZHENT;filho|son|FEE-lyoo;vinho|wine|VEE-nyoo;rua|street|(throat R)OO-uh;coração|heart|koo-ruh-SOW(N)"></div>
        <p class="decode"><strong>Decoded:</strong> that syllable-final S→SH rule is the single biggest reason EP sounds "Slavic" — the language shimmers with sh and zh. It's also the fastest way to sound Portuguese instead of Spanish from your very first sentence.</p>
      `
    },
    {
      id: "epbp",
      title: "5 · EP vs BP — the differences, decoded once",
      html: `
        <p>Nearly everything Portuguese-related online is Brazilian (a country of 210 million vs 10). Useful input — but your target is Portugal. The differences, so BP material never confuses you:</p>
        <ul>
          <li><strong>Sound:</strong> BP opens vowels and sings every syllable; EP compresses and swallows (sections 1–2). BP turns final -de/-te into "jee/chee" (<em>cidade</em> = see-DA-jee); EP says si-DAD. BP's syllable-final s is usually plain s; EP's is SH.</li>
          <li><strong>"You":</strong> Portugal uses <strong>tu</strong> with friends and family (with its own verb forms); <em>você</em> exists but can feel distant or even rude in Portugal. Brazil runs almost entirely on <em>você</em>.</li>
          <li><strong>"-ing":</strong> Portugal: <strong>estou a aprender</strong> (I am learning — literally "I am at to-learn"). Brazil: <em>estou aprendendo</em>. Both understood everywhere; this course speaks and drills the EP form.</li>
          <li><strong>Spelling:</strong> essentially unified since a 1990 accord. Reading material from either side works; it's the mouth and ear that diverge.</li>
        </ul>
        <p class="decode"><strong>Decoded:</strong> when you eventually binge Portuguese Netflix or podcasts, check the flag. Brazilian input still helps (it's the same language), but your accent model — the voice you shadow — must be Portuguese. Every voice in this system is EP.</p>
      `
    },
    {
      id: "sinos",
      title: "6 · Os Quatro Sinos — the four bells",
      html: `
        <p>Here is how this system works. You do not decide to study. <strong>The bell rings; you answer it.</strong> Four times a day, a calendar event arrives on your phone with the session inside it — one tap and you're already working. A missed bell stays missed; the day does not wait. The bell removes your excuses. The work it cannot do for you.</p>
        <ul>
          <li><strong>07:00 · A Manhã</strong> (the morning) — comprehensible input: a story or dialogue in EP, with audio, pitched so you understand ~90% and stretch for the rest. <em>10 min.</em></li>
          <li><strong>12:00 · O Treino</strong> (the training) — the drill. Spaced retrieval that jumps across everything you've ever learned, hunting weak spots, escalating as you succeed. <em>10 min.</em></li>
          <li><strong>17:00 · A Conversa</strong> (the conversation) — you speak. A live voice conversation in European Portuguese with the wolf: an infinitely patient native speaker who meets you at your level. <em>20 min.</em></li>
          <li><strong>21:00 · A Prova</strong> (the test) — the night quiz on today plus your weak spots. Answers arrive with the next morning's lesson. <em>10 min.</em></li>
        </ul>
        <p>The times are defaults — you'll set your own when you generate the calendar. What is not adjustable is the shape: input, retrieval, speech, test. Every day. The citizenship exam (CIPLE A2, plus the new civics test) is Gate 1 on this road, reachable in months at one honest hour a day. The road itself goes much further.</p>
        <p class="decode"><strong>Decoded:</strong> "sino" = bell. And one honest note: until the full lesson audio ships, the 🔊 buttons in this lesson use your phone's built-in Portuguese voice — a stand-in, not the standard. The real EP voices arrive with A Manhã.</p>
      `
    }
  ],

  // The gate: three questions, from memory. A wrong answer sends you back to the section.
  gate: [
    {
      q: "You see the written word «telefone». What does a Lisbon speaker actually do with its unstressed vowels?",
      options: [
        "Pronounces each of the four syllables clearly and equally",
        "Compresses them — the word collapses toward «tlefón», final e nearly silent",
        "Turns the final e into an 'ee' sound: te-le-fo-nee",
        "Stresses the first syllable: TE-lefone"
      ],
      answer: 1,
      sendBack: "vogais",
      explain: "EP is stress-timed: unstressed vowels reduce or vanish. te-le-FOH-nee is the Brazilian pattern."
    },
    {
      q: "«Dois» (two) ends in which sound, in European Portuguese?",
      options: [
        "A plain S, as in English 'bus'",
        "A Z sound",
        "A SH sound — DOYSH",
        "Silent — the s is not pronounced"
      ],
      answer: 2,
      sendBack: "consoantes",
      explain: "Syllable-final S becomes SH — the signature EP consonant rule, and why the language shimmers with 'sh'."
    },
    {
      q: "In Portugal, the natural way to say «I am learning» is:",
      options: [
        "Estou aprendendo",
        "Estou a aprender",
        "Sou aprender",
        "Estou aprender"
      ],
      answer: 1,
      sendBack: "epbp",
      explain: "EP uses estar a + infinitive. «Estou aprendendo» is the Brazilian construction — understood, but it marks you as studying the wrong side of the Atlantic."
    }
  ],

  // Small retrieval pool used by O Treino / A Prova session shells until the full
  // curriculum engine (Milestone 3) replaces it.
  drillPool: [
    { q: "«Obrigado» (thank you) — the two unstressed o's sound like…", options: ["oh / oh", "oo / oo", "ah / ah"], answer: 1 },
    { q: "The til (~) over a vowel means…", options: ["stress lives here", "the vowel is nasal — air through the nose", "the vowel is silent"], answer: 1 },
    { q: "«Chá» (tea) begins with the sound…", options: ["tch, as in 'church'", "sh, as in 'shine'", "k, as in 'chaos'"], answer: 1 },
    { q: "«Gente» (people) begins with…", options: ["a hard G, as in 'get'", "ZH, as the s in 'measure'", "H, as in Spanish"], answer: 1 },
    { q: "«Filho» (son): the LH is pronounced…", options: ["L then H separately", "'lli' as in million — FEE-lyoo", "silent"], answer: 1 },
    { q: "A written accent mark (á, é, ó) tells you…", options: ["the vowel is nasal", "where the stress lives", "the word is a question"], answer: 1 },
    { q: "«Carro» (car) — the RR is…", options: ["a rolled tip-of-tongue trill, like Spanish", "a throat R, like French", "a plain English R"], answer: 1 },
    { q: "In Portugal, «você» with friends can feel…", options: ["warm and standard", "distant or even rude — friends use tu", "childish"], answer: 1 },
    { q: "Word-final unstressed e in EP («noite», night) is…", options: ["pronounced 'ee'", "pronounced 'eh'", "nearly silent — NOYT"], answer: 2 },
    { q: "«Não» rhymes (nasally) with English…", options: ["'now'", "'no'", "'nun'"], answer: 0 }
  ]
};
