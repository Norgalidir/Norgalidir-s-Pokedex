/*
 * The Pokédex "screen": a CRT monitor look laid over the whole app, and a
 * quick CRT-style blip when you change page or tab.
 *
 * The overlay never catches clicks. Its strength (0 = off, up to 100) and
 * the page transitions are set in Data, and saved with your other
 * settings. Everything scales with the strength: scanlines, darker curved
 * corners, rounded screen edges, text glow, a colour fringe, a rolling
 * band and, near the top, a light flicker. Flicker and moving effects are
 * left out when "reduce motion" is switched on in the operating system.
 *
 *   window.pkScreen.apply(strength, transitions)   strength: 0–100
 *   window.pkScreen.blip()                      play the page-change blip
 */
(function(){
  if(window.__pkScreenLoaded) return; window.__pkScreenLoaded = true;
  var SAVE_KEY = 'nocturne-pokedex-v1';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var DEFAULT = 60;
  // Older saves used words; map them onto the slider.
  function toStrength(v){
    if(v === undefined || v === null || v === '') return DEFAULT;
    var words = {off:0, subtle:60, medium:75, strong:95};
    if(typeof v === 'string' && v in words) return words[v];
    var n = +v; return isFinite(n) ? Math.max(0, Math.min(100, n)) : DEFAULT;
  }
  // Everything the effect does, worked out from one strength value.
  function levels(n){
    var x = n / 100, over = function(a){ return Math.max(0, (x - a) / (1 - a)); };
    return {
      scan: .05 + .27 * x,                 // scanline darkness
      vig: .22 + .5 * x,                   // corner shading
      glow: .18 + .4 * x,                  // text glow
      fringe: .45 * over(.35),             // red/blue colour fringe on text
      mask: .07 * over(.3),                // phosphor colour mask
      roll: .09 * over(.4),                // rolling band
      radius: x > .15 ? Math.round(8 + 30 * x) : 0, // rounded screen corners (px)
      flick: x >= .85
    };
  }

  var CSS = [
    '#pk-crt{position:fixed;inset:0;z-index:35;pointer-events:none;display:none}',
    'html[data-crt] #pk-crt{display:block}',
    // scanlines: one dark line every 3px
    '#pk-crt .c-scan{position:absolute;inset:0;background:repeating-linear-gradient(180deg,rgba(0,0,0,var(--crt-scan)) 0 1px,transparent 1px 3px)}',
    'html[data-crt-light] #pk-crt .c-scan{background:repeating-linear-gradient(180deg,rgba(0,0,0,calc(var(--crt-scan) * .55)) 0 1px,transparent 1px 3px)}',
    // a faint red/green/blue phosphor mask
    '#pk-crt .c-mask{position:absolute;inset:0;opacity:var(--crt-mask);mix-blend-mode:screen;',
    '  background:repeating-linear-gradient(90deg,#ff0040 0 1px,#00ff60 1px 2px,#2060ff 2px 3px)}',
    // corners: darker edges and a soft inner rim, like curved glass
    '#pk-crt .c-vig{position:absolute;inset:0;',
    '  background:radial-gradient(ellipse 85% 80% at 50% 50%,transparent 55%,rgba(0,0,0,var(--crt-vig)) 100%);',
    '  box-shadow:inset 0 0 120px rgba(0,0,0,calc(var(--crt-vig) * .6)),inset 0 0 0 1px rgba(255,255,255,.03)}',
    // rounded screen corners, like the edge of a tube behind its bezel
    '#pk-crt .c-edge{position:absolute;inset:0;border-radius:var(--crt-radius);box-shadow:0 0 0 80px #000,inset 0 0 12px 2px rgba(0,0,0,.6)}',
    // a faint glare across the top of the glass, tinted by the scheme
    '#pk-crt .c-glare{position:absolute;inset:0;background:radial-gradient(ellipse 70% 40% at 50% 0%,color-mix(in srgb,var(--color-accent,#9184d9) 7%,transparent),transparent 70%)}',
    // a slow bright band rolling down the screen
    '#pk-crt .c-roll{position:absolute;left:0;right:0;top:-30%;height:30%;opacity:var(--crt-roll);',
    '  background:linear-gradient(180deg,transparent,rgba(255,255,255,.9) 50%,transparent);animation:pkCrtRoll 7s linear infinite}',
    '#pk-crt.c-flick{animation:pkCrtFlick .12s steps(2) infinite}',
    '@keyframes pkCrtRoll{to{transform:translateY(433%)}}',
    '@keyframes pkCrtFlick{0%{opacity:1}50%{opacity:.965}}',
    // glow on text, inherited through the page
    'html[data-crt] body{text-shadow:-.6px 0 rgba(255,40,80,var(--crt-fringe)),.6px 0 rgba(40,170,255,var(--crt-fringe)),0 0 .45em color-mix(in srgb,currentColor calc(var(--crt-glow) * 100%),transparent)}',
    // page-change blip: a cover in the page colour snaps shut to a bright
    // line across the middle, then the line fades
    '#pk-blip{position:fixed;inset:0;z-index:36;pointer-events:none;background:var(--color-bg,#161826);transform-origin:50% 50%;',
    '  animation:pkBlip .26s cubic-bezier(.5,0,.75,0) forwards}',
    '#pk-blip::after{content:"";position:absolute;left:0;right:0;top:50%;height:2px;margin-top:-1px;',
    '  background:color-mix(in srgb,var(--color-accent,#9184d9) 70%,#fff);box-shadow:0 0 18px 4px color-mix(in srgb,var(--color-accent,#9184d9) 60%,transparent);',
    '  opacity:0;animation:pkBlipLine .26s ease-out forwards}',
    '@keyframes pkBlip{0%{transform:scaleY(1)}70%{transform:scaleY(.004);opacity:1}100%{transform:scaleY(.004);opacity:0}}',
    '@keyframes pkBlipLine{0%,40%{opacity:0}65%{opacity:1}100%{opacity:0}}',
    '@media print{#pk-crt,#pk-blip{display:none!important}}',
    '@media (prefers-reduced-motion:reduce){#pk-crt .c-roll{display:none}#pk-crt.c-flick{animation:none}}'
  ].join('\n');

  var el = null, level = DEFAULT, trans = true;
  function build(){
    if(el || !document.body) return;
    var st = document.createElement('style'); st.id = 'pk-crt-css'; st.textContent = CSS; document.head.appendChild(st);
    el = document.createElement('div'); el.id = 'pk-crt'; el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<div class="c-glare"></div><div class="c-mask"></div><div class="c-scan"></div><div class="c-roll"></div><div class="c-vig"></div><div class="c-edge"></div>';
    document.body.appendChild(el);
  }
  function lightTheme(){
    // Light schemes get softer lines: read how bright the page colour is.
    try {
      var bg = getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();
      var m = bg.match(/^#([0-9a-f]{6})$/i); if(!m) return false;
      var n = parseInt(m[1], 16), l = (0.299 * (n >> 16) + 0.587 * (n >> 8 & 255) + 0.114 * (n & 255)) / 255;
      return l > 0.6;
    } catch(e){ return false; }
  }
  function apply(lv, tr){
    level = toStrength(lv);
    trans = tr !== false;
    build(); if(!el) return;
    var root = document.documentElement;
    if(level === 0){ root.removeAttribute('data-crt'); return; }
    var L = levels(level);
    root.setAttribute('data-crt', String(level));
    if(lightTheme()) root.setAttribute('data-crt-light', ''); else root.removeAttribute('data-crt-light');
    root.style.setProperty('--crt-scan', L.scan);
    root.style.setProperty('--crt-vig', L.vig);
    root.style.setProperty('--crt-glow', L.glow);
    root.style.setProperty('--crt-mask', L.mask);
    root.style.setProperty('--crt-fringe', L.fringe);
    root.style.setProperty('--crt-radius', L.radius + 'px');
    el.querySelector('.c-edge').style.display = L.radius ? '' : 'none';
    root.style.setProperty('--crt-roll', reduced ? 0 : L.roll);
    el.classList.toggle('c-flick', !!L.flick && !reduced);
  }
  function blip(){
    if(!trans || reduced || !document.body) return;
    if(document.getElementById('pk-intro')) return; // the intro is still showing
    var old = document.getElementById('pk-blip'); if(old) old.remove();
    var b = document.createElement('div'); b.id = 'pk-blip'; b.setAttribute('aria-hidden', 'true');
    document.body.appendChild(b);
    setTimeout(function(){ b.remove(); }, 320);
  }

  // Start with whatever is saved, before the app has even drawn.
  function fromSave(){
    try { var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null') || {};
      apply(s.crt, s.transitions !== false); } catch(e){ apply(DEFAULT, true); }
  }
  if(document.body) fromSave(); else document.addEventListener('DOMContentLoaded', fromSave);

  // ---- ⓘ notes and small dropdown menus -----------------------------------
  // Notes open on hover or keyboard focus by CSS; a tap or click pins one
  // open (and closes any other). Notes near the window's edge shift back
  // inside it. A dropdown menu closes when you pick from it or click away.
  function fitTip(info){
    var tip = info && info.querySelector('.pk-tip'); if(!tip) return;
    tip.style.setProperty('--tip-shift', '0px');
    // Keep it inside the window, or inside the settings drawer it sits in.
    var box = info.closest('.pk-drawer'), b = box ? box.getBoundingClientRect() : {left:0, right:innerWidth};
    var L = b.left + 8, R = b.right - 8;
    var r = tip.getBoundingClientRect(), shift = 0;
    if(r.right > R) shift = R - r.right;
    if(r.left + shift < L) shift = L - r.left;
    tip.style.setProperty('--tip-shift', shift + 'px');
  }
  function closeTips(except){
    document.querySelectorAll('.pk-info.open').forEach(function(x){ if(x !== except) x.classList.remove('open'); });
  }
  document.addEventListener('mouseover', function(e){ var i = e.target.closest && e.target.closest('.pk-info'); if(i) fitTip(i); });
  document.addEventListener('focusin', function(e){ var i = e.target.closest && e.target.closest('.pk-info'); if(i) fitTip(i); });
  document.addEventListener('click', function(e){
    var t = e.target, i = t.closest && t.closest('.pk-i');
    if(i){ var box = i.closest('.pk-info'); e.preventDefault(); closeTips(box); box.classList.toggle('open'); fitTip(box); }
    else closeTips(null);
    var inMenu = t.closest && t.closest('.pk-menu');
    document.querySelectorAll('.pk-menu[open]').forEach(function(m){
      if(m !== inMenu || (t.closest('.pk-menu-list') && t.closest('button'))) m.removeAttribute('open');
    });
  });
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape') return;
    var open = document.querySelectorAll('.pk-info.open, .pk-menu[open]');
    if(!open.length) return;
    open.forEach(function(x){ if(x.tagName === 'DETAILS') x.removeAttribute('open'); else x.classList.remove('open'); });
    e.stopPropagation();
  }, true);

  // ---- Update notice (desktop app) -----------------------------------------
  // The app downloads new versions by itself; this offers the reload.
  function updateBanner(info){
    if(!document.body || !info) return;
    var old = document.getElementById('pk-update'); if(old) old.remove();
    if(!document.getElementById('pk-update-css')){
      var st = document.createElement('style'); st.id = 'pk-update-css';
      st.textContent = '#pk-update{position:fixed;left:16px;bottom:16px;z-index:45;max-width:min(360px,calc(100vw - 32px));padding:14px 16px;border-radius:12px;' +
        'background:var(--color-surface,#232532);color:var(--color-text,#eee);box-shadow:0 10px 30px rgba(0,0,0,.4);border:1px solid var(--color-divider,rgba(255,255,255,.12));' +
        'font:13px/1.5 var(--font-body,inherit);animation:pkUpIn .3s ease}' +
        '#pk-update b{font-family:var(--font-heading,inherit);font-weight:400;font-size:15px;display:block}' +
        '#pk-update .u-btns{display:flex;gap:8px;margin-top:10px}' +
        '@keyframes pkUpIn{from{transform:translateY(12px);opacity:0}}';
      document.head.appendChild(st);
    }
    var el = document.createElement('div'); el.id = 'pk-update'; el.setAttribute('role', 'status');
    var v = String(info.version || '').replace(/\.0$/, '');
    if(info.kind === 'ready'){
      el.innerHTML = '<b>Version ' + v + ' is ready</b>Restart to start using it. Your progress stays as it is.' +
        '<div class="u-btns"><button type="button" class="btn btn-primary" data-u="go" style="font-size:13px">Restart now</button>' +
        '<button type="button" class="btn btn-ghost" data-u="later" style="font-size:13px">Later</button></div>';
    } else if(info.kind === 'installer'){
      el.innerHTML = '<b>Version ' + v + ' needs a fresh install</b>This one changes the app itself, so it can\u2019t update on its own. ' +
        (info.url ? 'Download the new installer and run it. Your progress is kept.' : 'Ask the Professor for the new installer. Your progress is kept.') +
        '<div class="u-btns">' + (info.url ? '<a class="btn btn-primary" data-u="dl" href="' + String(info.url).replace(/"/g, '') + '" target="_blank" rel="noopener" style="font-size:13px">Get the installer</a>' : '') +
        '<button type="button" class="btn btn-ghost" data-u="later" style="font-size:13px">OK</button></div>';
    } else return;
    el.addEventListener('click', function(e){ var b = e.target.closest('[data-u]'); if(!b) return;
      if(b.dataset.u === 'go' && window.pokedexUpdater) window.pokedexUpdater.reload();
      el.remove(); });
    document.body.appendChild(el);
  }
  if(window.pokedexUpdater && window.pokedexUpdater.onStatus) window.pokedexUpdater.onStatus(updateBanner);

  window.pkScreen = { apply: apply, blip: blip, strength: toStrength, level: function(){ return level; }, updateBanner: updateBanner };
})();
