# Changelog

The version shown at the bottom of every page matches the newest entry here.
Bump it with every set of changes you upload: the second number for fixes and
small additions, the first for big new sections.

## v2.56 · 9 Nov 2026

- **Daily quiz** on the menu: five questions a day, 15 seconds each, the
  same five for everyone that day. Questions cover silhouettes (when you
  have sprites), types, evolutions, abilities, dex numbers, categories,
  generations and type matchups. Leaving the quiz part-way (switching app,
  clicking away, closing) ends it and the day scores 0. Keys 1 to 4 answer.
- **Quiz badge that levels up** with correct answers over the days: Quiz
  Rookie (25), Ace (75), Expert (150), Elite (275), then **Pokémon Master**
  (400). The menu card shows your progress and streak.
- **Event badges:** the Professor tool can design a one-off event badge
  (name, event, colour, icon, shape) and make a code for each friend. The
  design travels in the code, so events need no update. They show in a new
  Events group on the Trainer Card.
- "Give it to me" in the Professor tool awards a badge to your own copy.
- **Desktop app updates itself:** it checks online for a new version when it
  opens (and every six hours), downloads only the changed files, checks
  them, and offers "Restart now". Published with "Publish Update.bat". A
  change to the app itself still needs a fresh install, and it says so.

## v2.55 · 9 Nov 2026

**Honours:** badges and trophies of your own, on the Trainer Card.

- **Earned by progress (automatic):**
  - A Champion badge for each region: tick every gym badge for one of its
    games in the Hall of Fame and register your team.
  - Grand Champion trophy for all nine main regions.
  - Researcher (100 species) and Field Researcher (500).
  - Bronze, Silver and Complete Pokédex trophies (50%, 75%, 100%), and
    Living Legend for the full living form dex.
  - First Sparkle, Shiny Hunter, Shiny Expert and Shiny Master (1, 10, 50,
    100 shinies), and the Radiant Pokédex trophy for a full shiny dex.
  - Event Goer and Event Veteran, Ribbon Collector, Alpha Tracker and
    Gigantic.
- **From the Professor:** Nuzlocke Survivor, Challenge Runner, Shiny
  Showcase, Trade Partner and Professor's Choice. Settings → Professor makes
  a code for a friend's name. They enter it under Settings → Professor code,
  and it only works for the name it was made for.
