// Übungsaufgaben Mathe-Termumformung.
// topic: Abschnitts-ID. level: "easy" | "medium" | "hard".
// q, a, opts: wie Quiz. solution: Array von TeX-Schritten (wird aufgeklappt).
var UEBUNGEN_TERMUMFORMUNG = [

  // ================================================================ Ausklammern – Einfach
  { topic: "ausklammern", level: "easy",
    q: "6x + 9 = {?}", a: "3(2x + 3)",
    opts: ["3(2x + 3)", "3(2x + 9)", "6(x + 9)", "3(6x + 3)"],
    solution: ["\\text{ggT}(6, 9) = 3", "6x + 9 = 3 \\cdot 2x + 3 \\cdot 3 = 3(2x + 3)"],
    note: "ggT der Zahlen ist 3." },

  { topic: "ausklammern", level: "easy",
    q: "4a^2 + 8a = {?}", a: "4a(a + 2)",
    opts: ["4a(a + 2)", "4(a^2 + 8a)", "4a(a + 8)", "2a(2a + 4)"],
    solution: ["\\text{ggT}(4, 8) = 4,\\quad \\text{niedrigste Potenz: } a^1", "4a^2 + 8a = 4a \\cdot a + 4a \\cdot 2 = 4a(a + 2)"],
    note: "Faktor 4a ausklammern." },

  { topic: "ausklammern", level: "easy",
    q: "5x^3 - 10x = {?}", a: "5x(x^2 - 2)",
    opts: ["5x(x^2 - 2)", "5(x^3 - 10x)", "5x(x^2 - 10)", "10x(x^2 - 1)"],
    solution: ["\\text{ggT}(5, 10) = 5,\\quad \\text{niedrigste Potenz: } x^1", "5x^3 - 10x = 5x \\cdot x^2 - 5x \\cdot 2 = 5x(x^2 - 2)"],
    note: "5x ausklammern." },

  // ================================================================ Ausklammern – Mittel
  { topic: "ausklammern", level: "medium",
    q: "12a^2b - 8ab^2 = {?}", a: "4ab(3a - 2b)",
    opts: ["4ab(3a - 2b)", "4a(3ab - 2b^2)", "2ab(6a - 4b)", "4ab(3a + 2b)"],
    solution: ["\\text{ggT}(12, 8) = 4,\\quad \\text{gemeinsame Variablen: } ab", "12a^2b - 8ab^2 = 4ab \\cdot 3a - 4ab \\cdot 2b = 4ab(3a - 2b)"],
    note: "Probe: 4ab · 3a = 12a²b ✓" },

  { topic: "ausklammern", level: "medium",
    q: "-x^2 + 5x = {?}", a: "-x(x - 5)",
    opts: ["-x(x - 5)", "-x(x + 5)", "x(-x + 5)", "-x^2(1 - 5)"],
    solution: ["\\text{Faktor: } -x \\text{ ausklammern}", "-x^2 + 5x = -x \\cdot x + (-x)\\cdot(-5) = -x(x - 5)"],
    note: "Beim negativen Ausklammern: alle Vorzeichen drehen sich um." },

  { topic: "ausklammern", level: "medium",
    q: "3(x-2) + x(x-2) = {?}", a: "(x-2)(3+x)",
    opts: ["(x-2)(3+x)", "(x-2)(3-x)", "(x+2)(3+x)", "3x(x-2)"],
    solution: ["\\text{Gemeinsamer Faktor: } (x-2)", "3(x-2) + x(x-2) = (x-2)(3 + x)"],
    note: "Klammerausdruck als Faktor erkennen." },

  // ================================================================ Ausklammern – Schwer
  { topic: "ausklammern", level: "hard",
    q: "6x^4 - 15x^3 + 9x^2 = {?}", a: "3x^2(2x^2 - 5x + 3)",
    opts: ["3x^2(2x^2 - 5x + 3)", "3x(2x^3 - 5x^2 + 3x)", "6x^2(x^2 - 5x + 9)", "3x^2(2x^2 - 5x + 9)"],
    solution: ["\\text{ggT}(6, 15, 9) = 3,\\quad \\text{niedrigste Potenz: } x^2", "6x^4 - 15x^3 + 9x^2 = 3x^2(2x^2 - 5x + 3)"],
    note: "Probe: 3x² · 2x² = 6x⁴ ✓" },

  { topic: "ausklammern", level: "hard",
    q: "a(b-c) - (c-b) = {?}", a: "(b-c)(a+1)",
    opts: ["(b-c)(a+1)", "(b-c)(a-1)", "(c-b)(a+1)", "(b+c)(a-1)"],
    solution: ["(c - b) = -(b - c) \\quad \\text{umschreiben}", "a(b-c) - (c-b) = a(b-c) + (b-c) = (b-c)(a + 1)"],
    note: "(c−b) = −(b−c), dann gemeinsamen Faktor erkennen." },

  // ================================================================ Ausmultiplizieren – Einfach
  { topic: "ausmultiplizieren", level: "easy",
    q: "4(3x - 2) = {?}", a: "12x - 8",
    opts: ["12x - 8", "12x - 2", "7x - 2", "12x + 8"],
    solution: ["4 \\cdot 3x = 12x", "4 \\cdot (-2) = -8", "4(3x - 2) = 12x - 8"],
    note: "Jeden Term malnehmen." },

  { topic: "ausmultiplizieren", level: "easy",
    q: "-(2x^2 - x + 3) = {?}", a: "-2x^2 + x - 3",
    opts: ["-2x^2 + x - 3", "-2x^2 - x + 3", "-2x^2 - x - 3", "2x^2 - x - 3"],
    solution: ["\\text{Faktor } -1: \\text{ alle Vorzeichen umdrehen}", "-(2x^2 - x + 3) = -2x^2 + x - 3"],
    note: "−1 dreht jedes Vorzeichen um." },

  // ================================================================ Ausmultiplizieren – Mittel
  { topic: "ausmultiplizieren", level: "medium",
    q: "(x + 5)(x - 3) = {?}", a: "x^2 + 2x - 15",
    opts: ["x^2 + 2x - 15", "x^2 - 2x - 15", "x^2 + 2x + 15", "x^2 - 15"],
    solution: ["x \\cdot x + x \\cdot (-3) + 5 \\cdot x + 5 \\cdot (-3)", "= x^2 - 3x + 5x - 15", "= x^2 + 2x - 15"],
    note: "4 Produkte, dann zusammenfassen." },

  { topic: "ausmultiplizieren", level: "medium",
    q: "(2a - 3)^2 = {?}", a: "4a^2 - 12a + 9",
    opts: ["4a^2 - 12a + 9", "4a^2 + 9", "4a^2 - 6a + 9", "4a^2 + 12a + 9"],
    solution: ["(a_1 - b_1)^2 = a_1^2 - 2a_1b_1 + b_1^2,\\quad a_1 = 2a,\\; b_1 = 3", "(2a)^2 - 2 \\cdot 2a \\cdot 3 + 3^2", "= 4a^2 - 12a + 9"],
    note: "2. binomische Formel: (a−b)² = a² − 2ab + b²." },

  // ================================================================ Ausmultiplizieren – Schwer
  { topic: "ausmultiplizieren", level: "hard",
    q: "(x^2 + 3)(x^2 - 3) = {?}", a: "x^4 - 9",
    opts: ["x^4 - 9", "x^4 + 9", "x^4 - 6x^2 + 9", "x^4 - 9x^2"],
    solution: ["(a + b)(a - b) = a^2 - b^2,\\quad a = x^2,\\; b = 3", "(x^2)^2 - 3^2 = x^4 - 9"],
    note: "3. binomische Formel auch für höhere Potenzen." },

  { topic: "ausmultiplizieren", level: "hard",
    q: "(3x - 2y)^2 = {?}", a: "9x^2 - 12xy + 4y^2",
    opts: ["9x^2 - 12xy + 4y^2", "9x^2 + 4y^2", "9x^2 - 4xy + 4y^2", "9x^2 + 12xy + 4y^2"],
    solution: ["(a - b)^2 = a^2 - 2ab + b^2,\\quad a = 3x,\\; b = 2y", "(3x)^2 - 2 \\cdot 3x \\cdot 2y + (2y)^2", "= 9x^2 - 12xy + 4y^2"],
    note: "Mittlerer Term enthält beide Variablen." },

  // ================================================================ Faktorisieren – Einfach
  { topic: "faktorisieren", level: "easy",
    q: "x^2 - 25 = {?}", a: "(x+5)(x-5)",
    opts: ["(x+5)(x-5)", "(x-5)^2", "(x+5)^2", "(x-25)(x+1)"],
    solution: ["a^2 - b^2 = (a+b)(a-b),\\quad a = x,\\; b = 5", "x^2 - 25 = (x + 5)(x - 5)"],
    note: "3. binomische Formel rückwärts." },

  { topic: "faktorisieren", level: "easy",
    q: "x^2 + 6x + 9 = {?}", a: "(x+3)^2",
    opts: ["(x+3)^2", "(x-3)^2", "(x+3)(x-3)", "(x+9)(x+1)"],
    solution: ["a^2 + 2ab + b^2 = (a+b)^2,\\quad a = x,\\; b = 3", "\\text{Probe: } 2 \\cdot x \\cdot 3 = 6x \\checkmark", "x^2 + 6x + 9 = (x + 3)^2"],
    note: "1. binomische Formel rückwärts." },

  // ================================================================ Faktorisieren – Mittel
  { topic: "faktorisieren", level: "medium",
    q: "4x^2 - 20x + 25 = {?}", a: "(2x-5)^2",
    opts: ["(2x-5)^2", "(2x+5)^2", "(4x-5)(x-5)", "(2x-5)(2x+5)"],
    solution: ["\\sqrt{4x^2} = 2x,\\quad \\sqrt{25} = 5", "\\text{Probe: } -2 \\cdot 2x \\cdot 5 = -20x \\checkmark", "4x^2 - 20x + 25 = (2x - 5)^2"],
    note: "2. binomische Formel." },

  { topic: "faktorisieren", level: "medium",
    q: "3x^3 - 12x = {?}", a: "3x(x+2)(x-2)",
    opts: ["3x(x+2)(x-2)", "3x(x^2-4)", "3(x^3-4x)", "3x(x-2)^2"],
    solution: ["\\text{Schritt 1: } 3x \\text{ ausklammern}", "3x^3 - 12x = 3x(x^2 - 4)", "\\text{Schritt 2: Differenz zweier Quadrate}", "= 3x(x + 2)(x - 2)"],
    note: "Erst ausklammern, dann 3. binomische Formel." },

  // ================================================================ Faktorisieren – Schwer
  { topic: "faktorisieren", level: "hard",
    q: "16m^4 - 1 = {?}", a: "(2m+1)(2m-1)(4m^2+1)",
    opts: ["(2m+1)(2m-1)(4m^2+1)", "(4m^2+1)(4m^2-1)", "(4m^2-1)^2", "(2m+1)^2(2m-1)^2"],
    solution: ["a^2 - b^2 = (a+b)(a-b),\\quad a = 4m^2,\\; b = 1", "16m^4 - 1 = (4m^2 + 1)(4m^2 - 1)", "\\text{Nochmals: } 4m^2 - 1 = (2m+1)(2m-1)", "= (4m^2 + 1)(2m + 1)(2m - 1)"],
    note: "Zweifach faktorisieren — 4m²−1 lässt sich nochmals zerlegen." },

  { topic: "faktorisieren", level: "hard",
    q: "x^4 - 13x^2 + 36 = {?}", a: "(x+2)(x-2)(x+3)(x-3)",
    opts: ["(x+2)(x-2)(x+3)(x-3)", "(x^2-4)(x^2-9)", "(x^2-6)^2 + 36 - 36", "(x-3)^2(x+2)^2"],
    solution: ["u = x^2 \\text{ substituieren: } u^2 - 13u + 36 = 0", "u_1 = 4,\\; u_2 = 9 \\quad \\Rightarrow \\quad (u-4)(u-9)", "= (x^2 - 4)(x^2 - 9)", "= (x+2)(x-2)(x+3)(x-3)"],
    note: "Substitution u = x² macht es zur normalen Faktorisierung." },

  // ================================================================ Bruchterme – Einfach
  { topic: "bruchterme", level: "easy",
    q: "\\dfrac{6x}{3} = {?}", a: "2x",
    opts: ["2x", "6x - 3", "\\frac{2x}{1}", "3x"],
    solution: ["\\frac{6x}{3} = \\frac{6}{3} \\cdot x = 2x"],
    note: "Zähler und Nenner durch 3 teilen." },

  { topic: "bruchterme", level: "easy",
    q: "\\dfrac{x^2 + x}{x} = {?} \\quad (x \\neq 0)", a: "x + 1",
    opts: ["x + 1", "x^2 + 1", "x + x", "1"],
    solution: ["\\text{Zähler ausklammern: } x^2 + x = x(x + 1)", "\\frac{x(x+1)}{x} = x + 1"],
    note: "Erst faktorisieren, dann kürzen." },

  // ================================================================ Bruchterme – Mittel
  { topic: "bruchterme", level: "medium",
    q: "\\dfrac{x^2 - 9}{x + 3} = {?} \\quad (x \\neq -3)", a: "x - 3",
    opts: ["x - 3", "x + 3", "x^2 - 3", "\\frac{x-3}{1}"],
    solution: ["x^2 - 9 = (x+3)(x-3) \\quad \\text{(3. binom. Formel)}", "\\frac{(x+3)(x-3)}{(x+3)} = x - 3"],
    note: "Zähler faktorisieren, dann kürzen." },

  { topic: "bruchterme", level: "medium",
    q: "\\dfrac{2x^2 - 8}{x^2 - 4x + 4} = {?}", a: "\\dfrac{2(x+2)}{x-2}",
    opts: ["\\dfrac{2(x+2)}{x-2}", "\\dfrac{2}{x-2}", "\\dfrac{x+2}{x-2}", "2(x-2)"],
    solution: ["\\text{Zähler: } 2x^2 - 8 = 2(x^2 - 4) = 2(x+2)(x-2)", "\\text{Nenner: } x^2 - 4x + 4 = (x-2)^2", "\\frac{2(x+2)(x-2)}{(x-2)^2} = \\frac{2(x+2)}{x-2}"],
    note: "Zähler und Nenner vollständig faktorisieren." },

  // ================================================================ Bruchterme – Schwer
  { topic: "bruchterme", level: "hard",
    q: "\\dfrac{4x^2 - 1}{2x^2 + x} = {?}", a: "\\dfrac{2x-1}{x}",
    opts: ["\\dfrac{2x-1}{x}", "\\dfrac{2x+1}{x}", "\\dfrac{4x-1}{2x}", "\\dfrac{2x-1}{2x+1}"],
    solution: ["\\text{Zähler: } 4x^2 - 1 = (2x+1)(2x-1)", "\\text{Nenner: } 2x^2 + x = x(2x + 1)", "\\frac{(2x+1)(2x-1)}{x(2x+1)} = \\frac{2x-1}{x}"],
    note: "Einschränkung: x ≠ 0 und x ≠ −½." },

  { topic: "bruchterme", level: "hard",
    q: "\\dfrac{x^3 - x}{x^2 + 2x + 1} = {?}", a: "\\dfrac{x(x-1)}{x+1}",
    opts: ["\\dfrac{x(x-1)}{x+1}", "\\dfrac{x+1}{x-1}", "\\dfrac{x^2-1}{x+1}", "x-1"],
    solution: ["\\text{Zähler: } x^3 - x = x(x^2-1) = x(x+1)(x-1)", "\\text{Nenner: } x^2 + 2x + 1 = (x+1)^2", "\\frac{x(x+1)(x-1)}{(x+1)^2} = \\frac{x(x-1)}{x+1}"],
    note: "Vollständig faktorisieren, dann gemeinsamen Faktor (x+1) kürzen." },

  // ================================================================ Wurzeln – Einfach
  { topic: "wurzeln-vereinfachen", level: "easy",
    q: "\\sqrt{72} = {?}", a: "6\\sqrt{2}",
    opts: ["6\\sqrt{2}", "9\\sqrt{2}", "6\\sqrt{3}", "3\\sqrt{8}"],
    solution: ["72 = 36 \\cdot 2 \\quad (36 = 6^2 \\text{ ist die größte Quadratzahl})", "\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}"],
    note: "Größte Quadratzahl herausziehen." },

  { topic: "wurzeln-vereinfachen", level: "easy",
    q: "\\sqrt{x^6} = {?}", a: "x^3",
    opts: ["x^3", "x^2", "x^{3/2}", "x^6"],
    solution: ["\\sqrt{x^6} = (x^6)^{1/2} = x^{6 \\cdot \\frac{1}{2}} = x^3"],
    note: "Gerade Potenz: Exponent halbieren." },

  // ================================================================ Wurzeln – Mittel
  { topic: "wurzeln-vereinfachen", level: "medium",
    q: "\\sqrt{50x^4} = {?}", a: "5x^2\\sqrt{2}",
    opts: ["5x^2\\sqrt{2}", "5x^2", "10x^2\\sqrt{2}", "5x^4\\sqrt{2}"],
    solution: ["50 = 25 \\cdot 2,\\quad x^4 \\text{ ist bereits gerade Potenz}", "\\sqrt{50x^4} = \\sqrt{25 \\cdot 2 \\cdot x^4} = 5x^2\\sqrt{2}"],
    note: "Zahl und Potenz getrennt vereinfachen." },

  { topic: "wurzeln-vereinfachen", level: "medium",
    q: "\\dfrac{\\sqrt{18}}{\\sqrt{2}} = {?}", a: "3",
    opts: ["3", "\\sqrt{9}", "3\\sqrt{2}", "9"],
    solution: ["\\frac{\\sqrt{18}}{\\sqrt{2}} = \\sqrt{\\frac{18}{2}} = \\sqrt{9} = 3"],
    note: "Quotienten-Regel: √(a/b) = √a / √b." },

  // ================================================================ Wurzeln – Schwer
  { topic: "wurzeln-vereinfachen", level: "hard",
    q: "\\sqrt{48p^{18} \\cdot b^9} = {?}", a: "4p^9 b^4 \\sqrt{3b}",
    opts: ["4p^9 b^4 \\sqrt{3b}", "4p^9 b^4 \\sqrt{b}", "6p^9 b^4 \\sqrt{b}", "4p^9 b^9 \\sqrt{3}"],
    solution: ["48 = 16 \\cdot 3 \\Rightarrow \\sqrt{48} = 4\\sqrt{3}", "p^{18} \\text{ gerade} \\Rightarrow \\sqrt{p^{18}} = p^9", "b^9 = b^8 \\cdot b \\Rightarrow \\sqrt{b^9} = b^4\\sqrt{b}", "\\sqrt{48p^{18}b^9} = 4p^9 b^4 \\sqrt{3b}"],
    note: "Ungerade Potenz: b⁸ herausziehen, b bleibt unter der Wurzel." },

  { topic: "wurzeln-vereinfachen", level: "hard",
    q: "\\dfrac{\\sqrt{75p^{12}}}{\\sqrt{b^9}} = {?}", a: "\\dfrac{5p^6\\sqrt{3b}}{b^5}",
    opts: ["\\dfrac{5p^6\\sqrt{3b}}{b^5}", "\\dfrac{5p^6\\sqrt{3}}{b^4\\sqrt{b}}", "\\dfrac{5p^6\\sqrt{3}}{b^5}", "\\dfrac{5p^6}{b^4}\\sqrt{3b}"],
    solution: ["\\text{Zähler: } \\sqrt{75p^{12}} = \\sqrt{25 \\cdot 3 \\cdot p^{12}} = 5p^6\\sqrt{3}", "\\text{Nenner: } \\sqrt{b^9} = b^4\\sqrt{b}", "\\frac{5p^6\\sqrt{3}}{b^4\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{5p^6\\sqrt{3b}}{b^5}"],
    note: "Zähler und Nenner getrennt vereinfachen, dann rationalisieren." }

];
