# Hamster-Maskottchen

Animierter Hamster für Lernseiten:

- **Ergebnis-Hamster:** reagiert nach einem Quiz mit einer von vier Stimmungen.
- **Tipp-Hamster:** sitzt in der Ecke und gibt Tipps in einer Sprechblase, ähnlich wie Karl Klammer.

Reines SVG mit einer kleinen 2D-Animations-Engine: keine Abhängigkeiten, kein Build-Schritt. Funktioniert auch, wenn die Seite direkt von der Festplatte geöffnet wird (`file://`).

## Dateien

| Datei | Zweck |
|---|---|
| `hamster.js` | die ganze Bibliothek (Figur, Engine, Clips, Ergebnis- und Tipp-Hamster) |
| `hamster.css` | Styles: Bühne, Konfetti, Ergebnis-Text, Sprechblase |
| `example.html` | Minimalbeispiel zum Ausprobieren |
| `dev/animationen.html` | Vorschau aller Animationen (mit Tempo-Regler und Pause) |
| `dev/gefuehle.html` | statische Posen, Werkzeug für das Design |

## Einbinden

```html
<link rel="stylesheet" href="hamster/hamster.css">
<script src="hamster/hamster.js"></script>
```

Das Script ist bewusst ein klassisches Script, kein ES-Modul. Browser blockieren Module bei `file://`. Es stellt das globale Objekt `Hamster` bereit. Das Script muss im `<body>` geladen werden (z. B. am Ende), nicht im `<head>`.

## Ergebnis-Hamster

```js
Hamster.show(container, punkte, gesamt, opts?)
```

Ersetzt den Inhalt von `container` durch den Hamster und den passenden Text. Der Hamster fällt ins Bild und spielt danach seine Stimmung in Schleife. Ein erneuter Aufruf ersetzt den alten Hamster, aufräumen ist nicht nötig.

| Stimmung | Bedingung (Standard) | Text |
|---|---|---|
| `perfect` | alles richtig | Perfekt!!! |
| `great` | ab 80 % | Super gemacht! |
| `ok` | ab 50 % | Schon gut! |
| `sad` | darunter | Weiter üben! |

`opts` (optional): `{ labels: { ok: "…" }, thresholds: { great: 0.8, ok: 0.5 } }`

## Tipp-Hamster

```js
const tipp = Hamster.tips({
  tips: ["Tipp 1", "Tipp 2"],     // Liste, wird gemischt durchlaufen
  greeting: "Hallo! …",           // optional: Begrüßung beim ersten Besuch pro Sitzung
  delay: 1500,                    // ms bis zum Erscheinen
  storageKey: "hamster-greeted",  // sessionStorage-Schlüssel für "schon begrüßt"
  remember: true,                 // false = jedes Mal begrüßen
  container: null,                // Element statt Fensterecke (dann position: relative nötig)
  texts: { tipTitle: "Tipp", greetingTitle: "Hallo!", more: "Noch ein Tipp",
           close: "Tipp schließen", open: "Tipp vom Hamster" }
});

tipp.tell();              // nächsten Tipp aus der Liste zeigen
tipp.tell("Text", "Titel"); // eigenen Text zeigen
tipp.close();             // Blase schließen, Hamster lugt über den Rand
tipp.destroy();           // Hamster entfernen
```

Ablauf:

1. Der Hamster springt von unten ins Bild und winkt.
2. Er erzählt: Der Text erscheint Buchstabe für Buchstabe, der Mund bewegt sich mit.
3. Danach wartet er: schaut sich um, kratzt sich oder gähnt.
4. Nach dem Schließen taucht er ab und lugt über den Rand. Seine Augen folgen der Maus.
5. Ein Klick auf ihn zeigt den nächsten Tipp.

## Weitere Funktionen

```js
Hamster.create(element, { mood: "great" })        // nackter Hamster ohne Text
Hamster.create(element, { clip: "idleYawn", hold: 0.5 })  // einzelnen Clip in Schleife
Hamster.moodFor(7, 10)                            // → "ok"
Hamster.defaults.labels.sad = "Nicht aufgeben!"   // Voreinstellungen für die ganze Seite
Hamster.setSpeed(0.5); Hamster.setPaused(true);   // gilt für alle Hamster
Hamster.clips                                     // Namen aller Clips
```

## Aussehen anpassen (CSS-Variablen)

```css
:root {
  --hamster-size: 160px;          /* Ergebnis-Hamster */
  --hamster-label-color: #e2e8f0; /* Ergebnis-Text (sonst var(--text)) */
  --hamster-tip-size: 130px;      /* Tipp-Hamster */
  --hamster-tip-left: 8px;
  --hamster-tip-bottom: 0px;
  --hamster-z: 9;                 /* über eigener Sidebar, unter Overlays */
  --hamster-bubble-bg: #fffdf7;
  --hamster-bubble-text: #1e293b;
  --hamster-accent: #d97706;
  --hamster-button-bg: #fbbf24;
}
```

## Barrierefreiheit

- Bei *Bewegung reduzieren* (`prefers-reduced-motion`) zeigt der Hamster Standbilder, ohne Konfetti und mit sofort vollständigem Text.
- Die Sprechblase wird über eine `aria-live`-Region vorgelesen, einmal vollständig und nicht Buchstabe für Buchstabe.
- Der Tipp-Hamster ist ein Button, also per Tastatur erreichbar.
