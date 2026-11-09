// Battle items — things a Pokémon can hold in a fight.
// name|category|effect
window.ITEMS_RAW = `Leftovers|Recovery|Restores a little HP at the end of every turn.
Black Sludge|Recovery|Restores HP each turn for Poison types; damages everything else.
Sitrus Berry|Berry|Restores a quarter of maximum HP when HP drops below half.
Oran Berry|Berry|Restores 10 HP when HP drops below half.
Figy Berry|Berry|Restores a third of HP below half, but confuses a Pokémon that dislikes spicy food.
Lum Berry|Berry|Cures any status condition or confusion once.
Chesto Berry|Berry|Wakes the holder from sleep once.
Pecha Berry|Berry|Cures poison once.
Cheri Berry|Berry|Cures paralysis once.
Rawst Berry|Berry|Cures a burn once.
Aspear Berry|Berry|Thaws the holder once.
Persim Berry|Berry|Cures confusion once.
Leppa Berry|Berry|Restores 10 PP to a move that has run out.
Salac Berry|Berry|Raises Speed when HP drops below a quarter.
Liechi Berry|Berry|Raises Attack when HP drops below a quarter.
Petaya Berry|Berry|Raises Sp. Attack when HP drops below a quarter.
Apicot Berry|Berry|Raises Sp. Defence when HP drops below a quarter.
Ganlon Berry|Berry|Raises Defence when HP drops below a quarter.
Starf Berry|Berry|Sharply raises a random stat when HP drops below a quarter.
Custap Berry|Berry|Lets the holder move first once, when HP is low.
Occa Berry|Resist berry|Halves the damage from one super-effective Fire move.
Passho Berry|Resist berry|Halves the damage from one super-effective Water move.
Wacan Berry|Resist berry|Halves the damage from one super-effective Electric move.
Rindo Berry|Resist berry|Halves the damage from one super-effective Grass move.
Yache Berry|Resist berry|Halves the damage from one super-effective Ice move.
Chople Berry|Resist berry|Halves the damage from one super-effective Fighting move.
Kebia Berry|Resist berry|Halves the damage from one super-effective Poison move.
Shuca Berry|Resist berry|Halves the damage from one super-effective Ground move.
Coba Berry|Resist berry|Halves the damage from one super-effective Flying move.
Payapa Berry|Resist berry|Halves the damage from one super-effective Psychic move.
Tanga Berry|Resist berry|Halves the damage from one super-effective Bug move.
Charti Berry|Resist berry|Halves the damage from one super-effective Rock move.
Kasib Berry|Resist berry|Halves the damage from one super-effective Ghost move.
Haban Berry|Resist berry|Halves the damage from one super-effective Dragon move.
Colbur Berry|Resist berry|Halves the damage from one super-effective Dark move.
Babiri Berry|Resist berry|Halves the damage from one super-effective Steel move.
Roseli Berry|Resist berry|Halves the damage from one super-effective Fairy move.
Chilan Berry|Resist berry|Halves the damage from one Normal-type move.
Choice Band|Choice|Raises Attack by half, but only one move can be used.
Choice Specs|Choice|Raises Sp. Attack by half, but only one move can be used.
Choice Scarf|Choice|Raises Speed by half, but only one move can be used.
Life Orb|Power|Raises damage dealt by 30%, costing a tenth of maximum HP per attack.
Expert Belt|Power|Raises the power of super-effective moves by 20%.
Muscle Band|Power|Raises the power of physical moves slightly.
Wise Glasses|Power|Raises the power of special moves slightly.
Silk Scarf|Type boost|Raises the power of Normal moves by 20%.
Charcoal|Type boost|Raises the power of Fire moves by 20%.
Mystic Water|Type boost|Raises the power of Water moves by 20%.
Magnet|Type boost|Raises the power of Electric moves by 20%.
Miracle Seed|Type boost|Raises the power of Grass moves by 20%.
Never-Melt Ice|Type boost|Raises the power of Ice moves by 20%.
Black Belt|Type boost|Raises the power of Fighting moves by 20%.
Poison Barb|Type boost|Raises the power of Poison moves by 20%.
Soft Sand|Type boost|Raises the power of Ground moves by 20%.
Sharp Beak|Type boost|Raises the power of Flying moves by 20%.
Twisted Spoon|Type boost|Raises the power of Psychic moves by 20%.
Silver Powder|Type boost|Raises the power of Bug moves by 20%.
Hard Stone|Type boost|Raises the power of Rock moves by 20%.
Spell Tag|Type boost|Raises the power of Ghost moves by 20%.
Dragon Fang|Type boost|Raises the power of Dragon moves by 20%.
Black Glasses|Type boost|Raises the power of Dark moves by 20%.
Metal Coat|Type boost|Raises the power of Steel moves by 20%.
Fairy Feather|Type boost|Raises the power of Fairy moves by 20%.
Focus Sash|Survival|Lets the holder survive one otherwise fatal hit at full HP.
Focus Band|Survival|Sometimes lets the holder hang on with 1 HP.
Assault Vest|Defensive|Raises Sp. Defence by half, but status moves cannot be used.
Eviolite|Defensive|Raises Defence and Sp. Defence by half for a Pokémon that can still evolve.
Rocky Helmet|Defensive|Damages any attacker that makes contact.
Heavy-Duty Boots|Utility|The holder is unaffected by entry hazards.
Air Balloon|Utility|The holder floats until hit, avoiding Ground moves.
Safety Goggles|Utility|Protects from powder moves and weather damage.
Protective Pads|Utility|Blocks the effects of contact with the target.
Shell Bell|Recovery|Restores a little HP whenever the holder deals damage.
Big Root|Recovery|Increases the HP restored by draining moves.
Weakness Policy|Reactive|Sharply raises Attack and Sp. Attack when hit super-effectively.
Throat Spray|Reactive|Raises Sp. Attack after the holder uses a sound move.
Blunder Policy|Reactive|Sharply raises Speed when the holder misses.
Absorb Bulb|Reactive|Raises Sp. Attack when hit by a Water move.
Cell Battery|Reactive|Raises Attack when hit by an Electric move.
Luminous Moss|Reactive|Raises Sp. Defence when hit by a Water move.
Snowball|Reactive|Raises Attack when hit by an Ice move.
Eject Button|Switching|Switches the holder out when it is hit.
Eject Pack|Switching|Switches the holder out when one of its stats is lowered.
Red Card|Switching|Drags the attacker out when the holder is hit.
Shed Shell|Switching|The holder can always switch out.
Quick Claw|Chance|Sometimes lets the holder move first.
King's Rock|Chance|Attacks may make the target flinch.
Razor Fang|Chance|Attacks may make the target flinch.
Razor Claw|Chance|Raises the holder's critical-hit rate.
Scope Lens|Chance|Raises the holder's critical-hit rate.
Bright Powder|Chance|Slightly lowers the accuracy of attacks against the holder.
Lax Incense|Chance|Slightly lowers the accuracy of attacks against the holder.
Wide Lens|Accuracy|Raises the accuracy of the holder's moves by 10%.
Zoom Lens|Accuracy|Raises accuracy when the holder moves after the target.
Metronome|Power|Raises the power of a move used repeatedly.
Toxic Orb|Status|Badly poisons the holder at the end of the turn.
Flame Orb|Status|Burns the holder at the end of the turn.
Light Clay|Screens|Reflect and Light Screen last eight turns instead of five.
Damp Rock|Weather|Rain lasts eight turns instead of five.
Heat Rock|Weather|Harsh sunlight lasts eight turns instead of five.
Smooth Rock|Weather|Sandstorm lasts eight turns instead of five.
Icy Rock|Weather|Hail or snow lasts eight turns instead of five.
Terrain Extender|Terrain|Terrain lasts eight turns instead of five.
Mental Herb|Herb|Cures infatuation, taunt and similar effects once.
Power Herb|Herb|Skips the charging turn of a two-turn move once.
White Herb|Herb|Restores lowered stats once.
Iron Ball|Handicap|Halves Speed and grounds the holder.
Lagging Tail|Handicap|The holder always moves last.
Sticky Barb|Handicap|Damages the holder each turn and may pass to an attacker.
Ring Target|Handicap|Removes the holder's type immunities.
Float Stone|Utility|Halves the holder's weight.
Binding Band|Utility|Increases the damage from binding moves.
Grip Claw|Utility|Binding moves last for seven turns.
Leek|Signature|Greatly raises the critical-hit rate of Farfetch'd and Sirfetch'd.
Thick Club|Signature|Doubles the Attack of Cubone and Marowak.
Light Ball|Signature|Doubles Pikachu's Attack and Sp. Attack.
Lucky Punch|Signature|Greatly raises Chansey's critical-hit rate.
Metal Powder|Signature|Raises Ditto's Defence while untransformed.
Quick Powder|Signature|Raises Ditto's Speed while untransformed.
Soul Dew|Signature|Boosts the Dragon and Psychic moves of Latias and Latios.
Deep Sea Tooth|Signature|Doubles Clamperl's Sp. Attack.
Deep Sea Scale|Signature|Doubles Clamperl's Sp. Defence.
Venusaurite|Mega Stone|Mega Evolves Venusaur into Mega Venusaur.
Charizardite X|Mega Stone|Mega Evolves Charizard into Mega Charizard X.
Charizardite Y|Mega Stone|Mega Evolves Charizard into Mega Charizard Y.
Blastoisinite|Mega Stone|Mega Evolves Blastoise into Mega Blastoise.
Beedrillite|Mega Stone|Mega Evolves Beedrill into Mega Beedrill.
Pidgeotite|Mega Stone|Mega Evolves Pidgeot into Mega Pidgeot.
Alakazite|Mega Stone|Mega Evolves Alakazam into Mega Alakazam.
Slowbronite|Mega Stone|Mega Evolves Slowbro into Mega Slowbro.
Gengarite|Mega Stone|Mega Evolves Gengar into Mega Gengar.
Kangaskhanite|Mega Stone|Mega Evolves Kangaskhan into Mega Kangaskhan.
Pinsirite|Mega Stone|Mega Evolves Pinsir into Mega Pinsir.
Gyaradosite|Mega Stone|Mega Evolves Gyarados into Mega Gyarados.
Aerodactylite|Mega Stone|Mega Evolves Aerodactyl into Mega Aerodactyl.
Mewtwonite X|Mega Stone|Mega Evolves Mewtwo into Mega Mewtwo X.
Mewtwonite Y|Mega Stone|Mega Evolves Mewtwo into Mega Mewtwo Y.
Ampharosite|Mega Stone|Mega Evolves Ampharos into Mega Ampharos.
Steelixite|Mega Stone|Mega Evolves Steelix into Mega Steelix.
Scizorite|Mega Stone|Mega Evolves Scizor into Mega Scizor.
Heracronite|Mega Stone|Mega Evolves Heracross into Mega Heracross.
Houndoominite|Mega Stone|Mega Evolves Houndoom into Mega Houndoom.
Tyranitarite|Mega Stone|Mega Evolves Tyranitar into Mega Tyranitar.
Sceptilite|Mega Stone|Mega Evolves Sceptile into Mega Sceptile.
Blazikenite|Mega Stone|Mega Evolves Blaziken into Mega Blaziken.
Swampertite|Mega Stone|Mega Evolves Swampert into Mega Swampert.
Gardevoirite|Mega Stone|Mega Evolves Gardevoir into Mega Gardevoir.
Sablenite|Mega Stone|Mega Evolves Sableye into Mega Sableye.
Mawilite|Mega Stone|Mega Evolves Mawile into Mega Mawile.
Aggronite|Mega Stone|Mega Evolves Aggron into Mega Aggron.
Medichamite|Mega Stone|Mega Evolves Medicham into Mega Medicham.
Manectite|Mega Stone|Mega Evolves Manectric into Mega Manectric.
Sharpedonite|Mega Stone|Mega Evolves Sharpedo into Mega Sharpedo.
Cameruptite|Mega Stone|Mega Evolves Camerupt into Mega Camerupt.
Altarianite|Mega Stone|Mega Evolves Altaria into Mega Altaria.
Banettite|Mega Stone|Mega Evolves Banette into Mega Banette.
Absolite|Mega Stone|Mega Evolves Absol into Mega Absol.
Glalitite|Mega Stone|Mega Evolves Glalie into Mega Glalie.
Salamencite|Mega Stone|Mega Evolves Salamence into Mega Salamence.
Metagrossite|Mega Stone|Mega Evolves Metagross into Mega Metagross.
Latiasite|Mega Stone|Mega Evolves Latias into Mega Latias.
Latiosite|Mega Stone|Mega Evolves Latios into Mega Latios.
Lopunnite|Mega Stone|Mega Evolves Lopunny into Mega Lopunny.
Garchompite|Mega Stone|Mega Evolves Garchomp into Mega Garchomp.
Lucarionite|Mega Stone|Mega Evolves Lucario into Mega Lucario.
Abomasite|Mega Stone|Mega Evolves Abomasnow into Mega Abomasnow.
Galladite|Mega Stone|Mega Evolves Gallade into Mega Gallade.
Audinite|Mega Stone|Mega Evolves Audino into Mega Audino.
Diancite|Mega Stone|Mega Evolves Diancie into Mega Diancie.
Normalium Z|Z-Crystal|Upgrades a Normal move into the full-power Z-Move for that type.
Firium Z|Z-Crystal|Upgrades a Fire move into the full-power Z-Move for that type.
Waterium Z|Z-Crystal|Upgrades a Water move into the full-power Z-Move for that type.
Electrium Z|Z-Crystal|Upgrades a Electric move into the full-power Z-Move for that type.
Grassium Z|Z-Crystal|Upgrades a Grass move into the full-power Z-Move for that type.
Icium Z|Z-Crystal|Upgrades a Ice move into the full-power Z-Move for that type.
Fightinium Z|Z-Crystal|Upgrades a Fighting move into the full-power Z-Move for that type.
Poisonium Z|Z-Crystal|Upgrades a Poison move into the full-power Z-Move for that type.
Groundium Z|Z-Crystal|Upgrades a Ground move into the full-power Z-Move for that type.
Flyinium Z|Z-Crystal|Upgrades a Flying move into the full-power Z-Move for that type.
Psychium Z|Z-Crystal|Upgrades a Psychic move into the full-power Z-Move for that type.
Buginium Z|Z-Crystal|Upgrades a Bug move into the full-power Z-Move for that type.
Rockium Z|Z-Crystal|Upgrades a Rock move into the full-power Z-Move for that type.
Ghostium Z|Z-Crystal|Upgrades a Ghost move into the full-power Z-Move for that type.
Dragonium Z|Z-Crystal|Upgrades a Dragon move into the full-power Z-Move for that type.
Darkinium Z|Z-Crystal|Upgrades a Dark move into the full-power Z-Move for that type.
Steelium Z|Z-Crystal|Upgrades a Steel move into the full-power Z-Move for that type.
Fairium Z|Z-Crystal|Upgrades a Fairy move into the full-power Z-Move for that type.
Aloraichium Z|Z-Crystal|Lets Alolan Raichu turn Thunderbolt into Stoked Sparksurfer.
Decidium Z|Z-Crystal|Lets Decidueye turn Spirit Shackle into Sinister Arrow Raid.
Incinium Z|Z-Crystal|Lets Incineroar turn Darkest Lariat into Malicious Moonsault.
Primarium Z|Z-Crystal|Lets Primarina turn Sparkling Aria into Oceanic Operetta.
Eevium Z|Z-Crystal|Lets Eevee turn Last Resort into Extreme Evoboost.
Snorlium Z|Z-Crystal|Lets Snorlax turn Giga Impact into Pulverizing Pancake.
Mewnium Z|Z-Crystal|Lets Mew turn Psychic into Genesis Supernova.
Pikanium Z|Z-Crystal|Lets Pikachu turn Volt Tackle into Catastropika.
Pikashunium Z|Z-Crystal|Lets Cap Pikachu turn Thunderbolt into 10,000,000 Volt Thunderbolt.
Tapunium Z|Z-Crystal|Lets the guardian deities turn Nature’s Madness into Guardian of Alola.
Marshadium Z|Z-Crystal|Lets Marshadow turn Spectral Thief into Soul-Stealing 7-Star Strike.
Solganium Z|Z-Crystal|Lets Solgaleo or Dusk Mane Necrozma turn Sunsteel Strike into Searing Sunraze Smash.
Lunalium Z|Z-Crystal|Lets Lunala or Dawn Wings Necrozma turn Moongeist Beam into Menacing Moonraze Maelstrom.
Mimikium Z|Z-Crystal|Lets Mimikyu turn Play Rough into Let’s Snuggle Forever.
Kommonium Z|Z-Crystal|Lets Kommo-o turn Clanging Scales into Clangorous Soulblaze.
Lycanium Z|Z-Crystal|Lets Lycanroc turn Stone Edge into Splintered Stormshards.
Ultranecrozium Z|Z-Crystal|Lets Ultra Necrozma turn Photon Geyser into Light That Burns the Sky.
Teal Mask|Ogerpon Mask|Ogerpon’s default mask. Grass type, with the Defiant ability.
Wellspring Mask|Ogerpon Mask|Turns Ogerpon Grass/Water and grants Water Absorb.
Hearthflame Mask|Ogerpon Mask|Turns Ogerpon Grass/Fire and grants Mold Breaker.
Cornerstone Mask|Ogerpon Mask|Turns Ogerpon Grass/Rock and grants Sturdy.
Red Orb|Primal|Triggers Groudon's Primal Reversion.
Blue Orb|Primal|Triggers Kyogre's Primal Reversion.`;

