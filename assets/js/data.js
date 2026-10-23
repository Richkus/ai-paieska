/* ==========================================================
   Pavyzdiniai duomenys prototipui. Tekstai ir skaičiai sugalvoti,
   tik struktūrai parodyti, ne tikras Suflerio turinys.

   Scenarijus = užklausa + žingsniai. Kiekvienas žingsnis:
     count   - kiek rezultatų po šito žingsnio
     ai      - viršutinis blokas (quotes | directions | low | empty)
     results - rezultatų id sąraše
   Paspaudus bet kurį patikslinimą einama į kitą žingsnį.
   ========================================================== */
window.RESULTS = {
  r1:  { type: 'Praktinė situacija', date: '2026-03-12', title: 'Darbuotojas dirbo poilsio dieną: kaip kompensuoti',
         snippet: 'Kai darbuotojas dirba poilsio dieną, kuri nebuvo numatyta jo darbo grafike, darbdavys gali apmokėti didesniu tarifu arba, darbuotojui paprašius, suteikti kitą poilsio dieną.',
         quote: 'Darbuotojo prašymu vietoj padidinto apmokėjimo gali būti suteikiama kita poilsio diena. Svarbu, kad prašymas būtų įformintas raštu.' },
  r2:  { type: 'Konsultacija', date: '2025-11-04', title: 'Ar galima laisva diena vietoj dvigubo apmokėjimo?',
         snippet: 'Klausimas: darbuotojas savaitgalį dirbo inventorizacijoje ir nori laisvos dienos, o ne priedo. Kaip tai įforminti?',
         quote: 'Laisvą dieną reikėtų suteikti per protingą laiką, o darbo laiko apskaitos žiniaraštyje pažymėti ir darbą poilsio dieną, ir suteiktą poilsio dieną.' },
  r3:  { type: 'Praktinė situacija', date: '2026-01-20', title: 'Darbas poilsio ir švenčių dienomis: dažniausios klaidos',
         snippet: 'Apžvelgiame, kaip apskaičiuoti apmokėjimą už darbą poilsio ir švenčių dienomis, kada reikalingas darbuotojo sutikimas ir kaip tai pažymėti apskaitoje.',
         quote: 'Dažniausia klaida, kai laisva diena suteikiama, bet darbo laiko apskaitos žiniaraštyje nepažymima, už kurią poilsio dieną ji suteikta.' },
  r4:  { type: 'Renginio įrašas', date: '2026-07-09', title: 'Darbo laiko apskaita 2026: suminė apskaita ir grafikai',
         snippet: '3 dalis: darbas poilsio dienomis, kai taikoma suminė darbo laiko apskaita.', part: '3 dalis · 24:10',
         quote: 'Kai taikoma suminė apskaita, savaitgalis gali būti įprasta darbo diena pagal grafiką, tada papildomos kompensacijos nereikia.' },
  r5:  { type: 'Testas', date: '2026-09-10', title: 'Darbo užmokestis: poilsio ir švenčių dienos',
         snippet: 'Pasitikrinkite žinias apie darbo užmokestį už darbą poilsio ir švenčių dienomis. 10 klausimų.' },
  r6:  { type: 'Atmintinė', date: '2025-06-02', title: 'Prašymas suteikti kitą poilsio dieną (forma)',
         snippet: 'Pavyzdinė darbuotojo prašymo forma, kai vietoj padidinto apmokėjimo už darbą poilsio dieną prašoma suteikti kitą poilsio dieną.',
         quote: 'Prašyme nurodoma data, kurią dirbta poilsio dieną, ir pageidaujama laisvos dienos data.' },
  r7:  { type: 'Praktinė situacija', date: '2024-12-18', title: 'Darbas švenčių dieną ir viršvalandžiai: kaip skaičiuoti',
         snippet: 'Kai darbas švenčių dieną kartu yra ir viršvalandinis, kyla klausimas, kaip skaičiuoti apmokėjimą.' },

  k1:  { type: 'Praktinė situacija', date: '2026-02-03', title: 'Dienpinigiai 2026: dydžiai ir apmokestinimas',
         snippet: 'Kokio dydžio dienpinigiai mokami komandiruotėse Lietuvoje ir užsienyje, kada jie neapmokestinami GPM ir kaip juos įforminti.',
         quote: 'Dienpinigiai neapmokestinami tik neviršijant nustatytų dydžių. Viršijanti dalis laikoma su darbo santykiais susijusiomis pajamomis.' },
  k2:  { type: 'Praktinė situacija', date: '2025-09-15', title: 'Vienos dienos komandiruotė: ar mokėti dienpinigius?',
         snippet: 'Darbuotojas išvyko ryte ir grįžo vakare. Ar priklauso dienpinigiai ir kokio dydžio?',
         quote: 'Vienos dienos komandiruotei Lietuvoje dienpinigiai mokami, jei komandiruotė įforminta įsakymu ir darbuotojas vyko į kitą vietovę.' },
  k3:  { type: 'Konsultacija', date: '2026-05-21', title: 'Komandiruotė į užsienį: dienpinigiai ir nakvynė',
         snippet: 'Kaip skaičiuoti dienpinigius, kai darbuotojas vyksta į kelias šalis per vieną komandiruotę.',
         quote: 'Kai per vieną komandiruotę lankomasi keliose šalyse, dienpinigiai skaičiuojami pagal šalį, kurioje darbuotojas buvo tą dieną.' },
  k4:  { type: 'Skaičiuoklė', date: '2026-01-02', title: 'Dienpinigių skaičiuoklė',
         snippet: 'Įveskite šalį ir komandiruotės trukmę, skaičiuoklė parodys dienpinigių sumą.' },
  k5:  { type: 'Renginio įrašas', date: '2026-04-16', title: 'Komandiruotės nuo A iki Z',
         snippet: '2 dalis: kelionės ir nakvynės išlaidų dokumentai.', part: '2 dalis · 31:45' },
  k6:  { type: 'Sąvadas', date: '2026-03-01', title: 'Komandiruočių išlaidos: viskas vienoje vietoje',
         snippet: 'Teminis rinkinys apie dienpinigius, kelionės, nakvynės ir kitas komandiruočių išlaidas.' },

  p1:  { type: 'Testas', date: '2026-09-10', title: 'Nekilnojamasis turtas: PM ir PVM (II)',
         snippet: 'NT pardavimo apmokestinimas PVM, nuo perkainotos turto vertės skaičiuojamas nusidėvėjimas ir kiti klausimai.' },
  p2:  { type: 'Testas', date: '2026-09-23', title: 'Palūkanos: PM ir PVM klausimai',
         snippet: 'Iš užsienio gautų paskolų palūkanos ir atvirkštinis PVM, pelno mokesčio prie pajamų šaltinio taikymas.' },
  p3:  { type: 'Praktinė situacija', date: '2026-08-28', title: 'PVM sąskaitų faktūrų registro pakeitimai nuo 2027 m.',
         snippet: 'Kas keičiasi teikiant PVM sąskaitų faktūrų duomenis ir ką reikėtų pasiruošti iš anksto.',
         quote: 'Pasirengti verta jau dabar: patikrinkite, ar apskaitos programa palaiko naujus duomenų laukus.' },
  p4:  { type: 'Praktinė situacija', date: '2026-06-11', title: 'Kada privaloma registruotis PVM mokėtoju',
         snippet: 'Apyvartos riba, savanoriška registracija ir dažniausios situacijos smulkiam verslui.',
         quote: 'Registruotis reikia, kai per paskutinius 12 mėnesių apyvarta viršija nustatytą ribą.' },
  g1:  { type: 'Praktinė situacija', date: '2025-05-14', title: 'Reprezentacinės sąnaudos: kas priskiriama ir kiek atskaitoma',
         snippet: 'Kokios išlaidos laikomos reprezentacinėmis ir kokia jų dalis gali būti atskaitoma apskaičiuojant pelno mokestį.' },
  g2:  { type: 'Konsultacija', date: '2024-11-27', title: 'Dovanos darbuotojams: ar apmokestinama GPM?',
         snippet: 'Darbdavys darbuotojams kalėdų proga dovanoja dovanų kuponus. Ar tai darbuotojų pajamos?' },
  g3:  { type: 'Praktinė situacija', date: '2025-02-06', title: 'Įmonės renginys darbuotojams: mokesčiai',
         snippet: 'Kaip apmokestinamos įmonės organizuoto renginio išlaidos, kai jame dalyvauja tik darbuotojai.' },
  p5:  { type: 'Mokesčių naujiena', date: '2026-10-02', title: 'Keičiasi PVM deklaracijos pildymo taisyklės',
         snippet: 'VMI patvirtino naują PVM deklaracijos formą. Ji bus taikoma nuo kito mokestinio laikotarpio.' },
};

