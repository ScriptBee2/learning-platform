// Übungsaufgaben Mathe-Termumformung.
// Schema: { topic, level, type, q, note, ergebnis, solution: [{title, text?, tex?}] }
// text darf einfaches HTML enthalten. Farbklassen: b → accent, .hl-b → blue, .hl-muted → gedimmt
var UEBUNGEN_TERMUMFORMUNG = [

  // ================================================================ ausklammern
  // ===== Ausklammern – Einfach =====
  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "8x + 12",
    note: "Welche Zahl passt sowohl in 8 als auch in 12? Probiere 2, 4...",
    ergebnis: "4(2x + 3)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Schau auf die Zahlen: <b>8</b> und <b>12</b>. Welche Zahl passt in beide rein? Die <b>4</b>.</p><p><span class='hl-muted'>8 = 4 · 2 &nbsp;&nbsp; und &nbsp;&nbsp; 12 = 4 · 3</span></p>",
        tex: "8x + 12 = \\mathbf{4} \\cdot 2x + \\mathbf{4} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4</b> vor eine Klammer, die restlichen Teile bleiben drin:</p>",
        tex: "= 4(2x + 3)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "10a + 15",
    note: "Welche Zahl steckt in 10 und in 15? Probiere 5.",
    ergebnis: "5(2a + 3)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Die Zahlen sind <b>10</b> und <b>15</b>. Welche Zahl passt in beide? Die <b>5</b>.</p><p><span class='hl-muted'>10 = 5 · 2 &nbsp;&nbsp; und &nbsp;&nbsp; 15 = 5 · 3</span></p>",
        tex: "10a + 15 = \\mathbf{5} \\cdot 2a + \\mathbf{5} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5</b> vor die Klammer:</p>",
        tex: "= 5(2a + 3)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "6x + 10",
    note: "Beide Zahlen sind gerade. Welche kleine Zahl passt in beide?",
    ergebnis: "2(3x + 5)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p><b>6</b> und <b>10</b> sind beide gerade — die <b>2</b> passt in beide.</p><p><span class='hl-muted'>6 = 2 · 3 &nbsp;&nbsp; und &nbsp;&nbsp; 10 = 2 · 5</span></p>",
        tex: "6x + 10 = \\mathbf{2} \\cdot 3x + \\mathbf{2} \\cdot 5" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>2</b> vor die Klammer:</p>",
        tex: "= 2(3x + 5)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "9y + 12",
    note: "Welche Zahl passt in 9 und in 12? Denk an die 3.",
    ergebnis: "3(3y + 4)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Welche Zahl passt in <b>9</b> und <b>12</b>? Die <b>3</b>.</p><p><span class='hl-muted'>9 = 3 · 3 &nbsp;&nbsp; und &nbsp;&nbsp; 12 = 3 · 4</span></p>",
        tex: "9y + 12 = \\mathbf{3} \\cdot 3y + \\mathbf{3} \\cdot 4" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3</b> vor die Klammer:</p>",
        tex: "= 3(3y + 4)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "3a^2 + 6a",
    note: "Welche Zahl steckt in 3 und 6? Welche Variable steckt in a² und a?",
    ergebnis: "3a(a + 2)",
    solution: [
      { title: "Zahl und Variable prüfen",
        text: "<p><b>3</b> steckt in <b class='hl-b'>3</b> und <b class='hl-b'>6</b> &nbsp;(6 = 3 · 2).</p><p><b>a</b> steckt in <b class='hl-b'>a²</b> (= a · a) und in <b class='hl-b'>a</b>. Das kleinste Vorkommen ist einmal <b>a</b>.</p>",
        tex: "3a^2 + 6a = \\mathbf{3a} \\cdot a + \\mathbf{3a} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3a</b> vor die Klammer:</p>",
        tex: "= 3a(a + 2)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "7x^2 - 14x",
    note: "Welche Zahl steckt in 7 und 14? Welche Variable steckt in x² und x?",
    ergebnis: "7x(x - 2)",
    solution: [
      { title: "Zahl und Variable prüfen",
        text: "<p><b>7</b> steckt in <b class='hl-b'>7</b> und <b class='hl-b'>14</b> &nbsp;(14 = 7 · 2).</p><p><b>x</b> steckt in <b class='hl-b'>x²</b> (= x · x) und in <b class='hl-b'>x</b>. Das kleinste Vorkommen ist einmal <b>x</b>.</p>",
        tex: "7x^2 - 14x = \\mathbf{7x} \\cdot x - \\mathbf{7x} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>7x</b> vor die Klammer:</p>",
        tex: "= 7x(x - 2)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "12x - 8",
    note: "Welche Zahl passt in 12 und in 8? Probiere 4.",
    ergebnis: "4(3x - 2)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Welche Zahl passt in <b>12</b> und <b>8</b>? Die <b>4</b>.</p><p><span class='hl-muted'>12 = 4 · 3 &nbsp;&nbsp; und &nbsp;&nbsp; 8 = 4 · 2</span></p>",
        tex: "12x - 8 = \\mathbf{4} \\cdot 3x - \\mathbf{4} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4</b> vor die Klammer, das Minus bleibt:</p>",
        tex: "= 4(3x - 2)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "2x^2 + 6x",
    note: "Welche Zahl steckt in 2 und 6? Welche Variable steckt in x² und x?",
    ergebnis: "2x(x + 3)",
    solution: [
      { title: "Zahl und Variable prüfen",
        text: "<p><b>2</b> steckt in <b class='hl-b'>2</b> und <b class='hl-b'>6</b> &nbsp;(6 = 2 · 3).</p><p><b>x</b> steckt in <b class='hl-b'>x²</b> (= x · x) und in <b class='hl-b'>x</b>. Das kleinste Vorkommen ist einmal <b>x</b>.</p>",
        tex: "2x^2 + 6x = \\mathbf{2x} \\cdot x + \\mathbf{2x} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>2x</b> vor die Klammer:</p>",
        tex: "= 2x(x + 3)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "15b + 20",
    note: "Welche Zahl passt in 15 und in 20? Denk an die 5.",
    ergebnis: "5(3b + 4)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Welche Zahl passt in <b>15</b> und <b>20</b>? Die <b>5</b>.</p><p><span class='hl-muted'>15 = 5 · 3 &nbsp;&nbsp; und &nbsp;&nbsp; 20 = 5 · 4</span></p>",
        tex: "15b + 20 = \\mathbf{5} \\cdot 3b + \\mathbf{5} \\cdot 4" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5</b> vor die Klammer:</p>",
        tex: "= 5(3b + 4)" }
    ] },

  { topic: "ausklammern", level: "easy", type: "Klammere aus",
    q: "6a^2 - 9a",
    note: "Welche Zahl steckt in 6 und 9? Welche Variable steckt in a² und a?",
    ergebnis: "3a(2a - 3)",
    solution: [
      { title: "Zahl und Variable prüfen",
        text: "<p><b>3</b> steckt in <b class='hl-b'>6</b> und <b class='hl-b'>9</b> &nbsp;(6 = 3 · 2, 9 = 3 · 3).</p><p><b>a</b> steckt in <b class='hl-b'>a²</b> (= a · a) und in <b class='hl-b'>a</b>. Das kleinste Vorkommen ist einmal <b>a</b>.</p>",
        tex: "6a^2 - 9a = \\mathbf{3a} \\cdot 2a - \\mathbf{3a} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3a</b> vor die Klammer:</p>",
        tex: "= 3a(2a - 3)" }
    ] },

  // ===== Ausklammern – Mittel =====
  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "10x^2y - 15xy^2",
    note: "Was passt in 10 und 15? Welche Variablen kommen in beiden Termen vor?",
    ergebnis: "5xy(2x - 3y)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>10</b> und <b class='hl-b'>15</b>? Die <b>5</b> &nbsp;(10 = 5·2, 15 = 5·3).</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>x</b> steckt in x² (= x·x) und in x → mindestens einmal <b>x</b>.</p><p><b>y</b> steckt in y (1. Term) und y² (= y·y, 2. Term) → mindestens einmal <b>y</b>.</p>",
        tex: "10x^2y - 15xy^2 = \\mathbf{5xy} \\cdot 2x - \\mathbf{5xy} \\cdot 3y" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5xy</b> vor die Klammer:</p>",
        tex: "= 5xy(2x - 3y)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "-2x^2 - 6x",
    note: "Beide Terme sind negativ. Was passiert, wenn du −2x ausklämmerst?",
    ergebnis: "-2x(x + 3)",
    solution: [
      { title: "Gemeinsamer Faktor mit Vorzeichen",
        text: "<p>In <b>2</b> und <b>6</b> passt die <b>2</b>, und <b>x</b> steckt in beiden. Das erste Vorzeichen ist negativ → klammere <b>−2x</b> aus.</p><p>Wichtig: Beim Ausklammern von <b>−2x</b> dreht sich <em>jedes</em> Vorzeichen in der Klammer um! &nbsp;<span class='hl-muted'>(−2x)·(+3) = −6x ✓</span></p>",
        tex: "-2x^2 - 6x = (-2x) \\cdot x + (-2x) \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Mit <b>−2x</b> vor der Klammer — die Vorzeichen innen sind umgedreht:</p>",
        tex: "= -2x(x + 3)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "-4a^2 + 8a",
    note: "a steckt in beiden Termen. Was passiert mit den Vorzeichen, wenn du −4a ausklämmerst?",
    ergebnis: "-4a(a - 2)",
    solution: [
      { title: "Gemeinsamer Faktor mit Vorzeichen",
        text: "<p>In <b>4</b> und <b>8</b> passt die <b>4</b>, und <b>a</b> steckt in beiden. Das erste Vorzeichen ist negativ → klammere <b>−4a</b> aus.</p><p>Wichtig: Beim Ausklammern von <b>−4a</b> dreht sich <em>jedes</em> Vorzeichen in der Klammer um! &nbsp;<span class='hl-muted'>(−4a)·(−2) = +8a ✓</span></p>",
        tex: "-4a^2 + 8a = (-4a) \\cdot a + (-4a) \\cdot (-2)" },
      { title: "Ausklammern",
        text: "<p>Mit <b>−4a</b> vor der Klammer — die Vorzeichen innen sind umgedreht:</p>",
        tex: "= -4a(a - 2)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "6x^2y + 9xy^2",
    note: "Was passt in 6 und 9? Welche Variablen kommen in beiden Termen vor?",
    ergebnis: "3xy(2x + 3y)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>6</b> und <b class='hl-b'>9</b>? Die <b>3</b> &nbsp;(6 = 3·2, 9 = 3·3).</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>x</b> steckt in x² und in x → mindestens einmal <b>x</b>.</p><p><b>y</b> steckt in y und in y² → mindestens einmal <b>y</b>.</p>",
        tex: "6x^2y + 9xy^2 = \\mathbf{3xy} \\cdot 2x + \\mathbf{3xy} \\cdot 3y" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3xy</b> vor die Klammer:</p>",
        tex: "= 3xy(2x + 3y)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "14a^3 - 21a^2",
    note: "Was passt in 14 und 21? Welche a-Potenz steckt in beiden Termen?",
    ergebnis: "7a^2(2a - 3)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>14</b> und <b class='hl-b'>21</b>? Die <b>7</b> &nbsp;(14 = 7·2, 21 = 7·3).</p>" },
      { title: "Variable prüfen",
        text: "<p>In beiden Termen steckt mindestens <b>a²</b>:</p><p><span class='hl-muted'>a³ = a²·a, &nbsp; a² = a²·1</span></p>",
        tex: "14a^3 - 21a^2 = \\mathbf{7a^2} \\cdot 2a - \\mathbf{7a^2} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>7a²</b> vor die Klammer:</p>",
        tex: "= 7a^2(2a - 3)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "-3x^3 + 6x^2",
    note: "Das erste Vorzeichen ist negativ. Klammere −3x² aus und dreh die Vorzeichen.",
    ergebnis: "-3x^2(x - 2)",
    solution: [
      { title: "Gemeinsamer Faktor mit Vorzeichen",
        text: "<p>In <b>3</b> und <b>6</b> passt die <b>3</b>. In x³ und x² steckt mindestens <b>x²</b>. Erstes Vorzeichen negativ → klammere <b>−3x²</b> aus.</p><p>Wichtig: Jedes Vorzeichen in der Klammer dreht sich um! &nbsp;<span class='hl-muted'>(−3x²)·(−2) = +6x² ✓</span></p>",
        tex: "-3x^3 + 6x^2 = (-3x^2) \\cdot x + (-3x^2) \\cdot (-2)" },
      { title: "Ausklammern",
        text: "<p>Mit <b>−3x²</b> vor der Klammer — die Vorzeichen innen sind umgedreht:</p>",
        tex: "= -3x^2(x - 2)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "8m^2n - 12mn",
    note: "Was passt in 8 und 12? Welche Variablen kommen in beiden Termen vor?",
    ergebnis: "4mn(2m - 3)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>8</b> und <b class='hl-b'>12</b>? Die <b>4</b> &nbsp;(8 = 4·2, 12 = 4·3).</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>m</b> steckt in m² und in m → mindestens einmal <b>m</b>.</p><p><b>n</b> steckt in beiden Termen → einmal <b>n</b>.</p>",
        tex: "8m^2n - 12mn = \\mathbf{4mn} \\cdot 2m - \\mathbf{4mn} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4mn</b> vor die Klammer:</p>",
        tex: "= 4mn(2m - 3)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "20a^2b^2 - 15ab",
    note: "Was passt in 20 und 15? Wie oft steckt a und b mindestens in beiden Termen?",
    ergebnis: "5ab(4ab - 3)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>20</b> und <b class='hl-b'>15</b>? Die <b>5</b> &nbsp;(20 = 5·4, 15 = 5·3).</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>a</b> steckt in a² und in a → mindestens einmal <b>a</b>.</p><p><b>b</b> steckt in b² und in b → mindestens einmal <b>b</b>.</p>",
        tex: "20a^2b^2 - 15ab = \\mathbf{5ab} \\cdot 4ab - \\mathbf{5ab} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5ab</b> vor die Klammer:</p>",
        tex: "= 5ab(4ab - 3)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "-6xy - 9x",
    note: "x steckt in beiden Termen. Das erste Vorzeichen ist negativ.",
    ergebnis: "-3x(2y + 3)",
    solution: [
      { title: "Gemeinsamer Faktor mit Vorzeichen",
        text: "<p>In <b>6</b> und <b>9</b> passt die <b>3</b>, und <b>x</b> steckt in beiden. Erstes Vorzeichen negativ → klammere <b>−3x</b> aus.</p><p>Wichtig: Jedes Vorzeichen in der Klammer dreht sich um! &nbsp;<span class='hl-muted'>(−3x)·(+3) = −9x ✓</span></p>",
        tex: "-6xy - 9x = (-3x) \\cdot 2y + (-3x) \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Mit <b>−3x</b> vor der Klammer — die Vorzeichen innen sind umgedreht:</p>",
        tex: "= -3x(2y + 3)" }
    ] },

  { topic: "ausklammern", level: "medium", type: "Klammere aus",
    q: "18x^2y - 24xy^2",
    note: "Was ist der größte gemeinsame Teiler von 18 und 24? Welche Variablen stecken in beiden?",
    ergebnis: "6xy(3x - 4y)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>18</b> und <b class='hl-b'>24</b>? Probiere: <b>6?</b> 18 = 6·3 ✓, 24 = 6·4 ✓ → gemeinsamer Faktor: <b>6</b>.</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>x</b> steckt in x² und in x → mindestens einmal <b>x</b>.</p><p><b>y</b> steckt in y und in y² → mindestens einmal <b>y</b>.</p>",
        tex: "18x^2y - 24xy^2 = \\mathbf{6xy} \\cdot 3x - \\mathbf{6xy} \\cdot 4y" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>6xy</b> vor die Klammer:</p>",
        tex: "= 6xy(3x - 4y)" }
    ] },

  // ===== Ausklammern – Schwer =====
  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "8x^4 - 12x^3 + 4x^2",
    note: "Was passt in 8, 12 und 4? Welche x-Potenz steckt in allen drei Termen?",
    ergebnis: "4x^2(2x^2 - 3x + 1)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>8</b>, <b class='hl-b'>12</b> und <b class='hl-b'>4</b>? Die <b>4</b> &nbsp;(8 = 4·2, 12 = 4·3, 4 = 4·1).</p>" },
      { title: "Variable prüfen",
        text: "<p>In allen drei Termen steckt mindestens <b>x²</b>:</p><p><span class='hl-muted'>x⁴ = x²·x², &nbsp; x³ = x²·x, &nbsp; x² = x²·1</span></p>",
        tex: "8x^4 - 12x^3 + 4x^2 = \\mathbf{4x^2} \\cdot 2x^2 - \\mathbf{4x^2} \\cdot 3x + \\mathbf{4x^2} \\cdot 1" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4x²</b> vor die Klammer — die <b>1</b> nicht vergessen!</p>",
        tex: "= 4x^2(2x^2 - 3x + 1)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "5(a+3) + a(a+3)",
    note: "Schau genau: Welcher Klammerausdruck steckt in BEIDEN Termen?",
    ergebnis: "(a+3)(a + 5)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>Im ersten Term steht <b>(a+3)</b>, im zweiten Term auch <b>(a+3)</b>.</p><p>Das ist der gemeinsame Faktor — genau wie eine Zahl! Man klammert ganze Klammern aus.</p>",
        tex: "5 \\cdot (a+3) + a \\cdot (a+3)" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>(a+3)</b> vor die Klammer, die anderen Faktoren (5 und a) bleiben drin:</p>",
        tex: "= (a+3)(a + 5)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "2x(y-4) - 3(y-4)",
    note: "Welcher Klammerausdruck steckt in beiden Termen? Das Minus gehört dazu.",
    ergebnis: "(y-4)(2x - 3)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>In beiden Termen steht <b>(y−4)</b>. Das ist der gemeinsame Faktor.</p><p>Vor der Klammer stehen <b>2x</b> und <b>−3</b> — das Minus bleibt beim zweiten Teil.</p>",
        tex: "2x \\cdot (y-4) - 3 \\cdot (y-4)" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>(y−4)</b> vor die Klammer, die übrigen Faktoren bleiben drin:</p>",
        tex: "= (y-4)(2x - 3)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "10a^3 - 25a^2 + 15a",
    note: "Was passt in 10, 25 und 15? Welche a-Potenz steckt in allen drei Termen?",
    ergebnis: "5a(2a^2 - 5a + 3)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>10</b>, <b class='hl-b'>25</b> und <b class='hl-b'>15</b>? Die <b>5</b> &nbsp;(10 = 5·2, 25 = 5·5, 15 = 5·3).</p>" },
      { title: "Variable prüfen",
        text: "<p>In allen drei Termen steckt mindestens <b>a</b>:</p><p><span class='hl-muted'>a³ = a·a², &nbsp; a² = a·a, &nbsp; a = a·1</span></p>",
        tex: "10a^3 - 25a^2 + 15a = \\mathbf{5a} \\cdot 2a^2 - \\mathbf{5a} \\cdot 5a + \\mathbf{5a} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5a</b> vor die Klammer:</p>",
        tex: "= 5a(2a^2 - 5a + 3)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "12x^3y - 18x^2y^2 + 6x^2y",
    note: "Was passt in 12, 18 und 6? Welche Potenzen von x und y stecken in allen drei Termen?",
    ergebnis: "6x^2y(2x - 3y + 1)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>12</b>, <b class='hl-b'>18</b> und <b class='hl-b'>6</b>? Die <b>6</b> &nbsp;(12 = 6·2, 18 = 6·3, 6 = 6·1).</p>" },
      { title: "Variablen prüfen",
        text: "<p><b>x²</b> steckt in allen drei Termen (x³ = x²·x).</p><p><b>y</b> steckt in allen drei Termen (y² = y·y). Gemeinsam: <b>6x²y</b>.</p>",
        tex: "12x^3y - 18x^2y^2 + 6x^2y = \\mathbf{6x^2y} \\cdot 2x - \\mathbf{6x^2y} \\cdot 3y + \\mathbf{6x^2y} \\cdot 1" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>6x²y</b> vor die Klammer — die <b>1</b> nicht vergessen!</p>",
        tex: "= 6x^2y(2x - 3y + 1)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "x(a+b) + 2(a+b)",
    note: "Welcher Klammerausdruck steckt in beiden Termen?",
    ergebnis: "(a+b)(x + 2)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>In beiden Termen steht <b>(a+b)</b>. Das ist der gemeinsame Faktor.</p><p>Vor der Klammer stehen <b>x</b> und <b>2</b> — die bleiben drin.</p>",
        tex: "x \\cdot (a+b) + 2 \\cdot (a+b)" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>(a+b)</b> vor die Klammer:</p>",
        tex: "= (a+b)(x + 2)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "9a^4 + 6a^3 - 12a^2",
    note: "Was passt in 9, 6 und 12? Welche a-Potenz steckt in allen drei Termen?",
    ergebnis: "3a^2(3a^2 + 2a - 4)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>9</b>, <b class='hl-b'>6</b> und <b class='hl-b'>12</b>? Die <b>3</b> &nbsp;(9 = 3·3, 6 = 3·2, 12 = 3·4).</p>" },
      { title: "Variable prüfen",
        text: "<p>In allen drei Termen steckt mindestens <b>a²</b>:</p><p><span class='hl-muted'>a⁴ = a²·a², &nbsp; a³ = a²·a, &nbsp; a² = a²·1</span></p>",
        tex: "9a^4 + 6a^3 - 12a^2 = \\mathbf{3a^2} \\cdot 3a^2 + \\mathbf{3a^2} \\cdot 2a - \\mathbf{3a^2} \\cdot 4" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3a²</b> vor die Klammer:</p>",
        tex: "= 3a^2(3a^2 + 2a - 4)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "7x(2a+b) - (2a+b)",
    note: "Der zweite Term ist (2a+b) mit Faktor 1. Welcher Klammerausdruck steckt in beiden?",
    ergebnis: "(2a+b)(7x - 1)",
    solution: [
      { title: "Gemeinsamen Faktor erkennen",
        text: "<p>In beiden Termen steht <b>(2a+b)</b>. Vor dem zweiten Term steht ein verstecktes <b>1</b>:</p><p><span class='hl-muted'>−(2a+b) = −1 · (2a+b)</span></p>",
        tex: "7x \\cdot (2a+b) - 1 \\cdot (2a+b)" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>(2a+b)</b> vor die Klammer — die <b>1</b> nicht vergessen!</p>",
        tex: "= (2a+b)(7x - 1)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "16x^3 - 8x^2 + 24x",
    note: "Was passt in 16, 8 und 24? Welche x-Potenz steckt in allen drei Termen?",
    ergebnis: "8x(2x^2 - x + 3)",
    solution: [
      { title: "Zahl prüfen",
        text: "<p>Was passt in <b class='hl-b'>16</b>, <b class='hl-b'>8</b> und <b class='hl-b'>24</b>? Die <b>8</b> &nbsp;(16 = 8·2, 8 = 8·1, 24 = 8·3).</p>" },
      { title: "Variable prüfen",
        text: "<p>In allen drei Termen steckt mindestens <b>x</b>:</p><p><span class='hl-muted'>x³ = x·x², &nbsp; x² = x·x, &nbsp; x = x·1</span></p>",
        tex: "16x^3 - 8x^2 + 24x = \\mathbf{8x} \\cdot 2x^2 - \\mathbf{8x} \\cdot x + \\mathbf{8x} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>8x</b> vor die Klammer:</p>",
        tex: "= 8x(2x^2 - x + 3)" }
    ] },

  { topic: "ausklammern", level: "hard", type: "Klammere aus",
    q: "3a(x+y) - 6b(x+y) + 9(x+y)",
    note: "Zwei gemeinsame Teile: der Klammerausdruck (x+y) UND eine Zahl in 3, 6, 9.",
    ergebnis: "3(x+y)(a - 2b + 3)",
    solution: [
      { title: "Gemeinsamen Klammerausdruck erkennen",
        text: "<p>In allen drei Termen steht <b>(x+y)</b>. Vor der Klammer stehen <b>3a</b>, <b>−6b</b> und <b>9</b>.</p>",
        tex: "3a \\cdot (x+y) - 6b \\cdot (x+y) + 9 \\cdot (x+y)" },
      { title: "Zahl prüfen",
        text: "<p>In <b class='hl-b'>3</b>, <b class='hl-b'>6</b> und <b class='hl-b'>9</b> passt zusätzlich die <b>3</b>. Beides zusammen ausklammern: <b>3(x+y)</b>.</p>",
        tex: "3a - 6b + 9 = \\mathbf{3} \\cdot a - \\mathbf{3} \\cdot 2b + \\mathbf{3} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3(x+y)</b> vor die Klammer:</p>",
        tex: "= 3(x+y)(a - 2b + 3)" }
    ] },

  // ================================================================ ausmultiplizieren
  // ===== Ausmultiplizieren – Einfach =====
  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "3(x+2)",
    note: "Die 3 mal jeden Summanden in der Klammer einzeln.",
    ergebnis: "3x + 6",
    solution: [
      { title: "Jeden Summanden mal 3",
        text: "<p>Die <b>3</b> trifft <em>beide</em> Teile der Klammer: erst <b class='hl-b'>x</b>, dann <b class='hl-b'>2</b>.</p>",
        tex: "3(x+2) = 3 \\cdot x + 3 \\cdot 2" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 3x + 6" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "5(2x-3)",
    note: "Die 5 mal 2x und die 5 mal 3. Das Minus bleibt stehen.",
    ergebnis: "10x - 15",
    solution: [
      { title: "Jeden Summanden mal 5",
        text: "<p>Die <b>5</b> trifft <b class='hl-b'>2x</b> und <b class='hl-b'>3</b>. Das Minuszeichen gehört zur 3.</p>",
        tex: "5(2x-3) = 5 \\cdot 2x - 5 \\cdot 3" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 10x - 15" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "-(x-4)",
    note: "Ein Minus vor der Klammer ist wie mal (−1). Was passiert mit den Vorzeichen innen?",
    ergebnis: "-x + 4",
    solution: [
      { title: "Minus vor der Klammer",
        text: "<p>Das Minus ist ein verstecktes <b>·(−1)</b>. Es dreht <em>jedes</em> Vorzeichen in der Klammer um.</p>",
        tex: "-(x-4) = (-1) \\cdot x + (-1) \\cdot (-4)" },
      { title: "Ergebnis",
        text: "<p>Aus <b>−x</b> und <b>+4</b>:</p>",
        tex: "= -x + 4" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "4(a+3)",
    note: "Die 4 mal jeden Summanden einzeln.",
    ergebnis: "4a + 12",
    solution: [
      { title: "Jeden Summanden mal 4",
        text: "<p>Die <b>4</b> trifft <b class='hl-b'>a</b> und <b class='hl-b'>3</b>.</p>",
        tex: "4(a+3) = 4 \\cdot a + 4 \\cdot 3" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 4a + 12" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "2(3x+5)",
    note: "Die 2 mal 3x und die 2 mal 5.",
    ergebnis: "6x + 10",
    solution: [
      { title: "Jeden Summanden mal 2",
        text: "<p>Die <b>2</b> trifft <b class='hl-b'>3x</b> und <b class='hl-b'>5</b>.</p>",
        tex: "2(3x+5) = 2 \\cdot 3x + 2 \\cdot 5" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 6x + 10" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "7(x-1)",
    note: "Die 7 mal x und die 7 mal 1. Das Minus bleibt.",
    ergebnis: "7x - 7",
    solution: [
      { title: "Jeden Summanden mal 7",
        text: "<p>Die <b>7</b> trifft <b class='hl-b'>x</b> und <b class='hl-b'>1</b>.</p>",
        tex: "7(x-1) = 7 \\cdot x - 7 \\cdot 1" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 7x - 7" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "-(2x+5)",
    note: "Minus vor der Klammer dreht jedes Vorzeichen innen um.",
    ergebnis: "-2x - 5",
    solution: [
      { title: "Minus vor der Klammer",
        text: "<p>Das Minus ist ein <b>·(−1)</b>. Aus <b>+2x</b> wird <b>−2x</b>, aus <b>+5</b> wird <b>−5</b>.</p>",
        tex: "-(2x+5) = (-1) \\cdot 2x + (-1) \\cdot 5" },
      { title: "Ergebnis",
        text: "<p>Beide Vorzeichen gedreht:</p>",
        tex: "= -2x - 5" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "6(2a-1)",
    note: "Die 6 mal 2a und die 6 mal 1.",
    ergebnis: "12a - 6",
    solution: [
      { title: "Jeden Summanden mal 6",
        text: "<p>Die <b>6</b> trifft <b class='hl-b'>2a</b> und <b class='hl-b'>1</b>.</p>",
        tex: "6(2a-1) = 6 \\cdot 2a - 6 \\cdot 1" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 12a - 6" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "x(x+4)",
    note: "Das x vor der Klammer mal jeden Summanden. Denk an x · x = x².",
    ergebnis: "x^2 + 4x",
    solution: [
      { title: "x mal jeden Summanden",
        text: "<p>Das <b>x</b> trifft <b class='hl-b'>x</b> und <b class='hl-b'>4</b>. Und <b>x · x = x²</b>.</p>",
        tex: "x(x+4) = x \\cdot x + x \\cdot 4" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= x^2 + 4x" }
    ] },

  { topic: "ausmultiplizieren", level: "easy", type: "Multipliziere aus",
    q: "3(4x+2)",
    note: "Die 3 mal 4x und die 3 mal 2.",
    ergebnis: "12x + 6",
    solution: [
      { title: "Jeden Summanden mal 3",
        text: "<p>Die <b>3</b> trifft <b class='hl-b'>4x</b> und <b class='hl-b'>2</b>.</p>",
        tex: "3(4x+2) = 3 \\cdot 4x + 3 \\cdot 2" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 12x + 6" }
    ] },

  // ===== Ausmultiplizieren – Mittel =====
  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "2x^2(3x-1)",
    note: "Der Faktor 2x² trifft beide Teile. Bei x² · x werden die Hochzahlen addiert.",
    ergebnis: "6x^3 - 2x^2",
    solution: [
      { title: "Faktor mal jeden Summanden",
        text: "<p><b>2x²</b> trifft <b class='hl-b'>3x</b> und <b class='hl-b'>1</b>.</p><p>Potenzen: <span class='hl-muted'>x² · x = x³</span>.</p>",
        tex: "2x^2(3x-1) = 2x^2 \\cdot 3x - 2x^2 \\cdot 1" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 6x^3 - 2x^2" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(x-1)(x+4)",
    note: "Jeder Teil der ersten Klammer mal jeder Teil der zweiten — vier Produkte.",
    ergebnis: "x^2 + 3x - 4",
    solution: [
      { title: "Vier Produkte bilden",
        text: "<p>Jeder Summand der ersten Klammer trifft jeden der zweiten: <b>x·x</b>, <b>x·4</b>, <b>−1·x</b>, <b>−1·4</b>.</p>",
        tex: "(x-1)(x+4) = x^2 + 4x - x - 4" },
      { title: "Gleiche Terme zusammenfassen",
        text: "<p><b>+4x</b> und <b>−x</b> zusammen sind <b>+3x</b>:</p>",
        tex: "= x^2 + 3x - 4" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(x+2)(x-5)",
    note: "Vier Produkte. Achte auf die Vorzeichen bei x·(−5) und 2·(−5).",
    ergebnis: "x^2 - 3x - 10",
    solution: [
      { title: "Vier Produkte bilden",
        text: "<p>Jeder Teil mal jeden: <b>x·x</b>, <b>x·(−5)</b>, <b>2·x</b>, <b>2·(−5)</b>.</p>",
        tex: "(x+2)(x-5) = x^2 - 5x + 2x - 10" },
      { title: "Gleiche Terme zusammenfassen",
        text: "<p><b>−5x</b> und <b>+2x</b> ergeben <b>−3x</b>:</p>",
        tex: "= x^2 - 3x - 10" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "-3(2x-4)",
    note: "Minus-Faktor: −3 mal jeden Teil. Was wird aus −3 · (−4)?",
    ergebnis: "-6x + 12",
    solution: [
      { title: "−3 mal jeden Summanden",
        text: "<p>Die <b>−3</b> trifft <b class='hl-b'>2x</b> und <b class='hl-b'>−4</b>. Beachte: <b>−3 · (−4) = +12</b>.</p>",
        tex: "-3(2x-4) = -3 \\cdot 2x - 3 \\cdot (-4)" },
      { title: "Ergebnis",
        text: "<p>Minus mal Minus ergibt Plus:</p>",
        tex: "= -6x + 12" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(x+3)(x+2)",
    note: "Vier Produkte, danach die beiden x-Terme zusammenfassen.",
    ergebnis: "x^2 + 5x + 6",
    solution: [
      { title: "Vier Produkte bilden",
        text: "<p>Jeder Teil mal jeden: <b>x·x</b>, <b>x·2</b>, <b>3·x</b>, <b>3·2</b>.</p>",
        tex: "(x+3)(x+2) = x^2 + 2x + 3x + 6" },
      { title: "Gleiche Terme zusammenfassen",
        text: "<p><b>+2x</b> und <b>+3x</b> ergeben <b>+5x</b>:</p>",
        tex: "= x^2 + 5x + 6" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "2a(a^2-3a+1)",
    note: "Der Faktor 2a trifft alle drei Teile. Hochzahlen bei a·a² addieren.",
    ergebnis: "2a^3 - 6a^2 + 2a",
    solution: [
      { title: "Faktor mal jeden Summanden",
        text: "<p><b>2a</b> trifft <b class='hl-b'>a²</b>, <b class='hl-b'>3a</b> und <b class='hl-b'>1</b>.</p><p>Potenzen: <span class='hl-muted'>a · a² = a³, &nbsp; a · a = a²</span>.</p>",
        tex: "2a(a^2-3a+1) = 2a \\cdot a^2 - 2a \\cdot 3a + 2a \\cdot 1" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 2a^3 - 6a^2 + 2a" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(2x+1)(x-3)",
    note: "Vier Produkte. Der Vorfaktor 2 wandert bei 2x·x mit.",
    ergebnis: "2x^2 - 5x - 3",
    solution: [
      { title: "Vier Produkte bilden",
        text: "<p>Jeder Teil mal jeden: <b>2x·x</b>, <b>2x·(−3)</b>, <b>1·x</b>, <b>1·(−3)</b>.</p>",
        tex: "(2x+1)(x-3) = 2x^2 - 6x + x - 3" },
      { title: "Gleiche Terme zusammenfassen",
        text: "<p><b>−6x</b> und <b>+x</b> ergeben <b>−5x</b>:</p>",
        tex: "= 2x^2 - 5x - 3" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "-x(x^2-2x+5)",
    note: "Minus-Faktor −x mal alle drei Teile. Jedes Vorzeichen dreht sich.",
    ergebnis: "-x^3 + 2x^2 - 5x",
    solution: [
      { title: "−x mal jeden Summanden",
        text: "<p><b>−x</b> trifft <b class='hl-b'>x²</b>, <b class='hl-b'>2x</b> und <b class='hl-b'>5</b>. Beachte: <b>−x · (−2x) = +2x²</b>.</p>",
        tex: "-x(x^2-2x+5) = -x \\cdot x^2 - x \\cdot (-2x) - x \\cdot 5" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= -x^3 + 2x^2 - 5x" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "(x-4)(x-2)",
    note: "Vier Produkte. Minus mal Minus wird am Ende Plus.",
    ergebnis: "x^2 - 6x + 8",
    solution: [
      { title: "Vier Produkte bilden",
        text: "<p>Jeder Teil mal jeden: <b>x·x</b>, <b>x·(−2)</b>, <b>−4·x</b>, <b>−4·(−2)</b>.</p><p>Beachte: <b>−4 · (−2) = +8</b>.</p>",
        tex: "(x-4)(x-2) = x^2 - 2x - 4x + 8" },
      { title: "Gleiche Terme zusammenfassen",
        text: "<p><b>−2x</b> und <b>−4x</b> ergeben <b>−6x</b>:</p>",
        tex: "= x^2 - 6x + 8" }
    ] },

  { topic: "ausmultiplizieren", level: "medium", type: "Multipliziere aus",
    q: "3x(2x+5)",
    note: "Der Faktor 3x trifft beide Teile. Bei 3x·2x werden Zahlen und x multipliziert.",
    ergebnis: "6x^2 + 15x",
    solution: [
      { title: "Faktor mal jeden Summanden",
        text: "<p><b>3x</b> trifft <b class='hl-b'>2x</b> und <b class='hl-b'>5</b>. Dabei <b>3x · 2x = 6x²</b>.</p>",
        tex: "3x(2x+5) = 3x \\cdot 2x + 3x \\cdot 5" },
      { title: "Ergebnis",
        text: "<p>Ausrechnen:</p>",
        tex: "= 6x^2 + 15x" }
    ] },

  // ===== Ausmultiplizieren – Schwer =====
  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(3x+2)^2",
    note: "Erste binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$. Hier ist $a = 3x$ und $b = 2$.",
    ergebnis: "9x^2 + 12x + 4",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Erste binomische Formel mit <b>a = 3x</b> und <b>b = 2</b>:</p>",
        tex: "(3x+2)^2 = (3x)^2 + 2 \\cdot 3x \\cdot 2 + 2^2" },
      { title: "Jeden Teil ausrechnen",
        text: "<p><b>(3x)² = 9x²</b>, &nbsp; <b>2·3x·2 = 12x</b>, &nbsp; <b>2² = 4</b>.</p>",
        tex: "= 9x^2 + 12x + 4" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(5a-1)^2",
    note: "Zweite binomische Formel: $(a-b)^2 = a^2 - 2ab + b^2$. Hier ist $a = 5a$ und $b = 1$.",
    ergebnis: "25a^2 - 10a + 1",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Zweite binomische Formel mit <b>a = 5a</b> und <b>b = 1</b> — das mittlere Glied ist negativ:</p>",
        tex: "(5a-1)^2 = (5a)^2 - 2 \\cdot 5a \\cdot 1 + 1^2" },
      { title: "Jeden Teil ausrechnen",
        text: "<p><b>(5a)² = 25a²</b>, &nbsp; <b>2·5a·1 = 10a</b>, &nbsp; <b>1² = 1</b>.</p>",
        tex: "= 25a^2 - 10a + 1" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(x+4)(x-4)",
    note: "Dritte binomische Formel: $(a+b)(a-b) = a^2 - b^2$. Hier ist $a = x$ und $b = 4$.",
    ergebnis: "x^2 - 16",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Plus-Klammer mal Minus-Klammer mit gleichen Teilen → dritte binomische Formel. <b>a = x</b>, <b>b = 4</b>. Der mittlere Term fällt weg.</p>",
        tex: "(x+4)(x-4) = x^2 - 4^2" },
      { title: "Ergebnis",
        text: "<p><b>4² = 16</b>:</p>",
        tex: "= x^2 - 16" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(2x-3)^2",
    note: "Zweite binomische Formel: $(a-b)^2 = a^2 - 2ab + b^2$. Hier ist $a = 2x$ und $b = 3$.",
    ergebnis: "4x^2 - 12x + 9",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Zweite binomische Formel mit <b>a = 2x</b> und <b>b = 3</b>:</p>",
        tex: "(2x-3)^2 = (2x)^2 - 2 \\cdot 2x \\cdot 3 + 3^2" },
      { title: "Jeden Teil ausrechnen",
        text: "<p><b>(2x)² = 4x²</b>, &nbsp; <b>2·2x·3 = 12x</b>, &nbsp; <b>3² = 9</b>.</p>",
        tex: "= 4x^2 - 12x + 9" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(4x+5)(4x-5)",
    note: "Dritte binomische Formel: $(a+b)(a-b) = a^2 - b^2$. Hier ist $a = 4x$ und $b = 5$.",
    ergebnis: "16x^2 - 25",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Gleiche Teile, einmal plus, einmal minus → dritte binomische Formel. <b>a = 4x</b>, <b>b = 5</b>.</p>",
        tex: "(4x+5)(4x-5) = (4x)^2 - 5^2" },
      { title: "Ergebnis",
        text: "<p><b>(4x)² = 16x²</b> und <b>5² = 25</b>:</p>",
        tex: "= 16x^2 - 25" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(2a+3b)^2",
    note: "Erste binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$. Hier ist $a = 2a$ und $b = 3b$.",
    ergebnis: "4a^2 + 12ab + 9b^2",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Erste binomische Formel mit <b>a = 2a</b> und <b>b = 3b</b>:</p>",
        tex: "(2a+3b)^2 = (2a)^2 + 2 \\cdot 2a \\cdot 3b + (3b)^2" },
      { title: "Jeden Teil ausrechnen",
        text: "<p><b>(2a)² = 4a²</b>, &nbsp; <b>2·2a·3b = 12ab</b>, &nbsp; <b>(3b)² = 9b²</b>.</p>",
        tex: "= 4a^2 + 12ab + 9b^2" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(3x-2y)^2",
    note: "Zweite binomische Formel: $(a-b)^2 = a^2 - 2ab + b^2$. Hier ist $a = 3x$ und $b = 2y$.",
    ergebnis: "9x^2 - 12xy + 4y^2",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Zweite binomische Formel mit <b>a = 3x</b> und <b>b = 2y</b>:</p>",
        tex: "(3x-2y)^2 = (3x)^2 - 2 \\cdot 3x \\cdot 2y + (2y)^2" },
      { title: "Jeden Teil ausrechnen",
        text: "<p><b>(3x)² = 9x²</b>, &nbsp; <b>2·3x·2y = 12xy</b>, &nbsp; <b>(2y)² = 4y²</b>.</p>",
        tex: "= 9x^2 - 12xy + 4y^2" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(5x+2)(5x-2)",
    note: "Dritte binomische Formel: $(a+b)(a-b) = a^2 - b^2$. Hier ist $a = 5x$ und $b = 2$.",
    ergebnis: "25x^2 - 4",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Gleiche Teile, einmal plus, einmal minus → dritte binomische Formel. <b>a = 5x</b>, <b>b = 2</b>.</p>",
        tex: "(5x+2)(5x-2) = (5x)^2 - 2^2" },
      { title: "Ergebnis",
        text: "<p><b>(5x)² = 25x²</b> und <b>2² = 4</b>:</p>",
        tex: "= 25x^2 - 4" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(2x+7)^2",
    note: "Erste binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$. Hier ist $a = 2x$ und $b = 7$.",
    ergebnis: "4x^2 + 28x + 49",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Erste binomische Formel mit <b>a = 2x</b> und <b>b = 7</b>:</p>",
        tex: "(2x+7)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 7 + 7^2" },
      { title: "Jeden Teil ausrechnen",
        text: "<p><b>(2x)² = 4x²</b>, &nbsp; <b>2·2x·7 = 28x</b>, &nbsp; <b>7² = 49</b>.</p>",
        tex: "= 4x^2 + 28x + 49" }
    ] },

  { topic: "ausmultiplizieren", level: "hard", type: "Multipliziere aus",
    q: "(6a-1)(6a+1)",
    note: "Dritte binomische Formel: $(a+b)(a-b) = a^2 - b^2$. Hier ist $a = 6a$ und $b = 1$.",
    ergebnis: "36a^2 - 1",
    solution: [
      { title: "Formel ansetzen",
        text: "<p>Gleiche Teile, einmal minus, einmal plus → dritte binomische Formel. <b>a = 6a</b>, <b>b = 1</b>.</p>",
        tex: "(6a-1)(6a+1) = (6a)^2 - 1^2" },
      { title: "Ergebnis",
        text: "<p><b>(6a)² = 36a²</b> und <b>1² = 1</b>:</p>",
        tex: "= 36a^2 - 1" }
    ] },

  // ================================================================ faktorisieren
  // ===== Faktorisieren – Einfach =====
  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "6x^2 + 4x",
    note: "Welche Zahl passt in 6 und 4? Welche Variable steckt in beiden Termen?",
    ergebnis: "2x(3x + 2)",
    solution: [
      { title: "Gemeinsamen Faktor suchen",
        text: "<p>In <b class='hl-b'>6</b> und <b class='hl-b'>4</b> steckt die <b>2</b>. In x² und x steckt einmal <b>x</b>.</p><p>Gemeinsamer Faktor: <b>2x</b>.</p>",
        tex: "6x^2 + 4x = \\mathbf{2x} \\cdot 3x + \\mathbf{2x} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>2x</b> vor die Klammer:</p>",
        tex: "= 2x(3x + 2)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 - 9",
    note: "Zwei Quadrate mit Minus dazwischen. Erkennst du die 3. binomische Formel $a^2 - b^2$?",
    ergebnis: "(x + 3)(x - 3)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>Das ist $a^2 - b^2$. Hier ist $a = x$ und $b = 3$, denn $9 = 3^2$.</p>",
        tex: "x^2 - 9 = x^2 - 3^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (x + 3)(x - 3)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 - 16",
    note: "Beides Quadrate, Minus dazwischen. Was ist $\\sqrt{16}$?",
    ergebnis: "(x + 4)(x - 4)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = x$ und $b = 4$, denn $16 = 4^2$.</p>",
        tex: "x^2 - 16 = x^2 - 4^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (x + 4)(x - 4)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "10x^2 + 15x",
    note: "Welche Zahl passt in 10 und 15? Welche Variable steckt in beiden Termen?",
    ergebnis: "5x(2x + 3)",
    solution: [
      { title: "Gemeinsamen Faktor suchen",
        text: "<p>In <b class='hl-b'>10</b> und <b class='hl-b'>15</b> steckt die <b>5</b>. In x² und x steckt einmal <b>x</b>.</p><p>Gemeinsamer Faktor: <b>5x</b>.</p>",
        tex: "10x^2 + 15x = \\mathbf{5x} \\cdot 2x + \\mathbf{5x} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>5x</b> vor die Klammer:</p>",
        tex: "= 5x(2x + 3)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 - 25",
    note: "Zwei Quadrate, Minus dazwischen. Was ist $\\sqrt{25}$?",
    ergebnis: "(x + 5)(x - 5)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = x$ und $b = 5$, denn $25 = 5^2$.</p>",
        tex: "x^2 - 25 = x^2 - 5^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (x + 5)(x - 5)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "3a^2 + 6a",
    note: "Welche Zahl passt in 3 und 6? Welche Variable steckt in a² und a?",
    ergebnis: "3a(a + 2)",
    solution: [
      { title: "Gemeinsamen Faktor suchen",
        text: "<p>In <b class='hl-b'>3</b> und <b class='hl-b'>6</b> steckt die <b>3</b>. In a² und a steckt einmal <b>a</b>.</p><p>Gemeinsamer Faktor: <b>3a</b>.</p>",
        tex: "3a^2 + 6a = \\mathbf{3a} \\cdot a + \\mathbf{3a} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>3a</b> vor die Klammer:</p>",
        tex: "= 3a(a + 2)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 - 1",
    note: "Auch die 1 ist ein Quadrat: $1 = 1^2$. Minus dazwischen → 3. binomische Formel.",
    ergebnis: "(x + 1)(x - 1)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = x$ und $b = 1$, denn $1 = 1^2$.</p>",
        tex: "x^2 - 1 = x^2 - 1^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (x + 1)(x - 1)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "8y^2 - 12y",
    note: "Welche Zahl passt in 8 und 12? Welche Variable steckt in beiden Termen?",
    ergebnis: "4y(2y - 3)",
    solution: [
      { title: "Gemeinsamen Faktor suchen",
        text: "<p>In <b class='hl-b'>8</b> und <b class='hl-b'>12</b> steckt die <b>4</b>. In y² und y steckt einmal <b>y</b>.</p><p>Gemeinsamer Faktor: <b>4y</b>.</p>",
        tex: "8y^2 - 12y = \\mathbf{4y} \\cdot 2y - \\mathbf{4y} \\cdot 3" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>4y</b> vor die Klammer:</p>",
        tex: "= 4y(2y - 3)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "x^2 - 49",
    note: "Zwei Quadrate, Minus dazwischen. Was ist $\\sqrt{49}$?",
    ergebnis: "(x + 7)(x - 7)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = x$ und $b = 7$, denn $49 = 7^2$.</p>",
        tex: "x^2 - 49 = x^2 - 7^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (x + 7)(x - 7)" }
    ] },

  { topic: "faktorisieren", level: "easy", type: "Faktorisiere",
    q: "7x^2 + 14x",
    note: "Welche Zahl passt in 7 und 14? Welche Variable steckt in beiden Termen?",
    ergebnis: "7x(x + 2)",
    solution: [
      { title: "Gemeinsamen Faktor suchen",
        text: "<p>In <b class='hl-b'>7</b> und <b class='hl-b'>14</b> steckt die <b>7</b> &nbsp;(14 = 7 · 2). In x² und x steckt einmal <b>x</b>.</p><p>Gemeinsamer Faktor: <b>7x</b>.</p>",
        tex: "7x^2 + 14x = \\mathbf{7x} \\cdot x + \\mathbf{7x} \\cdot 2" },
      { title: "Ausklammern",
        text: "<p>Schreibe <b>7x</b> vor die Klammer:</p>",
        tex: "= 7x(x + 2)" }
    ] },

  // ===== Faktorisieren – Mittel =====
  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "9a^2 - 6a + 1",
    note: "Drei Glieder, erstes und letztes sind Quadrate. Denk an $(a-b)^2 = a^2 - 2ab + b^2$.",
    ergebnis: "(3a - 1)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$9a^2 = (3a)^2$ und $1 = 1^2$. Also $a = 3a$ und $b = 1$.</p>" },
      { title: "Mittelterm prüfen",
        text: "<p>Passt $-2ab$? &nbsp;<span class='hl-muted'>$-2 \\cdot 3a \\cdot 1 = -6a$ ✓</span></p>",
        tex: "9a^2 - 6a + 1 = (3a)^2 - 2 \\cdot 3a \\cdot 1 + 1^2" },
      { title: "2. binomische Formel rückwärts",
        text: "<p>$a^2 - 2ab + b^2 = (a-b)^2$:</p>",
        tex: "= (3a - 1)^2" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "4m^2 - 1",
    note: "Beides Quadrate, Minus dazwischen. Was ist $\\sqrt{4m^2}$?",
    ergebnis: "(2m + 1)(2m - 1)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = 2m$ (denn $4m^2 = (2m)^2$) und $b = 1$.</p>",
        tex: "4m^2 - 1 = (2m)^2 - 1^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (2m + 1)(2m - 1)" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "x^2 + 8x + 16",
    note: "Drei Glieder, erstes und letztes sind Quadrate. Denk an $(a+b)^2 = a^2 + 2ab + b^2$.",
    ergebnis: "(x + 4)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$x^2 = x^2$ und $16 = 4^2$. Also $a = x$ und $b = 4$.</p>" },
      { title: "Mittelterm prüfen",
        text: "<p>Passt $2ab$? &nbsp;<span class='hl-muted'>$2 \\cdot x \\cdot 4 = 8x$ ✓</span></p>",
        tex: "x^2 + 8x + 16 = x^2 + 2 \\cdot x \\cdot 4 + 4^2" },
      { title: "1. binomische Formel rückwärts",
        text: "<p>$a^2 + 2ab + b^2 = (a+b)^2$:</p>",
        tex: "= (x + 4)^2" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "9a^2 - 4",
    note: "Beides Quadrate, Minus dazwischen. Was ist $\\sqrt{9a^2}$ und $\\sqrt{4}$?",
    ergebnis: "(3a + 2)(3a - 2)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = 3a$ (denn $9a^2 = (3a)^2$) und $b = 2$.</p>",
        tex: "9a^2 - 4 = (3a)^2 - 2^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (3a + 2)(3a - 2)" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "x^2 - 10x + 25",
    note: "Drei Glieder, erstes und letztes sind Quadrate, Mittelterm negativ. Denk an $(a-b)^2$.",
    ergebnis: "(x - 5)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$x^2 = x^2$ und $25 = 5^2$. Also $a = x$ und $b = 5$.</p>" },
      { title: "Mittelterm prüfen",
        text: "<p>Passt $-2ab$? &nbsp;<span class='hl-muted'>$-2 \\cdot x \\cdot 5 = -10x$ ✓</span></p>",
        tex: "x^2 - 10x + 25 = x^2 - 2 \\cdot x \\cdot 5 + 5^2" },
      { title: "2. binomische Formel rückwärts",
        text: "<p>$a^2 - 2ab + b^2 = (a-b)^2$:</p>",
        tex: "= (x - 5)^2" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "25 - x^2",
    note: "Auch so herum ist es $a^2 - b^2$: Zuerst steht das Quadrat von 5, dann $x^2$.",
    ergebnis: "(5 + x)(5 - x)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit $a = 5$ (denn $25 = 5^2$) und $b = x$.</p>",
        tex: "25 - x^2 = 5^2 - x^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (5 + x)(5 - x)" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "16x^2 - 24x + 9",
    note: "Erstes und letztes Glied sind Quadrate, Mittelterm negativ. Denk an $(a-b)^2$.",
    ergebnis: "(4x - 3)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$16x^2 = (4x)^2$ und $9 = 3^2$. Also $a = 4x$ und $b = 3$.</p>" },
      { title: "Mittelterm prüfen",
        text: "<p>Passt $-2ab$? &nbsp;<span class='hl-muted'>$-2 \\cdot 4x \\cdot 3 = -24x$ ✓</span></p>",
        tex: "16x^2 - 24x + 9 = (4x)^2 - 2 \\cdot 4x \\cdot 3 + 3^2" },
      { title: "2. binomische Formel rückwärts",
        text: "<p>$a^2 - 2ab + b^2 = (a-b)^2$:</p>",
        tex: "= (4x - 3)^2" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "49 - a^2",
    note: "So herum ist es $a^2 - b^2$: Zuerst das Quadrat von 7, dann $a^2$.",
    ergebnis: "(7 + a)(7 - a)",
    solution: [
      { title: "Muster erkennen",
        text: "<p>$a^2 - b^2$ mit erstem Teil $7^2 = 49$ und zweitem Teil $a^2$.</p>",
        tex: "49 - a^2 = 7^2 - a^2" },
      { title: "3. binomische Formel rückwärts",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= (7 + a)(7 - a)" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "x^2 + 6x + 9",
    note: "Erstes und letztes Glied sind Quadrate, Mittelterm positiv. Denk an $(a+b)^2$.",
    ergebnis: "(x + 3)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$x^2 = x^2$ und $9 = 3^2$. Also $a = x$ und $b = 3$.</p>" },
      { title: "Mittelterm prüfen",
        text: "<p>Passt $2ab$? &nbsp;<span class='hl-muted'>$2 \\cdot x \\cdot 3 = 6x$ ✓</span></p>",
        tex: "x^2 + 6x + 9 = x^2 + 2 \\cdot x \\cdot 3 + 3^2" },
      { title: "1. binomische Formel rückwärts",
        text: "<p>$a^2 + 2ab + b^2 = (a+b)^2$:</p>",
        tex: "= (x + 3)^2" }
    ] },

  { topic: "faktorisieren", level: "medium", type: "Faktorisiere",
    q: "4x^2 + 12x + 9",
    note: "Erstes und letztes Glied sind Quadrate, Mittelterm positiv. Denk an $(a+b)^2$.",
    ergebnis: "(2x + 3)^2",
    solution: [
      { title: "Quadrate finden",
        text: "<p>$4x^2 = (2x)^2$ und $9 = 3^2$. Also $a = 2x$ und $b = 3$.</p>" },
      { title: "Mittelterm prüfen",
        text: "<p>Passt $2ab$? &nbsp;<span class='hl-muted'>$2 \\cdot 2x \\cdot 3 = 12x$ ✓</span></p>",
        tex: "4x^2 + 12x + 9 = (2x)^2 + 2 \\cdot 2x \\cdot 3 + 3^2" },
      { title: "1. binomische Formel rückwärts",
        text: "<p>$a^2 + 2ab + b^2 = (a+b)^2$:</p>",
        tex: "= (2x + 3)^2" }
    ] },

  // ===== Faktorisieren – Schwer =====
  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "2x^3 - 8x",
    note: "Erst den gemeinsamen Faktor ausklammern. Was bleibt dann in der Klammer stehen?",
    ergebnis: "2x(x + 2)(x - 2)",
    solution: [
      { title: "Gemeinsamen Faktor ausklammern",
        text: "<p>In beiden Termen steckt <b>2x</b>:</p>",
        tex: "2x^3 - 8x = 2x(x^2 - 4)" },
      { title: "Rest als 3. binomische Formel",
        text: "<p>In der Klammer steht $x^2 - 4 = x^2 - 2^2$:</p>",
        tex: "= 2x(x^2 - 2^2)" },
      { title: "Vollständig faktorisiert",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= 2x(x + 2)(x - 2)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "3x^4 - 48",
    note: "Erst die 3 ausklammern. Danach genau hinschauen: $x^4 = (x^2)^2$.",
    ergebnis: "3(x^2 + 4)(x + 2)(x - 2)",
    solution: [
      { title: "Zahl ausklammern",
        text: "<p>In beiden Termen steckt <b>3</b> &nbsp;(48 = 3 · 16):</p>",
        tex: "3x^4 - 48 = 3(x^4 - 16)" },
      { title: "Erste 3. binomische Formel",
        text: "<p>$x^4 = (x^2)^2$ und $16 = 4^2$:</p>",
        tex: "= 3\\left((x^2)^2 - 4^2\\right) = 3(x^2 + 4)(x^2 - 4)" },
      { title: "Zweite 3. binomische Formel",
        text: "<p>$x^2 + 4$ ist eine <b>Summe</b> zweier Quadrate und bleibt stehen. Nur $x^2 - 4$ lässt sich weiter zerlegen:</p>",
        tex: "= 3(x^2 + 4)(x + 2)(x - 2)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "x^2 + 4",
    note: "Vorsicht: Hier steht ein <b>Plus</b>. Prüfe, ob die 3. binomische Formel $a^2 - b^2$ überhaupt passt.",
    ergebnis: "x^2 + 4 \\ \\text{(nicht faktorisierbar)}",
    solution: [
      { title: "Muster prüfen",
        text: "<p>Die 3. binomische Formel braucht ein <b>Minus</b>: $a^2 - b^2$. Hier steht aber $a^2 + b^2$.</p>" },
      { title: "Summe zweier Quadrate",
        text: "<p>Eine <b>Summe</b> zweier Quadrate lässt sich im Reellen <b>nicht</b> faktorisieren. Es gibt keinen gemeinsamen Faktor und keine passende Formel.</p>" },
      { title: "Ergebnis",
        text: "<p>Der Term bleibt, wie er ist — er ist schon in einfachster Form:</p>",
        tex: "x^2 + 4 \\quad \\text{(nicht faktorisierbar)}" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "5x^2 + 20",
    note: "Ein gemeinsamer Faktor steckt drin. Schau danach genau auf das Vorzeichen in der Klammer.",
    ergebnis: "5(x^2 + 4)",
    solution: [
      { title: "Zahl ausklammern",
        text: "<p>In <b class='hl-b'>5</b> und <b class='hl-b'>20</b> steckt die <b>5</b> &nbsp;(20 = 5 · 4):</p>",
        tex: "5x^2 + 20 = 5(x^2 + 4)" },
      { title: "Klammer prüfen",
        text: "<p>In der Klammer steht $x^2 + 4$ — eine <b>Summe</b> zweier Quadrate. Die lässt sich im Reellen nicht weiter zerlegen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nur der gemeinsame Faktor war möglich:</p>",
        tex: "= 5(x^2 + 4)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "a^3 - a",
    note: "Erst den gemeinsamen Faktor ausklammern. Was bleibt dann in der Klammer stehen?",
    ergebnis: "a(a + 1)(a - 1)",
    solution: [
      { title: "Gemeinsamen Faktor ausklammern",
        text: "<p>In beiden Termen steckt <b>a</b>:</p>",
        tex: "a^3 - a = a(a^2 - 1)" },
      { title: "Rest als 3. binomische Formel",
        text: "<p>$a^2 - 1 = a^2 - 1^2$:</p>",
        tex: "= a(a^2 - 1^2)" },
      { title: "Vollständig faktorisiert",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= a(a + 1)(a - 1)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "3x^2 - 12x + 12",
    note: "Erst den gemeinsamen Faktor der drei Zahlen ausklammern. Was bleibt in der Klammer?",
    ergebnis: "3(x - 2)^2",
    solution: [
      { title: "Zahl ausklammern",
        text: "<p>In <b class='hl-b'>3</b>, <b class='hl-b'>12</b> und <b class='hl-b'>12</b> steckt die <b>3</b>:</p>",
        tex: "3x^2 - 12x + 12 = 3(x^2 - 4x + 4)" },
      { title: "Klammer als 2. binomische Formel",
        text: "<p>$x^2 - 4x + 4 = x^2 - 2 \\cdot x \\cdot 2 + 2^2$, also $a = x$ und $b = 2$.</p>",
        tex: "= 3\\left(x^2 - 2 \\cdot x \\cdot 2 + 2^2\\right)" },
      { title: "Vollständig faktorisiert",
        text: "<p>$a^2 - 2ab + b^2 = (a-b)^2$:</p>",
        tex: "= 3(x - 2)^2" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "2a^2 - 18",
    note: "Erst den gemeinsamen Faktor ausklammern. Was bleibt dann in der Klammer stehen?",
    ergebnis: "2(a + 3)(a - 3)",
    solution: [
      { title: "Zahl ausklammern",
        text: "<p>In <b class='hl-b'>2</b> und <b class='hl-b'>18</b> steckt die <b>2</b> &nbsp;(18 = 2 · 9):</p>",
        tex: "2a^2 - 18 = 2(a^2 - 9)" },
      { title: "Rest als 3. binomische Formel",
        text: "<p>$a^2 - 9 = a^2 - 3^2$:</p>",
        tex: "= 2(a^2 - 3^2)" },
      { title: "Vollständig faktorisiert",
        text: "<p>$a^2 - b^2 = (a+b)(a-b)$:</p>",
        tex: "= 2(a + 3)(a - 3)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "x^4 - 16",
    note: "Hier gibt es keinen gemeinsamen Faktor. Aber: $x^4 = (x^2)^2$ und $16 = 4^2$.",
    ergebnis: "(x^2 + 4)(x + 2)(x - 2)",
    solution: [
      { title: "Erste 3. binomische Formel",
        text: "<p>$x^4 - 16 = (x^2)^2 - 4^2$:</p>",
        tex: "x^4 - 16 = (x^2 + 4)(x^2 - 4)" },
      { title: "Zweite 3. binomische Formel",
        text: "<p>$x^2 + 4$ ist eine Summe und bleibt stehen. $x^2 - 4 = x^2 - 2^2$ lässt sich weiter zerlegen:</p>",
        tex: "= (x^2 + 4)(x + 2)(x - 2)" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "8x^3 + 8x^2 + 2x",
    note: "Erst den gemeinsamen Faktor ausklammern. Die Klammer sieht dann nach einer binomischen Formel aus.",
    ergebnis: "2x(2x + 1)^2",
    solution: [
      { title: "Gemeinsamen Faktor ausklammern",
        text: "<p>In <b class='hl-b'>8</b>, <b class='hl-b'>8</b> und <b class='hl-b'>2</b> steckt die <b>2</b>, in allen Termen mindestens ein <b>x</b>. Faktor: <b>2x</b>.</p>",
        tex: "8x^3 + 8x^2 + 2x = 2x(4x^2 + 4x + 1)" },
      { title: "Klammer als 1. binomische Formel",
        text: "<p>$4x^2 = (2x)^2$, $1 = 1^2$ und $2 \\cdot 2x \\cdot 1 = 4x$ ✓. Also $a = 2x$, $b = 1$.</p>",
        tex: "= 2x\\left((2x)^2 + 2 \\cdot 2x \\cdot 1 + 1^2\\right)" },
      { title: "Vollständig faktorisiert",
        text: "<p>$a^2 + 2ab + b^2 = (a+b)^2$:</p>",
        tex: "= 2x(2x + 1)^2" }
    ] },

  { topic: "faktorisieren", level: "hard", type: "Faktorisiere",
    q: "x^2 + 9",
    note: "Vorsicht: Hier steht ein <b>Plus</b>. Prüfe, ob die 3. binomische Formel $a^2 - b^2$ hier überhaupt greift.",
    ergebnis: "x^2 + 9 \\ \\text{(nicht faktorisierbar)}",
    solution: [
      { title: "Muster prüfen",
        text: "<p>Die 3. binomische Formel braucht ein <b>Minus</b> zwischen den Quadraten. Hier steht $x^2 + 9$ mit einem Plus.</p>" },
      { title: "Summe zweier Quadrate",
        text: "<p>$9 = 3^2$, also ist das $x^2 + 3^2$ — eine <b>Summe</b> zweier Quadrate. Die lässt sich im Reellen <b>nicht</b> faktorisieren.</p>" },
      { title: "Ergebnis",
        text: "<p>Der Term bleibt, wie er ist:</p>",
        tex: "x^2 + 9 \\quad \\text{(nicht faktorisierbar)}" }
    ] },

  // ================================================================ bruchterme
  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{x^2 + x}{x}",
    note: "Was steckt in x² und in x gemeinsam? Klammere im Zähler aus.",
    ergebnis: "x + 1 \\quad (x \\neq 0)",
    solution: [
      { title: "Zähler ausklammern",
        text: "<p>Im Zähler steckt in beiden Summanden ein <b>x</b>. Klammere es aus:</p>",
        tex: "\\frac{x^2 + x}{x} = \\frac{x \\cdot (x + 1)}{x}" },
      { title: "Gemeinsamen Faktor kürzen",
        text: "<p>Oben und unten steht der Faktor <b>x</b>. Den darfst du kürzen (nur Faktoren, keine Summanden!).</p>" },
      { title: "Ergebnis",
        text: "<p>Bedingung: der Nenner darf nie 0 sein, also <b>$x \\neq 0$</b>.</p>",
        tex: "= x + 1 \\quad (x \\neq 0)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{x^2 - 3x}{x}",
    note: "Welcher Faktor steckt in x² und in 3x? Klammere ihn aus.",
    ergebnis: "x - 3 \\quad (x \\neq 0)",
    solution: [
      { title: "Zähler ausklammern",
        text: "<p>In <b>x²</b> und <b>3x</b> steckt je ein <b>x</b>. Ausklammern:</p>",
        tex: "\\frac{x^2 - 3x}{x} = \\frac{x \\cdot (x - 3)}{x}" },
      { title: "Faktor x kürzen",
        text: "<p>Der Faktor <b>x</b> steht oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 0$</b>.</p>",
        tex: "= x - 3 \\quad (x \\neq 0)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{4x + 8}{x + 2}",
    note: "Klammere im Zähler die 4 aus. Was taucht dann auch im Nenner auf?",
    ergebnis: "4 \\quad (x \\neq -2)",
    solution: [
      { title: "Zähler faktorisieren",
        text: "<p>Im Zähler passt die <b>4</b> in beide Zahlen: $4x = 4 \\cdot x$ und $8 = 4 \\cdot 2$.</p>",
        tex: "\\frac{4x + 8}{x + 2} = \\frac{4 \\cdot (x + 2)}{x + 2}" },
      { title: "Klammer (x+2) kürzen",
        text: "<p>Die ganze Klammer <b>(x + 2)</b> steht oben und unten → sie ist ein gemeinsamer Faktor und wird gekürzt.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $(x + 2) \\neq 0$, also <b>$x \\neq -2$</b>.</p>",
        tex: "= 4 \\quad (x \\neq -2)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{6x^2}{2x}",
    note: "Kürze die Zahlen (6 und 2) und die x-Potenzen getrennt.",
    ergebnis: "3x \\quad (x \\neq 0)",
    solution: [
      { title: "Zahlen und x betrachten",
        text: "<p>Zahlen: $6 : 2 = 3$. Variablen: <b>x²</b> geteilt durch <b>x</b> ist <b>x</b> &nbsp;<span class='hl-muted'>(x² = x · x)</span>.</p>",
        tex: "\\frac{6x^2}{2x} = \\frac{2x \\cdot 3x}{2x}" },
      { title: "Faktor 2x kürzen",
        text: "<p>Der gemeinsame Faktor <b>2x</b> steht oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 0$</b>.</p>",
        tex: "= 3x \\quad (x \\neq 0)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{a^2 b}{a b}",
    note: "Welche Buchstaben stehen oben UND unten? Die darfst du kürzen.",
    ergebnis: "a \\quad (a \\neq 0,\\ b \\neq 0)",
    solution: [
      { title: "Faktoren vergleichen",
        text: "<p>Oben: <b>a · a · b</b>. Unten: <b>a · b</b>. Gemeinsam: einmal <b>a</b> und einmal <b>b</b>.</p>",
        tex: "\\frac{a^2 b}{a b} = \\frac{a \\cdot (a b)}{a b}" },
      { title: "ab kürzen",
        text: "<p>Der Faktor <b>a b</b> steht oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $a b \\neq 0$, also <b>$a \\neq 0$</b> und <b>$b \\neq 0$</b>.</p>",
        tex: "= a \\quad (a \\neq 0,\\ b \\neq 0)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Bestimme die Definitionsmenge",
    q: "\\frac{1}{x - 3}",
    note: "Durch 0 darf man nie teilen. Für welches x wird der Nenner 0?",
    ergebnis: "D = \\mathbb{R} \\setminus \\{3\\}",
    solution: [
      { title: "Nenner = 0 setzen",
        text: "<p>Gesucht ist das x, bei dem der Nenner 0 wird. Setze ihn gleich 0:</p>",
        tex: "x - 3 = 0" },
      { title: "Nach x auflösen",
        text: "<p>Plus 3 auf beiden Seiten:</p>",
        tex: "x = 3" },
      { title: "Ergebnis",
        text: "<p>Für <b>$x = 3$</b> wäre der Nenner 0 → verboten. Alle anderen Zahlen sind erlaubt.</p>",
        tex: "D = \\mathbb{R} \\setminus \\{3\\}" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Bestimme die Definitionsmenge",
    q: "\\frac{5}{x + 4}",
    note: "Setze den Nenner gleich 0 und löse nach x auf.",
    ergebnis: "D = \\mathbb{R} \\setminus \\{-4\\}",
    solution: [
      { title: "Nenner = 0 setzen",
        text: "<p>Nur der Nenner kann Probleme machen:</p>",
        tex: "x + 4 = 0" },
      { title: "Nach x auflösen",
        text: "<p>Minus 4 auf beiden Seiten:</p>",
        tex: "x = -4" },
      { title: "Ergebnis",
        text: "<p><b>$x = -4$</b> ist verboten, sonst teilst du durch 0.</p>",
        tex: "D = \\mathbb{R} \\setminus \\{-4\\}" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{10x}{5x^2}",
    note: "Kürze die Zahlen und eine x-Potenz. Unten bleibt noch ein x übrig.",
    ergebnis: "\\frac{2}{x} \\quad (x \\neq 0)",
    solution: [
      { title: "Faktoren schreiben",
        text: "<p>Zahlen: $10 : 5 = 2$. Unten steckt <b>x²</b> = x · x, oben nur ein <b>x</b>.</p>",
        tex: "\\frac{10x}{5x^2} = \\frac{5x \\cdot 2}{5x \\cdot x}" },
      { title: "Faktor 5x kürzen",
        text: "<p>Oben und unten steht <b>5x</b> → kürzen. Unten bleibt ein <b>x</b> stehen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 0$</b>.</p>",
        tex: "= \\frac{2}{x} \\quad (x \\neq 0)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{x^2 + 2x}{x}",
    note: "Klammere im Zähler x aus, dann steht der Faktor x oben und unten.",
    ergebnis: "x + 2 \\quad (x \\neq 0)",
    solution: [
      { title: "Zähler ausklammern",
        text: "<p>In <b>x²</b> und <b>2x</b> steckt je ein <b>x</b>:</p>",
        tex: "\\frac{x^2 + 2x}{x} = \\frac{x \\cdot (x + 2)}{x}" },
      { title: "Faktor x kürzen",
        text: "<p>Der Faktor <b>x</b> oben und unten wird gekürzt.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 0$</b>.</p>",
        tex: "= x + 2 \\quad (x \\neq 0)" }
    ] },

  { topic: "bruchterme", level: "easy", type: "Kürze",
    q: "\\frac{x + 3}{x}",
    note: "Vorsicht: x + 3 ist eine Summe, kein Produkt. Lässt sich das kürzen?",
    ergebnis: "\\frac{x + 3}{x} \\ \\text{(nicht kürzbar)} \\quad (x \\neq 0)",
    solution: [
      { title: "Kürzen heißt: Faktoren streichen",
        text: "<p>Kürzen darfst du nur <b>gemeinsame Faktoren</b> (Dinge, die mal-genommen sind) — <span class='hl-b'>nie einzelne Summanden</span>.</p>" },
      { title: "Zähler anschauen",
        text: "<p>Oben steht die <b>Summe</b> $x + 3$. Das x dort ist <em>kein</em> Faktor des ganzen Zählers, sondern nur ein Teil der Summe.</p><p>Falsch wäre: das x unten gegen das x in $x + 3$ zu streichen!</p>" },
      { title: "Ergebnis",
        text: "<p>Hier gibt es keinen gemeinsamen Faktor. Der Term bleibt, wie er ist:</p>",
        tex: "\\frac{x + 3}{x} \\ \\text{(nicht kürzbar)} \\quad (x \\neq 0)" }
    ] },

  // ===== Bruchterme – Mittel =====
  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 - 4}{x - 2}",
    note: "x² − 4 ist eine binomische Formel: a² − b² = (a + b)(a − b).",
    ergebnis: "x + 2 \\quad (x \\neq 2)",
    solution: [
      { title: "Zähler mit 3. binomischer Formel",
        text: "<p>$x^2 - 4 = x^2 - 2^2$. Das ist <b>a² − b²</b> mit $a = x$, $b = 2$:</p>",
        tex: "\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2}" },
      { title: "Klammer (x−2) kürzen",
        text: "<p>Die Klammer <b>(x − 2)</b> steht oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $(x - 2) \\neq 0$, also <b>$x \\neq 2$</b> (auch nach dem Kürzen notieren!).</p>",
        tex: "= x + 2 \\quad (x \\neq 2)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 - 9}{x + 3}",
    note: "x² − 9 = x² − 3². Welche binomische Formel passt?",
    ergebnis: "x - 3 \\quad (x \\neq -3)",
    solution: [
      { title: "Zähler faktorisieren",
        text: "<p>$x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$ (3. binomische Formel).</p>",
        tex: "\\frac{x^2 - 9}{x + 3} = \\frac{(x - 3)(x + 3)}{x + 3}" },
      { title: "Klammer (x+3) kürzen",
        text: "<p>Oben und unten steht <b>(x + 3)</b> → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $(x + 3) \\neq 0$, also <b>$x \\neq -3$</b>.</p>",
        tex: "= x - 3 \\quad (x \\neq -3)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 + 6x + 9}{x + 3}",
    note: "x² + 6x + 9 ist ein vollständiges Quadrat: (x + 3)².",
    ergebnis: "x + 3 \\quad (x \\neq -3)",
    solution: [
      { title: "Zähler als Quadrat erkennen",
        text: "<p>$x^2 + 6x + 9 = (x + 3)^2$ (1. binomische Formel, denn $2 \\cdot x \\cdot 3 = 6x$).</p>",
        tex: "\\frac{x^2 + 6x + 9}{x + 3} = \\frac{(x + 3)(x + 3)}{x + 3}" },
      { title: "Einmal (x+3) kürzen",
        text: "<p>Ein Faktor <b>(x + 3)</b> steht oben und unten → kürzen. Oben bleibt noch eine Klammer stehen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq -3$</b>.</p>",
        tex: "= x + 3 \\quad (x \\neq -3)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 - 10x + 25}{x - 5}",
    note: "x² − 10x + 25 = (x − 5)². Prüfe: 2 · x · 5 = 10x.",
    ergebnis: "x - 5 \\quad (x \\neq 5)",
    solution: [
      { title: "Zähler als Quadrat erkennen",
        text: "<p>$x^2 - 10x + 25 = (x - 5)^2$ (2. binomische Formel).</p>",
        tex: "\\frac{x^2 - 10x + 25}{x - 5} = \\frac{(x - 5)(x - 5)}{x - 5}" },
      { title: "Einmal (x−5) kürzen",
        text: "<p>Ein Faktor <b>(x − 5)</b> oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 5$</b>.</p>",
        tex: "= x - 5 \\quad (x \\neq 5)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 - 1}{x + 1}",
    note: "x² − 1 = x² − 1². Das ist wieder a² − b².",
    ergebnis: "x - 1 \\quad (x \\neq -1)",
    solution: [
      { title: "Zähler faktorisieren",
        text: "<p>$x^2 - 1 = (x - 1)(x + 1)$ (3. binomische Formel, $b = 1$).</p>",
        tex: "\\frac{x^2 - 1}{x + 1} = \\frac{(x - 1)(x + 1)}{x + 1}" },
      { title: "Klammer (x+1) kürzen",
        text: "<p>Oben und unten steht <b>(x + 1)</b> → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq -1$</b>.</p>",
        tex: "= x - 1 \\quad (x \\neq -1)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{2x^2 - 8}{x + 2}",
    note: "Klammere im Zähler erst die 2 aus, dann steht da 2(x² − 4).",
    ergebnis: "2x - 4 \\quad (x \\neq -2)",
    solution: [
      { title: "Zahl ausklammern",
        text: "<p>$2x^2 - 8 = 2 \\cdot (x^2 - 4)$. Die Klammer ist a² − b²:</p>",
        tex: "2x^2 - 8 = 2 \\cdot (x - 2)(x + 2)" },
      { title: "Einsetzen und kürzen",
        text: "<p>Jetzt steht <b>(x + 2)</b> oben und unten → kürzen.</p>",
        tex: "\\frac{2(x - 2)(x + 2)}{x + 2}" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq -2$</b>.</p>",
        tex: "= 2(x - 2) = 2x - 4 \\quad (x \\neq -2)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x - 3}{x^2 - 9}",
    note: "Diesmal steht die binomische Formel im Nenner: x² − 9.",
    ergebnis: "\\frac{1}{x + 3} \\quad (x \\neq 3,\\ x \\neq -3)",
    solution: [
      { title: "Nenner faktorisieren",
        text: "<p>$x^2 - 9 = (x - 3)(x + 3)$. Oben steht schon <b>(x − 3)</b>.</p>",
        tex: "\\frac{x - 3}{x^2 - 9} = \\frac{x - 3}{(x - 3)(x + 3)}" },
      { title: "Klammer (x−3) kürzen",
        text: "<p>Der Faktor <b>(x − 3)</b> steht oben und unten → kürzen. Oben bleibt eine <b>1</b>.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$: <b>$x \\neq 3$</b> und <b>$x \\neq -3$</b> (beide Werte aus dem ursprünglichen Nenner).</p>",
        tex: "= \\frac{1}{x + 3} \\quad (x \\neq 3,\\ x \\neq -3)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Bestimme die Definitionsmenge",
    q: "\\frac{x + 1}{x^2 - 16}",
    note: "x² − 16 = 0 hat zwei Lösungen. Denke an die binomische Formel.",
    ergebnis: "D = \\mathbb{R} \\setminus \\{-4,\\ 4\\}",
    solution: [
      { title: "Nenner = 0 setzen",
        text: "<p>$x^2 - 16 = (x - 4)(x + 4)$. Ein Produkt ist 0, wenn ein Faktor 0 ist:</p>",
        tex: "(x - 4)(x + 4) = 0" },
      { title: "Beide Lösungen finden",
        text: "<p>$x - 4 = 0 \\Rightarrow x = 4$ &nbsp;oder&nbsp; $x + 4 = 0 \\Rightarrow x = -4$.</p>",
        tex: "x = 4 \\quad \\text{oder} \\quad x = -4" },
      { title: "Ergebnis",
        text: "<p>Beide Werte sind verboten:</p>",
        tex: "D = \\mathbb{R} \\setminus \\{-4,\\ 4\\}" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 - 4}{x^2 - 4x + 4}",
    note: "Zähler ist a² − b², Nenner ist ein Quadrat (x − 2)². Faktorisiere beide.",
    ergebnis: "\\frac{x + 2}{x - 2} \\quad (x \\neq 2)",
    solution: [
      { title: "Zähler und Nenner faktorisieren",
        text: "<p>Zähler: $x^2 - 4 = (x - 2)(x + 2)$.<br>Nenner: $x^2 - 4x + 4 = (x - 2)^2$.</p>",
        tex: "\\frac{x^2 - 4}{x^2 - 4x + 4} = \\frac{(x - 2)(x + 2)}{(x - 2)(x - 2)}" },
      { title: "Einmal (x−2) kürzen",
        text: "<p>Der Faktor <b>(x − 2)</b> steht oben und unten → einmal kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 2$</b>.</p>",
        tex: "= \\frac{x + 2}{x - 2} \\quad (x \\neq 2)" }
    ] },

  { topic: "bruchterme", level: "medium", type: "Kürze",
    q: "\\frac{x^2 + 9}{x + 3}",
    note: "Achtung: x² + 9 ist eine Summe von Quadraten. Lässt sie sich zerlegen?",
    ergebnis: "\\frac{x^2 + 9}{x + 3} \\ \\text{(nicht kürzbar)} \\quad (x \\neq -3)",
    solution: [
      { title: "Zähler prüfen",
        text: "<p>$x^2 + 9$ ist eine <b>Summe</b>. Nur $x^2 - 9$ (mit Minus) wäre a² − b². Ein Plus lässt sich hier <span class='hl-b'>nicht</span> mit einer binomischen Formel zerlegen.</p>" },
      { title: "Kein gemeinsamer Faktor",
        text: "<p>Der Zähler bleibt eine Summe ohne Faktor (x + 3). Es gibt nichts zu kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Der Term ist schon vollständig gekürzt:</p>",
        tex: "\\frac{x^2 + 9}{x + 3} \\ \\text{(nicht kürzbar)} \\quad (x \\neq -3)" }
    ] },

  // ===== Bruchterme – Schwer =====
  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x^2 - 4}{x^2 - 2x}",
    note: "Zähler: binomische Formel. Nenner: x ausklammern. Dann vergleichen.",
    ergebnis: "\\frac{x + 2}{x} \\quad (x \\neq 0,\\ x \\neq 2)",
    solution: [
      { title: "Zähler und Nenner faktorisieren",
        text: "<p>Zähler: $x^2 - 4 = (x - 2)(x + 2)$.<br>Nenner: $x^2 - 2x = x \\cdot (x - 2)$.</p>",
        tex: "\\frac{x^2 - 4}{x^2 - 2x} = \\frac{(x - 2)(x + 2)}{x \\cdot (x - 2)}" },
      { title: "Klammer (x−2) kürzen",
        text: "<p>Der Faktor <b>(x − 2)</b> steht oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Der ursprüngliche Nenner $x(x - 2)$ wird 0 bei $x = 0$ und $x = 2$. Beide Werte ausschließen:</p>",
        tex: "= \\frac{x + 2}{x} \\quad (x \\neq 0,\\ x \\neq 2)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x^2 - 9}{x^2 + 3x}",
    note: "Zähler: a² − b². Nenner: x ausklammern.",
    ergebnis: "\\frac{x - 3}{x} \\quad (x \\neq 0,\\ x \\neq -3)",
    solution: [
      { title: "Zähler und Nenner faktorisieren",
        text: "<p>Zähler: $x^2 - 9 = (x - 3)(x + 3)$.<br>Nenner: $x^2 + 3x = x \\cdot (x + 3)$.</p>",
        tex: "\\frac{x^2 - 9}{x^2 + 3x} = \\frac{(x - 3)(x + 3)}{x \\cdot (x + 3)}" },
      { title: "Klammer (x+3) kürzen",
        text: "<p>Der gemeinsame Faktor <b>(x + 3)</b> → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $x(x + 3)$ wird 0 bei $x = 0$ und $x = -3$:</p>",
        tex: "= \\frac{x - 3}{x} \\quad (x \\neq 0,\\ x \\neq -3)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x^2 - 25}{x^2 - 5x}",
    note: "Zähler: binomische Formel mit 5. Nenner: x ausklammern.",
    ergebnis: "\\frac{x + 5}{x} \\quad (x \\neq 0,\\ x \\neq 5)",
    solution: [
      { title: "Zähler und Nenner faktorisieren",
        text: "<p>Zähler: $x^2 - 25 = (x - 5)(x + 5)$.<br>Nenner: $x^2 - 5x = x \\cdot (x - 5)$.</p>",
        tex: "\\frac{x^2 - 25}{x^2 - 5x} = \\frac{(x - 5)(x + 5)}{x \\cdot (x - 5)}" },
      { title: "Klammer (x−5) kürzen",
        text: "<p>Der Faktor <b>(x − 5)</b> → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $x(x - 5)$ wird 0 bei $x = 0$ und $x = 5$:</p>",
        tex: "= \\frac{x + 5}{x} \\quad (x \\neq 0,\\ x \\neq 5)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{2x^2 - 8}{x^2 - 4x + 4}",
    note: "Zähler: erst 2 ausklammern. Nenner: (x − 2)².",
    ergebnis: "\\frac{2(x + 2)}{x - 2} \\quad (x \\neq 2)",
    solution: [
      { title: "Beide faktorisieren",
        text: "<p>Zähler: $2x^2 - 8 = 2(x - 2)(x + 2)$.<br>Nenner: $x^2 - 4x + 4 = (x - 2)^2$.</p>",
        tex: "\\frac{2x^2 - 8}{x^2 - 4x + 4} = \\frac{2(x - 2)(x + 2)}{(x - 2)(x - 2)}" },
      { title: "Einmal (x−2) kürzen",
        text: "<p>Der Faktor <b>(x − 2)</b> einmal oben und unten → kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $\\neq 0$, also <b>$x \\neq 2$</b>.</p>",
        tex: "= \\frac{2(x + 2)}{x - 2} \\quad (x \\neq 2)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x^2 + 4x + 4}{x^2 - 4}",
    note: "Zähler: Quadrat (x + 2)². Nenner: a² − b². Welcher Faktor ist gemeinsam?",
    ergebnis: "\\frac{x + 2}{x - 2} \\quad (x \\neq 2,\\ x \\neq -2)",
    solution: [
      { title: "Beide faktorisieren",
        text: "<p>Zähler: $x^2 + 4x + 4 = (x + 2)^2$.<br>Nenner: $x^2 - 4 = (x - 2)(x + 2)$.</p>",
        tex: "\\frac{x^2 + 4x + 4}{x^2 - 4} = \\frac{(x + 2)(x + 2)}{(x - 2)(x + 2)}" },
      { title: "Einmal (x+2) kürzen",
        text: "<p>Der gemeinsame Faktor ist <b>(x + 2)</b> → einmal kürzen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $(x - 2)(x + 2)$ wird 0 bei $x = 2$ und $x = -2$:</p>",
        tex: "= \\frac{x + 2}{x - 2} \\quad (x \\neq 2,\\ x \\neq -2)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x - 3}{3 - x}",
    note: "3 − x ist das Gegenteil von x − 3. Klammere im Nenner das Minus aus.",
    ergebnis: "-1 \\quad (x \\neq 3)",
    solution: [
      { title: "Vorzeichen umdrehen",
        text: "<p>Es gilt <b>$b - a = -(a - b)$</b>. Also: $3 - x = -(x - 3)$.</p>",
        tex: "\\frac{x - 3}{3 - x} = \\frac{x - 3}{-(x - 3)}" },
      { title: "Klammer (x−3) kürzen",
        text: "<p>Oben und unten steht <b>(x − 3)</b> → kürzen. Das Minus unten bleibt stehen.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner $(3 - x) \\neq 0$, also <b>$x \\neq 3$</b>.</p>",
        tex: "= \\frac{1}{-1} = -1 \\quad (x \\neq 3)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{2 - x}{x^2 - 4}",
    note: "2 − x = −(x − 2). Dann passt es zur binomischen Formel im Nenner.",
    ergebnis: "\\frac{-1}{x + 2} \\quad (x \\neq 2,\\ x \\neq -2)",
    solution: [
      { title: "Zähler umdrehen, Nenner faktorisieren",
        text: "<p>Zähler: $2 - x = -(x - 2)$.<br>Nenner: $x^2 - 4 = (x - 2)(x + 2)$.</p>",
        tex: "\\frac{2 - x}{x^2 - 4} = \\frac{-(x - 2)}{(x - 2)(x + 2)}" },
      { title: "Klammer (x−2) kürzen",
        text: "<p>Der Faktor <b>(x − 2)</b> oben und unten → kürzen. Das Minus bleibt.</p>" },
      { title: "Ergebnis",
        text: "<p>Nenner wird 0 bei $x = 2$ und $x = -2$:</p>",
        tex: "= \\frac{-1}{x + 2} \\quad (x \\neq 2,\\ x \\neq -2)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x^2 - x - 6}{x^2 - 9}",
    note: "Zähler zerlegen: Suche zwei Zahlen mit Produkt −6 und Summe −1.",
    ergebnis: "\\frac{x + 2}{x + 3} \\quad (x \\neq 3,\\ x \\neq -3)",
    solution: [
      { title: "Zähler zerlegen",
        text: "<p>Gesucht: zwei Zahlen mit Produkt $-6$ und Summe $-1$ → das sind $-3$ und $+2$.</p>",
        tex: "x^2 - x - 6 = (x - 3)(x + 2)" },
      { title: "Nenner faktorisieren",
        text: "<p>$x^2 - 9 = (x - 3)(x + 3)$ (3. binomische Formel). Jetzt vergleichen:</p>",
        tex: "\\frac{(x - 3)(x + 2)}{(x - 3)(x + 3)}" },
      { title: "Kürzen und Ergebnis",
        text: "<p>Faktor <b>(x − 3)</b> kürzen. Nenner wird 0 bei $x = 3$ und $x = -3$:</p>",
        tex: "= \\frac{x + 2}{x + 3} \\quad (x \\neq 3,\\ x \\neq -3)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Kürze",
    q: "\\frac{x^3 - x}{x^2 - 1}",
    note: "Oben erst x ausklammern, dann steckt wieder x² − 1 drin.",
    ergebnis: "x \\quad (x \\neq 1,\\ x \\neq -1)",
    solution: [
      { title: "Zähler ausklammern",
        text: "<p>$x^3 - x = x \\cdot (x^2 - 1)$. Und $x^2 - 1 = (x - 1)(x + 1)$.</p>",
        tex: "x^3 - x = x \\cdot (x - 1)(x + 1)" },
      { title: "Nenner faktorisieren",
        text: "<p>Nenner: $x^2 - 1 = (x - 1)(x + 1)$. Einsetzen:</p>",
        tex: "\\frac{x \\cdot (x - 1)(x + 1)}{(x - 1)(x + 1)}" },
      { title: "Kürzen und Ergebnis",
        text: "<p>Beide Klammern <b>(x − 1)</b> und <b>(x + 1)</b> kürzen. Nenner wird 0 bei $x = 1$ und $x = -1$:</p>",
        tex: "= x \\quad (x \\neq 1,\\ x \\neq -1)" }
    ] },

  { topic: "bruchterme", level: "hard", type: "Bestimme die Definitionsmenge",
    q: "\\frac{x - 1}{x^2 + x - 6}",
    note: "Zerlege den Nenner: zwei Zahlen mit Produkt −6 und Summe +1.",
    ergebnis: "D = \\mathbb{R} \\setminus \\{-3,\\ 2\\}",
    solution: [
      { title: "Nenner zerlegen",
        text: "<p>Gesucht: zwei Zahlen mit Produkt $-6$ und Summe $+1$ → das sind $+3$ und $-2$.</p>",
        tex: "x^2 + x - 6 = (x + 3)(x - 2)" },
      { title: "Nenner = 0 setzen",
        text: "<p>Ein Produkt ist 0, wenn ein Faktor 0 ist:</p>",
        tex: "x + 3 = 0 \\ \\text{oder} \\ x - 2 = 0" },
      { title: "Ergebnis",
        text: "<p>$x = -3$ oder $x = 2$ sind verboten:</p>",
        tex: "D = \\mathbb{R} \\setminus \\{-3,\\ 2\\}" }
    ] },

  // ================================================================ wurzeln-vereinfachen
  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{48}",
    note: "Welche größte Quadratzahl steckt in 48? Denk an 4, 9, 16, 25...",
    ergebnis: "4\\sqrt{3}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>48</b> in eine <b>Quadratzahl</b> mal einen Rest: $48 = 16 \\cdot 3$. Die <b>16</b> ist ein Quadrat ($4^2$).</p>",
        tex: "\\sqrt{48} = \\sqrt{\\mathbf{16} \\cdot 3}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Es gilt $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$. Aus <b>16</b> wird <b>4</b>, die <b>3</b> bleibt unter der Wurzel.</p>",
        tex: "= \\sqrt{16} \\cdot \\sqrt{3} = 4\\sqrt{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{72}",
    note: "Suche die größte Quadratzahl in 72. 36 ist ein Quadrat...",
    ergebnis: "6\\sqrt{2}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>72</b>: $72 = 36 \\cdot 2$. Die <b>36</b> ist ein Quadrat ($6^2$).</p>",
        tex: "\\sqrt{72} = \\sqrt{\\mathbf{36} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Teile mit $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ auf. Aus <b>36</b> wird <b>6</b>.</p>",
        tex: "= \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{50}",
    note: "Welche Quadratzahl steckt in 50? Probiere 25.",
    ergebnis: "5\\sqrt{2}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>50</b>: $50 = 25 \\cdot 2$. Die <b>25</b> ist ein Quadrat ($5^2$).</p>",
        tex: "\\sqrt{50} = \\sqrt{\\mathbf{25} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Mit $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ wird aus <b>25</b> eine <b>5</b>.</p>",
        tex: "= \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{18}",
    note: "Welche Quadratzahl passt in 18? Denk an 9.",
    ergebnis: "3\\sqrt{2}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>18</b>: $18 = 9 \\cdot 2$. Die <b>9</b> ist ein Quadrat ($3^2$).</p>",
        tex: "\\sqrt{18} = \\sqrt{\\mathbf{9} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>9</b> wird eine <b>3</b>, die <b>2</b> bleibt unter der Wurzel.</p>",
        tex: "= \\sqrt{9} \\cdot \\sqrt{2} = 3\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{12}",
    note: "Welche Quadratzahl steckt in 12? Probiere 4.",
    ergebnis: "2\\sqrt{3}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>12</b>: $12 = 4 \\cdot 3$. Die <b>4</b> ist ein Quadrat ($2^2$).</p>",
        tex: "\\sqrt{12} = \\sqrt{\\mathbf{4} \\cdot 3}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>4</b> wird eine <b>2</b>, die <b>3</b> bleibt stehen.</p>",
        tex: "= \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{75}",
    note: "Welche Quadratzahl passt in 75? Denk an 25.",
    ergebnis: "5\\sqrt{3}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>75</b>: $75 = 25 \\cdot 3$. Die <b>25</b> ist ein Quadrat ($5^2$).</p>",
        tex: "\\sqrt{75} = \\sqrt{\\mathbf{25} \\cdot 3}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>25</b> wird eine <b>5</b>, die <b>3</b> bleibt unter der Wurzel.</p>",
        tex: "= \\sqrt{25} \\cdot \\sqrt{3} = 5\\sqrt{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{32}",
    note: "Suche die größte Quadratzahl in 32. 16 passt.",
    ergebnis: "4\\sqrt{2}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>32</b>: $32 = 16 \\cdot 2$. Die <b>16</b> ist ein Quadrat ($4^2$).</p><p><span class='hl-muted'>Nimm die größte: 32 = 4 · 8 wäre kleiner, 16 · 2 zieht mehr heraus.</span></p>",
        tex: "\\sqrt{32} = \\sqrt{\\mathbf{16} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>16</b> wird eine <b>4</b>.</p>",
        tex: "= \\sqrt{16} \\cdot \\sqrt{2} = 4\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{200}",
    note: "Welche Quadratzahl steckt in 200? Denk an 100.",
    ergebnis: "10\\sqrt{2}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>200</b>: $200 = 100 \\cdot 2$. Die <b>100</b> ist ein Quadrat ($10^2$).</p>",
        tex: "\\sqrt{200} = \\sqrt{\\mathbf{100} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>100</b> wird eine <b>10</b>.</p>",
        tex: "= \\sqrt{100} \\cdot \\sqrt{2} = 10\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{98}",
    note: "Welche Quadratzahl passt in 98? Probiere 49.",
    ergebnis: "7\\sqrt{2}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>98</b>: $98 = 49 \\cdot 2$. Die <b>49</b> ist ein Quadrat ($7^2$).</p>",
        tex: "\\sqrt{98} = \\sqrt{\\mathbf{49} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>49</b> wird eine <b>7</b>.</p>",
        tex: "= \\sqrt{49} \\cdot \\sqrt{2} = 7\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "easy", type: "Vereinfache",
    q: "\\sqrt{27}",
    note: "Welche Quadratzahl steckt in 27? Denk an 9.",
    ergebnis: "3\\sqrt{3}",
    solution: [
      { title: "Quadratzahl heraussuchen",
        text: "<p>Zerlege <b>27</b>: $27 = 9 \\cdot 3$. Die <b>9</b> ist ein Quadrat ($3^2$).</p>",
        tex: "\\sqrt{27} = \\sqrt{\\mathbf{9} \\cdot 3}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>Aus der <b>9</b> wird eine <b>3</b>, die <b>3</b> bleibt unter der Wurzel.</p>",
        tex: "= \\sqrt{9} \\cdot \\sqrt{3} = 3\\sqrt{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{75p^{12}}",
    note: "Zerlege getrennt: die Zahl 75 und die Potenz p¹². Bei geraden Potenzen halbiert sich der Exponent. Für $p \\geq 0$.",
    ergebnis: "5p^{6}\\sqrt{3}",
    solution: [
      { title: "Zahl und Potenz trennen",
        text: "<p>$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$. Ziehe die Zahl und die Variable getrennt: $75 = 25 \\cdot 3$.</p>",
        tex: "\\sqrt{75p^{12}} = \\sqrt{\\mathbf{25} \\cdot 3} \\cdot \\sqrt{p^{12}}" },
      { title: "Potenz: Exponent halbieren",
        text: "<p>Bei einer <b>geraden</b> Potenz wird der Exponent halbiert: $\\sqrt{p^{12}} = p^{6}$.</p>",
        tex: "= 5\\sqrt{3} \\cdot p^{6}" },
      { title: "Ergebnis ordnen",
        text: "<p>Faktoren vor die Wurzel, der Rest bleibt darunter. Für $p \\geq 0$.</p>",
        tex: "= 5p^{6}\\sqrt{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{x^{5}}",
    note: "Spalte die ungerade Potenz in einen geraden Teil und einen Rest auf. Für $x \\geq 0$.",
    ergebnis: "x^{2}\\sqrt{x}",
    solution: [
      { title: "Potenz aufspalten",
        text: "<p>$x^5$ ist <b>ungerade</b>. Spalte in eine gerade Potenz mal einen Rest: $x^5 = x^4 \\cdot x$.</p>",
        tex: "\\sqrt{x^{5}} = \\sqrt{x^{4} \\cdot x}" },
      { title: "Gerade Potenz herausziehen",
        text: "<p>Aus $\\sqrt{x^{4}}$ wird $x^{2}$ (Exponent halbieren). Das eine <b>x</b> bleibt unter der Wurzel. Für $x \\geq 0$.</p>",
        tex: "= \\sqrt{x^{4}} \\cdot \\sqrt{x} = x^{2}\\sqrt{x}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\frac{1}{\\sqrt{3}}",
    note: "Eine Wurzel soll nicht im Nenner stehen. Erweitere den Bruch mit genau dieser Wurzel.",
    ergebnis: "\\frac{\\sqrt{3}}{3}",
    solution: [
      { title: "Mit der Wurzel erweitern",
        text: "<p>Erweitere Zähler und Nenner mit <b>$\\sqrt{3}$</b>. Unten entsteht $\\sqrt{3} \\cdot \\sqrt{3} = 3$.</p>",
        tex: "\\frac{1}{\\sqrt{3}} = \\frac{1 \\cdot \\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}}" },
      { title: "Nenner ist jetzt wurzelfrei",
        text: "<p>Der Nenner wird zu <b>3</b>, oben steht $\\sqrt{3}$.</p>",
        tex: "= \\frac{\\sqrt{3}}{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{12a^{2}}",
    note: "Trenne die Zahl 12 von der Potenz a². Bei a² halbiert sich der Exponent. Für $a \\geq 0$.",
    ergebnis: "2a\\sqrt{3}",
    solution: [
      { title: "Zahl und Variable trennen",
        text: "<p>$12 = 4 \\cdot 3$ und $\\sqrt{a^{2}} = a$. Ziehe beides getrennt.</p>",
        tex: "\\sqrt{12a^{2}} = \\sqrt{\\mathbf{4} \\cdot 3} \\cdot \\sqrt{a^{2}}" },
      { title: "Herausziehen",
        text: "<p>Aus <b>4</b> wird <b>2</b>, aus $a^2$ wird <b>a</b>. Für $a \\geq 0$.</p>",
        tex: "= 2\\sqrt{3} \\cdot a = 2a\\sqrt{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{x^{4}}",
    note: "Der Exponent ist gerade. Was passiert dann mit dem Exponenten?",
    ergebnis: "x^{2}",
    solution: [
      { title: "Exponent halbieren",
        text: "<p>Bei einer <b>geraden</b> Potenz zieht die Wurzel glatt heraus: der Exponent wird halbiert.</p>",
        tex: "\\sqrt{x^{4}} = x^{4:2}" },
      { title: "Ergebnis",
        text: "<p>Es bleibt nichts unter der Wurzel.</p>",
        tex: "= x^{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\frac{5}{\\sqrt{5}}",
    note: "Erst den Nenner wurzelfrei machen, dann kürzen. Erweitere mit der Wurzel aus dem Nenner.",
    ergebnis: "\\sqrt{5}",
    solution: [
      { title: "Mit der Wurzel erweitern",
        text: "<p>Erweitere mit <b>$\\sqrt{5}$</b>. Unten entsteht $\\sqrt{5} \\cdot \\sqrt{5} = 5$.</p>",
        tex: "\\frac{5}{\\sqrt{5}} = \\frac{5\\sqrt{5}}{\\sqrt{5} \\cdot \\sqrt{5}} = \\frac{5\\sqrt{5}}{5}" },
      { title: "Kürzen",
        text: "<p>Die <b>5</b> oben und unten kürzen sich weg.</p>",
        tex: "= \\sqrt{5}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{x^{3}}",
    note: "Ungerade Potenz: spalte in einen geraden Teil und ein Rest-x. Für $x \\geq 0$.",
    ergebnis: "x\\sqrt{x}",
    solution: [
      { title: "Potenz aufspalten",
        text: "<p>$x^3 = x^2 \\cdot x$. Der gerade Teil $x^2$ lässt sich herausziehen.</p>",
        tex: "\\sqrt{x^{3}} = \\sqrt{x^{2} \\cdot x}" },
      { title: "Gerade Potenz herausziehen",
        text: "<p>Aus $\\sqrt{x^{2}}$ wird <b>x</b>, das Rest-<b>x</b> bleibt unter der Wurzel. Für $x \\geq 0$.</p>",
        tex: "= x\\sqrt{x}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{32y^{2}}",
    note: "Zahl 32 und Potenz y² getrennt behandeln. 16 steckt in 32. Für $y \\geq 0$.",
    ergebnis: "4y\\sqrt{2}",
    solution: [
      { title: "Zahl und Variable trennen",
        text: "<p>$32 = 16 \\cdot 2$ und $\\sqrt{y^{2}} = y$.</p>",
        tex: "\\sqrt{32y^{2}} = \\sqrt{\\mathbf{16} \\cdot 2} \\cdot \\sqrt{y^{2}}" },
      { title: "Herausziehen",
        text: "<p>Aus <b>16</b> wird <b>4</b>, aus $y^2$ wird <b>y</b>. Für $y \\geq 0$.</p>",
        tex: "= 4\\sqrt{2} \\cdot y = 4y\\sqrt{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{a^{5}b^{2}}",
    note: "Behandle jede Potenz einzeln. a⁵ ist ungerade, b² ist gerade. Für $a, b \\geq 0$.",
    ergebnis: "a^{2}b\\sqrt{a}",
    solution: [
      { title: "Potenzen aufspalten",
        text: "<p>$a^5 = a^4 \\cdot a$ (gerade mal Rest), $b^2$ ist schon gerade.</p>",
        tex: "\\sqrt{a^{5}b^{2}} = \\sqrt{a^{4} \\cdot a} \\cdot \\sqrt{b^{2}}" },
      { title: "Gerade Potenzen herausziehen",
        text: "<p>$\\sqrt{a^{4}} = a^{2}$, $\\sqrt{b^{2}} = b$. Das Rest-<b>a</b> bleibt unter der Wurzel. Für $a, b \\geq 0$.</p>",
        tex: "= a^{2}\\sqrt{a} \\cdot b = a^{2}b\\sqrt{a}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "medium", type: "Vereinfache",
    q: "\\sqrt{x^{6}}",
    note: "Gerade Potenz: der Exponent wird halbiert.",
    ergebnis: "x^{3}",
    solution: [
      { title: "Exponent halbieren",
        text: "<p>$x^6$ ist <b>gerade</b>, die Wurzel zieht glatt heraus.</p>",
        tex: "\\sqrt{x^{6}} = x^{6:2}" },
      { title: "Ergebnis",
        text: "<p>Nichts bleibt unter der Wurzel.</p>",
        tex: "= x^{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt{\\frac{3}{4}}",
    note: "Die Wurzel aus einem Bruch darfst du auf Zähler und Nenner verteilen. Welche Wurzel geht glatt auf?",
    ergebnis: "\\frac{\\sqrt{3}}{2}",
    solution: [
      { title: "Wurzel auf den Bruch verteilen",
        text: "<p>$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$. Ziehe Zähler und Nenner getrennt.</p>",
        tex: "\\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{\\sqrt{4}}" },
      { title: "Nenner ziehen",
        text: "<p>$\\sqrt{4} = 2$. Der Zähler $\\sqrt{3}$ bleibt stehen.</p>",
        tex: "= \\frac{\\sqrt{3}}{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt{\\frac{2}{9}}",
    note: "Wurzel aus dem Bruch auf Zähler und Nenner aufteilen. 9 ist ein Quadrat.",
    ergebnis: "\\frac{\\sqrt{2}}{3}",
    solution: [
      { title: "Wurzel auf den Bruch verteilen",
        text: "<p>$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.</p>",
        tex: "\\sqrt{\\frac{2}{9}} = \\frac{\\sqrt{2}}{\\sqrt{9}}" },
      { title: "Nenner ziehen",
        text: "<p>$\\sqrt{9} = 3$, der Zähler $\\sqrt{2}$ bleibt.</p>",
        tex: "= \\frac{\\sqrt{2}}{3}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt{\\frac{5}{8}}",
    note: "Erst Wurzel aufteilen, dann den Nenner vereinfachen und zuletzt wurzelfrei machen.",
    ergebnis: "\\frac{\\sqrt{10}}{4}",
    solution: [
      { title: "Wurzel auf den Bruch verteilen",
        text: "<p>$\\sqrt{\\frac{5}{8}} = \\frac{\\sqrt{5}}{\\sqrt{8}}$. Im Nenner steckt $\\sqrt{8} = 2\\sqrt{2}$.</p>",
        tex: "\\sqrt{\\frac{5}{8}} = \\frac{\\sqrt{5}}{\\sqrt{8}} = \\frac{\\sqrt{5}}{2\\sqrt{2}}" },
      { title: "Nenner rationalisieren",
        text: "<p>Erweitere mit <b>$\\sqrt{2}$</b>: oben $\\sqrt{5}\\cdot\\sqrt{2} = \\sqrt{10}$, unten $2 \\cdot 2 = 4$.</p>",
        tex: "= \\frac{\\sqrt{5} \\cdot \\sqrt{2}}{2\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{\\sqrt{10}}{4}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\frac{3}{\\sqrt{12}}",
    note: "Zuerst die Wurzel im Nenner vereinfachen, dann rationalisieren und kürzen.",
    ergebnis: "\\frac{\\sqrt{3}}{2}",
    solution: [
      { title: "Wurzel im Nenner vereinfachen",
        text: "<p>$\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$.</p>",
        tex: "\\frac{3}{\\sqrt{12}} = \\frac{3}{2\\sqrt{3}}" },
      { title: "Mit der Wurzel erweitern",
        text: "<p>Erweitere mit <b>$\\sqrt{3}$</b>: unten wird $2\\sqrt{3}\\cdot\\sqrt{3} = 2 \\cdot 3 = 6$.</p>",
        tex: "= \\frac{3\\sqrt{3}}{2\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{3\\sqrt{3}}{6}" },
      { title: "Kürzen",
        text: "<p>$3$ und $6$ kürzen mit <b>3</b>.</p>",
        tex: "= \\frac{\\sqrt{3}}{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt[3]{16}",
    note: "Dritte Wurzel: suche die größte Kubikzahl (1, 8, 27...) in 16, nicht die Quadratzahl.",
    ergebnis: "2\\sqrt[3]{2}",
    solution: [
      { title: "Kubikzahl heraussuchen",
        text: "<p>Bei der <b>dritten</b> Wurzel ziehst du Kubikzahlen heraus. $16 = 8 \\cdot 2$, und <b>8</b> ist eine Kubikzahl ($2^3$).</p>",
        tex: "\\sqrt[3]{16} = \\sqrt[3]{\\mathbf{8} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>$\\sqrt[3]{8} = 2$, die <b>2</b> bleibt unter der dritten Wurzel.</p>",
        tex: "= \\sqrt[3]{8} \\cdot \\sqrt[3]{2} = 2\\sqrt[3]{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt[3]{54}",
    note: "Dritte Wurzel: welche Kubikzahl steckt in 54? Denk an 27.",
    ergebnis: "3\\sqrt[3]{2}",
    solution: [
      { title: "Kubikzahl heraussuchen",
        text: "<p>$54 = 27 \\cdot 2$, und <b>27</b> ist eine Kubikzahl ($3^3$).</p>",
        tex: "\\sqrt[3]{54} = \\sqrt[3]{\\mathbf{27} \\cdot 2}" },
      { title: "Wurzel aufteilen und ziehen",
        text: "<p>$\\sqrt[3]{27} = 3$, die <b>2</b> bleibt unter der dritten Wurzel.</p>",
        tex: "= \\sqrt[3]{27} \\cdot \\sqrt[3]{2} = 3\\sqrt[3]{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt{2a} \\cdot \\sqrt{8a}",
    note: "Zwei Wurzeln, die multipliziert werden, darfst du unter eine gemeinsame Wurzel ziehen. Für $a \\geq 0$.",
    ergebnis: "4a",
    solution: [
      { title: "Unter eine Wurzel ziehen",
        text: "<p>$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}$. Multipliziere die Inhalte: $2a \\cdot 8a = 16a^{2}$.</p>",
        tex: "\\sqrt{2a} \\cdot \\sqrt{8a} = \\sqrt{2a \\cdot 8a} = \\sqrt{16a^{2}}" },
      { title: "Wurzel ziehen",
        text: "<p>$\\sqrt{16} = 4$ und $\\sqrt{a^{2}} = a$. Für $a \\geq 0$.</p>",
        tex: "= 4a" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\frac{1}{\\sqrt[3]{2}}",
    note: "Auch bei der dritten Wurzel soll der Nenner wurzelfrei werden. Du brauchst unter der Wurzel eine volle Kubikzahl – wie viele Faktoren 2 fehlen bis 2³?",
    ergebnis: "\\frac{\\sqrt[3]{4}}{2}",
    solution: [
      { title: "Passend erweitern",
        text: "<p>Unten steht $\\sqrt[3]{2}$. Für eine Kubikzahl brauchst du $2^3$, es fehlen also <b>zwei</b> Faktoren: erweitere mit $\\sqrt[3]{2^{2}} = \\sqrt[3]{4}$.</p>",
        tex: "\\frac{1}{\\sqrt[3]{2}} = \\frac{\\sqrt[3]{4}}{\\sqrt[3]{2} \\cdot \\sqrt[3]{4}}" },
      { title: "Nenner ist jetzt wurzelfrei",
        text: "<p>Unten: $\\sqrt[3]{2 \\cdot 4} = \\sqrt[3]{8} = 2$.</p>",
        tex: "= \\frac{\\sqrt[3]{4}}{2}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\sqrt{9 + 16}",
    note: "Vorsicht: Darf man die Wurzel auf die Summanden aufteilen? Rechne beide Wege einmal aus und vergleiche.",
    ergebnis: "5",
    solution: [
      { title: "Erst unter der Wurzel rechnen",
        text: "<p>Unter der Wurzel steht eine <b>Summe</b>. Rechne sie zuerst aus: $9 + 16 = 25$.</p>",
        tex: "\\sqrt{9 + 16} = \\sqrt{25} = 5" },
      { title: "Die Falle prüfen",
        text: "<p>Aufteilen würde $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$ ergeben – ein <b>anderes</b> Ergebnis!</p>",
        tex: "\\sqrt{9} + \\sqrt{16} = 7 \\neq 5" },
      { title: "Merke",
        text: "<p>$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Das Aufteilen gilt nur bei <b>Produkten</b>, nie bei Summen. Richtig ist <b>5</b>.</p>",
        tex: "\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}" }
    ] },

  { topic: "wurzeln-vereinfachen", level: "hard", type: "Vereinfache",
    q: "\\frac{\\sqrt{18x^{5}}}{\\sqrt{2x}}",
    note: "Zwei Wurzeln durcheinander darfst du unter eine gemeinsame Wurzel ziehen und dann kürzen. Für $x > 0$.",
    ergebnis: "3x^{2}",
    solution: [
      { title: "Unter eine Wurzel ziehen",
        text: "<p>$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$. Schreibe den Quotienten unter eine Wurzel.</p>",
        tex: "\\frac{\\sqrt{18x^{5}}}{\\sqrt{2x}} = \\sqrt{\\frac{18x^{5}}{2x}}" },
      { title: "Bruch kürzen",
        text: "<p>$18 : 2 = 9$ und $x^{5} : x = x^{4}$.</p>",
        tex: "= \\sqrt{9x^{4}}" },
      { title: "Wurzel ziehen",
        text: "<p>$\\sqrt{9} = 3$ und $\\sqrt{x^{4}} = x^{2}$. Für $x > 0$.</p>",
        tex: "= 3x^{2}" }
    ] },

  // ================================================================ formel-umstellen
  { topic: "formel-umstellen", level: "easy", type: "Stelle nach x um",
    q: "5x = 20",
    note: "x steht als Faktor. Welche Rechenart macht das Mal vor dem x rückgängig?",
    ergebnis: "x = 4",
    solution: [
      { title: "Was blockiert das x?",
        text: "<p>Vor dem <b>x</b> steht eine <b>5</b> als Faktor (5 · x). Das Gegenteil von Mal ist <b>Geteilt</b>.</p>",
        tex: "5x = 20 \\quad | : 5" },
      { title: "Beide Seiten durch 5 teilen",
        text: "<p>Was du links machst, musst du auch rechts machen:</p><p><span class='hl-muted'>links: 5x : 5 = x &nbsp;&nbsp; rechts: 20 : 5 = 4</span></p>",
        tex: "x = \\frac{20}{5} = 4" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach x um",
    q: "a = 4x",
    note: "Das x steht rechts. Teile beide Seiten durch die Zahl vor dem x.",
    ergebnis: "x = \\frac{a}{4}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Vor dem <b>x</b> steht die <b>4</b>. Teile beide Seiten durch <b>4</b>.</p>",
        tex: "a = 4x \\quad | : 4" },
      { title: "Freistellen",
        text: "<p>Rechts kürzt sich 4 : 4 = 1 weg, x bleibt allein:</p>",
        tex: "\\frac{a}{4} = x \\;\\Rightarrow\\; x = \\frac{a}{4}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach r um",
    q: "U = 2\\pi r",
    note: "Umfang eines Kreises. Alles außer r steht als Faktor davor – dadurch teilen.",
    ergebnis: "r = \\frac{U}{2\\pi}",
    solution: [
      { title: "Alle Faktoren außer r",
        text: "<p>Neben <b>r</b> stehen <b>2</b> und <b>π</b> als Faktoren. Teile beide Seiten durch <b>2π</b>.</p>",
        tex: "U = 2\\pi r \\quad | : 2\\pi" },
      { title: "r freistellen",
        tex: "r = \\frac{U}{2\\pi}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach a um",
    q: "A = a \\cdot b",
    note: "Fläche eines Rechtecks. b steht als Faktor neben a – dadurch teilen.",
    ergebnis: "a = \\frac{A}{b}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Neben <b>a</b> steht <b>b</b> als Faktor. Teile beide Seiten durch <b>b</b>.</p>",
        tex: "A = a \\cdot b \\quad | : b" },
      { title: "a freistellen",
        text: "<p>Rechts kürzt sich <span class='hl-muted'>b : b = 1</span> weg, a bleibt allein:</p>",
        tex: "a = \\frac{A}{b}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach a um",
    q: "F = m \\cdot a",
    note: "Kraft = Masse mal Beschleunigung. m steht als Faktor vor a.",
    ergebnis: "a = \\frac{F}{m}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Vor dem <b>a</b> steht <b>m</b> als Faktor. Teile beide Seiten durch <b>m</b>.</p>",
        tex: "F = m \\cdot a \\quad | : m" },
      { title: "a freistellen",
        tex: "a = \\frac{F}{m}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach x um",
    q: "9x = 72",
    note: "x steht als Faktor. Teile durch die Zahl vor dem x.",
    ergebnis: "x = 8",
    solution: [
      { title: "Durch 9 teilen",
        text: "<p>Vor dem <b>x</b> steht die <b>9</b>. Teile beide Seiten durch <b>9</b>.</p>",
        tex: "9x = 72 \\quad | : 9" },
      { title: "Ausrechnen",
        text: "<p><span class='hl-muted'>links: 9x : 9 = x &nbsp;&nbsp; rechts: 72 : 9 = 8</span></p>",
        tex: "x = \\frac{72}{9} = 8" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach R um",
    q: "U = R \\cdot I",
    note: "Ohmsches Gesetz. I steht als Faktor neben R – dadurch teilen.",
    ergebnis: "R = \\frac{U}{I}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Neben <b>R</b> steht <b>I</b> als Faktor. Teile beide Seiten durch <b>I</b>.</p>",
        tex: "U = R \\cdot I \\quad | : I" },
      { title: "R freistellen",
        tex: "R = \\frac{U}{I}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach s um",
    q: "W = F \\cdot s",
    note: "Arbeit = Kraft mal Weg. F steht als Faktor vor s.",
    ergebnis: "s = \\frac{W}{F}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Vor dem <b>s</b> steht <b>F</b> als Faktor. Teile beide Seiten durch <b>F</b>.</p>",
        tex: "W = F \\cdot s \\quad | : F" },
      { title: "s freistellen",
        tex: "s = \\frac{W}{F}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach I um",
    q: "P = U \\cdot I",
    note: "Leistung = Spannung mal Strom. U steht als Faktor vor I.",
    ergebnis: "I = \\frac{P}{U}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Vor dem <b>I</b> steht <b>U</b> als Faktor. Teile beide Seiten durch <b>U</b>.</p>",
        tex: "P = U \\cdot I \\quad | : U" },
      { title: "I freistellen",
        tex: "I = \\frac{P}{U}" }
    ] },

  { topic: "formel-umstellen", level: "easy", type: "Stelle nach x um",
    q: "y = 6x",
    note: "Das x steht rechts. Teile beide Seiten durch die Zahl vor dem x.",
    ergebnis: "x = \\frac{y}{6}",
    solution: [
      { title: "Teiler bestimmen",
        text: "<p>Vor dem <b>x</b> steht die <b>6</b>. Teile beide Seiten durch <b>6</b>.</p>",
        tex: "y = 6x \\quad | : 6" },
      { title: "x freistellen",
        tex: "\\frac{y}{6} = x \\;\\Rightarrow\\; x = \\frac{y}{6}" }
    ] },

  // ===== Formel umstellen – Mittel =====
  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "3p = 3xzk",
    note: "x steht als Faktor in einem Produkt. Teile durch ALLES außer x.",
    ergebnis: "x = \\frac{p}{zk}",
    solution: [
      { title: "Teiler sind alle Faktoren außer x",
        text: "<p>Rechts steht <b>3 · x · z · k</b>. Außer dem <b>x</b> teilen wir durch alles: durch <b>3zk</b>.</p>",
        tex: "3p = 3xzk \\quad | : 3zk" },
      { title: "Teilen und kürzen",
        text: "<p>Rechts kürzt sich <span class='hl-muted'>3zk : 3zk = 1</span> weg, x bleibt übrig:</p>",
        tex: "\\frac{3p}{3zk} = x \\;\\Rightarrow\\; x = \\frac{p}{zk}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "y = \\frac{a}{x}",
    note: "x steht im Nenner – erst heraus. Zwei Wege führen zum Ziel.",
    ergebnis: "x = \\frac{a}{y}",
    solution: [
      { title: "Weg 1 – hochmultiplizieren",
        text: "<p>x steht unten im Bruch. Hol es nach oben: beide Seiten <b>mal x</b>.</p>",
        tex: "y = \\frac{a}{x} \\quad | \\cdot x \\;\\Rightarrow\\; y \\cdot x = a" },
      { title: "Weg 1 – durch y teilen",
        text: "<p>Jetzt steht x als Faktor (Fall 1). Teile durch <b>y</b>:</p>",
        tex: "y \\cdot x = a \\quad | : y \\;\\Rightarrow\\; x = \\frac{a}{y}" },
      { title: "Weg 2 – Kehrwert bilden",
        text: "<p>Oder dreh beide Seiten um (Zähler und Nenner tauschen). Dann mit <b>a</b> mal:</p><p><span class='hl-muted'>Beides führt zum selben Ergebnis.</span></p>",
        tex: "\\frac{1}{y} = \\frac{x}{a} \\quad | \\cdot a \\;\\Rightarrow\\; x = \\frac{a}{y}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "y = \\frac{a+1}{x}",
    note: "x steht im Nenner. Behandle (a+1) wie eine einzige Zahl.",
    ergebnis: "x = \\frac{a+1}{y}",
    solution: [
      { title: "Mit x hochmultiplizieren",
        text: "<p>x aus dem Nenner holen: beide Seiten <b>mal x</b>. Der Klammerausdruck <b>(a+1)</b> bleibt zusammen.</p>",
        tex: "y = \\frac{a+1}{x} \\quad | \\cdot x \\;\\Rightarrow\\; y \\cdot x = a+1" },
      { title: "Durch y teilen",
        text: "<p>Jetzt durch <b>y</b> teilen, x steht allein:</p>",
        tex: "x = \\frac{a+1}{y}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "4cx = 2ab",
    note: "x steht als Faktor in einem Produkt. Teile durch alle Faktoren außer x.",
    ergebnis: "x = \\frac{ab}{2c}",
    solution: [
      { title: "Teiler sind alle Faktoren außer x",
        text: "<p>Links steht <b>4 · c · x</b>. Außer dem <b>x</b> teilen wir durch <b>4c</b>.</p>",
        tex: "4cx = 2ab \\quad | : 4c" },
      { title: "Teilen und kürzen",
        text: "<p>Links bleibt x übrig, rechts lässt sich <span class='hl-muted'>2 : 4 = 1/2</span> kürzen:</p>",
        tex: "x = \\frac{2ab}{4c} = \\frac{ab}{2c}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "V = \\frac{m}{x}",
    note: "x steht im Nenner – erst heraus. Zwei Wege führen zum Ziel.",
    ergebnis: "x = \\frac{m}{V}",
    solution: [
      { title: "Weg 1 – hochmultiplizieren",
        text: "<p>x steht unten im Bruch. Hol es nach oben: beide Seiten <b>mal x</b>.</p>",
        tex: "V = \\frac{m}{x} \\quad | \\cdot x \\;\\Rightarrow\\; V \\cdot x = m" },
      { title: "Weg 1 – durch V teilen",
        text: "<p>Jetzt steht x als Faktor (Fall 1). Teile durch <b>V</b>:</p>",
        tex: "V \\cdot x = m \\quad | : V \\;\\Rightarrow\\; x = \\frac{m}{V}" },
      { title: "Weg 2 – Kehrwert bilden",
        text: "<p>Oder dreh beide Seiten um (Zähler und Nenner tauschen). Dann mit <b>m</b> mal:</p><p><span class='hl-muted'>Beides führt zum selben Ergebnis.</span></p>",
        tex: "\\frac{1}{V} = \\frac{x}{m} \\quad | \\cdot m \\;\\Rightarrow\\; x = \\frac{m}{V}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "kmx = p",
    note: "x steht als Faktor in einem Produkt. Teile durch alle Faktoren außer x.",
    ergebnis: "x = \\frac{p}{km}",
    solution: [
      { title: "Teiler sind alle Faktoren außer x",
        text: "<p>Links steht <b>k · m · x</b>. Außer dem <b>x</b> teilen wir durch <b>km</b>.</p>",
        tex: "kmx = p \\quad | : km" },
      { title: "x freistellen",
        text: "<p>Links kürzt sich <span class='hl-muted'>km : km = 1</span> weg, x bleibt übrig:</p>",
        tex: "x = \\frac{p}{km}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "r = \\frac{k}{x}",
    note: "x steht im Nenner – erst heraus. Zwei Wege führen zum Ziel.",
    ergebnis: "x = \\frac{k}{r}",
    solution: [
      { title: "Weg 1 – hochmultiplizieren",
        text: "<p>x steht unten im Bruch. Hol es nach oben: beide Seiten <b>mal x</b>.</p>",
        tex: "r = \\frac{k}{x} \\quad | \\cdot x \\;\\Rightarrow\\; r \\cdot x = k" },
      { title: "Weg 1 – durch r teilen",
        text: "<p>Jetzt steht x als Faktor (Fall 1). Teile durch <b>r</b>:</p>",
        tex: "r \\cdot x = k \\quad | : r \\;\\Rightarrow\\; x = \\frac{k}{r}" },
      { title: "Weg 2 – Kehrwert bilden",
        text: "<p>Oder dreh beide Seiten um (Zähler und Nenner tauschen). Dann mit <b>k</b> mal:</p><p><span class='hl-muted'>Beides führt zum selben Ergebnis.</span></p>",
        tex: "\\frac{1}{r} = \\frac{x}{k} \\quad | \\cdot k \\;\\Rightarrow\\; x = \\frac{k}{r}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "abx = cd",
    note: "x steht als Faktor in einem Produkt. Teile durch alle Faktoren außer x.",
    ergebnis: "x = \\frac{cd}{ab}",
    solution: [
      { title: "Teiler sind alle Faktoren außer x",
        text: "<p>Links steht <b>a · b · x</b>. Außer dem <b>x</b> teilen wir durch <b>ab</b>.</p>",
        tex: "abx = cd \\quad | : ab" },
      { title: "x freistellen",
        tex: "x = \\frac{cd}{ab}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "g = \\frac{b-2}{x}",
    note: "x steht im Nenner. Behandle (b−2) wie eine einzige Zahl. Zwei Wege führen zum Ziel.",
    ergebnis: "x = \\frac{b-2}{g}",
    solution: [
      { title: "Weg 1 – hochmultiplizieren",
        text: "<p>x aus dem Nenner holen: beide Seiten <b>mal x</b>. Der Klammerausdruck <b>(b−2)</b> bleibt zusammen.</p>",
        tex: "g = \\frac{b-2}{x} \\quad | \\cdot x \\;\\Rightarrow\\; g \\cdot x = b-2" },
      { title: "Weg 1 – durch g teilen",
        text: "<p>Jetzt steht x als Faktor (Fall 1). Teile durch <b>g</b>:</p>",
        tex: "x = \\frac{b-2}{g}" },
      { title: "Weg 2 – Kehrwert bilden",
        text: "<p>Oder dreh beide Seiten um und multipliziere dann mit <b>(b−2)</b>:</p><p><span class='hl-muted'>Beides führt zum selben Ergebnis.</span></p>",
        tex: "\\frac{1}{g} = \\frac{x}{b-2} \\quad | \\cdot (b-2) \\;\\Rightarrow\\; x = \\frac{b-2}{g}" }
    ] },

  { topic: "formel-umstellen", level: "medium", type: "Stelle nach x um",
    q: "t = \\frac{s}{x}",
    note: "x steht im Nenner – erst heraus. Zwei Wege führen zum Ziel.",
    ergebnis: "x = \\frac{s}{t}",
    solution: [
      { title: "Weg 1 – hochmultiplizieren",
        text: "<p>x steht unten im Bruch. Hol es nach oben: beide Seiten <b>mal x</b>.</p>",
        tex: "t = \\frac{s}{x} \\quad | \\cdot x \\;\\Rightarrow\\; t \\cdot x = s" },
      { title: "Weg 1 – durch t teilen",
        text: "<p>Jetzt steht x als Faktor (Fall 1). Teile durch <b>t</b>:</p>",
        tex: "t \\cdot x = s \\quad | : t \\;\\Rightarrow\\; x = \\frac{s}{t}" },
      { title: "Weg 2 – Kehrwert bilden",
        text: "<p>Oder dreh beide Seiten um (Zähler und Nenner tauschen). Dann mit <b>s</b> mal:</p><p><span class='hl-muted'>Beides führt zum selben Ergebnis.</span></p>",
        tex: "\\frac{1}{t} = \\frac{x}{s} \\quad | \\cdot s \\;\\Rightarrow\\; x = \\frac{s}{t}" }
    ] },

  // ===== Formel umstellen – Schwer =====
  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "p = 3x - kx",
    note: "x kommt zweimal vor. Was musst du tun, damit es nur noch einmal dasteht?",
    ergebnis: "x = \\frac{p}{3-k}",
    solution: [
      { title: "x ausklammern",
        text: "<p>x steckt in <b>beiden</b> Termen (3x und kx). Klammere <b>x</b> aus, dann steht es nur noch einmal da:</p>",
        tex: "p = 3x - kx \\;\\Rightarrow\\; p = x(3 - k)" },
      { title: "Durch die Klammer teilen",
        text: "<p>Jetzt ist es Fall 1: <b>(3−k)</b> steht als Faktor vor dem x. Teile beide Seiten durch <b>(3−k)</b>:</p>",
        tex: "p = x(3-k) \\quad | : (3-k) \\;\\Rightarrow\\; x = \\frac{p}{3-k}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "ax = bx + c",
    note: "x steht auf beiden Seiten. Bring zuerst alle x-Terme auf eine Seite.",
    ergebnis: "x = \\frac{c}{a - b}",
    solution: [
      { title: "x-Terme auf eine Seite",
        text: "<p>Links und rechts steht ein x. Bring das <b>bx</b> nach links: beide Seiten <b>minus bx</b>.</p>",
        tex: "ax = bx + c \\quad | - bx \\;\\Rightarrow\\; ax - bx = c" },
      { title: "x ausklammern",
        text: "<p>Jetzt steht x zweimal links – klammere <b>x</b> aus:</p>",
        tex: "x(a - b) = c" },
      { title: "Durch die Klammer teilen",
        text: "<p>Teile durch <b>(a−b)</b>:</p>",
        tex: "x = \\frac{c}{a - b}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "\\frac{x}{a} + b = \\frac{x}{c}",
    note: "x steckt in zwei Brüchen. Erst die Nenner loswerden, dann x-Terme sammeln.",
    ergebnis: "x = \\frac{abc}{a - c}",
    solution: [
      { title: "Nenner beseitigen",
        text: "<p>Multipliziere beide Seiten mit <b>a · c</b>, damit die Brüche verschwinden:</p><p><span class='hl-muted'>links: (x/a)·ac = cx &nbsp; und &nbsp; b·ac = abc &nbsp;&nbsp; rechts: (x/c)·ac = ax</span></p>",
        tex: "\\frac{x}{a} + b = \\frac{x}{c} \\quad | \\cdot ac \\;\\Rightarrow\\; cx + abc = ax" },
      { title: "x-Terme auf eine Seite",
        text: "<p>Bring <b>cx</b> nach rechts (minus cx):</p>",
        tex: "abc = ax - cx" },
      { title: "x ausklammern und teilen",
        text: "<p>Rechts <b>x</b> ausklammern, dann durch die Klammer teilen:</p>",
        tex: "abc = x(a - c) \\;\\Rightarrow\\; x = \\frac{abc}{a - c}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "ax + c = bx",
    note: "x steht auf beiden Seiten. Bring zuerst alle x-Terme auf eine Seite.",
    ergebnis: "x = \\frac{c}{b - a}",
    solution: [
      { title: "x-Terme auf eine Seite",
        text: "<p>Bring das <b>ax</b> nach rechts: beide Seiten <b>minus ax</b>.</p>",
        tex: "ax + c = bx \\quad | - ax \\;\\Rightarrow\\; c = bx - ax" },
      { title: "x ausklammern",
        text: "<p>Rechts steht x zweimal – klammere <b>x</b> aus:</p>",
        tex: "c = x(b - a)" },
      { title: "Durch die Klammer teilen",
        text: "<p>Teile durch <b>(b−a)</b>:</p>",
        tex: "x = \\frac{c}{b - a}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "a = x + bx",
    note: "x kommt zweimal vor. Denk daran: x allein ist dasselbe wie 1 · x.",
    ergebnis: "x = \\frac{a}{1 + b}",
    solution: [
      { title: "x ausklammern",
        text: "<p>Rechts steckt x in <b>beiden</b> Termen (x und bx). Klammere <b>x</b> aus – das einzelne x wird zu <b>1</b>:</p>",
        tex: "a = x + bx \\;\\Rightarrow\\; a = x(1 + b)" },
      { title: "Durch die Klammer teilen",
        text: "<p>Teile beide Seiten durch <b>(1+b)</b>:</p>",
        tex: "a = x(1+b) \\quad | : (1+b) \\;\\Rightarrow\\; x = \\frac{a}{1 + b}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "p = ax + bx",
    note: "x kommt zweimal vor. Klammere es aus, dann steht es nur noch einmal da.",
    ergebnis: "x = \\frac{p}{a + b}",
    solution: [
      { title: "x ausklammern",
        text: "<p>x steckt in <b>beiden</b> Termen (ax und bx). Klammere <b>x</b> aus:</p>",
        tex: "p = ax + bx \\;\\Rightarrow\\; p = x(a + b)" },
      { title: "Durch die Klammer teilen",
        text: "<p>Jetzt ist es Fall 1: <b>(a+b)</b> steht als Faktor vor dem x. Teile durch <b>(a+b)</b>:</p>",
        tex: "p = x(a+b) \\quad | : (a+b) \\;\\Rightarrow\\; x = \\frac{p}{a + b}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "mx + a = nx",
    note: "x steht auf beiden Seiten. Bring zuerst alle x-Terme auf eine Seite.",
    ergebnis: "x = \\frac{a}{n - m}",
    solution: [
      { title: "x-Terme auf eine Seite",
        text: "<p>Bring das <b>mx</b> nach rechts: beide Seiten <b>minus mx</b>.</p>",
        tex: "mx + a = nx \\quad | - mx \\;\\Rightarrow\\; a = nx - mx" },
      { title: "x ausklammern",
        text: "<p>Rechts steht x zweimal – klammere <b>x</b> aus:</p>",
        tex: "a = x(n - m)" },
      { title: "Durch die Klammer teilen",
        text: "<p>Teile durch <b>(n−m)</b>:</p>",
        tex: "x = \\frac{a}{n - m}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "\\frac{a}{x} + c = d",
    note: "x steht im Nenner. Bring erst den x-Bruch allein, dann hol x heraus.",
    ergebnis: "x = \\frac{a}{d - c}",
    solution: [
      { title: "Bruch allein stellen",
        text: "<p>Bring <b>c</b> auf die andere Seite: beide Seiten <b>minus c</b>.</p>",
        tex: "\\frac{a}{x} + c = d \\quad | - c \\;\\Rightarrow\\; \\frac{a}{x} = d - c" },
      { title: "Mit x hochmultiplizieren",
        text: "<p>x aus dem Nenner holen: beide Seiten <b>mal x</b>. (d−c) bleibt als Klammer zusammen:</p>",
        tex: "\\frac{a}{x} = d-c \\quad | \\cdot x \\;\\Rightarrow\\; a = (d-c)\\,x" },
      { title: "Durch die Klammer teilen",
        text: "<p>Jetzt ist es Fall 1: teile durch <b>(d−c)</b>:</p>",
        tex: "x = \\frac{a}{d - c}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "kx = m - nx",
    note: "x steht auf beiden Seiten. Bring zuerst alle x-Terme auf eine Seite.",
    ergebnis: "x = \\frac{m}{k + n}",
    solution: [
      { title: "x-Terme auf eine Seite",
        text: "<p>Rechts steht <b>−nx</b>. Bring es nach links: beide Seiten <b>plus nx</b>.</p>",
        tex: "kx = m - nx \\quad | + nx \\;\\Rightarrow\\; kx + nx = m" },
      { title: "x ausklammern",
        text: "<p>Links steht x zweimal – klammere <b>x</b> aus:</p>",
        tex: "x(k + n) = m" },
      { title: "Durch die Klammer teilen",
        text: "<p>Teile durch <b>(k+n)</b>:</p>",
        tex: "x = \\frac{m}{k + n}" }
    ] },

  { topic: "formel-umstellen", level: "hard", type: "Stelle nach x um",
    q: "\\frac{x}{a} = \\frac{x + b}{c}",
    note: "x steckt in zwei Brüchen. Erst über Kreuz multiplizieren, dann x-Terme sammeln.",
    ergebnis: "x = \\frac{ab}{c - a}",
    solution: [
      { title: "Über Kreuz multiplizieren",
        text: "<p>Multipliziere beide Seiten mit <b>a · c</b>. Rechts bleibt <b>(x+b)</b> als Klammer zusammen:</p>",
        tex: "\\frac{x}{a} = \\frac{x+b}{c} \\quad | \\cdot ac \\;\\Rightarrow\\; cx = a(x + b)" },
      { title: "Klammer auflösen, x sammeln",
        text: "<p>Rechts ausmultiplizieren und <b>ax</b> nach links bringen (minus ax):</p>",
        tex: "cx = ax + ab \\;\\Rightarrow\\; cx - ax = ab" },
      { title: "x ausklammern und teilen",
        text: "<p>Links <b>x</b> ausklammern, dann durch die Klammer teilen:</p>",
        tex: "x(c - a) = ab \\;\\Rightarrow\\; x = \\frac{ab}{c - a}" }
    ] }

];