- **Special:** Pokémon Professor (the maker's own copy) and Professor's
  Assistant (everyone who uses the friends' copy during the beta, before
  v3.0).
- Earning one plays a short "badge earned" moment with a chime. Several at
  once are shown together.
- Click an earned honour to put it on show (up to three). Those appear at
  the top of the Honours section and next to the title on the menu.
- All badge and trophy art is original.

## v2.54 · 8 Nov 2026

Last of the tidy-up.

- **Menu:** the colour picker under the Trainer Card is gone. Colour
  scheme lives in Settings → Look.
- **Game boxes:** the notes about box space, regional order and
  "obtainable here" are now in an ⓘ next to the progress count.
- **Encounters and Run dashboard:** where the data comes from is now an ⓘ.
- **Events:** the shiny filter reads "Shiny or not" instead of "Any".
- **Phones:** the music button is smaller and sits clear of the edge.

## v2.53 · 8 Nov 2026

- **Music volume:** a slider under Settings → Sound. It changes the music
  as you drag and is remembered.
- **Friends' copy of the desktop app:** a separate installer to give to
  friends. It has everything for tracking (caught, shiny, balls, boxes,
  teams, tabs, your own images, backups) but leaves out editing the
  Pokédex data (Edit entry, New entry, Import learnsets) and the sprite
  file settings. On first launch it asks for their name, and the menu and
  the opening animation then say e.g. "Sam's Pokédex". It packs in all the
  sprites, and installs alongside your own copy without touching it.

## v2.52 · 8 Nov 2026

Tidier Pokédex entries and Browse. Everything works as before.

- **Pokédex entry:**
  - Caught, Favourite and Shiny caught now sit in one row under the
    sprites. Favourite and Shiny are icon buttons: hover for their label.
  - The shiny hunt counter, odds, hunt mode and "no legal shiny" options
    are in a **Shiny hunt** card that folds away. It opens by itself once
    a hunt has a count, and its heading shows the count.
  - Edit entry and Add to team are in a **More** menu. While editing, a
    **Done editing** button stays in view.
  - The Original Trainer note is now an ⓘ.
  - The three note boxes (learnset, locations, my notes) are one **Notes**
    section with tabs. A dot marks the tabs you've written in.
- **Browse:**
  - The search box, Main/Shiny dex and sort stay in view. Every other
    filter (type, generation, caught, ball, forms, favourites, Alpha and
    shiny locks) is in a **Filters** panel, labelled.
  - The Filters button shows how many are on, and each one shows as a
    chip under the search you can × off, with **Clear all**.
- Offline copy refreshed (service worker v60).

## v2.51 · 8 Nov 2026

- Fixed: the opening animations' devices had notches and gaps at their
  corners, where straight side walls met rounded faces (easiest to see on
  Nocturne, Daylight and Midnight). Every device now has a proper rounded
  rim, with curved corner pieces that follow each face's rounding and a
  little shading as they turn away from the light.
- Offline copy refreshed (service worker v59).

## v2.50 · 8 Nov 2026

A tidier layout. Everything the app did before is still here, just less
scattered.

- **Header on one row.** Your section buttons on the left; on the right a
  small progress chip (for example "Caught 0 / 1025") that opens all your
  counters, an ⓘ button and a ⚙ button. The colour picker moved into
  Settings (it's still on the menu too).
- **Settings drawer** (⚙) replaces the old Data panel. It slides in from
  the right in sections: Look (colour, screen effect, page changes,
  opening, replays), Sound (effects and music), Backup, Your Pokédex (new
  entry, import learnsets) and Sprites & offline (file patterns, saving
  sprites, storage, offline log). Esc or clicking outside closes it.
- **ⓘ notes.** Help text that used to sit on the page is now behind small
  ⓘ buttons: hover, tap or Tab to them to read. For example Home PC's
  how-to is beside "Box set", and the sprite file name help is in
  Settings.
- **About and help** (ⓘ in the header, also on the menu): version,
  keyboard shortcuts, where your data's kept, and what's new. The
  shortcuts no longer sit in the footer.
- **Home PC:** the set actions (new custom set, edit set, print, reset
  order, default view) are in one **More** menu, and the four whole-box
  buttons are in one **Mark every slot** menu.
- Encounters, Luxury and shiny lists: their small print is now an ⓘ.
- Offline copy refreshed (service worker v58).

## v2.49 · 8 Nov 2026

- Two new opening designs:
  - **Field brick:** a chunky upright block with a d-pad, buttons and a
    vent. A cover over its screen, with a status window and a light bar,
    unlatches with a "chk-chk" and swings open sideways like a notebook,
    showing a little keypad inside, while the view turns to face it.
  - **Slider:** a flat slab with a glossy screen panel. It clicks free,
    glides up with a smooth whoosh and locks open with a firm double click,
    showing a keyboard underneath.
- Data → **Opening** chooses which design you see: Mix them up (the
  default, a different one each time), Clamshell, Field brick or Slider.
  The rare floating slate still turns up about one start in five whatever
  you choose. **Replay intro** plays your chosen opening.
- Every design now has "Norgalidir" engraved on it, small and subtle: on
  the clamshell's lid, the slate's back, the brick's cover and the
  slider's screen bezel.
- Offline copy refreshed (service worker v57).

## v2.48 · 8 Nov 2026

- The rare opening's slate has more personality:
  - An antenna nub on its top corner springs up as it arrives and wobbles
    as it bobs.
  - When it reaches its hover it does a double-take, tilting one way then
    the other, with two curious chirps.
  - A light bar on its back breathes slowly in your scheme's colour, and
    flashes just before it turns.
  - It gives an excited little hop, with a springy boop, before spinning
    round, and a satisfied settle once its screen comes on.
- Offline copy refreshed (service worker v56).

## v2.47 · 8 Nov 2026

- Screen effect is much stronger by default, and now set with a slider
  (0 to 100%) under Data instead of four steps. As it goes up you get
  darker scanlines, darker curved corners, rounded screen edges, a stronger
  text glow, a faint red/blue colour fringe, a phosphor colour mask and a
  slow rolling band; near the top a light flicker joins in. 0 turns it off.
  The default is 60%.
- A rare opening: about one start in five, a slim slate floats up from
  below, hovers there gently bobbing with its lens glowing, then turns
  round to face you, lies landscape, boots and zooms into its screen.
  It has its own rising shimmer and swish sounds.
- Data now has **Replay intro** and **Rare intro** buttons, so you can see
  either opening whenever you like.
- The zoom into the screen now keeps to the screen's shape as it grows.
- Offline copy refreshed (service worker v55).

## v2.46 · 8 Nov 2026

- Tabs. A row of tabs sits at the top of the page, so you can keep several
  places open and flip between them. Each tab remembers its own page, the
  Pokémon, box or game you had open, your filters and searches, and how
  far down you'd scrolled.
  - **+** opens a new tab. Ctrl+click or middle-click a menu tile or a
    header button to open that page in a new tab. Middle-click a tab, or
    use its ×, to close it.
  - The padlock locks a tab to the place it's on. A locked tab always goes
    back to that place when you click it, shows ↩ if you wander off within
    it, can't be closed by accident, and is still there next time you open
    the app. Click the padlock again to unlock.
  - Keys (all work in the PC app; a web browser keeps some for itself):
    Ctrl+T new tab, Ctrl+W close, Ctrl+Tab and Ctrl+Shift+Tab next and
    previous, Ctrl+1 to Ctrl+9 jump to a tab.
- Screen effect: the app now looks like it's on a CRT screen, with fine
  scanlines, darker curved-glass corners and a soft glow on text. Choose
  Off, Subtle (the default), Medium or Strong under Data. Strong adds a
  faint flicker and a slow rolling band; neither plays with "reduce
  motion" switched on.
- Page transitions: changing page or tab plays a quick CRT blip, the
  screen snapping to a bright line and back. Turn it off under Data.
- Offline copy refreshed (service worker v54).

## v2.45 · 8 Nov 2026

- Fixed: in the editor the opening animation could play twice, because the
  editor sometimes loads the page's scripts a second time. The intro and
  the sound now only ever run once per page load.
- Offline copy refreshed (service worker v53).

## v2.44 · 8 Nov 2026

- Clasp sound: now a crisp, chunky double click ("chk-chk") — the latch
  letting go, then the clasp knocking against the body.
- Music: same original tune, now played on instrument-like sounds instead
  of 8-bit: a warm electric piano on the chords, vibraphone on the melody,
  a round plucked bass and soft brushed drums, with a little room reverb
  and a relaxed swing.
- Offline copy refreshed (service worker v52).

## v2.43 · 8 Nov 2026

- Sound. All original, made in the browser in a retro handheld style:
  - Opening: ticks as the lights come on, a metal snap and thunk for the
    clasp, a swish as the lid lifts, a power-on hum and blips with a
    "ready" chime as the screen boots, a ding when loading finishes and a
    whoosh into the menu.
  - Background music: a calm, cosy chiptune loop that plays behind every
    screen. The note button at the bottom right turns it on or off, and
    the choice is remembered on this device.
- The opening now waits, clasp glowing, for a click (or any key) before it
  opens, because browsers only allow sound after a click. Esc skips.
- The intro sounds follow the "Sound effects" setting.
- Offline copy refreshed (service worker v51).

## v2.42 · 8 Nov 2026

- Opening animation: a smaller camera lens sits beside the main lens, with
  a metal collar, dark glass, a coloured lens glint and a red record light
  that blinks on with the other lights.
- Offline copy refreshed (service worker v50).

## v2.41 · 8 Nov 2026

- Opening animation: the lens on the lid is now a raised glass dome, and
  it still lights up. A clasp on the front pops open before the lid lifts.
- The intro now announces each moment ('lights', 'clasp', 'lid', 'boot',
  'ready', 'menu', 'zoom', 'done') as a "pkintro" event, ready for sound
  effects to be added later.
- Offline copy refreshed (service worker v49).

## v2.40 · 8 Nov 2026

- New opening animation. A 3D handheld opens in your current colour
  scheme, its screen boots, shows a preview of the menu, and zooms in to
  the real menu. Click, tap or press any key to skip. With "reduce motion"
  on in your device settings it is a short fade instead.
- The colours for each scheme are listed in pokedex-intro.js. Update them
  there if you change a scheme or add a new one.
- Offline copy now includes pokedex-intro.js (service worker v48).

## v2.39 · 27 Oct 2026

- Ruby, Sapphire and Emerald encounters: added Gulpin (Route 110),
  Barboach (Routes 111 and 114, Meteor Falls), Corphish (Routes 102 and 117,
  Petalburg City), Relicanth (diving on Routes 124 and 126) and Corsola
  (Route 128). Emerald also gets Ditto in the Desert Underpass and
  Sudowoodo at the Battle Frontier. Swalot, Whiscash and Crawdaunt follow
  by evolution. Levels and rates for these are approximate.
- Fixed: the Pacifidlog Town trade gives Corsola, not Gorebyss.

## v2.38 · 27 Oct 2026

- Fixed: Azurill and Wynaut now count as obtainable in FireRed and
  LeafGreen. The Sea Incense and Lax Incense are in the Lost Cave on Five
  Island, so you can hatch both.

## v2.37 · 27 Oct 2026

- Game boxes: new "Include trade evolutions" checkbox, off by default. Tick
  it to count Pokémon like Alakazam, Machamp and Gengar, which need a trade
  with another player to evolve.
- Legends: Arceus always counts trade evolutions, because the Linking Cord
  evolves them without trading.

## v2.36 · 27 Oct 2026

- Game boxes: new "Include in-game trades" checkbox under "Only Pokémon
  obtainable in this game", on by default. Pokémon you get by trading with a
  character in the game now count, along with anything bred or evolved from
  them, such as Jynx and Smoochum in FireRed and LeafGreen. Untick it to
  leave them out.

## v2.35 · 27 Oct 2026

- Game boxes' "Only Pokémon obtainable in this game" now also leaves out:
  - Event-only places: Navel Rock and Birth Island (FireRed, LeafGreen,
    Emerald), Faraway Island and the Eon Ticket's Southern Island (Ruby,
    Sapphire, Emerald), Flower Paradise, Newmoon Island and the Hall of
    Origin (Diamond, Pearl, Platinum), Liberty Garden (Black, White).
  - Encounters that need an event Pokémon or item, such as HeartGold and
    SoulSilver's Sinjoh Ruins, and limited Tera Raid events.
  - Encounters that are really in-game trades.
  - Azurill and Wynaut in FireRed and LeafGreen, which have no incense.
- Breeding only counts from species that can lay eggs.
- Roaming Latios and Latias in Ruby, Sapphire and Emerald still count.
- Added missing legendary encounters: Giratina in Diamond and Pearl, the
  Regis in Platinum, roaming Tornadus and Thundurus in Black and White,
  Kubfu and the Max Lair legendaries in Sword and Shield, and Giratina and
  the Ramanas Park legendaries in Brilliant Diamond and Shining Pearl.

## v2.34 · 27 Oct 2026

- Fixed: Game boxes' "Only Pokémon obtainable in this game" counted
  Houndour, Houndoom and other species from FireRed and LeafGreen's Altering
  Cave. Those need a Mystery Gift event that was never released, so they no
  longer count.

## v2.33 · 27 Oct 2026

- Game boxes: new "Only Pokémon obtainable in this game" checkbox. It keeps
  species you can catch, receive or find in that game, plus anything you can
  evolve from them without trading or hatch from them where the game has
  breeding. Works with both regional and national order.
- New data file of evolution links, used to work that out.

## v2.32 · 11 Oct 2026

- Authorship marks: an invisible signature in the footer, an author tag in
  the page, a signature in the browser console and the offline file, and a
  hidden message when you tap the version number five times.

## v2.31 · 11 Oct 2026

- Encounters by location: caught Pokémon are now greyed out by default. A
  new picker next to the location lets you show them normally or hide them.
  The choice is remembered.

## v2.30 · 11 Oct 2026

- New catch sound: a rising energy zap and whoosh like a Poké Ball pulling
  a Pokémon in, a snap as it shuts, then a soft ding. Un-catching plays it
  in reverse.
- PC sounds: a crisp double blip on every button and picker, a boot-up
  when you open Home PC or Game boxes, a shut-down when you leave, and a
  three-step click when you change box.

## v2.29 · 11 Oct 2026

- Year in review: Favourite ball now only counts Pokémon you've actually
  got, and Longest hunts says so when none are logged yet.

## v2.28 · 11 Oct 2026

- Sound effects (Settings, off by default): original chiptune-style sounds
  for catching, un-catching, shinies, changing box, each +1 on a hunt, and
  milestones. Made by the app itself, so they work offline.
- Milestones: a celebration with a fanfare when a PC box fills up, every
  hundred catches, and when you log a shiny from hunt mode.
- Hunt mode: a full-screen shiny hunt view from any dex entry, with the
  shiny sprite, a huge +1 button, the odds, and "Found it" to log the catch.
  Space or Enter adds one, and the screen stays awake while it's open.
- Year in review (Guides section): catches and shinies this year, all-time
  totals, longest hunts, favourite ball, games finished and more. Catch
  dates are recorded from this version on.

## v2.27 · 11 Oct 2026

- Run dashboard (Guides section, Emerald by default): one game's progress,
  its Game boxes, the next places with something to catch, every wild
  species there still needing a Luxury Ball, and anything awaiting HOME.
- Three new guides: trade and special evolutions (44 Pokémon), moving
  Switch games to HOME, and where to get Hidden Abilities in each game.
- Encounters now say where each game's data comes from — PokéAPI, the
  original game tables, a copied game, or game knowledge.

## v2.26 · 11 Oct 2026

- Luxury theme reworked: black with gold text and highlights, and red for
  borders, dividers, hover tints and the app name badge. The header has a
  thin gold line along the top and a red band along the bottom.

## v2.25 · 11 Oct 2026

- Fixed: Daylight looked grey rather than white, because a dimming layer
  meant for the dark themes sat over the panels. Daylight now turns it off.

## v2.24 · 11 Oct 2026

- New colour schemes: Daylight (a light mode — near-white with black
  accents), Ultra (black with a yellow band), Dive (deep sea blue and cyan)
  and Friend (forest green with a red trim). Sprites stay crisp on Daylight.

## v2.23 · 11 Oct 2026

- Game box progress on the main menu: each game you've started in Game
  boxes shows how much of its regional dex you've ticked off, with a bar.
  Tap one to open that game's boxes.
- Scarlet and Violet DLC version exclusives are now marked: Gligar,
  Gliscor and Cramorant (Scarlet) and Aipom, Ambipom and Morpeko (Violet)
  in Kitakami; Alolan Vulpix and Cranidos lines (Scarlet) and Alolan
  Sandshrew and Shieldon lines (Violet) in Blueberry Academy.
- Phone layout tidy-up: wide fields and pickers no longer push past the
  edge of a narrow screen, and Nuzlocke encounter rows stack instead of
  squeezing five columns into a phone width.

## v2.22 · 11 Oct 2026

- The shiny marker buttons now read "Mark as no legal shiny yet" and "Mark
  as event / gift shiny" until you turn them on, so they no longer look
  like the app saying a form can't be shiny.

## v2.21 · 11 Oct 2026

- Shiny odds on the hunt counter. Pick the method you're using (full odds,
  Shiny Charm, Masuda, Poké Radar, SOS chains, Dynamax Adventures, Scarlet
  and Violet Sparkling Power and outbreaks) and it shows how far past the
  odds you are and the chance you'd have found it by now, with a bar.
  The method is saved with each form's count.

