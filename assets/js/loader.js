/* Įkėlimo animacijos su DI ikona (stiliai assets/css/loader-ai.css).
   LOADER(kind, size)
     ai-dots   — taškai susirenka į DI žvaigždę
     ai-draw   — DI žvaigždė nusipiešia ir išsitrina
     ai-pulse  — DI žvaigždė „kvėpuoja“, pro šalį skrieja dvi kometos
     morph     — abstraktus: 7 taškai susidėlioja į S (stiliai assets/css/loader.css)
   Spalvos kaip DI ikonos (assets/img/ai.svg): #FF7F7D → #B85399. */
(function () {
  const C0 = [255, 127, 125], C1 = [184, 83, 153];
  const mix = t => `rgb(${C0.map((c, i) => Math.round(c + (C1[i] - c) * t)).join(',')})`;
  let uid = 0;

  // DI ikonos žvaigždė ir kometos (koordinatės iš ai.svg, viewBox 0 0 42 72)
  const STAR = 'M38.2266 36.9196C32.5848 36.9196 20.9004 40.8979 19.9004 53.0897C19.2735 47.8248 11.9273 36.9196 2.90039 36.9196C7.91532 36.3346 19.4004 30.5427 19.4004 20.7148C19.4004 25.3948 25.9004 36.3979 38.2266 36.9196Z';
  const LINE_A = 'M19.3984 69.3979L40.0923 48.8979', LINE_B = 'M1.89844 23.4082L23.0923 1.89795';
  const grad = id => `<defs><linearGradient id="${id}" x1="20.9" y1="26.4" x2="8.9" y2="58.4" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7F7D"/><stop offset="1" stop-color="#B85399"/></linearGradient></defs>`;
  const box = (size, inner, cls) => {
    const h = Math.round(size * 1.5), w = Math.round(h * 46 / 76);
    return `<span class="ld ${cls}"><svg width="${w}" height="${h}" viewBox="-2 -2 46 76" aria-hidden="true">${inner}</svg></span>`;
  };

  // Taškų vietos: žvaigždė (astroidė, artima ikonos formai) ir žiedas
  const starPts = n => Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2 + Math.PI / 4;
    const c = Math.cos(t), s = Math.sin(t);
    return [20.5 + 17.4 * Math.sign(c) * Math.abs(c) ** 3, 37 + 16 * Math.sign(s) * Math.abs(s) ** 3];
  });
  const ringPts = n => Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    return [20.5 + 14 * Math.cos(t), 37 + 14 * Math.sin(t)];
  });

  window.LOADER = (kind, size = 18) => {
    const id = 'ldg' + (++uid);
    if (kind === 'morph') {   // S iš taškų: spalvos nuo ikonos koralinės iki violetinės
      const n = 7, dots = Array.from({ length: n }, (_, i) => `<circle r="1.75" style="fill:${mix(i / (n - 1))}"/>`).join('');
      return `<span class="ld ld-morph" data-n="${n}"><svg width="${size}" height="${size}" viewBox="0 0 20 20" aria-hidden="true"><g>${dots}</g></svg></span>`;
    }
    if (kind !== 'ai-draw' && kind !== 'ai-pulse') {   // numatytoji: ai-dots
      const N = 12, a = ringPts(N), b = starPts(N);
      const dots = a.map((p, i) => `<circle r="2.6" style="fill:${mix(Math.abs(b[i][1] - 21) / 32)};--ax:${p[0].toFixed(2)}px;--ay:${p[1].toFixed(2)}px;--bx:${b[i][0].toFixed(2)}px;--by:${b[i][1].toFixed(2)}px;animation-delay:${(i * 0.025).toFixed(3)}s"/>`).join('');
      return box(size, `${grad(id)}<path class="ld-ai-line" d="${LINE_A}" stroke="#F0CFE3"/><path class="ld-ai-line is-b" d="${LINE_B}" stroke="#F0CFE3"/><path class="ld-ai-star" d="${STAR}" stroke="url(#${id})"/><g class="ld-ai-ring">${dots}</g>`, 'ld-ai ld-ai-dots');
    }
    if (kind === 'ai-draw') {
      return box(size, `${grad(id)}<path class="ld-ai-line" d="${LINE_A}" stroke="#F0CFE3" pathLength="1"/><path class="ld-ai-line is-b" d="${LINE_B}" stroke="#F0CFE3" pathLength="1"/><path class="ld-ai-star" d="${STAR}" stroke="url(#${id})" pathLength="1"/>`, 'ld-ai ld-ai-draw');
    }
    if (kind === 'ai-pulse') {
      return box(size, `${grad(id)}<path class="ld-ai-line" d="${LINE_A}" stroke="url(#${id})" pathLength="1"/><path class="ld-ai-line is-b" d="${LINE_B}" stroke="url(#${id})" pathLength="1"/><path class="ld-ai-star" d="${STAR}" stroke="url(#${id})"/>`, 'ld-ai ld-ai-pulse');
    }
  };
})();
