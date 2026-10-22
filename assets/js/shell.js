/* ==========================================================
   Suflerio karkasas: įdeda side meniu, viršutinę juostą ir footerį
   į elementus su data-shell="sidebar|topbar|footer".

   Naudojimas variacijoje (prieš Alpine):
     <script src="../assets/js/shell.js"></script>
   Paieškos laukas naudoja Alpine: puslapio x-data turi turėti
   `query`, `submitSearch()`, `suggestOpen`, `showSuggest`, `suggestions`.
   ========================================================== */
(function () {
  const IMG = new URL('../img/', document.currentScript.src).href;
  const img = (name, w, h, cls = '') => `<img src="${IMG}${name}" width="${w}" height="${h}" alt=""${cls ? ` class="${cls}"` : ''}>`;
  const PRO = img('pro-small.svg', 20, 7);

  const navMain = [
    { label: 'Naujausi', icon: img('ic-home.svg', 20, 20) },
    { label: 'Mano pasižymėti', icon: img('ic-flag.svg', 20, 20) },
  ];
  const navContent = [
    { label: 'Mokesčių naujienos', count: 155 },
    { label: 'Praktinės situacijos' },
    { label: 'Sąvadai ir teminiai rinkiniai' },
    { label: 'Seminarai ir vaizdo įrašai' },
    { label: 'Renginių kalendorius' },
    { label: 'Skaičiuoklės' },
    { label: 'Užduokite savo klausimą' },
  ];
  const navPro = ['Pro mikroskopą', 'Geroji praktika', 'Pro komentarai', 'Profilaktika'];

  const sidebar = `
    <a class="ms-logo" href="#" aria-label="Mokesčių SUFLERIS" @click.prevent="goHome()">${img('logo.svg', 102, 30)}</a>
    <ul class="ms-nav ms-nav--main">
      ${navMain.map(n => `<li><a href="#">${n.icon}${n.label}</a></li>`).join('')}
    </ul>
    <div class="ms-nav-sep" role="presentation"></div>
    <ul class="ms-nav">
      ${navContent.map(n => `<li><a href="#">${n.label}${n.count ? `<span class="ms-count">${n.count}</span>` : ''}</a></li>`).join('')}
    </ul>
    <div class="ms-nav-title">${img('pro-label.svg', 35, 15)} turinys</div>
    <ul class="ms-nav ms-nav--pro">
      ${navPro.map(l => `<li><a href="#">${l}</a></li>`).join('')}
    </ul>`;

  const topbar = `
    <form class="ms-search" role="search" @submit.prevent="submitSearch()">
      <!-- Laukas auga žemyn, kai tekstas netelpa vienoje eilutėje; atitraukus fokusą vėl viena eilutė -->
      <textarea rows="1" x-model="query" x-ref="search" placeholder="Ieškokit frazės arba užduokit klausimą" aria-label="Paieška" autocomplete="off" spellcheck="false"
             x-effect="query; $nextTick(() => { if (document.activeElement === $el) { $el.style.height = 'auto'; $el.style.height = $el.scrollHeight + 'px'; } })"
             @focus="suggestOpen = true; $el.style.height = 'auto'; $el.style.height = $el.scrollHeight + 'px'"
             @blur="suggestOpen = false; $el.style.height = ''; $el.scrollTop = 0"
             @keydown.enter="if (!$event.shiftKey) { $event.preventDefault(); suggestOpen = false; $el.blur(); $el.form.requestSubmit(); }"
             @keydown.escape="suggestOpen = false; $el.blur()"></textarea>
      <button type="button" class="ms-search-clear" x-show="query" x-cloak @click="query = ''; $el.previousElementSibling.focus()" aria-label="Išvalyti">×</button>
      <button type="submit" class="ms-search-go" aria-label="Ieškoti">${img('ic-padidke.svg', 18, 18)}</button>
      <div class="ms-suggest" x-show="suggestOpen && showSuggest" x-cloak x-transition.opacity.duration.120ms @mousedown.prevent>
        <p>Pabandykit paklausti savais žodžiais</p>
        <template x-for="s in suggestions" :key="s">
          <button type="button" @click="query = s; suggestOpen = false; $refs.search.blur(); submitSearch()">
            ${img('ic-padidke.svg', 13, 13)}<span x-text="s"></span>
          </button>
        </template>
      </div>
    </form>
    <nav class="ms-topnav" aria-label="Paskyra">
      <a href="#">${img('ic-ragelis.svg', 24, 24)}<span>Susisiekti</span></a>
      <a href="#">${img('ic-skaitliukai.svg', 20, 21)}<span>Planų kainos</span></a>
      <a href="#"><i class="ms-ico-user">${img('ic-head-circle.svg', 22, 22, 'is-ring')}${img('ic-head.svg', 16, 14, 'is-head')}</i><span>Laurynas</span></a>
    </nav>`;

  const col = (title, items) => `<div><h4>${title}</h4><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
  const footer = `
    <div class="ms-footer-band" role="presentation"></div>
    <div class="ms-footer">
      <div class="ms-footer-cols">
        <div>
          ${col('Apie mus', ['Kaip veikia SUFLERIS?', 'Kodėl tai darome?', 'Mūsų komanda', 'Atsiliepimai', 'Taisyklės ir privatumas']).replace(/^<div>|<\/div>$/g, '')}
          <div class="ms-footer-sep" role="presentation"></div>
          ${col('Susisiekti', ['Pagalba prisijungiant', 'Pagalba renkantis planą', 'Kontaktai', 'D.U.K']).replace(/^<div>|<\/div>$/g, '')}
        </div>
        ${col('Turinys', ['Šiandien SUFLERYJE', 'Mokesčių naujienos', 'Praktinės situacijos', 'Sąvadai ir teminiai rinkiniai', 'Seminarai ir vaizdo įrašai', 'Renginių kalendorius', 'Skaičiuoklės', 'Specialus pagalbos rinkinys', `Pro mikroskopą${PRO}`, `Geroji praktika${PRO}`, `Pro komentarai${PRO}`, `Profilaktika${PRO}`])}
        ${col('Mano sufleris', ['Apie mano planą', 'Mano pasižymėti', 'Man atrakinti', 'Man atsakyti', 'Nustatymai', 'Sąskaitos', 'Užduoti savo klausimą'])}
        ${col('Planai', ['Kainos ir planai', 'Planas BAZINIS', 'Planas PRO', 'Planas KOMANDA', 'Papildomos prieigos', 'Planų palyginimas', 'Pasitarti su vadybininku'])}
      </div>
      <div class="ms-footer-bottom">
        <a class="ms-social" href="#" aria-label="Facebook">${img('ic-facebook.svg', 7, 14)}</a>
        <a class="ms-social" href="#" aria-label="LinkedIn" style="background:none">${img('ic-linkedin.svg', 31, 31)}</a>
        <span>Sekite mus socialiniuose tinkluose</span>
        <span class="is-copy">Mokesčių SUFLERĮ kuria MERITS (C) 2024.</span>
      </div>
    </div>`;

  const parts = { sidebar, topbar, footer };
  document.querySelectorAll('[data-shell]').forEach(el => {
    const html = parts[el.dataset.shell];
    if (html) el.innerHTML = html;
  });
})();