## v2.20 · 11 Oct 2026

- Brilliant Diamond and Shining Pearl now list all 100 TMs. The nine the
  remakes changed come from PokéAPI (including Work Up, Dazzling Gleam,
  Volt Switch, Scald and Nasty Plot), the rest of TM01–92 match Diamond and
  Pearl, and TM93–100 are the former HMs (Cut, Fly, Surf, Strength, Defog,
  Rock Smash, Waterfall, Rock Climb).

## v2.19 · 11 Oct 2026

- TMs, TRs and HMs for every game from Red and Blue to Legends: Z-A, in a
  new section at the top of Items. Pick a game and filter by number or move.
- Search everything from the main menu: Pokémon, moves, TMs, items and
  places, grouped, with each result opening the right page.
- Keyboard shortcuts: / jumps to search, ← and → step through the dex (or
  PC boxes), Esc goes back to the menu.
- Recently viewed: the last twelve dex entries you opened, on the menu.
- Print this box: prints the current PC box as a 6 × 5 checklist.

## v2.18 · 11 Oct 2026

- Fixed: the damage calculator showed 1 damage and a 154HKO against an
  immune target (a type immunity, Levitate, Flash Fire, the absorb abilities
  or Wonder Guard). It now shows 0 and "Can't damage".

## v2.17 · 11 Oct 2026

