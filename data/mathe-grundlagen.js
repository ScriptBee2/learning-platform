// Inhalte der Seite "Mathe – Grundlagen".
// Alle Formeln sind TeX (KaTeX). In Texten stehen Formeln in $…$. Regeln: DESIGN.md, Abschnitt 7.
// Geteilt immer als \div schreiben – es wird automatisch als ":" gesetzt.
//
// Abschnitt:  { id, title, accent, rules: [Regel] }
// Regel:      label      Überschrift der Regelkarte
//             card       Formel auf der Regelkarte (TeX)
//             title      Titel im Detail-Dialog (optional, sonst label)
//             formula    große Formel im Detail (TeX, Display-Modus)
//             condition  optionale Bedingung unter der Formel (Text, z. B. "für $a \neq 0$")
//             inWords    die Regel in einem einfachen Satz (Text)
//             steps      optionale Schrittfolge (Text)
//             whyLabel   optionale Überschrift statt "Warum?"
//             why        Begründung (Text)
//             derivation optionale Herleitung (TeX, Display-Modus, z. B. aligned)
//             examples   Beispiele: TeX-String oder { tex, note, ok }
//                        note = kurzer Text dahinter, ok = true/false färbt ihn grün/rot
//             mistakes   optionale typische Fehler: { wrong, right, note } (wrong/right = TeX)
var GRUNDLAGEN = {
  sections: [
    // ================================================================ Rechenregeln
    {
      id: "rechenregeln", title: "Rechenregeln", accent: "blue",
      rules: [
        {
          label: "Punkt vor Strich", card: "3 + 4 \\cdot 2 = 11",
          formula: "\\cdot \\;\\text{und}\\; \\div \\quad\\text{vor}\\quad + \\;\\text{und}\\; -",
          inWords: "Mal und Geteilt rechnest du vor Plus und Minus.",
          why: "Mal und Geteilt heißen Punktrechnung (wegen der Zeichen $\\cdot$ und $\\div$), Plus und Minus heißen Strichrechnung. " +
               "Die Punktrechnung bindet stärker. Stell dir eine unsichtbare Klammer um $4 \\cdot 2$ vor: $3 + (4 \\cdot 2)$.",
          examples: ["3 + 4 \\cdot 2 = 3 + 8 = 11", "10 - 6 \\div 2 = 10 - 3 = 7"],
          mistakes: [
            { wrong: "3 + 4 \\cdot 2 = 7 \\cdot 2 = 14", right: "3 + 4 \\cdot 2 = 3 + 8 = 11", note: "Nicht einfach von links nach rechts rechnen." }
          ]
        },
        {
          label: "Klammern zuerst", card: "(3 + 4) \\cdot 2 = 14",
          title: "Rechenreihenfolge",
          formula: "\\text{Klammern} \\;\\to\\; \\text{Potenzen} \\;\\to\\; \\cdot,\\ \\div \\;\\to\\; +,\\ -",
          inWords: "Erst Klammern, dann Potenzen, dann Punkt vor Strich. Was gleichrangig ist, rechnest du von links nach rechts.",
          why: "Klammern zeigen, was zusammengehört. Deshalb kommen sie immer zuerst. " +
               "Eine Potenz ist eine Kurzschrift für Malnehmen ($2^2 = 2 \\cdot 2$), darum wird sie vor dem übrigen Mal und Geteilt ausgerechnet.",
          examples: [
            "(3 + 4) \\cdot 2 = 7 \\cdot 2 = 14",
            "2 \\cdot (5 - 3)^2 = 2 \\cdot 2^2 = 2 \\cdot 4 = 8",
            { tex: "12 \\div 4 \\cdot 3 = 3 \\cdot 3 = 9", note: "von links nach rechts" }
          ],
          mistakes: [
            { wrong: "12 \\div 4 \\cdot 3 = 12 \\div 12 = 1", right: "12 \\div 4 \\cdot 3 = 3 \\cdot 3 = 9", note: "Mal und Geteilt sind gleichrangig: von links nach rechts." }
          ]
        },
        {
          label: "Vorzeichen", card: "(-3) \\cdot (-4) = +12",
          formula: "(-) \\cdot (-) = (+) \\qquad (-) \\cdot (+) = (-)",
          inWords: "Gleiche Vorzeichen ergeben Plus, verschiedene Vorzeichen ergeben Minus. Das gilt beim Malnehmen und beim Teilen.",
          why: "Ein Minus vor einer Zahl bedeutet „das Gegenteil davon“. Das Gegenteil vom Gegenteil ist wieder das Original. " +
               "Darum wird aus zwei Minus ein Plus: $-(-8) = +8$. Genauso beim Malnehmen: $(-3) \\cdot (-4)$ ist das Gegenteil von $3 \\cdot (-4) = -12$, also $+12$.",
          examples: ["(-3) \\cdot (-4) = +12", "(-5) \\cdot 3 = -15", "(-12) \\div (-3) = +4", "-(-8) = +8"],
          mistakes: [
            { wrong: "-3^2 = 9", right: "-3^2 = -(3 \\cdot 3) = -9", note: "Ohne Klammer gehört das Minus nicht zur Potenz. Nur $(-3)^2 = 9$." }
          ]
        },
        {
          label: "Division durch 0", card: "5 \\div 0 \\;\\text{geht nicht}",
          formula: "a \\div 0 \\;\\;\\text{ist nicht definiert}",
          inWords: "Durch 0 kann man nicht teilen.",
          why: "Teilen ist die Umkehrung von Malnehmen: $12 \\div 3 = 4$, weil $4 \\cdot 3 = 12$. " +
               "Für $5 \\div 0$ bräuchtest du eine Zahl, die mal 0 genau 5 ergibt. Die gibt es nicht, denn alles mal 0 ergibt 0.",
          examples: [
            { tex: "5 \\div 0", note: "✗ nicht definiert: keine Zahl passt", ok: false },
            { tex: "0 \\div 5 = 0", note: "✓ erlaubt, denn $0 \\cdot 5 = 0$", ok: true },
            { tex: "0 \\div 0", note: "✗ nicht definiert: hier würde jede Zahl passen, es gibt kein eindeutiges Ergebnis", ok: false }
          ],
          mistakes: [
            { wrong: "5 \\div 0 = 0", right: "5 \\div 0 \\;\\text{ist nicht definiert}", note: "0 ist nicht das Ergebnis. Es gibt gar kein Ergebnis." }
          ]
        }
      ]
    },

    // ================================================================ Brüche
    {
      id: "brueche", title: "Brüche", accent: "green",
      rules: [
        {
          label: "Erweitern und Kürzen", card: "\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}",
          title: "Brüche erweitern und kürzen",
          formula: "\\frac{a}{b} = \\frac{a \\cdot k}{b \\cdot k}",
          condition: "für $b \\neq 0$ und $k \\neq 0$",
          inWords: "Zähler und Nenner mit derselben Zahl malnehmen heißt erweitern. Durch dieselbe Zahl teilen heißt kürzen. Der Wert des Bruchs bleibt dabei gleich.",
          why: "Schneidest du einen Kuchen in 2 Stücke und nimmst 1, oder in 4 Stücke und nimmst 2, hast du gleich viel: $\\frac{1}{2} = \\frac{2}{4}$. " +
               "Es sind doppelt so viele Stücke, aber jedes ist halb so groß. " +
               "Am schnellsten kürzt du mit dem größten gemeinsamen Teiler (ggT). Du kannst aber auch in mehreren kleinen Schritten kürzen.",
          examples: [
            { tex: "\\frac{3}{4} = \\frac{3 \\cdot 5}{4 \\cdot 5} = \\frac{15}{20}", note: "erweitert mit 5" },
            { tex: "\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}", note: "gekürzt mit dem ggT 6" },
            { tex: "\\frac{12}{18} = \\frac{6}{9} = \\frac{2}{3}", note: "in zwei Schritten: erst durch 2, dann durch 3" }
          ],
          mistakes: [
            { wrong: "\\frac{2 + 3}{2} = 3", right: "\\frac{2 + 3}{2} = \\frac{5}{2}", note: "Kürzen darfst du nur gemeinsame Faktoren, also wenn Zähler und Nenner Produkte sind. Einzelne Summanden darfst du nicht kürzen." }
          ]
        },
        {
          label: "Addieren / Subtrahieren", card: "\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}",
          title: "Brüche addieren und subtrahieren",
          formula: "\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}",
          condition: "nur bei gleichem Nenner, $c \\neq 0$",
          inWords: "Bei gleichem Nenner addierst du nur die Zähler, der Nenner bleibt. Sind die Nenner verschieden, bringst du die Brüche zuerst auf einen gemeinsamen Nenner.",
          steps: [
            "Einen gemeinsamen Nenner suchen. Am besten das kleinste gemeinsame Vielfache (kgV) der Nenner.",
            "Beide Brüche auf diesen Nenner erweitern.",
            "Die Zähler addieren bzw. subtrahieren. Der Nenner bleibt.",
            "Das Ergebnis kürzen, wenn es geht."
          ],
          whyLabel: "Warum ein gemeinsamer Nenner?",
          why: "Der Nenner sagt, wie groß die Stücke sind. Drittel und Sechstel sind verschieden groß, die kannst du nicht einfach zusammenzählen. " +
               "Erst wenn beide Brüche gleich große Stücke haben, zählst du die Stücke zusammen: $\\frac{1}{3} = \\frac{2}{6}$, also $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}$.",
          examples: [
            { tex: "\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}", note: "$\\kgV(3, 6) = 6$" },
            { tex: "\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}", note: "$\\kgV(2, 3) = 6$" },
            "\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}"
          ],
          mistakes: [
            { wrong: "\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}", right: "\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}", note: "Die Nenner werden nie addiert." }
          ]
        },
        {
          label: "Multiplizieren", card: "\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{1}{2}",
          title: "Brüche multiplizieren",
          formula: "\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}",
          condition: "für $b, d \\neq 0$",
          inWords: "Zähler mal Zähler, Nenner mal Nenner. Einen gemeinsamen Nenner brauchst du hier nicht.",
          why: "Mal einem Bruch heißt „davon“: $\\frac{1}{2} \\cdot \\frac{1}{3}$ ist die Hälfte von einem Drittel, also ein Sechstel. " +
               "Tipp: Kürze schon vor dem Ausrechnen, dann bleiben die Zahlen klein.",
          examples: [
            "\\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{6}",
            "\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}",
            { tex: "3 \\cdot \\frac{2}{5} = \\frac{3}{1} \\cdot \\frac{2}{5} = \\frac{6}{5}", note: "eine ganze Zahl ist ein Bruch mit Nenner 1" }
          ],
          mistakes: [
            { wrong: "3 \\cdot \\frac{2}{5} = \\frac{6}{15}", right: "3 \\cdot \\frac{2}{5} = \\frac{6}{5}", note: "Die ganze Zahl nimmst du nur mit dem Zähler mal." }
          ]
        },
        {
          label: "Dividieren", card: "\\frac{3}{4} \\div \\frac{3}{8} = 2",
          title: "Brüche dividieren",
          formula: "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}",
          condition: "für $b, c, d \\neq 0$",
          inWords: "Durch einen Bruch teilst du, indem du mit seinem Kehrwert malnimmst. Für den Kehrwert vertauschst du Zähler und Nenner.",
          why: "Teilen fragt: Wie oft passt das hinein? $\\frac{3}{4} \\div \\frac{3}{8}$ fragt, wie oft drei Achtel in drei Viertel passen. " +
               "Drei Viertel sind sechs Achtel, also passt es 2-mal. Mit dem Kehrwert kommst du ohne Nachdenken auf dasselbe Ergebnis.",
          examples: [
            "\\frac{3}{4} \\div \\frac{3}{8} = \\frac{3}{4} \\cdot \\frac{8}{3} = \\frac{24}{12} = 2",
            "\\frac{1}{4} \\div \\frac{1}{2} = \\frac{1}{4} \\cdot \\frac{2}{1} = \\frac{2}{4} = \\frac{1}{2}",
            { tex: "\\frac{2}{3} \\div 4 = \\frac{2}{3} \\cdot \\frac{1}{4} = \\frac{2}{12} = \\frac{1}{6}", note: "der Kehrwert von 4 ist $\\frac{1}{4}$" }
          ],
          mistakes: [
            { wrong: "\\frac{3}{4} \\div \\frac{3}{8} = \\frac{4}{3} \\cdot \\frac{3}{8}", right: "\\frac{3}{4} \\div \\frac{3}{8} = \\frac{3}{4} \\cdot \\frac{8}{3}", note: "Nur den zweiten Bruch umdrehen." }
          ]
        }
      ]
    },

    // ================================================================ Potenzen
    {
      id: "potenzen", title: "Potenzen", accent: "amber",
      rules: [
        {
          label: "Was ist eine Potenz?", card: "2^3 = 2 \\cdot 2 \\cdot 2 = 8",
          title: "Potenzen – die Grundidee",
          formula: "a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n\\ \\text{Faktoren}}",
          condition: "für $n = 1, 2, 3, \\ldots$",
          inWords: "Die Basis $a$ steht $n$-mal als Faktor da. Der Exponent $n$ (die Hochzahl) sagt, wie viele Faktoren es sind.",
          whyLabel: "Wozu?",
          why: "Potenzen sind eine Kurzschrift für Malnehmen mit lauter gleichen Zahlen, so wie Malnehmen eine Kurzschrift für Plus ist: " +
               "$2 + 2 + 2 = 3 \\cdot 2$, aber $2 \\cdot 2 \\cdot 2 = 2^3$. Man liest „2 hoch 3“.",
          examples: [
            "2^3 = 2 \\cdot 2 \\cdot 2 = 8",
            { tex: "5^2 = 5 \\cdot 5 = 25", note: "„5 hoch 2“ oder „5 zum Quadrat“" },
            { tex: "10^4 = 10\\,000", note: "Exponent = Anzahl der Nullen" },
            "(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8"
          ],
          mistakes: [
            { wrong: "2^3 = 2 \\cdot 3 = 6", right: "2^3 = 2 \\cdot 2 \\cdot 2 = 8", note: "Der Exponent ist kein Faktor, er zählt die Faktoren." }
          ]
        },
        {
          label: "Gleiche Basis – multiplizieren", card: "a^m \\cdot a^n = a^{m+n}",
          formula: "a^m \\cdot a^n = a^{m+n}",
          inWords: "Bei gleicher Basis werden die Exponenten addiert. Die Basis bleibt.",
          why: "Du zählst die Faktoren zusammen: $m$ Stück und $n$ Stück ergeben $m + n$ Stück.",
          derivation: "2^3 \\cdot 2^2 = \\underbrace{(2 \\cdot 2 \\cdot 2)}_{3} \\cdot \\underbrace{(2 \\cdot 2)}_{2} = 2^5",
          examples: [
            "2^3 \\cdot 2^2 = 2^{3+2} = 2^5 = 32",
            "x^4 \\cdot x^3 = x^7",
            { tex: "a \\cdot a^2 = a^1 \\cdot a^2 = a^3", note: "$a$ allein ist $a^1$" }
          ],
          mistakes: [
            { wrong: "2^3 \\cdot 2^2 = 4^5", right: "2^3 \\cdot 2^2 = 2^5", note: "Die Basis bleibt gleich. Nur die Exponenten werden addiert." },
            { wrong: "2^3 + 2^2 = 2^5", right: "2^3 + 2^2 = 8 + 4 = 12", note: "Die Potenzgesetze gelten nur für Mal und Geteilt, nicht für Plus und Minus." }
          ]
        },
        {
          label: "Gleiche Basis – dividieren", card: "a^m \\div a^n = a^{m-n}",
          formula: "a^m \\div a^n = a^{m-n}",
          condition: "für $a \\neq 0$",
          inWords: "Bei gleicher Basis werden die Exponenten subtrahiert. Die Basis bleibt.",
          why: "Schreib es als Bruch: Oben und unten kürzen sich $n$ Faktoren weg, übrig bleiben $m - n$.",
          derivation: "3^5 \\div 3^2 = \\frac{3 \\cdot 3 \\cdot 3 \\cdot \\cancel{3} \\cdot \\cancel{3}}{\\cancel{3} \\cdot \\cancel{3}} = 3^3",
          examples: [
            "3^5 \\div 3^2 = 3^{5-2} = 3^3 = 27",
            "x^7 \\div x^3 = x^4",
            { tex: "2^2 \\div 2^5 = 2^{2-5} = 2^{-3}", note: "Ist der zweite Exponent größer, wird der Exponent negativ (siehe „Negativer Exponent“)." }
          ],
          mistakes: [
            { wrong: "3^6 \\div 3^2 = 3^3", right: "3^6 \\div 3^2 = 3^{6-2} = 3^4", note: "Die Exponenten werden subtrahiert, nicht geteilt." }
          ]
        },
        {
          label: "Potenz einer Potenz", card: "(a^m)^n = a^{m \\cdot n}",
          formula: "(a^m)^n = a^{m \\cdot n}",
          inWords: "Wird eine Potenz noch einmal potenziert, werden die Exponenten malgenommen.",
          why: "$(2^3)^2 = 2^3 \\cdot 2^3$, also steht $2^3$ zweimal als Faktor da. Das sind 2 Gruppen mit je 3 Faktoren, zusammen $2 \\cdot 3 = 6$ Faktoren.",
          derivation: "(2^3)^2 = 2^3 \\cdot 2^3 = 2^{3+3} = 2^6",
          examples: ["(2^3)^2 = 2^{3 \\cdot 2} = 2^6 = 64", "(x^2)^5 = x^{10}"],
          mistakes: [
            { wrong: "(2^3)^2 = 2^5", right: "(2^3)^2 = 2^{3 \\cdot 2} = 2^6", note: "Hier wird malgenommen. Addiert wird nur bei $a^m \\cdot a^n$." }
          ]
        },
        {
          label: "Negativer Exponent", card: "a^{-n} = \\frac{1}{a^n}",
          formula: "a^{-n} = \\frac{1}{a^n}",
          condition: "für $a \\neq 0$",
          inWords: "Ein Minus im Exponenten heißt: Kehrwert. Die Potenz wandert in den Nenner.",
          why: "Schau auf das Muster: Mit jedem Schritt nach rechts wird der Exponent um 1 kleiner und das Ergebnis durch 2 geteilt. " +
               "Genauso geht es auch unter 0 weiter.",
          derivation: "\\begin{array}{c|c|c|c|c|c} 2^3 & 2^2 & 2^1 & 2^0 & 2^{-1} & 2^{-2} \\\\ \\hline 8 & 4 & 2 & 1 & \\dfrac{1}{2} & \\dfrac{1}{4} \\end{array}",
          examples: [
            "2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} = 0{,}125",
            "10^{-2} = \\frac{1}{10^2} = 0{,}01",
            { tex: "\\left(\\frac{2}{3}\\right)^{-1} = \\frac{3}{2}", note: "bei einem Bruch: umdrehen" }
          ],
          mistakes: [
            { wrong: "2^{-3} = -8", right: "2^{-3} = \\frac{1}{8}", note: "Ein negativer Exponent macht das Ergebnis nicht negativ." }
          ]
        },
        {
          label: "Exponent 0", card: "a^0 = 1",
          formula: "a^0 = 1",
          condition: "für $a \\neq 0$",
          inWords: "Jede Zahl außer 0 hoch 0 ergibt 1.",
          why: "Im Muster bei „Negativer Exponent“ kommt nach $2^1 = 2$ genau $2^0 = 1$. " +
               "Oder so: $a^3 \\div a^3 = 1$, denn eine Zahl durch sich selbst ergibt 1. Nach dem Gesetz ist $a^3 \\div a^3 = a^{3-3} = a^0$. " +
               "$0^0$ gilt in der Schule als nicht definiert.",
          examples: ["7^0 = 1", "(-3)^0 = 1", "100^0 = 1"],
          mistakes: [
            { wrong: "5^0 = 0", right: "5^0 = 1", note: "Hoch 0 ergibt 1, nicht 0." }
          ]
        },
        {
          label: "Gleicher Exponent", card: "a^n \\cdot b^n = (a \\cdot b)^n",
          formula: "a^n \\cdot b^n = (a \\cdot b)^n",
          inWords: "Bei gleichem Exponenten nimmst du die Basen mal. Beim Teilen genauso: $a^n \\div b^n = (a \\div b)^n$ (für $b \\neq 0$).",
          why: "Beim Malnehmen darfst du die Faktoren umsortieren und je eine 2 mit einer 3 zusammenfassen.",
          derivation: "\\begin{aligned} 2^3 \\cdot 3^3 &= 2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3 \\cdot 3 \\\\ &= (2 \\cdot 3) \\cdot (2 \\cdot 3) \\cdot (2 \\cdot 3) \\\\ &= 6^3 \\end{aligned}",
          examples: [
            "2^3 \\cdot 3^3 = (2 \\cdot 3)^3 = 6^3 = 216",
            "4^2 \\cdot 5^2 = (4 \\cdot 5)^2 = 20^2 = 400",
            "10^3 \\div 5^3 = (10 \\div 5)^3 = 2^3 = 8"
          ],
          mistakes: [
            { wrong: "2^3 \\cdot 3^2 = 6^5", right: "2^3 \\cdot 3^2 = 8 \\cdot 9 = 72", note: "Weder Basis noch Exponent sind gleich. Hier hilft kein Gesetz, nur Ausrechnen." }
          ]
        }
      ]
    },

    // ================================================================ Wurzeln
    {
      id: "wurzeln", title: "Wurzeln", accent: "purple",
      rules: [
        {
          label: "Was ist eine Wurzel?", card: "\\sqrt{9} = 3, \\;\\text{denn}\\; 3^2 = 9",
          title: "Wurzeln – die Grundidee",
          formula: "\\sqrt{a} = b \\quad\\text{bedeutet}\\quad b^2 = a \\;\\text{und}\\; b \\geq 0",
          condition: "für $a \\geq 0$",
          inWords: "Die Wurzel aus $a$ ist die nicht negative Zahl, die mit sich selbst malgenommen $a$ ergibt. Wurzelziehen ist die Umkehrung vom Quadrieren.",
          whyLabel: "Gut zu wissen",
          why: "Aus negativen Zahlen kannst du keine Quadratwurzel ziehen, denn jede Zahl mal sich selbst ist positiv oder 0. " +
               "Die Wurzel selbst ist nie negativ, auch wenn $(-3)^2 = 9$ ist. " +
               "Andere Wurzeln gehen genauso: Die 3. Wurzel $\\sqrt[3]{8} = 2$, denn $2^3 = 8$. Die kleine Zahl heißt Wurzelexponent. " +
               "In der Schule ziehst du Wurzeln nur aus Zahlen $\\geq 0$.",
          examples: [
            { tex: "\\sqrt{9} = 3", note: "denn $3^2 = 9$" },
            { tex: "\\sqrt{144} = 12", note: "denn $12^2 = 144$" },
            { tex: "\\sqrt{0} = 0", note: "denn $0^2 = 0$" },
            { tex: "\\sqrt[3]{8} = 2", note: "denn $2^3 = 8$" }
          ],
          mistakes: [
            { wrong: "\\sqrt{9} = \\pm 3", right: "\\sqrt{9} = 3", note: "Die Wurzel ist nie negativ. Das $\\pm$ gibt es erst beim Lösen von $x^2 = 9$: $x = 3$ oder $x = -3$." },
            { wrong: "\\sqrt{-4} = -2", right: "\\sqrt{-4} \\;\\text{gibt es nicht}", note: "$(-2)^2 = 4$, nicht $-4$." }
          ]
        },
        {
          label: "Multiplizieren", card: "\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}",
          title: "Wurzeln multiplizieren",
          formula: "\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}",
          condition: "für $a, b \\geq 0$",
          inWords: "Zwei Wurzeln malnehmen heißt: einmal die Wurzel aus dem Produkt ziehen. Das geht in beide Richtungen.",
          whyLabel: "Wozu?",
          why: "Von links nach rechts fasst du Wurzeln zusammen. Von rechts nach links vereinfachst du eine Wurzel: " +
               "Suche die größte Quadratzahl, durch die die Zahl teilbar ist, und zieh sie heraus. " +
               "Für andere Wurzeln gilt dasselbe, wenn der Wurzelexponent gleich ist: $\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{a \\cdot b}$.",
          examples: [
            "\\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{16} = 4",
            { tex: "\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}", note: "vereinfacht" },
            { tex: "\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}", note: "vereinfacht" },
            "\\sqrt[3]{4} \\cdot \\sqrt[3]{2} = \\sqrt[3]{8} = 2"
          ],
          mistakes: [
            { wrong: "\\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16} = 7", right: "\\sqrt{9 + 16} = \\sqrt{25} = 5", note: "Aufteilen darfst du die Wurzel nur bei Mal, nie bei Plus oder Minus." }
          ]
        },
        {
          label: "Dividieren", card: "\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}",
          title: "Wurzeln dividieren",
          formula: "\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}",
          condition: "für $a \\geq 0$ und $b > 0$",
          inWords: "Zwei Wurzeln teilen heißt: einmal die Wurzel aus dem Quotienten ziehen. Auch das geht in beide Richtungen.",
          whyLabel: "Wozu?",
          why: "Es ist dieselbe Regel wie beim Malnehmen, nur mit Geteilt. Praktisch bei Brüchen: Wurzel aus dem Zähler durch Wurzel aus dem Nenner. " +
               "Auch hier gilt sie für jede Wurzel mit gleichem Wurzelexponenten.",
          examples: [
            "\\sqrt{\\frac{9}{4}} = \\frac{\\sqrt{9}}{\\sqrt{4}} = \\frac{3}{2}",
            "\\sqrt{\\frac{16}{25}} = \\frac{4}{5} = 0{,}8",
            "\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5",
            "\\frac{\\sqrt[3]{54}}{\\sqrt[3]{2}} = \\sqrt[3]{27} = 3"
          ],
          mistakes: [
            { wrong: "\\sqrt{\\frac{9}{4}} = \\frac{9}{2}", right: "\\sqrt{\\frac{9}{4}} = \\frac{3}{2}", note: "Die Wurzel gilt für Zähler und Nenner." }
          ]
        },
        {
          label: "Wurzel potenzieren", card: "\\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}",
          formula: "\\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}",
          condition: "für $a \\geq 0$",
          inWords: "Ob du erst die Wurzel ziehst oder erst potenzierst, ist egal. Das Ergebnis ist gleich.",
          why: "Das folgt aus dem Multiplizieren: $\\left(\\sqrt{5}\\right)^2 = \\sqrt{5} \\cdot \\sqrt{5} = \\sqrt{5 \\cdot 5} = \\sqrt{5^2}$. " +
               "Wähle die Reihenfolge, bei der die Zahlen kleiner bleiben.",
          examples: [
            "\\left(\\sqrt{5}\\right)^2 = 5",
            { tex: "\\sqrt[3]{8^2} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4", note: "erst die Wurzel: kleinere Zahlen" },
            "\\left(\\sqrt[3]{2}\\right)^6 = \\sqrt[3]{2^6} = \\sqrt[3]{64} = 4"
          ]
        },
        {
          label: "Wurzel aus einer Wurzel", card: "\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m \\cdot n]{a}",
          formula: "\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m \\cdot n]{a}",
          condition: "für $a \\geq 0$",
          inWords: "Ziehst du aus einer Wurzel noch einmal die Wurzel, werden die Wurzelexponenten malgenommen.",
          why: "Die Quadratwurzel hat den unsichtbaren Wurzelexponenten 2: $\\sqrt{a} = \\sqrt[2]{a}$. " +
               "Zweimal hintereinander die Quadratwurzel ist also die 4. Wurzel.",
          examples: [
            { tex: "\\sqrt{\\sqrt{81}} = \\sqrt[4]{81} = 3", note: "Probe: $\\sqrt{81} = 9$ und $\\sqrt{9} = 3$" },
            { tex: "\\sqrt[3]{\\sqrt{64}} = \\sqrt[6]{64} = 2", note: "Probe: $\\sqrt{64} = 8$ und $\\sqrt[3]{8} = 2$" }
          ]
        },
        {
          label: "Wurzel als Potenz", card: "\\sqrt[n]{a^m} = a^{\\frac{m}{n}}",
          formula: "\\sqrt[n]{a^m} = a^{\\frac{m}{n}}",
          condition: "für $a \\geq 0$",
          inWords: "Der Wurzelexponent kommt in den Nenner, der Exponent unter der Wurzel in den Zähler.",
          why: "Mit dieser Schreibweise gelten für Wurzeln einfach die Potenzgesetze. " +
               "Warum ist $\\sqrt{a} = a^{\\frac{1}{2}}$? Nach dem Gesetz für gleiche Basis ist $a^{\\frac{1}{2}} \\cdot a^{\\frac{1}{2}} = a^{\\frac{1}{2} + \\frac{1}{2}} = a^1 = a$. " +
               "Genau das macht die Wurzel: mit sich selbst malgenommen ergibt sie $a$.",
          examples: [
            "\\sqrt{a} = a^{\\frac{1}{2}}",
            "\\sqrt[3]{a} = a^{\\frac{1}{3}}",
            "\\sqrt[3]{8^2} = 8^{\\frac{2}{3}} = \\left(8^{\\frac{1}{3}}\\right)^2 = 2^2 = 4",
            "\\sqrt[4]{16^3} = 16^{\\frac{3}{4}} = \\left(16^{\\frac{1}{4}}\\right)^3 = 2^3 = 8"
          ],
          mistakes: [
            { wrong: "\\sqrt[3]{a^2} = a^{\\frac{3}{2}}", right: "\\sqrt[3]{a^2} = a^{\\frac{2}{3}}", note: "Der Wurzelexponent gehört in den Nenner." }
          ]
        }
      ]
    },

    // ================================================================ Binomische Formeln
    {
      id: "binom", title: "Binomische Formeln", accent: "red",
      rules: [
        {
          label: "1. Formel – Plus", card: "(a + b)^2 = a^2 + 2ab + b^2",
          title: "1. binomische Formel",
          formula: "(a + b)^2 = a^2 + 2ab + b^2",
          inWords: "Quadrat des ersten Glieds, plus doppeltes Produkt, plus Quadrat des zweiten Glieds.",
          why: "$(a + b)^2$ heißt $(a + b) \\cdot (a + b)$. Multiplizierst du jedes Glied mit jedem, kommt $ab$ zweimal vor.",
          derivation: "\\begin{aligned} (a + b)^2 &= (a + b)(a + b) \\\\ &= a^2 + ab + ab + b^2 \\\\ &= a^2 + 2ab + b^2 \\end{aligned}",
          examples: [
            "(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9",
            { tex: "(2x + 1)^2 = 4x^2 + 4x + 1", note: "mit $a = 2x$: $(2x)^2 = 4x^2$" },
            { tex: "(2 + 5)^2 = 4 + 20 + 25 = 49", note: "Probe: $7^2 = 49$ ✓" }
          ],
          mistakes: [
            { wrong: "(x + 3)^2 = x^2 + 9", right: "(x + 3)^2 = x^2 + 6x + 9", note: "Der mittlere Term $2ab$ wird oft vergessen." }
          ]
        },
        {
          label: "2. Formel – Minus", card: "(a - b)^2 = a^2 - 2ab + b^2",
          title: "2. binomische Formel",
          formula: "(a - b)^2 = a^2 - 2ab + b^2",
          inWords: "Wie die 1. Formel, nur ist der mittlere Term negativ. Das letzte Glied bleibt positiv.",
          why: "Rechne wie bei der 1. Formel, nur mit $-b$ statt $+b$. Dann wird $ab$ zweimal abgezogen. " +
               "$b^2$ bleibt positiv, weil Minus mal Minus Plus ergibt.",
          derivation: "\\begin{aligned} (a - b)^2 &= (a - b)(a - b) \\\\ &= a^2 - ab - ab + b^2 \\\\ &= a^2 - 2ab + b^2 \\end{aligned}",
          examples: [
            "(x - 4)^2 = x^2 - 8x + 16",
            { tex: "(5 - 2)^2 = 25 - 20 + 4 = 9", note: "Probe: $3^2 = 9$ ✓" }
          ],
          mistakes: [
            { wrong: "(a - b)^2 = a^2 - b^2", right: "(a - b)^2 = a^2 - 2ab + b^2", note: "Der mittlere Term fehlt." },
            { wrong: "(x - 4)^2 = x^2 - 8x - 16", right: "(x - 4)^2 = x^2 - 8x + 16", note: "Das letzte Glied ist immer positiv." }
          ]
        },
        {
          label: "3. Formel – Summe · Differenz", card: "(a + b)(a - b) = a^2 - b^2",
          title: "3. binomische Formel",
          formula: "(a + b)(a - b) = a^2 - b^2",
          inWords: "Summe mal Differenz derselben zwei Zahlen ergibt die Differenz ihrer Quadrate.",
          why: "Beim Ausmultiplizieren kommt einmal $-ab$ und einmal $+ab$ vor. Die heben sich gegenseitig auf.",
          derivation: "\\begin{aligned} (a + b)(a - b) &= a^2 - ab + ab - b^2 \\\\ &= a^2 - b^2 \\end{aligned}",
          examples: [
            "(x + 5)(x - 5) = x^2 - 25",
            { tex: "(3 + 2)(3 - 2) = 9 - 4 = 5", note: "Probe: $5 \\cdot 1 = 5$ ✓" },
            { tex: "21 \\cdot 19 = (20 + 1)(20 - 1) = 400 - 1 = 399", note: "Trick zum Kopfrechnen" }
          ],
          mistakes: [
            { wrong: "(x + 5)(x - 5) = x^2 + 25", right: "(x + 5)(x - 5) = x^2 - 25", note: "Es bleibt ein Minus übrig: $5 \\cdot (-5) = -25$." }
          ]
        },
        {
          label: "Rückwärts: faktorisieren", card: "x^2 - 25 = (x + 5)(x - 5)",
          title: "Binomische Formeln rückwärts",
          formula: "\\begin{aligned} a^2 + 2ab + b^2 &= (a + b)^2 \\\\ a^2 - 2ab + b^2 &= (a - b)^2 \\\\ a^2 - b^2 &= (a + b)(a - b) \\end{aligned}",
          inWords: "Du verwandelst eine Summe in ein Produkt. Das nennt man faktorisieren.",
          steps: [
            "Sind das erste und das letzte Glied Quadrate? Dann bestimme $a$ und $b$ (die Wurzeln daraus).",
            "Gibt es nur diese zwei Glieder mit Minus dazwischen? Dann ist es die 3. Formel.",
            "Sonst prüfe das mittlere Glied: Ist es $2 \\cdot a \\cdot b$? Bei Plus ist es die 1. Formel, bei Minus die 2. Formel.",
            "Passt das mittlere Glied nicht, geht es mit den binomischen Formeln nicht."
          ],
          whyLabel: "Wozu?",
          why: "Mit Produkten lässt sich oft leichter weiterrechnen als mit Summen. Damit kannst du zum Beispiel Brüche kürzen und Gleichungen lösen.",
          examples: [
            { tex: "x^2 + 6x + 9 = (x + 3)^2", note: "$a = x$, $b = 3$, $2 \\cdot x \\cdot 3 = 6x$ ✓" },
            { tex: "4x^2 - 12x + 9 = (2x - 3)^2", note: "$a = 2x$, $b = 3$, $2 \\cdot 2x \\cdot 3 = 12x$ ✓" },
            { tex: "x^2 - 16 = (x + 4)(x - 4)", note: "$a = x$, $b = 4$" }
          ],
          mistakes: [
            { wrong: "x^2 + 16 = (x + 4)(x - 4)", right: "x^2 + 16 \\;\\text{lässt sich so nicht zerlegen}", note: "Die 3. Formel braucht ein Minus zwischen den Quadraten." }
          ]
        }
      ]
    }
  ],

  // Lernkarten in der Seitenleiste. section = Akzentfarbe des Abschnitts (oder accent direkt).
  // items: { label, tex } oder { label, text }
  cards: [
    {
      front: "Rechenreihenfolge", section: "rechenregeln", ordered: true,
      intro: "In dieser Reihenfolge rechnest du:",
      items: [
        { label: "Klammern zuerst", tex: "(3 + 4) \\cdot 2 = 14" },
        { label: "Potenzen", tex: "2 + 3^2 = 2 + 9 = 11" },
        { label: "Punkt vor Strich", tex: "3 + 4 \\cdot 2 = 11" },
        { label: "Gleichrangiges von links nach rechts", tex: "12 \\div 4 \\cdot 3 = 9" }
      ]
    },
    {
      front: "Vorzeichen", section: "rechenregeln", accent: "cyan",
      items: [
        { label: "Minus mal Minus ergibt Plus", tex: "(-3) \\cdot (-4) = +12" },
        { label: "Minus mal Plus ergibt Minus", tex: "(-5) \\cdot 3 = -15" },
        { label: "Beim Teilen genauso", tex: "(-12) \\div (-3) = +4" },
        { label: "Doppeltes Minus", tex: "-(-a) = +a" },
        { label: "Vorsicht bei Potenzen", tex: "-3^2 = -9 \\qquad (-3)^2 = 9" },
        { label: "Durch 0 teilen", text: "geht nicht" }
      ]
    },
    {
      front: "Brüche", section: "brueche",
      items: [
        { label: "Erweitern und Kürzen: oben und unten gleich", tex: "\\frac{12}{18} = \\frac{2}{3}" },
        { label: "Addieren: erst gemeinsamer Nenner", tex: "\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{1}{2}" },
        { label: "Multiplizieren: Zähler mal Zähler, Nenner mal Nenner", tex: "\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}" },
        { label: "Dividieren: mal Kehrwert", tex: "\\frac{3}{4} \\div \\frac{3}{8} = \\frac{3}{4} \\cdot \\frac{8}{3} = 2" }
      ]
    },
    {
      front: "Potenzgesetze", section: "potenzen",
      items: [
        { label: "Gleiche Basis malnehmen", tex: "a^m \\cdot a^n = a^{m+n}" },
        { label: "Gleiche Basis teilen", tex: "a^m \\div a^n = a^{m-n}" },
        { label: "Potenz einer Potenz", tex: "(a^m)^n = a^{m \\cdot n}" },
        { label: "Gleicher Exponent", tex: "a^n \\cdot b^n = (a \\cdot b)^n" },
        { label: "Exponent 0 und negativer Exponent", tex: "a^0 = 1 \\qquad a^{-n} = \\frac{1}{a^n}" },
        { label: "Achtung", text: "Für Plus und Minus gibt es keine Potenzgesetze." }
      ]
    },
    {
      front: "Wurzeln", section: "wurzeln",
      items: [
        { label: "Grundidee", tex: "\\sqrt{9} = 3, \\;\\text{denn}\\; 3^2 = 9" },
        { label: "Multiplizieren", tex: "\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}" },
        { label: "Dividieren", tex: "\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}" },
        { label: "Wurzel als Potenz", tex: "\\sqrt[n]{a^m} = a^{\\frac{m}{n}}" },
        { label: "Achtung: bei Plus nicht aufteilen", tex: "\\sqrt{9 + 16} = 5, \\;\\text{nicht}\\; \\sqrt{9} + \\sqrt{16} = 7" }
      ]
    },
    {
      front: "Binomische Formeln", section: "binom", explainBtn: "binomische-formeln",
      items: [
        { label: "1. Formel", tex: "(a + b)^2 = a^2 + 2ab + b^2" },
        { label: "2. Formel", tex: "(a - b)^2 = a^2 - 2ab + b^2" },
        { label: "3. Formel", tex: "(a + b)(a - b) = a^2 - b^2" },
        { label: "Rückwärts (faktorisieren)", tex: "x^2 + 6x + 9 = (x + 3)^2" }
      ]
    }
  ]
};
