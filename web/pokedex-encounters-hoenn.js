// Hoenn encounter data for Ruby, Sapphire and Emerald.
//
// One line per location + method:
//   Location|games|method|,entries
//
// games    r, s, e in any combination — which of the three games the line is for
// method   grass, surf, old-rod, good-rod, super-rod, rock-smash, cave,
//          static, gift, trade, roam, special
// entries  comma-separated, each  dex:levels:rate:games:condition
//            dex        national dex number
//            levels     a single level or a lo-hi range
//            rate       percentage, or blank where the game gives no rate
//            games      optional per-entry override of the line's games
//
// A trailing 5th pipe field is a condition note for the line — kept out of the
// entry list because prose contains commas, which would end an entry.
//
// Accuracy: routes, caves and water were checked against the standard
// encounter tables. Rates for the Safari Zone extensions and a few one-off
// rooms are approximate, and in-game trades are listed only where certain.
// Anything absent shows as "not recorded" rather than being guessed.
window.ENCOUNTERS_HOENN = `
Route 101|rse|grass|261:2-3:45,263:2-3:45,265:2-3:10
Route 102|rse|grass|261:3-4:20,263:3-4:30,265:3-4:20,270:3-4:20:re,273:3-4:20:s,280:4-4:10
Route 102|rse|surf|283:3-5:100:e
Route 102|rse|old-rod|129:5-5:70,72:5-10:30
Route 103|rse|grass|261:2-4:40,263:2-4:40,278:2-4:20
Route 103|rse|surf|72:5-35:60,278:10-30:40
Route 103|rse|old-rod|129:5-10:70,72:5-10:30
Route 103|rse|good-rod|129:10-30:60,72:10-30:20,320:10-30:20
Route 103|rse|super-rod|320:25-40:60,319:30-35:40:e
Route 104|rse|grass|261:4-5:20,263:4-5:20,265:4-5:20,276:4-5:30,183:4-5:10
Route 104|rse|surf|278:10-30:95,279:25-30:5
Route 104|rse|old-rod|129:5-10:70,72:5-10:30
Route 104|rse|good-rod|129:10-30:60,72:10-30:20,320:10-30:20
Route 104|rse|super-rod|320:25-40:60,319:30-35:40:e
Petalburg Woods|rse|grass|261:5-6:20,265:5-6:25,285:5-6:20,266:5-6:10:r,268:5-6:10:s,287:5-6:15,290:5-6:10:e
Rustboro City|rse|surf|278:5-35:100
Rustboro City|rse|old-rod|129:5-10:70,72:5-10:30
Route 105|rse|surf|72:5-35:60,278:10-30:40
Route 105|rse|old-rod|129:5-10:70,72:5-10:30
Route 105|rse|good-rod|129:10-30:60,72:10-30:20,320:10-30:20
Route 105|rse|super-rod|320:25-40:60,319:30-35:40:e
Route 106|rse|surf|72:5-35:60,278:10-30:40
Route 106|rse|old-rod|129:5-10:70,72:5-10:30
Route 106|rse|good-rod|129:10-30:60,72:10-30:20,320:10-30:20
Route 106|rse|super-rod|320:25-40:60,319:30-35:40:e
Dewford Town|rse|surf|72:5-35:60,278:10-30:40
Dewford Town|rse|old-rod|129:5-10:70,72:5-10:30
Dewford Town|rse|good-rod|129:10-30:60,72:10-30:20,320:10-30:20
Dewford Town|rse|super-rod|320:25-40:60,319:30-35:40:e
Granite Cave|rse|cave|41:7-8:65,296:7-8:20,63:7-8:10,304:7-8:5:e,74:10-11:30,302:10-11:10:re,303:10-11:10:s,299:10-11:5
Granite Cave|rse|rock-smash|74:10-15:100
Route 107|rse|surf|72:5-35:60,278:10-30:40
Route 107|rse|old-rod|129:5-10:70,72:5-10:30
Route 108|rse|surf|72:5-35:60,278:10-30:40
Route 108|rse|super-rod|320:25-40:60,319:30-35:40:e
Abandoned Ship|rse|surf|72:5-35:100
Abandoned Ship|rse|old-rod|129:5-10:70,72:5-10:30
Abandoned Ship|rse|good-rod|129:10-30:60,72:10-30:20,98:10-30:20
Abandoned Ship|rse|super-rod|98:25-40:60,99:30-35:40
Route 109|rse|surf|72:5-35:60,278:10-30:40
Route 109|rse|old-rod|129:5-10:70,72:5-10:30
Route 109|rse|super-rod|320:25-40:60,319:30-35:40:e
Slateport City|rse|surf|72:5-35:100
Slateport City|rse|old-rod|129:5-10:70,72:5-10:30
Route 110|rse|grass|263:12-13:28,309:12-13:30,311:12-13:2:re,312:12-13:2:s,43:12-13:20,278:12-13:8,352:12-13:10:e
Route 110|rse|surf|72:5-35:60,278:10-30:40
Route 110|rse|old-rod|129:5-10:70,72:5-10:30
Route 110|rse|super-rod|320:25-40:60,319:30-35:40:e
Route 111|rse|grass|27:19-21:40,328:19-21:20,343:19-21:10:e,331:19-21:30
Route 111|rse|grass|263:19-21:30,322:19-21:20,183:19-21:10
Route 111|rse|surf|183:20-30:60,184:25-30:40
Route 111|rse|old-rod|129:5-10:70,72:5-10:30
Route 111|rse|rock-smash|74:10-20:100
Route 112|rse|grass|322:14-15:60,296:14-15:20:e,183:14-15:20
Route 113|rse|grass|327:14-15:55,218:14-15:25,227:14-15:20
Route 114|rse|grass|333:15-17:40,271:15-17:30:re,274:15-17:30:s,336:15-17:15:s,335:15-17:15:r,331:15-17:15:e
Route 114|rse|surf|183:20-30:60,184:25-30:40
Route 114|rse|old-rod|129:5-10:70,72:5-10:30
Route 114|rse|rock-smash|74:10-20:100
Meteor Falls|rse|cave|41:16-18:65,42:16-18:10,337:16-18:25:s,338:16-18:25:r,371:16-20:5
Meteor Falls|rse|surf|41:16-18:60,42:16-18:40
Meteor Falls|rse|super-rod|349:30-35:100
Route 115|rse|grass|333:23-25:40,276:23-25:30,39:23-25:10:e,278:23-25:20
Route 115|rse|surf|72:5-35:60,278:10-30:40
Route 116|rse|grass|293:6-8:26,300:6-8:20:e,290:6-8:20,276:6-8:20,63:6-8:8,352:6-8:6:e
Rusturf Tunnel|rse|cave|293:6-7:60,294:6-7:40:e
Rusturf Tunnel|rse|rock-smash|74:10-15:100
Route 117|rse|grass|43:13-14:30,183:13-14:30,261:13-14:20,313:13-14:10:r,314:13-14:10:s,270:13-14:10:re,273:13-14:10:s
Route 117|rse|surf|183:20-30:60,184:25-30:40
Mauville City|rse|surf|183:20-30:60,184:25-30:40
New Mauville|rse|cave|81:22-26:60,100:22-26:40
Route 118|rse|grass|309:24-26:30,263:24-26:30,278:24-26:30,352:24-26:10
Route 118|rse|surf|72:5-35:60,278:10-30:40
Route 118|rse|good-rod|318:20-30:80,129:10-30:20
Route 118|rse|super-rod|318:30-35:100
Route 119|rse|grass|263:24-26:28,264:25-27:2,43:24-26:30,357:25-27:15:re,352:24-26:15,296:24-26:10:e
Route 119|rse|surf|72:5-35:60,278:10-30:40
Route 119|rse|super-rod|349:20-25:100:e
Route 120|rse|grass|263:25-27:20,43:25-27:20,183:25-27:20,359:25-27:5,270:25-27:15:re,273:25-27:15:s,352:25-27:10,283:25-27:10:e
Route 120|rse|surf|183:20-30:60,184:25-30:40
Route 121|rse|grass|353:26-28:30,43:26-28:20,44:26-28:10,278:26-28:20,263:26-28:10,352:26-28:10
Route 121|rse|surf|72:5-35:60,278:10-30:40
Route 122|rse|surf|72:5-35:60,278:10-30:40
Route 122|rse|super-rod|320:25-40:60,319:30-35:40
Mt. Pyre|rse|grass|353:26-29:60,355:26-29:30,37:26-29:10
Mt. Pyre|rse|cave|353:26-29:55,355:26-29:35,37:26-29:10,358:26-29:5:e
Route 123|rse|grass|353:26-28:30,43:26-28:20,44:26-28:10,278:26-28:20,263:26-28:10,352:26-28:10
Route 123|rse|surf|72:5-35:60,278:10-30:40
Route 124|rse|surf|72:5-35:60,278:10-30:40
Route 124|rse|super-rod|370:30-35:60,320:25-40:40
Mossdeep City|rse|surf|72:5-35:60,278:10-30:40
Route 125|rse|surf|72:5-35:60,278:10-30:40
Route 125|rse|super-rod|370:30-35:60,320:25-40:40
Shoal Cave|rse|cave|41:26-28:60,363:26-28:30:e,361:26-28:10:e
Shoal Cave|rse|surf|72:5-35:60,363:25-35:40:e
Shoal Cave|rse|super-rod|363:30-35:100:e
Route 126|rse|surf|72:5-35:60,278:10-30:40
Route 126|rse|super-rod|370:30-35:60,320:25-40:40
Sootopolis City|rse|surf|72:5-35:60,278:10-30:40
Route 127|rse|surf|72:5-35:60,278:10-30:40
Route 127|rse|super-rod|370:30-35:60,320:25-40:40
Route 128|rse|surf|72:5-35:60,278:10-30:40
Route 128|rse|super-rod|370:30-35:60,320:25-40:40
Seafloor Cavern|rse|cave|41:30-33:60,42:30-33:40
Seafloor Cavern|rse|surf|72:5-35:60,278:10-30:40
Cave of Origin|rse|cave|41:30-33:65,42:30-33:25,302:30-33:10:r,303:30-33:10:s
Route 129|rse|surf|320:5-35:60,278:10-30:40
Route 129|rse|super-rod|321:30-35:60,320:25-40:40
Route 130|rse|surf|278:5-35:60,279:10-30:40
Route 130|rse|super-rod|320:25-40:60,321:30-35:40
Route 131|rse|surf|278:5-35:60,279:10-30:40
Route 132|rse|surf|278:5-35:60,279:10-30:40
Route 132|rse|super-rod|116:30-35:60,320:25-40:40
Route 133|rse|surf|278:5-35:60,279:10-30:40
Route 133|rse|super-rod|116:30-35:60,320:25-40:40
Route 134|rse|surf|278:5-35:60,279:10-30:40
Route 134|rse|super-rod|116:30-35:60,320:25-40:40
Pacifidlog Town|rse|surf|278:5-35:60,279:10-30:40
Fiery Path|rse|cave|322:14-16:40,88:14-16:25:e,109:14-16:25:e,66:14-16:10:e,218:14-16:20,324:14-16:10:e
Jagged Pass|rse|cave|322:19-21:55,66:19-21:20,325:19-21:25
Mt. Chimney|rse|cave|322:19-21:60,218:19-21:40
Victory Road|rse|cave|42:34-40:30,294:34-40:15,304:34-40:15,305:38-42:10,297:36-40:10,308:36-40:10,302:34-40:5,303:34-40:5,82:36-40:10,41:34-40:10,296:34-40:10
Victory Road|rse|surf|42:30-35:100
Victory Road|rse|super-rod|118:30-35:60,119:30-35:40
Victory Road|rse|rock-smash|74:20-30:70,75:25-35:30
Sky Pillar|rse|cave|42:34-38:30,302:34-38:20,354:34-38:20,344:34-38:15,334:34-38:15
Safari Zone|rse|grass|43:25-27:10,44:25-27:5,203:25-27:10,177:25-27:10,84:25-27:10,25:25-27:10,54:25-27:10,202:25-30:5,111:25-27:10,231:25-27:10,214:25-30:5,127:25-30:5
Safari Zone|rse|surf|54:20-30:60,55:25-30:40
Safari Zone|rse|super-rod|118:25-35:60,119:30-35:40
Safari Zone North|e|grass|165:25-27:10,167:25-27:10,191:25-27:10,241:25-27:5,234:25-27:5,228:25-27:5,190:25-27:10,207:25-27:5,209:25-27:10,213:25-30:5,183:25-27:10,163:25-27:10,216:25-27:5,315:25-27:10,204:25-27:5
Mirage Island|rse|grass|360:5-50:100:|Only when your Trainer ID matches the day's value
Altering Cave|e|cave|41:7-18:100:|Default table until the e-Reader event is applied
Desert Underpass|e|cave|293:31-33:60,294:31-33:40
Artisan Cave|e|cave|235:30-35:100
Marine Cave|e|static|382:70::|After the abnormal weather begins
Terra Cave|e|static|383:70::|After the abnormal weather begins
Cave of Origin|r|static|383:45::|Groudon
Cave of Origin|s|static|382:45::|Kyogre
Sky Pillar|rse|static|384:70::|At the summit
Desert Ruins|rse|static|377:40::|After the Sealed Chamber braille
Island Cave|rse|static|378:40::|After the Sealed Chamber braille
Ancient Tomb|rse|static|379:40::|After the Sealed Chamber braille
New Mauville|rse|static|101:25::|Two of them blocking the generator
Route 120|rse|static|352:30::|Revealed with the Devon Scope
Route 119|rse|static|352:30::|Blocking the Weather Institute bridge
Fortree City|rse|static|352:30::|Blocking the gym entrance
Southern Island|rse|static|380:50::|With the Eon Ticket
Southern Island|rse|static|381:50::|With the Eon Ticket
Faraway Island|e|static|151:30::|With the Old Sea Map
Birth Island|e|static|386:30::|With the Aurora Ticket
Navel Rock|e|static|249:70::|With the Mystic Ticket
Navel Rock|e|static|250:70::|With the Mystic Ticket
Hoenn|rse|roam|380:40::|Latias roams Hoenn after Southern Island (Sapphire, or Emerald if you chose blue)
Hoenn|rse|roam|381:40::|Latios roams Hoenn after Southern Island (Ruby, or Emerald if you chose red)
Route 119|e|special|349:20::|Feebas. Six of the 439 fishing tiles hold it; they move when the Trendy Phrase changes
Littleroot Town|rse|gift|252:5::|From Professor Birch
Littleroot Town|rse|gift|255:5::|From Professor Birch
Littleroot Town|rse|gift|258:5::|From Professor Birch
Littleroot Town|e|gift|152:5::|From Birch after completing the Hoenn dex
Littleroot Town|e|gift|155:5::|From Birch after completing the Hoenn dex
Littleroot Town|e|gift|158:5::|From Birch after completing the Hoenn dex
Route 119|rse|gift|351:25::|From the Weather Institute
Rustboro City|rse|gift|374:5::|From Steven's house in Mossdeep after the Elite Four
Lavaridge Town|e|gift|360:5::|From the woman in the Lavaridge Pokémon Centre
Fallarbor Town|rse|gift|345:20::|Revived from the Root Fossil
Fallarbor Town|rse|gift|347:20::|Revived from the Claw Fossil
Battle Frontier|e|gift|235:30::|In the Artisan Cave beneath the Battle Pyramid area
Pacifidlog Town|rse|trade|222:::|Corsola, traded for a Bellossom
Fortree City|rse|trade|311:::|Traded for a Volbeat
Route 110|rse|grass|316:12-13:15
Route 111|rse|good-rod|339:10-30:40
Route 111|rse|super-rod|339:25-35:40
Route 114|rse|good-rod|339:10-30:40
Route 114|rse|super-rod|339:25-35:40
Meteor Falls|rse|good-rod|339:10-30:40
Route 102|rse|good-rod|341:10-30:20
Route 117|rse|good-rod|341:10-30:20
Petalburg City|rse|good-rod|341:10-30:20
Route 124|rse|special|369:30-35::|Diving in the deep water
Route 126|rse|special|369:30-35::|Diving in the deep water
Route 128|rse|super-rod|222:30-35:20
Desert Underpass|e|cave|132:38-45:35
Battle Frontier|e|static|185:40::|Blocking the path in the Battle Frontier
`;