window.SCENARIOS = [
  {
    id: 'savaitgalis',
    label: 'Konkreti situacija',
    query: 'Darbuotojas dirbo šeštadienį, ar galiu jam duoti laisvą dieną?',
    classicCount: 1949,
    steps: [
      {
        count: 38,
        results: ['r1', 'r2', 'r3', 'r4', 'r6', 'r5', 'r7'],
        ai: {
          kind: 'quotes',
          heading: 'Darbas poilsio dieną: laisva diena vietoj apmokėjimo',
          quotes: [{ id: 'r1' }, { id: 'r2' }],
          ask: 'Ar šeštadienis buvo numatytas jo darbo grafike?',
          chips: ['Ne, dirbo papildomai', 'Taip, dirba pagal suminę apskaitą', 'Nežinau, kaip tai patikrinti'],
        },
      },
      {
        count: 4,
        results: ['r1', 'r2', 'r6', 'r3'],
        ai: {
          kind: 'quotes',
          heading: 'Laisva diena už darbą poilsio dieną, kuri nebuvo grafike',
          quotes: [{ id: 'r2' }, { id: 'r6' }, { id: 'r3' }],
          ask: 'Ar dar kažką norit patikslinti?',
          chips: ['Kaip pažymėti žiniaraštyje', 'Per kiek laiko reikia suteikti dieną'],
        },
      },
      {
        count: 2,
        results: ['r3', 'r2'],
        ai: {
          kind: 'quotes',
          heading: 'Kaip pažymėti suteiktą poilsio dieną apskaitoje',
          quotes: [{ id: 'r3' }, { id: 'r2' }],
          ask: 'Jei vis dar ne tai, parašykit savais žodžiais.',
          chips: [],
        },
      },
    ],
  },
  {
    id: 'komandiruote',
    label: 'Platus klausimas',
    query: 'Ką reikia žinoti apie komandiruotės išlaidas?',
    classicCount: 412,
    steps: [
      {
        count: 412,
        results: ['k6', 'k1', 'k5', 'k2', 'k3', 'k4'],
        ai: {
          kind: 'directions',
          heading: 'Tema plati. Kas jums aktualiausia?',
          overview: 'Komandiruočių išlaidos apima dienpinigius, kelionės ir nakvynės išlaidas, komandiruotes į užsienį ir jų įforminimą.',
          lead: 'Apie komandiruotės išlaidas yra kelios temos. Ką norit sužinoti?',
          directions: [
            { label: 'Dienpinigiai', count: 124, hint: 'dydžiai, GPM, vienos dienos komandiruotė' },
            { label: 'Kelionės ir nakvynės išlaidos', count: 86, hint: 'dokumentai, limitai' },
            { label: 'Komandiruotė į užsienį', count: 57, hint: 'kelios šalys, valiuta' },
            { label: 'Įforminimas ir apskaita', count: 41, hint: 'įsakymas, avansinė apyskaita' },
          ],
        },
      },
      {
        count: 24,
        results: ['k1', 'k2', 'k3', 'k4', 'k6'],
        ai: {
          kind: 'quotes',
          heading: 'Dienpinigiai: kada neapmokestinami ir kiek mokėti',
          quotes: [{ id: 'k1' }, { id: 'k2' }],
          ask: 'Kur vyksta komandiruotė?',
          chips: ['Lietuvoje', 'Užsienyje', 'Keliose šalyse'],
        },
      },
      {
        count: 6,
        results: ['k3', 'k1', 'k4'],
        ai: {
          kind: 'quotes',
          heading: 'Dienpinigiai komandiruotėje užsienyje',
          quotes: [{ id: 'k3' }, { id: 'k1' }],
          ask: 'Jei vis dar ne tai, parašykit savais žodžiais.',
          chips: [],
        },
      },
    ],
  },
  {
    id: 'nedaug',
    label: 'Nedaug ir tikslu',
    query: 'Kaip žiniaraštyje pažymėti laisvą dieną už darbą poilsio dieną?',
    classicCount: 3,
    steps: [
      {
        count: 3,
        results: ['r3', 'f4', 'r2'],
        // Rezultatų nedaug ir jie tikslūs: DI neapibendrina, tik vienu sakiniu pasako, kad tai tinka
        ai: { kind: 'few', heading: 'Šios 3 medžiagos atitinka jūsų klausimą', chips: [] },
      },
    ],
  },
  {
    id: 'mazai',
    label: 'Mažas panašumas',
    query: 'Ar galima į sąnaudas įtraukti tortą darbuotojo gimtadieniui?',
    classicCount: 23,
    steps: [
      {
        count: 23,
        results: ['g1', 'g3', 'g2'],
        // Situacijos rastos, bet nė viena tiksliai neatitinka: DI ištraukų nerodom
        ai: { kind: 'low', heading: 'Tiksliai panašių situacijų neradom', ask: 'Peržiūrėkit rezultatus žemiau arba klauskit eksperto.', chips: [] },
      },
    ],
  },
  {
    id: 'nera',
    label: 'Nėra rezultatų',
    query: 'Kaip apmokestinti kriptovaliutų kasimą Estijoje?',
    classicCount: 0,
    steps: [
      {
        count: 0,
        results: [],
        ai: {
          kind: 'empty',
          heading: 'Šia tema medžiagos neradom',
          ask: 'Pabandykit plačiau arba užduokit klausimą ekspertui.',
          chips: ['Kriptovaliutų apmokestinimas', 'Pajamos iš užsienio'],
        },
      },
    ],
  },
];

