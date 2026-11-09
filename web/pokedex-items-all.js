// Full item list — everything outside the core battle held-item set.
// Format: name|category|effect|battle
// The 4th field is the battle flag: 1 = a held item with an effect in battle
// (so it appears in the team builder's item slot), 0 = bag item only.
// Entries in pokedex-items.js have no flag and default to 1.
window.ITEMS_RAW_EXTRA = `Flame Plate|Plate|Raises the power of Fire moves by 20% and sets Arceus to Fire.|1
Splash Plate|Plate|Raises the power of Water moves by 20% and sets Arceus to Water.|1
Zap Plate|Plate|Raises the power of Electric moves by 20% and sets Arceus to Electric.|1
Meadow Plate|Plate|Raises the power of Grass moves by 20% and sets Arceus to Grass.|1
Icicle Plate|Plate|Raises the power of Ice moves by 20% and sets Arceus to Ice.|1
Fist Plate|Plate|Raises the power of Fighting moves by 20% and sets Arceus to Fighting.|1
Toxic Plate|Plate|Raises the power of Poison moves by 20% and sets Arceus to Poison.|1
Earth Plate|Plate|Raises the power of Ground moves by 20% and sets Arceus to Ground.|1
Sky Plate|Plate|Raises the power of Flying moves by 20% and sets Arceus to Flying.|1
Mind Plate|Plate|Raises the power of Psychic moves by 20% and sets Arceus to Psychic.|1
Insect Plate|Plate|Raises the power of Bug moves by 20% and sets Arceus to Bug.|1
Stone Plate|Plate|Raises the power of Rock moves by 20% and sets Arceus to Rock.|1
Spooky Plate|Plate|Raises the power of Ghost moves by 20% and sets Arceus to Ghost.|1
Draco Plate|Plate|Raises the power of Dragon moves by 20% and sets Arceus to Dragon.|1
Dread Plate|Plate|Raises the power of Dark moves by 20% and sets Arceus to Dark.|1
Iron Plate|Plate|Raises the power of Steel moves by 20% and sets Arceus to Steel.|1
Pixie Plate|Plate|Raises the power of Fairy moves by 20% and sets Arceus to Fairy.|1
Legend Plate|Plate|Lets Arceus change type to match whichever move it uses.|1
Douse Drive|Drive|Changes Genesect's Techno Blast to a Water move.|1
Shock Drive|Drive|Changes Genesect's Techno Blast to an Electric move.|1
Burn Drive|Drive|Changes Genesect's Techno Blast to a Fire move.|1
Chill Drive|Drive|Changes Genesect's Techno Blast to an Ice move.|1
Fire Memory|Memory|Changes Silvally and Multi-Attack to Fire.|1
Water Memory|Memory|Changes Silvally and Multi-Attack to Water.|1
Electric Memory|Memory|Changes Silvally and Multi-Attack to Electric.|1
Grass Memory|Memory|Changes Silvally and Multi-Attack to Grass.|1
Ice Memory|Memory|Changes Silvally and Multi-Attack to Ice.|1
Fighting Memory|Memory|Changes Silvally and Multi-Attack to Fighting.|1
Poison Memory|Memory|Changes Silvally and Multi-Attack to Poison.|1
Ground Memory|Memory|Changes Silvally and Multi-Attack to Ground.|1
Flying Memory|Memory|Changes Silvally and Multi-Attack to Flying.|1
Psychic Memory|Memory|Changes Silvally and Multi-Attack to Psychic.|1
Bug Memory|Memory|Changes Silvally and Multi-Attack to Bug.|1
Rock Memory|Memory|Changes Silvally and Multi-Attack to Rock.|1
Ghost Memory|Memory|Changes Silvally and Multi-Attack to Ghost.|1
Dragon Memory|Memory|Changes Silvally and Multi-Attack to Dragon.|1
Dark Memory|Memory|Changes Silvally and Multi-Attack to Dark.|1
Steel Memory|Memory|Changes Silvally and Multi-Attack to Steel.|1
Fairy Memory|Memory|Changes Silvally and Multi-Attack to Fairy.|1
Normal Gem|Gem|Boosts one Normal move by 30%, then is used up.|1
Fire Gem|Gem|Boosts one Fire move by 30%, then is used up.|1
Water Gem|Gem|Boosts one Water move by 30%, then is used up.|1
Electric Gem|Gem|Boosts one Electric move by 30%, then is used up.|1
Grass Gem|Gem|Boosts one Grass move by 30%, then is used up.|1
Ice Gem|Gem|Boosts one Ice move by 30%, then is used up.|1
Fighting Gem|Gem|Boosts one Fighting move by 30%, then is used up.|1
Poison Gem|Gem|Boosts one Poison move by 30%, then is used up.|1
Ground Gem|Gem|Boosts one Ground move by 30%, then is used up.|1
Flying Gem|Gem|Boosts one Flying move by 30%, then is used up.|1
Psychic Gem|Gem|Boosts one Psychic move by 30%, then is used up.|1
Bug Gem|Gem|Boosts one Bug move by 30%, then is used up.|1
Rock Gem|Gem|Boosts one Rock move by 30%, then is used up.|1
Ghost Gem|Gem|Boosts one Ghost move by 30%, then is used up.|1
Dragon Gem|Gem|Boosts one Dragon move by 30%, then is used up.|1
Dark Gem|Gem|Boosts one Dark move by 30%, then is used up.|1
Steel Gem|Gem|Boosts one Steel move by 30%, then is used up.|1
Fairy Gem|Gem|Boosts one Fairy move by 30%, then is used up.|1
Adamant Orb|Signature|Raises the power of Dialga's Dragon and Steel moves.|1
Lustrous Orb|Signature|Raises the power of Palkia's Dragon and Water moves.|1
Griseous Orb|Signature|Raises the power of Giratina's Dragon and Ghost moves.|1
Adamant Crystal|Signature|Changes Dialga to Origin Forme and boosts its Dragon and Steel moves.|1
Lustrous Globe|Signature|Changes Palkia to Origin Forme and boosts its Dragon and Water moves.|1
Griseous Core|Signature|Changes Giratina to Origin Forme and boosts its Dragon and Ghost moves.|1
Rusted Sword|Signature|Turns Zacian into its Crowned Sword form.|1
Rusted Shield|Signature|Turns Zamazenta into its Crowned Shield form.|1
Cornerstone Mask|Ogerpon Mask|Turns Ogerpon into Cornerstone Mask form and powers its moves.|1
Booster Energy|Utility|Activates Protosynthesis or Quark Drive once, without sun or Electric Terrain.|1
Loaded Dice|Utility|Multi-hit moves always hit at least four times.|1
Covert Cloak|Utility|Protects the holder from the added effects of moves.|1
Clear Amulet|Utility|Stops other Pokémon from lowering the holder's stats.|1
Mirror Herb|Herb|Copies an opponent's stat boosts once.|1
Punching Glove|Power|Raises punching moves by 10% and stops them making contact.|1
Ability Shield|Utility|Protects the holder's Ability from being changed or suppressed.|1
Utility Umbrella|Utility|Shields the holder from the effects of rain and harsh sunlight.|1
Room Service|Reactive|Lowers Speed when Trick Room is set up.|1
Destiny Knot|Utility|If the holder is infatuated, the opponent is infatuated too.|1
Sea Incense|Type boost|Raises the power of Water moves by 20%.|1
Odd Incense|Type boost|Raises the power of Psychic moves by 20%.|1
Rock Incense|Type boost|Raises the power of Rock moves by 20%.|1
Wave Incense|Type boost|Raises the power of Water moves by 20%.|1
Rose Incense|Type boost|Raises the power of Grass moves by 20%.|1
Full Incense|Handicap|Makes the holder move last in its priority bracket.|1
Enigma Berry|Berry|Restores a quarter of HP when hit by a super-effective move.|1
Micle Berry|Berry|Raises the accuracy of the next move when HP drops below a quarter.|1
Jaboca Berry|Berry|Damages an attacker that lands a physical hit.|1
Rowap Berry|Berry|Damages an attacker that lands a special hit.|1
Kee Berry|Berry|Raises Defence when hit by a physical move.|1
Maranga Berry|Berry|Raises Sp. Defence when hit by a special move.|1
Wiki Berry|Berry|Restores a third of HP below half, but confuses a Pokémon that dislikes dry food.|1
Mago Berry|Berry|Restores a third of HP below half, but confuses a Pokémon that dislikes sweet food.|1
Aguav Berry|Berry|Restores a third of HP below half, but confuses a Pokémon that dislikes bitter food.|1
Iapapa Berry|Berry|Restores a third of HP below half, but confuses a Pokémon that dislikes sour food.|1
Poké Ball|Poké Ball|The standard ball. Works on most wild Pokémon.|0
Great Ball|Poké Ball|A better ball with a higher catch rate than a Poké Ball.|0
Ultra Ball|Poké Ball|A high-performance ball with a much higher catch rate.|0
Master Ball|Poké Ball|Catches any wild Pokémon without fail.|0
Safari Ball|Poké Ball|Used only in the Safari Zone, decorated in a camouflage pattern.|0
Sport Ball|Poké Ball|Used in the Bug-Catching Contest.|0
Premier Ball|Poké Ball|A rare commemorative ball with the same rate as a Poké Ball.|0
Luxury Ball|Poké Ball|A comfortable ball that makes the Pokémon inside friendlier, faster.|0
Heal Ball|Poké Ball|Fully restores the HP, PP and status of the Pokémon caught.|0
Net Ball|Poké Ball|Works better on Water and Bug types.|0
Dive Ball|Poké Ball|Works better on Pokémon found underwater or while fishing.|0
Nest Ball|Poké Ball|Works better the lower the wild Pokémon's level.|0
Repeat Ball|Poké Ball|Works better on species already registered in the Pokédex.|0
Timer Ball|Poké Ball|Gets better the more turns the battle has lasted.|0
Quick Ball|Poké Ball|Works very well on the first turn of a battle.|0
Dusk Ball|Poké Ball|Works better at night and in caves.|0
Fast Ball|Poké Ball|Works better on Pokémon with a base Speed of 100 or more.|0
Level Ball|Poké Ball|Works better the higher your Pokémon's level is over the wild one's.|0
Lure Ball|Poké Ball|Works better on Pokémon hooked while fishing.|0
Heavy Ball|Poké Ball|Works better on very heavy Pokémon.|0
Love Ball|Poké Ball|Works better on a Pokémon of the same species and opposite gender.|0
Friend Ball|Poké Ball|The Pokémon caught becomes friendly immediately.|0
Moon Ball|Poké Ball|Works better on Pokémon that evolve with a Moon Stone.|0
Dream Ball|Poké Ball|Works well on sleeping Pokémon; catches anything in the Entree Forest.|0
Beast Ball|Poké Ball|Designed for Ultra Beasts; poor against anything else.|0
Cherish Ball|Poké Ball|A rare ball used only for event distributions.|0
Park Ball|Poké Ball|Used in the Pal Park to transfer Pokémon.|0
Strange Ball|Poké Ball|A placeholder ball for Pokémon transferred from Hisui.|0
Feather Ball|Poké Ball|A Hisuian ball that flies further than usual.|0
Wing Ball|Poké Ball|A Hisuian ball that flies further and faster than a Feather Ball.|0
Jet Ball|Poké Ball|The best of the Hisuian flying balls.|0
Heavy Ball (Hisui)|Poké Ball|A heavy Hisuian ball that drops short but catches well.|0
Leaden Ball|Poké Ball|A heavier Hisuian ball with a better catch rate.|0
Gigaton Ball|Poké Ball|The heaviest Hisuian ball, with the best catch rate of the three.|0
Origin Ball|Poké Ball|Made by Volo's request, used to catch Arceus.|0
Potion|Medicine|Restores 20 HP.|0
Super Potion|Medicine|Restores 60 HP.|0
Hyper Potion|Medicine|Restores 120 HP.|0
Max Potion|Medicine|Fully restores HP.|0
Full Restore|Medicine|Fully restores HP and cures any status condition.|0
Fresh Water|Medicine|A drink from a vending machine that restores 30 HP.|0
Soda Pop|Medicine|A fizzy drink that restores 60 HP.|0
Lemonade|Medicine|A sweet drink that restores 80 HP.|0
Moomoo Milk|Medicine|Rich milk that restores 100 HP.|0
Berry Juice|Medicine|A drink made from berries that restores 20 HP.|0
Sweet Heart|Medicine|Sweet chocolate that restores 20 HP.|0
Energy Powder|Medicine|A bitter powder that restores 60 HP but lowers friendship.|0
Energy Root|Medicine|A very bitter root that restores 120 HP but lowers friendship.|0
Heal Powder|Medicine|A bitter powder that cures all status conditions but lowers friendship.|0
Revival Herb|Medicine|A very bitter herb that revives a fainted Pokémon fully.|0
Antidote|Medicine|Cures poison.|0
Paralyze Heal|Medicine|Cures paralysis.|0
Awakening|Medicine|Wakes a sleeping Pokémon.|0
Burn Heal|Medicine|Cures a burn.|0
Ice Heal|Medicine|Thaws a frozen Pokémon.|0
Full Heal|Medicine|Cures any one status condition.|0
Revive|Medicine|Revives a fainted Pokémon with half its HP.|0
Max Revive|Medicine|Revives a fainted Pokémon with full HP.|0
Ether|Medicine|Restores 10 PP to one move.|0
Max Ether|Medicine|Fully restores the PP of one move.|0
Elixir|Medicine|Restores 10 PP to every move.|0
Max Elixir|Medicine|Fully restores the PP of every move.|0
Sacred Ash|Medicine|Revives every fainted Pokémon in the party with full HP.|0
Lava Cookie|Medicine|A Lavaridge speciality that cures any status condition.|0
Old Gateau|Medicine|A Sinnoh cake that cures any status condition.|0
Casteliacone|Medicine|A Castelia ice cream that cures any status condition.|0
Lumiose Galette|Medicine|A Kalos cake that cures any status condition.|0
Shalour Sable|Medicine|A Shalour biscuit that cures any status condition.|0
Big Malasada|Medicine|An Alolan fried pastry that cures any status condition.|0
Rage Candy Bar|Medicine|A Mahogany speciality that cures any status condition.|0
Pewter Crunchies|Medicine|A Pewter City snack that cures any status condition.|0
Rare Candy|Medicine|Raises a Pokémon's level by one.|0
Exp. Candy XS|Medicine|Gives a very small amount of Exp. Points.|0
Exp. Candy S|Medicine|Gives a small amount of Exp. Points.|0
Exp. Candy M|Medicine|Gives a moderate amount of Exp. Points.|0
Exp. Candy L|Medicine|Gives a large amount of Exp. Points.|0
Exp. Candy XL|Medicine|Gives a very large amount of Exp. Points.|0
Dynamax Candy|Medicine|Raises a Pokémon's Dynamax Level by one.|0
HP Up|Vitamin|Adds HP effort values, up to the cap.|0
Protein|Vitamin|Adds Attack effort values, up to the cap.|0
Iron|Vitamin|Adds Defence effort values, up to the cap.|0
Calcium|Vitamin|Adds Sp. Attack effort values, up to the cap.|0
Zinc|Vitamin|Adds Sp. Defence effort values, up to the cap.|0
Carbos|Vitamin|Adds Speed effort values, up to the cap.|0
PP Up|Vitamin|Raises the maximum PP of one move by 20%.|0
PP Max|Vitamin|Raises the maximum PP of one move to its limit.|0
Health Feather|Vitamin|Adds one HP effort value.|0
Muscle Feather|Vitamin|Adds one Attack effort value.|0
Resist Feather|Vitamin|Adds one Defence effort value.|0
Genius Feather|Vitamin|Adds one Sp. Attack effort value.|0
Clever Feather|Vitamin|Adds one Sp. Defence effort value.|0
Swift Feather|Vitamin|Adds one Speed effort value.|0
Pretty Feather|Vitamin|A beautiful but useless feather, worth selling.|0
X Attack|Battle item|Raises Attack for the rest of the battle.|0
X Defense|Battle item|Raises Defence for the rest of the battle.|0
X Sp. Atk|Battle item|Raises Sp. Attack for the rest of the battle.|0
X Sp. Def|Battle item|Raises Sp. Defence for the rest of the battle.|0
X Speed|Battle item|Raises Speed for the rest of the battle.|0
X Accuracy|Battle item|Raises accuracy for the rest of the battle.|0
Dire Hit|Battle item|Raises the critical-hit rate for the rest of the battle.|0
Guard Spec.|Battle item|Prevents stat reduction for five turns.|0
Poké Doll|Battle item|Guarantees escape from a wild Pokémon battle.|0
Fluffy Tail|Battle item|Guarantees escape from a wild Pokémon battle.|0
Poké Toy|Battle item|Guarantees escape from a wild Pokémon battle.|0
Max Mushrooms|Battle item|Used to give a Pokémon a Gigantamax Factor.|0
Fire Stone|Evolution|Evolves Vulpix, Growlithe, Eevee, Pansear and others.|0
Water Stone|Evolution|Evolves Poliwhirl, Shellder, Eevee, Panpour and others.|0
Thunder Stone|Evolution|Evolves Pikachu, Eelektrik, Eevee and Charjabug.|0
Leaf Stone|Evolution|Evolves Gloom, Weepinbell, Exeggcute, Nuzleaf and Pansage.|0
Moon Stone|Evolution|Evolves Nidorina, Clefairy, Jigglypuff, Skitty and Munna.|0
Sun Stone|Evolution|Evolves Gloom, Sunkern, Cottonee, Petilil and Helioptile.|0
Shiny Stone|Evolution|Evolves Togetic, Roselia, Minccino and Floette.|0
Dusk Stone|Evolution|Evolves Murkrow, Misdreavus, Lampent and Doublade.|0
Dawn Stone|Evolution|Evolves male Kirlia and female Snorunt.|0
Ice Stone|Evolution|Evolves Alolan Sandshrew, Alolan Vulpix, Galarian Darumaka and Eevee.|0
Everstone|Evolution|Held: stops the holder evolving; passes Nature in breeding.|0
King's Rock (evolution)|Evolution|Trade holding it to evolve Poliwhirl and Slowpoke.|0
Dragon Scale|Evolution|Trade holding it to evolve Seadra.|0
Upgrade|Evolution|Trade holding it to evolve Porygon.|0
Dubious Disc|Evolution|Trade holding it to evolve Porygon2.|0
Protector|Evolution|Trade holding it to evolve Rhydon.|0
Electirizer|Evolution|Trade holding it to evolve Electabuzz.|0
Magmarizer|Evolution|Trade holding it to evolve Magmar.|0
Reaper Cloth|Evolution|Trade holding it to evolve Dusclops.|0
Prism Scale|Evolution|Trade holding it to evolve Feebas.|0
Whipped Dream|Evolution|Trade holding it to evolve Swirlix.|0
Sachet|Evolution|Trade holding it to evolve Spritzee.|0
Oval Stone|Evolution|Evolves Happiny when levelled up during the day.|0
Razor Claw (evolution)|Evolution|Evolves Sneasel when levelled up at night.|0
Razor Fang (evolution)|Evolution|Evolves Gligar when levelled up at night.|0
Chipped Pot|Evolution|Evolves Sinistea into Polteageist.|0
Cracked Pot|Evolution|Evolves a phony Sinistea into Polteageist.|0
Sweet Apple|Evolution|Evolves Applin into Appletun.|0
Tart Apple|Evolution|Evolves Applin into Flapple.|0
Syrupy Apple|Evolution|Evolves Applin into Dipplin.|0
Galarica Cuff|Evolution|Evolves Galarian Slowpoke into Galarian Slowbro.|0
Galarica Wreath|Evolution|Evolves Galarian Slowpoke into Galarian Slowking.|0
Strawberry Sweet|Evolution|Evolves Milcery into a Strawberry Alcremie.|0
Berry Sweet|Evolution|Evolves Milcery into a Berry Alcremie.|0
Love Sweet|Evolution|Evolves Milcery into a Love Alcremie.|0
Star Sweet|Evolution|Evolves Milcery into a Star Alcremie.|0
Clover Sweet|Evolution|Evolves Milcery into a Clover Alcremie.|0
Flower Sweet|Evolution|Evolves Milcery into a Flower Alcremie.|0
Ribbon Sweet|Evolution|Evolves Milcery into a Ribbon Alcremie.|0
Black Augurite|Evolution|Evolves Scyther into Kleavor.|0
Peat Block|Evolution|Evolves Ursaring into Ursaluna under a full moon.|0
Linking Cord|Evolution|Evolves Pokémon that would otherwise need a trade.|0
Auspicious Armor|Evolution|Evolves Charcadet into Armarouge.|0
Malicious Armor|Evolution|Evolves Charcadet into Ceruledge.|0
Leader's Crest|Evolution|Evolves Bisharp into Kingambit after defeating three Bisharp bosses.|0
Metal Alloy|Evolution|Evolves Duraludon into Archaludon.|0
Scroll of Darkness|Evolution|Evolves Kubfu into Single Strike Urshifu.|0
Scroll of Waters|Evolution|Evolves Kubfu into Rapid Strike Urshifu.|0
Deep Sea Tooth (evolution)|Evolution|Trade holding it to evolve Clamperl into Huntail.|0
Deep Sea Scale (evolution)|Evolution|Trade holding it to evolve Clamperl into Gorebyss.|0
Exp. Share|Held|Shares experience with the rest of the party.|0
Lucky Egg|Held|The holder gains 50% more experience.|0
Amulet Coin|Held|Doubles prize money when the holder joins the battle.|0
Soothe Bell|Held|The holder becomes friendly more quickly.|0
Smoke Ball|Held|Guarantees escape from wild Pokémon.|0
Cleanse Tag|Held|Makes weaker wild Pokémon less likely to appear.|0
Macho Brace|Training|Doubles effort values gained but halves Speed.|0
Power Weight|Training|Adds HP effort values but lowers Speed.|0
Power Bracer|Training|Adds Attack effort values but lowers Speed.|0
Power Belt|Training|Adds Defence effort values but lowers Speed.|0
Power Lens|Training|Adds Sp. Attack effort values but lowers Speed.|0
Power Band|Training|Adds Sp. Defence effort values but lowers Speed.|0
Power Anklet|Training|Adds Speed effort values but lowers Speed in battle.|0
Bottle Cap|Training|Hyper Trains one stat to its maximum potential.|0
Gold Bottle Cap|Training|Hyper Trains every stat to its maximum potential.|0
Ability Capsule|Training|Swaps a Pokémon between its two standard Abilities.|0
Ability Patch|Training|Changes a standard Ability into the Hidden Ability.|0
Reins of Unity|Training|Fuses and separates Calyrex with Glastrier or Spectrier.|0
DNA Splicers|Training|Fuses and separates Kyurem with Reshiram or Zekrom.|0
N-Lunarizer|Training|Fuses and separates Necrozma with Lunala.|0
N-Solarizer|Training|Fuses and separates Necrozma with Solgaleo.|0
Lonely Mint|Mint|Changes stat growth to a Lonely Nature.|0
Adamant Mint|Mint|Changes stat growth to an Adamant Nature.|0
Naughty Mint|Mint|Changes stat growth to a Naughty Nature.|0
Brave Mint|Mint|Changes stat growth to a Brave Nature.|0
Bold Mint|Mint|Changes stat growth to a Bold Nature.|0
Impish Mint|Mint|Changes stat growth to an Impish Nature.|0
Lax Mint|Mint|Changes stat growth to a Lax Nature.|0
Relaxed Mint|Mint|Changes stat growth to a Relaxed Nature.|0
Modest Mint|Mint|Changes stat growth to a Modest Nature.|0
Mild Mint|Mint|Changes stat growth to a Mild Nature.|0
Rash Mint|Mint|Changes stat growth to a Rash Nature.|0
Quiet Mint|Mint|Changes stat growth to a Quiet Nature.|0
Calm Mint|Mint|Changes stat growth to a Calm Nature.|0
Gentle Mint|Mint|Changes stat growth to a Gentle Nature.|0
Careful Mint|Mint|Changes stat growth to a Careful Nature.|0
Sassy Mint|Mint|Changes stat growth to a Sassy Nature.|0
Timid Mint|Mint|Changes stat growth to a Timid Nature.|0
Hasty Mint|Mint|Changes stat growth to a Hasty Nature.|0
Jolly Mint|Mint|Changes stat growth to a Jolly Nature.|0
Naive Mint|Mint|Changes stat growth to a Naive Nature.|0
Serious Mint|Mint|Changes stat growth to a Serious Nature.|0
Razz Berry|Berry|Makes a wild Pokémon easier to catch in some games.|0
Bluk Berry|Berry|A blue berry used in Poffins and Pokéblocks.|0
Nanab Berry|Berry|Calms a wild Pokémon so it moves less.|0
Wepear Berry|Berry|A berry used in Poffins and Pokéblocks.|0
Pinap Berry|Berry|Yields extra candy or ingredients when used on a wild Pokémon.|0
Pomeg Berry|Berry|Lowers HP effort values and raises friendship.|0
Kelpsy Berry|Berry|Lowers Attack effort values and raises friendship.|0
Qualot Berry|Berry|Lowers Defence effort values and raises friendship.|0
Hondew Berry|Berry|Lowers Sp. Attack effort values and raises friendship.|0
Grepa Berry|Berry|Lowers Sp. Defence effort values and raises friendship.|0
Tamato Berry|Berry|Lowers Speed effort values and raises friendship.|0
Cornn Berry|Berry|A berry used for Poffins and Pokéblocks.|0
Magost Berry|Berry|A sweet berry used for Poffins and Pokéblocks.|0
Rabuta Berry|Berry|A bitter berry used for Poffins and Pokéblocks.|0
Nomel Berry|Berry|A very sour berry used for Poffins and Pokéblocks.|0
Spelon Berry|Berry|An extremely spicy berry used for Poffins.|0
Pamtre Berry|Berry|A rare, very dry berry used for Poffins.|0
Watmel Berry|Berry|An enormous, very sweet berry used for Poffins.|0
Durin Berry|Berry|An extremely bitter berry used for Poffins.|0
Belue Berry|Berry|A very sour berry used for Poffins.|0
Hopo Berry|Berry|A Hisuian berry that restores PP.|0
Red Apricorn|Apricorn|Used by Kurt to make a Level Ball.|0
Blue Apricorn|Apricorn|Used by Kurt to make a Lure Ball.|0
Yellow Apricorn|Apricorn|Used by Kurt to make a Moon Ball.|0
Green Apricorn|Apricorn|Used by Kurt to make a Friend Ball.|0
Pink Apricorn|Apricorn|Used by Kurt to make a Love Ball.|0
White Apricorn|Apricorn|Used by Kurt to make a Fast Ball.|0
Black Apricorn|Apricorn|Used by Kurt to make a Heavy Ball.|0
Nugget|Treasure|A nugget of pure gold. Sells for a high price.|0
Big Nugget|Treasure|A large nugget of pure gold. Sells for a great deal.|0
Pearl|Treasure|A pretty pearl. Sells at a modest price.|0
Big Pearl|Treasure|A large pearl. Sells at a high price.|0
Stardust|Treasure|Beautiful red sand. Sells at a high price.|0
Star Piece|Treasure|A shard of red gem. Sells at a very high price.|0
Comet Shard|Treasure|A shard from a comet. Sells at an extremely high price.|0
Rare Bone|Treasure|A rare bone valuable for study. Sells at a high price.|0
Pretty Wing|Treasure|A lovely wing. Sells for a small price.|0
Balm Mushroom|Treasure|A rare, fragrant mushroom. Sells at a high price.|0
Tiny Mushroom|Treasure|A small, common mushroom. Sells cheaply.|0
Big Mushroom|Treasure|A large, rare mushroom. Sells at a high price.|0
Heart Scale|Treasure|A pretty scale. Traded for move reminders.|0
Shoal Salt|Treasure|Salt from the Shoal Cave, used to make Shell Bells.|0
Shoal Shell|Treasure|A shell from the Shoal Cave, used to make Shell Bells.|0
Slowpoke Tail|Treasure|An incredibly tasty tail. Sells at a very high price.|0
Honey|Treasure|Sweet honey that attracts wild Pokémon when used.|0
Odd Keystone|Treasure|A stone with a voice inside; used to build the Spiritomb tower.|0
Relic Copper|Treasure|An ancient copper coin. Sells at a high price.|0
Relic Silver|Treasure|An ancient silver coin. Sells at a very high price.|0
Relic Gold|Treasure|An ancient gold coin. Sells at an extremely high price.|0
Relic Vase|Treasure|An ancient vase. Sells at a very high price.|0
Relic Band|Treasure|An ancient bracelet. Sells at a very high price.|0
Relic Statue|Treasure|An ancient statue. Sells at a very high price.|0
Relic Crown|Treasure|An ancient crown. Sells at a very high price.|0
Strange Souvenir|Treasure|An ornament shaped like a Pokémon from a distant region.|0
Helix Fossil|Fossil|Revived into Omanyte.|0
Dome Fossil|Fossil|Revived into Kabuto.|0
Old Amber|Fossil|Revived into Aerodactyl.|0
Root Fossil|Fossil|Revived into Lileep.|0
Claw Fossil|Fossil|Revived into Anorith.|0
Skull Fossil|Fossil|Revived into Cranidos.|0
Armor Fossil|Fossil|Revived into Shieldon.|0
Cover Fossil|Fossil|Revived into Tirtouga.|0
Plume Fossil|Fossil|Revived into Archen.|0
Jaw Fossil|Fossil|Revived into Tyrunt.|0
Sail Fossil|Fossil|Revived into Amaura.|0
Fossilized Bird|Fossil|Combined with another fossil to revive Dracozolt or Arctozolt.|0
Fossilized Fish|Fossil|Combined with another fossil to revive Dracovish or Arctovish.|0
Fossilized Drake|Fossil|Combined with a bird or fish fossil to revive Dracozolt or Dracovish.|0
Fossilized Dino|Fossil|Combined with a bird or fish fossil to revive Arctozolt or Arctovish.|0
Repel|Field|Keeps weaker wild Pokémon away for 100 steps.|0
Super Repel|Field|Keeps weaker wild Pokémon away for 200 steps.|0
Max Repel|Field|Keeps weaker wild Pokémon away for 250 steps.|0
Escape Rope|Field|Returns you to the last Pokémon Centre you visited.|0
White Flute|Field|Attracts stronger wild Pokémon.|0
Black Flute|Field|Keeps wild Pokémon away.|0
Blue Flute|Field|Wakes a sleeping Pokémon.|0
Yellow Flute|Field|Cures confusion.|0
Red Flute|Field|Cures infatuation.|0
Poké Radar|Field|Searches grass for rustling patches and chained encounters.|0
Super Rod|Field|Fishes for stronger Pokémon.|0
Good Rod|Field|Fishes for better Pokémon than the Old Rod.|0
Old Rod|Field|A basic rod for fishing in water.|0
Growth Mulch|Mulch|Berries grow faster but dry out sooner.|0
Damp Mulch|Mulch|Berries grow more slowly but stay moist longer.|0
Stable Mulch|Mulch|Berry trees last longer before withering.|0
Gooey Mulch|Mulch|Withered berry trees leave more soft soil behind.|0
Rich Mulch|Mulch|Berry plants yield more berries.|0
Surprise Mulch|Mulch|Berry plants are more likely to mutate.|0
Boost Mulch|Mulch|Speeds up berry growth.|0
Amaze Mulch|Mulch|Combines the effects of rich and surprise mulch.|0
Bicycle|Key item|A folding bicycle that travels faster than running.|0
Town Map|Key item|A map of the region that can be viewed any time.|0
Old Sea Map|Key item|A faded map that leads to Faraway Island and Mew.|0
Eon Ticket|Key item|A ticket to Southern Island, where Latias or Latios waits.|0
Aurora Ticket|Key item|A ticket to Birth Island, where Deoxys waits.|0
Mystic Ticket|Key item|A ticket to Navel Rock, where Lugia and Ho-Oh wait.|0
Member Card|Key item|Grants entry to the Harbor Inn, where Darkrai appears.|0
Oak's Letter|Key item|A letter that leads to Shaymin at Flower Paradise.|0
Azure Flute|Key item|A flute that opens the stairway to Arceus at the Hall of Origin.|0
Liberty Pass|Key item|A pass to Liberty Garden, where Victini waits.|0
Enigma Stone|Key item|A stone that leads to Latias or Latios.|0
Key Stone|Key item|Resonates with a Mega Stone to allow Mega Evolution.|0
Z-Power Ring|Key item|Lets a Pokémon holding a Z-Crystal use a Z-Move.|0
Dynamax Band|Key item|Lets a Pokémon Dynamax at a Power Spot.|0
Tera Orb|Key item|Charges up to let a Pokémon Terastallize.|0
Mega Bracelet|Key item|The Kalos Key Stone holder, worn on the wrist.|0
Mega Ring|Key item|A Key Stone holder used in Hoenn.|0
Rotom Catalog|Key item|Changes Rotom between its appliance forms.|0
Reveal Glass|Key item|Switches the Forces of Nature between Incarnate and Therian.|0
Prison Bottle|Key item|Changes Hoopa between Confined and Unbound.|0
Zygarde Cube|Key item|Stores Zygarde Cells and changes Zygarde's form.|0
Gracidea|Key item|Changes Shaymin to Sky Forme in daylight.|0
Red Nectar|Key item|Changes Oricorio to Baile Style.|0
Yellow Nectar|Key item|Changes Oricorio to Pom-Pom Style.|0
Pink Nectar|Key item|Changes Oricorio to Pa'u Style.|0
Purple Nectar|Key item|Changes Oricorio to Sensu Style.|0
Meteorite|Key item|Changes Deoxys between its four formes.|0
Devon Scope|Key item|Reveals invisible Kecleon.|0
Silph Scope|Key item|Reveals the identity of the ghosts in Lavender Tower.|0
Super Rod (Key)|Key item|The best fishing rod, kept as a key item in later games.|0
Coin Case|Key item|Holds coins won at the Game Corner.|0
Vs. Seeker|Key item|Finds trainers who want a rematch.|0
Good Wing|Key item|A Hisuian wing used to improve effort levels.|0
Item Finder|Key item|Signals when a hidden item is nearby.|0
Explorer Kit|Key item|Opens the way into the Underground.|0
Pokémon Box Link|Key item|Lets you access the PC Boxes from anywhere.|0
Catching Charm|Key item|Makes critical captures more likely.|0
Oval Charm|Key item|Makes Eggs appear at the Nursery more often.|0
Shiny Charm|Key item|Increases the chance of finding a Shiny Pokémon.|0
Exp. Charm|Key item|Increases the Exp. Points a Pokémon earns.|0
Rotom Phone|Key item|A Rotom-powered phone that holds the map and other apps.|0
Poké Flute|Key item|Wakes every sleeping Pokémon with its tune.|0
Lure|Field|Attracts wild Pokémon for a short time.|0
Super Lure|Field|Attracts wild Pokémon for longer.|0
Max Lure|Field|Attracts wild Pokémon for the longest time.|0
Sticky Honey|Field|A sweet, sticky lure for wild Pokémon.|0
Wishing Piece|Field|Thrown into a Pokémon Den to summon a Dynamax Pokémon.|0
Wishing Chip|Field|Ten chips can be exchanged for a Wishing Piece.|0
Armorite Ore|Field|Ore from the Isle of Armor, traded for moves and services.|0
Dynite Ore|Field|Ore from the Crown Tundra's Max Lair, traded for rewards.|0
Tera Shard|Field|A shard used to change a Pokémon's Tera Type.|0
Ability Urge|Field|Prompts a Pokémon in a Battle Facility to use its Ability.|0`;
