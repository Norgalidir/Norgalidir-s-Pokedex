// Encounter data for X, Y, Omega Ruby and Alpha Sapphire, generated from PokéAPI.
// Same line format as pokedex-encounters-hoenn.js:
//   Location|games|method|dex:levels:rate:games:condition, ...
// Game codes: b Black, w White, B Black 2, W White 2, x X, y Y,
// o Omega Ruby, a Alpha Sapphire, u Sun, m Moon, U Ultra Sun, M Ultra Moon,
// P Let's Go Pikachu, V Let's Go Eevee, S Sword, H Shield.
// Rates are summed slot chances for that game and condition. Max Raid dens
// list the star range instead of a rate.
window.ENCOUNTERS_MORE = Object.assign(window.ENCOUNTERS_MORE || {}, {
  kalos: `
Ambrette Town|xy|good-rod|116:25:35:xy:,690:25:65:y:,692:25:65:x:
Ambrette Town|xy|old-rod|370:15:100:xy:
Ambrette Town|xy|rock-smash|557:18-20:66:x:,557:13-15:66:y:,688:18-20:34:x:,688:13-15:34:y:
Ambrette Town|xy|super-rod|117:35:5:xy:,369:35:60:xy:,691:35:35:y:,693:35:35:x:
Ambrette Town|xy|surf|72:25-27:69:xy:,320:25-27:31:xy:
Aquacorde Town|xy|gift|650:5::xy:,653:5::xy:,656:5::xy:
Azure Bay|xy|good-rod|170:25:35:xy:,223:25:65:xy:
Azure Bay|xy|horde|79:13:35:xy:,102:14:5:xy:,278:13:60:xy:
Azure Bay|xy|old-rod|370:15:100:xy:
Azure Bay|xy|rock-smash|557:23-25:66:xy:,688:23-25:34:xy:
Azure Bay|xy|super-rod|171:35:5:xy:,224:35:35:xy:,594:35:60:xy:
Azure Bay|xy|surf|72:25-27:84:xy:,131:27:1:xy:,458:27:15:xy:
Azure Bay|xy|walk|79:25-27:40:xy:,102:26:10:xy:,441:25-27:35:xy:,686:26-27:15:xy:
Connecting Cave|xy|horde|41:8:35:xy:,293:7:60:xy:,610:8:5:xy:
Connecting Cave|xy|walk|41:13-15:30:xy:,293:13-15:30:xy:,307:13-15:30:xy:,610:13-15:10:xy:
Couriway Town|xy|good-rod|61:35:35:xy:,550:35:65:xy:
Couriway Town|xy|old-rod|60:25:100:xy:
Couriway Town|xy|super-rod|61:45:65:xy:,550:45:35:xy:
Couriway Town|xy|surf|271:44-46:66:xy:,419:44-46:34:xy:
Cyllage City|xy|good-rod|116:25:35:xy:,690:25:65:y:,692:25:65:x:
Cyllage City|xy|old-rod|370:15:100:xy:
Cyllage City|xy|rock-smash|95:15-17:35:x:,557:15-17:65:x:,557:13-15:66:y:,688:13-15:34:y:
Cyllage City|xy|super-rod|117:35:5:xy:,369:35:60:xy:,691:35:35:y:,693:35:35:x:
Cyllage City|xy|surf|72:25-27:69:xy:,320:25-27:31:xy:
Friend Safari (Dark)|xy|walk|215:30:33:xy:Friend Safari slot 2,262:30:33:xy:Friend Safari slot 1,274:30:33:xy:Friend Safari slot 1,302:30:33:xy:Friend Safari slot 3,332:30:33:xy:Friend Safari slot 2,342:30:33:xy:Friend Safari slot 2,359:30:33:xy:Friend Safari slot 3,510:30:33:xy:Friend Safari slot 3,551:30:33:xy:Friend Safari slot 2,624:30:33:xy:Friend Safari slot 1,629:30:33:xy:Friend Safari slot 1,686:30:33:xy:Friend Safari slot 3
Friend Safari (Dragon)|xy|walk|148:30:33:xy:Friend Safari slot 2,372:30:33:xy:Friend Safari slot 2,444:30:33:xy:Friend Safari slot 1,611:30:33:xy:Friend Safari slot 1,621:30:33:xy:Friend Safari slot 3,705:30:33:xy:Friend Safari slot 3,714:30:33:xy:Friend Safari slot 2
Friend Safari (Electric)|xy|walk|25:30:33:xy:Friend Safari slot 2,101:30:33:xy:Friend Safari slot 1,125:30:33:xy:Friend Safari slot 2,310:30:33:xy:Friend Safari slot 3,404:30:33:xy:Friend Safari slot 3,417:30:33:xy:Friend Safari slot 1,523:30:33:xy:Friend Safari slot 3,587:30:33:xy:Friend Safari slot 1,596:30:33:xy:Friend Safari slot 3,618:30:33:xy:Friend Safari slot 2,694:30:33:xy:Friend Safari slot 2,702:30:33:xy:Friend Safari slot 1
Friend Safari (Fairy)|xy|walk|35:30:33:xy:Friend Safari slot 3,39:30:33:xy:Friend Safari slot 2,175:30:33:xy:Friend Safari slot 1,209:30:33:xy:Friend Safari slot 1,281:30:33:xy:Friend Safari slot 1,303:30:33:xy:Friend Safari slot 2,670:30:33:xy:Friend Safari slot 3,682:30:33:xy:Friend Safari slot 2,684:30:33:xy:Friend Safari slot 2,702:30:33:xy:Friend Safari slot 1
Friend Safari (Fighting)|xy|walk|56:30:33:xy:Friend Safari slot 1,67:30:33:xy:Friend Safari slot 1,236:30:33:xy:Friend Safari slot 3,286:30:33:xy:Friend Safari slot 3,297:30:33:xy:Friend Safari slot 3,307:30:33:xy:Friend Safari slot 1,447:30:33:xy:Friend Safari slot 3,538:30:33:xy:Friend Safari slot 2,539:30:33:xy:Friend Safari slot 2,619:30:33:xy:Friend Safari slot 1,674:30:33:xy:Friend Safari slot 2
Friend Safari (Fire)|xy|walk|5:30:33:xy:Friend Safari slot 2,38:30:33:xy:Friend Safari slot 3,58:30:33:xy:Friend Safari slot 1,77:30:33:xy:Friend Safari slot 1,126:30:33:xy:Friend Safari slot 1,218:30:33:xy:Friend Safari slot 2,513:30:33:xy:Friend Safari slot 1,636:30:33:xy:Friend Safari slot 2,654:30:33:xy:Friend Safari slot 3,662:30:33:xy:Friend Safari slot 3,668:30:33:xy:Friend Safari slot 2
Friend Safari (Flying)|xy|walk|16:30:33:xy:Friend Safari slot 1,21:30:33:xy:Friend Safari slot 1,83:30:33:xy:Friend Safari slot 1,84:30:33:xy:Friend Safari slot 1,163:30:33:xy:Friend Safari slot 2,357:30:33:xy:Friend Safari slot 3,520:30:33:xy:Friend Safari slot 2,527:30:33:xy:Friend Safari slot 2,581:30:33:xy:Friend Safari slot 2,627:30:33:xy:Friend Safari slot 3,662:30:33:xy:Friend Safari slot 3,701:30:33:xy:Friend Safari slot 3
Friend Safari (Ghost)|xy|walk|353:30:33:xy:Friend Safari slot 1,356:30:33:xy:Friend Safari slot 3,426:30:33:xy:Friend Safari slot 3,442:30:33:xy:Friend Safari slot 3,608:30:33:xy:Friend Safari slot 1,623:30:33:xy:Friend Safari slot 3,708:30:33:xy:Friend Safari slot 2,710:30:33:xy:Friend Safari slot 2
Friend Safari (Grass)|xy|walk|2:30:33:xy:Friend Safari slot 2,43:30:33:xy:Friend Safari slot 1,114:30:33:xy:Friend Safari slot 1,191:30:33:xy:Friend Safari slot 1,511:30:33:xy:Friend Safari slot 1,541:30:33:xy:Friend Safari slot 2,548:30:33:xy:Friend Safari slot 2,556:30:33:xy:Friend Safari slot 3,586:30:33:xy:Friend Safari slot 2,651:30:33:xy:Friend Safari slot 3,673:30:33:xy:Friend Safari slot 3
Friend Safari (Ground)|xy|walk|27:30:33:xy:Friend Safari slot 1,51:30:33:xy:Friend Safari slot 2,105:30:33:xy:Friend Safari slot 2,194:30:33:xy:Friend Safari slot 1,231:30:33:xy:Friend Safari slot 1,290:30:33:xy:Friend Safari slot 2,323:30:33:xy:Friend Safari slot 2,328:30:33:xy:Friend Safari slot 1,423:30:33:xy:Friend Safari slot 3,536:30:33:xy:Friend Safari slot 3,660:30:33:xy:Friend Safari slot 3
Friend Safari (Normal)|xy|walk|113:30:33:xy:Friend Safari slot 3,132:30:33:xy:Friend Safari slot 3,133:30:33:xy:Friend Safari slot 3,190:30:33:xy:Friend Safari slot 1,206:30:33:xy:Friend Safari slot 1,216:30:33:xy:Friend Safari slot 1,235:30:33:xy:Friend Safari slot 3,294:30:33:xy:Friend Safari slot 2,352:30:33:xy:Friend Safari slot 2,506:30:33:xy:Friend Safari slot 1,531:30:33:xy:Friend Safari slot 2,572:30:33:xy:Friend Safari slot 2
Friend Safari (Poison)|xy|walk|14:30:33:xy:Friend Safari slot 1,44:30:33:xy:Friend Safari slot 1,49:30:33:xy:Friend Safari slot 2,89:30:33:xy:Friend Safari slot 3,168:30:33:xy:Friend Safari slot 2,268:30:33:xy:Friend Safari slot 1,317:30:33:xy:Friend Safari slot 2,336:30:33:xy:Friend Safari slot 1,452:30:33:xy:Friend Safari slot 3,454:30:33:xy:Friend Safari slot 3,544:30:33:xy:Friend Safari slot 3,569:30:33:xy:Friend Safari slot 2
Friend Safari (Psychic)|xy|walk|63:30:33:xy:Friend Safari slot 1,96:30:33:xy:Friend Safari slot 1,178:30:33:xy:Friend Safari slot 3,202:30:33:xy:Friend Safari slot 2,203:30:33:xy:Friend Safari slot 3,326:30:33:xy:Friend Safari slot 1,517:30:33:xy:Friend Safari slot 1,561:30:33:xy:Friend Safari slot 2,575:30:33:xy:Friend Safari slot 3,578:30:33:xy:Friend Safari slot 3,677:30:33:xy:Friend Safari slot 2
Friend Safari (Rock)|xy|walk|95:30:33:xy:Friend Safari slot 2,112:30:33:xy:Friend Safari slot 3,213:30:33:xy:Friend Safari slot 3,219:30:33:xy:Friend Safari slot 2,222:30:33:xy:Friend Safari slot 2,247:30:33:xy:Friend Safari slot 2,299:30:33:xy:Friend Safari slot 1,525:30:33:xy:Friend Safari slot 1,557:30:33:xy:Friend Safari slot 1,689:30:33:xy:Friend Safari slot 3
Friend Safari (Steel)|xy|walk|82:30:33:xy:Friend Safari slot 1,205:30:33:xy:Friend Safari slot 2,227:30:33:xy:Friend Safari slot 2,303:30:33:xy:Friend Safari slot 1,375:30:33:xy:Friend Safari slot 2,437:30:33:xy:Friend Safari slot 3,530:30:33:xy:Friend Safari slot 3,597:30:33:xy:Friend Safari slot 1,600:30:33:xy:Friend Safari slot 2,707:30:33:xy:Friend Safari slot 3
Friend Safari (Water)|xy|walk|8:30:33:xy:Friend Safari slot 2,61:30:33:xy:Friend Safari slot 3,98:30:33:xy:Friend Safari slot 1,130:30:33:xy:Friend Safari slot 2,184:30:33:xy:Friend Safari slot 3,195:30:33:xy:Friend Safari slot 2,224:30:33:xy:Friend Safari slot 1,400:30:33:xy:Friend Safari slot 1,419:30:33:xy:Friend Safari slot 2,515:30:33:xy:Friend Safari slot 1,657:30:33:xy:Friend Safari slot 3
Friend Safari|xy|walk|12:30:33:xy:Friend Safari slot 1,46:30:33:xy:Friend Safari slot 1,49:30:33:xy:Friend Safari slot 3,87:30:33:xy:Friend Safari slot 3,91:30:33:xy:Friend Safari slot 3,127:30:33:xy:Friend Safari slot 3,131:30:33:xy:Friend Safari slot 3,165:30:33:xy:Friend Safari slot 1,214:30:33:xy:Friend Safari slot 3,215:30:33:xy:Friend Safari slot 2,221:30:33:xy:Friend Safari slot 3,225:30:33:xy:Friend Safari slot 1,267:30:33:xy:Friend Safari slot 2,284:30:33:xy:Friend Safari slot 2,313:30:33:xy:Friend Safari slot 2,314:30:33:xy:Friend Safari slot 2,361:30:33:xy:Friend Safari slot 1,363:30:33:xy:Friend Safari slot 1,415:30:33:xy:Friend Safari slot 1,459:30:33:xy:Friend Safari slot 1,614:30:33:xy:Friend Safari slot 2,666:30:33:xy:Friend Safari slot 3,712:30:33:xy:Friend Safari slot 2
Frost Cavern (unknown area 313)|xy|good-rod|61:30:35:xy:,550:30:65:xy:
Frost Cavern (unknown area 313)|xy|horde|238:21:5:xy:,582:20:60:xy:,613:20:35:xy:
Frost Cavern (unknown area 313)|xy|old-rod|60:20:100:xy:
Frost Cavern (unknown area 313)|xy|super-rod|61:40:65:xy:,550:40:35:xy:
Frost Cavern (unknown area 313)|xy|surf|61:38-40:66:xy:,419:38-40:34:xy:
Frost Cavern (unknown area 314)|xy|horde|238:21:5:xy:,582:20:60:xy:,613:20:35:xy:
Frost Cavern (unknown area 314)|xy|walk|93:38-40:16:xy:,124:39-40:20:xy:,221:38-39:20:xy:,614:39-40:20:xy:,615:40:4:xy:,712:39-40:20:xy:
Frost Cavern (unknown area 315)|xy|good-rod|61:30:35:xy:,550:30:65:xy:
Frost Cavern (unknown area 315)|xy|horde|238:21:5:xy:,582:20:60:xy:,613:20:35:xy:
Frost Cavern (unknown area 315)|xy|old-rod|60:20:100:xy:
Frost Cavern (unknown area 315)|xy|super-rod|61:40:65:xy:,550:40:35:xy:
Frost Cavern (unknown area 315)|xy|surf|61:38-40:66:xy:,419:38-40:34:xy:
Frost Cavern (unknown area 315)|xy|walk|93:38-40:16:x:,93:38-40:20:y:,124:39-40:20:xy:,221:38-39:20:xy:,614:39-40:20:xy:,615:40:4:x:,712:39-40:20:xy:
Frost Cavern (unknown area 316)|xy|horde|238:21:5:xy:,582:20:60:xy:,613:20:35:xy:
Frost Cavern (unknown area 316)|xy|walk|93:38-40:16:xy:,124:39-40:20:xy:,221:38-39:20:xy:,614:39-40:20:xy:,615:40:4:xy:,712:39-40:20:xy:
Frost Cavern (unknown area 317)|xy|horde|238:21:5:xy:,582:20:60:xy:,613:20:35:xy:
Frost Cavern (unknown area 317)|xy|walk|93:38-40:16:xy:,124:39-40:20:xy:,221:38-39:20:xy:,614:39-40:20:xy:,615:40:4:xy:,712:39-40:20:xy:
Glittering Cave (unknown area 303)|xy|ceiling-ambush|527:15-17:85:xy:,597:15-17:15:xy:
Glittering Cave (unknown area 303)|xy|gift|696:20::xy:,698:20::xy:
Glittering Cave (unknown area 303)|xy|walk|66:15-17:30:xy:,95:17:10:xy:,104:15-16:20:xy:,111:17:10:xy:,115:17:5:xy:,303:15-16:5:xy:,337:17:10:xy:,338:17:10:xy:
Glittering Cave (unknown area 304)|xy|ceiling-ambush|527:15-17:85:xy:,597:15-17:15:xy:
Glittering Cave (unknown area 304)|xy|rock-smash|95:15-17:35:xy:,557:15-17:65:xy:
Kalos (Roaming) Roaming Kalos|xy|static|144:70::xy:If you chose Chespin,145:70::xy:If you chose Fennekin,146:70::xy:If you chose Froakie
Laverre City|xy|good-rod|61:25:35:xy:,550:25:65:xy:
Laverre City|xy|old-rod|60:15:100:xy:
Laverre City|xy|super-rod|61:35:65:xy:,550:35:35:xy:
Lost Hotel|xy|trash-can-ambush|479:38:75:xy:Trash can Tuesdays,568:35:80:xy:Trash can daily,569:36-38:20:xy:Trash can daily
Lost Hotel|xy|walk|82:37-38:20:xy:,101:37-38:20:xy:,607:37-38:20:xy:,624:36-37:20:xy:,707:36-38:20:xy:
Lumiose City|xy|gift|1:10::xy:,4:10::xy:,7:10::xy:
Parfum Palace|xy|good-rod|118:25:65:xy:,341:25:35:xy:
Parfum Palace|xy|old-rod|129:15:100:xy:
Parfum Palace|xy|super-rod|119:35:35:xy:,130:35:60:xy:,342:35:5:xy:
Pokémon Village|xy|good-rod|61:40:35:xy:,550:40:65:xy:
Pokémon Village|xy|horde|60:25:35:xy:,271:25:5:xy:,590:25:60:xy:
Pokémon Village|xy|old-rod|60:30:100:xy:
Pokémon Village|xy|purple-flowers|39:48-49:20:xy:,132:50:10:xy:,164:48-50:30:xy:,571:48-50:10:xy:,575:50:10:xy:,591:49-50:20:xy:
Pokémon Village|xy|super-rod|61:50:65:xy:,550:50:35:xy:
Pokémon Village|xy|surf|61:48-50:34:xy:,271:48-50:66:xy:
Pokémon Village|xy|trash-can-ambush|354:46-50:100:xy:Trash can Thursdays,569:46-50:100:xy:Trash can daily
Pokémon Village|xy|yellow-flowers|39:50:10:xy:,132:48-49:20:xy:,164:50:10:xy:,571:48-50:10:xy:,575:48-50:30:xy:,591:49-50:20:xy:
Reflection Cave (unknown area 305)|xy|ceiling-ambush|527:21-23:85:xy:,597:21-23:15:xy:
Reflection Cave (unknown area 305)|xy|horde|439:11:60:xy:,524:11:40:xy:,703:11:5:xy:
Reflection Cave (unknown area 305)|xy|walk|122:22-23:20:xy:,202:22:10:xy:,302:22-23:5:xy:,433:21-22:15:xy:,524:21-22:20:xy:,577:22-23:20:xy:,703:23:10:xy:
Reflection Cave (unknown area 306)|xy|horde|439:11:60:xy:,524:11:40:xy:,703:11:5:xy:
Reflection Cave (unknown area 306)|xy|walk|122:22-23:20:xy:,202:22:10:xy:,302:22-23:5:xy:,433:21-22:15:xy:,524:21-22:20:xy:,577:22-23:20:xy:,703:23:10:xy:
Reflection Cave (unknown area 307)|xy|horde|439:11:60:xy:,524:11:40:xy:,703:11:5:xy:
Reflection Cave (unknown area 307)|xy|walk|122:22-23:20:xy:,202:22:10:xy:,302:22-23:5:xy:,433:21-22:15:xy:,524:21-22:20:xy:,577:22-23:20:xy:,703:23:10:xy:
Reflection Cave (unknown area 308)|xy|horde|439:11:60:xy:,524:11:40:xy:,703:11:5:xy:
Reflection Cave (unknown area 308)|xy|walk|122:22-23:20:xy:,202:22:10:xy:,302:22-23:5:xy:,433:21-22:15:xy:,524:21-22:20:xy:,577:22-23:20:xy:,703:23:10:xy:
Route 10|xy|horde|193:10:35:xy:,228:11:5:x:,299:10:60:xy:,309:11:5:y:
Route 10|xy|walk|133:21:5:xy:,209:21:10:xy:,228:21:10:x:,309:21:10:y:,561:19-20:20:xy:,587:19-20:5:xy:,622:19-21:30:xy:,701:19-20:20:xy:
Route 10|xy|yellow-flowers|133:19-20:20:xy:,209:19-21:30:xy:,228:19-20:20:x:,309:19-20:20:y:,561:21:10:xy:,587:19-20:5:xy:,622:21:10:xy:,701:21:5:xy:
Route 11|xy|horde|29:11:60:xy:,32:11:60:xy:,396:12:5:xy:,434:11:35:xy:
Route 11|xy|walk|30:21:5:xy:,33:21:10:xy:,297:22-23:20:xy:,397:22-23:20:xy:,433:21:10:xy:,434:21:10:xy:,538:22-23:20:y:,539:22-23:20:x:,702:21-22:5:xy:
Route 12|xy|gift|131:30::xy:
Route 12|xy|good-rod|223:25:65:xy:,366:25:35:xy:
Route 12|xy|horde|128:14:5:xy:,179:13:35:xy:,241:14:5:xy:,278:13:60:xy:
Route 12|xy|old-rod|370:15:100:xy:
Route 12|xy|rock-smash|557:23-25:66:xy:,688:23-25:34:xy:
Route 12|xy|super-rod|222:35:60:xy:,224:35:35:xy:,367:35:5:x:,368:35:5:y:
Route 12|xy|surf|72:25-27:84:xy:,131:27:1:xy:,458:27:15:xy:
Route 12|xy|walk|79:23-25:30:xy:,102:24:10:xy:,127:25:5:x:,128:25:10:xy:,214:25:5:y:,241:25:10:xy:,417:23-24:5:xy:,441:23-25:30:xy:
Route 12|xy|yellow-flowers|79:27:10:xy:,102:26:10:xy:,127:27:5:x:,128:25-27:30:xy:,214:27:5:y:,241:25-27:30:xy:,417:25-26:5:xy:,441:27:10:xy:
Route 13|xy|ground-ambush|51:26-28:40:xy:,328:26-28:40:xy:,443:26-28:20:xy:
Route 13|xy|rock-smash|75:26-28:66:xy:,218:26-28:34:xy:
Route 13|xy|rough-terrain|51:26-28:40:xy:,328:26-28:40:xy:,443:26-28:20:xy:
Route 14|xy|good-rod|61:35:35:xy:,339:25-35:65:xy:
Route 14|xy|horde|23:17:5:xy:,69:16:60:xy:,451:16:35:xy:
Route 14|xy|old-rod|60:15:100:xy:
Route 14|xy|rough-terrain|93:31:5:xy:,195:30-32:30:xy:,455:31-32:5:xy:,588:30:10:xy:,616:30:10:xy:,618:31-32:20:xy:,704:31-32:20:xy:
Route 14|xy|super-rod|61:35:65:xy:,340:35:35:xy:
Route 14|xy|surf|195:30:50:xy:,618:30-32:35:xy:,704:31:15:xy:
Route 14|xy|walk|70:31-32:20:xy:,93:31:5:xy:,195:30:10:xy:,451:30-31:20:xy:,455:30-32:15:xy:,588:30:10:xy:,616:30:10:xy:,704:30:10:xy:
Route 15|xy|good-rod|61:25:35:xy:,550:25:65:xy:
Route 15|xy|horde|198:18:60:xy:,590:18:35:xy:,707:19:5:xy:
Route 15|xy|old-rod|60:15:100:xy:
Route 15|xy|red-flowers|262:36:10:x:,451:36:10:xy:,505:34-36:30:xy:,510:36:10:y:,590:34-35:20:xy:,624:34-35:20:xy:,707:34-36:10:xy:
Route 15|xy|super-rod|61:35:65:xy:,550:35:35:xy:
Route 15|xy|surf|271:34-36:66:xy:,419:34-36:34:xy:
Route 15|xy|walk|262:34-36:30:x:,451:34-35:20:xy:,505:36:10:xy:,510:34-36:30:y:,590:34-35:20:xy:,624:36:10:xy:,707:34-36:10:xy:
Route 16|xy|good-rod|61:25:35:xy:,550:25:65:xy:
Route 16|xy|horde|198:18:60:xy:,590:18:35:xy:,707:19:5:xy:
Route 16|xy|old-rod|60:15:100:xy:
Route 16|xy|rough-terrain|590:34-36:20:xy:,707:34-35:9:xy:,708:35:10:xy:,710:34-36:61:xy:
Route 16|xy|super-rod|61:35:65:xy:,550:35:35:xy:
Route 16|xy|surf|271:34-36:66:xy:,419:34-36:34:xy:
Route 16|xy|yellow-flowers|70:35-36:20:xy:,419:35-36:20:xy:,451:34-35:20:xy:,590:34-36:20:xy:,707:34-36:10:xy:,708:35:10:xy:
Route 17|xy|rough-terrain|215:38-40:29:xy:,225:38-40:40:xy:,459:38-39:30:xy:,460:40:1:xy:
Route 18|xy|horde|74:23:60:xy:,631:23:5:xy:,632:23:40:xy:
Route 18|xy|red-flowers|28:44-45:20:xy:,75:45-46:15:xy:,247:44-46:30:y:,305:44-46:30:x:,324:46:10:xy:,533:46:10:xy:,631:45-46:5:xy:,632:44:10:xy:
Route 18|xy|rock-smash|75:44-46:95:xy:,213:44-46:5:xy:
Route 18|xy|rustling-bush-ambush|631:45:10:xy:,632:44-46:90:xy:
Route 18|xy|walk|28:46:10:xy:,75:45-46:15:xy:,247:46:10:y:,305:46:10:x:,324:44-45:20:xy:,533:44-46:30:xy:,631:45-46:5:xy:,632:44:10:xy:
Route 19|xy|good-rod|61:35:35:xy:,339:35:65:xy:
Route 19|xy|horde|24:25:5:xy:,70:24:60:xy:,207:24:35:xy:
Route 19|xy|old-rod|60:25:100:xy:
Route 19|xy|purple-flowers|70:46-47:20:xy:,93:47:5:xy:,195:48:10:xy:,452:46-48:30:xy:,455:46-48:5:xy:,588:47:10:xy:,616:47:10:xy:,705:48:10:xy:
Route 19|xy|rough-terrain|93:47:5:xy:,195:46-48:30:xy:,455:46-48:5:xy:,588:47:10:xy:,616:47:10:xy:,618:47-48:20:xy:,705:47-48:20:xy:
Route 19|xy|super-rod|61:45:60:xy:,186:50:5:xy:,340:45:35:xy:
Route 19|xy|surf|195:46:50:xy:,618:46-48:34:xy:,705:47-48:16:xy:
Route 19|xy|yellow-flowers|70:48:10:xy:,93:47:5:xy:,195:46-48:30:xy:,452:48:10:xy:,455:46-48:5:xy:,588:47:10:xy:,616:47:10:xy:,705:46-47:20:xy:
Route 20|xy|horde|185:25:5:xy:,590:25:60:xy:,709:25:40:xy:
Route 20|xy|red-flowers|39:50:10:xy:,164:50:10:xy:,571:48-50:5:xy:,575:48-50:30:xy:,591:48-50:25:xy:,709:48-49:20:xy:
Route 20|xy|walk|39:48-49:20:xy:,164:48-50:30:xy:,571:48-50:5:xy:,575:50:10:xy:,591:48-50:25:xy:,709:50:10:xy:
Route 21|xy|good-rod|61:40:35:xy:,147:40:5:xy:,550:40:60:xy:
Route 21|xy|horde|123:27:5:xy:,327:26:60:xy:,333:26:35:xy:
Route 21|xy|old-rod|60:30:100:xy:
Route 21|xy|purple-flowers|123:50-52:10:xy:,217:52:10:xy:,327:50-52:20:xy:,334:50-51:20:xy:,419:50-52:40:xy:
Route 21|xy|red-flowers|123:50-52:10:xy:,217:50-52:40:xy:,327:50-52:20:xy:,334:50-51:20:xy:,419:52:10:xy:
Route 21|xy|super-rod|61:50:60:xy:,148:50:5:xy:,550:50:35:xy:
Route 21|xy|surf|271:50-52:66:xy:,419:50-52:34:xy:
Route 22|xy|good-rod|118:25:65:xy:,318:25:35:xy:
Route 22|xy|old-rod|129:15:100:xy:
Route 22|xy|super-rod|119:35:35:xy:,130:35:60:xy:,319:35:5:xy:
Route 22|xy|surf|54:25-27:95:xy:,184:25-27:5:xy:
Route 22|xy|walk|54:6:10:xy:,83:7:10:xy:,206:7:5:xy:,298:6-7:20:xy:,399:6:10:xy:,447:6-7:5:xy:,659:5-6:20:xy:,667:5-6:20:xy:
Route 22|xy|yellow-flowers|54:25-26:20:xy:,83:26:10:xy:,184:25-26:20:xy:,206:26:5:xy:,400:26-27:20:xy:,447:25-26:5:xy:,660:27:10:xy:,667:25:10:xy:
Route 2|xy|walk|10:3-4:11:y:,13:3-4:11:x:,16:3-4:14:xy:,263:3-4:15:xy:,659:2-3:20:xy:,661:2-3:20:xy:,664:2-3:20:xy:
Route 3|xy|good-rod|118:25:65:xy:,341:25:35:xy:
Route 3|xy|old-rod|129:15:100:xy:
Route 3|xy|super-rod|119:35:35:xy:,130:35:60:xy:,342:35:5:xy:
Route 3|xy|surf|183:25-27:34:xy:,284:25-27:66:xy:
Route 3|xy|walk|16:4:10:xy:,25:4-5:5:xy:,206:5:5:xy:,298:5:10:xy:,399:3-4:20:xy:,412:5:10:xy:,659:3-4:20:xy:,661:3-5:20:xy:
Route 4|xy|red-flowers|165:6-8:30:xy:,280:8:5:xy:,300:8:10:xy:,406:8:10:xy:,415:8:10:xy:,669:6-8:35:xy:
Route 4|xy|yellow-flowers|165:8:10:xy:,280:8:5:xy:,300:8:10:xy:,406:8:10:xy:,415:6-8:30:xy:,669:6-8:35:xy:
Route 5|xy|horde|311:6:5:xy:,312:6:5:xy:,316:5:60:xy:,559:5:35:xy:
Route 5|xy|purple-flowers|63:10:5:xy:,84:10:10:xy:,311:9-10:5:x:,312:9-10:5:y:,316:10:10:xy:,659:10:10:xy:,672:8-10:30:xy:,674:8-9:20:xy:,676:10:10:xy:
Route 5|xy|walk|63:10:5:xy:,84:10:10:xy:,311:9-10:5:x:,312:9-10:5:y:,316:10:10:xy:,659:8-10:30:xy:,672:10:10:xy:,674:10:10:xy:,676:8-9:20:xy:
Route 6|xy|rough-terrain|43:10-12:30:xy:,161:10-11:20:xy:,290:12:10:xy:,352:11-12:5:xy:,677:11-12:20:xy:,679:11-12:15:xy:
Route 6|xy|rustling-bush-ambush|531:10-12:20:xy:,543:10-12:80:xy:
Route 7|xy|horde|54:7:35:xy:,187:7:60:xy:,315:8:5:xy:
Route 7|xy|purple-flowers|235:14:10:xy:,313:13:10:xy:,314:13:10:xy:,315:14:10:xy:,453:14:5:xy:,580:14:10:xy:,669:12-14:35:xy:,682:14:10:y:,684:14:10:x:
Route 7|xy|static|143:15::xy:
Route 7|xy|walk|235:14:10:xy:,313:13:10:xy:,314:13:10:xy:,315:14:10:xy:,453:12-14:35:xy:,580:14:10:xy:,669:13-14:5:xy:,682:14:10:y:,684:14:10:x:
Route 7|xy|yellow-flowers|235:14:10:xy:,313:13:10:xy:,314:13:10:xy:,315:14:10:xy:,453:14:5:xy:,580:14:10:xy:,669:12-14:35:xy:,682:14:10:y:,684:14:10:x:
Route 8|xy|good-rod|90:25:35:y:,120:25:35:x:,690:25:65:y:,692:25:65:x:
Route 8|xy|horde|276:7:5:xy:,278:7:60:xy:,335:8:35:xy:,336:8:35:xy:
Route 8|xy|old-rod|370:15:100:xy:
Route 8|xy|rock-smash|557:18-20:66:x:,557:13-15:66:y:,688:18-20:34:x:,688:13-15:34:y:
Route 8|xy|super-rod|91:35:5:y:,121:35:5:x:,211:35:60:xy:,691:35:35:y:,693:35:35:x:
Route 8|xy|surf|72:25-27:69:xy:,320:25-27:31:xy:
Route 8|xy|walk|325:13-14:20:xy:,335:14:10:x:,336:14:10:y:,359:15:10:xy:,371:14-15:5:xy:,425:13-15:30:xy:,619:15:10:xy:,686:14-15:15:xy:
Route 8|xy|yellow-flowers|325:15:10:xy:,335:14:10:x:,336:14:10:y:,359:13-14:20:xy:,371:14-15:5:xy:,425:15:10:xy:,619:13-15:30:xy:,686:14-15:15:xy:
Route 9|xy|rough-terrain|449:15-17:40:xy:,551:15-17:40:xy:,694:15-17:20:xy:
Santalune Forest|xy|walk|10:2:10:x:,10:2-3:20:y:,11:4:4:y:,13:2-3:20:x:,13:2:10:y:,14:4:4:x:,25:3-4:6:xy:,511:4:10:xy:,513:4:10:xy:,515:4:10:xy:,661:4:10:xy:,664:2-3:20:xy:
Sea Spirit's Den|xy|static|144:70::xy:If you chose Chespin · Found 11 Times Roaming,145:70::xy:If you chose Fennekin · Found 11 Times Roaming,146:70::xy:If you chose Froakie · Found 11 Times Roaming
Shalour City|xy|good-rod|170:25:35:xy:,223:25:65:xy:
Shalour City|xy|old-rod|370:15:100:xy:
Shalour City|xy|super-rod|171:35:5:xy:,224:35:35:xy:,594:35:60:xy:
Shalour City|xy|surf|72:25-27:84:xy:,458:27:16:xy:
Team Flare Secret HQ|xy|static|716:50::x:,717:50::y:
Terminus Cave (unknown area 343)|xy|ceiling-ambush|168:44-46:80:xy:,714:44-46:20:xy:
Terminus Cave (unknown area 343)|xy|horde|74:23:35:xy:,246:24:5:y:,304:24:5:x:,632:23:60:xy:
Terminus Cave (unknown area 343)|xy|rock-smash|75:44-46:95:xy:,213:44-46:5:xy:
Terminus Cave (unknown area 343)|xy|walk|28:45-46:20:xy:,75:44-46:20:xy:,247:45-46:20:y:,305:45-46:20:x:,632:44-46:40:xy:
Terminus Cave (unknown area 344)|xy|ceiling-ambush|168:44-46:80:xy:,714:44-46:20:xy:
Terminus Cave (unknown area 344)|xy|horde|74:23:35:xy:,246:24:5:y:,304:24:5:x:,632:23:60:xy:
Terminus Cave (unknown area 344)|xy|rock-smash|75:44-46:95:xy:,213:44-46:5:xy:
Terminus Cave (unknown area 344)|xy|walk|28:45-46:20:xy:,75:44-46:20:xy:,247:45-46:20:y:,305:45-46:20:x:,632:44-46:40:xy:
Terminus Cave (unknown area 345)|xy|ceiling-ambush|168:44-46:80:xy:,714:44-46:20:xy:
Terminus Cave (unknown area 345)|xy|horde|74:23:35:xy:,246:24:5:y:,304:24:5:x:,632:23:60:xy:
Terminus Cave (unknown area 345)|xy|rock-smash|75:44-46:95:xy:,213:44-46:5:xy:
Terminus Cave (unknown area 345)|xy|walk|28:45-46:20:xy:,75:44-46:20:xy:,247:45-46:20:y:,305:45-46:20:x:,632:44-46:40:xy:
Terminus Cave (unknown area 347)|xy|ceiling-ambush|168:44-46:80:xy:,714:44-46:20:xy:
Terminus Cave (unknown area 347)|xy|horde|74:23:35:xy:,246:24:5:y:,304:24:5:x:,632:23:60:xy:
Terminus Cave (unknown area 347)|xy|walk|28:45-46:20:xy:,75:44-46:20:xy:,247:45-46:20:y:,305:45-46:20:x:,632:44-46:40:xy:
Terminus Cave (unknown area 348)|xy|ceiling-ambush|168:44-46:80:xy:,714:44-46:20:xy:
Terminus Cave (unknown area 348)|xy|horde|74:23:35:xy:,246:24:5:y:,304:24:5:x:,632:23:60:xy:
Terminus Cave (unknown area 348)|xy|static|718:70::xy:After Hall Of Fame
Terminus Cave (unknown area 348)|xy|walk|28:45-46:20:xy:,75:44-46:20:xy:,247:45-46:20:y:,305:45-46:20:x:,632:44-46:40:xy:
Tower of Mastery|xy|gift|448:32::xy:
Unknown Dungeon|xy|static|150:70::xy:After Hall Of Fame
Victory Road (unknown area 322)|xy|ceiling-ambush|75:57:45:xy:,168:58-59:33:xy:,714:57-59:22:xy:
Victory Road (unknown area 322)|xy|good-rod|61:45:35:xy:,550:45:65:xy:
Victory Road (unknown area 322)|xy|horde|74:28:60:xy:,108:30:5:xy:,419:29:35:xy:
Victory Road (unknown area 322)|xy|old-rod|60:35:100:xy:
Victory Road (unknown area 322)|xy|rock-smash|75:57-59:95:xy:,213:57-59:5:xy:
Victory Road (unknown area 322)|xy|super-rod|61:55:65:xy:,550:55:35:xy:
Victory Road (unknown area 322)|xy|surf|61:57-59:66:xy:,419:57-59:34:xy:
Victory Road (unknown area 322)|xy|walk|75:57-58:20:xy:,93:58:10:xy:,108:58-59:15:xy:,533:57-59:30:xy:,621:58-59:20:xy:,634:59:5:xy:
Victory Road (unknown area 324)|xy|ceiling-ambush|75:57:45:xy:,168:58-59:33:xy:,714:57-59:22:xy:
Victory Road (unknown area 324)|xy|horde|74:28:60:xy:,75:29:35:xy:,108:30:5:xy:
Victory Road (unknown area 324)|xy|rock-smash|75:57-59:95:xy:,213:57-59:5:xy:
Victory Road (unknown area 324)|xy|walk|75:57-58:20:xy:,93:58:10:xy:,108:58-59:15:xy:,533:57-59:30:xy:,621:58-59:20:xy:,634:59:5:xy:
Victory Road (unknown area 326)|xy|ceiling-ambush|75:57:45:xy:,168:58-59:33:xy:,714:57-59:22:xy:
Victory Road (unknown area 326)|xy|horde|74:28:60:xy:,75:29:35:xy:,108:30:5:xy:
Victory Road (unknown area 326)|xy|walk|75:57-58:20:xy:,93:58:10:xy:,108:58-59:15:xy:,533:57-59:30:xy:,621:58-59:20:xy:,634:59:5:xy:
Victory Road (unknown area 327)|xy|good-rod|61:45:35:xy:,550:45:65:xy:
Victory Road (unknown area 327)|xy|old-rod|60:35:100:xy:
Victory Road (unknown area 327)|xy|sky-ambush|22:57-59:77:xy:,227:57-59:18:xy:,635:59:5:xy:
Victory Road (unknown area 327)|xy|super-rod|61:55:65:xy:,550:55:35:xy:
Victory Road (unknown area 327)|xy|surf|271:57-59:66:xy:,419:57-59:34:xy:
Victory Road (unknown area 328)|xy|ceiling-ambush|75:57:45:xy:,168:58-59:33:xy:,714:57-59:22:xy:
Victory Road (unknown area 328)|xy|good-rod|61:45:35:xy:,550:45:65:xy:
Victory Road (unknown area 328)|xy|horde|74:28:60:xy:,108:30:5:xy:,419:29:35:xy:
Victory Road (unknown area 328)|xy|old-rod|60:35:100:xy:
Victory Road (unknown area 328)|xy|super-rod|61:55:60:xy:,62:60:5:xy:,550:55:35:xy:
Victory Road (unknown area 328)|xy|surf|61:57-59:66:xy:,419:57-59:34:xy:
Victory Road (unknown area 328)|xy|walk|75:57-58:20:xy:,93:58:10:xy:,108:58-59:15:xy:,533:57-59:30:xy:,621:58-59:20:xy:,634:59:5:xy:
kalos-berry-fields|xy|berry-trees|165:14-15:100:xy:Red berry tree,313:14-15:100:xy:Blue berry tree,314:14-15:100:xy:Purple berry tree,412:14-15:100:xy:Green berry tree,415:14-15:100:xy:Yellow berry tree,665:14-15:100:xy:Pink berry tree
`,
  oras: `
Ancient Tomb|ao|static|379:40::ao:
Battle Resort|ao|gift|319:40::ao:,323:40::ao:
Cave of Origin (entrance)|ao|horde|41:18:100:ao:
Cave of Origin|ao|horde|41:18:100:ao:
Cave of Origin|ao|static|382:45::a:,383:45::o:
Crescent Isle|ao|static|488:50::ao:
Desert Ruins|ao|static|377:40::ao:
Fabled Cave|ao|static|643:50::o:Level 100 Pokemon In Party,644:50::a:Level 100 Pokemon In Party
Fallarbor Town Contest Hall (Fallarbor Town)|ao|gift|25:20::ao:
Fiery Path|ao|horde|88:8:35:a:,109:8:35:o:,218:8:5:ao:,322:8:60:ao:
Gnarled Den|ao|static|646:50::ao:Reshiram Zekrom In Party
Granite Cave|ao|horde|41:6:100:ao:,74:6:35:ao:,296:6:40:ao:,302:6:5:a:,303:6:5:o:,304:6:75:ao:
Island Cave|ao|static|378:40::ao:,486:50::ao:After National Dex · Nicknamed Cold Item Regice Regirock Registeel3
Jagged Pass|ao|horde|66:10:65:ao:,325:10:35:ao:
Lavaridge Town|ao|devon-scope|352:40::ao:
Lavaridge Town|ao|gift-egg|175:1::ao:,360:1::ao:
Lilycove City Contest Hall (Lilycove City)|ao|gift|25:20::ao:
Meteor Falls (back)|ao|horde|41:20:100:ao:
Meteor Falls (back/small room)|ao|horde|41:20:95:ao:,371:20:5:ao:
Meteor Falls|ao|horde|41:9-20:100:ao:
Mirage Cave (North of Fallarbor)|ao|walk|79:36-38:40:ao:,602:36-38:60:ao:
Mirage Cave (North of Fortree)|ao|walk|95:36-38:10:ao:,530:36-38:30:ao:,599:36-38:30:ao:,602:36-38:30:ao:
Mirage Cave (North of Route 124)|ao|rock-smash|75:35-38:85:ao:,525:37:15:ao:
Mirage Cave (North of Route 124)|ao|walk|563:36-38:40:ao:,599:36-38:60:ao:
Mirage Cave (North of Route 132)|ao|walk|132:36-38:40:ao:,530:36-38:30:ao:,602:36-38:30:ao:
Mirage Cave (South East of Route 129)|ao|rock-smash|75:35-38:85:ao:,525:37:15:ao:
Mirage Cave (South East of Route 129)|ao|walk|95:36-38:40:ao:,602:36-38:60:ao:
Mirage Cave (South of Pacifidlog)|ao|walk|79:36-38:10:ao:,563:36-38:30:ao:,602:36-38:60:ao:
Mirage Cave (South of Route 107)|ao|walk|201:36-38:100:ao:
Mirage Cave (West of Rustboro)|ao|rock-smash|75:35-38:85:ao:,525:37:15:ao:
Mirage Cave (West of Rustboro)|ao|walk|599:36-38:60:ao:,602:36-38:40:ao:
Mirage Forest (East of Mossdeep)|ao|walk|114:36-38:30:ao:,191:36-38:30:ao:,431:36-38:30:ao:,572:36-38:10:ao:
Mirage Forest (North of Lilycove)|ao|walk|114:36-38:30:ao:,191:36-38:30:ao:,421:36-38:10:ao:,432:36-38:30:ao:
Mirage Forest (North of Route 124)|ao|walk|37:36-38:10:ao:,114:36-38:30:ao:,191:36-38:30:ao:,432:36-38:30:ao:
Mirage Forest (South of Route 109)|ao|walk|191:36-38:10:ao:,531:36-38:90:ao:
Mirage Forest (South of Route 111)|ao|walk|402:36-38:60:ao:,636:36-38:40:ao:
Mirage Forest (South of Route 132)|ao|walk|191:36-38:60:ao:,531:36-38:10:ao:,548:36-38:30:ao:
Mirage Forest (West of Route 105)|ao|rock-smash|75:36-38:100:ao:
Mirage Forest (West of Route 105)|ao|walk|205:36-38:60:ao:,440:36-38:40:ao:
Mirage Forest (West of Route 114)|ao|walk|114:36-38:30:ao:,191:36-38:30:ao:,432:36-38:30:ao:,548:36-38:10:ao:
Mirage Island (East of Shoal Cave)|ao|walk|137:36-38:40:ao:,432:36-38:60:ao:
Mirage Island (Route 114)|ao|walk|555:36-38:60:ao:,636:36-38:40:ao:
Mirage Island (Route 124)|ao|walk|49:36-38:30:ao:,53:36-38:10:ao:,178:36-38:30:ao:,523:36-38:30:ao:
Mirage Island (Route 132)|ao|walk|132:36-38:40:ao:,517:36-38:60:ao:
Mirage Island (South of Pacifidlog)|ao|rock-smash|75:38:85:ao:,688:37:15:ao:
Mirage Island (South of Pacifidlog)|ao|walk|178:36-38:10:ao:,531:36-38:90:ao:
Mirage Island (South of Route 134)|ao|rock-smash|75:38:85:ao:,688:37:15:ao:
Mirage Island (South of Route 134)|ao|walk|49:36-38:30:ao:,178:36-38:30:ao:,523:36-38:30:ao:,556:36-38:10:ao:
Mirage Island (West Of Dewford Town)|ao|walk|49:36-38:10:ao:,114:36-38:30:ao:,178:36-38:30:ao:,523:36-38:30:ao:
Mirage Island (West Of Route 104)|ao|walk|49:36-38:30:ao:,178:36-38:30:ao:,523:36-38:30:ao:,555:36-38:10:ao:
Mirage Mountain (East of Mossdeep)|ao|walk|114:36-38:10:ao:,440:36-38:30:ao:,531:36-38:60:ao:
Mirage Mountain (North East of Route 125)|ao|walk|205:36-38:30:ao:,232:36-38:30:ao:,402:36-38:30:ao:,629:36-38:10:ao:
Mirage Mountain (North of Lilycove)|ao|walk|205:36-38:30:ao:,232:36-38:30:ao:,402:36-38:30:ao:,627:36-38:10:ao:
Mirage Mountain (North of Mossdeep)|ao|walk|240:36-38:40:ao:,555:36-38:60:ao:
Mirage Mountain (South East of Route 129)|ao|rock-smash|75:35-38:85:ao:,558:37:15:ao:
Mirage Mountain (South East of Route 129)|ao|walk|137:36-38:10:ao:,178:36-38:60:ao:,517:36-38:30:ao:
Mirage Mountain (South of Route 129)|ao|walk|239:36-38:40:ao:,523:36-38:60:ao:
Mirage Mountain (South of Route 131)|ao|walk|203:36-38:10:ao:,205:36-38:30:ao:,232:36-38:30:ao:,402:36-38:30:ao:
Mirage Mountain (West of Route 104)|ao|walk|205:36-38:30:ao:,232:36-38:30:ao:,234:36-38:10:ao:,402:36-38:30:ao:
Mossdeep City (Steven's house)|ao|gift|374:1::ao:
Mossdeep Space Center|ao|devon-scope|352:45::ao:
Mt. Pyre Mount Pyre (outside)|ao|horde|37:15:5:ao:,307:15:35:ao:,353:15:60:ao:
Mt. Pyre Mount Pyre (summit)|ao|horde|37:15:5:ao:,307:15:35:ao:,353:15:60:ao:
Mt. Pyre|ao|horde|353:15:100:ao:
Nameless Cavern|ao|static|480:50::ao:04.00–19.59,481:50::ao:20.00–21.59,482:50::ao:21.00–03.59
New Mauville|ao|horde|81:12:35:ao:,100:12:65:ao:
New Mauville|ao|static|100:25::ao:
Pathless Plain|ao|static|638:50::ao:,638:50::ao:Wednesdays,638:50::ao:Fridays,639:50::ao:Tuesdays,639:50::ao:Saturdays,640:50::ao:Mondays,640:50::ao:Thursdays
Petalburg Woods|ao|horde|263:3:35:ao:,265:3:60:ao:,285:3:5:ao:
Route 101|ao|gift|152:5::ao:,155:5::ao:,158:5::ao:,252:5::ao:,255:5::ao:,258:5::ao:,387:5::ao:,390:5::ao:,393:5::ao:,495:5::ao:,498:5::ao:,501:5::ao:
Route 101|ao|horde|261:2:5:ao:,263:2:95:ao:
Route 102|ao|horde|263:2:60:ao:,270:2:35:a:,273:2:35:o:,280:2:5:ao:
Route 103|ao|horde|261:2:35:ao:,263:2:60:ao:,278:2:5:ao:
Route 104|ao|horde|263:2:100:ao:,276:3:5:ao:,278:2:5:ao:
Route 110|ao|horde|81:6:60:ao:,311:6:5:o:,311:6:40:a:,312:6:40:o:,312:6:5:a:
Route 111|ao|horde|27:11:100:ao:
Route 112|ao|horde|66:8:35:ao:,322:8:65:ao:
Route 113|ao|horde|227:9:5:ao:,327:9:95:ao:
Route 114|ao|horde|270:9:35:a:,273:9:35:o:,333:9:70:ao:
Route 115|ao|horde|333:10:100:ao:
Route 116|ao|horde|263:4:60:ao:,290:4:35:ao:,300:4:5:ao:
Route 117|ao|horde|43:7:60:ao:,183:7:5:ao:,263:7:60:ao:,315:7:35:ao:
Route 118|ao|horde|278:12:35:ao:,309:12:60:ao:,352:12:5:ao:
Route 119 Weather Institute (Road 119)|ao|gift|351:30::ao:
Route 119|ao|devon-scope|352:30::ao:
Route 119|ao|horde|43:12:100:ao:
Route 120|ao|devon-scope|352:30::ao:
Route 120|ao|horde|43:13:60:ao:,183:13:35:ao:,352:13:5:ao:
Route 121|ao|horde|278:15:35:ao:,352:15:5:ao:,353:15:60:ao:
Route 123|ao|horde|278:15:35:ao:,352:15:5:ao:,353:15:60:ao:
Rusturf Tunnel|ao|horde|293:5:100:ao:
Safari Zone (NE/acro bike area)|ao|horde|43:15:35:ao:,54:15:5:ao:,84:15:60:ao:
Safari Zone (NW/mach bike area)|ao|horde|43:15:35:ao:,54:15:5:ao:,84:15:60:ao:
Safari Zone|ao|horde|43:15:70:ao:,54:15:10:ao:,84:15:100:ao:
Scorched Slab|ao|horde|41:14:100:ao:
Scorched Slab|ao|static|485:50::ao:After Defeated Groudon Or Kyogre
Sea Mauville (Inside)|ao|static|249:50::a:Needs Tidal Bell,250:50::o:Needs Clear Bell,442:50::ao:,442:50::ao:After Defeated Groudon Or Kyogre
Seafloor Cavern|ao|horde|41:18:100:ao:
Shoal Cave|ao|horde|41:17:100:ao:,361:17:5:ao:,363:17:100:ao:
Sky Pillar Apex|ao|static|384:70::ao:,386:80::ao:
Sky Pillar|ao|horde|42:23:100:ao:,168:23:100:ao:,333:23:15:ao:
Slateport City Contest Hall (Slateport City)|ao|gift|25:20::ao:
Soaring in the sky|ao|static|483:50::a:Uxie Mesprit Azelf In Party,484:50::o:Uxie Mesprit Azelf In Party,487:50::ao:Dialga Or Palkia In Party · Sundays,641:50::o:Castform In Party,642:50::a:Castform In Party,645:50::ao:Tornadus Thundurus In Party
Southern Island|ao|gift|380:30::a:,381:30::o:
Southern Island|ao|static|380:30::ao:,381:30::ao:
Team Aqua Hideout|a|static|101:40::a:
Team Magma Hideout|o|static|101:40::o:
Trackless Forest|ao|static|243:50::ao:Minutes 00–19,244:50::ao:Minutes 20–39,245:50::ao:Minutes 40–59
Verdanturf Town Contest Hall (Verdanturf Town)|ao|gift|25:20::ao:
Victory Road|ao|horde|41:20:100:ao:,294:20:10:ao:,304:20:70:ao:
`,
  // Omega Ruby / Alpha Sapphire gaps, filled from the Ruby and Sapphire
  // tables (the remakes keep most wild slots). Only added where PokéAPI had
  // nothing for that place and method. DexNav-only and horde slots that
  // PokéAPI lacks are still missing.
  orasx: `
Route 101|ao|grass|261:2-3:45:oa:,263:2-3:45:oa:,265:2-3:10:oa:
Route 102|ao|grass|261:3-4:20:oa:,263:3-4:30:oa:,265:3-4:20:oa:,270:3-4:20:o:,273:3-4:20:a:,280:4-4:10:oa:
Route 102|ao|old-rod|129:5-5:70:oa:,72:5-10:30:oa:
Route 103|ao|grass|261:2-4:40:oa:,263:2-4:40:oa:,278:2-4:20:oa:
Route 103|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 103|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 103|ao|good-rod|129:10-30:60:oa:,72:10-30:20:oa:,320:10-30:20:oa:
Route 103|ao|super-rod|320:25-40:60:oa:
Route 104|ao|grass|261:4-5:20:oa:,263:4-5:20:oa:,265:4-5:20:oa:,276:4-5:30:oa:,183:4-5:10:oa:
Route 104|ao|surf|278:10-30:95:oa:,279:25-30:5:oa:
Route 104|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 104|ao|good-rod|129:10-30:60:oa:,72:10-30:20:oa:,320:10-30:20:oa:
Route 104|ao|super-rod|320:25-40:60:oa:
Petalburg Woods|ao|grass|261:5-6:20:oa:,265:5-6:25:oa:,285:5-6:20:oa:,266:5-6:10:o:,268:5-6:10:a:,287:5-6:15:oa:
Rustboro City|ao|surf|278:5-35:100:oa:
Rustboro City|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 105|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 105|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 105|ao|good-rod|129:10-30:60:oa:,72:10-30:20:oa:,320:10-30:20:oa:
Route 105|ao|super-rod|320:25-40:60:oa:
Route 106|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 106|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 106|ao|good-rod|129:10-30:60:oa:,72:10-30:20:oa:,320:10-30:20:oa:
Route 106|ao|super-rod|320:25-40:60:oa:
Dewford Town|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Dewford Town|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Dewford Town|ao|good-rod|129:10-30:60:oa:,72:10-30:20:oa:,320:10-30:20:oa:
Dewford Town|ao|super-rod|320:25-40:60:oa:
Granite Cave|ao|cave|41:7-8:65:oa:,296:7-8:20:oa:,63:7-8:10:oa:,74:10-11:30:oa:,302:10-11:10:o:,303:10-11:10:a:,299:10-11:5:oa:
Granite Cave|ao|rock-smash|74:10-15:100:oa:
Route 107|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 107|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 108|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 108|ao|super-rod|320:25-40:60:oa:
Abandoned Ship|ao|surf|72:5-35:100:oa:
Abandoned Ship|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Abandoned Ship|ao|good-rod|129:10-30:60:oa:,72:10-30:20:oa:,98:10-30:20:oa:
Abandoned Ship|ao|super-rod|98:25-40:60:oa:,99:30-35:40:oa:
Route 109|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 109|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 109|ao|super-rod|320:25-40:60:oa:
Slateport City|ao|surf|72:5-35:100:oa:
Slateport City|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 110|ao|grass|263:12-13:28:oa:,309:12-13:30:oa:,311:12-13:2:o:,312:12-13:2:a:,43:12-13:20:oa:,278:12-13:8:oa:
Route 110|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 110|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 110|ao|super-rod|320:25-40:60:oa:
Route 111|ao|grass|27:19-21:40:oa:,328:19-21:20:oa:,331:19-21:30:oa:
Route 111|ao|grass|263:19-21:30:oa:,322:19-21:20:oa:,183:19-21:10:oa:
Route 111|ao|surf|183:20-30:60:oa:,184:25-30:40:oa:
Route 111|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 111|ao|rock-smash|74:10-20:100:oa:
Route 112|ao|grass|322:14-15:60:oa:,183:14-15:20:oa:
Route 113|ao|grass|327:14-15:55:oa:,218:14-15:25:oa:,227:14-15:20:oa:
Route 114|ao|grass|333:15-17:40:oa:,271:15-17:30:o:,274:15-17:30:a:,336:15-17:15:a:,335:15-17:15:o:
Route 114|ao|surf|183:20-30:60:oa:,184:25-30:40:oa:
Route 114|ao|old-rod|129:5-10:70:oa:,72:5-10:30:oa:
Route 114|ao|rock-smash|74:10-20:100:oa:
Meteor Falls|ao|cave|41:16-18:65:oa:,42:16-18:10:oa:,337:16-18:25:a:,338:16-18:25:o:,371:16-20:5:oa:
Meteor Falls|ao|surf|41:16-18:60:oa:,42:16-18:40:oa:
Meteor Falls|ao|super-rod|349:30-35:100:oa:
Route 115|ao|grass|333:23-25:40:oa:,276:23-25:30:oa:,278:23-25:20:oa:
Route 115|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 116|ao|grass|293:6-8:26:oa:,290:6-8:20:oa:,276:6-8:20:oa:,63:6-8:8:oa:
Rusturf Tunnel|ao|cave|293:6-7:60:oa:
Rusturf Tunnel|ao|rock-smash|74:10-15:100:oa:
Route 117|ao|grass|43:13-14:30:oa:,183:13-14:30:oa:,261:13-14:20:oa:,313:13-14:10:o:,314:13-14:10:a:,270:13-14:10:o:,273:13-14:10:a:
Route 117|ao|surf|183:20-30:60:oa:,184:25-30:40:oa:
Mauville City|ao|surf|183:20-30:60:oa:,184:25-30:40:oa:
New Mauville|ao|cave|81:22-26:60:oa:,100:22-26:40:oa:
Route 118|ao|grass|309:24-26:30:oa:,263:24-26:30:oa:,278:24-26:30:oa:,352:24-26:10:oa:
Route 118|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 118|ao|good-rod|318:20-30:80:oa:,129:10-30:20:oa:
Route 118|ao|super-rod|318:30-35:100:oa:
Route 119|ao|grass|263:24-26:28:oa:,264:25-27:2:oa:,43:24-26:30:oa:,357:25-27:15:o:,352:24-26:15:oa:
Route 119|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 120|ao|grass|263:25-27:20:oa:,43:25-27:20:oa:,183:25-27:20:oa:,359:25-27:5:oa:,270:25-27:15:o:,273:25-27:15:a:,352:25-27:10:oa:
Route 120|ao|surf|183:20-30:60:oa:,184:25-30:40:oa:
Route 121|ao|grass|353:26-28:30:oa:,43:26-28:20:oa:,44:26-28:10:oa:,278:26-28:20:oa:,263:26-28:10:oa:,352:26-28:10:oa:
Route 121|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 122|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 122|ao|super-rod|320:25-40:60:oa:,319:30-35:40:oa:
Mt. Pyre|ao|grass|353:26-29:60:oa:,355:26-29:30:oa:,37:26-29:10:oa:
Mt. Pyre|ao|cave|353:26-29:55:oa:,355:26-29:35:oa:,37:26-29:10:oa:
Route 123|ao|grass|353:26-28:30:oa:,43:26-28:20:oa:,44:26-28:10:oa:,278:26-28:20:oa:,263:26-28:10:oa:,352:26-28:10:oa:
Route 123|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 124|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 124|ao|super-rod|370:30-35:60:oa:,320:25-40:40:oa:
Mossdeep City|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 125|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 125|ao|super-rod|370:30-35:60:oa:,320:25-40:40:oa:
Shoal Cave|ao|cave|41:26-28:60:oa:
Shoal Cave|ao|surf|72:5-35:60:oa:
Route 126|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 126|ao|super-rod|370:30-35:60:oa:,320:25-40:40:oa:
Sootopolis City|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 127|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 127|ao|super-rod|370:30-35:60:oa:,320:25-40:40:oa:
Route 128|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Route 128|ao|super-rod|370:30-35:60:oa:,320:25-40:40:oa:
Seafloor Cavern|ao|cave|41:30-33:60:oa:,42:30-33:40:oa:
Seafloor Cavern|ao|surf|72:5-35:60:oa:,278:10-30:40:oa:
Cave of Origin|ao|cave|41:30-33:65:oa:,42:30-33:25:oa:,302:30-33:10:o:,303:30-33:10:a:
Route 129|ao|surf|320:5-35:60:oa:,278:10-30:40:oa:
Route 129|ao|super-rod|321:30-35:60:oa:,320:25-40:40:oa:
Route 130|ao|surf|278:5-35:60:oa:,279:10-30:40:oa:
Route 130|ao|super-rod|320:25-40:60:oa:,321:30-35:40:oa:
Route 131|ao|surf|278:5-35:60:oa:,279:10-30:40:oa:
Route 132|ao|surf|278:5-35:60:oa:,279:10-30:40:oa:
Route 132|ao|super-rod|116:30-35:60:oa:,320:25-40:40:oa:
Route 133|ao|surf|278:5-35:60:oa:,279:10-30:40:oa:
Route 133|ao|super-rod|116:30-35:60:oa:,320:25-40:40:oa:
Route 134|ao|surf|278:5-35:60:oa:,279:10-30:40:oa:
Route 134|ao|super-rod|116:30-35:60:oa:,320:25-40:40:oa:
Pacifidlog Town|ao|surf|278:5-35:60:oa:,279:10-30:40:oa:
Fiery Path|ao|cave|322:14-16:40:oa:,218:14-16:20:oa:
Jagged Pass|ao|cave|322:19-21:55:oa:,66:19-21:20:oa:,325:19-21:25:oa:
Mt. Chimney|ao|cave|322:19-21:60:oa:,218:19-21:40:oa:
Victory Road|ao|cave|42:34-40:30:oa:,294:34-40:15:oa:,304:34-40:15:oa:,305:38-42:10:oa:,297:36-40:10:oa:,308:36-40:10:oa:,302:34-40:5:oa:,303:34-40:5:oa:,82:36-40:10:oa:,41:34-40:10:oa:,296:34-40:10:oa:
Victory Road|ao|surf|42:30-35:100:oa:
Victory Road|ao|super-rod|118:30-35:60:oa:,119:30-35:40:oa:
Victory Road|ao|rock-smash|74:20-30:70:oa:,75:25-35:30:oa:
Sky Pillar|ao|cave|42:34-38:30:oa:,302:34-38:20:oa:,354:34-38:20:oa:,344:34-38:15:oa:,334:34-38:15:oa:
Safari Zone|ao|grass|43:25-27:10:oa:,44:25-27:5:oa:,203:25-27:10:oa:,177:25-27:10:oa:,84:25-27:10:oa:,25:25-27:10:oa:,54:25-27:10:oa:,202:25-30:5:oa:,111:25-27:10:oa:,231:25-27:10:oa:,214:25-30:5:oa:,127:25-30:5:oa:
Safari Zone|ao|surf|54:20-30:60:oa:,55:25-30:40:oa:
Safari Zone|ao|super-rod|118:25-35:60:oa:,119:30-35:40:oa:
Mirage Island|ao|grass|360:5-50:100:oa:
Sky Pillar|ao|static|384:70::oa:
Route 120|ao|static|352:30::oa:
Route 119|ao|static|352:30::oa:
Fortree City|ao|static|352:30::oa:
Littleroot Town|ao|gift|252:5::oa:
Littleroot Town|ao|gift|255:5::oa:
Littleroot Town|ao|gift|258:5::oa:
Route 119|ao|gift|351:25::oa:
Rustboro City|ao|gift|374:5::oa:
Fallarbor Town|ao|gift|345:20::oa:
Fallarbor Town|ao|gift|347:20::oa:
Pacifidlog Town|ao|trade|368:::oa:
Fortree City|ao|trade|311:::oa:
`
});
