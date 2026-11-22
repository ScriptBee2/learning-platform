# Design-Richtlinien – Lernzentrum

Verbindliche Regeln für Aussehen, CSS, Formeln und Texte. Wer eine Seite baut oder ändert, hält sich daran.
Die Umsetzung steht in `css/base.css`. Wenn dieses Dokument und der Code sich widersprechen, wird einer von beiden korrigiert.

## 1. Grundsätze

1. **Läuft ohne Server.** Jede Seite funktioniert per Doppelklick (`file://`). Deshalb gibt es keine ES-Module, kein `fetch()` und keinen Build-Schritt. Daten liegen als klassische Scripts mit globalen Variablen in `data/`.
2. **Eine Quelle für Design.** Farben, Abstände, Schriftgrößen und Bausteine kommen aus `css/base.css`. Seiten-CSS enthält nur, was es nur auf dieser Seite gibt.
3. **Inhalt getrennt von Logik.** Texte, Formeln und Quizfragen stehen in `data/*.js`, das Verhalten in `js/*.js`.
4. **Formeln immer mit KaTeX.** Keine selbstgebauten Brüche, keine Unicode-Hochzahlen in Mathe-Formeln (siehe Abschnitt 7).
5. **Dunkles Design, ruhige Flächen, eine Akzentfarbe pro Baustein.**

## 2. Dateistruktur

```
home.html                Startseite (Fächer)
html/                    alle weiteren Seiten
css/base.css             Tokens + alle gemeinsamen Bausteine   ← zuerst lesen
css/<seite>.css          nur seitenspezifische Styles
js/ui.js                 Seitenleiste, Tipp-Hamster, Ergebnis-Hamster (global UI)
js/math.js               KaTeX-Helfer (global MathTex)
js/<seite>.js            Logik einer Seite
data/                    Inhalte und Quizfragen (globale Variablen)
lib/katex/               KaTeX (Fremdbibliothek, nicht ändern)
lib/hamster/             Hamster-Maskottchen (eigenes Modul, nicht hier ändern, siehe lib/hamster/README.md)
```

## 3. Seitenvorlage

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fach – Thema</title>
  <link rel="stylesheet" href="../lib/katex/katex.min.css">   <!-- nur wenn Formeln -->
  <link rel="stylesheet" href="../css/base.css">
  <link rel="stylesheet" href="../lib/hamster/hamster.css">
  <link rel="stylesheet" href="../css/thema.css">             <!-- optional -->
</head>
<body class="page page--scroll page--with-sidebar">
  <a class="back" href="fach.html">&#8592; Zurück</a>
  <header class="topbar"><h1 class="topbar__title">Thema</h1></header>
  <main class="container">…</main>
  <aside class="sidebar" id="sidebar">…</aside>              <!-- optional -->

  <script src="../lib/katex/katex.min.js"></script>          <!-- nur wenn Formeln -->
  <script src="../lib/hamster/hamster.js"></script>
  <script src="../js/ui.js"></script>
  <script src="../js/math.js"></script>                      <!-- nur wenn Formeln -->
  <script src="../data/thema.js"></script>
  <script src="../js/thema.js"></script>
</body>
</html>
```

Reihenfolge der Stylesheets: KaTeX → `base.css` → `hamster.css` → Seiten-CSS. Scripts kommen ans Ende von `<body>`.

### Seitenrahmen (`body`-Klassen)

| Klasse | Wofür |
|---|---|
| `page` | immer |
| `page--hub` | Start- und Übersichtsseiten: Inhalt mittig, Auswahl-Karten |
| `page--scroll` | Lese- und Lernseiten, die normal scrollen |
| `page--fit` | Werkzeuge, die genau ins Fenster passen (Periodensystem) |
| `page--with-sidebar` | hält rechts Platz für die Seitenleiste frei |

## 4. Tokens

Alle Werte sind CSS-Variablen auf `:root` in `base.css`. **Im Seiten-CSS keine eigenen Hex-Farben, px-Abstände oder Schatten**, sondern nur Tokens. Ausnahmen sind fachliche Farbskalen, die als eigene Variablen oben im Seiten-CSS definiert werden (z. B. die Stoffgruppen im Periodensystem).

### Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--bg` | `#0f172a` | Seitenhintergrund |
| `--surface` | `#1e293b` | Karten, Dialoge, Seitenleiste |
| `--surface-sunken` | weiß 4 % | Kästen innerhalb von Karten |
| `--border` / `--border-strong` | grau 20 % / 40 % | Trennlinien / Konturen |
| `--text` | `#e2e8f0` | Fließtext |
| `--text-muted` | `#94a3b8` | Hinweise, Beschriftungen |
| `--text-strong` | `#fff` | Hervorhebungen, Formeln |
| `--on-accent` | `#0f172a` | Text auf farbigen Flächen |
| `--success` / `--danger-text` | grün / rot | richtig / falsch im Quiz |

