// Erklärung „Das Periodensystem lesen“ (Periode & Hauptgruppe) für den Erklär-Player (js/explainer.js).
// Mini-Periodensystem + Schalenmodell: Zeile = Anzahl der Schalen, Hauptgruppe = Anzahl der Außenelektronen.
(function () {
  // Farbe einer Stoffgruppe (Variablen aus css/periodensystem.css)
  function catColor(cat) {
    return getComputedStyle(document.documentElement).getPropertyValue("--c-" + cat).trim() || "#94a3b8";
  }
  function elementBySym(sym) { return ELEMENTS.find(function (e) { return e.sym === sym; }); }

  // Außenelektronen der Reihe nach: erst einzeln auf die vier Seiten, dann paarweise (wie bei Lewis)
  const SLOTS = [-90, 0, 90, 180, -45, 45, 135, 225];

  // Lithium, Natrium, Kalium nebeneinander, Beschriftung auf gleicher Höhe
  const ALKALI = [
    { sym: "Li", name: "Lithium", x: 110, shells: [{ n: 2 }, { n: 1, angles: [0] }] },
    { sym: "Na", name: "Natrium", x: 300, shells: [{ n: 2 }, { n: 8 }, { n: 1, angles: [0] }] },
    { sym: "K",  name: "Kalium",  x: 490, shells: [{ n: 2 }, { n: 8 }, { n: 8 }, { n: 1, angles: [0] }] }
  ];
  const ALKALI_Y = 140;
  function makeAlkali(D, a) {
    return D.makeAtom(a.x, ALKALI_Y, { sym: a.sym + "  (" + a.name + ")", color: catColor("alkali"), shells: a.shells, labelR: 76 });
  }

  // Hinweis: Die Klassen .note/.count setzen text-anchor per CSS. Andere Ausrichtung deshalb per style="text-anchor: …".
  const SCENES = [
    {
      title: "Zeilen heißen Perioden",
      text: "<p>Das Periodensystem hat <b>7 Zeilen</b>. Jede Zeile heißt <b>Periode</b>.</p>" +
            "<p>Gelesen wird wie in einem Buch: von links nach rechts, Zeile für Zeile. " +
            "Jedes Element hat ein Proton mehr als das Element davor.</p>",
      run: async function (D) {
        const T = D.miniTable({ y: 52 });
        const labels = T.rowLabels();
        for (let p = 1; p <= 7; p++) {
          T.mark(function (c) { return c.period === p; }, "row");
          D.fadeIn(labels[p - 1], 300);
          await D.wait(650);
        }
        T.mark(function () { return false; }, "row");
        D.fadeIn(D.txt("Lesen wie ein Buch: von links nach rechts, Zeile für Zeile", { class: "note", x: 300, y: 312, opacity: 0 }));
        D.calm();
      }
    },
    {
      title: "Periode = Anzahl der Schalen",
      text: "<p><b>Lithium</b>, <b>Natrium</b> und <b>Kalium</b> stehen untereinander, in den Perioden 2, 3 und 4.</p>" +
            "<p>Mit jeder Periode kommt <b>eine Schale dazu</b>: Lithium hat 2 Schalen, Natrium 3 und Kalium 4.</p>" +
            "<p class=\"hint\">Die Nummer der Periode verrät dir also, wie viele Schalen ein Atom hat.</p>",
      run: async function (D) {
        for (let i = 0; i < ALKALI.length; i++) {
          const a = ALKALI[i];
          const tag = D.txt("Periode " + (i + 2), { class: "note small", x: a.x, y: 30, opacity: 0 });
          D.fadeIn(tag);
          const A = makeAlkali(D, a);
          await D.buildAtom(A, true);
          A.setCount((i + 2) + " Schalen", true);
          await D.wait(300);
        }
        D.cheer();
      }
    },
    {
      title: "Spalten heißen Gruppen",
      text: "<p>Die senkrechten Spalten heißen <b>Gruppen</b>.</p>" +
            "<p>Wichtig sind die <b>8 Hauptgruppen</b>, nummeriert mit I bis VIII. " +
            "Die schmalen Spalten in der Mitte heißen <b>Nebengruppen</b>. Um die geht es hier nicht.</p>",
      run: async function (D) {
        const T = D.miniTable({ y: 52 });
        const labels = T.groupLabels();
        T.mark(function (c) { return !c.main; }, "dim");
        const MAIN = [1, 2, 13, 14, 15, 16, 17, 18];
        for (let i = 0; i < MAIN.length; i++) {
          const gr = MAIN[i];
          T.mark(function (c) { return c.main && MAIN.indexOf(c.group) <= i; }, "col");
          D.fadeIn(labels[i], 300);
          await D.wait(450);
        }
        D.fadeIn(D.txt("Hauptgruppen I bis VIII · in der Mitte die Nebengruppen", { class: "note", x: 300, y: 312, opacity: 0 }));
        D.calm();
      }
    },
    {
      title: "Hauptgruppe = Außenelektronen",
      text: "<p>Wir gehen die <b>2. Periode</b> von links nach rechts durch. Mit jedem Schritt kommt <b>ein Außenelektron dazu</b>.</p>" +
            "<p>Lithium in Hauptgruppe I hat 1 Außenelektron, Kohlenstoff in Hauptgruppe IV hat 4, Neon in Hauptgruppe VIII hat 8.</p>" +
            "<p class=\"hint\">Die Nummer der Hauptgruppe verrät dir, wie viele Elektronen auf der äußersten Schale sitzen.</p>",
      run: async function (D) {
        const row = ELEMENTS.filter(function (e) { return e.period === 2; }).sort(function (a, b) { return a.z - b.z; });
        const ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
        const w = 48, gap = 8, x0 = (600 - (8 * w + 7 * gap)) / 2, y0 = 18;
        const cells = row.map(function (e, i) {
          const g = D.el("g", { class: "pt", "data-cat": e.cat, transform: "translate(" + (x0 + i * (w + gap)) + " " + y0 + ")" });
          D.el("rect", { width: w, height: w, rx: 7 }, g);
          D.txt(e.sym, { x: w / 2, y: w / 2 + 1, class: "pt-sym", style: "font-size: 16px" }, g);
          D.txt(ROM[i], { x: w / 2, y: w + 14, class: "pt-label" }, g);
          return g;
        });
        let A = null;
        for (let k = 1; k <= 8; k++) {
          const e = row[k - 1];
          cells.forEach(function (g, i) { g.classList.toggle("on", i < k - 1); g.classList.toggle("hot", i === k - 1); });
          if (A) A.g.remove();
          A = D.makeAtom(300, 172, { sym: e.sym + "  (" + e.de + ")", color: catColor(e.cat),
            shells: [{ n: 2 }, { n: k, angles: SLOTS.slice(0, k) }] });
          if (k === 1) await D.buildAtom(A, true);
          else {
            D.showAll(A);
            const newest = A.es[1][k - 1];
            newest.setAttribute("r", 0);
            await D.popElectron(newest);
          }
          D.markOuter(A, 1);
          A.setCount("Hauptgruppe " + ROM[k - 1] + ": " + k + (k === 1 ? " Außenelektron" : " Außenelektronen"), k === 8);
          if (k === 8) { A.face("happy"); D.sparkle(300, 172, 52); D.cheer(); }
          await D.wait(k === 1 ? 1300 : 1050);
        }
      }
    },
    {
      title: "Eine Gruppe ist eine Familie",
      text: "<p>Lithium, Natrium und Kalium haben verschieden viele Schalen, aber alle <b>genau 1 Außenelektron</b>.</p>" +
            "<p>Beim Reagieren kommt es auf die Außenelektronen an. Darum verhalten sich Elemente einer Gruppe <b>ähnlich</b>, wie Geschwister. " +
            "Diese drei sind <b>Alkalimetalle</b>: Sie geben ihr einzelnes Außenelektron sehr gern ab.</p>",
      run: async function (D) {
        const atoms = ALKALI.map(function (a) {
          const A = makeAlkali(D, a);
          D.showAll(A);
          D.markOuter(A, a.shells.length - 1);
          A.setCount("1 Außenelektron", true);
          return A;
        });
        D.fadeIn(D.txt("Hauptgruppe I: die Alkalimetalle", { class: "note", x: 300, y: 312, opacity: 0 }));
        await D.wait(500);
        for (let i = 0; i < 3; i++) {   // das eine Außenelektron pulsiert bei allen dreien
          await D.tween(700, function (t) {
            const r = 5 + 3 * Math.sin(Math.PI * t);
            atoms.forEach(function (A) { A.es[A.es.length - 1][0].setAttribute("r", r); });
          });
          await D.wait(250);
        }
        D.cheer();
      }
    },
    {
      title: "Merksatz",
      text: "<p><b>Periode (Zeile) = Anzahl der Schalen</b></p>" +
            "<p><b>Hauptgruppe (Spalte) = Anzahl der Außenelektronen</b></p>" +
            "<p>Beispiel Chlor: Periode 3, also 3 Schalen. Hauptgruppe VII, also 7 Außenelektronen.</p>" +
            "<p class=\"hint\">Ausnahme Helium: Es hat nur 2 Außenelektronen, steht aber in Hauptgruppe VIII. " +
            "Seine einzige Schale ist mit 2 schon voll, wie bei den anderen Edelgasen.</p>",
      run: async function (D) {
        const T = D.miniTable({ cell: 14, gap: 2, y: 26, symbols: false });
        const cl = T.cellAt("Cl");
        const rowY = T.y0 + 2 * T.pitch + T.cell / 2 + 1;
        const colX = cl.x + T.cell / 2;
        T.mark(function (c) { return c.period === 3; }, "row");
        await D.fadeIn(D.txt("Periode 3", { class: "note small", x: T.x0 - 10, y: rowY, style: "fill: var(--pt-row); text-anchor: end; dominant-baseline: central", opacity: 0 }));
        await D.wait(500);
        T.mark(function (c) { return c.group === 17; }, "col");
        await D.fadeIn(D.txt("Hauptgruppe VII", { class: "note small", x: colX, y: 14, style: "fill: var(--pt-col)", opacity: 0 }));
        await D.wait(600);
        const A = D.makeAtom(170, 232, { sym: "Cl  (Chlor)", color: catColor("halogen"), shells: [{ n: 2 }, { n: 8 }, { n: 7 }] });
        await D.buildAtom(A, true);
        D.markOuter(A, 2);
        const l1 = D.txt("Periode 3  →  3 Schalen", { class: "note", x: 268, y: 218, style: "fill: var(--pt-row); font-weight: 700; text-anchor: start", opacity: 0 });
        const l2 = D.txt("Hauptgruppe VII  →  7 Außenelektronen", { class: "note", x: 268, y: 252, style: "fill: var(--pt-col); font-weight: 700; text-anchor: start", opacity: 0 });
        await D.fadeIn(l1);
        await D.fadeIn(l2);
        D.cheer();
      }
    }
  ];

  Explainer.register("perioden", {
    title: "Das Periodensystem lesen",
    short: "Periodensystem lesen",
    subtitle: "Periode und Hauptgruppe, Schritt für Schritt",
    next: "lewis",          // wird aktiv, sobald die Lewis-Erklärung angemeldet ist
    scenes: SCENES
  });
})();
