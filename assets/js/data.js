/* ==========================================================
   Pavyzdiniai duomenys prototipui. Tekstai ir skaičiai sugalvoti,
   tik struktūrai parodyti, ne tikras Suflerio turinys.

   Scenarijus = užklausa + žingsniai. Kiekvienas žingsnis:
     count   - kiek rezultatų po šito žingsnio
     ai      - viršutinis blokas (quotes | directions | empty)
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
  r3:  { type: 'Straipsnis', date: '2026-01-20', title: 'Darbas poilsio ir švenčių dienomis: dažniausios klaidos',
         snippet: 'Apžvelgiame, kaip apskaičiuoti apmokėjimą už darbą poilsio ir švenčių dienomis, kada reikalingas darbuotojo sutikimas ir kaip tai pažymėti apskaitoje.',
         quote: 'Dažniausia klaida, kai laisva diena suteikiama, bet darbo laiko apskaitos žiniaraštyje nepažymima, už kurią poilsio dieną ji suteikta.' },
  r4:  { type: 'Renginio įrašas', date: '2026-07-09', title: 'Darbo laiko apskaita 2026: suminė apskaita ir grafikai',
         snippet: '3 dalis: darbas poilsio dienomis, kai taikoma suminė darbo laiko apskaita.', part: '3 dalis · 24:10',
         quote: 'Kai taikoma suminė apskaita, savaitgalis gali būti įprasta darbo diena pagal grafiką, tada papildomos kompensacijos nereikia.' },
  r5:  { type: 'Testas', date: '2026-09-10', title: 'Darbo užmokestis: poilsio ir švenčių dienos',
         snippet: 'Pasitikrinkite žinias apie darbo užmokestį už darbą poilsio ir švenčių dienomis. 10 klausimų.' },
  r6:  { type: 'Dokumento forma', date: '2025-06-02', title: 'Prašymas suteikti kitą poilsio dieną (forma)',
         snippet: 'Pavyzdinė darbuotojo prašymo forma, kai vietoj padidinto apmokėjimo už darbą poilsio dieną prašoma suteikti kitą poilsio dieną.',
         quote: 'Prašyme nurodoma data, kurią dirbta poilsio dieną, ir pageidaujama laisvos dienos data.' },
  r7:  { type: 'Praktinė situacija', date: '2024-12-18', title: 'Darbas švenčių dieną ir viršvalandžiai: kaip skaičiuoti',
         snippet: 'Kai darbas švenčių dieną kartu yra ir viršvalandinis, kyla klausimas, kaip skaičiuoti apmokėjimą.' },

  k1:  { type: 'Straipsnis', date: '2026-02-03', title: 'Dienpinigiai 2026: dydžiai ir apmokestinimas',
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
  p3:  { type: 'Straipsnis', date: '2026-08-28', title: 'PVM sąskaitų faktūrų registro pakeitimai nuo 2027 m.',
         snippet: 'Kas keičiasi teikiant PVM sąskaitų faktūrų duomenis ir ką reikėtų pasiruošti iš anksto.',
         quote: 'Pasirengti verta jau dabar: patikrinkite, ar apskaitos programa palaiko naujus duomenų laukus.' },
  p4:  { type: 'Praktinė situacija', date: '2026-06-11', title: 'Kada privaloma registruotis PVM mokėtoju',
         snippet: 'Apyvartos riba, savanoriška registracija ir dažniausios situacijos smulkiam verslui.',
         quote: 'Registruotis reikia, kai per paskutinius 12 mėnesių apyvarta viršija nustatytą ribą.' },
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