/* ==========================================================
   Filtrai. Reikšmės paimtos iš dabartinės paieškos (Rubrika, Tema,
   Data); Formatas pavyzdinis. Rezultatams priskiriama pagal tipą.
   ========================================================== */
window.FILTERS = {
  rub: {
    label: 'Rubrika',
    options: ['Mokesčių naujienos', 'Praktinės situacijos', 'Seminarai ir vaizdo įrašai', 'Video santraukos', 'Savaitės apžvalga', 'Skaičiuoklės', 'Testai', 'Tinklalaidės', 'Trumpai', 'Geroji praktika', 'PRO Mikroskopą', 'PRO komentarai', 'Profilaktika', 'PRO konsultacijos'],
  },
  tema: {
    label: 'Tema',
    search: true,
    options: ['Darbo laikas', 'Darbo užmokestis', 'Komandiruotės', 'PVM', 'PVM sąskaitos faktūros', 'Transportas ir logistika', 'NT ir statyba', 'Gamyba ir tarptautinė prekyba', 'Išmanioji VMI', 'Paskolos', 'Ilgalaikis turtas', 'Automobiliai', 'Atostogos'],
  },
  fmt: {
    label: 'Formatas',
    options: ['Tekstas', 'Video', 'Skaičiuoklė', 'Testas', 'Dokumento forma'],
  },
  data: {
    label: 'Data',
    single: true,
    options: [
      { id: '30d', label: 'Pastarosios 30 dienų', from: '2026-09-20' },
      { id: '6m', label: 'Pastarasis pusmetis', from: '2026-04-20' },
      { id: '2026', label: '2026 metai', from: '2026-01-01', to: '2026-12-31' },
      { id: '2025', label: '2025 metai', from: '2025-01-01', to: '2025-12-31' },
      { id: '2024', label: '2024 metai', from: '2024-01-01', to: '2024-12-31' },
      { id: 'old', label: '2023 metai ir anksčiau', to: '2023-12-31' },
    ],
  },
};

(function tagResults() {
  const rub = { 'Praktinė situacija': 'Praktinės situacijos', 'Konsultacija': 'PRO konsultacijos', 'Straipsnis': 'Geroji praktika', 'Renginio įrašas': 'Seminarai ir vaizdo įrašai', 'Testas': 'Testai', 'Skaičiuoklė': 'Skaičiuoklės', 'Mokesčių naujiena': 'Mokesčių naujienos', 'Atmintinė': 'Trumpai', 'Sąvadas': 'Geroji praktika' };
  const fmt = { 'Renginio įrašas': 'Video', 'Testas': 'Testas', 'Skaičiuoklė': 'Skaičiuoklė', 'Atmintinė': 'Dokumento forma' };
  const tema = { r: 'Darbo laikas', k: 'Komandiruotės', p: 'PVM', g: 'Darbo užmokestis' };
  Object.entries(window.RESULTS).forEach(([id, r]) => {
    r.rub = rub[r.type] || 'Mokesčių naujienos';
    r.fmt = fmt[r.type] || 'Tekstas';
    r.pro = r.rub.startsWith('PRO');
    r.tema = id === 'p3' ? 'PVM sąskaitos faktūros' : (id === 'r7' ? 'Darbo užmokestis' : tema[id[0]]);
  });
})();

/* AI pačios pritaikyti filtrai pagal scenarijaus žingsnį */
(function aiFilters() {
  const S = Object.fromEntries(window.SCENARIOS.map(s => [s.id, s]));
  S.savaitgalis.steps.forEach(s => { s.filters = { tema: ['Darbo laikas'] }; });
  S.komandiruote.steps[1].filters = { tema: ['Komandiruotės'] };
  S.komandiruote.steps[2].filters = { tema: ['Komandiruotės'] };
})();

