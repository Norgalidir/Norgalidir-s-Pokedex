// Gen 1 National Dex data. Format per line:
// num|name|category|types|hp,atk,def,spa,spd,spe|height(m)|weight(kg)|abilities|evolvesTo|note
// evolvesTo entries: "num:method", multiple separated by ";"
window.POKEDEX_RAW = (window.POKEDEX_RAW||"") + `
1|Bulbasaur|Seed|Grass,Poison|45,49,49,65,65,45|0.7|6.9|Overgrow, Chlorophyll*|2:Lv 16|Carries a plant bulb on its back that grows by drawing energy from sunlight.
2|Ivysaur|Seed|Grass,Poison|60,62,63,80,80,60|1.0|13.0|Overgrow, Chlorophyll*|3:Lv 32|The bulb has swollen into a bud; its legs thicken to carry the weight.
3|Venusaur|Seed|Grass,Poison|80,82,83,100,100,80|2.0|100.0|Overgrow, Chlorophyll*||A large flower opens on its back and releases a soothing scent.
4|Charmander|Lizard|Fire|39,52,43,60,50,65|0.6|8.5|Blaze, Solar Power*|5:Lv 16|The flame on its tail tip shows its mood and health.
5|Charmeleon|Flame|Fire|58,64,58,80,65,80|1.1|19.0|Blaze, Solar Power*|6:Lv 36|Hot-tempered; the tail flame burns white when it is agitated.
6|Charizard|Flame|Fire,Flying|78,84,78,109,85,100|1.7|90.5|Blaze, Solar Power*||Flies in search of strong opponents and breathes fire hot enough to melt rock.
7|Squirtle|Tiny Turtle|Water|44,48,65,50,64,43|0.5|9.0|Torrent, Rain Dish*|8:Lv 16|Withdraws into its shell and sprays water from its mouth with precision.
8|Wartortle|Turtle|Water|59,63,80,65,80,58|1.0|22.5|Torrent, Rain Dish*|9:Lv 36|Its furry tail is a mark of age and a rudder in the water.
9|Blastoise|Shellfish|Water|79,83,100,85,105,78|1.6|85.5|Torrent, Rain Dish*||Water cannons in its shell fire jets accurate at long range.
10|Caterpie|Worm|Bug|45,30,35,20,20,45|0.3|2.9|Shield Dust, Run Away*|11:Lv 7|Releases a foul odour from the antenna on its head to repel predators.
11|Metapod|Cocoon|Bug|50,20,55,25,25,30|0.7|9.9|Shed Skin|12:Lv 10|The shell is hard, but the body inside stays soft and vulnerable.
12|Butterfree|Butterfly|Bug,Flying|60,45,50,90,80,70|1.1|32.0|Compound Eyes, Tinted Lens*||Scatters poisonous scales; its wings repel water in the rain.
13|Weedle|Hairy Bug|Bug,Poison|40,35,30,20,20,50|0.3|3.2|Shield Dust, Run Away*|14:Lv 7|The barb on its head carries a sharp poison.
14|Kakuna|Cocoon|Bug,Poison|45,25,50,25,25,35|0.6|10.0|Shed Skin|15:Lv 10|Barely moves, but inside the shell its body is rebuilding entirely.
15|Beedrill|Poison Bee|Bug,Poison|65,90,40,45,80,75|1.0|29.5|Swarm, Sniper*||Attacks in swarms with the three poison stingers on its limbs and tail.
16|Pidgey|Tiny Bird|Normal,Flying|40,45,40,35,35,56|0.3|1.8|Keen Eye, Tangled Feet, Big Pecks*|17:Lv 18|Kicks up sand to blind attackers rather than fight them.
17|Pidgeotto|Bird|Normal,Flying|63,60,55,50,50,71|1.1|30.0|Keen Eye, Tangled Feet, Big Pecks*|18:Lv 36|Patrols a wide territory and drives out intruders on sight.
18|Pidgeot|Bird|Normal,Flying|83,80,75,70,70,101|1.5|39.5|Keen Eye, Tangled Feet, Big Pecks*||Flies at near sonic speed; its glossy crest is used in courtship.
19|Rattata|Mouse|Normal|30,56,35,25,35,72|0.3|3.5|Run Away, Guts, Hustle*|20:Lv 20|Its incisors never stop growing, so it gnaws constantly.
20|Raticate|Mouse|Normal|55,81,60,50,70,97|0.7|18.5|Run Away, Guts, Hustle*||Strong swimmer; the whiskers help it keep balance.
21|Spearow|Tiny Bird|Normal,Flying|40,60,30,31,31,70|0.3|2.0|Keen Eye, Sniper*|22:Lv 20|Loud and short-tempered, it flaps hard rather than glides.
22|Fearow|Beak|Normal,Flying|65,90,65,61,61,100|1.2|38.0|Keen Eye, Sniper*||The long neck and beak let it pluck prey from soil or water.
23|Ekans|Snake|Poison|35,60,44,40,54,55|2.0|6.9|Intimidate, Shed Skin, Unnerve*|24:Lv 22|Silent mover; it senses prey through vibrations in the ground.
24|Arbok|Cobra|Poison|60,95,69,65,79,80|3.5|65.0|Intimidate, Shed Skin, Unnerve*||The pattern on its hood frightens opponents into freezing.
25|Pikachu|Mouse|Electric|35,55,40,50,50,90|0.4|6.0|Static, Lightning Rod*|26:Thunder Stone|Stores electricity in its cheek pouches and releases it when startled.
26|Raichu|Mouse|Electric|60,90,55,90,80,110|0.8|30.0|Static, Lightning Rod*||Discharges through its tail, which it plants in the ground to earth itself.
27|Sandshrew|Mouse|Ground|50,75,85,20,30,40|0.6|12.0|Sand Veil, Sand Rush*|28:Lv 22|Rolls into a ball to shield its soft belly.
28|Sandslash|Mouse|Ground|75,100,110,45,55,65|1.0|29.5|Sand Veil, Sand Rush*||The hardened spines on its back are shed and regrown.
29|Nidoran F|Poison Pin|Poison|55,47,52,40,40,41|0.4|7.0|Poison Point, Rivalry, Hustle*|30:Lv 16|Small barbs secrete venom; it prefers to avoid a fight.
30|Nidorina|Poison Pin|Poison|70,62,67,55,55,56|0.8|20.0|Poison Point, Rivalry, Hustle*|31:Moon Stone|Retracts its barbs around its young to avoid injuring them.
31|Nidoqueen|Drill|Poison,Ground|90,92,87,75,85,76|1.3|60.0|Poison Point, Rivalry, Sheer Force*||Hard overlapping scales make it a natural defender of the nest.
32|Nidoran M|Poison Pin|Poison|46,57,40,40,40,50|0.5|9.0|Poison Point, Rivalry, Hustle*|33:Lv 16|Large ears swivel independently to track sound.
33|Nidorino|Poison Pin|Poison|61,72,57,55,55,65|0.9|19.5|Poison Point, Rivalry, Hustle*|34:Moon Stone|The horn on its head is harder than diamond.
34|Nidoking|Drill|Poison,Ground|81,102,77,85,75,85|1.4|62.0|Poison Point, Rivalry, Sheer Force*||Swings its thick tail with enough force to snap a tree trunk.
35|Clefairy|Fairy|Fairy|70,45,48,60,65,35|0.6|7.5|Cute Charm, Magic Guard, Friend Guard*|36:Moon Stone|Rarely seen; said to gather where moonlight collects.
36|Clefable|Fairy|Fairy|95,70,73,95,90,60|1.3|40.0|Cute Charm, Magic Guard, Unaware*||Its hearing is sharp enough to catch a pin dropping a field away.
37|Vulpix|Fox|Fire|38,41,40,50,65,65|0.6|9.9|Flash Fire, Drought*|38:Fire Stone|Born with one tail that splits as it grows.
38|Ninetales|Fox|Fire|73,76,75,81,100,100|1.1|19.9|Flash Fire, Drought*||Long-lived and intelligent; it is said to understand human speech.
39|Jigglypuff|Balloon|Normal,Fairy|115,45,20,45,25,20|0.5|5.5|Cute Charm, Competitive, Friend Guard*|40:Moon Stone|Sings at a wavelength that lulls listeners to sleep.
40|Wigglytuff|Balloon|Normal,Fairy|140,70,45,85,50,45|1.0|12.0|Cute Charm, Competitive, Frisk*||Inflates itself by inhaling; its fur is famously fine.
41|Zubat|Bat|Poison,Flying|40,45,35,30,40,55|0.8|7.5|Inner Focus, Infiltrator*|42:Lv 22|Eyeless; it navigates entirely by ultrasonic waves.
42|Golbat|Bat|Poison,Flying|75,80,70,65,75,90|1.6|55.0|Inner Focus, Infiltrator*||Drinks blood until it is too heavy to fly.
43|Oddish|Weed|Grass,Poison|45,50,55,75,65,30|0.5|5.4|Chlorophyll, Run Away*|44:Lv 21|Buries itself by day and walks on its roots at night.
44|Gloom|Weed|Grass,Poison|60,65,70,85,75,40|0.8|8.6|Chlorophyll, Stench*|45:Leaf Stone|The nectar it drools smells foul but is prized as a perfume base.
45|Vileplume|Flower|Grass,Poison|75,80,85,110,90,50|1.2|18.6|Chlorophyll, Effect Spore*||Has the largest petals in the world, heavy with allergenic pollen.
46|Paras|Mushroom|Bug,Grass|35,70,55,45,55,25|0.3|5.4|Effect Spore, Dry Skin, Damp*|47:Lv 24|The mushrooms on its back are parasites that direct the host.
47|Parasect|Mushroom|Bug,Grass|60,95,80,60,80,30|1.0|29.5|Effect Spore, Dry Skin, Damp*||The fungus has taken over completely; the bug is little more than a vehicle.
48|Venonat|Insect|Bug,Poison|60,55,50,40,55,45|1.0|30.0|Compound Eyes, Tinted Lens, Run Away*|49:Lv 31|Its compound eyes see in the dark, and the hairs sense movement.
49|Venomoth|Poison Moth|Bug,Poison|70,65,60,90,75,90|1.5|12.5|Shield Dust, Tinted Lens, Wonder Skin*||Wing dust clings to skin; the colour warns of its toxicity.
50|Diglett|Mole|Ground|10,55,25,35,45,95|0.2|0.8|Sand Veil, Arena Trap, Sand Force*|51:Lv 26|Lives underground and loosens soil as it tunnels.
51|Dugtrio|Mole|Ground|35,100,50,50,70,120|0.7|33.3|Sand Veil, Arena Trap, Sand Force*||Three Diglett working as one; they dig faster than any machine.
52|Meowth|Scratch Cat|Normal|40,45,35,40,40,90|0.4|4.2|Pickup, Technician, Unnerve*|53:Lv 28|Drawn to round shiny objects, which it collects obsessively.
53|Persian|Classy Cat|Normal|65,70,60,65,65,115|1.0|32.0|Limber, Technician, Unnerve*||Proud and quick to temper despite its elegant appearance.
54|Psyduck|Duck|Water|50,52,48,65,50,55|0.8|19.6|Damp, Cloud Nine, Swift Swim*|55:Lv 33|A constant headache triggers bursts of psychic power it cannot recall.
55|Golduck|Duck|Water|80,82,78,95,80,85|1.7|76.6|Damp, Cloud Nine, Swift Swim*||A powerful swimmer; the gem on its brow glows when it concentrates.
56|Mankey|Pig Monkey|Fighting|40,80,35,35,45,70|0.5|28.0|Vital Spirit, Anger Point, Defiant*|57:Lv 28|Furious over nothing at all, and quick to bring friends into a fight.
57|Primeape|Pig Monkey|Fighting|65,105,60,60,70,95|1.0|32.0|Vital Spirit, Anger Point, Defiant*||Once enraged it will chase its target until it collapses.
58|Growlithe|Puppy|Fire|55,70,45,70,50,60|0.7|19.0|Intimidate, Flash Fire, Justified*|59:Fire Stone|Fiercely loyal; it remembers scents for life.
59|Arcanine|Legendary|Fire|90,110,80,100,80,95|1.9|155.0|Intimidate, Flash Fire, Justified*||Said to run ten thousand miles in a day and a night.
60|Poliwag|Tadpole|Water|40,50,40,40,40,90|0.6|12.4|Water Absorb, Damp, Swift Swim*|61:Lv 25|The spiral on its belly is its visible, still-forming insides.
61|Poliwhirl|Tadpole|Water|65,65,65,50,50,90|1.0|20.0|Water Absorb, Damp, Swift Swim*|62:Water Stone;186:Trade w/ King's Rock|Its skin secretes a slippery fluid that makes it hard to hold.
62|Poliwrath|Tadpole|Water,Fighting|90,95,95,70,90,70|1.3|54.0|Water Absorb, Damp, Swift Swim*||Tireless swimmer with muscle enough to cross an ocean.
63|Abra|Psi|Psychic|25,20,15,105,55,90|0.9|19.5|Synchronize, Inner Focus, Magic Guard*|64:Lv 16|Sleeps eighteen hours a day and teleports away while still asleep.
64|Kadabra|Psi|Psychic|40,35,30,120,70,105|1.3|56.5|Synchronize, Inner Focus, Magic Guard*|65:Trade|Emits alpha waves strong enough to disturb nearby machinery.
65|Alakazam|Psi|Psychic|55,50,45,135,95,120|1.5|48.0|Synchronize, Inner Focus, Magic Guard*||Its brain never stops growing; it remembers everything it has seen.
66|Machop|Superpower|Fighting|70,80,50,35,35,35|0.8|19.5|Guts, No Guard, Steadfast*|67:Lv 28|Trains constantly, lifting anything heavier than itself.
67|Machoke|Superpower|Fighting|80,100,70,50,60,45|1.5|70.5|Guts, No Guard, Steadfast*|68:Trade|Wears a power-save belt to keep its strength in check.
68|Machamp|Superpower|Fighting|90,130,80,65,85,55|1.6|130.0|Guts, No Guard, Steadfast*||Four arms deliver punches faster than the eye can follow.
69|Bellsprout|Flower|Grass,Poison|50,75,35,70,30,40|0.7|4.0|Chlorophyll, Gluttony*|70:Lv 21|The thin body is deceptively quick; it snaps at insects.
70|Weepinbell|Flycatcher|Grass,Poison|65,90,50,85,45,55|1.0|6.4|Chlorophyll, Gluttony*|71:Leaf Stone|Hangs from a branch by its hooked rear and sleeps.
71|Victreebel|Flycatcher|Grass,Poison|80,105,65,100,70,70|1.7|15.5|Chlorophyll, Gluttony*||Lures prey with a honeyed scent, then dissolves it in acid.
72|Tentacool|Jellyfish|Water,Poison|40,40,35,50,100,70|0.9|45.5|Clear Body, Liquid Ooze, Rain Dish*|73:Lv 30|Almost entirely water; it drifts with the current.
73|Tentacruel|Jellyfish|Water,Poison|80,70,65,80,120,100|1.6|55.0|Clear Body, Liquid Ooze, Rain Dish*||Eighty tentacles that stretch and contract at will.
74|Geodude|Rock|Rock,Ground|40,80,100,30,30,20|0.4|20.0|Rock Head, Sturdy, Sand Veil*|75:Lv 25|Easily mistaken for a stone on a mountain path.
75|Graveler|Rock|Rock,Ground|55,95,115,45,45,35|1.0|105.0|Rock Head, Sturdy, Sand Veil*|76:Trade|Rolls downhill to travel and does not stop for obstacles.
76|Golem|Megaton|Rock,Ground|80,120,130,55,65,45|1.4|300.0|Rock Head, Sturdy, Sand Veil*||Sheds its shell once a year; the discarded plates crumble to soil.
77|Ponyta|Fire Horse|Fire|50,85,55,65,65,90|1.0|30.0|Run Away, Flash Fire, Flame Body*|78:Lv 40|Can run from birth; its hooves are ten times harder than diamond.
78|Rapidash|Fire Horse|Fire|65,100,70,80,80,105|1.7|95.0|Run Away, Flash Fire, Flame Body*||Loves to race and will chase anything that passes it.
79|Slowpoke|Dopey|Water,Psychic|90,65,65,40,40,15|1.2|36.0|Oblivious, Own Tempo, Regenerator*|80:Lv 37;199:Trade w/ King's Rock|Takes five seconds to notice pain; uses its tail as a fishing line.
80|Slowbro|Hermit Crab|Water,Psychic|95,75,110,100,80,30|1.6|78.5|Oblivious, Own Tempo, Regenerator*||The Shellder on its tail keeps it alert, just about.
81|Magnemite|Magnet|Electric,Steel|25,35,70,95,55,45|0.3|6.0|Magnet Pull, Sturdy, Analytic*|82:Lv 30|Floats using anti-gravity units and feeds on electricity.
82|Magneton|Magnet|Electric,Steel|50,60,95,120,70,70|1.0|60.0|Magnet Pull, Sturdy, Analytic*|462:Level near special magnetic field|Three linked units generate strong radio interference.
83|Farfetch'd|Wild Duck|Normal,Flying|52,90,55,58,62,60|0.8|15.0|Keen Eye, Inner Focus, Defiant*||Never lets go of its leek, which it wields as a blade.
84|Doduo|Twin Bird|Normal,Flying|35,85,45,35,35,75|1.4|39.2|Run Away, Early Bird, Tangled Feet*|85:Lv 31|Two heads that never sleep at the same time.
85|Dodrio|Triple Bird|Normal,Flying|60,110,70,60,60,110|1.8|85.2|Run Away, Early Bird, Tangled Feet*||Its three heads express joy, anger and sorrow separately.
86|Seel|Sea Lion|Water|65,45,55,45,70,45|1.1|90.0|Thick Fat, Hydration, Ice Body*|87:Lv 34|Loves freezing water; the horn on its head splits ice.
87|Dewgong|Sea Lion|Water,Ice|90,70,80,70,95,70|1.7|120.0|Thick Fat, Hydration, Ice Body*||Sleeps under the ice and stores energy as body fat.
88|Grimer|Sludge|Poison|80,80,50,40,50,25|0.9|30.0|Stench, Sticky Hold, Poison Touch*|89:Lv 38|Born from sludge struck by lunar rays; it multiplies as it moves.
89|Muk|Sludge|Poison|105,105,75,65,100,50|1.2|30.0|Stench, Sticky Hold, Poison Touch*||The stench alone can cause fainting; plants die where it passes.
90|Shellder|Bivalve|Water|30,65,100,45,25,40|0.3|4.0|Shell Armor, Skill Link, Overcoat*|91:Water Stone|The shell is harder than diamond, but the tongue is always out.
91|Cloyster|Bivalve|Water,Ice|50,95,180,85,45,70|1.5|132.5|Shell Armor, Skill Link, Overcoat*||Once shut, the shell cannot be opened, even by a bomb.
92|Gastly|Gas|Ghost,Poison|30,35,30,100,35,80|1.3|0.1|Levitate|93:Lv 25|A body of gas that is dispersed by a strong wind.
93|Haunter|Gas|Ghost,Poison|45,50,45,115,55,95|1.6|0.1|Levitate|94:Trade|Its tongue is made of gas; a lick causes constant shaking.
94|Gengar|Shadow|Ghost,Poison|60,65,60,130,75,110|1.5|40.5|Cursed Body||Hides in shadows and steals warmth from whatever it follows.
95|Onix|Rock Snake|Rock,Ground|35,45,160,30,45,70|8.8|210.0|Rock Head, Sturdy, Weak Armor*|208:Trade w/ Metal Coat|Burrows at speed; its body hardens into a black diamond with age.
96|Drowzee|Hypnosis|Psychic|60,48,45,43,90,42|1.0|32.4|Insomnia, Forewarn, Inner Focus*|97:Lv 26|Eats dreams through the nose; it prefers happy ones.
97|Hypno|Hypnosis|Psychic|85,73,70,73,115,67|1.6|75.6|Insomnia, Forewarn, Inner Focus*||Always carries a pendulum; a sleeper nearby is rarely safe.
98|Krabby|River Crab|Water|30,105,90,25,25,50|0.4|6.5|Hyper Cutter, Shell Armor, Sheer Force*|99:Lv 28|Pincers regrow if torn off, which happens often.
99|Kingler|Pincer|Water|55,130,115,50,50,75|1.3|60.0|Hyper Cutter, Shell Armor, Sheer Force*||The oversized claw has 10,000 horsepower but is hard to aim.
100|Voltorb|Ball|Electric|40,30,50,55,55,100|0.5|10.4|Soundproof, Static, Aftermath*|101:Lv 30|Resembles a Poké Ball and explodes at the slightest provocation.
101|Electrode|Ball|Electric|60,50,70,80,80,150|1.2|66.6|Soundproof, Static, Aftermath*||Stores so much current it detonates from the pressure.
102|Exeggcute|Egg|Grass,Psychic|60,40,80,60,45,40|0.4|2.5|Chlorophyll, Harvest*|103:Leaf Stone|Six seeds that communicate telepathically and stay in a cluster.
103|Exeggutor|Coconut|Grass,Psychic|95,95,85,125,75,55|2.0|120.0|Chlorophyll, Harvest*||Each head thinks for itself; a fallen head becomes an Exeggcute.
104|Cubone|Lonely|Ground|50,50,95,40,50,35|0.4|6.5|Rock Head, Lightning Rod, Battle Armor*|105:Lv 28|Wears the skull of its mother and cries in the night.
105|Marowak|Bone Keeper|Ground|60,80,110,50,80,45|1.0|45.0|Rock Head, Lightning Rod, Battle Armor*||Throws its bone club with unerring accuracy.
106|Hitmonlee|Kicking|Fighting|50,120,53,35,110,87|1.5|49.8|Limber, Reckless, Unburden*||Its legs extend and contract, doubling their reach mid-kick.
107|Hitmonchan|Punching|Fighting|50,105,79,35,110,76|1.4|50.2|Keen Eye, Iron Fist, Inner Focus*||Throws punches faster than a bullet train and rests after three minutes.
108|Lickitung|Licking|Normal|90,55,75,60,75,30|1.2|65.5|Own Tempo, Oblivious, Cloud Nine*|463:Level knowing Rollout|Its tongue is twice its body length and doubles as a hand.
109|Koffing|Poison Gas|Poison|40,65,95,60,45,35|0.6|1.0|Levitate, Neutralizing Gas*|110:Lv 35|A thin membrane holding toxic gas; it swells before bursting.
110|Weezing|Poison Gas|Poison|65,90,120,85,70,60|1.2|9.5|Levitate, Neutralizing Gas*||Two bodies sharing gas back and forth to mix new toxins.
111|Rhyhorn|Spikes|Ground,Rock|80,85,95,30,30,25|1.0|115.0|Lightning Rod, Rock Head, Reckless*|112:Lv 42|Once it starts running it forgets why and keeps going.
112|Rhydon|Drill|Ground,Rock|105,130,120,45,45,40|1.9|120.0|Lightning Rod, Rock Head, Reckless*|464:Trade w/ Protector|Stands on two legs; its horn drills through solid stone.
113|Chansey|Egg|Normal|250,5,5,35,105,50|1.1|34.6|Natural Cure, Serene Grace, Healer*|242:Level w/ high friendship|Lays a highly nutritious egg every day and shares it freely.
114|Tangela|Vine|Grass|65,55,115,100,40,60|1.0|35.0|Chlorophyll, Leaf Guard, Regenerator*|465:Level knowing Ancient Power|Its vines snap off easily and regrow the next day.
115|Kangaskhan|Parent|Normal|105,95,80,40,80,90|2.2|80.0|Early Bird, Scrappy, Inner Focus*||Fiercely protective; the young leaves the pouch at three years old.
116|Horsea|Dragon|Water|30,40,70,70,25,60|0.4|8.0|Swift Swim, Sniper, Damp*|117:Lv 32|Spits ink to escape, and water at insects above the surface.
117|Seadra|Dragon|Water|55,65,95,95,45,85|1.2|25.0|Poison Point, Sniper, Damp*|230:Trade w/ Dragon Scale|The spines are venomous; it sleeps inside coral branches.
118|Goldeen|Goldfish|Water|45,67,60,35,50,63|0.6|15.0|Swift Swim, Water Veil, Lightning Rod*|119:Lv 33|Swims steadily against the current with flowing fins.
119|Seaking|Goldfish|Water|80,92,65,65,80,68|1.3|39.0|Swift Swim, Water Veil, Lightning Rod*||Bores holes in riverbed stone with its horn to make a nest.
120|Staryu|Star Shape|Water|30,45,55,70,55,85|0.8|34.5|Illuminate, Natural Cure, Analytic*|121:Water Stone|Regenerates lost limbs as long as the core stays intact.
121|Starmie|Mysterious|Water,Psychic|60,75,85,100,85,115|1.1|80.0|Illuminate, Natural Cure, Analytic*||Its core flashes in patterns some believe to be a signal.
122|Mr. Mime|Barrier|Psychic,Fairy|40,45,65,100,120,90|1.3|54.5|Soundproof, Filter, Technician*||Builds invisible walls out of air by miming their surfaces.
123|Scyther|Mantis|Bug,Flying|70,110,80,55,80,105|1.5|56.0|Swarm, Technician, Steadfast*|212:Trade w/ Metal Coat|Moves so fast it appears to be in two places at once.
124|Jynx|Human Shape|Ice,Psychic|65,50,35,115,95,95|1.4|40.6|Oblivious, Forewarn, Dry Skin*||Communicates in a rhythmic cry and moves as if dancing.
125|Electabuzz|Electric|Electric|65,83,57,95,85,105|1.1|30.0|Static, Vital Spirit*|466:Trade w/ Electirizer|Gathers at power plants; blackouts often follow.
126|Magmar|Spitfire|Fire|65,95,57,100,85,93|1.3|44.5|Flame Body, Vital Spirit*|467:Trade w/ Magmarizer|Its body burns at 1,200°C and blurs the air around it.
127|Pinsir|Stag Beetle|Bug|65,125,100,55,70,85|1.5|55.0|Hyper Cutter, Mold Breaker, Moxie*||Grips with its horns and squeezes until its prey is torn.
128|Tauros|Wild Bull|Normal|75,100,95,40,70,110|1.4|88.4|Intimidate, Anger Point, Sheer Force*||Whips itself with its three tails to work up to a charge.
129|Magikarp|Fish|Water|20,10,55,15,20,80|0.9|10.0|Swift Swim, Rattled*|130:Lv 20|Famously feeble, but it has survived in every water on earth.
130|Gyarados|Atrocious|Water,Flying|95,125,79,60,100,81|6.5|235.0|Intimidate, Moxie*||Once enraged it razes everything until nothing is left standing.
131|Lapras|Transport|Water,Ice|130,85,80,85,95,60|2.5|220.0|Water Absorb, Shell Armor, Hydration*||Gentle and intelligent; it ferries people across water and sings at sea.
132|Ditto|Transform|Normal|48,48,48,48,48,48|0.3|4.0|Limber, Imposter*||Restructures its cells to copy anything it sees, memory of shape included.
133|Eevee|Evolution|Normal|55,55,50,45,65,55|0.3|6.5|Run Away, Adaptability, Anticipation*|134:Water Stone;135:Thunder Stone;136:Fire Stone|An unstable genetic code that adapts to its surroundings.
134|Vaporeon|Bubble Jet|Water|130,65,60,110,95,65|1.0|29.0|Water Absorb, Hydration*||Its cell structure is close to water, making it near invisible in the sea.
135|Jolteon|Lightning|Electric|65,65,60,110,95,130|0.8|24.5|Volt Absorb, Quick Feet*||Charges its fur to fire the hairs like needles.
136|Flareon|Flame|Fire|65,130,60,95,110,65|0.9|25.0|Flash Fire, Guts*||Stores heat in a flame sac; its body runs at 900°C.
137|Porygon|Virtual|Normal|65,60,70,85,75,40|0.8|36.5|Trace, Download, Analytic*|233:Trade w/ Up-Grade|The first Pokémon made entirely of programming code.
138|Omanyte|Spiral|Rock,Water|35,40,100,90,55,35|0.4|7.5|Swift Swim, Shell Armor, Weak Armor*|139:Lv 40|Revived from a fossil; it swims by jetting water from its shell.
139|Omastar|Spiral|Rock,Water|70,60,125,115,70,55|1.0|35.0|Swift Swim, Shell Armor, Weak Armor*||Its heavy shell is thought to be why the species died out.
140|Kabuto|Shellfish|Rock,Water|30,80,90,55,45,55|0.5|11.5|Swift Swim, Battle Armor, Weak Armor*|141:Lv 40|Eyes on its back detect light; it has barely changed in 300 million years.
141|Kabutops|Shellfish|Rock,Water|60,115,105,65,70,80|1.3|40.5|Swift Swim, Battle Armor, Weak Armor*||Slim and fast in water; it drained prey with its scythes.
142|Aerodactyl|Fossil|Rock,Flying|80,105,65,60,75,130|1.8|59.0|Rock Head, Pressure, Unnerve*||A savage flier from a lost age, with a saw-edged jaw.
143|Snorlax|Sleeping|Normal|160,110,65,65,110,30|2.1|460.0|Immunity, Thick Fat, Gluttony*||Eats 400kg a day and sleeps the rest; children use it as a playground.
144|Articuno|Freeze|Ice,Flying|90,85,100,95,125,85|1.7|55.4|Pressure, Snow Cloak*||Appears to travellers lost in ice fields; snow falls where it flies.
145|Zapdos|Electric|Electric,Flying|90,90,85,125,90,100|1.6|52.6|Pressure, Static*||Gains power from lightning strikes and nests in thunderclouds.
146|Moltres|Flame|Fire,Flying|90,100,90,125,85,90|2.0|60.0|Pressure, Flame Body*||Its wings scatter embers; it heals itself in volcanic magma.
147|Dratini|Dragon|Dragon|41,64,45,50,50,50|1.8|3.3|Shed Skin, Marvel Scale*|148:Lv 30|Sheds its skin repeatedly as it grows, hidden in fast water.
148|Dragonair|Dragon|Dragon|61,84,65,70,70,70|4.0|16.5|Shed Skin, Marvel Scale*|149:Lv 55|The orbs on its body are said to let it alter the weather.
149|Dragonite|Dragon|Dragon,Flying|91,134,95,100,100,80|2.2|210.0|Inner Focus, Multiscale*||Kind-hearted and fast enough to circle the globe in sixteen hours.
150|Mewtwo|Genetic|Psychic|106,110,90,154,90,130|2.0|122.0|Pressure, Unnerve*||Engineered from gene splicing; its psychic power exceeds its creators' intent.
151|Mew|New Species|Psychic|100,100,100,100,100,100|0.4|4.0|Synchronize||Said to carry the genetic code of every Pokémon.
`;
window.TYPE_COLORS = {Normal:'#9ca0a8',Fire:'#e8794a',Water:'#5b8dd9',Electric:'#e0bb4a',Grass:'#6cb45e',Ice:'#6fc5c8',Fighting:'#c25a54',Poison:'#a166b8',Ground:'#c9a05c',Flying:'#8fa3dc',Psychic:'#dc6f95',Bug:'#9bb03f',Rock:'#b39a63',Ghost:'#7a6bb0',Dragon:'#7458d6',Dark:'#6d5f57',Steel:'#8f9aad',Fairy:'#d98fbf'};
// Defensive type chart: multipliers when attacked by key.
window.TYPE_CHART = {
Normal:{Fighting:2,Ghost:0},
Fire:{Water:2,Ground:2,Rock:2,Fire:.5,Grass:.5,Ice:.5,Bug:.5,Steel:.5,Fairy:.5},
Water:{Electric:2,Grass:2,Fire:.5,Water:.5,Ice:.5,Steel:.5},
Electric:{Ground:2,Electric:.5,Flying:.5,Steel:.5},
Grass:{Fire:2,Ice:2,Poison:2,Flying:2,Bug:2,Water:.5,Electric:.5,Grass:.5,Ground:.5},
Ice:{Fire:2,Fighting:2,Rock:2,Steel:2,Ice:.5},
Fighting:{Flying:2,Psychic:2,Fairy:2,Bug:.5,Rock:.5,Dark:.5},
Poison:{Ground:2,Psychic:2,Grass:.5,Fighting:.5,Poison:.5,Bug:.5,Fairy:.5},
Ground:{Water:2,Grass:2,Ice:2,Poison:.5,Rock:.5,Electric:0},
Flying:{Electric:2,Ice:2,Rock:2,Grass:.5,Fighting:.5,Bug:.5,Ground:0},
Psychic:{Bug:2,Ghost:2,Dark:2,Fighting:.5,Psychic:.5},
Bug:{Fire:2,Flying:2,Rock:2,Grass:.5,Fighting:.5,Ground:.5},
Rock:{Water:2,Grass:2,Fighting:2,Ground:2,Steel:2,Normal:.5,Fire:.5,Poison:.5,Flying:.5},
Ghost:{Ghost:2,Dark:2,Poison:.5,Bug:.5,Normal:0,Fighting:0},
Dragon:{Ice:2,Dragon:2,Fairy:2,Fire:.5,Water:.5,Electric:.5,Grass:.5},
Dark:{Fighting:2,Bug:2,Fairy:2,Ghost:.5,Dark:.5,Psychic:0},
Steel:{Fire:2,Fighting:2,Ground:2,Normal:.5,Grass:.5,Ice:.5,Flying:.5,Psychic:.5,Bug:.5,Rock:.5,Dragon:.5,Steel:.5,Fairy:.5,Poison:0},
Fairy:{Poison:2,Steel:2,Fighting:.5,Bug:.5,Dark:.5,Dragon:0}
};
window.EXTRA_NAMES = {186:'Politoed',199:'Slowking',208:'Steelix',212:'Scizor',230:'Kingdra',233:'Porygon2',242:'Blissey',462:'Magnezone',463:'Lickilicky',464:'Rhyperior',465:'Tangrowth',466:'Electivire',467:'Magmortar'};

