# Learning Platform

A static, browser-based tutoring tool for **Mathematics** and **Chemistry** — no build step, no server, no dependencies to install. Open any HTML file directly in a browser and start learning.

---

## What's inside

### Mathematics
| Page | Content |
|---|---|
| `html/mathe.html` | Subject hub — links to all math sections |
| `html/mathe-grundlagen.html` | Foundations: order of operations, signs, fractions, powers, roots, binomial formulas — rule cards, flashcards, mixed quiz |
| `html/mathe-termumformung.html` | Term transformation: factoring out, expanding, factorising, rational expressions, simplifying roots — rule cards, flashcards, mixed quiz, **practice exercises with step-by-step solutions** |

### Chemistry
| Page | Content |
|---|---|
| `html/chemie.html` | Subject hub |
| `html/bindungsarten.html` | Types of chemical bonds (ionic, covalent, metallic) — comparison table, flashcards, drag-and-drop quiz |
| `html/periodensystem.html` | Periodic table — interactive element details, bond builder, element quiz, octet rule explainer |

---

## Features

- **Rule cards** — tap to open a full detail view with derivation, word description, and common mistakes
- **Flashcards** — swipeable card stack in the sidebar
- **Mixed quiz** — multiple-choice questions with instant feedback and hints
- **Practice exercises** (math) — topic filter + difficulty toggle (easy / medium / hard); each task has a tip and a full step-by-step explainer with a Hamster tutor, highlighted rules, and color-coded explanations
- **Step-by-step explainers** — paginated stepper with one idea per screen, used for both chemistry concepts and math solution paths
- **KaTeX rendering** — all formulas rendered via KaTeX (bundled, offline-capable)

---

## Tech stack

| Layer | Detail |
|---|---|
| Structure | Plain HTML5, one file per page |
| Styling | Custom CSS design system (`css/base.css` + page-specific files), CSS custom properties, container queries |
| Logic | Vanilla JS, no framework, no bundler |
| Math | [KaTeX](https://katex.org/) — bundled under `lib/katex/` |
| Mascot | Custom Hamster animation library — bundled under `lib/hamster/` |
| Data | JS data files under `data/` — rule cards, quiz questions, practice tasks |

---

## Project structure

```
learning-platform/
├── html/               # One HTML file per page
├── css/
│   ├── base.css        # Design system: tokens, layout, shared components
│   ├── grundlagen.css  # Math-specific styles
│   └── explainer.css   # Step-by-step explainer component
├── js/
│   ├── ui.js           # Shared UI helpers (Hamster result screen etc.)
│   ├── math.js         # KaTeX wrapper (MathTex.big / MathTex.html)
│   ├── termumformung.js
│   └── uebungen.js     # Practice exercise engine
├── data/               # Content: rule cards, quizzes, practice tasks
├── lib/
│   ├── katex/          # KaTeX — bundled, no CDN needed
│   └── hamster/        # Hamster mascot animations
└── README.md
```

---

## Running locally

No build step required. Open any HTML file directly:

```
# Option A — file protocol (simplest)
open html/mathe-termumformung.html

# Option B — local server (avoids any browser file:// restrictions)
npx serve .
# then visit http://localhost:3000/html/mathe-termumformung.html
```

---

## Adding content

**New rule card or quiz question** → edit the corresponding file in `data/`.

**New practice task** → add an entry to `data/uebungen-termumformung.js` following the schema:

```js
{
  topic: "ausklammern",          // filter key
  level: "easy",                 // "easy" | "medium" | "hard"
  type: "Klammere aus",          // shown as eyebrow label
  q: "6x + 9",                   // KaTeX string — the question
  note: "Hint text (no spoilers)",
  solution: [
    {
      title: "Step title",
      rule: "a(b+c) = ab + ac",   // optional — rendered as highlighted formula box
      text: "<p>Explanation with <b>colors</b> and $inline math$</p>",
      tex: "6x + 9 = 3(2x + 3)"  // optional — large display formula
    }
  ]
}
```

**New page** → copy an existing HTML page, update the `<title>`, swap the data/JS references, and link it from the relevant hub (`mathe.html` or `chemie.html`).