Palette: `--blue`, `--cyan`, `--green`, `--amber`, `--yellow`, `--orange`, `--red`, `--purple`, `--indigo`.
Fächer: `--c-mathe` (indigo), `--c-chemie` (grün).

### Abstände (4-px-Raster)

`--sp-1` 4 · `--sp-2` 8 · `--sp-3` 12 · `--sp-4` 16 · `--sp-5` 20 · `--sp-6` 24 · `--sp-8` 32 · `--sp-10` 40 · `--sp-12` 48 px

Faustregeln: innerhalb eines Bausteins `--sp-2` bis `--sp-4`, zwischen Bausteinen `--sp-4` bis `--sp-6`, zwischen Abschnitten `--sp-10`.

### Schrift

Schriftart `--font` (Segoe UI / Systemschrift). Größen:

| Token | Größe | Verwendung |
|---|---|---|
| `--fs-xs` | 12 px | Eyebrow (Großbuchstaben-Label), Zähler |
| `--fs-sm` | 14 px | Hinweise, Bildunterschriften, Quiz-Rückmeldung |
| `--fs-md` | 16 px | Fließtext |
| `--fs-lg` | 18 px | Panel-Titel, hervorgehobener Text |
| `--fs-xl` | 20 px | Abschnittstitel |
| `--fs-2xl` | 24 px | Dialog- und Kartentitel, Quizfrage |
| `--fs-3xl` | 24–32 px | Seitentitel |
| `--fs-hero` | 32–56 px | Titel auf Übersichtsseiten |

Zeilenhöhe: `--lh-normal` (1.5) für UI, `--lh-relaxed` (1.65) für Erklärtexte.

### Formen, Schatten, Ebenen

Radien: `--r-sm` 8 · `--r-md` 12 (Knöpfe, Karten) · `--r-lg` 16 · `--r-xl` 20 (Dialoge) · `--r-2xl` 24 (große Auswahl-Karten) · `--r-pill`.
Schatten: `--shadow-sm` (Zurück-Knopf), `--shadow-md` (Karten), `--shadow-lg` (Dialoge).
Ebenen (`z-index`): `--z-back` 5 · `--z-sidebar` 8 · `--z-float` 9 (Tipp-Hamster, Banner) · `--z-overlay` 10 · `--z-tooltip` 20. Keine anderen Zahlen verwenden.

## 5. Akzentfarbe

Jeder farbige Baustein liest **nur `--accent`**. Gesetzt wird die Farbe am Baustein oder an einem Eltern-Element:

- Klasse: `accent-blue`, `accent-cyan`, `accent-green`, `accent-amber`, `accent-yellow`, `accent-orange`, `accent-red`, `accent-purple`, `accent-indigo`, `accent-mathe`, `accent-chemie`
- aus JS: `el.style.setProperty("--accent", "var(--blue)")`, immer mit einem Token, nie mit einem Hex-Wert
- im Periodensystem: `data-cat="halogen"` setzt `--accent` auf die Stoffgruppen-Farbe

Mathe-Abschnitte haben feste Farben: Rechenregeln blau, Brüche grün, Potenzen amber, Wurzeln lila, binomische Formeln rot.

## 6. Bausteine

Namen folgen BEM: `block`, `block__teil`, `block--variante`. Zustände per Modifier (`quiz__opt--correct`) oder `[hidden]`.

