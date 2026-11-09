// Rough walking order per game, used by the planner and the location list.
// Each name matches itself and every sub-area that starts with it, so
// "Mt. Moon" also covers "Mt. Moon 1F", "Mt. Moon B2F" and so on.
(function(){
  const kanto = `Pallet Town,Route 1,Viridian City,Route 22,Route 2,Viridian Forest,Pewter City,
Route 3,Mt. Moon,Route 4,Cerulean City,Route 24,Route 25,Route 5,Kanto Underground Path,Route 6,
Vermilion City,S.S. Anne,Route 11,Diglett's Cave,Route 9,Route 10,Rock Tunnel,Kanto Power Plant,
Route 8,Route 7,Celadon City,Saffron City,Pokémon Tower,Route 12,Route 13,Route 14,Route 15,
Route 16,Route 17,Route 18,Fuchsia City,Safari Zone,Sea Route 19,Sea Route 20,Seafoam Islands,
Sea Route 21,Cinnabar Island,Pokémon Mansion,One Island,Kindle Road,Treasure Beach,Mt. Ember,
Cape Brink,Three Isle Port,Bond Bridge,Berry Forest,Route 23,Victory Road,Four Island,
Icefall Cave,Five Island,Five Isle Meadow,Memorial Pillar,Water Labyrinth,Resort Gorgeous,
Lost Cave,Water Path,Ruin Valley,Pattern Bush,Green Path,Outcast Island,Altering Cave,
Canyon Entrance,Sevault Canyon,Tanoby Ruins,Monean Chamber,Liptoo Chamber,Weepth Chamber,
Dilford Chamber,Scufib Chamber,Rixy Chamber,Viapos Chamber,Trainer Tower,Cerulean Cave,
Route 26,Route 27,Route 28,Birth Island,Navel Rock,Roaming Kanto`;
  const johto = `New Bark Town,Route 29,Cherrygrove City,Route 30,Route 31,Violet City,Dark Cave,
Sprout Tower,Route 32,Ruins of Alph,Union Cave,Route 33,Slowpoke Well,Azalea Town,Ilex Forest,
Route 34,Goldenrod City,Route 35,National Park,Route 36,Route 37,Ecruteak City,Burned Tower,
Bell Tower,Route 38,Route 39,Olivine City,Sea Route 40,Sea Route 41,Cianwood City,Whirl Islands,
Route 47,Route 48,Safari Zone Gate,Johto Safari Zone,Route 42,Mt. Mortar,Route 43,Lake of Rage,
Team Rocket HQ,Route 44,Ice Path,Blackthorn City,Dragon's Den,Route 45,Route 46,Route 27,
Tohjo Falls,Route 26,Embedded Tower,Sinjoh Ruins,Mt. Silver,Roaming Johto`;
  const sinnoh = `Twinleaf Town,Route 201,Lake Verity,Route 202,Route 203,Oreburgh Gate,
Oreburgh City,Oreburgh Mine,Route 204,Ravaged Path,Floaroma Meadow,Valley Windworks,Route 205,
Eterna Forest,Eterna City,Route 211,Mt. Coronet,Route 206,Wayward Cave,Route 207,Route 208,
Hearthome City,Route 209,Lost Tower,Solaceon Ruins,Route 210,Celestic Town,Route 215,
Veilstone City,Route 214,Maniac Tunnel,Ruin Maniac Cave,Valor Lakefront,Route 213,Pastoria City,
Great Marsh,Route 212,Trophy Garden,Old Chateau,Fuego Ironworks,Route 218,Canalave City,
Iron Island,Lake Valor,Lake Acuity,Route 216,Route 217,Acuity Lakefront,Snowpoint City,
Snowpoint Temple,Spear Pillar,Route 219,Sea Route 220,Route 221,Route 222,Sunyshore City,
Sea Route 223,Victory Road,Pokémon League,Route 224,Newmoon Island,Route 225,Sea Route 226,
Route 227,Stark Mountain,Route 228,Route 229,Sea Route 230,Resort Area,Sendoff Spring,
Turnback Cave,Distortion World,Flower Paradise,Hall of Origin,Roaming Sinnoh,Grand Underground`;
  const bw = `Nuvema Town,Route 1,Accumula Town,Route 2,Striaton City,Dreamyard,Route 3,Wellspring Cave,
Nacrene City,Pinwheel Forest,Skyarrow Bridge,Castelia City,Route 4,Desert Resort,Relic Castle,Nimbasa City,
Route 5,Driftveil Drawbridge,Driftveil City,Cold Storage,Route 6,Chargestone Cave,Mistralton City,Route 7,
Celestial Tower,Twist Mountain,Icirrus City,Dragonspiral Tower,Relic Passage,Route 8,Moor of Icirrus,
Tubeline Bridge,Route 9,Opelucid City,Route 10,Victory Road,N's Castle,Route 11,Village Bridge,Route 12,
Lacunosa Town,Route 13,Giant Chasm,Undella Town,Undella Bay,Route 14,Abundant Shrine,Black City,White Forest,
Route 15,Marvelous Bridge,Route 16,Lostlorn Forest,Route 17,Route 18,P2 Laboratory,Challenger's Cave,Trial Chamber,Guidance Chamber`;
  const b2w2 = `Aspertia City,Route 19,Floccesy Town,Route 20,Floccesy Ranch,Virbank City,Virbank Complex,
Castelia City,Castelia Sewers,Route 4,Desert Resort,Relic Castle,Nimbasa City,Route 16,Lostlorn Forest,Route 5,
Driftveil Drawbridge,Driftveil City,Relic Passage,Clay Tunnel,Route 6,Mistralton Cave,Chargestone Cave,
Mistralton City,Route 7,Celestial Tower,Lentimas Town,Reversal Mountain,Strange House,Undella Town,Undella Bay,
Route 13,Lacunosa Town,Route 12,Village Bridge,Route 11,Opelucid City,Route 9,Humilau City,Route 22,Route 21,
Seaside Cave,Route 23,Victory Road,Giant Chasm,Route 8,Moor of Icirrus,Icirrus City,Dragonspiral Tower,
Twist Mountain,Route 14,Abundant Shrine,Route 15,Marvelous Bridge,Route 18,P2 Laboratory,Nature Sanctuary,
Underground Ruins,Rocky Mountain Room,Glacier Room,Iron Room,Route 1,Route 2,Route 3,Striaton City,Dreamyard,
Wellspring Cave,Pinwheel Forest,Nuvema Town,Accumula Town,Nacrene City`;
  const kalosO = `Vaniville Town,Aquacorde Town,Route 2,Santalune Forest,Route 3,Santalune City,Route 22,Route 4,
Lumiose City,Route 5,Camphrier Town,Route 7,Route 6,Parfum Palace,Connecting Cave,Route 8,Ambrette Town,Route 9,
Glittering Cave,Cyllage City,Route 10,Geosenge Town,Route 11,Reflection Cave,Shalour City,Tower of Mastery,
Route 12,Azure Bay,Coumarine City,Route 13,Route 14,Laverre City,Route 15,Lost Hotel,Route 16,Dendemille Town,
Frost Cavern,Route 17,Anistar City,Route 18,Couriway Town,Terminus Cave,Route 19,Snowbelle City,Route 20,
Pokémon Village,Route 21,Victory Road,Unknown Dungeon,Sea Spirit's Den,Team Flare Secret HQ,Friend Safari,Kalos`;
  const alolaO = `Iki Town,Route 1,Hau'oli City,Route 2,Hau'oli Cemetery,Verdant Cavern,Route 3,Melemele Meadow,
Seaward Cave,Kala'e Bay,Ten Carat Hill,Melemele Sea,Heahea City,Heahea Beach,Route 4,Paniola Town,Paniola Ranch,
Route 5,Brooklet Hill,Route 6,Route 7,Wela Volcano Park,Route 8,Lush Jungle,Diglett's Tunnel,Route 9,
Konikoni City,Memorial Hill,Akala Outskirts,Ruins of Life,Hano Beach,Royal Avenue,Dividing Peak Tunnel,
Malie City,Malie Garden,Route 10,Mount Hokulani,Route 11,Route 12,Blush Mountain,Secluded Shore,Route 13,
Tapu Village,Haina Desert,Route 14,Route 15,Route 16,Ula'ula Beach,Ula'ula Meadow,Route 17,Team Rocket's Castle,
Ruins of Abundance,Seafolk Village,Poni Wilds,Ancient Poni Path,Poni Breaker Coast,Exeggutor Island,
Vast Poni Canyon,Altar of the Sunne,Altar of the Moone,Lake of the Sunne,Lake of the Moone,Mount Lanakila,
Resolution Cave,Poni Grove,Poni Plains,Poni Coast,Poni Gauntlet,Poni Meadow,Ruins of Hope,Ruins of Conflict,
Aether Paradise,Ultra Megalopolis,Ultra Space,Ultra Space Wilds,Poké Pelago,Alola Berry Fields`;
  const galarO = `Postwick,Slumbering Weald,Route 1,Wedgehurst,Route 2,Rolling Fields,Dappled Grove,
Watchtower Ruins,East Lake Axewell,West Lake Axewell,Axew's Eye,South Lake Miloch,Giant's Seat,
North Lake Miloch,Motostoke Riverbank,Bridge Field,Stony Wilderness,Dusty Bowl,Giant's Mirror,
Hammerlocke Hills,Giant's Cap,Lake of Outrage,Motostoke,Route 3,Galar Mine,Route 4,Turffield,Route 5,Hulbury,
Galar Mine No. 2,Stow-on-Side,Glimwood Tangle,Ballonlea,Route 6,Hammerlocke,Route 7,Route 8,Spikemuth,Route 9,
Circhester,Route 10,Wyndon,Energy Plant,Battle Tower,Meetup Spot,Max Dens`;
  window.ENC_ORDER = Object.assign(window.ENC_ORDER || {}, {
    paldea: 'Mesagoza,South Province Area One,South Province Area Two,South Province Area Four,South Province Area Three,South Province Area Five,South Province Area Six,West Province Area One,Asado Desert,West Province Area Two,West Province Area Three,East Province Area One,East Province Area Two,East Province Area Three,Tagtree Thicket,Glaseado Mountain,Dalizapa Passage,North Province Area One,North Province Area Two,North Province Area Three,Casseroya Lake,Area Zero,Paldea,Kitakami Road,Apple Hills,Reveler\'s Road,Kitakami Wilds,Timeless Woods,Oni Mountain,Fellhorn Gorge,Infernal Cauldron,Chilling Waterhead,Savanna Biome,Coastal Biome,Canyon Biome,Polar Biome,Kitakami,Blueberry Academy Terarium',
    za: 'Lumiose City,Lumiose City Wild Zones,Hyperspace Lumiose',
    hisui: 'Jubilife Village,Obsidian Fieldlands,Crimson Mirelands,Cobalt Coastlands,Coronet Highlands,Alabaster Icelands',
    bw: bw, b2w2: b2w2, kalos: kalosO, alola: alolaO, galar: galarO,
    hoenn: window.HOENN_ORDER || '',
    frlg: kanto,
    hgss: johto + ',' + kanto,
    sinnoh: sinnoh
  });
})();
