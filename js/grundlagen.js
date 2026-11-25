// Mathe-Grundlagen: Regelkarten, Detail-Dialog und Lernkarten.
// Inhalte: data/mathe-grundlagen.js (GRUNDLAGEN). Übungen: js/uebungen.js.
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

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!detailOverlay.hidden) closeDetail();
    else if (!cardOverlay.hidden) closeCard();
  });

  // ---------- Tipp-Hamster ----------
  UI.hamsterTips([
    "Klick auf eine Regelkarte. Dann siehst du Beispiele und warum die Regel stimmt.",
    "Klammern zuerst, dann Potenzen, dann Punkt vor Strich.",
    "Beim Addieren von Brüchen addierst du nie die Nenner! Erst einen gemeinsamen Nenner suchen.",
    "Minus mal Minus ergibt Plus.",
    "Die Potenzgesetze gelten nur bei gleicher Basis oder gleichem Exponenten.",
    "Bei (a − b)² nicht vergessen: Der mittlere Term ist −2ab.",   // Sprechblase = reiner Text, kein KaTeX
    "Rechts im Panel kannst du Übungsaufgaben nach Thema und Schwierigkeit starten."
  ]);
})();
