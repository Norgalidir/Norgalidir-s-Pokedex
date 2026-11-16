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
  function apply(lv, tr, depth, season){
    level = toStrength(lv);
    trans = tr !== false;
    build(); if(!el) return;
    var root = document.documentElement;
    if(lightTheme()) root.setAttribute('data-light', ''); else root.removeAttribute('data-light');
    setDepth(depth !== false);
    applySeason(season);
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
      apply(s.crt, s.transitions !== false, s.depth !== false, s.season || 'auto'); } catch(e){ apply(DEFAULT, true); }
  }


  // ---- Depth: the app's surfaces get the same solid, lit feel as the 3D
  // devices in the intro. Panels are raised with a lit top edge and a soft
  // shadow, buttons are glossy and press in, inputs are sunk, and the menu
  // tiles tilt towards the pointer. "Flat" in Data turns it all off.
  var DEPTH_CSS = [
    ':root{--d-hi:rgba(255,255,255,.17);--d-hi2:rgba(255,255,255,.075);--d-lo:rgba(0,0,0,.6);--d-edge:rgba(0,0,0,.55);--d-sink:rgba(0,0,0,.45);--d-side:color-mix(in srgb,var(--color-neutral-900,#1b1d2a) 45%,#000)}',
    'html[data-light]{--d-hi:rgba(255,255,255,1);--d-hi2:rgba(255,255,255,.6);--d-lo:rgba(30,30,40,.22);--d-edge:rgba(0,0,0,.14);--d-sink:rgba(0,0,0,.12);--d-side:#d6d6d0}',
    // raised panels: cards and the inline panels used across the app
    'html:not([data-depth=flat]) .card,html:not([data-depth=flat]) [style*="background: var(--color-neutral-900)"],html:not([data-depth=flat]) [data-tilt]:not(.pk-hon-slot),html:not([data-depth=flat]) [style*="background: var(--color-surface)"]{',
    '  box-shadow:inset 0 1.5px 0 var(--d-hi),inset 1px 0 0 var(--d-hi2),inset -1px 0 0 var(--d-edge),inset 0 -2px 0 var(--d-edge),0 4px 0 var(--d-side),0 5px 1px var(--d-edge),0 16px 28px -12px var(--d-lo) !important;',
    '  background-image:linear-gradient(180deg,var(--d-hi2),rgba(255,255,255,.015) 35%,rgba(0,0,0,.20)) !important}',
    'html[data-light]:not([data-depth=flat]) .card,html[data-light]:not([data-depth=flat]) [style*="background: var(--color-neutral-900)"],html[data-light]:not([data-depth=flat]) [data-tilt]:not(.pk-hon-slot){background-image:linear-gradient(180deg,#fff,rgba(0,0,0,.025)) !important}',
    // the big page panel: a bevelled rim, like the device bodies
    'html:not([data-depth=flat]) [data-m="shell"]{box-shadow:inset 0 1px 0 var(--d-hi),inset 0 0 0 1px var(--d-hi2),inset 0 -3px 0 var(--d-edge),0 30px 70px -30px var(--d-lo),0 0 0 1px var(--d-edge)}',
    // header bar: glossy
    'html:not([data-depth=flat]) [data-m="header"]{box-shadow:inset 0 1px 0 var(--d-hi),inset 0 -1px 0 var(--d-edge),0 8px 22px -12px var(--d-lo);',
    '  background-image:linear-gradient(180deg,var(--d-hi2),transparent 60%)}',
    // buttons: lit top, solid lip underneath, press in when clicked
    'html:not([data-depth=flat]) .btn:not(.btn-ghost){background-image:linear-gradient(180deg,var(--d-hi),rgba(255,255,255,.02) 50%,rgba(0,0,0,.22));',
    '  box-shadow:inset 0 1.5px 0 var(--d-hi),inset 0 -1px 0 var(--d-edge),0 3px 0 var(--d-side),0 4px 1px var(--d-edge),0 8px 14px -6px var(--d-lo);transition:transform .08s ease,box-shadow .08s ease,background-color .15s ease}',
    'html:not([data-depth=flat]) .btn.btn-primary{background-color:color-mix(in srgb,var(--color-accent) 20%,transparent);box-shadow:inset 0 1.5px 0 var(--d-hi),inset 0 -1px 0 var(--d-edge),0 3px 0 color-mix(in srgb,var(--color-accent) 40%,#000),0 8px 18px -6px color-mix(in srgb,var(--color-accent) 55%,transparent)}',
    'html:not([data-depth=flat]) .btn:not(.btn-ghost):active{transform:translateY(3px);box-shadow:inset 0 2px 6px var(--d-sink),0 0 0 var(--d-side)}',
    // inputs and selects: sunk into the surface
    'html:not([data-depth=flat]) .input{box-shadow:inset 0 3px 6px var(--d-sink),inset 0 1px 0 var(--d-edge),0 1px 0 var(--d-hi2);background-image:linear-gradient(180deg,rgba(0,0,0,.16),transparent 70%)}',
    'html[data-light]:not([data-depth=flat]) .input{background-image:linear-gradient(180deg,rgba(0,0,0,.035),transparent 60%)}',
    // clickable panels lift on hover and press when clicked
    'html:not([data-depth=flat]) button[style*="background: var(--color-neutral-900)"],html:not([data-depth=flat]) button.card{transition:transform .14s ease,box-shadow .14s ease}',
    'html:not([data-depth=flat]) button[style*="background: var(--color-neutral-900)"]:hover,html:not([data-depth=flat]) button.card:hover{transform:translateY(-3px)}',
    'html:not([data-depth=flat]) button[style*="background: var(--color-neutral-900)"]:active,html:not([data-depth=flat]) button.card:active{transform:translateY(2px)}',
    // tilt: tiles marked data-tilt lean towards the pointer
    'html:not([data-depth=flat]) [data-tilt]{transform:perspective(700px) rotateX(var(--tx,0deg)) rotateY(var(--ty,0deg)) translateY(var(--tz,0px)) !important;transition:transform .18s ease-out,box-shadow .18s ease !important;transform-style:preserve-3d}',
    'html:not([data-depth=flat]) [data-tilt]:hover{--tz:-4px}',
    // the menu lens: a specular highlight and a rim, like the intro lens
    'html:not([data-depth=flat]) [style*="--pk-lens"]{position:relative}',
    'html:not([data-depth=flat]) [style*="--pk-lens"]::after{content:"";position:absolute;left:18%;top:12%;width:40%;height:30%;border-radius:50%;',
    '  background:radial-gradient(ellipse at 50% 40%,rgba(255,255,255,.75),rgba(255,255,255,0) 70%);transform:rotate(-20deg);pointer-events:none}',
    'html:not([data-depth=flat]) [style*="--pk-lens"]::before{content:"";position:absolute;inset:-2px;border-radius:50%;box-shadow:inset 0 -8px 16px rgba(0,0,0,.45),inset 0 3px 6px rgba(255,255,255,.25);pointer-events:none}',
    // honours and badges: a little shadow under the art
    'html:not([data-depth=flat]) .pk-hon-slot.got img{filter:drop-shadow(0 6px 8px var(--d-lo))}',
    '@media (prefers-reduced-motion:reduce){html [data-tilt]{transform:none !important}}'
  ].join('\n');
  function depthCss(){
    if(document.getElementById('pk-depth-css')) return;
    var st = document.createElement('style'); st.id = 'pk-depth-css'; st.textContent = DEPTH_CSS; document.head.appendChild(st);
  }
  function setDepth(on){ depthCss(); if(on === false) document.documentElement.setAttribute('data-depth', 'flat'); else document.documentElement.removeAttribute('data-depth'); }
  // Tilt follows the pointer over anything marked data-tilt.
  var tiltEl = null;
  document.addEventListener('pointermove', function(e){
    if(reduced || e.pointerType === 'touch') return;
    var t = e.target.closest && e.target.closest('[data-tilt]');
    if(tiltEl && tiltEl !== t){ tiltEl.style.removeProperty('--tx'); tiltEl.style.removeProperty('--ty'); }
    tiltEl = t; if(!t) return;
    var r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    t.style.setProperty('--tx', (-y * 7).toFixed(2) + 'deg'); t.style.setProperty('--ty', (x * 9).toFixed(2) + 'deg');
  }, {passive: true});
  document.addEventListener('pointerleave', function(){ if(tiltEl){ tiltEl.style.removeProperty('--tx'); tiltEl.style.removeProperty('--ty'); tiltEl = null; } }, true);

  // ---- Seasons ----------------------------------------------------------------
  // Around Halloween, through December, at New Year and on the anniversary
  // (27 February) the app dresses up a little: a seasonal strip under the
  // header, a few drifting particles, and an emblem on the intro devices.
  var SEASONS = {
    halloween: {name:'Halloween', colors:['#f08a24','#8a46c9','#2b2b2b'], particle:'leaf',
      emblem:'<svg viewBox="0 0 24 24"><path d="M12 6c-1-2 0-3 1.5-3.5-.5 1-.4 2 .5 3.2 3.6.2 6 2.9 6 6.8 0 4.2-3.4 7.5-8 7.5s-8-3.3-8-7.5C4 8.6 7 6 12 6z" fill="#f08a24"/><path d="M8.5 11l2 1.5-2 .8zM15.5 11l-2 1.5 2 .8zM8 15.5c2.5 1.5 5.5 1.5 8 0-1 2.5-7 2.5-8 0z" fill="#2b1406"/></svg>',
      badge:{n:'Spooky Hunter', g:'fang', s:'shield', c:'#e07b22'}},
    winter: {name:'Winter', colors:['#7cc6ee','#e8f6ff','#3a7fc0'], particle:'snow',
      emblem:'<svg viewBox="0 0 24 24"><g stroke="#cfeeff" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/><path d="M12 5l-2-2M12 5l2-2M12 19l-2 2M12 19l2 2"/></g></svg>',
      badge:{n:'Frost Collector', g:'sparkle', s:'rosette', c:'#4aa8d8'}},
    newyear: {name:'New Year', colors:['#e3b341','#d9677f','#3c7fd0'], particle:'spark',
      emblem:'<svg viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 9l-5.2 4.3L17.6 20 12 16.3 6.4 20l1.8-6.7L3 9l6.6-.4z" fill="#e3b341"/></svg>',
      badge:{n:'New Year Trainer', g:'star', s:'coin', c:'#d4a017'}},
    anniversary: {name:'Anniversary', colors:['#cf3a5a','#e3b341','#3c7fd0','#3fb37f'], particle:'confetti',
      emblem:'<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.3-9.2C1.4 8.3 3.6 5 6.9 5c2 0 3.4 1.1 5.1 3 1.7-1.9 3.1-3 5.1-3 3.3 0 5.5 3.3 4.2 6.8C19.5 16.4 12 21 12 21z" fill="#cf3a5a"/></svg>',
      badge:{n:'Anniversary Fan', g:'heart', s:'wing', c:'#cf3a5a'}}
  };
  function seasonFor(d){
    var m = d.getMonth() + 1, day = d.getDate();
    if((m === 10 && day >= 24) || (m === 11 && day === 1)) return 'halloween';
    if(m === 12 && day === 31 || (m === 1 && day <= 2)) return 'newyear';
    if(m === 12) return 'winter';
    if(m === 2 && day === 27) return 'anniversary';
    return '';
  }
  function savedSeason(){ try { var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null') || {}; return s.season || 'auto'; } catch(e){ return 'auto'; } }
  function activeSeason(pref){
    pref = pref || savedSeason();
    if(pref === 'off') return '';
    if(SEASONS[pref]) return pref;
    return seasonFor(new Date());
  }
  var SEASON_CSS = [
    '#pk-season{position:fixed;inset:0;z-index:34;pointer-events:none;overflow:hidden}',
    '.pk-season-layer i{position:absolute;top:-6vh;display:block;will-change:transform}',
    '.pk-season-layer .snow{width:6px;height:6px;border-radius:50%;background:#fff;opacity:.75;filter:blur(.4px);animation:pkFall linear infinite}',
    'html[data-light] .pk-season-layer .snow{background:#8fc0e4;opacity:.85}',
    '.pk-season-layer .leaf{width:12px;height:8px;border-radius:12px 0;opacity:.8;animation:pkFallSway linear infinite}',
    '.pk-season-layer .confetti{width:7px;height:11px;opacity:.85;animation:pkFallSway linear infinite}',
    '.pk-season-layer .spark{top:auto;width:4px;height:4px;border-radius:50%;opacity:0;animation:pkBurst ease-out infinite}',
    '@keyframes pkFall{to{transform:translate3d(var(--dx,20px),112vh,0)}}',
    '@keyframes pkFallSway{0%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(var(--dx,30px),56vh,0) rotate(220deg)}100%{transform:translate3d(0,112vh,0) rotate(440deg)}}',
    '@keyframes pkBurst{0%{opacity:0;transform:translate(0,0) scale(.4)}8%{opacity:1}60%{opacity:.9}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(1)}}',
    'html[data-season] [data-m="header"]::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:3px;background:var(--season-strip);opacity:.9;pointer-events:none}',
    'html[data-season] [data-m="header"]{position:sticky}',
    '.pk-season-emblem{display:inline-block;width:1.1em;height:1.1em;vertical-align:-.15em;margin-left:.35em}',
    '.pk-season-emblem svg{width:100%;height:100%;display:block}',
    '@media (prefers-reduced-motion:reduce){#pk-season{display:none}}',
    '@media print{#pk-season{display:none}}'
  ].join('\n');
  var seasonOn = null;
  function applySeason(pref){
    var id = activeSeason(pref), root = document.documentElement;
    if(id === seasonOn) return; seasonOn = id;
    var old = document.getElementById('pk-season'); if(old) old.remove();
    if(!id){ root.removeAttribute('data-season'); root.style.removeProperty('--season-strip'); decorate(''); return; }
    if(!document.getElementById('pk-season-css')){ var st = document.createElement('style'); st.id = 'pk-season-css'; st.textContent = SEASON_CSS; document.head.appendChild(st); }
    var S = SEASONS[id]; root.setAttribute('data-season', id);
    root.style.setProperty('--season-strip', 'linear-gradient(90deg,' + S.colors.concat(S.colors[0]).join(',') + ')');
    decorate(id);
    if(reduced || !document.body) return;
    var box = document.createElement('div'); box.id = 'pk-season'; box.className = 'pk-season-layer'; box.setAttribute('aria-hidden', 'true');
    box.innerHTML = particles(S); document.body.appendChild(box);
  }
  function particles(S){
    var html = '';
    var n = S.particle === 'spark' ? 18 : S.particle === 'snow' ? 34 : 18;
    for(var i = 0; i < n; i++){
      var left = Math.round(Math.random() * 100), dur = (S.particle === 'snow' ? 9 : 11) + Math.random() * 9, delay = -Math.random() * dur;
      var col = S.colors[i % S.colors.length], dx = Math.round((Math.random() - .5) * 120);
      if(S.particle === 'spark'){
        var bx = 15 + Math.random() * 70, by = 15 + Math.random() * 40, a = Math.random() * Math.PI * 2, r = 40 + Math.random() * 60;
        html += '<i class="spark" style="left:' + bx + '%;top:' + by + '%;background:' + col + ';box-shadow:0 0 6px ' + col + ';--dx:' + Math.round(Math.cos(a) * r) + 'px;--dy:' + Math.round(Math.sin(a) * r) + 'px;animation-duration:' + (2.4 + Math.random() * 1.5).toFixed(2) + 's;animation-delay:' + (-Math.random() * 4).toFixed(2) + 's"></i>';
      } else {
        var size = S.particle === 'snow' ? (3 + Math.random() * 5).toFixed(1) : null;
        html += '<i class="' + S.particle + '" style="left:' + left + '%;--dx:' + dx + 'px;animation-duration:' + dur.toFixed(1) + 's;animation-delay:' + delay.toFixed(1) + 's;' +
          (size ? 'width:' + size + 'px;height:' + size + 'px;' : 'background:' + col + ';') + '"></i>';
      }
    }
    return html;
  }
  function seasonInfo(pref){ var id = activeSeason(pref); return id ? Object.assign({id: id}, SEASONS[id]) : null; }


  // ---- Seasonal decorations ------------------------------------------------
  // Drawn here as simple original shapes. Your own art can replace some of
  // them: put PNGs in images/season/ named after the season and the piece,
  // e.g. halloween-bat.png, halloween-spider.png, halloween-pumpkin.png,
  // winter-holly.png, winter-bauble.png, winter-snowman.png,
  // anniversary-cake.png. If a file is there, it's used instead.
  var ART = {halloween:['bat','spider','pumpkin'], winter:['holly','bauble','snowman'], newyear:[], anniversary:['cake']};
  var artOk = {};
  function art(season, piece, cb){
    var src = 'images/season/' + season + '-' + piece + '.png', k = season + piece;
    if(artOk[k] !== undefined) return cb(artOk[k] ? src : null);
    var im = new Image(); im.onload = function(){ artOk[k] = true; cb(src); }; im.onerror = function(){ artOk[k] = false; cb(null); }; im.src = src;
  }
  function svgUrl(svg){ return 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '")'; }
  var SNOWCAP = svgUrl('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="14" viewBox="0 0 80 14"><path d="M0 6 Q6 0 13 5 Q19 1 26 5 Q33 -1 41 5 Q47 1 54 6 Q61 0 68 5 Q74 1 80 6 L80 9 Q70 12 60 9 Q50 13 40 9 Q30 12 20 9 Q10 13 0 9Z" fill="#ffffff"/><path d="M0 9 Q10 13 20 9 Q30 12 40 9 Q50 13 60 9 Q70 12 80 9 L80 10 Q70 14 60 11 Q50 14 40 11 Q30 14 20 11 Q10 14 0 11Z" fill="#b9d8ef" opacity=".8"/></svg>');
  var ICICLES = svgUrl('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="26" viewBox="0 0 64 26"><defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#bfe3ff" stop-opacity=".2"/></linearGradient></defs><path d="M0 0H64V3Q60 4 58 3L55 22 52 3Q46 4 42 3L40 13 37 3Q30 4 26 3L22 25 19 3Q12 4 9 3L7 11 4 3Q2 4 0 3Z" fill="url(#g)"/></svg>');
  var HOLLY = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90"><path d="M10 40 C25 20 45 18 60 30 C52 34 56 42 48 44 C46 52 36 50 32 56 C28 48 18 52 10 40Z" fill="#2f8f4e"/><path d="M60 30 C70 12 92 8 112 18 C104 24 108 32 100 34 C100 42 90 42 88 48 C82 40 72 44 60 30Z" fill="#257a41"/><path d="M12 40 Q36 36 60 30 Q84 22 110 19" stroke="#1d5e31" stroke-width="2" fill="none"/><circle cx="58" cy="38" r="8" fill="#d7263d"/><circle cx="70" cy="42" r="7" fill="#c21d33"/><circle cx="62" cy="50" r="7" fill="#e0344a"/><circle cx="55" cy="35" r="2.5" fill="#fff" opacity=".7"/><circle cx="68" cy="39" r="2" fill="#fff" opacity=".7"/></svg>';
  function bauble(col){ return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 52"><rect x="15" y="6" width="10" height="6" rx="1.5" fill="#d9b44a"/><circle cx="20" cy="30" r="17" fill="' + col + '"/><circle cx="20" cy="30" r="17" fill="url(#s)"/><defs><radialGradient id="s" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></radialGradient></defs><path d="M5 28 Q20 34 35 28" stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="none"/></svg>'; }
  var SNOWMAN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 80"><circle cx="30" cy="58" r="20" fill="#fff"/><circle cx="30" cy="30" r="14" fill="#fff"/><circle cx="25" cy="27" r="1.8" fill="#222"/><circle cx="35" cy="27" r="1.8" fill="#222"/><path d="M30 31 L40 33 L30 34Z" fill="#f08a24"/><rect x="18" y="8" width="24" height="5" rx="1" fill="#222"/><rect x="22" y="-4" width="16" height="14" rx="2" fill="#222"/><path d="M17 40 Q30 46 43 40 L44 45 Q30 51 16 45Z" fill="#d7263d"/><circle cx="30" cy="52" r="1.8" fill="#222"/><circle cx="30" cy="60" r="1.8" fill="#222"/></svg>';
  var COBWEB = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" stroke="rgba(230,230,240,.55)" stroke-width="1.2"><path d="M0 0L120 120M0 0L60 120M0 0L120 60M0 0L0 120M0 0L120 0"/><path d="M0 22Q14 18 22 0M0 46Q30 40 46 0M0 72Q48 62 72 0M0 98Q66 86 98 0"/><path d="M0 22Q12 26 11 38M11 38Q24 30 22 0" opacity=".6"/></svg>';
  var SPIDER = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#4a3d5e" stroke="#8d7aa8" stroke-width="2" stroke-linecap="round"><ellipse cx="20" cy="22" rx="7" ry="8"/><circle cx="20" cy="12" r="5"/><ellipse cx="18" cy="19" rx="2.5" ry="3" fill="#a996c4" stroke="none" opacity=".6"/><path d="M14 18L4 12M14 22L3 22M14 26L5 32M15 29L9 38M26 18L36 12M26 22L37 22M26 26L35 32M25 29L31 38" fill="none"/><circle cx="18" cy="11" r="1.6" fill="#ff9a2e" stroke="none"/><circle cx="22" cy="11" r="1.6" fill="#ff9a2e" stroke="none"/></svg>';
  var PUMPKIN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 80"><defs><radialGradient id="p" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#ffb34d"/><stop offset="1" stop-color="#d9620f"/></radialGradient></defs><path d="M42 12 Q40 2 50 0 Q46 6 48 13Z" fill="#4d7a2a"/><ellipse cx="45" cy="46" rx="40" ry="30" fill="url(#p)"/><path d="M45 16 Q30 46 45 76 M45 16 Q60 46 45 76 M45 16 Q14 46 22 72 M45 16 Q76 46 68 72" stroke="#b9500c" stroke-width="2" fill="none" opacity=".6"/><path d="M26 36 L36 42 L24 46Z M64 36 L54 42 L66 46Z M28 56 Q45 66 62 56 L58 62 L52 58 L45 64 L38 58 L32 62Z" fill="#ffe27a"/></svg>';
  var BAT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 36" fill="#141418"><path d="M40 12 C36 6 34 6 33 10 C26 4 14 2 2 8 C10 10 14 16 12 22 C18 18 24 20 26 26 C30 20 34 20 40 26 C46 20 50 20 54 26 C56 20 62 18 68 22 C66 16 70 10 78 8 C66 2 54 4 47 10 C46 6 44 6 40 12Z"/><circle cx="37.5" cy="12" r="1" fill="#f08a24"/><circle cx="42.5" cy="12" r="1" fill="#f08a24"/></svg>';
  var CAKE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect x="10" y="40" width="60" height="30" rx="6" fill="#f3d7b0"/><path d="M10 46 Q20 54 30 46 Q40 54 50 46 Q60 54 70 46 L70 40 L10 40Z" fill="#cf3a5a"/><rect x="6" y="68" width="68" height="6" rx="3" fill="#e9e9ef"/><rect x="38" y="22" width="4" height="18" rx="1" fill="#3c7fd0"/><path d="M40 10 Q46 18 40 22 Q34 18 40 10Z" fill="#ffb84d"/></svg>';
  var DECO_CSS = [
    '#pk-deco{position:fixed;inset:0;z-index:33;pointer-events:none;overflow:hidden}',
    '#pk-deco .d-top{position:absolute;left:0;right:0;top:var(--deco-top,0px);height:60px}',
    '#pk-deco .d-icicles{position:absolute;left:0;right:0;top:0;height:26px;background:' + ICICLES + ' repeat-x;background-size:64px 26px;opacity:.9;filter:drop-shadow(0 2px 2px rgba(0,0,0,.25))}',
    '#pk-deco .d-lights{position:absolute;left:0;right:0;top:-2px;height:44px}',
    '#pk-deco .d-lights circle.b{animation:pkTwinkle 2.4s ease-in-out infinite}',
    '@keyframes pkTwinkle{0%,100%{opacity:1}50%{opacity:.35}}',
    '#pk-deco .d-corner{position:absolute;width:150px;height:110px;background-repeat:no-repeat;background-size:contain}',
    '#pk-deco .d-tl{left:6px;top:calc(var(--deco-top,0px) + 6px)}#pk-deco .d-tr{right:6px;top:calc(var(--deco-top,0px) + 6px)}',
    '#pk-deco .d-bl{left:14px;bottom:10px;width:90px;height:90px}',
    '#pk-deco .d-hang{position:absolute;top:var(--deco-top,0px);width:34px;transform-origin:50% 0;animation:pkSwing 3.6s ease-in-out infinite}',
    '#pk-deco .d-hang::before{content:"";position:absolute;left:50%;top:0;width:1.5px;height:var(--len,40px);background:rgba(220,220,230,.7)}',
    '#pk-deco .d-hang img{position:absolute;left:0;top:var(--len,40px);width:34px}',
    '@keyframes pkSwing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}',
    '#pk-deco .d-spider{animation:pkBob 4.2s ease-in-out infinite}',
    '@keyframes pkBob{0%,100%{transform:translateY(0)}50%{transform:translateY(26px)}}',
    '#pk-deco .d-drift{position:absolute;left:0;right:0;bottom:0;height:34px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.12) 40%,rgba(255,255,255,.22));-webkit-mask:' + SNOWCAP + ' repeat-x top/160px 28px,linear-gradient(#000,#000) 0 14px/100% 100% no-repeat;mask:' + SNOWCAP + ' repeat-x top/160px 28px,linear-gradient(#000,#000) 0 14px/100% 100% no-repeat}',
    '#pk-deco .d-frost{position:absolute;inset:0;background:radial-gradient(circle at 0 0,rgba(220,240,255,.18),transparent 22%),radial-gradient(circle at 100% 0,rgba(220,240,255,.16),transparent 20%),radial-gradient(circle at 0 100%,rgba(220,240,255,.14),transparent 20%),radial-gradient(circle at 100% 100%,rgba(220,240,255,.14),transparent 18%)}',
    '#pk-deco .d-fog{position:absolute;left:-10%;right:-10%;bottom:-10px;height:120px;background:radial-gradient(ellipse at 30% 100%,rgba(200,200,220,.16),transparent 60%),radial-gradient(ellipse at 75% 100%,rgba(200,190,230,.14),transparent 55%);animation:pkFog 16s ease-in-out infinite alternate}',
    '@keyframes pkFog{to{transform:translateX(6%)}}',
    '#pk-deco .d-bat{position:absolute;width:56px;left:-80px;top:30%;opacity:0;animation:pkBat 15s linear infinite}',
    '#pk-deco .d-bat.b2{width:40px;top:18%;animation-delay:-7s;animation-duration:19s}',
    '@keyframes pkBat{0%{opacity:0;transform:translate(0,0)}5%{opacity:.9}25%{transform:translate(32vw,-6vh)}45%{transform:translate(64vw,4vh)}60%{opacity:.9;transform:translate(110vw,-8vh)}61%,100%{opacity:0;transform:translate(110vw,-8vh)}}',
    '#pk-deco .d-bat img,#pk-deco .d-bat svg{width:100%;animation:pkFlap .22s ease-in-out infinite alternate}',
    '@keyframes pkFlap{to{transform:scaleY(.55)}}',
    '#pk-deco .d-pumpkin{filter:drop-shadow(0 0 14px rgba(255,150,40,.55));animation:pkGlow 2.8s ease-in-out infinite}',
    '@keyframes pkGlow{0%,100%{filter:drop-shadow(0 0 10px rgba(255,150,40,.45))}50%{filter:drop-shadow(0 0 20px rgba(255,170,60,.75))}}',
    '#pk-deco .d-flags{position:absolute;left:0;right:0;top:-2px;height:40px}',
    // snow on things: a little cap on raised panels and buttons
    'html[data-season=winter] .btn:not(.btn-ghost){position:relative}',
    'html[data-season=winter] .btn:not(.btn-ghost)::before,html[data-season=winter] .card::before,html[data-season=winter] [style*="background: var(--color-neutral-900)"]:not([style*="position"])::before,html[data-season=winter] [data-tilt]:not(.pk-hon-slot)::before{',
    '  content:"";position:absolute;left:6px;right:6px;top:-5px;height:11px;background:' + SNOWCAP + ' repeat-x;background-size:60px 11px;pointer-events:none;z-index:1;filter:drop-shadow(0 1px 1px rgba(0,0,0,.25))}',
    'html[data-season=winter] .card,html[data-season=winter] [style*="background: var(--color-neutral-900)"]:not([style*="position"]),html[data-season=winter] [data-tilt]:not(.pk-hon-slot){position:relative}',
    // Halloween: buttons flicker like candlelight
    'html[data-season=halloween] .btn.btn-primary{animation:pkCandle 3s ease-in-out infinite}',
    '@keyframes pkCandle{0%,100%{box-shadow:inset 0 1.5px 0 var(--d-hi),0 3px 0 #6b2c05,0 0 14px -2px rgba(255,140,30,.55)}45%{box-shadow:inset 0 1.5px 0 var(--d-hi),0 3px 0 #6b2c05,0 0 22px 0 rgba(255,160,40,.7)}60%{box-shadow:inset 0 1.5px 0 var(--d-hi),0 3px 0 #6b2c05,0 0 10px -3px rgba(255,120,20,.45)}}',
    '@media (prefers-reduced-motion:reduce){#pk-deco *{animation:none !important}html[data-season] .btn{animation:none !important}}',
    '@media print{#pk-deco{display:none}}'
  ].join('\n');
  function lightsSVG(w){
    var cols = ['#ff4d4d','#ffd34d','#4dd2ff','#6dff8a','#ff8af0'], seg = 64, n = Math.ceil(w / seg) + 1, path = 'M0 6', bulbs = '';
    for(var i = 0; i < n; i++){ var x0 = i * seg, x1 = x0 + seg; path += ' Q' + (x0 + seg / 2) + ' 22 ' + x1 + ' 6';
      var bx = x0 + seg / 2, by = 14, c = cols[i % cols.length];
      bulbs += '<rect x="' + (bx - 2.5) + '" y="' + (by - 1) + '" width="5" height="5" rx="1" fill="#333"/>' +
        '<circle class="b" cx="' + bx + '" cy="' + (by + 10) + '" r="6" fill="' + c + '" style="animation-delay:' + ((i * 0.37) % 2.4).toFixed(2) + 's;filter:drop-shadow(0 0 6px ' + c + ')"/>'; }
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (n * seg) + '" height="44" viewBox="0 0 ' + (n * seg) + ' 44"><path d="' + path + '" stroke="#2a3a2a" stroke-width="2" fill="none"/>' + bulbs + '</svg>';
  }
  function flagsSVG(w, cols, streamers){
    var seg = 44, n = Math.ceil(w / seg) + 1, out = '<path d="M0 4';
    for(var i = 0; i < n; i++) out += ' Q' + (i * seg + seg / 2) + ' 12 ' + ((i + 1) * seg) + ' 4';
    out += '" stroke="rgba(255,255,255,.5)" stroke-width="1.5" fill="none"/>';
    for(var j = 0; j < n; j++){ var x = j * seg + 8, c = cols[j % cols.length];
      out += streamers ? '<path d="M' + (x + 14) + ' 8 q6 8 -2 14 q-8 6 0 14" stroke="' + c + '" stroke-width="4" fill="none" stroke-linecap="round"/>'
                       : '<path d="M' + x + ' 7 L' + (x + 28) + ' 7 L' + (x + 14) + ' 32Z" fill="' + c + '"/>'; }
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (n * seg) + '" height="40">' + out + '</svg>';
  }
  var decoId = '', decoTimer = null;
  function decorate(id){
    var old = document.getElementById('pk-deco'); if(old) old.remove();
    clearInterval(decoTimer); decoId = id;
    if(!id || !document.body) return;
    if(!document.getElementById('pk-deco-css')){ var st = document.createElement('style'); st.id = 'pk-deco-css'; st.textContent = DECO_CSS; document.head.appendChild(st); }
    var box = document.createElement('div'); box.id = 'pk-deco'; box.setAttribute('aria-hidden', 'true');
    var W = Math.max(innerWidth, 800), h = '';
    var img = function(svg){ return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); };
    if(id === 'winter'){
      h += '<div class="d-frost"></div><div class="d-top"><div class="d-icicles"></div><div class="d-lights">' + lightsSVG(W) + '</div></div>' +
        '<div class="d-corner d-tl" data-art="holly" style="background-image:url(\'' + img(HOLLY) + '\');left:0;top:calc(var(--deco-top,0px) + 18px);width:84px;height:62px"></div>' +
        '<div class="d-hang" data-art="bauble" style="right:60px;--len:46px"><img alt="" src="' + img(bauble('#d7263d')) + '"></div>' +
        '<div class="d-hang" style="right:104px;--len:28px;animation-delay:-1.2s"><img alt="" src="' + img(bauble('#e3b341')) + '"></div>' +
        '<div class="d-hang" style="right:146px;--len:52px;animation-delay:-2.1s"><img alt="" src="' + img(bauble('#2f9b62')) + '"></div>' +
        '<div class="d-drift"></div><div class="d-corner d-bl" data-art="snowman" style="background-image:url(\'' + img(SNOWMAN) + '\')"></div>';
    } else if(id === 'halloween'){
      h += '<div class="d-fog"></div>' +
        '<div class="d-corner d-tl" style="background-image:url(\'' + img(COBWEB) + '\');width:130px;height:130px"></div>' +
        '<div class="d-corner d-tr" style="background-image:url(\'' + img(COBWEB) + '\');width:130px;height:130px;transform:scaleX(-1)"></div>' +
        '<div class="d-hang d-spider" data-art="spider" style="right:70px;--len:70px;animation:pkBob 4.2s ease-in-out infinite"><img alt="" src="' + img(SPIDER) + '"></div>' +
        '<div class="d-bat" data-art="bat"><img alt="" src="' + img(BAT) + '"></div><div class="d-bat b2" data-art="bat"><img alt="" src="' + img(BAT) + '"></div>' +
        '<div class="d-corner d-bl d-pumpkin" data-art="pumpkin" style="background-image:url(\'' + img(PUMPKIN) + '\')"></div>';
    } else if(id === 'newyear'){
      h += '<div class="d-top"><div class="d-flags">' + flagsSVG(W, ['#e3b341','#d9677f','#3c7fd0','#3fb37f'], true) + '</div></div>';
    } else if(id === 'anniversary'){
      h += '<div class="d-top"><div class="d-flags">' + flagsSVG(W, ['#cf3a5a','#e3b341','#3c7fd0','#3fb37f','#8a46c9']) + '</div></div>' +
        '<div class="d-corner d-bl" data-art="cake" style="background-image:url(\'' + img(CAKE) + '\')"></div>';
    }
    box.innerHTML = h; document.body.appendChild(box);
    // Your own art, where it exists, replaces the drawn piece.
    (ART[id] || []).forEach(function(piece){
      art(id, piece, function(src){ if(!src || decoId !== id) return;
        box.querySelectorAll('[data-art="' + piece + '"]').forEach(function(el){
          var im = el.querySelector('img'); if(im) im.src = src; else el.style.backgroundImage = 'url("' + src + '")'; }); });
    });
    // Keep the top decorations just under the header bar.
    var place = function(){ var hd = document.querySelector('[data-m="header"]'), t = hd ? Math.max(0, hd.getBoundingClientRect().bottom) : 0;
      box.style.setProperty('--deco-top', t + 'px'); };
    place(); decoTimer = setInterval(place, 500);
  }
  var resizeT = null;
  addEventListener('resize', function(){ clearTimeout(resizeT); resizeT = setTimeout(function(){ if(decoId) decorate(decoId); }, 300); });

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
    } else if(info.kind === 'android'){
      el.innerHTML = '<b>Version ' + v + ' is out</b>Download the new app and install it over this one. Your progress is kept.' +
        '<div class="u-btns">' + (info.url ? '<a class="btn btn-primary" data-u="dl" href="' + String(info.url).replace(/"/g, '') + '" target="_blank" rel="noopener" style="font-size:13px">Get the new version</a>' : '') +
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

  // Start with whatever is saved (run last, once everything above is set up).
  if(document.body) fromSave(); else document.addEventListener('DOMContentLoaded', fromSave);
  window.pkScreen = { apply: apply, blip: blip, strength: toStrength, level: function(){ return level; }, updateBanner: updateBanner,
    season: seasonInfo, seasons: SEASONS, seasonFor: seasonFor,
    seasonParticles: function(){ var id = activeSeason(); return id && !reduced ? particles(SEASONS[id]) : ''; } };
})();