/* V3: AI perrašytas klausimas po kiekvieno patikslinimo (įrašomas į paieškos lauką) */
(function rewrites() {
  const S = Object.fromEntries(window.SCENARIOS.map(s => [s.id, s]));
  const rq = {
    savaitgalis: ['Kaip suteikti laisvą dieną už darbą šeštadienį, kai jis nebuvo grafike?', 'Kaip žiniaraštyje pažymėti laisvą dieną už darbą poilsio dieną?'],
    komandiruote: ['Kokio dydžio dienpinigiai ir kada jie neapmokestinami?', 'Kaip skaičiuoti dienpinigius komandiruotėje užsienyje?'],
  };
  Object.entries(rq).forEach(([id, list]) => list.forEach((q, i) => { S[id].steps[i + 1].rq = q; }));
})();

/* V4: susijusios paieškos (kaip Google). Paspaudus tampa nauja paieška, prototipe veda į kitą žingsnį */
(function related() {
  const S = Object.fromEntries(window.SCENARIOS.map(s => [s.id, s]));
  const rel = {
    savaitgalis: [
      ['Kaip suteikti laisvą dieną už darbą šeštadienį, kai jis nebuvo grafike?', 'Laisva diena už darbą šeštadienį taikant suminę darbo laiko apskaitą', 'Kaip patikrinti, ar šeštadienis buvo darbuotojo grafike?'],
      ['Kaip žiniaraštyje pažymėti laisvą dieną už darbą poilsio dieną?', 'Per kiek laiko reikia suteikti laisvą dieną už darbą poilsio dieną?', 'Ar darbuotojas gali atsisakyti laisvos dienos ir gauti dvigubą apmokėjimą?'],
    ],
    komandiruote: [
      ['Kokio dydžio dienpinigiai ir kada jie neapmokestinami?', 'Kokias kelionės ir nakvynės išlaidas galima kompensuoti?', 'Ką apmokėti, kai komandiruotė į užsienį?', 'Kaip įforminti komandiruotę ir avansinę apyskaitą?'],
      ['Kaip skaičiuoti dienpinigius komandiruotėje užsienyje?', 'Dienpinigiai komandiruotėje Lietuvoje', 'Dienpinigiai, kai komandiruotė į kelias šalis'],
    ],
  };
  Object.entries(rel).forEach(([id, list]) => list.forEach((r, i) => { S[id].steps[i].related = r; }));
})();

/* ==========================================================
   V4 · DI chatas (simuliatorius). Kiekvienam scenarijui iš anksto
   surašytas pokalbis: DI klausia, žmogus atsako (mygtuku arba laisvai),
   bet koks atsakymas veda į kitą žingsnį. Paskutinis žingsnis yra
   atsakymo kortelė su citatomis iš SUFLERIO medžiagos.
   ========================================================== */
window.CHATS = {
  savaitgalis: [
    { text: 'Supratau: darbuotojas dirbo šeštadienį ir norit vietoj apmokėjimo duoti laisvą dieną. Kad parodyčiau tiksliausią medžiagą, patikslinkit: ar šeštadienis buvo numatytas jo darbo grafike?',
      options: ['Ne, dirbo papildomai', 'Taip, dirba pagal suminę apskaitą', 'Nežinau, kaip patikrinti'] },
    { text: 'Aišku. Dar vienas dalykas: ar laisvos dienos prašo pats darbuotojas, ar tai darbdavio siūlymas?',
      options: ['Prašo darbuotojas', 'Siūlo darbdavys'] },
    { text: 'Ačiū, radau situaciją, kuri atitinka jūsų atvejį. Štai kas apie tai parašyta SUFLERYJE:',
      card: { main: 'r1', quotes: ['r1', 'r6'], more: ['r3', 'r2'] },
      after: 'Ar dar kažkas neaišku?',
      options: ['Kaip pažymėti žiniaraštyje?', 'Per kiek laiko suteikti dieną?'] },
    { text: 'Apie žymėjimą žiniaraštyje SUFLERYJE rašoma taip:',
      card: { main: 'r3', quotes: ['r3', 'r2'] },
      after: 'Jei dar kažkas neaišku, klauskite toliau.' },
  ],
  komandiruote: [
    { text: 'Komandiruočių išlaidų tema plati. Kas jums šiuo metu aktualiausia?',
      options: ['Dienpinigiai', 'Kelionės ir nakvynės išlaidos', 'Komandiruotė į užsienį', 'Įforminimas ir apskaita'] },
    { text: 'Gerai. Kur vyksta komandiruotė?',
      options: ['Lietuvoje', 'Užsienyje', 'Keliose šalyse'] },
    { text: 'Štai kas SUFLERYJE rašoma apie dienpinigius komandiruotėje užsienyje:',
      card: { main: 'k3', quotes: ['k3', 'k1'], tool: 'k4' },
      after: 'Dienpinigių sumą galit apskaičiuoti skaičiuoklėje. Ar dar kažkas neaišku?',
      options: ['Ar dienpinigiai apmokestinami?', 'Kokių dokumentų reikia?'] },
    { text: 'Apie apmokestinimą:',
      card: { main: 'k1', quotes: ['k1'] },
      after: 'Jei dar kažkas neaišku, klauskite toliau.' },
  ],
  mazai: [
    { text: 'Tiksliai tokios situacijos SUFLERYJE neradau, bet yra artimų temų. Kad parinkčiau tinkamiausią: tortas skirtas įmonės šventei ar dovana konkrečiam darbuotojui?',
      options: ['Įmonės šventei', 'Dovana darbuotojui'] },
    { text: 'Artimiausia medžiaga yra ši, bet jūsų atvejo ji tiesiogiai neaptaria:',
      card: { main: 'g1', quotes: [], more: ['g3', 'g2'] },
      after: 'Kad nesuklaidinčiau, siūlau paklausti eksperto.', expert: true },
  ],
  nera: [
    { text: 'Šia tema SUFLERYJE medžiagos neradau. Galiu perduoti jūsų klausimą ekspertui, jis atsakys asmeniškai.', expert: true },
  ],
};

