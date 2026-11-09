// Pokémon and forms that can never legitimately be caught in a Luxury Ball.
// Used by the Luxury living-form sets: a slot listed here counts as filled
// under whatever ball it CAN be in, rather than being stuck waiting on a
// Luxury Ball that does not exist.
//
// NUMS  — whole species (starters, fossils, babies, gift/trade-only, mythicals).
// FORMS — specific form keys "num:form-slug" where only that form is exempt.
// The user can also exempt any slot by hand; that override lives in the save.
window.LUX_EXEMPT_NUMS = [].concat(
  // Starters — gift only, always in a standard Poké Ball
  [1,2,3,4,5,6,7,8,9, 152,153,154,155,156,157,158,159,160,
   252,253,254,255,256,257,258,259,260, 387,388,389,390,391,392,393,394,395,
   495,496,497,498,499,500,501,502,503, 650,651,652,653,654,655,656,657,658,
   722,723,724,725,726,727,728,729,730, 810,811,812,813,814,815,816,817,818,
   906,907,908,909,910,911,912,913,914],
  // Fossil revivals — always revived into a Poké Ball
  [138,139,140,141,142, 345,346,347,348, 408,409,410,411, 564,565,566,567,
   696,697,698,699, 880,881,882,883],
  // Babies and egg-only species — hatch in the ball the parent was caught in
  [172,173,174,175, 236, 238,239,240, 298, 360, 406, 433,438,439,440,446,447,458,
   848],
  // Gift, in-game trade or static-only species
  [131,133, 137,233,474, 106,107, 113,242, 143, 151, 250,249,243,244,245,
   251, 385,386, 489,490,491,492,493, 494, 647,648,649, 719,720,721,
   801,802, 807,808,809, 893, 898, 1017, 1024,1025],
  // Ultra Beasts — Beast Ball is the intended ball
  [793,794,795,796,797,798,799,803,804,805,806],
  // Paradox Pokémon and treasures of ruin — static encounters in Poké Balls
  [984,985,986,987,988,989,990,991,992,993,994,995,1005,1006,
   1001,1002,1003,1004,1007,1008,1009,1010,1020,1021,1022,1023]
);
// Form-specific exemptions — the species is catchable, this form is not.
window.LUX_EXEMPT_FORMS = [
  '25:cosplay', '25:original-cap', '25:hoenn-cap', '25:sinnoh-cap', '25:unova-cap',
  '25:kalos-cap', '25:alola-cap', '25:partner-cap', '25:world-cap',
  '172:spiky-eared', '493:legend-plate', '646:black', '646:white',
  '800:dusk-mane', '800:dawn-wings', '800:ultra', '890:eternamax',
  '892:gigantamax', '898:ice-rider', '898:shadow-rider', '1017:teal-mask',
  '1017:wellspring-mask', '1017:hearthflame-mask', '1017:cornerstone-mask'
];

// The same exemptions grouped by reason, for the Guides section.
window.LUX_EXEMPT_GROUPS = [{"label":"Starters","why":"gift only, always in a standard Poké Ball","nums":[1,2,3,4,5,6,7,8,9,152,153,154,155,156,157,158,159,160,252,253,254,255,256,257,258,259,260,387,388,389,390,391,392,393,394,395,495,496,497,498,499,500,501,502,503,650,651,652,653,654,655,656,657,658,722,723,724,725,726,727,728,729,730,810,811,812,813,814,815,816,817,818,906,907,908,909,910,911,912,913,914]},{"label":"Fossil revivals","why":"always revived into a Poké Ball","nums":[138,139,140,141,142,345,346,347,348,408,409,410,411,564,565,566,567,696,697,698,699,880,881,882,883]},{"label":"Babies and egg-only species","why":"hatch in the ball the parent was caught in","nums":[172,173,174,175,236,238,239,240,298,360,406,433,438,439,440,446,447,458,848]},{"label":"Gift, in-game trade or static-only species","why":"","nums":[131,133,137,233,474,106,107,113,242,143,151,250,249,243,244,245,251,385,386,489,490,491,492,493,494,647,648,649,719,720,721,801,802,807,808,809,893,898,1017,1024,1025]},{"label":"Ultra Beasts","why":"Beast Ball is the intended ball","nums":[793,794,795,796,797,798,799,803,804,805,806]},{"label":"Paradox Pokémon and treasures of ruin","why":"static encounters in Poké Balls","nums":[984,985,986,987,988,989,990,991,992,993,994,995,1005,1006,1001,1002,1003,1004,1007,1008,1009,1010,1020,1021,1022,1023]}];
