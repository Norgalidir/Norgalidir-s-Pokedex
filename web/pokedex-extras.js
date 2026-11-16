/*
 * Extras: the shareable Trainer Card picture and the challenge run rules.
 *
 *   pkCard.render(data) -> Promise<canvas>   draws the card
 *   pkCard.save(canvas, name)                 saves it as a PNG
 *   pkCard.copy(canvas)    -> Promise<bool>   copies it to the clipboard
 *
 *   pkChallenge.games                          games you can roll a run for
 *   pkChallenge.roll(gameId, level)  -> run    a fresh set of rules
 *   pkChallenge.reroll(run, i)       -> run    swaps one rule for another
 *   pkChallenge.text(run, names)     -> string the rules as text to share
 */
(function(){
  if(window.__pkExtrasLoaded) return; window.__pkExtrasLoaded = true;

  // ---- Trainer Card picture -----------------------------------------------
  var W = 1200, H = 630;
  function load(src){
    return new Promise(function(res){
      if(!src) return res(null);
      var im = new Image();
      if(/^https?:/i.test(src) && src.indexOf(location.origin) !== 0) im.crossOrigin = 'anonymous';
      im.onload = function(){ res(im); }; im.onerror = function(){ res(null); };
      im.src = src; setTimeout(function(){ res(null); }, 6000);
    });
  }
  function rr(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function fit(c, text, max, size, weight, family){
    var s = size; do { c.font = (weight || '400') + ' ' + s + 'px ' + family; s -= 2; } while(c.measureText(text).width > max && s > 12);
  }
  function contain(c, im, x, y, w, h){
    var k = Math.min(w / im.width, h / im.height), dw = im.width * k, dh = im.height * k;
    c.drawImage(im, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  }
  function cover(c, im, x, y, w, h){
    var k = Math.max(w / im.width, h / im.height), dw = im.width * k, dh = im.height * k;
    c.drawImage(im, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  }
  // data: {title, line, stats:[{label,value}], honours:[{img,name}], team:[img],
  //        portrait, quiz, footer, colors:{bg,surface,card,accent,accent2,text,muted,line}, fonts:{head,body}}
  function render(d){
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var c = cv.getContext('2d'), C = d.colors, FH = d.fonts.head, FB = d.fonts.body;
    var jobs = [load(d.portrait)].concat((d.honours || []).map(function(h){ return load(h.img); }), (d.team || []).map(load));
    return Promise.all(jobs).then(function(imgs){
      var portrait = imgs[0], hon = imgs.slice(1, 1 + (d.honours || []).length), team = imgs.slice(1 + (d.honours || []).length);
      // background
      var g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, C.surface); g.addColorStop(1, C.bg);
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      var glow = c.createRadialGradient(W - 120, 60, 10, W - 120, 60, 520); glow.addColorStop(0, C.accentSoft); glow.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = glow; c.fillRect(0, 0, W, H);
      c.strokeStyle = C.line; c.lineWidth = 2; rr(c, 14, 14, W - 28, H - 28, 26); c.stroke();
      // portrait or lens
      var px = 48, py = 48, pw = 250, ph = 330;
      c.save(); rr(c, px, py, pw, ph, 20); c.clip();
      c.fillStyle = C.card; c.fillRect(px, py, pw, ph);
      if(portrait) cover(c, portrait, px, py, pw, ph);
      else {
        var lg = c.createRadialGradient(px + pw * .4, py + ph * .38, 8, px + pw / 2, py + ph / 2, 120);
        lg.addColorStop(0, C.accent2); lg.addColorStop(.6, C.accent); lg.addColorStop(1, C.bg);
        c.fillStyle = lg; c.beginPath(); c.arc(px + pw / 2, py + ph / 2, 96, 0, Math.PI * 2); c.fill();
      }
      c.restore();
      c.strokeStyle = C.line; c.lineWidth = 2; rr(c, px, py, pw, ph, 20); c.stroke();
      // heading
      var x = 336;
      c.fillStyle = C.accent2; c.font = '600 15px ' + FB; c.textBaseline = 'alphabetic';
      c.fillText('TRAINER CARD', x, 78);
      c.fillStyle = C.text; fit(c, d.title, W - x - 60, 54, '500', FH); c.fillText(d.title, x, 134);
      c.fillStyle = C.muted; fit(c, d.line || '', W - x - 60, 20, '400', FB); c.fillText(d.line || '', x, 170);
      // stats
      var sx = x, sy = 196, sw = (W - x - 48 - 3 * 14) / 4, sh = 96;
      (d.stats || []).slice(0, 4).forEach(function(s, i){
        var bx = sx + i * (sw + 14);
        c.fillStyle = C.card; rr(c, bx, sy, sw, sh, 14); c.fill(); c.strokeStyle = C.line; c.lineWidth = 1.5; c.stroke();
        c.fillStyle = C.muted; c.font = '600 12px ' + FB; c.fillText(String(s.label).toUpperCase(), bx + 16, sy + 28);
        c.fillStyle = C.accent2; fit(c, String(s.value), sw - 32, 36, '500', FH); c.fillText(String(s.value), bx + 16, sy + 74);
      });
      // honours on show
      var hy = 316;
      c.fillStyle = C.muted; c.font = '600 12px ' + FB; c.fillText('ON SHOW', x, hy + 6);
      if(hon.filter(Boolean).length){
        hon.forEach(function(im, i){ if(!im) return; var bx = x + i * 150;
          c.save(); c.shadowColor = 'rgba(0,0,0,.45)'; c.shadowBlur = 16; c.shadowOffsetY = 6; contain(c, im, bx, hy + 18, 104, 104); c.restore();
          c.fillStyle = C.text; fit(c, d.honours[i].name, 140, 14, '500', FB); c.fillText(d.honours[i].name, bx, hy + 142);
        });
      } else { c.fillStyle = C.muted; c.font = '400 16px ' + FB; c.fillText('No honours on show yet', x, hy + 60); }
      // quiz rank
      if(d.quiz){ c.textAlign = 'right'; c.fillStyle = C.muted; c.font = '600 12px ' + FB; c.fillText('DAILY QUIZ', W - 48, hy + 6);
        c.fillStyle = C.text; fit(c, d.quiz, 300, 22, '500', FH); c.fillText(d.quiz, W - 48, hy + 40); c.textAlign = 'left'; }
      // team
      var ty = 480;
      c.fillStyle = C.muted; c.font = '600 12px ' + FB; c.fillText(d.teamLabel || 'TEAM', 48, ty - 14);
      for(var i = 0; i < 6; i++){
        var bx = 48 + i * 126;
        c.fillStyle = C.card; rr(c, bx, ty, 112, 96, 16); c.fill(); c.strokeStyle = C.line; c.lineWidth = 1.5; c.stroke();
        if(team[i]) contain(c, team[i], bx + 8, ty + 4, 96, 88);
      }
      // footer
      c.textAlign = 'right'; c.fillStyle = C.muted; c.font = '400 14px ' + FB; c.fillText(d.footer || '', W - 48, H - 44); c.textAlign = 'left';
      return cv;
    });
  }
  function save(cv, name){
    return new Promise(function(res){
      cv.toBlob(function(b){ if(!b) return res(false);
        var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name || 'trainer-card.png';
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(function(){ URL.revokeObjectURL(a.href); }, 4000); res(true); }, 'image/png');
    });
  }
  function copy(cv){
    return new Promise(function(res){
      if(!navigator.clipboard || !window.ClipboardItem) return res(false);
      cv.toBlob(function(b){ if(!b) return res(false);
        navigator.clipboard.write([new ClipboardItem({'image/png': b})]).then(function(){ res(true); }, function(){ res(false); }); }, 'image/png');
    });
  }
  // ---- Daily quiz scorecard (square, for chats) --------------------------
  // d: {owner, date, n, total, marks:[bool], streak, rankName, rankImg, allTime, footer, colors, fonts}
  function renderQuiz(d){
    var S = 1080, cv = document.createElement('canvas'); cv.width = S; cv.height = S;
    var c = cv.getContext('2d'), C = d.colors, FH = d.fonts.head, FB = d.fonts.body;
    return load(d.rankImg).then(function(rank){
      var g = c.createLinearGradient(0, 0, S, S); g.addColorStop(0, C.surface); g.addColorStop(1, C.bg);
      c.fillStyle = g; c.fillRect(0, 0, S, S);
      var glow = c.createRadialGradient(S / 2, 380, 20, S / 2, 380, 520); glow.addColorStop(0, C.accentSoft); glow.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = glow; c.fillRect(0, 0, S, S);
      c.strokeStyle = C.line; c.lineWidth = 3; rr(c, 24, 24, S - 48, S - 48, 40); c.stroke();
      c.textAlign = 'center';
      c.fillStyle = C.accent2; c.font = '600 26px ' + FB; c.fillText('DAILY QUIZ  ·  ' + d.date, S / 2, 110);
      c.fillStyle = C.text; fit(c, d.owner, S - 160, 44, '500', FH); c.fillText(d.owner, S / 2, 170);
      // score
      c.fillStyle = C.text; c.font = '500 220px ' + FH; c.fillText(d.n + '/' + d.total, S / 2, 440);
      // answer dots
      var r = 26, gap = 30, w = d.total * r * 2 + (d.total - 1) * gap, x0 = S / 2 - w / 2 + r;
      for(var i = 0; i < d.total; i++){
        var ok = d.marks && d.marks[i];
        c.beginPath(); c.arc(x0 + i * (2 * r + gap), 530, r, 0, Math.PI * 2);
        c.fillStyle = ok ? '#3fb37f' : '#e0534e'; c.fill();
        c.fillStyle = 'rgba(255,255,255,.9)'; c.font = '700 26px ' + FB; c.fillText(ok ? '✓' : '✕', x0 + i * (2 * r + gap), 539);
      }
      c.fillStyle = C.muted; c.font = '400 30px ' + FB;
      c.fillText(d.n === d.total ? 'Perfect score!' : d.n >= 3 ? 'Nicely done.' : 'Tomorrow\u2019s another go.', S / 2, 626);
      // rank and streak
      if(rank){ c.save(); c.shadowColor = 'rgba(0,0,0,.45)'; c.shadowBlur = 20; c.shadowOffsetY = 8; contain(c, rank, S / 2 - 260, 690, 170, 170); c.restore(); }
      c.textAlign = 'left';
      c.fillStyle = C.muted; c.font = '600 22px ' + FB; c.fillText('RANK', S / 2 - 60, 735);
      c.fillStyle = C.text; fit(c, d.rankName || 'Unranked', 380, 44, '500', FH); c.fillText(d.rankName || 'Unranked', S / 2 - 60, 785);
      c.fillStyle = C.accent2; c.font = '400 28px ' + FB;
      c.fillText((d.streak > 1 ? d.streak + '-day streak  ·  ' : '') + d.allTime + ' correct in all', S / 2 - 60, 835);
      c.textAlign = 'center'; c.fillStyle = C.muted; c.font = '400 24px ' + FB; c.fillText(d.footer || '', S / 2, S - 70);
      return cv;
    });
  }
  window.pkCard = { render: render, renderQuiz: renderQuiz, save: save, copy: copy };

  // ---- Challenge runs --------------------------------------------------------
  var STARTERS = {
    rb:[1,4,7], y:[25], frlg:[1,4,7], lgpe:[25,133],
    gs:[152,155,158], c:[152,155,158], hgss:[152,155,158],
    rs:[252,255,258], e:[252,255,258], oras:[252,255,258],
    dp:[387,390,393], pt:[387,390,393], bdsp:[387,390,393],
    bw:[495,498,501], b2w2:[495,498,501], xy:[650,653,656],
    sm:[722,725,728], usum:[722,725,728], swsh:[810,813,816],
    pla:[722,155,501], sv:[906,909,912], za:[152,498,158],
    ek:[252,255,258], rr:[1,4,7], ie:[252,255,258], rnb:[252,255,258], cc:[152,155,158]
  };
  var TYPES = ['Normal','Fire','Water','Grass','Electric','Ice','Fighting','Poison','Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy'];
  function pick(a){ return a[Math.floor(Math.random() * a.length)]; }
  // Each rule: id, group (only one rule per group), weight by level, text.
  var POOL = [
    {id:'mono', group:'team', min:1, make:function(){ var t = pick(TYPES); return {text:'Monotype: ' + t, detail:'Only ' + t + '-type Pokémon on your team. Your starter can stay until you catch your first ' + t + '-type.', type:t}; }},
    {id:'solo', group:'team', min:2, make:function(){ return {text:'Solo run', detail:'Your starter is the only Pokémon you may battle with.'}; }},
    {id:'three', group:'team', min:1, make:function(){ return {text:'Party of three', detail:'Never more than three Pokémon in your party.'}; }},
    {id:'first', group:'nuz1', min:1, make:function(){ return {text:'First encounter only', detail:'Only the first wild Pokémon you meet in each area may be caught.'}; }},
    {id:'faint', group:'nuz2', min:2, make:function(){ return {text:'Fainted means gone', detail:'A Pokémon that faints is released or boxed for good.'}; }},
    {id:'noitems', group:'battle', min:0, make:function(){ return {text:'No items in battle', detail:'No Potions, X items or Revives during battles. Held items are fine.'}; }},
    {id:'setmode', group:'style', min:1, make:function(){ return {text:'Set battle style', detail:'No free switch after you knock out an opponent’s Pokémon.'}; }},
    {id:'cap', group:'level', min:1, make:function(){ return {text:'Level caps', detail:'No Pokémon may be above the level of the next Gym Leader’s strongest Pokémon.'}; }},
    {id:'nocenters', group:'heal', min:2, make:function(){ return {text:'No Pokémon Centres', detail:'Heal with items only (sleeping at home is fine).'}; }},
    {id:'centersonly', group:'heal', min:0, make:function(){ return {text:'Centres only', detail:'No healing items outside battle: heal at Pokémon Centres.'}; }},
    {id:'nolegend', group:'legend', min:0, make:function(){ return {text:'No legendaries', detail:'No legendary or mythical Pokémon on your team.'}; }},
    {id:'pokeballs', group:'balls', min:0, make:function(){ return {text:'Poké Balls only', detail:'Only standard Poké Balls for catching.'}; }},
    {id:'norun', group:'run', min:0, make:function(){ return {text:'No running', detail:'You can’t run from wild battles.'}; }},
    {id:'nick', group:'nick', min:0, make:function(){ return {text:'Name them all', detail:'Every Pokémon gets a nickname.'}; }},
    {id:'notrade', group:'trade', min:0, make:function(){ return {text:'No trades', detail:'No traded Pokémon, including in-game trades.'}; }},
    {id:'noexp', group:'exp', min:1, make:function(){ return {text:'No Exp. Share', detail:'Turn it off where the game lets you; otherwise no Exp. Share item.'}; }},
    {id:'evolve', group:'evo', min:1, make:function(){ return {text:'Late bloomers', detail:'Cancel every evolution until you have 4 badges.'}; }}
  ];
  var LEVELS = [
    {id:0, label:'Casual', rules:2},
    {id:1, label:'Tough', rules:4},
    {id:2, label:'Brutal', rules:6}
  ];
  function games(){
    var out = [];
    (window.HOF_GENS || []).forEach(function(g){ (g.games || []).forEach(function(m){ out.push({id:m.id, name:m.name, badges:(m.badges || []).length || 8}); }); });
    return out;
  }
  function rollOne(level, taken){
    var free = POOL.filter(function(r){ return r.min <= level && taken.indexOf(r.group) < 0; });
    if(!free.length) return null; var r = pick(free), made = r.make();
    return {id:r.id, group:r.group, text:made.text, detail:made.detail, type:made.type || ''};
  }
  function roll(gameId, level){
    level = Math.max(0, Math.min(2, +level || 0));
    var L = LEVELS[level], rules = [], taken = [];
    // Brutal is always a Nuzlocke underneath.
    if(level === 2){ ['first', 'faint'].forEach(function(id){ var r = POOL.filter(function(x){ return x.id === id; })[0], m = r.make();
      rules.push({id:r.id, group:r.group, text:m.text, detail:m.detail, type:''}); taken.push(r.group); }); }
    while(rules.length < L.rules){ var r = rollOne(level, taken); if(!r) break; rules.push(r); taken.push(r.group); }
    var st = STARTERS[gameId] || [];
    var solo = rules.some(function(r){ return r.id === 'solo'; });
    return {game:gameId, level:level, levelLabel:L.label, starter: st.length ? pick(st) : 0, rules:rules, rolled:new Date().toISOString(), solo:solo};
  }
  function reroll(run, i){
    var taken = run.rules.filter(function(r, j){ return j !== i; }).map(function(r){ return r.group; });
    var cur = run.rules[i]; if(!cur) return run;
    // Try for something different from what was there.
    var next = null; for(var k = 0; k < 12; k++){ next = rollOne(run.level, taken); if(next && next.id !== cur.id) break; }
    if(!next) return run;
    var rules = run.rules.slice(); rules[i] = next;
    return Object.assign({}, run, {rules:rules, solo:rules.some(function(r){ return r.id === 'solo'; })});
  }
  function text(run, names){
    var g = games().filter(function(x){ return x.id === run.game; })[0];
    return 'Pokédex challenge run — ' + (g ? g.name : run.game) + ' (' + run.levelLabel + ')\n' +
      (run.starter ? 'Starter: ' + (names && names(run.starter) || '#' + run.starter) + '\n' : '') +
      run.rules.map(function(r, i){ return (i + 1) + '. ' + r.text + ' — ' + r.detail; }).join('\n');
  }
  window.pkChallenge = { games: games, roll: roll, reroll: reroll, text: text, levels: LEVELS };
})();
