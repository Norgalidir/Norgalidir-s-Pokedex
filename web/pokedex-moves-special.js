// Z-Moves, Max Moves and G-Max Moves. Same pipe format as the other move files,
// with an 8th field marking the kind — these are battle-only mechanics, never
// selectable in a moveset, so the team builder filters them out.
// name|type|category|power|accuracy|pp|effect|kind
if(!window._MSPECIAL){ window._MSPECIAL = 1;
window.MOVES_RAW = (window.MOVES_RAW||'') + `
Breakneck Blitz|Normal|Physical|—|—|1|Normal-type Z-Move. Power scales with the base move; Normalium Z required.|Z
All-Out Pummeling|Fighting|Physical|—|—|1|Fighting-type Z-Move. Power scales with the base move; Fightinium Z required.|Z
Supersonic Skystrike|Flying|Physical|—|—|1|Flying-type Z-Move. Power scales with the base move; Flyinium Z required.|Z
Acid Downpour|Poison|Physical|—|—|1|Poison-type Z-Move. Power scales with the base move; Poisonium Z required.|Z
Tectonic Rage|Ground|Physical|—|—|1|Ground-type Z-Move. Power scales with the base move; Groundium Z required.|Z
Continental Crush|Rock|Physical|—|—|1|Rock-type Z-Move. Power scales with the base move; Rockium Z required.|Z
Savage Spin-Out|Bug|Physical|—|—|1|Bug-type Z-Move. Power scales with the base move; Buginium Z required.|Z
Never-Ending Nightmare|Ghost|Physical|—|—|1|Ghost-type Z-Move. Power scales with the base move; Ghostium Z required.|Z
Corkscrew Crash|Steel|Physical|—|—|1|Steel-type Z-Move. Power scales with the base move; Steelium Z required.|Z
Inferno Overdrive|Fire|Special|—|—|1|Fire-type Z-Move. Power scales with the base move; Firium Z required.|Z
Hydro Vortex|Water|Special|—|—|1|Water-type Z-Move. Power scales with the base move; Waterium Z required.|Z
Bloom Doom|Grass|Special|—|—|1|Grass-type Z-Move. Power scales with the base move; Grassium Z required.|Z
Gigavolt Havoc|Electric|Special|—|—|1|Electric-type Z-Move. Power scales with the base move; Electrium Z required.|Z
Shattered Psyche|Psychic|Special|—|—|1|Psychic-type Z-Move. Power scales with the base move; Psychium Z required.|Z
Subzero Slammer|Ice|Special|—|—|1|Ice-type Z-Move. Power scales with the base move; Icium Z required.|Z
Devastating Drake|Dragon|Special|—|—|1|Dragon-type Z-Move. Power scales with the base move; Dragonium Z required.|Z
Black Hole Eclipse|Dark|Special|—|—|1|Dark-type Z-Move. Power scales with the base move; Darkinium Z required.|Z
Twinkle Tackle|Fairy|Special|—|—|1|Fairy-type Z-Move. Power scales with the base move; Fairium Z required.|Z
Catastropika|Electric|Physical|210|—|1|Pikachu's exclusive Z-Move, from Volt Tackle with Pikanium Z.|Z
10,000,000 Volt Thunderbolt|Electric|Special|195|—|1|Cap Pikachu's exclusive Z-Move, from Thunderbolt with Pikashunium Z. High critical-hit rate.|Z
Stoked Sparksurfer|Electric|Special|175|—|1|Alolan Raichu's exclusive Z-Move, from an Electric move with Aloraichium Z. Paralyses the target.|Z
Extreme Evoboost|Normal|Status|—|—|1|Eevee's exclusive Z-Move, from Last Resort with Eevium Z. Raises every stat sharply.|Z
Pulverizing Pancake|Normal|Physical|210|—|1|Snorlax's exclusive Z-Move, from Giga Impact with Snorlium Z.|Z
Genesis Supernova|Psychic|Special|185|—|1|Mew's exclusive Z-Move, from a Psychic move with Mewnium Z. Sets Psychic Terrain.|Z
Sinister Arrow Raid|Ghost|Physical|180|—|1|Decidueye's exclusive Z-Move, from Spirit Shackle with Decidium Z.|Z
Malicious Moonsault|Dark|Physical|180|—|1|Incineroar's exclusive Z-Move, from Darkest Lariat with Incinium Z.|Z
Oceanic Operetta|Water|Special|195|—|1|Primarina's exclusive Z-Move, from Sparkling Aria with Primarium Z.|Z
Splintered Stormshards|Rock|Physical|190|—|1|Lycanroc's exclusive Z-Move, from Stone Edge with Lycanium Z. Removes terrain.|Z
Let's Snuggle Forever|Fairy|Physical|190|—|1|Mimikyu's exclusive Z-Move, from Play Rough with Mimikium Z.|Z
Clangorous Soulblaze|Dragon|Special|185|—|1|Kommo-o's exclusive Z-Move, from Clanging Scales with Kommonium Z. Raises every stat.|Z
Guardian of Alola|Fairy|Special|—|—|1|The Tapu's exclusive Z-Move, from Nature's Madness with Tapunium Z. Cuts the target to a quarter of its current HP.|Z
Searing Sunraze Smash|Steel|Physical|200|—|1|Solgaleo's exclusive Z-Move, from Sunsteel Strike with Solganium Z. Ignores the target's Ability.|Z
Menacing Moonraze Maelstrom|Ghost|Special|200|—|1|Lunala's exclusive Z-Move, from Moongeist Beam with Lunalium Z. Ignores the target's Ability.|Z
Light That Burns the Sky|Psychic|Special|200|—|1|Ultra Necrozma's exclusive Z-Move, from Photon Geyser with Ultranecrozium Z. Uses the higher attacking stat and ignores Abilities.|Z
Soul-Stealing 7-Star Strike|Ghost|Physical|195|—|1|Marshadow's exclusive Z-Move, from Spectral Thief with Marshadium Z.|Z
Max Strike|Normal|Physical|—|—|1|Dynamax Normal move. Lowers the Speed of both opponents.|Max
Max Knuckle|Fighting|Physical|—|—|1|Dynamax Fighting move. Raises the Attack of the user's side.|Max
Max Airstream|Flying|Physical|—|—|1|Dynamax Flying move. Raises the Speed of the user's side.|Max
Max Ooze|Poison|Physical|—|—|1|Dynamax Poison move. Raises the Sp. Attack of the user's side.|Max
Max Quake|Ground|Physical|—|—|1|Dynamax Ground move. Raises the Sp. Defence of the user's side.|Max
Max Rockfall|Rock|Physical|—|—|1|Dynamax Rock move. Whips up a sandstorm.|Max
Max Flutterby|Bug|Physical|—|—|1|Dynamax Bug move. Lowers the Sp. Attack of both opponents.|Max
Max Phantasm|Ghost|Physical|—|—|1|Dynamax Ghost move. Lowers the Defence of both opponents.|Max
Max Steelspike|Steel|Physical|—|—|1|Dynamax Steel move. Raises the Defence of the user's side.|Max
Max Flare|Fire|Special|—|—|1|Dynamax Fire move. Turns the sunlight harsh.|Max
Max Geyser|Water|Special|—|—|1|Dynamax Water move. Summons heavy rain.|Max
Max Overgrowth|Grass|Special|—|—|1|Dynamax Grass move. Sets Grassy Terrain.|Max
Max Lightning|Electric|Special|—|—|1|Dynamax Electric move. Sets Electric Terrain.|Max
Max Mindstorm|Psychic|Special|—|—|1|Dynamax Psychic move. Sets Psychic Terrain.|Max
Max Hailstorm|Ice|Special|—|—|1|Dynamax Ice move. Summons a hailstorm or snow.|Max
Max Wyrmwind|Dragon|Special|—|—|1|Dynamax Dragon move. Lowers the Attack of both opponents.|Max
Max Darkness|Dark|Special|—|—|1|Dynamax Dark move. Lowers the Sp. Defence of both opponents.|Max
Max Starfall|Fairy|Special|—|—|1|Dynamax Fairy move. Sets Misty Terrain.|Max
Max Guard|Normal|Status|—|—|1|Dynamax status move. Protects the user from almost every move, including most Max Moves.|Max
G-Max Vine Lash|Grass|Physical|—|—|1|Gigantamax Venusaur. Damages non-Grass opponents for four turns.|G-Max
G-Max Wildfire|Fire|Special|—|—|1|Gigantamax Charizard. Damages non-Fire opponents for four turns.|G-Max
G-Max Cannonade|Water|Special|—|—|1|Gigantamax Blastoise. Damages non-Water opponents for four turns.|G-Max
G-Max Befuddle|Bug|Physical|—|—|1|Gigantamax Butterfree. Poisons, paralyses or puts both opponents to sleep.|G-Max
G-Max Volt Crash|Electric|Physical|—|—|1|Gigantamax Pikachu. Paralyses both opponents.|G-Max
G-Max Gold Rush|Normal|Physical|—|—|1|Gigantamax Meowth. Confuses both opponents and earns extra prize money.|G-Max
G-Max Chi Strike|Fighting|Physical|—|—|1|Gigantamax Machamp. Raises the critical-hit rate of the user's side.|G-Max
G-Max Terror|Ghost|Physical|—|—|1|Gigantamax Gengar. Stops opponents from switching out.|G-Max
G-Max Foam Burst|Water|Special|—|—|1|Gigantamax Kingler. Harshly lowers the Speed of both opponents.|G-Max
G-Max Resonance|Ice|Special|—|—|1|Gigantamax Lapras. Sets Aurora Veil for the user's side.|G-Max
G-Max Cuddle|Normal|Physical|—|—|1|Gigantamax Eevee. Infatuates both opponents.|G-Max
G-Max Replenish|Normal|Physical|—|—|1|Gigantamax Snorlax. Restores berries the user's side has eaten.|G-Max
G-Max Malodor|Poison|Physical|—|—|1|Gigantamax Garbodor. Poisons both opponents.|G-Max
G-Max Meltdown|Steel|Physical|—|—|1|Gigantamax Melmetal. Stops opponents using the same move twice in a row.|G-Max
G-Max Drum Solo|Grass|Physical|—|—|1|Gigantamax Rillaboom. Fixed 160 power; ignores the target's Ability.|G-Max
G-Max Fireball|Fire|Physical|—|—|1|Gigantamax Cinderace. Fixed 160 power; ignores the target's Ability.|G-Max
G-Max Hydrosnipe|Water|Special|—|—|1|Gigantamax Inteleon. Fixed 160 power; ignores the target's Ability.|G-Max
G-Max Wind Rage|Flying|Physical|—|—|1|Gigantamax Corviknight. Clears hazards, screens and terrain on the target's side.|G-Max
G-Max Gravitas|Psychic|Special|—|—|1|Gigantamax Orbeetle. Sets Gravity for five turns.|G-Max
G-Max Stonesurge|Water|Physical|—|—|1|Gigantamax Drednaw. Sets Stealth Rock on the target's side.|G-Max
G-Max Volcalith|Rock|Physical|—|—|1|Gigantamax Coalossal. Damages non-Rock opponents for four turns.|G-Max
G-Max Tartness|Grass|Physical|—|—|1|Gigantamax Flapple. Lowers the evasiveness of both opponents.|G-Max
G-Max Sweetness|Grass|Physical|—|—|1|Gigantamax Appletun. Cures the status conditions of the user's side.|G-Max
G-Max Sandblast|Ground|Physical|—|—|1|Gigantamax Sandaconda. Traps both opponents in a sandstorm for four or five turns.|G-Max
G-Max Stun Shock|Electric|Special|—|—|1|Gigantamax Toxtricity. Poisons or paralyses both opponents.|G-Max
G-Max Centiferno|Fire|Special|—|—|1|Gigantamax Centiskorch. Traps both opponents in fire for four or five turns.|G-Max
G-Max Smite|Fairy|Special|—|—|1|Gigantamax Hatterene. Confuses both opponents.|G-Max
G-Max Snooze|Dark|Physical|—|—|1|Gigantamax Grimmsnarl. Makes the target drowsy, so it may fall asleep next turn.|G-Max
G-Max Finale|Fairy|Special|—|—|1|Gigantamax Alcremie. Restores the HP of the user's side.|G-Max
G-Max Steelsurge|Steel|Physical|—|—|1|Gigantamax Copperajah. Scatters sharp spikes on the target's side.|G-Max
G-Max Depletion|Dragon|Physical|—|—|1|Gigantamax Duraludon. Reduces the PP of the target's last-used move.|G-Max
G-Max One Blow|Dark|Physical|—|—|1|Gigantamax Single Strike Urshifu. Bypasses Max Guard.|G-Max
G-Max Rapid Flow|Water|Physical|—|—|1|Gigantamax Rapid Strike Urshifu. Bypasses Max Guard.|G-Max
`;
}