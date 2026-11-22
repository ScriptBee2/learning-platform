// Übungsaufgaben-Modus: Aufgabe · Tipp · Lösungsweg – kein Quiz.
// Daten: data/uebungen-termumformung.js (UEBUNGEN_TERMUMFORMUNG).
// solution-Schema: [{ title, text?, tex? }]
(function () {
  const $ = function (id) { return document.getElementById(id); };

  const LEVEL_LABEL  = { easy: "Einfach", medium: "Mittel", hard: "Schwer" };
  const LEVEL_ACCENT = { easy: "var(--blue)", medium: "var(--amber)", hard: "var(--red)" };

  const overlay       = $("uebOverlay");
  const box           = $("uebBox");
  const counter       = $("uebCounter");
  const lead          = $("uebLead");
  const typeEl        = $("uebType");
  const prompt        = $("uebPrompt");
  const tippBtn       = $("uebTippBtn");
  const tippBody      = $("uebTippBody");
  const solutionBtn   = $("uebSolutionBtn");
  const nextBtn       = $("uebNext");
  const stage         = $("uebStage");
  const solutionStage = $("uebSolutionStage");
  const hamsterEl     = $("uebHamster");
  const stepNoEl      = $("uebStepNo");
  const stepTitleEl   = $("uebStepTitle");
  const stepContent   = $("uebStepContent");
  const stepPromptEl  = $("uebStepPrompt");
  const stepDots      = $("uebStepDots");
  const stepPrevBtn   = $("uebStepPrev");
  const stepNextBtn   = $("uebStepNext");
  const backBtn       = $("uebBackBtn");
  const resultEl      = $("uebResult");
  const scoreEl       = $("uebScore");

  let uebSet = [], qIdx = 0, stepIdx = 0, stepCount = 0;
  let currentLevel = "easy", currentTopic = "";
  let ham = null, curItem = null;

  // ---------- Level-Toggle ----------
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

  function renderStepSection(s) {
    var html = "";
    if (s.rule) html += "<div class='ueb-rule-box'>" + MathTex.big(s.rule) + "</div>";
    if (s.text) html += "<div class='ueb-step-explain'>" + MathTex.html(s.text) + "</div>";
    if (s.tex) html += "<div class='ueb-step-formula'>" + MathTex.big(s.tex) + "</div>";
    return "<section>" + html + "</section>";
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
    solutionStage.hidden = true;
    overlay.hidden = false;
    renderTask();
  }

  // ---------- Aufgabe rendern ----------
  function renderTask() {
    curItem = uebSet[qIdx];
    updateCounter();

    if (!solutionStage.hidden) { closeSolution(); }

    // Aufgabentyp-Eyebrow
    if (curItem.type) {
      typeEl.textContent = curItem.type.toUpperCase();
      typeEl.hidden = false;
    } else {
      typeEl.hidden = true;
    }

    prompt.innerHTML = MathTex.big(curItem.q);
    tippBody.innerHTML = MathTex.html(curItem.note);
    tippBody.hidden = true;
    tippBtn.setAttribute("aria-expanded", "false");

    // Sections für Stepper aufbauen
    stepContent.innerHTML = curItem.solution.map(renderStepSection).join("");
    stepCount = curItem.solution.length;

    // Dots
    stepDots.innerHTML = curItem.solution.map(function (_, i) {
      return "<span" + (i === 0 ? " class='on'" : "") + "></span>";
    }).join("");

    nextBtn.hidden = false;
    nextBtn.textContent = (qIdx + 1 < uebSet.length) ? "Weiter →" : "Fertig";
    prompt.focus();
  }

  // ---------- Schritt anzeigen ----------
  function showStep(i) {
    stepIdx = Math.max(0, Math.min(stepCount - 1, i));

    stepNoEl.textContent = "Schritt " + (stepIdx + 1) + " von " + stepCount;
    stepTitleEl.textContent = (curItem.solution[stepIdx] || {}).title || "";

    Array.prototype.forEach.call(stepContent.children, function (sec, k) {
      sec.classList.toggle("on", k === stepIdx);
    });
    Array.prototype.forEach.call(stepDots.children, function (d, k) {
      d.classList.toggle("on", k === stepIdx);
    });

    stepPrevBtn.disabled = stepIdx === 0;

    var isLast = stepIdx === stepCount - 1;
    stepNextBtn.textContent = isLast ? "Fertig ✓" : "→";
    stepNextBtn.classList.toggle("is-done", isLast);

    if (ham) {
      ham.setLoop("tipTalk");
      setTimeout(function () { if (ham) ham.setLoop(["idleCalm", "idleLook"]); }, 2600);
    }
  }

  // ---------- View-Wechsel ----------
  function openSolution() {
    stage.hidden = true;
    solutionStage.hidden = false;
    stepIdx = 0;
    stepPromptEl.innerHTML = MathTex.big(curItem.q);

    if (window.Hamster && !ham) {
      var s = document.createElement("div");
      hamsterEl.appendChild(s);
      ham = Hamster.create(s, { clip: "tipTalk" });
      setTimeout(function () { if (ham) ham.setLoop(["idleCalm", "idleLook"]); }, 2400);
    }

    showStep(0);
    stepPrevBtn.focus();
  }

  function closeSolution() {
    solutionStage.hidden = true;
    stage.hidden = false;
    if (ham) { ham.destroy(); ham = null; }
    hamsterEl.innerHTML = "";
    prompt.focus();
  }

  solutionBtn.addEventListener("click", openSolution);
  backBtn.addEventListener("click", closeSolution);

  stepPrevBtn.addEventListener("click", function () { showStep(stepIdx - 1); });
  stepNextBtn.addEventListener("click", function () {
    if (stepIdx < stepCount - 1) { showStep(stepIdx + 1); } else { closeSolution(); }
  });

  // ---------- Tipp ----------
  tippBtn.addEventListener("click", function () {
    var open = tippBody.hidden;
    tippBody.hidden = !open;
    tippBtn.setAttribute("aria-expanded", String(open));
  });

  // ---------- Weiter / Fertig ----------
  nextBtn.addEventListener("click", function () {
    if (qIdx + 1 < uebSet.length) {
      qIdx++;
      solutionStage.hidden = true;
      stage.hidden = false;
      renderTask();
      return;
    }
    stage.hidden = true;
    solutionStage.hidden = true;
    resultEl.hidden = false;
    scoreEl.textContent = "Alle " + uebSet.length + " Aufgaben erledigt!";
    UI.showResult($("uebHamsterContainer"), uebSet.length, uebSet.length);
  });

  $("uebRestart").addEventListener("click", startUebung);

  // ---------- Schließen ----------
  function closeUebung() {
    if (ham) { ham.destroy(); ham = null; }
    hamsterEl.innerHTML = "";
    overlay.hidden = true;
  }
  $("uebClose").addEventListener("click", closeUebung);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeUebung(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) {
      if (!solutionStage.hidden) { closeSolution(); return; }
      closeUebung();
    }
  });
})();