- Team builder: attack coverage. For each type, shows how many members hit
  it super effectively, and lists the types nothing hits super effectively
  and any type that resists every move.
- Damage calculator: an ability for each side (Adaptability, Huge Power,
  Technician, Pixilate and the other -ate abilities, Guts, Tinted Lens,
  Sniper, pinch abilities; Intimidate, Levitate and the absorb abilities,
  Multiscale, Filter, Thick Fat, Fur Coat, Wonder Guard and more), plus
  sandstorm, snow and the four terrains.
- Hall of Fame: mark any game as a Nuzlocke run, tick its rules, and log
  each encounter with its area, nickname and status. A running tally shows
  how many are alive, lost and missed.

## v2.16 · 11 Oct 2026

- Scarlet and Violet DLC encounters: nine Kitakami areas (Kitakami Road,
  Apple Hills, Reveler's Road, Kitakami Wilds, Timeless Woods, Oni Mountain,
  Fellhorn Gorge, Infernal Cauldron, Chilling Waterhead) and the four
  Blueberry Academy biomes.
- Each lists the species that place is known for. The region-wide Kitakami
  and Blueberry lists stay underneath, so every DLC species still shows up.

## v2.15 · 11 Oct 2026

- Scarlet and Violet encounters for the rest of the base game: East
  Province Areas One to Three, Tagtree Thicket, Glaseado Mountain, Dalizapa
  Passage, North Province Areas One to Three, Casseroya Lake and Area Zero
  (with all fourteen Paradox Pokémon, split by version).