| Baustein | Markup (Kurzform) | Hinweise |
|---|---|---|
| Zurück | `<a class="back" href="…">&#8592; Zurück</a>` | immer erstes Element im `body` |
| Kopf | `.topbar` > `.topbar__title`, optional `.topbar__hint` | Übersichtsseiten: `.hero` > `.hero__title` + `.hero__subtitle` |
| Auswahl-Karte | `<a class="choice accent-…">` > `.choice__icon`, `.choice__title`, `.choice__text`, `.badge` | noch nicht fertig: `<div class="choice choice--soon">` + `.badge` „Bald verfügbar“ |
| Knopf | `.btn` (Kontur), `.btn--primary` (gefüllt mit `--accent`), `.btn--block`, `.btn--sm` | gilt auch für `<a>`. Pro Bereich höchstens **ein** `.btn--primary` |
| Knopfgruppen | `.btn-row` (nebeneinander), `.btn-stack` (untereinander) | |
| Seitenleiste | `aside.sidebar#sidebar` > `button.sidebar__toggle#sidebarToggle` + `.sidebar__content` > `.panel` | Auf-/Zuklappen übernimmt `js/ui.js`. Unter 900 px startet sie zugeklappt |
| Panel | `.panel` > `.panel__title`, `.panel__hint`, Knöpfe | |
| Lernkarten-Stapel | `.card-stack` > `button.card-chip` | Farbe über `--accent` je Chip |
| Overlay + Dialog | `.overlay[hidden]` > `.dialog` (+ `--sm` 420 px / Standard 480 px / `--lg` 680 px) | Dialog bekommt `role="dialog" aria-modal="true"` und einen Titel. Schließen per ✕, Klick daneben und Escape |
| Schließen | `button.close` oben rechts, auf farbigem Titel `.close--on-accent` | |
| Lernkarte | `.dialog.bigcard` > `.bigcard__counter`, `.bigcard__title`, `.bigcard__body.prose`, `.btn.btn--primary.bigcard__action` | |
| Quiz | `.dialog.quiz` > `.quiz__counter`, `.quiz__lead`, `.quiz__prompt`, `.quiz__options` > `.quiz__opt`, `.quiz__feedback`, `.quiz__next`, `.quiz__result` > `#hamsterContainer` + `.quiz__score` | Rückmeldung mit `aria-live="polite"` |
| Hinweis zum Quiz | `.quiz-layout` > Quiz-Dialog + `aside.dialog.hint-panel`; Knopf `.quiz__hint-btn` in `.quiz__bar` | Panel rechts neben dem Quiz, auf schmalen Bildschirmen als Zettel von unten. Schließt sich bei jeder neuen Frage. Escape schließt erst den Hinweis |
| Tooltip | `<span class="tip" data-tip="Erklärung">Begriff</span>` | rechts am Rand: `tip--end` |
| Fließtext | `.prose` | Absätze und Listen mit einheitlichen Abständen |
| Eyebrow | `<h3 class="eyebrow">Warum?</h3>` | kleine Großbuchstaben-Überschrift in Kästen |

**Erklärungen gehören zum Thema.** Eine ausführliche Erklärung ist ein großer Dialog auf der Seite ihres Themas, keine eigene Seite und keine eigene Karte auf der Übersicht. Andere Seiten verlinken per Anker darauf: `periodensystem.html#oktettregel` öffnet den Dialog direkt. Knöpfe auf derselben Seite nutzen `data-explain="…"`.

### Schritt-für-Schritt-Erklärungen (Erklär-Player)

- **Player:** `js/explainer.js` + `css/explainer.css` (Dialog, Navigation, Erzähler-Hamster, Deep-Links). Das Markup `#explOverlay` steht einmal pro Seite im HTML.
- **Eine Erklärung = eine Datei** in `js/explain/<id>.js`, die sich mit `Explainer.register(id, { title, short, subtitle, next, scenes })` anmeldet. `next` verweist auf die nächste Erklärung im Lernweg (am Ende erscheint „Weiter mit …“).
- **Szene:** `{ title, text, run: async function (D) { … } }`. `text` ist kurzes HTML (2–4 Absätze, Wichtiges in `<b>`, Merkhilfe als `<p class="hint">`). `run` zeichnet in das SVG (`viewBox 0 0 600 340`) mit dem Werkzeugkasten `D`: `el`, `txt`, `tween`, `wait`, `fadeIn`, `makeAtom`/`buildAtom`/`showAll`/`markOuter` (Schalenmodell), `miniTable` (Mini-Periodensystem mit `mark(fn, "row"|"col"|"on"|"hot"|"dim")`), `sparkle`, `cheer`/`calm` (Hamster).
- Alle Animationen über `D.tween`/`D.wait`, damit der Player sie beim Blättern abbrechen kann.
- Die Klassen `.note`/`.count`/`.sym` setzen `text-anchor` per CSS. Andere Ausrichtung per `style="text-anchor: …"`, nicht per Attribut.
- Lernweg auf der Periodensystem-Seite: Stoffgruppen → Periodensystem lesen → Lewis-Schreibweise → Oktettregel.

**Nicht erlaubt:** Inline-`style` außer `--accent` und Grid-Positionen aus JS · neue Knopf-Varianten im Seiten-CSS · `!important` (außer `[hidden]` und reduzierte Bewegung) · eigene `@keyframes` für Dialoge.

## 7. Mathe-Formeln (KaTeX)

Alle mathematischen Ausdrücke werden mit KaTeX gesetzt, über die Helfer in `js/math.js`:

