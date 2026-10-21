/* Įkėlimo animacijos markup'as (stiliai: assets/css/loader.css, generuojami scripts/loader-gen.py) */
const LOADER_DOTS = 7, LOADER_R = 1.75;
window.LOADER = (kind, size = 18) => {
  if (kind === 'spark') return `<span class="ld ld-spark"><svg width="${size}" height="${size}" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5c.4 3.3 3.2 6.1 6.5 6.5-3.3.4-6.1 3.2-6.5 6.5-.4-3.3-3.2-6.1-6.5-6.5 3.3-.4 6.1-3.2 6.5-6.5Z" fill="currentColor"/></svg></span>`;
  const dots = Array.from({ length: LOADER_DOTS }, () => `<circle r="${LOADER_R}"/>`).join('');
  return `<span class="ld ld-${kind}"><svg width="${size}" height="${size}" viewBox="0 0 20 20" aria-hidden="true"><g>${dots}</g></svg></span>`;
};
