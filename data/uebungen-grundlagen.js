// Übungsaufgaben Mathe-Grundlagen.
// Schema: { topic, level, type, q, note, ergebnis, solution: [{title, text?, tex?}] }
// text darf einfaches HTML enthalten. Farbklassen: b → accent, .hl-b → blue, .hl-muted → gedimmt
// topics: rechenregeln, brueche, potenzen, wurzeln, binom
var UEBUNGEN_GRUNDLAGEN = [

  // ================================================================ rechenregeln
  { topic: "rechenregeln", level: "easy", type: "Berechne",
    q: "3 + 4 \\cdot 2",
    note: "Punkt vor Strich: erst Mal, dann Plus.",
    ergebnis: "11",
    solution: [
      { title: "Punkt vor Strich",
        text: "<p>Erst <b>4 · 2</b> rechnen (Punktrechnung bindet stärker):</p>",
        tex: "3 + \\mathbf{4 \\cdot 2} = 3 + 8" },
      { title: "Ergebnis",
        text: "<p>Dann die Plusrechnung:</p>",
        tex: "= 11" }
    ] },

  { topic: "rechenregeln", level: "easy", type: "Berechne",
    q: "(3 + 4) \\cdot 2",
    note: "Klammer zuerst ausrechnen.",
    ergebnis: "14",
    solution: [
      { title: "Klammer zuerst",
        text: "<p>Was in der Klammer steht, kommt zuerst:</p>",
        tex: "(3 + 4) \\cdot 2 = 7 \\cdot 2" },
      { title: "Ergebnis",
        text: "<p>Dann malnehmen:</p>",
        tex: "= 14" }
    ] },

  { topic: "rechenregeln", level: "easy", type: "Berechne",
    q: "(-3) \\cdot (-4)",
    note: "Minus mal Minus ergibt Plus.",
    ergebnis: "+12",
    solution: [
      { title: "Vorzeichen bestimmen",
        text: "<p>Gleiche Vorzeichen (beide Minus) ergeben <b>Plus</b>.</p>",
        tex: "(-3) \\cdot (-4) = +(3 \\cdot 4)" },
      { title: "Ergebnis",
        text: "<p>Die Zahlen malnehmen:</p>",
        tex: "= +12" }
    ] },

  { topic: "rechenregeln", level: "easy", type: "Berechne",
    q: "(-5) \\cdot 3",
    note: "Minus mal Plus ergibt Minus.",
    ergebnis: "-15",
    solution: [
      { title: "Vorzeichen bestimmen",
        text: "<p>Verschiedene Vorzeichen (Minus und Plus) ergeben <b>Minus</b>.</p>",
        tex: "(-5) \\cdot 3 = -(5 \\cdot 3)" },
      { title: "Ergebnis",
        text: "<p>Die Zahlen malnehmen:</p>",
        tex: "= -15" }
    ] },

  { topic: "rechenregeln", level: "medium", type: "Berechne",
    q: "5 \\div 0",
    note: "Teilen ist Malnehmen rückwärts. Welche Zahl mal 0 ergibt 5?",
    ergebnis: "\\text{nicht definiert}",
    solution: [
      { title: "Teilen als Umkehrung",
        text: "<p>$5 \\div 0 = c$ hieße: $c \\cdot 0 = 5$.</p>" },
      { title: "Es gibt kein Ergebnis",
        text: "<p>Aber <b>alles mal 0 ergibt 0</b>, niemals 5. Keine Zahl passt.</p>" },
      { title: "Ergebnis",
        text: "<p>Durch 0 darf man nicht teilen:</p>",
        tex: "5 \\div 0 \\quad \\text{ist nicht definiert}" }
    ] },

  { topic: "rechenregeln", level: "medium", type: "Berechne",
    q: "12 \\div 4 \\cdot 3",
    note: "Mal und Geteilt sind gleich stark: von links nach rechts.",
    ergebnis: "9",
    solution: [
      { title: "Von links nach rechts",
        text: "<p>Gleiche Stufe → der Reihe nach. Zuerst <b>12 ÷ 4</b>:</p>",
        tex: "12 \\div 4 \\cdot 3 = 3 \\cdot 3" },
      { title: "Ergebnis",
        text: "<p>Dann malnehmen:</p>",
        tex: "= 9" }
    ] },

  { topic: "rechenregeln", level: "medium", type: "Berechne",
    q: "2 + 3^2",
    note: "Potenz vor Plus.",
    ergebnis: "11",
    solution: [
      { title: "Potenz zuerst",
        text: "<p>Potenzen kommen vor der Strichrechnung: $3^2 = 9$.</p>",
        tex: "2 + 3^2 = 2 + 9" },
      { title: "Ergebnis",
        text: "<p>Dann addieren:</p>",
        tex: "= 11" }
    ] },

  { topic: "rechenregeln", level: "easy", type: "Berechne",
    q: "-(-8)",
    note: "Zwei Minus werden zu Plus.",
    ergebnis: "8",
    solution: [
      { title: "Doppeltes Minus",
        text: "<p>Das Gegenteil vom Gegenteil ist das Original:</p>",
        tex: "-(-8) = +8" },
      { title: "Ergebnis",
        text: "<p>Also:</p>",
        tex: "= 8" }
    ] },

  { topic: "rechenregeln", level: "medium", type: "Berechne",
    q: "-3^2",
    note: "Ohne Klammer gehört die Hochzahl nur zur Zahl, nicht zum Minus.",
    ergebnis: "-9",
    solution: [
      { title: "Was gehört zur Potenz?",
        text: "<p>Ohne Klammer bindet die Hochzahl nur an die <b>3</b>, das Minus steht davor:</p>",
        tex: "-3^2 = -(3 \\cdot 3)" },
      { title: "Ergebnis",
        text: "<p>Erst quadrieren, dann das Minus: &nbsp;<span class='hl-muted'>nur $(-3)^2 = 9$</span></p>",
        tex: "= -9" }
    ] },

  { topic: "rechenregeln", level: "easy", type: "Berechne",
    q: "(-12) \\div (-3)",
    note: "Minus durch Minus ergibt Plus.",
    ergebnis: "+4",
    solution: [
      { title: "Vorzeichen bestimmen",
        text: "<p>Gleiche Vorzeichen ergeben <b>Plus</b> — auch beim Teilen.</p>",
        tex: "(-12) \\div (-3) = +(12 \\div 3)" },
      { title: "Ergebnis",
        text: "<p>Die Zahlen teilen:</p>",
        tex: "= +4" }
    ] },

  // ================================================================ brueche
  { topic: "brueche", level: "medium", type: "Berechne",
    q: "\\frac{1}{2} + \\frac{1}{3}",
    note: "Erst gleiche Nenner herstellen, dann die Zähler addieren.",
    ergebnis: "\\frac{5}{6}",
    solution: [
      { title: "Gemeinsamen Nenner finden",
        text: "<p>$\\text{kgV}(2,3) = 6$. Beide Brüche auf Nenner 6 bringen:</p>",
        tex: "\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6}" },
      { title: "Zähler addieren",
        text: "<p>Bei gleichem Nenner nur die Zähler:</p>",
        tex: "= \\frac{5}{6}" }
    ] },

  { topic: "brueche", level: "easy", type: "Berechne",
    q: "\\frac{3}{4} - \\frac{1}{4}",
    note: "Gleicher Nenner: nur die Zähler rechnen, dann kürzen.",
    ergebnis: "\\frac{1}{2}",
    solution: [
      { title: "Zähler subtrahieren",
        text: "<p>Gleicher Nenner → nur die Zähler:</p>",
        tex: "\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}" },
      { title: "Kürzen",
        text: "<p>$\\frac{2}{4}$ durch 2 kürzen:</p>",
        tex: "= \\frac{1}{2}" }
    ] },

  { topic: "brueche", level: "easy", type: "Berechne",
    q: "\\frac{2}{3} \\cdot \\frac{3}{4}",
    note: "Oben mal oben, unten mal unten.",
    ergebnis: "\\frac{1}{2}",
    solution: [
      { title: "Zähler und Nenner malnehmen",
        text: "<p>Zähler mal Zähler, Nenner mal Nenner:</p>",
        tex: "\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12}" },
      { title: "Kürzen",
        text: "<p>$\\frac{6}{12}$ durch 6 kürzen:</p>",
        tex: "= \\frac{1}{2}" }
    ] },

  { topic: "brueche", level: "medium", type: "Berechne",
    q: "\\frac{3}{4} \\div \\frac{3}{8}",
    note: "Durch einen Bruch teilen heißt: mal den Kehrwert.",
    ergebnis: "2",
    solution: [
      { title: "Mal den Kehrwert",
        text: "<p>Den zweiten Bruch umdrehen und malnehmen:</p>",
        tex: "\\frac{3}{4} \\div \\frac{3}{8} = \\frac{3}{4} \\cdot \\frac{8}{3}" },
      { title: "Ausrechnen und kürzen",
        text: "<p>$\\frac{24}{12} = 2$:</p>",
        tex: "= \\frac{24}{12} = 2" }
    ] },

  { topic: "brueche", level: "easy", type: "Kürze vollständig",
    q: "\\frac{12}{18}",
    note: "Oben und unten durch dieselbe Zahl teilen. Was ist der ggT von 12 und 18?",
    ergebnis: "\\frac{2}{3}",
    solution: [
      { title: "Gemeinsamen Teiler finden",
        text: "<p>$\\text{ggT}(12, 18) = 6$.</p>" },
      { title: "Durch 6 teilen",
        text: "<p>Oben und unten durch 6:</p>",
        tex: "\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}" }
    ] },

  { topic: "brueche", level: "easy", type: "Berechne",
    q: "1 + \\frac{1}{2}",
    note: "Schreib die 1 als Bruch mit demselben Nenner.",
    ergebnis: "\\frac{3}{2}",
    solution: [
      { title: "1 als Bruch schreiben",
        text: "<p>$1 = \\frac{2}{2}$:</p>",
        tex: "1 + \\frac{1}{2} = \\frac{2}{2} + \\frac{1}{2}" },
      { title: "Zähler addieren",
        text: "<p>Gleicher Nenner:</p>",
        tex: "= \\frac{3}{2}" }
    ] },

  { topic: "brueche", level: "medium", type: "Berechne",
    q: "\\frac{2}{3} + \\frac{1}{6}",
    note: "Ist ein Nenner ein Vielfaches des anderen, reicht der größere.",
    ergebnis: "\\frac{5}{6}",
    solution: [
      { title: "Gemeinsamen Nenner finden",
        text: "<p>$\\text{kgV}(3,6) = 6$. Den ersten Bruch erweitern:</p>",
        tex: "\\frac{2}{3} + \\frac{1}{6} = \\frac{4}{6} + \\frac{1}{6}" },
      { title: "Zähler addieren",
        text: "<p>Gleicher Nenner:</p>",
        tex: "= \\frac{5}{6}" }
    ] },

  { topic: "brueche", level: "medium", type: "Berechne",
    q: "\\frac{1}{4} \\div \\frac{1}{2}",
    note: "Durch einen Bruch teilen heißt: mal den Kehrwert.",
    ergebnis: "\\frac{1}{2}",
    solution: [
      { title: "Mal den Kehrwert",
        text: "<p>Der Kehrwert von $\\frac{1}{2}$ ist <b>2</b>:</p>",
        tex: "\\frac{1}{4} \\div \\frac{1}{2} = \\frac{1}{4} \\cdot 2" },
      { title: "Ausrechnen",
        text: "<p>$\\frac{2}{4} = \\frac{1}{2}$:</p>",
        tex: "= \\frac{2}{4} = \\frac{1}{2}" }
    ] },

  { topic: "brueche", level: "easy", type: "Berechne",
    q: "3 \\cdot \\frac{2}{5}",
    note: "Die ganze Zahl nur mit dem Zähler malnehmen.",
    ergebnis: "\\frac{6}{5}",
    solution: [
      { title: "Zahl mal Zähler",
        text: "<p>Die ganze Zahl trifft nur den Zähler:</p>",
        tex: "3 \\cdot \\frac{2}{5} = \\frac{3 \\cdot 2}{5}" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= \\frac{6}{5}" }
    ] },

  { topic: "brueche", level: "medium", type: "Berechne",
    q: "\\frac{2}{3} \\div 4",
    note: "Durch eine Zahl teilen heißt: mal ihren Kehrwert.",
    ergebnis: "\\frac{1}{6}",
    solution: [
      { title: "Mal den Kehrwert",
        text: "<p>Der Kehrwert von 4 ist $\\frac{1}{4}$:</p>",
        tex: "\\frac{2}{3} \\div 4 = \\frac{2}{3} \\cdot \\frac{1}{4}" },
      { title: "Ausrechnen und kürzen",
        text: "<p>$\\frac{2}{12} = \\frac{1}{6}$:</p>",
        tex: "= \\frac{2}{12} = \\frac{1}{6}" }
    ] },

  // ================================================================ potenzen
  { topic: "potenzen", level: "easy", type: "Berechne",
    q: "2^3",
    note: "Die Hochzahl zählt, wie oft die Basis als Faktor vorkommt.",
    ergebnis: "8",
    solution: [
      { title: "Faktoren ausschreiben",
        text: "<p>Der Exponent 3 heißt: dreimal die 2 malnehmen.</p>",
        tex: "2^3 = 2 \\cdot 2 \\cdot 2" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 8" }
    ] },

  { topic: "potenzen", level: "medium", type: "Berechne",
    q: "2^3 + 2^2",
    note: "Bei Plus gibt es kein Potenzgesetz: jede Potenz einzeln ausrechnen.",
    ergebnis: "12",
    solution: [
      { title: "Jede Potenz einzeln",
        text: "<p>$a^m + a^n$ darf man <b>nicht</b> zusammenfassen. Erst ausrechnen:</p>",
        tex: "2^3 + 2^2 = 8 + 4" },
      { title: "Ergebnis",
        text: "<p>Dann addieren:</p>",
        tex: "= 12" }
    ] },

  { topic: "potenzen", level: "medium", type: "Berechne",
    q: "\\left(\\frac{2}{3}\\right)^{-1}",
    note: "Hoch −1 bedeutet: den Bruch umdrehen (Kehrwert).",
    ergebnis: "\\frac{3}{2}",
    solution: [
      { title: "Kehrwert bilden",
        text: "<p>$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$ — Zähler und Nenner tauschen:</p>",
        tex: "\\left(\\frac{2}{3}\\right)^{-1} = \\frac{3}{2}" }
    ] },

  { topic: "potenzen", level: "easy", type: "Berechne",
    q: "2^3 \\cdot 2^2",
    note: "Gleiche Basis beim Malnehmen: Exponenten addieren.",
    ergebnis: "2^5 = 32",
    solution: [
      { title: "Exponenten addieren",
        text: "<p>$a^m \\cdot a^n = a^{m+n}$ bei gleicher Basis:</p>",
        tex: "2^3 \\cdot 2^2 = 2^{3+2} = 2^5" },
      { title: "Ergebnis",
        text: "<p>$2^5 = 32$.</p>",
        tex: "= 32" }
    ] },

  { topic: "potenzen", level: "medium", type: "Berechne",
    q: "3^5 \\div 3^2",
    note: "Gleiche Basis beim Teilen: Exponenten subtrahieren.",
    ergebnis: "3^3 = 27",
    solution: [
      { title: "Exponenten subtrahieren",
        text: "<p>$a^m \\div a^n = a^{m-n}$:</p>",
        tex: "3^5 \\div 3^2 = 3^{5-2} = 3^3" },
      { title: "Ergebnis",
        text: "<p>$3^3 = 27$.</p>",
        tex: "= 27" }
    ] },

  { topic: "potenzen", level: "medium", type: "Berechne",
    q: "(2^3)^2",
    note: "Potenz einer Potenz: Exponenten malnehmen.",
    ergebnis: "2^6 = 64",
    solution: [
      { title: "Exponenten malnehmen",
        text: "<p>$\\left(a^m\\right)^n = a^{m \\cdot n}$:</p>",
        tex: "(2^3)^2 = 2^{3 \\cdot 2} = 2^6" },
      { title: "Ergebnis",
        text: "<p>$2^6 = 64$.</p>",
        tex: "= 64" }
    ] },

  { topic: "potenzen", level: "easy", type: "Berechne",
    q: "5^0",
    note: "Jede Zahl außer 0 hoch 0 ergibt 1.",
    ergebnis: "1",
    solution: [
      { title: "Regel anwenden",
        text: "<p>$a^0 = 1$ für jede Zahl $a \\neq 0$.</p>",
        tex: "5^0 = 1" }
    ] },

  { topic: "potenzen", level: "medium", type: "Berechne",
    q: "2^{-3}",
    note: "Negativer Exponent: ab unter den Bruchstrich.",
    ergebnis: "\\frac{1}{8}",
    solution: [
      { title: "Negativer Exponent",
        text: "<p>$a^{-n} = \\frac{1}{a^n}$:</p>",
        tex: "2^{-3} = \\frac{1}{2^3}" },
      { title: "Ergebnis",
        text: "<p>$2^3 = 8$:</p>",
        tex: "= \\frac{1}{8}" }
    ] },

  { topic: "potenzen", level: "easy", type: "Berechne",
    q: "10^2 \\cdot 10^3",
    note: "Gleiche Basis: Exponenten addieren.",
    ergebnis: "10^5 = 100\\,000",
    solution: [
      { title: "Exponenten addieren",
        text: "<p>$10^{2+3} = 10^5$:</p>",
        tex: "10^2 \\cdot 10^3 = 10^5" },
      { title: "Ergebnis",
        text: "<p>$10^5$ ist eine 1 mit 5 Nullen:</p>",
        tex: "= 100\\,000" }
    ] },

  { topic: "potenzen", level: "medium", type: "Berechne",
    q: "2^3 \\cdot 3^3",
    note: "Gleicher Exponent: die Basen malnehmen.",
    ergebnis: "6^3 = 216",
    solution: [
      { title: "Basen zusammenfassen",
        text: "<p>$a^n \\cdot b^n = (a \\cdot b)^n$:</p>",
        tex: "2^3 \\cdot 3^3 = (2 \\cdot 3)^3 = 6^3" },
      { title: "Ergebnis",
        text: "<p>$6^3 = 216$.</p>",
        tex: "= 216" }
    ] },

  // ================================================================ wurzeln
  { topic: "wurzeln", level: "easy", type: "Berechne",
    q: "\\sqrt{9}",
    note: "Welche Zahl mal sich selbst ergibt 9?",
    ergebnis: "3",
    solution: [
      { title: "Wurzel bedeutet",
        text: "<p>$\\sqrt{9} = b$ heißt $b \\cdot b = 9$.</p>" },
      { title: "Ergebnis",
        text: "<p>$3 \\cdot 3 = 9$:</p>",
        tex: "\\sqrt{9} = 3" }
    ] },

  { topic: "wurzeln", level: "easy", type: "Berechne",
    q: "\\sqrt{25}",
    note: "Welche Zahl mal sich selbst ergibt 25?",
    ergebnis: "5",
    solution: [
      { title: "Wurzel bedeutet",
        text: "<p>$\\sqrt{25} = b$ heißt $b \\cdot b = 25$.</p>" },
      { title: "Ergebnis",
        text: "<p>$5 \\cdot 5 = 25$:</p>",
        tex: "\\sqrt{25} = 5" }
    ] },

  { topic: "wurzeln", level: "medium", type: "Vereinfache",
    q: "\\sqrt{12}",
    note: "Eine Quadratzahl als Faktor herausziehen. Welche steckt in 12?",
    ergebnis: "2\\sqrt{3}",
    solution: [
      { title: "Quadratzahl abspalten",
        text: "<p>$12 = 4 \\cdot 3$, und <b>4</b> ist ein Quadrat:</p>",
        tex: "\\sqrt{12} = \\sqrt{4 \\cdot 3}" },
      { title: "Wurzel ziehen",
        text: "<p>$\\sqrt{4} = 2$, die 3 bleibt unter der Wurzel:</p>",
        tex: "= 2\\sqrt{3}" }
    ] },

  { topic: "wurzeln", level: "medium", type: "Vereinfache",
    q: "\\sqrt{18}",
    note: "Eine Quadratzahl als Faktor herausziehen. Welche steckt in 18?",
    ergebnis: "3\\sqrt{2}",
    solution: [
      { title: "Quadratzahl abspalten",
        text: "<p>$18 = 9 \\cdot 2$, und <b>9</b> ist ein Quadrat:</p>",
        tex: "\\sqrt{18} = \\sqrt{9 \\cdot 2}" },
      { title: "Wurzel ziehen",
        text: "<p>$\\sqrt{9} = 3$, die 2 bleibt unter der Wurzel:</p>",
        tex: "= 3\\sqrt{2}" }
    ] },

  { topic: "wurzeln", level: "easy", type: "Berechne",
    q: "\\sqrt{\\frac{9}{4}}",
    note: "Wurzel oben und unten einzeln ziehen.",
    ergebnis: "\\frac{3}{2}",
    solution: [
      { title: "Zähler und Nenner getrennt",
        text: "<p>$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$:</p>",
        tex: "\\sqrt{\\frac{9}{4}} = \\frac{\\sqrt{9}}{\\sqrt{4}}" },
      { title: "Ergebnis",
        text: "<p>$\\sqrt{9} = 3$, $\\sqrt{4} = 2$:</p>",
        tex: "= \\frac{3}{2}" }
    ] },

  { topic: "wurzeln", level: "medium", type: "Als Potenz schreiben",
    q: "\\sqrt{a}",
    note: "Eine Wurzel ist eine Potenz mit einem Bruch als Hochzahl.",
    ergebnis: "a^{\\frac{1}{2}}",
    solution: [
      { title: "Wurzel als Potenz",
        text: "<p>$\\sqrt[n]{a} = a^{\\frac{1}{n}}$. Die Quadratwurzel hat $n = 2$:</p>",
        tex: "\\sqrt{a} = a^{\\frac{1}{2}}" }
    ] },

  { topic: "wurzeln", level: "easy", type: "Berechne",
    q: "\\sqrt{4} \\cdot \\sqrt{9}",
    note: "Wurzeln darfst du beim Malnehmen zusammenfassen.",
    ergebnis: "6",
    solution: [
      { title: "Einzeln ziehen",
        text: "<p>$\\sqrt{4} = 2$ und $\\sqrt{9} = 3$:</p>",
        tex: "\\sqrt{4} \\cdot \\sqrt{9} = 2 \\cdot 3" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen &nbsp;<span class='hl-muted'>(genauso $\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$)</span>:</p>",
        tex: "= 6" }
    ] },

  { topic: "wurzeln", level: "medium", type: "Berechne",
    q: "\\sqrt{9 + 16}",
    note: "Erst unter der Wurzel ausrechnen. Die Wurzel darf man bei Plus nicht aufteilen.",
    ergebnis: "5",
    solution: [
      { title: "Erst unter der Wurzel",
        text: "<p>$\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$! Zuerst addieren:</p>",
        tex: "\\sqrt{9 + 16} = \\sqrt{25}" },
      { title: "Ergebnis",
        text: "<p>$\\sqrt{25} = 5$.</p>",
        tex: "= 5" }
    ] },

  { topic: "wurzeln", level: "easy", type: "Berechne",
    q: "\\sqrt[3]{8}",
    note: "Welche Zahl dreimal mit sich selbst malgenommen ergibt 8?",
    ergebnis: "2",
    solution: [
      { title: "Dritte Wurzel bedeutet",
        text: "<p>$\\sqrt[3]{8} = b$ heißt $b \\cdot b \\cdot b = 8$.</p>" },
      { title: "Ergebnis",
        text: "<p>$2 \\cdot 2 \\cdot 2 = 8$:</p>",
        tex: "\\sqrt[3]{8} = 2" }
    ] },

  { topic: "wurzeln", level: "medium", type: "Berechne",
    q: "\\sqrt{\\sqrt{81}}",
    note: "Von innen nach außen rechnen.",
    ergebnis: "3",
    solution: [
      { title: "Innere Wurzel",
        text: "<p>Zuerst $\\sqrt{81} = 9$:</p>",
        tex: "\\sqrt{\\sqrt{81}} = \\sqrt{9}" },
      { title: "Äußere Wurzel",
        text: "<p>$\\sqrt{9} = 3$ &nbsp;<span class='hl-muted'>(das ist die 4. Wurzel aus 81)</span>:</p>",
        tex: "= 3" }
    ] },

  { topic: "wurzeln", level: "medium", type: "Als Potenz schreiben",
    q: "\\sqrt[3]{a^2}",
    note: "Der Wurzelexponent kommt in den Nenner, die Hochzahl unter der Wurzel in den Zähler.",
    ergebnis: "a^{\\frac{2}{3}}",
    solution: [
      { title: "Wurzel als Potenz",
        text: "<p>$\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$. Hier $m = 2$, $n = 3$:</p>",
        tex: "\\sqrt[3]{a^2} = a^{\\frac{2}{3}}" }
    ] },

  // ================================================================ binom
  { topic: "binom", level: "easy", type: "Multipliziere aus",
    q: "(a + b)^2",
    note: "1. binomische Formel. Was steht in der Mitte?",
    ergebnis: "a^2 + 2ab + b^2",
    solution: [
      { title: "1. binomische Formel",
        text: "<p>Quadrat des ersten Glieds, plus doppeltes Produkt, plus Quadrat des zweiten:</p>",
        tex: "(a + b)^2 = a^2 + 2ab + b^2" }
    ] },

  { topic: "binom", level: "easy", type: "Multipliziere aus",
    q: "(a - b)^2",
    note: "2. binomische Formel. Achte auf das Vorzeichen in der Mitte.",
    ergebnis: "a^2 - 2ab + b^2",
    solution: [
      { title: "2. binomische Formel",
        text: "<p>Wie die erste, aber der mittlere Term hat ein <b>Minus</b>:</p>",
        tex: "(a - b)^2 = a^2 - 2ab + b^2" }
    ] },

  { topic: "binom", level: "easy", type: "Multipliziere aus",
    q: "(a + b)(a - b)",
    note: "3. binomische Formel. Der mittlere Term fällt weg.",
    ergebnis: "a^2 - b^2",
    solution: [
      { title: "3. binomische Formel",
        text: "<p>Summe mal Differenz — die Mitte hebt sich auf:</p>",
        tex: "(a + b)(a - b) = a^2 - b^2" }
    ] },

  { topic: "binom", level: "medium", type: "Multipliziere aus",
    q: "(x + 3)^2",
    note: "1. binomische Formel mit $a = x$ und $b = 3$.",
    ergebnis: "x^2 + 6x + 9",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>$(a+b)^2 = a^2 + 2ab + b^2$ mit $a = x$, $b = 3$:</p>",
        tex: "(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2" },
      { title: "Ausrechnen",
        text: "<p>$2 \\cdot x \\cdot 3 = 6x$ und $3^2 = 9$:</p>",
        tex: "= x^2 + 6x + 9" }
    ] },

  { topic: "binom", level: "medium", type: "Multipliziere aus",
    q: "(x - 4)^2",
    note: "2. binomische Formel mit $a = x$ und $b = 4$.",
    ergebnis: "x^2 - 8x + 16",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>$(a-b)^2 = a^2 - 2ab + b^2$ mit $a = x$, $b = 4$:</p>",
        tex: "(x - 4)^2 = x^2 - 2 \\cdot x \\cdot 4 + 4^2" },
      { title: "Ausrechnen",
        text: "<p>$2 \\cdot x \\cdot 4 = 8x$ und $4^2 = 16$:</p>",
        tex: "= x^2 - 8x + 16" }
    ] },

  { topic: "binom", level: "medium", type: "Multipliziere aus",
    q: "(x + 5)(x - 5)",
    note: "3. binomische Formel mit $a = x$ und $b = 5$.",
    ergebnis: "x^2 - 25",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>$(a+b)(a-b) = a^2 - b^2$ mit $a = x$, $b = 5$:</p>",
        tex: "(x + 5)(x - 5) = x^2 - 5^2" },
      { title: "Ergebnis",
        text: "<p>$5^2 = 25$:</p>",
        tex: "= x^2 - 25" }
    ] },

  { topic: "binom", level: "medium", type: "Faktorisiere",
    q: "x^2 + 6x + 9",
    note: "1. binomische Formel rückwärts. Prüfe: $\\sqrt{9} = 3$ und $2 \\cdot 3 = 6$.",
    ergebnis: "(x + 3)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$x^2 = x^2$ und $9 = 3^2$, also $a = x$, $b = 3$. Mittelterm: $2 \\cdot x \\cdot 3 = 6x$ ✓</p>" },
      { title: "1. binomische Formel rückwärts",
        text: "<p>$a^2 + 2ab + b^2 = (a+b)^2$:</p>",
        tex: "= (x + 3)^2" }
    ] },

  { topic: "binom", level: "medium", type: "Faktorisiere",
    q: "x^2 - 16",
    note: "3. binomische Formel rückwärts. $16 = 4^2$.",
    ergebnis: "(x + 4)(x - 4)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = x$, $b = 4$:</p>",
        tex: "x^2 - 16 = x^2 - 4^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (x + 4)(x - 4)" }
    ] },

  { topic: "binom", level: "hard", type: "Multipliziere aus",
    q: "(2x + 1)^2",
    note: "1. binomische Formel. Auch die Zahl vor dem x wird quadriert.",
    ergebnis: "4x^2 + 4x + 1",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>$(a+b)^2$ mit $a = 2x$, $b = 1$:</p>",
        tex: "(2x + 1)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 1 + 1^2" },
      { title: "Ausrechnen",
        text: "<p>$(2x)^2 = 4x^2$, &nbsp; $2 \\cdot 2x \\cdot 1 = 4x$, &nbsp; $1^2 = 1$:</p>",
        tex: "= 4x^2 + 4x + 1" }
    ] },

  { topic: "binom", level: "hard", type: "Faktorisiere",
    q: "4x^2 - 12x + 9",
    note: "2. binomische Formel rückwärts. Prüfe: $2 \\cdot 2x \\cdot 3 = 12x$.",
    ergebnis: "(2x - 3)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$4x^2 = (2x)^2$ und $9 = 3^2$, also $a = 2x$, $b = 3$. Mittelterm: $2 \\cdot 2x \\cdot 3 = 12x$ ✓</p>" },
      { title: "2. binomische Formel rückwärts",
        text: "<p>Das Minus zeigt die 2. Formel: $a^2 - 2ab + b^2 = (a-b)^2$:</p>",
        tex: "= (2x - 3)^2" }
    ] },

  { topic: "binom", level: "medium", type: "Faktorisiere",
    q: "x^2 - 10x + 25",
    note: "2. binomische Formel rückwärts. Prüfe: $\\sqrt{25} = 5$ und $2 \\cdot 5 = 10$.",
    ergebnis: "(x - 5)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$x^2 = x^2$ und $25 = 5^2$, also $a = x$, $b = 5$. Mittelterm: $2 \\cdot x \\cdot 5 = 10x$ ✓</p>" },
      { title: "2. binomische Formel rückwärts",
        text: "<p>$a^2 - 2ab + b^2 = (a-b)^2$:</p>",
        tex: "= (x - 5)^2" }
    ] },

  // ================================================================ schwere Aufgaben (kombinierte Schritte)
  // ----- Rechenregeln – Schwer -----
  { topic: "rechenregeln", level: "hard", type: "Berechne",
    q: "2 + 3 \\cdot (4 - 2)^2",
    note: "Reihenfolge: Klammer → Potenz → Punkt → Strich.",
    ergebnis: "14",
    solution: [
      { title: "Klammer zuerst",
        text: "<p>Was in der Klammer steht, kommt zuerst: $4 - 2 = 2$.</p>",
        tex: "2 + 3 \\cdot (4 - 2)^2 = 2 + 3 \\cdot 2^2" },
      { title: "Potenz vor Punkt",
        text: "<p>$2^2 = 4$, dann die Malrechnung $3 \\cdot 4 = 12$:</p>",
        tex: "= 2 + 3 \\cdot 4 = 2 + 12" },
      { title: "Ergebnis",
        text: "<p>Zuletzt die Plusrechnung:</p>",
        tex: "= 14" }
    ] },

  { topic: "rechenregeln", level: "hard", type: "Berechne",
    q: "(-2)^3 + (-3)^2",
    note: "Potenzen mit Vorzeichen: Achte auf gerade und ungerade Hochzahl.",
    ergebnis: "1",
    solution: [
      { title: "Potenzen einzeln",
        text: "<p>Ungerade Hochzahl behält das Minus, gerade macht Plus:</p>",
        tex: "(-2)^3 = -8, \\qquad (-3)^2 = +9" },
      { title: "Ergebnis",
        text: "<p>Zusammenzählen:</p>",
        tex: "-8 + 9 = 1" }
    ] },

  { topic: "rechenregeln", level: "hard", type: "Berechne",
    q: "12 \\div (-2) - (-3) \\cdot 4",
    note: "Erst Punktrechnung (mit Vorzeichen), dann die Differenz. Minus-Minus beachten.",
    ergebnis: "6",
    solution: [
      { title: "Punktrechnung zuerst",
        text: "<p>$12 \\div (-2) = -6$ und $(-3) \\cdot 4 = -12$:</p>",
        tex: "12 \\div (-2) - (-3) \\cdot 4 = -6 - (-12)" },
      { title: "Doppeltes Minus",
        text: "<p>$-(-12) = +12$:</p>",
        tex: "= -6 + 12" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 6" }
    ] },

  { topic: "rechenregeln", level: "hard", type: "Berechne",
    q: "-2^2 + (-2)^2",
    note: "Klammer oder nicht? Das entscheidet, ob das Minus mit quadriert wird.",
    ergebnis: "0",
    solution: [
      { title: "Ohne Klammer",
        text: "<p>Bei $-2^2$ gehört das Minus <b>nicht</b> zur Potenz: $-2^2 = -(2 \\cdot 2) = -4$.</p>" },
      { title: "Mit Klammer",
        text: "<p>Bei $(-2)^2$ wird das Minus mit quadriert: $(-2) \\cdot (-2) = +4$.</p>",
        tex: "-2^2 + (-2)^2 = -4 + 4" },
      { title: "Ergebnis",
        text: "<p>Zusammen:</p>",
        tex: "= 0" }
    ] },

  // ----- Brüche – Schwer -----
  { topic: "brueche", level: "hard", type: "Berechne",
    q: "\\frac{2}{3} + \\frac{1}{4} \\cdot \\frac{2}{3}",
    note: "Punkt vor Strich – auch bei Brüchen: erst das Produkt.",
    ergebnis: "\\frac{5}{6}",
    solution: [
      { title: "Produkt zuerst",
        text: "<p>$\\frac{1}{4} \\cdot \\frac{2}{3} = \\frac{2}{12} = \\frac{1}{6}$:</p>",
        tex: "\\frac{2}{3} + \\frac{1}{4} \\cdot \\frac{2}{3} = \\frac{2}{3} + \\frac{1}{6}" },
      { title: "Gleicher Nenner, addieren",
        text: "<p>$\\frac{2}{3} = \\frac{4}{6}$, dann $\\frac{4}{6} + \\frac{1}{6}$:</p>",
        tex: "= \\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}" }
    ] },

  { topic: "brueche", level: "hard", type: "Berechne",
    q: "\\frac{3}{4} - \\frac{1}{2} \\div \\frac{2}{3}",
    note: "Punkt vor Strich: erst die Division (mal Kehrwert), dann subtrahieren.",
    ergebnis: "0",
    solution: [
      { title: "Division zuerst",
        text: "<p>$\\frac{1}{2} \\div \\frac{2}{3} = \\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{3}{4}$:</p>",
        tex: "\\frac{3}{4} - \\frac{1}{2} \\div \\frac{2}{3} = \\frac{3}{4} - \\frac{3}{4}" },
      { title: "Ergebnis",
        text: "<p>Gleiche Brüche subtrahieren:</p>",
        tex: "= 0" }
    ] },

  { topic: "brueche", level: "hard", type: "Berechne",
    q: "\\frac{\\frac{1}{2}}{\\frac{3}{4}}",
    note: "Doppelbruch: durch einen Bruch teilen heißt mal den Kehrwert.",
    ergebnis: "\\frac{2}{3}",
    solution: [
      { title: "Als Division schreiben",
        text: "<p>Der Doppelbruch ist $\\frac{1}{2} \\div \\frac{3}{4}$. Mal den Kehrwert:</p>",
        tex: "\\frac{\\frac{1}{2}}{\\frac{3}{4}} = \\frac{1}{2} \\cdot \\frac{4}{3}" },
      { title: "Ausrechnen und kürzen",
        text: "<p>$\\frac{4}{6} = \\frac{2}{3}$:</p>",
        tex: "= \\frac{4}{6} = \\frac{2}{3}" }
    ] },

  { topic: "brueche", level: "hard", type: "Berechne",
    q: "\\left(\\frac{2}{3} + \\frac{1}{6}\\right) \\cdot \\frac{2}{5}",
    note: "Klammer zuerst (gleichnamig machen), dann malnehmen und kürzen.",
    ergebnis: "\\frac{1}{3}",
    solution: [
      { title: "Klammer zuerst",
        text: "<p>$\\frac{2}{3} = \\frac{4}{6}$, also $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$:</p>",
        tex: "\\left(\\frac{2}{3} + \\frac{1}{6}\\right) \\cdot \\frac{2}{5} = \\frac{5}{6} \\cdot \\frac{2}{5}" },
      { title: "Malnehmen und kürzen",
        text: "<p>$\\frac{10}{30} = \\frac{1}{3}$:</p>",
        tex: "= \\frac{10}{30} = \\frac{1}{3}" }
    ] },

  // ----- Potenzen – Schwer -----
  { topic: "potenzen", level: "hard", type: "Berechne",
    q: "\\frac{2^5 \\cdot 2^3}{2^6}",
    note: "Oben die Exponenten addieren, dann beim Teilen subtrahieren.",
    ergebnis: "2^2 = 4",
    solution: [
      { title: "Zähler zusammenfassen",
        text: "<p>Gleiche Basis mal: Exponenten addieren. $2^5 \\cdot 2^3 = 2^8$:</p>",
        tex: "\\frac{2^5 \\cdot 2^3}{2^6} = \\frac{2^8}{2^6}" },
      { title: "Teilen: Exponenten subtrahieren",
        text: "<p>$2^{8-6} = 2^2$:</p>",
        tex: "= 2^2 = 4" }
    ] },

  { topic: "potenzen", level: "hard", type: "Berechne",
    q: "(3^2)^2 \\div 3^3",
    note: "Erst Potenz einer Potenz, dann beim Teilen die Exponenten subtrahieren.",
    ergebnis: "3",
    solution: [
      { title: "Potenz einer Potenz",
        text: "<p>$(3^2)^2 = 3^{2 \\cdot 2} = 3^4$:</p>",
        tex: "(3^2)^2 \\div 3^3 = 3^4 \\div 3^3" },
      { title: "Teilen",
        text: "<p>$3^{4-3} = 3^1$:</p>",
        tex: "= 3^1 = 3" }
    ] },

  { topic: "potenzen", level: "hard", type: "Berechne",
    q: "\\left(\\frac{2}{3}\\right)^{-2}",
    note: "Negativer Exponent beim Bruch: umdrehen, dann quadrieren.",
    ergebnis: "\\frac{9}{4}",
    solution: [
      { title: "Bruch umdrehen",
        text: "<p>$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^{n}$:</p>",
        tex: "\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^{2}" },
      { title: "Quadrieren",
        text: "<p>Zähler und Nenner einzeln: $\\frac{3^2}{2^2}$:</p>",
        tex: "= \\frac{9}{4}" }
    ] },

  { topic: "potenzen", level: "hard", type: "Vereinfache",
    q: "\\frac{a^5 \\cdot a}{a^3}",
    note: "Oben zusammenfassen ($a = a^1$), dann beim Teilen subtrahieren.",
    ergebnis: "a^2",
    solution: [
      { title: "Zähler zusammenfassen",
        text: "<p>$a^5 \\cdot a = a^5 \\cdot a^1 = a^6$:</p>",
        tex: "\\frac{a^5 \\cdot a}{a^3} = \\frac{a^6}{a^3}" },
      { title: "Teilen",
        text: "<p>$a^{6-3} = a^3$:</p>",
        tex: "= a^3" }
    ] },

  // ----- Wurzeln – Schwer -----
  { topic: "wurzeln", level: "hard", type: "Vereinfache",
    q: "\\sqrt{200}",
    note: "Welche große Quadratzahl steckt in 200?",
    ergebnis: "10\\sqrt{2}",
    solution: [
      { title: "Quadratzahl abspalten",
        text: "<p>$200 = 100 \\cdot 2$, und <b>100</b> ist ein Quadrat:</p>",
        tex: "\\sqrt{200} = \\sqrt{100 \\cdot 2}" },
      { title: "Wurzel ziehen",
        text: "<p>$\\sqrt{100} = 10$, die 2 bleibt unter der Wurzel:</p>",
        tex: "= 10\\sqrt{2}" }
    ] },

  { topic: "wurzeln", level: "hard", type: "Berechne",
    q: "3\\sqrt{2} \\cdot \\sqrt{8}",
    note: "Erst $\\sqrt{8}$ vereinfachen, dann die Wurzeln zusammenfassen.",
    ergebnis: "12",
    solution: [
      { title: "Zweite Wurzel vereinfachen",
        text: "<p>$\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$:</p>",
        tex: "3\\sqrt{2} \\cdot \\sqrt{8} = 3\\sqrt{2} \\cdot 2\\sqrt{2}" },
      { title: "Zahlen und Wurzeln",
        text: "<p>$3 \\cdot 2 = 6$ und $\\sqrt{2} \\cdot \\sqrt{2} = 2$:</p>",
        tex: "= 6 \\cdot 2 = 12" }
    ] },

  { topic: "wurzeln", level: "hard", type: "Berechne",
    q: "\\sqrt{\\frac{50}{2}}",
    note: "Erst unter der Wurzel kürzen, dann ziehen.",
    ergebnis: "5",
    solution: [
      { title: "Unter der Wurzel kürzen",
        text: "<p>$\\frac{50}{2} = 25$:</p>",
        tex: "\\sqrt{\\frac{50}{2}} = \\sqrt{25}" },
      { title: "Wurzel ziehen",
        text: "<p>$\\sqrt{25} = 5$:</p>",
        tex: "= 5" }
    ] },

  { topic: "wurzeln", level: "hard", type: "Rationalisiere",
    q: "\\frac{6}{\\sqrt{2}}",
    note: "Erweitere mit $\\sqrt{2}$, dann kürzen.",
    ergebnis: "3\\sqrt{2}",
    solution: [
      { title: "Mit der Wurzel erweitern",
        text: "<p>Oben und unten mal $\\sqrt{2}$:</p>",
        tex: "\\frac{6}{\\sqrt{2}} = \\frac{6}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2}" },
      { title: "Kürzen",
        text: "<p>$\\frac{6}{2} = 3$:</p>",
        tex: "= 3\\sqrt{2}" }
    ] },

  // ----- Binomische Formeln – Schwer (Ergänzung) -----
  { topic: "binom", level: "hard", type: "Multipliziere aus",
    q: "(3x - 2)^2",
    note: "2. binomische Formel. Auch die Zahl vor dem x wird quadriert.",
    ergebnis: "9x^2 - 12x + 4",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>$(a-b)^2$ mit $a = 3x$, $b = 2$:</p>",
        tex: "(3x - 2)^2 = (3x)^2 - 2 \\cdot 3x \\cdot 2 + 2^2" },
      { title: "Ausrechnen",
        text: "<p>$(3x)^2 = 9x^2$, &nbsp; $2 \\cdot 3x \\cdot 2 = 12x$, &nbsp; $2^2 = 4$:</p>",
        tex: "= 9x^2 - 12x + 4" }
    ] },

  { topic: "binom", level: "hard", type: "Faktorisiere",
    q: "9x^2 - 25",
    note: "3. binomische Formel rückwärts. $9x^2 = (3x)^2$ und $25 = 5^2$.",
    ergebnis: "(3x + 5)(3x - 5)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = 3x$ und $b = 5$:</p>",
        tex: "9x^2 - 25 = (3x)^2 - 5^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (3x + 5)(3x - 5)" }
    ] }

];
