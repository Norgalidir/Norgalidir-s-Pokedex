// Encounter data for FireRed / LeafGreen (f, l), HeartGold / SoulSilver (h, g)
// and Diamond / Pearl / Platinum (d, p, t), generated from PokéAPI.
// Same line format as pokedex-encounters-hoenn.js:
//   Location|games|method|dex:levels:rate:games:condition, ...
// Rates are summed slot chances for that game and condition. Time-of-day,
// swarm, radar and radio entries are listed separately, so rows with a
// condition replace base rows rather than adding to them.
window.ENCOUNTERS_MORE = Object.assign(window.ENCOUNTERS_MORE || {}, {
  kanto: `
Celadon City|gh|headbutt|21:15-17:50:gh:Common Headbutt tree,21:18-20:80:gh:Rare Headbutt tree,214:15-17:30:gh:Common Headbutt tree,415:15-17:20:gh:Common Headbutt tree,415:18-20:20:gh:Rare Headbutt tree
Celadon City|fghl|surf|54:5-40:99:f:,79:5-40:99:l:,88:15-20:90:gh:,89:15:10:gh:,109:30-40:1:fl:
Celadon City|fl|super-rod|88:30-40:1:fl:,129:15-35:99:fl:
Celadon City|fl|good-rod|129:5-15:100:fl:
Celadon City|fl|old-rod|129:5:100:fl:
Celadon City Celadon Mansion|fl|gift|133:25::fl:
Celadon City Prize Corner|fghl|gift|35:8::f:500 coins,35:12::l:750 coins,63:9::f:180 coins,63:7::l:120 coins,122:15::gh:3333 coins,123:25::f:5500 coins,127:18::l:2500 coins,133:15::gh:6666 coins,137:26::f:9999 coins,137:15::gh:9999 coins,137:18::l:6500 coins,147:18::f:2800 coins,147:24::l:4600 coins
Cerulean City|fghl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,118:40:70:gh:,119:40:10:gh:,129:40:20:gh:,130:15-25:15:fl:
Cerulean City|fghl|surf|72:5-40:100:fl:,118:5-10:90:gh:,119:10:10:gh:
Cerulean City|fghl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,118:20:60:gh:,129:5-15:20:fl:,129:20:40:gh:
Cerulean City|fghl|old-rod|118:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Cerulean City|fl|trade|124:20-100::fl:Trade a Poliwhirl
Cerulean City|gh|headbutt|163:11-13:50:gh:Common Headbutt tree,163:14-16:80:gh:Rare Headbutt tree,204:11-13:30:gh:Common Headbutt tree,415:11-13:20:gh:Common Headbutt tree,415:14-16:20:gh:Rare Headbutt tree
Cinnabar Island|fghl|super-rod|54:25-35:1:f:,73:40:20:gh:,79:25-35:1:l:,80:25-35:4:l:,90:15-25:40:f:,90:40:30:gh:,98:15-25:40:l:,116:15-25:40:f:,117:25-35:4:f:,120:15-25:40:l:,130:15-25:15:fl:,170:40:40:gh:,171:40:10:gh:
Cinnabar Island|fghl|surf|72:5-40:100:fl:,72:30-35:90:gh:,73:35:10:gh:
Cinnabar Island|fghl|old-rod|72:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Cinnabar Island|fghl|good-rod|72:20:30:gh:,90:20:10:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:,170:20:20:gh:
Cinnabar Island Cinnabar Lab|fl|trade|86:5-100::fl:Trade a Ponyta,101:3-100::fl:Trade a Raichu,114:5-100::fl:Trade a Venonat
Cinnabar Island Cinnabar Lab|fl|gift|138:5::fl:Revived from the Helix Fossil,140:5::fl:Revived from the Dome Fossil,142:5::fl:Revived from the Old Amber
Diglett's Cave|fghl|walk|50:15-22:95:fl:,50:13-19:90:gh:,51:29-31:5:fl:,51:19-29:10:gh:,296:19:20:gh:Hoenn Sound on the radio,359:15-17:20:gh:Hoenn Sound on the radio,433:19:20:gh:Sinnoh Sound on the radio,436:15-17:20:gh:Sinnoh Sound on the radio
Diglett's Cave|gh|trade|111:1-100::gh:Trade a Bonsly
Fuchsia City|fghl|super-rod|54:15-35:5:f:,79:15-35:5:l:,118:15-25:40:fl:,119:20-30:40:fl:,129:40:70:gh:,130:15-25:15:fl:,130:40:30:gh:
Fuchsia City|fghl|surf|54:20-40:100:f:,79:20-40:100:l:,129:10-20:100:gh:
Fuchsia City|fghl|good-rod|60:5-15:20:fl:,118:5-15:60:fl:,129:5-15:20:fl:,129:20:90:gh:,130:20:10:gh:
Fuchsia City|gh|headbutt|114:26-34:15:gh:Rare Headbutt tree,163:21-23:50:gh:Common Headbutt tree,163:26-34:65:gh:Rare Headbutt tree,165:21-23:30:g:Common Headbutt tree,167:21-23:30:h:Common Headbutt tree,265:21-23:20:gh:Common Headbutt tree,265:26-34:20:gh:Rare Headbutt tree
Fuchsia City|fghl|old-rod|129:5:100:fl:,129:10:100:gh:
Mt. Moon Square|gh|good-rod|60:20:30:gh:,129:20:70:gh:
Mt. Moon Square|gh|super-rod|60:40:100:gh:
Mt. Moon Square|gh|surf|60:35:60:gh:,129:30-35:40:gh:
Mt. Moon Square|gh|old-rod|129:10:100:gh:
Mt. Moon 1F|fghl|walk|27:8:20:h:,28:10:5:h:,35:8:1:fl:,35:8:5:gh:,41:7-10:69:fl:,41:6:30:h:,41:6-8:50:g:,46:8:5:fl:,46:12:10:gh:,74:7-9:25:fl:,74:8:30:h:,74:8-10:35:g:,296:8:20:gh:Hoenn Sound on the radio,359:6-8:20:gh:Hoenn Sound on the radio,433:8:20:gh:Sinnoh Sound on the radio,436:6-8:20:gh:Sinnoh Sound on the radio
Mt. Moon 2F|gh|walk|27:8:20:h:,28:10:5:h:,35:8:5:gh:,41:6:30:h:,41:6-8:50:g:,46:12:10:gh:,74:8:30:h:,74:8-10:35:g:,296:8:20:gh:Hoenn Sound on the radio,359:6-8:20:gh:Hoenn Sound on the radio,433:8:20:gh:Sinnoh Sound on the radio,436:6-8:20:gh:Sinnoh Sound on the radio
Mt. Moon B1F|fl|walk|46:5-10:100:fl:
Mt. Moon B2F|fl|walk|35:10-12:6:fl:,41:8-11:49:fl:,46:10-12:15:fl:,74:9-10:30:fl:
Pallet Town|fghl|gift|1:5::fl:,1:5::gh:Story  beat red,4:5::fl:,4:5::gh:Story  beat red,7:5::fl:,7:5::gh:Story  beat red
Pallet Town|fghl|super-rod|54:25-35:1:f:,73:40:20:gh:,79:25-35:1:l:,90:15-25:40:f:,90:40:30:gh:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,120:15-25:40:l:,130:15-25:15:fl:,170:40:40:gh:,171:40:10:gh:
Pallet Town|fghl|surf|72:5-40:100:fl:,72:30-35:90:gh:,73:35:10:gh:
Pallet Town|fghl|old-rod|72:10:15:gh:,129:5-10:100:fl:,129:10:85:gh:
Pallet Town|fghl|good-rod|72:20:30:gh:,90:20:10:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:,170:20:20:gh:
Pallet Town|gh|headbutt|163:2-3:50:gh:Common Headbutt tree,163:5-6:50:gh:Rare Headbutt tree,165:5-6:30:g:Rare Headbutt tree,167:5-6:30:h:Rare Headbutt tree,204:2-3:30:gh:Common Headbutt tree,265:2-3:20:gh:Common Headbutt tree,265:5-6:20:gh:Rare Headbutt tree
Rock Tunnel 1F|fghl|walk|41:15-16:30:fl:,41:8:10:gh:,56:16-17:15:fl:,66:16-17:15:fl:,66:12:20:gh:,67:14:5:gh:,74:15-17:35:fl:,74:10:30:gh:,95:13-15:5:fl:,104:10-13:35:gh:,296:12:20:gh:Hoenn Sound on the radio,359:10:20:gh:Hoenn Sound on the radio,433:12:20:gh:Sinnoh Sound on the radio,436:10:20:gh:Sinnoh Sound on the radio
Rock Tunnel B1F|fghl|walk|41:15-16:30:fl:,41:10:10:gh:,56:16-17:15:fl:,66:17:10:fl:,74:15-17:35:fl:,74:12:30:gh:,95:13-17:10:fl:,95:16:20:gh:,104:12:30:gh:,105:14:5:gh:,115:14:5:gh:,296:16:20:gh:Hoenn Sound on the radio,359:12:20:gh:Hoenn Sound on the radio,433:16:20:gh:Sinnoh Sound on the radio,436:12:20:gh:Sinnoh Sound on the radio
Rock Tunnel B1F|fghl|rock-smash|74:5-30:95:fl:,74:12-21:100:gh:,75:25-40:5:fl:
Route 1|fghl|walk|16:2-5:50:fl:,16:2-4:45:gh:Morning,16:2-4:45:gh:Day,19:2-4:50:fl:,19:2:30:gh:,19:3-6:25:gh:Night,161:3:20:gh:Morning,161:3:20:gh:Day,162:6:5:gh:Morning,162:6:5:gh:Day,163:2-4:45:gh:Night,261:2:40:gh:Swarm,311:2:20:gh:Hoenn Sound on the radio,312:3:20:gh:Hoenn Sound on the radio,403:2-3:40:gh:Sinnoh Sound on the radio
Route 1|gh|headbutt|163:2-3:50:gh:Common Headbutt tree,163:5-6:50:gh:Rare Headbutt tree,165:5-6:30:g:Rare Headbutt tree,167:5-6:30:h:Rare Headbutt tree,204:2-3:30:gh:Common Headbutt tree,265:2-3:20:gh:Common Headbutt tree,265:5-6:20:gh:Rare Headbutt tree
Route 10|fghl|walk|20:16:20:gh:,20:18:5:gh:Morning,20:18:5:gh:Night,21:13-17:35:fl:,21:16:30:gh:Morning,21:16:30:gh:Day,22:18:10:gh:Morning,22:18:10:gh:Day,23:11-17:25:f:,27:11-17:25:l:,100:14-17:40:fl:,100:17:30:gh:,125:18:5:gh:Day,125:15:5:gh:,195:16-18:40:gh:Night,264:16:20:gh:Hoenn Sound on the radio,293:16-17:20:gh:Hoenn Sound on the radio,399:16:20:gh:Sinnoh Sound on the radio,418:16-17:20:gh:Sinnoh Sound on the radio
Route 10|fghl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,118:40:70:gh:,119:40:10:gh:,129:40:20:gh:,130:15-25:15:fl:
Route 10|fghl|surf|72:5-40:100:fl:,118:10-15:90:gh:,119:15:10:gh:
Route 10|fghl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,118:20:60:gh:,129:5-15:20:fl:,129:20:40:gh:
Route 10|fghl|old-rod|118:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 10|gh|static|145:50::gh:Story  returned machine part
Route 11|fghl|walk|19:15:30:gh:,21:13-17:35:fl:,23:12-15:40:f:,27:12-15:40:l:,81:15:20:gh:,96:11-15:25:fl:,96:14-16:40:gh:,97:16:10:gh:,311:14-15:20:gh:Hoenn Sound on the radio,312:15:20:gh:Hoenn Sound on the radio,403:14-15:40:gh:Sinnoh Sound on the radio
Route 11|gh|headbutt|21:13-14:50:gh:Common Headbutt tree,21:15-16:80:gh:Rare Headbutt tree,214:13-14:30:gh:Common Headbutt tree,415:13-14:20:gh:Common Headbutt tree,415:15-16:20:gh:Rare Headbutt tree
Route 11|fl|trade|30:16-100::f:Trade a Nidorino,33:16-100::l:Trade a Nidorina
Route 11|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,130:15-25:15:fl:
Route 11|fl|surf|72:5-40:100:fl:
Route 11|fl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:
Route 11|fl|old-rod|129:5:100:fl:
Route 11|gh|static|143:50::gh:
Route 12|fl|walk|16:23-27:30:fl:,43:22-26:35:f:,44:28-30:5:f:,48:24-26:30:fl:,69:22-26:35:l:,70:28-30:5:l:
Route 12|fghl|super-rod|54:25-35:1:f:,72:40:70:gh:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,129:40:20:gh:,130:15-25:15:fl:,211:40:10:gh:,369:40:100:gh:Swarm
Route 12|fghl|surf|72:5-40:100:fl:,72:25:60:gh:,73:25:10:gh:,195:25:30:gh:
Route 12|fghl|old-rod|72:10:15:gh:,129:5:100:fl:,129:10:85:gh:,369:10:15:gh:Swarm
Route 12|fghl|good-rod|72:20:60:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:,369:20:65:gh:Swarm
Route 12|gh|headbutt|114:24-25:15:gh:Rare Headbutt tree,163:22-23:50:gh:Common Headbutt tree,163:24-25:65:gh:Rare Headbutt tree,165:22-23:30:g:Common Headbutt tree,167:22-23:30:h:Common Headbutt tree,265:22-23:20:gh:Common Headbutt tree,265:24-25:20:gh:Rare Headbutt tree
Route 12|fghl|static|143:30::fl:,143:50::gh:Snorlax 11 beat league
Route 13|fghl|walk|16:25-27:20:fl:,17:29:5:fl:,17:25:20:gh:Morning,17:25:20:gh:Day,30:23:30:gh:,33:23:30:gh:,43:22-26:35:f:,44:28-30:5:f:,48:24-26:30:fl:,69:22-26:35:l:,70:28-30:5:l:,113:23:40:gh:Swarm,113:25:1:gh:,132:25:5:fl:,164:25:20:gh:Night,187:22-24:19:gh:Morning,187:22-24:19:gh:Day,195:22-24:19:gh:Night,264:25:20:gh:Hoenn Sound on the radio,293:23:20:gh:Hoenn Sound on the radio,399:25:20:gh:Sinnoh Sound on the radio,418:23:20:gh:Sinnoh Sound on the radio
Route 13|fghl|super-rod|54:25-35:1:f:,72:40:70:gh:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,129:40:20:gh:,130:15-25:15:fl:,211:40:10:gh:
Route 13|fghl|surf|72:5-40:100:fl:,72:25:60:gh:,73:25:10:gh:,195:25:30:gh:
Route 13|fghl|old-rod|72:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 13|fghl|good-rod|72:20:60:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:
Route 13|gh|headbutt|114:24-25:15:gh:Rare Headbutt tree,163:22-23:50:gh:Common Headbutt tree,163:24-25:65:gh:Rare Headbutt tree,165:22-23:30:g:Common Headbutt tree,167:22-23:30:h:Common Headbutt tree,265:22-23:20:gh:Common Headbutt tree,265:24-25:20:gh:Rare Headbutt tree
Route 14|fghl|walk|16:27:10:fl:,17:29:5:fl:,17:25:20:gh:Morning,17:25:20:gh:Day,30:23:30:gh:,33:23:30:gh:,43:22-26:35:f:,44:30:5:f:,48:24-26:30:fl:,69:22-26:35:l:,70:30:5:l:,113:25:1:gh:,132:23:15:fl:,164:25:20:gh:Night,187:24:10:gh:Morning,187:24:10:gh:Day,188:26:9:gh:Morning,188:26:9:gh:Day,195:24-26:19:gh:Night,311:23:20:gh:Hoenn Sound on the radio,312:25:20:gh:Hoenn Sound on the radio,403:23-25:40:gh:Sinnoh Sound on the radio
Route 14|gh|headbutt|114:29-30:15:gh:Rare Headbutt tree,163:26-27:50:gh:Common Headbutt tree,163:29-30:65:gh:Rare Headbutt tree,165:26-27:30:g:Common Headbutt tree,167:26-27:30:h:Common Headbutt tree,265:26-27:20:gh:Common Headbutt tree,265:29-30:20:gh:Rare Headbutt tree
Route 15|fghl|walk|16:25-27:20:fl:,17:29:5:fl:,17:25:20:gh:Morning,17:25:20:gh:Day,30:23:30:gh:,33:23:30:gh:,43:22-26:35:f:,44:28-30:5:f:,48:24-26:30:fl:,69:22-26:35:l:,70:28-30:5:l:,113:25:1:gh:,132:25:5:fl:,164:25:20:gh:Night,187:22-24:19:gh:Morning,187:22-24:19:gh:Day,195:22-24:19:gh:Night,311:23:20:gh:Hoenn Sound on the radio,312:25:20:gh:Hoenn Sound on the radio,403:23-25:40:gh:Sinnoh Sound on the radio
Route 15|gh|headbutt|114:24-26:15:gh:Rare Headbutt tree,163:21-23:50:gh:Common Headbutt tree,163:24-26:65:gh:Rare Headbutt tree,165:21-23:30:g:Common Headbutt tree,167:21-23:30:h:Common Headbutt tree,265:21-23:20:gh:Common Headbutt tree,265:24-26:20:gh:Rare Headbutt tree
Route 16|fghl|walk|19:18-22:30:fl:,20:23-25:5:fl:,21:20-22:30:fl:,22:27-29:40:gh:Morning,22:27-29:40:gh:Day,84:18-22:35:fl:,88:26-28:50:gh:,88:27:30:gh:Night,89:30:5:gh:,198:29:10:gh:Night,218:27:5:gh:,311:26-27:20:gh:Hoenn Sound on the radio,312:28:20:gh:Hoenn Sound on the radio,403:26-28:40:gh:Sinnoh Sound on the radio
Route 16|gh|headbutt|21:26-27:50:gh:Common Headbutt tree,21:29-30:80:gh:Rare Headbutt tree,214:26-27:30:gh:Common Headbutt tree,415:26-27:20:gh:Common Headbutt tree,415:29-30:20:gh:Rare Headbutt tree
Route 16|fl|static|143:30::fl:
Route 17|fghl|walk|19:22:5:fl:,20:25-29:25:fl:,21:20-22:30:fl:,22:25-27:5:fl:,22:28-30:40:gh:Morning,22:28-30:40:gh:Day,84:24-28:35:fl:,88:27-28:60:gh:Night,88:27:30:gh:Morning,88:29:20:gh:,89:30:10:gh:Night,89:32:5:gh:,218:27:30:gh:Day,218:29:5:gh:,311:27-28:20:gh:Hoenn Sound on the radio,312:29:20:gh:Hoenn Sound on the radio,403:27-29:40:gh:Sinnoh Sound on the radio
Route 18|fghl|walk|19:22:5:fl:,20:25-29:15:fl:,21:20-22:30:fl:,22:25-29:15:fl:,22:27-29:40:gh:Morning,22:27-29:40:gh:Day,84:24-28:35:fl:,88:26-28:50:gh:,88:27:30:gh:Night,89:29:10:gh:Night,89:30:5:gh:,218:27:5:gh:,311:26-27:20:gh:Hoenn Sound on the radio,312:28:20:gh:Hoenn Sound on the radio,403:26-28:40:gh:Sinnoh Sound on the radio
Route 18|fl|trade|108:33-100::f:Trade a Golduck,108:25-100::l:Trade a Slowbro
Route 18|gh|headbutt|114:29-30:15:gh:Rare Headbutt tree,163:26-27:50:gh:Common Headbutt tree,163:29-30:65:gh:Rare Headbutt tree,165:26-27:30:g:Common Headbutt tree,167:26-27:30:h:Common Headbutt tree,265:26-27:20:gh:Common Headbutt tree,265:29-30:20:gh:Rare Headbutt tree
Sea Route 19|fghl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:80:l:,98:40:60:gh:,99:25-35:4:l:,99:40:10:gh:,116:15-25:80:f:,117:25-35:4:f:,120:40:30:gh:Night,130:15-25:15:fl:,222:40:30:gh:Morning,222:40:30:gh:Day
Sea Route 19|fghl|surf|72:5-40:100:fl:,72:30-35:90:gh:,73:35:10:gh:,366:35:60:gh:Swarm
Sea Route 19|fghl|good-rod|98:5-15:20:f:,98:5-15:60:l:,98:20:50:gh:,116:5-15:60:f:,116:5-15:20:l:,120:20:10:gh:Night,129:5-15:20:fl:,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Sea Route 19|fghl|old-rod|98:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Sea Route 19|gh|rock-smash|98:24-27:10:gh:,99:28-31:90:gh:
Route 2 South Towards Viridian City|fghl|walk|10:4-5:5:fl:,10:3-4:31:h:Morning,10:3-4:31:h:Day,11:5:20:h:Morning,11:5:20:h:Day,12:7-8:10:h:Morning,13:4-5:5:fl:,13:4:1:g:,13:3:30:g:Day,13:3:10:g:Morning,13:5:10:g:Night,14:3-7:11:g:Night,14:5:20:g:Morning,14:5:20:g:Day,15:7:10:g:Morning,15:10:4:g:Night,16:2-5:45:fl:,16:3:30:h:Morning,16:3:20:g:Morning,16:3-8:40:h:Day,16:3-7:40:g:Day,17:7:5:h:Morning,17:7-10:9:h:Day,17:7:5:g:Day,19:2-5:45:fl:,163:3-5:50:h:Night,163:3-5:60:g:Night,164:7-10:14:h:Night,164:7:14:g:Night,165:3:30:g:Morning,165:10:4:g:Day,166:7-10:9:g:Morning,167:3-4:31:h:Night,167:10:4:h:Morning,168:7:5:h:Night,311:3:20:gh:Hoenn Sound on the radio,312:5:20:gh:Hoenn Sound on the radio,403:3-5:40:gh:Sinnoh Sound on the radio
Route 2 South Towards Viridian City|gh|headbutt|163:3-4:50:gh:Common Headbutt tree,163:5-7:50:gh:Rare Headbutt tree,165:5-7:30:g:Rare Headbutt tree,167:5-7:30:h:Rare Headbutt tree,204:3-4:30:gh:Common Headbutt tree,265:3-4:20:gh:Common Headbutt tree,265:5-7:20:gh:Rare Headbutt tree
Route 2 North Towards Pewter City|gh|walk|10:3-4:31:h:Morning,10:3-4:31:h:Day,11:5:20:h:Morning,12:7-8:10:h:Morning,12:7-8:10:h:Day,13:3:30:g:Day,13:3:10:g:Morning,13:5:10:g:Night,13:4:1:g:,14:3-7:11:g:Night,14:5:20:g:Morning,14:5:20:g:Day,15:7:10:g:Morning,15:10:4:g:Night,16:3:30:h:Morning,16:3:20:g:Morning,16:3-5:50:h:Day,16:3-7:40:g:Day,17:7:5:h:Morning,17:7-10:9:h:Day,17:7:5:g:Day,163:3-5:50:h:Night,163:3-5:60:g:Night,164:7-10:14:h:Night,164:7:14:g:Night,165:3:30:g:Morning,165:10:4:g:Day,166:7-10:9:g:Morning,167:3-4:31:h:Night,167:10:4:h:Morning,168:7:5:h:Night,311:3:20:gh:Hoenn Sound on the radio,312:5:20:gh:Hoenn Sound on the radio,403:3-5:40:gh:Sinnoh Sound on the radio
Route 2 North Towards Pewter City|fl|trade|122:5-100::fl:Trade a Abra
Route 2 North Towards Pewter City|gh|headbutt|163:3-4:50:gh:Common Headbutt tree,163:5-7:50:gh:Rare Headbutt tree,165:5-7:30:g:Rare Headbutt tree,167:5-7:30:h:Rare Headbutt tree,204:3-4:30:gh:Common Headbutt tree,265:3-4:20:gh:Common Headbutt tree,265:5-7:20:gh:Rare Headbutt tree
Sea Route 20|fghl|super-rod|54:25-35:1:f:,73:40:20:gh:,79:25-35:1:l:,90:40:30:gh:,98:15-25:80:l:,99:25-35:4:l:,116:15-25:80:f:,117:25-35:4:f:,130:15-25:15:fl:,170:40:40:gh:,171:40:10:gh:
Sea Route 20|fghl|surf|72:5-40:100:fl:,72:30-35:90:gh:,73:35:10:gh:
Sea Route 20|fghl|old-rod|72:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Sea Route 20|fghl|good-rod|72:20:30:gh:,90:20:10:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:,170:20:20:gh:
Sea Route 21|fghl|super-rod|54:25-35:1:f:,73:40:20:gh:,79:25-35:1:l:,90:40:30:gh:,98:15-25:80:l:,99:25-35:4:l:,116:15-25:80:f:,117:25-35:4:f:,130:15-25:15:fl:,170:40:40:gh:,171:40:10:gh:
Sea Route 21|fghl|surf|72:5-40:100:fl:,72:30-35:90:gh:,73:35:10:gh:
Sea Route 21|fghl|old-rod|72:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Sea Route 21|fghl|good-rod|72:20:30:gh:,90:20:10:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:,170:20:20:gh:
Sea Route 21|fghl|walk|114:17-28:100:fl:,114:20-35:90:gh:,114:30:5:gh:Morning,114:30:5:gh:Night,122:30:5:gh:Day,122:28:5:gh:,264:35:20:gh:Hoenn Sound on the radio,293:25-30:20:gh:Hoenn Sound on the radio,399:35:20:gh:Sinnoh Sound on the radio,418:25-30:20:gh:Sinnoh Sound on the radio
Sea Route 21|gh|headbutt|114:27-30:15:gh:Rare Headbutt tree,163:24-26:50:gh:Common Headbutt tree,163:27-30:65:gh:Rare Headbutt tree,165:24-26:30:g:Common Headbutt tree,167:24-26:30:h:Common Headbutt tree,265:24-26:20:gh:Common Headbutt tree,265:27-30:20:gh:Rare Headbutt tree
Route 22|fghl|walk|19:2-5:45:fl:,19:3:30:gh:,19:3-7:65:gh:Night,21:3-5:10:fl:,21:3-5:50:gh:Morning,21:3-5:50:gh:Day,22:7:5:gh:Morning,22:7:5:gh:Day,56:2-5:45:fl:,77:6:5:gh:,84:4:10:gh:Morning,84:4:10:gh:Day,264:5:20:gh:Hoenn Sound on the radio,293:3:20:gh:Hoenn Sound on the radio,399:5:20:gh:Sinnoh Sound on the radio,418:3:20:gh:Sinnoh Sound on the radio
Route 22|fghl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,60:40:80:gh:,61:20-30:40:fl:,79:15-35:5:l:,129:40:20:gh:,130:15-25:15:fl:
Route 22|fghl|surf|54:20-40:100:f:,60:5-10:90:gh:,61:10:10:gh:,79:20-40:100:l:
Route 22|fghl|good-rod|60:5-15:60:fl:,60:20:60:gh:,118:5-15:20:fl:,129:5-15:20:fl:,129:20:40:gh:
Route 22|fghl|old-rod|60:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 22|gh|headbutt|163:3-4:50:gh:Common Headbutt tree,163:5-7:50:gh:Rare Headbutt tree,165:5-7:30:g:Rare Headbutt tree,167:5-7:30:h:Rare Headbutt tree,204:3-4:30:gh:Common Headbutt tree,265:3-4:20:gh:Common Headbutt tree,265:5-7:20:gh:Rare Headbutt tree
Route 24|fghl|walk|10:7:20:fl:,11:8:1:f:,11:8:4:l:,13:7:20:fl:,14:8:4:f:,14:8:1:l:,16:11-13:15:fl:,43:12-14:25:f:,43:10:30:gh:Night,48:8:30:gh:Night,48:8:5:gh:Morning,49:14:5:gh:Night,63:8-12:15:fl:,63:9:20:gh:,69:12-14:25:l:,69:8-10:60:gh:Morning,69:8:35:gh:Day,69:8:5:gh:Night,70:12:10:gh:,70:14:5:gh:Morning,70:14:5:gh:Day,191:10:30:gh:Day,264:9:20:gh:Hoenn Sound on the radio,293:8-10:20:gh:Hoenn Sound on the radio,399:9:20:gh:Sinnoh Sound on the radio,418:8-10:20:gh:Sinnoh Sound on the radio
Route 24|fghl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,118:40:70:gh:,119:40:10:gh:,129:40:20:gh:,130:15-25:15:fl:
Route 24|fghl|surf|72:5-40:100:fl:,118:5-10:90:gh:,119:10:10:gh:
Route 24|fghl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,118:20:60:gh:,129:5-15:20:fl:,129:20:40:gh:
Route 24|fghl|old-rod|118:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 25|fghl|walk|10:8:20:fl:,11:9:1:f:,11:9:4:l:,13:8:20:fl:,14:9:4:f:,14:9:1:l:,16:11-13:15:fl:,16:8:30:gh:Morning,16:8:50:gh:Day,17:10:5:gh:Morning,17:10:5:gh:Day,43:12-14:25:f:,43:10:30:gh:Night,48:8:30:gh:Night,48:8:20:gh:Morning,49:8:20:gh:Night,63:9-13:15:fl:,63:9:10:gh:,69:12-14:25:l:,69:10:30:gh:Morning,69:10:30:gh:Day,69:14:5:gh:Night,70:10:5:gh:Night,70:14:5:gh:Morning,70:14:5:gh:Day,264:8:20:gh:Hoenn Sound on the radio,293:8-10:20:gh:Hoenn Sound on the radio,399:8:20:gh:Sinnoh Sound on the radio,418:8-10:20:gh:Sinnoh Sound on the radio,427:8-10:40:gh:Swarm
Route 25|fghl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,61:20-30:40:fl:,79:15-35:5:l:,118:40:70:gh:,119:40:10:gh:,129:40:20:gh:,130:15-25:15:fl:
Route 25|fghl|surf|54:20-40:100:f:,79:20-40:100:l:,118:5-10:90:gh:,119:10:10:gh:
Route 25|fghl|good-rod|60:5-15:60:fl:,118:5-15:20:fl:,118:20:60:gh:,129:5-15:20:fl:,129:20:40:gh:
Route 25|fghl|old-rod|118:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 25|gh|headbutt|163:10-11:50:gh:Common Headbutt tree,163:13-14:80:gh:Rare Headbutt tree,204:10-11:30:gh:Common Headbutt tree,287:10-18:35:gh:Secret Headbutt tree,415:10-14:65:gh:Secret Headbutt tree,415:10-11:20:gh:Common Headbutt tree,415:13-14:20:gh:Rare Headbutt tree
Route 25|gh|static|245:40::gh:
Route 26|gh|walk|20:28-30:40:h:Night,20:28:30:g:Night,20:30:5:gh:Morning,20:30:5:gh:Day,20:28:30:g:,24:30:5:g:,28:28:30:h:,77:32:20:gh:,84:28-30:40:h:Morning,84:28:30:g:Morning,84:28-30:40:h:Day,84:28:30:g:Day,84:30:10:g:,85:30:5:h:Morning,85:30:5:h:Day,195:30:10:h:Night,195:30:5:g:Night,264:32:20:gh:Hoenn Sound on the radio,293:28:20:gh:Hoenn Sound on the radio,399:32:20:gh:Sinnoh Sound on the radio,418:28:20:gh:Sinnoh Sound on the radio
Route 26|gh|old-rod|72:10:15:gh:,129:10:85:gh:
Route 26|gh|good-rod|72:20:30:gh:,90:20:10:gh:,129:20:40:gh:,170:20:20:gh:
Route 26|gh|surf|72:25-30:90:gh:,73:30:10:gh:
Route 26|gh|super-rod|73:40:20:gh:,90:40:30:gh:,170:40:40:gh:,171:40:10:gh:
Route 26|gh|headbutt|102:28-29:20:gh:Common Headbutt tree,102:31-32:20:gh:Rare Headbutt tree,163:28-29:50:gh:Common Headbutt tree,163:31-32:50:gh:Rare Headbutt tree,165:31-32:30:g:Rare Headbutt tree,167:31-32:30:h:Rare Headbutt tree,204:28-29:30:gh:Common Headbutt tree
Route 27|gh|walk|20:28-30:40:h:,20:30:20:g:Morning,20:30:20:g:Day,20:30:10:g:Night,24:28:30:g:,28:30:5:h:,77:32:5:gh:,84:28-30:50:h:Morning,84:28-30:40:g:Morning,84:28-30:50:h:Day,84:28-30:40:g:Day,85:30:5:g:Morning,85:30:5:g:Day,195:28-30:50:h:Night,195:28-30:55:g:Night,264:30:20:gh:Hoenn Sound on the radio,293:28:20:gh:Hoenn Sound on the radio,399:30:20:gh:Sinnoh Sound on the radio,418:28:20:gh:Sinnoh Sound on the radio
Route 27|gh|old-rod|72:10:15:gh:,129:10:85:gh:
Route 27|gh|good-rod|72:20:30:gh:,90:20:10:gh:,129:20:40:gh:,170:20:20:gh:
Route 27|gh|surf|72:15-20:90:gh:,73:20:10:gh:,370:20:60:gh:Swarm
Route 27|gh|super-rod|73:40:20:gh:,90:40:30:gh:,170:40:40:gh:,171:40:10:gh:
Route 27|gh|headbutt|102:28-29:20:gh:Common Headbutt tree,102:31-32:20:gh:Rare Headbutt tree,163:28-29:50:gh:Common Headbutt tree,163:31-32:50:gh:Rare Headbutt tree,165:31-32:30:g:Rare Headbutt tree,167:31-32:30:h:Rare Headbutt tree,204:28-29:30:gh:Common Headbutt tree
Route 28|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Route 28|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Route 28|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Route 28|gh|surf|60:35-40:90:gh:,61:40:10:gh:
Route 28|gh|walk|77:40:30:gh:,78:42:10:gh:Morning,78:42:10:gh:Day,78:41-43:10:gh:Night,84:41:5:gh:Morning,84:41:5:gh:Day,85:43:5:gh:Morning,85:43:5:gh:Day,114:39:30:gh:,215:42:10:gh:Night,217:40:20:g:,232:40:20:h:,264:40:20:gh:Hoenn Sound on the radio,293:39-40:20:gh:Hoenn Sound on the radio,399:40:20:gh:Sinnoh Sound on the radio,418:39-40:20:gh:Sinnoh Sound on the radio
Route 28|gh|headbutt|177:39-40:20:gh:Common Headbutt tree,177:41-43:20:gh:Rare Headbutt tree,190:39-40:30:gh:Common Headbutt tree,190:41-43:30:gh:Rare Headbutt tree,214:39-40:50:gh:Common Headbutt tree,214:41-43:50:gh:Rare Headbutt tree
Route 3|fghl|walk|16:6-7:30:fl:,19:5-8:55:h:Night,19:5-8:35:g:Night,19:5:30:gh:Morning,19:5:30:gh:Day,19:10:5:h:,21:6-8:35:fl:,21:5-8:55:h:Morning,21:5-8:35:g:Morning,21:5-8:55:h:Day,21:5-8:35:g:Day,23:8:20:g:,24:10:5:g:,29:6:1:f:,29:6-7:14:l:,32:6-7:14:f:,32:6:1:l:,39:3-7:10:fl:,39:6:10:gh:,41:5:30:gh:Night,56:7:10:fl:,311:5:20:gh:Hoenn Sound on the radio,312:8:20:gh:Hoenn Sound on the radio,316:5:40:g:Swarm,343:5:40:h:Swarm,403:5-8:40:gh:Sinnoh Sound on the radio
Route 3|gh|headbutt|163:6-7:50:gh:Common Headbutt tree,163:9-10:80:gh:Rare Headbutt tree,204:6-7:30:gh:Common Headbutt tree,265:6-7:20:gh:Common Headbutt tree,265:9-10:20:gh:Rare Headbutt tree
Route 3 Pokemon Center|fl|gift|129:5::fl:
Route 4|fghl|walk|19:8-12:35:fl:,19:10:5:h:,19:5:30:gh:Morning,19:5:30:gh:Day,19:8:25:h:Night,19:5-8:35:g:Night,21:8-12:35:fl:,21:5:30:h:,21:8:25:h:Morning,21:5-8:35:g:Morning,21:8:25:h:Day,21:5-8:35:g:Day,23:6-12:25:f:,23:8:20:g:,24:10:5:g:,27:6-12:25:l:,39:6:10:gh:,41:5:30:gh:Night,56:10-12:5:fl:,264:8:20:gh:Hoenn Sound on the radio,293:5:20:gh:Hoenn Sound on the radio,399:8:20:gh:Sinnoh Sound on the radio,418:5:20:gh:Sinnoh Sound on the radio
Route 4|fghl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-35:84:l:,116:15-35:84:f:,118:40:70:gh:,119:40:10:gh:,129:40:20:gh:,130:15-25:15:fl:
Route 4|fghl|surf|72:5-40:100:fl:,118:5-10:90:gh:,119:10:10:gh:
Route 4|fghl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,118:20:60:gh:,129:5-15:20:fl:,129:20:40:gh:
Route 4|fghl|old-rod|118:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 4|gh|headbutt|163:6-7:50:gh:Common Headbutt tree,163:9-10:80:gh:Rare Headbutt tree,204:6-7:30:gh:Common Headbutt tree,265:6-7:20:gh:Common Headbutt tree,265:9-10:20:gh:Rare Headbutt tree
Route 4 Pokemon Center|fl|gift|129:5::fl:
Route 5|fghl|walk|16:13-16:40:fl:,16:13-15:60:h:Morning,16:13-15:40:g:Morning,16:13-15:60:h:Day,16:13-15:40:g:Day,43:13-16:25:f:,43:13:60:h:Night,43:13:30:g:Night,44:15:10:gh:Night,52:10-16:35:fl:,52:13:30:g:Night,52:14:20:g:Morning,52:14:20:g:Day,63:12-14:10:gh:,69:13-16:25:l:,69:13:30:gh:Morning,69:13:30:gh:Day,69:14:20:gh:Night,311:13:20:gh:Hoenn Sound on the radio,312:14:20:gh:Hoenn Sound on the radio,403:13-14:40:gh:Sinnoh Sound on the radio
Route 5|gh|headbutt|163:11-13:50:gh:Common Headbutt tree,163:14-16:80:gh:Rare Headbutt tree,204:11-13:30:gh:Common Headbutt tree,415:11-13:20:gh:Common Headbutt tree,415:14-16:20:gh:Rare Headbutt tree
Route 6|fghl|walk|16:13-16:40:fl:,16:13-14:50:h:Morning,16:13:30:g:Morning,16:13-14:50:h:Day,16:13:30:g:Day,43:13-16:25:f:,43:13:60:h:Night,43:13:30:g:Night,52:10-16:35:fl:,52:13:30:g:Night,52:14:20:g:Morning,52:14:20:g:Day,63:12-14:10:gh:,69:13-16:25:l:,69:13:30:gh:Morning,69:13:30:gh:Day,69:14:20:gh:Night,81:15:10:gh:,264:14:20:gh:Hoenn Sound on the radio,293:13:20:gh:Hoenn Sound on the radio,399:14:20:gh:Sinnoh Sound on the radio,418:13:20:gh:Sinnoh Sound on the radio
Route 6|fghl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,60:40:80:gh:,61:20-30:40:fl:,79:15-35:5:l:,129:40:20:gh:,130:15-25:15:fl:
Route 6|fghl|surf|54:20-40:100:f:,54:5-10:90:gh:,55:10:10:gh:,79:20-40:100:l:
Route 6|fghl|good-rod|60:5-15:60:fl:,60:20:60:gh:,118:5-15:20:fl:,129:5-15:20:fl:,129:20:40:gh:
Route 6|fghl|old-rod|60:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Route 6|gh|headbutt|163:11-13:50:gh:Common Headbutt tree,163:14-16:80:gh:Rare Headbutt tree,204:11-13:30:gh:Common Headbutt tree,415:11-13:20:gh:Common Headbutt tree,415:14-16:20:gh:Rare Headbutt tree
Route 7|fghl|walk|16:19-22:30:fl:,19:17:30:h:,19:15-19:10:h:Morning,19:15:5:g:Morning,19:19:5:h:Day,20:19:10:gh:,21:17:30:gh:Morning,21:17:30:gh:Day,37:18-20:10:l:,37:18:20:g:,37:15:5:g:Day,43:19-22:20:f:,52:17-20:40:fl:,52:17:30:g:,53:19:5:g:,58:18-20:10:f:,58:18:20:h:,58:15:5:h:Day,69:19-22:20:l:,198:17-19:35:h:Night,198:17:30:g:Night,228:15:5:gh:Night,311:17:20:gh:Hoenn Sound on the radio,312:18:20:gh:Hoenn Sound on the radio,403:17-18:40:gh:Sinnoh Sound on the radio
Route 7|gh|headbutt|21:15-17:50:gh:Common Headbutt tree,21:18-20:80:gh:Rare Headbutt tree,214:15-17:30:gh:Common Headbutt tree,415:15-17:20:gh:Common Headbutt tree,415:18-20:20:gh:Rare Headbutt tree
Route 8|fghl|walk|16:18-20:30:fl:,17:17-19:65:h:Morning,17:17-19:35:g:Morning,17:17-19:65:h:Day,17:17-19:35:g:Day,23:17-19:20:f:,27:17-19:20:l:,37:15-18:20:l:,37:18:10:g:Morning,37:18:10:g:Day,37:17:5:g:Night,52:18-20:30:fl:,52:17:30:g:,58:15-18:20:f:,58:18:10:h:Morning,58:18:10:h:Day,58:17:5:h:Night,63:15:20:gh:,64:15:5:gh:,93:19:30:gh:Night,164:17-18:40:h:Night,164:18:10:g:Night,311:17-19:20:gh:Hoenn Sound on the radio,312:15:20:gh:Hoenn Sound on the radio,403:15-19:40:gh:Sinnoh Sound on the radio
Route 8|gh|headbutt|163:16-17:50:gh:Common Headbutt tree,163:18-19:80:gh:Rare Headbutt tree,204:16-17:30:gh:Common Headbutt tree,415:16-17:20:gh:Common Headbutt tree,415:18-19:20:gh:Rare Headbutt tree
Route 9|fghl|walk|19:14-17:40:fl:,19:15:30:h:,19:13:30:g:,19:15:10:h:Night,19:15:40:g:Night,20:13-15:25:gh:Night,20:15:10:gh:Morning,20:15:10:gh:Day,20:15:5:g:,21:13-17:35:fl:,21:13:20:h:Morning,21:13-15:50:g:Morning,21:13:20:h:Day,21:13-15:50:g:Day,22:15:5:gh:Morning,22:15:5:gh:Day,23:11-17:25:f:,27:11-17:25:l:,56:13:30:h:,57:15:5:h:,264:13:20:gh:Hoenn Sound on the radio,293:13-15:20:gh:Hoenn Sound on the radio,302:13-15:40:h:Swarm,303:13-15:40:g:Swarm,399:13:20:gh:Sinnoh Sound on the radio,418:13-15:20:gh:Sinnoh Sound on the radio
Route 9|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Route 9|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Route 9|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Route 9|gh|surf|118:10-15:90:gh:,119:15:10:gh:
Seafoam Islands 1F|fghl|walk|41:22-26:34:fl:,41:26-28:30:gh:,42:26-30:11:fl:,42:30-32:30:gh:,54:26-33:55:f:,54:26-29:30:gh:,55:32:10:gh:,79:26-33:55:l:,296:30-32:20:gh:Hoenn Sound on the radio,359:28-29:20:gh:Hoenn Sound on the radio,433:30-32:20:gh:Sinnoh Sound on the radio,436:28-29:20:gh:Sinnoh Sound on the radio
Seafoam Islands B1F|fghl|walk|41:22-26:34:fl:,41:28-29:10:gh:,42:26-30:11:fl:,42:32-34:30:gh:,54:29-31:40:f:,54:26-28:16:gh:,55:33-35:5:f:,55:32-34:14:gh:,79:29-31:40:l:,80:33-35:5:l:,86:28:10:fl:,86:32-34:30:gh:,296:32-34:20:gh:Hoenn Sound on the radio,359:28-34:20:gh:Hoenn Sound on the radio,433:32-34:20:gh:Sinnoh Sound on the radio,436:28-34:20:gh:Sinnoh Sound on the radio
Seafoam Islands B2F|fghl|walk|41:22-24:20:fl:,41:29-30:10:gh:,42:26-30:10:fl:,42:33-35:30:gh:,54:30-32:40:f:,54:27-30:16:gh:,55:32-34:10:f:,55:33-35:14:gh:,79:30-32:40:l:,80:32-34:10:l:,86:30-32:20:fl:,86:33-35:30:gh:,296:33-35:20:gh:Hoenn Sound on the radio,359:30-35:20:gh:Hoenn Sound on the radio,433:33-35:20:gh:Sinnoh Sound on the radio,436:30-35:20:gh:Sinnoh Sound on the radio
Seafoam Islands B3F|fghl|walk|41:24:10:fl:,41:31-32:10:gh:,42:26-30:10:fl:,42:34-36:30:gh:,54:30-32:20:f:,54:31-32:12:gh:,55:32-34:15:f:,55:34-36:14:gh:,79:30-32:20:l:,80:32-34:15:l:,86:30-32:40:fl:,86:34:10:gh:,87:32-34:5:fl:,87:35-36:24:gh:,296:34-36:20:gh:Hoenn Sound on the radio,359:32-34:20:gh:Hoenn Sound on the radio,433:34-36:20:gh:Sinnoh Sound on the radio,436:32-34:20:gh:Sinnoh Sound on the radio
Seafoam Islands B3F|fl|super-rod|54:15-25:4:f:,79:15-25:4:l:,98:15-30:80:l:,116:15-30:80:f:,130:15-35:16:fl:
Seafoam Islands B3F|fl|surf|54:30-40:4:f:,55:35-40:1:f:,79:30-40:4:l:,80:35-40:1:l:,86:25-35:60:fl:,87:35-40:5:fl:,98:25-30:30:l:,116:25-30:30:f:
Seafoam Islands B3F|fl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:
Seafoam Islands B3F|fl|old-rod|129:5:100:fl:
Seafoam Islands B4F|fghl|walk|42:26-30:15:fl:,42:38-40:30:gh:,54:32:10:f:,54:34:10:gh:,55:32-34:15:f:,55:37-38:14:gh:,79:32:10:l:,80:32-34:15:l:,86:30-34:50:fl:,86:34:10:gh:,87:34-36:10:fl:,87:37-38:24:gh:,124:38-40:12:gh:,296:38:20:gh:Hoenn Sound on the radio,359:34:20:gh:Hoenn Sound on the radio,433:38:20:gh:Sinnoh Sound on the radio,436:34:20:gh:Sinnoh Sound on the radio
Seafoam Islands B4F|fghl|super-rod|54:15-25:4:f:,79:15-25:4:l:,98:15-30:80:l:,99:40:15:gh:,116:15-30:80:f:,116:40:30:gh:,117:40:15:gh:,130:15-35:16:fl:,130:40:40:gh:
Seafoam Islands B4F|fghl|surf|54:30-40:4:f:,55:35-40:1:f:,79:30-40:4:l:,80:35-40:1:l:,80:35-50:10:gh:,86:25-35:60:fl:,86:30-40:60:gh:,87:35-40:5:fl:,98:25-30:30:l:,116:25-30:30:f:,116:30-40:30:gh:
Seafoam Islands B4F|fghl|good-rod|54:20:30:gh:,98:5-15:20:f:,98:5-15:60:l:,98:20:20:gh:,116:5-15:60:f:,116:5-15:20:l:,116:20:10:gh:,129:5-15:20:fl:,129:20:40:gh:
Seafoam Islands B4F|fghl|old-rod|98:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Seafoam Islands B4F|fghl|static|144:50::fghl:
Cerulean Cave 1F|fghl|walk|42:46-55:14:fl:,42:38:10:gh:,42:38-39:40:gh:Night,47:49-58:25:fl:,47:38:20:gh:Morning,47:38:20:gh:Day,47:38:10:gh:Night,53:38:10:g:Morning,53:38:10:g:Day,53:39:4:g:,57:52-61:11:fl:,57:39:4:h:,57:38:10:h:Morning,57:38:10:h:Day,67:46:10:fl:,67:40:4:gh:,67:39:20:gh:Morning,67:39:20:gh:Day,67:39-40:2:gh:Night,82:49:20:fl:,82:40:10:gh:,82:39:1:gh:Morning,82:39:1:gh:Day,101:58:5:fl:,101:40:5:gh:,132:52-61:11:fl:,132:39:10:gh:,132:40:1:gh:Morning,132:40:1:gh:Day,202:55:4:fl:,202:37:5:gh:,296:39-40:20:gh:Hoenn Sound on the radio,359:38:20:gh:Hoenn Sound on the radio,433:39-40:20:gh:Sinnoh Sound on the radio,436:38:20:gh:Sinnoh Sound on the radio
Cerulean Cave 1F|fghl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,60:40:40:gh:,60:40:30:gh:Night,61:20-30:40:fl:,61:40:30:gh:Morning,61:40:30:gh:Day,79:15-35:5:l:,130:15-25:15:fl:,130:40:30:gh:
Cerulean Cave 1F|fghl|surf|54:30-50:65:f:,54:35-40:90:gh:,55:40-55:35:f:,55:40:10:gh:,79:30-50:65:l:,80:40-55:35:l:
Cerulean Cave 1F|fghl|good-rod|60:5-15:60:fl:,60:20:45:gh:,60:20:10:gh:Night,118:5-15:20:fl:,118:20:30:gh:,118:20:10:gh:Morning,118:20:10:gh:Day,129:5-15:20:fl:,129:20:15:gh:
Cerulean Cave 1F|fghl|rock-smash|74:30-50:65:fl:,74:22-24:90:gh:,75:40-55:35:fl:,75:26-30:10:gh:
Cerulean Cave 1F|fghl|old-rod|129:5:100:fl:,129:10:100:gh:
Cerulean Cave 2F|fghl|walk|42:49-58:25:fl:,42:41:10:gh:,42:41-42:10:gh:Night,47:52-61:14:fl:,47:40:20:gh:,64:55-64:11:fl:,64:42:20:gh:,67:49:20:fl:,67:39:10:gh:,67:41-42:10:gh:Morning,67:41-42:10:gh:Day,82:52:10:fl:,82:41:10:gh:,101:61:4:fl:,101:41:5:gh:,132:55-64:11:fl:,132:42:10:gh:,202:58:5:fl:,202:42:5:gh:,296:41-42:20:gh:Hoenn Sound on the radio,359:39-41:20:gh:Hoenn Sound on the radio,433:41-42:20:gh:Sinnoh Sound on the radio,436:39-41:20:gh:Sinnoh Sound on the radio
Cerulean Cave 2F|gh|surf|54:35-40:90:gh:,55:40:10:gh:
Cerulean Cave 2F|gh|good-rod|60:20:45:gh:,60:20:10:gh:Night,118:20:30:gh:,118:20:10:gh:Morning,118:20:10:gh:Day,129:20:15:gh:
Cerulean Cave 2F|gh|super-rod|60:40:40:gh:,60:40:30:gh:Night,61:40:30:gh:Morning,61:40:30:gh:Day,130:40:30:gh:
Cerulean Cave 2F|fl|rock-smash|74:35-55:65:fl:,75:45-60:35:fl:
Cerulean Cave 2F|gh|old-rod|129:10:100:gh:
Cerulean Cave B1F|fghl|walk|42:52-61:11:fl:,42:47:10:gh:,47:55-64:14:fl:,47:45-47:25:gh:,64:58-67:25:fl:,64:46:20:gh:,67:52:10:fl:,67:45:10:gh:,82:55:10:fl:,82:45-47:15:gh:,101:64:4:fl:,101:46:5:gh:,132:58-67:25:fl:,132:45:10:gh:,202:61:1:fl:,202:49:5:gh:,296:45:20:gh:Hoenn Sound on the radio,359:45-47:20:gh:Hoenn Sound on the radio,433:45:20:gh:Sinnoh Sound on the radio,436:45-47:20:gh:Sinnoh Sound on the radio
Cerulean Cave B1F|fghl|super-rod|54:15-25:4:f:,60:15-25:40:fl:,60:40:40:gh:,60:40:30:gh:Night,61:20-30:40:fl:,61:40:30:gh:Morning,61:40:30:gh:Day,79:15-25:4:l:,130:15-35:16:fl:,130:40:30:gh:
Cerulean Cave B1F|fghl|surf|54:40-60:65:f:,54:35-40:90:gh:,55:50-65:35:f:,55:40:10:gh:,79:40-60:65:l:,80:50-65:35:l:
Cerulean Cave B1F|fghl|good-rod|60:5-15:60:fl:,60:20:45:gh:,60:20:10:gh:Night,118:5-15:20:fl:,118:20:30:gh:,118:20:10:gh:Morning,118:20:10:gh:Day,129:5-15:20:fl:,129:20:15:gh:
Cerulean Cave B1F|fghl|rock-smash|74:40-60:65:fl:,74:22-24:90:gh:,75:50-65:35:fl:,75:26-30:10:gh:
Cerulean Cave B1F|fghl|old-rod|129:5:100:fl:,129:10:100:gh:
Cerulean Cave B1F|fghl|static|150:70::fghl:
Vermilion City|gh|headbutt|21:11-13:50:gh:Common Headbutt tree,21:14-16:80:gh:Rare Headbutt tree,214:11-13:30:gh:Common Headbutt tree,415:11-13:20:gh:Common Headbutt tree,415:14-16:20:gh:Rare Headbutt tree
Vermilion City|gh|rock-smash|50:24-37:90:gh:,213:32-35:10:gh:
Vermilion City|fghl|super-rod|54:25-35:1:f:,73:40:20:gh:,79:25-35:1:l:,90:15-25:40:f:,90:40:30:gh:,98:15-25:40:l:,116:15-35:44:f:,116:25-35:4:l:,120:15-25:40:l:,130:15-25:15:fl:,170:40:40:gh:,171:40:10:gh:
Vermilion City|fghl|surf|72:5-40:100:fl:,72:30-35:90:gh:,73:35:10:gh:,278:35:60:gh:Swarm
Vermilion City|fghl|old-rod|72:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Vermilion City|fghl|good-rod|72:20:30:gh:,90:20:10:gh:,98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:,129:20:40:gh:,170:20:20:gh:
Vermilion City|fl|trade|83:5-100::fl:Trade a Spearow
Vermilion City Ss Anne Dock|gh|old-rod|72:10:15:gh:,129:10:85:gh:
Vermilion City Ss Anne Dock|gh|good-rod|72:20:30:gh:,90:20:10:gh:,129:20:65:gh:,170:20:20:gh:
Vermilion City Ss Anne Dock|gh|surf|72:30-35:90:gh:,73:35:10:gh:,278:35:60:gh:
Vermilion City Ss Anne Dock|gh|super-rod|73:40:20:gh:,90:40:30:gh:,129:40:100:gh:,170:40:40:gh:,171:40:10:gh:
Victory Road 1F|fghl|walk|42:32:30:gh:,42:44:5:fl:,75:32:30:gh:,95:34-36:15:gh:,95:40-46:30:fl:,111:35:5:gh:,217:33:20:g:,232:33:20:h:,296:33:20:gh:Hoenn Sound on the radio,359:32:20:gh:Hoenn Sound on the radio,433:33:20:gh:Sinnoh Sound on the radio,436:32:20:gh:Sinnoh Sound on the radio,24:44:5:f:,28:44:5:l:,41:32:10:fl:,66:32:20:fl:,67:44-46:5:fl:,74:32:20:fl:,105:44-46:5:fl:
Victory Road 2F|fghl|walk|42:32:30:gh:,42:46:5:fl:,75:32:30:gh:,95:34-36:15:gh:,95:45-48:20:fl:,111:35:5:gh:,217:33:20:g:,232:33:20:h:,296:33:20:gh:Hoenn Sound on the radio,359:32:20:gh:Hoenn Sound on the radio,433:33:20:gh:Sinnoh Sound on the radio,436:32:20:gh:Sinnoh Sound on the radio,24:46:5:f:,28:46:5:l:,41:34:10:fl:,57:42:10:fl:,66:34:20:fl:,67:46-48:5:fl:,74:34:20:fl:,105:46-48:5:fl:
Victory Road 3F|fghl|walk|42:32:30:gh:,42:44:5:fl:,75:32:30:gh:,95:34-36:15:gh:,95:40-46:30:fl:,111:35:5:gh:,217:33:20:g:,232:33:20:h:,296:33:20:gh:Hoenn Sound on the radio,359:32:20:gh:Hoenn Sound on the radio,433:33:20:gh:Sinnoh Sound on the radio,436:32:20:gh:Sinnoh Sound on the radio,24:44:5:f:,28:44:5:l:,41:32:10:fl:,66:32:20:fl:,67:44-46:5:fl:,74:32:20:fl:,105:44-46:5:fl:
Victory Road 3F|gh|rock-smash|74:24-32:90:gh:,75:30-33:10:gh:
Viridian City|fghl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,60:40:80:gh:,61:20-30:40:fl:,79:15-35:5:l:,129:40:20:gh:,130:15-25:15:fl:
Viridian City|fghl|surf|54:20-40:100:f:,60:5-10:90:gh:,61:10:10:gh:,79:20-40:100:l:
Viridian City|fghl|good-rod|60:5-15:60:fl:,60:20:60:gh:,118:5-15:20:fl:,129:5-15:20:fl:,129:20:40:gh:
Viridian City|fghl|old-rod|60:10:15:gh:,129:5:100:fl:,129:10:85:gh:
Viridian City|gh|headbutt|163:3-4:50:gh:Common Headbutt tree,163:5-7:50:gh:Rare Headbutt tree,165:5-7:30:g:Rare Headbutt tree,167:5-7:30:h:Rare Headbutt tree,204:3-4:30:gh:Common Headbutt tree,265:3-4:20:gh:Common Headbutt tree,265:5-7:20:gh:Rare Headbutt tree
Viridian Forest|fghl|walk|10:3-5:40:fl:,10:3:40:h:Morning,10:3:40:h:Day,11:5:5:f:,11:4-6:10:l:,11:3-5:30:h:Morning,11:3-5:30:h:Day,12:7:10:h:Morning,13:3-5:40:fl:,13:3:40:g:Morning,13:3:40:g:Day,14:4-6:10:f:,14:5:5:l:,14:3-5:30:g:Morning,14:3-5:30:g:Day,15:7:10:g:Morning,16:3:10:gh:Morning,16:3-7:15:gh:Day,17:7:9:gh:Day,17:7:4:gh:Morning,25:3-5:5:fl:,25:4:5:gh:,25:7:1:gh:Morning,25:7:1:gh:Day,163:3-5:80:gh:Night,164:7:15:gh:Night,322:5:20:gh:Hoenn Sound on the radio,325:3:20:gh:Hoenn Sound on the radio,401:3:40:gh:Swarm,406:3:20:gh:Sinnoh Sound on the radio,455:5:20:gh:Sinnoh Sound on the radio
Viridian Forest|gh|headbutt|163:3-4:55:gh:Common Headbutt tree,163:5-7:50:gh:Rare Headbutt tree,164:5-7:5:gh:Rare Headbutt tree,165:3-4:10:g:Common Headbutt tree,166:5-7:10:g:Rare Headbutt tree,167:3-4:10:h:Common Headbutt tree,168:5-7:10:h:Rare Headbutt tree,273:3-4:30:h:Common Headbutt tree,273:3-4:5:g:Common Headbutt tree,273:5-7:30:h:Rare Headbutt tree,273:5-7:5:g:Rare Headbutt tree,285:3-4:5:h:Common Headbutt tree,285:3-4:30:g:Common Headbutt tree,285:5-7:5:h:Rare Headbutt tree,285:5-7:30:g:Rare Headbutt tree
Route 23|fl|walk|21:32-34:15:fl:,22:40-44:25:fl:,23:32-34:20:f:,24:44:5:f:,27:32-34:20:l:,28:44:5:l:,56:32-34:30:fl:,57:42:5:fl:
Route 23|fl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,61:20-30:40:fl:,79:15-35:5:l:,130:15-25:15:fl:
Route 23|fl|surf|54:20-40:100:f:,79:20-40:100:l:
Route 23|fl|good-rod|60:5-15:60:fl:,118:5-15:20:fl:,129:5-15:20:fl:
Route 23|fl|old-rod|129:5:100:fl:
Kanto Power Plant|fl|walk|25:22-26:25:fl:,81:22-25:30:fl:,82:31-34:10:f:,82:31-34:15:l:,100:22-25:30:fl:,125:32-35:5:f:
Kanto Power Plant|gh|trade|82:19-100::gh:Trade a Dugtrio
Kanto Power Plant|fl|static|101:34::fl:,145:50::fl:
Pokémon Tower 3F|fl|walk|92:13-19:90:fl:,93:20:1:fl:,104:15-17:9:fl:
Pokémon Tower 4F|fl|walk|92:13-19:86:fl:,93:20:5:fl:,104:15-17:9:fl:
Pokémon Tower 5F|fl|walk|92:13-19:86:fl:,93:20:5:fl:,104:15-17:9:fl:
Pokémon Tower 6F|fl|walk|92:14-19:85:fl:,93:21-23:6:fl:,104:17-19:9:fl:
Pokémon Tower 7F|fl|walk|92:15-19:75:fl:,93:23-25:15:fl:,104:17-19:10:fl:
Pokémon Mansion 1F|fl|walk|19:26-28:15:fl:,20:32-36:30:fl:,37:30-32:15:l:,58:30-32:15:f:,88:28:5:f:,88:28-30:30:l:,89:32:5:l:,109:28-30:30:f:,109:28:5:l:,110:32:5:f:
Pokémon Mansion 2F|fl|walk|19:26-28:15:fl:,20:32-36:30:fl:,37:30-32:15:l:,58:30-32:15:f:,88:28:5:f:,88:28-30:30:l:,89:32:5:l:,109:28-30:30:f:,109:28:5:l:,110:32:5:f:
Pokémon Mansion 3F|fl|walk|19:26-28:15:fl:,20:32-36:30:fl:,37:30-32:15:l:,58:30-32:15:f:,88:28:5:f:,88:28-30:30:l:,89:32:5:l:,109:28-30:30:f:,109:28:5:l:,110:32:5:f:
Pokémon Mansion B1F|fl|walk|19:26:5:fl:,20:34-38:30:fl:,37:30-32:15:l:,58:30-32:15:f:,88:28:5:f:,88:28-30:30:l:,89:34:5:l:,109:28-30:30:f:,109:28:5:l:,110:34:5:f:,132:30:10:fl:
Safari Zone Middle|fl|walk|29:22:20:l:,30:31:5:f:,30:31:10:l:,32:22:20:f:,33:31:10:f:,33:31:5:l:,47:30:5:fl:,48:22:15:fl:,102:24-25:20:fl:,111:25:20:fl:,113:23:1:fl:,123:23:4:f:,127:23:4:l:
Safari Zone Middle|fl|super-rod|54:15-35:4:f:,79:15-35:4:l:,118:15-25:40:fl:,119:20-30:40:fl:,147:15-25:15:fl:,148:25-35:1:fl:
Safari Zone Middle|fl|surf|54:20-40:100:f:,79:20-40:100:l:
Safari Zone Middle|fl|good-rod|60:5-15:20:fl:,118:5-15:60:fl:,129:5-15:20:fl:
Safari Zone Middle|fl|old-rod|129:5:100:fl:
Safari Zone Area 1 East|fl|walk|29:24:5:f:,29:24:20:l:,30:33:10:l:,32:24:20:f:,32:24:5:l:,33:33:10:f:,46:22:15:fl:,47:25:5:fl:,84:26:20:fl:,102:23-25:20:fl:,115:25:4:fl:,123:28:1:f:,127:28:1:l:
Safari Zone Area 1 East|fl|super-rod|54:15-35:4:f:,79:15-35:4:l:,118:15-25:40:fl:,119:20-30:40:fl:,147:15-25:15:fl:,148:25-35:1:fl:
Safari Zone Area 1 East|fl|surf|54:20-40:100:f:,79:20-40:100:l:
Safari Zone Area 1 East|fl|good-rod|60:5-15:20:fl:,118:5-15:60:fl:,129:5-15:20:fl:
Safari Zone Area 1 East|fl|old-rod|129:5:100:fl:
Safari Zone Area 2 North|fl|walk|29:30:20:l:,30:30:5:f:,30:30:10:l:,32:30:20:f:,33:30:10:f:,33:30:5:l:,46:23:15:fl:,49:32:5:fl:,102:25-27:20:fl:,111:26:20:fl:,113:26:4:fl:,128:28:1:fl:
Safari Zone Area 2 North|fl|super-rod|54:15-35:4:f:,79:15-35:4:l:,118:15-25:40:fl:,119:20-30:40:fl:,147:15-25:15:fl:,148:25-35:1:fl:
Safari Zone Area 2 North|fl|surf|54:20-40:100:f:,79:20-40:100:l:
Safari Zone Area 2 North|fl|good-rod|60:5-15:20:fl:,118:5-15:60:fl:,129:5-15:20:fl:
Safari Zone Area 2 North|fl|old-rod|129:5:100:fl:
Safari Zone Area 3 West|fl|walk|29:30:5:f:,29:22:20:l:,30:30:10:l:,32:22:20:f:,32:30:5:l:,33:30:10:f:,48:23:15:fl:,49:32:5:fl:,84:26:20:fl:,102:25-27:20:fl:,115:28:1:fl:,128:25:4:fl:
Safari Zone Area 3 West|fl|super-rod|54:15-35:4:f:,79:15-35:4:l:,118:15-25:40:fl:,119:20-30:40:fl:,147:15-25:15:fl:,148:25-35:1:fl:
Safari Zone Area 3 West|fl|surf|54:20-40:100:f:,79:20-40:100:l:
Safari Zone Area 3 West|fl|good-rod|60:5-15:20:fl:,118:5-15:60:fl:,129:5-15:20:fl:
Safari Zone Area 3 West|fl|old-rod|129:5:100:fl:
Pewter City|gh|headbutt|163:3-5:50:gh:Common Headbutt tree,163:7-9:80:gh:Rare Headbutt tree,204:3-5:30:gh:Common Headbutt tree,265:5-9:65:gh:Secret Headbutt tree,265:3-5:20:gh:Common Headbutt tree,265:7-9:20:gh:Rare Headbutt tree,396:5-12:35:gh:Secret Headbutt tree
Pewter City|gh|trade|178:16-100::gh:Trade a Haunter
Pewter City Pewter Museum Of Science|gh|gift|138:20::gh:Revived from the Helix Fossil,140:20::gh:Revived from the Dome Fossil,142:20::gh:Revived from the Old Amber,345:20::gh:Revived from the Root Fossil,347:20::gh:Revived from the Claw Fossil,408:20::gh:Revived from the Skull Fossil,410:20::gh:Revived from the Armor Fossil
Saffron City Fighting Dojo|fl|gift|106:25::fl:,107:25::fl:
Saffron City Silph Co 7F|fl|gift|131:25::fl:
Saffron City Silph Co|gh|gift|252:5::gh:Story  beat red / Received kanto starter,255:5::gh:Story  beat red / Received kanto starter,258:5::gh:Story  beat red / Received kanto starter
Saffron City Silph Co|gh|trade|374:31-100::gh:Trade a Forretress
Saffron City Magnet Train Station|gh|trade|25:2-100::gh:Trade a Pikachu
Monean Chamber|fl|walk|201:25:100:fl:
Liptoo Chamber|fl|walk|201:25:100:fl:
Weepth Chamber|fl|walk|201:25:100:fl:
Dilford Chamber|fl|walk|201:25:100:fl:
Scufib Chamber|fl|walk|201:25:100:fl:
Rixy Chamber|fl|walk|201:25:100:fl:
Viapos Chamber|fl|walk|201:25:100:fl:
S.S. Anne|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,90:15-25:40:f:,98:15-35:44:l:,116:15-35:44:f:,120:15-25:40:l:,130:15-25:15:fl:
S.S. Anne|fl|surf|72:5-40:100:fl:
S.S. Anne|fl|good-rod|98:5-15:20:f:,98:5-15:60:l:,116:5-15:60:f:,116:5-15:20:l:,129:5-15:20:fl:
S.S. Anne|fl|old-rod|129:5:100:fl:
Mt. Ember|fl|walk|21:30-32:15:f:,21:32:10:l:,22:38-40:25:fl:,66:35:10:fl:,74:33:10:fl:,77:30-36:35:fl:,78:39-42:5:fl:,126:38-40:5:l:
Mt. Ember|fl|rock-smash|74:5-30:95:fl:,75:25-40:5:fl:
Mt. Ember Cave|fl|walk|66:31-39:50:fl:,74:29-37:50:fl:
Mt. Ember Inside|fl|walk|66:32-36:40:fl:,67:38-40:20:fl:,74:30-34:40:fl:
Mt. Ember Inside|fl|rock-smash|74:5-30:95:fl:,75:25-40:5:fl:
Mt. Ember 1F Cave Behind Team Rocket|fl|walk|66:34-38:40:fl:,67:40-42:10:fl:,74:32-40:50:fl:
Mt. Ember 1F Cave Behind Team Rocket|fl|rock-smash|74:25-40:65:fl:,75:30-50:35:fl:
Mt. Ember B1F|fl|walk|74:34-42:70:fl:,218:24-30:30:fl:
Mt. Ember B1F|fl|rock-smash|74:25-40:65:fl:,75:30-50:35:fl:
Mt. Ember B2F|fl|walk|74:40-44:40:fl:,218:22-32:60:fl:
Mt. Ember B2F|fl|rock-smash|74:25-40:65:fl:,75:30-50:35:fl:
Mt. Ember B3F|fl|walk|218:18-36:100:fl:
Mt. Ember B3F|fl|rock-smash|218:15-35:90:fl:,219:25-45:10:fl:
Mt. Ember Summit|fl|rock-smash|74:5-30:95:fl:,75:25-40:5:fl:
Mt. Ember Summit|fl|static|146:50::fl:
Berry Forest|fl|walk|16:32:10:fl:,17:37:20:fl:,43:30:10:f:,44:35:20:f:,48:34:10:fl:,49:37-40:5:fl:,54:31:5:f:,69:30:10:l:,70:35:20:l:,79:31:5:l:,96:34:10:fl:,97:37-40:5:fl:,102:35:5:fl:
Berry Forest|fl|super-rod|54:15-35:5:f:,79:15-35:5:l:,118:15-25:40:fl:,119:20-30:40:fl:,130:15-25:15:fl:
Berry Forest|fl|surf|54:5-40:95:f:,55:35-40:5:f:,79:5-40:95:l:,80:35-40:5:l:
Berry Forest|fl|good-rod|60:5-15:20:fl:,118:5-15:60:fl:,129:5-15:20:fl:
Berry Forest|fl|static|97:30::fl:
Berry Forest|fl|old-rod|129:5:100:fl:
Icefall Cave Entrance|fl|walk|41:40:10:fl:,42:45-48:25:fl:,54:41:5:f:,79:41:5:l:,86:43-47:40:fl:,87:49-53:20:fl:
Icefall Cave Entrance|fl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,61:20-30:40:fl:,79:15-35:5:l:,130:15-25:15:fl:
Icefall Cave Entrance|fl|surf|54:5-35:30:f:,79:5-35:30:l:,86:5-35:60:fl:,87:35-40:5:fl:,183:5-15:5:l:,194:5-15:5:f:
Icefall Cave Entrance|fl|good-rod|60:5-15:60:fl:,118:5-15:20:fl:,129:5-15:20:fl:
Icefall Cave Entrance|fl|old-rod|129:5:100:fl:
Icefall Cave 1F|fl|walk|41:40:10:fl:,42:45-48:25:fl:,86:45:10:fl:,215:30:5:l:,220:23-31:50:fl:,225:30:5:f:
Icefall Cave B1F|fl|walk|41:40:10:fl:,42:45-48:25:fl:,86:45:10:fl:,215:30:5:l:,220:23-31:50:fl:,225:30:5:f:
Icefall Cave Waterfall|fl|walk|41:40:10:fl:,42:45-48:25:fl:,54:41:5:f:,79:41:5:l:,86:43-47:40:fl:,87:49-53:20:fl:
Icefall Cave Waterfall|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,90:15-25:40:f:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,120:15-25:40:l:,130:15-25:15:fl:
Icefall Cave Waterfall|fl|surf|72:5-45:95:fl:,73:35-45:4:fl:,131:30-45:1:fl:
Icefall Cave Waterfall|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Icefall Cave Waterfall|fl|old-rod|129:5:100:fl:
Pattern Bush|fl|walk|10:6:10:fl:,11:9:5:fl:,13:6:10:fl:,14:9:20:fl:,165:9-14:5:f:,165:9-14:30:l:,167:9-14:30:f:,167:9-14:5:l:,214:15-30:20:fl:
Lost Cave Room 1|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 2|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 3|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 4|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 5|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 6|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 7|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 8|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 9|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Room 10|fl|walk|41:37:20:fl:,42:41-43:20:fl:,92:38-40:25:fl:,93:44-52:30:fl:,198:22:5:f:,200:22:5:l:
Lost Cave Item Rooms|fl|walk|41:37:20:fl:,42:41:10:fl:,92:40:20:fl:,93:44-52:30:fl:,198:15-22:20:f:,200:15-22:20:l:
Kindle Road|fl|walk|21:30-32:25:fl:,22:36:10:fl:,52:31:10:fl:,53:37-40:5:fl:,54:34:5:f:,74:31:10:fl:,77:31-34:30:fl:,78:37-40:5:fl:,79:34:5:l:
Kindle Road|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:80:l:,99:25-35:4:l:,116:15-25:80:f:,117:25-35:4:f:,130:15-25:15:fl:
Kindle Road|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
Kindle Road|fl|rock-smash|74:5-30:95:fl:,75:25-40:5:fl:
Kindle Road|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Kindle Road|fl|old-rod|129:5:100:fl:
Treasure Beach|fl|walk|21:31-32:30:fl:,22:36-40:20:fl:,52:31:10:fl:,53:37-40:5:fl:,54:31:5:f:,79:31:5:l:,114:33-35:30:fl:
Treasure Beach|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:80:l:,99:25-35:4:l:,116:15-25:80:f:,117:25-35:4:f:,130:15-25:15:fl:
Treasure Beach|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
Treasure Beach|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Treasure Beach|fl|old-rod|129:5:100:fl:
Cape Brink|fl|walk|21:31:20:fl:,22:36:10:fl:,43:30-32:30:f:,44:36-38:15:f:,52:31:10:fl:,53:37-40:5:fl:,54:31:5:f:,55:37-40:5:f:,69:30-32:30:l:,70:36-38:15:l:,79:31:5:l:,80:37-40:5:l:
Cape Brink|fl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,61:20-30:40:fl:,79:15-35:5:l:,130:15-25:15:fl:
Cape Brink|fl|surf|54:5-40:95:f:,55:35-40:5:f:,79:5-40:95:l:,80:35-40:5:l:
Cape Brink|fl|good-rod|60:5-15:60:fl:,118:5-15:20:fl:,129:5-15:20:fl:
Cape Brink|fl|old-rod|129:5:100:fl:
Bond Bridge|fl|walk|16:29-32:30:fl:,17:34-40:15:fl:,43:31:20:f:,44:36:10:f:,48:34:5:fl:,52:31:10:fl:,53:37-40:5:fl:,54:31:5:f:,69:31:20:l:,70:36:10:l:,79:31:5:l:
Bond Bridge|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:80:l:,99:25-35:4:l:,116:15-25:80:f:,117:25-35:4:f:,130:15-25:15:fl:
Bond Bridge|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
Bond Bridge|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Bond Bridge|fl|old-rod|129:5:100:fl:
Three Isle Port|fl|walk|206:5-35:100:fl:
Resort Gorgeous|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Resort Gorgeous|fl|surf|72:5-40:65:fl:,73:35-40:5:fl:,187:5-15:30:fl:
Resort Gorgeous|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Resort Gorgeous|fl|old-rod|129:5:100:fl:
Water Labyrinth|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Water Labyrinth|fl|surf|72:5-40:65:fl:,73:35-40:5:fl:,187:5-15:30:fl:
Water Labyrinth|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Water Labyrinth|fl|old-rod|129:5:100:fl:
Water Labyrinth|fl|gift-egg|175:5::fl:Lead Pokémon has high friendship
Five Isle Meadow|fl|walk|16:44:20:fl:,17:48-50:15:fl:,52:41:10:fl:,53:47-50:5:fl:,54:41:5:f:,79:41:5:l:,161:10-15:30:fl:,187:10-15:15:fl:
Five Isle Meadow|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Five Isle Meadow|fl|surf|72:5-40:65:fl:,73:35-40:5:fl:,187:5-15:30:fl:
Five Isle Meadow|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Five Isle Meadow|fl|old-rod|129:5:100:fl:
Memorial Pillar|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Memorial Pillar|fl|surf|72:5-40:65:fl:,73:35-40:5:fl:,187:5-15:30:fl:
Memorial Pillar|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Memorial Pillar|fl|old-rod|129:5:100:fl:
Memorial Pillar|fl|walk|187:6-16:100:fl:
Outcast Island|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Outcast Island|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
Outcast Island|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Outcast Island|fl|old-rod|129:5:100:fl:
Green Path|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Green Path|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
Green Path|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Green Path|fl|old-rod|129:5:100:fl:
Water Path|fl|walk|21:44:20:fl:,22:48-50:15:fl:,43:44:10:f:,44:48:5:f:,52:41:10:fl:,53:47-50:5:fl:,54:41:5:f:,69:44:10:l:,70:48:5:l:,79:41:5:l:,161:10-15:30:fl:
Water Path|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Water Path|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
Water Path|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Water Path|fl|old-rod|129:5:100:fl:
Ruin Valley|fl|walk|21:44:20:fl:,22:49:10:fl:,52:43:10:fl:,53:49-52:5:fl:,54:41:5:f:,79:41:5:l:,177:15-20:25:fl:,183:15:10:l:,193:18:10:fl:,194:15:10:f:,202:25:5:fl:
Ruin Valley|fl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,61:20-30:40:fl:,79:15-35:5:l:,130:15-25:15:fl:
Ruin Valley|fl|good-rod|60:5-15:60:fl:,118:5-15:20:fl:,129:5-15:20:fl:
Ruin Valley|fl|old-rod|129:5:100:fl:
Ruin Valley|fl|surf|183:5-25:100:l:,194:5-25:100:f:
Trainer Tower|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Trainer Tower|fl|surf|72:5-40:95:f:,72:5-35:90:l:,73:35-40:5:fl:,226:35-40:5:l:
Trainer Tower|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Trainer Tower|fl|old-rod|129:5:100:fl:
Canyon Entrance|fl|walk|21:44:20:fl:,22:48-50:15:fl:,52:41:10:fl:,53:47-50:5:fl:,54:41:5:f:,79:41:5:l:,161:10-15:30:fl:,231:10-15:15:fl:
Sevault Canyon|fl|walk|22:50:10:f:,22:50:15:l:,52:43:10:fl:,53:49-52:5:fl:,74:46:20:fl:,95:54:5:fl:,104:46:10:fl:,105:52:10:fl:,227:30:5:f:,231:15:20:fl:,246:15-20:5:fl:
Sevault Canyon|fl|rock-smash|74:25-40:65:fl:,75:30-50:35:fl:
Tanoby Ruins|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,130:15-25:15:fl:,211:15-25:40:f:,223:15-25:40:l:
Tanoby Ruins|fl|surf|72:5-40:95:f:,72:5-35:90:l:,73:35-40:5:fl:,226:35-40:5:l:
Tanoby Ruins|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Tanoby Ruins|fl|old-rod|129:5:100:fl:
One Island|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,90:15-25:40:f:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,120:15-25:40:l:,130:15-25:15:fl:
One Island|fl|surf|72:5-40:95:fl:,73:35-40:5:fl:
One Island|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
One Island|fl|old-rod|129:5:100:fl:
Four Island|fl|super-rod|54:15-35:5:f:,60:15-25:40:fl:,61:20-30:40:fl:,79:15-35:5:l:,130:15-25:15:fl:
Four Island|fl|surf|54:5-35:30:f:,79:5-35:30:l:,183:5-25:70:l:,194:5-25:70:f:
Four Island|fl|good-rod|60:5-15:60:fl:,118:5-15:20:fl:,129:5-15:20:fl:
Four Island|fl|old-rod|129:5:100:fl:
Five Island|fl|super-rod|54:25-35:1:f:,79:25-35:1:l:,90:15-25:40:f:,98:15-25:40:l:,99:25-35:4:l:,116:15-25:40:f:,117:25-35:4:f:,120:15-25:40:l:,130:15-25:15:fl:
Five Island|fl|surf|72:5-40:65:fl:,73:35-40:5:fl:,187:5-15:30:fl:
Five Island|fl|good-rod|98:5-15:80:l:,116:5-15:80:f:,129:5-15:20:fl:
Five Island|fl|old-rod|129:5:100:fl:
Altering Cave A|fl|walk|41:6-16:100:fl:
Altering Cave B|fl|walk|179:3-13:100:fl:
Altering Cave C|fl|walk|204:19-29:100:fl:
Altering Cave D|fl|walk|228:12-22:100:fl:
Altering Cave E|fl|walk|216:18-28:100:fl:
Altering Cave F|fl|walk|190:18-28:100:fl:
Altering Cave G|fl|walk|213:18-28:100:fl:
Altering Cave H|fl|walk|234:18-28:100:fl:
Altering Cave I|fl|walk|235:18-28:100:fl:
Roaming Kanto|fl|roam|243:50::fl:Story  beat elite four round two / Chose Squirtle,244:50::fl:Story  beat elite four round two / Chose Bulbasaur,245:50::fl:Story  beat elite four round two / Chose Charmander
Birth Island|fl|static|386:30::fl:
Navel Rock|fl|static|249:70::fl:,250:70::fl:
Kanto Underground Path|fl|trade|29:5-100::f:Trade a Nidoran M,32:5-100::l:Trade a Nidoran F
`,
  johto: `
Blackthorn City|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Blackthorn City|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Blackthorn City|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Blackthorn City|gh|trade|85:30-100::gh:Trade a Dragonair
Blackthorn City|gh|surf|129:2-20:100:gh:
Burned Tower 1F|gh|walk|19:13-15:50:gh:,20:15:5:gh:,41:14:10:gh:,109:14-16:35:gh:,263:13-14:20:gh:Hoenn Sound on the radio,307:15:20:gh:Sinnoh Sound on the radio,327:15:20:gh:Hoenn Sound on the radio,441:13-14:20:gh:Sinnoh Sound on the radio
Burned Tower B1F|gh|walk|19:14:30:gh:,19:16:10:gh:Morning,19:16:10:gh:Night,19:14:5:gh:Day,41:15:5:gh:,109:14-16:50:gh:,126:16:10:gh:Day,126:14:5:gh:Morning,126:14:5:gh:Night,263:14:20:gh:Hoenn Sound on the radio,307:16:20:gh:Sinnoh Sound on the radio,327:16:20:gh:Hoenn Sound on the radio,441:14:20:gh:Sinnoh Sound on the radio
Cherrygrove City|gh|surf|72:10-25:90:gh:,73:15-25:10:gh:
Cherrygrove City|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Cherrygrove City|gh|good-rod|98:20:50:gh:,120:20:10:gh:Night,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Cherrygrove City|gh|super-rod|98:40:60:gh:,99:40:10:gh:,120:40:30:gh:Night,222:40:30:gh:Morning,222:40:30:gh:Day
Cherrygrove City|gh|headbutt|102:18-20:65:gh:Secret Headbutt tree,102:2-3:20:gh:Common Headbutt tree,102:4-5:20:gh:Rare Headbutt tree,163:2-3:50:gh:Common Headbutt tree,163:4-5:50:gh:Rare Headbutt tree,165:4-5:30:g:Rare Headbutt tree,167:4-5:30:h:Rare Headbutt tree,204:2-3:30:gh:Common Headbutt tree,276:18-25:35:gh:Secret Headbutt tree
Cianwood City|gh|surf|72:10-25:90:gh:,73:15-25:10:gh:
Cianwood City|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Cianwood City|gh|good-rod|98:20:50:gh:,120:20:10:gh:Night,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Cianwood City|gh|super-rod|98:40:60:gh:,99:40:10:gh:,120:40:30:gh:Night,222:40:30:gh:Morning,222:40:30:gh:Day
Cianwood City|gh|rock-smash|98:15-24:90:gh:,213:23-28:10:gh:
Cianwood City Kirks House|gh|gift|213:15::gh:
Cianwood City Pokemon Center|gh|gift|72:15::gh:
Dark Cave Violet City Entrance|gh|walk|41:2-4:39:gh:,74:2-4:60:gh:,206:2-3:40:gh:Swarm,206:4:1:gh:,296:2:20:gh:Hoenn Sound on the radio,359:2-3:20:gh:Hoenn Sound on the radio,433:2:20:gh:Sinnoh Sound on the radio,436:2-3:20:gh:Sinnoh Sound on the radio
Dark Cave Violet City Entrance|gh|rock-smash|74:8-14:10:gh:,206:4-8:90:gh:
Dark Cave Violet City Entrance|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Dark Cave Violet City Entrance|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Dark Cave Violet City Entrance|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Dark Cave Violet City Entrance|gh|surf|129:2-20:100:gh:
Dark Cave Blackthorn City Entrance|gh|walk|41:23:30:gh:,42:23:5:gh:,74:23:30:gh:,75:25:20:gh:,202:20-25:15:gh:,296:25:20:gh:Hoenn Sound on the radio,359:23:20:gh:Hoenn Sound on the radio,433:25:20:gh:Sinnoh Sound on the radio,436:23:20:gh:Sinnoh Sound on the radio
Dark Cave Blackthorn City Entrance|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Dark Cave Blackthorn City Entrance|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Dark Cave Blackthorn City Entrance|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Dark Cave Blackthorn City Entrance|gh|surf|129:2-20:100:gh:
Dragon's Den|gh|old-rod|129:10:100:gh:
Dragon's Den|gh|good-rod|129:20:90:gh:,147:20:10:gh:
Dragon's Den|gh|super-rod|129:40:60:gh:,147:40:30:gh:,148:40:10:gh:
Dragon's Den|gh|surf|129:5-20:90:gh:,147:5-15:10:gh:
Dragon's Den|gh|gift|147:15::gh:,147:15::gh:Story  receive tm from claire
Ecruteak City|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Ecruteak City|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Ecruteak City|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Ecruteak City|gh|surf|60:10-25:90:gh:,61:15-25:10:gh:
Ecruteak City|gh|headbutt|102:12-14:20:gh:Common Headbutt tree,102:15-17:20:gh:Rare Headbutt tree,163:12-14:50:gh:Common Headbutt tree,163:15-17:50:gh:Rare Headbutt tree,165:15-17:30:g:Rare Headbutt tree,167:15-17:30:h:Rare Headbutt tree,204:12-14:30:gh:Common Headbutt tree
Ice Path 1F|gh|walk|41:22:20:h:,41:22:5:gh:Morning,41:22:5:gh:Night,42:22:30:gh:,124:22:5:gh:Day,124:22:5:gh:,220:21-23:40:gh:,225:22:20:g:,296:22:20:gh:Hoenn Sound on the radio,359:21-22:20:gh:Hoenn Sound on the radio,433:22:20:gh:Sinnoh Sound on the radio,436:21-22:20:gh:Sinnoh Sound on the radio
Ice Path B1F|gh|walk|41:22:20:h:,41:22:5:gh:Morning,41:22:5:gh:Night,42:22:30:gh:,124:22:5:gh:Day,124:22:5:gh:,220:21-23:40:gh:,225:22:20:g:,296:22:20:gh:Hoenn Sound on the radio,359:21-22:20:gh:Hoenn Sound on the radio,433:22:20:gh:Sinnoh Sound on the radio,436:21-22:20:gh:Sinnoh Sound on the radio
Ice Path B2F|gh|walk|41:23:20:h:,41:23:5:gh:Morning,41:23:5:gh:Night,42:23:30:gh:,124:23:5:gh:Day,124:23:5:gh:,220:22-24:40:gh:,225:23:20:g:,296:23:20:gh:Hoenn Sound on the radio,359:22-23:20:gh:Hoenn Sound on the radio,433:23:20:gh:Sinnoh Sound on the radio,436:22-23:20:gh:Sinnoh Sound on the radio
Ice Path B3F|gh|walk|41:23:20:h:,41:23:5:gh:Morning,41:23:5:gh:Night,42:23:30:gh:,124:23:5:gh:Day,124:23:5:gh:,220:22-24:40:gh:,225:23:20:g:,296:23:20:gh:Hoenn Sound on the radio,359:22-23:20:gh:Hoenn Sound on the radio,433:23:20:gh:Sinnoh Sound on the radio,436:22-23:20:gh:Sinnoh Sound on the radio
Ilex Forest|gh|walk|10:5-6:50:h:Morning,10:5-6:60:h:Day,11:6:30:h:Morning,11:5-6:30:h:Day,13:5-6:50:g:Morning,13:5-6:60:g:Day,14:6:30:g:Morning,14:5-6:30:g:Day,41:6:20:gh:Night,41:5:5:gh:,43:5-6:60:gh:Night,46:5:10:gh:Morning,46:5:10:gh:Night,46:6:5:gh:,322:6:20:gh:Hoenn Sound on the radio,325:5-6:20:gh:Hoenn Sound on the radio,406:5-6:20:gh:Sinnoh Sound on the radio,455:6:20:gh:Sinnoh Sound on the radio
Ilex Forest|gh|headbutt|10:3-5:30:h:Common Headbutt tree,11:3-5:10:h:Common Headbutt tree,12:6-8:10:h:Rare Headbutt tree,13:3-5:30:g:Common Headbutt tree,14:3-5:10:g:Common Headbutt tree,15:6-8:10:g:Rare Headbutt tree,163:3-5:60:gh:Common Headbutt tree,163:6-8:50:gh:Rare Headbutt tree,164:6-8:10:gh:Rare Headbutt tree,204:6-8:30:gh:Rare Headbutt tree
Ilex Forest|gh|surf|54:5-20:90:gh:,55:10-20:10:gh:
Ilex Forest|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Ilex Forest|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Ilex Forest|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Lake of Rage|gh|headbutt|48:17-19:15:gh:Rare Headbutt tree,102:14-16:20:gh:Common Headbutt tree,102:17-19:20:gh:Rare Headbutt tree,163:14-16:50:gh:Common Headbutt tree,163:17-19:65:gh:Rare Headbutt tree,204:14-16:30:gh:Common Headbutt tree
Lake of Rage|gh|old-rod|129:10:100:gh:
Lake of Rage|gh|good-rod|129:20:90:gh:,130:20:10:gh:
Lake of Rage|gh|super-rod|129:40:70:gh:,130:40:30:gh:
Lake of Rage|gh|surf|129:5-20:90:gh:,130:10-20:10:gh:
Lake of Rage|gh|static|130:30::gh:
Mt. Mortar 1F|gh|walk|19:14-16:14:gh:,41:13-15:60:gh:,66:14:20:gh:,74:14:5:gh:,183:13-15:40:gh:Swarm,183:15:1:gh:,296:14:20:gh:Hoenn Sound on the radio,359:13-15:20:gh:Hoenn Sound on the radio,433:14:20:gh:Sinnoh Sound on the radio,436:13-15:20:gh:Sinnoh Sound on the radio
Mt. Mortar 1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Mortar 1F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Mortar 1F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Mortar 1F|gh|surf|118:10-25:90:gh:,119:15-25:10:gh:
Mt. Mortar Lower Cave|gh|walk|19:14:10:gh:,41:14:5:gh:,66:13-15:35:gh:,74:13-15:50:gh:,296:15:20:gh:Hoenn Sound on the radio,359:13:20:gh:Hoenn Sound on the radio,433:15:20:gh:Sinnoh Sound on the radio,436:13:20:gh:Sinnoh Sound on the radio
Mt. Mortar Upper Cave|gh|walk|20:30:10:gh:,42:30:5:gh:,66:28:5:gh:,67:32:30:gh:,74:31:20:gh:,75:31:30:gh:,296:31:20:gh:Hoenn Sound on the radio,359:31-32:20:gh:Hoenn Sound on the radio,433:31:20:gh:Sinnoh Sound on the radio,436:31-32:20:gh:Sinnoh Sound on the radio
Mt. Mortar Upper Cave|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Mortar Upper Cave|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Mortar Upper Cave|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Mortar Upper Cave|gh|surf|118:15-30:90:gh:,119:20-30:10:gh:
Mt. Mortar B1F|gh|walk|19:16:20:gh:,20:16:5:gh:,41:15-17:60:gh:,66:16:10:gh:,74:16:5:gh:,296:16:20:gh:Hoenn Sound on the radio,359:15-17:20:gh:Hoenn Sound on the radio,433:16:20:gh:Sinnoh Sound on the radio,436:15-17:20:gh:Sinnoh Sound on the radio
Mt. Mortar B1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Mortar B1F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Mortar B1F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Mortar B1F|gh|surf|118:10-25:90:gh:,119:15-25:10:gh:
Mt. Mortar B1F|gh|gift|236:10::gh:
Mt. Silver 2F|gh|walk|42:48:5:gh:,55:48:10:gh:,195:45:30:gh:,195:45:10:gh:Morning,195:45:10:gh:Day,200:45:10:gh:Night,208:48:20:gh:,217:47-48:20:g:,232:47-48:20:h:,246:15-20:5:gh:,296:47-48:20:gh:Hoenn Sound on the radio,359:45-48:20:gh:Hoenn Sound on the radio,433:47-48:20:gh:Sinnoh Sound on the radio,436:45-48:20:gh:Sinnoh Sound on the radio
Mt. Silver 2F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Silver 2F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Silver 2F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Silver 2F|gh|surf|118:30-40:10:gh:,119:30-45:90:gh:
Mt. Silver 1F Top|gh|walk|42:48:5:gh:,55:48:10:gh:,195:45:20:gh:,195:45:10:gh:Morning,195:45:10:gh:Day,200:45:10:gh:Night,215:48:20:gh:,216:46:10:g:,217:48-50:20:g:,231:46:10:h:,232:48-50:20:h:,246:15-20:5:gh:,296:48-50:20:gh:Hoenn Sound on the radio,359:46-48:20:gh:Hoenn Sound on the radio,433:48-50:20:gh:Sinnoh Sound on the radio,436:46-48:20:gh:Sinnoh Sound on the radio
Mt. Silver 1F Top|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Silver 1F Top|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Silver 1F Top|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Silver 1F Top|gh|surf|118:30-40:10:gh:,119:30-45:90:gh:
Mt. Silver 4F|gh|walk|42:48:5:gh:,55:48:30:gh:,195:45:10:gh:,195:45:10:gh:Morning,195:45:10:gh:Day,200:45:10:gh:Night,215:50:20:gh:,217:47:20:g:,232:47:20:h:,246:15-20:5:gh:,296:47:20:gh:Hoenn Sound on the radio,359:45-48:20:gh:Hoenn Sound on the radio,433:47:20:gh:Sinnoh Sound on the radio,436:45-48:20:gh:Sinnoh Sound on the radio
Mt. Silver 4F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Silver 4F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Silver 4F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Silver 4F|gh|surf|118:30-40:10:gh:,119:30-45:90:gh:
Mt. Silver Outside|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Mt. Silver Outside|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Mt. Silver Outside|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Mt. Silver Outside|gh|surf|60:30-40:9:gh:,61:30-48:91:gh:
Mt. Silver Outside|gh|walk|77:42:30:gh:,78:44:10:gh:,84:41:5:gh:Morning,84:41:5:gh:Day,85:43:5:gh:Morning,85:43:5:gh:Day,114:41:30:gh:,215:41-43:10:gh:Night,217:42:20:g:,232:42:20:h:,264:42:20:gh:Hoenn Sound on the radio,293:41-42:20:gh:Hoenn Sound on the radio,399:42:20:gh:Sinnoh Sound on the radio,418:41-42:20:gh:Sinnoh Sound on the radio
Mt. Silver Outside|gh|headbutt|177:39-40:20:gh:Common Headbutt tree,177:41-43:20:gh:Rare Headbutt tree,190:39-40:30:gh:Common Headbutt tree,190:41-43:30:gh:Rare Headbutt tree,214:39-40:50:gh:Common Headbutt tree,214:41-43:50:gh:Rare Headbutt tree
Mt. Silver 1F|gh|walk|42:45:5:gh:,75:41-43:20:gh:,95:42:30:gh:,216:43:10:g:,217:44:30:g:,231:43:10:h:,232:44:30:h:,246:15-20:5:gh:,296:43:20:gh:Hoenn Sound on the radio,359:42-44:20:gh:Hoenn Sound on the radio,433:43:20:gh:Sinnoh Sound on the radio,436:42-44:20:gh:Sinnoh Sound on the radio
Mt. Silver 1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Silver 1F|gh|good-rod|118:20:30:gh:,119:20:20:gh:,129:20:40:gh:,129:20:10:gh:Morning,129:20:10:gh:Day,130:20:10:gh:Night
Mt. Silver 1F|gh|surf|118:30-40:9:gh:,119:30-50:91:gh:
Mt. Silver 1F|gh|super-rod|119:40:30:gh:Morning,119:40:30:gh:Day,119:40:20:gh:,130:40:50:gh:,130:40:30:gh:Night
Mt. Silver Mountainside|gh|walk|42:48-51:40:gh:,55:51:5:gh:,95:48:30:gh:,216:48:10:g:,217:50:10:g:,231:48:10:h:,232:50:10:h:,246:15-20:5:gh:,296:48:20:gh:Hoenn Sound on the radio,359:48-51:20:gh:Hoenn Sound on the radio,433:48:20:gh:Sinnoh Sound on the radio,436:48-51:20:gh:Sinnoh Sound on the radio
Mt. Silver Mountainside|gh|headbutt|177:42-44:20:gh:Common Headbutt tree,177:45-48:20:gh:Rare Headbutt tree,190:42-44:30:gh:Common Headbutt tree,190:45-48:30:gh:Rare Headbutt tree,214:42-44:50:gh:Common Headbutt tree,214:45-48:50:gh:Rare Headbutt tree
Mt. Silver 3F|gh|walk|42:48:5:gh:,55:48:20:gh:,195:45:30:gh:Morning,195:45:30:gh:Day,195:45:5:gh:,200:45:30:gh:Night,216:46:10:g:,217:47-48:20:g:,231:46:10:h:,232:47-48:20:h:,246:15-20:5:gh:,247:45:5:h:,247:30:5:g:,296:47-48:20:gh:Hoenn Sound on the radio,359:45-46:20:gh:Hoenn Sound on the radio,433:47-48:20:gh:Sinnoh Sound on the radio,436:45-46:20:gh:Sinnoh Sound on the radio
Mt. Silver Top|gh|walk|42:48:5:gh:,55:48:20:gh:,55:48:10:gh:Morning,55:48:10:gh:Day,195:45:10:gh:,195:45:5:gh:Morning,195:45:5:gh:Day,200:45-48:15:gh:Night,215:45:20:gh:,217:47:20:g:,232:47:20:h:,246:15-30:10:gh:,296:47:20:gh:Hoenn Sound on the radio,359:45-48:20:gh:Hoenn Sound on the radio,433:47:20:gh:Sinnoh Sound on the radio,436:45-48:20:gh:Sinnoh Sound on the radio
Mt. Silver Top|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Mt. Silver Top|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Mt. Silver Top|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Mt. Silver Top|gh|surf|118:30-40:10:gh:,119:30-45:90:gh:
Mt. Silver Top|gh|static|146:50::gh:
National Park|gh|walk|10:10-12:50:h:Morning,10:10:30:h:Day,10:7-18:20:gh:Bug-Catching Contest / Story  before national dex,10:24-36:20:gh:Bug-Catching Contest / Story  national dex / Tuesdays,11:10:30:h:Morning,11:10:30:h:Day,11:9-18:10:gh:Bug-Catching Contest / Story  before national dex,11:26-36:10:gh:Bug-Catching Contest / Story  national dex / Tuesdays,12:12-15:5:gh:Bug-Catching Contest / Story  before national dex,12:27-30:5:gh:Bug-Catching Contest / Story  national dex / Tuesdays,13:7-18:20:gh:Bug-Catching Contest / Story  before national dex,13:24-36:20:gh:Bug-Catching Contest / Story  national dex / Tuesdays,13:10-12:50:g:Morning,13:10:30:g:Day,14:9-18:10:gh:Bug-Catching Contest / Story  before national dex,14:26-36:10:gh:Bug-Catching Contest / Story  national dex / Tuesdays,14:10:30:g:Morning,14:10:30:g:Day,15:12-15:5:gh:Bug-Catching Contest / Story  before national dex,15:27-30:5:gh:Bug-Catching Contest / Story  national dex / Tuesdays,16:10-14:20:gh:Morning,16:12-14:15:gh:Day,46:10-17:10:gh:Bug-Catching Contest / Story  before national dex,46:27-34:10:gh:Bug-Catching Contest / Story  national dex / Tuesdays,48:10-16:10:gh:Bug-Catching Contest / Story  before national dex,48:25-32:10:gh:Bug-Catching Contest / Story  national dex / Tuesdays,123:27-28:5:gh:Bug-Catching Contest / Story  national dex / Thursdays,123:27-28:5:gh:Bug-Catching Contest / Story  national dex / Saturdays,123:13-14:5:gh:Bug-Catching Contest / Story  before national dex,123:27-28:5:gh:Bug-Catching Contest / Story  national dex / Tuesdays,127:27-28:5:gh:Bug-Catching Contest / Story  national dex / Thursdays,127:27-28:5:gh:Bug-Catching Contest / Story  national dex / Saturdays,127:13-14:5:gh:Bug-Catching Contest / Story  before national dex,127:27-28:5:gh:Bug-Catching Contest / Story  national dex / Tuesdays,163:10-14:100:gh:Night,191:10-12:25:gh:Day,265:24-36:20:gh:Bug-Catching Contest / Story  national dex / Thursdays,265:24-36:20:gh:Bug-Catching Contest / Story  national dex / Saturdays,266:24-36:10:gh:Bug-Catching Contest / Story  national dex / Thursdays,267:25-32:5:gh:Bug-Catching Contest / Story  national dex / Saturdays,268:24-36:10:gh:Bug-Catching Contest / Story  national dex / Saturdays,269:25-32:5:gh:Bug-Catching Contest / Story  national dex / Thursdays,290:26-36:20:gh:Bug-Catching Contest / Story  national dex / Thursdays,290:26-36:20:gh:Bug-Catching Contest / Story  national dex / Saturdays,311:10:20:gh:Hoenn Sound on the radio,312:12:20:gh:Hoenn Sound on the radio,313:26-36:10:gh:Bug-Catching Contest / Story  national dex / Thursdays,314:26-36:10:gh:Bug-Catching Contest / Story  national dex / Saturdays,401:27-30:10:gh:Bug-Catching Contest / Story  national dex / Thursdays,401:27-30:10:gh:Bug-Catching Contest / Story  national dex / Saturdays,402:27-30:10:gh:Bug-Catching Contest / Story  national dex / Thursdays,402:27-30:10:gh:Bug-Catching Contest / Story  national dex / Saturdays,403:10-12:40:gh:Sinnoh Sound on the radio,415:27-34:5:gh:Bug-Catching Contest / Story  national dex / Thursdays,415:27-34:5:gh:Bug-Catching Contest / Story  national dex / Saturdays
National Park|gh|headbutt|102:18-20:65:gh:Secret Headbutt tree,102:10-12:20:gh:Common Headbutt tree,102:13-15:20:gh:Rare Headbutt tree,163:10-12:50:gh:Common Headbutt tree,163:13-15:50:gh:Rare Headbutt tree,165:13-15:30:g:Rare Headbutt tree,167:13-15:30:h:Rare Headbutt tree,204:10-12:30:gh:Common Headbutt tree,420:18-25:35:gh:Secret Headbutt tree
New Bark Town|gh|old-rod|72:10:15:gh:,129:10:85:gh:
New Bark Town|gh|good-rod|72:20:30:gh:,90:20:10:gh:,129:20:40:gh:,170:20:20:gh:
New Bark Town|gh|surf|72:10-25:90:gh:,73:15-25:10:gh:
New Bark Town|gh|super-rod|73:40:20:gh:,90:40:30:gh:,170:40:40:gh:,171:40:10:gh:
New Bark Town|gh|headbutt|102:2-3:20:gh:Common Headbutt tree,102:4-5:20:gh:Rare Headbutt tree,163:2-3:50:gh:Common Headbutt tree,163:4-5:50:gh:Rare Headbutt tree,165:4-5:30:g:Rare Headbutt tree,167:4-5:30:h:Rare Headbutt tree,204:2-3:30:gh:Common Headbutt tree
New Bark Town|gh|gift|152:5::gh:,155:5::gh:,158:5::gh:
Olivine City|gh|surf|72:10-25:90:gh:,73:15-25:10:gh:
Olivine City|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Olivine City|gh|good-rod|98:20:50:gh:,120:20:10:gh:Night,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Olivine City|gh|super-rod|98:40:60:gh:,99:40:10:gh:,120:40:30:gh:Night,222:40:30:gh:Morning,222:40:30:gh:Day
Olivine City|gh|trade|100:1-100::gh:Trade a Krabby
Olivine City Gym|gh|trade|208:1-100::gh:Trade any Pokémon
Route 29|gh|walk|16:2-4:55:gh:Morning,16:2-4:55:gh:Day,19:2:10:h:Night,19:2-4:15:g:Night,19:4:5:h:,19:4:5:g:Morning,19:2:5:g:Day,161:2-3:40:gh:Morning,161:2-3:40:h:Day,161:2-4:40:g:Day,163:2-4:85:gh:Night,311:2-3:20:gh:Hoenn Sound on the radio,312:3:20:gh:Hoenn Sound on the radio,403:2-3:40:gh:Sinnoh Sound on the radio
Route 29|gh|headbutt|102:2-3:20:gh:Common Headbutt tree,102:4-5:20:gh:Rare Headbutt tree,163:2-3:50:gh:Common Headbutt tree,163:4-5:50:gh:Rare Headbutt tree,165:4-5:30:g:Rare Headbutt tree,167:4-5:30:h:Rare Headbutt tree,204:2-3:30:gh:Common Headbutt tree
Route 30|gh|walk|10:3-4:50:h:Morning,10:3-4:35:h:Day,11:4:10:h:Morning,11:4:15:h:Day,13:3-4:50:g:Morning,13:3-4:35:g:Day,14:4:10:g:Morning,14:4:15:g:Day,16:2-4:40:h:Morning,16:4:10:g:Morning,16:2-4:50:h:Day,16:3-4:50:g:Day,19:3-4:40:gh:Night,163:4:30:h:Night,163:3-4:60:g:Night,165:3:30:g:Morning,167:2:30:h:Night,264:4:20:gh:Hoenn Sound on the radio,293:2-3:20:h:Hoenn Sound on the radio,293:3:20:g:Hoenn Sound on the radio,399:4:20:gh:Sinnoh Sound on the radio,418:2-3:20:h:Sinnoh Sound on the radio,418:3:20:g:Sinnoh Sound on the radio
Route 30|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Route 30|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Route 30|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Route 30|gh|surf|60:10-25:90:gh:,61:15-32:10:gh:
Route 30|gh|headbutt|102:2-3:20:gh:Common Headbutt tree,102:4-5:20:gh:Rare Headbutt tree,163:2-3:50:gh:Common Headbutt tree,163:4-5:50:gh:Rare Headbutt tree,165:4-5:30:g:Rare Headbutt tree,167:4-5:30:h:Rare Headbutt tree,204:2-3:30:gh:Common Headbutt tree
Route 31|gh|walk|10:4-5:35:h:Morning,10:4-5:35:h:Day,11:5:15:h:Morning,11:5:15:h:Day,13:4:30:g:Morning,13:4-5:35:g:Day,14:5:10:g:Morning,14:5:15:g:Day,16:3:30:h:Morning,16:5:10:g:Morning,16:3:30:h:Day,16:4:30:g:Day,19:4-5:40:gh:Night,69:3:20:gh:,163:5:10:h:Night,163:4-5:40:g:Night,165:4:30:g:Morning,167:3:30:h:Night,264:3:20:gh:Hoenn Sound on the radio,293:3-4:20:h:Hoenn Sound on the radio,293:4:20:g:Hoenn Sound on the radio,399:3:20:gh:Sinnoh Sound on the radio,418:3-4:20:h:Sinnoh Sound on the radio,418:4:20:g:Sinnoh Sound on the radio
Route 31|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Route 31|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Route 31|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Route 31|gh|surf|60:10-25:90:gh:,61:15-32:10:gh:
Route 31|gh|headbutt|102:3-4:20:gh:Common Headbutt tree,102:5-6:20:gh:Rare Headbutt tree,163:3-4:50:gh:Common Headbutt tree,163:5-6:50:gh:Rare Headbutt tree,165:5-6:30:g:Rare Headbutt tree,167:5-6:30:h:Rare Headbutt tree,204:3-4:30:gh:Common Headbutt tree
Route 32|gh|walk|19:4:30:h:,19:6:5:gh:Morning,19:4-6:10:gh:Day,23:4:30:g:,41:4:5:gh:Morning,41:4:5:gh:Night,69:6:30:gh:Morning,69:6:30:gh:Day,69:6:20:gh:Night,179:6:20:gh:Morning,179:6:20:gh:Day,179:6:10:gh:Night,187:6:10:gh:Morning,187:6:10:gh:Day,194:6:35:gh:Night,264:6:20:gh:Hoenn Sound on the radio,293:4-6:20:gh:Hoenn Sound on the radio,399:6:20:gh:Sinnoh Sound on the radio,418:4-6:20:gh:Sinnoh Sound on the radio
Route 32|gh|old-rod|72:10:15:gh:,129:10:85:gh:,211:10:15:gh:Swarm
Route 32|gh|good-rod|72:20:55:gh:,129:20:40:gh:,211:20:65:gh:Swarm,211:20:5:gh:
Route 32|gh|super-rod|72:40:70:gh:,129:40:20:gh:,211:40:90:gh:Swarm,211:40:10:gh:
Route 32|gh|surf|72:10-20:60:gh:,73:15-36:10:gh:,195:15-25:30:gh:
Route 32|gh|headbutt|102:4-5:20:gh:Common Headbutt tree,102:6-7:20:gh:Rare Headbutt tree,163:4-5:50:gh:Common Headbutt tree,163:6-7:80:gh:Rare Headbutt tree,204:4-5:30:gh:Common Headbutt tree
Route 33|gh|walk|19:6-7:40:h:,19:6:10:g:,19:6:20:gh:Night,19:4:5:gh:Day,21:6:20:gh:Morning,21:6:20:gh:Day,23:7:30:g:,41:4-8:40:gh:Night,41:4:5:gh:Morning,187:6-8:35:gh:Morning,187:6-8:35:gh:Day,311:6-7:20:gh:Hoenn Sound on the radio,312:6:20:gh:Hoenn Sound on the radio,403:6-7:40:gh:Sinnoh Sound on the radio
Route 33|gh|headbutt|21:3-5:50:gh:Common Headbutt tree,21:6-8:80:gh:Rare Headbutt tree,190:3-5:20:gh:Common Headbutt tree,190:6-8:20:gh:Rare Headbutt tree,214:3-5:30:gh:Common Headbutt tree
Route 34|gh|walk|19:11-13:35:gh:,63:10:10:gh:,96:10-12:50:gh:,132:10:5:gh:,264:12:20:gh:Hoenn Sound on the radio,280:10-11:40:gh:Swarm,293:10-11:20:gh:Hoenn Sound on the radio,399:12:20:gh:Sinnoh Sound on the radio,418:10-11:20:gh:Sinnoh Sound on the radio
Route 34|gh|surf|72:10-25:90:gh:,73:15-29:10:gh:
Route 34|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Route 34|gh|good-rod|98:20:50:gh:,120:20:10:gh:Night,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Route 34|gh|super-rod|98:40:60:gh:,99:40:10:gh:,120:40:30:gh:Night,222:40:30:gh:Morning,222:40:30:gh:Day
Route 34|gh|headbutt|102:9-10:20:gh:Common Headbutt tree,102:11-12:20:gh:Rare Headbutt tree,163:9-10:50:gh:Common Headbutt tree,163:11-12:50:gh:Rare Headbutt tree,165:11-12:30:g:Rare Headbutt tree,167:11-12:30:h:Rare Headbutt tree,204:9-10:30:gh:Common Headbutt tree
Route 35|gh|walk|16:14:5:gh:Morning,16:14:5:gh:Day,29:12:30:gh:,32:12:30:gh:,63:10:10:gh:,96:14:20:gh:,132:10:4:gh:,163:14:5:gh:Night,193:12:40:gh:Swarm,193:12:1:gh:,264:14:20:gh:Hoenn Sound on the radio,293:12:20:gh:Hoenn Sound on the radio,399:14:20:gh:Sinnoh Sound on the radio,418:12:20:gh:Sinnoh Sound on the radio
Route 35|gh|surf|54:10-25:90:gh:,55:15-31:10:gh:
Route 35|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Route 35|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Route 35|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Route 35|gh|headbutt|102:10-11:20:gh:Common Headbutt tree,102:13-14:20:gh:Rare Headbutt tree,163:10-11:50:gh:Common Headbutt tree,163:13-14:50:gh:Rare Headbutt tree,165:13-14:30:g:Rare Headbutt tree,167:13-14:30:h:Rare Headbutt tree,204:10-11:30:gh:Common Headbutt tree
Route 36|gh|walk|16:13-15:25:h:Morning,16:12-15:25:g:Morning,16:13:20:gh:Day,29:12:30:h:,29:12:20:g:,29:12:10:g:Day,29:12:10:g:Night,29:13:10:g:Morning,32:12:30:h:,32:12:20:g:,32:12:10:g:Day,32:12:10:g:Night,32:13:10:g:Morning,37:13:10:g:,37:15:5:g:Day,58:13:10:h:,58:15:5:h:Day,163:13-15:25:gh:Night,234:13:5:gh:,311:12:20:gh:Hoenn Sound on the radio,312:13:20:gh:Hoenn Sound on the radio,403:12-13:40:gh:Sinnoh Sound on the radio
Route 36|gh|headbutt|102:4-5:20:gh:Common Headbutt tree,102:6-7:20:gh:Rare Headbutt tree,163:4-5:50:gh:Common Headbutt tree,163:6-7:50:gh:Rare Headbutt tree,165:6-7:30:g:Rare Headbutt tree,167:6-7:30:h:Rare Headbutt tree,204:4-5:30:gh:Common Headbutt tree
Route 36|gh|static|185:20::gh:
Route 37|gh|walk|16:13-15:60:h:Morning,16:15:20:g:Morning,16:13-15:50:gh:Day,17:15:5:gh:Day,37:14:10:g:,37:15:5:g:Day,58:14:10:h:,58:15:5:h:Day,163:15:20:h:Night,163:13-15:60:g:Night,165:13-15:40:g:Morning,167:13-15:40:h:Night,234:15:30:gh:,311:13-15:20:gh:Hoenn Sound on the radio,312:15:20:gh:Hoenn Sound on the radio,403:13-15:40:gh:Sinnoh Sound on the radio
Route 37|gh|headbutt|102:12-14:20:gh:Common Headbutt tree,102:15-17:20:gh:Rare Headbutt tree,163:12-14:50:gh:Common Headbutt tree,163:15-17:50:gh:Rare Headbutt tree,165:15-17:30:g:Rare Headbutt tree,167:15-17:30:h:Rare Headbutt tree,204:12-14:30:gh:Common Headbutt tree
Route 38|gh|walk|19:16:30:h:,19:16:10:h:Night,20:16:30:gh:,52:16:20:g:,52:16:10:g:Day,52:16:20:g:Night,52:16:10:g:Morning,81:16:20:gh:,83:16:10:gh:Morning,83:16:10:gh:Day,128:13:4:gh:,209:16:40:gh:Swarm,209:13:1:gh:,241:13:5:gh:,311:16:20:gh:Hoenn Sound on the radio,312:16:20:gh:Hoenn Sound on the radio,403:16:40:gh:Sinnoh Sound on the radio
Route 38|gh|headbutt|102:18-25:65:gh:Secret Headbutt tree,102:13-14:20:gh:Common Headbutt tree,102:15-16:20:gh:Rare Headbutt tree,163:13-14:50:gh:Common Headbutt tree,163:15-16:50:gh:Rare Headbutt tree,165:15-16:30:g:Rare Headbutt tree,167:15-16:30:h:Rare Headbutt tree,204:13-14:30:gh:Common Headbutt tree,412:18-25:35:gh:Secret Headbutt tree
Route 39|gh|walk|19:16:30:h:,19:16:10:h:Night,20:17:30:gh:,52:16:20:g:,52:16:10:g:Day,52:16:20:g:Night,52:16:10:g:Morning,81:16:20:gh:,83:16:10:gh:Morning,83:16:10:gh:Day,128:15:5:gh:,241:15:5:gh:,311:16-17:20:gh:Hoenn Sound on the radio,312:16:20:gh:Hoenn Sound on the radio,403:16-17:40:gh:Sinnoh Sound on the radio
Route 39|gh|headbutt|102:14-15:20:gh:Common Headbutt tree,102:16-17:20:gh:Rare Headbutt tree,163:14-15:50:gh:Common Headbutt tree,163:16-17:50:gh:Rare Headbutt tree,165:16-17:30:g:Rare Headbutt tree,167:16-17:30:h:Rare Headbutt tree,204:14-15:30:gh:Common Headbutt tree
Sea Route 40|gh|surf|72:10-25:90:gh:,73:15-25:10:gh:
Sea Route 40|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Sea Route 40|gh|good-rod|98:20:50:gh:,120:20:10:gh:Night,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Sea Route 40|gh|super-rod|98:40:60:gh:,99:40:10:gh:,120:40:30:gh:Night,222:40:30:gh:Morning,222:40:30:gh:Day
Sea Route 41|gh|old-rod|72:10:15:gh:,129:10:85:gh:
Sea Route 41|gh|good-rod|72:20:30:gh:,90:20:10:gh:,129:20:40:gh:,170:20:20:gh:
Sea Route 41|gh|surf|72:15-25:60:h:,72:10-25:90:g:,73:15-25:30:h:,73:15-25:10:g:,226:15-25:10:h:
Sea Route 41|gh|super-rod|73:40:20:gh:,90:40:30:gh:,170:40:40:gh:,171:40:10:gh:
Route 42|gh|walk|21:14-16:30:h:Morning,21:14-16:40:g:Morning,21:14-16:30:h:Day,21:14-16:40:g:Day,41:14-16:30:h:Night,41:14-16:40:g:Night,56:15:30:h:,179:13:30:h:,179:13-15:50:g:,180:15-17:10:gh:,264:14:20:h:Hoenn Sound on the radio,264:15:20:g:Hoenn Sound on the radio,293:13-15:20:h:Hoenn Sound on the radio,293:13-14:20:g:Hoenn Sound on the radio,399:14:20:h:Sinnoh Sound on the radio,399:15:20:g:Sinnoh Sound on the radio,418:13-15:20:h:Sinnoh Sound on the radio,418:13-14:20:g:Sinnoh Sound on the radio
Route 42|gh|headbutt|21:13-14:50:gh:Common Headbutt tree,21:15-16:80:gh:Rare Headbutt tree,190:13-14:20:gh:Common Headbutt tree,190:15-16:20:gh:Rare Headbutt tree,214:13-14:30:gh:Common Headbutt tree
Route 42|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Route 42|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Route 42|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Route 42|gh|surf|118:10-25:90:gh:,119:15-25:10:gh:
Route 43|gh|walk|17:17:25:gh:Morning,17:17:20:gh:Day,48:15-17:15:gh:Night,48:16:5:gh:Morning,164:17:20:gh:Night,179:15:10:gh:Morning,179:15:10:gh:Day,179:16:5:gh:Night,180:15:30:gh:,180:16-17:10:gh:Day,203:15:30:gh:,264:17:20:gh:Hoenn Sound on the radio,293:15:20:gh:Hoenn Sound on the radio,399:17:20:gh:Sinnoh Sound on the radio,418:15:20:gh:Sinnoh Sound on the radio
Route 43|gh|headbutt|48:17-18:15:gh:Rare Headbutt tree,102:15-16:20:gh:Common Headbutt tree,102:17-18:20:gh:Rare Headbutt tree,163:15-16:50:gh:Common Headbutt tree,163:17-18:65:gh:Rare Headbutt tree,204:15-16:30:gh:Common Headbutt tree
Route 43|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Route 43|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Route 43|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Route 43|gh|surf|129:5-50:100:gh:
Route 44|gh|headbutt|21:21-22:50:gh:Common Headbutt tree,21:23-24:80:gh:Rare Headbutt tree,190:21-22:20:gh:Common Headbutt tree,190:23-24:20:gh:Rare Headbutt tree,214:21-22:30:gh:Common Headbutt tree
Route 44|gh|old-rod|60:10:15:gh:,129:10:85:gh:,223:10:15:gh:Swarm
Route 44|gh|good-rod|60:20:55:gh:,129:20:40:gh:,223:20:65:gh:Swarm,223:20:5:gh:
Route 44|gh|super-rod|60:40:70:gh:,129:40:20:gh:,223:40:90:gh:Swarm,223:40:10:gh:
Route 44|gh|surf|60:15-30:90:gh:,61:20-30:10:gh:
Route 44|gh|walk|69:22:20:gh:,70:22-24:35:gh:,108:24-26:15:gh:,114:23:30:gh:,264:22:20:gh:Hoenn Sound on the radio,293:22-23:20:gh:Hoenn Sound on the radio,399:22:20:gh:Sinnoh Sound on the radio,418:22-23:20:gh:Sinnoh Sound on the radio
Route 45|gh|headbutt|21:23-24:50:gh:Common Headbutt tree,21:26-27:80:gh:Rare Headbutt tree,190:23-24:20:gh:Common Headbutt tree,190:26-27:20:gh:Rare Headbutt tree,214:23-25:30:gh:Common Headbutt tree
Route 45|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Route 45|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Route 45|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Route 45|gh|walk|74:23:30:gh:,75:23-27:40:h:,75:23-25:55:g:,207:24:20:h:,216:20:10:g:,227:27:5:g:,231:20:10:h:,264:24:20:gh:Hoenn Sound on the radio,293:23:20:gh:Hoenn Sound on the radio,333:23:40:gh:Swarm,399:24:20:gh:Sinnoh Sound on the radio,418:23:20:gh:Sinnoh Sound on the radio
Route 45|gh|surf|129:2-25:100:gh:
Route 46|gh|walk|19:2:30:gh:Night,19:2-4:25:gh:,21:2-3:35:gh:Morning,21:2-3:35:gh:Day,74:2-3:40:gh:,74:3:5:gh:Night,311:2-3:20:gh:Hoenn Sound on the radio,312:2:20:gh:Hoenn Sound on the radio,403:2-3:40:gh:Sinnoh Sound on the radio
Route 46|gh|headbutt|21:2-3:50:gh:Common Headbutt tree,21:4-5:80:gh:Rare Headbutt tree,190:2-3:20:gh:Common Headbutt tree,190:4-5:20:gh:Rare Headbutt tree,214:2-3:30:gh:Common Headbutt tree
Route 47|gh|headbutt|11:25-28:50:h:Secret Headbutt tree,12:25-28:30:h:Secret Headbutt tree,14:25-28:50:g:Secret Headbutt tree,15:25-28:30:g:Secret Headbutt tree,102:15-16:20:gh:Common Headbutt tree,102:17-18:20:gh:Rare Headbutt tree,163:15-16:50:gh:Common Headbutt tree,163:17-18:50:gh:Rare Headbutt tree,165:17-18:30:g:Rare Headbutt tree,167:17-18:30:h:Rare Headbutt tree,204:15-16:30:gh:Common Headbutt tree,214:25-30:20:gh:Secret Headbutt tree
Route 47|gh|walk|20:31-33:5:gh:,21:31:5:gh:,22:34:4:gh:,44:32:5:gh:,83:35:20:gh:Morning,83:35:20:gh:Day,132:35:40:gh:Swarm,132:31-40:41:gh:,164:35:20:gh:Night,241:35:20:gh:,264:31-32:20:gh:Hoenn Sound on the radio,293:33-34:20:gh:Hoenn Sound on the radio,399:31-32:20:gh:Sinnoh Sound on the radio,418:33-34:20:gh:Sinnoh Sound on the radio
Route 47|gh|old-rod|72:10:15:gh:,129:10:85:gh:
Route 47|gh|good-rod|72:20:30:gh:,90:20:10:gh:,129:20:40:gh:,170:20:20:gh:
Route 47|gh|surf|72:15-25:60:gh:,86:10-20:30:gh:,120:15-25:10:gh:
Route 47|gh|super-rod|73:40:20:gh:,90:40:30:gh:,170:40:40:gh:,171:40:10:gh:
Route 47 Cave Gate|gh|good-rod|60:20:10:gh:Morning,60:20:10:gh:Day,60:20:5:gh:,129:20:85:gh:,129:20:10:gh:Night
Route 47 Cave Gate|gh|super-rod|60:40:30:gh:,129:40:70:gh:
Route 47 Cave Gate|gh|old-rod|129:10:100:gh:
Route 47 Cave Gate|gh|surf|194:20-30:90:gh:,195:30-40:10:gh:
Route 47 Inside Cave|gh|walk|41:18:5:gh:Night,42:22:20:gh:,42:20:4:gh:Night,66:19:10:gh:,67:22:4:gh:,74:19:20:gh:,75:20:4:gh:Morning,75:20:4:gh:Day,95:20:10:gh:,98:20:10:gh:,99:22:10:gh:,194:18:5:gh:Morning,194:18:5:gh:Day,195:20:5:gh:Morning,195:20:5:gh:Day,200:20:5:gh:Night,208:23:2:gh:,296:19-20:20:gh:Hoenn Sound on the radio,359:20-22:20:gh:Hoenn Sound on the radio,433:19-20:20:gh:Sinnoh Sound on the radio,436:20-22:20:gh:Sinnoh Sound on the radio
Route 47 Inside Cave|gh|rock-smash|98:20-26:90:gh:,99:28-31:10:gh:
Route 48|gh|walk|22:21:10:gh:,37:24:20:g:Night,37:21-22:9:g:,44:22-24:20:gh:,50:20:4:gh:,58:25:20:h:Night,58:21-22:9:h:,83:25:20:h:Morning,83:24:20:g:Morning,83:25:20:h:Day,83:24:20:g:Day,128:20-24:21:gh:,187:20-22:11:gh:,203:20:5:gh:,311:20-21:20:gh:Hoenn Sound on the radio,312:22-24:20:gh:Hoenn Sound on the radio,403:20-24:40:gh:Sinnoh Sound on the radio
Route 48|gh|headbutt|102:15-16:20:gh:Common Headbutt tree,102:17-18:20:gh:Rare Headbutt tree,163:15-16:50:gh:Common Headbutt tree,163:17-18:50:gh:Rare Headbutt tree,165:17-18:30:g:Rare Headbutt tree,167:17-18:30:h:Rare Headbutt tree,204:15-16:30:gh:Common Headbutt tree
Ruins of Alph Outside|gh|old-rod|60:10:15:gh:,129:10:85:gh:
Ruins of Alph Outside|gh|good-rod|60:20:60:gh:,129:20:40:gh:
Ruins of Alph Outside|gh|super-rod|60:40:80:gh:,129:40:20:gh:
Ruins of Alph Outside|gh|rock-smash|74:3-14:100:gh:
Ruins of Alph Outside|gh|walk|177:18-24:90:gh:,235:20-22:10:gh:,264:18:20:gh:Hoenn Sound on the radio,293:20-22:20:gh:Hoenn Sound on the radio,399:18:20:gh:Sinnoh Sound on the radio,418:20-22:20:gh:Sinnoh Sound on the radio
Ruins of Alph Outside|gh|surf|194:10-20:60:gh:,195:10-25:40:gh:
Ruins of Alph Interior A|gh|walk|201:5:100:gh:
Ruins of Alph Interior B|gh|walk|201:5:100:gh:
Ruins of Alph Interior C|gh|walk|201:5:100:gh:
Ruins of Alph Interior D|gh|walk|201:5:100:gh:
Slowpoke Well 1F|gh|walk|41:5-8:85:gh:,79:6-8:15:gh:,296:7:20:gh:Hoenn Sound on the radio,359:5-6:20:gh:Hoenn Sound on the radio,433:7:20:gh:Sinnoh Sound on the radio,436:5-6:20:gh:Sinnoh Sound on the radio
Slowpoke Well 1F|gh|surf|79:5-25:100:gh:
Slowpoke Well 1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Slowpoke Well 1F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Slowpoke Well 1F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Slowpoke Well B1F|gh|walk|41:19-23:80:gh:,42:23:5:gh:,79:21-23:15:gh:,296:19:20:gh:Hoenn Sound on the radio,359:21-23:20:gh:Hoenn Sound on the radio,433:19:20:gh:Sinnoh Sound on the radio,436:21-23:20:gh:Sinnoh Sound on the radio
Slowpoke Well B1F|gh|surf|79:10-25:90:gh:,80:15-30:10:gh:
Slowpoke Well B1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Slowpoke Well B1F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Slowpoke Well B1F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Sprout Tower 2F|gh|walk|19:3-6:85:gh:Morning,19:3-6:85:gh:Day,19:3-5:15:gh:,92:3-6:85:gh:Night,263:3-4:20:gh:Hoenn Sound on the radio,307:5:20:gh:Sinnoh Sound on the radio,327:5:20:gh:Hoenn Sound on the radio,441:3-4:20:gh:Sinnoh Sound on the radio
Sprout Tower 3F|gh|walk|19:3-6:85:gh:Morning,19:3-6:85:gh:Day,19:3-5:15:gh:,92:3-6:85:gh:Night,263:3-4:20:gh:Hoenn Sound on the radio,307:5:20:gh:Sinnoh Sound on the radio,327:5:20:gh:Hoenn Sound on the radio,441:3-4:20:gh:Sinnoh Sound on the radio
Bell Tower 2F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 3F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 4F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 5F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 6F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 7F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 8F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 9F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower 10F|gh|walk|19:20-22:80:gh:Morning,19:20-22:80:gh:Day,19:22-24:20:gh:,92:20-22:80:gh:Night,263:20-21:20:gh:Hoenn Sound on the radio,307:22:20:gh:Sinnoh Sound on the radio,327:22:20:gh:Hoenn Sound on the radio,441:20-21:20:gh:Sinnoh Sound on the radio
Bell Tower Roof|gh|static|250:45::h:,250:70::g:
Tohjo Falls|gh|walk|19:20:5:gh:,20:22:30:gh:,41:22:30:gh:,42:22:20:gh:,79:21-23:15:gh:,296:22:20:gh:Hoenn Sound on the radio,359:22:20:gh:Hoenn Sound on the radio,433:22:20:gh:Sinnoh Sound on the radio,436:22:20:gh:Sinnoh Sound on the radio
Tohjo Falls|gh|surf|79:20:30:gh:,118:20:60:gh:,119:20:10:gh:
Tohjo Falls|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Tohjo Falls|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Tohjo Falls|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Union Cave 1F|gh|walk|19:4:10:h:,19:4-6:40:g:,27:6:30:h:,41:5-7:25:gh:,74:6:30:gh:,95:6:5:gh:,296:5:20:gh:Hoenn Sound on the radio,359:6:20:gh:Hoenn Sound on the radio,433:5:20:gh:Sinnoh Sound on the radio,436:6:20:gh:Sinnoh Sound on the radio
Union Cave 1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Union Cave 1F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Union Cave 1F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Union Cave 1F|gh|surf|194:10-20:60:gh:,195:10-25:40:gh:
Union Cave B1F|gh|walk|19:6:5:h:,19:6-8:35:g:,27:8:30:h:,41:7-9:25:gh:,74:8:30:gh:,95:8:10:gh:,296:7:20:gh:Hoenn Sound on the radio,359:8:20:gh:Hoenn Sound on the radio,433:7:20:gh:Sinnoh Sound on the radio,436:8:20:gh:Sinnoh Sound on the radio
Union Cave B1F|gh|old-rod|118:10:15:gh:,129:10:85:gh:
Union Cave B1F|gh|good-rod|118:20:60:gh:,129:20:40:gh:
Union Cave B1F|gh|super-rod|118:40:70:gh:,119:40:10:gh:,129:40:20:gh:
Union Cave B1F|gh|surf|194:10-20:60:gh:,195:10-25:40:gh:
Union Cave B2F|gh|walk|19:20:5:gh:,20:22:30:gh:,41:22:30:gh:,42:22:20:gh:,74:21:10:gh:,95:23:5:gh:,296:22:20:gh:Hoenn Sound on the radio,359:22:20:gh:Hoenn Sound on the radio,433:22:20:gh:Sinnoh Sound on the radio,436:22:20:gh:Sinnoh Sound on the radio
Union Cave B2F|gh|surf|72:10-20:60:gh:,73:15-25:10:gh:,195:15-25:30:gh:
Union Cave B2F|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Union Cave B2F|gh|good-rod|98:20:50:gh:,120:20:10:gh:Night,129:20:40:gh:,222:20:10:gh:Morning,222:20:10:gh:Day
Union Cave B2F|gh|super-rod|98:40:60:gh:,99:40:10:gh:,120:40:30:gh:Night,222:40:30:gh:Morning,222:40:30:gh:Day
Union Cave B2F|gh|static|131:20::gh:Fridays
Violet City|gh|old-rod|60:10:15:gh:,129:10:85:gh:,340:10:15:gh:Swarm
Violet City|gh|good-rod|60:20:60:gh:,129:20:40:gh:,340:20:65:gh:Swarm
Violet City|gh|super-rod|60:40:80:gh:,129:40:20:gh:,340:40:100:gh:Swarm
Violet City|gh|surf|60:10-25:90:gh:,61:15-25:10:gh:
Violet City|gh|trade|95:1-100::gh:Trade a Bellsprout
Violet City|gh|headbutt|102:10:20:gh:Common Headbutt tree,102:10:20:gh:Rare Headbutt tree,163:2-3:50:gh:Common Headbutt tree,163:4-10:80:gh:Rare Headbutt tree,204:10:30:gh:Common Headbutt tree
Violet City Poke Mart|gh|gift-egg|175:1::gh:Story  zephyr badge
Violet City Pokemon Center|gh|gift-egg|179:1::gh:Correct password,194:1::gh:Correct password,218:1::gh:Correct password
Whirl Islands 1F|gh|walk|41:23:30:gh:,42:23:5:gh:,86:22-24:15:gh:,98:22-24:50:gh:,296:24:20:gh:Hoenn Sound on the radio,359:22-23:20:gh:Hoenn Sound on the radio,433:24:20:gh:Sinnoh Sound on the radio,436:22-23:20:gh:Sinnoh Sound on the radio
Whirl Islands 1F|gh|surf|72:15-25:60:gh:,73:15-25:10:gh:,116:10-20:30:gh:
Whirl Islands 1F|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Whirl Islands 1F|gh|good-rod|98:20:50:gh:,116:20:10:gh:,129:20:40:gh:
Whirl Islands 1F|gh|super-rod|98:40:40:gh:,99:40:20:gh:,116:40:30:gh:,117:40:10:gh:
Whirl Islands B1F|gh|walk|41:23:30:gh:,42:23:5:gh:,86:22-24:15:gh:,98:22-24:50:gh:,296:24:20:gh:Hoenn Sound on the radio,359:22-23:20:gh:Hoenn Sound on the radio,433:24:20:gh:Sinnoh Sound on the radio,436:22-23:20:gh:Sinnoh Sound on the radio
Whirl Islands B2F|gh|walk|41:23:30:gh:,42:23:5:gh:,86:22-24:15:gh:,98:22-24:50:gh:,296:24:20:gh:Hoenn Sound on the radio,359:22-23:20:gh:Hoenn Sound on the radio,433:24:20:gh:Sinnoh Sound on the radio,436:22-23:20:gh:Sinnoh Sound on the radio
Whirl Islands B2F|gh|surf|73:15-25:30:gh:,116:15-25:60:gh:,117:15-30:10:gh:
Whirl Islands B2F|gh|old-rod|98:10:15:gh:,129:10:85:gh:
Whirl Islands B2F|gh|good-rod|98:20:50:gh:,116:20:10:gh:,129:20:40:gh:
Whirl Islands B2F|gh|super-rod|98:40:40:gh:,99:40:20:gh:,116:40:30:gh:,117:40:10:gh:
Whirl Islands B3F|gh|walk|41:24:30:gh:,42:24:5:gh:,86:23-25:15:gh:,98:23-25:50:gh:,296:25:20:gh:Hoenn Sound on the radio,359:23-24:20:gh:Hoenn Sound on the radio,433:25:20:gh:Sinnoh Sound on the radio,436:23-24:20:gh:Sinnoh Sound on the radio
Whirl Islands B3F|gh|static|249:70::h:,249:45::g:
Azalea Town|gh|headbutt|21:3-5:50:gh:Common Headbutt tree,21:6-8:80:gh:Rare Headbutt tree,190:3-5:20:gh:Common Headbutt tree,190:6-8:20:gh:Rare Headbutt tree,214:3-5:30:gh:Common Headbutt tree
Goldenrod City North Gate|gh|gift|21:20::gh:
Goldenrod City Bills House|gh|gift|133:5::gh:
Goldenrod City Game Corner|gh|gift|23:15::h:700 coins,27:15::g:700 coins,63:15::gh:200 coins,147:15::gh:2100 coins
Goldenrod City Department Store 5F|gh|trade|66:1-100::gh:Trade a Drowzee
Team Rocket HQ|gh|static|74:21::gh:,100:23::gh:,101:23::gh:,109:21::gh:
Safari Zone Gate|gh|headbutt|102:14-16:20:gh:Common Headbutt tree,102:17-19:20:gh:Rare Headbutt tree,163:14-16:50:gh:Common Headbutt tree,163:17-19:50:gh:Rare Headbutt tree,165:17-19:30:g:Rare Headbutt tree,167:17-19:30:h:Rare Headbutt tree,204:14-16:30:gh:Common Headbutt tree
Sinjoh Ruins|gh|static|483:1::gh:Event arceus in party,484:1::gh:Event arceus in party,487:1::gh:Event arceus in party
Embedded Tower Kyogre Room|h|static|382:50::h:
Embedded Tower Groundon Room|g|static|383:50::g:
Embedded Tower Rayquaza Room|gh|static|384:50::gh:
Roaming Johto|gh|roam|243:40::gh:Story  awakened beasts,244:40::gh:Story  awakened beasts,380:35::h:Story  vermilion copycat,381:35::g:Story  vermilion copycat
Johto Safari Zone Peak|gh|walk|22:44:10:gh:5+ forest blocks placed,46:42:10:gh:3+ forest blocks placed,74:15-17:40:gh:Morning,74:15-17:40:gh:Day,74:15-17:40:gh:Night,76:16-17:20:gh:Morning,76:16-17:20:gh:Day,80:45:10:gh:5+ water blocks placed,81:15-16:20:gh:Morning,81:15-16:20:gh:Day,81:15-16:20:gh:Night,82:17:10:gh:Morning,82:17:10:gh:Day,82:17:20:gh:Night,126:41:10:gh:Morning / 10+ peak blocks placed,126:41:10:gh:Day / 10+ peak blocks placed,126:17:10:gh:Morning,126:17:10:gh:Day,202:16-17:20:gh:Night,202:41:10:gh:Night / 10+ peak blocks placed,264:46:10:gh:5+ plains blocks placed,288:47:10:gh:56+ forest blocks placed / 28+ plains blocks placed,305:45:10:gh:24+ peak blocks placed,335:45:10:gh:Morning / 12+ plains blocks placed,335:45:10:gh:Day / 12+ plains blocks placed,335:43:10:gh:Night / 12+ plains blocks placed,363:45:10:gh:Morning / 35+ water blocks placed,363:45:10:gh:Day / 35+ water blocks placed,363:44:10:gh:Night / 35+ water blocks placed,436:45:10:gh:Morning / 35+ peak blocks placed / 14+ forest blocks placed,436:45:10:gh:Day / 35+ peak blocks placed / 14+ forest blocks placed,436:46:10:gh:Night / 35+ peak blocks placed / 14+ forest blocks placed
Johto Safari Zone Desert|gh|walk|22:38:10:gh:3+ plains blocks placed,22:15-17:30:gh:Night,22:41:10:gh:Night / 6+ peak blocks placed,27:15-17:40:gh:Morning,27:15-17:40:gh:Day,27:15-17:40:gh:Night,28:15-17:30:gh:Morning,28:15-17:30:gh:Day,28:15-17:30:gh:Night,104:16-17:20:gh:Morning,104:16-17:20:gh:Day,105:41:10:gh:Morning / 6+ peak blocks placed,105:41:10:gh:Day / 6+ peak blocks placed,105:17:10:gh:Morning,105:17:10:gh:Day,270:38:10:gh:8+ water blocks placed,327:45:10:gh:14+ plains blocks placed,328:46:10:gh:Morning / 49+ peak blocks placed,328:47:10:gh:Day / 49+ peak blocks placed,328:46:10:gh:Night / 49+ peak blocks placed,329:44:10:gh:Morning / 49+ forest blocks placed,329:45:10:gh:Day / 49+ forest blocks placed,329:44:10:gh:Night / 49+ forest blocks placed,331:35:10:gh:35+ forest blocks placed,332:48:10:gh:42+ water blocks placed,449:43:10:gh:28+ peak blocks placed,455:48:10:gh:49+ plains blocks placed
Johto Safari Zone Plains|gh|walk|17:15-17:30:gh:Morning,17:15-17:30:gh:Day,20:15-17:30:gh:Night,63:15-17:30:gh:Morning,63:15-17:30:gh:Day,63:15-17:30:gh:Night,77:42:10:gh:5+ peak blocks placed,203:40:10:gh:Morning / 3+ plains blocks placed,203:40:10:gh:Day / 3+ plains blocks placed,203:15-17:30:gh:Morning,203:15-17:30:gh:Day,203:15-16:20:gh:Night,229:43:10:gh:Morning / 10+ peak blocks placed,229:43:10:gh:Day / 10+ peak blocks placed,229:44:10:gh:Night / 10+ peak blocks placed,234:40:10:gh:Night / 3+ plains blocks placed,234:41:10:gh:Night / 3+ forest blocks placed,234:17:20:gh:Night,235:41:10:gh:Morning / 3+ forest blocks placed,235:41:10:gh:Day / 3+ forest blocks placed,235:17:10:gh:Morning,235:17:10:gh:Day,263:44:10:gh:15+ forest blocks placed,270:42:10:gh:12+ water blocks placed,283:46:10:gh:28+ water blocks placed,310:45:10:gh:15+ plains blocks placed,335:43:10:gh:Morning / 15+ peak blocks placed,335:43:10:gh:Day / 15+ peak blocks placed,335:45:10:gh:Night / 15+ peak blocks placed,403:43:10:gh:Morning / 10+ plains blocks placed,403:43:10:gh:Day / 10+ plains blocks placed,403:44:10:gh:Night / 10+ plains blocks placed
Johto Safari Zone Meadow|gh|walk|20:40:10:gh:5+ plains blocks placed,35:42:10:gh:Night / 3+ peak blocks placed,35:17:10:gh:Night,39:15-17:50:gh:Morning,39:15-17:30:gh:Day,39:15-17:30:gh:Night,74:45:10:gh:Morning / 3+ peak blocks placed,74:45:10:gh:Day / 3+ peak blocks placed,113:42:10:gh:12+ plains blocks placed,183:15-17:30:gh:Night,187:15-17:40:gh:Morning,187:15-17:30:gh:Day,188:40:10:gh:8+ forest blocks placed,188:17:10:gh:Morning,188:17:10:gh:Day,191:15-17:30:gh:Day,194:15-17:30:gh:Night,194:40:10:gh:3+ water blocks placed,273:45:10:gh:35+ plains blocks placed,274:38:10:gh:28+ forest blocks placed,274:48:10:gh:Morning / 35+ forest blocks placed,274:47:10:gh:Day / 35+ forest blocks placed,274:47:10:gh:Night / 35+ forest blocks placed,299:45:10:gh:35+ peak blocks placed,447:45:10:gh:Morning / 42+ peak blocks placed / 28+ forest blocks placed,447:46:10:gh:Day / 42+ peak blocks placed / 28+ forest blocks placed,447:45:10:gh:Night / 42+ peak blocks placed / 28+ forest blocks placed
Johto Safari Zone Meadow|gh|old-rod|60:12-15:40:gh:,61:15:10:gh:2+ water blocks placed,61:16:10:gh:3+ water blocks placed,129:12-15:60:gh:
Johto Safari Zone Meadow|gh|good-rod|60:22-24:40:gh:,61:27:10:gh:5+ water blocks placed,61:24-25:20:gh:,129:22-24:40:gh:,130:28:10:gh:7+ water blocks placed
Johto Safari Zone Meadow|gh|super-rod|60:35-36:40:gh:,61:35-38:60:gh:,130:42:10:gh:10+ water blocks placed,130:45:10:gh:14+ water blocks placed
Johto Safari Zone Meadow|gh|surf|129:15-17:50:gh:,183:16-17:20:gh:,188:47:10:gh:3+ water blocks placed,194:15-17:30:gh:,284:42:10:gh:10+ water blocks placed,284:46:10:gh:14+ water blocks placed
Johto Safari Zone Forest|gh|walk|16:15-17:30:gh:Morning,16:15-17:30:gh:Day,69:15-17:40:gh:Morning,69:15-17:40:gh:Day,69:15-17:30:gh:Night,92:15-17:20:gh:Night,93:16-17:20:gh:Night,108:40:10:gh:3+ water blocks placed,122:45:10:gh:3+ plains blocks placed,122:16-17:20:gh:Morning,122:16-17:20:gh:Day,125:41:10:gh:4+ peak blocks placed,200:15-17:30:gh:Night,200:42:10:gh:4+ forest blocks placed,200:17:10:gh:Morning,200:17:10:gh:Day,283:42:10:gh:24+ water blocks placed,353:46:10:gh:Morning / 35+ forest blocks placed,353:46:10:gh:Day / 35+ forest blocks placed,353:47:10:gh:Night / 35+ forest blocks placed,374:44:10:gh:63+ peak blocks placed,399:40:10:gh:10+ water blocks placed,406:47:10:gh:24+ plains blocks placed,437:45:10:gh:Morning / 56+ peak blocks placed / 35+ forest blocks placed,437:44:10:gh:Day / 56+ peak blocks placed / 35+ forest blocks placed,437:44:10:gh:Night / 56+ peak blocks placed / 35+ forest blocks placed
Johto Safari Zone Swamp|gh|walk|39:15-17:30:gh:Morning,39:15-17:30:gh:Day,46:15-17:30:gh:Morning,46:15-17:30:gh:Day,47:41:10:gh:3+ plains blocks placed,70:46:10:gh:8+ forest blocks placed,96:15-17:20:gh:Night,97:37:10:gh:Night / 5+ forest blocks placed,97:16-17:20:gh:Night,100:42:10:gh:10+ peak blocks placed,161:15-17:30:gh:Morning,161:15-17:30:gh:Day,161:15-17:30:gh:Night,162:42:10:gh:5+ plains blocks placed,198:15-17:30:gh:Night,198:37:10:gh:Morning / 5+ forest blocks placed,198:37:10:gh:Day / 5+ forest blocks placed,198:17:10:gh:Morning,198:17:10:gh:Day,355:38:10:gh:28+ peak blocks placed,358:46:10:gh:Morning / 15+ forest blocks placed,358:46:10:gh:Day / 15+ forest blocks placed,358:47:10:gh:Night / 15+ forest blocks placed,371:45:10:gh:Morning / 56+ peak blocks placed / 35+ forest blocks placed,371:45:10:gh:Day / 56+ peak blocks placed / 35+ forest blocks placed,371:44:10:gh:Night / 56+ peak blocks placed / 35+ forest blocks placed,417:47:10:gh:10+ plains blocks placed,419:44:10:gh:10+ water blocks placed
Johto Safari Zone Swamp|gh|old-rod|118:17:10:gh:2+ water blocks placed,119:17:10:gh:3+ water blocks placed,129:12-15:100:gh:
Johto Safari Zone Swamp|gh|good-rod|118:22-24:40:gh:,119:27:10:gh:6+ water blocks placed,119:24-25:20:gh:,129:22-24:40:gh:,147:29:10:gh:10+ water blocks placed
Johto Safari Zone Swamp|gh|super-rod|118:35-37:40:gh:,119:35-37:40:gh:,147:36-37:20:gh:,148:42:10:gh:15+ water blocks placed,148:45:10:gh:20+ water blocks placed
Johto Safari Zone Swamp|gh|surf|118:15-17:40:gh:,119:42:10:gh:4+ water blocks placed,129:7-17:60:gh:,198:47:10:gh:10+ water blocks placed,355:48:10:gh:35+ water blocks placed
Johto Safari Zone Marshland|gh|walk|23:15-16:20:gh:Morning,23:15-16:20:gh:Day,24:17:10:gh:Morning,24:17:10:gh:Day,43:15-17:20:gh:Night,44:42:10:gh:2+ plains blocks placed,44:16-17:20:gh:Night,50:43:10:gh:5+ peak blocks placed,88:17:10:gh:Morning,88:17:10:gh:Day,89:38:10:gh:8+ water blocks placed,109:15-17:30:gh:Morning,109:15-17:30:gh:Day,109:15-17:30:gh:Night,110:15-17:30:gh:Morning,110:15-17:30:gh:Day,189:38:10:gh:5+ plains blocks placed,194:15-17:30:gh:Night,213:44:10:gh:8+ peak blocks placed,315:46:10:gh:49+ forest blocks placed,336:48:10:gh:Morning / 35+ plains blocks placed,336:47:10:gh:Day / 35+ plains blocks placed,336:47:10:gh:Night / 35+ plains blocks placed,354:44:10:gh:Morning / 49+ peak blocks placed,354:44:10:gh:Day / 49+ peak blocks placed,354:45:10:gh:Night / 49+ peak blocks placed,453:44:10:gh:42+ forest blocks placed,455:41:10:gh:35+ forest blocks placed
Johto Safari Zone Marshland|gh|old-rod|60:16:10:gh:2+ water blocks placed,60:18:10:gh:3+ water blocks placed,60:12-15:40:gh:,129:5-14:60:gh:
Johto Safari Zone Marshland|gh|surf|60:15-17:40:gh:,88:15-17:30:gh:,89:48:10:gh:16+ water blocks placed,189:47:10:gh:10+ water blocks placed,194:15-17:30:gh:,195:43:10:gh:13+ water blocks placed
Johto Safari Zone Marshland|gh|good-rod|61:24-25:60:gh:,129:22-24:40:gh:,130:26:10:gh:3+ water blocks placed,130:29:10:gh:4+ water blocks placed
Johto Safari Zone Marshland|gh|super-rod|61:7-37:80:gh:,130:36-37:20:gh:,339:42:10:gh:4+ water blocks placed,339:45:10:gh:5+ water blocks placed
Johto Safari Zone Mountain|gh|walk|17:15-16:20:gh:Morning,17:15-16:20:gh:Day,17:15-16:20:gh:Night,20:15-17:30:gh:Morning,20:15-17:30:gh:Day,41:15-17:30:gh:Night,42:15-17:30:gh:Night,82:42:10:gh:3+ plains blocks placed,82:17:10:gh:Morning,82:17:10:gh:Day,98:17:10:gh:Night,98:43:10:gh:3+ water blocks placed,108:15-17:30:gh:Morning,108:15-17:30:gh:Day,246:42:10:gh:5+ peak blocks placed,246:17:10:gh:Morning,246:17:10:gh:Day,307:44:10:gh:Morning / 20+ forest blocks placed,307:43:10:gh:Day / 20+ forest blocks placed,307:43:10:gh:Night / 20+ forest blocks placed,313:46:10:gh:10+ plains blocks placed,337:46:10:gh:15+ peak blocks placed,356:45:10:gh:Morning / 35+ forest blocks placed,356:45:10:gh:Day / 35+ forest blocks placed,356:46:10:gh:Night / 35+ forest blocks placed,364:17:10:gh:Night,364:45:10:gh:49+ water blocks placed / 21+ peak blocks placed,375:44:10:gh:56+ peak blocks placed,433:38:10:gh:10+ forest blocks placed
Johto Safari Zone Rocky Beach|gh|walk|41:15-17:30:gh:Night,79:15-17:30:gh:Morning,79:15-17:30:gh:Day,79:15-17:30:gh:Night,80:42:10:gh:3+ peak blocks placed,80:17:10:gh:Morning,80:17:10:gh:Day,80:17:10:gh:Night,80:37:10:gh:5+ water blocks placed,84:15-17:30:gh:Morning,84:15-17:30:gh:Day,85:42:10:gh:4+ plains blocks placed,98:15-17:30:gh:Morning,98:15-17:30:gh:Day,98:15-17:30:gh:Night,99:40:10:gh:8+ peak blocks placed,179:43:10:gh:5+ forest blocks placed,304:45:10:gh:Morning / 24+ peak blocks placed,304:45:10:gh:Day / 24+ peak blocks placed,304:44:10:gh:Night / 24+ peak blocks placed,309:42:10:gh:10+ plains blocks placed,310:37:10:gh:10+ forest blocks placed,406:40:10:gh:18+ forest blocks placed,443:44:10:gh:49+ plains blocks placed / 49+ peak blocks placed
Johto Safari Zone Rocky Beach|gh|surf|60:15-16:30:gh:,61:16-17:20:gh:,129:15-16:30:gh:,131:37:10:gh:Morning / 10+ water blocks placed,131:37:10:gh:Day / 10+ water blocks placed,131:36:10:gh:Night / 10+ water blocks placed,131:42:10:gh:Morning / 14+ water blocks placed,131:42:10:gh:Day / 14+ water blocks placed,131:41:10:gh:Night / 14+ water blocks placed,131:47:10:gh:Morning / 18+ water blocks placed,131:47:10:gh:Day / 18+ water blocks placed,131:46:10:gh:Night / 18+ water blocks placed,131:15-16:20:gh:
Johto Safari Zone Rocky Beach|gh|old-rod|98:17:10:gh:2+ water blocks placed,98:18:10:gh:3+ water blocks placed,98:13-15:30:gh:,118:13-15:30:gh:,129:12-14:40:gh:
Johto Safari Zone Rocky Beach|gh|good-rod|98:22-25:40:gh:,99:26:10:gh:5+ water blocks placed,99:27:10:gh:8+ water blocks placed,118:22-23:30:gh:,129:22-23:30:gh:
Johto Safari Zone Rocky Beach|gh|super-rod|99:38-39:20:gh:,118:35-38:40:gh:,119:35-38:40:gh:,341:46:10:gh:15+ water blocks placed,341:48:10:gh:20+ water blocks placed
Johto Safari Zone Wasteland|gh|walk|22:15-17:30:gh:Night,55:45:10:gh:3+ water blocks placed,66:16-17:20:gh:Morning,66:16-17:20:gh:Day,67:40:10:gh:5+ peak blocks placed,67:17:10:gh:Morning,67:17:10:gh:Day,67:17:10:gh:Night,69:41:10:gh:3+ forest blocks placed,81:15-17:30:gh:Morning,81:15-17:30:gh:Day,81:15-17:30:gh:Night,95:15-16:20:gh:Morning,95:15-16:20:gh:Day,95:15-17:30:gh:Night,99:48:10:gh:10+ water blocks placed,115:15-17:20:gh:Morning,115:15-17:20:gh:Day,286:46:10:gh:42+ forest blocks placed,308:44:10:gh:35+ forest blocks placed,310:41:10:gh:3+ plains blocks placed,314:46:10:gh:10+ plains blocks placed,338:45:10:gh:Morning / 42+ peak blocks placed,338:46:10:gh:Day / 42+ peak blocks placed,338:45:10:gh:Night / 42+ peak blocks placed,451:44:10:gh:Morning / 28+ peak blocks placed,451:44:10:gh:Day / 28+ peak blocks placed,451:45:10:gh:Night / 28+ peak blocks placed
Johto Safari Zone Savannah|gh|walk|29:15-17:60:gh:Morning,29:15-17:60:gh:Day,30:15-17:30:gh:Night,33:15-17:30:gh:Night,41:15-17:30:gh:Night,42:17:10:gh:Night,111:41:10:gh:5+ peak blocks placed,111:17:10:gh:Morning,111:17:10:gh:Day,112:44:10:gh:10+ peak blocks placed,128:41:10:gh:5+ plains blocks placed,128:15-17:30:gh:Morning,128:15-17:30:gh:Day,228:42:10:gh:4+ forest blocks placed,263:38:10:gh:10+ plains blocks placed,285:45:10:gh:35+ forest blocks placed / 12+ plains blocks placed,298:42:10:gh:5+ water blocks placed,324:46:10:gh:Morning / 35+ peak blocks placed,324:47:10:gh:Day / 35+ peak blocks placed,324:47:10:gh:Night / 35+ peak blocks placed,332:42:10:gh:35+ forest blocks placed,404:46:10:gh:Morning / 24+ plains blocks placed,404:46:10:gh:Day / 24+ plains blocks placed,404:45:10:gh:Night / 24+ plains blocks placed
Johto Safari Zone Wetland|gh|walk|21:15-17:30:gh:Morning,21:15-17:30:gh:Day,54:15-16:20:gh:Night,55:40:10:gh:5+ peak blocks placed,55:17:20:gh:Night,83:15-17:30:gh:Morning,83:15-17:30:gh:Day,83:41:10:gh:3+ forest blocks placed,84:45:10:gh:4+ peak blocks placed,132:41:10:gh:15+ water blocks placed,132:17:10:gh:Morning,132:17:10:gh:Day,161:15-17:30:gh:Morning,161:15-17:30:gh:Day,162:37:10:gh:2+ plains blocks placed,194:15-17:40:gh:Night,195:16-17:20:gh:Night,271:47:10:gh:14+ plains blocks placed,283:40:10:gh:6+ plains blocks placed,372:46:10:gh:63+ peak blocks placed,417:43:10:gh:8+ forest blocks placed,418:45:10:gh:Morning / 35+ water blocks placed,418:45:10:gh:Day / 35+ water blocks placed,418:44:10:gh:Night / 35+ water blocks placed
Johto Safari Zone Wetland|gh|surf|54:16-17:20:gh:,55:37:10:gh:4+ water blocks placed,55:45:10:gh:6+ water blocks placed,60:15-16:30:gh:,194:15-16:30:gh:,195:37:10:gh:3+ water blocks placed,195:16-17:20:gh:
Johto Safari Zone Wetland|gh|old-rod|60:12-15:40:gh:,61:17:10:gh:2+ water blocks placed,61:18:10:gh:3+ water blocks placed,129:12-15:60:gh:
Johto Safari Zone Wetland|gh|good-rod|60:22-24:70:gh:,61:23-25:30:gh:,341:26:10:gh:10+ water blocks placed,341:28:10:gh:14+ water blocks placed
Johto Safari Zone Wetland|gh|super-rod|60:35-37:50:gh:,61:35-37:50:gh:,130:45:10:gh:Morning / 6+ water blocks placed,130:44:10:gh:Day / 6+ water blocks placed,130:45:10:gh:Night / 6+ water blocks placed,130:48:10:gh:Morning / 9+ water blocks placed,130:47:10:gh:Day / 9+ water blocks placed,130:48:10:gh:Night / 9+ water blocks placed
`,
  sinnoh: `
Rock Peak Ruins|t|static|377:30::t:Regirock — with Regigigas in your party
Iceberg Ruins|t|static|378:30::t:Regice — with Regigigas in your party
Iron Ruins|t|static|379:30::t:Registeel — with Regigigas in your party
Turnback Cave|dp|static|487:70::dp:Giratina — after getting the National Dex
Canalave City|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dp:,73:20-40:9:t:,278:20-30:30:dp:,279:20-40:5:dp:,422:20-30:30:t:,423:20-40:1:t:
Canalave City|dpt|super-rod|120:20-40:15:dp:,120:20-50:15:t:,130:30-40:40:dp:,130:30-55:40:t:,457:20-50:45:dp:,457:30-55:45:t:
Canalave City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Canalave City|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dpt:
Eterna City|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Eterna City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Eterna City|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Eterna City|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Eterna City West Gate|t|gift-egg|175:1::t:Story  defeat jupiter
Eterna City Eterna Condominiums|dpt|trade|441:1-100::dpt:Trade a Buizel
Pastoria City|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dpt:,278:20-30:30:dp:,278:20-30:4:t:,279:20-40:5:dp:,422:20-30:30:t:,423:20-40:1:t:
Pastoria City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Pastoria City|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Pastoria City|dpt|super-rod|130:30-55:55:dpt:,224:20-50:45:dp:,224:30-55:45:t:
Sunyshore City|dpt|surf|72:30-40:60:t:,73:35-45:60:dp:,73:30-50:9:t:,278:30-40:30:t:,279:35-45:30:dp:,279:30-50:1:t:,458:30-45:10:dp:
Sunyshore City|dpt|super-rod|120:20-40:15:dp:,120:20-50:15:t:,130:30-40:40:dp:,130:30-55:40:t:,224:20-50:45:dp:,224:30-55:45:t:
Sunyshore City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Sunyshore City|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Pokémon League|dpt|surf|73:35-45:35:dp:,73:30-50:5:t:,278:30-40:60:t:,279:35-45:65:dp:,279:30-50:35:t:
Pokémon League|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Pokémon League|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Pokémon League|dpt|super-rod|130:30-40:40:dp:,130:30-55:40:t:,224:20-50:45:dp:,224:30-55:45:t:,370:20-30:15:dpt:
Oreburgh Mine 1F|dpt|walk|41:7:20:dp:,41:5-7:25:t:,74:5-9:70:dp:,74:4-8:65:t:,74:7:4:t:Ruby in DS slot 2,74:7:4:t:Sapphire in DS slot 2,74:7:4:t:Emerald in DS slot 2,74:7:4:t:FireRed in DS slot 2,74:7:4:t:LeafGreen in DS slot 2,74:7:1:t:Poké Radar,95:8:10:dp:,95:6-8:10:t:
Oreburgh Mine B1F|dpt|walk|41:8:20:dp:,41:6-8:25:t:,74:6-10:70:dp:,74:5-9:65:t:,74:8:4:t:Ruby in DS slot 2,74:8:4:t:Sapphire in DS slot 2,74:8:4:t:Emerald in DS slot 2,74:8:4:t:FireRed in DS slot 2,74:8:4:t:LeafGreen in DS slot 2,74:8:1:t:Poké Radar,95:9:10:dp:,95:7-9:10:t:
Valley Windworks|dpt|surf|72:20-30:60:dp:,72:20-30:30:t:,73:20-40:5:dp:,73:20-40:1:t:,278:20-30:30:dp:,279:20-40:5:dp:,422:20-30:60:t:,423:20-40:9:t:
Valley Windworks|dpt|super-rod|90:20-40:15:dp:,90:20-50:15:t:,130:30-40:40:dp:,130:30-55:40:t:,457:30-50:45:dp:,457:30-55:45:t:
Valley Windworks|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Valley Windworks|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dpt:
Valley Windworks|dpt|walk|179:7-9:22:dp:Poké Radar,179:10-12:22:t:Poké Radar,239:9:8:dp:FireRed in DS slot 2,309:7:40:dp:Swarm,309:9-10:40:t:Swarm,399:8:10:dp:,403:10:20:t:,417:7-8:25:dp:,417:9-11:10:t:,418:7-9:35:dp:,418:9-11:25:t:,418:9:4:dp:Ruby in DS slot 2,418:9:4:dp:Sapphire in DS slot 2,418:9:4:dp:Emerald in DS slot 2,418:9:4:dp:LeafGreen in DS slot 2,422:7-9:30:dp:,422:9-12:45:t:,422:9:4:dp:Ruby in DS slot 2,422:9:4:dp:Sapphire in DS slot 2,422:9:4:dp:Emerald in DS slot 2,422:9:4:dp:LeafGreen in DS slot 2
Valley Windworks|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Valley Windworks|dpt|static|425:22::dp:Fridays / Story  defeat mars,425:15::t:Story  defeat mars
Eterna Forest|dpt|walk|10:13:4:t:FireRed in DS slot 2,11:12:8:dp:FireRed in DS slot 2,11:13:4:t:FireRed in DS slot 2,13:13:4:t:LeafGreen in DS slot 2,14:12:8:dp:LeafGreen in DS slot 2,14:13:4:t:LeafGreen in DS slot 2,92:13:4:t:,92:13:4:t:Sapphire in DS slot 2,163:12:10:t:Night,198:10-11:20:d:Night,200:10-11:20:p:Night,204:12:8:dp:Emerald in DS slot 2,204:13:8:t:Emerald in DS slot 2,265:10:20:dp:,265:11:10:dp:Morning,265:10:10:t:Morning,265:11:10:dp:Day,265:10:10:t:Day,266:10:20:d:,266:12:5:t:,267:12:2:d:,267:14:1:t:,268:10:20:p:,268:12:5:t:,269:12:2:p:,269:14:1:t:,273:12:8:dp:Ruby in DS slot 2,273:13:8:t:Ruby in DS slot 2,287:10:40:dp:Swarm,287:10-11:40:t:Swarm,290:10-12:22:dp:Poké Radar,290:11-14:22:t:Poké Radar,399:12:10:t:,401:10:10:t:Night,401:12:10:t:Morning,406:10:10:dp:Morning,406:10:10:dp:Day,406:12:10:t:Day,406:11-12:19:dp:,406:10-11:30:t:,406:12:4:dp:Sapphire in DS slot 2,427:10-12:19:dp:,427:11-13:24:t:,427:12:4:dp:Sapphire in DS slot 2,427:13:4:t:Sapphire in DS slot 2
Eterna Forest|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Fuego Ironworks|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dp:,73:20-40:9:t:,278:20-30:30:dp:,279:20-40:5:dp:,422:20-30:30:t:,423:20-40:1:t:
Fuego Ironworks|dpt|walk|81:28-29:40:dp:Swarm,81:28-30:30:t:,126:28:20:t:,126:29:10:t:Morning,126:29:10:t:Day,187:29:20:p:Poké Radar,188:30:2:p:Poké Radar,278:29:10:dp:,304:29-30:22:d:Poké Radar,304:30-31:22:t:Poké Radar,403:28:10:dp:,404:29:10:dp:,417:29:10:dp:,419:29-30:25:dp:,419:29-31:25:t:,422:28:20:dp:,423:29-30:15:dp:,423:30-31:15:t:,423:29:10:t:Night
Fuego Ironworks|dpt|super-rod|90:20-40:15:dp:,90:20-50:15:t:,130:30-40:40:dp:,130:30-55:40:t:,457:20-50:45:dp:,457:30-55:45:t:
Fuego Ironworks|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Fuego Ironworks|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dpt:
Fuego Ironworks|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Mt. Coronet 1F Route 207|dpt|walk|35:17:10:t:Morning,35:17:10:t:Night,41:14:10:dp:Day,41:14:10:dp:Night,41:18:10:t:Night,41:15:10:dp:,41:19:5:t:,66:15-16:25:dp:,66:20:10:t:,74:15:20:dp:,74:19:20:t:,74:14:10:dp:Day,74:17:10:t:Day,74:14:10:dp:Night,173:14:20:dp:Morning,173:14:5:dp:,299:18:5:t:,307:15:10:dp:,307:20:10:t:,307:18:10:t:Morning,307:18:10:t:Day,433:15:10:dp:,433:17-19:10:t:,436:18:20:t:
Mt. Coronet 1F Route 207|dpt|surf|41:20-40:90:dp:,41:20-30:90:t:,42:20-40:10:dpt:
Mt. Coronet 1F Route 207|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Mt. Coronet 1F Route 207|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Mt. Coronet 1F Route 207|dpt|super-rod|130:30-55:55:dp:,130:20-55:55:t:,340:20-50:45:dp:,340:30-55:45:t:
Mt. Coronet 2F|dpt|walk|35:36-38:15:dp:,35:37:4:dp:Emerald in DS slot 2,35:37:4:dp:FireRed in DS slot 2,35:37:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:37:10:dp:,42:38:5:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:37:10:dp:,67:39:10:t:,75:36:20:dp:,75:38:20:t:,75:36:10:t:Day,299:37:5:t:,308:37:10:dp:,308:39:10:t:,308:37:10:t:Morning,308:37:10:t:Day,337:36-37:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:36-37:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,433:37-38:10:dp:,433:36-38:10:t:,433:38:4:t:Emerald in DS slot 2,433:38:4:t:FireRed in DS slot 2,433:38:4:t:LeafGreen in DS slot 2,436:36:5:dp:,436:36:4:dp:Emerald in DS slot 2,436:36:4:dp:FireRed in DS slot 2,436:36:4:dp:LeafGreen in DS slot 2,437:38:20:dp:,437:37:20:t:
Mt. Coronet 3F|dpt|walk|35:36-38:15:dp:,35:37:4:dp:Emerald in DS slot 2,35:37:4:dp:FireRed in DS slot 2,35:37:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:37:10:dp:,42:38:4:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:37:10:dp:,67:39:10:t:,75:36:20:dp:,75:38:20:t:,75:36:10:t:Day,299:37:5:t:,308:37:10:dp:,308:38-39:11:t:,308:37:10:t:Morning,308:37:10:t:Day,337:36-37:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:36-37:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,433:37-38:10:dp:,433:36-38:10:t:,433:38:4:t:Emerald in DS slot 2,433:38:4:t:FireRed in DS slot 2,433:38:4:t:LeafGreen in DS slot 2,436:36:5:dp:,436:36:4:dp:Emerald in DS slot 2,436:36:4:dp:FireRed in DS slot 2,436:36:4:dp:LeafGreen in DS slot 2,437:38:20:dp:,437:37:20:t:
Mt. Coronet Exterior Snowfall|dpt|walk|35:38-39:5:dp:,35:38:4:dp:Emerald in DS slot 2,35:38:4:dp:FireRed in DS slot 2,35:38:4:dp:LeafGreen in DS slot 2,42:39:10:dp:Night,42:38:10:t:Night,67:39:10:dp:Morning,67:39:10:dp:Day,67:40:10:dpt:,164:39:10:dpt:Night,294:39-40:22:dpt:Poké Radar,299:38:5:t:,308:39:10:dp:Morning,308:38:10:t:Morning,308:39:10:dp:Day,308:38:10:t:Day,308:40:10:dpt:,337:38-39:8:dpt:Sapphire in DS slot 2,338:38-39:8:dpt:Ruby in DS slot 2,359:38-40:5:t:,359:38:4:t:Emerald in DS slot 2,359:38:4:t:FireRed in DS slot 2,359:38:4:t:LeafGreen in DS slot 2,433:39-40:10:dp:,433:37-39:10:t:,433:39:4:t:Emerald in DS slot 2,433:39:4:t:FireRed in DS slot 2,433:39:4:t:LeafGreen in DS slot 2,437:39-40:5:dp:,437:39:4:dp:Emerald in DS slot 2,437:39:4:dp:FireRed in DS slot 2,437:39:4:dp:LeafGreen in DS slot 2,459:38:20:dp:,459:36:20:t:,460:40:20:dp:,460:38:20:t:,460:39:10:t:Morning,460:39:10:t:Day
Mt. Coronet Exterior Blizzard|dpt|walk|35:38-39:5:dp:,35:38:4:dp:Emerald in DS slot 2,35:38:4:dp:FireRed in DS slot 2,35:38:4:dp:LeafGreen in DS slot 2,42:39:10:dp:Night,42:38:10:t:Night,67:39:10:dp:Morning,67:39:10:dp:Day,67:40:10:dpt:,164:39:10:dpt:Night,294:39-40:22:dpt:Poké Radar,299:38:5:t:,308:39:10:dp:Morning,308:38:10:t:Morning,308:39:10:dp:Day,308:38:10:t:Day,308:40:10:dpt:,337:38-39:8:dpt:Sapphire in DS slot 2,338:38-39:8:dpt:Ruby in DS slot 2,359:38-40:5:t:,359:38:4:t:Emerald in DS slot 2,359:38:4:t:FireRed in DS slot 2,359:38:4:t:LeafGreen in DS slot 2,433:39-40:10:dp:,433:37-39:10:t:,433:39:4:t:Emerald in DS slot 2,433:39:4:t:FireRed in DS slot 2,433:39:4:t:LeafGreen in DS slot 2,437:39-40:5:dp:,437:39:4:dp:Emerald in DS slot 2,437:39:4:dp:FireRed in DS slot 2,437:39:4:dp:LeafGreen in DS slot 2,459:38:20:dp:,459:36:20:t:,460:40:20:dp:,460:38:20:t:,460:39:10:t:Morning,460:39:10:t:Day
Mt. Coronet 4F|dpt|walk|35:38-40:15:dp:,35:39:4:dp:Emerald in DS slot 2,35:39:4:dp:FireRed in DS slot 2,35:39:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:39:10:dp:,42:38:5:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:39:10:dpt:,75:38:20:dpt:,75:36:10:t:Day,299:37:5:t:,308:39:10:dpt:,308:37:10:t:Morning,308:37:10:t:Day,337:38-39:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:38-39:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,433:39-40:10:dp:,433:36-38:10:t:,433:38:4:t:Emerald in DS slot 2,433:38:4:t:FireRed in DS slot 2,433:38:4:t:LeafGreen in DS slot 2,437:38-40:25:dp:,437:37:20:t:,437:38:4:dp:Emerald in DS slot 2,437:38:4:dp:FireRed in DS slot 2,437:38:4:dp:LeafGreen in DS slot 2
Mt. Coronet 4F|dpt|surf|41:20-40:90:dp:,41:20-30:90:t:,42:20-40:10:dpt:
Mt. Coronet 4F|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Mt. Coronet 4F|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Mt. Coronet 4F|dpt|super-rod|130:30-55:55:dp:,130:30-55:40:t:,147:15-20:40:dp:,147:15-25:40:t:,148:15-40:5:dp:,148:20-55:5:t:,340:20-50:15:t:
Mt. Coronet 4F Small Room|dpt|walk|35:38-40:15:dp:,35:39:4:dp:Emerald in DS slot 2,35:39:4:dp:FireRed in DS slot 2,35:39:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:39:10:dp:,42:38:5:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:39:10:dpt:,75:38:20:dpt:,75:36:10:t:Day,299:37:5:t:,308:39:10:dpt:,308:37:10:t:Morning,308:37:10:t:Day,337:38-39:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:38-39:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,358:40:5:dp:,358:39:1:t:,433:40:5:dp:,433:36-38:9:t:,433:38:4:t:Emerald in DS slot 2,433:38:4:t:FireRed in DS slot 2,433:38:4:t:LeafGreen in DS slot 2,437:38-40:25:dp:,437:37:20:t:,437:38:4:dp:Emerald in DS slot 2,437:38:4:dp:FireRed in DS slot 2,437:38:4:dp:LeafGreen in DS slot 2
Mt. Coronet 5F|dpt|walk|35:40-42:15:dp:,35:41:4:dp:Emerald in DS slot 2,35:41:4:dp:FireRed in DS slot 2,35:41:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:41:10:dp:,42:38:5:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:41:10:dp:,67:39:10:t:,75:40:20:dp:,75:38:20:t:,75:36:10:t:Day,299:37:5:t:,308:41:10:dp:,308:39:10:t:,308:37:10:t:Morning,308:37:10:t:Day,337:40-41:8:dp:Sapphire in DS slot 2,337:38-39:8:t:Sapphire in DS slot 2,338:40-41:8:dp:Ruby in DS slot 2,338:38-39:8:t:Ruby in DS slot 2,358:41-42:10:dp:,358:39-40:5:t:,358:39:4:t:Emerald in DS slot 2,358:39:4:t:FireRed in DS slot 2,358:39:4:t:LeafGreen in DS slot 2,433:36:5:t:,437:40-42:25:dp:,437:37:20:t:,437:40:4:dp:Emerald in DS slot 2,437:40:4:dp:FireRed in DS slot 2,437:40:4:dp:LeafGreen in DS slot 2
Mt. Coronet 6F|dpt|walk|35:40-42:15:dp:,35:41:4:dp:Emerald in DS slot 2,35:41:4:dp:FireRed in DS slot 2,35:41:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:41:10:dp:,42:38:5:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:41:10:dp:,67:39:10:t:,75:40:20:dp:,75:38:20:t:,75:36:10:t:Day,299:37:5:t:,308:41:10:dp:,308:39:10:t:,308:37:10:t:Morning,308:37:10:t:Day,337:40-41:8:dp:Sapphire in DS slot 2,337:38-40:8:t:Sapphire in DS slot 2,338:40-41:8:dp:Ruby in DS slot 2,338:38-40:8:t:Ruby in DS slot 2,358:41-42:10:dp:,358:39-41:10:t:,358:40:4:t:Emerald in DS slot 2,358:40:4:t:FireRed in DS slot 2,358:40:4:t:LeafGreen in DS slot 2,437:40-42:25:dp:,437:37:20:t:,437:40:4:dp:Emerald in DS slot 2,437:40:4:dp:FireRed in DS slot 2,437:40:4:dp:LeafGreen in DS slot 2
Mt. Coronet 1F From Exterior|dpt|walk|35:38-40:15:dp:,35:39:4:dp:Emerald in DS slot 2,35:39:4:dp:FireRed in DS slot 2,35:39:4:dp:LeafGreen in DS slot 2,35:36:10:t:Morning,35:36:10:t:Night,42:39:10:dp:,42:38:5:t:,42:37:10:t:Night,42:38:4:t:Emerald in DS slot 2,42:38:4:t:FireRed in DS slot 2,42:38:4:t:LeafGreen in DS slot 2,67:40:10:dp:,67:39:10:t:,75:39-40:40:dp:,75:37-38:40:t:,75:36:10:t:Day,299:37:5:t:,308:40:10:dp:,308:39:10:t:,308:37:10:t:Morning,308:37:10:t:Day,337:39-40:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:39-40:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,433:38-40:10:dp:,433:36-38:10:t:,433:38:4:t:Emerald in DS slot 2,433:38:4:t:FireRed in DS slot 2,433:38:4:t:LeafGreen in DS slot 2,437:39-40:5:dp:,437:40:4:dp:Emerald in DS slot 2,437:40:4:dp:FireRed in DS slot 2,437:40:4:dp:LeafGreen in DS slot 2
Mt. Coronet 1F Route 216|dpt|walk|35:30-32:15:dp:,35:32:10:t:Morning,35:32:10:t:Night,42:31-32:20:dp:,42:34:5:t:,42:33:10:t:Night,67:31:10:dp:,67:35:10:t:,75:31:20:dp:,75:34:20:t:,75:32:10:t:Day,299:33:5:t:,307:31-32:25:dp:,307:35:10:t:,307:33:10:t:Morning,307:33:10:t:Day,433:30:10:dp:,433:32-34:10:t:,436:33:20:t:
Mt. Coronet 1F Route 211|dpt|walk|41:12:10:dp:Day,41:12:10:dp:Night,41:14:10:t:Night,41:13:10:dp:,41:15:5:t:,66:13:10:dp:,66:16:10:t:,74:13:20:dp:,74:15:20:t:,74:12:10:dp:Day,74:13:10:t:Day,74:12:10:dp:Night,173:12:20:dp:Morning,173:13:10:t:Morning,173:14:4:dp:Sapphire in DS slot 2,173:12:5:dp:,173:13:10:t:Night,299:14:5:t:,307:13-14:25:dp:,307:16:10:t:,307:14:4:dp:Ruby in DS slot 2,307:14:4:dp:Emerald in DS slot 2,307:14:4:dp:FireRed in DS slot 2,307:14:4:dp:LeafGreen in DS slot 2,307:14:10:t:Morning,307:14:10:t:Day,433:13:10:dp:,433:13-15:10:t:,436:14:20:t:
Mt. Coronet B1F|dpt|walk|35:30-32:15:dp:,35:32:10:t:Morning,35:32:10:t:Night,42:31-32:20:dp:,42:34:5:t:,42:33:10:t:Night,67:31:10:dp:,67:35:10:t:,75:31:20:dp:,75:34:20:t:,75:32:10:t:Day,299:33:5:t:,307:31-32:25:dp:,307:35:10:t:,307:33:10:t:Morning,307:33:10:t:Day,433:30:10:dp:,433:32-34:10:t:,436:33:20:t:
Mt. Coronet B1F|dpt|surf|41:20-40:90:dp:,41:20-30:90:t:,42:20-40:10:dpt:
Mt. Coronet B1F|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Mt. Coronet B1F|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Mt. Coronet B1F|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Mt. Coronet B1F|dpt|feebas|349:10-20:50:dpt:
Great Marsh Area 1|dpt|walk|24:24-26:8:dp:FireRed in DS slot 2,24:30:8:t:FireRed in DS slot 2,46:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,46:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,54:24-26:8:dp:,54:24-26:8:dp:Ruby in DS slot 2,54:24-26:8:dp:Sapphire in DS slot 2,54:24-26:8:dp:Emerald in DS slot 2,54:24-26:8:dp:LeafGreen in DS slot 2,55:26:10:dp:Daily Great Marsh slot 3,102:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,102:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,114:28-30:10:t:Daily Great Marsh slot 1,114:30-31:5:t:,114:30:4:t:Ruby in DS slot 2,114:30:4:t:Sapphire in DS slot 2,114:30:4:t:Emerald in DS slot 2,114:30:4:t:LeafGreen in DS slot 2,115:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,115:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,163:24:10:dp:Night,164:26:10:dp:Night,164:28-30:20:t:Night,183:25-26:15:dp:,183:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,193:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,193:28-30:10:t:Daily Great Marsh slot 1,193:30-31:5:t:,193:30:4:t:Ruby in DS slot 2,193:30:4:t:Sapphire in DS slot 2,193:30:4:t:Emerald in DS slot 2,193:30:4:t:LeafGreen in DS slot 2,194:24:20:dp:,194:28-30:40:t:,194:26:10:dp:Daily Great Marsh slot 2 / Story  before national dex,194:28-30:10:t:Daily Great Marsh slot 15 / Story  before national dex,195:25-26:15:dp:,195:30:10:t:,195:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,195:28-30:10:t:Daily Great Marsh slot 2,285:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,285:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,298:26:10:dp:Daily Great Marsh slot 2 / Story  before national dex,298:24:1:dp:,315:26:10:dp:Daily Great Marsh slot 3,316:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,316:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,352:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,357:28-30:20:t:Morning,357:28-30:20:t:Day,357:28-30:10:t:Daily Great Marsh slot 1,396:26:10:dp:Morning,396:26:10:dp:Day,397:26:10:dp:Daily Great Marsh slot 3,399:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,399:26:1:dp:,400:25:20:dp:,400:28:20:t:,400:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,406:24:10:dp:Morning,406:24:10:dp:Day,451:26:10:dp:Daily Great Marsh slot 5,451:28-30:10:t:Daily Great Marsh slot 5,452:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,452:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,453:26:10:dp:Daily Great Marsh slot 5,453:28-30:10:t:Daily Great Marsh slot 4,454:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,454:28-30:10:t:Daily Great Marsh slot 1 / Story  national dex,455:26:10:dp:Daily Great Marsh slot 5,455:28-30:10:t:Daily Great Marsh slot 3
Great Marsh Area 1|dpt|surf|54:20-40:5:dp:,183:20-30:30:dp:,194:20-30:60:dp:,194:20-30:90:t:,195:20-40:5:dp:,195:20-40:10:t:
Great Marsh Area 1|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Great Marsh Area 1|dpt|good-rod|129:10-25:55:dpt:,130:15-30:5:dp:,339:15-20:40:dp:,339:10-25:45:t:
Great Marsh Area 1|dpt|super-rod|130:40-55:15:dp:,130:30-55:40:t:,318:15-30:45:dp:,318:30-55:45:t:,340:30-55:40:dp:,340:20-50:15:t:
Great Marsh Area 2|dpt|walk|24:24-26:8:dp:FireRed in DS slot 2,24:30:8:t:FireRed in DS slot 2,46:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,46:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,54:24-26:8:dp:,54:24-26:8:dp:Ruby in DS slot 2,54:24-26:8:dp:Sapphire in DS slot 2,54:24-26:8:dp:Emerald in DS slot 2,54:24-26:8:dp:LeafGreen in DS slot 2,55:26:10:dp:Daily Great Marsh slot 3,102:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,102:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,114:28-30:10:t:Daily Great Marsh slot 1,114:30-31:5:t:,114:30:4:t:Ruby in DS slot 2,114:30:4:t:Sapphire in DS slot 2,114:30:4:t:Emerald in DS slot 2,114:30:4:t:LeafGreen in DS slot 2,115:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,115:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,163:24:10:dp:Night,164:26:10:dp:Night,164:28-30:20:t:Night,183:25-26:15:dp:,183:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,193:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,193:28-30:10:t:Daily Great Marsh slot 1,193:30-31:5:t:,193:30:4:t:Ruby in DS slot 2,193:30:4:t:Sapphire in DS slot 2,193:30:4:t:Emerald in DS slot 2,193:30:4:t:LeafGreen in DS slot 2,194:24:20:dp:,194:28-30:40:t:,194:26:10:dp:Daily Great Marsh slot 2 / Story  before national dex,194:28-30:10:t:Daily Great Marsh slot 15 / Story  before national dex,195:25-26:15:dp:,195:30:10:t:,195:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,195:28-30:10:t:Daily Great Marsh slot 2,285:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,285:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,298:26:10:dp:Daily Great Marsh slot 2 / Story  before national dex,298:24:1:dp:,315:26:10:dp:Daily Great Marsh slot 3,316:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,316:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,352:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,357:28-30:20:t:Morning,357:28-30:20:t:Day,357:28-30:10:t:Daily Great Marsh slot 1,396:26:10:dp:Morning,396:26:10:dp:Day,397:26:10:dp:Daily Great Marsh slot 3,399:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,399:26:1:dp:,400:25:20:dp:,400:28:20:t:,400:26:10:dp:Daily Great Marsh slot 1 / Story  before national dex,406:24:10:dp:Morning,406:24:10:dp:Day,451:26:10:dp:Daily Great Marsh slot 5,451:28-30:10:t:Daily Great Marsh slot 5,452:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,452:28-30:10:t:Daily Great Marsh slot 2 / Story  national dex,453:26:10:dp:Daily Great Marsh slot 5,453:28-30:10:t:Daily Great Marsh slot 4,454:26:10:dp:Daily Great Marsh slot 1 / Story  national dex,454:28-30:10:t:Daily Great Marsh slot 1 / Story  national dex,455:26:10:dp:Daily Great Marsh slot 5,455:28-30:10:t:Daily Great Marsh slot 3
Great Marsh Area 2|dpt|surf|54:20-40:5:dp:,183:20-30:30:dp:,194:20-30:60:dp:,194:20-30:90:t:,195:20-40:5:dp:,195:20-40:10:t:
Great Marsh Area 2|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Great Marsh Area 2|dpt|good-rod|129:10-25:55:dpt:,130:15-30:5:dp:,339:15-20:40:dp:,339:10-25:45:t:
Great Marsh Area 2|dpt|super-rod|130:40-55:15:dp:,130:30-55:40:t:,318:15-30:45:dp:,318:30-55:45:t:,340:30-55:40:dp:,340:20-50:15:t:
Great Marsh Area 3|dpt|walk|24:22-24:8:dp:FireRed in DS slot 2,24:29:8:t:FireRed in DS slot 2,46:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,46:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,54:22-24:8:dp:,54:22-24:8:dp:Ruby in DS slot 2,54:22-24:8:dp:Sapphire in DS slot 2,54:22-24:8:dp:Emerald in DS slot 2,54:22-24:8:dp:LeafGreen in DS slot 2,55:24:10:dp:Daily Great Marsh slot 3,102:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,102:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,114:27:10:t:Morning,114:27:10:t:Day,114:28-30:15:t:,114:28-29:10:t:Daily Great Marsh slot 1,114:29:4:t:Ruby in DS slot 2,114:29:4:t:Sapphire in DS slot 2,114:29:4:t:Emerald in DS slot 2,114:29:4:t:LeafGreen in DS slot 2,115:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,115:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,163:22-24:20:dp:Night,163:27:10:t:Night,164:28:10:t:Night,183:23-24:15:dp:,183:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,193:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,193:28-29:10:t:Daily Great Marsh slot 1,193:29-30:5:t:,193:29:4:t:Ruby in DS slot 2,193:29:4:t:Sapphire in DS slot 2,193:29:4:t:Emerald in DS slot 2,193:29:4:t:LeafGreen in DS slot 2,194:22:20:dp:,194:27-29:30:t:,194:24:10:dp:Daily Great Marsh slot 2 / Story  before national dex,194:28-29:10:t:Daily Great Marsh slot 15 / Story  before national dex,195:23-24:15:dp:,195:29:10:t:,195:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,195:28-29:10:t:Daily Great Marsh slot 2,285:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,285:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,298:24:10:dp:Daily Great Marsh slot 2 / Story  before national dex,298:22:1:dp:,315:24:10:dp:Daily Great Marsh slot 3,316:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,316:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,352:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,357:28-29:10:t:Daily Great Marsh slot 1,396:24:10:dp:Morning,396:24:10:dp:Day,397:24:10:dp:Daily Great Marsh slot 3,399:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,399:24:1:dp:,400:23:20:dp:,400:27:20:t:,400:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,400:28:10:t:Morning,400:28:10:t:Day,406:22:10:dp:Morning,406:22:10:dp:Day,451:24:10:dp:Daily Great Marsh slot 5,451:28-29:10:t:Daily Great Marsh slot 5,452:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,452:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,453:24:10:dp:Daily Great Marsh slot 5,453:28-29:10:t:Daily Great Marsh slot 4,454:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,454:28-29:10:t:Daily Great Marsh slot 1 / Story  national dex,455:24:10:dp:Daily Great Marsh slot 5,455:28-29:10:t:Daily Great Marsh slot 3
Great Marsh Area 3|dpt|surf|54:20-40:5:dp:,183:20-30:30:dp:,194:20-30:60:dp:,194:20-30:90:t:,195:20-40:5:dp:,195:20-40:10:t:
Great Marsh Area 3|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Great Marsh Area 3|dpt|good-rod|129:10-25:55:dpt:,130:15-30:5:dp:,339:15-20:40:dp:,339:10-25:45:t:
Great Marsh Area 3|dpt|super-rod|130:40-55:15:dp:,130:30-55:40:t:,318:15-30:45:dp:,318:30-55:45:t:,340:30-55:40:dp:,340:20-50:15:t:
Great Marsh Area 4|dpt|walk|24:22-24:8:dp:FireRed in DS slot 2,24:29:8:t:FireRed in DS slot 2,46:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,46:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,54:22-24:8:dp:,54:22-24:8:dp:Ruby in DS slot 2,54:22-24:8:dp:Sapphire in DS slot 2,54:22-24:8:dp:Emerald in DS slot 2,54:22-24:8:dp:LeafGreen in DS slot 2,55:24:10:dp:Daily Great Marsh slot 3,102:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,102:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,114:27:10:t:Morning,114:27:10:t:Day,114:28-30:15:t:,114:28-29:10:t:Daily Great Marsh slot 1,114:29:4:t:Ruby in DS slot 2,114:29:4:t:Sapphire in DS slot 2,114:29:4:t:Emerald in DS slot 2,114:29:4:t:LeafGreen in DS slot 2,115:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,115:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,163:22-24:20:dp:Night,163:27:10:t:Night,164:28:10:t:Night,183:23-24:15:dp:,183:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,193:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,193:28-29:10:t:Daily Great Marsh slot 1,193:29-30:5:t:,193:29:4:t:Ruby in DS slot 2,193:29:4:t:Sapphire in DS slot 2,193:29:4:t:Emerald in DS slot 2,193:29:4:t:LeafGreen in DS slot 2,194:22:20:dp:,194:27-29:30:t:,194:24:10:dp:Daily Great Marsh slot 2 / Story  before national dex,194:28-29:10:t:Daily Great Marsh slot 15 / Story  before national dex,195:23-24:15:dp:,195:29:10:t:,195:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,195:28-29:10:t:Daily Great Marsh slot 2,285:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,285:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,298:24:10:dp:Daily Great Marsh slot 2 / Story  before national dex,298:22:1:dp:,315:24:10:dp:Daily Great Marsh slot 3,316:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,316:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,352:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,357:28-29:10:t:Daily Great Marsh slot 1,396:24:10:dp:Morning,396:24:10:dp:Day,397:24:10:dp:Daily Great Marsh slot 3,399:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,399:24:1:dp:,400:23:20:dp:,400:27:20:t:,400:24:10:dp:Daily Great Marsh slot 1 / Story  before national dex,400:28:10:t:Morning,400:28:10:t:Day,406:22:10:dp:Morning,406:22:10:dp:Day,451:24:10:dp:Daily Great Marsh slot 5,451:28-29:10:t:Daily Great Marsh slot 5,452:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,452:28-29:10:t:Daily Great Marsh slot 2 / Story  national dex,453:24:10:dp:Daily Great Marsh slot 5,453:28-29:10:t:Daily Great Marsh slot 4,454:24:10:dp:Daily Great Marsh slot 1 / Story  national dex,454:28-29:10:t:Daily Great Marsh slot 1 / Story  national dex,455:24:10:dp:Daily Great Marsh slot 5,455:28-29:10:t:Daily Great Marsh slot 3
Great Marsh Area 4|dpt|surf|54:20-40:5:dp:,183:20-30:30:dp:,194:20-30:60:dp:,194:20-30:90:t:,195:20-40:5:dp:,195:20-40:10:t:
Great Marsh Area 4|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Great Marsh Area 4|dpt|good-rod|129:10-25:55:dpt:,130:15-30:5:dp:,339:15-20:40:dp:,339:10-25:45:t:
Great Marsh Area 4|dpt|super-rod|130:40-55:15:dp:,130:30-55:40:t:,318:15-30:45:dp:,318:30-55:45:t:,340:30-55:40:dp:,340:20-50:15:t:
Great Marsh Area 5|dpt|walk|24:20-22:8:dp:FireRed in DS slot 2,24:28:8:t:FireRed in DS slot 2,46:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,46:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,55:22:10:dp:Daily Great Marsh slot 3,102:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,102:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,114:27-28:10:t:Daily Great Marsh slot 1,114:28-29:5:t:,114:28:4:t:Ruby in DS slot 2,114:28:4:t:Sapphire in DS slot 2,114:28:4:t:Emerald in DS slot 2,114:28:4:t:LeafGreen in DS slot 2,115:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,115:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,163:20-22:20:dp:Night,163:26-27:20:t:Night,183:21-22:15:dp:,183:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,193:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,193:26:10:t:Morning,193:26:10:t:Day,193:27-29:15:t:,193:27-28:10:t:Daily Great Marsh slot 1,193:28:4:t:Ruby in DS slot 2,193:28:4:t:Sapphire in DS slot 2,193:28:4:t:Emerald in DS slot 2,193:28:4:t:LeafGreen in DS slot 2,194:20:20:dp:,194:26-28:30:t:,194:22:10:dp:Daily Great Marsh slot 2 / Story  before national dex,194:27-28:10:t:Daily Great Marsh slot 15 / Story  before national dex,195:21-22:15:dp:,195:28:10:t:,195:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,195:27-28:10:t:Daily Great Marsh slot 2,285:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,285:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,298:22:10:dp:Daily Great Marsh slot 2 / Story  before national dex,298:20:5:dp:,298:20:4:dp:Ruby in DS slot 2,298:20:4:dp:Sapphire in DS slot 2,298:20:4:dp:Emerald in DS slot 2,298:20:4:dp:LeafGreen in DS slot 2,315:22:10:dp:Daily Great Marsh slot 3,316:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,316:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,352:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,357:27-28:10:t:Daily Great Marsh slot 1,396:22:10:dp:Morning,396:22:10:dp:Day,397:22:10:dp:Daily Great Marsh slot 3,399:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,399:22:5:dp:,399:22:4:dp:Ruby in DS slot 2,399:22:4:dp:Sapphire in DS slot 2,399:22:4:dp:Emerald in DS slot 2,399:22:4:dp:LeafGreen in DS slot 2,400:21:20:dp:,400:26:20:t:,400:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,400:27:10:t:Morning,400:27:10:t:Day,406:20:10:dp:Morning,406:20:10:dp:Day,451:22:10:dp:Daily Great Marsh slot 5,451:27-28:10:t:Daily Great Marsh slot 5,452:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,452:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,453:22:10:dp:Daily Great Marsh slot 5,453:27-28:10:t:Daily Great Marsh slot 4,454:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,454:27-28:10:t:Daily Great Marsh slot 1 / Story  national dex,455:22:10:dp:Daily Great Marsh slot 5,455:27-28:10:t:Daily Great Marsh slot 3
Great Marsh Area 5|t|old-rod|129:3-15:100:t:
Great Marsh Area 5|t|good-rod|129:10-25:55:t:,339:10-25:45:t:
Great Marsh Area 5|t|super-rod|130:30-55:40:t:,318:30-55:45:t:,340:20-50:15:t:
Great Marsh Area 5|t|surf|194:20-30:90:t:,195:20-40:10:t:
Great Marsh Area 6|dpt|walk|24:20-22:8:dp:FireRed in DS slot 2,24:28:8:t:FireRed in DS slot 2,46:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,46:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,54:20-22:8:dp:,54:20-22:8:dp:Ruby in DS slot 2,54:20-22:8:dp:Sapphire in DS slot 2,54:20-22:8:dp:Emerald in DS slot 2,54:20-22:8:dp:LeafGreen in DS slot 2,55:22:10:dp:Daily Great Marsh slot 3,102:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,102:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,114:27-28:10:t:Daily Great Marsh slot 1,114:28-29:5:t:,114:28:4:t:Ruby in DS slot 2,114:28:4:t:Sapphire in DS slot 2,114:28:4:t:Emerald in DS slot 2,114:28:4:t:LeafGreen in DS slot 2,115:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,115:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,163:20-22:20:dp:Night,163:26-27:20:t:Night,183:21-22:15:dp:,183:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,193:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,193:26:10:t:Morning,193:26:10:t:Day,193:27-29:15:t:,193:27-28:10:t:Daily Great Marsh slot 1,193:28:4:t:Ruby in DS slot 2,193:28:4:t:Sapphire in DS slot 2,193:28:4:t:Emerald in DS slot 2,193:28:4:t:LeafGreen in DS slot 2,194:20:20:dp:,194:26-28:30:t:,194:22:10:dp:Daily Great Marsh slot 2 / Story  before national dex,194:27-28:10:t:Daily Great Marsh slot 15 / Story  before national dex,195:21-22:15:dp:,195:28:10:t:,195:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,195:27-28:10:t:Daily Great Marsh slot 2,285:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,285:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,298:22:10:dp:Daily Great Marsh slot 2 / Story  before national dex,298:20:1:dp:,315:22:10:dp:Daily Great Marsh slot 3,316:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,316:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,352:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,357:27-28:10:t:Daily Great Marsh slot 1,396:22:10:dp:Morning,396:22:10:dp:Day,397:22:10:dp:Daily Great Marsh slot 3,399:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,399:22:1:dp:,400:21:20:dp:,400:26:20:t:,400:22:10:dp:Daily Great Marsh slot 1 / Story  before national dex,400:27:10:t:Morning,400:27:10:t:Day,406:20:10:dp:Morning,406:20:10:dp:Day,451:22:10:dp:Daily Great Marsh slot 5,451:27-28:10:t:Daily Great Marsh slot 5,452:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,452:27-28:10:t:Daily Great Marsh slot 2 / Story  national dex,453:22:10:dp:Daily Great Marsh slot 5,453:27-28:10:t:Daily Great Marsh slot 4,454:22:10:dp:Daily Great Marsh slot 1 / Story  national dex,454:27-28:10:t:Daily Great Marsh slot 1 / Story  national dex,455:22:10:dp:Daily Great Marsh slot 5,455:27-28:10:t:Daily Great Marsh slot 3
Great Marsh Area 6|dpt|surf|54:20-40:5:dp:,183:20-30:30:dp:,194:20-30:60:dp:,194:20-30:90:t:,195:20-40:5:dp:,195:20-40:10:t:
Great Marsh Area 6|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Great Marsh Area 6|dpt|good-rod|129:10-25:55:dpt:,130:15-30:5:dp:,339:15-20:40:dp:,339:10-25:45:t:
Great Marsh Area 6|dpt|super-rod|130:40-55:15:dp:,130:30-55:40:t:,318:15-30:45:dp:,318:30-55:45:t:,340:30-55:40:dp:,340:20-50:15:t:
Solaceon Ruins 2F|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins 1F|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B1F A|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B1F B|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B1F C|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B2F A|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B2F B|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B2F C|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B3F A|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B3F B|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B3F C|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B3F D|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B3F E|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B4F A|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B4F B|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B4F C|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B4F D|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Solaceon Ruins B5F|dpt|walk|201:14-25:100:dp:,201:20-30:100:t:
Victory Road 1F|dpt|walk|42:44-46:20:dp:,42:43:5:t:,42:42:10:t:Night,67:44-46:25:dp:,75:45:20:dp:,75:40:20:t:,75:42:10:t:Morning,75:42:10:t:Day,95:44:10:dp:,95:41-42:20:t:,111:41:20:t:,112:41-43:15:t:,208:46:10:dp:,208:42:5:t:,308:44-46:15:dp:,444:41:5:t:
Victory Road 2F|dpt|walk|42:45-47:20:dp:,42:44:5:t:,42:41:10:t:Night,64:45-47:25:dp:,75:46:20:dp:,75:43:5:t:,75:41:10:t:Morning,75:41:10:t:Day,82:41-43:30:t:,95:45:10:dp:,95:42:5:t:,208:47:10:dp:,208:42-44:40:t:,308:45-47:15:dp:,444:43:5:t:
Victory Road B1F|dpt|walk|42:44-46:20:dp:,42:44:5:t:,42:41:10:t:Night,67:44-46:25:dp:,75:41:10:t:Morning,75:41:10:t:Day,75:43:5:t:,95:42:10:t:,184:41-43:30:t:,208:46:10:dp:,208:44:5:t:,308:44-46:15:dp:,419:44-45:30:dp:,419:42-44:30:t:,444:43:5:t:
Victory Road B1F|dpt|surf|42:35-50:100:dp:,42:30-50:10:t:,419:30-50:90:t:
Victory Road B1F|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Victory Road B1F|dpt|good-rod|129:10-25:100:dpt:
Victory Road B1F|dpt|super-rod|130:20-55:100:dp:,130:30-55:100:t:
Victory Road Inside B1F|dpt|walk|42:50-52:20:dp:,42:50:5:t:,42:47:10:t:Night,67:50-52:25:dp:,75:47:10:t:Morning,75:47:10:t:Day,75:49:5:t:,87:48-50:15:t:,184:47-49:30:t:,208:52:10:dp:,308:50-52:15:dp:,419:50-51:30:dp:,419:48-50:30:t:,444:49:5:t:
Victory Road Inside B1F|dpt|surf|42:40-55:90:dp:,87:35-55:30:t:,131:40-60:10:dp:,131:35-55:10:t:,419:35-55:60:t:
Victory Road Inside B1F|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Victory Road Inside B1F|dpt|good-rod|129:10-25:100:dpt:
Victory Road Inside B1F|dpt|super-rod|130:20-55:100:dp:,130:30-55:100:t:
Victory Road Inside|dpt|walk|42:50-52:20:dp:,42:50:5:t:,42:49:10:t:Night,67:50-52:25:dp:,75:51:20:dp:,75:47:20:t:,75:49:10:t:Morning,75:49:10:t:Day,95:50:10:dp:,95:48-50:20:t:,208:52:10:dp:,208:50:5:t:,308:50-52:15:dp:,419:47-49:35:t:,444:50:5:t:
Victory Road Inside Exit|dpt|walk|42:50-52:20:dp:,42:49:5:t:,42:49:10:t:Night,67:50-52:25:dp:,75:51:20:dp:,75:47:20:t:,75:49:10:t:Morning,75:49:10:t:Day,95:50:10:dp:,95:48-50:20:t:,208:52:10:dp:,208:50:5:t:,308:50-52:15:dp:,419:47-49:35:t:,444:50:5:t:
Ravaged Path|dpt|walk|41:4-6:78:dp:,41:3-6:65:t:,54:5:2:dp:,54:4-6:35:t:,74:5:20:dp:
Ravaged Path|dpt|surf|41:20-30:60:dp:,41:20-30:30:t:,42:20-40:5:dpt:,54:20-30:30:dp:,54:20-30:60:t:,55:20-40:5:dpt:
Ravaged Path|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Ravaged Path|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Ravaged Path|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Oreburgh Gate 1F|dpt|walk|41:6:20:dp:,41:5-8:50:t:,54:5-7:35:t:,74:4-8:80:dp:,74:5-7:15:t:
Oreburgh Gate B1F|dpt|walk|41:8-10:60:dp:,41:6-9:45:t:,42:10:5:t:,54:8-10:30:dp:,54:8-10:35:t:,74:9:10:dp:,74:6-8:15:t:
Oreburgh Gate B1F|dpt|surf|41:20-30:60:dp:,41:20-30:30:t:,42:20-40:5:dpt:,54:20-30:30:dp:,54:20-30:60:t:,55:20-40:5:dpt:
Oreburgh Gate B1F|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Oreburgh Gate B1F|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Oreburgh Gate B1F|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Stark Mountain|dpt|walk|22:54:10:dp:Morning,22:51:10:t:Morning,22:54:10:dp:Day,22:51:10:t:Day,22:55:10:dp:,22:53:10:t:,42:54:10:dp:Night,42:51:10:t:Night,75:54:10:dp:Morning,75:54:10:dp:Day,75:56:5:dp:,75:51-53:15:t:,110:55:10:dp:,110:52:10:t:,111:22-24:5:dp:,111:52:5:t:,111:22:4:dp:Ruby in DS slot 2,111:22:4:dp:Sapphire in DS slot 2,111:22:4:dp:FireRed in DS slot 2,112:55:20:dp:,112:54:20:t:,207:22:8:dp:Emerald in DS slot 2,227:56:5:dp:,227:53:5:t:,240:22:8:dp:LeafGreen in DS slot 2,322:22-24:5:dp:,322:51:5:t:,322:22:4:dp:Ruby in DS slot 2,322:22:4:dp:Sapphire in DS slot 2,322:22:4:dp:FireRed in DS slot 2,323:55:20:dp:,323:53:20:t:,324:24-55:22:dp:Poké Radar,324:51-53:22:t:Poké Radar,354:54:10:dp:Night
Stark Mountain Entrance|dpt|walk|42:54:10:dp:,42:52:20:t:,67:56:10:dp:,74:25-27:5:dp:,74:25:4:dp:Ruby in DS slot 2,74:25:4:dp:Sapphire in DS slot 2,74:25:4:dp:Emerald in DS slot 2,74:25:4:dp:FireRed in DS slot 2,75:55:20:dp:,75:51-53:15:t:,95:54:5:dp:,110:56:10:dp:,110:51-53:15:t:,111:52:5:t:,112:54:20:t:,218:25-27:5:dp:,218:52:5:t:,218:25:4:dp:Ruby in DS slot 2,218:25:4:dp:Sapphire in DS slot 2,218:25:4:dp:Emerald in DS slot 2,218:25:4:dp:FireRed in DS slot 2,219:55-56:30:dp:,219:54:20:t:,240:25:8:dp:LeafGreen in DS slot 2,323:56:5:dp:
Stark Mountain Inside|dpt|walk|42:56:10:dp:,42:53:10:t:,67:58:10:dp:,74:27-29:5:dp:,74:27:4:dp:Ruby in DS slot 2,74:27:4:dp:Sapphire in DS slot 2,74:27:4:dp:Emerald in DS slot 2,74:27:4:dp:FireRed in DS slot 2,75:57:20:dp:,75:52-54:15:t:,95:56:5:dp:,109:53:5:t:,110:58:10:dp:,110:52-54:15:t:,112:55:10:t:,218:27-29:5:dp:,218:53:5:t:,218:27:4:dp:Ruby in DS slot 2,218:27:4:dp:Sapphire in DS slot 2,218:27:4:dp:Emerald in DS slot 2,218:27:4:dp:FireRed in DS slot 2,219:57-58:30:dp:,219:53-55:40:t:,240:27:8:dp:LeafGreen in DS slot 2,323:58:5:dp:
Stark Mountain Heatran Chamber|dpt|static|485:70::dp:,485:50::t:
Turnback Cave Pillar 1|dpt|walk|42:55-56:30:dp:,42:17-18:25:t:,92:15-17:30:t:,92:16:10:t:Morning,92:16:10:t:Day,93:54-56:30:dp:,337:54-56:8:dp:Sapphire in DS slot 2,337:18:8:t:Sapphire in DS slot 2,338:54-56:8:dp:Ruby in DS slot 2,338:18:8:t:Ruby in DS slot 2,355:18:5:t:,356:16:10:t:Night,356:18:4:t:Emerald in DS slot 2,356:18:4:t:FireRed in DS slot 2,356:18:4:t:LeafGreen in DS slot 2,356:18:1:t:Poké Radar,433:16-18:10:t:,433:18:4:t:Emerald in DS slot 2,433:18:4:t:FireRed in DS slot 2,433:18:4:t:LeafGreen in DS slot 2,436:54:5:dp:,436:15:20:t:,436:54:4:dp:Emerald in DS slot 2,436:54:4:dp:FireRed in DS slot 2,436:54:4:dp:LeafGreen in DS slot 2,437:55-56:35:dp:,437:56:4:dp:Emerald in DS slot 2,437:56:4:dp:FireRed in DS slot 2,437:56:4:dp:LeafGreen in DS slot 2
Turnback Cave Pillar 2|dpt|walk|42:55-56:30:dp:,42:37-38:25:t:,93:54-56:30:dp:,93:35-37:30:t:,93:36:10:t:Morning,93:36:10:t:Day,337:54-56:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:54-56:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,356:36:10:t:Night,356:38:5:t:,356:38:4:t:Emerald in DS slot 2,356:38:4:t:FireRed in DS slot 2,356:38:4:t:LeafGreen in DS slot 2,358:36-38:10:t:,358:38:4:t:Emerald in DS slot 2,358:38:4:t:FireRed in DS slot 2,358:38:4:t:LeafGreen in DS slot 2,436:54:5:dp:,436:54:4:dp:Emerald in DS slot 2,436:54:4:dp:FireRed in DS slot 2,436:54:4:dp:LeafGreen in DS slot 2,437:55-56:35:dp:,437:35:20:t:,437:56:4:dp:Emerald in DS slot 2,437:56:4:dp:FireRed in DS slot 2,437:56:4:dp:LeafGreen in DS slot 2
Turnback Cave Pillar 3|dpt|walk|42:55-56:30:dp:,42:37-38:25:t:,93:54-56:30:dp:,93:35-37:30:t:,93:36:10:t:Morning,93:36:10:t:Day,337:54-56:8:dp:Sapphire in DS slot 2,337:37:8:t:Sapphire in DS slot 2,338:54-56:8:dp:Ruby in DS slot 2,338:37:8:t:Ruby in DS slot 2,356:36:10:t:Night,356:37:5:t:,356:37:4:t:Emerald in DS slot 2,356:37:4:t:FireRed in DS slot 2,356:37:4:t:LeafGreen in DS slot 2,358:36-37:10:t:,358:37:4:t:Emerald in DS slot 2,358:37:4:t:FireRed in DS slot 2,358:37:4:t:LeafGreen in DS slot 2,436:54:5:dp:,436:54:4:dp:Emerald in DS slot 2,436:54:4:dp:FireRed in DS slot 2,436:54:4:dp:LeafGreen in DS slot 2,437:55-56:35:dp:,437:35:20:t:,437:56:4:dp:Emerald in DS slot 2,437:56:4:dp:FireRed in DS slot 2,437:56:4:dp:LeafGreen in DS slot 2
Turnback Cave Before Pillar 1|dpt|walk|42:45-46:30:dp:,42:17-18:25:t:,92:15-17:30:t:,92:16:10:t:Morning,92:16:10:t:Day,93:44-46:30:dp:,337:44-46:8:dp:Sapphire in DS slot 2,337:18:8:t:Sapphire in DS slot 2,338:44-46:8:dp:Ruby in DS slot 2,338:18:8:t:Ruby in DS slot 2,355:18:5:t:,356:16:10:t:Night,356:18:4:t:Emerald in DS slot 2,356:18:4:t:FireRed in DS slot 2,356:18:4:t:LeafGreen in DS slot 2,356:18:1:t:Poké Radar,433:16-18:10:t:,433:18:4:t:Emerald in DS slot 2,433:18:4:t:FireRed in DS slot 2,433:18:4:t:LeafGreen in DS slot 2,436:44:5:dp:,436:15:20:t:,436:44:4:dp:Emerald in DS slot 2,436:44:4:dp:FireRed in DS slot 2,436:44:4:dp:LeafGreen in DS slot 2,437:45-46:35:dp:,437:46:4:dp:Emerald in DS slot 2,437:46:4:dp:FireRed in DS slot 2,437:46:4:dp:LeafGreen in DS slot 2
Turnback Cave Between Pillars 1 And 2|dpt|walk|42:55-56:30:dp:,42:25-27:25:t:,93:54-56:30:dp:,93:25-27:30:t:,93:26:10:t:Morning,93:26:10:t:Day,337:54-56:8:dp:Sapphire in DS slot 2,337:28:8:t:Sapphire in DS slot 2,338:54-56:8:dp:Ruby in DS slot 2,338:28:8:t:Ruby in DS slot 2,355:28:4:t:,356:26:10:t:Night,356:28:4:t:Emerald in DS slot 2,356:28:4:t:FireRed in DS slot 2,356:28:4:t:LeafGreen in DS slot 2,356:28:1:t:,358:28:1:t:,433:26-28:9:t:,433:28:4:t:Emerald in DS slot 2,433:28:4:t:FireRed in DS slot 2,433:28:4:t:LeafGreen in DS slot 2,433:28:1:t:Poké Radar,436:54:5:dp:,436:25:20:t:,436:54:4:dp:Emerald in DS slot 2,436:54:4:dp:FireRed in DS slot 2,436:54:4:dp:LeafGreen in DS slot 2,437:55-56:35:dp:,437:56:4:dp:Emerald in DS slot 2,437:56:4:dp:FireRed in DS slot 2,437:56:4:dp:LeafGreen in DS slot 2
Turnback Cave Between Pillars 2 And 3|dpt|walk|42:65-66:30:dp:,42:37-38:25:t:,93:64-66:30:dp:,93:35-37:30:t:,93:36:10:t:Morning,93:36:10:t:Day,337:64-66:8:dp:Sapphire in DS slot 2,337:38:8:t:Sapphire in DS slot 2,338:64-66:8:dp:Ruby in DS slot 2,338:38:8:t:Ruby in DS slot 2,356:36:10:t:Night,356:38:5:t:,356:38:4:t:Emerald in DS slot 2,356:38:4:t:FireRed in DS slot 2,356:38:4:t:LeafGreen in DS slot 2,358:36-38:10:t:,358:38:4:t:Emerald in DS slot 2,358:38:4:t:FireRed in DS slot 2,358:38:4:t:LeafGreen in DS slot 2,436:64:5:dp:,436:64:4:dp:Emerald in DS slot 2,436:64:4:dp:FireRed in DS slot 2,436:64:4:dp:LeafGreen in DS slot 2,437:65-66:35:dp:,437:35:20:t:,437:66:4:dp:Emerald in DS slot 2,437:66:4:dp:FireRed in DS slot 2,437:66:4:dp:LeafGreen in DS slot 2
Turnback Cave After Pillar 3|dpt|walk|42:55-56:30:dp:,42:45-47:25:t:,93:54-56:30:dp:,93:45-47:30:t:,93:46:10:t:Morning,93:46:10:t:Day,337:54-56:8:dp:Sapphire in DS slot 2,337:45-47:8:t:Sapphire in DS slot 2,338:54-56:8:dp:Ruby in DS slot 2,338:45-47:8:t:Ruby in DS slot 2,356:46:10:t:Night,356:47-48:5:t:,356:47:4:t:Emerald in DS slot 2,356:47:4:t:FireRed in DS slot 2,356:47:4:t:LeafGreen in DS slot 2,358:45-47:10:t:,358:45:4:t:Emerald in DS slot 2,358:45:4:t:FireRed in DS slot 2,358:45:4:t:LeafGreen in DS slot 2,436:54:5:dp:,436:54:4:dp:Emerald in DS slot 2,436:54:4:dp:FireRed in DS slot 2,436:54:4:dp:LeafGreen in DS slot 2,437:55-56:35:dp:,437:45:20:t:,437:56:4:dp:Emerald in DS slot 2,437:56:4:dp:FireRed in DS slot 2,437:56:4:dp:LeafGreen in DS slot 2
Turnback Cave After Pillar 3|t|static|487:47::t:Giratina not caught in distortion world
Snowpoint Temple 1F|dpt|walk|42:50-52:35:dp:,42:47-50:80:t:,75:52:10:dp:,95:50-52:15:dp:,208:52:5:dp:,215:50-52:35:dp:,215:49:10:t:,238:47-49:10:t:
Snowpoint Temple B1F|dpt|walk|42:52-54:35:dp:,42:47-50:80:t:,75:54:10:dp:,95:52-53:5:dp:,124:47-49:10:t:,208:53-54:15:dp:,215:52-54:35:dp:,215:49:10:t:
Snowpoint Temple B2F|dpt|walk|42:52-54:35:dp:,42:47-50:80:t:,75:54:10:dp:,95:52-53:5:dp:,124:48-50:10:t:,208:53-54:15:dp:,215:52-54:35:dp:,215:50:10:t:
Snowpoint Temple B3F|dpt|walk|42:52-54:35:dp:,42:47-50:80:t:,75:54:10:dp:,95:52-53:5:dp:,124:48-50:10:t:,208:53-54:15:dp:,215:52-54:35:dp:,215:50:10:t:
Snowpoint Temple B4F|dpt|walk|42:54-56:35:dp:,42:47-50:80:t:,75:56:10:dp:,124:49-51:10:t:,208:54-56:20:dp:,215:54-56:35:dp:,215:51:10:t:
Snowpoint Temple B5F|dpt|walk|42:54-56:35:dp:,42:47-50:80:t:,75:56:10:dp:,124:49-51:10:t:,208:54-56:20:dp:,215:54-56:35:dp:,215:51:10:t:
Snowpoint Temple B5F|dpt|static|486:70::dp:Regirock regice registeel in party,486:1::t:Regirock regice registeel in party
Wayward Cave 1F|dpt|walk|27:16:8:dp:LeafGreen in DS slot 2,27:17-18:8:t:LeafGreen in DS slot 2,41:14-16:45:dp:,41:17-19:15:t:,41:16:4:dp:Ruby in DS slot 2,41:16:4:dp:Sapphire in DS slot 2,41:16:4:dp:Emerald in DS slot 2,41:16:4:dp:FireRed in DS slot 2,74:15-16:15:dp:,74:17-20:40:t:,74:16:4:dp:Ruby in DS slot 2,74:17:4:t:Ruby in DS slot 2,74:16:4:dp:Sapphire in DS slot 2,74:17:4:t:Sapphire in DS slot 2,74:16:4:dp:Emerald in DS slot 2,74:17:4:t:Emerald in DS slot 2,74:16:4:dp:FireRed in DS slot 2,74:17:4:t:FireRed in DS slot 2,74:17:1:t:Poké Radar,95:18-20:15:t:,95:18:4:t:Ruby in DS slot 2,95:18:4:t:Sapphire in DS slot 2,95:18:4:t:Emerald in DS slot 2,95:18:4:t:FireRed in DS slot 2,436:14-16:40:dp:,436:18-20:30:t:
Wayward Cave B1F|dpt|walk|27:16-17:8:dp:LeafGreen in DS slot 2,27:18-20:8:t:LeafGreen in DS slot 2,41:15-17:35:dp:,41:19:10:t:,41:17:4:dp:Ruby in DS slot 2,41:17:4:dp:Sapphire in DS slot 2,41:17:4:dp:Emerald in DS slot 2,41:17:4:dp:FireRed in DS slot 2,74:16:10:dp:,74:18-20:25:t:,95:18-20:15:t:,95:18:4:t:Ruby in DS slot 2,95:18:4:t:Sapphire in DS slot 2,95:18:4:t:Emerald in DS slot 2,95:18:4:t:FireRed in DS slot 2,436:15-17:40:dp:,436:18-20:30:t:,443:15-17:15:dp:,443:17-20:20:t:,443:16:4:dp:Ruby in DS slot 2,443:20:4:t:Ruby in DS slot 2,443:16:4:dp:Sapphire in DS slot 2,443:20:4:t:Sapphire in DS slot 2,443:16:4:dp:Emerald in DS slot 2,443:20:4:t:Emerald in DS slot 2,443:16:4:dp:FireRed in DS slot 2,443:20:4:t:FireRed in DS slot 2
Ruin Maniac Cave 0 9 Different Unown Caught|dpt|walk|74:22:95:dp:,74:21-23:95:t:,449:22-23:5:dp:,449:22-24:5:t:
Ruin Maniac Cave 10 25 Different Unown Caught|dpt|walk|74:23:90:dp:,74:22-24:90:t:,449:22-24:10:dp:,449:23-25:10:t:
Trophy Garden|dpt|walk|25:18:10:dp:,25:22-24:10:t:,35:16-18:10:dp:Story  national dex / Backlot mentioned,35:22:10:t:Story  national dex / Backlot mentioned,39:16-18:10:dp:Story  national dex / Backlot mentioned,39:22:10:t:Story  national dex / Backlot mentioned,52:16-18:10:dp:Story  national dex / Backlot mentioned,52:22:10:t:Story  national dex / Backlot mentioned,113:16-18:10:dp:Story  national dex / Backlot mentioned,113:22:10:t:Story  national dex / Backlot mentioned,132:22:10:t:Story  national dex / Backlot mentioned,133:16-18:10:dp:Story  national dex / Backlot mentioned,133:22:10:t:Story  national dex / Backlot mentioned,137:16-18:10:dp:Story  national dex / Backlot mentioned,172:16:20:dp:Morning,172:16:10:dp:,172:21-22:30:t:,173:16-18:10:dp:Story  national dex / Backlot mentioned,173:22:10:t:Story  national dex / Backlot mentioned,174:16-18:10:dp:Story  national dex / Backlot mentioned,174:22:10:t:Story  national dex / Backlot mentioned,183:16-18:10:dp:Story  national dex / Backlot mentioned,183:22:10:t:Story  national dex / Backlot mentioned,298:16-18:10:dp:Story  national dex / Backlot mentioned,298:22:10:t:Story  national dex / Backlot mentioned,311:16-18:10:dp:Story  national dex / Backlot mentioned,311:22:10:t:Story  national dex / Backlot mentioned,312:16-18:10:dp:Story  national dex / Backlot mentioned,312:22:10:t:Story  national dex / Backlot mentioned,315:16-17:30:dp:,315:22-23:30:t:,351:16-18:10:dp:Story  national dex / Backlot mentioned,351:22:10:t:Story  national dex / Backlot mentioned,397:17:20:dp:,397:24:10:t:,397:16:20:dp:Day,397:22-23:20:t:Day,397:22:10:t:Morning,402:16:20:dp:Night,402:22-23:20:t:Night,402:17:10:dp:,402:23:10:t:Morning,438:16-18:10:dp:Story  national dex / Backlot mentioned,438:22:10:t:Story  national dex / Backlot mentioned,439:16-18:10:dp:Story  national dex / Backlot mentioned,439:22:10:t:Story  national dex / Backlot mentioned,440:16-18:10:dp:Story  national dex / Backlot mentioned,440:22:10:t:Story  national dex / Backlot mentioned
Iron Island|dpt|surf|72:20-30:60:dp:,72:20-30:30:t:,73:20-40:5:dp:,73:20-40:1:t:,278:20-30:30:dp:,278:20-30:60:t:,279:20-40:5:dp:,279:20-40:9:t:
Iron Island|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Iron Island|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dpt:
Iron Island|dpt|super-rod|130:30-40:40:dp:,130:30-55:40:t:,211:20-40:15:dp:,211:20-50:15:t:,457:20-50:45:dp:,457:30-55:45:t:
Iron Island 1F|dpt|walk|41:30:10:dpt:,42:31:10:dp:,42:32:10:t:,74:29-31:35:dp:,74:30-32:35:t:,75:31-33:35:dpt:,95:32-33:10:dp:,95:31-33:10:t:
Iron Island B1F Left|dpt|walk|42:30-31:20:dp:,42:30-32:20:t:,74:31:1:dp:,75:29-33:69:dp:,75:30-33:70:t:,75:31-33:8:dp:Emerald in DS slot 2,75:30-31:8:t:Emerald in DS slot 2,75:31-33:8:dp:FireRed in DS slot 2,75:30-31:8:t:FireRed in DS slot 2,75:31-33:8:dp:LeafGreen in DS slot 2,75:30-31:8:t:LeafGreen in DS slot 2,95:32-33:10:dp:,95:31-33:10:t:,302:31-33:8:dp:Sapphire in DS slot 2,302:30-31:8:t:Sapphire in DS slot 2,303:31-33:8:dp:Ruby in DS slot 2,303:30-31:8:t:Ruby in DS slot 2
Iron Island B1F Right|dpt|walk|42:30-31:20:dp:,42:30-32:20:t:,74:31:1:dp:,75:29-33:69:dp:,75:30-33:70:t:,75:31-33:8:dp:Emerald in DS slot 2,75:30-31:8:t:Emerald in DS slot 2,75:31-33:8:dp:FireRed in DS slot 2,75:30-31:8:t:FireRed in DS slot 2,75:31-33:8:dp:LeafGreen in DS slot 2,75:30-31:8:t:LeafGreen in DS slot 2,95:32-33:10:dp:,95:31-33:10:t:,302:31-33:8:dp:Sapphire in DS slot 2,302:30-31:8:t:Sapphire in DS slot 2,303:31-33:8:dp:Ruby in DS slot 2,303:30-31:8:t:Ruby in DS slot 2
Iron Island B2F Right|dpt|walk|42:30-31:20:dp:,42:31-33:20:t:,74:31:1:dp:,75:29-33:49:dp:,75:31-34:50:t:,75:31-33:8:dp:Emerald in DS slot 2,75:31-32:8:t:Emerald in DS slot 2,75:31-33:8:dp:FireRed in DS slot 2,75:31-32:8:t:FireRed in DS slot 2,75:31-33:8:dp:LeafGreen in DS slot 2,75:31-32:8:t:LeafGreen in DS slot 2,95:31-33:30:dp:,95:32:20:t:,208:33-35:10:t:,302:31-33:8:dp:Sapphire in DS slot 2,302:31-32:8:t:Sapphire in DS slot 2,303:31-33:8:dp:Ruby in DS slot 2,303:31-32:8:t:Ruby in DS slot 2
Iron Island B2F Left|dpt|walk|42:31-32:20:dp:,42:31-33:20:t:,74:32:1:dp:,75:30-34:39:dp:,75:31-34:50:t:,75:32-34:8:dp:Emerald in DS slot 2,75:31-32:8:t:Emerald in DS slot 2,75:32-34:8:dp:FireRed in DS slot 2,75:31-32:8:t:FireRed in DS slot 2,75:32-34:8:dp:LeafGreen in DS slot 2,75:31-32:8:t:LeafGreen in DS slot 2,95:32-33:30:dp:,95:32:20:t:,208:33-34:10:dp:,208:33-35:10:t:,302:32-34:8:dp:Sapphire in DS slot 2,302:31-32:8:t:Sapphire in DS slot 2,303:32-34:8:dp:Ruby in DS slot 2,303:31-32:8:t:Ruby in DS slot 2
Iron Island B2F Left|dpt|gift-egg|447:1::dpt:Story  beat team galactic iron island
Iron Island B3F|dpt|walk|42:31-32:20:dp:,42:31-33:20:t:,74:32:1:dp:,75:30-34:39:dp:,75:31-34:50:t:,75:32-34:8:dp:Emerald in DS slot 2,75:31-32:8:t:Emerald in DS slot 2,75:32-34:8:dp:FireRed in DS slot 2,75:31-32:8:t:FireRed in DS slot 2,75:32-34:8:dp:LeafGreen in DS slot 2,75:31-32:8:t:LeafGreen in DS slot 2,95:32-33:30:dp:,95:32:20:t:Swarm,208:33-34:10:dp:,208:32-35:30:t:,302:32-34:8:dp:Sapphire in DS slot 2,302:31-32:8:t:Sapphire in DS slot 2,303:32-34:8:dp:Ruby in DS slot 2,303:31-32:8:t:Ruby in DS slot 2
Old Chateau Entrance|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau Dining Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau 2F Private Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau 2F|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau 2F Leftmost Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau 2F Left Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau 2F Left Room|dpt|static|479:15::dp:Story  national dex / Night,479:20::t:Night
Old Chateau 2F Middle Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Old Chateau 2F Right Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:4:dp:Ruby in DS slot 2,93:16:4:dp:Sapphire in DS slot 2,93:16:4:dp:Emerald in DS slot 2,93:16:4:dp:FireRed in DS slot 2,93:16:4:dp:LeafGreen in DS slot 2,94:16:4:dp:Ruby in DS slot 2,94:17:4:t:Ruby in DS slot 2,94:16:4:dp:Sapphire in DS slot 2,94:17:4:t:Sapphire in DS slot 2,94:16:4:dp:Emerald in DS slot 2,94:17:4:t:Emerald in DS slot 2,94:16:4:dp:FireRed in DS slot 2,94:17:4:t:FireRed in DS slot 2,94:16:4:dp:LeafGreen in DS slot 2,94:17:4:t:LeafGreen in DS slot 2
Old Chateau 2F Rightmost Room|dpt|walk|92:12-16:100:dp:,92:14-17:100:t:,93:16:8:dp:Ruby in DS slot 2,93:16:8:dp:Sapphire in DS slot 2,93:16:8:dp:Emerald in DS slot 2,93:16:8:dp:FireRed in DS slot 2,93:16:8:dp:LeafGreen in DS slot 2
Lake Verity Before Galactic Intervention|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Lake Verity Before Galactic Intervention|dpt|good-rod|118:10-25:45:dp:,118:15-20:40:t:,119:25-35:5:t:,129:10-25:55:dpt:
Lake Verity Before Galactic Intervention|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Lake Verity Before Galactic Intervention|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Lake Verity Before Galactic Intervention|dpt|walk|202:3-4:22:dpt:Poké Radar,283:2:40:dp:Swarm,337:4:8:dpt:Sapphire in DS slot 2,338:4:8:dpt:Ruby in DS slot 2,396:2-4:40:dpt:,396:3:10:dpt:Morning,396:3:10:dpt:Day,396:4:4:t:Emerald in DS slot 2,396:4:4:t:FireRed in DS slot 2,396:4:4:t:LeafGreen in DS slot 2,397:4:4:dp:Emerald in DS slot 2,397:4:4:dp:FireRed in DS slot 2,397:4:4:dp:LeafGreen in DS slot 2,399:2-4:50:dpt:,399:3:10:dpt:Night,399:4:4:t:Emerald in DS slot 2,399:4:4:t:FireRed in DS slot 2,399:4:4:t:LeafGreen in DS slot 2,400:4:4:dp:Emerald in DS slot 2,400:4:4:dp:FireRed in DS slot 2,400:4:4:dp:LeafGreen in DS slot 2
Lake Verity Before Galactic Intervention|dp|gift|387:5::dp:,390:5::dp:,393:5::dp:
Lake Verity After Galactic Intervention|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Lake Verity After Galactic Intervention|dpt|good-rod|118:10-25:45:dp:,118:15-20:40:t:,119:25-35:5:t:,129:10-25:55:dpt:
Lake Verity After Galactic Intervention|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Lake Verity After Galactic Intervention|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Lake Verity After Galactic Intervention|dpt|walk|202:3-4:22:dpt:Poké Radar,283:2:40:dp:Swarm,337:4:8:dpt:Sapphire in DS slot 2,338:4:8:dpt:Ruby in DS slot 2,396:2-4:40:dp:,396:2-4:50:t:,396:3:10:dp:Morning,396:3:10:dp:Day,396:4:4:t:Emerald in DS slot 2,396:4:4:t:FireRed in DS slot 2,396:4:4:t:LeafGreen in DS slot 2,397:4:4:dp:Emerald in DS slot 2,397:4:4:dp:FireRed in DS slot 2,397:4:4:dp:LeafGreen in DS slot 2,399:2-4:50:dpt:,399:3:10:dp:Night,399:4:4:t:Emerald in DS slot 2,399:4:4:t:FireRed in DS slot 2,399:4:4:t:LeafGreen in DS slot 2,400:4:4:dp:Emerald in DS slot 2,400:4:4:dp:FireRed in DS slot 2,400:4:4:dp:LeafGreen in DS slot 2
Lake Valor|dpt|walk|54:35-36:20:dp:,54:38-39:15:t:,55:40-41:15:t:,108:34-36:40:dp:Swarm,164:34-36:20:dp:Night,202:35-36:22:dp:Poké Radar,202:38-41:22:t:Poké Radar,337:35:8:dp:Sapphire in DS slot 2,337:40-41:8:t:Sapphire in DS slot 2,338:35:8:dp:Ruby in DS slot 2,338:40-41:8:t:Ruby in DS slot 2,397:34-36:20:dp:Morning,397:34-36:20:dp:Day,397:35:5:dp:,397:38-40:35:t:,397:35:4:dp:Emerald in DS slot 2,397:40:4:t:Emerald in DS slot 2,397:35:4:dp:FireRed in DS slot 2,397:40:4:t:FireRed in DS slot 2,397:35:4:dp:LeafGreen in DS slot 2,397:40:4:t:LeafGreen in DS slot 2,400:34-36:45:dp:,400:39-41:35:t:,400:35:4:dp:Emerald in DS slot 2,400:41:4:t:Emerald in DS slot 2,400:35:4:dp:FireRed in DS slot 2,400:41:4:t:FireRed in DS slot 2,400:35:4:dp:LeafGreen in DS slot 2,400:41:4:t:LeafGreen in DS slot 2,433:35-36:10:dp:
Lake Valor|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Lake Valor|dpt|good-rod|118:10-25:45:dp:,118:15-20:40:t:,119:25-35:5:t:,129:10-25:55:dpt:
Lake Valor|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Lake Valor|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Lake Valor Cavern|dpt|static|482:50::dpt:
Lake Acuity|dpt|walk|54:36:10:dp:Morning,54:36:10:dp:Day,54:34-35:20:dp:,54:38:5:t:,55:39-40:15:t:,164:34-36:20:dp:Night,202:34-36:22:dp:Poké Radar,215:35-36:25:dp:,215:41:10:t:,215:36:4:dp:FireRed in DS slot 2,215:36:4:dp:LeafGreen in DS slot 2,216:40-41:8:t:Emerald in DS slot 2,217:34-36:8:dp:Emerald in DS slot 2,238:35:40:dp:Swarm,337:34-36:8:dp:Sapphire in DS slot 2,337:40-41:8:t:Sapphire in DS slot 2,338:34-36:8:dp:Ruby in DS slot 2,338:40-41:8:t:Ruby in DS slot 2,361:39-40:20:t:Night,400:34-35:25:dp:,400:39-40:25:t:,400:34:10:dp:Morning,400:34:10:dp:Day,400:34:4:dp:FireRed in DS slot 2,400:40:4:t:FireRed in DS slot 2,400:34:4:dp:LeafGreen in DS slot 2,400:40:4:t:LeafGreen in DS slot 2,433:34-36:10:dp:,459:38-41:25:t:,459:39-40:20:t:Morning,459:39-40:20:t:Day,459:41:4:t:FireRed in DS slot 2,459:41:4:t:LeafGreen in DS slot 2
Lake Acuity|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Lake Acuity|dpt|good-rod|118:10-25:45:dp:,118:15-20:40:t:,119:25-35:5:t:,129:10-25:55:dpt:
Lake Acuity|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Lake Acuity|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Lake Acuity Cavern|dpt|static|480:50::dpt:
Valor Lakefront|dpt|walk|30:21-22:20:d:Poké Radar,30:22:2:p:Poké Radar,30:27-28:11:t:Poké Radar,33:22:2:d:Poké Radar,33:21-22:20:p:Poké Radar,33:27-28:11:t:Poké Radar,74:20:20:dp:,75:21:10:dp:Morning,75:21:10:dp:Day,75:22:5:dp:,203:21-22:30:dp:,203:26-28:25:t:,228:27:10:t:Night,228:28:10:t:,397:21:10:dp:Morning,397:26:10:t:Morning,397:21:10:dp:Day,397:26-27:20:t:Day,397:22:5:dp:,397:27-28:15:t:,400:21-22:15:dp:,400:25-27:30:t:,402:21:20:dp:Night,402:26:10:t:Night,402:22:5:dp:,402:27:10:t:Morning
Acuity Lakefront|dpt|walk|41:35:10:dp:Night,67:35:10:dp:Morning,67:35:10:dp:Day,67:36:10:dp:,164:35:10:dp:Night,215:34-35:25:dp:,215:35:15:t:,215:33:10:t:Morning,215:33:10:t:Day,215:35:4:t:Ruby in DS slot 2,215:35:4:t:Sapphire in DS slot 2,215:35:4:t:FireRed in DS slot 2,215:35:4:t:LeafGreen in DS slot 2,216:36:8:dp:Emerald in DS slot 2,217:35:8:t:Emerald in DS slot 2,220:32-34:35:t:,307:35:10:dp:Morning,307:35:10:dp:Day,308:35-36:20:dp:,308:36:8:dp:Ruby in DS slot 2,308:36:8:dp:Sapphire in DS slot 2,308:36:8:dp:FireRed in DS slot 2,308:36:8:dp:LeafGreen in DS slot 2,361:35-36:22:dp:Poké Radar,361:32-33:20:t:Night,459:34-35:25:dp:,459:33-35:30:t:,459:32:10:t:Morning,459:32:10:t:Day,459:35:4:t:Ruby in DS slot 2,459:35:4:t:Sapphire in DS slot 2,459:35:4:t:FireRed in DS slot 2,459:35:4:t:LeafGreen in DS slot 2
Route 201|dpt|walk|29:3:20:d:Poké Radar,29:2:2:p:Poké Radar,29:2-3:11:t:Poké Radar,32:2:2:d:Poké Radar,32:3:20:p:Poké Radar,32:2-3:11:t:Poké Radar,58:2:8:dpt:FireRed in DS slot 2,84:2:40:dpt:Swarm,396:2-3:40:dpt:,396:3:10:dpt:Morning,396:3:10:dpt:Day,396:2:8:dp:Ruby in DS slot 2,396:2:4:t:Ruby in DS slot 2,396:2:8:dp:Sapphire in DS slot 2,396:2:4:t:Sapphire in DS slot 2,396:2:8:dp:Emerald in DS slot 2,396:2:4:t:Emerald in DS slot 2,396:2:8:dp:LeafGreen in DS slot 2,396:2:4:t:LeafGreen in DS slot 2,399:2-3:50:dp:,399:2-3:40:t:,399:3:10:dpt:Night,399:3:10:t:Day,399:2:4:t:Ruby in DS slot 2,399:2:4:t:Sapphire in DS slot 2,399:2:4:t:Emerald in DS slot 2,399:2:4:t:LeafGreen in DS slot 2,401:3:10:t:Night,401:3:10:t:Morning
Route 201|t|gift|387:5::t:,390:5::t:,393:5::t:
Route 202|dpt|walk|58:2:8:dpt:FireRed in DS slot 2,161:2-4:22:dpt:Poké Radar,263:3:40:dpt:Swarm,396:4:10:dpt:Morning,396:3-4:20:dp:Day,396:4:10:t:Day,396:2-4:20:dp:,396:2-4:10:t:,396:2:4:dpt:Ruby in DS slot 2,396:2:4:dpt:Sapphire in DS slot 2,396:2:4:dpt:Emerald in DS slot 2,396:2:4:dpt:LeafGreen in DS slot 2,399:2-4:30:dp:,399:2-4:40:t:,399:2:4:dpt:Ruby in DS slot 2,399:2:4:dpt:Sapphire in DS slot 2,399:2:4:dpt:Emerald in DS slot 2,399:2:4:dpt:LeafGreen in DS slot 2,399:3:10:t:Day,399:3:10:t:Night,401:3-4:20:dp:Night,401:4:10:t:Night,401:3:10:dpt:Morning,403:3-4:30:dpt:
Route 203|dpt|walk|41:5:10:dp:Night,41:4:10:t:Night,63:4-5:15:dpt:,104:4:40:dpt:Swarm,204:5:8:dp:Emerald in DS slot 2,204:6:8:t:Emerald in DS slot 2,270:5:8:dp:Sapphire in DS slot 2,270:6:8:t:Sapphire in DS slot 2,273:5:8:dp:Ruby in DS slot 2,273:6:8:t:Ruby in DS slot 2,280:4-6:21:dp:Poké Radar,281:6:1:dp:Poké Radar,396:4-6:25:dp:,396:4-7:25:t:,396:5:10:dpt:Morning,396:4-5:20:dp:Day,396:5:10:t:Day,396:5:4:dp:FireRed in DS slot 2,396:6:4:t:FireRed in DS slot 2,396:5:4:dp:LeafGreen in DS slot 2,396:6:4:t:LeafGreen in DS slot 2,399:4-6:15:dp:,399:5-7:15:t:,399:5:4:dp:FireRed in DS slot 2,399:6:4:t:FireRed in DS slot 2,399:5:4:dp:LeafGreen in DS slot 2,399:6:4:t:LeafGreen in DS slot 2,399:4:10:t:Day,401:4:10:dpt:Morning,401:4:10:dp:Night,401:5:10:t:Night,403:4-5:25:dpt:
Route 203|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 203|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Route 203|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Route 203|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 204 South Towards Jubilife City|dpt|walk|10:6:8:dp:FireRed in DS slot 2,10:5:8:t:FireRed in DS slot 2,13:6:8:dp:LeafGreen in DS slot 2,13:5:8:t:LeafGreen in DS slot 2,41:4:10:dp:Night,41:3:10:t:Night,204:6:8:dp:Emerald in DS slot 2,204:5:8:t:Emerald in DS slot 2,265:4:10:t:Morning,265:4:10:t:Day,270:6:8:dp:Sapphire in DS slot 2,270:5:8:t:Sapphire in DS slot 2,273:6:8:dp:Ruby in DS slot 2,273:5:8:t:Ruby in DS slot 2,280:4-6:21:dp:Poké Radar,281:6:1:dp:Poké Radar,396:4-6:25:dpt:,396:4:10:dp:Day,399:4-6:25:dpt:,401:4:10:dp:Morning,401:3:10:t:Morning,401:4:10:dpt:Night,403:4-5:15:dpt:,406:4:10:dp:Morning,406:4:10:dp:Day,406:3:10:t:Day,406:4-5:15:dpt:
Route 204 South Towards Jubilife City|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 204 South Towards Jubilife City|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Route 204 South Towards Jubilife City|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Route 204 South Towards Jubilife City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 204 North Towards Floaroma Town|dpt|walk|10:10:8:t:FireRed in DS slot 2,13:10:8:t:LeafGreen in DS slot 2,41:6:10:dp:Night,41:8:10:t:Night,191:6-8:22:dp:Poké Radar,191:9-11:22:t:Poké Radar,204:8:8:dp:Emerald in DS slot 2,204:10:8:t:Emerald in DS slot 2,265:9:10:t:Morning,265:9:10:t:Day,270:8:8:dp:Sapphire in DS slot 2,270:10:8:t:Sapphire in DS slot 2,273:8:8:dp:Ruby in DS slot 2,273:10:8:t:Ruby in DS slot 2,396:6-8:25:dp:,396:9-11:25:t:,396:6:10:dp:Day,396:8:4:dp:FireRed in DS slot 2,396:8:4:dp:LeafGreen in DS slot 2,399:6-8:25:dp:,399:9-11:25:t:,399:8:4:dp:FireRed in DS slot 2,399:8:4:dp:LeafGreen in DS slot 2,401:6:10:dp:Morning,401:8:10:t:Morning,401:6:10:dp:Night,401:9:10:t:Night,403:6-7:15:dp:,403:9-10:15:t:,406:6:10:dp:Morning,406:6:10:dp:Day,406:8:10:t:Day,406:6-7:15:dp:,406:9-10:15:t:
Route 204 North Towards Floaroma Town|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 204 North Towards Floaroma Town|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Route 204 North Towards Floaroma Town|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Route 204 North Towards Floaroma Town|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 205 South Towards Floaroma Town|dpt|surf|72:20-30:60:dp:,72:20-30:30:t:,73:20-40:5:dp:,73:20-40:1:t:,278:20-30:30:dp:,279:20-40:5:dp:,422:20-30:60:t:,423:20-40:9:t:
Route 205 South Towards Floaroma Town|dpt|super-rod|90:20-40:15:dp:,90:20-50:15:t:,130:30-40:40:dp:,130:30-55:40:t:,457:20-50:45:dp:,457:30-55:45:t:
Route 205 South Towards Floaroma Town|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 205 South Towards Floaroma Town|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dpt:
Route 205 South Towards Floaroma Town|dpt|walk|187:9-10:22:dp:Poké Radar,187:10-12:22:t:Poké Radar,239:10:8:dp:FireRed in DS slot 2,399:9:10:dp:,399:10:10:t:,417:9:10:dp:,417:9-11:10:t:,418:8-10:35:dp:,418:10-11:15:t:,418:10:4:dp:Ruby in DS slot 2,418:10:4:dp:Sapphire in DS slot 2,418:10:4:dp:Emerald in DS slot 2,418:10:4:dp:LeafGreen in DS slot 2,422:8-10:45:dp:,422:9-12:65:t:,422:10:4:dp:Ruby in DS slot 2,422:10:4:dp:Sapphire in DS slot 2,422:10:4:dp:Emerald in DS slot 2,422:10:4:dp:LeafGreen in DS slot 2
Route 205 South Towards Floaroma Town|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 205 East Towards Eterna City|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 205 East Towards Eterna City|dpt|walk|79:11-12:22:p:Poké Radar,79:14-15:22:t:Poké Radar,163:12:10:t:Night,187:11:20:d:Poké Radar,188:12:2:d:Poké Radar,265:13:10:t:Morning,265:13:10:t:Day,266:14:10:t:,267:15:1:t:,268:14:10:t:,269:15:1:t:,270:12:8:dp:Sapphire in DS slot 2,270:13-14:8:t:Sapphire in DS slot 2,399:10-12:45:dp:,399:12-14:30:t:,399:12:4:dp:Ruby in DS slot 2,399:12:4:dp:Emerald in DS slot 2,399:12:4:dp:FireRed in DS slot 2,399:12:4:dp:LeafGreen in DS slot 2,401:13:10:t:Night,401:12:10:t:Morning,406:12-14:28:t:,406:12:10:t:Day,406:13-14:8:t:Ruby in DS slot 2,406:13-14:8:t:Emerald in DS slot 2,406:13-14:8:t:FireRed in DS slot 2,406:13-14:8:t:LeafGreen in DS slot 2,417:11:10:dp:,418:10-12:35:dp:,418:12:4:dp:Ruby in DS slot 2,418:12:4:dp:Emerald in DS slot 2,418:12:4:dp:FireRed in DS slot 2,418:12:4:dp:LeafGreen in DS slot 2,422:11:10:dp:
Route 205 East Towards Eterna City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 205 East Towards Eterna City|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Route 205 East Towards Eterna City|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Route 205 East Towards Eterna City|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 206|dpt|walk|41:15:10:dp:Night,41:17:10:t:Night,66:17-19:20:t:,74:14:10:d:,74:14-16:35:p:,74:16-18:30:t:,74:15:4:p:Ruby in DS slot 2,74:15:4:p:Sapphire in DS slot 2,74:15:4:p:FireRed in DS slot 2,74:15:4:p:LeafGreen in DS slot 2,77:14-16:25:dp:,77:16:20:t:,77:15:10:dp:Morning,77:14-15:20:dp:Day,77:17:10:t:Day,77:15:4:dp:Ruby in DS slot 2,77:15:4:dp:Sapphire in DS slot 2,77:15:4:dp:FireRed in DS slot 2,77:15:4:dp:LeafGreen in DS slot 2,207:15:8:dp:Emerald in DS slot 2,207:18:10:t:Morning,207:18:10:t:Day,207:16:10:t:,246:16:40:t:Swarm,299:14:40:dp:Swarm,343:14-16:22:dp:Poké Radar,343:16-19:22:t:Poké Radar,401:14:10:dp:Morning,402:14:10:dp:Night,402:18:10:t:Night,402:15:10:dp:,402:17:10:t:Morning,434:14-16:25:d:,434:15:4:d:Ruby in DS slot 2,434:15:4:d:Sapphire in DS slot 2,434:15:4:d:FireRed in DS slot 2,434:15:4:d:LeafGreen in DS slot 2,436:15:10:dp:
Route 206|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 207|dpt|walk|41:6:10:dp:Night,41:5:10:t:Night,66:5-7:25:dp:,66:6-8:35:t:,66:6:10:dp:Morning,66:6:20:dp:Day,66:5:10:t:Day,66:7:4:dp:Ruby in DS slot 2,66:7:4:dp:Sapphire in DS slot 2,66:7:4:dp:FireRed in DS slot 2,66:7:4:dp:LeafGreen in DS slot 2,74:5-7:55:dp:,74:5-7:30:t:,74:7:4:dp:Ruby in DS slot 2,74:7:4:dp:Sapphire in DS slot 2,74:7:4:dp:FireRed in DS slot 2,74:7:4:dp:LeafGreen in DS slot 2,77:6:10:t:Morning,77:6:10:t:Day,77:5-7:15:t:,207:7:8:dp:Emerald in DS slot 2,231:5:40:dp:Swarm,231:5-7:40:t:Swarm,234:6-7:22:p:Poké Radar,234:5-7:22:t:Poké Radar,246:6-7:22:d:Poké Radar,401:6:10:dp:Morning,401:5:10:t:Morning,401:6:10:dpt:Night
Route 207|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 208|dpt|walk|41:16:20:dp:Night,41:19:10:t:Night,54:16-18:30:dp:,54:18:4:dp:Emerald in DS slot 2,54:18:4:dp:FireRed in DS slot 2,54:18:4:dp:LeafGreen in DS slot 2,66:16:10:dp:Morning,66:16:10:dp:Day,66:17:10:dp:,206:16:40:dp:Swarm,206:18:40:t:Swarm,235:18-20:22:t:Poké Radar,236:17-18:22:dp:Poké Radar,280:17-18:15:t:,307:16:10:dp:Morning,307:16:10:dp:Day,307:17:10:dp:,315:19-20:15:t:,315:20:4:t:Emerald in DS slot 2,315:20:4:t:FireRed in DS slot 2,315:20:4:t:LeafGreen in DS slot 2,335:18:8:dp:Ruby in DS slot 2,335:20:8:t:Ruby in DS slot 2,336:18:8:dp:Sapphire in DS slot 2,336:20:8:t:Sapphire in DS slot 2,399:16:20:dp:,399:18:20:t:,400:17-18:10:dp:,400:18-20:20:t:,400:18:4:dp:Emerald in DS slot 2,400:20:4:t:Emerald in DS slot 2,400:18:4:dp:FireRed in DS slot 2,400:20:4:t:FireRed in DS slot 2,400:18:4:dp:LeafGreen in DS slot 2,400:20:4:t:LeafGreen in DS slot 2,406:18:20:t:,406:19:10:t:Morning,406:19:10:t:Day
Route 208|dpt|surf|54:20-40:90:dp:,54:20:90:t:,55:20-40:10:dpt:
Route 208|dpt|good-rod|118:10-25:45:t:,129:10-25:55:dpt:,339:10-25:45:dp:
Route 208|dpt|super-rod|119:30-55:45:t:,130:30-55:55:dpt:,340:20-50:45:dp:
Route 208|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 208|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 209|dpt|walk|37:16:8:dp:LeafGreen in DS slot 2,37:17-19:8:t:LeafGreen in DS slot 2,41:16:10:dp:Night,41:19:10:t:Night,92:16:10:dp:Night,113:16:5:dp:,113:17-19:5:t:,113:16:4:dp:Ruby in DS slot 2,113:17:4:t:Ruby in DS slot 2,113:16:4:dp:Sapphire in DS slot 2,113:17:4:t:Sapphire in DS slot 2,113:16:4:dp:Emerald in DS slot 2,113:17:4:t:Emerald in DS slot 2,113:16:4:dp:FireRed in DS slot 2,113:17:4:t:FireRed in DS slot 2,128:17:20:d:Poké Radar,128:16:2:p:Poké Radar,209:16:40:dp:Swarm,209:18-19:40:t:Swarm,241:16:2:d:Poké Radar,241:17:20:p:Poké Radar,280:17:10:t:Morning,280:17:10:t:Day,280:18-19:10:t:,280:19:4:t:Ruby in DS slot 2,280:19:4:t:Sapphire in DS slot 2,280:19:4:t:Emerald in DS slot 2,280:19:4:t:FireRed in DS slot 2,281:18-19:22:t:Poké Radar,315:19-20:25:t:,355:17:10:t:Night,396:16:20:dp:,397:16:10:dp:Day,397:19:10:t:Day,397:17-18:15:dp:,397:18:10:t:,397:19:10:t:Morning,400:16-18:35:dp:,400:18-19:30:t:,400:16:10:dp:Day,438:16:20:p:Morning,438:16:5:p:,438:16:4:p:Ruby in DS slot 2,438:16:4:p:Sapphire in DS slot 2,438:16:4:p:Emerald in DS slot 2,438:16:4:p:FireRed in DS slot 2,439:16:20:d:Morning,439:16:5:d:,439:16:4:d:Ruby in DS slot 2,439:16:4:d:Sapphire in DS slot 2,439:16:4:d:Emerald in DS slot 2,439:16:4:d:FireRed in DS slot 2
Route 209|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 209|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Route 209|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Route 209|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 209|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 209|dpt|static|442:25::dpt:Holding the Odd Keystone / Talked to 32 people underground
Lost Tower 1F|dpt|walk|41:16-18:40:dp:,41:17-19:35:t:,41:17:10:dp:Morning,41:17:10:dp:Day,92:16-18:40:dp:,92:17-20:45:t:,92:17:10:dp:Morning,92:17-19:20:t:Morning,92:17:10:dp:Day,92:17-19:20:t:Day,198:17:20:d:Night,200:17:20:p:Night,355:17-19:20:t:Night
Lost Tower 2F|dpt|walk|41:17-19:40:dp:,41:17-19:35:t:,41:18:10:dp:Morning,41:18:10:dp:Day,92:17-19:40:dp:,92:17-20:45:t:,92:18:10:dp:Morning,92:17-19:20:t:Morning,92:18:10:dp:Day,92:17-19:20:t:Day,198:18:20:d:Night,200:18:20:p:Night,355:17-19:20:t:Night
Lost Tower 3F|dpt|walk|41:18-20:39:dp:,41:18-20:35:t:,41:19:10:dp:Morning,41:19:10:dp:Day,42:19:1:dp:,42:21:1:t:,92:18-20:40:dp:,92:18-21:44:t:,92:19:10:dp:Morning,92:18-20:20:t:Morning,92:19:10:dp:Day,92:18-20:20:t:Day,92:21:1:t:Poké Radar,198:19:20:d:Night,200:19:20:p:Night,355:18-20:20:t:Night
Lost Tower 4F|dpt|walk|41:19-21:35:dp:,41:18-20:35:t:,41:20:10:dp:Morning,41:20:10:dp:Day,42:20-21:5:dp:,42:21:5:t:,92:19-21:40:dp:,92:18-21:40:t:,92:20:10:dp:Morning,92:18-20:20:t:Morning,92:20:10:dp:Day,92:18-20:20:t:Day,92:21:4:t:Ruby in DS slot 2,92:21:4:t:Sapphire in DS slot 2,92:21:4:t:Emerald in DS slot 2,92:21:4:t:FireRed in DS slot 2,92:21:4:t:LeafGreen in DS slot 2,92:21:1:t:Poké Radar,198:20:20:d:Night,200:20:20:p:Night,355:18-20:20:t:Night
Lost Tower 5F|dpt|walk|41:20-21:30:dp:,41:19-21:35:t:,41:21:10:dp:Morning,41:21:10:dp:Day,42:21-23:10:dp:,42:22:10:t:,92:20-22:40:dp:,92:19-22:35:t:,92:21:10:dp:Morning,92:19-21:20:t:Morning,92:21:10:dp:Day,92:19-21:20:t:Day,92:22:4:t:Ruby in DS slot 2,92:22:4:t:Sapphire in DS slot 2,92:22:4:t:Emerald in DS slot 2,92:22:4:t:FireRed in DS slot 2,92:22:4:t:LeafGreen in DS slot 2,92:22:1:t:Poké Radar,198:21:20:d:Night,200:21:20:p:Night,355:19-21:20:t:Night
Route 210 South Towards Solaceon Town|dpt|walk|74:19:30:dp:,74:18:20:t:,77:18-20:30:dp:,77:19-21:15:t:,77:18:20:dp:Day,77:20-21:20:t:Day,77:20:10:t:Morning,77:21:4:t:Sapphire in DS slot 2,77:21:4:t:FireRed in DS slot 2,77:21:4:t:LeafGreen in DS slot 2,113:18-20:5:dp:,113:19-21:5:t:,113:18:4:dp:Sapphire in DS slot 2,113:19:4:t:Sapphire in DS slot 2,113:18:4:dp:FireRed in DS slot 2,113:19:4:t:FireRed in DS slot 2,113:18:4:dp:LeafGreen in DS slot 2,113:19:4:t:LeafGreen in DS slot 2,123:21:10:t:Morning,123:19:5:t:,128:19:20:d:Poké Radar,128:20:2:p:Poké Radar,128:19-21:11:t:Poké Radar,163:20:10:t:Night,164:21:10:t:Night,204:18-20:8:dp:Emerald in DS slot 2,204:19-21:8:t:Emerald in DS slot 2,241:20:2:d:Poké Radar,241:19:20:p:Poké Radar,241:20-21:11:t:Poké Radar,273:18:4:dp:Ruby in DS slot 2,273:21:4:t:Ruby in DS slot 2,274:20:4:dp:Ruby in DS slot 2,274:19:4:t:Ruby in DS slot 2,315:20-21:15:t:,397:19:20:t:,402:18:20:dp:Night,402:19:10:dp:,438:18:20:p:Morning,438:20:5:p:,438:20:4:p:Sapphire in DS slot 2,438:20:4:p:FireRed in DS slot 2,438:20:4:p:LeafGreen in DS slot 2,439:18:20:d:Morning,439:20:5:d:,439:20:4:d:Sapphire in DS slot 2,439:20:4:d:FireRed in DS slot 2,439:20:4:d:LeafGreen in DS slot 2
Route 210 South Towards Solaceon Town|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 210 West Towards Celestic Town|dpt|walk|54:25:20:dp:,66:25:10:dp:Morning,66:25:10:dp:Day,66:26:10:dp:,66:28-29:15:t:,66:29:4:t:Emerald in DS slot 2,66:29:4:t:FireRed in DS slot 2,66:29:4:t:LeafGreen in DS slot 2,67:26:10:dp:,67:29-30:10:t:,67:26:4:dp:Emerald in DS slot 2,67:30:4:t:Emerald in DS slot 2,67:26:4:dp:FireRed in DS slot 2,67:30:4:t:FireRed in DS slot 2,67:26:4:dp:LeafGreen in DS slot 2,67:30:4:t:LeafGreen in DS slot 2,123:27:10:t:Morning,123:29:5:t:,163:24:10:dp:Night,163:27:10:t:Night,164:25:10:dp:Night,164:27:10:t:Night,307:24:10:dp:Morning,307:27:10:t:Morning,307:24:10:dp:Day,307:27:10:t:Day,307:25-26:20:dp:,307:29:10:t:,307:26:4:dp:Emerald in DS slot 2,307:26:4:dp:FireRed in DS slot 2,307:26:4:dp:LeafGreen in DS slot 2,333:27:20:t:,333:27:10:t:Day,335:26:8:dp:Ruby in DS slot 2,335:29-30:8:t:Ruby in DS slot 2,336:26:8:dp:Sapphire in DS slot 2,336:29-30:8:t:Sapphire in DS slot 2,352:25-26:22:d:Poké Radar,371:25-26:22:p:Poké Radar,371:28-30:22:t:Poké Radar,400:24:20:dp:,400:28:20:t:
Route 210 West Towards Celestic Town|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 210 West Towards Celestic Town|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 210 West Towards Celestic Town|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dp:,339:15-20:40:t:,340:25-35:5:t:
Route 210 West Towards Celestic Town|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Route 210 West Towards Celestic Town|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 211 West Towards Eterna City|dpt|walk|41:12:10:dp:Night,41:14:10:t:Night,66:14-15:15:t:,66:15:4:t:Ruby in DS slot 2,66:15:4:t:Sapphire in DS slot 2,66:15:4:t:FireRed in DS slot 2,66:15:4:t:LeafGreen in DS slot 2,74:13:10:dp:,77:13:10:dp:,163:14:10:dp:Night,163:15:10:t:Night,216:12-14:8:dp:Emerald in DS slot 2,216:15-16:8:t:Emerald in DS slot 2,236:12-14:22:dp:Poké Radar,236:14-16:22:t:Poké Radar,307:13-14:25:dp:,307:13:20:t:,307:12:10:dp:Morning,307:14-15:20:t:Morning,307:12:10:dp:Day,307:14-15:20:t:Day,307:14:4:dp:Ruby in DS slot 2,307:14:4:dp:Sapphire in DS slot 2,307:14:4:dp:FireRed in DS slot 2,307:14:4:dp:LeafGreen in DS slot 2,399:12-13:25:dp:,399:14:20:t:,399:14:10:dp:Morning,399:14:10:dp:Day,399:12:4:dp:Ruby in DS slot 2,399:12:4:dp:Sapphire in DS slot 2,399:12:4:dp:FireRed in DS slot 2,399:12:4:dp:LeafGreen in DS slot 2,433:13:10:dp:,433:14-16:15:t:,436:14-16:10:t:,436:16:4:t:Ruby in DS slot 2,436:16:4:t:Sapphire in DS slot 2,436:16:4:t:FireRed in DS slot 2,436:16:4:t:LeafGreen in DS slot 2
Route 211 East Towards Celestic Town|dpt|walk|41:26:10:dp:Night,41:28:10:t:Night,67:28:10:dp:Morning,67:28:10:dp:Day,67:27:10:dp:,67:29-30:15:t:,75:27:20:dp:,75:28:20:t:,77:26:10:dp:Morning,77:26:10:dp:Day,77:27-28:5:dp:,77:27:4:dp:Ruby in DS slot 2,77:27:4:dp:Sapphire in DS slot 2,77:27:4:dp:FireRed in DS slot 2,77:27:4:dp:LeafGreen in DS slot 2,164:28:10:dp:Night,164:29:10:t:Night,216:27-28:8:dp:Emerald in DS slot 2,307:27-28:35:dp:,307:27:20:t:,307:28:4:dp:Ruby in DS slot 2,307:28:4:dp:Sapphire in DS slot 2,307:28:4:dp:FireRed in DS slot 2,307:28:4:dp:LeafGreen in DS slot 2,307:28-29:20:t:Morning,307:28-29:20:t:Day,333:27-28:22:dp:Poké Radar,433:27-28:10:dp:,433:28-30:15:t:,436:29:10:t:
Route 211 East Towards Celestic Town|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 212 North Towards Hearthome City|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 212 North Towards Hearthome City|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Route 212 North Towards Hearthome City|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Route 212 North Towards Hearthome City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 212 North Towards Hearthome City|dpt|walk|183:21-23:25:t:,183:22-23:20:t:Night,235:16-18:22:dp:Poké Radar,235:21-24:22:t:Poké Radar,280:22:10:t:Day,281:22:10:t:Morning,281:24:10:t:,315:16-17:15:dp:,315:22-24:35:t:,396:16:20:dp:,397:17:10:dp:Morning,397:23:10:t:Morning,397:17:20:dp:Day,397:23:10:t:Day,397:18:5:dp:,397:21:10:t:,402:17:20:dp:Night,402:17:10:dp:Morning,402:17-18:10:dp:,406:16:30:dp:
Route 212 North Towards Hearthome City|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 212 East Towards Pastoria City|dpt|walk|23:18-20:8:dp:FireRed in DS slot 2,23:23-26:8:t:FireRed in DS slot 2,88:18-20:22:dp:Poké Radar,88:23-26:22:t:Poké Radar,194:18:30:dp:,194:18:4:dp:Ruby in DS slot 2,194:18:4:dp:Emerald in DS slot 2,194:18:4:dp:LeafGreen in DS slot 2,195:24-26:30:t:,270:18:4:dp:Sapphire in DS slot 2,270:26:4:t:Sapphire in DS slot 2,271:20:4:dp:Sapphire in DS slot 2,271:23:4:t:Sapphire in DS slot 2,315:19:10:dp:Morning,315:19:10:dp:Day,315:18-20:15:dp:,400:18-20:25:dp:,400:19:10:dp:Morning,400:19:10:dp:Day,400:20:4:dp:Ruby in DS slot 2,400:20:4:dp:Emerald in DS slot 2,400:20:4:dp:LeafGreen in DS slot 2,402:19:20:dp:Night,402:18:10:dp:,418:23-25:15:t:,418:23:4:t:Ruby in DS slot 2,418:23:4:t:Emerald in DS slot 2,418:23:4:t:LeafGreen in DS slot 2,422:23-26:45:t:,422:26:4:t:Ruby in DS slot 2,422:26:4:t:Emerald in DS slot 2,422:26:4:t:LeafGreen in DS slot 2,453:24-25:10:t:
Route 212 East Towards Pastoria City|dpt|surf|72:20-30:30:t:,73:20-40:1:t:,194:20-40:90:dp:,195:20-40:10:dp:,422:20-30:60:t:,423:20-40:9:t:
Route 212 East Towards Pastoria City|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 212 East Towards Pastoria City|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:t:,339:10-25:45:dp:
Route 212 East Towards Pastoria City|dpt|super-rod|130:30-55:55:dpt:,224:30-55:45:t:,340:20-50:45:dp:
Route 212 East Towards Pastoria City|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 213|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dpt:,278:20-30:30:dpt:,279:20-40:5:dp:,422:20-30:4:t:,423:20-40:1:t:
Route 213|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 213|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Route 213|dpt|super-rod|130:30-40:40:dp:,130:30-55:55:t:,224:20-50:45:dp:,224:30-55:45:t:,319:40-55:15:dp:
Route 213|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 213|dpt|walk|277:20-22:22:dp:Poké Radar,277:25-26:22:t:Poké Radar,278:20:10:dp:Morning,278:20:10:dp:Day,278:20:10:dp:,278:24-26:20:t:,359:20:40:dp:Swarm,418:20-21:30:dp:,418:23-25:25:t:,418:25:10:t:Night,419:22:10:dp:,422:20-22:40:dp:,422:24-26:35:t:,422:20:10:dp:Night,422:23:10:t:Night,441:23-25:20:t:Morning,441:23-25:20:t:Day
Route 214|dpt|walk|37:24:8:dpt:LeafGreen in DS slot 2,41:22:10:t:Night,74:22:20:dp:,74:21:20:t:,75:23:10:dp:Morning,75:22:10:t:Morning,75:23:10:dp:Day,75:22:10:t:Day,75:24:5:dp:,75:23-24:25:t:,75:24:4:dp:Ruby in DS slot 2,75:24:4:dp:Sapphire in DS slot 2,75:24:4:dp:FireRed in DS slot 2,77:23-24:25:dp:,77:23:10:dp:Morning,77:23:10:dp:Day,111:22:10:t:Morning,111:22:10:t:Day,111:21-24:20:t:,111:24:4:t:Ruby in DS slot 2,111:24:4:t:Sapphire in DS slot 2,111:24:4:t:Emerald in DS slot 2,111:24:4:t:FireRed in DS slot 2,185:23-24:15:p:,185:24:4:p:Ruby in DS slot 2,185:24:4:p:Sapphire in DS slot 2,185:24:4:p:FireRed in DS slot 2,203:24:10:dp:,207:24:8:dp:Emerald in DS slot 2,228:22:10:t:Night,228:23-24:15:t:,228:24:4:t:Ruby in DS slot 2,228:24:4:t:Sapphire in DS slot 2,228:24:4:t:Emerald in DS slot 2,228:24:4:t:FireRed in DS slot 2,229:23-24:22:p:Poké Radar,261:23-24:22:t:Poké Radar,262:23-24:22:d:Poké Radar,325:22-23:40:dp:Swarm,325:21-23:40:t:Swarm,402:23:20:dp:Night,402:24:5:dp:,434:23-24:15:d:,434:24:4:d:Ruby in DS slot 2,434:24:4:d:Sapphire in DS slot 2,434:24:4:d:FireRed in DS slot 2
Route 214|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Route 214|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Route 214|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Route 214|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 214|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 215|dpt|walk|63:20:10:dp:,63:19:10:t:,64:20-22:15:dp:,64:21-22:10:t:,64:22:4:dp:Ruby in DS slot 2,64:22:4:dp:Sapphire in DS slot 2,64:22:4:dp:FireRed in DS slot 2,64:22:4:dp:LeafGreen in DS slot 2,74:20-22:25:dp:,74:21:10:dp:Morning,74:22:4:dp:Ruby in DS slot 2,74:22:4:dp:Sapphire in DS slot 2,74:22:4:dp:FireRed in DS slot 2,74:22:4:dp:LeafGreen in DS slot 2,77:21:20:dp:,77:22:10:dp:Morning,77:21-22:20:dp:Day,96:20-21:40:dp:Swarm,96:19-20:40:t:Swarm,108:20:10:t:,123:22:10:t:Morning,123:20:5:t:,183:20-22:25:t:,183:21-22:20:t:Night,207:22:8:dp:Emerald in DS slot 2,229:20-22:22:p:Poké Radar,262:20-22:22:d:Poké Radar,397:19:20:t:,397:21-22:20:t:Day,397:21:10:t:Morning,402:21-22:20:dp:Night,402:20:10:dp:
Route 215|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 216|dpt|walk|41:33:10:dp:Night,41:32:10:t:Night,67:33:10:dp:Morning,67:33:10:dp:Day,67:34:10:dp:,75:33-34:10:dp:,75:35:5:t:,75:33-34:8:dp:Ruby in DS slot 2,75:35:4:t:Ruby in DS slot 2,75:33-34:8:dp:Sapphire in DS slot 2,75:35:4:t:Sapphire in DS slot 2,75:33-34:8:dp:FireRed in DS slot 2,75:35:4:t:FireRed in DS slot 2,75:33-34:8:dp:LeafGreen in DS slot 2,75:35:4:t:LeafGreen in DS slot 2,164:33:10:dp:Night,215:32-33:25:dp:,215:33-35:35:t:,217:33-34:8:dp:Emerald in DS slot 2,217:35:8:t:Emerald in DS slot 2,225:32:40:dp:Swarm,307:33:10:dp:Morning,307:32:10:t:Morning,307:33:10:dp:Day,307:32:10:t:Day,307:34:10:dp:,307:33:10:t:,361:33-34:22:dp:Poké Radar,361:33:10:t:Night,459:32-33:25:dp:,459:32-35:30:t:,459:33:10:t:Morning,459:33:10:t:Day,459:35:4:t:Ruby in DS slot 2,459:35:4:t:Sapphire in DS slot 2,459:35:4:t:FireRed in DS slot 2,459:35:4:t:LeafGreen in DS slot 2
Route 217|dpt|walk|41:35:10:dp:Night,67:35:10:dp:Morning,67:35:10:dp:Day,67:36:10:dp:,164:35:10:dp:Night,215:34-35:25:dp:,215:34-35:15:t:,215:33:10:t:Morning,215:33:10:t:Day,215:35:4:t:Ruby in DS slot 2,215:35:4:t:Sapphire in DS slot 2,215:35:4:t:FireRed in DS slot 2,215:35:4:t:LeafGreen in DS slot 2,217:36:8:dp:Emerald in DS slot 2,217:35:8:t:Emerald in DS slot 2,220:34:40:dp:Swarm,220:32-34:35:t:,221:34-35:22:t:Poké Radar,225:32-33:40:t:Swarm,307:35:10:dp:Morning,307:35:10:dp:Day,308:35-36:20:dp:,308:36:8:dp:Ruby in DS slot 2,308:36:8:dp:Sapphire in DS slot 2,308:36:8:dp:FireRed in DS slot 2,308:36:8:dp:LeafGreen in DS slot 2,361:35-36:22:dp:Poké Radar,361:33:20:t:Night,459:34-35:25:dp:,459:32-35:30:t:,459:33:10:t:Morning,459:33:10:t:Day,459:35:4:t:Ruby in DS slot 2,459:35:4:t:Sapphire in DS slot 2,459:35:4:t:FireRed in DS slot 2,459:35:4:t:LeafGreen in DS slot 2
Route 218|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dp:,73:20-40:9:t:,278:20-30:30:dp:,279:20-40:5:dp:,422:20-30:30:t:,423:20-40:1:t:
Route 218|dpt|walk|100:28:40:dp:Swarm,100:28-29:40:t:Swarm,122:29-30:15:d:,122:29-31:25:t:,132:29-30:22:dp:Poké Radar,278:29:10:dp:,419:28-30:35:dp:,419:29-31:30:t:,419:30:10:t:Night,422:28:20:dp:,423:28-30:20:dp:,423:28-30:25:t:,423:28:10:t:Night,431:29-30:15:p:,441:28-30:20:t:Morning,441:28-30:20:t:Day
Route 218|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 218|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dpt:
Route 218|dpt|super-rod|130:30-55:55:dpt:,457:20-50:45:dp:,457:30-55:45:t:
Route 218|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 219|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dp:,73:20-40:9:t:,278:20-30:30:dpt:,279:20-40:5:dp:,279:20-40:1:t:
Route 219|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 219|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dp:,456:15-20:40:t:,457:25-35:5:t:
Route 219|dpt|super-rod|130:30-40:40:dp:,130:30-55:55:t:,366:20-30:15:dp:,457:20-50:45:dp:,457:30-55:45:t:
Route 221|dpt|walk|30:29:20:d:Poké Radar,30:30:2:p:Poké Radar,30:30:11:t:Poké Radar,33:30:2:d:Poké Radar,33:29:20:p:Poké Radar,33:31:11:t:Poké Radar,83:28:40:dp:Swarm,83:28-29:40:t:Swarm,185:29-30:15:p:,185:29-31:25:t:,203:28-30:25:t:,278:29:10:dp:,315:29:10:dp:,315:29-30:15:t:,315:28:10:t:Morning,315:28:10:t:Day,419:28-30:25:dp:,419:29-31:25:t:,419:28:10:t:Night,422:28:10:dp:,423:29-30:10:d:,423:28-30:30:p:,434:28:20:d:,435:29-30:15:d:
Route 221|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dp:,73:20-40:9:t:,278:20-30:30:dpt:,279:20-40:5:dp:,279:20-40:1:t:
Route 221|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 221|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dp:,456:15-20:40:t:,457:25-35:5:t:
Route 221|dpt|super-rod|130:30-40:40:dp:,130:30-55:55:t:,366:20-30:15:dp:,457:20-50:45:dp:,457:30-55:45:t:
Route 221|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 222|dpt|surf|72:20-30:60:dp:,72:30-40:60:t:,73:20-40:5:dp:,73:30-50:9:t:,278:20-30:30:dp:,278:30-40:30:t:,279:20-40:5:dp:,279:30-50:1:t:
Route 222|dpt|walk|81:39:10:t:,82:41:5:t:,122:41-42:15:d:,125:39:20:t:,125:41:10:t:Morning,125:41:10:t:Day,180:41-42:22:dp:Poké Radar,180:38-41:22:t:Poké Radar,278:41:10:dp:,278:38:10:t:,279:40:5:t:,300:40:40:dp:Swarm,300:39-40:40:t:Swarm,404:38-40:10:t:,419:40-42:25:dp:,419:40:20:t:,419:41:10:dp:Night,419:38-41:20:t:Night,423:40-42:30:d:,423:41-42:10:p:,423:40:10:dp:Night,431:40:20:p:,432:41-42:15:p:,441:40-41:20:dp:Morning,441:38:10:t:Morning,441:40-41:20:dp:Day,441:38:10:t:Day
Route 222|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 222|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Route 222|dpt|super-rod|130:30-40:40:dp:,130:30-55:55:t:,224:20-50:45:dp:,224:30-55:45:t:,319:40-55:15:dp:
Route 222|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Route 224|dpt|walk|43:49:20:t:Night,44:53:5:dp:,44:51:5:t:,69:49:20:t:Morning,69:49:20:t:Day,70:53:5:dp:,70:51:5:t:,177:53:40:dp:Swarm,177:50:40:t:Swarm,213:23:8:dp:Emerald in DS slot 2,213:52:8:t:Emerald in DS slot 2,267:23:5:dp:,267:52:5:t:,267:23:4:dp:Ruby in DS slot 2,267:52:4:t:Ruby in DS slot 2,267:23:4:dp:Sapphire in DS slot 2,267:52:4:t:Sapphire in DS slot 2,267:23:4:dp:FireRed in DS slot 2,267:52:4:t:FireRed in DS slot 2,267:23:4:dp:LeafGreen in DS slot 2,267:52:4:t:LeafGreen in DS slot 2,269:52:5:t:,269:52:4:t:Ruby in DS slot 2,269:52:4:t:Sapphire in DS slot 2,269:52:4:t:FireRed in DS slot 2,269:52:4:t:LeafGreen in DS slot 2,279:51:10:t:,315:52-54:20:dp:,315:50:20:t:,355:23:2:dp:Poké Radar,356:52-54:20:dp:Poké Radar,418:23:4:dp:,418:23:4:dp:Ruby in DS slot 2,418:23:4:dp:Sapphire in DS slot 2,418:23:4:dp:FireRed in DS slot 2,418:23:4:dp:LeafGreen in DS slot 2,419:53:20:dp:,419:50:20:t:,419:54:10:dp:Night,422:23:1:dp:,423:53:20:dp:,423:49:10:t:,423:52:10:dp:Night,441:52-54:20:dp:Morning,441:52-54:20:dp:Day
Route 224|dpt|surf|73:40-55:35:dp:,73:35-55:30:t:,279:40-55:65:dp:,279:35-55:60:t:,423:35-55:10:t:
Route 224|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 224|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Route 224|dpt|super-rod|130:30-40:40:dp:,130:30-55:40:t:,224:20-50:45:dp:,224:30-55:45:t:,370:20-30:15:dpt:
Route 225|dpt|walk|19:20-22:5:dp:,19:47:5:t:,20:50-52:30:dp:,20:49-50:15:t:,21:20-22:5:dp:,21:47:5:t:,22:51:20:dp:,22:49:10:t:,22:50-52:20:dp:Morning,22:48-50:20:t:Morning,22:50-52:20:dp:Day,22:48-50:20:t:Day,56:22:2:dp:Poké Radar,56:47:2:t:Poké Radar,57:51-52:20:dp:Poké Radar,57:49-50:20:t:Poké Radar,67:51:5:dp:,67:48-50:25:t:,75:49:20:t:,296:50-51:40:dp:Swarm,296:48-49:40:t:Swarm,315:51:5:d:,315:51:15:p:,354:50-52:20:dp:Night,354:48-50:20:t:Night,435:51:10:d:
Route 225|dpt|surf|54:35-45:10:t:,55:40-55:70:dp:,55:35-55:90:t:,61:40-50:30:dp:
Route 225|dpt|good-rod|60:10-25:45:dp:,129:10-25:55:dpt:,339:10-25:45:t:
Route 225|dpt|super-rod|61:30-55:45:dp:,130:30-55:55:dpt:,340:30-55:45:t:
Route 225|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 227|dpt|walk|22:54:10:dp:Morning,22:51:10:t:Morning,22:54:10:dp:Day,22:51:10:t:Day,22:55:10:dp:,22:53:10:t:,42:54:10:dp:Night,42:51:10:t:Night,75:54:10:dp:Morning,75:54:10:dp:Day,75:56:5:dp:,75:51-53:15:t:,110:55:10:dp:,110:52:10:t:,111:22-24:5:dp:,111:52:5:t:,111:22:4:dp:Ruby in DS slot 2,111:22:4:dp:Sapphire in DS slot 2,111:22:4:dp:FireRed in DS slot 2,112:55:20:dp:,112:54:20:t:,207:22:8:dp:Emerald in DS slot 2,227:56:5:dp:,227:53:5:t:,240:22:8:dp:LeafGreen in DS slot 2,322:22-24:5:dp:,322:51:5:t:,322:22:4:dp:Ruby in DS slot 2,322:22:4:dp:Sapphire in DS slot 2,322:22:4:dp:FireRed in DS slot 2,323:55:20:dp:,323:53:20:t:,324:24-55:22:dp:Poké Radar,324:51-53:22:t:Poké Radar,327:55:40:dp:Swarm,327:53-54:40:t:Swarm,354:54:10:dp:Night
Route 227|dpt|surf|60:20-30:30:dp:,60:35-45:30:t:,61:40-55:70:dp:,61:35-55:70:t:
Route 227|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 227|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dpt:
Route 227|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Route 228|dpt|walk|28:23:8:dp:LeafGreen in DS slot 2,28:49-50:8:t:LeafGreen in DS slot 2,50:23-25:5:dp:,50:49:5:t:,50:23:4:dp:Ruby in DS slot 2,50:49:4:t:Ruby in DS slot 2,50:23:4:dp:Sapphire in DS slot 2,50:49:4:t:Sapphire in DS slot 2,50:23:4:dp:Emerald in DS slot 2,50:49:4:t:Emerald in DS slot 2,50:23:4:dp:FireRed in DS slot 2,50:49:4:t:FireRed in DS slot 2,51:52-54:30:dp:,51:50-52:30:t:,112:52:10:dp:Morning,112:50:10:t:Morning,112:52:10:dp:Day,112:50:10:t:Day,112:53:10:dp:,112:52:10:t:,328:25:2:dp:Poké Radar,329:53-54:20:dp:Poké Radar,331:23-25:5:dp:,331:50:5:t:,331:23:4:dp:Ruby in DS slot 2,331:50:4:t:Ruby in DS slot 2,331:23:4:dp:Sapphire in DS slot 2,331:50:4:t:Sapphire in DS slot 2,331:23:4:dp:Emerald in DS slot 2,331:50:4:t:Emerald in DS slot 2,331:23:4:dp:FireRed in DS slot 2,331:50:4:t:FireRed in DS slot 2,332:53:20:dp:,332:52:20:t:,332:52:20:dp:Night,332:50:20:t:Night,374:53:40:dp:Swarm,374:51-52:40:t:Swarm,450:52:10:dp:Morning,450:50:10:t:Morning,450:52:10:dp:Day,450:50:10:t:Day,450:54:10:dp:,450:51:10:t:
Route 228|dpt|surf|60:20-30:30:dp:,60:35-45:30:t:,61:40-55:70:dp:,61:35-55:70:t:
Route 228|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 228|dpt|good-rod|129:10-25:55:dpt:,339:10-25:45:dp:,339:15-20:40:t:,340:25-35:5:t:
Route 228|dpt|super-rod|130:30-55:55:dpt:,340:20-50:45:dp:,340:30-55:45:t:
Route 229|dpt|walk|16:51:40:dp:Swarm,16:50:20:t:Day,16:47:5:t:,43:20-22:5:dp:,43:20:4:dp:FireRed in DS slot 2,43:20:4:dp:LeafGreen in DS slot 2,44:51:20:dp:,44:52:10:dp:Day,48:22:2:dp:Poké Radar,48:48:2:t:Poké Radar,49:50:20:dp:Poké Radar,49:49:20:t:Poké Radar,69:20-22:5:dp:,69:20:4:dp:FireRed in DS slot 2,69:20:4:dp:LeafGreen in DS slot 2,70:51:20:dp:,70:52:10:dp:Day,123:52:5:d:,127:52:5:p:,127:48-49:40:t:Swarm,166:52:20:dp:Morning,166:50:20:t:Morning,168:52:20:dp:Night,168:50:20:t:Night,204:20:8:dp:Emerald in DS slot 2,204:48:8:t:Emerald in DS slot 2,267:48:5:t:,267:48:4:t:FireRed in DS slot 2,267:48:4:t:LeafGreen in DS slot 2,269:48:5:t:,269:48:4:t:FireRed in DS slot 2,269:48:4:t:LeafGreen in DS slot 2,271:20:8:dp:Sapphire in DS slot 2,271:48:8:t:Sapphire in DS slot 2,274:20:8:dp:Ruby in DS slot 2,274:48:8:t:Ruby in DS slot 2,313:50:5:d:,313:50:10:p:,313:49:10:t:,314:50:10:d:,314:50:5:p:,314:49:10:t:,315:50:10:d:,315:48-50:45:t:,432:50:10:p:
Route 229|dpt|good-rod|118:10-25:45:t:,129:10-25:100:dp:,129:10-25:55:t:
Route 229|dpt|super-rod|119:30-55:45:t:,130:20-55:100:dp:,130:30-55:55:t:
Route 229|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Route 229|dpt|surf|278:40-55:70:dp:,279:45-55:30:dp:,283:35-45:95:t:,284:35-55:5:t:
Twinleaf Town|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Twinleaf Town|dpt|good-rod|118:10-25:45:dp:,118:15-35:45:t:,129:10-25:55:dpt:
Twinleaf Town|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Twinleaf Town|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Celestic Town|dpt|surf|54:20-40:90:dp:,54:20-30:90:t:,55:20-40:10:dpt:
Celestic Town|dpt|good-rod|118:15-35:45:t:,129:10-25:55:dpt:,339:10-25:45:dp:
Celestic Town|dpt|super-rod|119:40-55:5:t:,130:30-40:40:dp:,130:30-55:40:t:,340:40-55:15:dp:,341:30-40:40:dpt:,342:35-55:5:dp:,342:40-55:15:t:
Celestic Town|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Resort Area|dpt|surf|54:35-45:10:t:,55:40-55:100:dp:,55:35-55:90:t:
Resort Area|dpt|good-rod|118:10-25:45:dp:,129:10-25:55:dp:,129:10-35:100:t:
Resort Area|dpt|super-rod|119:20-50:45:dp:,129:1-100:100:t:,130:30-55:55:dp:
Resort Area|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Sea Route 220|dpt|surf|72:20-30:60:dpt:,73:20-40:5:dp:,73:20-40:9:t:,278:20-30:30:dpt:,279:20-40:5:dp:,279:20-40:1:t:
Sea Route 220|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Sea Route 220|dpt|good-rod|129:10-25:55:dpt:,456:10-25:45:dp:,456:15-20:40:t:,457:25-35:5:t:
Sea Route 220|dpt|super-rod|130:30-40:40:dp:,130:30-55:40:t:,170:15-25:40:dp:,170:20-50:15:t:,171:20-45:5:dp:,457:30-40:15:dp:,457:30-55:45:t:
Sea Route 223|dpt|surf|73:35-45:60:dp:,73:30-50:60:t:,279:35-45:30:dp:,279:30-50:30:t:,458:30-45:10:dp:,458:30-40:10:t:
Sea Route 223|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Sea Route 223|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dp:,223:15-25:40:t:,224:25-35:5:t:
Sea Route 223|dpt|super-rod|130:30-40:40:dp:,130:30-55:40:t:,224:40-55:15:dp:,224:20-50:15:t:,320:30-40:40:dpt:,321:35-55:5:dp:,321:40-55:5:t:
Sea Route 226|dpt|walk|19:20-22:5:dp:,19:47:5:t:,20:51-52:30:dp:,20:49-50:15:t:,21:20-22:5:dp:,22:52:20:dp:,22:51-53:20:dp:Morning,22:48-50:20:t:Morning,22:51-53:20:dp:Day,22:48-50:20:t:Day,55:51-53:10:dp:,56:22:2:dp:Poké Radar,56:47:2:t:Poké Radar,57:51-53:20:dp:Poké Radar,57:49-50:20:t:Poké Radar,67:53:10:dp:,67:48-50:25:t:,75:49:20:t:,98:52:40:dp:Swarm,98:48-49:40:t:Swarm,278:47-49:15:t:,354:51-53:20:dp:Night,354:48-50:20:t:Night
Sea Route 226|dpt|surf|73:40-55:5:dp:,73:35-55:10:t:,86:35-45:30:d:,87:40-55:5:d:,278:35-45:60:t:,279:40-55:60:dp:,279:35-55:30:t:,363:35-45:30:p:,364:40-55:5:p:
Sea Route 226|dpt|good-rod|116:10-25:45:dpt:,129:10-25:55:dpt:
Sea Route 226|dpt|super-rod|117:30-55:45:dpt:,130:30-40:40:dp:,130:30-55:40:t:,369:40-50:15:dp:,369:20-50:15:t:
Sea Route 226|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Sea Route 226 Island House|dpt|trade|129:1-100::dpt:Trade a Finneon
Sea Route 230|dpt|walk|43:18-23:11:dp:,43:47:20:t:Night,44:50:20:dp:,44:49:5:t:,55:52:10:dp:,69:18-23:11:dp:,69:47:20:t:Morning,69:47:20:t:Day,70:50:20:dp:,70:49:5:t:,175:18-23:22:dp:Poké Radar,175:48-50:22:t:Poké Radar,222:50:40:dp:Swarm,222:48:40:t:Swarm,267:51:10:d:,269:51:10:p:,278:48:5:t:,279:48-50:30:t:,279:48:4:t:Ruby in DS slot 2,279:48:4:t:Sapphire in DS slot 2,279:48:4:t:Emerald in DS slot 2,279:48:4:t:FireRed in DS slot 2,279:48:4:t:LeafGreen in DS slot 2,315:49:10:t:,419:50-52:13:dp:,419:48-50:25:t:,423:51:5:dp:
Sea Route 230|dpt|surf|73:40-55:5:dp:,73:35-55:10:t:,86:35-45:30:d:,87:40-55:5:d:,279:40-55:60:dp:,279:35-55:30:t:,363:35-45:30:p:,364:40-55:5:p:,364:35-55:60:t:
Sea Route 230|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Sea Route 230|dpt|good-rod|129:10-25:55:dpt:,223:10-25:45:dpt:
Sea Route 230|dpt|super-rod|130:30-40:40:dp:,130:30-55:40:t:,224:40-55:15:dp:,224:20-50:15:t:,320:30-40:40:dpt:,321:35-55:5:dp:,321:40-55:5:t:
Oreburgh City Oreburgh Mining Museum|dpt|gift|138:20::dpt:Revived from the Helix Fossil,140:20::dpt:Revived from the Dome Fossil,142:20::dpt:Revived from the Old Amber,345:20::dpt:Revived from the Root Fossil,347:20::dpt:Revived from the Claw Fossil,408:20::dpt:Revived from the Skull Fossil,410:20::dpt:Revived from the Armor Fossil
Oreburgh City North West House|dpt|trade|63:1-100::dpt:Trade a Machop
Hearthome City|dpt|gift|133:5::dp:Story  national dex,133:20::t:
Hearthome City West Gate|dp|gift-egg|440:1::dp:
Veilstone City|t|gift|137:25::t:
Snowpoint City|dpt|trade|93:37-100::dpt:Trade a Medicham
Spear Pillar|dpt|static|483:47::d:,483:70::t:Holding the Adamant Orb / Talk to cynthias grandmother / Story  hall of fame,484:47::p:,484:70::t:Holding the Lustrous Orb / Talk to cynthias grandmother / Story  hall of fame
Floaroma Meadow|dpt|honey-tree|190:5-15:10:dp:Honey tree group B,190:5-15:15:t:Honey tree group B,190:5-15:5:dp:Honey tree group A,190:5-15:10:t:Honey tree group A,214:5-15:5:dpt:Honey tree group B,265:5-15:40:dp:Honey tree group A,265:5-15:20:t:Honey tree group A,265:5-15:5:dp:Honey tree group B,266:5-15:20:d:Honey tree group A,268:5-15:20:p:Honey tree group A,412:5-15:20:dp:Honey tree group B,412:5-15:40:t:Honey tree group B,412:5-15:10:dp:Honey tree group A,412:5-15:20:t:Honey tree group A,415:5-15:40:dp:Honey tree group B,415:5-15:20:t:Honey tree group B,415:5-15:20:dp:Honey tree group A,415:5-15:40:t:Honey tree group A,420:5-15:20:dpt:Honey tree group B,420:5-15:5:dp:Honey tree group A,420:5-15:10:t:Honey tree group A,446:5-15:100:dpt:Honey tree group C
Sendoff Spring|dpt|walk|42:38:10:t:Night,55:53-54:20:dp:,75:37-38:25:t:,75:39:10:t:Morning,75:39:10:t:Day,164:53-54:20:dp:Night,337:52:8:dp:Sapphire in DS slot 2,337:39-40:8:t:Sapphire in DS slot 2,338:52:8:dp:Ruby in DS slot 2,338:39-40:8:t:Ruby in DS slot 2,356:39:10:t:Night,356:40:5:t:,356:40:4:t:Emerald in DS slot 2,356:40:4:t:FireRed in DS slot 2,356:40:4:t:LeafGreen in DS slot 2,358:52-54:10:dp:,397:53-54:20:dp:Morning,397:38:10:t:Morning,397:53-54:20:dp:Day,397:38:10:t:Day,397:52:5:dp:,397:40:10:t:,397:52:4:dp:Emerald in DS slot 2,397:52:4:dp:FireRed in DS slot 2,397:52:4:dp:LeafGreen in DS slot 2,400:52-54:45:dp:,400:37-38:30:t:,400:52:4:dp:Emerald in DS slot 2,400:52:4:dp:FireRed in DS slot 2,400:52:4:dp:LeafGreen in DS slot 2,433:37-39:10:t:,433:39:4:t:Emerald in DS slot 2,433:39:4:t:FireRed in DS slot 2,433:39:4:t:LeafGreen in DS slot 2
Sendoff Spring|dpt|surf|55:40-55:100:dp:,55:20-40:100:t:
Sendoff Spring|dpt|good-rod|118:10-25:45:dpt:,129:10-25:55:dpt:
Sendoff Spring|dpt|super-rod|119:20-50:45:dp:,119:30-55:45:t:,130:30-55:55:dpt:
Sendoff Spring|dpt|old-rod|129:3-10:100:dp:,129:3-15:100:t:
Flower Paradise|dpt|static|492:30::dpt:
Maniac Tunnel|dpt|walk|74:24:80:dp:,74:23-25:80:t:,449:22-25:20:dp:,449:24-26:20:t:
Newmoon Island|dpt|static|491:40::dp:,491:50::t:
Hall of Origin|dpt|static|493:80::dpt:
Distortion World|t|static|487:47::t:
Roaming Sinnoh|dpt|roam|144:60::t:Story  oak eterna city,145:60::t:Story  oak eterna city,146:60::t:Story  oak eterna city,481:50::dpt:Story  beat galactic coronet,488:50::dpt:Story  cure eldritch nightmares
`
});
