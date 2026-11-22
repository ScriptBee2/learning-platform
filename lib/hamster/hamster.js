// Hamster-Maskottchen 1.0 – animierter Quiz- und Tipp-Hamster (SVG + kleine 2D-Animations-Engine).
// Keine Abhängigkeiten, kein Build-Schritt, läuft auch direkt von der Festplatte (file://).
//
// Einbinden:  <link rel="stylesheet" href="hamster/hamster.css">
//             <script src="hamster/hamster.js"></script>      → globales Objekt "Hamster"
//
//   Hamster.show(container, punkte, gesamt, opts?)  Ergebnis-Hamster (Auftritt + Stimmungs-Loop + Text)
//   Hamster.tips({ tips, greeting, … })             Tipp-Hamster in der Ecke (wie Karl Klammer)
//   Hamster.create(stage, { mood | clip })          nackter Hamster, z. B. für Vorschauseiten
//   Hamster.defaults                                Texte, Schwellen, Speicher-Schlüssel
//   Hamster.setSpeed(r) / Hamster.setPaused(b)      Tempo / Pause für alle Hamster
// Details und Optionen: hamster/README.md
//
// Aufbau: Jeder "Clip" ist eine Zeitleiste aus Posen (Keyframes). Darüber liegen
// prozedurale Ebenen: Atmen, Blinzeln, Schnuppern, Zittern, Ohrzucken und Federn
// (Ohren, Haarbüschel, Schnurrhaare, Unterarme), die Bewegungen nachschwingen
// lassen. Jede Stimmung hat ein eigenes "micro"-Profil für diese Kleinigkeiten.
(function () {
  "use strict";

  const REDUCED = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const LINE = "#74391a";
  const OUT = 'stroke="' + LINE + '" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"';
  const SOFT = 'stroke="#c8784a" stroke-width="1.2"';
  const CONFETTI = ["#f5c97a", "#60a5fa", "#22d3ee", "#fbbf24", "#c084fc", "#f87171", "#6ee7b7", "#fb923c"];
  const TALK = ["o", "smile", "w", "flat", "o", "smile", "yawn"];

  // ---------------------------------------------------------------- Easing
  const EASE = {
    lin: function (t) { return t; },
    in: function (t) { return t * t; },
    out: function (t) { return 1 - (1 - t) * (1 - t); },
    io: function (t) { return 0.5 - Math.cos(Math.PI * t) / 2; },
    back: function (t) { const c = 1.9; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); }
  };

  // ---------------------------------------------------------------- Posen
  // Arme: 0° = hängt nach unten, positiv = nach links ausgestellt (Sicht des Betrachters).
  const REST = {
    x: 0, y: 0, rot: 0, sx: 1, sy: 1,
    faceX: 0, faceY: 0, lookX: 0, lookY: 0,
    armL: -55, armR: 55, bendL: 22, bendR: 22,  // bend = Ellbogenbeuge (Grad)
    footL: 0, footR: 0,
    earL: 0, earR: 0,                 // Ohren nach außen geklappt (Grad)
    brow: 0, browY: 0, browTilt: 0,   // browTilt > 0 = traurig (innen hoch)
    blush: 0.6,
    tear: -1, tear2: -1,              // Tränen links/rechts: 0…1 = rollt, <0 = keine
    trailL: 0, trailR: 0,             // nasse Tränenspur auf der Backe
    well: 0,                          // Tränen stehen in den Augen (0…1)
    shiver: 0,                        // Zittern / Schluchzen (0…1)
    attend: 0,                        // 1 = schaut zum Mauszeiger
    eyes: "open", mouth: "w"
  };
  const DISCRETE = { eyes: true, mouth: true };

  // Clip = Dauer + Grundpose + Keyframes [zeit, {params}, easing].
  // Parameter ohne Keyframe bei 0 bzw. am Ende bekommen dort automatisch die Grundpose.
  function clip(dur, base, keys, extra) {
    const full = Object.assign({}, REST, base);
    const tracks = {};
    keys.forEach(function (k) {
      const ease = EASE[k[2] || "io"];
      Object.keys(k[1]).forEach(function (p) {
        (tracks[p] = tracks[p] || []).push([k[0], k[1][p], ease]);
      });
    });
    Object.keys(tracks).forEach(function (p) {
      const tr = tracks[p];
      tr.sort(function (a, b) { return a[0] - b[0]; });
      if (tr[0][0] > 0) tr.unshift([0, full[p], EASE.io]);
      if (!DISCRETE[p] && tr[tr.length - 1][0] < dur) tr.push([dur, full[p], EASE.io]);
    });
    return Object.assign({ dur: dur, full: full, tracks: tracks, events: [], still: 0, micro: {} }, extra);
  }

  function sample(c, t, out) {
    for (const p in c.full) out[p] = c.full[p];
    for (const p in c.tracks) {
      const tr = c.tracks[p];
      if (DISCRETE[p]) {
        let v = tr[0][1];
        for (let i = 0; i < tr.length && tr[i][0] <= t; i++) v = tr[i][1];
        out[p] = v;
        continue;
      }
      if (t <= tr[0][0]) { out[p] = tr[0][1]; continue; }
      let i = 1;
      while (i < tr.length && tr[i][0] < t) i++;
      if (i >= tr.length) { out[p] = tr[tr.length - 1][1]; continue; }
      const a = tr[i - 1], b = tr[i];
      const u = (t - a[0]) / ((b[0] - a[0]) || 1);
      out[p] = a[1] + (b[1] - a[1]) * b[2](u);
    }
    return out;
  }

  // ---------------------------------------------------------------- Clips
  const BASE = {
    sad:     { earL: 42, earR: 42, brow: 1, browY: -3, browTilt: 20, blush: 0.35, eyes: "sob", mouth: "frown",
               faceY: 3, lookY: 1.5, armL: -62, armR: 62, well: 0.3 },
    ok:      { eyes: "open", mouth: "w" },
    great:   { eyes: "open", mouth: "smile" },
    perfect: { eyes: "star", mouth: "big" },
    tip:     { attend: 1 }
  };

  // Kleinigkeiten pro Stimmung (prozedural, laufen über dem Clip):
  //   sniff  = Schnupper-Anfälle pro Sekunde     shiver = Grundzittern
  //   quiver = Augen/Brauen/Lippe beben           blushPulse = Wangen glühen
  //   cheekPuff = Backen aufplustern              starSpin = Sternaugen drehen sich
  //   perk   = Ohren spitzen, wenn sich die Maus bewegt
  const MICRO = {
    sad:     { sniff: 0.22, shiver: 0.15, quiver: 1 },
    ok:      { sniff: 0.35, blushPulse: 0.08 },
    great:   { sniff: 0.12, blushPulse: 0.2, cheekPuff: 1 },
    perfect: { starSpin: 1, blushPulse: 0.35 },
    tip:     { sniff: 0.3, perk: 1 }
  };

  // Auftritt: fällt von oben herein, staucht beim Landen, federt nach.
  function introDrop(base, extra) {
    return clip(1.0, base, [
      [0,    { y: -170, sx: 0.85, sy: 1.2, armL: 150, armR: -150, eyes: "wide", mouth: "o" }],
      [0.32, { y: 0, sx: 0.88, sy: 1.14 }, "in"],
      [0.40, { y: 0, sx: 1.22, sy: 0.76, armL: -20, armR: 20, eyes: "squint" }, "out"],
      [0.58, { y: -10, sx: 0.95, sy: 1.06, eyes: base.eyes, mouth: base.mouth }, "out"],
      [0.72, { y: 0, sx: 1.06, sy: 0.95 }, "in"],
      [0.88, { sx: 1, sy: 1 }, "back"]
    ], extra);
  }

  const CLIPS = {
    intro_ok: introDrop(BASE.ok),
    intro_great: introDrop(BASE.great),
    intro_perfect: introDrop(BASE.perfect, { events: [[0.36, "confetti"]] }),
    // traurig: plumpst kraftlos herunter, die Augen füllen sich
    intro_sad: clip(1.2, BASE.sad, [
      [0,    { y: -90, sy: 1.08, sx: 0.94, eyes: "wide", mouth: "o", brow: 0, earL: 0, earR: 0, faceY: 0, lookY: 0, well: 0 }],
      [0.38, { y: 0, sy: 1.06, sx: 0.95 }, "in"],
      [0.48, { y: 0, sy: 0.88, sx: 1.12 }, "out"],
      [0.75, { sy: 1, sx: 1 }, "back"],
      [0.8,  { eyes: "sob", mouth: "wobble" }], [0.95, { mouth: "frown" }], [1.05, { mouth: "wobble" }], [1.15, { mouth: "frown" }]
    ], { micro: { quiver: 1 } }),

    // 0–4: Tränen steigen, Lippe zittert, Schluchzer, zwei Tränen mit nassen Spuren,
    // Seufzer, Schniefen, reibt sich das Auge, schaut flehend hoch und wimmert.
    sad: clip(7.2, BASE.sad, [
      [0.5, { mouth: "wobble" }], [0.62, { mouth: "frown" }], [0.74, { mouth: "wobble" }],
      [0.86, { mouth: "frown" }], [0.98, { mouth: "wobble" }], [1.1, { mouth: "frown" }],
      [0.4,  { well: 0.3, shiver: 0 }],
      [1.35, { well: 1, shiver: 0.5 }],
      [1.4,  { tear: 0, well: 1, trailL: 0 }], [1.5, { well: 0.45 }],
      [2.7,  { tear: 1 }, "lin"], [2.71, { tear: -1 }, "lin"], [1.9, { trailL: 0.8 }],
      [1.6,  { sy: 1, y: 0, mouth: "whimper", shiver: 0.5 }],
      [1.72, { sy: 1.045, y: -2.5 }, "out"], [1.84, { sy: 0.97, y: 0 }, "in"],
      [1.96, { sy: 1.04, y: -2 }, "out"], [2.08, { sy: 0.97, y: 0 }, "in"],
      [2.2,  { sy: 1.035, y: -1.5 }, "out"], [2.32, { sy: 1, y: 0, shiver: 1 }, "in"],
      [2.45, { mouth: "wobble" }], [2.6, { mouth: "frown" }],
      [2.3,  { tear2: 0, trailR: 0 }], [3.5, { tear2: 1 }, "lin"], [3.51, { tear2: -1 }, "lin"], [2.8, { trailR: 0.8 }],
      [2.6,  { sx: 1, sy: 1, rot: 0, faceY: 3, earL: 42, earR: 42, shiver: 1 }],
      [3.3,  { sx: 1.06, sy: 0.92, rot: -2, faceY: 5, earL: 52, earR: 52, shiver: 0.2, well: 0.5 }],
      [3.6,  { sx: 1.06, sy: 0.92, rot: -2, faceY: 5, earL: 52, earR: 52, y: 0 }],
      [3.72, { sy: 1.05, sx: 0.97, y: -3, eyes: "squeeze" }, "out"], [3.84, { sy: 0.95, sx: 1.04, y: 0 }, "in"],
      [3.96, { sy: 1.04, sx: 0.98, y: -2 }, "out"], [4.08, { sy: 0.97, sx: 1.02, y: 0 }, "in"],
      [4.1,  { armR: 62, bendR: 22 }],
      [4.35, { armR: 150, bendR: 45, rot: 0 }, "out"],
      [4.5, { armR: 143 }], [4.65, { armR: 155 }], [4.8, { armR: 143 }], [4.95, { armR: 155 }],
      [5.15, { armR: 62, bendR: 22, eyes: "sob", lookY: 1.5, browTilt: 20, well: 0.6 }],
      [5.4,  { faceY: -2, lookY: -2.5, sy: 1, sx: 1, earL: 30, earR: 30, browTilt: 28, browY: -4, mouth: "pout", well: 1, shiver: 0.3 }],
      [6.0,  { mouth: "whimper", sy: 1.03 }], [6.12, { sy: 0.98, mouth: "pout" }], [6.24, { sy: 1 }],
      [6.4,  { faceY: -2, lookY: -2.5, earL: 30, earR: 30, browTilt: 28, browY: -4, well: 1 }],
      [6.9,  { faceY: 3, lookY: 1.5, earL: 42, earR: 42, browTilt: 20, browY: -3, mouth: "frown", well: 0.3, shiver: 0 }],
      [5.0,  { trailL: 0.8, trailR: 0.8 }], [7.2, { trailL: 0, trailR: 0 }]
    ], { still: 5.6, micro: MICRO.sad }),

    // 5–7: wiegt sich, schaut sich um, legt den Kopf schief und winkt, tippt mit dem Fuß.
    ok: clip(5.6, BASE.ok, [
      [0.2,  { rot: 0, faceX: 0, lookX: 0 }],
      [0.9,  { rot: -4, faceX: -4, lookX: -3 }],
      [1.6,  { rot: -4, faceX: -4, lookX: -3 }],
      [2.2,  { rot: 4, faceX: 4, lookX: 3 }],
      [2.7,  { rot: 4, faceX: 4, lookX: 3 }],
      [3.0,  { rot: 0, faceX: 0, lookX: 0, armR: 55, eyes: "open", mouth: "w" }],
      [3.35, { rot: 10, armR: -145, eyes: "happy", mouth: "smile" }, "back"],
      [3.5, { armR: -112 }], [3.65, { armR: -145 }], [3.8, { armR: -112 }], [3.95, { armR: -145 }],
      [4.25, { rot: 0, armR: 55, eyes: "open", mouth: "w" }],
      [4.45, { footL: 0, sy: 1 }],
      [4.6, { footL: 6, sy: 1.02 }, "out"], [4.72, { footL: 0, sy: 0.98 }, "in"],
      [4.85, { footL: 6, sy: 1.02 }, "out"], [4.97, { footL: 0, sy: 0.98 }, "in"],
      [5.15, { sy: 1 }]
    ], { still: 3.6, micro: MICRO.ok }),

    // 8–9: zwei Hopser mit Ausholen, Freudentanz, winkt.
    great: clip(4.4, BASE.great, [
      [0.0,  { y: 0, sx: 1, sy: 1, armL: -55, armR: 55 }],
      [0.16, { y: 0, sx: 1.15, sy: 0.84, armL: -15, armR: 15, eyes: "happy" }, "out"],
      [0.24, { y: 0, sx: 0.88, sy: 1.15 }, "out"],
      [0.52, { y: -44, sx: 1, sy: 1, armL: 150, armR: -150 }, "out"],
      [0.80, { y: 0, sx: 0.92, sy: 1.08 }, "in"],
      [0.88, { y: 0, sx: 1.18, sy: 0.82, armL: -20, armR: 20 }, "out"],
      [1.02, { sx: 0.97, sy: 1.04 }, "out"],
      [1.10, { y: 0, sx: 1.08, sy: 0.92 }],
      [1.16, { y: 0, sx: 0.9, sy: 1.12 }, "out"],
      [1.42, { y: -34, sx: 1, sy: 1, armL: 140, armR: -140 }, "out"],
      [1.68, { y: 0, sx: 0.93, sy: 1.07 }, "in"],
      [1.76, { y: 0, sx: 1.16, sy: 0.84, armL: -25, armR: 25 }, "out"],
      [1.98, { sx: 1, sy: 1, armL: -55, armR: 55, eyes: "open" }, "back"],
      [2.15, { rot: 0, armL: -55, armR: 55, eyes: "happy", mouth: "big" }],
      [2.27, { rot: 8, armL: 110, armR: -80 }], [2.39, { rot: -8, armL: 80, armR: -110 }],
      [2.51, { rot: 8, armL: 110, armR: -80 }], [2.63, { rot: -8, armL: 80, armR: -110 }],
      [2.75, { rot: 8, armL: 110, armR: -80 }], [2.87, { rot: -8, armL: 80, armR: -110 }],
      [2.99, { rot: 6, armL: 110, armR: -80 }],
      [3.25, { rot: 0, armL: -55, armR: 55, faceX: 0, eyes: "open", mouth: "smile" }],
      [3.45, { armR: -150, faceX: 2 }, "back"], [3.6, { armR: -115 }], [3.75, { armR: -150 }], [3.9, { armR: -115 }],
      [4.15, { armR: 55, faceX: 0 }]
    ], { still: 2.27, micro: MICRO.great }),

    // 10/10: tief ausholen, Salto, Konfetti, Jubel-Hopser, stolz die Hände in die Hüften.
    perfect: clip(5.0, BASE.perfect, [
      [0.0,  { y: 0, sx: 1, sy: 1, rot: 0, armL: -55, armR: 55 }],
      [0.35, { y: 0, sx: 1.22, sy: 0.76, armL: -5, armR: 5, eyes: "squint", mouth: "smile" }],
      [0.43, { y: 0, sx: 0.85, sy: 1.2, rot: 0, armL: 165, armR: -165 }, "out"],
      [0.62, { sx: 0.88, sy: 0.9, armL: -10, armR: 10 }, "out"],
      [0.92, { y: -72 }, "out"],
      [1.18, { sx: 1, sy: 1, armL: 165, armR: -165, eyes: "star", mouth: "big" }, "out"],
      [1.42, { y: 0, sx: 0.9, sy: 1.12 }, "in"],
      [1.42, { rot: 360 }],
      [1.52, { y: 0, sx: 1.3, sy: 0.72, armL: 100, armR: -100 }, "out"],
      [1.78, { sx: 1, sy: 1, armL: 160, armR: -160 }, "back"],
      [1.9,  { y: 0, sx: 1.08, sy: 0.92, armL: 160, armR: -130 }],
      [2.08, { y: -16, sx: 0.96, sy: 1.05, armL: 130, armR: -160 }, "out"],
      [2.26, { y: 0, sx: 1.08, sy: 0.92, armL: 160, armR: -130 }, "in"],
      [2.44, { y: -16, sx: 0.96, sy: 1.05, armL: 130, armR: -160 }, "out"],
      [2.62, { y: 0, sx: 1.08, sy: 0.92, armL: 160, armR: -130 }, "in"],
      [2.80, { y: -16, sx: 0.96, sy: 1.05, armL: 130, armR: -160 }, "out"],
      [2.98, { y: 0, sx: 1.08, sy: 0.92, armL: 160, armR: -130 }, "in"],
      [3.16, { y: -16, sx: 0.96, sy: 1.05, armL: 130, armR: -160 }, "out"],
      [3.34, { y: 0, sx: 1.08, sy: 0.92 }, "in"],
      [3.55, { sx: 1, sy: 1 }],
      [3.8,  { armL: 35, armR: -35, faceY: 0, sy: 1.03, eyes: "happy", mouth: "smile" }, "back"],
      [4.1, { faceY: -2 }], [4.3, { faceY: 2 }], [4.5, { faceY: 0 }],
      [4.45, { armL: 35, armR: -35, sy: 1.03 }],
      [4.8,  { armL: -55, armR: 55, sy: 1, eyes: "star", mouth: "big" }],
      [5.0,  { rot: 360 }]
    ], { events: [[1.44, "confetti"]], still: 1.85, micro: MICRO.perfect }),

    // ---- Tipp-Hamster ----
    tipHidden: clip(1, { y: 210 }, []),
    tipPeekIn: clip(0.9, { y: 96, attend: 1 }, [
      [0,   { y: 210 }],
      [0.5, { y: 86, sy: 1.06, sx: 0.96 }, "out"],
      [0.7, { y: 96, sy: 1, sx: 1 }]
    ]),
    // lugt über den Rand, Augen folgen der Maus, ab und zu ein Ohrenwackeln
    tipPeek: clip(6, { y: 96, attend: 1 }, [
      [1.5, { y: 96 }], [1.9, { y: 82 }, "out"], [2.6, { y: 82 }], [3.0, { y: 96 }],
      [4.2, { earL: 0, earR: 0 }], [4.3, { earL: -14, earR: -14 }], [4.4, { earL: 4, earR: 4 }],
      [4.5, { earL: -10, earR: -10 }], [4.7, { earL: 0, earR: 0 }]
    ]),
    tipPopUp: clip(0.9, BASE.tip, [
      [0,    { y: 96 }],
      [0.18, { y: 100, sx: 1.08, sy: 0.92 }, "out"],
      [0.5,  { y: -18, sx: 0.92, sy: 1.1, armL: 150, armR: -150, eyes: "wide", mouth: "o" }, "out"],
      [0.72, { y: 0, sx: 1.12, sy: 0.88 }, "in"],
      [0.9,  { sx: 1, sy: 1, eyes: "open", mouth: "smile" }, "back"]
    ]),
    // springt von unten ins Bild und winkt
    tipEnter: clip(1.7, BASE.tip, [
      [0,    { y: 210, sy: 1.15, sx: 0.9 }],
      [0.45, { y: -16, sy: 1.1, sx: 0.92, armL: 140, armR: -140, eyes: "wide", mouth: "o" }, "out"],
      [0.62, { y: 0, sx: 1.14, sy: 0.86 }, "in"],
      [0.82, { sx: 1, sy: 1, armL: -55, rot: 0 }, "back"],
      [0.82, { armR: -150, eyes: "happy", mouth: "smile" }],
      [0.97, { armR: -112 }], [1.0, { rot: 6 }], [1.12, { armR: -148 }],
      [1.27, { armR: -112 }], [1.42, { armR: -148 }], [1.5, { rot: 6 }],
      [1.7,  { armR: 55, rot: 0, eyes: "open" }]
    ]),
    idleCalm: clip(4, BASE.tip, [
      [1.2, { rot: 0, faceX: 0 }], [1.8, { rot: -5, faceX: -2 }], [2.8, { rot: -5, faceX: -2 }], [3.4, { rot: 0, faceX: 0 }]
    ]),
    idleLook: clip(4, BASE.tip, [
      [0.2, { attend: 1, faceX: 0, lookX: 0, rot: 0, brow: 0, browY: 0 }],
      [0.6, { attend: 0, faceX: -5, lookX: -3.5, rot: -3, brow: 0.9, browY: -3 }],
      [1.6, { faceX: -5, lookX: -3.5, rot: -3 }],
      [1.9, { faceX: 5, lookX: 3.5, rot: 3 }],
      [2.8, { faceX: 5, lookX: 3.5, rot: 3, brow: 0.9, browY: -3 }],
      [3.3, { attend: 1, faceX: 0, lookX: 0, rot: 0, brow: 0, browY: 0 }]
    ]),
    // kratzt sich an der Backe
    idleScratch: clip(3.6, BASE.tip, [
      [0.3,  { attend: 0, armR: 55, bendR: 22, rot: 0, faceX: 0, earR: 0 }],
      [0.7,  { armR: 150, bendR: 50, rot: -7, faceX: 2, earR: -8, eyes: "closed" }, "back"],
      [0.85, { armR: 140 }], [1.0, { armR: 154 }], [1.15, { armR: 140 }], [1.3, { armR: 154 }],
      [1.45, { armR: 140 }], [1.6, { armR: 154 }], [1.75, { armR: 146, bendR: 50, rot: -7, faceX: 2, earR: -8 }],
      [2.1,  { armR: 55, bendR: 22, rot: 0, faceX: 0, earR: 0, eyes: "open" }],
      [2.4,  { attend: 1 }]
    ]),
    // gähnt und streckt sich
    idleYawn: clip(3.8, BASE.tip, [
      [0.3, { attend: 0, sy: 1, sx: 1, armL: -55, armR: 55, rot: 0, bendL: 22, bendR: 22 }],
      [0.8, { sy: 1.08, sx: 0.95, armL: 150, armR: -150, bendL: 8, bendR: 8, eyes: "closed", mouth: "yawn" }],
      [1.8, { sy: 1.1, sx: 0.94, armL: 160, armR: -160, rot: 0 }],
      [2.0, { rot: 3 }], [2.1, { rot: -3 }], [2.2, { rot: 2 }], [2.3, { rot: 0 }],
      [2.6, { sy: 0.95, sx: 1.04, armL: -55, armR: 55, bendL: 22, bendR: 22, mouth: "w" }],
      [2.9, { sy: 1, sx: 1, eyes: "open" }, "back"],
      [3.2, { attend: 1 }]
    ]),
    // erzählt: zeigt auf die Sprechblase, wippt mit
    tipTalk: clip(2.4, { attend: 0.6, mouth: "smile", armR: -115, bendR: 30, brow: 1, browY: -2 }, [
      [0.3, { sy: 1.02 }], [0.6, { armR: -135, rot: 3, faceX: 2 }], [0.9, { sy: 0.99 }],
      [1.2, { armR: -110, rot: 0, faceX: 0 }], [1.5, { sy: 1.02 }],
      [1.8, { armR: -132, rot: -2, faceX: -1 }], [2.1, { sy: 0.99 }]
    ]),
    tipHop: clip(0.75, BASE.tip, [
      [0.1,  { y: 0, sx: 1.1, sy: 0.9 }, "out"],
      [0.35, { y: -26, sx: 0.94, sy: 1.08, armL: 130, armR: -130, eyes: "wide", mouth: "o" }, "out"],
      [0.55, { y: 0, sx: 1.1, sy: 0.9 }, "in"],
      [0.75, { sx: 1, sy: 1, eyes: "open", mouth: "smile" }, "back"]
    ]),
    // winkt und taucht ab
    tipBye: clip(1.3, { y: 96, attend: 1 }, [
      [0,    { y: 0, sx: 1, sy: 1 }],
      [0.15, { armR: -150, eyes: "happy", mouth: "smile" }],
      [0.3, { armR: -118 }], [0.45, { armR: -150 }], [0.6, { armR: -118 }],
      [0.75, { armR: 55, eyes: "open", mouth: "w" }],
      [0.85, { y: 0, sx: 1.08, sy: 0.92 }, "out"],
      [1.0,  { y: -8, sx: 0.95, sy: 1.06 }, "out"],
      [1.1,  { sy: 1.08 }]
    ])
  };
  ["tipPeek", "tipTalk", "idleCalm", "idleLook", "idleScratch", "idleYawn"].forEach(function (k) { CLIPS[k].micro = MICRO.tip; });
  const IDLE = ["idleCalm", "idleCalm", "idleLook", "idleScratch", "idleCalm", "idleYawn"];

  // ---------------------------------------------------------------- Form & Fell
  // Grundform "Pausbacken" (Backen gehen weich in die Silhouette über). Fell entsteht
  // als kleine gebogene Dreiecke ("Flicks"), die aus der Kontur wachsen – nur an Backen,
  // Hüften und am Bauchrand, jeweils mit Hüllkurve (am Gruppenrand winzig).
  // Abschnitte = Anteil der Umrisslänge, Pfade laufen im Uhrzeigersinn ab dem Scheitel.
  const PUFF = "M100 40 C130 40 150 56 156 78 C176 88 182 112 168 126 C170 150 146 174 100 174 C54 174 30 150 32 126 C18 112 24 88 44 78 C50 56 70 40 100 40 Z";
  function FL(from, to, n, amp, dir) { return { from: from, to: to, n: n, amp: amp, dir: dir }; }
  function HR(from, to, n, len, dir) { return { from: from, to: to, n: n, len: len, dir: dir }; }
  const FUR_BODY  = [FL(0.235, 0.32, 5, 6, 1), FL(0.68, 0.765, 5, 6, -1), FL(0.33, 0.43, 5, 5.5, 1), FL(0.57, 0.67, 5, 5.5, -1)];
  const FUR_CHEST = [FL(0.34, 0.5, 5, 4.8, -1), FL(0.5, 0.66, 5, 4.8, 1)];
  const HAIR_BODY = [HR(0.2, 0.3, 3, 6, 1), HR(0.7, 0.8, 3, 6, -1), HR(0.32, 0.42, 3, 7, 1), HR(0.58, 0.68, 3, 7, -1)];
  const HAIR_STYLE = 'fill="none" stroke="#c96f2c" stroke-width="1.1" stroke-linecap="round" opacity=".6"';

  function rnd(seed) { const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function f1(v) { return Math.round(v * 10) / 10; }
  function ellPath(cx, cy, rx, ry) {   // Ellipse im Uhrzeigersinn, Start unten
    return "M" + cx + " " + (cy + ry) + " A" + rx + " " + ry + " 0 0 1 " + cx + " " + (cy - ry) + " A" + rx + " " + ry + " 0 0 1 " + cx + " " + (cy + ry) + " Z";
  }

  let SHAPES = null;
  function shapes() {
    if (SHAPES) return SHAPES;
    const NS = "http://www.w3.org/2000/svg";
    const meas = document.createElementNS(NS, "svg");
    meas.setAttribute("width", "0"); meas.setAttribute("height", "0");
    meas.style.position = "absolute";
    const mp = document.createElementNS(NS, "path");
    meas.appendChild(mp);
    document.body.appendChild(meas);
    function measurer(d) {
      mp.setAttribute("d", d);
      const L = mp.getTotalLength();
      return { L: L, off: function (s, k) {
        s = Math.max(0, Math.min(L, s));
        const p = mp.getPointAtLength(s);
        const a = mp.getPointAtLength(Math.min(L, s + 0.6)), b = mp.getPointAtLength(Math.max(0, s - 0.6));
        let tx = a.x - b.x, ty = a.y - b.y;
        const l = Math.hypot(tx, ty) || 1;
        return [p.x + ty / l * k, p.y - tx / l * k];
      } };
    }
    function P(pt) { return f1(pt[0]) + " " + f1(pt[1]); }
    function fur(d, regions, seed) {
      const m = measurer(d), L = m.L, off = m.off;
      const R = regions.map(function (r) { return { s0: r.from * L, s1: r.to * L, r: r }; }).sort(function (x, y) { return x.s0 - y.s0; });
      let out = "M" + P(off(0, 0)), s = 0, ri = 0, k = 0;
      while (s < L - 0.01) {
        const reg = R[ri];
        if (reg && s >= reg.s0 - 0.01) {
          const r = reg.r, ws = [];
          for (let j = 0; j < r.n; j++) ws.push((0.6 + 0.8 * rnd(seed * 17 + j * 3 + ri)) * (0.55 + 0.45 * Math.sin(Math.PI * (j + 0.5) / r.n)));
          const wsum = ws.reduce(function (x, y) { return x + y; }, 0);
          let a = reg.s0;
          for (let j = 0; j < r.n; j++) {
            const w = (reg.s1 - reg.s0) * ws[j] / wsum, b = a + w;
            const env = Math.pow(Math.sin(Math.PI * ((a + w / 2 - reg.s0) / (reg.s1 - reg.s0))), 0.9);
            const A = r.amp * (0.15 + 0.85 * env) * (0.75 + 0.25 * rnd(seed * 13 + k)); k++;
            const jit = (rnd(seed * 7 + k) - 0.5) * 0.2;
            if (r.dir > 0) {
              out += "Q" + P(off(a + w * 0.75, A * 0.85)) + " " + P(off(b + w * (0.5 + jit), A)) +
                     "Q" + P(off(b + w * 0.02, A * 0.12)) + " " + P(off(b, 0));
            } else {
              out += "Q" + P(off(a - w * 0.02, A * 0.12)) + " " + P(off(a - w * (0.5 + jit), A)) +
                     "Q" + P(off(a + w * 0.25, A * 0.85)) + " " + P(off(b, 0));
            }
            a = b;
          }
          s = reg.s1; ri++;
          continue;
        }
        s = Math.min(L, s + 2.5, reg ? reg.s0 : L);
        out += "L" + P(off(s, 0));
      }
      return out + "Z";
    }
    function hairs(d, regions, seed) {
      const m = measurer(d), L = m.L, off = m.off;
      let out = "";
      regions.forEach(function (r, ri) {
        for (let j = 0; j < r.n; j++) {
          const s0 = (r.from + (r.to - r.from) * (j + 0.5) / r.n) * L;
          const env = 0.35 + 0.65 * Math.sin(Math.PI * (j + 0.5) / r.n);
          const len = r.len * env * (0.75 + 0.4 * rnd(seed * 11 + ri * 5 + j));
          const inset = 3 + 3 * rnd(seed * 23 + j);
          out += "M" + P(off(s0, -inset)) + "Q" + P(off(s0 + r.dir * len * 0.5, -inset + 1.2)) + " " + P(off(s0 + r.dir * len, -inset - 2.5));
        }
      });
      return out;
    }
    SHAPES = {
      body: fur(PUFF, FUR_BODY, 1),
      belly: fur(ellPath(100, 146, 38, 28), FUR_CHEST, 50),
      hair: hairs(PUFF, HAIR_BODY, 3)
    };
    meas.remove();
    return SHAPES;
  }

  // ---------------------------------------------------------------- SVG-Figur
  function star(r1, r2) {
    let d = "";
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? r2 : r1, a = -Math.PI / 2 + i * Math.PI / 5;
      d += (i ? "L" : "M") + (r * Math.cos(a)).toFixed(1) + " " + (r * Math.sin(a)).toFixed(1);
    }
    return d + "Z";
  }

  // m = 1 linkes Auge, -1 rechtes (spiegelt Kneifaugen und Lider)
  function eyeVariants(m, id) {
    const lidFill = "url(#hFur" + (m > 0 ? "L" : "R") + id + ")";
    return '<g data-v="open"><circle r="9" fill="url(#hEye' + id + ')"/><circle cx="3" cy="-4" r="3.2" fill="#fff"/><circle cx="-3" cy="4" r="1.6" fill="#fff" opacity=".75"/></g>' +
      '<g data-v="wide"><circle r="10.5" fill="url(#hEye' + id + ')"/><circle cx="3.5" cy="-4" r="4.3" fill="#fff"/><circle cx="-3.5" cy="4.5" r="2" fill="#fff" opacity=".8"/></g>' +
      // großes, nasses Weinauge mit hängendem Lid und Tränensee
      '<g data-v="sob"><circle r="14" fill="url(#hEye' + id + ')"/>' +
        '<g clip-path="url(#hEyeClip' + id + ')">' +
          '<ellipse data-q="pool" cx="0" cy="11" rx="14" ry="6" fill="#9fd8ff" opacity=".55"/>' +
          '<g data-q="shine"><circle cx="4.4" cy="-3" r="5.4" fill="#fff"/><circle cx="-5" cy="5" r="2.7" fill="#fff" opacity=".9"/>' +
            '<circle cx="6.8" cy="5" r="1.5" fill="#fff" opacity=".75"/></g>' +
          '<path d="M' + (-17 * m) + " -7 Q" + (-6 * m) + " -11.5 " + (6 * m) + " -17 L" + (-17 * m) + ' -20 Z" fill="' + lidFill + '" stroke="' + LINE + '" stroke-width="2"/>' +
        "</g>" +
        '<path data-q="wet" d="M-10 10.4 Q0 14.6 10 10.4" fill="none" stroke="#d6f1ff" stroke-width="1.6" stroke-linecap="round" opacity=".9"/></g>' +
      '<g data-v="happy"><path d="M-8 3 Q0 -9 8 3" fill="none" ' + OUT + ' stroke-width="4"/></g>' +
      '<g data-v="closed"><path d="M-8 -1 Q0 6 8 -1" fill="none" ' + OUT + ' stroke-width="3.5"/></g>' +
      // fest zugekniffen, mit nassem Rand
      '<g data-v="squeeze"><path d="M-10 -3 Q0 5 10 -3" fill="none" ' + OUT + ' stroke-width="3.4"/>' +
        '<path d="M-7 4.5 Q0 7.5 7 4.5" fill="none" stroke="#9fd8ff" stroke-width="1.8" stroke-linecap="round"/></g>' +
      '<g data-v="squint"><path d="M' + (-6 * m) + " -6 L" + (5 * m) + " 0 L" + (-6 * m) + ' 6" fill="none" ' + OUT + ' stroke-width="3.5"/></g>' +
      '<g data-v="star"><g data-q="star"><path d="' + star(12.5, 5.4) + '" fill="#fde047" stroke="' + LINE + '" stroke-width="2" stroke-linejoin="round"/>' +
        '<circle cx="-2.5" cy="-3" r="1.8" fill="#fff"/></g></g>';
  }

  const MOUTHS = {
    w: '<path d="M91 108 Q95.5 114 100 108 Q104.5 114 109 108" fill="none" ' + OUT + '/>' +
       '<rect x="97.6" y="108.6" width="4.8" height="4" rx="1.2" fill="#fff" stroke="' + LINE + '" stroke-width="1"/>',
    smile: '<path d="M87 107 Q100 128 113 107 Q100 111 87 107 Z" fill="#8a2c1c" ' + OUT + '/>' +
           '<ellipse cx="100" cy="114.5" rx="5.5" ry="2.5" fill="#f58ba0"/>' +
           '<rect x="96" y="107.5" width="8" height="5.5" rx="1.5" fill="#fff"/>',
    big: '<path d="M84 105 Q100 134 116 105 Q100 110 84 105 Z" fill="#8a2c1c" ' + OUT + '/>' +
         '<ellipse cx="100" cy="116" rx="7" ry="3" fill="#f58ba0"/>' +
         '<rect x="95.5" y="106.5" width="9" height="6" rx="1.5" fill="#fff"/>',
    o: '<ellipse cx="100" cy="112" rx="5.5" ry="6.5" fill="#8a2c1c" ' + OUT + ' stroke-width="2.4"/>' +
       '<ellipse cx="100" cy="115.5" rx="3.2" ry="1.8" fill="#f58ba0"/>',
    yawn: '<ellipse cx="100" cy="114" rx="8" ry="10" fill="#8a2c1c" ' + OUT + ' stroke-width="2.4"/>' +
          '<ellipse cx="100" cy="119.5" rx="5" ry="3" fill="#f58ba0"/>',
    frown: '<path d="M90 117 Q100 109 110 117" fill="none" ' + OUT + '/>',
    wobble: '<path d="M89 116 Q93 110.5 97 114 Q100.5 117 104 113 Q107.5 110.5 111 115.5" fill="none" ' + OUT + '/>',
    // Wimmern: kleiner, zittriger offener Mund
    whimper: '<path d="M90 116 Q93 110.5 97 113.5 Q100 115.5 103 113.5 Q107 110.5 110 116 Q100 121.5 90 116 Z" fill="#8a2c1c" ' + OUT + ' stroke-width="2.2"/>' +
             '<ellipse cx="100" cy="118" rx="3.6" ry="1.4" fill="#f58ba0"/>',
    // Schmollmund: Unterlippe vorgeschoben
    pout: '<path d="M90 116 Q100 110 110 116" fill="none" ' + OUT + '/>' +
          '<path d="M94.5 117.5 Q100 121.5 105.5 117.5" fill="none" ' + OUT + ' stroke-width="2.2"/>',
    flat: '<path d="M93 111 L107 111" fill="none" ' + OUT + '/>'
  };

  const PAW_LINE = 'stroke="#a65a2a" stroke-width="1.6"';
  const PAW = '<ellipse rx="7.4" ry="6.6" fill="#ffd2b8" ' + PAW_LINE + '/>' +
    '<circle cx="-3.8" cy="5.2" r="2.1" fill="#ffc4a8" ' + PAW_LINE + '/>' +
    '<circle cx="0" cy="6.5" r="2.1" fill="#ffc4a8" ' + PAW_LINE + '/>' +
    '<circle cx="3.8" cy="5.2" r="2.1" fill="#ffc4a8" ' + PAW_LINE + '/>';

  function rigSVG(id) {
    const F = "url(#hFur" + id + ")";
    const SH = shapes();
    // leicht ovale Ohren – so sieht man auch, wenn sie wegklappen
    function ear(p, cx) {
      return '<g data-p="' + p + '"><ellipse cx="' + cx + '" cy="48" rx="15" ry="16.8" fill="' + F + '" ' + OUT + '/>' +
        '<ellipse cx="' + cx + '" cy="49.5" rx="8.3" ry="10.2" fill="url(#hEar' + id + ')"/></g>';
    }
    // Arm im Illustrationsstil: verjüngte Form im selben Fell, Kontur wie der Körper,
    // die an der Schulter weich einblendet (Maske mit radialem Verlauf um die Schulter).
    // Form, Verlauf und Pfote werden jedes Bild neu gesetzt.
    function arm(p) {
      const mk = "hAM" + id + p;
      return '<g data-p="' + p + '">' +
        '<radialGradient data-q="grad" id="' + mk + 'g" gradientUnits="userSpaceOnUse" cx="100" cy="117" r="12">' +
          '<stop offset="0.3" stop-color="#000"/><stop offset="1" stop-color="#fff"/></radialGradient>' +
        '<mask id="' + mk + '" maskUnits="userSpaceOnUse" x="-60" y="-60" width="320" height="320">' +
          '<rect x="-60" y="-60" width="320" height="320" fill="url(#' + mk + 'g)"/></mask>' +
        '<path data-q="fill" fill="' + F + '"/>' +
        '<path data-q="line" fill="none" stroke="' + LINE + '" stroke-width="2.4" stroke-linejoin="round" mask="url(#' + mk + ')"/>' +
        '<g data-q="paw">' + PAW + "</g></g>";
    }
    function foot(p) {
      return '<g data-p="' + p + '"><ellipse rx="13" ry="7" fill="#ffd2b8" stroke="#a65a2a" stroke-width="2"/>' +
        '<circle cx="-6.5" cy="4.2" r="2.4" fill="#ffc4a8" ' + SOFT + '/><circle cx="0" cy="5.6" r="2.4" fill="#ffc4a8" ' + SOFT + '/>' +
        '<circle cx="6.5" cy="4.2" r="2.4" fill="#ffc4a8" ' + SOFT + "/></g>";
    }
    function tear(p) {
      return '<g data-p="' + p + '"><path d="M0 -6 C0 -6 6 1 6 5 A6 6 0 0 1 -6 5 C-6 1 0 -6 0 -6 Z" fill="#9fd8ff" stroke="#3b82c4" stroke-width="1.4"/>' +
        '<circle cx="-2" cy="4" r="1.5" fill="#fff" opacity=".85"/></g>';
    }
    function furGrad(gid, cx, cy, light) {
      return '<radialGradient id="' + gid + '" gradientUnits="userSpaceOnUse" cx="' + cx + '" cy="' + cy + '" r="115">' +
        (light
          ? '<stop offset="0" stop-color="#ffe0ad"/><stop offset="0.6" stop-color="#fbbd78"/><stop offset="1" stop-color="#ec9a52"/>'
          : '<stop offset="0" stop-color="#ffcf8f"/><stop offset="0.6" stop-color="#f4a55a"/><stop offset="1" stop-color="#d9772e"/>') +
        "</radialGradient>";
    }
    let mouths = "";
    for (const k in MOUTHS) mouths += '<g data-v="' + k + '">' + MOUTHS[k] + "</g>";

    return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">' +
      "<defs>" +
        furGrad("hFur" + id, 82, 70) +
        furGrad("hFurL" + id, 4, -18) +      // gleiches Fell, im Koordinatensystem des linken Auges
        furGrad("hFurR" + id, -40, -18) +    // … und des rechten
        '<radialGradient id="hEye' + id + '" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#6a3a1c"/><stop offset="1" stop-color="#160904"/></radialGradient>' +
        '<radialGradient id="hEar' + id + '" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#fbc3ce"/><stop offset="1" stop-color="#e8889e"/></radialGradient>' +
        '<clipPath id="hClip' + id + '"><path d="' + SH.body + '"/></clipPath>' +
        '<clipPath id="hEyeClip' + id + '"><circle r="14"/></clipPath>' +
      "</defs>" +
      '<ellipse data-p="shadow" cx="100" cy="180" rx="48" ry="7" fill="rgba(0,0,0,0.28)"/>' +
      '<g data-p="root" class="h-root">' +
        ear("earL", 64) + ear("earR", 136) +
        '<path d="' + SH.body + '" fill="' + F + '" ' + OUT + "/>" +
        '<path d="' + SH.belly + '" fill="#fff3df" clip-path="url(#hClip' + id + ')"/>' +
        '<path d="' + SH.hair + '" ' + HAIR_STYLE + "/>" +
        '<path data-p="tuft" d="M94 44 Q97 33 100 42 Q103 32 106 44" fill="none" ' + OUT + "/>" +
        '<g data-p="face">' +
          '<ellipse cx="100" cy="104" rx="22" ry="14" fill="#fff3df"/>' +
          '<ellipse data-p="blushL" cx="60" cy="109" rx="9" ry="5.5" fill="#ff8fa3"/>' +
          '<ellipse data-p="blushR" cx="140" cy="109" rx="9" ry="5.5" fill="#ff8fa3"/>' +
          '<path data-p="trailL" d="M69 101 Q65 113 66 128" fill="none" stroke="#9fd8ff" stroke-width="2.6" stroke-linecap="round"/>' +
          '<path data-p="trailR" d="M131 101 Q135 113 134 128" fill="none" stroke="#9fd8ff" stroke-width="2.6" stroke-linecap="round"/>' +
          '<g data-p="eyeL">' + eyeVariants(1, id) + "</g>" +
          '<g data-p="eyeR">' + eyeVariants(-1, id) + "</g>" +
          '<path data-p="browL" d="M-9 1 Q0 -3 9 1" fill="none" ' + OUT + ' stroke-width="2.4"/>' +
          '<path data-p="browR" d="M-9 1 Q0 -3 9 1" fill="none" ' + OUT + ' stroke-width="2.4"/>' +
          '<g data-p="whiskL"><path d="M79 101 L58 97 M79 105.5 L57 106.5 M80 110 L61 115" stroke="' + LINE + '" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/></g>' +
          '<g data-p="whiskR"><path d="M121 101 L142 97 M121 105.5 L143 106.5 M120 110 L139 115" stroke="' + LINE + '" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/></g>' +
          '<g data-p="nose"><path d="M95 99 Q100 96 105 99 Q103 104 100 104 Q97 104 95 99 Z" fill="#e8677f" stroke="' + LINE + '" stroke-width="1.4" stroke-linejoin="round"/>' +
            '<ellipse cx="98.4" cy="98.9" rx="1.7" ry="0.9" fill="#fff" opacity=".6"/></g>' +
          '<g data-p="mouth">' + mouths + "</g>" +
          tear("tearL") + tear("tearR") +
        "</g>" +
        foot("footL") + foot("footR") +
        arm("armL") + arm("armR") +
      "</g></svg>";
  }

  // ---------------------------------------------------------------- Engine
  let uid = 0, speed = 1, paused = false, running = false, lastNow = 0;
  const live = [];
  let POINTER = null;
  window.addEventListener("pointermove", function (e) {
    POINTER = { x: e.clientX, y: e.clientY, t: performance.now() };
  }, { passive: true });

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function n(v) { return Math.round(v * 100) / 100; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function spring() { return { x: 0, v: 0 }; }
  function stepSpring(sp, target, k, c, dt) {
    const steps = Math.ceil(dt * 240), h = dt / steps;
    for (let i = 0; i < steps; i++) { sp.v += (k * (target - sp.x) - c * sp.v) * h; sp.x += sp.v * h; }
  }
  function resolve(c) { return typeof c === "string" ? CLIPS[c] : c; }
  const DEG = Math.PI / 180;

  function frame(now) {
    const raw = Math.min(0.05, (now - lastNow) / 1000);
    lastNow = now;
    const dt = paused ? 0 : raw * speed;
    for (let i = live.length - 1; i >= 0; i--) {
      const h = live[i];
      if (!h.svg.isConnected) { live.splice(i, 1); continue; }
      h.update(dt);
    }
    if (live.length) requestAnimationFrame(frame);
    else running = false;
  }
  function ensureRunning() {
    if (running) return;
    running = true;
    lastNow = performance.now();
    requestAnimationFrame(frame);
  }

  function create(stage, opts) {
    opts = opts || {};
    const id = ++uid;
    stage.classList.add("hamster-stage");
    stage.innerHTML = rigSVG(id) + '<div class="hamster-fx"></div>';
    const svg = stage.querySelector("svg"), fx = stage.querySelector(".hamster-fx");
    const P = {};
    svg.querySelectorAll("[data-p]").forEach(function (el) { P[el.getAttribute("data-p")] = el; });
    function q(root, name) { return root.querySelector('[data-q="' + name + '"]'); }
    function variants(g) {
      const m = {};
      g.querySelectorAll("[data-v]").forEach(function (v) { m[v.getAttribute("data-v")] = v; v.style.display = "none"; });
      return { m: m, cur: null };
    }
    const V = { eyeL: variants(P.eyeL), eyeR: variants(P.eyeR), mouth: variants(P.mouth) };
    const SOB = [V.eyeL.m.sob, V.eyeR.m.sob].map(function (g) { return { pool: q(g, "pool"), shine: q(g, "shine"), wet: q(g, "wet") }; });
    const STARS = [q(V.eyeL.m.star, "star"), q(V.eyeR.m.star, "star")];
    const ARMS = [P.armL, P.armR].map(function (g) {
      return { fill: q(g, "fill"), line: q(g, "line"), grad: q(g, "grad"), paw: q(g, "paw") };
    });
    function showV(vv, name) {
      if (vv.cur === name) return;
      if (vv.cur) vv.m[vv.cur].style.display = "none";
      const el = vv.m[name];
      if (el) el.style.display = "";
      vv.cur = name;
    }

    const h = {
      svg: svg, stage: stage,
      cur: null, curLoop: false, loop: null, onEnd: null, t: 0, clock: Math.random() * 10,
      pose: {}, from: null, blend: 1, drawn: false,
      prev: null,
      sp: {
        flop: spring(), swing: spring(), tuft: spring(), cheek: spring(), whisk: spring(), perk: spring(),
        armL: spring(), armR: spring()
      },
      blinkAt: 1 + Math.random() * 2, blinkT: -1, dbl: false,
      twitchAt: 3 + Math.random() * 3, twitchT: -1,
      sniffAt: 1 + Math.random() * 2, sniffT: -1, sniffN: 3,
      talking: false, viseme: "o", visemeAt: 0,
      follow: false, look: { x: 0, y: 0, fx: 0, fy: 0 }, rect: null, rectAt: 0,
      particles: [], twinkles: []
    };

    function switchTo(c, loop) {
      if (h.cur && h.drawn) { h.from = Object.assign({}, h.pose); h.blend = 0; }
      h.cur = c; h.curLoop = loop; h.t = 0;
    }
    function startLoop() {
      if (!h.loop) return;
      switchTo(resolve(Array.isArray(h.loop) ? pick(h.loop) : h.loop), true);
    }
    // einmal abspielen, danach zurück in den Loop
    h.play = function (name, then) { switchTo(resolve(name), false); h.onEnd = then || null; };
    // Loop setzen; läuft gerade ein Einmal-Clip, startet er erst danach
    h.setLoop = function (l) { h.loop = l; if (!h.cur || h.curLoop) startLoop(); };
    h.destroy = function () { stage.innerHTML = ""; };

    function fire(name) {
      if (name === "confetti") confetti();
    }

    function confetti() {
      if (REDUCED) return;
      const w = stage.clientWidth || 160, hh = stage.clientHeight || 160;
      for (let i = 0; i < 42; i++) {
        const el = document.createElement("i");
        el.className = "hamster-confetti" + (i % 3 === 0 ? " hamster-confetti--round" : "");
        el.style.background = CONFETTI[i % CONFETTI.length];
        fx.appendChild(el);
        h.particles.push({
          el: el, x: w * (0.5 + (Math.random() - 0.5) * 0.3), y: hh * 0.8,
          vx: (Math.random() - 0.5) * 460, vy: -(320 + Math.random() * 420),
          r: Math.random() * 360, vr: (Math.random() - 0.5) * 900,
          f: Math.random() * 6, vf: 6 + Math.random() * 9,
          life: 0, max: 1.7 + Math.random() * 0.9
        });
      }
    }

    // Funkelsterne rund um den Hamster (great/perfect)
    h.addTwinkles = function (count) {
      const spots = [[-0.55, -0.32], [0.56, -0.2], [-0.47, 0.22], [0.5, 0.3], [-0.18, -0.58], [0.22, -0.52]];
      for (let i = 0; i < count; i++) {
        const el = document.createElement("i");
        el.className = "hamster-twinkle";
        el.textContent = "✦";
        fx.appendChild(el);
        h.twinkles.push({ el: el, dx: spots[i][0], dy: spots[i][1], ph: i * 0.9 });
      }
    };

    function updateFx(dt) {
      for (let i = h.particles.length - 1; i >= 0; i--) {
        const p = h.particles[i];
        p.life += dt;
        if (p.life >= p.max) { p.el.remove(); h.particles.splice(i, 1); continue; }
        p.vy += 900 * dt;
        p.vx *= Math.exp(-1.5 * dt);
        p.vy *= Math.exp(-2.2 * dt);
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.r += p.vr * dt; p.f += p.vf * dt;
        const o = p.life > p.max - 0.4 ? (p.max - p.life) / 0.4 : 1;
        p.el.style.transform = "translate(" + n(p.x) + "px," + n(p.y) + "px) rotate(" + n(p.r) + "deg) scaleX(" + n(Math.cos(p.f)) + ")";
        p.el.style.opacity = n(o);
      }
      if (h.twinkles.length) {
        const w = stage.clientWidth || 160, hh = stage.clientHeight || 160;
        h.twinkles.forEach(function (s) {
          const ph = h.clock * Math.PI * 2 / 1.6 + s.ph;
          const k = Math.max(0, Math.sin(ph));
          s.el.style.transform = "translate(" + n(w * (0.5 + s.dx)) + "px," + n(hh * (0.45 + s.dy)) + "px) scale(" + n(k) + ") rotate(" + n(ph * 30) + "deg)";
          s.el.style.opacity = n(k);
        });
      }
    }

    const STILL_FX = { blink: 1, flop: 0, swing: 0, tuft: 0, cheek: 0, twitch: 0, whisk: 0, sniff: 0, perk: 0, lagL: 0, lagR: 0, quiver: 0, star: 0 };

    h.update = function (dt) {
      if (!h.cur) return;
      if (dt === 0 && h.drawn) return;
      const s = h.pose;

      if (REDUCED) {
        // Ohne Bewegung: Einmal-Clips sofort beenden, Loops als Standbild zeigen
        if (!h.curLoop) {
          const cb = h.onEnd; h.onEnd = null;
          if (h.loop) startLoop();
          if (cb) cb();
        }
        if (h.drawn && h.staticOf === h.cur) return;
        sample(h.cur, h.cur.still || 0, s);
        h.from = null;
        draw(s, STILL_FX);
        h.staticOf = h.cur;
        return;
      }

      h.clock += dt;
      const c = h.cur, t0 = h.t;
      h.t += dt;
      c.events.forEach(function (e) { if (e[0] > t0 && e[0] <= h.t) fire(e[1]); });
      if (h.t >= c.dur) {
        if (h.curLoop) {
          if (Array.isArray(h.loop)) startLoop(); else h.t -= c.dur;
        } else {
          const cb = h.onEnd; h.onEnd = null;
          if (h.loop) startLoop(); else h.t = c.dur;
          if (cb) cb();
        }
      }
      sample(h.cur, Math.min(h.t, h.cur.dur), s);
      const M = h.cur.micro || {};
      const T = h.clock;

      // weicher Übergang zwischen Clips
      if (h.from && h.blend < 1) {
        h.blend = Math.min(1, h.blend + dt / 0.25);
        const k = EASE.io(h.blend);
        if (Math.abs(h.from.rot - s.rot) > 180) h.from.rot += h.from.rot > s.rot ? -360 : 360;
        for (const p in REST) if (!DISCRETE[p]) s[p] = h.from[p] + (s[p] - h.from[p]) * k;
      }

      // Sprechen: Mundformen wechseln zufällig
      if (h.talking) {
        h.visemeAt -= dt;
        if (h.visemeAt <= 0) { h.viseme = pick(TALK); h.visemeAt = 0.07 + Math.random() * 0.08; }
        s.mouth = h.viseme;
      }

      // Blick zum Mauszeiger
      let pointerActive = false;
      if (h.follow && POINTER && s.attend > 0) {
        if (!h.rect || h.clock - h.rectAt > 0.4) { h.rect = svg.getBoundingClientRect(); h.rectAt = h.clock; }
        const r = h.rect;
        const dx = clamp((POINTER.x - (r.left + r.width / 2)) / 260, -1, 1);
        const dy = clamp((POINTER.y - (r.top + r.height * 0.45 + s.y * r.height / 200)) / 260, -1, 1);
        const k = 1 - Math.exp(-dt * 8);
        h.look.x += (dx * 3.5 - h.look.x) * k; h.look.y += (dy * 2.5 - h.look.y) * k;
        h.look.fx += (dx * 3 - h.look.fx) * k; h.look.fy += (dy * 2 - h.look.fy) * k;
        s.lookX += (h.look.x - s.lookX) * s.attend; s.lookY += (h.look.y - s.lookY) * s.attend;
        s.faceX += (h.look.fx - s.faceX) * s.attend; s.faceY += (h.look.fy - s.faceY) * s.attend;
        pointerActive = performance.now() - POINTER.t < 700;
      }

      // Atmen (traurig: flacher und unruhiger)
      const br = Math.sin(T * Math.PI * 2 / (M.quiver ? 1.9 : 2.6)) * 0.012;
      s.sy *= 1 + br; s.sx *= 1 - br * 0.6;

      // Zittern / Schluchzen
      const shiver = (M.shiver || 0) + s.shiver;
      if (shiver > 0) {
        s.x += Math.sin(T * Math.PI * 2 * 13) * 0.7 * shiver;
        s.rot += Math.sin(T * Math.PI * 2 * 9.5 + 1) * 0.5 * shiver;
      }

      // Wangen glühen
      if (M.blushPulse) s.blush *= 1 + Math.sin(T * Math.PI * 2 * 0.8) * M.blushPulse;

      // Blinzeln (manchmal doppelt)
      let blink = 1;
      h.blinkAt -= dt;
      if (h.blinkAt <= 0 && h.blinkT < 0) { h.blinkT = 0; h.blinkAt = 2.2 + Math.random() * 3.5; h.dbl = Math.random() < 0.2; }
      if (h.blinkT >= 0) {
        h.blinkT += dt;
        const p = h.blinkT / (M.quiver ? 0.22 : 0.16);
        if (p >= 1) { h.blinkT = -1; if (h.dbl) { h.dbl = false; h.blinkAt = 0.1; } }
        else blink = 1 - Math.sin(Math.PI * p) * 0.92;
      }

      // Ohrzucken
      let twitch = 0;
      h.twitchAt -= dt;
      if (h.twitchAt <= 0 && h.twitchT < 0) { h.twitchT = 0; h.twitchAt = 3 + Math.random() * 4; }
      if (h.twitchT >= 0) {
        h.twitchT += dt;
        const p = h.twitchT / 0.4;
        if (p >= 1) h.twitchT = -1; else twitch = Math.sin(p * Math.PI * 3) * (1 - p) * 14;
      }

      // Schnuppern: kurze Serien aus 3–5 Nasenzuckern
      let sniff = 0;
      h.sniffAt -= dt;
      if (M.sniff && h.sniffAt <= 0 && h.sniffT < 0) {
        h.sniffT = 0; h.sniffN = 3 + Math.floor(Math.random() * 3);
        h.sniffAt = (0.6 + Math.random() * 0.8) / M.sniff;
      }
      if (h.sniffT >= 0) {
        h.sniffT += dt;
        if (h.sniffT >= h.sniffN / 9) h.sniffT = -1;
        else sniff = Math.max(0, Math.sin(h.sniffT * 9 * Math.PI * 2));
      }

      // Federn: reagieren auf Geschwindigkeit, Drehung und Stauchung
      if (h.prev && dt > 0) {
        const vy = (s.y - h.prev.y) / dt;
        let dr = s.rot - h.prev.rot;
        dr = ((dr + 540) % 360) - 180;
        const vr = dr / dt;
        const puff = M.cheekPuff ? Math.pow(Math.max(0, Math.sin(T * Math.PI * 2 / 3.2)), 8) * 0.16 : 0;
        stepSpring(h.sp.flop, clamp(-vy * 0.06, -30, 30) + (1 - s.sy) * 70, 170, 9, dt);
        stepSpring(h.sp.swing, clamp(-vr * 0.03, -25, 25), 150, 8, dt);
        stepSpring(h.sp.tuft, clamp(-vy * 0.1, -40, 40) + clamp(-vr * 0.05, -40, 40), 220, 7, dt);
        stepSpring(h.sp.cheek, clamp((1 - s.sy) * 1.1, -0.15, 0.25) + puff, 300, 12, dt);
        stepSpring(h.sp.whisk, clamp(-vy * 0.05, -16, 16) + sniff * 5, 260, 9, dt);
        stepSpring(h.sp.perk, M.perk && pointerActive ? -9 : 0, 120, 12, dt);
        // Unterarme schleifen hinter der Bewegung her (Overlapping Action)
        stepSpring(h.sp.armL, clamp(-(s.armL - h.prev.armL) / dt * 0.07, -40, 40), 140, 9, dt);
        stepSpring(h.sp.armR, clamp(-(s.armR - h.prev.armR) / dt * 0.07, -40, 40), 140, 9, dt);
      }
      h.prev = { y: s.y, rot: s.rot, armL: s.armL, armR: s.armR };

      updateFx(dt);
      draw(s, {
        blink: blink, flop: h.sp.flop.x, swing: h.sp.swing.x, tuft: h.sp.tuft.x, cheek: h.sp.cheek.x,
        twitch: twitch, whisk: h.sp.whisk.x, sniff: sniff, perk: h.sp.perk.x,
        lagL: h.sp.armL.x, lagR: h.sp.armR.x, quiver: M.quiver || 0, star: M.starSpin || 0
      });
    };

    // Arm: je höher er gehoben wird, desto weiter wandert die Schulter zur
    // Körperseite und desto länger wird er. Der Unterarm biegt sich (bend) und
    // schleift bei schnellen Bewegungen nach (lag) – nichts wirkt steif.
    function drawArm(A, angle, bend, lag, side) {
      const r = EASE.io(clamp((Math.abs(angle) - 60) / 60, 0, 1));
      const sx = 100 + side * (31 + 17 * r), sy = 117 - 3 * r;
      const L = 18 + 9 * r;
      const sg = angle >= 0 ? 1 : -1;
      const cA = (angle - sg * bend + lag) * DEG, wA = (angle + lag * 0.35) * DEG;
      const cx = sx - Math.sin(cA) * L * 0.6, cy = sy + Math.cos(cA) * L * 0.6;
      const wx = sx - Math.sin(wA) * L, wy = sy + Math.cos(wA) * L;
      // Kanten der verjüngten Form entlang der gebogenen Mittellinie, dann geglättet
      const N = 10, pts = [], back = [];
      for (let i = 0; i <= N; i++) {
        const t = i / N, u = 1 - t;
        const px = u * u * sx + 2 * u * t * cx + t * t * wx, py = u * u * sy + 2 * u * t * cy + t * t * wy;
        let tx = 2 * u * (cx - sx) + 2 * t * (wx - cx), ty = 2 * u * (cy - sy) + 2 * t * (wy - cy);
        const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
        const hw = 6.8 - 2.2 * t;
        pts.push([px - ty * hw, py + tx * hw]);
        back.push([px + ty * hw, py - tx * hw]);
      }
      for (let i = back.length - 1; i >= 0; i--) pts.push(back[i]);
      const M = pts.length;
      const mid = function (i) { const a = pts[i % M], b = pts[(i + 1) % M]; return n((a[0] + b[0]) / 2) + " " + n((a[1] + b[1]) / 2); };
      let d = "M" + mid(M - 1);
      for (let i = 0; i < M; i++) d += "Q" + n(pts[i][0]) + " " + n(pts[i][1]) + " " + mid(i);
      d += "Z";
      A.fill.setAttribute("d", d);
      A.line.setAttribute("d", d);
      A.grad.setAttribute("cx", n(sx)); A.grad.setAttribute("cy", n(sy));
      const pa = Math.atan2(-(wx - cx), wy - cy) / DEG + lag * 0.8;
      A.paw.setAttribute("transform", "translate(" + n(wx) + " " + n(wy) + ") rotate(" + n(pa) + ")");
    }

    function drawTear(el, p, x0, dir) {
      if (p >= 0 && p <= 1) {
        el.style.display = "";
        el.setAttribute("transform", "translate(" + n(x0 - dir * p * 4) + " " + n(100 + p * 28) + ") scale(" + n(Math.min(1, 0.3 + p * 5)) + ")");
        el.setAttribute("opacity", n(p > 0.8 ? (1 - p) / 0.2 : 1));
      } else {
        el.style.display = "none";
      }
    }

    function draw(s, f) {
      const T = h.clock;
      const puff = 1 + f.cheek * 0.35;
      P.root.setAttribute("transform",
        "translate(" + n(s.x) + " " + n(s.y) + ") rotate(" + n(s.rot) + " 100 110) translate(100 176) scale(" + n(s.sx * puff) + " " + n(s.sy / Math.sqrt(puff)) + ") translate(-100 -176)");
      const air = Math.max(0, -s.y), sh = Math.max(0.35, 1 - air / 140);
      P.shadow.setAttribute("transform", "translate(" + n(100 + s.x) + " 180) scale(" + n(sh * s.sx) + " " + n(sh) + ") translate(-100 -180)");
      P.shadow.setAttribute("opacity", s.y > 4 ? 0 : n(0.4 + sh * 0.6));

      // Drehpunkt an der inneren Unterkante → Ohr klappt nach außen-unten weg
      P.earL.setAttribute("transform", "rotate(" + n(-(s.earL + f.flop + f.perk) + f.swing) + " 70 61)");
      P.earR.setAttribute("transform", "rotate(" + n(s.earR + f.flop + f.perk + f.swing + f.twitch) + " 130 61)");
      P.tuft.setAttribute("transform", "rotate(" + n(f.tuft) + " 100 43)");

      P.face.setAttribute("transform", "translate(" + n(s.faceX) + " " + n(s.faceY - 2) + ")");
      P.blushL.setAttribute("opacity", n(clamp(s.blush, 0, 1))); P.blushR.setAttribute("opacity", n(clamp(s.blush, 0, 1)));

      // Augen
      const canBlink = s.eyes === "open" || s.eyes === "wide" || s.eyes === "sob" || s.eyes === "star";
      const b = canBlink ? f.blink : 1;
      showV(V.eyeL, s.eyes); showV(V.eyeR, s.eyes);
      const qs = s.eyes === "sob" ? 1 + Math.sin(T * 17) * 0.018 * f.quiver : 1;
      P.eyeL.setAttribute("transform", "translate(" + n(78 + s.lookX) + " " + n(88 + s.lookY) + ") scale(" + n(qs) + " " + n(b * qs) + ")");
      P.eyeR.setAttribute("transform", "translate(" + n(122 + s.lookX) + " " + n(88 + s.lookY) + ") scale(" + n(qs) + " " + n(b * qs) + ")");
      if (s.eyes === "sob") {
        // Tränensee steigt und schwappt, Glanzpunkte beben
        const jx = (Math.sin(T * 55) * 0.5 + Math.sin(T * 31) * 0.35) * f.quiver;
        const jy = (Math.sin(T * 43 + 1) * 0.45) * f.quiver;
        const wob = Math.sin(T * 7) * 0.6;
        SOB.forEach(function (e, i) {
          e.shine.setAttribute("transform", "translate(" + n(jx * (i ? -1 : 1)) + " " + n(jy) + ")");
          e.pool.setAttribute("transform", "translate(" + n(Math.sin(T * 5 + i) * 0.8) + " " + n((1 - s.well) * 6.5 + wob) + ") scale(1 " + n(1 + Math.sin(T * 9 + i) * 0.08) + ")");
          e.wet.setAttribute("opacity", n(0.4 + s.well * 0.6));
        });
      }
      if (s.eyes === "star") {
        const sp = f.star ? "rotate(" + n(Math.sin(T * 2.2) * 18) + ") scale(" + n(1 + Math.sin(T * 6) * 0.1) + ")" : "";
        STARS[0].setAttribute("transform", sp); STARS[1].setAttribute("transform", sp);
      }

      const bq = f.quiver ? Math.sin(T * 38) * 0.35 * f.quiver * (1 + s.shiver) : 0;
      P.browL.setAttribute("opacity", n(s.brow)); P.browR.setAttribute("opacity", n(s.brow));
      P.browL.setAttribute("transform", "translate(" + n(78 + s.lookX * 0.3) + " " + n(72 + s.browY + bq) + ") rotate(" + n(-s.browTilt) + ")");
      P.browR.setAttribute("transform", "translate(" + n(122 + s.lookX * 0.3) + " " + n(72 + s.browY - bq) + ") rotate(" + n(s.browTilt) + ")");

      // Nase & Schnurrhaare
      P.nose.setAttribute("transform", "translate(100 " + n(101 - f.sniff * 1.3) + ") scale(" + n(1 + f.sniff * 0.12) + ") translate(-100 -101)");
      P.whiskL.setAttribute("transform", "rotate(" + n(f.whisk) + " 80 104)");
      P.whiskR.setAttribute("transform", "rotate(" + n(-f.whisk) + " 120 104)");

      showV(V.mouth, s.mouth);
      P.mouth.setAttribute("transform", f.quiver ? "translate(" + n(Math.sin(T * 47) * 0.45 * f.quiver) + " 0)" : "");

      // Tränen und nasse Spuren
      drawTear(P.tearL, s.tear, 69, 1);
      drawTear(P.tearR, s.tear2, 131, -1);
      P.trailL.setAttribute("opacity", n(clamp(s.trailL, 0, 1) * 0.7));
      P.trailR.setAttribute("opacity", n(clamp(s.trailR, 0, 1) * 0.7));

      P.footL.setAttribute("transform", "translate(80 " + n(171 - s.footL) + ") rotate(" + n(-s.footL * 3) + ")");
      P.footR.setAttribute("transform", "translate(120 " + n(171 - s.footR) + ") rotate(" + n(s.footR * 3) + ")");
      drawArm(ARMS[0], s.armL, s.bendL, f.lagL, -1);
      drawArm(ARMS[1], s.armR, s.bendR, f.lagR, 1);
      h.drawn = true;
    }

    // Start
    if (opts.mood) {
      h.loop = opts.mood;
      h.play("intro_" + opts.mood);
      if (opts.mood === "great") h.addTwinkles(4);
      if (opts.mood === "perfect") h.addTwinkles(6);
    } else if (opts.clip) {
      const c = CLIPS[opts.clip];
      h.setLoop(opts.hold ? Object.assign({}, c, { dur: c.dur + opts.hold }) : c);
    }
    live.push(h);
    ensureRunning();
    h.update(0.0001);
    return h;
  }

  // ---------------------------------------------------------------- Einstellungen
  // Globale Voreinstellungen. Lassen sich einmal für die ganze Seite ändern
  // (Hamster.defaults.labels.ok = "…") oder pro Aufruf über opts überschreiben.
  const DEFAULTS = {
    labels: { sad: "Weiter üben!", ok: "Schon gut!", great: "Super gemacht!", perfect: "Perfekt!!!" },
    // Anteil richtiger Antworten, ab dem eine Stimmung gilt (perfect = alles richtig)
    thresholds: { great: 0.8, ok: 0.5 },
    texts: {
      tipTitle: "Tipp",
      greetingTitle: "Hallo!",
      more: "Noch ein Tipp",
      close: "Tipp schließen",
      open: "Tipp vom Hamster"
    },
    storageKey: "hamster-greeted"
  };
  function opt(group, local) { return Object.assign({}, DEFAULTS[group], local || {}); }

  // ---------------------------------------------------------------- Ergebnis
  function moodFor(pts, total, thresholds) {
    const th = opt("thresholds", thresholds);
    if (total > 0 && pts >= total) return "perfect";
    const r = total > 0 ? pts / total : 0;
    if (r >= th.great - 1e-9) return "great";
    if (r >= th.ok - 1e-9) return "ok";
    return "sad";
  }

  // Ergebnis-Hamster: Auftritt + Stimmungs-Loop + Text. opts: { labels, thresholds }
  function show(container, pts, total, opts) {
    opts = opts || {};
    const mood = moodFor(pts, total, opts.thresholds);
    container.innerHTML = '<div class="hamster-wrap hamster--' + mood + '"><div class="hamster-stage"></div>' +
      '<p class="hamster-label"></p></div>';
    container.querySelector(".hamster-label").textContent = opt("labels", opts.labels)[mood];
    return create(container.querySelector(".hamster-stage"), { mood: mood });
  }

  // ---------------------------------------------------------------- Tipp-Hamster
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // opts: { tips, greeting, delay, container, remember, storageKey, texts }
  function tips(opts) {
    opts = opts || {};
    const T = opt("texts", opts.texts);
    const storageKey = opts.storageKey || DEFAULTS.storageKey;
    const list = (opts.tips || []).slice();
    const el = document.createElement("div");
    el.className = "hamster-tip" + (opts.container ? " hamster-tip--inline" : "");
    el.innerHTML =
      '<div class="hamster-tip__bubble">' +
        '<button type="button" class="hamster-tip__close">&times;</button>' +
        '<p class="hamster-tip__title"></p>' +
        '<p class="hamster-tip__text"><span class="hamster-tip__ghost" aria-hidden="true"></span><span class="hamster-tip__typed" aria-hidden="true"></span></p>' +
        '<span class="hamster-sr" role="status" aria-live="polite"></span>' +
        (list.length > 1 ? '<button type="button" class="hamster-tip__more"></button>' : "") +
      "</div>" +
      '<button type="button" class="hamster-tip__hamster"></button>';
    (opts.container || document.body).appendChild(el);

    const q = function (sel) { return el.querySelector(sel); };
    const titleEl = q(".hamster-tip__title"), ghost = q(".hamster-tip__ghost"), typed = q(".hamster-tip__typed"), sr = q(".hamster-sr");
    const closeBtn = q(".hamster-tip__close"), hamBtn = q(".hamster-tip__hamster"), more = q(".hamster-tip__more");
    closeBtn.setAttribute("aria-label", T.close);
    hamBtn.setAttribute("aria-label", T.open);
    if (more) more.textContent = T.more;

    const h = create(hamBtn, {});
    h.follow = true;
    h.setLoop("tipHidden");

    let state = "hidden", timer = null, startTimer = null, order = [], pos = 0;

    function nextText() {
      if (pos >= order.length) { order = shuffle(list); pos = 0; }
      return order[pos++];
    }

    function say(text, title) {
      state = "open";
      clearTimeout(timer);
      title = title || T.tipTitle;
      el.classList.add("is-open");
      titleEl.textContent = title;
      ghost.textContent = text;
      sr.textContent = title + ": " + text;
      typed.textContent = "";
      if (REDUCED) { typed.textContent = text; h.setLoop(IDLE); return; }
      el.classList.add("is-typing");
      h.setLoop("tipTalk");
      let i = 0;
      (function tick() {
        i++;
        typed.textContent = text.slice(0, i);
        if (i >= text.length) {
          el.classList.remove("is-typing");
          h.talking = false;
          h.setLoop(IDLE);
          return;
        }
        const ch = text[i - 1];
        const pause = /[.!?:]/.test(ch) ? 260 : ch === "," ? 140 : 0;
        h.talking = pause === 0;
        timer = setTimeout(tick, pause || 30);
      })();
    }

    function stopTalking() {
      clearTimeout(timer);
      h.talking = false;
      el.classList.remove("is-typing");
    }

    // Tipp zeigen: Hamster kommt hoch (oder hüpft, wenn er schon da ist) und erzählt.
    // Ohne Text kommt der nächste Tipp aus der Liste.
    function tell(text, title) {
      if (state === "busy") return;
      text = text || nextText();
      if (!text) return;
      const from = state;
      state = "busy";
      if (from === "open") {
        stopTalking();
        h.play("tipHop", function () { say(text, title); });
      } else {
        h.play(from === "peek" ? "tipPopUp" : "tipEnter", function () { say(text, title); });
      }
      h.setLoop(IDLE);
    }

    function close() {
      if (state !== "open") return;
      stopTalking();
      el.classList.remove("is-open");
      state = "busy";
      h.play("tipBye", function () { state = "peek"; });
      h.setLoop("tipPeek");
    }

    function destroy() {
      clearTimeout(timer);
      clearTimeout(startTimer);
      el.remove();   // die Animation räumt sich selbst ab, sobald die Figur nicht mehr im DOM ist
    }

    hamBtn.addEventListener("click", function () { tell(); });
    if (more) more.addEventListener("click", function () { tell(); });
    closeBtn.addEventListener("click", close);

    let greeted = opts.remember === false ? null : "1";
    if (opts.remember !== false) {
      try { greeted = sessionStorage.getItem(storageKey); } catch (e) { greeted = "1"; }
    }
    startTimer = setTimeout(function () {
      if (opts.greeting && !greeted) {
        try { if (opts.remember !== false) sessionStorage.setItem(storageKey, "1"); } catch (e) { /* egal */ }
        tell(opts.greeting, T.greetingTitle);
      } else {
        state = "busy";
        h.play("tipPeekIn", function () { state = "peek"; });
        h.setLoop("tipPeek");
      }
    }, opts.delay == null ? 1500 : opts.delay);

    return { el: el, hamster: h, tell: tell, close: close, destroy: destroy };
  }

  window.Hamster = {
    version: "1.0.0",
    defaults: DEFAULTS,
    moods: ["sad", "ok", "great", "perfect"],
    clips: Object.keys(CLIPS),
    moodFor: moodFor,
    show: show,
    create: create,
    tips: tips,
    setSpeed: function (r) { speed = r; },
    setPaused: function (b) { paused = !!b; }
  };
})();