/* ==========================================================
   V4 tab'ai: Testai, Video, Failai atsisiuntimui, Kompetencijų centras.
   Papildomi pavyzdiniai įrašai (tekstai sugalvoti).
   ========================================================== */
(function extraResults() {
  const add = {
    t1: { type: 'Testas', date: '2026-08-14', title: 'Darbo laikas ir poilsio dienos', snippet: 'Pasitikrinkite, kaip apskaitomas darbas poilsio dienomis ir kada suteikiama kita poilsio diena. 12 klausimų.' },
    t2: { type: 'Testas', date: '2026-06-02', title: 'Komandiruotės: dienpinigiai ir dokumentai', snippet: 'Dienpinigių dydžiai, apmokestinimas ir komandiruotės įforminimas. 10 klausimų.' },
    t3: { type: 'Testas', date: '2026-04-21', title: 'PVM mokėtojo registracija', snippet: 'Kada privaloma registruotis, kaip skaičiuojama apyvartos riba. 8 klausimai.' },
    v1: { type: 'Renginio įrašas', date: '2026-05-28', title: 'Darbo santykiai 2026: kas pasikeitė', snippet: '1 dalis: darbo laiko apskaita, poilsio dienos ir kompensavimas.', part: '1 val. 12 min.' },
    v2: { type: 'Renginio įrašas', date: '2026-03-19', title: 'PVM praktikoje: dažniausios klaidos', snippet: 'Seminaro įrašas apie PVM atskaitą, sąskaitas faktūras ir registraciją.', part: '58 min.' },
    v3: { type: 'Renginio įrašas', date: '2026-02-11', title: 'Komandiruočių išlaidos be klaidų', snippet: 'Dienpinigiai, nakvynė, kelionės dokumentai ir avansinė apyskaita.', part: '1 val. 4 min.' },
    // Renginio įrašas su keliais epizodais (playlist'as)
    v4: { type: 'Renginio įrašas', date: '2026-06-01', title: 'SUPERBUHALTERIŲ DIENOS | Leidžiami / neleidžiami atskaitymai apskaičiuojant pelno mokestį už 2025 metus',
          snippet: 'Mokesčių SUFLERIO ekspertės pakvietė SUPERBUHALTERIŲ dienų renginio dalyvius įsitraukti į azartišką, gyvai vykusį žaidimą. Jo metu dalyviams buvo pateikti 16 klausimų apie leidžiamų ir neleidžiamų atskaitymų taikymą.',
          playlist: { badge: '3 DIENA', summary: '1 min.', episodes: ['Superbuhalterių protmūšis', 'Leidžiami atskaitymai: praktiniai atvejai', 'Klausimai ir atsakymai'] } },
    f1: { type: 'Atmintinė', date: '2026-07-01', title: 'Darbo poilsio dieną kompensavimo atmintinė', snippet: 'Vieno lapo atmintinė: kada mokamas dvigubas atlygis, kada suteikiama kita poilsio diena.', file: 'PDF', kind: 'Atmintinė' },
    f2: { type: 'Atmintinė', date: '2026-05-12', title: 'Įsakymas dėl komandiruotės (šablonas)', snippet: 'Redaguojamas įsakymo šablonas su visais privalomais rekvizitais.', file: 'DOCX', kind: 'Dokumento šablonas' },
    f3: { type: 'Atmintinė', date: '2026-04-03', title: 'PVM mokėtojo registracijos žingsniai', snippet: 'Atmintinė: dokumentai, terminai ir dažniausios klaidos registruojantis PVM mokėtoju.', file: 'PDF', kind: 'Atmintinė' },
    f4: { type: 'Atmintinė', date: '2026-01-15', title: 'Darbo laiko apskaitos žiniaraštis 2026', snippet: 'Excel žiniaraštis su poilsio ir švenčių dienų žymėjimu.', file: 'XLSX', kind: 'Lentelė' },
    f5: { type: 'Atmintinė', date: '2025-11-20', title: 'Avansinė apyskaita (pavyzdys)', snippet: 'Užpildytas avansinės apyskaitos pavyzdys komandiruotei į užsienį.', file: 'PDF', kind: 'Pavyzdys' },
  };
  Object.entries(add).forEach(([id, r]) => {
    r.rub = r.type === 'Testas' ? 'Testai' : r.type === 'Renginio įrašas' ? 'Seminarai ir vaizdo įrašai' : 'Trumpai';
    r.fmt = r.type === 'Testas' ? 'Testas' : r.type === 'Renginio įrašas' ? 'Video' : 'Dokumento forma';
    r.pro = false; r.tema = 'Darbo laikas';
    window.RESULTS[id] = r;
  });
  // Testų tipai kaip SUFLERIO „Testai“ skiltyje
  const R = window.RESULTS;
  R.t4 = { type: 'Testas', date: '2026-01-05', title: 'Pradinis testas: darbo užmokestis', snippet: 'Bazinės žinios apie darbo užmokesčio skaičiavimą ir mokesčius. 15 klausimų.', rub: 'Testai', fmt: 'Testas', pro: false, tema: 'Darbo užmokestis' };
  Object.entries({ t1: 'Mėnesio iššūkiai', t2: 'Teminiai', t3: 'Pradinis', t4: 'Pradinis', r5: 'Teminiai', p1: 'Teminiai', p2: 'Mokesčių naujienų' }).forEach(([id, c]) => { R[id].cat = c; });
  const r6 = window.RESULTS.r6; r6.file = 'DOCX'; r6.kind = 'Dokumento šablonas';
})();

/* Kompetencijų centras: trys kompetencijos su moduliais. match = scenarijai, kuriems kompetencija aktuali */
window.COMPETENCIES = [
  { id: 'it', title: 'Ilgalaikis turtas', desc: 'Apskaita, nusidėvėjimas, perkainojimas ir nurašymas.', icon: 'building', modules: ['Pripažinimas ir įvertinimas', 'Nusidėvėjimas', 'Perkainojimas', 'Nurašymas ir pardavimas'], match: [] },
  { id: 'ig', title: 'Įmonių grupės', desc: 'Sandoriai tarp susijusių asmenų, kainodara ir konsolidavimas.', icon: 'percent', modules: ['Susiję asmenys', 'Sandorių kainodara', 'Paskolos grupėje', 'Konsolidavimas'], match: [] },
  { id: 'ds', title: 'Darbo santykiai ir darbo užmokestis', desc: 'Darbo laikas, poilsis, komandiruotės ir darbo užmokesčio skaičiavimas.', icon: 'people', modules: ['Darbo laikas ir poilsis', 'Komandiruotės', 'Darbo užmokestis ir priedai', 'Atostogos'], match: ['savaitgalis', 'komandiruote', 'nedaug'] },
];

