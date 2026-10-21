"""Sugeneruoja assets/css/loader.css: taškai, kurie susidėlioja į S (Sufleris).

Naudojimas:  python3 scripts/loader-gen.py [taškų skaičius] [taško spindulys] [galų kampas]
Pvz.:        python3 scripts/loader-gen.py 7 1.75 60
Galų kampas: kiek S galai atitraukti nuo vidurio (didesnis = atviresnė S).
Palyginimas: 8 taškai gerai su 45, 7 su 60, 6 su 75 (abstrakti S), 5 jau zigzagas.
Taškų skaičius turi sutapti su assets/js/loader.js (LOADER_DOTS).
"""
import math, sys, re, pathlib

N = int(sys.argv[1]) if len(sys.argv) > 1 else 7
RAD = float(sys.argv[2]) if len(sys.argv) > 2 else 1.75
END = float(sys.argv[3]) if len(sys.argv) > 3 else 60
ROOT = pathlib.Path(__file__).resolve().parent.parent

def arc(cx, cy, r, a0, a1, n):
    return [(cx + r*math.cos(math.radians(a0 + (a1-a0)*t/n)), cy + r*math.sin(math.radians(a0 + (a1-a0)*t/n))) for t in range(n+1)]

# S: viršutinis lankas (centras 10,6) nuo viršaus dešinės per viršų ir kairę iki centro,
# apatinis lankas (centras 10,14) nuo centro per dešinę ir apačią iki apačios kairės. viewBox 0 0 20 20.
pts = arc(10, 6, 4, -END, -270, 500) + arc(10, 14, 4, -90, 180 - END, 500)[1:]
L = [0]
for a, b in zip(pts, pts[1:]): L.append(L[-1] + math.dist(a, b))
S = []
for i in range(N):
    target = L[-1] * i / (N - 1)
    j = min(range(len(L)), key=lambda k: abs(L[k] - target)); S.append(pts[j])
R = 6.2
ring = [(10 + R*math.cos(math.radians(-30 - 360*i/N)), 10 + R*math.sin(math.radians(-30 - 360*i/N))) for i in range(N)]
D = 2.6
step = 1.2 * 11 / N   # S „išsivynioja“ iš eilės
css = ["/* ==========================================================",
       f"   Įkėlimo animacija: {N} taškai, kurie susidėlioja į S (Sufleris), galai {END:.0f}°.",
       "   Sugeneruota: python3 scripts/loader-gen.py — ranka nekeisti.",
       "   ========================================================== */",
       ".ld { display: inline-grid; place-items: center; flex: 0 0 auto; color: var(--ai-accent, #3e9aa2); }",
       ".ld svg { display: block; overflow: visible; }",
       ".ld circle { fill: currentColor; }",
       "",
       "/* 1. S susidėlioja: taškų žiedas sukasi -> išsivynioja į S -> atgal */",
       f".ld-morph g {{ animation: ld-spin {D}s cubic-bezier(.65,0,.35,1) infinite; transform-origin: 10px 10px; }}",
       "@keyframes ld-spin { 0% { transform: rotate(0deg); } 36% { transform: rotate(360deg); } 100% { transform: rotate(360deg); } }"]
for i, ((rx, ry), (sx, sy)) in enumerate(zip(ring, S)):
    a, b = 34 + i*step, 52 + i*step
    css.append(f".ld-morph circle:nth-child({i+1}) {{ animation: ld-m{i} {D}s cubic-bezier(.65,0,.35,1) infinite; }}")
    css.append(f"@keyframes ld-m{i} {{ 0%, {a:.0f}% {{ transform: translate({rx:.2f}px, {ry:.2f}px); }} {b:.0f}%, 84% {{ transform: translate({sx:.2f}px, {sy:.2f}px); }} 100% {{ transform: translate({rx:.2f}px, {ry:.2f}px); }} }}")
css += ["", "/* 2. S banga: taškai stovi S forma, per juos bėga ryškumas nuo viršaus į apačią */"]
for i, (sx, sy) in enumerate(S):
    css.append(f".ld-wave circle:nth-child({i+1}) {{ transform: translate({sx:.2f}px, {sy:.2f}px); animation: ld-w 1.5s ease-in-out {i*0.9/N:.2f}s infinite; }}")
css += ["@keyframes ld-w { 0%, 100% { opacity: .22; } 30% { opacity: 1; } 60% { opacity: .22; } }",
        "", "/* 3. Žvaigždutė (kaip buvo) */",
        ".ld-spark svg { animation: sk-spin 1.6s linear infinite; }", "",
        "@media (prefers-reduced-motion: reduce) {", "  .ld * { animation: none !important; opacity: 1 !important; }"]
for i, (sx, sy) in enumerate(S):
    css.append(f"  .ld-morph circle:nth-child({i+1}) {{ transform: translate({sx:.2f}px, {sy:.2f}px); }}")
css.append("}")
(ROOT / 'assets/css/loader.css').write_text("\n".join(css) + "\n")

js = ROOT / 'assets/js/loader.js'
t = js.read_text()
t = re.sub(r"const LOADER_DOTS = \d+, LOADER_R = [\d.]+;", f"const LOADER_DOTS = {N}, LOADER_R = {RAD};", t)
js.write_text(t)
print(f"{N} taškai, r={RAD}, galai {END}°")