- These lists come from game knowledge rather than a data source, so a few
  species may be missing or listed in a neighbouring area. No levels yet.

## v2.14 · 10 Oct 2026

- Scarlet and Violet encounters: West Province Areas One to Three and the
  Asado Desert. Area One and the desert include level ranges.
- Chien-Pao's shrine added to West Province Area One.
- Scarlet and Violet version exclusives are now marked in every area,
  including the South Province areas from the last update.

## v2.13 · 10 Oct 2026

- Scarlet and Violet encounters: South Province Areas One to Six, each with
  its own species list, in the order you reach them. Area Six's version
  exclusives are marked. Levels and rates aren't included yet.
- Fixed hand-written encounter entries being read in the wrong field order,
  which hid the Grand Underground, Hyperspace Lumiose and several gifts.

## v2.12 · 10 Oct 2026

- Bank checklist in Guides: everything caught but not yet in HOME, grouped by
  the game you caught it in, with its OT and a Moved button. Switch and GO
  catches are left out.
- New "Caught in" field on every dex entry, beside the OT, kept separately for
  normal and shiny.
- Encounters: the Grand Underground for Brilliant Diamond and Shining Pearl.
  Hand-written, so it lists which species appear there, not which hideaway.

## v2.11 · 10 Oct 2026

- Custom PC box sets. Build your own from: normal or shiny, one per species
  or every form, a required ball, generations, types, a game it's catchable
  in, and favourites only. They sit in the Box set picker alongside the
  standard sets and can be edited or deleted.