/* ==========================================================
   DI apibendrinimas (kai rezultatų normaliai): trumpi sakiniai,
   kiekvienas su šaltiniu. Paspaudus šaltinį atidaroma citata.
   ========================================================== */
(function summaries() {
  const S = Object.fromEntries(window.SCENARIOS.map(s => [s.id, s]));
  const sum = {
    savaitgalis: [
      [{ t: 'Jei darbuotojas dirbo poilsio dieną, kuri nebuvo numatyta grafike, jo prašymu vietoj padidinto apmokėjimo galima suteikti kitą poilsio dieną. Prašymas turi būti įformintas raštu.', src: 'r1' },
       { t: 'Laisvą dieną reikėtų suteikti per protingą laiką, o darbo laiko apskaitos žiniaraštyje pažymėti ir darbą poilsio dieną, ir suteiktą poilsio dieną.', src: 'r2' }],
      [{ t: 'Kai šeštadienis nebuvo grafike, darbuotojas gali rinktis: padidintas apmokėjimas arba kita poilsio diena.', src: 'r2' },
       { t: 'Prašyme nurodoma, kurią dieną dirbta ir kada norima laisvos dienos. Pavyzdinė forma yra SUFLERYJE.', src: 'r6' },
       { t: 'Dažniausia klaida: laisva diena suteikiama, bet žiniaraštyje nepažymima, už kurią poilsio dieną ji suteikta.', src: 'r3' }],
      [{ t: 'Žiniaraštyje pažymima ir dirbta poilsio diena, ir vėliau suteikta laisva diena, kad būtų aišku, už ką ji suteikta.', src: 'r3' },
       { t: 'Abi dienos žymimos tame pačiame darbo laiko apskaitos žiniaraštyje.', src: 'r2' }],
    ],
    komandiruote: [
      null,
      [{ t: 'Dienpinigiai neapmokestinami tik neviršijant nustatytų dydžių. Viršijanti dalis laikoma su darbo santykiais susijusiomis pajamomis.', src: 'k1' },
       { t: 'Vienos dienos komandiruotei Lietuvoje dienpinigiai mokami, jei komandiruotė įforminta įsakymu ir darbuotojas vyko į kitą vietovę.', src: 'k2' }],
      [{ t: 'Kai per vieną komandiruotę lankomasi keliose šalyse, dienpinigiai skaičiuojami pagal šalį, kurioje darbuotojas buvo tą dieną.', src: 'k3' },
       { t: 'Neapmokestinama tik dalis iki nustatyto dydžio, likusi apmokestinama kaip darbo pajamos.', src: 'k1' }],
    ],
  };
  // Išoriniai šaltiniai: oficialūs puslapiai (VDI, VMI), cituojami greta SUFLERIO medžiagos
  Object.assign(window.RESULTS, {
    e1: { type: 'VDI', ext: 'vdi.lt', url: 'https://www.vdi.lt', date: '2026-02-10', title: 'Darbas poilsio ir švenčių dienomis: apmokėjimas', snippet: 'Valstybinės darbo inspekcijos paaiškinimas apie darbą poilsio dienomis.', quote: 'Už darbą poilsio dieną, kuri nenustatyta pagal darbo grafiką, mokamas ne mažesnis kaip dvigubas darbo užmokestis arba darbuotojo prašymu suteikiama kita poilsio diena.' },
    e2: { type: 'VMI', ext: 'vmi.lt', url: 'https://www.vmi.lt', date: '2026-01-05', title: 'Dienpinigių apmokestinimas GPM', snippet: 'VMI paaiškinimas apie dienpinigių neapmokestinamąjį dydį.', quote: 'Neapmokestinamosioms pajamoms priskiriami dienpinigiai, neviršijantys Vyriausybės nustatytų dydžių.' },
  });
  sum.savaitgalis[0].push({ t: 'Darbo inspekcija primena, kad be kitos poilsio dienos už tokį darbą mokamas ne mažesnis kaip dvigubas užmokestis.', src: 'e1' });
  sum.komandiruote[1].push({ t: 'VMI nurodo, kad neapmokestinamas tik dienpinigių dydis, neviršijantis Vyriausybės nustatytų normų.', src: 'e2' });
  Object.entries(sum).forEach(([id, list]) => list.forEach((x, i) => { if (x) S[id].steps[i].ai.summary = x; }));
  // Bendra mintis vienu-dviem sakiniais (Admin variantas „Santrauka + citatos“)
  const gist = {
    savaitgalis: [
      'Taip, darbuotojo prašymu vietoj padidinto apmokėjimo už darbą poilsio dieną galima suteikti kitą poilsio dieną. Svarbiausia prašymą įforminti raštu ir abi dienas pažymėti žiniaraštyje.\n\n' +
      'Pirmiausia verta pasitikrinti, ar šeštadienis nebuvo numatytas darbuotojo darbo grafike. Jei grafike jo nebuvo, tai darbas poilsio dieną, už kurį darbuotojas gali rinktis: padidintą apmokėjimą arba kitą poilsio dieną. Jei taikoma suminė darbo laiko apskaita ir šeštadienis buvo grafike, tai įprasta darbo diena ir papildomos kompensacijos nereikia.\n\n' +
      'Laisvą dieną reikėtų suteikti per protingą laiką, dažniausiai artimiausiais mėnesiais. Prašyme nurodoma, kurią dieną dirbta ir kada norima laisvos dienos, o darbdavys tai patvirtina įsakymu ar kitu vidiniu dokumentu.\n\n' +
      'Dažniausia klaida: laisva diena suteikiama, bet žiniaraštyje nepažymima, už kurią poilsio dieną ji suteikta. Tikrinimo metu tada sunku įrodyti, kad darbas poilsio dieną buvo kompensuotas.',
      'Kai šeštadienis nebuvo grafike, darbuotojas renkasi tarp padidinto apmokėjimo ir laisvos dienos. Prašyme nurodomos abi datos, o žiniaraštyje abi dienos pažymimos.',
      'Žiniaraštyje pažymimos abi dienos: dirbta poilsio diena ir vėliau suteikta laisva diena.',
    ],
    komandiruote: [null,
      'Dienpinigiai neapmokestinami tik iki nustatyto dydžio. Vienos dienos komandiruotei Lietuvoje jie mokami, kai komandiruotė įforminta įsakymu.',
      'Užsienyje dienpinigiai skaičiuojami pagal šalį, kurioje darbuotojas buvo tą dieną. Viršijanti dalis apmokestinama kaip darbo pajamos.',
    ],
  };
  Object.entries(gist).forEach(([id, list]) => list.forEach((g, i) => { if (g) S[id].steps[i].ai.gist = g; }));
  // Chat'o atsakymo kortelės: tas pats apibendrinimas
  const C = window.CHATS;
  C.savaitgalis[2].card = { main: 'r1', summary: sum.savaitgalis[1], more: ['r3'] };
  C.savaitgalis[3].card = { main: 'r3', summary: sum.savaitgalis[2] };
  C.komandiruote[2].card = { main: 'k3', summary: sum.komandiruote[2], tool: 'k4' };
  C.komandiruote[3].card = { main: 'k1', summary: [sum.komandiruote[1][0]] };
  C.savaitgalis[2].text = 'Ačiū, radau situaciją, kuri atitinka jūsų atvejį. Trumpai:';
  C.komandiruote[2].text = 'Trumpai apie dienpinigius komandiruotėje užsienyje:';
  // Artefaktai pokalbyje: skaičiuoklės fragmentas, failas atsisiuntimui, video nuo konkrečios vietos
  C.komandiruote[2].card.tool = null;
  C.komandiruote[2].card.artifacts = [{ kind: 'calc', rows: [{ country: 'Vokietija', days: 3 }] }, { kind: 'file', id: 'f6' }];
  C.komandiruote[2].after = 'Skaičiuoklėje jau įrašiau Vokietiją ir 3 dienas, pakeiskit pagal savo komandiruotę. Ar dar kažkas neaišku?';
  C.komandiruote[3].card.artifacts = [{ kind: 'video', id: 'v3', at: '18:20' }];
  C.savaitgalis[2].card.artifacts = [{ kind: 'file', id: 'r6' }];
  C.savaitgalis[3].card.artifacts = [{ kind: 'video', id: 'r4', at: '24:10' }];
  C.nedaug = [{ text: 'Radau 3 medžiagas, kurios tiesiai atsako į jūsų klausimą:', card: { list: ['r3', 'f4', 'r2'] } }];
})();