window.EGG_GROUPS = Object.assign(window.EGG_GROUPS||{}, {"1":"Monster, Grass","2":"Monster, Grass","3":"Monster, Grass","4":"Monster, Dragon","5":"Monster, Dragon","6":"Monster, Dragon","7":"Monster, Water 1","8":"Monster, Water 1","9":"Monster, Water 1","10":"Bug","11":"Bug","12":"Bug","13":"Bug","14":"Bug","15":"Bug","16":"Flying","17":"Flying","18":"Flying","19":"Field","20":"Field","21":"Flying","22":"Flying","23":"Field, Dragon","24":"Field, Dragon","25":"Field, Fairy","26":"Field, Fairy","27":"Field","28":"Field","29":"Monster, Field","30":"Monster, Field","31":"Monster, Field","32":"Monster, Field","33":"Monster, Field","34":"Monster, Field","35":"Fairy","36":"Fairy","37":"Field","38":"Field","39":"Fairy","40":"Fairy","41":"Flying","42":"Flying","43":"Grass","44":"Grass","45":"Grass","46":"Bug, Grass","47":"Bug, Grass","48":"Bug","49":"Bug","50":"Field","51":"Field","52":"Field","53":"Field","54":"Water 1, Field","55":"Water 1, Field","56":"Field","57":"Field","58":"Field","59":"Field","60":"Water 1","61":"Water 1","62":"Water 1","63":"Human-Like","64":"Human-Like","65":"Human-Like","66":"Human-Like","67":"Human-Like","68":"Human-Like","69":"Grass","70":"Grass","71":"Grass","72":"Water 3","73":"Water 3","74":"Mineral","75":"Mineral","76":"Mineral","77":"Field","78":"Field","79":"Monster, Water 1","80":"Monster, Water 1","81":"Mineral","82":"Mineral","83":"Flying, Field","84":"Flying","85":"Flying","86":"Water 1, Field","87":"Water 1, Field","88":"Amorphous","89":"Amorphous","90":"Water 3","91":"Water 3","92":"Amorphous","93":"Amorphous","94":"Amorphous","95":"Mineral","96":"Human-Like","97":"Human-Like","98":"Water 3","99":"Water 3","100":"Mineral","101":"Mineral","102":"Grass","103":"Grass","104":"Monster","105":"Monster","106":"Human-Like","107":"Human-Like","108":"Monster","109":"Amorphous","110":"Amorphous","111":"Monster, Field","112":"Monster, Field","113":"Fairy","114":"Grass","115":"Monster","116":"Water 1, Dragon","117":"Water 1, Dragon","118":"Water 2","119":"Water 2","120":"Water 3","121":"Water 3","122":"Human-Like","123":"Bug","124":"Human-Like","125":"Human-Like","126":"Human-Like","127":"Bug","128":"Field","129":"Water 2, Dragon","130":"Water 2, Dragon","131":"Monster, Water 1","132":"Ditto","133":"Field","134":"Field","135":"Field","136":"Field","137":"Mineral","138":"Water 1, Water 3","139":"Water 1, Water 3","140":"Water 1, Water 3","141":"Water 1, Water 3","142":"Flying","143":"Monster","144":"Undiscovered","145":"Undiscovered","146":"Undiscovered","147":"Water 1, Dragon","148":"Water 1, Dragon","149":"Water 1, Dragon","150":"Undiscovered","151":"Undiscovered"});
