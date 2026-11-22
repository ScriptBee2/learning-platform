// Erklärung „Die Oktettregel“ für den Erklär-Player (js/explainer.js).
// Schalenmodell: Warum Atome 8 Außenelektronen wollen und wie sie dahin kommen.
(function () {
  const SCENES = [
    {
      title: "Elektronen wohnen auf Schalen",
      text: '<p>Ein Atom hat in der Mitte einen <b>Kern</b>. Drumherum sitzen die <b>Elektronen</b> (gelb) auf Schalen, wie die Schichten einer Zwiebel.</p>' +
            '<p>Wichtig ist nur die <b>äußerste Schale</b> (leuchtet blau). Stell sie dir wie einen <b>Eierkarton mit 8 Mulden</b> vor.</p>' +
            '<p>Chlor hat außen <b>7 Elektronen</b>. Ein Platz ist noch frei, deshalb guckt Chlor unzufrieden.</p>',
      run: async function (D) {
        const cl = D.makeAtom(300, 150, { sym: "Cl  (Chlor)", color: "#4ade80",
          shells: [{ n: 2 }, { n: 8 }, { n: 7, angles: [-90, -45, 0, 45, 90, 135, 225] }], seats: [180] });
        cl.face("neutral");
        await D.buildAtom(cl);
        D.markOuter(cl, 2);
        await D.fadeIn(cl.seats[0]);
        cl.face("sad");
        cl.setCount("Außenschale: 7 von 8 Plätzen besetzt");
        D.calm();
      }
    },
    {
      title: "Neon ist rundum zufrieden",
      text: '<p><b>Neon</b> ist ein Edelgas. Seine Außenschale ist mit <b>8 Elektronen</b> komplett voll. Der Eierkarton ist fertig.</p>' +
            '<p>Deshalb braucht Neon nichts von anderen Atomen und reagiert so gut wie nie.</p>' +
            '<p><b>Die Oktettregel:</b> Alle Atome wollen außen 8 Elektronen haben, so wie ein Edelgas. „Oktett“ heißt einfach „Achtergruppe“.</p>',
      run: async function (D) {
        const ne = D.makeAtom(300, 150, { sym: "Ne  (Neon)", color: "#c084fc", shells: [{ n: 2 }, { n: 8 }] });
        await D.buildAtom(ne);
        D.markOuter(ne, 1);
        ne.face("happy");
        ne.setCount("Außenschale: 8 von 8 ✓", true);
        D.sparkle(300, 150, 70);
        D.cheer();
      }
    },
    {
      title: "Weg 1: abgeben und aufnehmen",
      text: '<p><b>Natrium</b> hat außen nur <b>1 Elektron</b>. Das eine abzugeben ist viel leichter, als 7 neue zu sammeln.</p>' +
            '<p><b>Chlor</b> fehlt genau <b>eins</b>. Also wandert das Elektron von Natrium zu Chlor.</p>' +
            '<p>Jetzt sind beide voll: Bei Natrium ist die volle Schale darunter jetzt die äußere. Natrium hat ein (negatives) Elektron verloren und ist jetzt <b>positiv: Na⁺</b>. Chlor ist <b>negativ: Cl⁻</b>.</p>' +
            '<p class="hint">Plus und Minus ziehen sich an: Das ist eine <b>Ionenbindung</b>. So entsteht Kochsalz (NaCl).</p>',
      run: async function (D) {
        const na = D.makeAtom(160, 150, { sym: "Na", color: "#fb7185", shells: [{ n: 2 }, { n: 8 }, { n: 1, angles: [0] }] });
        const cl = D.makeAtom(440, 150, { sym: "Cl", color: "#4ade80",
          shells: [{ n: 2 }, { n: 8 }, { n: 7, angles: [-90, -45, 0, 45, 90, 135, 225] }], seats: [180] });
        await Promise.all([D.buildAtom(na, true), D.buildAtom(cl, true)]);
        D.markOuter(na, 2); D.markOuter(cl, 2);
        D.fadeIn(cl.seats[0]);
        na.face("sad"); cl.face("sad");
        na.setCount("außen: 1 von 8"); cl.setCount("außen: 7 von 8");
        await D.wait(1200);
        // Elektron wandert im Bogen von Na (rechts) zum freien Platz von Cl (links)
        const e = na.es[2][0];
        const from = [na.x + D.R[3], na.y], to = [cl.x - D.R[3], cl.y];
        e.remove();
        const fly = D.el("circle", { cx: from[0], cy: from[1], r: 5, class: "e" });
        await D.tween(1400, function (t) {
          const x = from[0] + (to[0] - from[0]) * t, y = from[1] - Math.sin(Math.PI * t) * 70;
          fly.setAttribute("cx", x); fly.setAttribute("cy", y);
        });
        cl.seats[0].remove();
        fly.remove();
        const landed = D.el("circle", { r: 5, class: "e" }, cl.g);
        landed._r = D.R[3]; cl.setAngle(landed, 180);
        cl.face("happy"); cl.setCount("außen: 8 von 8 ✓", true);
        // äußere Schale von Na verschwindet, die volle Schale darunter wird die äußere
        await D.tween(600, function (t) { na.rings[2].el.setAttribute("opacity", 1 - t); });
        D.markOuter(na, 1);
        na.face("happy"); na.setCount("außen: 8 von 8 ✓", true);
        D.cheer();
        await D.wait(600);
        const plus = D.txt("+", { class: "charge", x: na.x + 38, y: na.y - 38, fill: "#fb7185", opacity: 0 });
        const minus = D.txt("−", { class: "charge", x: cl.x + 46, y: cl.y - 52, fill: "#4ade80", opacity: 0 });
        na.sym.textContent = "Na⁺"; cl.sym.textContent = "Cl⁻";
        D.fadeIn(plus); await D.fadeIn(minus);
        await D.wait(500);
        // ziehen sich an
        const nx0 = na.x, cx0 = cl.x;
        await D.tween(1100, function (t) {
          na.moveTo(nx0 + 55 * t, na.y); cl.moveTo(cx0 - 55 * t, cl.y);
          plus.setAttribute("x", na.x + 38); minus.setAttribute("x", cl.x + 46);
        }, back);
        const n1 = D.txt("Plus und Minus ziehen sich an → Kochsalz (NaCl)", { class: "note", x: 300, y: 320, opacity: 0 });
        D.fadeIn(n1);
      }
    },
    {
      title: "Weg 2: teilen",
      text: '<p>Zwei <b>Chloratome</b> haben je 7 Elektronen. Keins will eins hergeben, beide wollen eins dazu.</p>' +
            '<p>Die Lösung: Sie rücken zusammen und <b>teilen sich ein Elektronenpaar</b>. Die zwei Elektronen in der Mitte gehören beiden gleichzeitig.</p>' +
            '<p>Jedes Atom zählt: <b>6 eigene + 2 geteilte = 8</b>.</p>' +
            '<p class="hint">Das ist eine <b>Atombindung</b> (kovalent). So entsteht das Chlormolekül Cl₂.</p>',
      run: async function (D) {
        await shareScene(D, { sym: "Cl", color: "#4ade80", inner: [{ n: 2 }, { n: 8 }], r: D.R[3], own: 6, cap: 8, gap: 200 });
      }
    },
    {
      title: "Ausnahme: Wasserstoff",
      text: '<p><b>Wasserstoff</b> hat nur eine einzige, ganz kleine Schale. Da passen nur <b>2 Elektronen</b> hinein, nicht 8.</p>' +
            '<p>Für ihn heißt „voll“ also: 2. Man nennt das auch <b>Duett</b>.</p>' +
            '<p>Zwei Wasserstoffatome teilen sich ein Paar, dann hat jedes 2. So entsteht H₂.</p>' +
            '<p class="hint">Helium ist mit seinen 2 Elektronen schon von Natur aus voll, ein Edelgas wie Neon.</p>',
      run: async function (D) {
        await shareScene(D, { sym: "H", color: "#60a5fa", inner: [], r: 44, own: 0, cap: 2, gap: 150 });
      }
    },
    {
      title: "Merksatz",
      text: '<p><b>Atome wollen außen 8 Elektronen haben, so wie ein Edelgas.</b> (Wasserstoff: 2)</p>' +
            '<p>Dafür gibt es drei Wege:</p>' +
            '<p>① <b>abgeben</b>: wer außen nur wenige hat, meist Metalle wie Natrium<br>' +
            '② <b>aufnehmen</b>: wem nur wenige fehlen, meist Nichtmetalle wie Chlor<br>' +
            '③ <b>teilen</b>: wenn sich zwei Nichtmetalle treffen</p>' +
            '<p class="hint">Tipp: Die Zahl der Außenelektronen steht im Periodensystem. Hauptgruppe I hat 1, Hauptgruppe VII hat 7, Hauptgruppe VIII hat 8.</p>',
      run: async function (D) {
        D.txt("8", { x: 300, y: 150, "text-anchor": "middle", "font-size": 120, "font-weight": 900, fill: "#22d3ee", opacity: .9 });
        D.txt("Außenelektronen = zufrieden", { class: "note", x: 300, y: 190 });
        const ways = [["① abgeben", "Na → Na⁺"], ["② aufnehmen", "Cl → Cl⁻"], ["③ teilen", "Cl–Cl"]];
        for (let i = 0; i < ways.length; i++) {
          const x = 120 + i * 180;
          const a = D.txt(ways[i][0], { class: "note", x: x, y: 250, opacity: 0 });
          const b = D.txt(ways[i][1], { class: "note small", x: x, y: 274, opacity: 0 });
          D.fadeIn(a); await D.fadeIn(b, 500);
        }
        D.cheer();
      }
    }
  ];

  // Teilen: zwei Atome rücken zusammen, die Bindungselektronen landen auf den
  // Schnittpunkten beider Außenschalen – sie liegen damit auf beiden Ringen.
  async function shareScene(D, o) {
    const cy = 160, r = o.r;
    const own = [];
    for (let k = 0; k < o.own; k++) own.push(70 + k * (220 / Math.max(1, o.own - 1)));   // 70…290° (vom Partner weg)
    const shellsL = o.inner.concat([{ r: r, n: o.own + 1, angles: own.concat([0]) }]);
    const shellsR = o.inner.concat([{ r: r, n: o.own + 1, angles: own.map(function (a) { return 180 - a; }).concat([180]) }]);
    const L = D.makeAtom(300 - o.gap, cy, { sym: o.sym, color: o.color, shells: shellsL, dimInner: true });
    const Rt = D.makeAtom(300 + o.gap, cy, { sym: o.sym, color: o.color, shells: shellsR, dimInner: true });
    await Promise.all([D.buildAtom(L, true), D.buildAtom(Rt, true)]);
    const top = o.inner.length;
    D.markOuter(L, top); D.markOuter(Rt, top);
    L.face("sad"); Rt.face("sad");
    L.setCount("außen: " + (o.own + 1) + " von " + o.cap); Rt.setCount("außen: " + (o.own + 1) + " von " + o.cap);
    const yCount = cy + r + 47;
    await D.wait(1100);
    // zusammenrücken, bis sich die Außenschalen bei ±45° schneiden
    const half = r * Math.cos(Math.PI / 4);
    const l0 = L.x, r0 = Rt.x;
    await D.tween(1300, function (t) { L.moveTo(l0 + (300 - half - l0) * t, cy); Rt.moveTo(r0 + (300 + half - r0) * t, cy); });
    // Bindungselektronen wandern auf die Schnittpunkte
    const eL = L.es[top][o.own], eR = Rt.es[top][o.own];
    await D.tween(900, function (t) { L.setAngle(eL, -45 * t); Rt.setAngle(eR, 180 - 45 * t); });
    const pair = D.el("ellipse", { cx: 300, cy: cy, rx: 12, ry: half + 10, class: "pair", opacity: 0 });
    D.svg.insertBefore(pair, D.svg.firstChild);
    await D.fadeIn(pair);
    const lbl = D.txt("geteiltes Elektronenpaar", { class: "note small", x: 300, y: cy - r - 16, opacity: 0 });   /* über den Schalen, nicht auf den Elektronen */
    D.fadeIn(lbl);
    L.face("happy"); Rt.face("happy");
    L.setCount(""); Rt.setCount("");
    const both = D.txt("jedes Atom: " + (o.own ? o.own + " eigene + " : "") + "2 geteilte = " + o.cap + " ✓",
      { class: "count full", x: 300, y: yCount });
    D.cheer();
    // abwechselnd zeigen: der Ring links zählt das Paar mit – und der rechts auch
    for (let i = 0; i < 4; i++) {
      D.markOuter(L, i % 2 ? -1 : top); D.markOuter(Rt, i % 2 ? top : -1);
      await D.wait(700);
    }
    D.markOuter(L, top); D.markOuter(Rt, top);
  }

  Explainer.register("oktettregel", {
    title: "Die Oktettregel",
    short: "Oktettregel",
    subtitle: "Einfach erklärt, Schritt für Schritt",
    scenes: SCENES
  });
})();
