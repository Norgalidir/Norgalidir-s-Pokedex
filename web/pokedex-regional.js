// Regional variants that are fully catchable and count toward living-form totals.
// Keyed by national dex number, then by form label as it appears in window.FORMS.
// t = types, s = hp,atk,def,spa,spd,spe, a = abilities (* = hidden), h/w = height/weight, d = description.
window.REGIONAL_FORMS = Object.assign(window.REGIONAL_FORMS || {}, {
  19: {Alolan:{t:'Dark,Normal',s:'30,56,35,25,35,72',a:'Gluttony,Hustle,Thick Fat*',h:'0.3',w:'3.8',d:'Alolan Rattata. Brought to Alola to control Yungoos, it turned nocturnal and now raids kitchens in family packs.'}},
  20: {Alolan:{t:'Dark,Normal',s:'75,71,70,40,80,77',a:'Gluttony,Hustle,Thick Fat*',h:'0.7',w:'25.5',d:'Alolan Raticate. The boss of a large hoard, it sends its underlings out to gather the choicest food and eats only the best of it.'}},
  26: {Alolan:{t:'Electric,Psychic',s:'60,85,50,95,85,110',a:'Surge Surfer',h:'0.7',w:'21.0',d:'Alolan Raichu. A diet of sweet pancakes seems to have woken psychic power; it rides its own tail like a surfboard.'}},
  27: {Alolan:{t:'Ice,Steel',s:'50,75,90,10,35,40',a:'Snow Cloak,Slush Rush*',h:'0.7',w:'40.0',d:'Alolan Sandshrew. Driven to the snow line by volcanic eruptions, its hide hardened into ice-clad steel.'}},
  28: {Alolan:{t:'Ice,Steel',s:'75,100,120,25,65,65',a:'Snow Cloak,Slush Rush*',h:'1.2',w:'55.0',d:'Alolan Sandslash. Its back spines are long icicles; it skates across the snowfields of Mount Lanakila.'}},
  37: {Alolan:{t:'Ice',s:'38,41,40,50,65,65',a:'Snow Cloak,Snow Warning*',h:'0.6',w:'9.9',d:'Alolan Vulpix. It breathes air cold enough to freeze its own body, and lives high on the snowy peaks.'}},
  38: {Alolan:{t:'Ice,Fairy',s:'73,67,75,81,100,109',a:'Snow Cloak,Snow Warning*',h:'1.1',w:'19.9',d:'Alolan Ninetales. Revered as a deity of the mountain, it creates ice crystals with its nine tails.'}},
  50: {Alolan:{t:'Ground,Steel',s:'10,55,30,35,45,90',a:'Sand Veil,Tangling Hair,Sand Force*',h:'0.2',w:'1.0',d:'Alolan Diglett. Metallic whiskers sprout from its head and serve as sensors for its surroundings.'}},
  51: {Alolan:{t:'Ground,Steel',s:'35,100,60,50,70,110',a:'Sand Veil,Tangling Hair,Sand Force*',h:'0.7',w:'66.6',d:'Alolan Dugtrio. Its three heads share a mane of golden steel hair, treated in Alola as a symbol of good fortune.'}},
  52: {Alolan:{t:'Dark',s:'40,35,35,50,40,90',a:'Pickup,Technician,Rattled*',h:'0.4',w:'4.2',d:'Alolan Meowth. Raised by royalty and grown proud and scheming, it holds grudges over the smallest slight.'}},
  53: {Alolan:{t:'Dark',s:'65,60,60,75,65,115',a:'Fur Coat,Technician,Rattled*',h:'1.1',w:'33.0',d:'Alolan Persian. Its rounded face was prized by Alolan nobility; it is arrogant and quick to take offence.'}},
  74: {Alolan:{t:'Rock,Electric',s:'40,80,100,30,30,20',a:'Magnet Pull,Sturdy,Galvanize*',h:'0.4',w:'20.3',d:'Alolan Geodude. Iron in its body draws magnetism; the crystals on its brow crackle with static.'}},
  75: {Alolan:{t:'Rock,Electric',s:'55,95,115,45,45,35',a:'Magnet Pull,Sturdy,Galvanize*',h:'1.0',w:'110.0',d:'Alolan Graveler. It eats rocks rich in iron and sparks constantly as it rolls downhill.'}},
  76: {Alolan:{t:'Rock,Electric',s:'80,120,130,55,65,45',a:'Magnet Pull,Sturdy,Galvanize*',h:'1.7',w:'316.0',d:'Alolan Golem. A railgun of a Pokémon: it launches charged boulders from its back at anything that provokes it.'}},
  88: {Alolan:{t:'Poison,Dark',s:'80,80,50,40,50,25',a:'Poison Touch,Gluttony,Power of Alchemy*',h:'0.7',w:'42.0',d:'Alolan Grimer. Imported to handle the islands\u2019 waste, a diet of garbage turned its sludge into crystallised toxins.'}},
  89: {Alolan:{t:'Poison,Dark',s:'105,105,75,65,100,50',a:'Poison Touch,Gluttony,Power of Alchemy*',h:'1.0',w:'52.0',d:'Alolan Muk. Its colours shift constantly with what it has eaten, and it grows irritable when underfed.'}},
  103:{Alolan:{t:'Grass,Dragon',s:'95,105,85,125,75,45',a:'Frisk,Harvest*',h:'10.9',w:'415.6',d:'Alolan Exeggutor. Alola\u2019s strong sunlight drew out its true form; the fourth head on its tail fights independently.'}},
  105:{Alolan:{t:'Fire,Ghost',s:'60,80,110,50,80,45',a:'Cursed Body,Lightning Rod,Rock Head*',h:'1.0',w:'34.0',d:'Alolan Marowak. It dances to soothe the spirits of fallen comrades, spinning a bone lit with green flame.'}}
});
