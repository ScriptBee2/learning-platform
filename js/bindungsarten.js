// Interaktive Elemente der Bindungsarten-Seite: Lernkarten + Quiz.
(function () {
  // ---------- Lernkarten ----------
  const CARDS = [
    {
      front: "Ionenbindung", color: "var(--blue)",
      body:
        "<p>Zwischen <strong>Metall</strong> und <strong>Nichtmetall</strong>. Das Metall gibt " +
        "Elektronen ab (→ <strong>Kation</strong>), das Nichtmetall nimmt sie auf (→ <strong>Anion</strong>). " +
        "Die entgegengesetzt geladenen Ionen ziehen sich an und bilden ein <strong>Ionengitter</strong>.</p>" +
        '<p class="muted">Beispiele: NaCl, MgO, KBr</p>'
    },
    {
      front: "Atombindung", color: "var(--cyan)",
      body:
        "<p>Zwischen <strong>Nichtmetallen</strong>. Die Atome <strong>teilen sich Elektronenpaare</strong> " +
        "(kovalent) und erreichen so das Oktett. Es entstehen <strong>Moleküle</strong>.</p>" +
        '<p class="muted">Beispiele: H₂O, O₂, CO₂</p>'
    },
    {
      front: "Metallbindung", color: "var(--yellow)",
      body:
        "<p>Zwischen <strong>Metall-Atomen</strong>. Sie geben Außenelektronen ab; diese bewegen sich als " +
        "<strong>Elektronengas</strong> frei zwischen den positiven <strong>Atomrümpfen</strong> (Me⁺).</p>" +
        '<p class="muted">Beispiele: Kupfer, Eisen, Aluminium</p>'
    },
    {
      front: "Fachbegriffe", color: "var(--purple)",
      body:
        '<ul class="card-list">' +
          "<li><strong>Kation</strong> – positiv geladenes Ion (Elektron abgegeben)</li>" +
          "<li><strong>Anion</strong> – negativ geladenes Ion (Elektron aufgenommen)</li>" +
          "<li><strong>Ionengitter</strong> – regelmäßige Anordnung von Ionen</li>" +
          "<li><strong>Elektronenpaar</strong> – zwei gemeinsam genutzte Elektronen</li>" +
          "<li><strong>Elektronengas</strong> – frei bewegliche Elektronen im Metall</li>" +
          "<li><strong>Atomrumpf</strong> – Metall-Ion ohne Außenelektronen</li>" +
        "</ul>"
    },
    {
      front: "Welche Bindung?", color: "var(--orange)",
      body:
        '<ul class="card-list">' +
          "<li><strong>Metall + Nichtmetall</strong> → Ionenbindung</li>" +
          "<li><strong>Nichtmetall + Nichtmetall</strong> → Atombindung (kovalent)</li>" +
          "<li><strong>Metall + Metall</strong> → Metallbindung</li>" +
        "</ul>"
    }
  ];

  const cardOverlay = document.getElementById("cardOverlay");
  const bigcard = document.getElementById("bigcard");
  const cardTitle = document.getElementById("cardTitle");
  const cardBody = document.getElementById("cardBody");
  const cardAction = document.getElementById("cardAction");
  const cardCounter = document.getElementById("cardCounter");
  const cardClose = document.getElementById("cardClose");

  let cardIdx = 0, practice = false, revealed = false;

  function renderCard() {
    const c = CARDS[cardIdx];
    bigcard.style.setProperty("--accent", c.color);
    cardTitle.textContent = c.front;

    if (!practice || revealed) {
      cardBody.classList.remove("bigcard__body--covered");
      cardBody.innerHTML = c.body;
    } else {
      cardBody.classList.add("bigcard__body--covered");
      cardBody.innerHTML = '<span class="bigcard__cover">Tippen zum Aufdecken</span>';
    }

    if (practice) {
      cardCounter.hidden = false;
      cardCounter.textContent = "Karte " + (cardIdx + 1) + " von " + CARDS.length;
      if (!revealed) {
        cardAction.hidden = true;
      } else {
        cardAction.hidden = false;
        cardAction.textContent = (cardIdx + 1 < CARDS.length) ? "Weiter" : "Fertig";
      }
    } else {
      cardCounter.hidden = true;
      cardAction.hidden = true;
    }
  }

  function openSingle(i) { cardIdx = i; practice = false; revealed = true; renderCard(); cardOverlay.hidden = false; cardClose.focus(); }
  function startPractice() { cardIdx = 0; practice = true; revealed = false; renderCard(); cardOverlay.hidden = false; cardClose.focus(); }
  function closeCard() { cardOverlay.hidden = true; }
  function cardActionClick() {
    if (!revealed) { revealed = true; renderCard(); }
    else if (cardIdx + 1 < CARDS.length) { cardIdx++; revealed = false; renderCard(); }
    else closeCard();
  }

  const cardsBox = document.getElementById("cards");
  CARDS.forEach(function (c, i) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "card-chip";
    chip.style.setProperty("--accent", c.color);
    chip.textContent = c.front;
    chip.addEventListener("click", function () { openSingle(i); });
    cardsBox.appendChild(chip);
  });

  document.getElementById("practiceBtn").addEventListener("click", startPractice);
  cardAction.addEventListener("click", function (e) { e.stopPropagation(); cardActionClick(); });
  bigcard.addEventListener("click", function (e) {
    if (!practice) return;
    if (e.target === cardClose || cardClose.contains(e.target)) return;
    cardActionClick();
  });
  cardClose.addEventListener("click", function (e) { e.stopPropagation(); closeCard(); });
  cardOverlay.addEventListener("click", function (e) { if (e.target === cardOverlay) closeCard(); });

  // ---------- Quiz ----------
  const KINDS = {
    ion:    { label: "Ionenbindung",  color: "var(--blue)" },
    atom:   { label: "Atombindung",   color: "var(--cyan)" },
    metall: { label: "Metallbindung", color: "var(--yellow)" }
  };
  const QUIZ_LEN = 10;
  let ALL_QUESTIONS = [];

  const quizOverlay = document.getElementById("quizOverlay");
  const quizCounter = document.getElementById("quizCounter");
  const quizStage = document.getElementById("quizStage");
  const quizPrompt = document.getElementById("quizPrompt");
  const quizOptions = document.getElementById("quizOptions");
  const quizFeedback = document.getElementById("quizFeedback");
  const quizNext = document.getElementById("quizNext");
  const quizResult = document.getElementById("quizResult");
  const quizScore = document.getElementById("quizScore");

  let quizSet = [], qIdx = 0, score = 0, answered = false;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startQuiz() {
    quizSet = shuffle(ALL_QUESTIONS).slice(0, QUIZ_LEN);
    qIdx = 0; score = 0;
    quizResult.hidden = true;
    quizStage.hidden = false;
    quizOverlay.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const item = quizSet[qIdx];
    quizCounter.textContent = "Frage " + (qIdx + 1) + " von " + quizSet.length + "  ·  " + score + " richtig";
    quizPrompt.textContent = item.q;
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz__feedback";
    quizNext.hidden = true;

    quizOptions.innerHTML = "";
    Object.keys(KINDS).forEach(function (key) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz__opt";
      btn.style.setProperty("--accent", KINDS[key].color);
      btn.textContent = KINDS[key].label;
      btn.addEventListener("click", function () { answer(key, btn); });
      quizOptions.appendChild(btn);
    });
  }

  function answer(key, btn) {
    if (answered) return;
    answered = true;
    const item = quizSet[qIdx];
    const opts = quizOptions.querySelectorAll(".quiz__opt");
    opts.forEach(function (o) {
      o.classList.add("quiz__opt--locked");
      if (o.textContent === KINDS[item.a].label) o.classList.add("quiz__opt--correct");
    });
    if (key === item.a) {
      score++;
      quizFeedback.textContent = "Richtig! " + item.note;
      quizFeedback.classList.add("quiz__feedback--ok");
    } else {
      btn.classList.add("quiz__opt--wrong");
      quizFeedback.textContent = "Richtig wäre: " + KINDS[item.a].label + ". " + item.note;
      quizFeedback.classList.add("quiz__feedback--no");
    }
    quizCounter.textContent = "Frage " + (qIdx + 1) + " von " + quizSet.length + "  ·  " + score + " richtig";
    quizNext.hidden = false;
    quizNext.textContent = (qIdx + 1 < quizSet.length) ? "Weiter" : "Ergebnis";
  }

  function nextQuestion() {
    if (qIdx + 1 < quizSet.length) { qIdx++; renderQuestion(); }
    else {
      quizStage.hidden = true;
      quizResult.hidden = false;
      quizScore.textContent = score + " von " + quizSet.length + " richtig";
      UI.showResult(document.getElementById("hamsterContainer"), score, quizSet.length);
    }
  }

  function closeQuiz() { quizOverlay.hidden = true; }

  ALL_QUESTIONS = QUIZ_BINDUNGSARTEN;

  document.getElementById("quizBtn").addEventListener("click", startQuiz);
  document.getElementById("quizRestart").addEventListener("click", startQuiz);
  quizNext.addEventListener("click", nextQuestion);
  document.getElementById("quizClose").addEventListener("click", closeQuiz);
  quizOverlay.addEventListener("click", function (e) { if (e.target === quizOverlay) closeQuiz(); });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!cardOverlay.hidden) closeCard();
    else if (!quizOverlay.hidden) closeQuiz();
  });

  // ---------- Tipp-Hamster ----------
  UI.hamsterTips([
    "Faustregel: Metall + Nichtmetall ergibt meistens eine Ionenbindung.",
    "Zwei Nichtmetalle teilen sich Elektronenpaare. Das ist eine Atombindung.",
    "In Metallen bewegen sich die Elektronen frei wie ein Gas. Deshalb leiten Metalle den Strom.",
    "Salze wie Kochsalz sind hart und spröde, weil die Ionen fest im Gitter sitzen.",
    "Schau zuerst ins Periodensystem: Steht das Element links, ist es ein Metall. Rechts oben stehen die Nichtmetalle."
  ]);
})();
