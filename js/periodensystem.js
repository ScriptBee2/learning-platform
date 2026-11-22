// Baut das Periodensystem als Grid und verdrahtet das Detail-Panel.
(function () {
  const table = document.getElementById("ptable");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  // Reihe 1 = Haupt-/Nebengruppen-Notation, Reihe 2 = Gruppen-Nummer (IUPAC).
  // Spalte 1 = Perioden-Label. Elemente daher um +2 (Zeile) bzw. +1 (Spalte) verschoben.
  // Reihe 11 = Lanthanoide, Reihe 12 = Actinoide (ab Spalte 4 fortlaufend).
  function position(el) {
    if (el.cat === "lanthan" && el.group === 0) {
      return { col: 4 + (el.z - 57), row: 11 };
    }
    if (el.cat === "actinoid" && el.group === 0) {
      return { col: 4 + (el.z - 89), row: 12 };
    }
    return { col: el.group + 1, row: el.period + 2 };
  }

  const ROMAN_GROUP = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII",
    8: "VIII", 9: "VIII", 10: "VIII", 11: "I", 12: "II",
    13: "III", 14: "IV", 15: "V", 16: "VI", 17: "VII", 18: "VIII"
  };

  // Valenzelektronen (Außenelektronen). Nur für Hauptgruppen eindeutig
  // aus der Gruppennummer ableitbar; Nebengruppen etc. → null.
  function valenceElectrons(el) {
    if (el.z === 2) return 2;          // Helium
    const g = el.group;
    if (g === 1) return 1;
    if (g === 2) return 2;
    if (g >= 13) return g - 10;        // 13→3 … 18→8
    return null;
  }

  // Lewis-Symbol als SVG: Elektronen auf 4 Seiten, erst einzeln, dann paaren.
  function buildLewisSVG(el, ve) {
    const C = 70, R = 44, d = 9;       // Zentrum, Seitenabstand, Paar-Offset
    // Reihenfolge der Seiten: oben, rechts, unten, links
    const sides = [
      { x: C,     y: C - R, axis: "h" },
      { x: C + R, y: C,     axis: "v" },
      { x: C,     y: C + R, axis: "h" },
      { x: C - R, y: C,     axis: "v" }
    ];
    const counts = [0, 0, 0, 0];
    for (let i = 0; i < ve; i++) counts[i % 4]++;

    let dots = "";
    sides.forEach(function (s, i) {
      if (counts[i] === 1) {
        dots += '<circle cx="' + s.x + '" cy="' + s.y + '" r="4"/>';
      } else if (counts[i] === 2) {
        if (s.axis === "h") {
          dots += '<circle cx="' + (s.x - d) + '" cy="' + s.y + '" r="4"/>';
          dots += '<circle cx="' + (s.x + d) + '" cy="' + s.y + '" r="4"/>';
        } else {
          dots += '<circle cx="' + s.x + '" cy="' + (s.y - d) + '" r="4"/>';
          dots += '<circle cx="' + s.x + '" cy="' + (s.y + d) + '" r="4"/>';
        }
      }
    });

    return '<svg viewBox="0 0 140 140" class="lewis__svg">' +
      '<text x="70" y="70" class="lewis__sym">' + el.sym + "</text>" +
      '<g class="lewis__dots">' + dots + "</g>" +
      "</svg>";
  }

  // Valenzstrichformel: Elektronenpaare als Striche, einzelne Elektronen als Punkte.
  function buildValenceSVG(el, ve) {
    const C = 70, R = 42, L = 13;
    const counts = [0, 0, 0, 0];
    for (let i = 0; i < ve; i++) counts[i % 4]++;

    function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="4"/>'; }
    function lineH(y) { return '<line x1="' + (C - L) + '" y1="' + y + '" x2="' + (C + L) + '" y2="' + y + '"/>'; }
    function lineV(x) { return '<line x1="' + x + '" y1="' + (C - L) + '" x2="' + x + '" y2="' + (C + L) + '"/>'; }

    let marks = "";
    // oben (horizontal)
    if (counts[0] === 1) marks += dot(C, C - R);
    else if (counts[0] === 2) marks += lineH(C - R);
    // rechts (vertikal)
    if (counts[1] === 1) marks += dot(C + R, C);
    else if (counts[1] === 2) marks += lineV(C + R);
    // unten (horizontal)
    if (counts[2] === 1) marks += dot(C, C + R);
    else if (counts[2] === 2) marks += lineH(C + R);
    // links (vertikal)
    if (counts[3] === 1) marks += dot(C - R, C);
    else if (counts[3] === 2) marks += lineV(C - R);

    return '<svg viewBox="0 0 140 140" class="lewis__svg">' +
      '<text x="70" y="70" class="lewis__sym">' + el.sym + "</text>" +
      '<g class="lewis__marks">' + marks + "</g>" +
      "</svg>";
  }

  // Bindigkeit (Zahl der kovalenten Bindungen) nach Oktett-/Duettregel.
  function bondCount(el, ve) {
    if (el.cat === "edelgas") return 0;   // Oktett/Duett voll → keine Bindung
    if (ve <= 4) return ve;               // Gruppen I–IV
    return 8 - ve;                        // Gruppen V–VII
  }

  // Bindung zwischen zwei Atomen a und b ({ el, ve }) als Lewis- (mode "dots")
  // oder Valenzstrichformel (mode "lines"). Bindungsordnung = Bindigkeit von a.
  function buildBondSVG(a, b, mode) {
    const n = bondCount(a.el, a.ve);
    if (n === 0) {
      return mode === "lines" ? buildValenceSVG(a.el, a.ve) : buildLewisSVG(a.el, a.ve);
    }

    const LX = 62, RX = 158, CY = 70, R = 30, d = 8, L = 11, BX = 110;
    function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="4"/>'; }
    function lineH(x, y) { return '<line x1="' + (x - L) + '" y1="' + y + '" x2="' + (x + L) + '" y2="' + y + '"/>'; }
    function lineV(x, y) { return '<line x1="' + x + '" y1="' + (y - L) + '" x2="' + x + '" y2="' + (y + L) + '"/>'; }

    function freeMarks(cx, outerX, freePairs) {
      function pairOn(side) {
        if (side === "oben")  return mode === "lines" ? lineH(cx, CY - R) : dot(cx - d, CY - R) + dot(cx + d, CY - R);
        if (side === "unten") return mode === "lines" ? lineH(cx, CY + R) : dot(cx - d, CY + R) + dot(cx + d, CY + R);
        return mode === "lines" ? lineV(outerX, CY) : dot(outerX, CY - d) + dot(outerX, CY + d); // außen
      }
      if (freePairs === 1) return pairOn("außen");
      if (freePairs === 2) return pairOn("oben") + pairOn("unten");
      if (freePairs >= 3) return pairOn("oben") + pairOn("unten") + pairOn("außen");
      return "";
    }

    let bond = "";
    for (let i = 0; i < n; i++) {
      if (mode === "lines") {
        const y = CY + (i - (n - 1) / 2) * 8;
        bond += '<line x1="' + (LX + 22) + '" y1="' + y + '" x2="' + (RX - 22) + '" y2="' + y + '"/>';
      } else {
        const x = BX + (i - (n - 1) / 2) * 14;
        bond += dot(x, CY - d) + dot(x, CY + d);
      }
    }

    const g = mode === "lines" ? "lewis__marks" : "lewis__dots";
    return '<svg viewBox="0 0 220 140" class="lewis__svg lewis__svg--mol">' +
      '<text x="' + LX + '" y="' + CY + '" class="lewis__sym">' + a.el.sym + "</text>" +
      '<text x="' + RX + '" y="' + CY + '" class="lewis__sym">' + b.el.sym + "</text>" +
      '<g class="' + g + '">' +
        freeMarks(LX, LX - R, (a.ve - n) / 2) +
        freeMarks(RX, RX + R, (b.ve - n) / 2) +
        bond + "</g>" +
      "</svg>";
  }

  // Homonukleares Molekül X2 (für die Element- und Lernkarten).
  function buildMoleculeSVG(el, ve, mode) {
    return buildBondSVG({ el: el, ve: ve }, { el: el, ve: ve }, mode);
  }

  function openDetail(el) {
    const en = el.en === null ? "—" : el.en.toFixed(2);
    const isMain = el.group !== 0 && (el.group <= 2 || el.group >= 13);
    let gruppe = "—";
    if (el.group !== 0) {
      gruppe = ROMAN_GROUP[el.group] + (isMain ? " (Hauptgruppe)" : " (Nebengruppe)");
    }

    // Tafelwerk-Zelle
    document.getElementById("dNumber").textContent = el.z;
    document.getElementById("dMass").textContent = el.mass;
    document.getElementById("dEN").textContent = en;
    document.getElementById("dSymbol").textContent = el.sym;
    document.getElementById("dName").textContent = el.de;

    // Erklär-Liste
    document.getElementById("lMass").textContent = el.mass + " u";
    document.getElementById("lEN").textContent = en;
    document.getElementById("lGroup").textContent = gruppe;
    document.getElementById("lPeriod").textContent = el.period;
    document.getElementById("lCat").textContent = CATEGORIES[el.cat];

    const detail = document.getElementById("detail");
    detail.dataset.cat = el.cat;
    document.getElementById("tcell").dataset.cat = el.cat;

    // Bindung: X2-Molekül in Lewis- und Valenzstrichformel (nur Hauptgruppen)
    const ve = valenceElectrons(el);
    const lewisBox = document.getElementById("lewisBox");
    const lewisFig = document.getElementById("lewisFig");
    const valenceFig = document.getElementById("valenceFig");
    if (ve === null) {
      lewisBox.hidden = true;
      lewisFig.innerHTML = "";
      valenceFig.innerHTML = "";
    } else {
      lewisBox.hidden = false;
      valenceFig.innerHTML = buildMoleculeSVG(el, ve, "lines");
      lewisFig.innerHTML = buildMoleculeSVG(el, ve, "dots");
    }

    overlay.hidden = false;
    closeBtn.focus();
  }

  function closeDetail() {
    overlay.hidden = true;
  }

  // Elemente rendern
  const ELEMENT_CELLS = [];
  ELEMENTS.forEach(function (el) {
    const pos = position(el);
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "element";
    cell.dataset.cat = el.cat;
    cell.style.gridColumn = pos.col;
    cell.style.gridRow = pos.row;
    cell.innerHTML =
      '<span class="element__z">' + el.z + "</span>" +
      '<span class="element__sym">' + el.sym + "</span>" +
      '<span class="element__name">' + el.de + "</span>";
    cell.addEventListener("click", function () {
      if (bondMode) selectBondElement(el, cell);
      else openDetail(el);
    });
    table.appendChild(cell);
    ELEMENT_CELLS.push({ el: el, cell: cell });
  });

  // Spaltenköpfe wie im Tafelwerk:
  // Reihe 1 = übergeordnete Beschriftung (Hauptgruppe / Nebengruppe)
  // Reihe 2 = römische Gruppennummer (ohne a/b)
  const ROMAN = {
    1: "I", 2: "II",
    3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII",
    8: "VIII", 9: "VIII", 10: "VIII", 11: "I", 12: "II",
    13: "III", 14: "IV", 15: "V", 16: "VI", 17: "VII", 18: "VIII"
  };

  const SPANS = [
    { label: "Hauptgruppe", start: 2,  span: 2,  kind: "main" },
    { label: "Nebengruppe", start: 4,  span: 10, kind: "sub" },
    { label: "Hauptgruppe", start: 14, span: 6,  kind: "main" }
  ];
  SPANS.forEach(function (s) {
    const span = document.createElement("div");
    span.className = "axis axis--span axis--" + s.kind;
    span.style.gridColumn = s.start + " / span " + s.span;
    span.style.gridRow = 1;
    span.textContent = s.label;
    table.appendChild(span);
  });

  // "Periode"-Label in der Ecke oben links
  const corner = document.createElement("div");
  corner.className = "axis axis--corner";
  corner.style.gridColumn = 1;
  corner.style.gridRow = "1 / span 2";
  corner.textContent = "Periode";
  table.appendChild(corner);

  // Römische Gruppennummern in Reihe 2
  for (let g = 1; g <= 18; g++) {
    const isMain = g <= 2 || g >= 13;
    const roman = document.createElement("div");
    roman.className = "axis axis--group axis--" + (isMain ? "main" : "sub");
    roman.style.gridColumn = g + 1;
    roman.style.gridRow = 2;
    roman.textContent = ROMAN[g];
    table.appendChild(roman);
  }

  // Zeilenköpfe: Perioden 1–7 in Spalte 1, Reihen 3–9
  for (let p = 1; p <= 7; p++) {
    const head = document.createElement("div");
    head.className = "axis axis--period";
    head.style.gridColumn = 1;
    head.style.gridRow = p + 2;
    head.textContent = p;
    table.appendChild(head);
  }

  // Legende als HTML-String (für die Rückseite der "Stoffgruppen"-Karte)
  function legendHTML() {
    const groups = [
      ["alkali", "erdalkali", "uebergang", "metall"],
      ["halbmetall", "nichtmetall", "halogen"],
      ["edelgas"],
      ["lanthan", "actinoid"]
    ];
    let html = '<div class="legend">';
    groups.forEach(function (group, i) {
      if (i > 0) html += '<span class="legend__sep"></span>';
      group.forEach(function (key) {
        html += '<span class="legend__item" data-cat="' + key + '">' +
          '<span class="legend__swatch"></span>' + CATEGORIES[key] + "</span>";
      });
    });
    return html + "</div>";
  }

  // Schließen: Button, Klick auf Hintergrund, Escape
  closeBtn.addEventListener("click", closeDetail);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeDetail();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeDetail();
  });

  // Lernkarten in der Reihenfolge eines Lernwegs: Überblick → Tabelle lesen → Lewis → Oktettregel.
  // cat = Akzentfarbe (teilt sich die Stoffgruppen-Farben). Knöpfe mit data-explain öffnen die
  // Schritt-für-Schritt-Erklärung (js/explainer.js, Inhalte in js/explain/).
  const FLASHCARDS = [
    { front: "Stoffgruppen", cat: "nichtmetall", back: legendHTML() },
    {
      front: "Periode & Hauptgruppe", cat: "uebergang",
      back:
        '<div class="psefact">' +
          '<div class="psefact__row">' +
            '<span class="psefact__badge">↔ Zeile</span>' +
            '<div class="psefact__text"><strong>Periode</strong> = Anzahl der <strong>Schalen</strong>' +
            '<span class="psefact__ex">z. B. Natrium: Periode 3, also 3 Schalen</span></div>' +
          '</div>' +
          '<div class="psefact__row">' +
            '<span class="psefact__badge">↕ Spalte</span>' +
            '<div class="psefact__text"><strong>Hauptgruppe</strong> = Anzahl der <strong>Außenelektronen</strong>' +
            '<span class="psefact__ex">z. B. Chlor: Hauptgruppe VII, also 7 Außenelektronen</span></div>' +
          '</div>' +
        '</div>' +
        '<button type="button" class="btn btn--primary btn--block" data-explain="perioden">Schritt für Schritt ansehen</button>'
    },
    {
      front: "Lewis-Schreibweise", cat: "halbmetall",
      back:
        '<p class="merksatz">Die Lewis-Schreibweise zeigt nur die Außenelektronen: als Punkte rund um das Symbol.</p>' +
        '<ul class="card-list">' +
          '<li><strong>Erst einzeln</strong> auf die vier Seiten, <strong>dann paarweise</strong>.</li>' +
          '<li>Jeder <strong>einzelne Punkt</strong> kann eine Bindung eingehen.</li>' +
        '</ul>' +
        '<div class="card-example">' +
          '<div class="card-example__item">' + buildLewisSVG({ sym: "N" }, 5) +
            '<span class="card-example__cap">Stickstoff: 5 Punkte, 3 einzeln</span></div>' +
          '<div class="card-example__item">' + buildMoleculeSVG({ sym: "Cl", cat: "halogen" }, 7, "dots") +
            '<span class="card-example__cap">Chlor: Cl₂ teilt sich ein Paar</span></div>' +
        '</div>' +
        '<button type="button" class="btn btn--primary btn--block" data-explain="lewis">Schritt für Schritt ansehen</button>'
    },
    {
      front: "Oktettregel", cat: "edelgas",
      back:
        '<p class="merksatz">Atome wollen außen 8 Elektronen haben, so wie ein Edelgas. (Wasserstoff: 2)</p>' +
        '<ul class="card-list">' +
          '<li><strong>abgeben</strong>: Metalle wie Natrium → Na⁺</li>' +
          '<li><strong>aufnehmen</strong>: Nichtmetalle wie Chlor → Cl⁻</li>' +
          '<li><strong>teilen</strong>: zwei Nichtmetalle, z. B. Cl–Cl</li>' +
        '</ul>' +
        '<button type="button" class="btn btn--primary btn--block" data-explain="oktettregel">Schritt für Schritt ansehen</button>' +
        '<div class="card-example">' +
          '<div class="card-example__item">' + buildMoleculeSVG({ sym: "O", cat: "nichtmetall" }, 6, "dots") +
            '<span class="card-example__cap">Sauerstoff: O=O</span></div>' +
          '<div class="card-example__item">' + buildMoleculeSVG({ sym: "N", cat: "nichtmetall" }, 5, "dots") +
            '<span class="card-example__cap">Stickstoff: N≡N</span></div>' +
        '</div>'
    }
  ];

  const cardOverlay = document.getElementById("cardOverlay");
  const bigcard = document.getElementById("bigcard");
  const cardTitle = document.getElementById("cardTitle");
  const cardBody = document.getElementById("cardBody");
  const cardClose = document.getElementById("cardClose");

  function openCard(i) {
    const c = FLASHCARDS[i];
    bigcard.dataset.cat = c.cat;
    cardTitle.textContent = c.front;
    cardBody.innerHTML = c.back;
    cardOverlay.hidden = false;
    cardClose.focus();
  }
  function closeCard() { cardOverlay.hidden = true; }

  // Sidebar: Stichwort-Chips (Karteikasten)
  const cardsBox = document.getElementById("cards");
  FLASHCARDS.forEach(function (c, i) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "card-chip";
    chip.dataset.cat = c.cat;
    chip.textContent = c.front;
    chip.addEventListener("click", function () { openCard(i); });
    cardsBox.appendChild(chip);
  });

  cardClose.addEventListener("click", closeCard);
  cardOverlay.addEventListener("click", function (e) {
    if (e.target === cardOverlay) closeCard();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !cardOverlay.hidden) closeCard();
  });

  // ---- Oktettregel: Bindungsmodus (zwei Elemente verbinden) ----
  let bondMode = false;
  let bondFirst = null; // { el, cell }

  const bondbar = document.getElementById("bondbar");
  const bondbarText = document.getElementById("bondbarText");
  const bondOverlay = document.getElementById("bondOverlay");
  const bondTitle = document.getElementById("bondTitle");
  const bondType = document.getElementById("bondType");
  const bondFigs = document.getElementById("bondFigs");
  const bondExplain = document.getElementById("bondExplain");

  function isNonmetalAtom(el) {
    return el.sym === "H" || el.cat === "nichtmetall" || el.cat === "halogen";
  }
  function isChalkogen(el) { return el.group === 16 && el.cat === "nichtmetall"; } // O, S, Se

  // Prüft, ob A und B eine chemisch sinnvolle 1:1-Bindung bilden.
  // Rückgabe: { type: "kovalent" } | { type: "ionisch", metal, nonmetal, q } | null
  function bondBetween(a, b) {
    const va = valenceElectrons(a), vb = valenceElectrons(b);
    if (va === null || vb === null) return null;

    // Kovalent: beide Nichtmetall/H/Halogen, gleiche Bindigkeit 1–3
    if (isNonmetalAtom(a) && isNonmetalAtom(b)) {
      const ba = bondCount(a, va), bb = bondCount(b, vb);
      if (ba === bb && ba >= 1 && ba <= 3) return { type: "kovalent" };
    }
    // Ionisch 1:1: Alkali(+1)+Halogen(−1)  oder  Erdalkali(+2)+Chalkogen(−2)
    function ionic(m, n) {
      if (m.cat === "alkali" && n.cat === "halogen") return { type: "ionisch", metal: m, nonmetal: n, q: 1 };
      if (m.cat === "erdalkali" && isChalkogen(n)) return { type: "ionisch", metal: m, nonmetal: n, q: 2 };
      return null;
    }
    return ionic(a, b) || ionic(b, a);
  }

  // Kann das Element überhaupt eine Bindung beginnen?
  function canStart(el) {
    const ve = valenceElectrons(el);
    if (ve === null) return false;
    if (isNonmetalAtom(el)) { const b = bondCount(el, ve); return b >= 1 && b <= 3; }
    return el.cat === "alkali" || el.cat === "erdalkali";
  }

  // Ionenpaar: Metall (gibt ab) → Nichtmetall-Ion mit vollem Oktett.
  function buildIonicSVG(metal, nonmetal, q) {
    const sup = q === 2 ? { p: "²⁺", m: "²⁻" } : { p: "⁺", m: "⁻" };
    const MX = 70, NX = 175, CY = 70, R = 30, d = 7;
    function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="4"/>'; }
    const octet =
      dot(NX - d, CY - R) + dot(NX + d, CY - R) +
      dot(NX - d, CY + R) + dot(NX + d, CY + R) +
      dot(NX - R, CY - d) + dot(NX - R, CY + d) +
      dot(NX + R, CY - d) + dot(NX + R, CY + d);
    return '<svg viewBox="0 0 240 140" class="lewis__svg lewis__svg--mol">' +
      '<text x="' + MX + '" y="' + CY + '" class="lewis__sym">' + metal.sym + "</text>" +
      '<text x="' + (MX + 28) + '" y="' + (CY - 24) + '" class="ion__charge">' + sup.p + "</text>" +
      '<text x="' + NX + '" y="' + CY + '" class="lewis__sym">' + nonmetal.sym + "</text>" +
      '<text x="' + (NX + 40) + '" y="' + (CY - 24) + '" class="ion__charge">' + sup.m + "</text>" +
      '<g class="lewis__dots">' + octet + "</g>" +
      "</svg>";
  }

  function updateBondSelectable() {
    ELEMENT_CELLS.forEach(function (item) {
      let ok;
      if (!bondFirst) ok = canStart(item.el);
      else if (item.cell === bondFirst.cell) ok = true;      // Re-Klick = abwählen
      else ok = !!bondBetween(bondFirst.el, item.el);
      item.cell.classList.toggle("element--disabled", !ok);
      item.cell.classList.toggle("element--selected", !!bondFirst && item.cell === bondFirst.cell);
    });
  }

  function enterBondMode() {
    bondMode = true;
    bondFirst = null;
    bondbar.hidden = false;
    bondbarText.textContent = "1. Element wählen";
    updateBondSelectable();
  }
  function exitBondMode() {
    bondMode = false;
    bondFirst = null;
    bondbar.hidden = true;
    bondOverlay.hidden = true;
    ELEMENT_CELLS.forEach(function (item) {
      item.cell.classList.remove("element--disabled", "element--selected");
    });
  }

  function showBond(a, b) {
    const info = bondBetween(a, b);
    if (!info) return;
    if (info.type === "ionisch") {
      const m = info.metal, n = info.nonmetal, q = info.q;
      const el = q > 1 ? "Elektronen" : "Elektron";
      const pron = q > 1 ? "sie" : "es";
      bondTitle.textContent = m.sym + " + " + n.sym;
      bondType.textContent = "Ionenbindung";
      bondFigs.innerHTML = '<div class="ionpair">' + buildIonicSVG(m, n, q) + "</div>";
      bondExplain.innerHTML =
        "<strong>" + m.de + "</strong> gibt " + q + " " + el + " ab und wird zum Kation. " +
        "<strong>" + n.de + "</strong> nimmt " + pron + " auf und wird zum Anion. So erreichen beide das Oktett.";
    } else {
      const hi = a.en >= b.en ? a : b;
      bondTitle.textContent = a.sym + " – " + b.sym;
      bondType.textContent = "Elektronenpaarbindung (kovalent)";
      bondFigs.innerHTML =
        '<div class="lewis">' +
          '<div class="lewis__col"><h3 class="lewis__title">Lewis-Schreibweise</h3>' +
            '<div class="lewis__fig">' + buildBondSVG({ el: a, ve: valenceElectrons(a) }, { el: b, ve: valenceElectrons(b) }, "dots") + "</div></div>" +
          '<div class="lewis__col"><h3 class="lewis__title">Valenzstrich-Formel</h3>' +
            '<div class="lewis__fig">' + buildBondSVG({ el: a, ve: valenceElectrons(a) }, { el: b, ve: valenceElectrons(b) }, "lines") + "</div></div>" +
        "</div>";
      bondExplain.innerHTML = (a.sym === b.sym)
        ? "Gleiche Atome teilen sich die Bindungselektronen gleichmäßig (unpolare Bindung)."
        : "Beide teilen sich ein Elektronenpaar. <strong>" + hi.de + "</strong> ist elektronegativer und zieht die Bindungselektronen etwas stärker an (polare Bindung).";
    }
    bondOverlay.hidden = false;
  }

  function selectBondElement(el, cell) {
    if (cell.classList.contains("element--disabled")) return;
    if (bondFirst && cell === bondFirst.cell) {
      // Re-Klick auf das gewählte Element → Auswahl zurücknehmen
      bondFirst = null;
      bondbarText.textContent = "1. Element wählen";
      updateBondSelectable();
    } else if (!bondFirst) {
      bondFirst = { el: el, cell: cell };
      bondbarText.textContent = "2. Element wählen";
      updateBondSelectable();
    } else {
      showBond(bondFirst.el, el);
    }
  }

  function resetBondPick() {
    bondFirst = null;
    bondOverlay.hidden = true;
    bondbarText.textContent = "1. Element wählen";
    updateBondSelectable();
  }

  document.getElementById("bondBtn").addEventListener("click", enterBondMode);
  document.getElementById("bondCancel").addEventListener("click", exitBondMode);
  document.getElementById("bondClose").addEventListener("click", resetBondPick);
  document.getElementById("bondAgain").addEventListener("click", resetBondPick);
  bondOverlay.addEventListener("click", function (e) {
    if (e.target === bondOverlay) bondOverlay.hidden = true;
  });
  // ---- Element-Quiz ----
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

  let quizSet = [], qIdx = 0, quizPts = 0, quizAnswered = false;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function startQuiz() {
    quizSet = shuffle(ALL_QUESTIONS).slice(0, QUIZ_LEN);
    qIdx = 0; quizPts = 0;
    quizResult.hidden = true;
    quizStage.hidden = false;
    quizOverlay.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    quizAnswered = false;
    const item = quizSet[qIdx];
    quizCounter.textContent = "Frage " + (qIdx + 1) + " von " + quizSet.length + "  ·  " + quizPts + " richtig";
    quizPrompt.innerHTML = item.prompt;
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz__feedback";
    quizNext.hidden = true;
    quizOptions.innerHTML = "";
    const opts = shuffle([item.answer].concat(item.wrongs));
    opts.forEach(function (opt) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz__opt";
      btn.textContent = opt;
      btn.addEventListener("click", function () { answerQuiz(opt, btn); });
      quizOptions.appendChild(btn);
    });
  }

  function answerQuiz(opt, btn) {
    if (quizAnswered) return;
    quizAnswered = true;
    const item = quizSet[qIdx];
    const correct = String(item.answer);
    quizOptions.querySelectorAll(".quiz__opt").forEach(function (o) {
      o.classList.add("quiz__opt--locked");
      if (o.textContent === correct) o.classList.add("quiz__opt--correct");
    });
    if (opt === correct) {
      quizPts++;
      quizFeedback.textContent = "Richtig! " + item.note;
      quizFeedback.classList.add("quiz__feedback--ok");
    } else {
      btn.classList.add("quiz__opt--wrong");
      quizFeedback.textContent = "Richtig wäre: " + correct + ". " + item.note;
      quizFeedback.classList.add("quiz__feedback--no");
    }
    quizCounter.textContent = "Frage " + (qIdx + 1) + " von " + quizSet.length + "  ·  " + quizPts + " richtig";
    quizNext.hidden = false;
    quizNext.textContent = (qIdx + 1 < quizSet.length) ? "Weiter" : "Ergebnis";
  }

  function nextQuiz() {
    if (qIdx + 1 < quizSet.length) { qIdx++; renderQuestion(); }
    else {
      quizStage.hidden = true;
      quizResult.hidden = false;
      quizScore.textContent = quizPts + " von " + quizSet.length + " richtig";
      UI.showResult(document.getElementById("hamsterContainer"), quizPts, quizSet.length);
    }
  }
  function closeQuiz() { quizOverlay.hidden = true; }

  ALL_QUESTIONS = QUIZ_PERIODENSYSTEM;

  document.getElementById("quizBtn").addEventListener("click", startQuiz);
  document.getElementById("quizRestart").addEventListener("click", startQuiz);
  quizNext.addEventListener("click", nextQuiz);
  document.getElementById("quizClose").addEventListener("click", closeQuiz);
  quizOverlay.addEventListener("click", function (e) { if (e.target === quizOverlay) closeQuiz(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !quizOverlay.hidden) closeQuiz();
    if (e.key === "Escape" && !bondOverlay.hidden) resetBondPick();
  });

  // ---- Tipp-Hamster ----
  UI.hamsterTips([
    "Die Zeile (Periode) verrät dir, wie viele Elektronenschalen ein Atom hat.",
    "Wie liest man das Periodensystem? Öffne die Lernkarte „Periode & Hauptgruppe“, dann zeige ich es dir Schritt für Schritt.",
    "Bei den Hauptgruppen steckt in der Gruppennummer die Zahl der Außenelektronen: Gruppe I hat 1, Gruppe VII hat 7.",
    "Tippe ein Element an. Dann siehst du auch seine Lewis-Schreibweise.",
    "Was bedeuten die Punkte um ein Symbol? Die Lernkarte „Lewis-Schreibweise“ zeigt es dir Schritt für Schritt.",
    "Mit „Bindung bauen“ verbindest du zwei Elemente und siehst, wie sie das Oktett erreichen.",
    "Warum wollen Atome 8 Außenelektronen? Öffne die lila Lernkarte „Oktettregel“, dann erkläre ich es dir Schritt für Schritt.",
    "Die Edelgase ganz rechts sind schon zufrieden: Ihre Außenschale ist voll.",
    "Fahr mit der Maus über einen Begriff mit gepunkteter Linie, dann bekommst du eine kurze Erklärung."
  ]);
})();
