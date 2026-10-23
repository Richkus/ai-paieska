/* ==========================================================
   Suflerio karkasas: įdeda side meniu, viršutinę juostą ir footerį
   į elementus su data-shell="sidebar|topbar|footer".

   Naudojimas variacijoje (prieš Alpine):
     <script src="../assets/js/shell.js"></script>
   Paieškos laukas naudoja Alpine: puslapio x-data turi turėti
   `query`, `submitSearch()`, `suggestOpen`, `showSuggest`, `suggestions`,
   `rewriteFlash` (paryškina lauką, kai klausimas pakeičiamas pasirinkus kryptį),
   `searchNote` (užuomina po lauku, pvz. kad nauja paieška pradės naują pokalbį),
   `searchGlow` (kartą po įkėlimo aplink lauką prabėga DI spalvų gradientas),
   `recentSearches` (ankstesnės paieškos dropdown'e),
   `searchTip`, `tipClose()`, `tipTry()` (pirmo karto užuomina po lauku),
   `searchPH` (besikeičiantis pavyzdinis klausimas lauke).
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
      <li><a href="#" @click.prevent="ver === 'v5' ? openK5() : (setMode && mode === 'chat' && ['fill', 'filltop'].includes(p.chatView) && setMode('ai'), window.scrollTo({ top: 0 }), $nextTick(() => $refs.search && $refs.search.focus()))"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.6" cy="8.6" r="6" stroke="currentColor" stroke-width="1.9"/><path d="M13.2 13.2 17.5 17.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>Paieška</a></li>
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
    <!-- V5: vietoj lauko ryškus mygtukas, atidaro paieškos modalą (⌘K) -->
    <button type="button" class="ms-k5btn" x-show="ver === 'v5'" x-cloak @click="openK5()" aria-label="Ieškoti arba klausti DI">
      <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="6" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M12 12l4.5 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      <span>Ieškoti arba klausti DI</span>
      <i class="ms-k5btn-ai">${img('ai.svg', 9, 15, 'ai-ic')}DI</i>
    </button>
    <form class="ms-search" role="search" x-show="ver !== 'v5'" :class="{ 'is-rewrite': rewriteFlash, 'is-glow': searchGlow }" @submit.prevent="submitSearch()">
      <!-- Laukas auga žemyn, kai tekstas netelpa vienoje eilutėje; atitraukus fokusą vėl viena eilutė -->
      <textarea rows="1" x-model="query" x-ref="search" :placeholder="searchPH" aria-label="Paieška" autocomplete="off" spellcheck="false"
             x-effect="query; $nextTick(() => { if (document.activeElement === $el) { $el.style.height = 'auto'; $el.style.height = $el.scrollHeight + 'px'; } })"
             @focus="suggestOpen = true; searchTip && tipClose(); $el.style.height = 'auto'; $el.style.height = $el.scrollHeight + 'px'"
             @blur="suggestOpen = false; $el.style.height = ''; $el.scrollTop = 0"
             @keydown.enter="if (!$event.shiftKey) { $event.preventDefault(); suggestOpen = false; $el.blur(); $el.form.requestSubmit(); }"
             @keydown.escape="suggestOpen = false; $el.blur()"></textarea>
      <button type="button" class="ms-search-clear" x-show="query" x-cloak @click="query = ''; $el.previousElementSibling.focus()" aria-label="Išvalyti">×</button>
      <button type="submit" class="ms-search-go" :class="{ 'is-calm': phase !== 'start' && query.trim() === activeQuery }" aria-label="Ieškoti su DI"><svg width="19" height="19" viewBox="0 0 24 24" overflow="visible" aria-hidden="true"><circle cx="9" cy="12.5" r="6" fill="none" stroke="#fff" stroke-width="2.3"/><path d="M13.6 17.1l4.6 4.6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M19.2 1.8c.22 1.7 1.42 2.88 3.05 3.05-1.63.22-2.83 1.4-3.05 3.05-.22-1.65-1.42-2.83-3.05-3.05 1.63-.17 2.83-1.35 3.05-3.05Z" fill="#fff" transform="translate(19.6 4.4) scale(1.75) translate(-19.2 -4.85)"/></svg></button>
      <div class="ms-tip" x-show="searchTip" x-cloak x-transition.opacity.duration.200ms role="status" @mousedown.prevent>
        <b>Nauja: DI paieška</b>
        <span>Dabar galit klausti savais žodžiais, DI priartins jus prie atsakymo.</span>
        <div class="ms-tip-act"><button type="button" class="is-main" @click="tipTry()">Išbandyti</button><button type="button" @click="tipClose()">Supratau</button></div>
      </div>
      <p class="ms-search-note" x-show="suggestOpen && searchNote" x-cloak x-text="searchNote"></p>
      <div class="ms-suggest" x-show="suggestOpen && showSuggest" x-cloak x-transition.opacity.duration.120ms @mousedown.prevent>
        <p>Pabandykit paklausti savais žodžiais</p>
        <template x-for="s in suggestions" :key="s">
          <button type="button" @click="query = s; suggestOpen = false; $refs.search.blur(); submitSearch()">
            ${img('ic-padidke.svg', 13, 13)}<span x-text="s"></span>
          </button>
        </template>
        <template x-if="recentSearches && recentSearches.length">
          <div class="ms-suggest-group">
            <p>Ankstesnės paieškos</p>
            <template x-for="s in recentSearches" :key="s">
              <button type="button" @click="query = s; suggestOpen = false; $refs.search.blur(); submitSearch()">
                <svg class="ms-suggest-ic" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 4.6V8l2.4 1.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><span x-text="s"></span>
              </button>
            </template>
          </div>
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
