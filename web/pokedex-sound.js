/*
 * Sound for the Pokédex: the opening animation's effects and the
 * background music. All original, all made live with Web Audio (no audio
 * files), in a retro handheld style — square and triangle waves and a
 * little filtered noise.
 *
 * Intro effects follow the app's "Sound effects" setting (they play unless
 * it has been switched off). The music has its own on/off button, bottom
 * right, remembered on this device.
 *
 * Browsers only allow sound after a click or key press, so nothing plays
 * until then. The intro waits for a click on its clasp for this reason.
 */
(function(){
  // Run once per page, even if the editor loads this script again — a
  // second copy would double every sound and start a second music loop.
  if(window.__pkSoundLoaded) return; window.__pkSoundLoaded = true;
  var SAVE_KEY = 'nocturne-pokedex-v1', MUSIC_KEY = 'pokedex-music';
  var C = null, master = null, sfxBus = null, musicBus = null;

  function sfxOn(){
    try { var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); return !(s && s.sfx === false); } catch(e){ return true; }
  }
  function musicOn(){
    try { return localStorage.getItem(MUSIC_KEY) !== 'off'; } catch(e){ return true; }
  }

  // One audio graph for everything, created on the first click or key.
  function ctx(){
    if(C) { if(C.state === 'suspended') C.resume(); return C; }
    var AC = window.AudioContext || window.webkitAudioContext; if(!AC) return null;
    C = new AC();
    master = C.createGain(); master.gain.value = 0.9; master.connect(C.destination);
    sfxBus = C.createGain(); sfxBus.gain.value = 0.2; sfxBus.connect(master);
    musicBus = C.createGain(); musicBus.gain.value = 0; musicBus.connect(master);
    return C;
  }
  function unlock(){ ctx(); if(wantMusic) startMusic(); }
  ['pointerdown', 'keydown', 'touchend'].forEach(function(ev){ addEventListener(ev, unlock, true); });

  var N = function(n){ return 440 * Math.pow(2, (n - 69) / 12); };
  function env(g, t, a, d, vol){
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  function tone(bus, freq, t, d, type, vol, a){
    var o = C.createOscillator(), g = C.createGain();
    o.type = type || 'square'; o.frequency.setValueAtTime(freq, t);
    env(g, t, a || 0.005, d, vol || 1); o.connect(g); g.connect(bus);
    o.start(t); o.stop(t + (a || 0.005) + d + 0.05);
    return o;
  }
  function sweep(bus, f1, f2, t, d, type, vol){
    var o = tone(bus, f1, t, d, type, vol, 0.01);
    o.frequency.exponentialRampToValueAtTime(f2, t + d);
  }
  var noiseBuf = null;
  function noise(bus, t, d, type, f1, f2, q, vol){
    if(!noiseBuf){
      noiseBuf = C.createBuffer(1, C.sampleRate, C.sampleRate);
      var ch = noiseBuf.getChannelData(0); for(var i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    }
    var src = C.createBufferSource(), f = C.createBiquadFilter(), g = C.createGain();
    src.buffer = noiseBuf; f.type = type; f.Q.value = q || 1;
    f.frequency.setValueAtTime(f1, t); if(f2) f.frequency.exponentialRampToValueAtTime(f2, t + d);
    env(g, t, 0.003, d, vol || 1); src.connect(f); f.connect(g); g.connect(bus);
    src.start(t); src.stop(t + d + 0.05);
  }

  // A short, hard mechanical click. `bright` scales the top end, `weight`
  // the low knock (higher = chunkier).
  var crunch = null;
  function click(t, bright, weight){
    if(!crunch){
      crunch = C.createWaveShaper(); var k = new Float32Array(1024);
      for(var i = 0; i < 1024; i++){ var x = i / 512 - 1; k[i] = Math.tanh(x * 4); }
      crunch.curve = k; crunch.connect(sfxBus);
    }
    noise(crunch, t, 0.012, 'bandpass', 4200, 0, 1.2, 1.6 * bright);   // the crack
    noise(crunch, t, 0.006, 'highpass', 7000, 0, 0.7, 1.0 * bright);   // the tick on top
    noise(sfxBus, t + 0.002, 0.03, 'bandpass', 1900, 0, 9, 1.2 * bright); // metal ring
    sweep(sfxBus, 150 * weight, 55, t, 0.05, 'sine', 1.4 * weight);       // body knock
    noise(sfxBus, t, 0.04, 'lowpass', 700, 0, 1, 0.7 * weight);          // thud
  }

  // ---- Intro effects -------------------------------------------------------
  var FX = {
    // Four quick ticks as the lights come on, rising a step each.
    lights: function(t){ [0, .1, .2, .3].forEach(function(at, i){ tone(sfxBus, N(84 + i * 2), t + at, 0.03, 'square', 0.25); }); },
    // The clasp: a crisp, chunky "chk-chk". Two hard clicks 75ms apart —
    // the latch letting go, then the clasp slapping against the body —
    // each a very short burst of bright, slightly crunched noise with a
    // metal ring on top and a low knock underneath for weight.
    clasp: function(t){ click(t, 1.0, 1.0); click(t + 0.075, 0.85, 1.35); },
    // The rare intro: the slate rising, an airy shimmer that climbs.
    float: function(t){
      noise(sfxBus, t, 1.0, 'bandpass', 500, 2600, 1.6, 0.3);
      sweep(sfxBus, 330, 990, t, 0.9, 'sine', 0.12);
      [88, 91, 95, 100].forEach(function(n, i){ tone(sfxBus, N(n), t + 0.5 + i * 0.09, 0.08, 'triangle', 0.22); });
    },
    // Its double-take: two quick curious chirps, the second one higher.
    look: function(t){
      sweep(sfxBus, 1300, 1900, t + 0.05, 0.07, 'triangle', 0.35);
      sweep(sfxBus, 1500, 2400, t + 0.38, 0.08, 'triangle', 0.35);
      tone(sfxBus, N(98), t + 0.47, 0.05, 'sine', 0.2);
    },
    // The excited little hop: a springy rising boop and a soft landing tick.
    hop: function(t){
      sweep(sfxBus, 260, 820, t + 0.06, 0.14, 'sine', 0.5);
      tone(sfxBus, N(91), t + 0.18, 0.05, 'triangle', 0.25);
      noise(sfxBus, t + 0.36, 0.03, 'lowpass', 900, 0, 1, 0.35);
    },
    // ...and turning round to face you: a quick double swish.
    spin: function(t){ noise(sfxBus, t, 0.35, 'bandpass', 700, 2400, 1.8, 0.45); noise(sfxBus, t + 0.32, 0.3, 'bandpass', 2400, 900, 1.8, 0.35); },
    // The slider: a click as the catch lets go, a smooth rising glide, and
    // a firm double click as it locks open.
    slide: function(t){
      click(t, 0.6, 0.7);
      noise(sfxBus, t + 0.03, 0.32, 'bandpass', 600, 2200, 1.4, 0.4);
      sweep(sfxBus, 180, 320, t + 0.03, 0.3, 'triangle', 0.25);
      click(t + 0.36, 0.9, 1.2); click(t + 0.42, 0.7, 0.9);
    },
    // The lid lifting: a soft airy swish on its hinge.
    lid: function(t){ noise(sfxBus, t, 0.7, 'bandpass', 300, 1400, 1.4, 0.35); },
    // Power-on: the screen's hum rises, a thin CRT whine, then a run of
    // rising blips and a bright two-note "ready" chime.
    boot: function(t){
      sweep(sfxBus, 55, 180, t, 0.35, 'sawtooth', 0.12);
      tone(sfxBus, 7800, t + 0.08, 0.5, 'sine', 0.03, 0.05);
      noise(sfxBus, t + 0.25, 0.06, 'bandpass', 2500, 0, 3, 0.5);
      [76, 79, 83, 88, 91].forEach(function(n, i){ tone(sfxBus, N(n), t + 0.42 + i * 0.065, 0.05, 'square', 0.4); });
      tone(sfxBus, N(95), t + 0.8, 0.12, 'square', 0.35);
      tone(sfxBus, N(100), t + 0.92, 0.32, 'square', 0.33);
      tone(sfxBus, N(88), t + 0.92, 0.32, 'triangle', 0.5);
    },
    // Loading bar full: a soft confirming ding.
    ready: function(t){ tone(sfxBus, N(96), t, 0.25, 'triangle', 0.6); tone(sfxBus, N(103), t + 0.07, 0.35, 'triangle', 0.45); },
    // Menu preview appears: two gentle blips.
    menu: function(t){ tone(sfxBus, N(91), t, 0.03, 'square', 0.25); tone(sfxBus, N(96), t + 0.05, 0.05, 'square', 0.22); },
    // An honour earned: a bright rising arpeggio with a shimmer on top.
    honour: function(t){
      [79, 83, 86, 91].forEach(function(n, i){ tone(sfxBus, N(n), t + i * 0.085, 0.5 - i * 0.05, 'triangle', 0.55); });
      tone(sfxBus, N(98), t + 0.36, 0.7, 'sine', 0.35); tone(sfxBus, N(103), t + 0.42, 0.8, 'sine', 0.25);
      noise(sfxBus, t + 0.34, 0.6, 'highpass', 7000, 9000, 0.7, 0.25);
    },
    // Diving into the screen: a rising whoosh.
    zoom: function(t){ noise(sfxBus, t, 0.55, 'bandpass', 400, 5000, 2, 0.6); sweep(sfxBus, 220, 880, t, 0.5, 'triangle', 0.15); }
  };

  var wantMusic = false;
  addEventListener('pkintro', function(e){
    var step = e.detail && e.detail.step;
    if(step === 'done'){ wantMusic = true; if(C) startMusic(); showButton(); return; }
    if(!FX[step] || !sfxOn() || !ctx() || C.state !== 'running') return;
    try { FX[step](C.currentTime + 0.01); } catch(err){}
  });

  // ---- Music ---------------------------------------------------------------
  // An original, calm, cosy loop in G major at 88 BPM, played on
  // instrument-like voices made with FM synthesis: a warm electric piano
  // on the chords, a soft vibraphone on the melody, a round plucked bass,
  // and brushed percussion — all through a little room reverb. 16 bars.
  var MUSIC_LEVEL = 0.06; // full volume: matched to the old loop's loudness, a touch fuller
  // Music volume, 0–100, kept in this browser. 70 is the old fixed level.
  var VOL_KEY = 'pokedex-music-vol';
  function musicVolume(){
    try { var v = localStorage.getItem(VOL_KEY); if(v === null) return 70; v = +v; return isFinite(v) ? Math.max(0, Math.min(100, v)) : 70; } catch(e){ return 70; }
  }
  // Loudness follows the ear: a squared curve, so the low end of the slider is usable.
  function musicLevel(){ var v = musicVolume() / 100; return MUSIC_LEVEL / 0.49 * v * v; }
  var BPM = 88, STEP = 60 / BPM / 2; // eighth notes
  // Chord voicings (with 7ths for warmth) and a bass root for each.
  var CH = {
    G:  {v:[55,59,62,66], b:43}, Em: {v:[52,55,59,62], b:40}, C: {v:[48,55,59,64], b:48},
    D:  {v:[50,54,57,60], b:50}, Bm: {v:[47,54,57,62], b:47}, Am: {v:[45,52,55,60], b:45}
  };
  var BARS = [
    ['G',  [74,'-',71,74,79,'-',78,76]],
    ['Em', [74,'-','-',71,76,'-',74,'-']],
    ['C',  [72,'-',76,'-',79,'-',76,72]],
    ['D',  [74,'-','-','-',0,78,76,74]],
    ['G',  [71,'-',74,'-',79,'-',81,'-']],
    ['Bm', [78,'-',74,'-',71,'-',74,76]],
    ['C',  [76,'-',72,76,79,'-',76,'-']],
    ['D',  [78,'-','-','-',81,'-','-','-']],
    ['Em', [79,'-',76,'-',71,76,79,'-']],
    ['C',  [81,'-',79,76,72,'-',76,'-']],
    ['G',  [74,'-',79,'-',83,'-',81,79]],
    ['D',  [78,'-',76,'-',74,'-','-','-']],
    ['C',  [76,'-',79,'-',84,'-',83,81]],
    ['Am', [81,'-',76,'-',72,'-',76,81]],
    ['D',  [79,'-',78,'-',74,'-',78,'-']],
    ['G',  [79,'-','-','-',0,0,0,0]]
  ];
  var ALL = [];
  BARS.forEach(function(b){ ALL = ALL.concat(b[1]); });
  function holdLen(bar, i){
    var n = 1, k = bar * 8 + i + 1;
    while(ALL[k % ALL.length] === '-'){ n++; k++; }
    return n;
  }

  // Room reverb: a generated impulse (two seconds of decaying noise).
  var dry = null, wet = null;
  function room(){
    if(dry) return;
    dry = C.createGain(); dry.gain.value = 1; dry.connect(musicBus);
    var len = Math.floor(C.sampleRate * 2.2), ir = C.createBuffer(2, len, C.sampleRate);
    for(var c = 0; c < 2; c++){ var d = ir.getChannelData(c);
      for(var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    var conv = C.createConvolver(); conv.buffer = ir;
    wet = C.createGain(); wet.gain.value = 0.32; wet.connect(conv); conv.connect(musicBus);
  }
  function send(node){ node.connect(dry); node.connect(wet); }

  // FM voice: a sine carrier shaped by a sine modulator whose depth fades
  // out — the bright attack then mellow body of a struck instrument.
  function fm(freq, t, dur, vol, ratio, index, idxDecay, ampDecay){
    var car = C.createOscillator(), mod = C.createOscillator(), mg = C.createGain(), amp = C.createGain();
    car.frequency.value = freq; mod.frequency.value = freq * ratio;
    mg.gain.setValueAtTime(freq * index, t);
    mg.gain.exponentialRampToValueAtTime(freq * 0.05 + 0.01, t + idxDecay);
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vol, t + 0.004);
    amp.gain.exponentialRampToValueAtTime(vol * 0.35, t + Math.min(dur, ampDecay));
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.5);
    mod.connect(mg); mg.connect(car.frequency); car.connect(amp); send(amp);
    car.start(t); mod.start(t); car.stop(t + dur + 0.6); mod.stop(t + dur + 0.6);
    return amp;
  }
  // Electric piano: ratio 1 FM with a gentle bell "tine" on top.
  function epiano(n, t, dur, vol){
    fm(N(n), t, dur, vol, 1, 1.6, 0.6, 1.2);
    fm(N(n) * 1.002, t, Math.min(dur, 0.4), vol * 0.18, 14, 0.9, 0.08, 0.15);
  }
  // Vibraphone: ratio 4 FM for the metal bar, with a slow shimmer.
  function vibes(n, t, dur, vol){
    var a = fm(N(n), t, dur + 0.6, vol, 4, 2.2, 0.12, 1.6);
    var lfo = C.createOscillator(), lg = C.createGain();
    lfo.frequency.value = 5.2; lg.gain.value = vol * 0.18; lfo.connect(lg); lg.connect(a.gain);
    lfo.start(t); lfo.stop(t + dur + 1.2);
    fm(N(n + 12), t, 0.25, vol * 0.12, 1, 0.5, 0.1, 0.2); // a soft octave ping
  }
  // Bass: a round pluck, sine plus a filtered triangle.
  function bass(n, t, dur, vol){
    var f = C.createBiquadFilter(), g = C.createGain();
    f.type = 'lowpass'; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(240, t + 0.3);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(vol * 0.4, t + 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.15);
    ['sine', 'triangle'].forEach(function(type){
      var o = C.createOscillator(); o.type = type; o.frequency.value = N(n);
      o.connect(f); o.start(t); o.stop(t + dur + 0.2);
    });
    f.connect(g); g.connect(dry); // bass stays dry so it sits round and clear
  }
  function kick(t, vol){
    var o = C.createOscillator(), g = C.createGain();
    o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.14);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    o.connect(g); g.connect(dry); o.start(t); o.stop(t + 0.22);
  }
  function brush(t, vol, len){ noise(wet ? dry : musicBus, t, len, 'bandpass', 5200, 0, 0.8, vol); }

  var playing = false, timer = null, nextT = 0, pos = 0;
  function scheduleStep(t){
    var bar = Math.floor(pos / 8) % BARS.length, i = pos % 8, b = BARS[bar], ch = CH[b[0]];
    // Swing the off-beats a touch for a relaxed feel.
    var at = t + (i % 2 ? STEP * 0.12 : 0);
    var m = b[1][i];
    if(m && m !== '-') vibes(m, at, holdLen(bar, i) * STEP, 0.30);
    // Electric piano: chord on 1, a light stab on the "and" of 2, and on 3½.
    if(i === 0 || i === 3 || i === 5){
      var d = i === 0 ? STEP * 3 : i === 3 ? STEP * 1.2 : STEP * 3, v = i === 0 ? 0.11 : 0.07;
      ch.v.forEach(function(n, k){ epiano(n, at + k * 0.008, d, v); });
    }
    // Bass: root on 1, root again on the "and" of 2, the fifth on 3.
    if(i === 0) bass(ch.b - 12, at, STEP * 2.6, 0.55);
    if(i === 3) bass(ch.b - 12, at, STEP * 0.9, 0.4);
    if(i === 4) bass(ch.b - 5, at, STEP * 2.6, 0.48);
    // Kit: soft kick on 1 and 3, brushes on the off-beats, a longer sweep on 4.
    if(i === 0 || i === 4) kick(at, 0.32);
    if(i % 2 === 1) brush(at, 0.08, 0.05);
    if(i === 6) brush(at, 0.06, 0.18);
    pos++;
  }
  function tick(){
    while(nextT < C.currentTime + 0.25){ scheduleStep(nextT); nextT += STEP; }
  }
  function startMusic(){
    if(!musicOn() || playing || !C || C.state !== 'running') return;
    room();
    playing = true; pos = 0; nextT = C.currentTime + 0.1;
    musicBus.gain.cancelScheduledValues(C.currentTime);
    musicBus.gain.setValueAtTime(0.0001, C.currentTime);
    musicBus.gain.exponentialRampToValueAtTime(Math.max(0.0001, musicLevel()), C.currentTime + 2.5); // gentle fade-in
    tick(); timer = setInterval(tick, 60);
  }
  function stopMusic(){
    if(!playing) return; playing = false;
    musicBus.gain.cancelScheduledValues(C.currentTime);
    musicBus.gain.setValueAtTime(musicBus.gain.value, C.currentTime);
    musicBus.gain.linearRampToValueAtTime(0, C.currentTime + 0.4);
    setTimeout(function(){ if(!playing){ clearInterval(timer); timer = null; } }, 450);
  }
  // Pause when the tab or app is hidden, carry on when it comes back.
  document.addEventListener('visibilitychange', function(){
    if(!C) return;
    if(document.hidden) C.suspend(); else C.resume();
  });

  // ---- Music button --------------------------------------------------------
  var btn = null;
  function paint(){
    if(!btn) return; var on = musicOn();
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.setAttribute('aria-label', on ? 'Music on, click to mute' : 'Music off, click to play');
    btn.title = on ? 'Music on' : 'Music off';
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>' +
      (on ? '' : '<path d="M3 3l18 18"/>') + '</svg>';
    btn.style.opacity = on ? '1' : '.6';
  }
  function showButton(){
    if(btn || !document.body) return;
    var st = document.createElement('style');
    st.textContent = '#pk-music{position:fixed;right:16px;bottom:16px;z-index:40;width:40px;height:40px;border-radius:999px;display:grid;place-items:center;' +
      'cursor:pointer;color:var(--color-accent-300,#d2cefd);background:var(--color-surface,#232532);border:1px solid var(--color-divider,rgba(255,255,255,.16));' +
      'box-shadow:0 4px 14px rgba(0,0,0,.35);transition:opacity .2s ease,transform .15s ease}' +
      '#pk-music:hover{transform:scale(1.06)}#pk-music:focus-visible{outline:2px solid var(--color-accent,#9184d9);outline-offset:2px}' +
      '@media (max-width:720px){#pk-music{width:34px;height:34px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom));opacity:.8}}' +
      '@media print{#pk-music{display:none}}';
    document.head.appendChild(st);
    btn = document.createElement('button'); btn.type = 'button'; btn.id = 'pk-music';
    btn.addEventListener('click', function(){ setMusic(!musicOn()); });
    document.body.appendChild(btn); paint();
  }

  // If the intro doesn't run at all, offer the music once the page is up.
  addEventListener('load', function(){
    setTimeout(function(){ if(!document.getElementById('pk-intro')){ wantMusic = true; showButton(); if(C) startMusic(); } }, 1500);
  });

  // Turn the music on or off from elsewhere (the Settings drawer).
  function setMusic(on){
    try { localStorage.setItem(MUSIC_KEY, on ? 'on' : 'off'); } catch(e){}
    paint(); ctx();
    if(on){ wantMusic = true; startMusic(); } else stopMusic();
  }
  function setMusicVolume(v){
    v = Math.max(0, Math.min(100, +v || 0));
    try { localStorage.setItem(VOL_KEY, String(v)); } catch(e){}
    if(C && playing){
      musicBus.gain.cancelScheduledValues(C.currentTime);
      musicBus.gain.setTargetAtTime(musicLevel(), C.currentTime, 0.08);
    }
  }
  window.pkSound = { musicVolume: musicVolume, setMusicVolume: setMusicVolume, _master: function(){ return master; }, musicOn: musicOn, setMusic: setMusic, fx: function(step){ if(sfxOn() && ctx() && FX[step]) try { FX[step](C.currentTime + 0.01); } catch(e){} }, startMusic: startMusic, stopMusic: stopMusic };
})();
