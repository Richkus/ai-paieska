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
    id: 'pvm',
    label: 'Trumpa frazė',
    query: 'pvm',
    classicCount: 1949,
    steps: [
      {
        count: 1949,
        results: ['p1', 'p2', 'p5', 'p3', 'p4'],
        ai: {
          kind: 'directions',
          heading: 'Radom daug. Siaurinkim?',
          lead: 'Apie PVM yra daug temų. Ką norit sužinoti?',
          directions: [
            { label: 'Registracija PVM mokėtoju', count: 212, hint: 'apyvartos riba, savanoriška' },
            { label: 'PVM sąskaitos faktūros', count: 388, hint: 'išrašymas, registras' },
            { label: 'PVM deklaravimas', count: 301, hint: 'formos, terminai' },
            { label: 'PVM atskaita', count: 274, hint: 'kada galima, ribojimai' },
          ],
        },
      },
      {
        count: 31,
        results: ['p4', 'p3', 'p5'],
        ai: {
          kind: 'quotes',
          heading: 'Registracija PVM mokėtoju',
          quotes: [{ id: 'p4' }, { id: 'p3' }],
          ask: 'Kokia jūsų situacija?',
          chips: ['Viršijom apyvartos ribą', 'Norim registruotis savanoriškai'],
        },
      },
      {
        count: 3,
        results: ['p4', 'p5'],
        ai: { kind: 'quotes', heading: 'Privaloma registracija viršijus ribą', quotes: [{ id: 'p4' }], ask: 'Jei vis dar ne tai, parašykit savais žodžiais.', chips: [] },
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
  S.pvm.steps[1].filters = { tema: ['PVM'] };
  S.pvm.steps[2].filters = { tema: ['PVM'], data: '2026' };
})();

/* V3: AI perrašytas klausimas po kiekvieno patikslinimo (įrašomas į paieškos lauką) */
(function rewrites() {
  const S = Object.fromEntries(window.SCENARIOS.map(s => [s.id, s]));
  const rq = {
    savaitgalis: ['Kaip suteikti laisvą dieną už darbą šeštadienį, kai jis nebuvo grafike?', 'Kaip žiniaraštyje pažymėti laisvą dieną už darbą poilsio dieną?'],
    komandiruote: ['Kokio dydžio dienpinigiai ir kada jie neapmokestinami?', 'Kaip skaičiuoti dienpinigius komandiruotėje užsienyje?'],
    pvm: ['Kada reikia registruotis PVM mokėtoju?', 'Ką daryti viršijus PVM mokėtojo registracijos ribą?'],
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
    pvm: [
      ['Kada reikia registruotis PVM mokėtoju?', 'Kaip išrašyti PVM sąskaitą faktūrą?', 'Kaip ir kada deklaruoti PVM?', 'Kada galima atskaityti pirkimo PVM?'],
      ['Ką daryti viršijus PVM mokėtojo registracijos ribą?', 'Kaip registruotis PVM mokėtoju savanoriškai?', 'Nuo kada skaičiuoti PVM po registracijos?'],
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
      after: 'Jei vis dar ne tai, galiu perduoti klausimą ekspertui.', expert: true },
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
      after: 'Jei vis dar ne tai, galiu perduoti klausimą ekspertui.', expert: true },
  ],
  pvm: [
    { text: '„PVM“ apima daug temų. Apie ką norit sužinoti?',
      options: ['Registracija PVM mokėtoju', 'PVM sąskaitos faktūros', 'PVM deklaravimas', 'PVM atskaita'] },
    { text: 'Aišku. Kokia jūsų situacija?',
      options: ['Viršijom apyvartos ribą', 'Norim registruotis savanoriškai'] },
    { text: 'Štai kas SUFLERYJE rašoma apie privalomą registraciją PVM mokėtoju:',
      card: { main: 'p4', quotes: ['p4'], more: ['p5'] },
      after: 'Ar dar kažkas neaišku?',
      options: ['Nuo kada skaičiuoti PVM?', 'Kaip užpildyti prašymą?'] },
    { text: 'Tiksliai šiam klausimui atskiros medžiagos neradau. Artimiausia:',
      card: { main: 'p5', quotes: [] },
      after: 'Galiu perduoti klausimą ekspertui, jis atsakys asmeniškai.', expert: true },
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
  const r6 = window.RESULTS.r6; r6.file = 'DOCX'; r6.kind = 'Dokumento šablonas';
})();

/* Kompetencijų centras: trys kompetencijos su moduliais. match = scenarijai, kuriems kompetencija aktuali */
window.COMPETENCIES = [
  { id: 'it', title: 'Ilgalaikis turtas', desc: 'Apskaita, nusidėvėjimas, perkainojimas ir nurašymas.', icon: 'building', modules: ['Pripažinimas ir įvertinimas', 'Nusidėvėjimas', 'Perkainojimas', 'Nurašymas ir pardavimas'], match: ['pvm'] },
  { id: 'ig', title: 'Įmonių grupės', desc: 'Sandoriai tarp susijusių asmenų, kainodara ir konsolidavimas.', icon: 'percent', modules: ['Susiję asmenys', 'Sandorių kainodara', 'Paskolos grupėje', 'Konsolidavimas'], match: [] },
  { id: 'ds', title: 'Darbo santykiai ir darbo užmokestis', desc: 'Darbo laikas, poilsis, komandiruotės ir darbo užmokesčio skaičiavimas.', icon: 'people', modules: ['Darbo laikas ir poilsis', 'Komandiruotės', 'Darbo užmokestis ir priedai', 'Atostogos'], match: ['savaitgalis', 'komandiruote'] },
];