- The Luxury PC sets now use the same rule as the Guides page, so a slot
  only counts in any ball when no Luxury Ball is possible at all. Lapras,
  Ho-Oh, Ultra Beasts and the like now need an actual Luxury Ball.
- Fixed the Guides ticks never showing a Luxury Ball catch.
- Omega Ruby and Alpha Sapphire encounters filled out from the Ruby and
  Sapphire tables where PokéAPI had nothing.

## v2.10 · 10 Oct 2026

- Guides: whether a species can be in a Luxury Ball is now worked out from the
  encounter data. Static, roaming, overworld and raid encounters take any
  ball, so Ultra Beasts, Paradox Pokémon, the Treasures of Ruin, Ho-Oh, Lugia,
  the legendary beasts, Lapras, Snorlax and Chansey leave "No Luxury Ball
  possible". Happiny and Munchlax now show under breeding.
- The DS-only Luxury list includes species that were wrongly excluded before.

## v2.9 · 10 Oct 2026

- Guides: new "Luxury Ball by breeding" list. These are species that can't
  be caught in a Luxury Ball but can hatch in one from a Luxury Ball parent in
  their family, with the ball inheritance rules. Ditto never passes its ball.
- Those species are no longer counted under "No Luxury Ball possible", and
  the DS-only Luxury list drops anything breeding covers.
