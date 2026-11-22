// Übungsaufgaben Mathe-Termumformung.
// Schema: { topic, level, type, q, note, solution: [{title, text?, tex?}] }
// text darf einfaches HTML enthalten. Farbklassen: b → accent, .hl-b → blue, .hl-muted → gedimmt
var UEBUNGEN_TERMUMFORMUNG = [

  // ================================================================ Ausklammern – Einfach
  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "6x + 9",
    note: "Welche Zahl passt sowohl in 6 als auch in 9? Probiere 2, 3...",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Schau auf die Zahlen: <b>6</b> und <b>9</b>. Welche Zahl passt in beide rein? Die <b>3</b>.</p><p><span class='hl-muted'>6 = 3 · 2 &nbsp;&nbsp; und &nbsp;&nbsp; 9 = 3 · 3</span></p>",
        tex: "6x + 9 = \\mathbf{3} \\cdot 2x + \\mathbf{3} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3</b> vor eine Klammer, die restlichen Teile bleiben drin:</p>",
        tex: "= 3(2x + 3)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "4a^2 + 8a",
    note: "Welche Zahl steckt in 4 und 8? Welche Variable steckt in a² und a?",
    solution: [
      { title: "Zahl und Variable prüfen",
        text: "<p><b>4</b> steckt in <b class='hl-b'>4</b> und <b class='hl-b'>8</b> &nbsp;(8 = 4 · 2).</p><p><b>a</b> steckt in <b class='hl-b'>a²</b> (= a · a) und in <b class='hl-b'>a</b>. Das kleinste Vorkommen ist einmal <b>a</b>.</p>",
        tex: "4a^2 + 8a = \\mathbf{4a} \\cdot a + \\mathbf{4a} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4a</b> vor die Klammer:</p>",
        tex: "= 4a(a + 2)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "5x^3 - 10x",
    note: "Welche Zahl steckt in 5 und 10? Welche Variable steckt in x³ und x?",
    solution: [
      { title: "Zahl und Variable prüfen",
        text: "<p><b>5</b> steckt in <b class='hl-b'>5</b> und <b class='hl-b'>10</b> &nbsp;(10 = 5 · 2).</p><p><b>x</b> steckt in <b class='hl-b'>x³</b> (= x · x · x) und in <b class='hl-b'>x</b>. Das kleinste Vorkommen ist einmal <b>x</b>.</p>",
        tex: "5x^3 - 10x = \\mathbf{5x} \\cdot x^2 - \\mathbf{5x} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5x</b> vor die Klammer:</p>",
        tex: "= 5x(x^2 - 2)" }
    ] },

  // ================================================================ Ausklammern – Mittel
  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "12a^2b - 8ab^2",
    note: "Was ist der größte gemeinsame Teiler von 12 und 8? Welche Variablen kommen überall vor?",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>12</b> und <b class='hl-b'>8</b>? Probiere: 6? 8 ÷ 6 geht nicht auf. <b>4?</b> 12 = 4·3 ✓, 8 = 4·2 ✓ → Gemeinsamer Faktor: <b>4</b>.</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>a</b> steckt in a² (= a·a) und in a → mindestens einmal <b>a</b>.</p><p><b>b</b> steckt in b (1. Term) und b² (= b·b, 2. Term) → mindestens einmal <b>b</b>.</p>",
        tex: "12a^2b - 8ab^2 = \\mathbf{4ab} \\cdot 3a - \\mathbf{4ab} \\cdot 2b" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4ab</b> vor die Klammer:</p>",
        tex: "= 4ab(3a - 2b)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "-x^2 + 5x",
    note: "x steckt in beiden Termen. Was passiert mit den Vorzeichen, wenn du −x ausklämmerst?",
    solution: [
      { title: "Gemeinsamer Faktor mit Vorzeichen",
        text: "<p>Beide Terme haben <b>x</b>. Das erste Vorzeichen ist negativ → klammere <b>−x</b> aus.</p><p>Wichtig: Wenn du <b>−x</b> ausklämmerst, dreht sich <em>jedes</em> Vorzeichen in der Klammer um! &nbsp;<span class='hl-muted'>(−x)·(−5) = +5x ✓</span></p>",
        tex: "-x^2 + 5x = (-x) \\cdot x + (-x) \\cdot (-5)" },
      { title: "Ausklammern",
        text: "<p>Mit <b>−x</b> vor der Klammer — die Vorzeichen innen sind umgedreht:</p>",
        tex: "= -x(x - 5)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "3(x-2) + x(x-2)",
    note: "Schau genau: Welcher Ausdruck steckt in BEIDEN Termen?",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Im ersten Term steht <b>(x−2)</b>, im zweiten Term auch <b>(x−2)</b>.</p><p>Das ist der gemeinsame Faktor — genau wie eine Zahl! Man klammert ganze Klammern aus.</p>",
        tex: "3 \\cdot (x-2) + x \\cdot (x-2)" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>(x−2)</b> vor die Klammer, die anderen Faktoren (3 und x) bleiben drin:</p>",
        tex: "= (x-2)(3 + x)" }
    ] },

  // ================================================================ Ausklammern – Schwer
  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "6x^4 - 15x^3 + 9x^2",
    note: "Was passt in 6, 15 und 9? Welche x-Potenz steckt in allen drei Termen?",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>6</b>, <b class='hl-b'>15</b> und <b class='hl-b'>9</b>? Probiere 6: passt nicht in 15 (15÷6 kein ganzes). <b>3?</b> 6=3·2 ✓, 15=3·5 ✓, 9=3·3 ✓ → gemeinsamer Faktor: <b>3</b>.</p>" },
      { title: "Variable prüfen",
        text: "<p>In allen drei Termen steckt mindestens <b>x²</b>:</p><p><span class='hl-muted'>x⁴ = x²·x², &nbsp; x³ = x²·x, &nbsp; x² = x²·1</span></p><p>Gemeinsamer Variablen-Faktor: <b>x²</b>.</p>",
        tex: "6x^4 - 15x^3 + 9x^2 = \\mathbf{3x^2} \\cdot 2x^2 - \\mathbf{3x^2} \\cdot 5x + \\mathbf{3x^2} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3x²</b> vor die Klammer:</p>",
        tex: "= 3x^2(2x^2 - 5x + 3)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "a(b-c) - (c-b)",
    note: "Vergleiche (c−b) und (b−c). Was ist der Unterschied? Kannst du eine Klammer umschreiben?",
    solution: [
      { title: "Trick: Klammer umdrehen",
        text: "<p><b class='hl-b'>(c−b)</b> und <b>(b−c)</b> sehen ähnlich aus — nur die Reihenfolge ist umgekehrt.</p><p>Es gilt: <b>(c−b) = −(b−c)</b> &nbsp;<span class='hl-muted'>(Vorzeichen aller Terme umdrehen)</span></p><p>Damit: <span class='hl-muted'>−(c−b) = +(b−c)</span></p>",
        tex: "a(b-c) - (c-b) = a(b-c) + (b-c)" },
      { title: "Ausklammern",
        text: "<p>Jetzt steht <b>(b−c)</b> in beiden Termen. Ausklammern:</p>",
        tex: "= (b-c)(a + 1)" }
    ] },

  // ================================================================ Ausmultiplizieren – Einfach
  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "4(3x - 2)",
    note: "Die 4 muss mit jedem Term in der Klammer einzeln multipliziert werden.",
    solution: [
      { title: "Jeden Term mit 4 multiplizieren",
        text: "<p><b>4</b> multipliziert mit dem ersten Term (3x), dann mit dem zweiten (−2):</p>",
        tex: "\\mathbf{4} \\cdot 3x = 12x \\qquad \\mathbf{4} \\cdot (-2) = -8" },
      { title: "Ergebnis",
        text: "<p>Beide Ergebnisse zusammensetzen:</p>",
        tex: "4(3x - 2) = 12x - 8" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "-(2x^2 - x + 3)",
    note: "Das Minuszeichen bedeutet: Alles mit −1 multiplizieren.",
    solution: [
      { title: "Minus = Faktor −1",
        text: "<p>Das Minus davor ist wie ein Faktor <b>−1</b>. Es dreht jedes Vorzeichen in der Klammer um:</p><p><span class='hl-muted'>+ wird zu −, und − wird zu +</span></p>",
        tex: "-(2x^2 - x + 3) = (-1) \\cdot 2x^2 + (-1)\\cdot(-x) + (-1) \\cdot 3" },
      { title: "Vorzeichen umgedreht",
        text: "<p>Ergebnis: alle Vorzeichen sind umgekehrt.</p>",
        tex: "= -2x^2 + x - 3" }
    ] },

  // ================================================================ Ausmultiplizieren – Mittel
  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(x + 5)(x - 3)",
    note: "Jeden der zwei linken Terme mit jedem der zwei rechten multiplizieren. Das ergibt 4 Produkte.",
    solution: [
      { title: "4 Produkte bilden",
        text: "<p>Jeden Term links × jeden Term rechts — das ergibt genau 4 Kombinationen:</p><p><span class='hl-muted'>x·x &nbsp;|&nbsp; x·(−3) &nbsp;|&nbsp; 5·x &nbsp;|&nbsp; 5·(−3)</span></p>",
        tex: "x \\cdot x + x \\cdot (-3) + 5 \\cdot x + 5 \\cdot (-3)" },
      { title: "Vereinfachen",
        text: "<p>Ausrechnen, dann <b>gleichartige Terme</b> zusammenfassen &nbsp;(−3x + 5x = +2x):</p>",
        tex: "= x^2 - 3x + 5x - 15 = x^2 + 2x - 15" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(2a - 3)^2",
    note: "Erkennst du das Muster (p−q)²? Welche Werte haben p und q hier?",
    solution: [
      { title: "Binomische Formel erkennen",
        rule: "(p - q)^2 = p^2 - 2pq + q^2",
        text: "<p>Hier: <b class='hl-b'>p = 2a</b> &nbsp;und&nbsp; <b class='hl-b'>q = 3</b></p><p>Einsetzen: p² = (2a)² = 4a², &nbsp;2pq = 2·2a·3 = 12a, &nbsp;q² = 9</p>",
        tex: "(2a - 3)^2 = (2a)^2 - 2 \\cdot 2a \\cdot 3 + 3^2" },
      { title: "Ausrechnen",
        tex: "= 4a^2 - 12a + 9" }
    ] },

  // ================================================================ Ausmultiplizieren – Schwer
  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(x^2 + 3)(x^2 - 3)",
    note: "Erkennst du das Muster (a+b)·(a−b)? Was sind a und b hier?",
    solution: [
      { title: "3. Binomische Formel erkennen",
        rule: "(a + b)(a - b) = a^2 - b^2",
        text: "<p>Hier: <b class='hl-b'>a = x²</b> &nbsp;und&nbsp; <b class='hl-b'>b = 3</b></p><p>Einsetzen: a² = (x²)² = x⁴, &nbsp;b² = 9</p>",
        tex: "(x^2 + 3)(x^2 - 3) = (x^2)^2 - 3^2" },
      { title: "Ausrechnen",
        tex: "= x^4 - 9" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(3x - 2y)^2",
    note: "Was ist a und was ist b in der Formel (a−b)²?",
    solution: [
      { title: "Binomische Formel erkennen",
        rule: "(a - b)^2 = a^2 - 2ab + b^2",
        text: "<p>Hier: <b class='hl-b'>a = 3x</b> &nbsp;und&nbsp; <b class='hl-b'>b = 2y</b></p><p>Einsetzen: a² = (3x)² = 9x², &nbsp;2ab = 2·3x·2y = 12xy, &nbsp;b² = (2y)² = 4y²</p>",
        tex: "(3x - 2y)^2 = (3x)^2 - 2 \\cdot 3x \\cdot 2y + (2y)^2" },
      { title: "Ausrechnen",
        text: "<p>Der mittlere Term enthält <b>beide</b> Variablen:</p>",
        tex: "= 9x^2 - 12xy + 4y^2" }
    ] },

  // ================================================================ Faktorisieren – Einfach
  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 - 25",
    note: "Das Muster a²−b²: Was ist b, wenn b² = 25?",
    solution: [
      { title: "3. Binomische Formel rückwärts",
        rule: "a^2 - b^2 = (a+b)(a-b)",
        text: "<p><b class='hl-b'>a² = x²</b> → a = x (weil x·x = x²)</p><p><b class='hl-b'>b² = 25</b> → b = 5 (weil 5·5 = 25)</p>",
        tex: "x^2 - 25 = (x+5)(x-5)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 + 6x + 9",
    note: "Das Muster a²+2ab+b²: Was ist b, wenn b² = 9?",
    solution: [
      { title: "1. Binomische Formel rückwärts",
        rule: "a^2 + 2ab + b^2 = (a+b)^2",
        text: "<p><b class='hl-b'>a² = x²</b> → a = x.</p><p><b class='hl-b'>b² = 9</b> → b = 3 (weil 3·3 = 9).</p><p>Probe für den mittleren Term: 2 · x · 3 = <b>6x</b> ✓</p>",
        tex: "x^2 + 6x + 9 = (x + 3)^2" }
    ] },

  // ================================================================ Faktorisieren – Mittel
  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "4x^2 - 20x + 25",
    note: "Was ist √(4x²) und was ist √25? Passt 2·a·b zum mittleren Term?",
    solution: [
      { title: "a und b herausfinden",
        text: "<p>Schau auf den ersten und letzten Term:</p><p><b class='hl-b'>4x² = (2x)²</b> → also ist √(4x²) = <b>2x</b> → a = 2x</p><p><b class='hl-b'>25 = 5²</b> → √25 = <b>5</b> → b = 5</p>" },
      { title: "Probe und Formel",
        rule: "a^2 - 2ab + b^2 = (a-b)^2",
        text: "<p>Probe für den mittleren Term: 2 · 2x · 5 = <b>20x</b> ✓</p><p>Hier: <b class='hl-b'>a = 2x</b>, <b class='hl-b'>b = 5</b></p>",
        tex: "4x^2 - 20x + 25 = (2x - 5)^2" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "3x^3 - 12x",
    note: "Erst ausklammern, dann schauen: ergibt sich darin ein a²−b²-Muster?",
    solution: [
      { title: "Schritt 1: Ausklammern",
        text: "<p><b>3</b> steckt in 3 und 12. <b>x</b> steckt in x³ und x. Also <b>3x</b> ausklammern:</p>",
        tex: "3x^3 - 12x = 3x(x^2 - 4)" },
      { title: "Schritt 2: x²−4 faktorisieren",
        rule: "a^2 - b^2 = (a+b)(a-b)",
        text: "<p><b>x²−4</b>: Was ist die Wurzel aus 4? Die <b>2</b> (weil 2² = 4). Also b = 2, a = x.</p>",
        tex: "x^2 - 4 = (x+2)(x-2)" },
      { title: "Ergebnis",
        tex: "3x^3 - 12x = 3x(x+2)(x-2)" }
    ] },

  // ================================================================ Faktorisieren – Schwer
  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "16m^4 - 1",
    note: "Wende a²−b² zweimal hintereinander an. Was ist a und b beim zweiten Mal?",
    solution: [
      { title: "Erste Zerlegung",
        rule: "a^2 - b^2 = (a+b)(a-b)",
        text: "<p>3. Binomische Formel: <b class='hl-b'>a = 4m²</b> und <b class='hl-b'>b = 1</b>:</p>",
        tex: "16m^4 - 1 = (4m^2 + 1)(4m^2 - 1)" },
      { title: "Zweite Zerlegung",
        rule: "a^2 - b^2 = (a+b)(a-b)",
        text: "<p><b>(4m²−1)</b> lässt sich nochmals zerlegen: <b class='hl-b'>a = 2m</b>, <b class='hl-b'>b = 1</b>:</p>",
        tex: "4m^2 - 1 = (2m+1)(2m-1)" },
      { title: "Ergebnis",
        tex: "16m^4 - 1 = (4m^2+1)(2m+1)(2m-1)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "x^4 - 13x^2 + 36",
    note: "Ersetze x² durch u. Dann hast du eine einfachere quadratische Gleichung.",
    solution: [
      { title: "Substitution",
        text: "<p>Setze <b>u = x²</b>. Dann sieht die Aufgabe viel einfacher aus:</p>",
        tex: "u^2 - 13u + 36" },
      { title: "Zwei Zahlen suchen",
        text: "<p>Welche zwei Zahlen haben <b>Summe −13</b> und <b>Produkt +36</b>?</p><p>Probiere Teilerpaare von 36 mit negativem Vorzeichen:</p><p><span class='hl-muted'>−1 und −36: Summe = −37 ✗</span></p><p><span class='hl-muted'>−2 und −18: Summe = −20 ✗</span></p><p><span class='hl-muted'>−3 und −12: Summe = −15 ✗</span></p><p><b class='hl-b'>−4 und −9: &nbsp;Summe = −13 ✓ &nbsp;Produkt = +36 ✓</b></p>",
        tex: "(u - 4)(u - 9)" },
      { title: "Zurücksubstituieren",
        text: "<p>u = x² wieder einsetzen. Dann nochmals a²−b² auf jeden Faktor anwenden:</p><p><span class='hl-muted'>x²−4 = (x+2)(x−2) &nbsp;und&nbsp; x²−9 = (x+3)(x−3)</span></p>",
        tex: "(x^2-4)(x^2-9) = (x+2)(x-2)(x+3)(x-3)" }
    ] },

  // ================================================================ Bruchterme – Einfach
  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\dfrac{6x}{3}",
    note: "Teilt sich die Zahl im Zähler durch den Nenner?",
    solution: [
      { title: "Zahl kürzen",
        text: "<p>Der Nenner ist <b>3</b>. Im Zähler steht <b class='hl-b'>6</b>. 6 ÷ 3 = <b>2</b>. Die Variable x bleibt unverändert.</p>",
        tex: "\\frac{6x}{3} = \\frac{6}{3} \\cdot x = 2x" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\dfrac{x^2 + x}{x} \\quad (x \\neq 0)",
    note: "Kannst du im Zähler etwas ausklammern, das auch im Nenner steht?",
    solution: [
      { title: "Zähler umformen",
        text: "<p>Zähler: <b>x² + x</b>. Das x steckt in <b class='hl-b'>x²</b> (= x·x) und in <b class='hl-b'>x</b>. Klammere <b>x</b> aus:</p>",
        tex: "x^2 + x = x(x + 1)" },
      { title: "Kürzen",
        text: "<p>Jetzt steht <b>x</b> oben und unten. Es kürzt sich weg (x ÷ x = 1):</p>",
        tex: "\\frac{x(x+1)}{x} = x + 1" }
    ] },

  // ================================================================ Bruchterme – Mittel
  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\dfrac{x^2 - 9}{x + 3} \\quad (x \\neq -3)",
    note: "x²−9 — erkennst du das a²−b²-Muster im Zähler?",
    solution: [
      { title: "Zähler faktorisieren",
        rule: "a^2 - b^2 = (a+b)(a-b)",
        text: "<p><b class='hl-b'>a² = x²</b> → a = x. &nbsp;<b class='hl-b'>b² = 9</b> → b = 3 (weil 3² = 9).</p>",
        tex: "x^2 - 9 = (x+3)(x-3)" },
      { title: "Kürzen",
        text: "<p><b>(x+3)</b> steht oben und unten — es kürzt sich weg:</p>",
        tex: "\\frac{(x+3)(x-3)}{(x+3)} = x - 3" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\dfrac{2x^2 - 8}{x^2 - 4x + 4}",
    note: "Faktorisiere Zähler und Nenner zuerst vollständig, dann kürzen.",
    solution: [
      { title: "Zähler faktorisieren",
        text: "<p>Erst <b>2</b> ausklammern (2 steckt in 2x² und 8), dann a²−b² anwenden: &nbsp;x²−4 = x²−2² → (x+2)(x−2)</p>",
        tex: "2x^2 - 8 = 2(x^2-4) = 2(x+2)(x-2)" },
      { title: "Nenner faktorisieren",
        rule: "a^2 - 2ab + b^2 = (a-b)^2",
        text: "<p><b class='hl-b'>a² = x²</b> → a = x. &nbsp;<b class='hl-b'>b² = 4</b> → b = 2. &nbsp;Probe: 2·x·2 = 4x ✓</p>",
        tex: "x^2 - 4x + 4 = (x-2)^2" },
      { title: "Kürzen",
        text: "<p><b>(x−2)</b> steht oben einmal und unten zweimal. Ein <b>(x−2)</b> kürzt sich weg:</p>",
        tex: "\\frac{2(x+2)(x-2)}{(x-2)^2} = \\frac{2(x+2)}{x-2}" }
    ] },

  // ================================================================ Bruchterme – Schwer
  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\dfrac{4x^2 - 1}{2x^2 + x}",
    note: "Faktorisiere Zähler und Nenner vollständig.",
    solution: [
      { title: "Zähler faktorisieren",
        rule: "a^2 - b^2 = (a+b)(a-b)",
        text: "<p><b class='hl-b'>4x² = (2x)²</b> → a = 2x. &nbsp;<b class='hl-b'>1 = 1²</b> → b = 1.</p>",
        tex: "4x^2 - 1 = (2x+1)(2x-1)" },
      { title: "Nenner faktorisieren",
        text: "<p><b>2x²+x</b>: Das x steckt in 2x² (= x·2x) und in x. Also <b>x</b> ausklammern:</p>",
        tex: "2x^2 + x = x(2x+1)" },
      { title: "Kürzen",
        text: "<p><b>(2x+1)</b> steht oben und unten — es kürzt sich weg:</p>",
        tex: "\\frac{(2x+1)(2x-1)}{x(2x+1)} = \\frac{2x-1}{x}" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\dfrac{x^3 - x}{x^2 + 2x + 1}",
    note: "Faktorisiere Zähler und Nenner vollständig, dann kürzen.",
    solution: [
      { title: "Zähler faktorisieren",
        text: "<p>Erst <b>x</b> ausklammern (x steckt in x³ und x), dann a²−b² auf x²−1: &nbsp;a = x, b = 1</p>",
        tex: "x^3 - x = x(x^2-1) = x(x+1)(x-1)" },
      { title: "Nenner faktorisieren",
        rule: "a^2 + 2ab + b^2 = (a+b)^2",
        text: "<p><b class='hl-b'>a² = x²</b> → a = x. &nbsp;<b class='hl-b'>b² = 1</b> → b = 1. &nbsp;Probe: 2·x·1 = 2x ✓</p>",
        tex: "x^2 + 2x + 1 = (x+1)^2" },
      { title: "Kürzen",
        text: "<p><b>(x+1)</b> steht oben einmal und unten zweimal. Ein <b>(x+1)</b> kürzt sich weg:</p>",
        tex: "\\frac{x(x+1)(x-1)}{(x+1)^2} = \\frac{x(x-1)}{x+1}" }
    ] },

  // ================================================================ Wurzeln – Einfach
  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{72}",
    note: "Welche Quadratzahl steckt in 72? Probiere 4, 9, 16, 25, 36...",
    solution: [
      { title: "Welche Quadratzahl steckt in 72?",
        text: "<p>Wir suchen eine Quadratzahl, die <b>genau in 72 hineinpasst</b>. Von groß nach klein probieren:</p><p><span class='hl-muted'>49? &nbsp;72 ÷ 49 = 1,47 … ✗</span></p><p><b class='hl-b'>36? &nbsp;72 ÷ 36 = 2 &nbsp;✓</b> &nbsp;→ das nehmen wir!</p>",
        tex: "72 = 36 \\cdot 2" },
      { title: "Wurzel aufteilen",
        rule: "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}",
        text: "<p>Jetzt die Wurzel aufteilen: √36 = <b>6</b> (weil 6² = 36), √2 bleibt.</p>",
        tex: "\\sqrt{72} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{x^6}",
    note: "Was passiert mit dem Exponenten, wenn man eine Quadratwurzel zieht?",
    solution: [
      { title: "Regel anwenden",
        rule: "\\sqrt[n]{a^m} = a^{m/n}",
        text: "<p>Wurzel wird zum Bruchexponent. Das √-Zeichen <em>ohne</em> Zahl oben ist immer die <b class='hl-b'>2.</b> Wurzel → n = <b class='hl-b'>2</b>.</p><p>Der Exponent hier: m = <b class='hl-b'>6</b>. &nbsp;Damit: $m \\div n = \\tfrac{6}{2} = 3$</p>",
        tex: "\\sqrt{x^6} = x^{6:2} = x^3" }
    ] },

  // ================================================================ Wurzeln – Mittel
  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{50x^4}",
    note: "Vereinfache Zahl und Variable separat.",
    solution: [
      { title: "Welche Quadratzahl steckt in 50?",
        text: "<p>Von groß nach klein probieren:</p><p><span class='hl-muted'>49? &nbsp;50 ÷ 49 = 1,02 … ✗</span></p><p><span class='hl-muted'>36? &nbsp;50 ÷ 36 = 1,38 … ✗</span></p><p><b class='hl-b'>25? &nbsp;50 ÷ 25 = 2 &nbsp;✓</b> &nbsp;→ das nehmen wir!</p>",
        tex: "\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}" },
      { title: "Variable vereinfachen",
        text: "<p>Der Exponent <b>4</b> ist gerade → Exponent durch 2 teilen:</p>",
        tex: "\\sqrt{x^4} = x^{4:2} = x^2" },
      { title: "Alles zusammen",
        tex: "\\sqrt{50x^4} = 5x^2\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\dfrac{\\sqrt{18}}{\\sqrt{2}}",
    note: "√a ÷ √b = √(a÷b). Wie viel ist 18 ÷ 2?",
    solution: [
      { title: "Brüche unter Wurzeln zusammenfassen",
        rule: "\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}",
        text: "<p>Man darf zwei Wurzeln im Bruch zu einer einzigen Wurzel zusammenfassen:</p>",
        tex: "\\frac{\\sqrt{18}}{\\sqrt{2}} = \\sqrt{\\frac{18}{2}} = \\sqrt{9} = 3" }
    ] },

  // ================================================================ Wurzeln – Schwer
  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt{48p^{18} \\cdot b^9}",
    note: "Behandle Zahl, geraden und ungeraden Exponenten separat.",
    solution: [
      { title: "Welche Quadratzahl steckt in 48?",
        text: "<p>Wir suchen eine Quadratzahl, die <b>genau in 48 hineinpasst</b> (also 48 geteilt durch die Zahl ergibt eine ganze Zahl). Am besten fangen wir groß an:</p><p><span class='hl-muted'>36? &nbsp;48 ÷ 36 = 1,33 … ✗ &nbsp;geht nicht auf</span></p><p><span class='hl-muted'>25? &nbsp;48 ÷ 25 = 1,92 … ✗</span></p><p><b class='hl-b'>16? &nbsp;48 ÷ 16 = 3 &nbsp;✓</b> &nbsp;→ das nehmen wir!</p>",
        tex: "48 = 16 \\cdot 3 \\quad \\Rightarrow \\quad \\sqrt{48} = 4\\sqrt{3}" },
      { title: "Gerader Exponent: p¹⁸",
        text: "<p>Der Exponent <b>18</b> ist gerade → Wurzel ist einfach: Exponent durch 2 teilen.</p>",
        tex: "\\sqrt{p^{18}} = p^{18:2} = p^9" },
      { title: "Ungerader Exponent: b⁹",
        text: "<p>Der Exponent <b>9</b> ist ungerade → wir spalten b⁹ so auf, dass ein <b>gerader</b> Anteil rauskommt:</p><p><b class='hl-b'>b⁹ = b⁸ · b</b> &nbsp;(8 ist die größte gerade Zahl ≤ 9)</p><p>Jetzt: √b⁸ = b⁴ (gerade), das <b>eine b</b> bleibt unter der Wurzel.</p>",
        tex: "\\sqrt{b^9} = \\sqrt{b^8 \\cdot b} = b^4\\sqrt{b}" },
      { title: "Alles zusammen",
        tex: "\\sqrt{48p^{18}b^9} = 4p^9 b^4 \\sqrt{3b}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\dfrac{\\sqrt{75p^{12}}}{\\sqrt{b^9}}",
    note: "Zähler und Nenner separat vereinfachen. Dann den Nenner wurzelfrei machen.",
    solution: [
      { title: "Welche Quadratzahl steckt in 75?",
        text: "<p>Von groß nach klein probieren:</p><p><span class='hl-muted'>49? &nbsp;75 ÷ 49 = 1,53 … ✗</span></p><p><span class='hl-muted'>36? &nbsp;75 ÷ 36 = 2,08 … ✗</span></p><p><b class='hl-b'>25? &nbsp;75 ÷ 25 = 3 &nbsp;✓</b> &nbsp;→ das nehmen wir!</p>",
        tex: "\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}" },
      { title: "Gerader Exponent: p¹²",
        text: "<p>Der Exponent <b>12</b> ist gerade → Exponent durch 2 teilen:</p>",
        tex: "\\sqrt{p^{12}} = p^{12:2} = p^6" },
      { title: "Zähler zusammenfassen",
        tex: "\\sqrt{75p^{12}} = 5p^6\\sqrt{3}" },
      { title: "Ungerader Exponent: b⁹",
        text: "<p>Der Exponent <b>9</b> ist ungerade → b⁹ so aufteilen, dass ein <b>gerader</b> Anteil rauskommt:</p><p><b class='hl-b'>b⁹ = b⁸ · b</b> &nbsp;(8 ist die größte gerade Zahl ≤ 9)</p><p>√b⁸ = b⁴, das <b>eine b</b> bleibt unter der Wurzel.</p>",
        tex: "\\sqrt{b^9} = \\sqrt{b^8 \\cdot b} = b^4\\sqrt{b}" },
      { title: "Nenner wurzelfrei machen",
        text: "<p>Im Nenner steht noch <b>√b</b>. Um ihn loszuwerden, erweitern wir den Bruch mit <b>√b</b>:</p><p><span class='hl-muted'>√b · √b = b → der Nenner wird rational</span></p>",
        tex: "\\frac{5p^6\\sqrt{3}}{b^4\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{5p^6\\sqrt{3b}}{b^5}" }
    ] }

];
