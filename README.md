# AI paieška: prototipas

Mokesčių SUFLERIO AI paieškos prototipas. Idėja: paieška beveik kaip Google. Viršuje AI blokas su citatomis iš SUFLERIO medžiagos ir patikslinimu, apačioje įprasti rezultatai. AI nedaro išvadų, tik padeda susiaurinti.

**Peržiūra:** https://richkus.github.io/ai-paieska/

## Versijos

Visos versijos yra viename puslapyje. Perjungiama apačioje kairėje per **Admin → Versija** arba nuoroda:

| Nuoroda | Kas tai |
|---|---|
| [`?v=2`](https://richkus.github.io/ai-paieska/?v=2) | **V2 · Dešinė kolona.** Vienas įvesties laukas viršuje, pakeitus tekstą prasideda nauja paieška. AI blokas be dėžučių: citatos + klausimas, į kurį atsakoma chip'ais arba „Kita…“. Dešinėje būsena: paieškos eiga, šaltiniai, ankstesnės paieškos. |
| [`?v=4`](https://richkus.github.io/ai-paieska/?v=4) | **V4 · Kaip Google** (numatytoji). AI bloke nėra antraštės ir patikslinimo pill'o, tik žymė „DI atrinktos ištraukos iš panašių situacijų“, šaltiniai mažais pill'ais citatos gale. Po citatomis „Tęskit temą“ (↳): paspaudus klausimas įsirašo į paieškos lauką ir prasideda nauja paieška, grįžtama naršyklės Atgal. Tab'ai (kurie rodomi, valdoma Admin → Tab'ai juostoje; netelpantys nukeliauja į „Daugiau ▾“): **DI režimas** (tik DI atsakymas), **Visi rezultatai** (DI + rezultatai), **Kompetencijų centras** (3 kompetencijos su moduliais, abstrakčiai), **Video**, **Tekstas** (tik tekstinė medžiaga, su filtrais), **Testai**, **Failai atsisiuntimui** (filtras pagal tipą ir formatą), **DI chatas** (numatytai paslėptas; pokalbio simuliatorius, pokalbiai `data.js` → `CHATS`), **DI pokalbis** (tas pats pokalbis pilname ekrane, numatytai paslėptas). |

Prototipas prasideda nuo tuščios būsenos: paspaudus paieškos lauką rodomi pavyzdiniai klausimai, po Enter matosi įkėlimas ir tada rezultatai. Paspaudus logotipą grįžtama į pradžią.

Admin'e taip pat yra scenarijai (konkreti situacija, platus klausimas, trumpa frazė, mažas panašumas, nėra rezultatų) ir aktyvios versijos parametrai, jei jų yra. Sena nuoroda `v2/` nukreipia į tą patį puslapį. V1 ir V3 išimtos (liko git istorijoje).

Įkėlimo animacijos su DI ikona (taškai susirenka į žvaigždę, žvaigždė nusipiešia, žvaigždė kvėpuoja su kometomis) peržiūrimos [`loaderis.html`](https://richkus.github.io/ai-paieska/loaderis.html), prototipe perjungiamos per Admin → Įkėlimo animacija.

Konkrečią būseną galima atidaryti nuoroda: `?v=4&s=savaitgalis&step=1` (scenarijai: `savaitgalis`, `komandiruote`, `pvm`, `mazai`, `nera`). Pridėjus `&shot=1` paslepiamas Admin mygtukas, patogu ekranams.

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
v2/                nukreipimas į ?v=2
```

## Nauja versija

1. `index.html` JS dalyje `VERSIONS` sąraše pridėk `{ id: 'v3', label, desc, params }`.
2. Markup'e pridėk bloką su `ver === 'v3'`. Karkasas, filtrai, rezultatai ir panel'is bendri.
3. `params` yra tos versijos admin nustatymai, rodomi tik kai versija aktyvi. Tipai: `radio` (`options`) ir `check` (`text`), reikšmė pasiekiama per `p.<key>`.

Karkasas: [Figma, „Ai: google paieška“](https://www.figma.com/design/Eg4Jdd6kmnopssrHpvWTbg/?node-id=3693-8115). Tekstai ir skaičiai yra pavyzdiniai.
