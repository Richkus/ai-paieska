/* Įkėlimo animacijos markup'as (stiliai: assets/css/loader.css, generuojami scripts/loader-gen.py)
   LOADER(kind, size, n): kind = morph | wave | spark, n = taškų skaičius (5–8) */
window.LOADER = (kind, size = 18, n = 7) => {
  if (kind === 'spark') return `<span class="ld ld-spark"><svg width="${size}" height="${size}" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5c.4 3.3 3.2 6.1 6.5 6.5-3.3.4-6.1 3.2-6.5 6.5-.4-3.3-3.2-6.1-6.5-6.5 3.3-.4 6.1-3.2 6.5-6.5Z" fill="currentColor"/></svg></span>`;
  const r = { 8: 1.6, 7: 1.75, 6: 1.9, 5: 2.1 }[n] || 1.75;   // sutampa su scripts/loader-gen.py
  const dots = `<circle r="${r}"/>`.repeat(n);
  return `<span class="ld ld-${kind}" data-n="${n}"><svg width="${size}" height="${size}" viewBox="0 0 20 20" aria-hidden="true"><g>${dots}</g></svg></span>`;
};
