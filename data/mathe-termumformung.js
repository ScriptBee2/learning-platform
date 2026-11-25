// Inhalte der Seite "Mathe – Termumformung".
// Alle Formeln sind TeX (KaTeX). In Texten stehen Formeln in $…$. Regeln: DESIGN.md, Abschnitt 7.
//
// Abschnitt:  { id, title, accent, rules: [Regel] }
// Regel:      label, card, title, formula, condition, inWords, steps, whyLabel, why, derivation, examples, mistakes
var TERMUMFORMUNG = {
  sections: [

    // ================================================================ Ausklammern
    {
      id: "ausklammern", title: "Ausklammern", accent: "blue",
      rules: [
        {
          label: "Gemeinsamer Faktor", card: "3x^2 + 6x = 3x(x + 2)",
          title: "Gemeinsamen Faktor ausklammern",
          formula: "a \\cdot b + a \\cdot c = a(b + c)",
          inWords: "Den Faktor, der in allen Summanden vorkommt, schreibst du vor die Klammer. In der Klammer bleibt, was nach dem Kürzen übrig ist.",
          steps: [
            "Den größten gemeinsamen Faktor aller Summanden bestimmen (Zahlen: ggT, Variablen: niedrigste Potenz).",
            "Diesen Faktor vor die Klammer schreiben.",
            "Jeden Summanden durch den Faktor teilen – das ergibt den Klammerinhalt.",
            "Probe: Klammer ausmultiplizieren → muss den Ausgangsterm ergeben."
          ],
          why: "Ausklammern ist das Rückgängigmachen des Distributivgesetzes. Du zerlegst eine Summe in ein Produkt – das hilft beim Kürzen von Brüchen und beim Lösen von Gleichungen.",
          examples: [
            { tex: "6x^3 + 4x^2 = 2x^2(3x + 2)", note: "ggT der Zahlen ist 2, niedrigste Potenz ist $x^2$" },
            { tex: "12a^2b - 8ab^2 = 4ab(3a - 2b)", note: "gemeinsamer Faktor: $4ab$" },
            { tex: "x(x+1) + 3(x+1) = (x+1)(x+3)", note: "gemeinsamer Faktor ist der Klammerausdruck $(x+1)$" }
          ],
          mistakes: [
            { wrong: "6x^2 + 4x = 2x(3x + 4x)", right: "6x^2 + 4x = 2x(3x + 2)", note: "In der Klammer darf kein $x$ mehr stehen – es wurde bereits ausgeklammert." }
          ]
        },
        {
          label: "Negatives Ausklammern", card: "-a^2 + 2a = -a(a - 2)",
          title: "Negatives Ausklammern",
          formula: "-a \\cdot b - a \\cdot c = -a(b + c)",
          inWords: "Manchmal ist es sinnvoll, ein negatives Vorzeichen mit auszuklammern. Beim Ausklammern von $-a$ dreht sich das Vorzeichen aller Summanden im Klammer um.",
          why: "In vielen Brüchen steht im Nenner z. B. $(a - b)$, im Zähler aber $(b - a)$. Dann lässt sich $(b - a) = -(a - b)$ ausklammern und kürzen.",
          examples: [
            { tex: "-x^2 + 3x = -x(x - 3)", note: "Vorzeichen aller Terme dreht sich um" },
            { tex: "-(2a - 4b) = -2(a - 2b)", note: "gemeinsamen negativen Faktor $-2$ ausklammern" },
            { tex: "b - a = -(a - b)", note: "Vorzeichen aller Summanden dreht sich um" }
          ],
          mistakes: [
            { wrong: "-x^2 + 3x = -x(x + 3)", right: "-x^2 + 3x = -x(x - 3)", note: "Jedes Vorzeichen dreht sich um: $+3x \\div (-x) = -3$." }
          ]
        },
        {
          label: "Klammerausdruck ausklammern", card: "x(a+b) + y(a+b) = (a+b)(x+y)",
          title: "Gemeinsamen Klammerausdruck ausklammern",
          formula: "P \\cdot x + P \\cdot y = P(x + y)",
          inWords: "Auch ein ganzer Klammerausdruck kann gemeinsamer Faktor sein. Dann wird er wie eine Zahl vor die große Klammer geschrieben.",
          why: "Diese Methode taucht beim Faktorisieren von Polynomen (z. B. beim Zerlegungsansatz) auf. Siehst du denselben Ausdruck mehrfach, kannst du ihn ausklammern.",
          examples: [
            { tex: "2(x-1) + x(x-1) = (x-1)(2+x)", note: "gemeinsamer Faktor: $(x-1)$" },
            { tex: "a(b+3) - 5(b+3) = (b+3)(a-5)", note: "Vorzeichen beachten" }
          ]
        }
      ]
    },

    // ================================================================ Ausmultiplizieren
    {
      id: "ausmultiplizieren", title: "Ausmultiplizieren", accent: "green",
      rules: [
        {
          label: "Distributivgesetz", card: "3(x + 2) = 3x + 6",
          title: "Klammer ausmultiplizieren (Distributivgesetz)",
          formula: "a(b + c) = ab + ac",
          inWords: "Jeder Term in der Klammer wird mit dem Faktor außen malgenommen. Das Vorzeichen vor der Klammer gehört zum Faktor.",
          steps: [
            "Den Faktor vor der Klammer mit dem ersten Term malnehmen.",
            "Den Faktor mit dem zweiten Term malnehmen (Vorzeichen beachten!).",
            "So weiter für alle Terme in der Klammer."
          ],
          why: "Das Distributivgesetz gilt, weil Multiplikation das Addieren mehrfacher Gruppen bedeutet: $3 \\cdot (x + 2)$ heißt dreimal $(x + 2)$, also $3x + 6$.",
          examples: [
            { tex: "5(2x - 3) = 10x - 15", note: "Vorzeichen des Klammerfaktors mit ins Produkt" },
            { tex: "-(x^2 - 4x + 1) = -x^2 + 4x - 1", note: "Faktor $-1$: alle Vorzeichen drehen sich um" },
            { tex: "2x^2(3x - 1) = 6x^3 - 2x^2", note: "Potenzgesetz beim Malnehmen anwenden" }
          ],
          mistakes: [
            { wrong: "3(x + 2) = 3x + 2", right: "3(x + 2) = 3x + 6", note: "Jeder Term in der Klammer wird mit 3 malngenommen, also auch die 2." },
            { wrong: "-(x - 4) = -x - 4", right: "-(x - 4) = -x + 4", note: "Das Minus dreht alle Vorzeichen um: $-(x - 4) = -x + 4$." }
          ]
        },
        {
          label: "Doppelte Klammer", card: "(x+2)(x+3) = x^2 + 5x + 6",
          title: "Doppelte Klammer ausmultiplizieren",
          formula: "(a + b)(c + d) = ac + ad + bc + bd",
          inWords: "Jeden Term der ersten Klammer mit jedem Term der zweiten Klammer malnehmen. Bei zwei Termen pro Klammer entstehen genau vier Produkte.",
          steps: [
            "Ersten Term der linken Klammer mit beiden Termen der rechten Klammer malnehmen.",
            "Zweiten Term der linken Klammer mit beiden Termen der rechten Klammer malnehmen.",
            "Alle vier Produkte addieren (Vorzeichen beachten!).",
            "Gleiche Terme zusammenfassen."
          ],
          whyLabel: "Merkhilfe",
          why: "Eine nützliche Merkhilfe ist das Schema „Erste × Erste, Erste × Letzte, Letzte × Erste, Letzte × Letzte“ (FLFL). " +
               "Oder zeichne einen Flächenplan: ein Rechteck mit den Seiten $(a + b)$ und $(c + d)$.",
          examples: [
            { tex: "(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6", note: "vier Produkte, dann zusammenfassen" },
            { tex: "(x - 1)(x + 4) = x^2 + 4x - x - 4 = x^2 + 3x - 4", note: "Vorzeichen genau beachten" },
            { tex: "(2a - b)(3a + 2b) = 6a^2 + 4ab - 3ab - 2b^2 = 6a^2 + ab - 2b^2", note: "Koeffizienten nicht vergessen" }
          ],
          mistakes: [
            { wrong: "(x + 2)^2 = x^2 + 4", right: "(x + 2)^2 = x^2 + 4x + 4", note: "Beim Quadrieren einer Summe entsteht ein mittlerer Term. Binomische Formel nutzen!" }
          ]
        },
        {
          label: "Binomische Formeln anwenden", card: "(a+b)^2 = a^2+2ab+b^2",
          title: "Binomische Formeln zum Ausmultiplizieren",
          formula: "(a + b)^2 = a^2 + 2ab + b^2",
          inWords: "Die drei binomischen Formeln sind Abkürzungen für häufig auftretende Produkte. Du erkennst das Muster und schreibst sofort das Ergebnis hin.",
          why: "Die Formeln sparen Rechenzeit. Beim Erkennen hilft: 1. Formel = Summe quadriert, 2. Formel = Differenz quadriert, 3. Formel = Summe mal Differenz → kein mittlerer Term.",
          derivation: "\\begin{aligned} (a+b)^2 &= a^2 + 2ab + b^2 \\\\ (a-b)^2 &= a^2 - 2ab + b^2 \\\\ (a+b)(a-b) &= a^2 - b^2 \\end{aligned}",
          examples: [
            { tex: "(3x + 2)^2 = 9x^2 + 12x + 4", note: "$a = 3x,\\; b = 2$" },
            { tex: "(5a - 1)^2 = 25a^2 - 10a + 1", note: "$a = 5a,\\; b = 1$" },
            { tex: "(x + 4)(x - 4) = x^2 - 16", note: "3. Formel: kein mittlerer Term" }
          ]
        }
      ]
    },

    // ================================================================ Faktorisieren
    {
      id: "faktorisieren", title: "Faktorisieren", accent: "amber",
      rules: [
        {
          label: "Gemeinsamen Faktor erkennen", card: "6x^2 + 4x = 2x(3x + 2)",
          title: "Schritt 1: Gemeinsamen Faktor erkennen",
          formula: "a \\cdot b + a \\cdot c = a(b + c)",
          inWords: "Prüfe zuerst, ob alle Summanden einen gemeinsamen Faktor (Zahl und/oder Variable) haben. Wenn ja, klammere ihn aus.",
          steps: [
            "ggT der Zahlkoeffizienten bestimmen.",
            "Gemeinsame Variable(n) mit der niedrigsten Potenz bestimmen.",
            "Gemeinsamen Faktor ausklammern."
          ],
          why: "Gemeinsame Faktoren auszuklammern ist immer der erste Schritt beim Faktorisieren. Danach ist der verbleibende Ausdruck einfacher.",
          examples: [
            { tex: "15x^3 - 10x^2 + 5x = 5x(3x^2 - 2x + 1)", note: "gemeinsamer Faktor: $5x$" },
            { tex: "8a^2b + 12ab^2 = 4ab(2a + 3b)", note: "gemeinsamer Faktor: $4ab$" },
            { tex: "k(64k^6 - 16k^3 + 1)", note: "$64k^7 - 16k^4 + k = k(64k^6 - 16k^3 + 1)$" }
          ]
        },
        {
          label: "Binomische Formel rückwärts", card: "x^2 - 9 = (x+3)(x-3)",
          title: "Binomische Formeln rückwärts erkennen",
          formula: "a^2 - b^2 = (a+b)(a-b)",
          inWords: "Erkenne in einem Term das Muster einer binomischen Formel – dann lässt er sich sofort in ein Produkt umschreiben.",
          steps: [
            "Prüfen: Handelt es sich um eine Differenz zweier Quadrate ($a^2 - b^2$)?",
            "Prüfen: Drei Terme – stimmt das Muster $a^2 \\pm 2ab + b^2$?",
            "$a$ und $b$ aus den Quadraten ablesen (Wurzel ziehen).",
            "In die Faktorform einsetzen."
          ],
          whyLabel: "Muster erkennen",
          why: "Drei Muster gibt es: $a^2 + 2ab + b^2 = (a+b)^2$, $a^2 - 2ab + b^2 = (a-b)^2$ und $a^2 - b^2 = (a+b)(a-b)$. " +
               "Beim dritten: immer zwei Terme, beide Quadrate, Minus dazwischen.",
          derivation: "\\begin{aligned} a^2 + 2ab + b^2 &= (a+b)^2 \\\\ a^2 - 2ab + b^2 &= (a-b)^2 \\\\ a^2 - b^2 &= (a+b)(a-b) \\end{aligned}",
          examples: [
            { tex: "x^2 - 16 = (x+4)(x-4)", note: "$a = x,\\; b = 4$, dritte binomische Formel" },
            { tex: "9a^2 - 6a + 1 = (3a - 1)^2", note: "$a = 3a,\\; b = 1$, zweite binomische Formel" },
            { tex: "0{,}\\overline{4}\\,m^4y^2 - \\tfrac{4}{3}m^2y + 1 = \\left(\\tfrac{2}{\\sqrt{3}}m^2y - 1\\right)^2", note: "Dezimalbruch als Bruch erkennen: $0{,}\\overline{4} = \\frac{4}{9}$" }
          ],
          mistakes: [
            { wrong: "x^2 + 9 = (x+3)(x+3)", right: "x^2 + 9 \\text{ lässt sich nicht faktorisieren}", note: "Eine Summe zweier Quadrate ($a^2 + b^2$) lässt sich über den reellen Zahlen nicht faktorisieren." }
          ]
        },
        {
          label: "Vollständig faktorisieren", card: "2x^3 - 8x = 2x(x+2)(x-2)",
          title: "Vollständig faktorisieren",
          formula: "\\text{Schritt für Schritt: ausklammern, dann Muster erkennen}",
          inWords: "Ein Term ist vollständig faktorisiert, wenn kein weiteres Ausklammern und kein weiteres Erkennen einer binomischen Formel mehr möglich ist.",
          steps: [
            "Gemeinsamen Faktor ausklammern.",
            "Im verbleibenden Ausdruck nach binomischen Mustern suchen.",
            "Falls gefunden: weiter faktorisieren.",
            "Probe: Das Produkt aller Faktoren ausmultipliziert muss den Originalterm ergeben."
          ],
          why: "Vollständiges Faktorisieren ist nötig, um Brüche maximal zu kürzen oder Gleichungen zu lösen.",
          examples: [
            { tex: "2x^3 - 8x = 2x(x^2 - 4) = 2x(x+2)(x-2)", note: "erst ausklammern, dann 3. binom. Formel" },
            { tex: "3x^4 - 48 = 3(x^4 - 16) = 3(x^2+4)(x^2-4) = 3(x^2+4)(x+2)(x-2)", note: "mehrfach faktorisieren" }
          ]
        }
      ]
    },

    // ================================================================ Bruchterme
    {
      id: "bruchterme", title: "Bruchterme", accent: "red",
      rules: [
        {
          label: "Zähler und Nenner faktorisieren", card: "\\frac{x^2-4}{x^2-2x} = \\frac{(x+2)(x-2)}{x(x-2)}",
          title: "Bruchterme kürzen: Schritt 1 – Faktorisieren",
          formula: "\\frac{Z}{N} \\to \\text{Z und N faktorisieren}",
          inWords: "Bevor du kürzen kannst, musst du Zähler und Nenner in Produkte zerlegen. Kürzen geht nur mit gemeinsamen Faktoren, nicht mit Summanden.",
          steps: [
            "Zähler vollständig faktorisieren (ausklammern, binomische Formeln).",
            "Nenner vollständig faktorisieren.",
            "Gemeinsame Faktoren erkennen.",
            "Kürzen – für jeden gekürzten Faktor eine Einschränkung notieren ($x \\neq \\ldots$)."
          ],
          why: "Kürzen heißt: Zähler und Nenner durch denselben Faktor teilen. Das ist nur erlaubt, wenn dieser Faktor keine Summe, sondern ein Produkt ist.",
          examples: [
            { tex: "\\frac{x^2 - 4}{x^2 - 2x} = \\frac{(x+2)(x-2)}{x(x-2)} = \\frac{x+2}{x} \\quad (x \\neq 0,\\; x \\neq 2)", note: "Faktor $(x-2)$ kürzen" },
            { tex: "\\frac{3x^3 - 6x^2 + 3x}{0{,}\\overline{3}\\,x^2 - \\tfrac{2x}{3} + 0{,}\\overline{3}} = \\frac{3x(x-1)^2}{\\tfrac{1}{3}(x-1)^2} = 9x", note: "Dezimalbrüche als Brüche erkennen, dann kürzen" }
          ],
          mistakes: [
            { wrong: "\\frac{x^2 + x}{x} = x^2 + 1", right: "\\frac{x^2 + x}{x} = x + 1", note: "Ausklammern nicht vergessen: $\\frac{x(x+1)}{x} = x+1$." },
            { wrong: "\\frac{x + 2}{x} = \\frac{2}{1} = 2", right: "\\frac{x + 2}{x} \\text{ lässt sich nicht weiter kürzen}", note: "$x+2$ ist eine Summe, kein Produkt. Nur $\\frac{x \\cdot 2}{x \\cdot 1}$ könnte gekürzt werden." }
          ]
        },
        {
          label: "Definitionsmenge", card: "\\frac{1}{x-3} \\quad (x \\neq 3)",
          title: "Definitionsmenge von Bruchtermen",
          formula: "N(x) \\neq 0",
          condition: "der Nenner darf nie 0 sein",
          inWords: "Ein Bruchterm ist nur definiert, wenn der Nenner nicht null ist. Die Werte, die den Nenner null machen, müssen ausgeschlossen werden.",
          steps: [
            "Nenner vollständig faktorisieren.",
            "Jeden Faktor gleich null setzen und auflösen.",
            "Diese Werte sind die Ausschlussbedingungen (Definitionslücken)."
          ],
          why: "Durch null darf man nicht teilen. Beim Kürzen müssen alle Ausschlussbedingungen – auch der gekürzten Faktoren – notiert werden.",
          examples: [
            { tex: "\\frac{3}{x-3}: \\quad x \\neq 3", note: "$x - 3 = 0 \\Rightarrow x = 3$" },
            { tex: "\\frac{x+1}{x^2-4}: \\quad x \\neq \\pm 2", note: "$x^2 - 4 = (x+2)(x-2) = 0 \\Rightarrow x = \\pm 2$" },
            { tex: "\\frac{x^2-9}{x-3} = x+3 \\;(x \\neq 3)", note: "Auch nach dem Kürzen bleibt $x \\neq 3$ bestehen" }
          ]
        },
        {
          label: "Brüche mit Potenztermen", card: "\\frac{x^{2p+4} - 2x^p + x^{-4}}{3x^{p+2} - 3x^{-2}}",
          title: "Brüche mit variablen Exponenten",
          formula: "\\frac{x^{2p+4} - 2x^p \\cdot x^0 + x^{-4}}{3x^{p+2} - 3x^{-2}}",
          inWords: "Bei variablen Exponenten: gemeinsamen Faktor mit dem kleinsten Exponenten ausklammern. Dann kürzen wie üblich.",
          steps: [
            "Kleinsten Exponenten im Zähler bestimmen – das ist der Faktor zum Ausklammern.",
            "Kleinsten Exponenten im Nenner bestimmen.",
            "Ausklammern, kürzen."
          ],
          why: "Mit variablen Exponenten gilt dasselbe Prinzip wie mit Zahlen: der gemeinsame Faktor hat den kleinsten vorkommenden Exponenten.",
          examples: [
            { tex: "\\frac{x^{2p+4} - 2x^p + x^{-4}}{3x^{p+2} - 3x^{-2}} = \\frac{x^{-4}(x^{2p+8} - 2x^{p+4} + 1)}{3x^{-2}(x^{p+4} - 1)} = \\frac{(x^{p+4} - 1)^2}{3x^2(x^{p+4}-1)} = \\frac{x^{p+4}-1}{3x^2}", note: "Zähler: $x^{-4}$ ausklammern und als binom. Formel erkennen, Nenner: $3x^{-2}$ ausklammern" }
          ]
        }
      ]
    },

    // ================================================================ Wurzeln vereinfachen
    {
      id: "wurzeln-vereinfachen", title: "Wurzeln vereinfachen", accent: "cyan",
      rules: [
        {
          label: "Produkt unter der Wurzel", card: "\\sqrt{48} = 4\\sqrt{3}",
          title: "Produkt unter der Wurzel aufteilen",
          formula: "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}",
          condition: "für $a, b \\geq 0$",
          inWords: "Eine Wurzel über einem Produkt lässt sich auf die Faktoren aufteilen. Du suchst einen Faktor, der eine vollständige Quadratzahl (oder gerade Potenz) ist.",
          steps: [
            "Zahl oder Produkt in Faktoren zerlegen – einen Faktor so wählen, dass er eine Quadratzahl (oder gerade Potenz) ist.",
            "Wurzel aufteilen.",
            "Die Quadratwurzel des ersten Faktors ausrechnen.",
            "Den anderen Faktor unter der Wurzel lassen."
          ],
          why: "Das Produktgesetz gilt für Wurzeln, weil $(\\sqrt{a} \\cdot \\sqrt{b})^2 = a \\cdot b$. Damit kannst du gerade Potenzen aus der Wurzel herausziehen.",
          examples: [
            { tex: "\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}", note: "16 ist die größte Quadratzahl, die 48 teilt" },
            { tex: "\\sqrt{48p^{18} \\cdot b^9} = \\sqrt{16p^{18} \\cdot b^8 \\cdot 3b} = 4p^9 b^4 \\sqrt{3b}", note: "gerade Potenzen herausziehen: $\\sqrt{p^{18}} = p^9$, $\\sqrt{b^8} = b^4$" },
            { tex: "\\sqrt{x^5} = \\sqrt{x^4 \\cdot x} = x^2\\sqrt{x}", note: "ungerade Potenz: eine Stufe unter der Wurzel lassen" }
          ],
          mistakes: [
            { wrong: "\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}", right: "\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}", note: "Das Produktgesetz gilt nur für Produkte, nicht für Summen unter der Wurzel." }
          ]
        },
        {
          label: "Quotient unter der Wurzel", card: "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}",
          title: "Quotient unter der Wurzel",
          formula: "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}",
          condition: "für $a \\geq 0,\\; b > 0$",
          inWords: "Eine Wurzel über einem Bruch lässt sich in Zähler-Wurzel durch Nenner-Wurzel aufteilen. Zähler und Nenner werden getrennt vereinfacht.",
          why: "Es gilt $\\left(\\frac{\\sqrt{a}}{\\sqrt{b}}\\right)^2 = \\frac{a}{b}$, daher ist $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$.",
          examples: [
            { tex: "\\sqrt{\\frac{60p \\cdot x^5}{120b^{24} \\cdot x^9}} = \\sqrt{\\frac{1}{2b^{24}x^4}} = \\frac{1}{b^{12}x^2\\sqrt{2}} = \\frac{\\sqrt{2}}{2b^{12}x^2}", note: "Bruch zuerst kürzen, dann Wurzel ziehen, dann rationalisieren" },
            { tex: "\\sqrt{\\frac{75p^{12}}{b^9}} = \\frac{\\sqrt{75p^{12}}}{\\sqrt{b^9}} = \\frac{5p^6\\sqrt{3}}{b^4\\sqrt{b}} = \\frac{5p^6\\sqrt{3}}{b^4\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{5p^6\\sqrt{3b}}{b^5}", note: "Zähler und Nenner getrennt vereinfachen, dann rationalisieren" }
          ]
        },
        {
          label: "Rationalisieren", card: "\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}",
          title: "Nenner rationalisieren",
          formula: "\\frac{a}{\\sqrt{b}} = \\frac{a \\cdot \\sqrt{b}}{b}",
          inWords: "Eine Wurzel im Nenner ist kein vereinfachter Ausdruck. Du erweiterst den Bruch mit der Wurzel – so verschwindet die Wurzel aus dem Nenner.",
          steps: [
            "Zähler und Nenner mit der Nenner-Wurzel erweitern.",
            "Im Nenner gilt: $\\sqrt{b} \\cdot \\sqrt{b} = b$.",
            "Den Zähler vereinfachen."
          ],
          why: "In der Schule und in vielen Anwendungen gilt ein Bruch ohne Wurzel im Nenner als einfacher / normiert.",
          examples: [
            { tex: "\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}", note: "Erweiterung mit $\\sqrt{5}$" },
            { tex: "\\frac{2}{\\sqrt{12}} = \\frac{2}{2\\sqrt{3}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}", note: "Zuerst Nenner vereinfachen, dann rationalisieren" },
            { tex: "\\frac{6}{\\sqrt[3]{4}} = \\frac{6\\sqrt[3]{2}}{2} = 3\\sqrt[3]{2}", note: "bei $n$-ten Wurzeln: Erweiterung mit dem passenden Faktor" }
          ]
        }
      ]
    },

    // ================================================================ Formel umstellen
    {
      id: "formel-umstellen", title: "Formel umstellen", accent: "indigo",
      rules: [
        {
          label: "Variable als Faktor", card: "3p = 3x \\;\\Rightarrow\\; x = p",
          title: "Fall 1: Die Variable steht als Faktor in einem Produkt",
          formula: "a \\cdot x = b \\;\\Rightarrow\\; x = \\frac{b}{a}",
          condition: "für $a \\neq 0$",
          inWords: "Steht die gesuchte Variable als Faktor in einem Produkt, teilst du beide Seiten durch alles, was außer der Variablen noch dabeisteht. Dann bleibt die Variable allein stehen.",
          steps: [
            "Alle Faktoren außer der gesuchten Variablen bestimmen – das ist der Teiler.",
            "Beide Seiten durch diesen Teiler teilen.",
            "Auf der Variablen-Seite kürzt sich alles bis auf die Variable weg.",
            "Probe: Ergebnis zurück einsetzen."
          ],
          why: "Eine Gleichung bleibt gleich, wenn du auf beiden Seiten dasselbe tust (Äquivalenzumformung). Teilst du beide Seiten durch denselben Faktor, bleibt die Gleichung richtig – und die Variable wird freigestellt.",
          examples: [
            { tex: "3p = 3x \\quad | : 3 \\;\\Rightarrow\\; p = x", note: "beide Seiten durch 3 teilen" },
            { tex: "3p = 3 \\cdot x \\cdot p \\cdot z \\cdot k \\quad | : 3pzk \\;\\Rightarrow\\; x = \\frac{3p}{3pzk} = \\frac{1}{zk}", note: "durch alles außer $x$ teilen, dann kürzen" },
            { tex: "a = b \\cdot x \\quad | : b \\;\\Rightarrow\\; x = \\frac{a}{b}", note: "allgemeiner Fall, $b \\neq 0$" }
          ],
          mistakes: [
            { wrong: "3x = 12 \\;\\Rightarrow\\; x = 12 - 3", right: "3x = 12 \\;\\Rightarrow\\; x = \\frac{12}{3} = 4", note: "Ein Faktor wird durch Teilen entfernt, nicht durch Minusrechnen." }
          ]
        },
        {
          label: "Variable im Nenner", card: "y = \\frac{a}{x} \\;\\Rightarrow\\; x = \\frac{a}{y}",
          title: "Fall 2: Die Variable steht im Nenner",
          formula: "y = \\frac{a}{x} \\;\\Rightarrow\\; x = \\frac{a}{y}",
          condition: "für $x \\neq 0,\\; y \\neq 0$",
          inWords: "Steht die Variable im Nenner, muss sie zuerst aus dem Nenner heraus. Dafür gibt es zwei Wege, die zum selben Ergebnis führen.",
          steps: [
            "Weg 1 – hochmultiplizieren: beide Seiten mit $x$ malnehmen, dann durch $y$ teilen.",
            "Weg 2 – Kehrwert bilden: beide Seiten umdrehen, dann freistellen.",
            "Beide Wege liefern dasselbe Ergebnis – nimm den, der dir leichter fällt."
          ],
          whyLabel: "Zwei Wege",
          why: "Eine Variable im Nenner kann man nicht direkt freistellen. Entweder man holt sie durch Malnehmen nach oben (Weg 1), oder man dreht den ganzen Bruch um (Weg 2) – beim Kehrwert tauschen Zähler und Nenner die Plätze.",
          examples: [
            { tex: "\\text{Weg 1: } y = \\frac{a+1}{x} \\quad | \\cdot x \\;\\Rightarrow\\; y \\cdot x = a+1 \\quad | : y \\;\\Rightarrow\\; x = \\frac{a+1}{y}", note: "erst mit $x$ mal, dann durch $y$ teilen" },
            { tex: "\\text{Weg 2: } y = \\frac{a+1}{x} \\;\\Rightarrow\\; \\frac{1}{y} = \\frac{x}{a+1} \\quad | \\cdot (a+1) \\;\\Rightarrow\\; x = \\frac{a+1}{y}", note: "Kehrwert bilden (beide Brüche stürzen), dann mit $(a+1)$ mal" }
          ],
          mistakes: [
            { wrong: "y = \\frac{a}{x} \\;\\Rightarrow\\; x = a \\cdot y", right: "y = \\frac{a}{x} \\;\\Rightarrow\\; x = \\frac{a}{y}", note: "Beim Hochmultiplizieren wird durch $y$ geteilt, nicht mit $y$ malgenommen." }
          ]
        },
        {
          label: "Zwei oder mehr Terme", card: "p = 3x - kx \\;\\Rightarrow\\; x = \\frac{p}{3-k}",
          title: "Fall 3: Die Variable steht in zwei oder mehr Termen",
          formula: "p = ax - bx \\;\\Rightarrow\\; p = x(a-b) \\;\\Rightarrow\\; x = \\frac{p}{a-b}",
          condition: "für $a - b \\neq 0$",
          inWords: "Kommt die gesuchte Variable in mehreren Termen vor, musst du sie zuerst ausklammern. Dann steht sie nur noch einmal da und du kannst wie in Fall 1 durch die Klammer teilen.",
          steps: [
            "Alle Terme mit der gesuchten Variablen auf eine Seite bringen (falls nötig mit $+$ oder $-$).",
            "Die Variable ausklammern.",
            "Beide Seiten durch die Klammer teilen.",
            "Probe: Ergebnis zurück einsetzen."
          ],
          why: "Solange die Variable mehrfach vorkommt, lässt sie sich nicht freistellen. Ausklammern bündelt alle Vorkommen zu einem einzigen Faktor – danach ist es wieder Fall 1.",
          examples: [
            { tex: "p = 3x - kx \\;\\Rightarrow\\; p = x(3 - k) \\quad | : (3-k) \\;\\Rightarrow\\; x = \\frac{p}{3-k}", note: "erst $x$ ausklammern, dann durch die Klammer teilen" },
            { tex: "ax + c = bx \\;\\Rightarrow\\; c = bx - ax = x(b-a) \\;\\Rightarrow\\; x = \\frac{c}{b-a}", note: "zuerst alle $x$-Terme auf eine Seite bringen" }
          ],
          mistakes: [
            { wrong: "p = 3x - kx \\;\\Rightarrow\\; x = \\frac{p}{3} - \\frac{p}{k}", right: "p = 3x - kx \\;\\Rightarrow\\; x = \\frac{p}{3-k}", note: "Erst ausklammern, dann teilen – nicht Term für Term einzeln teilen." }
          ]
        }
      ]
    }

  ],

  cards: [
    {
      front: "Ausklammern", section: "ausklammern",
      items: [
        { label: "Gemeinsamen Faktor ausklammern", tex: "ab + ac = a(b + c)" },
        { label: "Variablen: niedrigste Potenz", tex: "6x^3 + 4x^2 = 2x^2(3x + 2)" },
        { label: "Negativen Faktor ausklammern", tex: "-a^2 + 2a = -a(a - 2)" },
        { label: "Klammerausdruck als Faktor", tex: "x(a+b) + y(a+b) = (a+b)(x+y)" }
      ]
    },
    {
      front: "Ausmultiplizieren", section: "ausmultiplizieren",
      items: [
        { label: "Distributivgesetz", tex: "a(b + c) = ab + ac" },
        { label: "Doppelte Klammer (4 Produkte)", tex: "(a+b)(c+d) = ac+ad+bc+bd" },
        { label: "1. Binomische Formel", tex: "(a+b)^2 = a^2+2ab+b^2" },
        { label: "2. Binomische Formel", tex: "(a-b)^2 = a^2-2ab+b^2" },
        { label: "3. Binomische Formel", tex: "(a+b)(a-b) = a^2-b^2" }
      ]
    },
    {
      front: "Faktorisieren", section: "faktorisieren",
      items: [
        { label: "Schritt 1: Gemeinsamen Faktor ausklammern", tex: "15x^3 - 5x = 5x(3x^2-1)" },
        { label: "Differenz zweier Quadrate", tex: "a^2 - b^2 = (a+b)(a-b)" },
        { label: "Vollständiges Quadrat (1. Formel)", tex: "a^2+2ab+b^2 = (a+b)^2" },
        { label: "Vollständiges Quadrat (2. Formel)", tex: "a^2-2ab+b^2 = (a-b)^2" },
        { label: "Mehrfach faktorisieren", tex: "2x^3-8x = 2x(x+2)(x-2)" }
      ]
    },
    {
      front: "Bruchterme", section: "bruchterme",
      items: [
        { label: "Kürzen: nur Faktoren, keine Summanden!", tex: "\\frac{x(x+2)}{x(x-1)} = \\frac{x+2}{x-1}" },
        { label: "Erst faktorisieren, dann kürzen", tex: "\\frac{x^2-4}{x^2-2x} = \\frac{(x+2)(x-2)}{x(x-2)} = \\frac{x+2}{x}" },
        { label: "Definitionsmenge: Nenner \\neq 0", text: "Ausgeschlossene Werte notieren" }
      ]
    },
    {
      front: "Wurzeln vereinfachen", section: "wurzeln-vereinfachen",
      items: [
        { label: "Produkt aufteilen", tex: "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}" },
        { label: "Gerade Potenz herausziehen", tex: "\\sqrt{48p^{18}} = 4p^9\\sqrt{3}" },
        { label: "Quotient aufteilen", tex: "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}" },
        { label: "Rationalisieren", tex: "\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}" }
      ]
    },
    {
      front: "Formel umstellen", section: "formel-umstellen", explainBtn: "formel-umstellen",
      items: [
        { label: "Fall 1: Variable als Faktor → teilen", tex: "a \\cdot x = b \\;\\Rightarrow\\; x = \\frac{b}{a}" },
        { label: "Fall 2: Variable im Nenner → hochmultiplizieren", tex: "y = \\frac{a}{x} \\;\\Rightarrow\\; x = \\frac{a}{y}" },
        { label: "Fall 2: Variable im Nenner → Kehrwert bilden", tex: "y = \\frac{a}{x} \\;\\Rightarrow\\; \\frac{1}{y} = \\frac{x}{a}" },
        { label: "Fall 3: Mehrere Terme → ausklammern, dann teilen", tex: "p = ax - bx = x(a-b) \\;\\Rightarrow\\; x = \\frac{p}{a-b}" }
      ]
    }
  ]
};
