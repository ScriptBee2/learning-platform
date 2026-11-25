// Erklärung „Formel umstellen" für den Erklär-Player (js/explainer.js).
// Szene 1: animiertes Magnet-Bild (echte Hufeisenmagnete, SVG). Ab Szene 2: Formeln, Schritt für Schritt eingeblendet.
// Farben/Schrift aus den Stage-Klassen (css/explainer.css): num-step, num-result, note, formula, formula-tag.
(function () {

  var CX = 300;

  // ---------- Formel-Helfer ----------
  function line(D, y, str, o) {
    o = o || {};
    var attrs = { x: o.x != null ? o.x : CX, y: y, opacity: 0 };
    if (o.anchor) attrs["text-anchor"] = o.anchor;
    if (o.role === "result") {
      attrs.class = "num-result";
      if (o.size) attrs.style = "font-size:" + o.size + "px";
    } else {
      attrs.class = "num-step";
      var st = "font-size:" + (o.size || 28) + "px;";
      if (o.role === "accent") st += "fill:var(--accent);font-weight:800;";
      attrs.style = st;
    }
    return D.txt(str, attrs);
  }
  function op(D, y, str) {
    return D.txt("|  " + str, { x: 520, y: y, "text-anchor": "start", class: "note small",
      style: "font-size:18px", opacity: 0 });
  }
  function arrow(D, y) {
    return D.txt("↓", { x: CX, y: y, class: "note small", style: "font-size:24px", opacity: 0 });
  }
  function frac(D, cx, y, num, den, size, accent) {
    size = size || 28;
    var g = D.el("g", { opacity: 0 });
    var w = Math.max(String(num).length, String(den).length) * size * 0.6 + 10;
    var st = "font-size:" + size + "px;font-weight:700" + (accent ? ";fill:var(--success)" : "");
    D.txt(String(num), { x: cx, y: y - size * 0.72, class: "num-step", style: st }, g);
    D.el("line", { x1: cx - w / 2, y1: y, x2: cx + w / 2, y2: y,
      style: "stroke:var(--" + (accent ? "success" : "text") + ");stroke-width:2" }, g);
    D.txt(String(den), { x: cx, y: y + size * 0.72, class: "num-step", style: st }, g);
    return g;
  }

  // ---------- Magnet-Helfer (Szene 1) ----------
  // Hufeisenmagnet, Öffnung nach rechts; N-Pol rot oben, S-Pol blau unten.
  function horseshoe(D, mx, my, s) {
    var g = D.el("g", { opacity: 0 });
    var arm = s, gap = s * 0.46, rad = gap, sw = s * 0.4, tipX = mx + arm;
    var d = "M " + tipX + " " + (my - gap) +
            " L " + (mx - arm * 0.15) + " " + (my - gap) +
            " A " + rad + " " + rad + " 0 0 0 " + (mx - arm * 0.15) + " " + (my + gap) +
            " L " + tipX + " " + (my + gap);
    D.el("path", { d: d, style: "fill:none;stroke:#9ca3af;stroke-width:" + sw }, g);
    var pw = sw * 1.2;
    function pole(cy, color, letter) {
      D.el("rect", { x: tipX - pw / 2, y: cy - pw / 2, width: pw, height: pw, rx: 2, style: "fill:" + color }, g);
      D.txt(letter, { x: tipX, y: cy + 1, "text-anchor": "middle", "dominant-baseline": "central",
        style: "font-size:" + (pw * 0.6) + "px;font-weight:800;fill:#fff" }, g);
    }
    pole(my - gap, "#ef4444", "N");
    pole(my + gap, "#3b82f6", "S");
    return { g: g, tipX: tipX };
  }
  // Eisenplättchen mit Beschriftung (verschiebbar).
  function plate(D, cx, cy, label) {
    var g = D.el("g", { opacity: 0 });
    var w = 50, h = 50;
    D.el("rect", { x: cx - w / 2, y: cy - h / 2, width: w, height: h, rx: 8,
      style: "fill:#d4dae3;stroke:#64748b;stroke-width:1.6" }, g);
    D.el("rect", { x: cx - w / 2 + 5, y: cy - h / 2 + 5, width: w - 10, height: 7, rx: 3,
      style: "fill:#eef2f7;opacity:0.8" }, g);
    D.txt(label, { x: cx, y: cy + 3, "text-anchor": "middle", "dominant-baseline": "central",
      style: "font-size:22px;font-weight:800;fill:#1e293b" }, g);
    var P = { g: g, x0: cx, y0: cy, cx: cx, cy: cy };
    P.moveTo = function (nx) { g.setAttribute("transform", "translate(" + (nx - cx) + " 0)"); P.cx = nx; };
    return P;
  }

  // ================================================================ Szene 1 – Drei Magnet-Stärken (animiert)
  async function scene1(D) {
    var rows = [
      { y: 85,  s: 22, ops: "+  −", main: "schwach", sub: "einfach abziehen",             kind: "weak" },
      { y: 175, s: 30, ops: "·  :", main: "stark",   sub: "erst lösen, wenn x frei steht", kind: "strong" },
      { y: 270,         ops: "( ) √", main: "Gehäuse", sub: "erst knacken", kind: "case" }
    ];
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];

      if (r.kind === "case") {
        // Panzer-Gehäuse (Tresor mit Schloss) statt Magnet
        var bx = 92, by = r.y, bw = 92, bh = 62;
        var box = D.el("g", { opacity: 0 });
        D.el("rect", { x: bx, y: by - bh / 2, width: bw, height: bh, rx: 9,
          style: "fill:none;stroke:var(--green);stroke-width:4" }, box);
        D.txt("( ) √", { x: bx + bw / 2, y: by + 4, "text-anchor": "middle", "dominant-baseline": "central",
          style: "font-size:22px;font-weight:800;fill:var(--green)" }, box);
        var lx = bx + bw / 2, ly = by - bh / 2;
        var shackle = D.el("path", { d: "M " + (lx - 6) + " " + ly + " V " + (ly - 10) +
          " A 6 6 0 0 1 " + (lx + 6) + " " + (ly - 10) + " V " + ly,
          style: "fill:none;stroke:var(--green);stroke-width:3", opacity: 0 }, box);
        D.el("rect", { x: lx - 10, y: ly - 2, width: 20, height: 15, rx: 2, style: "fill:var(--green)" }, box);
        await D.fadeIn(box, 380);
        await D.fadeIn(shackle, 320);   // Schloss schnappt zu
      } else {
        var mag = horseshoe(D, 118, r.y, r.s);
        await D.fadeIn(mag.g, 340);
        var pl = plate(D, 310, r.y, r.ops);
        D.fadeIn(pl.g, 280);
        var target = mag.tipX + 32;
        // Anziehung: Plättchen fliegt zum Magneten
        await D.tween(650, (function (pl, target) {
          return function (t) { pl.moveTo(310 + (target - 310) * t); };
        })(pl, target), D.ease.back);
        if (r.kind === "strong") {
          // zuckt kurz, bleibt aber fest kleben
          await D.tween(300, (function (pl, target) {
            return function (t) { pl.moveTo(target + Math.sin(t * Math.PI * 3) * 3); };
          })(pl, target));
          pl.moveTo(target);
        } else {
          // schwach: löst sich leicht wieder und driftet weg
          await D.wait(220);
          await D.tween(650, (function (pl, target) {
            return function (t) { pl.moveTo(target + 46 * t); };
          })(pl, target));
        }
      }

      // Label rechts daneben
      var mainT = D.txt(r.main, { x: 360, y: r.y - 11, class: "formula",
        style: "font-size:24px;font-weight:800", opacity: 0 });
      var subT = D.txt(r.sub, { x: 360, y: r.y + 15, class: "formula-tag",
        style: "font-size:15px", opacity: 0 });
      D.fadeIn(mainT, 340);
      await D.fadeIn(subT, 340);
      await D.wait(140);
    }
    D.cheer();
  }

  // ================================================================ Szene 2 – Faktor wegteilen
  async function scene2(D) {
    var l1 = line(D, 70, "5 · x = 30", { size: 34 });
    await D.fadeIn(l1, 420);
    var o1 = op(D, 70, ": 5");
    await D.fadeIn(o1, 350);
    await D.wait(220);

    var a1 = arrow(D, 125);
    await D.fadeIn(a1, 260);

    var l2 = line(D, 180, "x = 30 : 5", { size: 30 });
    await D.fadeIn(l2, 400);
    await D.wait(260);

    var a2 = arrow(D, 235);
    await D.fadeIn(a2, 260);

    var l3 = line(D, 295, "x = 6", { role: "result", size: 40 });
    await D.fadeIn(l3, 450);
    D.sparkle(CX, 295, 30);
    D.cheer();
  }

  // ================================================================ Szene 3 – Variable im Nenner
  async function scene3(D) {
    var l1 = line(D, 70, "y =", { size: 30, x: CX - 52, anchor: "end" });
    var f1 = frac(D, CX + 14, 70, "a", "x", 30);
    await Promise.all([D.fadeIn(l1, 400), D.fadeIn(f1, 400)]);
    var o1 = op(D, 70, "· x");
    await D.fadeIn(o1, 350);
    await D.wait(220);

    var a1 = arrow(D, 130);
    await D.fadeIn(a1, 240);

    var l2 = line(D, 185, "y · x = a", { size: 30 });
    await D.fadeIn(l2, 400);
    var o2 = op(D, 185, ": y");
    await D.fadeIn(o2, 350);
    await D.wait(220);

    var a2 = arrow(D, 240);
    await D.fadeIn(a2, 240);

    var l3 = line(D, 300, "x =", { role: "result", size: 34, x: CX - 52, anchor: "end" });
    var f3 = frac(D, CX + 14, 300, "a", "y", 30, true);
    await Promise.all([D.fadeIn(l3, 450), D.fadeIn(f3, 450)]);
    D.sparkle(CX, 300, 28);
    D.cheer();
  }

  // ================================================================ Szene 4 – x zweimal → ausklammern
  async function scene4(D) {
    var l1 = line(D, 55, "a · x = b · x + c", { size: 28 });
    await D.fadeIn(l1, 420);
    var o1 = op(D, 55, "− b · x");
    await D.fadeIn(o1, 350);
    await D.wait(200);

    var a1 = arrow(D, 98);
    await D.fadeIn(a1, 220);

    var l2 = line(D, 140, "a · x − b · x = c", { size: 28 });
    await D.fadeIn(l2, 400);
    await D.wait(220);

    var a2 = arrow(D, 182);
    await D.fadeIn(a2, 220);

    var l3 = line(D, 224, "x · (a − b) = c", { role: "accent", size: 30 });
    await D.fadeIn(l3, 420);
    var o3 = op(D, 224, ": (a − b)");
    await D.fadeIn(o3, 350);
    await D.wait(220);

    var a3 = arrow(D, 266);
    await D.fadeIn(a3, 220);

    var l4 = line(D, 305, "x =", { role: "result", size: 30, x: CX - 64, anchor: "end" });
    var f4 = frac(D, CX + 6, 305, "c", "a − b", 26, true);
    await Promise.all([D.fadeIn(l4, 450), D.fadeIn(f4, 450)]);
    D.sparkle(CX - 8, 305, 26);
    D.cheer();
  }

  // ================================================================ Szene 5 – Komplexbeispiel
  async function scene5(D) {
    var l1 = line(D, 44, "m =", { size: 24, x: CX - 58, anchor: "end" });
    var f1 = frac(D, CX + 6, 44, "x", "x + n", 24);
    await Promise.all([D.fadeIn(l1, 380), D.fadeIn(f1, 380)]);
    var o1 = op(D, 44, "· (x + n)");
    await D.fadeIn(o1, 320);
    await D.wait(200);

    var l2 = line(D, 100, "m · (x + n) = x", { size: 24 });
    await D.fadeIn(l2, 380);
    await D.wait(160);

    var l3 = line(D, 152, "m·x + m·n = x", { size: 24 });
    await D.fadeIn(l3, 380);
    var o3 = op(D, 152, "− m·x");
    await D.fadeIn(o3, 320);
    await D.wait(200);

    var l4 = line(D, 204, "m·n = x − m·x", { size: 24 });
    await D.fadeIn(l4, 380);
    await D.wait(160);

    var l5 = line(D, 256, "m·n = x · (1 − m)", { role: "accent", size: 24 });
    await D.fadeIn(l5, 400);
    var o5 = op(D, 256, ": (1 − m)");
    await D.fadeIn(o5, 320);
    await D.wait(220);

    var l6 = line(D, 314, "x =", { role: "result", size: 28, x: CX - 72, anchor: "end" });
    var f6 = frac(D, CX, 314, "m · n", "1 − m", 24, true);
    await Promise.all([D.fadeIn(l6, 450), D.fadeIn(f6, 450)]);
    D.sparkle(CX - 10, 314, 28);
    D.cheer();
  }

  // ================================================================ Registrierung
  Explainer.register("formel-umstellen", {
    title: "Formel umstellen",
    short: "Formel umstellen",
    subtitle: "Nach x auflösen, Schritt für Schritt",
    scenes: [
      {
        title: "Die Idee: drei Magnet-Stärken",
        text: '<p>Stell dir die Teile einer Formel wie <b>Metallplättchen</b> vor, die von unterschiedlich starken <b>Magneten</b> gehalten werden. Ziel ist, das gesuchte <b>x</b> freizulegen.</p>' +
              '<p>① <b>+ und −</b> sind <b>schwache Magnete</b> – einfach abziehen.<br>' +
              '② <b>· und :</b> sind <b>starke Magnete</b> – lösen sich erst, wenn sonst nichts mehr dranhängt.<br>' +
              '③ <b>Klammer, Bruch, Wurzel</b> sind ein <b>Panzer-Gehäuse</b> – erst knacken, wenn es freiliegt.</p>' +
              '<p class="hint">Die Reihenfolge ergibt sich von selbst: erst die schwachen Magnete, dann die starken, das Gehäuse zuletzt.</p>',
        run: scene1
      },
      {
        title: "Faktor wegteilen",
        text: '<p>Vor dem x steht ein <b>Faktor</b> (hier die 5) – ein <b>starker Magnet</b>. Den löst du, indem du <b>durch 5 teilst</b> – auf beiden Seiten.</p>' +
              '<p>Links bleibt nur noch <b>x</b> stehen, rechts rechnest du <b>30 : 5 = 6</b> aus.</p>',
        run: scene2
      },
      {
        title: "Variable im Nenner",
        text: '<p>Steht das x <b>unter dem Bruchstrich</b>, steckt es im <b>Gehäuse</b>. Erst herausholen: <b>mal x</b> auf beiden Seiten.</p>' +
              '<p>Jetzt ist es ein normaler Faktor – <b>durch y teilen</b>, und x steht allein.</p>' +
              '<p class="hint">Zwei Schritte: erst aus dem Nenner holen, dann freistellen.</p>',
        run: scene3
      },
      {
        title: "x kommt zweimal vor",
        text: '<p>Steht x in <b>mehreren Termen</b>, bringst du sie erst auf <b>eine Seite</b> (hier: − b·x).</p>' +
              '<p>Der Trick: <b>x ausklammern</b>. Dann steht x nur noch <b>einmal</b> da und du kannst durch die Klammer teilen.</p>' +
              '<p class="hint">Ausklammern ist hier der entscheidende Schritt – ohne ihn bekommst du x nicht frei.</p>',
        run: scene4
      },
      {
        title: "Komplexbeispiel: alles zusammen",
        text: '<p>Hier steckt x gleich <b>doppelt</b> drin – einmal oben, einmal im Nenner. Wir brauchen alle Tricks nacheinander:</p>' +
              '<p>① <b>mal (x + n)</b> – Bruch (Gehäuse) auflösen<br>' +
              '② <b>ausmultiplizieren</b><br>' +
              '③ <b>− m·x</b> – alle x auf eine Seite<br>' +
              '④ <b>x ausklammern</b><br>' +
              '⑤ <b>durch (1 − m) teilen</b></p>' +
              '<p class="hint">Genau diese Reihenfolge: erst Gehäuse knacken, dann x sammeln, ausklammern, teilen.</p>',
        run: scene5
      }
    ]
  });
})();