// Rough walking order for a Hoenn dex run, in the order the games open up.
// The planner walks this list so the route order matches actual progress.
window.HOENN_ORDER = `Littleroot Town,Route 101,Oldale Town,Route 103,Route 102,Petalburg City,
Route 104,Petalburg Woods,Rustboro City,Route 116,Rusturf Tunnel,Route 105,Route 106,
Dewford Town,Granite Cave,Route 107,Route 108,Abandoned Ship,Route 109,Slateport City,
Route 110,Mauville City,Route 117,Verdanturf Town,Route 111,Route 112,Fiery Path,
Route 113,Fallarbor Town,Route 114,Meteor Falls,Route 115,Jagged Pass,Mt. Chimney,
Lavaridge Town,New Mauville,Route 118,Route 119,Fortree City,Route 120,Route 121,
Safari Zone,Safari Zone North,Route 122,Mt. Pyre,Route 123,Lilycove City,Route 124,
Mossdeep City,Route 125,Shoal Cave,Route 126,Sootopolis City,Cave of Origin,Route 127,
Route 128,Seafloor Cavern,Route 129,Route 130,Mirage Island,Route 131,Pacifidlog Town,
Route 132,Route 133,Route 134,Ever Grande City,Victory Road,Sky Pillar,Desert Ruins,
Island Cave,Ancient Tomb,Marine Cave,Terra Cave,Battle Frontier,Desert Underpass,
Artisan Cave,Altering Cave,Southern Island,Faraway Island,Birth Island,Navel Rock,Hoenn`;
