/* Lobo Cinzento — app engine. No build step, no dependencies. */
(function () {
  "use strict";

  var BELLS = [
    { slug: "manha",    name: "A Manhã",    emoji: "🌅", minutes: 10, purpose: "Comprehensible input — story, dialogue, audio.", defaultTime: "07:00" },
    { slug: "treino",   name: "O Treino",   emoji: "🎯", minutes: 10, purpose: "Spaced retrieval across everything learned. Weak spots hunted.", defaultTime: "12:00" },
    { slug: "conversa", name: "A Conversa", emoji: "🗣️", minutes: 20, purpose: "Live voice conversation in European Portuguese.", defaultTime: "17:00" },
    { slug: "prova",    name: "A Prova",    emoji: "🌙", minutes: 10, purpose: "Night quiz — today plus weak spots. Answers with the morning lesson.", defaultTime: "21:00" }
  ];
  var CAL_DAYS = 28; // events generated per calendar download

  /* ---------- state ---------- */
  var STATE_KEY = "lobo.state.v1";
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveState(s) { localStorage.setItem(STATE_KEY, JSON.stringify(s)); }
  var state = loadState();
  state.readSections = state.readSections || [];
  state.bellTimes = state.bellTimes || {};

  /* ---------- tiny helpers ---------- */
  var app = document.getElementById("app");
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function parseISO(iso) {
    var p = (iso || "").split("-").map(Number);
    if (p.length !== 3 || p.some(isNaN)) return null;
    return new Date(p[0], p[1] - 1, p[2]);
  }
  function dayNumber(dateISO) {
    if (!state.startDate) return null;
    var a = parseISO(state.startDate), b = parseISO(dateISO);
    if (!a || !b) return null;
    return Math.round((b - a) / 86400000) + 1;
  }

  /* ---------- speech (interim voice — real EP audio ships with A Manhã) ---------- */
  var ptVoice = null;
  function pickVoice() {
    var vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    ptVoice = vs.find(function (v) { return /pt[-_]PT/i.test(v.lang); }) ||
              vs.find(function (v) { return /^pt/i.test(v.lang); }) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    if (ptVoice) u.voice = ptVoice;
    u.lang = ptVoice ? ptVoice.lang : "pt-PT";
    u.rate = 0.85;
    speechSynthesis.speak(u);
  }

  /* ---------- word lists (tap to hear) ---------- */
  function hydrateWordlists(root) {
    root.querySelectorAll(".wordlist").forEach(function (box) {
      var items = (box.dataset.words || "").split(";").filter(Boolean);
      box.innerHTML = items.map(function (it) {
        var p = it.split("|");
        return '<button class="word" data-say="' + esc(p[0]) + '">' +
          '<span class="pt">' + esc(p[0]) + '</span>' +
          '<span class="gl">' + esc(p[1] || "") + '</span>' +
          '<span class="pr">' + esc(p[2] || "") + '</span>' +
          '<span class="spk">🔊</span></button>';
      }).join("");
    });
    root.addEventListener("click", function (e) {
      var w = e.target.closest("[data-say]");
      if (w) speak(w.dataset.say);
    });
  }

  /* ---------- views ---------- */
  function render(frag) {
    app.innerHTML = "";
    app.appendChild(frag);
    window.scrollTo(0, 0);
  }

  function viewHome() {
    var gate = !!state.gatePassed;
    var cal = !!state.startDate;
    var next = gate ? nextBell() : null;
    var h = '<section class="hero">' +
      '<div class="mark">🐺</div>' +
      '<h1>Lobo Cinzento</h1>' +
      '<p class="tag">European Portuguese. The bell rings four times a day. The work is yours.</p>' +
      "</section>";

    h += '<section class="steps">';
    h += stepCard(1, "Lição 0 — Os Sons", gate || state.readSections.length ? "In progress or done — the sound system of EP." : "Start here. The sound system of European Portuguese.", "#/licao0", state.readSections.length >= LESSON0.sections.length, true);
    h += stepCard(2, "O Portão — the gate", gate ? "Passed. The wolf speaks to you." : "Three questions from memory. Wrong answers send you back to the text.", "#/portao", gate, state.readSections.length >= LESSON0.sections.length);
    h += stepCard(3, "O Sino — earn your calendar", cal ? "Calendar set — starts " + esc(state.startDate) + "." : "Set your bell times, download the calendar. The lessons come to you.", "#/sino", cal, gate);
    h += "</section>";

    if (gate && cal && next) {
      h += '<section class="nextbell"><h2>Next bell</h2>' +
        '<a class="bellcard" href="#/bell/' + next.bell.slug + "/" + next.date + '">' +
        '<span class="be">' + next.bell.emoji + "</span><span><strong>" + esc(next.bell.name) + "</strong> · " +
        esc(next.time) + (next.date !== todayISO() ? " · " + esc(next.date) : "") +
        "<br><small>" + esc(next.bell.purpose) + "</small></span></a></section>";
    }
    h += '<footer class="foot">O sino tira as desculpas; o trabalho é teu.<br>' +
      "<small>The bell removes the excuses; the work is yours.</small></footer>";
    render(el(h));
  }

  function stepCard(n, title, sub, href, done, unlocked) {
    if (!unlocked) {
      return '<div class="step locked"><span class="n">' + n + '</span><div><strong>' + esc(title) +
        "</strong><br><small>O lobo não fala com estranhos. (Locked — finish the previous step.)</small></div></div>";
    }
    return '<a class="step' + (done ? " done" : "") + '" href="' + href + '"><span class="n">' +
      (done ? "✓" : n) + "</span><div><strong>" + esc(title) + "</strong><br><small>" + sub + "</small></div></a>";
  }

  function nextBell() {
    var now = new Date();
    for (var d = 0; d < 2; d++) {
      var day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d);
      var iso = day.getFullYear() + "-" + pad(day.getMonth() + 1) + "-" + pad(day.getDate());
      for (var i = 0; i < BELLS.length; i++) {
        var t = state.bellTimes[BELLS[i].slug] || BELLS[i].defaultTime;
        var hm = t.split(":").map(Number);
        var when = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hm[0], hm[1]);
        if (when > now) return { bell: BELLS[i], date: iso, time: t };
      }
    }
    return null;
  }

  function viewLesson(hash) {
    var m = hash.match(/^#\/licao0(?:\/(\w+))?/);
    var sectionId = m && m[1];
    var idx = sectionId ? LESSON0.sections.findIndex(function (s) { return s.id === sectionId; }) : 0;
    if (idx < 0) idx = 0;
    var s = LESSON0.sections[idx];
    if (state.readSections.indexOf(s.id) === -1) { state.readSections.push(s.id); saveState(state); }

    var h = '<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>' + esc(LESSON0.title) + "</span></nav>";
    h += '<section class="lesson"><h1>' + esc(s.title) + "</h1>" + s.html + "</section>";
    h += '<nav class="pager">';
    h += idx > 0 ? '<a href="#/licao0/' + LESSON0.sections[idx - 1].id + '">← ' + esc(LESSON0.sections[idx - 1].title) + "</a>" : "<span></span>";
    if (idx < LESSON0.sections.length - 1) {
      h += '<a class="fwd" href="#/licao0/' + LESSON0.sections[idx + 1].id + '">' + esc(LESSON0.sections[idx + 1].title) + " →</a>";
    } else {
      h += '<a class="fwd gatelink" href="#/portao">O Portão — the gate →</a>';
    }
    h += "</nav>";
    h += '<div class="dots">' + LESSON0.sections.map(function (x, i) {
      return '<a class="dot' + (i === idx ? " on" : "") + (state.readSections.indexOf(x.id) > -1 ? " seen" : "") + '" href="#/licao0/' + x.id + '" title="' + esc(x.title) + '"></a>';
    }).join("") + "</div>";

    var frag = el(h);
    hydrateWordlists(frag.querySelector(".lesson"));
    render(frag);
  }

  function viewGate() {
    if (state.readSections.length < LESSON0.sections.length) {
      render(el('<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>O Portão</span></nav>' +
        '<section class="lesson center"><h1>O lobo não fala com estranhos.</h1>' +
        "<p>The wolf does not speak to strangers. Read Lição 0 first — all of it — then return.</p>" +
        '<p><a class="btn" href="#/licao0">Read Lição 0</a></p></section>'));
      return;
    }
    runQuiz({
      head: '<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>O Portão</span></nav>',
      title: "O Portão",
      intro: "Three questions, from memory. A wrong answer sends you back to the text — that is not punishment, it is the method.",
      questions: LESSON0.gate,
      sendBack: true,
      onPass: function () {
        state.gatePassed = true; saveState(state);
        location.hash = "#/sino";
      },
      passNote: "The gate opens."
    });
  }

  function viewSino() {
    if (!state.gatePassed) { location.hash = "#/portao"; return; }
    var h = '<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>O Sino</span></nav>';
    h += '<section class="lesson"><h1>Earn your calendar</h1>' +
      "<p>You passed the gate. Now the bells become yours: pick a start date and the four times, download the calendar, and add it to your phone. Each event carries a link that drops you straight into that session — starting is never a decision again.</p>";
    h += '<div class="form"><label>Start date <input type="date" id="startDate" value="' + esc(state.startDate || todayISO()) + '"></label>';
    BELLS.forEach(function (b) {
      h += '<label>' + b.emoji + " " + esc(b.name) + ' <small>(' + b.minutes + ' min)</small>' +
        '<input type="time" id="t_' + b.slug + '" value="' + esc(state.bellTimes[b.slug] || b.defaultTime) + '"></label>';
    });
    h += '<button class="btn" id="makeCal">Download the bells (.ics — ' + CAL_DAYS + " days)</button>" +
      '<p class="decode" id="calNote"><strong>Decoded:</strong> an .ics file is a standard calendar file. On iPhone, tapping the download offers "Add All" to Calendar; on Android, open it with Google Calendar. Re-download any time — times can change, the shape of the day cannot.</p></div></section>';
    var frag = el(h);
    frag.querySelector("#makeCal").addEventListener("click", function () {
      var sd = document.getElementById("startDate").value;
      if (!parseISO(sd)) { alert("Pick a start date."); return; }
      state.startDate = sd;
      BELLS.forEach(function (b) { state.bellTimes[b.slug] = document.getElementById("t_" + b.slug).value || b.defaultTime; });
      saveState(state);
      downloadICS();
      document.getElementById("calNote").innerHTML = "<strong>✓ Calendar downloaded.</strong> Add it to your phone's calendar. Day 1 rings at " +
        esc(state.bellTimes.manha) + " on " + esc(state.startDate) + ". <a href='#/'>Back to the den →</a>";
    });
    render(frag);
  }

  /* ---------- .ics generation (client-side, floating local times) ---------- */
  function icsEscape(s) { return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,"); }
  function downloadICS() {
    var base = location.origin + location.pathname;
    var start = parseISO(state.startDate);
    var lines = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Lobo Cinzento//PT-PT//EN",
      "CALSCALE:GREGORIAN", "X-WR-CALNAME:Lobo Cinzento 🐺"
    ];
    for (var d = 0; d < CAL_DAYS; d++) {
      var day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + d);
      var iso = day.getFullYear() + "-" + pad(day.getMonth() + 1) + "-" + pad(day.getDate());
      var stamp = iso.replace(/-/g, "");
      BELLS.forEach(function (b) {
        var t = (state.bellTimes[b.slug] || b.defaultTime).split(":").map(Number);
        var s = new Date(day.getFullYear(), day.getMonth(), day.getDate(), t[0], t[1]);
        var e = new Date(s.getTime() + b.minutes * 60000);
        function ft(x) {
          return x.getFullYear() + pad(x.getMonth() + 1) + pad(x.getDate()) + "T" + pad(x.getHours()) + pad(x.getMinutes()) + "00";
        }
        var url = base + "#/bell/" + b.slug + "/" + iso;
        lines.push(
          "BEGIN:VEVENT",
          "UID:" + b.slug + "-" + stamp + "@lobo-cinzento",
          "DTSTAMP:" + ft(new Date()) ,
          "DTSTART:" + ft(s),
          "DTEND:" + ft(e),
          "SUMMARY:" + icsEscape("🐺 " + b.name + " — Dia " + (d + 1)),
          "DESCRIPTION:" + icsEscape(b.purpose + " Tap to begin: " + url),
          "URL:" + url,
          "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + icsEscape(b.name), "TRIGGER:PT0S", "END:VALARM",
          "END:VEVENT"
        );
      });
    }
    lines.push("END:VCALENDAR");
    var blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "lobo-cinzento.ics";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
  }

  /* ---------- bell sessions ---------- */
  function viewBell(hash) {
    var m = hash.match(/^#\/bell\/(\w+)\/(\d{4}-\d{2}-\d{2})/);
    if (!m) { location.hash = "#/"; return; }
    var bell = BELLS.find(function (b) { return b.slug === m[1]; });
    var date = m[2];
    if (!bell) { location.hash = "#/"; return; }
    if (!state.gatePassed) {
      render(el('<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>' + esc(bell.name) + "</span></nav>" +
        '<section class="lesson center"><h1>O lobo não fala com estranhos.</h1>' +
        '<p>Earn your calendar first. <a class="btn" href="#/licao0">Lição 0 →</a></p></section>'));
      return;
    }
    var n = dayNumber(date);
    var head = '<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>' + esc(bell.name) + (n ? " · Dia " + n : "") + "</span></nav>";
    var h;
    if (bell.slug === "treino" || bell.slug === "prova") {
      runQuiz({
        head: head,
        title: bell.emoji + " " + bell.name + (n ? " — Dia " + n : ""),
        intro: bell.slug === "prova"
          ? "The night test. Five questions from everything so far. (Full weak-spot hunting arrives with Milestone 3 — tonight the pool is Lição 0.)"
          : "Five retrieval questions, interleaved. (The full spaced-repetition engine arrives with Milestone 3 — today the pool is Lição 0.)",
        questions: samplePool(5),
        sendBack: false,
        onPass: function () { location.hash = "#/"; },
        passNote: "Done. The bell is answered."
      });
      return;
    }
    if (bell.slug === "manha") {
      h = head + '<section class="lesson"><h1>' + bell.emoji + " A Manhã" + (n ? " — Dia " + n : "") + "</h1>" +
        "<p>The morning input lessons — stories and dialogues with real European Portuguese audio — arrive with <strong>Milestone 2</strong>. Until then the morning bell is for the ear: replay the sounds of Lição 0 and shadow them aloud (say them <em>with</em> the voice, not after it).</p>" +
        '<div class="wordlist" data-words="bom dia|good morning|bo(n) DEE-uh;obrigado|thank you|oo-bree-GAH-doo;não|no|NOW(N);está bem|okay / all right|shta BAY(N);até já|see you soon|uh-TEH ZHA"></div>' +
        '<p><a class="btn" href="#/licao0/vogais">Revisit the sounds →</a></p></section>';
      var frag = el(h);
      hydrateWordlists(frag.querySelector(".lesson"));
      render(frag);
      return;
    }
    // conversa
    h = head + '<section class="lesson"><h1>' + bell.emoji + " A Conversa" + (n ? " — Dia " + n : "") + "</h1>" +
      "<p>This bell becomes a live voice conversation with the wolf — an infinitely patient European Portuguese speaker, tuned to your exact level — when <strong>Milestone 4</strong> wires in the voice agent.</p>" +
      "<p>Until then, the conversation bell is shadowing time: open the word lists in Lição 0, play each word, and speak <em>over</em> the voice, matching rhythm and the swallowed vowels. Ten minutes of shadowing is the fastest accent work that exists.</p>" +
      '<p><a class="btn" href="#/licao0/consoantes">Shadow the consonants →</a></p></section>';
    render(el(h));
  }

  function samplePool(n) {
    var pool = LESSON0.drillPool.slice();
    var out = [];
    while (out.length < n && pool.length) {
      out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }
    return out;
  }

  /* ---------- quiz runner (one question at a time — the Socratic rule) ---------- */
  function runQuiz(cfg) {
    var i = 0, wrongs = 0;
    function ask() {
      var q = cfg.questions[i];
      var h = (cfg.head || "") + '<section class="lesson quiz"><h1>' + esc(cfg.title) + "</h1>";
      if (i === 0) h += "<p>" + esc(cfg.intro) + "</p>";
      h += '<p class="qnum">' + (i + 1) + " / " + cfg.questions.length + '</p><p class="q">' + esc(q.q) + "</p>";
      h += q.options.map(function (o, j) {
        return '<button class="opt" data-j="' + j + '">' + esc(o) + "</button>";
      }).join("");
      h += '<div id="fb"></div></section>';
      var frag = el(h);
      frag.querySelectorAll(".opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var j = Number(btn.dataset.j);
          var fb = document.getElementById("fb");
          document.querySelectorAll(".opt").forEach(function (b) { b.disabled = true; });
          if (j === q.answer) {
            btn.classList.add("right");
            fb.innerHTML = '<p class="good">Certo. ' + (q.explain ? esc(q.explain) : "") + "</p>" +
              '<button class="btn" id="next">' + (i + 1 < cfg.questions.length ? "Next →" : esc(cfg.passNote)) + "</button>";
            document.getElementById("next").addEventListener("click", function () {
              i++;
              if (i < cfg.questions.length) ask(); else cfg.onPass();
            });
          } else {
            wrongs++;
            btn.classList.add("wrong");
            if (cfg.sendBack && q.sendBack) {
              fb.innerHTML = '<p class="bad">Not yet. Back to the text — that section holds the answer.</p>' +
                '<a class="btn" href="#/licao0/' + q.sendBack + '">Return to the text →</a>';
            } else {
              fb.innerHTML = '<p class="bad">' + (q.explain ? esc(q.explain) : "Not that one.") + "</p>" +
                '<button class="btn" id="next">Continue →</button>';
              document.getElementById("next").addEventListener("click", function () {
                i++;
                if (i < cfg.questions.length) ask(); else cfg.onPass();
              });
            }
          }
        });
      });
      render(frag);
    }
    ask();
  }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash || "#/";
    if (h.indexOf("#/licao0") === 0) return viewLesson(h);
    if (h.indexOf("#/portao") === 0) return viewGate();
    if (h.indexOf("#/sino") === 0) return viewSino();
    if (h.indexOf("#/bell/") === 0) return viewBell(h);
    return viewHome();
  }
  window.addEventListener("hashchange", route);
  route();

  /* ---------- service worker ---------- */
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
