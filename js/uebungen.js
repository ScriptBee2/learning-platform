// Übungsaufgaben-Modus: Aufgabe · Tipp · Lösungsweg-Panel – kein Quiz.
// Daten: data/uebungen-termumformung.js (UEBUNGEN_TERMUMFORMUNG).
(function () {
  const $ = function (id) { return document.getElementById(id); };

  const LEVEL_LABEL  = { easy: "Einfach", medium: "Mittel", hard: "Schwer" };
  const LEVEL_ACCENT = { easy: "var(--blue)", medium: "var(--amber)", hard: "var(--red)" };

  const overlay         = $("uebOverlay");
  const box             = $("uebBox");
  const counter         = $("uebCounter");
  const lead            = $("uebLead");
  const prompt          = $("uebPrompt");
  const tippBtn         = $("uebTippBtn");
  const tippBody        = $("uebTippBody");
  const solutionPanel   = $("uebSolutionPanel");
  const solutionBtn     = $("uebSolutionBtn");
  const solutionClose   = $("uebSolutionClose");
  const stepsEl         = $("uebSolutionSteps");
  const nextBtn         = $("uebNext");
  const stage           = $("uebStage");
  const resultEl        = $("uebResult");
  const scoreEl         = $("uebScore");

  let uebSet = [], qIdx = 0;
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
    counter.textContent = "Aufgabe " + (qIdx + 1) + " von " + uebSet.length;
  }

  function closeSolutionPanel() {
    solutionPanel.hidden = true;
    solutionBtn.setAttribute("aria-expanded", "false");
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
    qIdx = 0;

    const accent = currentTopic ? accentForSection(currentTopic) : LEVEL_ACCENT[currentLevel];
    box.style.setProperty("--accent", accent);

    const topicLabel = currentTopic
      ? (TERMUMFORMUNG.sections.find(function (s) { return s.id === currentTopic; }) || {}).title || currentTopic
      : "Alle Themen";
    lead.textContent = topicLabel + " · " + LEVEL_LABEL[currentLevel];

    resultEl.hidden = true;
    stage.hidden = false;
    overlay.hidden = false;
    renderTask();
  }

  // ---------- Aufgabe rendern ----------
  function renderTask() {
    const item = uebSet[qIdx];
    updateCounter();

    closeSolutionPanel();

    prompt.innerHTML = MathTex.big(item.q);

    tippBody.innerHTML = MathTex.html(item.note);
    tippBody.hidden = true;
    tippBtn.setAttribute("aria-expanded", "false");

    stepsEl.innerHTML = item.solution.map(function (s) {
      return "<li>" + MathTex.big(s) + "</li>";
    }).join("");

    nextBtn.hidden = false;
    nextBtn.textContent = (qIdx + 1 < uebSet.length) ? "Weiter →" : "Fertig";
    prompt.focus();
  }

  // ---------- Tipp aufklappen ----------
  tippBtn.addEventListener("click", function () {
    const open = tippBody.hidden;
    tippBody.hidden = !open;
    tippBtn.setAttribute("aria-expanded", String(open));
  });

  // ---------- Lösungsweg-Panel öffnen/schließen ----------
  solutionBtn.addEventListener("click", function () {
    const open = solutionPanel.hidden;
    solutionPanel.hidden = !open;
    solutionBtn.setAttribute("aria-expanded", String(open));
  });

  solutionClose.addEventListener("click", closeSolutionPanel);

  // ---------- Weiter / Fertig ----------
  nextBtn.addEventListener("click", function () {
    if (qIdx + 1 < uebSet.length) {
      qIdx++;
      renderTask();
      return;
    }
    stage.hidden = true;
    resultEl.hidden = false;
    scoreEl.textContent = "Alle " + uebSet.length + " Aufgaben erledigt!";
    UI.showResult($("uebHamsterContainer"), uebSet.length, uebSet.length);
  });

  $("uebRestart").addEventListener("click", startUebung);

  // ---------- Schließen ----------
  function closeUebung() {
    closeSolutionPanel();
    overlay.hidden = true;
  }
  $("uebClose").addEventListener("click", closeUebung);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeUebung(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) {
      if (!solutionPanel.hidden) { closeSolutionPanel(); return; }
      closeUebung();
    }
  });
})();
