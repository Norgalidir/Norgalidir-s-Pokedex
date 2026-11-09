/*
 * Honours: the app's own badges and trophies, shown on the Trainer Card.
 *
 * Three ways to get one:
 *   auto       earned by itself when your progress meets the rule
 *   professor  awarded by the Professor (George) with a code made for your
 *              name: his copy has a "Grant a badge" tool, you type the code in
 *   special    Pokémon Professor (the maker's own copy only) and Professor's
 *              Assistant (everyone who ran the friends' copy during the beta)
 *
 * All the art is drawn here as SVG, in original designs.
 *
 *   pkHonours.defs                 every honour, in display order
 *   pkHonours.art(id)              a data: URL of its picture
 *   pkHonours.check(stats)         ids whose rule your progress now meets
 *   pkHonours.codeFor(id, name)    the Professor's code for that badge + name
 *   pkHonours.redeem(code, name)   the badge id a code unlocks, or null
 *   pkHonours.celebrate(list)      the "honour earned" moment
 */
(function(){
  if(window.__pkHonoursLoaded) return; window.__pkHonoursLoaded = true;

  // The friends' copy counts as the beta until version 3.
  var BETA_UNTIL = 3;

  // ---- What there is to earn --------------------------------------------
  var REGIONS = [
    ['Kanto', '#e0473e'], ['Johto', '#d9a521'], ['Hoenn', '#2f9b62'], ['Sinnoh', '#4a6fd6'],
    ['Unova', '#7d8494'], ['Kalos', '#2fa3c9'], ['Alola', '#f08a24'], ['Galar', '#8a46c9'],
    ['Paldea', '#cf3a5a'], ['Hisui', '#6a9a3a'], ['Lumiose', '#e3b341']
  ];
  var MAIN_REGIONS = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

  var D = [];
  function add(o){ D.push(o); }
  // League
  REGIONS.forEach(function(r){
    add({id:'champ-' + r[0].toLowerCase(), group:'League', kind:'badge', how:'auto', name:r[0] + ' Champion',
      desc:'Tick every badge for a ' + r[0] + ' game in the Hall of Fame and register your team.',
      shape:'wing', glyph:'crown', color:r[1], label:r[0].toUpperCase()});
  });
  add({id:'grand-champion', group:'League', kind:'trophy', how:'auto', name:'Grand Champion', tier:'gold', glyph:'crown', plaque:'9 REGIONS',
    desc:'Become Champion in all nine main regions, from Kanto to Paldea.'});
  // Collection
  add({id:'dex-100', group:'Collection', kind:'badge', how:'auto', name:'Researcher', shape:'hex', glyph:'dex', color:'#4fb3a9',
    desc:'Catch 100 different species.'});
  add({id:'dex-500', group:'Collection', kind:'badge', how:'auto', name:'Field Researcher', shape:'hex', glyph:'dex', color:'#3d7fd1',
    desc:'Catch 500 different species.'});
  add({id:'events-10', group:'Collection', kind:'badge', how:'auto', name:'Event Goer', shape:'coin', glyph:'gift', color:'#d9677f',
    desc:'Mark 10 event Pokémon as got.'});
  add({id:'events-50', group:'Collection', kind:'badge', how:'auto', name:'Event Veteran', shape:'coin', glyph:'gift', color:'#a64bb8',
    desc:'Mark 50 event Pokémon as got.'});
  add({id:'ribbons-50', group:'Collection', kind:'badge', how:'auto', name:'Ribbon Collector', shape:'rosette', glyph:'ribbon', color:'#e2566b',
    desc:'Record 50 ribbons and marks across your Pokémon.'});
  add({id:'alpha-25', group:'Collection', kind:'badge', how:'auto', name:'Alpha Tracker', shape:'shield', glyph:'fang', color:'#c4473a',
    desc:'Catch 25 alpha Pokémon.'});
  add({id:'gmax-all', group:'Collection', kind:'badge', how:'auto', name:'Gigantic', shape:'shield', glyph:'cloud', color:'#d6344f',
    desc:'Catch every Gigantamax form.'});
  add({id:'dex-50', group:'Collection', kind:'trophy', how:'auto', name:'Bronze Pokédex', tier:'bronze', glyph:'dex', plaque:'50%',
    desc:'Catch half of the National Pokédex.'});
  add({id:'dex-75', group:'Collection', kind:'trophy', how:'auto', name:'Silver Pokédex', tier:'silver', glyph:'dex', plaque:'75%',
    desc:'Catch three quarters of the National Pokédex.'});
  add({id:'dex-full', group:'Collection', kind:'trophy', how:'auto', name:'Complete Pokédex', tier:'gold', glyph:'dex', plaque:'100%',
    desc:'Catch every species in the National Pokédex.'});
  add({id:'living-dex', group:'Collection', kind:'trophy', how:'auto', name:'Living Legend', tier:'platinum', glyph:'leaf', plaque:'EVERY FORM',
    desc:'Complete the living form dex: every form, caught.'});
  // Shiny
  add({id:'shiny-1', group:'Shiny', kind:'badge', how:'auto', name:'First Sparkle', shape:'diamond', glyph:'sparkle', color:'#e6b422',
    desc:'Catch your first shiny Pokémon.'});
  add({id:'shiny-10', group:'Shiny', kind:'badge', how:'auto', name:'Shiny Hunter', shape:'diamond', glyph:'sparkle', color:'#d98a1c',
    desc:'Catch 10 shiny Pokémon.'});
  add({id:'shiny-50', group:'Shiny', kind:'badge', how:'auto', name:'Shiny Expert', shape:'diamond', glyph:'sparkle', color:'#c8582a',
    desc:'Catch 50 shiny Pokémon.'});
  add({id:'shiny-100', group:'Shiny', kind:'badge', how:'auto', name:'Shiny Master', shape:'rosette', glyph:'sparkle', color:'#b8336a',
    desc:'Catch 100 shiny Pokémon.'});
  add({id:'shiny-dex', group:'Shiny', kind:'trophy', how:'auto', name:'Radiant Pokédex', tier:'platinum', glyph:'sparkle', plaque:'SHINY DEX',
    desc:'Catch a shiny of every species that can be shiny.'});
  // Awarded by the Professor
  add({id:'nuzlocke', group:'Professor', kind:'badge', how:'professor', name:'Nuzlocke Survivor', shape:'shield', glyph:'heart', color:'#b8343f',
    desc:'Beat a game under Nuzlocke rules.'});
  add({id:'challenge', group:'Professor', kind:'badge', how:'professor', name:'Challenge Runner', shape:'hex', glyph:'bolt', color:'#e07b22',
    desc:'Finish a challenge run: monotype, solo, no items or rules of your own.'});
  add({id:'showcase', group:'Professor', kind:'badge', how:'professor', name:'Shiny Showcase', shape:'coin', glyph:'sparkle', color:'#8f6ad8',
    desc:'Showed the Professor a shiny worth bragging about.'});
  add({id:'trader', group:'Professor', kind:'badge', how:'professor', name:'Trade Partner', shape:'coin', glyph:'swap', color:'#2f9bb3',
    desc:'Traded with the Professor.'});
  add({id:'choice', group:'Professor', kind:'badge', how:'professor', name:'Professor’s Choice', shape:'rosette', glyph:'star', color:'#d4a017',
    desc:'Something the Professor wanted to recognise.'});
  // Daily quiz: one badge that levels up with correct answers over the days
  [[25, 'Quiz Rookie', 'coin', '#4f9fd8'], [75, 'Quiz Ace', 'hex', '#3c7fd0'], [150, 'Quiz Expert', 'shield', '#6a55d0'],
   [275, 'Quiz Elite', 'rosette', '#a03fc0'], [400, 'Pok\u00e9mon Master', 'wing', '#d4a017']].forEach(function(t, i){
    add({id:'quiz-' + (i + 1), group:'Quiz', kind:'badge', how:'auto', name:t[1], shape:t[2], glyph:i === 4 ? 'crown' : 'brain', color:t[3],
      label:i === 4 ? 'MASTER' : null, need:t[0],
      desc:'Answer ' + t[0] + ' daily quiz questions correctly.' + (i === 4 ? ' The top rank.' : '')});
  });
  // Special
  add({id:'professor', group:'Special', kind:'badge', how:'special', name:'Pokémon Professor', shape:'wing', glyph:'book', color:'#5b4bd6', label:'NORGALIDIR',
    desc:'The maker of this Pokédex.'});
  add({id:'assistant', group:'Special', kind:'badge', how:'special', name:'Professor’s Assistant', shape:'shield', glyph:'flask', color:'#2fae8e',
    desc:'Helped test this Pokédex during the beta.'});

  var BY = {}; D.forEach(function(d){ BY[d.id] = d; });

  // ---- Art ---------------------------------------------------------------
  function hex2rgb(h){ var n = parseInt(h.slice(1), 16); return [n >> 16, n >> 8 & 255, n & 255]; }
  function mix(h, to, k){ var a = hex2rgb(h), b = hex2rgb(to);
    return '#' + a.map(function(v, i){ return ('0' + Math.round(v + (b[i] - v) * k).toString(16)).slice(-2); }).join(''); }
  var TIERS = {
    bronze:   ['#ffd2a6', '#c47a3a', '#6e3b12'],
    silver:   ['#ffffff', '#b4bdcc', '#59627a'],
    gold:     ['#fff4b0', '#e2aa2b', '#7d5000'],
    platinum: ['#f0fdff', '#9edbe9', '#3e7d8e']
  };
  var SHAPES = {
    hex: 'M50 4 L90 27 L90 73 L50 96 L10 73 L10 27 Z',
    shield: 'M50 5 L88 18 C88 52 76 78 50 95 C24 78 12 52 12 18 Z',
    diamond: 'M50 3 L94 50 L50 97 L6 50 Z',
    coin: null, rosette: null,
    wing: 'M50 8 L76 20 L97 16 L86 40 L92 46 L76 56 C72 76 62 88 50 95 C38 88 28 76 24 56 L8 46 L14 40 L3 16 L24 20 Z'
  };
  function rosette(){ var p = [], n = 16;
    for(var i = 0; i < n * 2; i++){ var r = i % 2 ? 41 : 47, a = Math.PI * i / n - Math.PI / 2; p.push((50 + r * Math.cos(a)).toFixed(1) + ' ' + (50 + r * Math.sin(a)).toFixed(1)); }
    return 'M' + p.join(' L') + ' Z'; }
  SHAPES.rosette = rosette();
  SHAPES.coin = 'M50 4 A46 46 0 1 1 49.9 4 Z';
  // Glyphs drawn on a 100x100 grid around the middle, filled.
  var GLYPHS = {
    crown: 'M28 64 L24 38 L38 48 L50 30 L62 48 L76 38 L72 64 Z M28 68 H72 V74 H28 Z',
    star: 'M50 27 L56.5 43 L73 44 L60 54.5 L64.5 71 L50 61.5 L35.5 71 L40 54.5 L27 44 L43.5 43 Z',
    sparkle: 'M50 24 C52 42 58 48 76 50 C58 52 52 58 50 76 C48 58 42 52 24 50 C42 48 48 42 50 24 Z M70 26 C71 31 72 32 77 33 C72 34 71 35 70 40 C69 35 68 34 63 33 C68 32 69 31 70 26 Z',
    dex: 'M32 28 H68 A4 4 0 0 1 72 32 V70 A4 4 0 0 1 68 74 H32 A4 4 0 0 1 28 70 V32 A4 4 0 0 1 32 28 Z M50 37 A9 9 0 1 0 50.1 37 Z M36 60 H64 V64 H36 Z',
    gift: 'M30 46 H70 V72 H30 Z M27 38 H73 V46 H27 Z M47 38 H53 V72 H47 Z M50 38 C44 26 34 30 40 37 Z M50 38 C56 26 66 30 60 37 Z',
    ribbon: 'M50 26 A14 14 0 1 1 49.9 26 Z M42 51 L36 76 L44 71 L48 78 L50 56 Z M58 51 L64 76 L56 71 L52 78 L50 56 Z',
    fang: 'M30 30 C40 34 46 46 46 74 C38 62 30 48 30 30 Z M70 30 C60 34 54 46 54 74 C62 62 70 48 70 30 Z',
    cloud: 'M34 66 A12 12 0 0 1 34 42 A16 16 0 0 1 64 38 A13 13 0 0 1 68 66 Z',
    leaf: 'M50 24 C70 32 74 56 52 76 C30 60 32 34 50 24 Z M50 30 V74',
    heart: 'M50 74 C30 60 24 50 24 41 A12 12 0 0 1 50 36 A12 12 0 0 1 76 41 C76 50 70 60 50 74 Z',
    bolt: 'M56 22 L32 54 H48 L42 78 L68 44 H52 Z',
    swap: 'M28 40 H62 V32 L76 44 L62 56 V48 H28 Z M72 60 H38 V52 L24 64 L38 76 V68 H72 Z',
    book: 'M50 34 C42 28 32 28 24 30 V70 C32 68 42 68 50 74 C58 68 68 68 76 70 V30 C68 28 58 28 50 34 Z M50 36 V72',
    brain: 'M50 28 C44 22 32 24 31 34 C24 36 22 46 27 51 C23 57 27 67 35 67 C37 74 46 76 50 70 C54 76 63 74 65 67 C73 67 77 57 73 51 C78 46 76 36 69 34 C68 24 56 22 50 28 Z M50 30 V70',
    flask: 'M43 26 H57 V30 H55 V44 L72 70 A4 4 0 0 1 68 76 H32 A4 4 0 0 1 28 70 L45 44 V30 H43 Z'
  };
  function badgeSVG(d){
    var c = d.color, hi = mix(c, '#ffffff', .45), lo = mix(c, '#000000', .45), rim = mix(c, '#ffffff', .75);
    var shape = SHAPES[d.shape] || SHAPES.hex;
    var glyph = GLYPHS[d.glyph] || GLYPHS.star;
    var outlineGlyph = d.glyph === 'leaf' || d.glyph === 'book' || d.glyph === 'brain';
    var label = d.label ? '<path d="M14 80 H86 L82 92 H18 Z" fill="' + lo + '" stroke="' + rim + '" stroke-width="1.5"/>' +
      '<text x="50" y="89.2" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif" font-size="' + (d.label.length > 8 ? 6.2 : 8) + '" font-weight="700" letter-spacing="1" fill="' + rim + '">' + d.label + '</text>' : '';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + hi + '"/><stop offset=".55" stop-color="' + c + '"/><stop offset="1" stop-color="' + lo + '"/></linearGradient>' +
      '<linearGradient id="s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="k"><path d="' + shape + '"/></clipPath></defs>' +
      '<path d="' + shape + '" fill="' + lo + '" transform="translate(0 2.5)" opacity=".55"/>' +
      '<path d="' + shape + '" fill="url(#g)" stroke="' + rim + '" stroke-width="3"/>' +
      '<g clip-path="url(#k)"><path d="' + shape + '" fill="none" stroke="' + lo + '" stroke-width="10" opacity=".35" transform="translate(50 50) scale(.84) translate(-50 -50)"/>' +
      '<path d="M0 0 H100 V44 Q50 56 0 40 Z" fill="url(#s)"/></g>' +
      '<g transform="translate(50 ' + (d.label ? 46 : 50) + ') scale(' + (d.label ? .78 : .9) + ') translate(-50 -50)">' +
      '<path fill-rule="evenodd" d="' + glyph + '" fill="' + (outlineGlyph ? 'none' : lo) + '" stroke="' + lo + '" stroke-width="' + (outlineGlyph ? 5 : 0) + '" stroke-linejoin="round" transform="translate(0 2)" opacity=".5"/>' +
      '<path fill-rule="evenodd" d="' + glyph + '" fill="' + (outlineGlyph ? 'none' : rim) + '" stroke="' + rim + '" stroke-width="' + (outlineGlyph ? 5 : 0) + '" stroke-linejoin="round" stroke-linecap="round"/></g>' +
      label + '</svg>';
  }
  function trophySVG(d){
    var t = TIERS[d.tier] || TIERS.gold, hi = t[0], mid = t[1], lo = t[2];
    var glyph = GLYPHS[d.glyph] || GLYPHS.star, outline = d.glyph === 'leaf' || d.glyph === 'book';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
      '<defs><linearGradient id="m" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + lo + '"/><stop offset=".35" stop-color="' + hi + '"/><stop offset=".6" stop-color="' + mid + '"/><stop offset="1" stop-color="' + lo + '"/></linearGradient>' +
      '<linearGradient id="w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3424"/><stop offset="1" stop-color="#22160e"/></linearGradient></defs>' +
      // handles
      '<path d="M26 20 C8 20 8 46 32 50" fill="none" stroke="' + mid + '" stroke-width="5"/><path d="M74 20 C92 20 92 46 68 50" fill="none" stroke="' + mid + '" stroke-width="5"/>' +
      // cup
      '<path d="M24 12 H76 V24 C76 46 64 56 50 58 C36 56 24 46 24 24 Z" fill="url(#m)" stroke="' + lo + '" stroke-width="1.5"/>' +
      '<path d="M24 12 H76 V16 H24 Z" fill="' + hi + '" opacity=".8"/>' +
      '<g transform="translate(50 33) scale(.42) translate(-50 -50)"><path fill-rule="evenodd" d="' + glyph + '" fill="' + (outline ? 'none' : lo) + '" stroke="' + lo + '" stroke-width="' + (outline ? 6 : 0) + '" opacity=".75"/></g>' +
      // stem and foot
      '<path d="M45 57 H55 L57 68 H43 Z" fill="url(#m)"/><path d="M34 68 H66 L69 74 H31 Z" fill="url(#m)" stroke="' + lo + '" stroke-width="1"/>' +
      // plinth and plaque
      '<rect x="24" y="74" width="52" height="20" rx="2" fill="url(#w)"/>' +
      '<rect x="31" y="78.5" width="38" height="11" rx="1.5" fill="url(#m)"/>' +
      '<text x="50" y="86.6" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif" font-size="' + (d.plaque.length > 6 ? 4.4 : 7) + '" font-weight="700" letter-spacing="' + (d.plaque.length > 6 ? .2 : .6) + '" fill="' + lo + '">' + d.plaque + '</text>' +
      '</svg>';
  }
  var artCache = {};
  function art(id, def){
    if(artCache[id] && !def) return artCache[id];
    var d = def || BY[id]; if(!d) return '';
    if(def) return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(d.kind === 'trophy' ? trophySVG(d) : badgeSVG(d));
    var svg = d.kind === 'trophy' ? trophySVG(d) : badgeSVG(d);
    return (artCache[id] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg));
  }

  // ---- Earning them by progress -----------------------------------------
  // stats: {caughtN, total, formN, formT, shinyN, shinyBaseN, shinySpeciesT,
  //         alphaN, giftN, ribN, gmaxN, gmaxT, hof, friends, version}
  function championRegions(hof){
    var out = {};
    (window.HOF_GENS || []).forEach(function(g){ (g.games || []).forEach(function(m){
      var rec = (hof || {})[m.id] || {}, team = (rec.team || []).filter(function(x){ return x && String(x).trim(); });
      var badges = m.badges || [], got = rec.badges || {};
      var all = badges.every(function(b, i){ return got[i] || got[String(i)]; });
      if(team.length && all) out[m.region] = true;
    }); });
    return out;
  }
  function check(S){
    var met = [];
    var champs = championRegions(S.hof);
    REGIONS.forEach(function(r){ if(champs[r[0]]) met.push('champ-' + r[0].toLowerCase()); });
    if(MAIN_REGIONS.every(function(r){ return champs[r]; })) met.push('grand-champion');
    var pct = S.total ? S.caughtN / S.total : 0;
    if(S.caughtN >= 100) met.push('dex-100');
    if(S.caughtN >= 500) met.push('dex-500');
    if(S.total && pct >= .5) met.push('dex-50');
    if(S.total && pct >= .75) met.push('dex-75');
    if(S.total && S.caughtN >= S.total) met.push('dex-full');
    if(S.formT && S.formN >= S.formT) met.push('living-dex');
    if(S.giftN >= 10) met.push('events-10');
    if(S.giftN >= 50) met.push('events-50');
    if(S.ribN >= 50) met.push('ribbons-50');
    if(S.alphaN >= 25) met.push('alpha-25');
    if(S.gmaxT && S.gmaxN >= S.gmaxT) met.push('gmax-all');
    if(S.shinyN >= 1) met.push('shiny-1');
    if(S.shinyN >= 10) met.push('shiny-10');
    if(S.shinyN >= 50) met.push('shiny-50');
    if(S.shinyN >= 100) met.push('shiny-100');
    if(S.shinySpeciesT && S.shinyBaseN >= S.shinySpeciesT) met.push('shiny-dex');
    if(!S.friends) met.push('professor');
    if(S.friends && S.version < BETA_UNTIL) met.push('assistant');
    D.forEach(function(d){ if(d.group === 'Quiz' && (S.quizCorrect || 0) >= d.need) met.push(d.id); });
    return met;
  }

  // ---- Professor codes ---------------------------------------------------
  // A code is made from the badge and the person's name, so it only works
  // for the name it was made for.
  var SALT = 'norgalidir-honours-1';
  var ABC = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  function cyrb53(str, seed){
    var h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(var i = 0; i < str.length; i++){ var ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return [h1 >>> 0, h2 >>> 0];
  }
  function norm(name){ return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }
  function codeFor(id, name){
    var n = norm(name); if(!n || !BY[id]) return '';
    var h = cyrb53(SALT + '|' + id + '|' + n, 7), out = '';
    for(var i = 0; i < 8; i++){ var word = i < 6 ? h[0] : h[1], shift = (i % 6) * 5; out += ABC[(word >>> shift) & 31]; }
    return out.slice(0, 4) + '-' + out.slice(4);
  }
  function clean(code){
    return String(code || '').toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1').replace(/[^0-9A-Z]/g, '');
  }
  var GRANTABLE = D.filter(function(d){ return d.how === 'professor'; }).map(function(d){ return d.id; }).concat(['assistant']);
  // ---- Event badges -----------------------------------------------------
  // The badge's design travels inside the code, so a new event needs no
  // update: EV-<design>-<check>. The check ties it to the person's name.
  var EVENT_GLYPHS = ['star', 'sparkle', 'crown', 'heart', 'bolt', 'leaf', 'gift', 'ribbon', 'cloud', 'fang', 'swap', 'book', 'flask', 'brain', 'dex'];
  var EVENT_SHAPES = ['coin', 'hex', 'shield', 'diamond', 'rosette', 'wing'];
  function b64e(str){ return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function b64d(str){ str = str.replace(/-/g, '+').replace(/_/g, '/'); while(str.length % 4) str += '=';
    return decodeURIComponent(escape(atob(str))); }
  function sig(payload, name){ var h = cyrb53(SALT + '|ev|' + payload + '|' + norm(name), 11), out = '';
    for(var i = 0; i < 6; i++) out += ABC[(h[i < 4 ? 0 : 1] >>> ((i % 4) * 5)) & 31]; return out; }
  function eventDef(ev){
    var key = cyrb53(JSON.stringify([ev.n, ev.e, ev.c, ev.g, ev.s]), 3)[0].toString(36);
    var shortEv = String(ev.e || '').toUpperCase();
    return {id:'ev-' + key, group:'Events', kind:'badge', how:'event', name:String(ev.n || 'Event badge').slice(0, 40),
      event:String(ev.e || '').slice(0, 40), color:/^#[0-9a-f]{6}$/i.test(ev.c) ? ev.c : '#d4a017',
      glyph:EVENT_GLYPHS.indexOf(ev.g) >= 0 ? ev.g : 'star', shape:EVENT_SHAPES.indexOf(ev.s) >= 0 ? ev.s : 'coin',
      label:shortEv && shortEv.length <= 12 ? shortEv : null,
      desc:'From the ' + (ev.e || 'Professor\u2019s') + ' event. Only given out while it ran.'};
  }
  // {n: badge name, e: event name, c: colour, g: glyph, s: shape}
  function eventCode(ev, name){
    if(!norm(name)) return '';
    var p = b64e(JSON.stringify({n:ev.n, e:ev.e, c:ev.c, g:ev.g, s:ev.s}));
    return 'EV-' + p + '-' + sig(p, name);
  }
  // Event badges someone already has, so they show on their card.
  function register(defs){ Object.keys(defs || {}).forEach(function(id){ var d = defs[id];
    if(d && !BY[id]){ BY[id] = d; } }); }
  function redeem(code, name){
    var raw = String(code || '').trim();
    if(/^EV-/i.test(raw)){
      var m = raw.match(/^EV-([A-Za-z0-9_-]+)-([0-9A-Za-z]{6})$/); if(!m) return null;
      if(sig(m[1], name) !== m[2].toUpperCase()) return null;
      try { var d = eventDef(JSON.parse(b64d(m[1]))); return {id:d.id, def:d}; } catch(e){ return null; }
    }
    var id = redeemPlain(code, name); return id ? {id:id} : null;
  }
  function redeemPlain(code, name){
    var c = clean(code); if(c.length !== 8) return null;
    for(var i = 0; i < GRANTABLE.length; i++) if(clean(codeFor(GRANTABLE[i], name)) === c) return GRANTABLE[i];
    return null;
  }

  // ---- The "honour earned" moment ---------------------------------------
  var CSS = [
    '#pk-hon{position:fixed;inset:0;z-index:60;display:grid;place-items:center;padding:16px;background:rgba(6,8,16,.62);backdrop-filter:blur(4px);animation:pkHonIn .3s ease}',
    '#pk-hon .h-card{position:relative;width:min(380px,100%);padding:28px 24px 22px;border-radius:16px;background:var(--color-surface,#232532);color:var(--color-text,#eee);',
    '  box-shadow:0 20px 60px rgba(0,0,0,.5);text-align:center;font-family:var(--font-body,inherit)}',
    '#pk-hon .h-kicker{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-300,#cbb)}',
    '#pk-hon .h-art{position:relative;width:168px;height:168px;margin:14px auto 10px;perspective:600px}',
    '#pk-hon .h-art img{width:100%;height:100%;display:block;animation:pkHonSpin 1.1s cubic-bezier(.2,.9,.25,1.15) both;filter:drop-shadow(0 10px 18px rgba(0,0,0,.45))}',
    '#pk-hon .h-glow{position:absolute;inset:-30px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--color-accent,#9184d9) 45%,transparent),transparent 65%);animation:pkHonGlow 2.4s ease-in-out infinite}',
    '#pk-hon .h-shine{position:absolute;inset:0;overflow:hidden;pointer-events:none;-webkit-mask:var(--m) center/contain no-repeat;mask:var(--m) center/contain no-repeat}',
    '#pk-hon .h-shine::after{content:"";position:absolute;top:-20%;bottom:-20%;width:40%;left:-60%;transform:skewX(-20deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);animation:pkHonShine 1.1s .9s ease-out both}',
    '#pk-hon .h-spark{position:absolute;width:8px;height:8px;left:50%;top:50%;border-radius:50%;background:#fff;box-shadow:0 0 8px 2px var(--color-accent-300,#fff);opacity:0;animation:pkHonSpark 1s ease-out both}',
    '#pk-hon .h-name{font-family:var(--font-heading,inherit);font-size:24px;margin-top:6px}',
    '#pk-hon .h-desc{font-size:13px;color:var(--color-neutral-400,#aaa);margin-top:6px;text-wrap:pretty}',
    '#pk-hon .h-by{font-size:12px;color:var(--color-accent-300,#cbb);margin-top:8px;font-style:italic}',
    '#pk-hon .h-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin:16px 0 4px}',
    '#pk-hon .h-grid img{width:56px;height:56px;animation:pkHonPop .5s cubic-bezier(.2,.9,.25,1.3) both}',
    '#pk-hon .h-btns{display:flex;gap:8px;justify-content:center;margin-top:18px}',
    '@keyframes pkHonIn{from{opacity:0}}',
    '@keyframes pkHonSpin{0%{transform:scale(.2) rotateY(-540deg);opacity:0}60%{opacity:1}100%{transform:scale(1) rotateY(0)}}',
    '@keyframes pkHonGlow{0%,100%{opacity:.55;transform:scale(.92)}50%{opacity:1;transform:scale(1.05)}}',
    '@keyframes pkHonShine{to{left:130%}}',
    '@keyframes pkHonSpark{0%{opacity:0;transform:translate(-50%,-50%) scale(.3)}25%{opacity:1}100%{opacity:0;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(.6)}}',
    '@keyframes pkHonPop{from{transform:scale(0);opacity:0}}',
    '@media (prefers-reduced-motion:reduce){#pk-hon *{animation:none!important}}'
  ].join('\n');
  var queue = [], showing = false;
  function blocked(){ return document.getElementById('pk-intro') || document.getElementById('pk-name'); }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function sound(){ try { if(window.pkSound) window.pkSound.fx('honour'); } catch(e){} }
  function close(el){ el.remove(); showing = false; setTimeout(next, 250); }
  function next(){
    if(showing || !queue.length) return;
    if(blocked() || !document.body){ setTimeout(next, 800); return; }
    if(!document.getElementById('pk-hon-css')){ var st = document.createElement('style'); st.id = 'pk-hon-css'; st.textContent = CSS; document.head.appendChild(st); }
    showing = true;
    var el = document.createElement('div'); el.id = 'pk-hon'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    var item = queue.shift();
    if(item.many){
      el.setAttribute('aria-label', 'Honours earned');
      el.innerHTML = '<div class="h-card"><div class="h-kicker">Honours earned</div>' +
        '<div class="h-name">' + item.many.length + ' new for your Trainer Card</div>' +
        '<div class="h-grid">' + item.many.map(function(x, i){ var d = BY[x.id];
          return '<img alt="' + esc(d.name) + '" title="' + esc(d.name) + '" src="' + art(x.id) + '" style="animation-delay:' + (i * 70) + 'ms">'; }).join('') + '</div>' +
        '<div class="h-desc">Open the Trainer Card to see them and pick three to show off.</div>' +
        '<div class="h-btns"><button type="button" class="btn btn-ghost" data-act="close">Later</button><button type="button" class="btn btn-primary" data-act="view">See my honours</button></div></div>';
    } else {
      var d = BY[item.id];
      el.setAttribute('aria-label', 'Honour earned: ' + d.name);
      var sparks = ''; for(var i = 0; i < 10; i++){ var a = i / 10 * Math.PI * 2, r = 95 + (i % 3) * 18;
        sparks += '<span class="h-spark" style="--x:' + Math.round(Math.cos(a) * r) + 'px;--y:' + Math.round(Math.sin(a) * r) + 'px;animation-delay:' + (700 + i * 30) + 'ms"></span>'; }
      el.innerHTML = '<div class="h-card"><div class="h-kicker">' + (d.kind === 'trophy' ? 'Trophy earned' : d.how === 'event' ? esc(d.event || 'Event') + ' \u00b7 event badge' : 'Badge earned') + '</div>' +
        '<div class="h-art"><div class="h-glow"></div><img alt="" src="' + art(item.id) + '"><div class="h-shine" style="--m:url(\'' + art(item.id) + '\')"></div>' + sparks + '</div>' +
        '<div class="h-name">' + esc(d.name) + '</div><div class="h-desc">' + esc(d.desc) + '</div>' +
        (item.by === 'professor' || item.by === 'event' ? '<div class="h-by">Awarded by Professor Norgalidir</div>' : '') +
        '<div class="h-btns"><button type="button" class="btn btn-primary" data-act="close">' + (queue.length ? 'Next' : 'Nice!') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-act="view">See my honours</button></div></div>';
    }
    el.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b && e.target !== el) return;
      if(b && b.dataset.act === 'view'){ queue = []; window.dispatchEvent(new CustomEvent('pkhonours-view')); }
      close(el);
    });
    el.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ e.stopPropagation(); close(el); } });
    document.body.appendChild(el);
    var f = el.querySelector('.btn-primary'); if(f) f.focus();
    setTimeout(sound, item.many ? 50 : 650);
  }
  // list: [{id, by}]. More than three at once are shown together.
  function celebrate(list){
    list = (list || []).filter(function(x){ return BY[x.id]; }); if(!list.length) return;
    if(list.length > 3) queue.push({many:list}); else list.forEach(function(x){ queue.push(x); });
    setTimeout(next, 400);
  }

  window.pkHonours = { defs: D, byId: BY, art: art, check: check, codeFor: codeFor, redeem: redeem,
    eventCode: eventCode, eventDef: eventDef, register: register, eventGlyphs: EVENT_GLYPHS, eventShapes: EVENT_SHAPES,
    grantable: GRANTABLE, celebrate: celebrate, regions: REGIONS };
})();
