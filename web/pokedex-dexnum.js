/*
 * Dex number trainer: learn National Pokédex numbers.
 *
 *   Easy  "Who is #207?"  pick from four neighbouring Pokémon.
 *   Hard  "What number is Gligar?"  type the number.
 *
 *   Practice  untimed and endless. Every answer shows the Pokémon with its
 *             neighbours, and the ones you miss come back more often.
 *   Test      20 questions, 15 seconds each, best score kept. Leaving
 *             part-way ends the test.
 *
 *   pkDexNum.open({entries, sprite, ranges, miss, best, onAnswer, onFinish})
 *       miss      {num: n} how often each number has been missed (practice)
 *       best      {key: n} best test scores, key = range + '|' + level
 *       onAnswer  function(num, ok)          after every practice answer
 *       onFinish  function({key, correct, total, failed})   after a test
 */
(function(){
  if(window.__pkDexNumLoaded) return; window.__pkDexNumLoaded = true;
  var TEST = 20, SECONDS = 15;
  var RANGES = [['all', 'All', 1, 1025], ['1', 'Gen I', 1, 151], ['2', 'Gen II', 152, 251], ['3', 'Gen III', 252, 386], ['4', 'Gen IV', 387, 493],
    ['5', 'Gen V', 494, 649], ['6', 'Gen VI', 650, 721], ['7', 'Gen VII', 722, 809], ['8', 'Gen VIII', 810, 905], ['9', 'Gen IX', 906, 1025]];
  var CSS = [
    '#pk-quiz .dn-set{display:grid;gap:14px;margin-top:16px}',
    '#pk-quiz .dn-lab{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-500,#888);margin-bottom:6px}',
    '#pk-quiz .dn-chips{display:flex;flex-wrap:wrap;gap:6px}',
    '#pk-quiz .dn-chip{padding:7px 12px;border-radius:999px;border:1px solid var(--color-neutral-800,#333);background:var(--color-neutral-900,#1b1d2a);color:inherit;font:inherit;font-size:13px;cursor:pointer}',
    '#pk-quiz .dn-chip[aria-pressed="true"]{border-color:var(--color-accent,#9184d9);background:color-mix(in srgb,var(--color-accent,#9184d9) 22%,transparent);color:var(--color-text,#eee)}',
    '#pk-quiz .dn-chip small{display:block;font-size:11px;color:var(--color-neutral-400,#aaa)}',
    '#pk-quiz .dn-row{display:flex;gap:10px;margin-top:18px}',
    '#pk-quiz .dn-in{flex:1;min-width:0;font:inherit;font-size:22px;padding:10px 14px;border-radius:10px;border:1px solid var(--color-neutral-800,#333);background:var(--color-neutral-900,#1b1d2a);color:inherit;text-align:center;letter-spacing:.06em}',
    '#pk-quiz .dn-in:focus{outline:none;border-color:var(--color-accent,#9184d9)}',
    '#pk-quiz .dn-in.right{border-color:#3fb37f}#pk-quiz .dn-in.wrong{border-color:#e0534e}',
    '#pk-quiz .dn-img{display:grid;place-items:center;height:140px;margin:12px 0 0}',
    '#pk-quiz .dn-img img{max-height:140px;max-width:200px}',
    '#pk-quiz .dn-q{display:grid;place-items:center;width:96px;height:96px;border-radius:50%;border:2px dashed var(--color-neutral-800,#333);font-family:var(--font-heading,inherit);font-size:44px;color:var(--color-neutral-700,#555)}',
    '#pk-quiz .dn-top{margin-bottom:14px}',
    '#pk-quiz .dn-rev{margin-top:14px;padding:12px 14px;border-radius:10px;background:var(--color-neutral-900,#1b1d2a);text-align:center}',
    '#pk-quiz .dn-rev b{font-family:var(--font-heading,inherit);font-size:20px}',
    '#pk-quiz .dn-nb{display:flex;justify-content:space-between;gap:8px;margin-top:6px;font-size:12px;color:var(--color-neutral-400,#aaa)}',
    '#pk-quiz .dn-stat{display:flex;gap:14px;font-size:12px;color:var(--color-neutral-400,#aaa)}'
  ].join('\n');
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function sfx(n){ try { if(window.pkSound) window.pkSound.fx(n); } catch(e){} }
  function shuffle(arr){ arr = arr.slice(); for(var i = arr.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
  function pad(n){ return '#' + (n < 1000 ? ('00' + n).slice(-3) : n); }
  var LAST = {range: 'all', level: 'easy', mode: 'practice'};

  function open(o){
    if(window.pkQuiz && window.pkQuiz.busy && window.pkQuiz.busy()) return;
    if(document.getElementById('pk-quiz')) return;
    if(window.pkQuiz && window.pkQuiz.ensureCss) window.pkQuiz.ensureCss();
    if(!document.getElementById('pk-dexnum-css')){ var st = document.createElement('style'); st.id = 'pk-dexnum-css'; st.textContent = CSS; document.head.appendChild(st); }
    var by = {}; (o.entries || []).forEach(function(e){ if(e.num >= 1 && e.num <= 1025) by[e.num] = e; });
    var miss = Object.assign({}, o.miss || {}), best = Object.assign({}, o.best || {});
    var el = document.createElement('div'); el.id = 'pk-quiz'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', 'Dex number trainer');
    document.body.appendChild(el);
    var cfg = Object.assign({}, LAST), run = null, timer = null, live = false;

    function cleanup(){ clearInterval(timer); removeEventListener('blur', onLeave); document.removeEventListener('visibilitychange', onVis); removeEventListener('pagehide', onLeave); removeEventListener('keydown', onKey, true); }
    function close(){ cleanup(); el.remove(); }
    function onLeave(){ if(live && run && run.test) finishTest(true); }
    function onVis(){ if(document.hidden) onLeave(); }
    function onKey(e){
      if(e.key === 'Escape'){ e.stopPropagation(); e.preventDefault(); if(run && run.test && live) return; if(run && !run.test) return endPractice(); close(); return; }
      if(!run) return;
      if(run.answered && (e.key === 'Enter' || e.key === ' ') && !run.test){ e.preventDefault(); next(); return; }
      if(!run.answered && cfg.level === 'easy'){ var n = +e.key; if(n >= 1 && n <= 4){ var b = el.querySelectorAll('.q-opt')[n - 1]; if(b){ e.preventDefault(); b.click(); } } }
    }
    function rangeOf(id){ return RANGES.filter(function(r){ return r[0] === id; })[0] || RANGES[0]; }
    function keyOf(){ return cfg.range + '|' + cfg.level; }

    // ---- Setup ------------------------------------------------------------
    function setup(){
      run = null; live = false;
      var chips = function(name, list){ return '<div class="dn-chips">' + list.map(function(x){
        return '<button type="button" class="dn-chip" data-k="' + name + '" data-v="' + x[0] + '" aria-pressed="' + (cfg[name] === x[0]) + '">' + esc(x[1]) + (x[2] ? '<small>' + esc(x[2]) + '</small>' : '') + '</button>'; }).join('') + '</div>'; };
      var b = best[keyOf()];
      el.innerHTML = '<div class="q-card"><div class="q-top"><span>Dex number trainer</span></div>' +
        '<div class="q-q" style="margin-top:14px">Learn your National Pokédex numbers.</div>' +
        '<div class="dn-set">' +
          '<div><div class="dn-lab">Level</div>' + chips('level', [['easy', 'Easy', 'Who is #207? Pick from 4'], ['hard', 'Hard', 'What number is Gligar? Type it']]) + '</div>' +
          '<div><div class="dn-lab">Mode</div>' + chips('mode', [['practice', 'Practice', 'No timer · misses come back'], ['test', 'Test', TEST + ' questions · ' + SECONDS + ' s each']]) + '</div>' +
          '<div><div class="dn-lab">Numbers</div>' + chips('range', RANGES.map(function(r){ return [r[0], r[1]]; })) + '</div>' +
        '</div>' +
        '<div class="q-mid" style="text-align:left;margin-top:14px">' + esc(rangeOf(cfg.range)[1] === 'All' ? '#1 to #1025' : rangeOf(cfg.range)[1] + ': #' + rangeOf(cfg.range)[2] + ' to #' + rangeOf(cfg.range)[3]) +
          (cfg.mode === 'test' ? ' · Best test score here: ' + (b == null ? 'none yet' : b + ' / ' + TEST) + '. Leaving part-way ends the test.' : ' · Stop whenever you like.') + '</div>' +
        '<div class="q-btns"><button type="button" class="btn btn-ghost" data-act="close">Close</button><button type="button" class="btn btn-primary" data-act="go">Start</button></div></div>';
      el.querySelectorAll('.dn-chip').forEach(function(c){ c.addEventListener('click', function(){ cfg[c.dataset.k] = c.dataset.v; LAST = Object.assign({}, cfg); setup(); el.querySelector('.dn-chip[data-k="' + c.dataset.k + '"][data-v="' + c.dataset.v + '"]').focus(); }); });
      el.querySelector('[data-act="close"]').addEventListener('click', close);
      el.querySelector('[data-act="go"]').addEventListener('click', begin);
    }

    // ---- Picking ----------------------------------------------------------
    function pool(){ var r = rangeOf(cfg.range), out = []; for(var n = r[2]; n <= r[3]; n++) if(by[n]) out.push(n); return out; }
    function pickNum(){
      var P = run.pool, recent = run.recent;
      if(run.test){ var n; do { n = P[Math.floor(Math.random() * P.length)]; } while(run.used[n] && run.usedN < P.length); run.used[n] = 1; run.usedN++; return n; }
      // Practice: missed numbers are weighted up so they come back sooner.
      var tot = 0, w = P.map(function(n){ var x = recent.indexOf(n) >= 0 ? 0 : 1 + 4 * Math.min(miss[n] || 0, 5); tot += x; return x; });
      var t = Math.random() * tot; for(var i = 0; i < P.length; i++){ t -= w[i]; if(t < 0) return P[i]; } return P[0];
    }
    function neighbours(n){ // three others close by in the dex, inside the range where possible
      var r = rangeOf(cfg.range), c = [];
      for(var d = 1; c.length < 8 && d < 40; d++){ [n - d, n + d].forEach(function(m){ if(by[m] && m >= r[2] && m <= r[3]) c.push(m); }); }
      if(c.length < 3) for(var d2 = 1; c.length < 3 && d2 < 40; d2++) [n - d2, n + d2].forEach(function(m){ if(by[m] && c.indexOf(m) < 0) c.push(m); });
      return shuffle(c.slice(0, 6)).slice(0, 3);
    }

    // ---- Running ----------------------------------------------------------
    function begin(){
      run = {test: cfg.mode === 'test', pool: pool(), recent: [], used: {}, usedN: 0, i: 0, correct: 0, answered: false, streak: 0, top: 0, seen: 0, marks: []};
      if(run.pool.length < 4){ setup(); return; }
      if(run.test){
        el.innerHTML = '<div class="q-card"><div class="q-big" id="dn-cd">3</div><div class="q-mid">Get ready…</div></div>';
        var c = 3; sfx('menu'); var t = setInterval(function(){ c--; if(c > 0){ var d = el.querySelector('#dn-cd'); if(d) d.textContent = c; sfx('menu'); return; }
          clearInterval(t); live = true; addEventListener('blur', onLeave); document.addEventListener('visibilitychange', onVis); addEventListener('pagehide', onLeave); ask(); }, 800);
      } else ask();
    }
    function top(){
      if(run.test){ var d = ''; for(var k = 0; k < TEST; k++) d += '<span class="' + (k < run.marks.length ? (run.marks[k] ? 'ok' : 'no') : k === run.i ? 'now' : '') + '"></span>';
        return '<div class="q-top"><span>Question ' + (run.i + 1) + ' of ' + TEST + '</span><span class="q-dots" style="gap:3px">' + d + '</span></div><div class="q-bar"><i></i></div>'; }
      return '<div class="q-top dn-top"><span>Practice · ' + esc(rangeOf(cfg.range)[1]) + ' · ' + (cfg.level === 'easy' ? 'Easy' : 'Hard') + '</span>' +
        '<span class="dn-stat"><span>' + run.correct + ' / ' + run.seen + '</span><span>Streak ' + run.streak + '</span></span></div>';
    }
    function ask(){
      var n = pickNum(), e = by[n]; run.n = n; run.answered = false;
      run.recent.push(n); if(run.recent.length > Math.min(8, run.pool.length - 4)) run.recent.shift();
      var body;
      if(cfg.level === 'easy'){
        run.opts = shuffle([n].concat(neighbours(n)));
        body = '<div class="q-q">Who is ' + pad(n) + '?</div><div class="dn-img" data-img><span class="dn-q">?</span></div>' +
          '<div class="q-opts">' + run.opts.map(function(m, k){ return '<button type="button" class="q-opt" data-i="' + k + '"><b>' + (k + 1) + '</b><span>' + esc(by[m].name) + '</span></button>'; }).join('') + '</div>';
      } else {
        var src = o.sprite ? o.sprite(n) : '';
        body = '<div class="q-q">What number is ' + esc(e.name) + '?</div>' + (src ? '<div class="dn-img"><img alt="" src="' + esc(src) + '"></div>' : '') +
          '<form class="dn-row" autocomplete="off"><input class="dn-in" inputmode="numeric" pattern="[0-9]*" maxlength="4" aria-label="Pokédex number" placeholder="#"><button class="btn btn-primary" type="submit">Check</button></form>';
      }
      el.innerHTML = '<div class="q-card">' + top() + body + '<div data-rev></div>' + (run.test ? '' : '<div class="q-btns"><button type="button" class="btn btn-ghost" data-act="stop">Finish practice</button></div>') + '</div>';
      var stp = el.querySelector('[data-act="stop"]'); if(stp) stp.addEventListener('click', endPractice);
      if(cfg.level === 'easy') el.querySelectorAll('.q-opt').forEach(function(b){ b.addEventListener('click', function(){ answer(run.opts[+b.dataset.i]); }); });
      else { var f = el.querySelector('form'), inp = el.querySelector('.dn-in'); inp.focus();
        inp.addEventListener('input', function(){ inp.value = inp.value.replace(/\D/g, '').slice(0, 4); });
        f.addEventListener('submit', function(ev){ ev.preventDefault(); if(run.answered) return; if(!inp.value) return; answer(+inp.value); }); }
      if(run.test){ var left = SECONDS, bar = el.querySelector('.q-bar'), fill = bar.querySelector('i'); clearInterval(timer);
        timer = setInterval(function(){ left -= .25; fill.style.transform = 'scaleX(' + Math.max(0, left / SECONDS) + ')'; bar.classList.toggle('low', left <= 5); if(left <= 0) answer(-1); }, 250); }
    }
    function answer(g){
      if(run.answered) return; run.answered = true; clearInterval(timer);
      var n = run.n, ok = g === n; run.seen++; run.marks.push(ok);
      if(ok){ run.correct++; run.streak++; run.top = Math.max(run.top, run.streak); } else run.streak = 0;
      if(!run.test){ miss[n] = Math.max(0, (miss[n] || 0) + (ok ? -1 : 1)); if(!miss[n]) delete miss[n]; try { o.onAnswer && o.onAnswer(n, ok); } catch(e){} }
      sfx(ok ? 'ready' : 'look');
      if(cfg.level === 'easy') el.querySelectorAll('.q-opt').forEach(function(b, j){ b.disabled = true; var m = run.opts[j];
        if(m === n) b.classList.add('right'); else if(m === g) b.classList.add('wrong');
        b.querySelector('span').textContent = by[m].name + '  ' + pad(m); });
      else { var inp = el.querySelector('.dn-in'); inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong'); var sb = el.querySelector('form .btn'); if(sb) sb.disabled = true; }
      var slot = el.querySelector('[data-img]'), src = o.sprite ? o.sprite(n) : '';
      if(slot && src) slot.innerHTML = '<img alt="" src="' + esc(src) + '">';
      var a = by[n - 1], z = by[n + 1];
      el.querySelector('[data-rev]').innerHTML = '<div class="dn-rev">' + (ok ? '✓ ' : g > 0 && cfg.level === 'hard' ? '✕ Not ' + pad(g) + ' · ' : '✕ ') + '<b>' + pad(n) + ' ' + esc(by[n].name) + '</b>' +
        '<div class="dn-nb"><span>' + (a ? '← ' + pad(n - 1) + ' ' + esc(a.name) : '') + '</span><span>' + (z ? esc(z.name) + ' ' + pad(n + 1) + ' →' : '') + '</span></div></div>' +
        (run.test ? '' : '<div class="q-btns" style="margin-top:12px"><button type="button" class="btn btn-primary" data-act="next">Next</button></div>');
      if(run.test){ setTimeout(function(){ if(!live) return; run.i++; if(run.i >= TEST) finishTest(false); else ask(); }, ok ? 1100 : 2200); }
      else { var nx = el.querySelector('[data-act="next"]'); nx.addEventListener('click', next); nx.focus();
        if(ok) run.auto = setTimeout(function(){ if(run && run.answered && run.n === n) next(); }, 1300); }
      // Re-render of the top line for practice stats
      if(!run.test){ var tp = el.querySelector('.dn-stat'); if(tp) tp.innerHTML = '<span>' + run.correct + ' / ' + run.seen + '</span><span>Streak ' + run.streak + '</span>'; }
    }
    function next(){ clearTimeout(run.auto); if(run && run.answered) ask(); }
    function endPractice(){
      if(!run){ close(); return; } clearTimeout(run.auto);
      var still = run.pool.filter(function(n){ return miss[n]; }).length;
      el.innerHTML = '<div class="q-card"><div class="q-top"><span>Practice · ' + esc(rangeOf(cfg.range)[1]) + '</span></div>' +
        '<div class="q-big">' + run.correct + ' / ' + run.seen + '</div><div class="q-mid">Best streak ' + run.top + '.' +
        (still ? ' ' + still + (still === 1 ? ' number' : ' numbers') + ' here still to nail; they’ll come up more next time.' : run.seen ? ' Nothing outstanding in this range.' : '') + '</div>' +
        '<div class="q-btns"><button type="button" class="btn btn-secondary" data-act="again">Back</button><button type="button" class="btn btn-primary" data-act="close">Done</button></div></div>';
      run = null;
      el.querySelector('[data-act="again"]').addEventListener('click', setup);
      el.querySelector('[data-act="close"]').addEventListener('click', close);
    }
    function finishTest(failed){
      if(!live) return; live = false; clearInterval(timer); removeEventListener('blur', onLeave); document.removeEventListener('visibilitychange', onVis); removeEventListener('pagehide', onLeave);
      var k = keyOf(), prev = best[k], c = failed ? 0 : run.correct;
      if(!failed && !(prev >= c)) best[k] = c;
      try { o.onFinish && o.onFinish({key: k, range: cfg.range, level: cfg.level, correct: c, total: TEST, failed: failed}); } catch(e){}
      el.innerHTML = '<div class="q-card"><div class="q-top"><span>Test · ' + esc(rangeOf(cfg.range)[1]) + ' · ' + (cfg.level === 'easy' ? 'Easy' : 'Hard') + '</span></div>' +
        (failed ? '<div class="q-big">✕</div><div class="q-mid"><b>Test over.</b> You left part-way, so this one doesn’t count.</div>'
          : '<div class="q-big">' + c + ' / ' + TEST + '</div><div class="q-mid">' + (c === TEST ? 'Perfect!' : prev == null || c > prev ? 'New best here.' : 'Best here: ' + prev + ' / ' + TEST + '.') + '</div>') +
        '<div class="q-btns"><button type="button" class="btn btn-secondary" data-act="again">Back</button><button type="button" class="btn btn-primary" data-act="close">Done</button></div></div>';
      run = null; sfx(failed ? 'look' : 'ready');
      el.querySelector('[data-act="again"]').addEventListener('click', setup);
      el.querySelector('[data-act="close"]').addEventListener('click', close);
    }
    addEventListener('keydown', onKey, true);
    setup();
    el.querySelector('[data-act="go"]').focus();
  }
  window.pkDexNum = { open: open, ranges: RANGES, test: TEST };
})();