- Fixed the Guides page showing only the footer.
- Evolved species are no longer listed as DS-only when an earlier stage can be
  caught in a Luxury Ball in a newer game.

## v2.8 · 10 Oct 2026

- Guides: a live countdown (days, hours, minutes, seconds) to Pokémon Bank
  closing, and every section now opens and closes.
- New guide lists: DS-only in a set ball (Safari Zone, Great Marsh and
  Bug-Catching Contest catches, plus gifts only on DS); no Luxury Ball
  possible in any game, grouped by reason with your caught ticks; and
  shinies from European DS games.
- Shiny hunt counter on every form: count encounters, soft resets, eggs or
  raids with a +1 button. It's kept separately for each form.
- Egg groups regenerated from PokéAPI for all 1,025 species and the
  "not verified" note removed. Breeding is complete.

## v2.7 · 9 Oct 2026

- Encounters for Scarlet, Violet and Legends: Z-A. Built from each game's
  regional dexes, so they show which region to search, not exact areas or
  rates. Legendaries, gifts and Paldea version exclusives are marked.
- Egg moves for every breedable species (566), for every game from Gold and
  Silver to Scarlet and Violet. Breeding has a game picker to switch lists.
- First guide: Luxury Balls only in DS games. Lists the species you can only
  catch in a Luxury Ball on a DS game, where to find them, how to move them to
  HOME, and a countdown to Pokémon Bank closing on 26 February 2027.

## v2.6 · 9 Oct 2026

- Game boxes: with "Every form in this game" on, female forms now get their
  own slot in every game, including Ruby, Sapphire, Emerald, FireRed and
  LeafGreen, where males and females look the same.

## v2.5 · 28 Sep 2026

- Encounters for Legends: Arceus, by area, plus the legendaries, gifts and
  starters. Hand-written, so it shows which area to search rather than exact
  rates. Alphas and outbreaks aren't split out yet.

## v2.4 · 28 Sep 2026

- Encounters for Brilliant Diamond and Shining Pearl, based on the Diamond
  and Pearl tables (the remakes keep them almost unchanged). The Grand
  Underground isn't included yet.

## v2.3 · 28 Sep 2026

- Two new colour schemes based on Poké Balls: Luxury (black, gold trim and
  a red band under the header) and Cherish (deep crimson with a white
  brand badge).

## v2.2 · 28 Sep 2026

- Item images are now included in images/items/ — 608 of the 640 items,
  plus every Poké Ball. Save sprites for offline picks them up on the phone.