/* Kompetencijų medžiaga: kuriai kompetencijai ir moduliui priklauso */
(function compMaterials() {
  const R = window.RESULTS;
  Object.assign(R, {
    it1: { type: 'Praktinė situacija', date: '2026-05-06', title: 'Ilgalaikio turto nusidėvėjimas: kada keisti normatyvą', snippet: 'Kaip pagrįsti nusidėvėjimo normatyvo pakeitimą ir kaip tai atspindėti apskaitoje.' },
    it2: { type: 'Renginio įrašas', date: '2026-02-24', title: 'Ilgalaikio turto perkainojimas praktikoje', snippet: 'Seminaro įrašas: perkainojimo dokumentai ir pelno mokesčio pasekmės.', part: '47 min.' },
    ig1: { type: 'Konsultacija', date: '2026-04-15', title: 'Paskola susijusiai įmonei: palūkanos ir kainodara', snippet: 'Kokias palūkanas taikyti grupės įmonių paskoloms, kad atitiktų rinkos kainą.' },
    ig2: { type: 'Praktinė situacija', date: '2025-12-02', title: 'Sandorių kainodaros dokumentacija mažai įmonių grupei', snippet: 'Kada privaloma rengti dokumentaciją ir ką ji turi apimti.' },
  });
  ['it1', 'it2', 'ig1', 'ig2'].forEach(id => { const r = R[id]; r.rub = r.type === 'Renginio įrašas' ? 'Seminarai ir vaizdo įrašai' : 'Praktinės situacijos'; r.fmt = r.type === 'Renginio įrašas' ? 'Video' : 'Tekstas'; r.pro = r.type === 'Konsultacija'; r.tema = 'Ilgalaikis turtas'; });
  const map = {
    ds: { 'Darbo laikas ir poilsis': ['r1', 'r2', 'r3', 'r4', 'r6', 'r7', 't1', 'v1', 'f1', 'f4'], 'Komandiruotės': ['k1', 'k2', 'k3', 'k5', 'k6', 't2', 'v3', 'f2', 'f5'], 'Darbo užmokestis ir priedai': ['r5', 't4'] },
    it: { 'Nusidėvėjimas': ['it1'], 'Perkainojimas': ['it2'] },
    ig: { 'Paskolos grupėje': ['ig1'], 'Sandorių kainodara': ['ig2'] },
  };
  Object.entries(map).forEach(([comp, mods]) => Object.entries(mods).forEach(([mod, ids]) => ids.forEach(id => { if (R[id]) { R[id].comp = comp; R[id].mod = mod; } })));
})();

/* Atmintinė atsisiuntimui (kaip dienpinigių skaičiuoklės puslapyje) */
window.RESULTS.f6 = { type: 'Atmintinė', date: '2026-09-15', title: 'Dienpinigiai Lietuvoje ir užsienyje: ką turi žinoti buhalteris', snippet: 'Kas keičiasi nuo 2026-10-01: vienos dienos komandiruotė Lietuvoje, 20 proc. dienpinigių trumpoms dienoms.', file: 'PDF', kind: 'Atmintinė', pages: 2, rub: 'Trumpai', fmt: 'Dokumento forma', pro: false, tema: 'Komandiruotės', comp: 'ds', mod: 'Komandiruotės' };
window.RESULTS.r6.pages = 1; window.RESULTS.r6.file = 'DOCX';

