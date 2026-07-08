/* Lobo Cinzento — app engine. No build step, no dependencies.
   Views: home, licao0, portao, sino, curso, unidade, bell sessions, cidadania, definicoes. */
(function () {
  "use strict";

  var BELLS = [
    { slug: "manha",    name: "A Manhã",    emoji: "🌅", minutes: 10, purpose: "Comprehensible input — story, dialogue, audio.", defaultTime: "07:00" },
    { slug: "treino",   name: "O Treino",   emoji: "🎯", minutes: 10, purpose: "Spaced retrieval across everything learned. Weak spots hunted.", defaultTime: "12:00" },
    { slug: "conversa", name: "A Conversa", emoji: "🗣️", minutes: 20, purpose: "Live voice conversation in European Portuguese.", defaultTime: "17:00" },
    { slug: "prova",    name: "A Prova",    emoji: "🌙", minutes: 10, purpose: "Night quiz — today plus weak spots. Answers with the morning lesson.", defaultTime: "21:00" }
  ];
  var CAL_DAYS = 28;
  var MAX_DAY = (window.UNITS || []).length;

  /* ---------- state ---------- */
  var STATE_KEY = "lobo.state.v1";
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveState() { localStorage.setItem(STATE_KEY, JSON.stringify(state)); }
  var state = loadState();
  state.readSections = state.readSections || [];
  state.bellTimes = state.bellTimes || {};
  state.srs = state.srs || {};       // id -> {ivl, due, ok, bad}
  state.weak = state.weak || {};     // id -> miss count
  state.prova = state.prova || {};   // dateISO -> {items:[{id, correct}], done}
  state.settings = state.settings || {}; // {agentId, anthropicKey, model, speakReplies}

  /* ---------- helpers ---------- */
  var app = document.getElementById("app");
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function parseISO(iso) {
    var p = (iso || "").split("-").map(Number);
    if (p.length !== 3 || p.some(isNaN)) return null;
    return new Date(p[0], p[1] - 1, p[2]);
  }
  function addDaysISO(iso, n) {
    var d = parseISO(iso);
    d.setDate(d.getDate() + n);
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function dayNumber(dateISO) {
    if (!state.startDate) return null;
    var a = parseISO(state.startDate), b = parseISO(dateISO);
    if (!a || !b) return null;
    return Math.round((b - a) / 86400000) + 1;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function unitForDay(n) {
    return (window.UNITS || []).find(function (u) { return u.day === n; }) || null;
  }
  function render(frag) { app.innerHTML = ""; app.appendChild(frag); window.scrollTo(0, 0); }
  function crumb(label) {
    return '<nav class="crumb"><a href="#/">← Lobo Cinzento</a><span>' + esc(label) + "</span></nav>";
  }

  /* ---------- drill item index (SRS universe) ---------- */
  var ITEMS = {};
  (window.LESSON0 ? LESSON0.drillPool : []).forEach(function (d, i) {
    ITEMS["l0-" + i] = { id: "l0-" + i, day: 0, q: d.q, options: d.options, answer: d.answer, explain: d.explain };
  });
  (window.UNITS || []).forEach(function (u) {
    u.drills.forEach(function (d) {
      ITEMS[d.id] = { id: d.id, day: u.day, q: d.q, options: d.options, answer: d.answer, explain: d.explain };
    });
  });

  /* ---------- speech (interim voice — real EP audio plugs in via AUDIO_MANIFEST) ---------- */
  var ptVoice = null;
  function pickVoice() {
    var vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    ptVoice = vs.find(function (v) { return /pt[-_]PT/i.test(v.lang); }) ||
              vs.find(function (v) { return /^pt/i.test(v.lang); }) || null;
  }
  if (window.speechSynthesis) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, audioKey) {
    var m = window.AUDIO_MANIFEST || {};
    if (audioKey && m[audioKey]) { new Audio(m[audioKey]).play(); return; }
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    if (ptVoice) u.voice = ptVoice;
    u.lang = ptVoice ? ptVoice.lang : "pt-PT";
    u.rate = 0.85;
    speechSynthesis.speak(u);
  }

  function hydrateSpeech(root) {
    root.addEventListener("click", function (e) {
      var w = e.target.closest("[data-say]");
      if (w) speak(w.dataset.say, w.dataset.audio || null);
    });
  }
  function hydrateWordlists(root) {
    root.querySelectorAll(".wordlist").forEach(function (box) {
      var items = (box.dataset.words || "").split(";").filter(Boolean);
      box.innerHTML = items.map(function (it) {
        var p = it.split("|");
        return '<button class="word" data-say="' + esc(p[0]) + '">' +
          '<span class="pt">' + esc(p[0]) + '</span><span class="gl">' + esc(p[1] || "") + "</span>" +
          '<span class="pr">' + esc(p[2] || "") + '</span><span class="spk">🔊</span></button>';
      }).join("");
    });
  }

  /* ---------- home ---------- */
  function viewHome() {
    var gate = !!state.gatePassed;
    var cal = !!state.startDate;
    var next = gate ? nextBell() : null;
    var today = state.startDate ? dayNumber(todayISO()) : null;

    var h = '<section class="hero"><div class="mark">🐺</div><h1>Lobo Cinzento</h1>' +
      '<p class="tag">European Portuguese. The bell rings four times a day. The work is yours.</p></section>';

    if (!gate || !cal) {
      h += '<section class="steps">';
      h += stepCard(1, "Lição 0 — Os Sons", "Start here. The sound system of European Portuguese.", "#/licao0", state.readSections.length >= LESSON0.sections.length, true);
      h += stepCard(2, "O Portão — the gate", gate ? "Passed." : "Three questions from memory. Wrong answers send you back to the text.", "#/portao", gate, state.readSections.length >= LESSON0.sections.length);
      h += stepCard(3, "O Sino — earn your calendar", cal ? "Calendar set." : "Set your bell times, download the calendar. The lessons come to you.", "#/sino", cal, gate);
      h += "</section>";
    } else {
      if (next) {
        h += '<section class="nextbell"><h2>Next bell' + (today ? " · Dia " + today : "") + "</h2>" +
          '<a class="bellcard" href="#/bell/' + next.bell.slug + "/" + next.date + '">' +
          '<span class="be">' + next.bell.emoji + "</span><span><strong>" + esc(next.bell.name) + "</strong> · " +
          esc(next.time) + (next.date !== todayISO() ? " · " + esc(next.date) : "") +
          "<br><small>" + esc(next.bell.purpose) + "</small></span></a></section>";
      }
      h += '<section class="nextbell"><h2>Today’s bells</h2><div class="beltrow">' +
        BELLS.map(function (b) {
          return '<a class="belt" href="#/bell/' + b.slug + "/" + todayISO() + '">' + b.emoji + " " + esc(b.name) + "</a>";
        }).join("") + "</div></section>";
    }

    h += '<section class="nextbell"><h2>The den</h2><div class="beltrow">' +
      '<a class="belt" href="#/curso">📖 O Curso (all days)</a>' +
      '<a class="belt" href="#/licao0">🔤 Lição 0</a>' +
      '<a class="belt" href="#/cidadania">🇵🇹 A Cidadania</a>' +
      '<a class="belt" href="#/definicoes">⚙️ Definições</a>' +
      (gate ? '<a class="belt" href="#/sino">🔔 O Sino</a>' : "") +
      "</div></section>";

    h += '<footer class="foot">O sino tira as desculpas; o trabalho é teu.<br><small>The bell removes the excuses; the work is yours.</small></footer>';
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

  /* ---------- Lição 0 ---------- */
  function viewLesson0(hash) {
    var m = hash.match(/^#\/licao0(?:\/(\w+))?/);
    var sectionId = m && m[1];
    var idx = sectionId ? LESSON0.sections.findIndex(function (s) { return s.id === sectionId; }) : 0;
    if (idx < 0) idx = 0;
    var s = LESSON0.sections[idx];
    if (state.readSections.indexOf(s.id) === -1) { state.readSections.push(s.id); saveState(); }

    var h = crumb(LESSON0.title);
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
    hydrateWordlists(frag);
    hydrateSpeech(frag.querySelector(".lesson"));
    render(frag);
  }

  /* ---------- the gate ---------- */
  function viewGate() {
    if (state.readSections.length < LESSON0.sections.length) {
      render(el(crumb("O Portão") +
        '<section class="lesson center"><h1>O lobo não fala com estranhos.</h1>' +
        "<p>The wolf does not speak to strangers. Read Lição 0 first — all of it — then return.</p>" +
        '<p><a class="btn" href="#/licao0">Read Lição 0</a></p></section>'));
      return;
    }
    runQuiz({
      head: crumb("O Portão"),
      title: "O Portão",
      intro: "Three questions, from memory. A wrong answer sends you back to the text — that is not punishment, it is the method.",
      questions: LESSON0.gate,
      sendBack: true,
      onPass: function () { state.gatePassed = true; saveState(); location.hash = "#/sino"; },
      passNote: "The gate opens."
    });
  }

  /* ---------- the calendar ---------- */
  function viewSino() {
    if (!state.gatePassed) { location.hash = "#/portao"; return; }
    var h = crumb("O Sino");
    h += '<section class="lesson"><h1>Earn your calendar</h1>' +
      "<p>Pick a start date and the four times, download the calendar, add it to your phone. Each event carries a link that drops you straight into that session — starting is never a decision again.</p>";
    h += '<div class="form"><label>Start date <input type="date" id="startDate" value="' + esc(state.startDate || todayISO()) + '"></label>';
    BELLS.forEach(function (b) {
      h += "<label>" + b.emoji + " " + esc(b.name) + ' <small>(' + b.minutes + ' min)</small>' +
        '<input type="time" id="t_' + b.slug + '" value="' + esc(state.bellTimes[b.slug] || b.defaultTime) + '"></label>';
    });
    h += '<button class="btn" id="makeCal">Download the bells (.ics — ' + CAL_DAYS + " days)</button>" +
      '<p class="decode" id="calNote"><strong>Decoded:</strong> an .ics file is a standard calendar file. On iPhone, tapping the download offers "Add All" to Calendar; on Android, open it with Google Calendar. Re-download any time — times can change, the shape of the day cannot.</p></div></section>';
    var frag = el(h);
    frag.querySelector("#makeCal").addEventListener("click", function () {
      var sd = document.getElementById("startDate").value;
      if (!parseISO(sd)) { document.getElementById("calNote").textContent = "Pick a start date first."; return; }
      state.startDate = sd;
      BELLS.forEach(function (b) { state.bellTimes[b.slug] = document.getElementById("t_" + b.slug).value || b.defaultTime; });
      saveState();
      downloadICS();
      document.getElementById("calNote").innerHTML = "<strong>✓ Calendar downloaded.</strong> Add it to your phone's calendar. Day 1 rings at " +
        esc(state.bellTimes.manha) + " on " + esc(state.startDate) + ". <a href='#/'>Back to the den →</a>";
    });
    render(frag);
  }

  function icsEscape(s) { return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,"); }
  function downloadICS() {
    var base = location.origin + location.pathname;
    var start = parseISO(state.startDate);
    var lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Lobo Cinzento//PT-PT//EN", "CALSCALE:GREGORIAN", "X-WR-CALNAME:Lobo Cinzento 🐺"];
    for (var d = 0; d < CAL_DAYS; d++) {
      var day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + d);
      var iso = day.getFullYear() + "-" + pad(day.getMonth() + 1) + "-" + pad(day.getDate());
      BELLS.forEach(function (b) {
        var t = (state.bellTimes[b.slug] || b.defaultTime).split(":").map(Number);
        var s = new Date(day.getFullYear(), day.getMonth(), day.getDate(), t[0], t[1]);
        var e = new Date(s.getTime() + b.minutes * 60000);
        function ft(x) { return x.getFullYear() + pad(x.getMonth() + 1) + pad(x.getDate()) + "T" + pad(x.getHours()) + pad(x.getMinutes()) + "00"; }
        var url = base + "#/bell/" + b.slug + "/" + iso;
        lines.push(
          "BEGIN:VEVENT",
          "UID:" + b.slug + "-" + iso.replace(/-/g, "") + "@lobo-cinzento",
          "DTSTAMP:" + ft(new Date()),
          "DTSTART:" + ft(s), "DTEND:" + ft(e),
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

  /* ---------- curriculum browser + lesson player ---------- */
  function viewCurso() {
    var h = crumb("O Curso");
    h += '<section class="lesson"><h1>O Curso — ' + MAX_DAY + " days and growing</h1>" +
      "<p>Browse freely — the bells drive the rhythm, but nothing here is hidden. Each day: a dialogue with audio, the vocabulary, the decodes, and drills.</p></section>";
    h += '<section class="steps">';
    (window.UNITS || []).forEach(function (u) {
      h += '<a class="step" href="#/unidade/' + u.day + '"><span class="n">' + u.day + "</span><div><strong>" +
        esc(u.title) + "</strong><br><small>" + esc(u.titleEn) + "</small></div></a>";
    });
    h += "</section>";
    render(el(h));
  }

  function lessonPlayerHTML(u, dateISO) {
    var h = '<section class="lesson"><h1>Dia ' + u.day + " · " + esc(u.title) + "</h1>" +
      '<p class="tag">' + esc(u.titleEn) + "</p>";

    // Yesterday's prova answers (the morning reveal)
    if (dateISO) {
      var yday = addDaysISO(dateISO, -1);
      var p = state.prova[yday];
      if (p && p.items && p.items.length) {
        var right = p.items.filter(function (x) { return x.correct; }).length;
        h += '<div class="decode"><strong>A Prova de ontem — ' + right + "/" + p.items.length + ".</strong> " +
          p.items.map(function (x) {
            var it = ITEMS[x.id];
            if (!it) return "";
            return "<br>" + (x.correct ? "✓" : "✗") + " " + esc(it.q) + " — <em>" + esc(it.options[it.answer]) + "</em>";
          }).join("") + "</div>";
      }
    }

    h += "<h2>O diálogo</h2><div class='dialogue'>" +
      u.dialogue.map(function (l, i) {
        return '<button class="dline" data-say="' + esc(l.pt) + '" data-audio="u' + u.day + "-d" + i + '">' +
          '<span class="dsp">' + esc(l.sp) + '</span><span class="dpt">' + esc(l.pt) + '</span>' +
          '<span class="den">' + esc(l.en) + "</span></button>";
      }).join("") + "</div>";
    h += '<p class="decode"><strong>How to work it:</strong> ① Listen to each line (tap it) with the English hidden in your mind. ② Read the translation only to check. ③ Shadow — speak WITH the voice, matching the swallowed vowels. Three passes, then vocabulary.</p>';

    h += "<h2>As palavras</h2><div class='wordlist'>" +
      u.vocab.map(function (v, i) {
        return '<button class="word" data-say="' + esc(v.pt) + '" data-audio="u' + u.day + "-v" + i + '">' +
          '<span class="pt">' + esc(v.pt) + '</span><span class="gl">' + esc(v.en) + "</span>" +
          '<span class="pr">' + esc(v.pr || "") + '</span><span class="spk">🔊</span></button>';
      }).join("") + "</div>";

    u.decodes.forEach(function (d) {
      h += '<div class="decode"><strong>Decoded — ' + esc(d.title) + ":</strong> " + d.html + "</div>";
    });

    h += '<p><a class="btn" href="#/praticar/' + u.day + '">Drill this day now →</a></p></section>';
    return h;
  }

  function viewUnidade(hash) {
    var m = hash.match(/^#\/unidade\/(\d+)/);
    var u = m && unitForDay(Number(m[1]));
    if (!u) { location.hash = "#/curso"; return; }
    var frag = el(crumb("Dia " + u.day) + lessonPlayerHTML(u, null));
    hydrateSpeech(frag);
    render(frag);
  }

  function viewPraticar(hash) {
    var m = hash.match(/^#\/praticar\/(\d+)/);
    var u = m && unitForDay(Number(m[1]));
    if (!u) { location.hash = "#/curso"; return; }
    runQuiz({
      head: crumb("Dia " + u.day + " · drills"),
      title: "Dia " + u.day + " — " + u.title,
      intro: "The day's drills. These also seed tomorrow's Treino.",
      questions: shuffle(u.drills),
      srs: true,
      onPass: function () { location.hash = "#/unidade/" + u.day; },
      passNote: "Done — back to the lesson."
    });
  }

  /* ---------- SRS engine ---------- */
  function srsAnswer(id, correct) {
    if (!ITEMS[id]) return;
    var today = todayISO();
    var s = state.srs[id] || { ivl: 0, due: today, ok: 0, bad: 0 };
    if (correct) {
      s.ok++;
      s.ivl = s.ivl ? Math.min(Math.round(s.ivl * 2.5), 60) : 1;
      s.due = addDaysISO(today, s.ivl);
      if (state.weak[id]) { state.weak[id]--; if (state.weak[id] <= 0) delete state.weak[id]; }
    } else {
      s.bad++;
      s.ivl = 0;
      s.due = today; // resurfaces next session
      state.weak[id] = (state.weak[id] || 0) + 2;
    }
    state.srs[id] = s;
    saveState();
  }

  function currentDay() {
    var n = state.startDate ? dayNumber(todayISO()) : 1;
    if (n === null || n < 1) n = 1;
    return n;
  }

  function buildTreino() {
    var today = todayISO();
    var due = Object.keys(state.srs).filter(function (id) { return state.srs[id].due <= today && ITEMS[id]; });
    var weakFirst = due.sort(function (a, b) { return (state.weak[b] || 0) - (state.weak[a] || 0); }).slice(0, 12);
    var n = Math.min(currentDay(), MAX_DAY);
    var u = unitForDay(n);
    var fresh = u ? u.drills.map(function (d) { return d.id; }).filter(function (id) { return !state.srs[id]; }).slice(0, 6) : [];
    var pool = weakFirst.concat(fresh);
    if (pool.length < 8) {
      var extra = shuffle(Object.keys(ITEMS).filter(function (id) {
        return pool.indexOf(id) === -1 && ITEMS[id].day <= n;
      })).slice(0, 8 - pool.length);
      pool = pool.concat(extra);
    }
    return shuffle(pool).slice(0, 14).map(function (id) { return ITEMS[id]; });
  }

  function buildProva() {
    var n = Math.min(currentDay(), MAX_DAY);
    var u = unitForDay(n);
    var ids = [];
    if (u) ids = shuffle(u.drills.map(function (d) { return d.id; })).slice(0, 5);
    var weak = shuffle(Object.keys(state.weak).filter(function (id) { return ids.indexOf(id) === -1 && ITEMS[id]; })).slice(0, 3);
    var past = shuffle(Object.keys(ITEMS).filter(function (id) {
      return ITEMS[id].day < n && ids.indexOf(id) === -1 && weak.indexOf(id) === -1;
    })).slice(0, 2);
    return ids.concat(weak, past).map(function (id) { return ITEMS[id]; });
  }

  /* ---------- bells ---------- */
  function viewBell(hash) {
    var m = hash.match(/^#\/bell\/(\w+)\/(\d{4}-\d{2}-\d{2})/);
    if (!m) { location.hash = "#/"; return; }
    var bell = BELLS.find(function (b) { return b.slug === m[1]; });
    var date = m[2];
    if (!bell) { location.hash = "#/"; return; }
    if (!state.gatePassed) {
      render(el(crumb(bell.name) + '<section class="lesson center"><h1>O lobo não fala com estranhos.</h1>' +
        '<p>Earn your calendar first. <a class="btn" href="#/licao0">Lição 0 →</a></p></section>'));
      return;
    }
    var n = dayNumber(date) || currentDay();
    var label = bell.name + " · Dia " + n;

    if (bell.slug === "manha") {
      var u = unitForDay(Math.min(n, MAX_DAY));
      if (n > MAX_DAY) {
        render(el(crumb(label) + '<section class="lesson"><h1>🌅 A Manhã — Dia ' + n + "</h1>" +
          "<p>The authored course currently ends at Dia " + MAX_DAY + " — new days are being written ahead of you. This morning: revision. Reread the last story (Dia " + MAX_DAY + "), shadow its dialogue, then let O Treino hunt what's fading.</p>" +
          '<p><a class="btn" href="#/unidade/' + MAX_DAY + '">Open Dia ' + MAX_DAY + ' →</a> <a class="btn" href="#/bell/treino/' + date + '">O Treino →</a></p></section>'));
        return;
      }
      var frag = el(crumb(label) + lessonPlayerHTML(u, date));
      hydrateSpeech(frag);
      render(frag);
      return;
    }

    if (bell.slug === "treino") {
      var qs = buildTreino();
      runQuiz({
        head: crumb(label),
        title: "🎯 O Treino — Dia " + n,
        intro: "Retrieval, interleaved across everything you've met. Misses join the weak-spot queue and come back until they stop being weak.",
        questions: qs,
        srs: true,
        onPass: function () { location.hash = "#/"; },
        passNote: "Done. The bell is answered."
      });
      return;
    }

    if (bell.slug === "prova") {
      var pq = buildProva();
      runQuiz({
        head: crumb(label),
        title: "🌙 A Prova — Dia " + n,
        intro: "The night test: today, your weak spots, and a taste of the past. Full answers arrive with tomorrow's A Manhã.",
        questions: pq,
        srs: true,
        record: date,
        onPass: function () { location.hash = "#/"; },
        passNote: "A Prova is done. Sleep on it — answers at dawn."
      });
      return;
    }

    viewConversa(label, n, date);
  }

  /* ---------- A Conversa ---------- */
  function conversaSystemPrompt(n) {
    var known = [];
    (window.UNITS || []).forEach(function (u) {
      if (u.day <= n) u.vocab.forEach(function (v) { known.push(v.pt); });
    });
    var weakIds = Object.keys(state.weak).slice(0, 8).map(function (id) {
      return ITEMS[id] ? ITEMS[id].q : null;
    }).filter(Boolean);
    return "You are O Lobo — a warm, slightly wry European Portuguese conversation partner and Socratic tutor for Greg, " +
      "an English-speaking beginner on day " + n + " of a frequency-ordered course. " +
      "STRICT RULES: Speak EUROPEAN Portuguese (pt-PT: estar a + infinitivo, tu forms, EP vocabulary — pequeno-almoço, casa de banho, ementa). " +
      "Keep each reply SHORT (1-3 sentences) and pitched so Greg understands ~90% — prefer words from his known list. " +
      "Always end with exactly ONE question back to him. If he errs, recast the correct form naturally in your reply (gentle recast), then continue — " +
      "explicit grammar explanations only if he asks, and then in English, briefly. New word he can't know yet → gloss it in parentheses in English, once. " +
      "If he writes in English, answer the substance in easy Portuguese and coax him back. " +
      "Known vocabulary (day ≤ " + n + "): " + known.join(", ") + ". " +
      (weakIds.length ? "His current weak spots (steer the conversation to force these naturally): " + weakIds.join(" | ") + ". " : "") +
      "Today's theme: the Day " + Math.min(n, MAX_DAY) + " topic. Begin by greeting him and asking one easy question about his day.";
  }

  function viewConversa(label, n, date) {
    var s = state.settings;
    var h = crumb(label) + '<section class="lesson"><h1>🗣️ A Conversa — Dia ' + n + "</h1>";

    if (s.agentId) {
      h += "<p>The wolf is listening. Speak European Portuguese — it meets you at your level.</p>" +
        '<div id="agentBox"></div>' +
        '<p class="decode"><strong>Warm-up prompts:</strong> ' + (window.CIPLE ? esc(CIPLE.oralPrompts[Math.min(n - 1, CIPLE.oralPrompts.length - 1)]) : "Apresenta-te.") + "</p></section>";
      var frag = el(h);
      render(frag);
      var widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", s.agentId);
      document.getElementById("agentBox").appendChild(widget);
      if (!document.getElementById("el-convai-script")) {
        var sc = document.createElement("script");
        sc.id = "el-convai-script";
        sc.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
        sc.async = true;
        document.body.appendChild(sc);
      }
      return;
    }

    if (s.anthropicKey) {
      h += "<p>Text conversation with the wolf (voice agent plugs in when you add an ElevenLabs agent in Definições). Replies are spoken aloud in Portuguese" +
        (window.speechSynthesis ? "" : " (no voice available on this browser)") + ".</p>" +
        '<div id="chatLog" class="chatlog"></div>' +
        '<div class="chatrow"><input id="chatIn" type="text" placeholder="Escreve em português…" autocomplete="off">' +
        (window.SpeechRecognition || window.webkitSpeechRecognition ? '<button class="btn" id="micBtn" title="Falar">🎙️</button>' : "") +
        '<button class="btn" id="sendBtn">→</button></div>' +
        '<p class="decode"><strong>Session goal (Dia ' + n + "):</strong> " + (window.CIPLE ? esc(CIPLE.oralPrompts[Math.min(n - 1, CIPLE.oralPrompts.length - 1)]) : "Fala!") + "</p></section>";
      var frag2 = el(h);
      render(frag2);
      startChat(n);
      return;
    }

    h += "<p>A Conversa needs a brain. Two options, in <a href='#/definicoes'>Definições</a>:</p><ul>" +
      "<li><strong>ElevenLabs agent ID</strong> — full spoken conversation (the real thing).</li>" +
      "<li><strong>Anthropic API key</strong> — text chat with spoken replies (works today).</li></ul>" +
      "<p>Until then, this bell is shadowing time: open today's dialogue and speak <em>over</em> each line, matching rhythm and the swallowed vowels.</p>" +
      '<p><a class="btn" href="#/definicoes">Definições →</a> <a class="btn" href="#/unidade/' + Math.min(n, MAX_DAY) + '">Today’s dialogue →</a></p></section>';
    render(el(h));
  }

  function startChat(n) {
    var log = document.getElementById("chatLog");
    var input = document.getElementById("chatIn");
    var send = document.getElementById("sendBtn");
    var mic = document.getElementById("micBtn");
    var messages = [];
    var busy = false;

    function bubble(role, text) {
      var d = document.createElement("div");
      d.className = "bub " + role;
      d.textContent = text;
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
    }

    function callClaude() {
      busy = true;
      bubble("sys", "…");
      return fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": state.settings.anthropicKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: state.settings.model || "claude-sonnet-5",
          max_tokens: 400,
          system: conversaSystemPrompt(n),
          messages: messages.length ? messages : [{ role: "user", content: "(Greg acabou de chegar. Cumprimenta-o e começa.)" }]
        })
      }).then(function (r) { return r.json(); }).then(function (j) {
        log.removeChild(log.lastChild);
        busy = false;
        if (j.error) { bubble("sys", "Erro: " + (j.error.message || "API error") + " — check your key in Definições."); return; }
        var text = (j.content || []).map(function (c) { return c.text || ""; }).join("");
        messages.push({ role: "assistant", content: text });
        bubble("wolf", text);
        if (state.settings.speakReplies !== false) speak(text.replace(/\([^)]*\)/g, ""));
      }).catch(function (e) {
        log.removeChild(log.lastChild);
        busy = false;
        bubble("sys", "Network error: " + e.message);
      });
    }

    function submit() {
      var t = input.value.trim();
      if (!t || busy) return;
      input.value = "";
      messages.push({ role: "user", content: t });
      bubble("me", t);
      callClaude();
    }
    send.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });

    if (mic) {
      var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      var rec = new SR();
      rec.lang = "pt-PT";
      rec.interimResults = false;
      var listening = false;
      rec.onresult = function (e) { input.value = e.results[0][0].transcript; submit(); };
      rec.onend = function () { listening = false; mic.textContent = "🎙️"; };
      mic.addEventListener("click", function () {
        if (listening) { rec.stop(); return; }
        listening = true; mic.textContent = "⏺";
        rec.start();
      });
    }

    callClaude(); // the wolf speaks first
  }

  /* ---------- A Cidadania ---------- */
  function viewCidadania() {
    var h = crumb("A Cidadania");
    h += '<section class="lesson"><h1>🇵🇹 A Cidadania — the citizenship track</h1>' +
      "<p>Two gates stand between you and the passport: the <strong>CIPLE A2</strong> language exam and the new <strong>civic-knowledge test</strong>. Both live here.</p>";

    h += "<h2>O exame CIPLE (A2)</h2><p>" + CIPLE.intro + "</p>";
    CIPLE.parts.forEach(function (p) {
      h += '<div class="decode"><strong>' + esc(p.name) + " · " + esc(p.weight) + ":</strong> " + esc(p.desc) + "</div>";
    });
    h += "<p>" + esc(CIPLE.passing) + "</p>";

    h += "<h2>Practice — writing</h2><p>CIPLE-shaped prompts. Write by hand or type; bring the result to A Conversa and ask the wolf to correct it (<em>«Podes corrigir?»</em>):</p><ul>" +
      CIPLE.writingPrompts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
    h += "<h2>Practice — speaking</h2><p>Use these as A Conversa session goals:</p><ul>" +
      CIPLE.oralPrompts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";

    h += "<h2>O teste cívico <span class='preof'>PRÉ-OFICIAL</span></h2>" +
      '<div class="decode"><strong>Honest label:</strong> ' + esc(CIVICS.status) + "</div>" +
      "<p>" + CIVICS.questions.length + " seed questions across the announced areas — history, institutions, rights and duties, culture. Each question is in Portuguese (exam-realistic) with English under it.</p>" +
      '<p><a class="btn" href="#/civico">Take the civics drill →</a></p>';
    h += "</section>";
    render(el(h));
  }

  function viewCivico() {
    var qs = shuffle(CIVICS.questions).slice(0, 10).map(function (c) {
      return { q: c.q + "  —  " + c.en, options: c.options, answer: c.answer, explain: c.explain };
    });
    runQuiz({
      head: crumb("O teste cívico"),
      title: "O teste cívico (pré-oficial)",
      intro: "Ten of " + CIVICS.questions.length + " seed questions, shuffled. Rerun any time — the pool rotates.",
      questions: qs,
      onPass: function () { location.hash = "#/cidadania"; },
      passNote: "Done — back to A Cidadania."
    });
  }

  /* ---------- Definições ---------- */
  function mask(k) { return k ? "••••" + k.slice(-4) : ""; }
  function viewDefinicoes() {
    var s = state.settings;
    var h = crumb("Definições");
    h += '<section class="lesson"><h1>⚙️ Definições</h1>' +
      '<p class="decode"><strong>Keys never leave this browser.</strong> They live in localStorage on this device only — no server, no account, and this app never displays a saved key back in full.</p>' +
      '<div class="form">' +
      "<label>ElevenLabs agent ID (for the spoken Conversa)" +
      '<input type="text" id="agentId" placeholder="' + (s.agentId ? "saved: " + esc(mask(s.agentId)) : "agent_…") + '"></label>' +
      "<label>Anthropic API key (tutor brain / text chat)" +
      '<input type="password" id="anthKey" placeholder="' + (s.anthropicKey ? "saved: " + esc(mask(s.anthropicKey)) : "sk-ant-…") + '"></label>' +
      "<label>Claude model <input type='text' id='model' value='" + esc(s.model || "claude-sonnet-5") + "'></label>" +
      "<label><input type='checkbox' id='speakR' " + (s.speakReplies !== false ? "checked" : "") + "> Speak the wolf's replies aloud</label>" +
      '<button class="btn" id="saveSet">Save</button>' +
      '<p id="setNote"></p>' +
      "<hr>" +
      '<button class="btn" id="expBtn">Export progress (JSON)</button>' +
      '<label>Import progress <input type="file" id="impFile" accept=".json"></label>' +
      "</div></section>";
    var frag = el(h);
    frag.querySelector("#saveSet").addEventListener("click", function () {
      var a = document.getElementById("agentId").value.trim();
      var k = document.getElementById("anthKey").value.trim();
      if (a) s.agentId = a;
      if (k) s.anthropicKey = k;
      s.model = document.getElementById("model").value.trim() || "claude-sonnet-5";
      s.speakReplies = document.getElementById("speakR").checked;
      saveState();
      document.getElementById("setNote").textContent = "✓ Saved." + (a || k ? " (Stored on this device only.)" : "");
      document.getElementById("agentId").value = "";
      document.getElementById("anthKey").value = "";
    });
    frag.querySelector("#expBtn").addEventListener("click", function () {
      var copy = JSON.parse(JSON.stringify(state));
      delete copy.settings; // keys stay out of exports
      var blob = new Blob([JSON.stringify(copy, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "lobo-progress.json";
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
    });
    frag.querySelector("#impFile").addEventListener("change", function (e) {
      var f = e.target.files[0];
      if (!f) return;
      f.text().then(function (t) {
        var incoming = JSON.parse(t);
        incoming.settings = state.settings; // keep local keys
        state = incoming;
        state.readSections = state.readSections || [];
        state.bellTimes = state.bellTimes || {};
        state.srs = state.srs || {}; state.weak = state.weak || {};
        state.prova = state.prova || {}; state.settings = state.settings || {};
        saveState();
        document.getElementById("setNote").textContent = "✓ Progress imported.";
      }).catch(function () {
        document.getElementById("setNote").textContent = "Import failed — not a valid progress file.";
      });
    });
    render(frag);
  }

  /* ---------- quiz runner (one question at a time — the Socratic rule) ---------- */
  function runQuiz(cfg) {
    var i = 0;
    var recorded = [];
    function ask() {
      var q = cfg.questions[i];
      // shuffle displayed option order so positions can't be memorized
      var order = shuffle(q.options.map(function (_, j) { return j; }));
      var h = (cfg.head || "") + '<section class="lesson quiz"><h1>' + esc(cfg.title) + "</h1>";
      if (i === 0) h += "<p>" + esc(cfg.intro) + "</p>";
      h += '<p class="qnum">' + (i + 1) + " / " + cfg.questions.length + '</p><p class="q">' + esc(q.q) + "</p>";
      h += order.map(function (j) {
        return '<button class="opt" data-j="' + j + '">' + esc(q.options[j]) + "</button>";
      }).join("");
      h += '<div id="fb"></div></section>';
      var frag = el(h);
      frag.querySelectorAll(".opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var j = Number(btn.dataset.j);
          var fb = document.getElementById("fb");
          document.querySelectorAll(".opt").forEach(function (b) { b.disabled = true; });
          var correct = j === q.answer;
          if (cfg.srs && q.id) srsAnswer(q.id, correct);
          if (cfg.record) recorded.push({ id: q.id, correct: correct });
          function advance(labelDone) {
            i++;
            if (i < cfg.questions.length) ask();
            else {
              if (cfg.record) { state.prova[cfg.record] = { items: recorded, done: true }; saveState(); }
              cfg.onPass();
            }
          }
          if (correct) {
            btn.classList.add("right");
            fb.innerHTML = '<p class="good">Certo. ' + (q.explain ? esc(q.explain) : "") + "</p>" +
              '<button class="btn" id="next">' + (i + 1 < cfg.questions.length ? "Next →" : esc(cfg.passNote)) + "</button>";
            document.getElementById("next").addEventListener("click", advance);
          } else {
            btn.classList.add("wrong");
            if (cfg.sendBack && q.sendBack) {
              fb.innerHTML = '<p class="bad">Not yet. Back to the text — that section holds the answer.</p>' +
                '<a class="btn" href="#/licao0/' + q.sendBack + '">Return to the text →</a>';
            } else {
              var reveal = cfg.record ? "" : " — <em>" + esc(q.options[q.answer]) + "</em>";
              fb.innerHTML = '<p class="bad">' + (q.explain && !cfg.record ? esc(q.explain) : "Not that one.") + reveal + "</p>" +
                '<button class="btn" id="next">' + (i + 1 < cfg.questions.length ? "Continue →" : esc(cfg.passNote)) + "</button>";
              document.getElementById("next").addEventListener("click", advance);
            }
          }
        });
      });
      render(frag);
    }
    if (!cfg.questions.length) {
      render(el((cfg.head || "") + '<section class="lesson center"><h1>' + esc(cfg.title) + "</h1><p>Nothing due — the wolf is satisfied. Come back at the next bell.</p><p><a class='btn' href='#/'>Back →</a></p></section>"));
      return;
    }
    ask();
  }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash || "#/";
    if (h.indexOf("#/licao0") === 0) return viewLesson0(h);
    if (h.indexOf("#/portao") === 0) return viewGate();
    if (h.indexOf("#/sino") === 0) return viewSino();
    if (h.indexOf("#/curso") === 0) return viewCurso();
    if (h.indexOf("#/unidade/") === 0) return viewUnidade(h);
    if (h.indexOf("#/praticar/") === 0) return viewPraticar(h);
    if (h.indexOf("#/bell/") === 0) return viewBell(h);
    if (h.indexOf("#/cidadania") === 0) return viewCidadania();
    if (h.indexOf("#/civico") === 0) return viewCivico();
    if (h.indexOf("#/definicoes") === 0) return viewDefinicoes();
    return viewHome();
  }
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
