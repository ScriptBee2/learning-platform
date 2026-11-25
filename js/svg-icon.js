// Kleines Custom Element: lädt eine SVG-Datei und bindet sie inline ein.
// Nutzung:  <svg-icon class="step-arrow" src="../assets/arrow-down.svg"></svg-icon>
// Hinweis: nutzt fetch – funktioniert über http(s), nicht über file:// (Browser-Sperre).
class SvgIcon extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src');
    if (!src) return;

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`SVG nicht gefunden: ${src}`);

      const svgText = await response.text();
      this.innerHTML = svgText;
    } catch (error) {
      console.error(error);
    }
  }
}

customElements.define('svg-icon', SvgIcon);