| Helfer | Ergebnis | Wofür |
|---|---|---|
| `MathTex.tex(src, true)` | eigene Zeile, zentriert (Display-Modus) | Hauptformel einer Regel (`.math-block`), Herleitungen |
| `MathTex.big(src)` | in der Zeile, aber volle Größe (`\displaystyle`) | Regelkarten, Beispielzeilen, Lernkarten |
| `MathTex.html(text)` | Text mit `$…$`-Formeln | Erklärtexte. `$…$` bleibt klein und passt in die Zeile |
| `MathTex.html(text, true)` | wie oben, Formeln in voller Größe | Quizfragen und -antworten |

### Schreibregeln

- **Malpunkt** `\cdot`, nie `*` oder `×`. **Geteilt** wird nach deutscher Schreibweise als **`:`** gesetzt. In den Daten steht dafür `\div`, ein Makro in `math.js` macht daraus `12 : 4`. Kein `÷` im Text.
- **Minus** in Formeln einfach `-` (KaTeX setzt das echte Minuszeichen).
- **Brüche** immer `\frac{a}{b}`. Die Größe bestimmt der Helfer, also kein `\dfrac` in den Daten.
- **Dezimalkomma** `0{,}5`, damit kein Leerraum nach dem Komma entsteht. Tausender: `100\,000`.
- **Text in Formeln** mit `\text{…}`, nie nackte Wörter (sonst kursiv und ohne Leerzeichen).
- **kgV und ggT** in Formeln als `\kgV(3, 6)` und `\ggT(12, 18)` (Makros aus `math.js`). Alleinstehend im Fließtext normal schreiben: „kgV“.
- **Klammern um hohe Ausdrücke** mit `\left( … \right)`.
- **Herleitungen** über mehrere Zeilen mit `\begin{aligned} … &= … \\ &= … \end{aligned}`.
- **Fragezeichen** im Quiz: `= {?}`.
- **Mehrere Formeln untereinander** als `<ul class="math-lines">`, nie mit `<br>` oder `line-height`-Tricks.
- Kein Mischen von HTML und Formelteilen wie `frac(1,3) + "+" + frac(1,6)`: Ein Ausdruck ist **ein** TeX-String.
- In JS-Strings jeden Backslash verdoppeln: `"\\frac{1}{2}"`.
- **Bedingungen** gehören zur Regel: Wo durch etwas geteilt oder eine Wurzel gezogen wird, steht die Bedingung dabei (`für $a \neq 0$`, `für $a \geq 0$`).

### Lesbarkeit von Formeln

- Hochzahlen und Indizes setzt `base.css` auf 80 % statt KaTeX-üblicher 70 %. Brüche im Exponenten und der Wurzelexponent stehen auf rund 70 % statt 50 %. Diese Regeln nicht entfernen, die KaTeX-Standardgrößen sind auf dunklem Grund zu klein.
- Formeln, die man lesen und vergleichen muss (Beispiele, Lernkarten, Quiz-Antworten, Hinweise), stehen eine Stufe größer (`.math-lines`, `.math-size-lg`). Ziel: Hochzahlen mindestens 14 px.
- In Tabellen (`array`) Brüche mit `\dfrac` schreiben, sonst werden Zähler und Nenner winzig.
- Achtung: KaTeX ab 0.19 benennt seine Klassen mit Präfix (`katex-sizing`, `katex-root`, `katex-base`). CSS, das KaTeX-Interna anspricht, muss diese Namen verwenden.

### Aufbau einer Regel-Erklärung

Jede Regel im Detail-Dialog hat dieselbe Reihenfolge (Felder siehe Kopf von `data/mathe-grundlagen.js`):

1. **Formel** als großer Block, darunter die **Bedingung**
2. **In Worten**: die Regel in einem einfachen Satz (Pflicht)
3. optional **Schritte** (nummeriert)
4. **Warum?** bzw. **Wozu?** mit optionaler Herleitung. Erklärt den Grund, nicht nur das Vorgehen, am besten mit einem Bild aus dem Alltag oder einem Muster.
5. **Beispiele**: vom Einfachen zum Schweren, Zwischenschritte zeigen, Proben mit ✓
6. **Typischer Fehler**: ✗ falsch, ✓ richtig, ein Satz warum. Nur echte, häufige Fehler.

Begriffe werden beim ersten Auftreten erklärt (Basis, Exponent, Wurzelexponent, kgV, ggT, faktorisieren).

Ausnahme: Die Sprechblase des Tipp-Hamsters zeigt reinen Text. Dort sind Unicode-Zeichen erlaubt (`(a − b)²`).

## 8. Chemie-Notation

