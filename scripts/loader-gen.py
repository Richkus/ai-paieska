"""Sugeneruoja assets/css/loader.css: taškai, kurie susidėlioja į S (Sufleris).

Kiekvienam taškų skaičiui atskiri stiliai (.ld[data-n="7"] ...), todėl
visi variantai gali veikti vienu metu. Naudojimas:  python3 scripts/loader-gen.py

VARIANTS: taškų skaičius -> (taško spindulys, galų kampas). Spindulį pakeitus,
pakeisk ir assets/js/loader.js.
Galų kampas: kiek S galai atitraukti nuo vidurio (didesnis = atviresnė S).
"""
import math, pathlib

VARIANTS = {8: (1.6, 45), 7: (1.75, 60), 6: (1.9, 75), 5: (2.1, 75)}
ROOT = pathlib.Path(__file__).resolve().parent.parent
D = 2.6  # vieno ciklo trukmė, s

def arc(cx, cy, r, a0, a1, n):
    return [(cx + r*math.cos(math.radians(a0 + (a1-a0)*t/n)), cy + r*math.sin(math.radians(a0 + (a1-a0)*t/n))) for t in range(n+1)]

def s_points(n, end):
    # viewBox 0 0 20 20: viršutinis lankas (centras 10,6), apatinis (centras 10,14)
    pts = arc(10, 6, 4, -end, -270, 500) + arc(10, 14, 4, -90, 180 - end, 500)[1:]
    L = [0]
    for a, b in zip(pts, pts[1:]): L.append(L[-1] + math.dist(a, b))
    out = []
    for i in range(n):
        t = L[-1] * i / (n - 1)
        out.append(pts[min(range(len(L)), key=lambda k: abs(L[k] - t))])
    return out

css = ["/* ==========================================================",
       "   Įkėlimo animacija: taškai, kurie susidėlioja į S (Sufleris).",
       "   Sugeneruota: python3 scripts/loader-gen.py — ranka nekeisti.",
       "   ========================================================== */",
       ".ld { display: inline-grid; place-items: center; flex: 0 0 auto; color: var(--ai-accent, #3e9aa2); }",
       ".ld svg { display: block; overflow: visible; }",
       ".ld circle { fill: currentColor; }",
       f".ld-morph g {{ animation: ld-spin {D}s cubic-bezier(.65,0,.35,1) infinite; transform-origin: 10px 10px; }}",
       "@keyframes ld-spin { 0% { transform: rotate(0deg); } 36% { transform: rotate(360deg); } 100% { transform: rotate(360deg); } }",
       "@keyframes ld-w { 0%, 100% { opacity: .22; } 30% { opacity: 1; } 60% { opacity: .22; } }",
       ".ld-spark svg { animation: sk-spin 1.6s linear infinite; }"]
reduced = []
for n, (rad, end) in VARIANTS.items():
    S = s_points(n, end)
    ring = [(10 + 6.2*math.cos(math.radians(-30 - 360*i/n)), 10 + 6.2*math.sin(math.radians(-30 - 360*i/n))) for i in range(n)]
    step = 1.2 * 11 / n
    css += ["", f"/* ---- {n} taškai (galai {end}°, spindulys {rad} nustatomas loader.js) ---- */"]
    for i, ((rx, ry), (sx, sy)) in enumerate(zip(ring, S)):
        a, b = 34 + i*step, 52 + i*step
        css.append(f'.ld-morph[data-n="{n}"] circle:nth-child({i+1}) {{ animation: ld-m{n}-{i} {D}s cubic-bezier(.65,0,.35,1) infinite; }}')
        css.append(f"@keyframes ld-m{n}-{i} {{ 0%, {a:.0f}% {{ transform: translate({rx:.2f}px, {ry:.2f}px); }} {b:.0f}%, 84% {{ transform: translate({sx:.2f}px, {sy:.2f}px); }} 100% {{ transform: translate({rx:.2f}px, {ry:.2f}px); }} }}")
        css.append(f'.ld-wave[data-n="{n}"] circle:nth-child({i+1}) {{ transform: translate({sx:.2f}px, {sy:.2f}px); animation: ld-w 1.5s ease-in-out {i*0.9/n:.2f}s infinite; }}')
        reduced.append(f'  .ld-morph[data-n="{n}"] circle:nth-child({i+1}) {{ transform: translate({sx:.2f}px, {sy:.2f}px); }}')
css += ["", "@media (prefers-reduced-motion: reduce) {", "  .ld * { animation: none !important; opacity: 1 !important; }"] + reduced + ["}"]
(ROOT / 'assets/css/loader.css').write_text("\n".join(css) + "\n")
print("variantai:", ", ".join(f"{n} taškai" for n in VARIANTS))
