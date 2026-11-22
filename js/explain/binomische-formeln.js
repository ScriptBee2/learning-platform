// Erklärung „Binomische Formeln" für den Erklär-Player (js/explainer.js).
// Geometrische Herleitung aller drei Formeln mit animierten Flächen.
(function () {

  // ---- gemeinsame Helfer ----

  // Farbige Fläche mit Label, blendet sich ein
  function rect(D, x, y, w, h, fill, label, labelX, labelY) {
    const g = D.el("g", { opacity: 0 });
    D.el("rect", { x: x, y: y, width: w, height: h, rx: 4,
      fill: fill, stroke: "none" }, g);
    if (label) {
      D.txt(label, { x: labelX != null ? labelX : x + w / 2,
                     y: labelY != null ? labelY : y + h / 2,
                     "text-anchor": "middle", "dominant-baseline": "central",
                     class: "note", fill: "#1e293b", style: "font-weight:700;font-size:17px" }, g);
    }
    return g;
  }

  function fadeRect(D, g, ms) { return D.fadeIn(g, ms || 480); }

  // Bemaßungslinie: waagerecht oder senkrecht, mit Pfeilspitzen und Beschriftung
  function dim(D, x1, y1, x2, y2, label, offset) {
    offset = offset || 18;
    const horiz = y1 === y2;
    const ox = horiz ? 0 : offset, oy = horiz ? -offset : 0;
    const g = D.el("g", { opacity: 0 });
    const mx = (x1 + x2) / 2 + ox, my = (y1 + y2) / 2 + oy;
    D.el("line", { x1: x1 + ox, y1: y1 + oy, x2: x2 + ox, y2: y2 + oy,
      stroke: "#94a3b8", "stroke-width": 1.5 }, g);
    D.txt(label, { x: mx + (horiz ? 0 : 7), y: my,
      "text-anchor": horiz ? "middle" : "start", "dominant-baseline": "central",
      class: "note small" }, g);
    return g;
  }

  // ---- Farben ----
  var C = {
    a2:   "rgba(96,165,250,0.82)",   // a²  blau
    ab:   "rgba(251,191,36,0.75)",   // ab  gelb
    b2:   "rgba(74,222,128,0.70)",   // b²  grün
    abN:  "rgba(248,113,113,0.72)",  // ab  (Minus-Version) rot
    b2N:  "rgba(249,115,22,0.68)"    // b²  (Minus-Version) orange
  };

  // ================================================================ Szene 1 – Deine drei Werkzeuge
  async function scene1(D) {
    var rows = [
      { y: 85,  accent: "var(--blue)",  nr: "1", tex: "(a + b)²  =  a² + 2ab + b²", tag: "zum Ausmultiplizieren" },
      { y: 165, accent: "var(--red)",   nr: "2", tex: "(a − b)²  =  a² − 2ab + b²", tag: "mit Minus in der Klammer" },
      { y: 245, accent: "var(--green)", nr: "3", tex: "(a + b)(a − b)  =  a² − b²", tag: "zum Faktorisieren" }
    ];
    var circles = [];
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      var g = D.el("g", {});
      g.style.setProperty("--accent", r.accent);
      var disc = D.el("circle", { cx: 70, cy: r.y, r: 26, fill: r.accent });
      disc.setAttribute("transform", "translate(70 " + r.y + ") scale(0) translate(-70 " + (-r.y) + ")");
      g.appendChild(disc);
      var nr = D.txt(r.nr, { x: 70, y: r.y + 1, class: "area-label area-label--nr" }, g);
      var formula = D.txt(r.tex, { x: 112, y: r.y - 7, class: "formula", opacity: 0 }, g);
      var tag = D.txt(r.tag, { x: 112, y: r.y + 17, class: "formula-tag", opacity: 0 }, g);
      circles.push({ cx: 70, cy: r.y });
      await D.tween(420, function (t) {
        disc.setAttribute("transform",
          "translate(70 " + r.y + ") scale(" + t + ") translate(-70 " + (-r.y) + ")");
        nr.setAttribute("opacity", t);
      }, D.ease.back);
      D.fadeIn(formula, 380);
      await D.fadeIn(tag, 380);
      await D.wait(160);
    }
    await D.wait(200);
    circles.forEach(function (c) { D.sparkle(c.cx, c.cy, 26); });
    D.cheer();
  }

  // ================================================================ Szene 2 – 1. Formel geometrisch
  async function scene2(D) {
    // Quadrat (a+b)×(a+b), zerlegt in a², ab, ab, b²
    const x0 = 110, y0 = 30, a = 140, b = 70;
    const W = a + b, H = a + b;

    // äußerer Rahmen
    const frame = D.el("rect", { x: x0, y: y0, width: W, height: H, rx: 6,
      fill: "none", stroke: "#475569", "stroke-width": 2, opacity: 0 });
    await D.fadeIn(frame, 400);

    // Trennlinien
    const lv = D.el("line", { x1: x0 + a, y1: y0, x2: x0 + a, y2: y0 + H,
      stroke: "#64748b", "stroke-width": 1.6, "stroke-dasharray": "5 4", opacity: 0 });
    const lh = D.el("line", { x1: x0, y1: y0 + a, x2: x0 + W, y2: y0 + a,
      stroke: "#64748b", "stroke-width": 1.6, "stroke-dasharray": "5 4", opacity: 0 });
    await Promise.all([D.fadeIn(lv, 350), D.fadeIn(lh, 350)]);

    // Bemaßung oben: a und b
    const da = dim(D, x0, y0, x0 + a, y0, "a", -22);
    const db = dim(D, x0 + a, y0, x0 + W, y0, "b", -22);
    await Promise.all([D.fadeIn(da, 300), D.fadeIn(db, 300)]);

    // 4 Felder nacheinander einblenden
    const rA2 = rect(D, x0, y0, a, a, C.a2, "a²");
    await fadeRect(D, rA2);
    await D.wait(200);

    const rAB1 = rect(D, x0 + a, y0, b, a, C.ab, "ab");
    await fadeRect(D, rAB1);
    await D.wait(200);

    const rAB2 = rect(D, x0, y0 + a, a, b, C.ab, "ab");
    await fadeRect(D, rAB2);
    await D.wait(200);

    const rB2 = rect(D, x0 + a, y0 + a, b, b, C.b2, "b²");
    await fadeRect(D, rB2);
    await D.wait(600);

    // Summe einblenden
    const sum = D.txt("a² + ab + ab + b²  =  a² + 2ab + b²",
      { x: 300, y: 295, "text-anchor": "middle", class: "note",
        style: "font-weight:700;font-size:17px", opacity: 0 });
    await D.fadeIn(sum, 500);
    D.cheer();
  }

  // ================================================================ Szene 3 – 2. Formel geometrisch
  async function scene3(D) {
    const x0 = 130, y0 = 30, a = 150, b = 60;
    const W = a, H = a;

    // Großes a×a-Quadrat
    const frame = D.el("rect", { x: x0, y: y0, width: W, height: H, rx: 6,
      fill: "none", stroke: "#475569", "stroke-width": 2, opacity: 0 });
    await D.fadeIn(frame, 400);

    // Trennlinien bei (a-b)
    const lv = D.el("line", { x1: x0 + a - b, y1: y0, x2: x0 + a - b, y2: y0 + H,
      stroke: "#64748b", "stroke-width": 1.6, "stroke-dasharray": "5 4", opacity: 0 });
    const lh = D.el("line", { x1: x0, y1: y0 + a - b, x2: x0 + W, y2: y0 + a - b,
      stroke: "#64748b", "stroke-width": 1.6, "stroke-dasharray": "5 4", opacity: 0 });
    await Promise.all([D.fadeIn(lv, 350), D.fadeIn(lh, 350)]);

    // Bemaßung
    var d1 = dim(D, x0, y0, x0 + a - b, y0, "a−b", -22);
    var d2 = dim(D, x0 + a - b, y0, x0 + a, y0, "b", -22);
    await Promise.all([D.fadeIn(d1, 300), D.fadeIn(d2, 300)]);

    // (a-b)² – das bleibt
    const rCore = rect(D, x0, y0, a - b, a - b, C.a2, "(a−b)²");
    await fadeRect(D, rCore);
    await D.wait(200);

    // Die beiden ab-Streifen (werden abgezogen)
    const rS1 = rect(D, x0 + a - b, y0, b, a - b, C.abN, "−ab");
    const rS2 = rect(D, x0, y0 + a - b, a - b, b, C.abN, "−ab");
    await Promise.all([fadeRect(D, rS1), fadeRect(D, rS2)]);
    await D.wait(200);

    // Die b²-Ecke (doppelt abgezogen, muss einmal zurück → wird hier sichtbar)
    const rB2 = rect(D, x0 + a - b, y0 + a - b, b, b, C.b2N, "+b²");
    await fadeRect(D, rB2);
    await D.wait(600);

    const sum = D.txt("a² − 2ab + b²  =  (a − b)²",
      { x: 300, y: 295, "text-anchor": "middle", class: "note",
        style: "font-weight:700;font-size:17px", opacity: 0 });
    await D.fadeIn(sum, 500);
    D.cheer();
  }

  // ================================================================ Szene 4 – 3. Formel geometrisch
  async function scene4(D) {
    // Rechteck (a+b)×(a-b), das wir zum Gnomon umbauen
    const x0 = 90, y0 = 20, a = 160, b = 60;

    // Schritt 1: a×a-Quadrat zeigen
    const bigSq = D.el("rect", { x: x0, y: y0, width: a, height: a, rx: 6,
      fill: "none", stroke: "#475569", "stroke-width": 2, opacity: 0 });
    const lA2 = D.txt("a²", { x: x0 + a / 2, y: y0 + a / 2 - 10,
      "text-anchor": "middle", "dominant-baseline": "central", class: "note",
      style: "font-size:20px;font-weight:800", opacity: 0 });
    await D.fadeIn(bigSq, 400);
    await D.fadeIn(lA2, 300);
    await D.wait(500);

    // b²-Ecke hervorheben (soll weg)
    const rB2 = rect(D, x0 + a - b, y0 + a - b, b, b, C.b2N, "−b²");
    rB2.setAttribute("opacity", 1);
    await D.wait(400);

    // Trennlinie
    const lv = D.el("line", { x1: x0 + a - b, y1: y0, x2: x0 + a - b, y2: y0 + a,
      stroke: "#64748b", "stroke-width": 1.5, "stroke-dasharray": "5 4", opacity: 0 });
    const lh = D.el("line", { x1: x0, y1: y0 + a - b, x2: x0 + a, y2: y0 + a - b,
      stroke: "#64748b", "stroke-width": 1.5, "stroke-dasharray": "5 4", opacity: 0 });
    await Promise.all([D.fadeIn(lv, 350), D.fadeIn(lh, 350)]);

    // b²-Ecke rausschneiden: fade out
    await D.tween(600, function (t) { rB2.setAttribute("opacity", 1 - t); });
    await D.wait(300);

    // Ergebnis: ein Rechteck (a-b)×a links + ein Streifen b×(a-b) oben rechts
    // Bemaßung zeigen
    var dAB = dim(D, x0, y0, x0 + a - b, y0, "a−b", -24);
    var dB  = dim(D, x0 + a - b, y0, x0 + a, y0, "b", -24);
    var dA  = dim(D, x0, y0, x0, y0 + a, "a", -28);
    await Promise.all([D.fadeIn(dAB, 300), D.fadeIn(dB, 300), D.fadeIn(dA, 300)]);
    await D.wait(600);

    // linkes Teilrechteck: (a-b) × a
    const rL = rect(D, x0, y0, a - b, a, C.a2, "(a−b)·a");
    await fadeRect(D, rL, 400);
    await D.wait(300);

    // oberes rechtes Teilrechteck: b × (a-b)
    const rR = rect(D, x0 + a - b, y0, b, a - b, C.ab, "b·(a−b)");
    await fadeRect(D, rR, 400);
    await D.wait(500);

    // Zusammenfassen → (a-b)(a+b)
    const sumLine = D.txt("(a + b)(a − b)  =  a² − b²",
      { x: 300, y: 300, "text-anchor": "middle", class: "note",
        style: "font-weight:700;font-size:17px", opacity: 0 });
    await D.fadeIn(sumLine, 500);
    D.cheer();
  }

  // ================================================================ Szene 5 – Mit Zahlen prüfen
  async function scene5(D) {
    var headL = D.txt("Direkt ausrechnen", { x: 150, y: 50, class: "col-head", opacity: 0 });
    var headR = D.txt("Mit der Formel",    { x: 450, y: 50, class: "col-head", opacity: 0 });
    var sep = D.el("line", { x1: 300, y1: 70, x2: 300, y2: 250, class: "sep", opacity: 0 });
    await Promise.all([D.fadeIn(headL, 300), D.fadeIn(headR, 300), D.fadeIn(sep, 300)]);
    await D.wait(200);

    var left  = [{ y: 115, t: "(3 + 4)²" }, { y: 165, t: "= 7²" }, { y: 215, t: "= 49" }];
    var right = [{ y: 115, t: "3² + 2·3·4 + 4²" }, { y: 165, t: "= 9 + 24 + 16" }, { y: 215, t: "= 49" }];

    for (var i = 0; i < left.length; i++) {
      var last = i === left.length - 1;
      var cls = last ? "num-result" : "num-step";
      var tL = D.txt(left[i].t,  { x: 150, y: left[i].y,  class: cls, opacity: 0 });
      var tR = D.txt(right[i].t, { x: 450, y: right[i].y, class: cls, opacity: 0 });
      await Promise.all([D.fadeIn(tL, 380), D.fadeIn(tR, 380)]);
      await D.wait(220);
    }

    var eq = D.txt("=", { x: 300, y: 215, class: "num-eq",
      transform: "translate(300 215) scale(0) translate(-300 -215)" });
    await D.tween(460, function (t) {
      eq.setAttribute("transform",
        "translate(300 215) scale(" + t + ") translate(-300 -215)");
    }, D.ease.back);
    await D.wait(200);

    var done = D.txt("Beide Wege führen zu 49 ✓", { x: 300, y: 288, class: "num-done", opacity: 0 });
    await D.fadeIn(done, 450);
    D.sparkle(300, 215, 30);
    D.cheer();
  }

  // ================================================================ Registrierung
  Explainer.register("binomische-formeln", {
    title: "Binomische Formeln",
    short: "Binomische Formeln",
    subtitle: "Geometrisch erklärt, Schritt für Schritt",
    scenes: [
      {
        title: "Deine drei Werkzeuge",
        text: '<p>Es gibt <b>drei binomische Formeln</b>. Stell sie dir wie <b>drei Werkzeuge</b> vor, die du immer wieder brauchst.</p>' +
              '<p>Mit ihnen rechnest du Klammern blitzschnell aus – und erkennst umgekehrt, wie du einen Term wieder <b>in Klammern zerlegst</b>.</p>' +
              '<p class="hint">Die nächsten Schritte zeigen, <b>warum</b> jede Formel stimmt – mit Flächen statt nur Buchstaben.</p>',
        run: scene1
      },
      {
        title: "1. Formel: (a + b)²",
        text: '<p>Stell dir ein Quadrat mit Seitenlänge <b>(a + b)</b> vor. ' +
              'Wenn du es durch eine waagerechte und eine senkrechte Linie teilst, entstehen <b>4 Felder</b>.</p>' +
              '<p>① oben links: <b>a²</b><br>' +
              '② oben rechts: <b>ab</b><br>' +
              '③ unten links: <b>ab</b><br>' +
              '④ unten rechts: <b>b²</b></p>' +
              '<p>Die Gesamtfläche ist also <b>a² + 2ab + b²</b>.</p>',
        run: scene2
      },
      {
        title: "2. Formel: (a − b)²",
        text: '<p>Jetzt nehmen wir ein a×a-Quadrat und <b>schneiden aus der Ecke ein b×b-Stück heraus</b>.</p>' +
              '<p>Was bleibt? Ein unregelmäßiges Stück, das wir in <b>drei Teile</b> zerlegen:</p>' +
              '<p>① das <b>(a−b)²</b>-Stück (blau)<br>' +
              '② zwei Streifen à <b>ab</b> (rot, werden abgezogen)<br>' +
              '③ die b²-Ecke zählt doppelt abgezogen → einmal zurück (+b²)</p>' +
              '<p>Ergebnis: <b>a² − 2ab + b²</b>.</p>' +
              '<p class="hint">Das <b>+b²</b> am Ende überrascht viele. Es kommt daher, dass die b²-Ecke sonst doppelt wegfällt.</p>',
        run: scene3
      },
      {
        title: "3. Formel: (a + b)(a − b)",
        text: '<p>Wieder ein a×a-Quadrat. Diesmal schneiden wir die <b>b×b-Ecke</b> unten rechts weg.</p>' +
              '<p>Das verbleibende Stück hat Fläche <b>a² − b²</b>.</p>' +
              '<p>Es lässt sich als Rechteck umformen: ' +
              '<b>(a − b) × a</b> plus ein Streifen <b>b × (a − b)</b> = <b>(a − b)(a + b)</b>.</p>' +
              '<p class="hint">Deswegen hebt sich immer der mittlere Term auf: '+
              'das <b>+ab</b> und das <b>−ab</b> beim Ausmultiplizieren verschwinden.</p>',
        run: scene4
      },
      {
        title: "Mit Zahlen prüfen",
        text: '<p>Glaubst du den Formeln nicht? Dann rechne nach! Wir setzen <b>a = 3</b> und <b>b = 4</b> ein.</p>' +
              '<p><b>Direkt:</b> 3 + 4 = 7, und 7² = 49.<br>' +
              '<b>Mit der Formel:</b> 3² + 2·3·4 + 4² = 9 + 24 + 16 = 49.</p>' +
              '<p>Beide Wege liefern <b>49</b>. Die Formel stimmt also wirklich.</p>' +
              '<p class="hint">Merke: Bei (a − b)² ist nur der <b>mittlere Term negativ</b> (−2ab) – das <b>+b²</b> am Ende bleibt plus.</p>',
        run: scene5
      }
    ]
  });
})();
