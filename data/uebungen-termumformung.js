// Übungsaufgaben Mathe-Termumformung.
// topic: Abschnitts-ID. level: "easy" | "medium" | "hard".
// q, a, opts: Aufgabe und Antwortoptionen. solution: Array von Schritten (TeX).
var UEBUNGEN_TERMUMFORMUNG = [

  // ================================================================ Ausklammern – Einfach
  { topic: "ausklammern", level: "easy",
    q: "6x + 9 = {?}", a: "3(2x + 3)",
    opts: ["3(2x + 3)", "3(2x + 9)", "6(x + 9)", "3(6x + 3)"],
    solution: ["\\text{Was passt in 6 und in 9 rein? Die 3.}", "6x + 9 = 3 \\cdot 2x + 3 \\cdot 3 = 3(2x + 3)"],
    note: "Schau: 3 · 2 = 6 und 3 · 3 = 9 — also klammere 3 aus." },

  { topic: "ausklammern", level: "easy",
    q: "4a^2 + 8a = {?}", a: "4a(a + 2)",
    opts: ["4a(a + 2)", "4(a^2 + 8a)", "4a(a + 8)", "2a(2a + 4)"],
    solution: ["\\text{4 steckt in 4 und 8. Das } a \\text{ steckt in } a^2 \\text{ und } a.", "4a^2 + 8a = 4a \\cdot a + 4a \\cdot 2 = 4a(a + 2)"],
    note: "In beiden Termen steckt 4a — das klammere aus." },

  { topic: "ausklammern", level: "easy",
    q: "5x^3 - 10x = {?}", a: "5x(x^2 - 2)",
    opts: ["5x(x^2 - 2)", "5(x^3 - 10x)", "5x(x^2 - 10)", "10x(x^2 - 1)"],
    solution: ["\\text{5 steckt in 5 und 10. Das } x \\text{ steckt in } x^3 \\text{ und } x.", "5x^3 - 10x = 5x \\cdot x^2 - 5x \\cdot 2 = 5x(x^2 - 2)"],
    note: "In beiden Termen steckt 5x — das klammere aus." },

  // ================================================================ Ausklammern – Mittel
  { topic: "ausklammern", level: "medium",
    q: "12a^2b - 8ab^2 = {?}", a: "4ab(3a - 2b)",
    opts: ["4ab(3a - 2b)", "4a(3ab - 2b^2)", "2ab(6a - 4b)", "4ab(3a + 2b)"],
    solution: ["\\text{4 steckt in 12 und 8. Die Variablen } a \\text{ und } b \\text{ kommen überall vor.}", "12a^2b - 8ab^2 = 4ab \\cdot 3a - 4ab \\cdot 2b = 4ab(3a - 2b)"],
    note: "Was steckt in 12 und 8? Die 4. Was an Variablen? a und b. Also: 4ab ausklammern." },

  { topic: "ausklammern", level: "medium",
    q: "-x^2 + 5x = {?}", a: "-x(x - 5)",
    opts: ["-x(x - 5)", "-x(x + 5)", "x(-x + 5)", "-x^2(1 - 5)"],
    solution: ["\\text{Klammere } {-x} \\text{ aus — alle Vorzeichen drehen sich dabei um!}", "-x^2 + 5x = -x \\cdot x + (-x) \\cdot (-5) = -x(x - 5)"],
    note: "Wenn du eine negative Zahl ausklämmerst, dreht sich jedes Vorzeichen in der Klammer um." },

  { topic: "ausklammern", level: "medium",
    q: "3(x-2) + x(x-2) = {?}", a: "(x-2)(3+x)",
    opts: ["(x-2)(3+x)", "(x-2)(3-x)", "(x+2)(3+x)", "3x(x-2)"],
    solution: ["\\text{(x-2) steckt in beiden Teilen — das ist der gemeinsame Faktor.}", "3(x-2) + x(x-2) = (x-2)(3 + x)"],
    note: "(x−2) steckt in beiden Termen — das kannst du genauso ausklammern wie eine Zahl." },

  // ================================================================ Ausklammern – Schwer
  { topic: "ausklammern", level: "hard",
    q: "6x^4 - 15x^3 + 9x^2 = {?}", a: "3x^2(2x^2 - 5x + 3)",
    opts: ["3x^2(2x^2 - 5x + 3)", "3x(2x^3 - 5x^2 + 3x)", "6x^2(x^2 - 5x + 9)", "3x^2(2x^2 - 5x + 9)"],
    solution: ["\\text{Was passt in 6, 15 und 9? Die 3. Welche Potenz von } x \\text{ steckt überall? } x^2.", "6x^4 - 15x^3 + 9x^2 = 3x^2(2x^2 - 5x + 3)"],
    note: "3 passt in 6, 15 und 9. x² steckt in allen drei Termen. Also: 3x² ausklammern." },

  { topic: "ausklammern", level: "hard",
    q: "a(b-c) - (c-b) = {?}", a: "(b-c)(a+1)",
    opts: ["(b-c)(a+1)", "(b-c)(a-1)", "(c-b)(a+1)", "(b+c)(a-1)"],
    solution: ["\\text{Trick: } (c - b) = -(b - c) \\quad \\text{— Klammer umdrehen}", "a(b-c) + (b-c) = (b-c)(a + 1)"],
    note: "Trick: (c−b) ist dasselbe wie −(b−c). Damit steckt (b−c) in beiden Termen." },

  // ================================================================ Ausmultiplizieren – Einfach
  { topic: "ausmultiplizieren", level: "easy",
    q: "4(3x - 2) = {?}", a: "12x - 8",
    opts: ["12x - 8", "12x - 2", "7x - 2", "12x + 8"],
    solution: ["4 \\cdot 3x = 12x", "4 \\cdot (-2) = -8", "4(3x - 2) = 12x - 8"],
    note: "Die 4 mit jedem Term in der Klammer multiplizieren." },

  { topic: "ausmultiplizieren", level: "easy",
    q: "-(2x^2 - x + 3) = {?}", a: "-2x^2 + x - 3",
    opts: ["-2x^2 + x - 3", "-2x^2 - x + 3", "-2x^2 - x - 3", "2x^2 - x - 3"],
    solution: ["\\text{Faktor -1: jedes Vorzeichen dreht sich um.}", "-(2x^2 - x + 3) = -2x^2 + x - 3"],
    note: "Das Minuszeichen davor dreht jedes + und − in der Klammer um." },

  // ================================================================ Ausmultiplizieren – Mittel
  { topic: "ausmultiplizieren", level: "medium",
    q: "(x + 5)(x - 3) = {?}", a: "x^2 + 2x - 15",
    opts: ["x^2 + 2x - 15", "x^2 - 2x - 15", "x^2 + 2x + 15", "x^2 - 15"],
    solution: ["x \\cdot x + x \\cdot (-3) + 5 \\cdot x + 5 \\cdot (-3)", "= x^2 - 3x + 5x - 15", "= x^2 + 2x - 15"],
    note: "Jeden Term links mit jedem Term rechts multiplizieren (4 Produkte), dann zusammenfassen." },

  { topic: "ausmultiplizieren", level: "medium",
    q: "(2a - 3)^2 = {?}", a: "4a^2 - 12a + 9",
    opts: ["4a^2 - 12a + 9", "4a^2 + 9", "4a^2 - 6a + 9", "4a^2 + 12a + 9"],
    solution: ["\\text{Formel: } (p - q)^2 = p^2 - 2pq + q^2 \\quad \\text{mit } p = 2a,\\; q = 3", "(2a)^2 - 2 \\cdot 2a \\cdot 3 + 3^2", "= 4a^2 - 12a + 9"],
    note: "(a−b)² = a² − 2ab + b². Hier ist a = 2a und b = 3." },

  // ================================================================ Ausmultiplizieren – Schwer
  { topic: "ausmultiplizieren", level: "hard",
    q: "(x^2 + 3)(x^2 - 3) = {?}", a: "x^4 - 9",
    opts: ["x^4 - 9", "x^4 + 9", "x^4 - 6x^2 + 9", "x^4 - 9x^2"],
    solution: ["\\text{Formel: } (a + b)(a - b) = a^2 - b^2 \\quad \\text{mit } a = x^2,\\; b = 3", "(x^2)^2 - 3^2 = x^4 - 9"],
    note: "(a+b)·(a−b) = a²−b². Hier ist a = x², b = 3." },

  { topic: "ausmultiplizieren", level: "hard",
    q: "(3x - 2y)^2 = {?}", a: "9x^2 - 12xy + 4y^2",
    opts: ["9x^2 - 12xy + 4y^2", "9x^2 + 4y^2", "9x^2 - 4xy + 4y^2", "9x^2 + 12xy + 4y^2"],
    solution: ["\\text{Formel: } (a - b)^2 = a^2 - 2ab + b^2 \\quad \\text{mit } a = 3x,\\; b = 2y", "(3x)^2 - 2 \\cdot 3x \\cdot 2y + (2y)^2", "= 9x^2 - 12xy + 4y^2"],
    note: "(a−b)² = a²−2ab+b². Hier a = 3x, b = 2y. Der mittlere Term enthält beide Variablen." },

  // ================================================================ Faktorisieren – Einfach
  { topic: "faktorisieren", level: "easy",
    q: "x^2 - 25 = {?}", a: "(x+5)(x-5)",
    opts: ["(x+5)(x-5)", "(x-5)^2", "(x+5)^2", "(x-25)(x+1)"],
    solution: ["\\text{Formel: } a^2 - b^2 = (a+b)(a-b) \\quad \\text{mit } a = x,\\; b = 5", "x^2 - 25 = (x + 5)(x - 5)"],
    note: "a²−b² = (a+b)·(a−b). Hier: a = x, b = 5 (weil 5² = 25)." },

  { topic: "faktorisieren", level: "easy",
    q: "x^2 + 6x + 9 = {?}", a: "(x+3)^2",
    opts: ["(x+3)^2", "(x-3)^2", "(x+3)(x-3)", "(x+9)(x+1)"],
    solution: ["\\text{Formel: } a^2 + 2ab + b^2 = (a+b)^2 \\quad \\text{mit } a = x,\\; b = 3", "\\text{Probe: } 2 \\cdot x \\cdot 3 = 6x \\checkmark", "x^2 + 6x + 9 = (x + 3)^2"],
    note: "a²+2ab+b² = (a+b)². Probe: 2·x·3 = 6x ✓" },

  // ================================================================ Faktorisieren – Mittel
  { topic: "faktorisieren", level: "medium",
    q: "4x^2 - 20x + 25 = {?}", a: "(2x-5)^2",
    opts: ["(2x-5)^2", "(2x+5)^2", "(4x-5)(x-5)", "(2x-5)(2x+5)"],
    solution: ["\\text{Erste Zahl: } \\sqrt{4x^2} = 2x. \\quad \\text{Letzte Zahl: } \\sqrt{25} = 5.", "\\text{Probe für mittleren Term: } 2 \\cdot 2x \\cdot 5 = 20x \\checkmark", "4x^2 - 20x + 25 = (2x - 5)^2"],
    note: "a²−2ab+b² = (a−b)². Schau: √(4x²) = 2x, √25 = 5. Probe: 2·2x·5 = 20x ✓" },

  { topic: "faktorisieren", level: "medium",
    q: "3x^3 - 12x = {?}", a: "3x(x+2)(x-2)",
    opts: ["3x(x+2)(x-2)", "3x(x^2-4)", "3(x^3-4x)", "3x(x-2)^2"],
    solution: ["\\text{Schritt 1: 3x ausklammern}", "3x^3 - 12x = 3x(x^2 - 4)", "\\text{Schritt 2: } x^2 - 4 = (x+2)(x-2) \\quad \\text{(a² − b² Formel)}", "= 3x(x + 2)(x - 2)"],
    note: "Zuerst 3x ausklammern. Dann: x²−4 ist a²−b² mit a = x, b = 2." },

  // ================================================================ Faktorisieren – Schwer
  { topic: "faktorisieren", level: "hard",
    q: "16m^4 - 1 = {?}", a: "(2m+1)(2m-1)(4m^2+1)",
    opts: ["(2m+1)(2m-1)(4m^2+1)", "(4m^2+1)(4m^2-1)", "(4m^2-1)^2", "(2m+1)^2(2m-1)^2"],
    solution: ["\\text{Schritt 1: } a^2 - b^2 \\text{ mit } a = 4m^2,\\; b = 1", "16m^4 - 1 = (4m^2 + 1)(4m^2 - 1)", "\\text{Schritt 2: } 4m^2 - 1 \\text{ nochmals zerlegen: } a = 2m,\\; b = 1", "= (4m^2 + 1)(2m + 1)(2m - 1)"],
    note: "Zweimal hintereinander a²−b² anwenden: zuerst auf 16m⁴−1, dann nochmal auf 4m²−1." },

  { topic: "faktorisieren", level: "hard",
    q: "x^4 - 13x^2 + 36 = {?}", a: "(x+2)(x-2)(x+3)(x-3)",
    opts: ["(x+2)(x-2)(x+3)(x-3)", "(x^2-4)(x^2-9)", "(x^2-6)^2 + 36 - 36", "(x-3)^2(x+2)^2"],
    solution: ["\\text{Setze } u = x^2. \\text{ Dann wird es zu: } u^2 - 13u + 36 = 0", "\\text{Welche zwei Zahlen ergeben −13 als Summe und +36 als Produkt? } {-4} \\text{ und } {-9}.", "(u - 4)(u - 9) = (x^2 - 4)(x^2 - 9)", "= (x+2)(x-2)(x+3)(x-3)"],
    note: "Ersetze x² durch u. Dann hast du u²−13u+36 — eine normale Gleichung zum Faktorisieren." },

  // ================================================================ Bruchterme – Einfach
  { topic: "bruchterme", level: "easy",
    q: "\\dfrac{6x}{3} = {?}", a: "2x",
    opts: ["2x", "6x - 3", "\\frac{2x}{1}", "3x"],
    solution: ["\\frac{6x}{3} = \\frac{6}{3} \\cdot x = 2 \\cdot x = 2x"],
    note: "Zähler und Nenner durch 3 teilen: 6 ÷ 3 = 2." },

  { topic: "bruchterme", level: "easy",
    q: "\\dfrac{x^2 + x}{x} = {?} \\quad (x \\neq 0)", a: "x + 1",
    opts: ["x + 1", "x^2 + 1", "x + x", "1"],
    solution: ["\\text{Zähler: } x^2 + x = x(x + 1) \\quad \\text{(x ausklammern)}", "\\frac{x(x+1)}{x} = x + 1 \\quad \\text{(x kürzen)}"],
    note: "Im Zähler x ausklammern: x²+x = x·(x+1). Dann kürze x oben und unten." },

  // ================================================================ Bruchterme – Mittel
  { topic: "bruchterme", level: "medium",
    q: "\\dfrac{x^2 - 9}{x + 3} = {?} \\quad (x \\neq -3)", a: "x - 3",
    opts: ["x - 3", "x + 3", "x^2 - 3", "\\frac{x-3}{1}"],
    solution: ["\\text{Zähler faktorisieren: } x^2 - 9 = (x+3)(x-3)", "\\frac{(x+3)(x-3)}{(x+3)} = x - 3 \\quad \\text{((x+3) kürzen)}"],
    note: "x²−9 = (x+3)·(x−3). Dann kürze (x+3) oben und unten." },

  { topic: "bruchterme", level: "medium",
    q: "\\dfrac{2x^2 - 8}{x^2 - 4x + 4} = {?}", a: "\\dfrac{2(x+2)}{x-2}",
    opts: ["\\dfrac{2(x+2)}{x-2}", "\\dfrac{2}{x-2}", "\\dfrac{x+2}{x-2}", "2(x-2)"],
    solution: ["\\text{Zähler: } 2x^2 - 8 = 2(x^2 - 4) = 2(x+2)(x-2)", "\\text{Nenner: } x^2 - 4x + 4 = (x-2)^2", "\\frac{2(x+2)(x-2)}{(x-2)^2} = \\frac{2(x+2)}{x-2} \\quad \\text{(ein (x-2) kürzen)}"],
    note: "Zähler und Nenner zuerst vollständig faktorisieren, dann gemeinsame Faktoren kürzen." },

  // ================================================================ Bruchterme – Schwer
  { topic: "bruchterme", level: "hard",
    q: "\\dfrac{4x^2 - 1}{2x^2 + x} = {?}", a: "\\dfrac{2x-1}{x}",
    opts: ["\\dfrac{2x-1}{x}", "\\dfrac{2x+1}{x}", "\\dfrac{4x-1}{2x}", "\\dfrac{2x-1}{2x+1}"],
    solution: ["\\text{Zähler: } 4x^2 - 1 = (2x+1)(2x-1)", "\\text{Nenner: } 2x^2 + x = x(2x + 1)", "\\frac{(2x+1)(2x-1)}{x(2x+1)} = \\frac{2x-1}{x} \\quad \\text{((2x+1) kürzen)}"],
    note: "Zähler: a²−b² mit a = 2x, b = 1. Nenner: x ausklammern. Dann kürzen." },

  { topic: "bruchterme", level: "hard",
    q: "\\dfrac{x^3 - x}{x^2 + 2x + 1} = {?}", a: "\\dfrac{x(x-1)}{x+1}",
    opts: ["\\dfrac{x(x-1)}{x+1}", "\\dfrac{x+1}{x-1}", "\\dfrac{x^2-1}{x+1}", "x-1"],
    solution: ["\\text{Zähler: } x^3 - x = x(x^2-1) = x(x+1)(x-1)", "\\text{Nenner: } x^2 + 2x + 1 = (x+1)^2", "\\frac{x(x+1)(x-1)}{(x+1)^2} = \\frac{x(x-1)}{x+1} \\quad \\text{(ein (x+1) kürzen)}"],
    note: "Zähler: x ausklammern, dann x²−1 = (x+1)·(x−1). Nenner: (x+1)². Dann ein (x+1) kürzen." },

  // ================================================================ Wurzeln – Einfach
  { topic: "wurzeln-vereinfachen", level: "easy",
    q: "\\sqrt{72} = {?}", a: "6\\sqrt{2}",
    opts: ["6\\sqrt{2}", "9\\sqrt{2}", "6\\sqrt{3}", "3\\sqrt{8}"],
    solution: ["\\text{Welche Quadratzahl steckt in 72? } 72 = 36 \\cdot 2 \\quad (36 = 6^2)", "\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}"],
    note: "Suche die größte Quadratzahl in 72: das ist 36 = 6². Dann: √72 = √(36·2) = 6·√2." },

  { topic: "wurzeln-vereinfachen", level: "easy",
    q: "\\sqrt{x^6} = {?}", a: "x^3",
    opts: ["x^3", "x^2", "x^{3/2}", "x^6"],
    solution: ["\\sqrt{x^6} = (x^6)^{1/2} = x^{6 \\div 2} = x^3"],
    note: "Bei einer Wurzel: Exponent durch 2 teilen. 6 ÷ 2 = 3." },

  // ================================================================ Wurzeln – Mittel
  { topic: "wurzeln-vereinfachen", level: "medium",
    q: "\\sqrt{50x^4} = {?}", a: "5x^2\\sqrt{2}",
    opts: ["5x^2\\sqrt{2}", "5x^2", "10x^2\\sqrt{2}", "5x^4\\sqrt{2}"],
    solution: ["\\text{Zahl: } 50 = 25 \\cdot 2, \\quad \\sqrt{25} = 5, \\text{ Rest: } \\sqrt{2}", "\\text{Potenz: } \\sqrt{x^4} = x^{4 \\div 2} = x^2", "\\sqrt{50x^4} = 5x^2\\sqrt{2}"],
    note: "Zahl und Potenz getrennt vereinfachen: √50 = 5√2 und √(x⁴) = x²." },

  { topic: "wurzeln-vereinfachen", level: "medium",
    q: "\\dfrac{\\sqrt{18}}{\\sqrt{2}} = {?}", a: "3",
    opts: ["3", "\\sqrt{9}", "3\\sqrt{2}", "9"],
    solution: ["\\frac{\\sqrt{18}}{\\sqrt{2}} = \\sqrt{\\frac{18}{2}} = \\sqrt{9} = 3"],
    note: "Brüche unter der Wurzel darf man zusammenziehen: √18 ÷ √2 = √(18÷2) = √9 = 3." },

  // ================================================================ Wurzeln – Schwer
  { topic: "wurzeln-vereinfachen", level: "hard",
    q: "\\sqrt{48p^{18} \\cdot b^9} = {?}", a: "4p^9 b^4 \\sqrt{3b}",
    opts: ["4p^9 b^4 \\sqrt{3b}", "4p^9 b^4 \\sqrt{b}", "6p^9 b^4 \\sqrt{b}", "4p^9 b^9 \\sqrt{3}"],
    solution: ["\\text{Zahl: } 48 = 16 \\cdot 3 \\Rightarrow \\sqrt{48} = 4\\sqrt{3}", "\\text{Potenz } p^{18} \\text{ (gerade): } \\sqrt{p^{18}} = p^9", "\\text{Potenz } b^9 \\text{ (ungerade): } b^8 \\text{ rausziehen} \\Rightarrow \\sqrt{b^9} = b^4\\sqrt{b}", "\\sqrt{48p^{18}b^9} = 4p^9 b^4 \\sqrt{3b}"],
    note: "48 = 16·3, also √48 = 4√3. p¹⁸ ist gerade → p⁹. b⁹ ist ungerade → b⁸ raus (= b⁴), ein b bleibt unter der Wurzel." },

  { topic: "wurzeln-vereinfachen", level: "hard",
    q: "\\dfrac{\\sqrt{75p^{12}}}{\\sqrt{b^9}} = {?}", a: "\\dfrac{5p^6\\sqrt{3b}}{b^5}",
    opts: ["\\dfrac{5p^6\\sqrt{3b}}{b^5}", "\\dfrac{5p^6\\sqrt{3}}{b^4\\sqrt{b}}", "\\dfrac{5p^6\\sqrt{3}}{b^5}", "\\dfrac{5p^6}{b^4}\\sqrt{3b}"],
    solution: ["\\text{Zähler: } \\sqrt{75p^{12}} = \\sqrt{25 \\cdot 3 \\cdot p^{12}} = 5p^6\\sqrt{3}", "\\text{Nenner: } \\sqrt{b^9} = b^4\\sqrt{b} \\quad \\text{(b⁸ rausziehen, ein b bleibt)}", "\\text{Im Nenner steht noch } \\sqrt{b} \\text{ — mit } \\tfrac{\\sqrt{b}}{\\sqrt{b}} \\text{ erweitern, um es loszuwerden:}", "\\frac{5p^6\\sqrt{3}}{b^4\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{5p^6\\sqrt{3b}}{b^5}"],
    note: "Zähler und Nenner getrennt vereinfachen. Dann mit √b/√b erweitern, damit kein Wurzelzeichen im Nenner steht." }

];
