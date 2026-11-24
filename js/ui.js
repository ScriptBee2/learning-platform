// Gemeinsame Bedien-Helfer für alle Seiten. Klassisches Script (kein Modul),
// damit die Seiten auch direkt von der Festplatte (file://) laufen.
// Stellt das globale Objekt UI bereit.
(function () {
  // ---------- Seitenleiste auf-/zuklappen ----------
  // Auf schmalen Bildschirmen startet sie zugeklappt, weil sie dort den Inhalt überdeckt.
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("sidebarToggle");
  if (sidebar && toggle) {
    if (window.matchMedia("(max-width: 900px)").matches) sidebar.classList.add("sidebar--collapsed");
    const sync = function () {
      toggle.setAttribute("aria-expanded", String(!sidebar.classList.contains("sidebar--collapsed")));
    };
    sync();
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar--collapsed");
      sync();
    });
  }

  // ---------- Tipp-Hamster ----------
  // Einheitlicher Aufruf für alle Seiten: Begrüßung nur einmal pro Sitzung (seitenübergreifend).
  function hamsterTips(tips) {
    if (!window.Hamster) return null;
    return window.Hamster.tips({
      tips: tips,
      greeting: "Hallo! Ich bin Dr. Hermann, dein Lern-Hamster. Klick mich an, wenn du einen Tipp brauchst!",
      texts: { greetingTitle: "Dr. Hermann", tipTitle: "Dr. Hermann:", open: "Tipp von Dr. Hermann" },
      storageKey: "lernzentrum-begruesst"
    });
  }

  // ---------- Ergebnis-Hamster nach einem Quiz ----------
  function showResult(container, score, total) {
    if (!container) return;
    if (window.Hamster) window.Hamster.show(container, score, total);
    else container.innerHTML = "";
  }

  window.UI = { hamsterTips: hamsterTips, showResult: showResult };
})();
