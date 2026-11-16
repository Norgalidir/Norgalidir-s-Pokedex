// Hall of Fame source data: generations, their games, and the badges (or trials)
// each game awards. Badge art is supplied by the user — drop an image on a badge
// slot, or set a badge path pattern in the Data panel.
window.HOF_GENS = [
  {gen:'I', label:'Generation I', games:[
    {id:'rb', name:'Red · Blue', region:'Kanto', badges:['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth']},
    {id:'y', name:'Yellow', region:'Kanto', badges:['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth']}
  ]},
  {gen:'II', label:'Generation II', games:[
    {id:'gs', name:'Gold · Silver', region:'Johto', badges:['Zephyr','Hive','Plain','Fog','Storm','Mineral','Glacier','Rising']},
    {id:'c', name:'Crystal', region:'Johto', badges:['Zephyr','Hive','Plain','Fog','Storm','Mineral','Glacier','Rising']}
  ]},
  {gen:'III', label:'Generation III', games:[
    {id:'rs', name:'Ruby · Sapphire', region:'Hoenn', badges:['Stone','Knuckle','Dynamo','Heat','Balance','Feather','Mind','Rain']},
    {id:'e', name:'Emerald', region:'Hoenn', badges:['Stone','Knuckle','Dynamo','Heat','Balance','Feather','Mind','Rain']},
    {id:'frlg', name:'FireRed · LeafGreen', region:'Kanto', badges:['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth']}
  ]},
  {gen:'IV', label:'Generation IV', games:[
    {id:'dp', name:'Diamond · Pearl', region:'Sinnoh', badges:['Coal','Forest','Cobble','Fen','Relic','Mine','Icicle','Beacon']},
    {id:'pt', name:'Platinum', region:'Sinnoh', badges:['Coal','Forest','Cobble','Fen','Relic','Mine','Icicle','Beacon']},
    {id:'hgss', name:'HeartGold · SoulSilver', region:'Johto', badges:['Zephyr','Hive','Plain','Fog','Storm','Mineral','Glacier','Rising']}
  ]},
  {gen:'V', label:'Generation V', games:[
    {id:'bw', name:'Black · White', region:'Unova', badges:['Trio','Basic','Insect','Bolt','Quake','Jet','Legend','Freeze']},
    {id:'b2w2', name:'Black 2 · White 2', region:'Unova', badges:['Basic','Toxic','Insect','Bolt','Quake','Jet','Legend','Wave']}
  ]},
  {gen:'VI', label:'Generation VI', games:[
    {id:'xy', name:'X · Y', region:'Kalos', badges:['Bug','Cliff','Rumble','Plant','Voltage','Fairy','Psychic','Iceberg']},
    {id:'oras', name:'Omega Ruby · Alpha Sapphire', region:'Hoenn', badges:['Stone','Knuckle','Dynamo','Heat','Balance','Feather','Mind','Rain']}
  ]},
  {gen:'VII', label:'Generation VII', games:[
    {id:'sm', name:'Sun · Moon', region:'Alola', badges:['Melemele','Akala','Ula\u2019ula','Poni'], note:'Grand trials'},
    {id:'usum', name:'Ultra Sun · Ultra Moon', region:'Alola', badges:['Melemele','Akala','Ula\u2019ula','Poni'], note:'Grand trials'},
    {id:'lgpe', name:"Let's Go Pikachu · Eevee", region:'Kanto', badges:['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth']}
  ]},
  {gen:'VIII', label:'Generation VIII', games:[
    {id:'swsh', name:'Sword · Shield', region:'Galar', badges:['Grass','Water','Fire','Fighting','Ghost','Fairy','Rock','Ice','Dark','Dragon'], note:'Eight earned per playthrough'},
    {id:'bdsp', name:'Brilliant Diamond · Shining Pearl', region:'Sinnoh', badges:['Coal','Forest','Cobble','Fen','Relic','Mine','Icicle','Beacon']},
    {id:'pla', name:'Legends: Arceus', region:'Hisui', badges:[], note:'No badges — Survey Corps ranks'}
  ]},
  {gen:'IX', label:'Generation IX', games:[
    {id:'sv', name:'Scarlet · Violet', region:'Paldea', badges:['Bug','Grass','Electric','Water','Normal','Ghost','Psychic','Ice']},
    {id:'za', name:'Legends: Z-A', region:'Lumiose', badges:[], note:'No badges — Z-A Royale ranks'}
  ]},
  // Fan games (ROM hacks). They have their own honours and don't count
  // towards the official region Champion badges. You can add others in the
  // Hall of Fame; those are kept in your save.
  {gen:'Fan', label:'Fan games', fan:true, games:[
    {id:'ek', name:'Emerald Kaizo', region:'Hoenn', fan:true, kaizo:true, badges:['Stone','Knuckle','Dynamo','Heat','Balance','Feather','Mind','Rain'], note:'Emerald hack · very hard'},
    {id:'rr', name:'Radical Red', region:'Kanto', fan:true, badges:['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth'], note:'FireRed hack'},
    {id:'ie', name:'Inclement Emerald', region:'Hoenn', fan:true, badges:['Stone','Knuckle','Dynamo','Heat','Balance','Feather','Mind','Rain'], note:'Emerald hack'},
    {id:'rnb', name:'Run & Bun', region:'Hoenn', fan:true, badges:['Stone','Knuckle','Dynamo','Heat','Balance','Feather','Mind','Rain'], note:'Emerald hack · Nuzlocke-focused'},
    {id:'cc', name:'Crystal Clear', region:'Johto · Kanto', fan:true, badges:['Zephyr','Hive','Plain','Fog','Storm','Mineral','Glacier','Rising','Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth'], note:'Open-world Crystal hack · 16 badges'}
  ]}
];
// The built-in fan games, kept so ones you add can be put back alongside them.
window.HOF_FAN_BUILTIN = window.HOF_GENS[window.HOF_GENS.length - 1].games.slice();
