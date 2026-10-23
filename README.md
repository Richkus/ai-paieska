# AI paieška: prototipas

Mokesčių SUFLERIO AI paieškos prototipas. Idėja: paieška beveik kaip Google. Viršuje AI blokas su citatomis iš SUFLERIO medžiagos ir patikslinimu, apačioje įprasti rezultatai. AI nedaro išvadų, tik padeda susiaurinti.

**Peržiūra:** https://richkus.github.io/ai-paieska/

## Kaip veikia

Viena versija (V4, kaip Google). DI elgiasi pagal tai, ką rado:

| Būsena | Ką rodom | Scenarijus |
|---|---|---|
| Normaliai rezultatų | **SUFLERIO DI santrauka:** DI apibendrinimas 2–3 sakiniais, kiekvieno gale šaltinio žymė (paspaudus atidaroma citata), disclaimeris „Esu DI, tai kaip žinot, galiu suklysti…“, po to „Tęskit temą“ | `savaitgalis` |
| Daug / plati tema | Vieno sakinio apžvalga ir užuominos tikslinti (🔍 sąrašas) | `komandiruote` |
| Nedaug ir tikslu | Vienas sakinys ir iškart rezultatai, be apibendrinimo | `nedaug` |
| Rasta, bet nepanašu | Tik rezultatai ir „Klausti eksperto“, DI neapibendrina | `mazai` |
| Nieko | „Klausti eksperto“ su įrašytu klausimu | `nera` |

Admin'e taip pat yra scenarijai (konkreti situacija, platus klausimas, trumpa frazė, mažas panašumas, nėra rezultatų) ir aktyvios versijos parametrai, jei jų yra. Ankstesnės versijos (V1–V3) išimtos, liko git istorijoje.

Įkėlimo animacijos su DI ikona (taškai susirenka į žvaigždę, žvaigždė nusipiešia, žvaigždė kvėpuoja su kometomis) peržiūrimos [`loaderis.html`](https://richkus.github.io/ai-paieska/loaderis.html), prototipe perjungiamos per Admin → Įkėlimo animacija.

Konkrečią būseną galima atidaryti nuoroda: `?v=4&s=savaitgalis&step=1` (scenarijai: `savaitgalis`, `komandiruote`, `nedaug`, `mazai`, `nera`; `&sum=quotes` rodo „mintis + citatos“). Pridėjus `&shot=1` paslepiamas Admin mygtukas, patogu ekranams.

## Struktūra

```
index.html         prototipas: visos versijos, Alpine.js
assets/
  css/shell.css    karkasas: side meniu, viršutinė juosta, footeris (Figma 1:1)
  css/search.css   paieškos puslapis, rezultatai, panel'is
  css/search-v2.css V2: AI blokas be dėžučių, dešinė kolona, PRO paywall
  css/filters.css  filtrų juosta (pill filtrai, popover'iai, mobile bottom sheet)
  css/admin.css    prototipo admin skydelis (neutralus, ne brando)
  css/loader-ai.css įkėlimo animacijos su DI ikona (ai-dots, ai-draw, ai-pulse)
  js/loader.js     įkėlimo animacijos markup'as
  js/shell.js      įdeda karkasą į [data-shell] elementus
  js/data.js       pavyzdiniai scenarijai, rezultatai, filtrai
  img/             ikonos ir logotipas iš Figmos
```

## Nauja versija

1. `index.html` JS dalyje `VERSIONS` sąraše pridėk `{ id: 'v3', label, desc, params }`.
2. Markup'e pridėk bloką su `ver === 'v3'`. Karkasas, filtrai, rezultatai ir panel'is bendri.
3. `params` yra tos versijos admin nustatymai, rodomi tik kai versija aktyvi. Tipai: `radio` (`options`) ir `check` (`text`), reikšmė pasiekiama per `p.<key>`.

Karkasas: [Figma, „Ai: google paieška“](https://www.figma.com/design/Eg4Jdd6kmnopssrHpvWTbg/?node-id=3693-8115). Tekstai ir skaičiai yra pavyzdiniai.
