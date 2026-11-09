/*
 * The daily quiz: five questions a day, 15 seconds each, built from the
 * Pokédex data. Everyone gets the same five on the same day.
 *
 * Leaving the quiz part-way (switching app or tab, clicking away from the
 * window, closing it) ends it, and that day scores nothing.
 *
 *   pkQuiz.today()                      today's date, YYYY-MM-DD (local)
 *   pkQuiz.start({entries, sprite, onStart, onFinish, tier})
 *       entries   the Pokédex list ({num, name, cat, types, abilities, evo})
 *       sprite    function(num) -> image URL or '' (for silhouettes)
 *       onStart   called the moment the quiz begins (the day is then used)
 *       onFinish  function({correct, total, failed})
 *       tier      function(extraCorrect) -> {label, next} for the results
 */
(function(){
  if(window.__pkQuizLoaded) return; window.__pkQuizLoaded = true;
  var COUNT = 5, SECONDS = 15;
  var GENS = [[1,151,'Generation I'],[152,251,'Generation II'],[252,386,'Generation III'],[387,493,'Generation IV'],[494,649,'Generation V'],
    [650,721,'Generation VI'],[722,809,'Generation VII'],[810,905,'Generation VIII'],[906,1025,'Generation IX']];

  function today(){ var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  // A random number generator seeded by the date, so the day's quiz is the same for everyone.
  function rng(seedStr){ var h = 1779033703 ^ seedStr.length;
    for(var i = 0; i < seedStr.length; i++){ h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
    return function(){ h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; }; }
  function pick(r, arr){ return arr[Math.floor(r() * arr.length)]; }
  function shuffle(r, arr){ arr = arr.slice(); for(var i = arr.length - 1; i > 0; i--){ var j = Math.floor(r() * (i + 1)), t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
  function uniq(arr){ var seen = {}; return arr.filter(function(x){ if(seen[x]) return false; seen[x] = 1; return true; }); }
  function abilitiesOf(e){ return String(e.abilities || '').split(',').map(function(a){ return a.replace('*', '').trim(); }).filter(Boolean); }
  function genOf(n){ for(var i = 0; i < GENS.length; i++) if(n >= GENS[i][0] && n <= GENS[i][1]) return GENS[i][2]; return ''; }
  // Four options: the answer and three others, in a seeded order.
  function opts(r, answer, pool){
    var others = shuffle(r, uniq(pool.filter(function(x){ return x && x !== answer; }))).slice(0, 3);
    if(others.length < 3) return null;
    return shuffle(r, [answer].concat(others));
  }

  var MAKERS = {
    silhouette: function(r, e, L){ return {kind:'silhouette', num:e.num, q:'Which Pokémon has this silhouette?',
      answer:e.name, options:opts(r, e.name, shuffle(r, L).slice(0, 12).map(function(x){ return x.name; }))}; },
    type: function(r, e, L){ var a = e.types.join(' / ');
      return {q:'What type is ' + e.name + '?', answer:a, options:opts(r, a, shuffle(r, L).slice(0, 40).map(function(x){ return x.types.join(' / '); }))}; },
    number: function(r, e, L, by){ var near = [];
      for(var d = -12; d <= 12; d++) if(d && by[e.num + d]) near.push(by[e.num + d].name);
      return {q:'Which Pokémon is number ' + e.num + ' in the National Pokédex?', answer:e.name, options:opts(r, e.name, near)}; },
    evolve: function(r, e, L, by){
      var to = String(e.evo || '').split(';').map(function(x){ return +x.split(':')[0]; }).filter(function(n){ return by[n]; });
      if(!to.length) return null; var t = by[to[0]];
      var same = L.filter(function(x){ return x.types[0] === t.types[0] && x.num !== t.num && to.indexOf(x.num) < 0; });
      return {q:'What does ' + e.name + ' evolve into?', answer:t.name, options:opts(r, t.name, shuffle(r, same).slice(0, 10).map(function(x){ return x.name; }))}; },
    ability: function(r, e, L){
      var ab = abilitiesOf(e); if(!ab.length) return null; var a = pick(r, ab);
      var without = L.filter(function(x){ return abilitiesOf(x).indexOf(a) < 0; });
      return {q:'Which of these Pokémon can have the ability ' + a + '?', answer:e.name, options:opts(r, e.name, shuffle(r, without).slice(0, 10).map(function(x){ return x.name; }))}; },
    category: function(r, e, L){ if(!e.cat) return null;
      var others = L.filter(function(x){ return x.cat !== e.cat; });
      return {q:'Which Pokémon is known as the ' + e.cat + ' Pokémon?', answer:e.name, options:opts(r, e.name, shuffle(r, others).slice(0, 10).map(function(x){ return x.name; }))}; },
    generation: function(r, e){ var g = genOf(e.num); if(!g) return null;
      return {q:'Which generation did ' + e.name + ' first appear in?', answer:g, options:opts(r, g, GENS.map(function(x){ return x[2]; }))}; },
    weakness: function(r){ var C = window.TYPE_CHART || {}, types = Object.keys(C); if(!types.length) return null;
      var def = pick(r, types), strong = Object.keys(C[def]).filter(function(t){ return C[def][t] >= 2; }); if(!strong.length) return null;
      var a = pick(r, strong), weak = types.filter(function(t){ return !(C[def][t] >= 2); });
      return {q:'Which type of move is super effective against a ' + def + '-type Pokémon?', answer:a, options:opts(r, a, weak)}; }
  };
  var ORDER = ['silhouette', 'type', 'evolve', 'number', 'ability', 'weakness', 'category', 'generation'];

  function build(entries, sprite, day){
    var r = rng('pokedex-quiz|' + day), L = entries.filter(function(e){ return e.num >= 1 && e.num <= 1025 && e.types && e.types.length; });
    var by = {}; L.forEach(function(e){ by[e.num] = e; });
    var kinds = shuffle(r, ORDER), out = [], tries = 0, used = {};
    // Always try a silhouette first if sprites are about; it's the fun one.
    if(sprite) kinds = ['silhouette'].concat(kinds.filter(function(k){ return k !== 'silhouette'; }));
    while(out.length < COUNT + 3 && tries++ < 200){
      var k = kinds[out.length % kinds.length], e = pick(r, L);
      if(used[e.num] || (k === 'silhouette' && !(sprite && sprite(e.num)))) continue;
      var q = MAKERS[k](r, e, L, by); if(!q || !q.options) continue;
      if(k === 'silhouette') q.img = sprite(e.num);
      used[e.num] = 1; out.push(q);
    }
    return out; // a few spare, in case a silhouette image fails to load
  }
  function loadable(url){ return new Promise(function(res){ var i = new Image(); i.onload = function(){ res(true); }; i.onerror = function(){ res(false); }; i.src = url; setTimeout(function(){ res(false); }, 4000); }); }

  // ---- UI ------------------------------------------------------------------
  var CSS = [
    '#pk-quiz{position:fixed;inset:0;z-index:58;display:grid;place-items:center;padding:16px;background:color-mix(in srgb,var(--color-bg,#161826) 88%,transparent);backdrop-filter:blur(6px);font-family:var(--font-body,inherit);color:var(--color-text,#eee)}',
    '#pk-quiz .q-card{width:min(560px,100%);padding:28px;border-radius:16px;background:var(--color-surface,#232532);box-shadow:0 20px 60px rgba(0,0,0,.45)}',
    '#pk-quiz .q-top{display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-500,#888)}',
    '#pk-quiz .q-bar{height:6px;border-radius:999px;background:var(--color-neutral-800,#333);overflow:hidden;margin:12px 0 18px}',
    '#pk-quiz .q-bar i{display:block;height:100%;background:var(--color-accent,#9184d9);transform-origin:left;transition:transform .25s linear}',
    '#pk-quiz .q-bar.low i{background:#e0534e}',
    '#pk-quiz .q-q{font-family:var(--font-heading,inherit);font-size:22px;line-height:1.3;text-wrap:pretty}',
    '#pk-quiz .q-img{display:grid;place-items:center;height:170px;margin:14px 0 4px}',
    '#pk-quiz .q-img img{max-height:170px;max-width:220px;filter:brightness(0) drop-shadow(0 0 1px rgba(255,255,255,.35));transition:filter .4s ease}',
    '#pk-quiz .q-img.reveal img{filter:none}',
    '#pk-quiz .q-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}',
    '@media (max-width:520px){#pk-quiz .q-opts{grid-template-columns:1fr}}',
    '#pk-quiz .q-opt{display:flex;gap:10px;align-items:center;text-align:left;padding:12px 14px;border-radius:10px;border:1px solid var(--color-neutral-800,#333);background:var(--color-neutral-900,#1b1d2a);color:inherit;font:inherit;font-size:15px;cursor:pointer;transition:border-color .15s,background .15s}',
    '#pk-quiz .q-opt:hover:not([disabled]){border-color:var(--color-accent,#9184d9)}',
    '#pk-quiz .q-opt b{flex:none;width:22px;height:22px;border-radius:6px;display:grid;place-items:center;font-size:12px;background:var(--color-neutral-800,#333);color:var(--color-neutral-400,#aaa)}',
    '#pk-quiz .q-opt.right{border-color:#3fb37f;background:color-mix(in srgb,#3fb37f 18%,transparent)}',
    '#pk-quiz .q-opt.wrong{border-color:#e0534e;background:color-mix(in srgb,#e0534e 18%,transparent)}',
    '#pk-quiz .q-big{font-family:var(--font-heading,inherit);font-size:64px;text-align:center;line-height:1;margin:18px 0 6px;color:var(--color-accent-300,#cbc)}',
    '#pk-quiz .q-mid{text-align:center;font-size:14px;color:var(--color-neutral-400,#aaa);text-wrap:pretty}',
    '#pk-quiz .q-btns{display:flex;gap:10px;justify-content:center;margin-top:22px}',
    '#pk-quiz .q-dots{display:flex;gap:6px}#pk-quiz .q-dots span{width:9px;height:9px;border-radius:50%;background:var(--color-neutral-800,#333)}',
    '#pk-quiz .q-dots .ok{background:#3fb37f}#pk-quiz .q-dots .no{background:#e0534e}#pk-quiz .q-dots .now{background:var(--color-accent,#9184d9)}'
  ].join('\n');
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function sfx(n){ try { if(window.pkSound) window.pkSound.fx(n); } catch(e){} }

  var running = null;
  function start(o){
    if(running) return;
    if(!document.getElementById('pk-quiz-css')){ var st = document.createElement('style'); st.id = 'pk-quiz-css'; st.textContent = CSS; document.head.appendChild(st); }
    var el = document.createElement('div'); el.id = 'pk-quiz'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', 'Daily quiz');
    document.body.appendChild(el);
    var counting = false, day = today(), Q = [], i = 0, correct = 0, marks = [], timer = null, left = SECONDS, done = false, live = false, answered = false;
    running = {el: el};

    function cleanup(){ clearInterval(timer); removeEventListener('blur', onLeave); document.removeEventListener('visibilitychange', onVis);
      removeEventListener('pagehide', onLeave); removeEventListener('keydown', onKey, true); running = null; }
    function close(){ cleanup(); el.remove(); }
    function finish(failed){
      if(done) return; done = true; live = false; clearInterval(timer);
      var res = {correct: failed ? 0 : correct, total: COUNT, failed: !!failed};
      try { o.onFinish && o.onFinish(res); } catch(e){}
      var t = o.tier ? o.tier(res.correct) : null;
      el.innerHTML = '<div class="q-card">' +
        '<div class="q-top"><span>Daily quiz · ' + day + '</span></div>' +
        (failed
          ? '<div class="q-big">✕</div><div class="q-mid"><b>Quiz over.</b> You left the quiz, so today scores 0. A new quiz comes tomorrow.</div>'
          : '<div class="q-big">' + correct + ' / ' + COUNT + '</div><div class="q-mid">' +
              (correct === COUNT ? 'Perfect score!' : correct >= 3 ? 'Nicely done.' : 'Tomorrow’s another go.') + '</div>') +
        (t ? '<div class="q-mid" style="margin-top:10px">' + esc(t) + '</div>' : '') +
        '<div class="q-btns"><button type="button" class="btn btn-primary" data-act="close">Done</button></div></div>';
      el.querySelector('[data-act="close"]').addEventListener('click', close);
      el.querySelector('[data-act="close"]').focus();
      sfx(failed ? 'look' : correct >= 3 ? 'ready' : 'menu');
    }
    function onLeave(){ if(live) finish(true); }
    function onVis(){ if(live && document.hidden) finish(true); }
    function onKey(e){
      if(!live){ if(e.key === 'Escape'){ e.stopPropagation(); if(!counting) close(); } return; }
      if(answered) return;
      var n = +e.key; if(n >= 1 && n <= 4){ var b = el.querySelectorAll('.q-opt')[n - 1]; if(b) b.click(); e.preventDefault(); }
      if(e.key === 'Escape'){ e.stopPropagation(); e.preventDefault(); }
    }
    function dots(){ var h = ''; for(var k = 0; k < COUNT; k++) h += '<span class="' + (k < marks.length ? (marks[k] ? 'ok' : 'no') : k === i ? 'now' : '') + '"></span>'; return h; }
    function show(){
      var q = Q[i]; answered = false; left = SECONDS;
      el.innerHTML = '<div class="q-card"><div class="q-top"><span>Question ' + (i + 1) + ' of ' + COUNT + '</span><span class="q-dots">' + dots() + '</span></div>' +
        '<div class="q-bar"><i></i></div><div class="q-q">' + esc(q.q) + '</div>' +
        (q.img ? '<div class="q-img"><img alt="" src="' + esc(q.img) + '"></div>' : '') +
        '<div class="q-opts">' + q.options.map(function(t, k){ return '<button type="button" class="q-opt" data-i="' + k + '"><b>' + (k + 1) + '</b><span>' + esc(t) + '</span></button>'; }).join('') + '</div></div>';
      el.querySelectorAll('.q-opt').forEach(function(b){ b.addEventListener('click', function(){ answer(+b.dataset.i); }); });
      var bar = el.querySelector('.q-bar'), fill = bar.querySelector('i');
      clearInterval(timer);
      timer = setInterval(function(){ left -= .25; fill.style.transform = 'scaleX(' + Math.max(0, left / SECONDS) + ')';
        bar.classList.toggle('low', left <= 5); if(left <= 0) answer(-1); }, 250);
    }
    function answer(k){
      if(answered || !live) return; answered = true; clearInterval(timer);
      var q = Q[i], ok = k >= 0 && q.options[k] === q.answer;
      if(ok) correct++; marks.push(ok);
      el.querySelectorAll('.q-opt').forEach(function(b, j){ b.disabled = true;
        if(q.options[j] === q.answer) b.classList.add('right'); else if(j === k) b.classList.add('wrong'); });
      var im = el.querySelector('.q-img'); if(im) im.classList.add('reveal');
      sfx(ok ? 'ready' : 'look');
      setTimeout(function(){ if(done) return; i++; if(i >= COUNT) finish(false); else show(); }, ok ? 1100 : 1900);
    }

    el.innerHTML = '<div class="q-card"><div class="q-top"><span>Daily quiz · ' + day + '</span></div>' +
      '<div class="q-q" style="margin-top:14px">Five questions, ' + SECONDS + ' seconds each.</div>' +
      '<div class="q-mid" style="text-align:left;margin-top:10px">Stay on the quiz until it’s done. If you switch app, click away from the window or close it, the quiz ends and today scores 0. Keys 1 to 4 pick an answer.</div>' +
      '<div class="q-btns"><button type="button" class="btn btn-ghost" data-act="close">Not now</button><button type="button" class="btn btn-primary" data-act="go">Start</button></div></div>';
    el.querySelector('[data-act="close"]').addEventListener('click', close);
    el.querySelector('[data-act="go"]').addEventListener('click', function(){
      counting = true;
      var cand = build(o.entries || [], o.sprite, day);
      el.innerHTML = '<div class="q-card"><div class="q-big" id="pk-quiz-cd">3</div><div class="q-mid">Get ready…</div></div>';
      // Check silhouette images load; drop any that don't.
      Promise.all(cand.map(function(q){ return q.img ? loadable(q.img) : Promise.resolve(true); })).then(function(ok){
        Q = cand.filter(function(q, k){ return ok[k]; }).slice(0, COUNT);
        if(Q.length < COUNT){ counting = false; el.innerHTML = '<div class="q-card"><div class="q-mid">Couldn’t build today’s quiz. Try again in a moment.</div><div class="q-btns"><button class="btn btn-primary" data-act="close">OK</button></div></div>';
          el.querySelector('[data-act="close"]').addEventListener('click', close); return; }
        var n = 3, cd = el.querySelector('#pk-quiz-cd');
        var t = setInterval(function(){ n--; if(n > 0){ if(cd) cd.textContent = n; sfx('menu'); return; }
          clearInterval(t);
          // From here the day counts.
          live = true; try { o.onStart && o.onStart(); } catch(e){}
          addEventListener('blur', onLeave); document.addEventListener('visibilitychange', onVis); addEventListener('pagehide', onLeave);
          show(); }, 800);
        sfx('menu');
      });
    });
    addEventListener('keydown', onKey, true);
  }

  window.pkQuiz = { start: start, today: today, count: COUNT, seconds: SECONDS, _build: build };
})();
