# AI paieška: prototipas

Mokesčių SUFLERIO AI paieškos prototipas. Idėja: paieška beveik kaip Google. Viršuje AI blokas su citatomis iš SUFLERIO medžiagos ir patikslinimu, apačioje įprasti rezultatai. AI nedaro išvadų, tik padeda susiaurinti.

**Peržiūra:** https://richkus.github.io/ai-paieska/

## Variantai

| Aplankas | Kas tai |
|---|---|
| [`v1/`](v1/) | **Inline patikslinimas.** Patikslinimas vyksta toje pačioje vietoje, žingsnių juosta rodo, kaip mažėja rezultatų. Rezultatas atsidaro šoniniame panel'yje ties citata. |

Apačioje kairėje yra scenarijų perjungėjas (tik prototipui): konkreti situacija, platus klausimas, trumpa frazė, nėra rezultatų.

## Struktūra

```
assets/
  css/shell.css    karkasas: side meniu, viršutinė juosta, footeris (Figma 1:1)
  css/search.css   paieškos puslapis, AI blokas, panel'is
  js/shell.js      įdeda karkasą į [data-shell] elementus
  js/data.js       pavyzdiniai scenarijai ir rezultatai
  img/             ikonos ir logotipas iš Figmos
v1/index.html      variantas (Alpine.js)
index.html         variantų sąrašas
```

## Naujas variantas

1. Nukopijuok `v1/` į `v2/` ir keisk tik turinį.
2. Karkasas ateina iš `assets/js/shell.js`, jo kartoti nereikia.
3. Pridėk nuorodą į `index.html` ir lentelę čia.

Karkasas: [Figma, „Ai: google paieška“](https://www.figma.com/design/Eg4Jdd6kmnopssrHpvWTbg/?node-id=3693-8115). Tekstai ir skaičiai yra pavyzdiniai.
