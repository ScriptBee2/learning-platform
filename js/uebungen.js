// Übungsaufgaben-Modus für Mathe-Termumformung.
// Daten: data/uebungen-termumformung.js (UEBUNGEN_TERMUMFORMUNG).
(function () {
  const $ = function (id) { return document.getElementById(id); };

  const LEVEL_LABEL = { easy: "Einfach", medium: "Mittel", hard: "Schwer" };
  const LEVEL_ACCENT = { easy: "var(--blue)", medium: "var(--amber)", hard: "var(--red)" };

  const overlay    = $("uebOverlay");
  const box        = $("uebBox");
  const counter    = $("uebCounter");
  const levelChip  = $("uebLevelChip");
  const lead       = $("uebLead");
  const prompt     = $("uebPrompt");
  const optionsEl  = $("uebOptions");
  const feedback   = $("uebFeedback");
  const solutionEl = $("uebSolution");
  const solutionBtn= $("uebSolutionBtn");
  const stepsEl    = $("uebSolutionSteps");
  const nextBtn    = $("uebNext");
  const stage      = $("uebStage");
  const resultEl   = $("uebResult");
  const scoreEl    = $("uebScore");

  let uebSet = [], qIdx = 0, score = 0, answered = false;
  let currentLevel = "easy", currentTopic = "";

  // ---------- Level-Toggle im Sidebar-Panel ----------
  document.querySelectorAll(".ueb-level__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".ueb-level__btn").forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      currentLevel = btn.dataset.level;
    });
  });

  $("uebBtn").addEventListener("click", function () {
    currentTopic = $("uebTopic").value;
    startUebung();
  });

  // ---------- Hilfsfunktionen ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function accentForSection(topicId) {
    if (!topicId || !window.TERMUMFORMUNG) return "var(--blue)";
    const sec = TERMUMFORMUNG.sections.find(function (s) { return s.id === topicId; });
    return sec ? "var(--" + sec.accent + ")" : "var(--blue)";
  }

  function updateCounter() {
    counter.textContent = "Aufgabe " + (qIdx + 1) + " von " + uebSet.length + "  ·  " + score + " richtig";
  }

  // ---------- Start ----------
  function startUebung() {
    const pool = UEBUNGEN_TERMUMFORMUNG.filter(function (u) {
      const topicOk = !currentTopic || u.topic === currentTopic;
      return topicOk && u.level === currentLevel;
    });
    if (pool.length === 0) {
      alert("Keine Aufgaben für diese Auswahl. Bitte andere Kombination wählen.");
      return;
    }
    uebSet = shuffle(pool).slice(0, Math.min(8, pool.length));
    qIdx = 0; score = 0;

    const accent = currentTopic ? accentForSection(currentTopic) : LEVEL_ACCENT[currentLevel];
    box.style.setProperty("--accent", accent);
    levelChip.textContent = LEVEL_LABEL[currentLevel];
    levelChip.style.setProperty("--chip-color", LEVEL_ACCENT[currentLevel]);

    const topicLabel = currentTopic
      ? (TERMUMFORMUNG.sections.find(function (s) { return s.id === currentTopic; }) || {}).title || currentTopic
      : "Alle Themen";
    lead.textContent = topicLabel + " · " + LEVEL_LABEL[currentLevel];

    resultEl.hidden = true;
    stage.hidden = false;
    overlay.hidden = false;
    renderQuestion();
  }

  // ---------- Frage rendern ----------
  function renderQuestion() {
    answered = false;
    const item = uebSet[qIdx];
    updateCounter();

    prompt.innerHTML = MathTex.html(item.q, true);
    feedback.textContent = "";
    feedback.className = "quiz__feedback";
    solutionEl.hidden = true;
    stepsEl.hidden = true;
    solutionBtn.setAttribute("aria-expanded", "false");
    solutionBtn.textContent = "Lösungsweg anzeigen ▾";
    nextBtn.hidden = true;
    optionsEl.innerHTML = "";

    shuffle(item.opts).forEach(function (opt) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz__opt";
      btn.dataset.value = opt;
      btn.innerHTML = MathTex.html(opt, true);
      btn.addEventListener("click", function () { answer(opt, btn, item); });
      optionsEl.appendChild(btn);
    });
    optionsEl.querySelector(".quiz__opt").focus();
  }

  // ---------- Antwort ----------
  function answer(chosen, btn, item) {
    if (answered) return;
    answered = true;

    optionsEl.querySelectorAll(".quiz__opt").forEach(function (o) {
      o.classList.add("quiz__opt--locked");
      if (o.dataset.value === item.a) o.classList.add("quiz__opt--correct");
    });

    if (chosen === item.a) {
      score++;
      feedback.innerHTML = "Richtig! " + MathTex.html(item.note);
      feedback.classList.add("quiz__feedback--ok");
    } else {
      btn.classList.add("quiz__opt--wrong");
      feedback.innerHTML = "Richtig wäre " + MathTex.html(item.a) + ". " + MathTex.html(item.note);
      feedback.classList.add("quiz__feedback--no");
    }

    updateCounter();

    // Lösungsweg-Block befüllen
    stepsEl.innerHTML = item.solution.map(function (s) {
      return "<li>" + MathTex.big(s) + "</li>";
    }).join("");
    solutionEl.hidden = false;

    nextBtn.hidden = false;
    nextBtn.textContent = (qIdx + 1 < uebSet.length) ? "Weiter" : "Ergebnis";
    nextBtn.focus();
  }

  // ---------- Lösungsweg aufklappen ----------
  solutionBtn.addEventListener("click", function () {
    const open = stepsEl.hidden;
    stepsEl.hidden = !open;
    solutionBtn.setAttribute("aria-expanded", String(open));
    solutionBtn.textContent = open ? "Lösungsweg ausblenden ▴" : "Lösungsweg anzeigen ▾";
  });

  // ---------- Weiter / Ergebnis ----------
  nextBtn.addEventListener("click", function () {
    if (qIdx + 1 < uebSet.length) {
      qIdx++;
      renderQuestion();
      return;
    }
    stage.hidden = true;
    resultEl.hidden = false;
    scoreEl.textContent = score + " von " + uebSet.length + " richtig";
    UI.showResult($("uebHamsterContainer"), score, uebSet.length);
  });

  $("uebRestart").addEventListener("click", startUebung);

  // ---------- Schließen ----------
  function closeUebung() { overlay.hidden = true; }
  $("uebClose").addEventListener("click", closeUebung);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeUebung(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeUebung();
  });
})();
