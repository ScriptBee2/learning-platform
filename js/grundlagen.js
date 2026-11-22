// Mathe-Grundlagen: Regelkarten, Detail-Dialog, Lernkarten und Quiz.
// Inhalte: data/mathe-grundlagen.js (GRUNDLAGEN), data/quiz-grundlagen.js (QUIZ_GRUNDLAGEN).
(function () {
  const $ = function (id) { return document.getElementById(id); };
  const SECTIONS = GRUNDLAGEN.sections;
  const SECTION_BY_ID = {};
  SECTIONS.forEach(function (s) { SECTION_BY_ID[s.id] = s; });

  function accentVar(name) { return "var(--" + name + ")"; }

  // ---------- Regelkarten aufbauen ----------
  const main = $("sections");
  SECTIONS.forEach(function (sec, si) {
    const el = document.createElement("section");
    el.className = "rule-section accent-" + sec.accent;
    el.id = sec.id;
    el.innerHTML =
      '<header class="rule-section__head">' +
        '<h2 class="rule-section__title">' + sec.title + "</h2>" +
        '<button type="button" class="btn btn--sm" data-topic="' + sec.id + '">Quiz</button>' +
      "</header>" +
      '<div class="rule-grid">' +
        sec.rules.map(function (r, ri) {
          return '<button type="button" class="rule-card" data-section="' + si + '" data-rule="' + ri + '">' +
            '<span class="rule-card__label">' + r.label + "</span>" +
            '<span class="rule-card__formula">' + MathTex.big(r.card) + "</span>" +
          "</button>";
        }).join("") +
      "</div>";
    main.appendChild(el);
  });

  // ---------- Detail-Dialog ----------
  const detailOverlay = $("detailOverlay");
  const detailCard = $("detailCard");
  const detailTitle = $("detailTitle");
  const detailBody = $("detailBody");
  const detailClose = $("detailClose");

  function exampleHTML(ex) {
    if (typeof ex === "string") ex = { tex: ex };
    let note = "";
    if (ex.note) {
      const mod = ex.ok === true ? " math-lines__note--ok" : ex.ok === false ? " math-lines__note--no" : "";
      note = '<span class="math-lines__note' + mod + '">' + MathTex.html(ex.note) + "</span>";
    }
    return "<li>" + MathTex.big(ex.tex) + note + "</li>";
  }

  function mistakeHTML(m) {
    return "<li>" +
      '<div class="mistake__line mistake__line--wrong"><span class="mistake__mark" aria-label="falsch">✗</span>' + MathTex.big(m.wrong) + "</div>" +
      '<div class="mistake__line mistake__line--right"><span class="mistake__mark" aria-label="richtig">✓</span>' + MathTex.big(m.right) + "</div>" +
      (m.note ? '<p class="mistake__note">' + MathTex.html(m.note) + "</p>" : "") +
    "</li>";
  }

  // Reihenfolge im Dialog: Formel (+ Bedingung) → In Worten → Schritte → Warum → Beispiele → Typischer Fehler
  function detailHTML(r) {
    let html = '<div class="math-block">' + MathTex.tex(r.formula, true) +
      (r.condition ? '<p class="rule-detail__condition">' + MathTex.html(r.condition) + "</p>" : "") +
    "</div>";
    if (r.inWords) html += '<p class="rule-detail__words">' + MathTex.html(r.inWords) + "</p>";
    if (r.steps) {
      html += '<ol class="steps">' + r.steps.map(function (s) { return "<li><span>" + MathTex.html(s) + "</span></li>"; }).join("") + "</ol>";
    }
    html +=
      '<section class="rule-detail__box">' +
        '<h3 class="eyebrow">' + (r.whyLabel || "Warum?") + "</h3>" +
        "<p>" + MathTex.html(r.why) + "</p>" +
        (r.derivation ? '<div class="rule-detail__derivation">' + MathTex.tex(r.derivation, true) + "</div>" : "") +
      "</section>" +
      '<section class="rule-detail__box">' +
        '<h3 class="eyebrow">' + (r.examples.length > 1 ? "Beispiele" : "Beispiel") + "</h3>" +
        '<ul class="math-lines">' + r.examples.map(exampleHTML).join("") + "</ul>" +
      "</section>";
    if (r.mistakes) {
      html +=
        '<section class="rule-detail__box rule-detail__box--mistake">' +
          '<h3 class="eyebrow">' + (r.mistakes.length > 1 ? "Typische Fehler" : "Typischer Fehler") + "</h3>" +
          '<ul class="mistakes">' + r.mistakes.map(mistakeHTML).join("") + "</ul>" +
        "</section>";
    }
    return html;
  }

  function openDetail(si, ri) {
    const sec = SECTIONS[si], r = sec && sec.rules[ri];
    if (!r) return;
    detailCard.style.setProperty("--accent", accentVar(sec.accent));
    detailTitle.textContent = r.title || r.label;
    detailBody.innerHTML = detailHTML(r);
    detailBody.scrollTop = 0;
    detailOverlay.hidden = false;
    detailClose.focus();
  }
  function closeDetail() { detailOverlay.hidden = true; }

  main.addEventListener("click", function (e) {
    const card = e.target.closest(".rule-card");
    if (card) openDetail(Number(card.dataset.section), Number(card.dataset.rule));
    const quiz = e.target.closest("[data-topic]");
    if (quiz) startQuiz(quiz.dataset.topic);
  });
  detailClose.addEventListener("click", closeDetail);
  detailOverlay.addEventListener("click", function (e) { if (e.target === detailOverlay) closeDetail(); });

  // ---------- Lernkarten (Seitenleiste) ----------
  const CARDS = GRUNDLAGEN.cards;
  const cardOverlay = $("cardOverlay");
  const bigcard = $("bigcard");
  const cardTitle = $("cardTitle");
  const cardBody = $("cardBody");
  const cardClose = $("cardClose");

  function cardAccent(c) { return accentVar(c.accent || SECTION_BY_ID[c.section].accent); }

  function cardHTML(c) {
    const tag = c.ordered ? "ol" : "ul";
    return (c.intro ? "<p>" + c.intro + "</p>" : "") +
      "<" + tag + ' class="formula-list">' +
        c.items.map(function (it) {
          return "<li>" +
            '<span class="formula-list__label">' + it.label + "</span>" +
            '<span class="formula-list__math">' + (it.tex ? MathTex.big(it.tex) : "<strong>" + it.text + "</strong>") + "</span>" +
          "</li>";
        }).join("") +
      "</" + tag + ">" +
      (c.explainBtn ? '<button type="button" class="btn btn--primary btn--block" style="margin-top:var(--sp-4)" data-explain="' + c.explainBtn + '">&#9654; Schritt für Schritt ansehen</button>' : "");
  }

  function openCard(i) {
    const c = CARDS[i];
    bigcard.style.setProperty("--accent", cardAccent(c));
    cardTitle.textContent = c.front;
    cardBody.innerHTML = cardHTML(c);
    cardOverlay.hidden = false;
    cardClose.focus();
  }
  function closeCard() { cardOverlay.hidden = true; }

  const cardsBox = $("cards");
  CARDS.forEach(function (c, i) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "card-chip";
    chip.style.setProperty("--accent", cardAccent(c));
    chip.textContent = c.front;
    chip.addEventListener("click", function () { openCard(i); });
    cardsBox.appendChild(chip);
  });

  cardClose.addEventListener("click", closeCard);
  cardOverlay.addEventListener("click", function (e) { if (e.target === cardOverlay) closeCard(); });

  // ---------- Quiz ----------
  const QUIZ_LEN = 10;
  const quizOverlay = $("quizOverlay");
  const quizBox = $("quizBox");
  const quizCounter = $("quizCounter");
  const quizStage = $("quizStage");
  const quizLead = $("quizLead");
  const quizPrompt = $("quizPrompt");
  const quizOptions = $("quizOptions");
  const quizFeedback = $("quizFeedback");
  const quizNext = $("quizNext");
  const quizResult = $("quizResult");
  const quizScore = $("quizScore");

  let quizSet = [], qIdx = 0, score = 0, answered = false, currentTopic = null;

  // ---------- Hinweis-Panel ----------
  // Zeigt die Regel (Feld "hint") und das Muster mit anderen Zahlen (Feld "hintShow"), ohne das Ergebnis zu verraten.
  // Schließt sich bei jeder neuen Frage, damit erst selbst probiert wird.
  const hintBtn = $("hintBtn");
  const hintPanel = $("hintPanel");
  const hintTitle = $("hintTitle");
  const hintShow = $("hintShow");
  const hintHamster = $("hintHamster");
  let hintHam = null;

  function openHint() {
    const item = quizSet[qIdx];
    if (!item || !item.hint) return;
    hintTitle.innerHTML = MathTex.html(item.hint);
    hintShow.innerHTML = (item.hintShow || []).map(function (t) { return "<li>" + MathTex.big(t) + "</li>"; }).join("");
    hintPanel.hidden = false;
    hintBtn.setAttribute("aria-expanded", "true");
    if (window.Hamster && !hintHam) {
      const stage = document.createElement("div");
      hintHamster.appendChild(stage);
      hintHam = Hamster.create(stage, { clip: "tipTalk" });   // erzählt kurz, dann ruhig
      setTimeout(function () { if (hintHam) hintHam.setLoop(["idleCalm", "idleLook"]); }, 2400);
    }
  }
  function closeHint() {
    hintPanel.hidden = true;
    hintBtn.setAttribute("aria-expanded", "false");
    if (hintHam) { hintHam.destroy(); hintHam = null; }
    hintHamster.innerHTML = "";
  }
  hintBtn.addEventListener("click", function () { if (hintPanel.hidden) openHint(); else closeHint(); });
  $("hintClose").addEventListener("click", closeHint);

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function updateCounter() {
    quizCounter.textContent = "Frage " + (qIdx + 1) + " von " + quizSet.length + "  ·  " + score + " richtig";
  }

  function startQuiz(topic) {
    currentTopic = topic || null;
    const pool = currentTopic
      ? QUIZ_GRUNDLAGEN.filter(function (q) { return q.topic === currentTopic; })
      : QUIZ_GRUNDLAGEN;
    quizSet = shuffle(pool).slice(0, Math.min(QUIZ_LEN, pool.length));
    qIdx = 0; score = 0;
    const sec = currentTopic && SECTION_BY_ID[currentTopic];
    quizBox.style.setProperty("--accent", sec ? accentVar(sec.accent) : "var(--green)");
    quizLead.textContent = sec ? sec.title + ": Quiz" : "Gemischtes Quiz";
    quizResult.hidden = true;
    quizStage.hidden = false;
    quizOverlay.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const item = quizSet[qIdx];
    updateCounter();
    closeHint();
    hintBtn.hidden = !item.hint;
    quizPrompt.innerHTML = MathTex.html(item.q, true);
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz__feedback";
    quizNext.hidden = true;
    quizOptions.innerHTML = "";
    shuffle(item.opts).forEach(function (opt) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz__opt";
      btn.dataset.value = opt;
      btn.innerHTML = MathTex.html(opt, true);
      btn.addEventListener("click", function () { answer(opt, btn, item); });
      quizOptions.appendChild(btn);
    });
    quizOptions.querySelector(".quiz__opt").focus();
  }

  function answer(chosen, btn, item) {
    if (answered) return;
    answered = true;
    quizOptions.querySelectorAll(".quiz__opt").forEach(function (o) {
      o.classList.add("quiz__opt--locked");
      if (o.dataset.value === item.a) o.classList.add("quiz__opt--correct");
    });
    if (chosen === item.a) {
      score++;
      quizFeedback.innerHTML = "Richtig! " + MathTex.html(item.note);
      quizFeedback.classList.add("quiz__feedback--ok");
    } else {
      btn.classList.add("quiz__opt--wrong");
      quizFeedback.innerHTML = "Richtig wäre " + MathTex.html(item.a) + ". " + MathTex.html(item.note);
      quizFeedback.classList.add("quiz__feedback--no");
    }
    updateCounter();
    quizNext.hidden = false;
    quizNext.textContent = (qIdx + 1 < quizSet.length) ? "Weiter" : "Ergebnis";
    quizNext.focus();
  }

  function nextQuestion() {
    if (qIdx + 1 < quizSet.length) { qIdx++; renderQuestion(); return; }
    closeHint();
    hintBtn.hidden = true;
    quizStage.hidden = true;
    quizResult.hidden = false;
    quizScore.textContent = score + " von " + quizSet.length + " richtig";
    UI.showResult($("hamsterContainer"), score, quizSet.length);
  }

  function closeQuiz() { closeHint(); quizOverlay.hidden = true; }

  $("quizBtn").addEventListener("click", function () { startQuiz(null); });
  $("quizRestart").addEventListener("click", function () { startQuiz(currentTopic); });
  quizNext.addEventListener("click", nextQuestion);
  $("quizClose").addEventListener("click", closeQuiz);
  quizOverlay.addEventListener("click", function (e) {
    if (e.target === quizOverlay || e.target === $("quizLayout")) closeQuiz();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!detailOverlay.hidden) closeDetail();
    else if (!cardOverlay.hidden) closeCard();
    else if (!hintPanel.hidden) closeHint();          // erst den Hinweis, dann das Quiz
    else if (!quizOverlay.hidden) closeQuiz();
  });

  // ---------- Tipp-Hamster ----------
  UI.hamsterTips([
    "Klick auf eine Regelkarte. Dann siehst du Beispiele und warum die Regel stimmt.",
    "Klammern zuerst, dann Potenzen, dann Punkt vor Strich.",
    "Beim Addieren von Brüchen addierst du nie die Nenner! Erst einen gemeinsamen Nenner suchen.",
    "Minus mal Minus ergibt Plus.",
    "Die Potenzgesetze gelten nur bei gleicher Basis oder gleichem Exponenten.",
    "Bei (a − b)² nicht vergessen: Der mittlere Term ist −2ab.",   // Sprechblase = reiner Text, kein KaTeX
    "Jede Abschnitts-Überschrift hat ein eigenes Quiz. So kannst du gezielt üben."
  ]);
})();