/* Dienpinigių skaičiuoklės fragmentas pokalbyje. Normos PAVYZDINĖS, tik prototipui */
window.CALC_NORMS = { 'Lietuva': 0, 'Latvija': 46, 'Lenkija': 49, 'Vokietija': 61, 'Prancūzija': 64, 'Švedija': 66, 'JAV': 72 };
window.calcArt = a => ({
  rows: (a.rows || [{ country: 'Lietuva', days: 1 }]).map(r => ({ ...r })),
  norm(c) { return window.CALC_NORMS[c] ?? 0; },
  sum(r) { return this.norm(r.country) * (+r.days || 0); },
  get total() { return this.rows.reduce((t, r) => t + this.sum(r), 0); },
  eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; },
  add() { this.rows.push({ country: 'Latvija', days: 1 }); },
  remove(i) { this.rows.splice(i, 1); },
});

/* ==========================================================
   Pokalbio šakos: kiekvienas atsakymo variantas veda į jam tinkantį
   atsakymą (pvz. „Kokių dokumentų reikia?“ → dokumentai, ne video).
   goto: kuris scenarijaus žingsnis toliau (99 = scenarijus baigtas).
   ========================================================== */
(function chatBranches() {
  const C = window.CHATS;
  const END = 99, more = 'Jei dar kažkas neaišku, klauskite toliau.';
  // Savaitgalis: paskutiniai du klausimai
  C.savaitgalis[2].branches = {
    'Kaip pažymėti žiniaraštyje?': { text: 'Apie žymėjimą žiniaraštyje SUFLERYJE rašoma taip:', goto: END,
      card: { main: 'r3', summary: [{ t: 'Žiniaraštyje pažymima ir dirbta poilsio diena, ir vėliau suteikta laisva diena, kad būtų aišku, už ką ji suteikta.', src: 'r3' }],
        artifacts: [{ kind: 'file', id: 'f4' }, { kind: 'video', id: 'r4', at: '24:10' }] }, after: more },
    'Per kiek laiko suteikti dieną?': { text: 'Apie terminą SUFLERYJE rašoma taip:', goto: END,
      card: { main: 'r2', summary: [{ t: 'Laisvą dieną reikėtų suteikti per protingą laiką. Konkretų terminą verta aptarti su darbuotoju ir nurodyti prašyme.', src: 'r2' }],
        artifacts: [{ kind: 'file', id: 'r6' }] }, after: more },
  };
  // Komandiruotės: pirmas pasirinkimas (tema)
  const docs = { text: 'Komandiruotei įforminti reikia šių dokumentų:', goto: END,
    card: { main: 'k6', summary: [{ t: 'Komandiruotė įforminama darbdavio įsakymu, o grįžus pateikiama avansinė apyskaita su kelionės ir nakvynės dokumentais.', src: 'k6' }],
      artifacts: [{ kind: 'file', id: 'f2' }, { kind: 'file', id: 'f5' }] }, after: more };
  C.komandiruote[0].branches = {
    'Kelionės ir nakvynės išlaidos': { text: 'Apie kelionės ir nakvynės išlaidas:', goto: END,
      card: { main: 'k5', summary: [{ t: 'Kelionės ir nakvynės išlaidos kompensuojamos pagal pateiktus dokumentus: bilietus, sąskaitas už nakvynę ir kitus kelionės dokumentus.', src: 'k5' }],
        artifacts: [{ kind: 'video', id: 'k5', at: '31:45' }] }, after: more },
    'Komandiruotė į užsienį': { ...C.komandiruote[2], text: 'Trumpai apie dienpinigius komandiruotėje užsienyje:', goto: 3 },
    'Įforminimas ir apskaita': docs,
  };
  // Komandiruotės: kur vyksta
  C.komandiruote[1].branches = {
    'Lietuvoje': { text: 'Apie dienpinigius komandiruotėje Lietuvoje:', goto: 3,
      card: { main: 'k2', summary: [{ t: 'Vienos dienos komandiruotei Lietuvoje dienpinigiai mokami, jei komandiruotė įforminta įsakymu ir darbuotojas vyko į kitą vietovę.', src: 'k2' }],
        artifacts: [{ kind: 'calc', rows: [{ country: 'Lietuva', days: 2 }] }] },
      after: 'Ar dar kažkas neaišku?', options: ['Ar dienpinigiai apmokestinami?', 'Kokių dokumentų reikia?'] },
    'Keliose šalyse': { ...C.komandiruote[2], goto: 3,
      card: { ...C.komandiruote[2].card, artifacts: [{ kind: 'calc', rows: [{ country: 'Vokietija', days: 2 }, { country: 'Lenkija', days: 1 }] }, { kind: 'file', id: 'f6' }] },
      after: 'Skaičiuoklėje įrašiau dvi šalis, pakeiskit pagal savo komandiruotę. Ar dar kažkas neaišku?' },
  };
  // Komandiruotės: paskutiniai klausimai
  const tax = { text: 'Apie apmokestinimą:', goto: END,
    card: { main: 'k1', summary: [{ t: 'Dienpinigiai neapmokestinami tik neviršijant nustatytų dydžių. Viršijanti dalis laikoma su darbo santykiais susijusiomis pajamomis.', src: 'k1' }] }, after: more };
  C.komandiruote[2].branches = { 'Ar dienpinigiai apmokestinami?': tax, 'Kokių dokumentų reikia?': docs };
  C.komandiruote[1].branches['Lietuvoje'].branches = C.komandiruote[2].branches;
  C.komandiruote[1].branches['Keliose šalyse'].branches = C.komandiruote[2].branches;
  C.komandiruote[0].branches['Komandiruotė į užsienį'].branches = C.komandiruote[2].branches;
})();
