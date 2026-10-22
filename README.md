# AI paieška: prototipas

Mokesčių SUFLERIO AI paieškos prototipas. Idėja: paieška beveik kaip Google. Viršuje AI blokas su citatomis iš SUFLERIO medžiagos ir patikslinimu, apačioje įprasti rezultatai. AI nedaro išvadų, tik padeda susiaurinti.

**Peržiūra:** https://richkus.github.io/ai-paieska/

## Versijos

Visos versijos yra viename puslapyje. Perjungiama apačioje kairėje per **Admin → Versija** arba nuoroda:

| Nuoroda | Kas tai |
|---|---|
| [`?v=1`](https://richkus.github.io/ai-paieska/?v=1) | **V1 · Inline patikslinimas.** Žingsnių juosta virš AI bloko, AI blokas dėžutėje, laisvas tekstas atskirame lauke. |
| [`?v=2`](https://richkus.github.io/ai-paieska/?v=2) | **V2 · Dešinė kolona.** Vienas įvesties laukas viršuje, pakeitus tekstą prasideda nauja paieška. AI blokas be dėžučių: citatos + klausimas, į kurį atsakoma chip'ais arba „Kita…“. Dešinėje būsena: paieškos eiga, šaltiniai, ankstesnės paieškos. |
| [`?v=3`](https://richkus.github.io/ai-paieska/?v=3) | **V3 · Paieškos antraštė.** Paieškos puslapyje viršutinė juosta paaukštėja ir apima tab'us. Atsakius į AI klausimą, klausimas perrašomas paieškos lauke, po juo „Patikslinom jūsų klausimą · Ieškoti pagal pradinį“. Dešinė kolona kaip V2. |
| [`?v=4`](https://richkus.github.io/ai-paieska/?v=4) | **V4 · Kaip Google** (numatytoji). AI bloke nėra antraštės ir patikslinimo pill'o, tik žymė „Iš SUFLERIO medžiagos“. Po citatomis „Susijusios paieškos“ (↳): paspaudus klausimas įsirašo į paieškos lauką ir prasideda nauja paieška, grįžtama naršyklės Atgal. Tab'ai: **DI režimas** (tik AI atsakymas), **Visi rezultatai** (AI + nuorodos), **Nuorodos** (paprasta paieška). |

Prototipas prasideda nuo tuščios būsenos: paspaudus paieškos lauką rodomi pavyzdiniai klausimai, po Enter matosi įkėlimas ir tada rezultatai. Klausimas lieka paieškos lauke.

Admin'e taip pat yra scenarijai (konkreti situacija, platus klausimas, trumpa frazė, nėra rezultatų) ir aktyvios versijos parametrai, jei jų yra. Senos nuorodos `v1/` ir `v2/` nukreipia į tą patį puslapį.

Įkėlimo animacijos (taškai susidėlioja į S, S banga, žvaigždutė) peržiūrimos [`loaderis.html`](https://richkus.github.io/ai-paieska/loaderis.html), prototipe perjungiamos per Admin → Įkėlimo animacija ir Taškų skaičius S raidėje (5–8).

Konkrečią būseną galima atidaryti nuoroda: `?v=3&s=savaitgalis&step=1` (scenarijai: `savaitgalis`, `komandiruote`, `pvm`, `nera`). Pridėjus `&shot=1` paslepiamas Admin mygtukas, patogu ekranams.

## Struktūra

```
index.html         prototipas: visos versijos, Alpine.js
assets/
  css/shell.css    karkasas: side meniu, viršutinė juosta, footeris (Figma 1:1)
  css/search.css   paieškos puslapis, V1 AI blokas, panel'is
  css/search-v2.css V2: AI blokas be dėžučių, dešinė kolona, PRO paywall
  css/filters.css  filtrų juosta (pill filtrai, popover'iai, mobile bottom sheet)
  css/admin.css    prototipo admin skydelis (neutralus, ne brando)
  css/loader.css   įkėlimo animacija: 5–8 taškai susidėlioja į S (generuoja scripts/loader-gen.py)
  js/loader.js     įkėlimo animacijos markup'as
  js/shell.js      įdeda karkasą į [data-shell] elementus
  js/data.js       pavyzdiniai scenarijai, rezultatai, filtrai
  img/             ikonos ir logotipas iš Figmos
v1/, v2/           nukreipimai į ?v=1 / ?v=2
```

## Nauja versija

1. `index.html` JS dalyje `VERSIONS` sąraše pridėk `{ id: 'v3', label, desc, params }`.
2. Markup'e pridėk bloką su `ver === 'v3'`. Karkasas, filtrai, rezultatai ir panel'is bendri.
3. `params` yra tos versijos admin nustatymai, rodomi tik kai versija aktyvi. Tipai: `radio` (`options`) ir `check` (`text`), reikšmė pasiekiama per `p.<key>`.

Karkasas: [Figma, „Ai: google paieška“](https://www.figma.com/design/Eg4Jdd6kmnopssrHpvWTbg/?node-id=3693-8115). Tekstai ir skaičiai yra pavyzdiniai.
