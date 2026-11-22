// Erklär-Player: Schritt-für-Schritt-Erklärungen mit SVG-Animation und Erzähler-Hamster.
// Ein Dialog (#explOverlay) für alle Erklärungen. Styles: css/explainer.css.
//
// Erklärung anmelden (in js/explain/<name>.js):
//   Explainer.register("perioden", {
//     title: "Das Periodensystem lesen", short: "Periodensystem lesen", subtitle: "…",
//     next: "lewis",                      // optional: am Ende „Weiter mit …“
//     scenes: [{ title, text, run: async function (D) { … } }]
//   });
// Öffnen: Explainer.open("perioden"), Knopf mit data-explain="perioden" oder Link seite.html#perioden.
//
// D = Zeichen-Werkzeugkasten (siehe unten): el, txt, tween, wait, fadeIn, makeAtom, buildAtom, miniTable, lewis …
// Alle Animationen laufen über D.tween. Beim Szenenwechsel bricht der Player sie ab (token).
(function () {
  const $ = function (id) { return document.getElementById(id); };
  const overlay = $("explOverlay");
  if (!overlay) return;

  const NS = "http://www.w3.org/2000/svg";
  const svg = $("explStage");
  const steps = $("explSteps");
  const dots = $("explDots");
  const prevBtn = $("explPrev");
  const nextBtn = $("explNext");
  const againBtn = $("explAgain");

  const REG = {};
  let curId = null, def = null, cur = 0, token = 0, ham = null;
  window.addEventListener("unhandledrejection", function (e) { if (e.reason === "abbruch") e.preventDefault(); });

  // =================================================================== Werkzeugkasten
  const R = [0, 22, 40, 58, 76];                 // Radien der Schalen 1–4

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  }
  function txt(str, attrs, parent) { const t = el("text", attrs, parent); t.textContent = str; return t; }
  const io = function (t) { return 0.5 - Math.cos(Math.PI * t) / 2; };
  const back = function (t) { const c = 1.7; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
  function tween(ms, fn, ease) {
    const my = token;
    return new Promise(function (res, rej) {
      const t0 = performance.now();
      (function f(now) {
        if (my !== token) return rej("abbruch");
        const p = Math.min(1, (now - t0) / ms);
        fn((ease || io)(p));
        if (p < 1) requestAnimationFrame(f); else res();
      })(t0);
    });
  }
  function wait(ms) { return tween(ms, function () {}); }
  function fadeIn(node, ms) { return tween(ms || 400, function (t) { node.setAttribute("opacity", t); }); }
  function fadeOut(node, ms) { return tween(ms || 400, function (t) { node.setAttribute("opacity", 1 - t); }); }
  function pol(r, deg) { const a = deg * Math.PI / 180; return [r * Math.cos(a), r * Math.sin(a)]; }

  // ---------- Atom im Schalenmodell ----------
  // o.shells: [{ n: Elektronen, angles?: [...], r? }], o.seats: Winkel freier Plätze auf der Außenschale,
  // o.dimInner: innere Schalen blass, o.labelR: Radius für die Beschriftung (für gleiche Höhe bei mehreren Atomen)
  function makeAtom(x, y, o) {
    const g = el("g", { transform: "translate(" + x + " " + y + ")" });
    const A = { g: g, x: x, y: y, rings: [], es: [], seats: [] };
    o.shells.forEach(function (s, i) {
      const r = s.r || R[i + 1];
      const dim = o.dimInner && i < o.shells.length - 1;
      const ring = el("circle", { r: r, class: "ring" + (dim ? " dim" : "") }, g);
      const C = 2 * Math.PI * r;
      ring.style.strokeDasharray = C; ring.style.strokeDashoffset = C;
      const angles = s.angles || Array.from({ length: s.n }, function (_, k) { return -90 + (s.n === 2 ? 180 : 360 / s.n) * k + (s.n === 8 ? 22.5 : 0); });
      const es = angles.map(function (a) {
        const p = pol(r, a);
        const e = el("circle", { cx: p[0], cy: p[1], r: 0, class: "e", opacity: dim ? 0.3 : 1 }, g);
        e._a = a; e._r = r;
        return e;
      });
      A.rings.push({ el: ring, r: r, C: C });
      A.es.push(es);
    });
    (o.seats || []).forEach(function (a) {
      const r = A.rings[A.rings.length - 1].r, p = pol(r, a);
      A.seats.push(el("circle", { cx: p[0], cy: p[1], r: 5.5, class: "seat", opacity: 0 }, g));
    });
    // Kern mit Gesicht
    const k = el("g", { transform: "scale(0)" }, g);
    el("circle", { r: 14, fill: o.color }, k);
    el("circle", { cx: -4.5, cy: -3, r: 1.8, fill: "#1e293b" }, k);
    el("circle", { cx: 4.5, cy: -3, r: 1.8, fill: "#1e293b" }, k);
    A.mouth = el("path", { d: "M-4 5 L4 5", fill: "none", stroke: "#1e293b", "stroke-width": 1.8, "stroke-linecap": "round" }, k);
    A.core = k;
    const rLabel = o.labelR || A.rings[A.rings.length - 1].r;
    A.sym = txt(o.sym, { class: "sym", y: rLabel + 28, opacity: 0 }, g);
    A.count = txt("", { class: "count", y: rLabel + 47 }, g);
    A.face = function (m) {
      A.mouth.setAttribute("d", m === "happy" ? "M-5 3 Q0 9 5 3" : m === "sad" ? "M-5 7 Q0 1 5 7" : "M-4 5 L4 5");
    };
    A.setCount = function (s, full) { A.count.textContent = s; A.count.setAttribute("class", "count" + (full ? " full" : "")); };
    A.moveTo = function (nx, ny) { A.x = nx; A.y = ny; g.setAttribute("transform", "translate(" + nx + " " + ny + ")"); };
    A.setAngle = function (e, a) { const p = pol(e._r, a); e._a = a; e.setAttribute("cx", p[0]); e.setAttribute("cy", p[1]); };
    return A;
  }
  async function popCore(A) {
    A.sym.setAttribute("opacity", 1);
    await tween(450, function (t) { A.core.setAttribute("transform", "scale(" + t + ")"); }, back);
  }
  function popElectron(e) {   // back-Easing schwingt kurz unter 0 → Radius begrenzen
    return tween(260, function (t) { e.setAttribute("r", Math.max(0, 5 * t)); }, back);
  }
  async function drawShell(A, i, stagger) {
    const ring = A.rings[i];
    await tween(500, function (t) { ring.el.style.strokeDashoffset = ring.C * (1 - t); });
    for (const e of A.es[i]) {
      popElectron(e);
      await wait(stagger == null ? 90 : stagger);
    }
    await wait(200);
  }
  async function buildAtom(A, fast) {
    await popCore(A);
    for (let i = 0; i < A.rings.length; i++) await drawShell(A, i, fast ? 30 : 90);
  }
  function showAll(A) {       // ohne Animation sofort komplett
    A.sym.setAttribute("opacity", 1);
    A.core.setAttribute("transform", "scale(1)");
    A.rings.forEach(function (r) { r.el.style.strokeDashoffset = 0; });
    A.es.forEach(function (es) { es.forEach(function (e) { e.setAttribute("r", 5); }); });
  }
  function markOuter(A, i) {
    A.rings.forEach(function (r, k) { r.el.classList.toggle("outer", k === i); });
  }
  function sparkle(x, y, rad) {
    for (let i = 0; i < 6; i++) {
      const a = i * 60 + 15, p = pol(rad + 8, a);
      const s = el("path", { d: "M0 -7 Q1 -1 7 0 Q1 1 0 7 Q-1 1 -7 0 Q-1 -1 0 -7Z", fill: "#fde047",
        transform: "translate(" + (x + p[0]) + " " + (y + p[1]) + ") scale(0)" });
      tween(900, function (t) {
        s.setAttribute("transform", "translate(" + (x + p[0]) + " " + (y + p[1]) + ") scale(" + Math.sin(Math.PI * t) + ")");
      }).catch(function () {});
    }
  }

  // ---------- Mini-Periodensystem ----------
  // Zeichnet die Hauptfläche (7 Perioden × 18 Gruppen) aus ELEMENTS (js/elements.js).
  // o: { x, y, cell, gap, symbols: true/false, fBlock: true/false }
  // Rückgabe T: { g, cells, mark(fn, cls), rowLabels, groupLabels, cellAt(sym), pitch }
  //   T.mark(fn, "row")  setzt die Klasse "row" an allen Zellen, für die fn(zelle) wahr ist (sonst entfernt)
  //   Klassen: on (Stoffgruppen-Farbe), row (Zeile), col (Spalte), dim (blass), hot (hervorgehoben)
  const ROMAN = { 1: "I", 2: "II", 13: "III", 14: "IV", 15: "V", 16: "VI", 17: "VII", 18: "VIII" };
  function miniTable(o) {
    o = o || {};
    const cell = o.cell || 28, gap = o.gap == null ? 3 : o.gap, pitch = cell + gap;
    const x0 = o.x == null ? (600 - 18 * pitch + gap) / 2 : o.x;
    const y0 = o.y == null ? 40 : o.y;
    const g = el("g", { class: "pt-table" });
    const cells = [];
    // ELEMENTS ist in js/elements.js mit const angelegt, also global, aber keine window-Eigenschaft
    (typeof ELEMENTS !== "undefined" ? ELEMENTS : []).forEach(function (e) {
      let col, row;
      if (e.group > 0) { col = e.group; row = e.period; }
      else if (o.fBlock) { col = 3 + (e.z - (e.cat === "lanthan" ? 57 : 89)); row = e.cat === "lanthan" ? 8.4 : 9.4; }
      else return;
      const x = x0 + (col - 1) * pitch, y = y0 + (row - 1) * pitch;
      const cg = el("g", { class: "pt", "data-cat": e.cat, transform: "translate(" + x + " " + y + ")" }, g);
      el("rect", { width: cell, height: cell, rx: Math.max(2, cell / 7) }, cg);
      if (o.symbols !== false && cell >= 20) txt(e.sym, { x: cell / 2, y: cell / 2 + 1, class: "pt-sym" }, cg);
      cells.push({ g: cg, x: x, y: y, z: e.z, sym: e.sym, group: e.group, period: e.period, cat: e.cat, main: e.group > 0 && (e.group <= 2 || e.group >= 13) });
    });
    const T = { g: g, cells: cells, pitch: pitch, x0: x0, y0: y0, cell: cell };
    T.mark = function (fn, cls) { cells.forEach(function (c) { c.g.classList.toggle(cls, !!fn(c)); }); };
    T.cellAt = function (sym) { return cells.find(function (c) { return c.sym === sym; }); };
    T.center = function (c) { return [c.x + cell / 2, c.y + cell / 2]; };
    T.rowLabels = function () {        // 1–7 links, zunächst unsichtbar
      return [1, 2, 3, 4, 5, 6, 7].map(function (p) {
        return txt(String(p), { class: "pt-label", x: x0 - 10, y: y0 + (p - 1) * pitch + cell / 2 + 1, opacity: 0 }, g);
      });
    };
    T.groupLabels = function () {      // I–VIII über den Hauptgruppen, zunächst unsichtbar
      return [1, 2, 13, 14, 15, 16, 17, 18].map(function (gr) {
        return txt(ROMAN[gr], { class: "pt-label", x: x0 + (gr - 1) * pitch + cell / 2, y: y0 - 10, opacity: 0 }, g);
      });
    };
    return T;
  }

  // ---------- Lewis-Symbol ----------
  // Außenelektronen als Punkte auf vier Seiten (oben, rechts, unten, links): erst einzeln, dann paarweise.
  // lewisPos(i, n): Position des i-ten Punkts (0-basiert) bei insgesamt n Punkten, relativ zur Symbolmitte.
  function lewisPos(i, n, R, d) {
    const s = i % 4;
    const onSide = (n > s ? 1 : 0) + (n > s + 4 ? 1 : 0);
    const off = onSide === 2 ? (i < 4 ? -d : d) : 0;
    return [[off, -R], [R, off], [off, R], [-R, off]][s];
  }
  // lewis(x, y, sym, n, o): o = { R: Abstand der Punkte (34), d: Abstand im Paar (8), size: Schriftgröße (44), hidden: Punkte erst unsichtbar }
  // Rückgabe L: { g, sym, dots, add() (ein Punkt mehr, die anderen rücken zu Paaren), setSym(text) }
  function lewis(x, y, sym, n, o) {
    o = o || {};
    const R = o.R || 34, d = o.d || 8, dotR = o.dot || 5;
    const g = el("g", { transform: "translate(" + x + " " + y + ")" });
    const t = txt(sym, { class: "lsym", style: "font-size: " + (o.size || 44) + "px" }, g);
    const L = { g: g, x: x, y: y, R: R, d: d, sym: t, dots: [] };
    for (let i = 0; i < n; i++) {
      const p = lewisPos(i, n, R, d);
      L.dots.push(el("circle", { cx: p[0], cy: p[1], r: o.hidden ? 0 : dotR, class: "e" }, g));
    }
    L.setSym = function (s) { t.textContent = s; };
    L.add = function () {
      const n2 = L.dots.length + 1;
      const moves = L.dots.map(function (c, i) {
        return { c: c, from: [+c.getAttribute("cx"), +c.getAttribute("cy")], to: lewisPos(i, n2, R, d) };
      });
      const p = lewisPos(n2 - 1, n2, R, d);
      const nd = el("circle", { cx: p[0], cy: p[1], r: 0, class: "e" }, g);
      L.dots.push(nd);
      return Promise.all([
        tween(300, function (k) {
          moves.forEach(function (m) {
            m.c.setAttribute("cx", m.from[0] + (m.to[0] - m.from[0]) * k);
            m.c.setAttribute("cy", m.from[1] + (m.to[1] - m.from[1]) * k);
          });
        }),
        tween(260, function (k) { nd.setAttribute("r", Math.max(0, dotR * k)); }, back)
      ]);
    };
    return L;
  }

  // ---------- Erzähler-Hamster ----------
  function cheer() { if (ham) ham.play("tipHop"); }
  function calm() { if (ham) ham.setLoop(["idleCalm", "idleLook"]); }

  const D = {
    svg: svg, R: R, ease: { io: io, back: back },
    el: el, txt: txt, tween: tween, wait: wait, fadeIn: fadeIn, fadeOut: fadeOut, pol: pol,
    makeAtom: makeAtom, popCore: popCore, popElectron: popElectron, drawShell: drawShell, buildAtom: buildAtom,
    showAll: showAll, markOuter: markOuter, sparkle: sparkle, miniTable: miniTable, ROMAN: ROMAN,
    lewis: lewis, lewisPos: lewisPos,
    cheer: cheer, calm: calm
  };

  // =================================================================== Player
  function build() {
    dots.innerHTML = "";
    steps.innerHTML = "";
    def.scenes.forEach(function (s) {
      dots.appendChild(document.createElement("span"));
      const sec = document.createElement("section");
      sec.innerHTML = s.text;          // Titel steht im Kartenkopf (#explStepTitle)
      steps.appendChild(sec);
    });
    $("explTitle").textContent = def.title;
    $("explSubtitle").textContent = def.subtitle || "";
  }

  function chainTarget() {   // am letzten Schritt: weiter zur nächsten Erklärung?
    return cur === def.scenes.length - 1 && def.next && REG[def.next] ? def.next : null;
  }

  function show(i) {
    cur = Math.max(0, Math.min(def.scenes.length - 1, i));
    token++;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const s = def.scenes[cur];
    $("explStepNo").textContent = "Schritt " + (cur + 1) + " von " + def.scenes.length;
    $("explStepTitle").textContent = s.title;
    steps.scrollTop = 0;
    Array.prototype.forEach.call(steps.children, function (sec, k) { sec.classList.toggle("on", k === cur); });
    Array.prototype.forEach.call(dots.children, function (d, k) { d.classList.toggle("on", k === cur); });
    prevBtn.disabled = cur === 0;
    const chain = chainTarget();
    const last = cur === def.scenes.length - 1;
    nextBtn.disabled = false;
    nextBtn.textContent = chain ? "Weiter mit: " + (REG[chain].short || REG[chain].title) + " →" : last ? "Fertig ✓" : "Weiter →";
    nextBtn.classList.toggle("is-chain", !!chain);
    nextBtn.classList.toggle("is-done", last && !chain);
    if (ham) { ham.setLoop("tipTalk"); setTimeout(function () { if (ham) ham.setLoop(["idleCalm", "idleLook", "idleCalm"]); }, 2600); }
    s.run(D).catch(function () { /* Szene gewechselt */ });
  }

  // Beim Schließen laufende Animationen abbrechen und den Hamster entfernen (spart Rechenzeit).
  function open(id) {
    if (!REG[id]) return;
    curId = id; def = REG[id];
    build();
    overlay.hidden = false;
    if (window.Hamster && !ham) {
      const stage = document.createElement("div");
      $("explHamster").appendChild(stage);
      ham = Hamster.create(stage, { clip: "idleCalm" });
    }
    show(0);
    overlay.querySelector(".expl-dialog").scrollTop = 0;
    nextBtn.focus({ preventScroll: true });   // auf dem Handy oben bleiben (Titel + Animation sichtbar)
  }
  function close() {
    token++;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (ham) { ham.destroy(); ham = null; }
    $("explHamster").innerHTML = "";
    overlay.hidden = true;
    if (curId && location.hash === "#" + curId) history.replaceState(null, "", location.pathname + location.search);
  }

  prevBtn.addEventListener("click", function () { show(cur - 1); });
  nextBtn.addEventListener("click", function () {
    const chain = chainTarget();
    if (chain) open(chain);
    else if (cur === def.scenes.length - 1) close();
    else show(cur + 1);
  });
  againBtn.addEventListener("click", function () { show(cur); });
  $("explClose").addEventListener("click", close);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
  document.addEventListener("keydown", function (e) {
    if (overlay.hidden) return;
    if (e.key === "ArrowRight") show(cur + 1);
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "Escape") close();
  });

  // Knöpfe mit data-explain="…" öffnen die Erklärung (andere Dialoge werden vorher geschlossen).
  // Capture-Phase, damit z. B. ein Klick in einer Lernkarte nicht zusätzlich andere Aktionen auslöst.
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-explain]");
    if (!btn || !REG[btn.dataset.explain]) return;
    e.stopPropagation();
    document.querySelectorAll(".overlay:not(#explOverlay)").forEach(function (o) { o.hidden = true; });
    open(btn.dataset.explain);
  }, true);

  // Deep-Link: seite.html#<id> öffnet die Erklärung, sobald alle Erklärungen angemeldet sind.
  document.addEventListener("DOMContentLoaded", function () {
    const id = location.hash.slice(1);
    if (REG[id]) open(id);
  });

  window.Explainer = {
    register: function (id, d) { REG[id] = d; },
    has: function (id) { return !!REG[id]; },
    open: open,
    close: close,
    draw: D
  };
})();