- Summenformeln und Ionen als Unicode-Text: H₂O, CO₂, Na⁺, Cl⁻, Mg²⁺. Sie stehen oft in SVG-Grafiken, wo KaTeX nicht hinkommt.
- Elementsymbole immer mit großem Anfangsbuchstaben, Elementnamen auf Deutsch („Natrium“, „Chlor“).
- Bindungsstriche in Text: Cl–Cl (Halbgeviertstrich), O=O, N≡N.
- Farben der Stoffgruppen nur über `data-cat` und die Variablen `--c-alkali` … in `periodensystem.css`.

## 9. Hamster-Maskottchen

Das Modul liegt unverändert in `lib/hamster/`. Änderungen am Hamster selbst passieren im Modul-Projekt und werden dann komplett hierher kopiert.

- **Tipp-Hamster** auf jeder Lernseite: `UI.hamsterTips([…])` am Ende des Seiten-Scripts. 4–7 kurze Tipps zum Thema, in Du-Form, je höchstens zwei Sätze. Die Begrüßung kommt automatisch einmal pro Sitzung.
- **Ergebnis-Hamster** nach jedem Quiz: `UI.showResult(container, punkte, gesamt)`. Die Stimmung richtet sich nach dem Prozentwert (ab 80 % „Super“, ab 50 % „Schon gut“).
- **Erzähler** in Schritt-für-Schritt-Erklärungen: übernimmt der Erklär-Player automatisch (`D.cheer()` für einen Freudensprung).
- Größen und Ebene kommen aus `base.css` (`--hamster-size`, `--hamster-tip-size`, `--hamster-z`).
- Scroll-Seiten haben unten genug Abstand (`page--scroll`), damit der Hamster keinen Inhalt dauerhaft verdeckt.

## 10. Texte

- Sprache Deutsch, **Du-Form**, kurze Sätze, ein Gedanke pro Satz.
- Anführungszeichen „so“, Auslassung …, Pfeil →, Gedankenstriche sparsam.
- Knöpfe nennen die Handlung: „Quiz starten“, „Weiter“, „Nochmal“, „Schritt für Schritt erklärt“.
- Quiz-Rückmeldung: „Richtig! …“ bzw. „Richtig wäre …“ plus eine Erklärung in einem Satz.
- **Quiz-Hinweise: zeigen statt erklären.** `hint` ist die Regel als Überschrift in wenigen Worten („Gleiche Basis: Exponenten addieren.“). `hintShow` zeigt sie als Formel, **bevorzugt mit Variablen** ($a^m \cdot a^n = a^{m+n}$). Zahlenbeispiele nur, wo es mit Variablen nicht geht. Den entscheidenden Teil mit `\hl{…}` gelb hervorheben. Kein Fließtext, kein Ergebnis der eigentlichen Frage.
- **Hinweis = Lösungsweg der Aufgabe.** Soll eine Aufgabe mit einer bestimmten Regel gelöst werden (z. B. binomische Formel), zeigt der Hinweis genau diese Regel, keinen anderen Weg. Bei binomischen Formeln: die Formel plus was $a$ und $b$ hier sind. Fragt die Aufgabe nach der Formel selbst, zeigt der Hinweis sie mit einer Lücke (`\hl{?}`).

## 11. Barrierefreiheit

- Alles Klickbare ist ein `<button>` oder `<a>`, nie ein `<div>` mit Klick-Handler.
- Sichtbarer Fokus kommt global aus `:focus-visible`. Nicht entfernen.
- Dialoge: Fokus beim Öffnen auf ✕ oder die erste Antwort, Escape schließt.
- Farbe nie als einzige Information: Richtig und falsch haben zusätzlich Text („Richtig!“, ✓/✗).
- `prefers-reduced-motion` schaltet Animationen ab (global in `base.css`, der Hamster zeigt dann Standbilder).

## 12. Checkliste für eine neue Seite

1. Vorlage aus Abschnitt 3 kopieren, passende `page--…`-Klassen wählen.
2. Inhalte nach `data/<thema>.js`, Logik nach `js/<thema>.js`.
3. Nur Bausteine aus `base.css` verwenden. Neues Seiten-CSS nur für wirklich Seitenspezifisches, mit Tokens.
4. Formeln nach Abschnitt 7, Chemie nach Abschnitt 8.
5. Tipp-Hamster mit Tipps zum Thema, Ergebnis-Hamster am Quiz-Ende.
6. Auf der Übersichtsseite verlinken (`.choice`).
7. Prüfen: direkt per `file://` öffnen, Konsole ohne Fehler, Breite 390 px und 1366 px, alle Dialoge mit Escape schließbar.
