/* Įkėlimo animacijos markup'as (stiliai: assets/css/loader.css) */
window.LOADER = (kind, size = 18) => {
  if (kind === 'spark') return `<span class="ld ld-spark"><svg width="${size}" height="${size}" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5c.4 3.3 3.2 6.1 6.5 6.5-3.3.4-6.1 3.2-6.5 6.5-.4-3.3-3.2-6.1-6.5-6.5 3.3-.4 6.1-3.2 6.5-6.5Z" fill="currentColor"/></svg></span>`;
  const dots = Array.from({ length: 11 }, () => '<circle r="1.35"/>').join('');
  return `<span class="ld ld-${kind}"><svg width="${size}" height="${size}" viewBox="0 0 20 20" aria-hidden="true"><g>${dots}</g></svg></span>`;
};
