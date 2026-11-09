// Where to get a species that cannot be caught in the game you are playing.
// Consulted when a Pokémon has no encounter in the selected game.
//
// ROUTES holds explicit notes; anything without one falls back to the
// generation rules in transferNote() inside the app.
window.TRANSFER_ROUTES = {
  // Kanto starters and other FireRed / LeafGreen natives worth naming
  1:'FireRed or LeafGreen — gift from Professor Oak in Pallet Town',
  4:'FireRed or LeafGreen — gift from Professor Oak in Pallet Town',
  7:'FireRed or LeafGreen — gift from Professor Oak in Pallet Town',
  25:'Catchable in the Hoenn Safari Zone, or Viridian Forest in FireRed and LeafGreen',
  106:'FireRed or LeafGreen — prize at the Fighting Dojo in Saffron City',
  107:'FireRed or LeafGreen — prize at the Fighting Dojo in Saffron City',
  113:'FireRed or LeafGreen — Route 13 to 15, or a Safari Zone reward',
  122:'FireRed or LeafGreen — traded for an Abra in Saffron City',
  131:'FireRed or LeafGreen — bought at the Silph Co. gift counter, or Colosseum',
  133:'FireRed or LeafGreen — gift in Celadon City, or Colosseum as a Shadow Pokémon',
  137:'FireRed or LeafGreen — gift on Silph Co. 7F',
  138:'FireRed or LeafGreen — Helix Fossil from Mt. Moon',
  140:'FireRed or LeafGreen — Dome Fossil from Mt. Moon',
  142:'FireRed or LeafGreen — Old Amber from Pewter Museum',
  143:'FireRed or LeafGreen — asleep on Route 12 and Route 16',
  144:'FireRed or LeafGreen — Seafoam Islands basement',
  145:'FireRed or LeafGreen — Power Plant',
  146:'FireRed or LeafGreen — Mt. Ember summit',
  150:'FireRed or LeafGreen — Cerulean Cave after the Elite Four',
  151:'Emerald — Faraway Island, with the Old Sea Map event item',
  152:'Emerald — gift from Professor Birch for completing the Hoenn dex',
  155:'Emerald — gift from Professor Birch for completing the Hoenn dex',
  158:'Emerald — gift from Professor Birch for completing the Hoenn dex',
  172:'Breed a Pikachu or Raichu holding no Everstone',
  173:'Breed a Clefairy or Clefable',
  174:'Breed a Jigglypuff or Wigglytuff',
  175:'Breed a Togetic, or hatch the egg given in FireRed and LeafGreen',
  196:'FireRed or LeafGreen — evolve Eevee with a Sun Shard, or Colosseum',
  197:'FireRed or LeafGreen — evolve Eevee with a Moon Shard, or Colosseum',
  201:'FireRed or LeafGreen — the Ruins of Alph equivalent in the Tanoby Chambers',
  206:'FireRed or LeafGreen — Route 14 and Route 15',
  236:'Breed a Hitmonlee, Hitmonchan or Hitmontop',
  238:'Breed a Jynx',
  239:'Breed an Electabuzz',
  240:'Breed a Magmar',
  243:'Pokémon Colosseum — Shadow Raikou from Mt. Battle',
  244:'Pokémon Colosseum — Shadow Entei from Mt. Battle',
  245:'Pokémon Colosseum — Shadow Suicune from Mt. Battle',
  249:'Emerald — Navel Rock, with the Mystic Ticket event item',
  250:'Emerald — Navel Rock, with the Mystic Ticket event item',
  251:'Event distribution only — no in-game encounter in Generation III',
  298:'Breed a Marill or Azumarill',
  360:'Emerald — egg from the woman in the Lavaridge Pokémon Centre, or Mirage Island',
  377:'Desert Ruins, after reading the Sealed Chamber braille',
  378:'Island Cave, after reading the Sealed Chamber braille',
  379:'Ancient Tomb, after reading the Sealed Chamber braille',
  380:'Southern Island with the Eon Ticket, or roaming Hoenn in Sapphire',
  381:'Southern Island with the Eon Ticket, or roaming Hoenn in Ruby',
  385:'Event distribution only — the Wishmaker and Channel Jirachi giveaways',
  386:'Emerald — Birth Island, with the Aurora Ticket event item'
};

// Species obtainable in Pokémon Colosseum or XD as Shadow Pokémon, which are
// often the only Generation III route to them.
window.COLOSSEUM_ONLY = [
  123,125,126,128,153,154,156,157,159,160,161,162,163,164,166,168,169,170,171,
  176,177,178,179,180,181,185,187,188,189,190,191,192,193,194,195,198,199,200,
  202,203,204,205,207,208,209,210,211,213,214,215,216,217,218,219,220,221,222,
  223,224,225,226,227,228,229,230,231,232,233,234,235,237,241,242,246,247,248
];
