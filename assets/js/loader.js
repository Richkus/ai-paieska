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
    if (kind === 'morph') {
      // Taškai sukasi ir susidėlioja į S (koordinatės 20×20, CSS loader.css), įdėti į DI ikonos rėmą,
      // kad radus DI atsakymą LOADER_RESOLVE galėtų juos sklandžiai paversti DI žvaigžde
      const n = 7, dots = Array.from({ length: n }, (_, i) => `<circle r="1.75" style="fill:${mix(i / (n - 1))}"/>`).join('');
      return box(size, `${grad(id)}<path class="ld-ai-line" d="${LINE_A}" stroke="#F0CFE3" pathLength="1"/><path class="ld-ai-line is-b" d="${LINE_B}" stroke="#F0CFE3" pathLength="1"/><path class="ld-ai-star" d="${STAR}" stroke="url(#${id})" pathLength="1"/><g transform="translate(1.5 18) scale(1.9)"><g class="ld-morph" data-n="${n}">${dots}</g></g>`, 'ld-ai ld-mo');
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

  // Radus atsakymą: taškai iš dabartinės vietos nuskrenda į DI žvaigždės kontūrą, žvaigždė nusipiešia,
  // taškai joje ištirpsta, galiausiai nusipiešia kometos. toAi = false: taškai tiesiog ramiai išnyksta.
  window.LOADER_RESOLVE = (root, toAi = true) => new Promise(done => {
    const svg = root && root.querySelector('svg'), spin = svg && svg.querySelector('.ld-morph');
    if (!spin || root.dataset.resolved) return done();
    root.dataset.resolved = '1';
    const ease = 'cubic-bezier(.65, 0, .35, 1)';
    const outer = svg.querySelector('g'), circles = [...spin.querySelectorAll('circle')];
    // Dabartinė kiekvieno taško vieta ekrane (įskaitant sukimą) perskaičiuojama į DI ikonos koordinates
    const toIcon = svg.getScreenCTM().inverse();
    const pts = circles.map(c => { const r = c.getBoundingClientRect(); return new DOMPoint(r.x + r.width / 2, r.y + r.height / 2).matrixTransform(toIcon); });
    const layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    circles.forEach((c, i) => { c.style.animation = 'none'; c.setAttribute('r', '3.3'); c.style.transform = `translate(${pts[i].x}px, ${pts[i].y}px)`; layer.appendChild(c); });
    outer.replaceWith(layer);
    if (!toAi) {
      circles.forEach((c, i) => c.animate([{ opacity: 1, transform: c.style.transform }, { opacity: 0, transform: c.style.transform + ' scale(.2)' }], { duration: 260, delay: i * 20, easing: 'ease-out', fill: 'forwards' }));
      return setTimeout(done, 420);
    }
    const star = svg.querySelector('.ld-ai-star'), lines = [...svg.querySelectorAll('.ld-ai-line')];
    const L = star.getTotalLength(), N = circles.length;
    circles.forEach((c, i) => {
      const t = star.getPointAtLength(L * i / N);
      c.animate([{ transform: c.style.transform }, { transform: `translate(${t.x}px, ${t.y}px) scale(.62)` }], { duration: 460, delay: i * 25, easing: ease, fill: 'forwards' });
      c.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, delay: 640 + i * 15, easing: 'ease-in', fill: 'forwards' });
    });
    star.style.strokeDasharray = 1;
    star.animate([{ opacity: 1, strokeDashoffset: 1 }, { opacity: 1, strokeDashoffset: 0 }], { duration: 440, delay: 420, easing: ease, fill: 'forwards' });
    lines.forEach((l, i) => { l.style.strokeDasharray = 1; l.style.opacity = 1; l.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 260, delay: 780 + i * 70, easing: 'ease-out', fill: 'both' }); });
    setTimeout(done, 1120);
  });
})();
