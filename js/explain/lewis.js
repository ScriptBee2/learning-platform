// Erklärung „Lewis-Schreibweise“ für den Erklär-Player (js/explainer.js).
// Vom Schalenmodell zum Symbol mit Punkten. Die Valenzstrich-Formel kommt erst am Ende, ausdrücklich als Kurzschrift.
(function () {
  function catColor(cat) {
    return getComputedStyle(document.documentElement).getPropertyValue("--c-" + cat).trim() || "#94a3b8";
  }
  const SLOTS = [-90, 0, 90, 180, -45, 45, 135, 225];   // gleiche Reihenfolge wie bei Lewis: erst einzeln, dann Paare
  const ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  // ---------- Lewis-Atome mit frei beweglichen Punkten (für Bindungen) ----------
  const SIDE = { top: [0, -1], right: [1, 0], bottom: [0, 1], left: [-1, 0] };
  function sideOffsets(side, k, R, d) {
    const sx = SIDE[side][0], sy = SIDE[side][1];
    if (k === 1) return [[sx * R, sy * R]];
    return sx === 0 ? [[-d, sy * R], [d, sy * R]] : [[sx * R, -d], [sx * R, d]];
  }
  // spec: [{ side: "top"|"right"|"bottom"|"left", kind: "pair"|"single" }]
  function latom(D, x, y, sym, spec, o) {
    o = o || {};
    const R = o.R || 30, d = o.d || 8;
    const A = { x: x, y: y, R: R, dots: [], singles: [], pairs: [],
      sym: D.txt(sym, { class: "lsym", x: x, y: y, style: "font-size: " + (o.size || 38) + "px" }) };
    spec.forEach(function (s) {
      const dots = sideOffsets(s.side, s.kind === "pair" ? 2 : 1, R, d).map(function (off) {
        const c = D.el("circle", { cx: x + off[0], cy: y + off[1], r: 5, class: "e" });
        c._off = off;
        A.dots.push(c);
        return c;
      });
      (s.kind === "pair" ? A.pairs : A.singles).push({ side: s.side, dots: dots });
    });
    A.moveTo = function (nx, ny) {
      A.x = nx; A.y = ny;
      A.sym.setAttribute("x", nx); A.sym.setAttribute("y", ny);
      A.dots.forEach(function (c) {
        if (!c._free) { c.setAttribute("cx", nx + c._off[0]); c.setAttribute("cy", ny + c._off[1]); }
      });
    };
    A.single = function (side) { return A.singles.find(function (s) { return s.side === side; }).dots[0]; };
    A.fade = function (op) { A.sym.setAttribute("opacity", op); A.dots.forEach(function (c) { c.setAttribute("opacity", op); }); };
    return A;
  }
  function moveAtoms(D, list, ms) {          // list: [{ A, x, y }]
    const from = list.map(function (m) { return [m.A.x, m.A.y]; });
    return D.tween(ms || 1000, function (t) {
      list.forEach(function (m, i) { m.A.moveTo(from[i][0] + (m.x - from[i][0]) * t, from[i][1] + (m.y - from[i][1]) * t); });
    });
  }
  function glide(D, dots, targets, ms) {     // Punkte zu festen Zielen gleiten lassen (gehören danach keinem Atom mehr)
    const from = dots.map(function (c) { c._free = true; return [+c.getAttribute("cx"), +c.getAttribute("cy")]; });
    return D.tween(ms || 700, function (t) {
      dots.forEach(function (c, i) {
        c.setAttribute("cx", from[i][0] + (targets[i][0] - from[i][0]) * t);
        c.setAttribute("cy", from[i][1] + (targets[i][1] - from[i][1]) * t);
      });
    });
  }
  function pairMark(D, cx, cy, vertical) {   // gestrichelte Ellipse um ein Bindungspaar
    const e = D.el("ellipse", { cx: cx, cy: cy, rx: vertical ? 11 : 19, ry: vertical ? 19 : 11, class: "pair", opacity: 0 });
    D.svg.insertBefore(e, D.svg.firstChild);
    return D.fadeIn(e);
  }
  function glowPulse(D, dots, times) {       // einzelne Punkte leuchten und pulsieren
    dots.forEach(function (c) { c.classList.add("glow"); });
    let p = Promise.resolve();
    for (let i = 0; i < (times || 2); i++) {
      p = p.then(function () {
        return D.tween(600, function (t) { dots.forEach(function (c) { c.setAttribute("r", 5 + 2.5 * Math.sin(Math.PI * t)); }); });
      });
    }
    return p;
  }

  // Cl₂ in Lewis-Schreibweise (fertig gebunden), Mitte bei x = 300
  function cl2(D, y) {
    const L = latom(D, 252, y, "Cl", [{ side: "top", kind: "pair" }, { side: "left", kind: "pair" }, { side: "bottom", kind: "pair" }]);
    const Rr = latom(D, 348, y, "Cl", [{ side: "top", kind: "pair" }, { side: "right", kind: "pair" }, { side: "bottom", kind: "pair" }]);
    const bond = [D.el("circle", { cx: 300, cy: y - 8, r: 5, class: "e" }), D.el("circle", { cx: 300, cy: y + 8, r: 5, class: "e" })];
    return { L: L, R: Rr, bond: bond };
  }

  const SCENES = [
    {
      title: "Nur die Außenschale zählt",
      text: "<p>Hier siehst du <b>Stickstoff</b> im Schalenmodell: innen 2 Elektronen, außen <b>5</b>.</p>" +
            "<p>Wenn sich Atome verbinden, machen nur die <b>Außenelektronen</b> mit. Die inneren Elektronen schauen nur zu.</p>" +
            "<p class=\"hint\">Darum lässt man sie in der Lewis-Schreibweise einfach weg.</p>",
      run: async function (D) {
        const A = D.makeAtom(300, 150, { sym: "N  (Stickstoff)", color: catColor("nichtmetall"),
          shells: [{ n: 2 }, { n: 5, angles: SLOTS.slice(0, 5) }] });
        await D.buildAtom(A);
        D.markOuter(A, 1);
        A.setCount("5 Außenelektronen", true);
        await D.wait(900);
        await D.tween(900, function (t) {
          const op = 1 - 0.8 * t;
          A.rings[0].el.setAttribute("opacity", op);
          A.es[0].forEach(function (e) { e.setAttribute("opacity", op); });
        });
        D.fadeIn(D.txt("Die inneren Elektronen machen bei Bindungen nicht mit", { class: "note small", x: 300, y: 34, opacity: 0 }));
        D.calm();
      }
    },
    {
      title: "Aus dem Atom wird ein Symbol",
      text: "<p>Jetzt wird es einfacher: Kern und innere Schale ersetzt das <b>Elementsymbol</b> N.</p>" +
            "<p>Die 5 Außenelektronen setzt du als <b>Punkte</b> rund um das Symbol, auf <b>vier Seiten</b>: oben, rechts, unten, links.</p>" +
            "<p class=\"hint\">Das ist die Lewis-Schreibweise: Symbol plus Außenelektronen als Punkte.</p>",
      run: async function (D) {
        const A = D.makeAtom(300, 160, { sym: "N", color: catColor("nichtmetall"), shells: [{ n: 2 }, { n: 5, angles: SLOTS.slice(0, 5) }] });
        D.showAll(A);
        D.markOuter(A, 1);
        A.sym.setAttribute("opacity", 0);
        A.rings[0].el.setAttribute("opacity", 0.2);
        A.es[0].forEach(function (e) { e.setAttribute("opacity", 0.2); });
        await D.wait(800);
        const S = D.txt("N", { class: "lsym", x: 300, y: 160, style: "font-size: 56px", opacity: 0 });
        const outer = A.es[1];
        const R = 42, d = 10;
        const from = outer.map(function (e) { return [+e.getAttribute("cx"), +e.getAttribute("cy")]; });
        const to = outer.map(function (e, i) { return D.lewisPos(i, 5, R, d); });
        await D.tween(1400, function (t) {
          A.core.setAttribute("opacity", 1 - t);
          A.rings[0].el.setAttribute("opacity", 0.2 * (1 - t));
          A.rings[1].el.setAttribute("opacity", 1 - t);
          A.es[0].forEach(function (e) { e.setAttribute("opacity", 0.2 * (1 - t)); });
          S.setAttribute("opacity", t);
          outer.forEach(function (e, i) {
            e.setAttribute("cx", from[i][0] + (to[i][0] - from[i][0]) * t);
            e.setAttribute("cy", from[i][1] + (to[i][1] - from[i][1]) * t);
          });
        });
        const sides = ["oben", "rechts", "unten", "links"];
        for (let i = 0; i < 4; i++) {
          const p = D.lewisPos(i, 5, 74, 0);
          D.fadeIn(D.txt(sides[i], { class: "note small", x: 300 + p[0], y: 165 + p[1], opacity: 0 }), 300);
          await D.wait(250);
        }
        D.fadeIn(D.txt("Stickstoff in Lewis-Schreibweise", { class: "note", x: 300, y: 300, opacity: 0 }));
        D.cheer();
      }
    },
    {
      title: "Erst einzeln, dann paarweise",
      text: "<p>Die Punkte kommen in einer festen Reihenfolge: <b>erst einer auf jede Seite</b>. Erst danach bekommt eine Seite einen zweiten Punkt.</p>" +
            "<p>So hat jede Seite höchstens 2 Punkte. Bei 8 Außenelektronen ist rundum alles voll.</p>" +
            "<p class=\"hint\">Wie viele Punkte ein Element hat, verrät die Hauptgruppe: Gruppe I hat 1, Gruppe VIII hat 8.</p>",
      run: async function (D) {
        const row = ELEMENTS.filter(function (e) { return e.period === 2; }).sort(function (a, b) { return a.z - b.z; });
        const L = D.lewis(300, 172, "Li", 0, { R: 44, d: 10, size: 58 });
        const name = D.txt("", { class: "sym", x: 300, y: 250 });
        const count = D.txt("", { class: "count", x: 300, y: 272 });
        for (let k = 1; k <= 8; k++) {
          const e = row[k - 1];
          L.setSym(e.sym);
          name.textContent = e.de + " · Hauptgruppe " + ROM[k - 1];
          await L.add();
          const pairs = Math.max(0, k - 4), singles = k <= 4 ? k : 8 - k;
          count.textContent = k === 8 ? "8 Punkte: 4 Paare, alles voll ✓"
            : k + (k === 1 ? " Punkt: " : " Punkte: ") + (pairs ? pairs + (pairs === 1 ? " Paar, " : " Paare, ") : "") + singles + " einzeln";
          count.setAttribute("class", "count" + (k === 8 ? " full" : ""));
          D.lewis(90 + (k - 1) * 60, 40, e.sym, k, { R: 15, d: 4, size: 17, dot: 2.6 });   // Mini-Übersicht oben
          if (k === 8) D.cheer();
          await D.wait(k === 1 ? 1100 : 950);
        }
      }
    },
    {
      title: "Einzelne Punkte sind freie Hände",
      text: "<p>Ein <b>einzelner Punkt</b> ist wie eine freie Hand: Damit kann das Atom einem Partner die Hand geben. Das ist eine <b>Bindung</b>.</p>" +
            "<p>Ein <b>Paar</b> hält sich schon gegenseitig fest. Es heißt <b>freies Elektronenpaar</b> und macht bei Bindungen nicht mit.</p>" +
            "<p class=\"hint\">Zahl der einzelnen Punkte = Zahl der Bindungen. Neon hat keinen einzelnen Punkt, deshalb bindet es nicht.</p>",
      run: async function (D) {
        const list = [["N", 5, 90], ["O", 6, 230], ["F", 7, 370], ["Ne", 8, 510]];
        const syms = list.map(function (it) { return D.lewis(it[2], 140, it[0], it[1], { R: 32, d: 8, size: 42 }); });
        await D.wait(600);
        for (let i = 0; i < list.length; i++) {
          const n = list[i][1], x = list[i][2];
          const singles = syms[i].dots.filter(function (c, j) { return n <= (j % 4) + 4; });
          const k = singles.length;
          D.fadeIn(D.txt(k + (k === 1 ? " einzelner" : " einzelne"), { class: "count" + (k ? " full" : ""), x: x, y: 214, opacity: 0 }), 300);
          D.fadeIn(D.txt(k === 0 ? "keine Bindung" : "→ " + k + (k === 1 ? " Bindung" : " Bindungen"), { class: "note small", x: x, y: 236, opacity: 0 }), 300);
          if (k) await glowPulse(D, singles, 2); else await D.wait(900);
          singles.forEach(function (c) { c.setAttribute("r", 5); });
        }
        D.fadeIn(D.txt("einzelner Punkt = freie Hand · Paar = schon belegt", { class: "note", x: 300, y: 300, opacity: 0 }));
        D.calm();
      }
    },
    {
      title: "Zwei einzelne werden ein Paar",
      text: "<p>Zwei <b>Wasserstoffatome</b> haben je einen einzelnen Punkt. Sie rücken zusammen, und die beiden Punkte werden ein <b>gemeinsames Paar</b> zwischen ihnen. Das ist die Bindung.</p>" +
            "<p>Bei <b>Chlor</b> genauso: Jedes Chloratom gibt seinen einzelnen Punkt in die Mitte. Danach hat jedes Chloratom <b>8 Punkte</b> um sich, das Oktett.</p>",
      run: async function (D) {
        // H + H
        const H1 = latom(D, 150, 92, "H", [{ side: "right", kind: "single" }], { R: 22, size: 32 });
        const H2 = latom(D, 450, 92, "H", [{ side: "left", kind: "single" }], { R: 22, size: 32 });
        await D.wait(500);
        await moveAtoms(D, [{ A: H1, x: 270, y: 92 }, { A: H2, x: 330, y: 92 }], 900);
        await glide(D, [H1.single("right"), H2.single("left")], [[300, 84], [300, 100]], 600);
        await pairMark(D, 300, 92, true);
        D.fadeIn(D.txt("ein gemeinsames Paar = eine Bindung", { class: "note small", x: 300, y: 138, opacity: 0 }));
        await D.wait(700);
        // Cl + Cl
        const C1 = latom(D, 130, 238, "Cl", [{ side: "top", kind: "pair" }, { side: "left", kind: "pair" }, { side: "bottom", kind: "pair" }, { side: "right", kind: "single" }]);
        const C2 = latom(D, 470, 238, "Cl", [{ side: "top", kind: "pair" }, { side: "right", kind: "pair" }, { side: "bottom", kind: "pair" }, { side: "left", kind: "single" }]);
        await D.wait(500);
        await moveAtoms(D, [{ A: C1, x: 252, y: 238 }, { A: C2, x: 348, y: 238 }], 1000);
        await glide(D, [C1.single("right"), C2.single("left")], [[300, 230], [300, 246]], 600);
        await pairMark(D, 300, 238, true);
        const o1 = D.el("circle", { cx: 252, cy: 238, r: 52, class: "octet", opacity: 0 });
        const o2 = D.el("circle", { cx: 348, cy: 238, r: 52, class: "octet", opacity: 0 });
        await D.fadeIn(o1); await D.wait(500); await D.fadeOut(o1, 300);
        await D.fadeIn(o2); await D.wait(500);
        await D.fadeIn(o1, 300);
        D.txt("jedes Chloratom hat jetzt 8 Punkte um sich ✓", { class: "count full", x: 300, y: 320 });
        D.cheer();
      }
    },
    {
      title: "Kurzschrift: Striche statt Punkte",
      text: "<p>Paare zu zeichnen ist mühsam. Deshalb gibt es eine <b>Kurzschrift</b>: Aus <b>zwei Punkten wird ein Strich</b>.</p>" +
            "<p>Das heißt <b>Valenzstrich-Formel</b>. Sie sagt genau dasselbe wie die Lewis-Schreibweise, sieht nur aufgeräumter aus.</p>" +
            "<p class=\"hint\">Der Strich zwischen den Atomen ist die Bindung. Die Striche außen sind die freien Paare.</p>",
      run: async function (D) {
        D.txt("Lewis-Schreibweise", { class: "note small", x: 300, y: 40 });
        cl2(D, 100);
        const lbl = D.txt("Lewis-Schreibweise", { class: "note small", x: 300, y: 196 });
        const m = cl2(D, 256);
        await D.wait(900);
        lbl.textContent = "Valenzstrich-Formel (Kurzschrift)";
        lbl.setAttribute("style", "fill: var(--accent); font-weight: 700");
        // Paar → Strich: Punkte schrumpfen, Strich wächst aus der Mitte
        function morph(dots, x1, y1, x2, y2) {
          const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
          const line = D.el("line", { x1: cx, y1: cy, x2: cx, y2: cy, class: "vline" });
          return D.tween(700, function (t) {
            dots.forEach(function (c) { c.setAttribute("r", 5 * (1 - t)); });
            line.setAttribute("x1", cx + (x1 - cx) * t); line.setAttribute("y1", cy + (y1 - cy) * t);
            line.setAttribute("x2", cx + (x2 - cx) * t); line.setAttribute("y2", cy + (y2 - cy) * t);
          });
        }
        const y = 256, R = 30, Lh = 11;
        await morph(m.bond, 274, y, 326, y);                       // Bindungspaar → Bindungsstrich
        D.fadeIn(D.txt("Bindung", { class: "note small", x: 300, y: y + 26, opacity: 0 }), 300);
        await D.wait(500);
        const jobs = [];
        [m.L, m.R].forEach(function (A) {
          A.pairs.forEach(function (p) {
            if (p.side === "top")    jobs.push(morph(p.dots, A.x - Lh, y - R, A.x + Lh, y - R));
            if (p.side === "bottom") jobs.push(morph(p.dots, A.x - Lh, y + R, A.x + Lh, y + R));
            if (p.side === "left")   jobs.push(morph(p.dots, A.x - R, y - Lh, A.x - R, y + Lh));
            if (p.side === "right")  jobs.push(morph(p.dots, A.x + R, y - Lh, A.x + R, y + Lh));
          });
        });
        await Promise.all(jobs);
        D.fadeIn(D.txt("jedes Paar wird ein Strich", { class: "note", x: 300, y: 320, opacity: 0 }));
        D.cheer();
      }
    },
    {
      title: "Anwenden: Ammoniak",
      text: "<p>Stickstoff hat <b>3 einzelne Punkte</b>, also 3 freie Hände. Jede greift sich ein <b>Wasserstoffatom</b>.</p>" +
            "<p>So entsteht Ammoniak, <b>NH₃</b>. Stickstoff hat danach 8 Punkte um sich, jeder Wasserstoff 2.</p>" +
            "<p class=\"hint\"><b>Merke:</b> Lewis-Schreibweise = Außenelektronen als Punkte, erst einzeln, dann paarweise. Jeder einzelne Punkt kann eine Bindung eingehen.</p>",
      run: async function (D) {
        const N = latom(D, 300, 140, "N", [{ side: "top", kind: "pair" }, { side: "right", kind: "single" }, { side: "bottom", kind: "single" }, { side: "left", kind: "single" }], { R: 32, size: 44 });
        await D.wait(400);
        await glowPulse(D, [N.single("right"), N.single("bottom"), N.single("left")], 2);
        const HR = latom(D, 480, 140, "H", [{ side: "left", kind: "single" }], { R: 22, size: 32 });
        const HB = latom(D, 300, 300, "H", [{ side: "top", kind: "single" }], { R: 22, size: 32 });
        const HL = latom(D, 120, 140, "H", [{ side: "right", kind: "single" }], { R: 22, size: 32 });
        [HR, HB, HL].forEach(function (H) { H.fade(0); });
        await D.tween(500, function (t) { [HR, HB, HL].forEach(function (H) { H.fade(t); }); });
        await moveAtoms(D, [{ A: HR, x: 376, y: 140 }, { A: HB, x: 300, y: 216 }, { A: HL, x: 224, y: 140 }], 1000);
        await Promise.all([
          glide(D, [N.single("right"), HR.single("left")], [[338, 132], [338, 148]], 600),
          glide(D, [N.single("bottom"), HB.single("top")], [[292, 178], [308, 178]], 600),
          glide(D, [N.single("left"), HL.single("right")], [[262, 132], [262, 148]], 600)
        ]);
        pairMark(D, 338, 140, true); pairMark(D, 300, 178, false); await pairMark(D, 262, 140, true);
        await D.fadeIn(D.el("circle", { cx: 300, cy: 140, r: 48, class: "octet", opacity: 0 }));
        D.fadeIn(D.txt("NH₃ (Ammoniak)", { class: "sym", x: 300, y: 290, opacity: 0 }));
        D.txt("Stickstoff: 8 Punkte ✓ · jeder Wasserstoff: 2 ✓", { class: "count full", x: 300, y: 316 });
        D.cheer();
      }
    }
  ];

  Explainer.register("lewis", {
    title: "Die Lewis-Schreibweise",
    short: "Lewis-Schreibweise",
    subtitle: "Atome mit Punkten zeichnen, Schritt für Schritt",
    next: "oktettregel",
    scenes: SCENES
  });
})();