// Mega Stone -> the form it triggers. Keyed by item name.
window.MEGA_STONES = {
  "Venusaurite":{num:3,form:"Mega"},
  "Charizardite X":{num:6,form:"Mega X"},
  "Charizardite Y":{num:6,form:"Mega Y"},
  "Blastoisinite":{num:9,form:"Mega"},
  "Beedrillite":{num:15,form:"Mega"},
  "Pidgeotite":{num:18,form:"Mega"},
  "Alakazite":{num:65,form:"Mega"},
  "Slowbronite":{num:80,form:"Mega"},
  "Gengarite":{num:94,form:"Mega"},
  "Kangaskhanite":{num:115,form:"Mega"},
  "Pinsirite":{num:127,form:"Mega"},
  "Gyaradosite":{num:130,form:"Mega"},
  "Aerodactylite":{num:142,form:"Mega"},
  "Mewtwonite X":{num:150,form:"Mega X"},
  "Mewtwonite Y":{num:150,form:"Mega Y"},
  "Ampharosite":{num:181,form:"Mega"},
  "Steelixite":{num:208,form:"Mega"},
  "Scizorite":{num:212,form:"Mega"},
  "Heracronite":{num:214,form:"Mega"},
  "Houndoominite":{num:229,form:"Mega"},
  "Tyranitarite":{num:248,form:"Mega"},
  "Sceptilite":{num:254,form:"Mega"},
  "Blazikenite":{num:257,form:"Mega"},
  "Swampertite":{num:260,form:"Mega"},
  "Gardevoirite":{num:282,form:"Mega"},
  "Sablenite":{num:302,form:"Mega"},
  "Mawilite":{num:303,form:"Mega"},
  "Aggronite":{num:306,form:"Mega"},
  "Medichamite":{num:308,form:"Mega"},
  "Manectite":{num:310,form:"Mega"},
  "Sharpedonite":{num:319,form:"Mega"},
  "Cameruptite":{num:323,form:"Mega"},
  "Altarianite":{num:334,form:"Mega"},
  "Banettite":{num:354,form:"Mega"},
  "Absolite":{num:359,form:"Mega"},
  "Glalitite":{num:362,form:"Mega"},
  "Salamencite":{num:373,form:"Mega"},
  "Metagrossite":{num:376,form:"Mega"},
  "Latiasite":{num:380,form:"Mega"},
  "Latiosite":{num:381,form:"Mega"},
  "Lopunnite":{num:428,form:"Mega"},
  "Garchompite":{num:445,form:"Mega"},
  "Lucarionite":{num:448,form:"Mega"},
  "Abomasite":{num:460,form:"Mega"},
  "Galladite":{num:475,form:"Mega"},
  "Audinite":{num:531,form:"Mega"},
  "Diancite":{num:719,form:"Mega"}
};
// Ogerpon mask -> form label.
window.OGERPON_MASKS = {'Teal Mask':'Teal Mask','Wellspring Mask':'Wellspring Mask','Hearthflame Mask':'Hearthflame Mask','Cornerstone Mask':'Cornerstone Mask'};