- The 32 items with no image online yet (mostly Scarlet and Violet) are
  listed in images/items/MISSING.txt with the filename to use.

## v2.1 · 28 Sep 2026

- Fixed: Black/White, Black 2/White 2, Sun/Moon, Ultra Sun/Ultra Moon and
  Let's Go showed no encounters. The Gen III–IV data file was replacing the
  newer ones if it finished loading last.
- Encounters now pick up any data file that finishes loading after the
  view opens, instead of needing a reload.

## v2.0 · 28 Sep 2026

- Encounters now cover Black, White, Black 2, White 2, X, Y, Omega Ruby,
  Alpha Sapphire, Sun, Moon, Ultra Sun, Ultra Moon, Let's Go Pikachu and
  Eevee, and Sword and Shield with both DLCs — alongside Gens III–IV.
  About 1,500 location lines, generated from PokéAPI.
- New encounter methods: dark grass, rustling grass, dust clouds, ripples,
  Hidden Grottoes, hordes, SOS calls, Island Scan, flowers and rough
  terrain, overworld and wanderer spawns, and Max Raid dens with their
  star ranges. Seasons, weather, weekdays and Friend Safari slots show as
  conditions.
- For a species not catchable in the chosen game, it now lists which
  tracked games do have it.
- Game boxes added for Let's Go, Legends: Arceus and Legends: Z-A.
- Omega Ruby and Alpha Sapphire encounter data is incomplete in the source,
  so those two are thinner than the rest.

## v1.6 · 28 Sep 2026

- Hall of Fame team slots on the Trainer Card now have a form picker under
  any Pokémon with more than one form (regional forms, Female, Unown letters
  and so on). The sprite follows the chosen form.
- Changing a slot's species resets its form to the default.

## v1.5 · 27 Sep 2026

- Hall of Fame badges now load from images/badges/, named
  <game>-<number>.png (e.g. rb-1.png is the Boulder Badge). Dragging an
  image onto a badge still works and takes priority.
- Badge images are included in Save sprites for offline.

## v1.4 · 27 Sep 2026

- New OT checker at the top of Events. Enter an OT name and/or TID, and
  optionally a species, to see which known distributions match. Each result
  says whether both agree, or only the OT or only the TID.
- On a caught Pokémon, the Original Trainer picker now also lists the known
  event OTs for that species. When the recorded OT and TID match a
  distribution, an "Event" line under the field names it.
- Save sprites for offline now saves item and Poké Ball images too.
- build-sprites.js has a Phase 4 that downloads item images into items/.

## v1.3 · 26 Sep 2026

- Alpha is now recorded for each form separately, so a male Alpha no longer
  marks the female as Alpha too. It's also separate for normal and shiny:
  in the shiny dex, the Alpha button marks the shiny.
- New Browse filter: Any Alpha status / Alpha only / Alpha still needed.
  "Still needed" lists every form that can be an Alpha but isn't marked yet.
- Alphas you'd already marked stay on the normal base form.

## v1.2 · 26 Sep 2026

- The Original Trainer field now appears when a Pokémon is caught as either
  normal or shiny, not only normal. So you can set an OT on a shiny-only catch.
- Only the side you've caught gets a Normal or Shiny button.

## v1.1 · 26 Sep 2026

- Original Trainer can now be set separately for the normal and shiny
  version of each Pokémon and form. Use the Normal / Shiny buttons beside
  the Original Trainer label; a tick shows which sides already have an OT.
  OTs recorded before this update stay on the normal side.

## v1.0 · 26 Sep 2026

The first numbered version. Everything built before today is included in it:
Pokédex, Browse, Events and Encounters; Home PC, Game boxes and Breeding;
Team, Compare, Damage and Moves; Items, Guides and Trainer Card; offline
sprites and the installable phone app.

Latest fixes in this version:
- Original Trainer picker now tells apart two OTs with the same name, using
  the TID as well. It also shows the note beside each entry.
- Saved sprites load quickly offline after the first launch, and the saved
  sprite list corrects itself if the phone clears some of them.
