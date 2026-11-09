/*
 * Opening animation for the Pokédex.
 *
 * Plays once each time the app opens, in the colour scheme last chosen in
 * Settings (read from the app's own save, so it always matches).
 *
 * A closed clamshell handheld lies on the scheme's background, seen from
 * above. Its lights blink on, the lid lifts on its back hinge like a laptop
 * while the view swings round to the front, and the screen inside the lid
 * boots. When the loading bar fills, the screen shows a preview of the main
 * menu (a still mock-up, not the live app), the view turns to face the
 * screen square on, and then zooms into it until the preview fills the
 * window, where it hands over to the real menu.
 *
 * Click, tap or press any key to skip. With "reduce motion" switched on in
 * the operating system it is a short fade instead.
 *
 * One opening in five is the rare one: a slim slate floats up, hovers,
 * bobbing, then turns round to face you and zooms into its screen.
 *
 * window.pkIntro('Dive') replays it in any scheme (handy for previewing);
 * window.pkIntro('Dive', 'float') replays the rare one.
 */
(function(){
  // The editor can hand the page its scripts a second time without
  // reloading it; only the first copy runs, so the intro plays once.
  if(window.__pkIntroLoaded) return; window.__pkIntroLoaded = true;
  var SAVE_KEY = 'nocturne-pokedex-v1';

  // One palette per scheme, taken from the app's THEMES so they match.
  // Device: shell/shell2 body light/dark; trim: lens ring and keys;
  // lens: highlight → mid → shadow; band: a stripe across the lid;
  // screen/text/accent/light: the boot screen.
  // Menu preview (the app's own colours): page, panel + panelBorder (the
  // framed box some schemes draw), dim (the shade over the panel),
  // card, line, mText, muted, hi (accent-300), bar (accent-500).
  var P = {
    Nocturne: {bg:'#161826', shell:'#3a3460', shell2:'#232037', trim:'#9184d9', lens:['#e7e5fe','#796cbf','#2b2741'],
      accent:'#9184d9', light:'#d2cefd', screen:'#0e0f18', text:'#e7e5fe', band:null,
      page:'#161826', panel:'transparent', panelBorder:'0 solid transparent', panelR:0, panelPad:0, dim:true,
      card:'#292b31', line:'#3f424d', mText:'#e9e9ed', muted:'#9397ab', hi:'#d2cefd', bar:'#968ae0'},
    Midnight: {bg:'#3d2f66', shell:'#241b3b', shell2:'#0a0812', trim:'#8f6ee0', lens:['#ece4ff','#a982ff','#241a3d'],
      accent:'#a982ff', light:'#d9c9ff', screen:'#0a0812', text:'#ece8f7', band:null,
      page:'#3d2f66', panel:'transparent', panelBorder:'3px solid #8f6ee0', panelR:16, panelPad:22, dim:true,
      card:'#15101f', line:'#2a2140', mText:'#ece8f7', muted:'#8d81ad', hi:'#d9c9ff', bar:'#a982ff'},
    Eclipse:  {bg:'#04050a', shell:'#1f2431', shell2:'#0a0c13', trim:'#3b4573', lens:['#dfe3f7','#8292db','#121629'],
      accent:'#8292db', light:'#b7c1ee', screen:'#04050a', text:'#d8dbe4', band:null,
      page:'#04050a', panel:'transparent', panelBorder:'1px solid #191d28', panelR:12, panelPad:17, dim:true,
      card:'#080a11', line:'#191d28', mText:'#d8dbe4', muted:'#79808f', hi:'#b7c1ee', bar:'#8292db'},
    Daylight: {bg:'#f6f6f3', shell:'#ffffff', shell2:'#d1d1cc', trim:'#151515', lens:['#ffffff','#9a9a96','#1c1c1c'],
      accent:'#f6f6f3', light:'#ffffff', screen:'#151515', text:'#ffffff', band:null, btn:'#151515', btnBg:'#e4e4e0',
      page:'#f6f6f3', panel:'#ffffff', panelBorder:'1px solid #e1e1dc', panelR:12, panelPad:17, dim:false,
      card:'#ffffff', line:'#e4e4e0', mText:'#151515', muted:'#666662', hi:'#2b2b2b', bar:'#1c1c1c'},
    Ultra:    {bg:'#0d0d0f', shell:'#24242a', shell2:'#0d0d0f', trim:'#f2c230', lens:['#fbe9b0','#f2c230','#3a2f0c'],
      accent:'#f2c230', light:'#f6d773', screen:'#0d0d0f', text:'#ecebe6', band:'#f2c230',
      page:'#0d0d0f', panel:'#111114', panelBorder:'1px solid #3a2f0c', panelR:12, panelPad:17, dim:true,
      card:'#141417', line:'#24242a', mText:'#ecebe6', muted:'#83838c', hi:'#f6d773', bar:'#f2c230'},
    Dive:     {bg:'#06121f', shell:'#0f3654', shell2:'#081b28', trim:'#4fc3e8', lens:['#c9eef9','#4fc3e8','#0f3146'],
      accent:'#4fc3e8', light:'#8fd9f1', screen:'#06121f', text:'#e3eef7', band:null,
      page:'#06121f', panel:'#08172a', panelBorder:'1px solid #0f3146', panelR:12, panelPad:17, dim:true,
      card:'#0a1826', line:'#13283c', mText:'#e3eef7', muted:'#6c8399', hi:'#8fd9f1', bar:'#4fc3e8'},
    Friend:   {bg:'#0b140d', shell:'#173d20', shell2:'#0d1d10', trim:'#c4413b', lens:['#d0eed3','#6cc275','#18341c'],
      accent:'#6cc275', light:'#9fdaa5', screen:'#0b140d', text:'#e6efe5', band:'#c4413b',
      page:'#0b140d', panel:'#0e1811', panelBorder:'1px solid #18341c', panelR:12, panelPad:17, dim:true,
      card:'#101b12', line:'#1b2c1e', mText:'#e6efe5', muted:'#71877a', hi:'#9fdaa5', bar:'#6cc275'},
    Luxury:   {bg:'#0b0a09', shell:'#221c16', shell2:'#0b0a09', trim:'#d6ad52', lens:['#f4e4bd','#d6ad52','#4a1517'],
      accent:'#d6ad52', light:'#e9cd8c', screen:'#0b0a09', text:'#efe8da', band:'#a3262a', bandEdge:'#d6ad52',
      page:'#0b0a09', panel:'#100e0c', panelBorder:'1px solid #7a1f22', panelR:12, panelPad:17, dim:true,
      card:'#12100e', line:'#231e19', mText:'#efe8da', muted:'#8a7f70', hi:'#e9cd8c', bar:'#d6ad52'},
    Cherish:  {bg:'#1a080c', shell:'#6e1a2a', shell2:'#2a0c13', trim:'#e8607a', lens:['#ffffff','#f3e6e8','#9c7c83'],
      accent:'#e8607a', light:'#f4a5b3', screen:'#1a080c', text:'#f3e6e8', band:'#e8607a',
      page:'#1a080c', panel:'#210a10', panelBorder:'1px solid #4a1621', panelR:14, panelPad:17, dim:true,
      card:'#1f0a0f', line:'#3a161e', mText:'#f3e6e8', muted:'#9c7c83', hi:'#f4a5b3', bar:'#e8607a'},
    Dexter:   {bg:'#b32620', shell:'#d63a31', shell2:'#5e0f0c', trim:'#d7d2c6', lens:['#b8e5a8','#6cb45e','#2f5c28'],
      accent:'#3fbb52', light:'#ffb3ac', screen:'#12384f', text:'#e4eef4', band:null,
      page:'#b32620', panel:'#12384f', panelBorder:'4px solid #d7d2c6', panelR:16, panelPad:22, dim:true,
      card:'#152c3b', line:'#24485e', mText:'#e4eef4', muted:'#7ba0b8', hi:'#ffb3ac', bar:'#ef4b3f',
      menuLens:'radial-gradient(circle at 34% 30%, #b8e5a8, #6cb45e 62%, #2f5c28)', menuLensGlow:'0 0 0 5px #d7d2c6, 0 0 34px rgba(108,180,94,0.45)'}
  };

  function savedStyle(){
    try { var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); if(s && V[s.introStyle] && s.introStyle !== 'float') return s.introStyle; } catch(e){}
    return 'random';
  }
  // Each design: when it pauses for a click (ms), the moments before that,
  // the moments after the click, and when it zooms into the screen.
  var V = {
    classic: {wait:1000, first:[['lights',300]], open:[['clasp',150],['lid',550],['boot',1450],['ready',2800],['menu',3070]], dive:3900},
    float:   {wait:1900, first:[['float',0],['look',1150]], open:[['hop',250],['spin',600],['boot',1400],['ready',2750],['menu',3020]], dive:3850},
    book:    {wait:1000, first:[['lights',300]], open:[['clasp',50],['lid',250],['boot',1150],['ready',2500],['menu',2770]], dive:3600},
    slide:   {wait:1000, first:[['lights',300]], open:[['slide',100],['boot',900],['ready',2250],['menu',2520]], dive:3350}
  };
  function savedTheme(){
    try { var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); if(s && s.theme) return s.theme; } catch(e){}
    return 'Nocturne';
  }

  // A still mock-up of the main menu, laid out like the real one: search
  // box, title, completion card and the five collapsed menu groups. Numbers
  // are shown as blank bars, since it is only a preview. Built at the
  // window's own width, so the copy on the screen and the full-window copy
  // it zooms into are the same picture.
  // "Sam's" on the menu preview: the owner's name if one is saved.
  function ownerTitle(){
    var n = '';
    try { var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); n = (s && s.ownerName || '').trim(); } catch(e){}
    if(!n) return window.pokedexFriends ? 'Your' : 'Norgalidir\'s';
    n = n.replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; });
    return n + (/s$/i.test(n) ? '\'' : '\'s');
  }
  function menuHTML(p, w, h){
    var lens = p.menuLens || 'radial-gradient(circle at 34% 30%, ' + p.hi + ', ' + p.bar + ' 62%, ' + p.card + ')';
    var glow = p.menuLensGlow || '0 0 0 5px ' + p.card + ', 0 0 34px color-mix(in srgb, ' + p.bar + ' 45%, transparent)';
    var narrow = w < 720;
    var skel = function(wd, ht){ return '<span style="display:block;width:' + wd + ';height:' + ht + 'px;border-radius:4px;background:' + p.line + '"></span>'; };
    var label = function(t){ return '<div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:' + p.muted + '">' + t + '</div>'; };
    var stats = ['Caught', 'Shiny', 'Forms', 'Events'].map(function(t){
      return '<div>' + label(t) + '<div style="margin-top:6px">' + skel('48px', 14) + '</div></div>';
    }).join('');
    var groups = [['Pokédex','Collection'],['Home PC','Storage'],['Battle','Planning'],['Item Dex','Equipment'],['Guides','Reference']].map(function(g){
      return '<div style="border-radius:14px;border:1px solid ' + p.line + ';background:' + p.card + ';display:flex;align-items:center;gap:11px;padding:11px 17px">' +
        '<div style="flex:1"><div style="font-size:24px;font-weight:500;letter-spacing:-.01em;color:' + p.mText + '">' + g[0] + '</div>' +
        '<div style="font-size:12px;color:' + p.muted + ';margin-top:2px">' + g[1] + '</div></div>' +
        '<div style="font-size:13px;color:' + p.hi + '">▼</div></div>';
    }).join('');
    var inset = p.panelPad ? 22 : 0;
    return '<div style="width:' + w + 'px;height:' + h + 'px;overflow:hidden;background:' + p.page + ';font-family:Inter,system-ui,sans-serif;color:' + p.mText + ';padding:' + inset + 'px">' +
      '<div style="max-width:1240px;margin:0 auto;min-height:100%;padding:' + p.panelPad + 'px;background-color:' + p.panel + ';' +
        (p.dim ? 'background-image:linear-gradient(rgba(0,0,0,.22),rgba(0,0,0,.22));' : '') +
        'border:' + p.panelBorder + ';border-radius:' + p.panelR + 'px">' +
      '<div style="max-width:1080px;margin:0 auto;padding:22px">' +
        '<div style="max-width:560px;height:36px;border-radius:8px;border:1px solid ' + p.line + ';background:color-mix(in srgb,' + p.card + ' 88%,#000);' +
          'display:flex;align-items:center;padding:0 10px;font-size:14px;color:' + p.muted + ';margin-bottom:17px;white-space:nowrap;overflow:hidden">' +
          'Search Pokémon, moves, TMs, items and places</div>' +
        '<div style="display:flex;align-items:flex-end;gap:17px;margin-bottom:22px">' +
          '<div style="width:84px;height:84px;flex:none;border-radius:999px;background:' + lens + ';box-shadow:' + glow + '"></div>' +
          '<div><div style="font-size:22px;color:' + p.muted + ';line-height:1">' + ownerTitle() + '</div>' +
          '<div style="font-size:64px;line-height:1.02;letter-spacing:-.02em;color:' + p.mText + '">Pokédex</div></div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:' + (narrow ? 'minmax(0,1fr)' : 'minmax(0,300px) minmax(0,1fr)') + ';gap:22px;align-items:start">' +
          '<div style="display:flex;flex-direction:column;gap:11px;padding:17px;border-radius:14px;background:' + p.card + ';border:1px solid ' + p.line + '">' +
            label('Completion') + skel('110px', 34) +
            '<div style="height:6px;border-radius:999px;background:' + p.line + ';overflow:hidden"><div style="height:100%;width:38%;background:' + p.bar + '"></div></div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:11px;border-top:1px solid ' + p.line + '">' + stats + '</div>' +
          '</div>' +
          '<div style="display:flex;flex-direction:column;gap:11px">' + groups + '</div>' +
        '</div>' +
      '</div></div></div>';
  }

  // ---- rounded rims ---------------------------------------------------------
  // Every 3D body here is a rounded slab: a flat face with rounded corners
  // and a rim of thickness T behind it. The rim is four straight walls plus
  // a few narrow strips round each corner, angled to follow the curve, so
  // the walls meet the face's rounded corners with no gaps or notches.
  //   W, H: the face's size; R: its corner radius; T: rim depth;
  //   z: where the face sits (the rim runs back from there);
  //   cls: a class that sets the rim's colours (--rim-a front, --rim-b back);
  //   deco: optional HTML laid on a straight wall, e.g. {bottom:'...'}.
  // All sizes are in --u units.
  function rim(W, H, R, T, z, cls, deco){
    deco = deco || {};
    var U = function(v){ return 'calc(var(--u)*' + (+v).toFixed(3) + ')'; };
    var out = '';
    function strip(x, y, phi, len, inner, extra){
      // phi: the wall's outward direction (deg, 0 = right, 90 = down).
      // Lit from the top left, so walls facing up or left are brighter.
      var light = (0.86 - 0.14 * Math.sin(phi * Math.PI / 180) - 0.06 * Math.cos(phi * Math.PI / 180)).toFixed(3);
      out += '<div class="rim ' + cls + (extra || '') + '" style="width:' + U(len + 0.04) + ';height:' + U(T) + ';' +
        'transform:translate3d(' + U(x) + ',' + U(y) + ',' + U(z) + ') rotateZ(' + (phi - 90).toFixed(2) + 'deg) rotateX(-90deg);' +
        'filter:brightness(' + light + ')">' + (inner || '') + '</div>';
    }
    // the four straight walls (each starts where its corner's curve ends)
    if(W - 2 * R > 0){ strip(R, H, 90, W - 2 * R, deco.bottom, ' rim-deco'); strip(W - R, 0, 270, W - 2 * R, deco.top, ' rim-deco'); }
    if(H - 2 * R > 0){ strip(W, H - R, 0, H - 2 * R, deco.right, ' rim-deco'); strip(0, R, 180, H - 2 * R, deco.left, ' rim-deco'); }
    // the corners, as narrow strips round each quarter circle
    var N = R > 2.5 ? 5 : 4, corners = [[W - R, H - R, 0], [R, H - R, 90], [R, R, 180], [W - R, R, 270]];
    corners.forEach(function(c){
      for(var k = 0; k < N; k++){
        var a0 = c[2] + 90 * k / N, a1 = c[2] + 90 * (k + 1) / N, am = (a0 + a1) / 2, rad = Math.PI / 180;
        var chord = 2 * R * Math.sin(45 / N * rad);
        strip(c[0] + R * Math.cos(a1 * rad), c[1] + R * Math.sin(a1 * rad), am, chord);
      }
    });
    return out;
  }

  // Sizes, in --u units: the device is W wide and D deep; the base is BT
  // thick and the lid LT thick. Every 3D piece is placed in the stage's
  // own space, so the camera (the stage's tilt) and the lid's hinge
  // rotation compose naturally. Nothing that holds 3D pieces may have
  // opacity below 1 or a filter, or the browser flattens it — so fades
  // happen on .i-view, outside the 3D scene.
  var CSS = [
    '#pk-intro{position:fixed;inset:0;z-index:2147483000;overflow:hidden;background:var(--i-bg);',
    '  --u:min(1.1vw,0.95vh);--W:calc(var(--u)*60);--D:calc(var(--u)*40);--BT:calc(var(--u)*5);--LT:calc(var(--u)*2.2);--CH:calc(var(--u)*6.5);',
    '  font-family:"Inter",system-ui,sans-serif;transition:opacity .45s ease}',
    '#pk-intro .i-view{position:absolute;inset:0;perspective:calc(var(--u)*170);perspective-origin:50% 35%;opacity:0;animation:pkiFade .5s ease forwards}',
    '#pk-intro *{box-sizing:border-box}',
    '#pk-intro .i-glow{position:absolute;left:50%;top:50%;width:calc(var(--u)*130);height:calc(var(--u)*130);',
    '  transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--i-accent) 20%,transparent),transparent 62%);',
    '  opacity:0;animation:pkiFade 1.2s .2s ease forwards}',
    // stage = the camera
    '#pk-intro .i-stage{position:absolute;left:50%;top:52%;width:var(--W);height:var(--D);margin:calc(var(--D)/-2) 0 0 calc(var(--W)/-2);',
    '  transform-style:preserve-3d;transform-origin:50% 50%;',
    '  transform:rotateX(58deg) rotateZ(14deg) scale(.86);',
    '  animation:pkiIn .5s cubic-bezier(.2,.8,.2,1) forwards, pkiCam .9s 1.55s cubic-bezier(.55,0,.25,1) forwards, pkiFocus .8s 3.85s cubic-bezier(.45,0,.2,1) forwards}',
    '#pk-intro .i-3d{position:absolute;transform-style:preserve-3d}',
    '#pk-intro .rim{position:absolute;left:0;top:0;transform-origin:0 0;backface-visibility:hidden;-webkit-backface-visibility:hidden;',
    '  background:linear-gradient(180deg,var(--rim-a),var(--rim-b))}',
    '#pk-intro .rim-deco{display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.2)}',
    '#pk-intro .rim-body{--rim-a:color-mix(in srgb,var(--i-shell) 86%,#fff);--rim-b:color-mix(in srgb,var(--i-shell) 58%,#000)}',
    '#pk-intro .rim-lid{--rim-a:color-mix(in srgb,var(--i-shell) 82%,#000);--rim-b:color-mix(in srgb,var(--i-shell) 60%,#000)}',
    '#pk-intro .rim-dark{--rim-a:color-mix(in srgb,var(--i-shell) 62%,#000);--rim-b:color-mix(in srgb,var(--i-shell2) 70%,#000)}',
    '#pk-intro .rim-deco i{width:calc(var(--u)*3.6);height:calc(var(--u)*1);border-radius:999px;background:color-mix(in srgb,var(--i-shell2) 70%,#000)}',
    '#pk-intro .rim-deco b{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:var(--i-accent);box-shadow:0 0 calc(var(--u)*1) var(--i-accent)}',
    '#pk-intro .rim-deco u{width:calc(var(--u)*6);height:40%;border-radius:999px;background:var(--i-trim)}',
    '#pk-intro .i-f{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}',
    // base: top surface at z=0, body extends down to -BT
    '#pk-intro .i-shadow{position:absolute;inset:calc(var(--u)*-6);transform:translateZ(calc(var(--BT)*-1 - 1px));border-radius:50%;',
    '  background:radial-gradient(closest-side,rgba(0,0,0,.55),transparent)}',
    '#pk-intro .i-btop{inset:0;border-radius:calc(var(--u)*1.4);background:linear-gradient(180deg,color-mix(in srgb,var(--i-shell) 70%,var(--i-shell2)),var(--i-shell) 45%,color-mix(in srgb,var(--i-shell) 90%,#fff));',
    '  display:flex;align-items:center;justify-content:space-between;padding:calc(var(--u)*6) calc(var(--u)*6);gap:calc(var(--u)*3)}',
    '#pk-intro .i-dpad{position:relative;width:calc(var(--u)*11);height:calc(var(--u)*11)}',
    '#pk-intro .i-dpad::before,#pk-intro .i-dpad::after{content:"";position:absolute;background:var(--i-shell2);border-radius:calc(var(--u)*.6);',
    '  box-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}',
    '#pk-intro .i-dpad::before{left:35%;right:35%;top:0;bottom:0}#pk-intro .i-dpad::after{top:35%;bottom:35%;left:0;right:0}',
    '#pk-intro .i-keys{display:grid;grid-template-columns:repeat(2,calc(var(--u)*4.4));gap:calc(var(--u)*1.8)}',
    '#pk-intro .i-keys i{width:calc(var(--u)*4.4);height:calc(var(--u)*4.4);border-radius:50%;background:var(--i-trim);box-shadow:0 calc(var(--u)*.35) 0 rgba(0,0,0,.4)}',
    '#pk-intro .i-mid{display:flex;flex-direction:column;align-items:center;gap:calc(var(--u)*2.4)}',
    '#pk-intro .i-pills{display:flex;gap:calc(var(--u)*1.6)}',
    '#pk-intro .i-pill{width:calc(var(--u)*5.5);height:calc(var(--u)*1.4);border-radius:999px;background:var(--i-shell2)}',
    '#pk-intro .i-grille{display:grid;grid-template-columns:repeat(6,calc(var(--u)*.8));gap:calc(var(--u)*.8)}',
    '#pk-intro .i-grille i{width:calc(var(--u)*.8);height:calc(var(--u)*.8);border-radius:50%;background:var(--i-shell2)}',
    '#pk-intro .i-bfront{left:0;top:var(--D);width:var(--W);height:var(--BT);transform-origin:50% 0;transform:rotateX(-90deg);',
    '  background:linear-gradient(180deg,color-mix(in srgb,var(--i-shell) 92%,#fff) 0 6%,color-mix(in srgb,var(--i-shell) 82%,#000) 6% 45%,color-mix(in srgb,var(--i-shell) 62%,#000));',
    '  border-radius:0 0 calc(var(--u)*1.4) calc(var(--u)*1.4);display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1.2)}',
    '#pk-intro .i-bfront i{width:calc(var(--u)*3.6);height:calc(var(--u)*1);border-radius:999px;background:color-mix(in srgb,var(--i-shell2) 70%,#000)}',
    '#pk-intro .i-bfront b{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:var(--i-accent);box-shadow:0 0 calc(var(--u)*1) var(--i-accent)}',
    '#pk-intro .i-bright{left:var(--W);top:0;width:var(--BT);height:var(--D);transform-origin:0 50%;transform:rotateY(90deg);',
    '  background:linear-gradient(90deg,color-mix(in srgb,var(--i-shell) 70%,#000),color-mix(in srgb,var(--i-shell) 50%,#000))}',
    '#pk-intro .i-bleft{left:calc(var(--BT)*-1);top:0;width:var(--BT);height:var(--D);transform-origin:100% 50%;transform:rotateY(-90deg);',
    '  background:color-mix(in srgb,var(--i-shell) 50%,#000)}',
    // lid: hinged on the back edge, lies on the base from z=0 to z=LT
    '#pk-intro .i-lid{left:0;top:0;width:var(--W);height:var(--D);transform-origin:50% 0 0;transform:rotateX(0deg);',
    '  animation:pkiLid .9s 1.55s cubic-bezier(.55,0,.25,1) forwards}',
    '#pk-intro .i-lout{inset:0;transform:translateZ(var(--LT));border-radius:calc(var(--u)*1.4);overflow:hidden;',
    '  background:radial-gradient(120% 100% at 30% 10%,color-mix(in srgb,var(--i-shell) 78%,#fff),var(--i-shell) 45%,color-mix(in srgb,var(--i-shell) 70%,var(--i-shell2)))}',
    '#pk-intro .i-lfront{left:0;top:var(--D);width:var(--W);height:var(--LT);transform-origin:50% 0;transform:translateZ(var(--LT)) rotateX(-90deg);',
    '  background:linear-gradient(180deg,color-mix(in srgb,var(--i-shell) 80%,#000),color-mix(in srgb,var(--i-shell) 55%,#000));border-radius:0 0 calc(var(--u)*.8) calc(var(--u)*.8)}',
    '#pk-intro .i-lright{left:var(--W);top:0;width:var(--LT);height:var(--D);transform-origin:0 50%;transform:translateZ(var(--LT)) rotateY(90deg);',
    '  background:color-mix(in srgb,var(--i-shell) 58%,#000)}',
    '#pk-intro .i-lleft{left:calc(var(--LT)*-1);top:0;width:var(--LT);height:var(--D);transform-origin:100% 50%;transform:translateZ(var(--LT)) rotateY(-90deg);',
    '  background:color-mix(in srgb,var(--i-shell) 58%,#000)}',
    '#pk-intro .i-lin{inset:0;transform:translateZ(calc(var(--u)*.05)) rotateX(180deg);border-radius:calc(var(--u)*1.4);',
    '  background:var(--i-shell2);padding:calc(var(--u)*3.2)}',
    '#pk-intro .i-band{position:absolute;left:0;right:0;top:calc(50% - var(--u)*3.4);height:calc(var(--u)*6.8);background:var(--i-band);',
    '  box-shadow:0 calc(var(--u)*-.45) 0 var(--i-bandEdge),0 calc(var(--u)*.45) 0 var(--i-bandEdge)}',
    '#pk-intro .i-lens{position:absolute;left:50%;top:50%;width:calc(var(--u)*15.4);height:calc(var(--u)*15.4);margin:calc(var(--u)*-7.7) 0 0 calc(var(--u)*-7.7);',
    '  border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--i-l3) 70%,#000) 0 70%,var(--i-shell2) 92%);',
    '  box-shadow:0 0 0 calc(var(--u)*1.1) var(--i-trim),0 0 0 calc(var(--u)*1.7) var(--i-shell2);animation:pkiRing 1.1s .55s ease-in-out}',
    // the dome: stacked round slices, narrowing as they rise off the lid,
    // darker at the base and lit at the top, so it reads as a glass sphere
    '#pk-intro .i-dome{left:50%;top:50%;width:0;height:0;transform:translateZ(var(--LT))}',
    '#pk-intro .i-dome i{position:absolute;border-radius:50%;backface-visibility:hidden;-webkit-backface-visibility:hidden}',
    '#pk-intro .i-dome i.top{background:radial-gradient(circle at 36% 30%,var(--i-l1),var(--i-l2) 52%,color-mix(in srgb,var(--i-l2) 55%,var(--i-l3)));',
    '  animation:pkiLens 1.1s .55s ease-in-out}',
    '#pk-intro .i-dome i.top::before{content:"";position:absolute;left:17%;top:13%;width:34%;height:24%;border-radius:50%;',
    '  background:radial-gradient(closest-side,rgba(255,255,255,.9),rgba(255,255,255,0))}',
    '#pk-intro .i-dome i.top::after{content:"";position:absolute;right:16%;bottom:14%;width:20%;height:11%;border-radius:50%;',
    '  background:radial-gradient(closest-side,rgba(255,255,255,.35),rgba(255,255,255,0))}',
    // the camera: a smaller lens up and to the right of the main one — a
    // brushed collar in the trim colour, a dark glass dome with iris rings
    // and a coloured coating glint, and a little record light beside it
    '#pk-intro .i-camring{position:absolute;left:calc(50% + var(--u)*14);top:calc(50% - var(--u)*7.5);width:calc(var(--u)*7.4);height:calc(var(--u)*7.4);',
    '  margin:calc(var(--u)*-3.7) 0 0 calc(var(--u)*-3.7);border-radius:50%;',
    '  background:conic-gradient(color-mix(in srgb,var(--i-trim) 75%,#fff),color-mix(in srgb,var(--i-trim) 55%,#000),color-mix(in srgb,var(--i-trim) 85%,#fff),color-mix(in srgb,var(--i-trim) 50%,#000),color-mix(in srgb,var(--i-trim) 75%,#fff));',
    '  box-shadow:0 0 0 calc(var(--u)*.5) var(--i-shell2),inset 0 0 0 calc(var(--u)*.9) rgba(0,0,0,.25)}',
    '#pk-intro .i-rec{position:absolute;left:calc(50% + var(--u)*19.4);top:calc(50% - var(--u)*11);width:calc(var(--u)*1.1);height:calc(var(--u)*1.1);',
    '  border-radius:50%;background:var(--i-shell2);animation:pkiRec .6s .3s ease forwards}',
    '#pk-intro .i-cam{left:calc(50% + var(--u)*14);top:calc(50% - var(--u)*7.5);width:0;height:0;transform:translateZ(var(--LT))}',
    '#pk-intro .i-cam i{position:absolute;border-radius:50%;backface-visibility:hidden;-webkit-backface-visibility:hidden}',
    '#pk-intro .i-cam i.top{overflow:hidden;animation:pkiGlint .8s .95s ease-in-out;',
    '  background:radial-gradient(circle,#020306 0 20%,#2b3560 24%,#090b12 30%,#1b2244 37%,#07080e 44%,#121733 62%,#04050a 100%)}',
    '#pk-intro .i-cam i.top::before{content:"";position:absolute;inset:8%;border-radius:50%;',
    '  background:conic-gradient(from 200deg,transparent 0 30%,rgba(120,90,255,.55) 38%,rgba(70,220,180,.45) 46%,transparent 56%);filter:blur(calc(var(--u)*.25))}',
    '#pk-intro .i-cam i.top::after{content:"";position:absolute;left:24%;top:18%;width:24%;height:18%;border-radius:50%;',
    '  background:radial-gradient(closest-side,rgba(255,255,255,.9),rgba(255,255,255,0))}',
    // the clasp: hinged low on the base's front, hooked over the lid's front
    // edge; it pops forward before the lid lifts
    '#pk-intro .i-clasp{left:calc(50% - var(--u)*4.5);top:var(--D);width:calc(var(--u)*9);height:0;transform-origin:50% 0 0;',
    '  transform:translateY(calc(var(--u)*.25)) translateZ(calc(var(--BT)*-1 + var(--u)*1.2)) rotateX(0deg);',
    '  animation:pkiClasp .45s 1.05s cubic-bezier(.3,1.7,.5,1) forwards}',
    '#pk-intro .i-cplate{position:absolute;left:0;bottom:0;width:100%;height:var(--CH);transform-origin:50% 100%;transform:rotateX(-90deg);',
    '  border-radius:calc(var(--u)*.5) calc(var(--u)*.5) calc(var(--u)*1) calc(var(--u)*1);display:flex;align-items:center;justify-content:center;',
    '  background:linear-gradient(180deg,color-mix(in srgb,var(--i-trim) 80%,#fff),var(--i-trim) 35%,color-mix(in srgb,var(--i-trim) 62%,#000))}',
    '#pk-intro .i-cplate b{width:calc(var(--u)*1.3);height:calc(var(--u)*1.3);border-radius:50%;background:color-mix(in srgb,var(--i-trim) 45%,#000);',
    '  box-shadow:inset 0 0 0 calc(var(--u)*.28) color-mix(in srgb,var(--i-trim) 75%,#fff)}',
    '#pk-intro .i-ctab{position:absolute;left:12%;width:76%;top:calc(var(--u)*-1.8);height:calc(var(--u)*1.8);transform:translateZ(var(--CH));',
    '  border-radius:calc(var(--u)*.5) calc(var(--u)*.5) 0 0;background:color-mix(in srgb,var(--i-trim) 78%,#000)}',
    '#pk-intro .i-leds{position:absolute;right:calc(var(--u)*3.4);bottom:calc(var(--u)*3);display:flex;gap:calc(var(--u)*1.2)}',
    '#pk-intro .i-led{width:calc(var(--u)*1.6);height:calc(var(--u)*1.6);border-radius:50%;background:var(--i-shell2);animation:pkiLed .35s ease forwards}',
    '#pk-intro .i-slot{position:absolute;left:calc(var(--u)*3.4);bottom:calc(var(--u)*3.3);width:calc(var(--u)*9);height:calc(var(--u)*1);border-radius:999px;background:var(--i-shell2)}',
    // screen
    '#pk-intro .i-screen{position:relative;width:100%;height:100%;border-radius:calc(var(--u)*1);background:#000;overflow:hidden;',
    '  box-shadow:0 0 0 calc(var(--u)*.35) var(--i-trim)}',
    '#pk-intro .i-power{position:absolute;inset:0;background:var(--i-screen);transform:scale(1,.006);opacity:0;',
    '  animation:pkiLine .25s 2.45s ease-out forwards, pkiOpen .22s 2.7s cubic-bezier(.2,.8,.2,1) forwards}',
    '#pk-intro .i-scan{position:absolute;inset:0;pointer-events:none;opacity:0;z-index:2;',
    '  background:repeating-linear-gradient(180deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px);animation:pkiFlicker .5s 2.7s steps(5) forwards, pkiOut .3s 3.9s ease forwards}',
    '#pk-intro .i-ui{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--u)*1.6);opacity:0;',
    '  animation:pkiFade .3s 2.9s ease forwards, pkiOut .2s 3.85s ease forwards}',
    '#pk-intro .i-title{font-size:calc(var(--u)*5.6);font-weight:700;letter-spacing:.04em;color:var(--i-text);line-height:1;',
    '  text-shadow:0 0 calc(var(--u)*2) color-mix(in srgb,var(--i-accent) 60%,transparent)}',
    '#pk-intro .i-sub{font-size:calc(var(--u)*1.5);font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:var(--i-light)}',
    '#pk-intro .i-bar{width:52%;height:calc(var(--u)*1.1);border-radius:999px;background:color-mix(in srgb,var(--i-text) 14%,transparent);overflow:hidden}',
    '#pk-intro .i-fill{height:100%;width:0;border-radius:inherit;background:var(--i-accent);box-shadow:0 0 calc(var(--u)*1.5) var(--i-accent);',
    '  animation:pkiBar .8s 3.0s cubic-bezier(.4,0,.2,1) forwards}',
    // the menu preview on the screen
    '#pk-intro .i-menu{position:absolute;inset:0;overflow:hidden;opacity:0;animation:pkiFade .35s 4.07s ease forwards}',
    '#pk-intro .i-menu>div{transform-origin:0 0}',
    // skip
    '#pk-intro .i-skip{position:absolute;right:16px;bottom:16px;z-index:3;font:600 13px/1 "Inter",system-ui,sans-serif;letter-spacing:.04em;',
    '  color:var(--i-btn);background:var(--i-btnBg);border:1px solid color-mix(in srgb,var(--i-btn) 30%,transparent);border-radius:999px;',
    '  padding:9px 16px;cursor:pointer;opacity:0;animation:pkiFade .4s .6s ease forwards}',
    '#pk-intro .i-skip:focus-visible{outline:2px solid var(--i-btn);outline-offset:2px}',
    '#pk-intro.i-hold *{animation-play-state:paused !important}',
    // waiting to be opened: the clasp glows and a hint shows under the device
    '#pk-intro.i-wait{cursor:pointer}',
    '#pk-intro.i-wait .i-cplate{animation:pkiCall 1.1s ease-in-out infinite alternate !important;animation-play-state:running !important}',
    '#pk-intro .i-hint{position:absolute;left:0;right:0;bottom:12%;text-align:center;font-size:15px;font-weight:600;letter-spacing:.06em;',
    '  color:var(--i-btn);opacity:0;transition:opacity .4s ease;pointer-events:none}',
    '#pk-intro .i-hint span{display:block;margin-top:6px;font-size:12px;font-weight:500;letter-spacing:.04em;opacity:.8}',
    '#pk-intro.i-wait .i-hint{opacity:1}',
    // the zoom: a flat copy of the preview grows from the screen to the window
    '#pk-intro-zoom{position:fixed;left:0;top:0;z-index:2147483001;transform-origin:0 0;pointer-events:none;',
    '  transition:transform .6s cubic-bezier(.65,0,.25,1),opacity .35s ease;box-shadow:0 0 0 1px rgba(0,0,0,.2)}',
    '#pk-intro.i-dive .i-view,#pk-intro.i-dive .i-glow,#pk-intro.i-dive .i-skip{transition:opacity .25s ease;opacity:0 !important}',
    // keyframes
    '@keyframes pkiIn{to{transform:rotateX(58deg) rotateZ(14deg) scale(1)}}',
    '@keyframes pkiCam{from{transform:rotateX(58deg) rotateZ(14deg) scale(1)}to{transform:translateY(calc(var(--u)*6)) rotateX(26deg) rotateZ(6deg) scale(1)}}',
    '@keyframes pkiFocus{from{transform:translateY(calc(var(--u)*6)) rotateX(26deg) rotateZ(6deg) scale(1)}to{transform:translateY(calc(var(--u)*32)) rotateX(44deg) rotateZ(0deg) scale(1.22)}}',
    '@keyframes pkiLid{to{transform:rotateX(136deg)}}',
    '@keyframes pkiFade{to{opacity:1}}',
    '@keyframes pkiOut{from{opacity:1}to{opacity:0}}',
    '@keyframes pkiLine{to{opacity:1}}',
    '@keyframes pkiOpen{from{opacity:1;transform:scale(1,.006)}to{opacity:1;transform:scale(1,1)}}',
    '@keyframes pkiFlicker{0%{opacity:.9}20%{opacity:.2}40%{opacity:1}60%{opacity:.4}100%{opacity:1}}',
    '@keyframes pkiBar{to{width:100%}}',
    '@keyframes pkiLed{0%{background:var(--i-shell2)}40%{background:#fff;box-shadow:0 0 calc(var(--u)*2) var(--c)}100%{background:var(--c);box-shadow:0 0 calc(var(--u)*1.2) var(--c)}}',
    '@keyframes pkiLens{0%,100%{filter:none}50%{filter:brightness(1.4)}}',
    '@keyframes pkiCall{from{box-shadow:0 0 0 0 transparent}to{box-shadow:0 0 calc(var(--u)*2.4) calc(var(--u)*.6) var(--i-accent)}}',
    '@keyframes pkiRec{0%{background:var(--i-shell2)}30%{background:#ff3b3b;box-shadow:0 0 calc(var(--u)*1.6) #ff3b3b}55%{background:#7a1414;box-shadow:none}100%{background:#ff3b3b;box-shadow:0 0 calc(var(--u)*1.2) #ff3b3b}}',
    '@keyframes pkiGlint{0%,100%{filter:none}50%{filter:brightness(1.8)}}',
    '@keyframes pkiRing{0%,100%{}50%{box-shadow:0 0 0 calc(var(--u)*1.1) var(--i-trim),0 0 0 calc(var(--u)*1.7) var(--i-shell2),0 0 calc(var(--u)*5) calc(var(--u)*1.5) var(--i-l2)}}',
    '@keyframes pkiClasp{to{transform:translateY(calc(var(--u)*.25)) translateZ(calc(var(--BT)*-1 + var(--u)*1.2)) rotateX(-55deg)}}',
    // ---- the rare intro: a slim slate floats up, hovers, then turns to face you
    // The slate is built landscape; while floating it is turned on its side
    // (so it looks upright) and shows its back. The turn brings it round to
    // face you and lays it landscape, then its screen boots as usual.
    '#pk-intro .f-wrap{position:absolute;left:50%;top:48%;width:calc(var(--u)*58);height:calc(var(--u)*31);margin:calc(var(--u)*-15.5) 0 0 calc(var(--u)*-29);transform-style:preserve-3d;transform:scale(1.3)}',
    '#pk-intro .f-shadow{position:absolute;left:50%;top:50%;width:calc(var(--u)*36);height:calc(var(--u)*6);margin:calc(var(--u)*41) 0 0 calc(var(--u)*-18);',
    '  border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.5),transparent);animation:pkfShadow 1.8s ease-in-out 1.1s infinite alternate}',
    '#pk-intro .f-pos{position:absolute;inset:0;transform-style:preserve-3d;transform:translateY(calc(var(--u)*80));animation:pkfRise 1.1s cubic-bezier(.16,.84,.3,1) forwards}',
    '#pk-intro .f-bob{position:absolute;inset:0;transform-style:preserve-3d;animation:pkfBob 1.8s ease-in-out 1.1s infinite alternate}',
    // body language: a double-take tilt when it arrives, a little hop just
    // before it turns, and a satisfied settle once its screen is on
    '#pk-intro .f-act{position:absolute;inset:0;transform-style:preserve-3d;',
    '  animation:pkfLook .75s 1.15s ease-in-out,pkfHop .38s 2.12s cubic-bezier(.3,0,.4,1),pkfSettle .55s 3.4s ease-out}',
    '#pk-intro .f-spin{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateZ(90deg) rotateY(180deg) rotateX(8deg);',
    '  animation:pkfSpin .85s 2.5s cubic-bezier(.6,0,.25,1) forwards}',
    '#pk-intro .f-front{inset:0;transform:translateZ(calc(var(--u)*1.1));border-radius:calc(var(--u)*3.6);background:var(--i-shell2);',
    '  padding:calc(var(--u)*1.5) calc(var(--u)*1.6) calc(var(--u)*1.5) calc(var(--u)*3.4);box-shadow:inset 0 0 0 calc(var(--u)*.3) color-mix(in srgb,var(--i-shell) 70%,#fff)}',
    '#pk-intro .f-front .i-screen{border-radius:calc(var(--u)*2.2)}',
    '#pk-intro .f-camdot{position:absolute;left:calc(var(--u)*1.2);top:50%;width:calc(var(--u)*1.1);height:calc(var(--u)*1.1);margin-top:calc(var(--u)*-.55);',
    '  border-radius:50%;background:radial-gradient(circle at 35% 35%,#3a4470,#05060a 70%);box-shadow:0 0 0 calc(var(--u)*.2) rgba(255,255,255,.08)}',
    '#pk-intro .f-back{inset:0;transform:translateZ(calc(var(--u)*-1.1)) rotateY(180deg);border-radius:calc(var(--u)*3.6);overflow:hidden;',
    '  background:radial-gradient(120% 140% at 70% 20%,color-mix(in srgb,var(--i-shell) 75%,#fff),var(--i-shell) 45%,color-mix(in srgb,var(--i-shell) 70%,var(--i-shell2)))}',
    '#pk-intro .f-band{position:absolute;top:0;bottom:0;left:calc(50% - var(--u)*3.2);width:calc(var(--u)*6.4);background:var(--i-band);',
    '  box-shadow:calc(var(--u)*-.4) 0 0 var(--i-bandEdge),calc(var(--u)*.4) 0 0 var(--i-bandEdge)}',
    '#pk-intro .f-lens{position:absolute;left:calc(var(--u)*7);top:50%;width:calc(var(--u)*11);height:calc(var(--u)*11);margin-top:calc(var(--u)*-5.5);border-radius:50%;',
    '  background:radial-gradient(circle at 34% 30%,var(--i-l1),var(--i-l2) 55%,var(--i-l3));box-shadow:0 0 0 calc(var(--u)*.9) var(--i-trim),0 0 0 calc(var(--u)*1.4) var(--i-shell2),0 0 calc(var(--u)*4) var(--i-l2);',
    '  animation:pkiLens 1.4s .4s ease-in-out}',
    '#pk-intro .f-lens::after{content:"";position:absolute;left:20%;top:16%;width:30%;height:22%;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.9),rgba(255,255,255,0))}',
    '#pk-intro .f-cam{position:absolute;left:calc(var(--u)*2.5);top:calc(var(--u)*3);width:calc(var(--u)*3.4);height:calc(var(--u)*3.4);border-radius:50%;',
    '  background:radial-gradient(circle,#020306 0 25%,#2b3560 30%,#07080e 45%,#121733 65%,#04050a);box-shadow:0 0 0 calc(var(--u)*.45) var(--i-trim)}',
    // a light bar on the back that breathes slowly, and flashes before the turn
    '#pk-intro .f-light{position:absolute;right:calc(var(--u)*3);top:28%;bottom:28%;width:calc(var(--u)*1.1);border-radius:999px;background:var(--i-accent);',
    '  opacity:.3;animation:pkfBreath 2.2s ease-in-out .6s infinite alternate,pkfFlash .35s 2.15s ease-out}',
    // an antenna nub on the top corner (as it floats) that springs up and wobbles
    '#pk-intro .f-ant{position:absolute;left:100%;top:calc(var(--u)*2.4);width:calc(var(--u)*3.4);height:calc(var(--u)*.9);transform-style:preserve-3d;',
    '  transform-origin:0 50%;scale:0 1;animation:pkfSpring .6s .85s cubic-bezier(.3,1.8,.5,1) forwards,pkfWobble .9s 1.45s ease-in-out infinite alternate}',
    '#pk-intro .f-ant i{position:absolute;inset:0;border-radius:999px;background:linear-gradient(180deg,color-mix(in srgb,var(--i-shell) 80%,#fff),color-mix(in srgb,var(--i-shell) 60%,#000))}',
    '#pk-intro .f-ant i+i{transform:rotateX(90deg)}',
    '#pk-intro .f-ant b{position:absolute;right:calc(var(--u)*-.8);top:50%;width:calc(var(--u)*1.6);height:calc(var(--u)*1.6);margin-top:calc(var(--u)*-.8);border-radius:50%;',
    '  background:radial-gradient(circle at 35% 30%,#fff,var(--i-accent) 55%,color-mix(in srgb,var(--i-accent) 50%,#000));box-shadow:0 0 calc(var(--u)*1.2) var(--i-accent)}',
    '#pk-intro .f-ant b+b{transform:rotateX(90deg);box-shadow:none}',
    // the slab's four edges, visible from both sides as it turns
    '#pk-intro .f-edge{position:absolute;background:linear-gradient(90deg,color-mix(in srgb,var(--i-shell) 55%,#000),color-mix(in srgb,var(--i-shell) 80%,#000),color-mix(in srgb,var(--i-shell) 55%,#000))}',
    '#pk-intro .f-er{left:100%;top:calc(var(--u)*2);bottom:calc(var(--u)*2);width:calc(var(--u)*2.2);transform-origin:0 50%;transform:translateZ(calc(var(--u)*1.1)) rotateY(90deg)}',
    '#pk-intro .f-el{right:100%;top:calc(var(--u)*2);bottom:calc(var(--u)*2);width:calc(var(--u)*2.2);transform-origin:100% 50%;transform:translateZ(calc(var(--u)*1.1)) rotateY(-90deg)}',
    '#pk-intro .f-et{bottom:100%;left:calc(var(--u)*2);right:calc(var(--u)*2);height:calc(var(--u)*2.2);transform-origin:50% 100%;transform:translateZ(calc(var(--u)*1.1)) rotateX(90deg)}',
    '#pk-intro .f-eb{top:100%;left:calc(var(--u)*2);right:calc(var(--u)*2);height:calc(var(--u)*2.2);transform-origin:50% 0;transform:translateZ(calc(var(--u)*1.1)) rotateX(-90deg)}',
    '#pk-intro .f-et i{position:absolute;left:30%;width:calc(var(--u)*7);top:15%;bottom:15%;border-radius:999px;background:color-mix(in srgb,var(--i-trim) 70%,#000)}',
    // the screen boots later here, once the slate has turned round
    '#pk-intro.i-float .i-power{animation-delay:3.3s,3.55s}',
    '#pk-intro.i-float .i-scan{animation-delay:3.55s,4.75s}',
    '#pk-intro.i-float .i-ui{animation-delay:3.75s,4.7s}',
    '#pk-intro.i-float .i-fill{animation-delay:3.85s}',
    '#pk-intro.i-float .i-menu{animation-delay:4.92s}',
    '#pk-intro.i-float.i-dive .f-wrap{animation:pkfPush .4s cubic-bezier(.6,0,.9,.4) forwards}',
    // it keeps bobbing while it waits to be clicked
    '#pk-intro.i-wait .f-bob,#pk-intro.i-wait .f-shadow,#pk-intro.i-wait .f-light,#pk-intro.i-wait .f-ant{animation-play-state:running !important}',
    '@keyframes pkfRise{to{transform:translateY(0)}}',
    '@keyframes pkfLook{0%{rotate:0deg}22%{rotate:-10deg}45%{rotate:-8deg}62%{rotate:6deg}82%{rotate:-2deg}100%{rotate:0deg}}',
    '@keyframes pkfHop{0%{translate:0 0;scale:1}30%{translate:0 calc(var(--u)*1.2);scale:1.05 .93}62%{translate:0 calc(var(--u)*-4.5);scale:.96 1.05}100%{translate:0 0;scale:1}}',
    '@keyframes pkfSettle{0%{translate:0 0;scale:1}40%{translate:0 calc(var(--u)*1.2);scale:1.02 .98}100%{translate:0 0;scale:1}}',
    '@keyframes pkfBreath{from{opacity:.3;box-shadow:0 0 0 transparent}to{opacity:1;box-shadow:0 0 calc(var(--u)*2.4) var(--i-accent)}}',
    '@keyframes pkfFlash{0%,100%{filter:none}40%{filter:brightness(2.2)}}',
    '@keyframes pkfSpring{to{scale:1 1}}',
    '@keyframes pkfWobble{from{rotate:-7deg}to{rotate:6deg}}',
    '@keyframes pkfBob{from{transform:translateY(0) rotateZ(0deg)}to{transform:translateY(calc(var(--u)*-2.2)) rotateZ(1.2deg)}}',
    '@keyframes pkfShadow{from{transform:scale(1);opacity:1}to{transform:scale(.82);opacity:.6}}',
    '@keyframes pkfSpin{to{transform:rotateZ(0deg) rotateY(360deg) rotateX(0deg)}}',
    '@keyframes pkfPush{to{transform:scale(2.1)}}',
    // ---- the owner's name, engraved small on every design
    '#pk-intro .i-name{position:absolute;font:600 calc(var(--u)*1.2)/1 "Inter",system-ui,sans-serif;letter-spacing:.34em;text-transform:uppercase;white-space:nowrap;',
    '  color:color-mix(in srgb,var(--i-shell) 55%,var(--i-trim));opacity:.7;pointer-events:none;',
    '  text-shadow:0 calc(var(--u)*.08) 0 rgba(255,255,255,.1),0 calc(var(--u)*-.08) 0 rgba(0,0,0,.35)}',
    // a wrapper the zoom scales, so it never fights the camera's own moves
    '#pk-intro .x-push{position:absolute;inset:0;transform-style:preserve-3d}',
    '#pk-intro.i-dive .x-push{animation:pkxPush .4s cubic-bezier(.6,0,.9,.4) forwards}',
    '@keyframes pkxPush{to{transform:scale(1.8)}}',

    // ---- design 3: the field brick. A chunky upright block; a cover over
    // its screen swings open sideways on a hinge, like a notebook.
    '#pk-intro .b-stage{position:absolute;left:50%;top:50%;width:calc(var(--u)*44);height:calc(var(--u)*54);margin:calc(var(--u)*-27) 0 0 calc(var(--u)*-22);',
    '  transform-style:preserve-3d;transform:rotateY(-30deg) rotateX(12deg) scale(.88);',
    '  animation:pkbIn .55s cubic-bezier(.2,.8,.2,1) forwards,pkbCam .95s 1.25s cubic-bezier(.55,0,.25,1) forwards}',
    '#pk-intro .b-face{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}',
    '#pk-intro .b-front{inset:0;transform:translateZ(calc(var(--u)*3.5));border-radius:calc(var(--u)*3);',
    '  background:linear-gradient(160deg,color-mix(in srgb,var(--i-shell) 82%,#fff),var(--i-shell) 40%,color-mix(in srgb,var(--i-shell) 72%,var(--i-shell2)));',
    '  box-shadow:inset 0 0 0 calc(var(--u)*.35) color-mix(in srgb,var(--i-shell) 60%,#000)}',
    '#pk-intro .b-scr{position:absolute;left:calc(var(--u)*3);top:calc(var(--u)*3);width:calc(var(--u)*38);height:calc(var(--u)*24);border-radius:calc(var(--u)*1.4);',
    '  background:var(--i-shell2);padding:calc(var(--u)*1.2)}',
    '#pk-intro .b-scr .i-screen{border-radius:calc(var(--u)*.9)}',
    '#pk-intro .b-ctrl{position:absolute;left:calc(var(--u)*4);right:calc(var(--u)*4);top:calc(var(--u)*31);display:flex;align-items:center;justify-content:space-between}',
    '#pk-intro .b-ctrl .i-dpad{width:calc(var(--u)*10);height:calc(var(--u)*10)}',
    '#pk-intro .b-ctrl .i-keys{grid-template-columns:repeat(2,calc(var(--u)*4))}',
    '#pk-intro .b-ctrl .i-keys i{width:calc(var(--u)*4);height:calc(var(--u)*4)}',
    '#pk-intro .b-vent{position:absolute;left:calc(var(--u)*12);right:calc(var(--u)*12);bottom:calc(var(--u)*7);height:calc(var(--u)*3.4);',
    '  background:repeating-linear-gradient(90deg,var(--i-shell2) 0 calc(var(--u)*.7),transparent calc(var(--u)*.7) calc(var(--u)*1.5))}',
    '#pk-intro .b-side,#pk-intro .b-cedge,#pk-intro .s-edge,#pk-intro .s-pedge{backface-visibility:hidden;-webkit-backface-visibility:hidden}',
    '#pk-intro .b-side{position:absolute;background:linear-gradient(90deg,color-mix(in srgb,var(--i-shell) 50%,#000),color-mix(in srgb,var(--i-shell) 72%,#000))}',
    '#pk-intro .b-r{left:100%;top:calc(var(--u)*1.5);bottom:calc(var(--u)*1.5);width:calc(var(--u)*7);transform-origin:0 50%;transform:translateZ(calc(var(--u)*3.5)) rotateY(90deg)}',
    '#pk-intro .b-l{right:100%;top:calc(var(--u)*1.5);bottom:calc(var(--u)*1.5);width:calc(var(--u)*7);transform-origin:100% 50%;transform:translateZ(calc(var(--u)*3.5)) rotateY(-90deg)}',
    '#pk-intro .b-t{bottom:100%;left:calc(var(--u)*1.5);right:calc(var(--u)*1.5);height:calc(var(--u)*7);transform-origin:50% 100%;transform:translateZ(calc(var(--u)*3.5)) rotateX(90deg)}',
    '#pk-intro .b-b{top:100%;left:calc(var(--u)*1.5);right:calc(var(--u)*1.5);height:calc(var(--u)*7);transform-origin:50% 0;transform:translateZ(calc(var(--u)*3.5)) rotateX(-90deg)}',
    '#pk-intro .b-r i{position:absolute;left:25%;right:25%;top:30%;height:calc(var(--u)*6);border-radius:999px;background:var(--i-trim)}',
    // the cover: hinged on its left edge, sitting over the screen
    '#pk-intro .b-cover{position:absolute;left:calc(var(--u)*1.6);top:calc(var(--u)*1.6);width:calc(var(--u)*40.8);height:calc(var(--u)*26.8);transform-style:preserve-3d;',
    '  transform-origin:0 50% 0;transform:translateZ(calc(var(--u)*3.5)) rotateY(0deg);animation:pkbCover .95s 1.25s cubic-bezier(.55,0,.25,1) forwards}',
    '#pk-intro .b-cout{inset:0;transform:translateZ(calc(var(--u)*1.5));border-radius:calc(var(--u)*2.2);',
    '  background:linear-gradient(160deg,color-mix(in srgb,var(--i-shell) 75%,#fff),var(--i-shell) 45%,color-mix(in srgb,var(--i-shell) 70%,var(--i-shell2)));',
    '  box-shadow:inset 0 0 0 calc(var(--u)*.3) color-mix(in srgb,var(--i-shell) 60%,#000),0 calc(var(--u)*.6) calc(var(--u)*1.4) rgba(0,0,0,.35)}',
    '#pk-intro .b-cout .i-band{top:auto;bottom:calc(var(--u)*5);height:calc(var(--u)*2.6)}',
    '#pk-intro .b-ribs{position:absolute;left:calc(var(--u)*2.4);top:calc(var(--u)*3);bottom:calc(var(--u)*3);width:calc(var(--u)*3);',
    '  background:repeating-linear-gradient(180deg,color-mix(in srgb,var(--i-shell) 60%,#000) 0 calc(var(--u)*.5),transparent calc(var(--u)*.5) calc(var(--u)*1.3))}',
    '#pk-intro .b-cout .i-leds{right:calc(var(--u)*3.4);top:calc(var(--u)*2.8);bottom:auto}',
    // a small dark status window with a pulse line, and a light bar that comes on
    '#pk-intro .b-win{position:absolute;left:calc(var(--u)*9);right:calc(var(--u)*9);top:calc(var(--u)*5);height:calc(var(--u)*9);border-radius:calc(var(--u)*1.2);',
    '  background:#05070b;box-shadow:inset 0 0 0 calc(var(--u)*.35) color-mix(in srgb,var(--i-shell) 50%,#000);overflow:hidden}',
    '#pk-intro .b-win i{position:absolute;left:8%;right:8%;top:50%;height:calc(var(--u)*.25);background:var(--i-accent);box-shadow:0 0 calc(var(--u)*1) var(--i-accent);',
    '  transform:scaleX(0);transform-origin:0 50%;animation:pkbPulse .9s .35s ease-out forwards}',
    '#pk-intro .b-bar{position:absolute;left:calc(var(--u)*9);right:calc(var(--u)*9);top:calc(var(--u)*17);height:calc(var(--u)*1);border-radius:999px;',
    '  background:var(--i-shell2);animation:pkbBar .5s .6s ease forwards}',
    '@keyframes pkbPulse{to{transform:scaleX(1)}}',
    '@keyframes pkbBar{to{background:var(--i-accent);box-shadow:0 0 calc(var(--u)*1.6) var(--i-accent)}}',
    '#pk-intro .b-gem{position:absolute;left:50%;top:50%;width:calc(var(--u)*8);height:calc(var(--u)*8);margin:calc(var(--u)*-4) 0 0 calc(var(--u)*-4);border-radius:50%;',
    '  background:radial-gradient(circle at 34% 30%,var(--i-l1),var(--i-l2) 56%,var(--i-l3));box-shadow:0 0 0 calc(var(--u)*.8) var(--i-trim),0 0 0 calc(var(--u)*1.3) var(--i-shell2);',
    '  animation:pkiLens 1.1s .5s ease-in-out}',
    '#pk-intro .b-gem::after{content:"";position:absolute;left:20%;top:16%;width:30%;height:22%;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.9),rgba(255,255,255,0))}',
    '#pk-intro .b-latch{position:absolute;right:calc(var(--u)*-.9);top:50%;width:calc(var(--u)*2.4);height:calc(var(--u)*6);margin-top:calc(var(--u)*-3);border-radius:calc(var(--u)*.7);',
    '  background:linear-gradient(90deg,color-mix(in srgb,var(--i-trim) 85%,#fff),var(--i-trim) 50%,color-mix(in srgb,var(--i-trim) 60%,#000))}',
    '#pk-intro.i-wait .b-latch,#pk-intro.i-wait .s-grip{animation:pkiCall 1.1s ease-in-out infinite alternate !important;animation-play-state:running !important}',
    '#pk-intro .b-cin{inset:0;transform:translateZ(calc(var(--u)*.03)) rotateY(180deg);border-radius:calc(var(--u)*2.2);background:var(--i-shell2);',
    '  display:grid;grid-template-columns:repeat(4,1fr);gap:calc(var(--u)*1.2);padding:calc(var(--u)*4) calc(var(--u)*5)}',
    '#pk-intro .b-cin i{border-radius:calc(var(--u)*.8);background:color-mix(in srgb,var(--i-shell) 70%,#000);box-shadow:inset 0 calc(var(--u)*-.3) 0 rgba(0,0,0,.35)}',
    '#pk-intro .b-cedge{position:absolute;background:color-mix(in srgb,var(--i-shell) 55%,#000)}',
    '#pk-intro .b-ce-r{left:100%;top:0;bottom:0;width:calc(var(--u)*1.5);transform-origin:0 50%;transform:translateZ(calc(var(--u)*1.5)) rotateY(90deg)}',
    '#pk-intro .b-ce-t{bottom:100%;left:0;right:0;height:calc(var(--u)*1.5);transform-origin:50% 100%;transform:translateZ(calc(var(--u)*1.5)) rotateX(90deg)}',
    '#pk-intro .b-ce-b{top:100%;left:0;right:0;height:calc(var(--u)*1.5);transform-origin:50% 0;transform:translateZ(calc(var(--u)*1.5)) rotateX(-90deg)}',
    '#pk-intro.i-book .i-power{animation-delay:2.15s,2.4s}',
    '#pk-intro.i-book .i-scan{animation-delay:2.4s,3.6s}',
    '#pk-intro.i-book .i-ui{animation-delay:2.6s,3.55s}',
    '#pk-intro.i-book .i-fill{animation-delay:2.7s}',
    '#pk-intro.i-book .i-menu{animation-delay:3.77s}',
    '@keyframes pkbIn{to{transform:rotateY(-30deg) rotateX(12deg) scale(1)}}',
    '@keyframes pkbCam{from{transform:rotateY(-30deg) rotateX(12deg) scale(1)}to{transform:translateY(calc(var(--u)*13)) rotateY(0deg) rotateX(0deg) scale(1.08)}}',
    '@keyframes pkbCover{to{transform:translateZ(calc(var(--u)*3.5)) rotateY(-162deg)}}',

    // ---- design 4: the slider. A flat slab whose screen panel slides up
    // with a click to show a keypad underneath.
    '#pk-intro .s-stage{position:absolute;left:50%;top:50%;width:calc(var(--u)*58);height:calc(var(--u)*34);margin:calc(var(--u)*-17) 0 0 calc(var(--u)*-29);',
    '  transform-style:preserve-3d;transform:rotateX(40deg) rotateZ(-12deg) scale(.88);',
    '  animation:pksIn .55s cubic-bezier(.2,.8,.2,1) forwards,pksCam .85s 1.1s cubic-bezier(.55,0,.25,1) forwards}',
    '#pk-intro .s-body{inset:0;transform:translateZ(calc(var(--u)*2));border-radius:calc(var(--u)*3);background:linear-gradient(180deg,var(--i-shell2),color-mix(in srgb,var(--i-shell) 60%,var(--i-shell2)))}',
    '#pk-intro .s-keys{position:absolute;left:calc(var(--u)*5);right:calc(var(--u)*5);bottom:calc(var(--u)*2);height:calc(var(--u)*10.5);',
    '  display:grid;grid-template-columns:repeat(10,1fr);grid-template-rows:repeat(3,1fr);gap:calc(var(--u)*.8)}',
    '#pk-intro .s-keys i{border-radius:calc(var(--u)*.6);background:color-mix(in srgb,var(--i-shell) 85%,#fff);box-shadow:inset 0 calc(var(--u)*-.3) 0 rgba(0,0,0,.3)}',
    '#pk-intro .s-keys i:nth-child(10n+1),#pk-intro .s-keys i:nth-child(10n){background:var(--i-trim)}',
    '#pk-intro .s-edge{position:absolute;background:color-mix(in srgb,var(--i-shell) 55%,#000)}',
    '#pk-intro .s-er{left:100%;top:calc(var(--u)*1.5);bottom:calc(var(--u)*1.5);width:calc(var(--u)*4);transform-origin:0 50%;transform:translateZ(calc(var(--u)*2)) rotateY(90deg)}',
    '#pk-intro .s-el{right:100%;top:calc(var(--u)*1.5);bottom:calc(var(--u)*1.5);width:calc(var(--u)*4);transform-origin:100% 50%;transform:translateZ(calc(var(--u)*2)) rotateY(-90deg)}',
    '#pk-intro .s-eb{top:100%;left:calc(var(--u)*1.5);right:calc(var(--u)*1.5);height:calc(var(--u)*4);transform-origin:50% 0;transform:translateZ(calc(var(--u)*2)) rotateX(-90deg)}',
    '#pk-intro .s-et{bottom:100%;left:calc(var(--u)*1.5);right:calc(var(--u)*1.5);height:calc(var(--u)*4);transform-origin:50% 100%;transform:translateZ(calc(var(--u)*2)) rotateX(90deg)}',
    '#pk-intro .s-panel{position:absolute;inset:0;transform-style:preserve-3d;transform:translateZ(calc(var(--u)*2)) translateY(0);',
    '  animation:pksSlide .5s 1.1s cubic-bezier(.3,1.45,.5,1) forwards}',
    '#pk-intro .s-pfront{inset:0;transform:translateZ(calc(var(--u)*1.8));border-radius:calc(var(--u)*3);',
    '  background:linear-gradient(170deg,color-mix(in srgb,var(--i-shell) 80%,#fff),var(--i-shell) 40%,color-mix(in srgb,var(--i-shell) 75%,var(--i-shell2)));',
    '  padding:calc(var(--u)*2.4) calc(var(--u)*2.4) calc(var(--u)*3.4);box-shadow:inset 0 0 0 calc(var(--u)*.3) color-mix(in srgb,var(--i-shell) 55%,#000),0 calc(var(--u)*.8) calc(var(--u)*2) rgba(0,0,0,.35)}',
    '#pk-intro .s-pfront .i-screen{border-radius:calc(var(--u)*1.4)}',
    '#pk-intro .s-glare{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:3;',
    '  background:linear-gradient(115deg,rgba(255,255,255,.14) 0 18%,transparent 18% 100%);mix-blend-mode:screen}',
    '#pk-intro .s-pfront .i-leds{right:calc(var(--u)*3.2);bottom:calc(var(--u)*1.1)}',
    '#pk-intro .s-pfront .i-led{width:calc(var(--u)*1.1);height:calc(var(--u)*1.1)}',
    '#pk-intro .s-grip{position:absolute;left:calc(var(--u)*3);bottom:calc(var(--u)*1.1);width:calc(var(--u)*7);height:calc(var(--u)*1.2);border-radius:999px;',
    '  background:repeating-linear-gradient(90deg,var(--i-trim) 0 calc(var(--u)*.7),transparent calc(var(--u)*.7) calc(var(--u)*1.4))}',
    '#pk-intro .s-pedge{position:absolute;background:color-mix(in srgb,var(--i-shell) 62%,#000)}',
    '#pk-intro .s-pe-r{left:100%;top:calc(var(--u)*1.5);bottom:calc(var(--u)*1.5);width:calc(var(--u)*1.8);transform-origin:0 50%;transform:translateZ(calc(var(--u)*1.8)) rotateY(90deg)}',
    '#pk-intro .s-pe-l{right:100%;top:calc(var(--u)*1.5);bottom:calc(var(--u)*1.5);width:calc(var(--u)*1.8);transform-origin:100% 50%;transform:translateZ(calc(var(--u)*1.8)) rotateY(-90deg)}',
    '#pk-intro .s-pe-b{top:100%;left:calc(var(--u)*1.5);right:calc(var(--u)*1.5);height:calc(var(--u)*1.8);transform-origin:50% 0;transform:translateZ(calc(var(--u)*1.8)) rotateX(-90deg)}',
    '#pk-intro.i-slide .i-power{animation-delay:1.9s,2.15s}',
    '#pk-intro.i-slide .i-scan{animation-delay:2.15s,3.35s}',
    '#pk-intro.i-slide .i-ui{animation-delay:2.35s,3.3s}',
    '#pk-intro.i-slide .i-fill{animation-delay:2.45s}',
    '#pk-intro.i-slide .i-menu{animation-delay:3.52s}',
    '@keyframes pksIn{to{transform:rotateX(40deg) rotateZ(-12deg) scale(1)}}',
    '@keyframes pksCam{from{transform:rotateX(40deg) rotateZ(-12deg) scale(1)}to{transform:translateY(calc(var(--u)*12)) rotateX(0deg) rotateZ(0deg) scale(1.05)}}',
    '@keyframes pksSlide{to{transform:translateZ(calc(var(--u)*2)) translateY(calc(var(--u)*-13))}}',
    '@media (prefers-reduced-motion:reduce){',
    '  #pk-intro *{animation:none !important}',
    '  #pk-intro .i-view{opacity:1}#pk-intro .i-stage{transform:translateY(calc(var(--u)*32)) rotateX(44deg) rotateZ(0deg) scale(1.22)}#pk-intro .i-lid{transform:rotateX(136deg)}',
    '  #pk-intro .i-clasp{transform:translateY(calc(var(--u)*.25)) translateZ(calc(var(--BT)*-1 + var(--u)*1.2)) rotateX(-55deg)}',
    '  #pk-intro .i-power,#pk-intro .i-menu,#pk-intro .i-glow,#pk-intro .i-skip{opacity:1;transform:none}',
    '  #pk-intro .f-pos,#pk-intro .f-bob{transform:none}#pk-intro .f-spin{transform:none}#pk-intro .f-ant{scale:1 1}',
    '  #pk-intro .b-stage{transform:translateY(calc(var(--u)*13)) scale(1.08)}#pk-intro .b-cover{transform:translateZ(calc(var(--u)*3.5)) rotateY(-162deg)}',
    '  #pk-intro .s-stage{transform:translateY(calc(var(--u)*12)) scale(1.05)}#pk-intro .s-panel{transform:translateZ(calc(var(--u)*2)) translateY(calc(var(--u)*-13))}',
    '  #pk-intro-zoom{transition:opacity .35s ease}}'
  ].join('\n');

  var current = null;

  // variant: 'classic' (the clamshell) or 'float' (the rare slate). Left
  // out, 1 opening in 5 is the rare one. auto: open without waiting for a
  // click (used when replaying from Data).
  function play(name, variant, auto){
    if(current) current.finish(true);
    var t = P[name] ? name : 'Nocturne', p = P[t];
    // The everyday design comes from the "Opening" setting (or is picked at
    // random); one start in five is the rare floating slate whatever it is.
    var kind = variant;
    if(!kind){
      var style = savedStyle();
      if(Math.random() < 0.2) kind = 'float';
      else kind = style === 'random' ? ['classic', 'book', 'slide'][Math.floor(Math.random() * 3)] : style;
    }
    if(!V[kind]) kind = 'classic';
    var rare = kind === 'float';
    var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(!document.getElementById('pk-intro-css')){
      var st = document.createElement('style'); st.id = 'pk-intro-css'; st.textContent = CSS;
      (document.head || document.documentElement).appendChild(st);
    }

    var el = document.createElement('div');
    el.id = 'pk-intro';
    var vars = {bg:p.bg, shell:p.shell, shell2:p.shell2, trim:p.trim, accent:p.accent, light:p.light,
      screen:p.screen, text:p.text, band:p.band || 'transparent', bandEdge:p.bandEdge || 'rgba(0,0,0,.25)',
      btn:p.btn || p.text, btnBg:p.btnBg || p.shell2, l1:p.lens[0], l2:p.lens[1], l3:p.lens[2]};
    Object.keys(vars).forEach(function(k){ el.style.setProperty('--i-' + k, vars[k]); });

    var leds = [p.accent, p.light, p.trim, p.lens[1]].map(function(c, i){
      return '<span class="i-led" style="--c:' + c + ';animation-delay:' + (0.3 + i * 0.1).toFixed(2) + 's"></span>';
    }).join('');
    var dots = function(n){ var s = ''; for(var i = 0; i < n; i++) s += '<i></i>'; return s; };
    var label = t === 'Nocturne' ? '' : t;
    var cam = '', CN = 6, CH = 1.6, CR = 2.75;
    for(var j = 0; j < CN; j++){
      var g = j / (CN - 1), cr = CR * Math.sqrt(1 - Math.pow(g * 0.78, 2)), sh = Math.round(6 + 14 * g);
      cam += '<i class="' + (j === CN - 1 ? 'top' : '') + '" style="left:calc(var(--u)*' + (-cr).toFixed(2) + ');top:calc(var(--u)*' + (-cr).toFixed(2) + ');' +
        'width:calc(var(--u)*' + (2 * cr).toFixed(2) + ');height:calc(var(--u)*' + (2 * cr).toFixed(2) + ');transform:translateZ(calc(var(--u)*' + (CH * g + 0.05).toFixed(2) + '));' +
        (j === CN - 1 ? '' : 'background:hsl(228,30%,' + sh + '%)') + '"></i>';
    }
    // Dome slices: from the collar up, each a little smaller (a sphere's
    // profile, cut off before the top so the lens has a face) and lighter.
    var dome = '', N = 10, H = 3.6, R = 6.9;
    for(var i = 0; i < N; i++){
      var f = i / (N - 1), rr = R * Math.sqrt(1 - Math.pow(f * 0.82, 2)), mix = Math.round(15 + 70 * f);
      dome += '<i class="' + (i === N - 1 ? 'top' : '') + '" style="left:calc(var(--u)*' + (-rr).toFixed(2) + ');top:calc(var(--u)*' + (-rr).toFixed(2) + ');' +
        'width:calc(var(--u)*' + (2 * rr).toFixed(2) + ');height:calc(var(--u)*' + (2 * rr).toFixed(2) + ');transform:translateZ(calc(var(--u)*' + (H * f + 0.05).toFixed(2) + '));' +
        (i === N - 1 ? '' : 'background:color-mix(in srgb,var(--i-l2) ' + mix + '%,var(--i-l3))') + '"></i>';
    }

    var screenHTML = '<div class="i-screen">' +
            '<div class="i-power"></div>' +
            '<div class="i-menu"></div>' +
            '<div class="i-ui">' +
              '<div class="i-title">Pokédex</div>' +
              (label ? '<div class="i-sub">' + label + '</div>' : '') +
              '<div class="i-bar"><div class="i-fill"></div></div>' +
            '</div>' +
            '<div class="i-scan"></div>' +
          '</div>';
    var floatHTML =
      '<div class="i-glow" aria-hidden="true"></div>' +
      '<div class="i-view" aria-hidden="true">' +
        '<div class="f-shadow"></div>' +
        '<div class="f-wrap"><div class="f-pos"><div class="f-bob"><div class="f-act"><div class="f-spin">' +
          '<div class="f-ant"><i></i><i></i><b></b><b></b></div>' +
          rim(58, 31, 3.6, 2.2, 1.1, 'rim-dark', {top:'<u></u>'}) +
          '<div class="i-f f-back">' + (p.band ? '<div class="f-band"></div>' : '') +
            '<div class="f-lens"></div><div class="f-cam"></div><div class="f-light"></div></div>' +
          '<div class="i-f f-front"><div class="f-camdot"></div>' + screenHTML + '</div>' +
        '</div></div></div></div></div>' +
      '</div>' +
      '<div class="i-hint" aria-live="polite">Click to open<span>Esc to skip</span></div>' +
      '<button type="button" class="i-skip" aria-label="Skip intro">Skip</button>';
    var NAME = '<div class="i-name">Norgalidir</div>';
    var tail = '<div class="i-hint" aria-live="polite">Click to open<span>Esc to skip</span></div>' +
      '<button type="button" class="i-skip" aria-label="Skip intro">Skip</button>';
    var bookHTML =
      '<div class="i-glow" aria-hidden="true"></div>' +
      '<div class="i-view" aria-hidden="true"><div class="x-push"><div class="b-stage">' +
        rim(44, 54, 3, 7, 3.5, 'rim-dark', {right:'<u></u>'}) +
        '<div class="b-face b-front">' +
          '<div class="b-scr">' + screenHTML + '</div>' +
          '<div class="b-ctrl"><div class="i-dpad"></div><div class="i-keys">' + dots(4) + '</div></div>' +
          '<div class="b-vent"></div>' +
        '</div>' +
        '<div class="b-cover">' +
          rim(40.8, 26.8, 2.2, 1.5, 1.5, 'rim-lid') +
          '<div class="b-face b-cin">' + dots(12) + '</div>' +
          '<div class="b-face b-cout">' + (p.band ? '<div class="i-band"></div>' : '') +
            '<div class="b-ribs"></div><div class="b-win"><i></i></div><div class="b-bar"></div><div class="b-latch"></div>' +
            NAME.replace('class="i-name"', 'class="i-name" style="right:calc(var(--u)*3.6);bottom:calc(var(--u)*2.4)"') + '</div>' +
        '</div>' +
      '</div></div></div>' + tail;
    var slideHTML =
      '<div class="i-glow" aria-hidden="true"></div>' +
      '<div class="i-view" aria-hidden="true"><div class="x-push"><div class="s-stage">' +
        rim(58, 34, 3, 4, 2, 'rim-dark') +
        '<div class="b-face s-body"><div class="s-keys">' + dots(30) + '</div></div>' +
        '<div class="s-panel">' +
          rim(58, 34, 3, 1.8, 1.8, 'rim-lid') +
          '<div class="b-face s-pfront">' + screenHTML + '<div class="s-glare"></div>' +
            '<div class="s-grip"></div><div class="i-leds">' + leds + '</div>' +
            NAME.replace('class="i-name"', 'class="i-name" style="left:50%;bottom:calc(var(--u)*1.05);transform:translateX(-50%)"') + '</div>' +
        '</div>' +
      '</div></div></div>' + tail;
    floatHTML = floatHTML.replace('<div class="f-light"></div></div>',
      '<div class="f-light"></div>' + NAME.replace('class="i-name"', 'class="i-name" style="left:calc(var(--u)*41);top:50%;transform:translate(-50%,-50%) rotate(-90deg)"') + '</div>');
    el.classList.add('i-' + kind);
    el.innerHTML = kind === 'float' ? floatHTML : kind === 'book' ? bookHTML : kind === 'slide' ? slideHTML :
      '<div class="i-glow" aria-hidden="true"></div>' +
      '<div class="i-view" aria-hidden="true"><div class="i-stage">' +
        '<div class="i-shadow"></div>' +
        rim(60, 40, 1.4, 5, 0, 'rim-body', {bottom:'<i></i><b></b><i></i>'}) +
        '<div class="i-f i-btop">' +
          '<div class="i-dpad"></div>' +
          '<div class="i-mid"><div class="i-grille">' + dots(18) + '</div>' +
            '<div class="i-pills"><span class="i-pill"></span><span class="i-pill"></span></div></div>' +
          '<div class="i-keys">' + dots(4) + '</div>' +
        '</div>' +
        '<div class="i-3d i-clasp"><div class="i-cplate"><b></b></div><div class="i-ctab"></div></div>' +
        '<div class="i-3d i-lid">' +
          rim(60, 40, 1.4, 2.2, 2.2, 'rim-lid') +
          '<div class="i-f i-lin"><div class="i-screen">' +
            '<div class="i-power"></div>' +
            '<div class="i-menu"></div>' +
            '<div class="i-ui">' +
              '<div class="i-title">Pokédex</div>' +
              (label ? '<div class="i-sub">' + label + '</div>' : '') +
              '<div class="i-bar"><div class="i-fill"></div></div>' +
            '</div>' +
            '<div class="i-scan"></div>' +
          '</div></div>' +
          '<div class="i-f i-lout">' +
            (p.band ? '<div class="i-band"></div>' : '') +
            '<div class="i-lens"></div><div class="i-camring"></div><div class="i-rec"></div><div class="i-slot"></div><div class="i-leds">' + leds + '</div>' +
            '<div class="i-name" style="left:calc(var(--u)*3.4);bottom:calc(var(--u)*5.1)">Norgalidir</div>' +
          '</div>' +
          '<div class="i-3d i-dome">' + dome + '</div>' +
          '<div class="i-3d i-cam">' + cam + '</div>' +
        '</div>' +
      '</div></div>' +
      '<div class="i-hint" aria-live="polite">Click to open<span>Esc to skip</span></div>' +
      '<button type="button" class="i-skip" aria-label="Skip intro">Skip</button>';

    (document.body || document.documentElement).appendChild(el);

    // Fill the screen with the menu preview, drawn at the window's width
    // and shrunk to fit, so it matches the full-size copy used for the zoom.
    var screenEl = el.querySelector('.i-screen'), menuEl = el.querySelector('.i-menu');
    function sizeMenu(){
      var W = innerWidth, sw = screenEl.offsetWidth, sh = screenEl.offsetHeight;
      if(!sw) return;
      var s = sw / W;
      menuEl.innerHTML = menuHTML(p, W, Math.ceil(sh / s));
      menuEl.firstChild.style.transform = 'scale(' + s + ')';
    }
    sizeMenu();

    var done = false, timers = [], zoom = null;
    function later(fn, ms){ timers.push(setTimeout(fn, ms)); }
    function remove(){
      if(el.parentNode) el.parentNode.removeChild(el);
      if(zoom && zoom.parentNode) zoom.parentNode.removeChild(zoom);
    }
    function finish(now){
      if(done) return; done = true;
      timers.forEach(clearTimeout);
      removeEventListener('keydown', onKey, true);
      if(current && current.el === el) current = null;
      say('done');
      if(now){ remove(); return; }
      el.style.opacity = '0';
      if(zoom) zoom.style.opacity = '0';
      setTimeout(remove, 480);
    }
    // The zoom: measure where the screen sits now (the camera has turned it
    // to face the window square on), lay a flat full-window copy of the
    // preview exactly over it, then let that copy grow to fill the window.
    function dive(){
      if(done) return;
      var r = screenEl.getBoundingClientRect();
      zoom = document.createElement('div');
      zoom.id = 'pk-intro-zoom';
      zoom.setAttribute('aria-hidden', 'true');
      zoom.innerHTML = menuHTML(p, innerWidth, innerHeight);
      zoom.style.borderRadius = '6px';
      zoom.style.overflow = 'hidden';
      if(!reduced && r.width){
        var sc = r.width / innerWidth, cut = Math.max(0, innerHeight - r.height / sc);
        zoom.style.transition = 'none';
        zoom.style.transform = 'translate(' + r.left + 'px,' + r.top + 'px) scale(' + sc + ')';
        zoom.style.clipPath = 'inset(0 0 ' + cut + 'px 0 round 12px)';
      }
      document.body.appendChild(zoom);
      el.classList.add('i-dive');
      say('zoom');
      void zoom.offsetWidth;
      zoom.style.transition = '';
      zoom.style.transform = 'none';
      zoom.style.clipPath = 'inset(0 0 0 0 round 0px)';
      zoom.style.borderRadius = '0';
      later(function(){ el.style.transition = 'none'; el.style.opacity = '0'; }, reduced ? 0 : 620);
      later(function(){ finish(false); }, reduced ? 200 : 700);
    }
    // Any key skips, and is kept from also reaching the app (so the key
    // used to skip does not also, say, jump to the search box).
    // Each moment of the intro announces itself as a 'pkintro' event on the
    // window, with detail.step = 'lights', 'clasp', 'lid', 'boot', 'ready',
    // 'menu', 'zoom' or 'done' — ready for sound effects to hook on to.
    function cue(step, ms){ later(function(){ say(step); }, ms); }
    function say(step){ try { dispatchEvent(new CustomEvent('pkintro', {detail:{step:step, theme:t, design:kind}})); } catch(e){} }
    // Clicked (or Enter/Space): the clasp pops and the rest plays out.
    var waiting = false, opened = false, wantOpen = false;
    function open(){
      if(!waiting || done) return; waiting = false; opened = true;
      el.classList.remove('i-hold', 'i-wait');
      V[kind].open.forEach(function(c){ cue(c[0], c[1]); });
      later(dive, V[kind].dive);
    }
    // While waiting, Escape skips and any other key opens; once it is
    // playing, any key skips. Keys never also reach the app underneath.
    function onKey(e){
      e.preventDefault(); e.stopPropagation();
      if(e.key === 'Escape' || opened || reduced) finish(false); else if(waiting) open(); else wantOpen = true;
    }

    // A click before the device is ready counts as "open" as soon as it is.
    el.addEventListener('click', function(){ if(opened || reduced) finish(false); else if(waiting) open(); else wantOpen = true; });
    el.querySelector('.i-skip').addEventListener('click', function(e){ e.stopPropagation(); finish(false); });
    addEventListener('keydown', onKey, true);

    // The app loads a lot of data and then builds its screens, which keeps
    // the browser too busy to animate. So the scheme's background shows
    // while that happens, and the animation only starts once the app has
    // drawn its first screen (the menu, or any other page) and the browser
    // has caught its breath. It starts anyway after 10 seconds.
    var playTime = 900, started = false, t0 = Date.now();
    el.classList.add('i-hold');
    function begin(){
      if(started || done) return; started = true;
      requestAnimationFrame(function(){ requestAnimationFrame(function(){
        later(function(){
          sizeMenu();
          el.classList.remove('i-hold');
          if(reduced){ later(dive, playTime); return; }
          // The lights come on, then the device waits with the clasp
          // glowing until it is clicked: browsers only allow sound after a
          // click, so that click is what lets the intro's sounds play.
          V[kind].first.forEach(function(c){ cue(c[0], c[1]); });
          // In the desktop app sound is always allowed, so it opens by itself.
          later(function(){ waiting = true; if(wantOpen || auto || window.pokedexDesktop) return open(); el.classList.add('i-hold', 'i-wait'); say('waiting'); }, V[kind].wait);
        }, 150);
      }); });
    }
    (function poll(){
      if(started || done) return;
      var ready = document.readyState === 'complete' && document.querySelector('[data-m="wrap"],[data-m="header"]');
      if(ready || Date.now() - t0 > 10000) return begin();
      setTimeout(poll, 100);
    })();

    current = {el:el, finish:finish};
  }

  // variant: 'classic', 'book', 'slide', 'float', or left out for the
  // everyday choice (from the Opening setting, never the rare one).
  window.pkIntro = function(name, variant){
    var v = variant;
    if(!v){ var st = savedStyle(); v = st === 'random' ? ['classic', 'book', 'slide'][Math.floor(Math.random() * 3)] : st; }
    play(name || savedTheme(), v, true);
  };
  play(savedTheme());
})();
