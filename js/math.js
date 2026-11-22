// Formelsatz mit KaTeX (lib/katex). Klassisches Script, stellt das globale Objekt MathTex bereit.
// Regeln für Formeln: siehe DESIGN.md, Abschnitt "Mathe-Formeln".
(function () {
  const OPTS = {
    throwOnError: false,
    strict: "ignore",
    macros: {
      // Deutsche Schreibweise: \div wird als ":" gesetzt (12 : 4), nicht als "÷".
      "\\div": "\\mathbin{:}",
      // \hl{…} hebt den entscheidenden Teil einer Formel gelb hervor (Hinweise, Muster)
      "\\hl": "\\textcolor{fbbf24}{#1}",   // Farbe ohne "#" – im Makro ist # das Argument-Zeichen
      "\\kgV": "\\operatorname{kgV}",
      "\\ggT": "\\operatorname{ggT}"
    }
  };

  // TeX → HTML. display = true: eigene Zeile, zentriert (Display-Modus).
  function tex(src, display) {
    return katex.renderToString(src, Object.assign({ displayMode: !!display }, OPTS));
  }

  // Inline, aber in Display-Größe (volle Brüche). Für Karten, Formelzeilen und Quiz.
  function big(src) {
    return tex("\\displaystyle " + src, false);
  }

  // Text mit eingebetteten Formeln → HTML.
  //   $…$   Formel im Text (kleine Brüche, passt in die Zeile)
  //   $$…$$ Formel als eigene Zeile
  // bigInline = true: auch $…$ in Display-Größe (für kurze Texte wie Quiz-Antworten).
  // Der Text selbst wird als HTML übernommen (nur eigene, vertrauenswürdige Inhalte!).
  function html(str, bigInline) {
    return String(str).replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, function (_, d, i) {
      if (d != null) return tex(d, true);
      return bigInline ? big(i) : tex(i, false);
    });
  }

  window.MathTex = { tex: tex, big: big, html: html };
})();
