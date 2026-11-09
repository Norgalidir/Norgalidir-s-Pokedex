// Encounter data for Sun, Moon, Ultra Sun, Ultra Moon and Let's Go, generated from PokéAPI.
// Same line format as pokedex-encounters-hoenn.js:
//   Location|games|method|dex:levels:rate:games:condition, ...
// Game codes: b Black, w White, B Black 2, W White 2, x X, y Y,
// o Omega Ruby, a Alpha Sapphire, u Sun, m Moon, U Ultra Sun, M Ultra Moon,
// P Let's Go Pikachu, V Let's Go Eevee, S Sword, H Shield.
// Rates are summed slot chances for that game and condition. Max Raid dens
// list the star range instead of a rate.
window.ENCOUNTERS_MORE = Object.assign(window.ENCOUNTERS_MORE || {}, {
  alola: `
Aether Paradise|mu|gift|772:40::mu:
Akala Outskirts|MU|bubbling-spots|129:10-29:40:MU:,170:10-29:35:MU:,746:10-29:25:MU:
Akala Outskirts|MUmu|island-scan|679:23::mu:,679:24::MU:
Akala Outskirts|MU|sos|130:10-24:15:MU:,171:10-24:15:MU:,178:21-24:15:MU:
Akala Outskirts|MU|sos-from-bubbling-spot|130:10-29:15:MU:,171:10-29:15:MU:
Akala Outskirts|MU|super-rod|129:10-24:55:MU:,170:10-24:5:MU:,746:10-24:40:MU:
Akala Outskirts|MUmu|walk|20:20-23:30:mu:,20:21-24:20:MU:,177:21-24:20:MU:,278:20-23:50:mu:,278:21-24:80:MU:,299:20-23:15:mu:,299:21-24:15:MU:,735:20-23:30:mu:,735:21-24:20:MU:,759:20-23:5:mu:,759:21-24:15:MU:
Alola Berry Fields|MUmu|berry-trees|739:7-10:100:MUmu:
Altar of the Moone|m|static|792:55::m:
Altar of the Sunne|u|static|791:55::u:
Ancient Poni Path|MU|bubbling-spots|129:10-49:40:MU:,318:10-49:20:MU:,320:10-49:30:MU:,369:10-49:10:MU:
Ancient Poni Path|MU|gift|772:60::MU:
Ancient Poni Path|MUmu|island-scan|500:43::mu:,655:44::MU:
Ancient Poni Path|MU|sos|130:10-44:15:MU:,319:10-44:15:MU:,321:10-44:15:MU:
Ancient Poni Path|MU|sos-from-bubbling-spot|130:10-49:15:MU:,319:10-49:15:MU:,321:10-49:15:MU:
Ancient Poni Path|MU|super-rod|129:10-44:49:MU:,318:10-44:10:MU:,320:10-44:40:MU:,369:10-44:1:MU:
Ancient Poni Path|MU|surf|73:41-44:30:MU:,131:41-44:5:MU:,279:41-44:20:MU:,423:41-44:20:MU:,457:41-44:25:MU:
Ancient Poni Path|MUmu|walk|20:40-43:30:mu:,102:40-43:10:mu:,210:40-43:20:mu:,210:41-44:20:MU:,279:40-43:30:mu:,279:41-44:30:MU:,423:40-43:10:mu:,423:41-44:10:MU:,676:41-44:20:MU:,686:41-44:20:MU:,735:40-43:30:mu:
Blush Mountain|MUmu|island-scan|111:30::mu:,111:32::MU:
Blush Mountain|MUmu|sos|113:26-29:15:mu:,125:26-29:15:mu:,125:29-32:15:MU:,440:29-32:15:MU:,702:29-32:15:MU:,736:29-32:15:MU:,738:29-32:15:MU:,750:29-32:15:MU:,777:29-32:15:MU:
Blush Mountain|MUmu|walk|74:26-29:30:mu:,75:29-32:20:MU:,239:26-29:10:mu:,239:29-32:10:MU:,324:26-29:20:mu:,324:29-32:10:U:,324:29-32:20:M:,702:29-32:10:MU:,737:26-29:10:mu:,737:29-32:10:MU:,749:26-29:20:mu:,749:29-32:20:MU:,776:26-29:10:u:,776:29-32:10:U:,777:26-29:10:mu:,777:29-32:10:MU:
Brooklet Hill|MUmu|bubbling-spots|118:10-15:90:mu:,118:10-21:50:MU:,129:10-15:100:mu:,129:10-21:100:MU:,349:10-15:10:mu:,349:10-21:20:MU:,550:10-21:50:MU:,594:10-15:20:mu:,594:10-21:35:MU:,746:10-15:30:mu:,746:10-21:25:MU:
Brooklet Hill|MUmu|island-scan|183:17::mu:,259:17::MU:
Brooklet Hill|MUmu|sos|119:10-15:30:mu:,119:10-16:30:MU:,130:10-15:45:mu:,130:10-16:45:MU:
Brooklet Hill|MUmu|sos-from-bubbling-spot|119:10-15:30:mu:,119:10-21:30:MU:,130:10-15:45:mu:,130:10-21:45:MU:
Brooklet Hill|MUmu|super-rod|118:10-15:58:mu:,118:10-16:60:MU:,129:10-15:100:mu:,129:10-16:100:MU:,349:10-15:2:mu:,349:10-16:2:MU:,550:10-16:50:MU:,594:10-15:1:mu:,594:10-16:5:MU:,746:10-15:20:mu:,746:10-16:40:MU:
Brooklet Hill|MUmu|surf|54:14-17:40:MUmu:,60:14-17:80:MUmu:,72:14-17:40:MUmu:,278:14-17:20:MUmu:,283:14-17:80:MUmu:,456:14-17:40:MUmu:,751:14-17:80:MUmu:
Brooklet Hill|MUmu|walk|46:14-17:40:MU:,46:14-17:20:mu:,54:14-17:60:mu:,54:14-17:40:MU:,60:14-17:30:mu:,60:14-17:40:MU:,278:14-17:40:MUmu:,283:14-17:30:mu:,283:14-17:40:MU:,506:14-17:20:mu:,751:14-17:30:mu:,751:14-17:40:MU:,755:14-17:40:MU:,755:14-17:20:mu:
Diglett's Tunnel|MUmu|bubbling-spots|50:19-22:100:mu:,50:20-23:100:MU:
Diglett's Tunnel|MU|sos|42:20-23:15:MU:
Diglett's Tunnel|MUmu|walk|41:19-22:70:mu:,41:20-23:60:MU:,50:19-22:30:mu:,50:20-23:30:MU:,246:20-23:10:MU:,793:55:100:mu:
Dividing Peak Tunnel|MU|bubbling-spots|352:17-20:100:MU:
Dividing Peak Tunnel|MU|static|767:17-20::MU:
Exeggutor Island|MUmu|island-scan|497:43::mu:,652:45::MU:
Exeggutor Island|MUmu|sos|351:40-43:12:mu:,351:42-45:12:MU:,705:40-43:10:mu:,705:42-45:10:MU:
Exeggutor Island|MUmu|static|103:40::mu:,127:42-43::MU:
Exeggutor Island|MUmu|walk|102:40-43:40:mu:,102:42-45:20:MU:,103:40-43:20:mu:,103:42-45:20:MU:,127:42-45:10:MU:,279:40-43:30:mu:,279:42-45:20:MU:,357:42-45:20:MU:,423:40-43:10:mu:,423:42-45:10:MU:
Haina Desert|MUmu|bubbling-spots|51:28-31:20:mu:,51:32-35:20:MU:,328:28-31:10:mu:,328:32-35:10:MU:,551:28-31:70:mu:,552:32-35:70:MU:
Haina Desert|MUmu|sos|343:32-35:30:M:,351:28-31:11:mu:,351:32-35:12:MU:,444:28-31:10:mu:,444:32-35:10:MU:,622:32-35:30:U:
Haina Desert|MUmu|sos-from-bubbling-spot|343:32-35:45:M:,351:28-31:11:mu:,351:32-35:12:MU:,444:28-31:10:mu:,444:32-35:10:MU:,622:32-35:45:U:
Haina Desert|m|static|797:65::m:
Haina Desert|MUmu|walk|51:28-31:30:mu:,51:32-35:30:MU:,551:28-31:70:mu:,552:32-35:70:MU:,797:65:100:m:
Hano Beach|MUmu|bubbling-spots|72:21-24:100:mu:,72:22-25:100:MU:
Hano Beach|MU|sos|72:22-25:15:MU:,121:22-25:15:MU:,456:22-25:15:MU:,771:22-25:15:MU:
Hano Beach|MUmu|surf|72:21-24:30:mu:,72:22-25:30:MU:,278:21-24:20:mu:,278:22-25:10:MU:,456:21-24:30:mu:,456:22-25:30:MU:,771:21-24:20:mu:,771:22-25:30:MU:
Hano Beach|MUmu|walk|120:21-24:80:mu:,120:22-25:70:MU:,769:21-24:20:mu:,769:22-25:30:MU:
Hau'oli Cemetery|MUmu|island-scan|607:10::mu:,607:9::MU:
Hau'oli Cemetery|MUmu|walk|41:7-10:20:mu:,41:6-9:20:MU:,92:7-10:50:mu:,92:6-9:40:MU:,198:6-9:40:MU:,200:7-10:30:mu:,425:7-10:30:mu:,425:6-9:40:MU:
Hau'oli City|MU|bubbling-spots|129:10-22:15:MU:,222:10-22:35:MU:,223:10-22:15:MU:,366:10-22:5:MU:,370:10-22:15:MU:,746:10-22:15:MU:
Hau'oli City|MUmu|island-scan|599:8::mu:,664:9::MU:
Hau'oli City|MUmu|sos|25:5-8:15:mu:,122:6-9:15:MU:,130:10-17:15:MU:,223:15-18:15:MU:,224:10-17:15:MU:,367:10-17:15:MU:,368:10-17:15:MU:,440:5-8:15:mu:,440:6-9:15:MU:,747:10-17:15:MU:
Hau'oli City|MU|sos-from-bubbling-spot|130:10-22:15:MU:,224:10-22:15:MU:,367:10-22:15:MU:,368:10-22:15:MU:,747:10-22:15:MU:
Hau'oli City|MU|static|97:29::MU:,97:29::MU:After Beat Olivias Trial,760:28::MU:,760:28::MU:After Beat Olivias Trial,801:50::MU:After Hall Of Fame · Scan Qr Code
Hau'oli City|MU|super-rod|129:10-17:25:MU:,222:10-17:5:MU:,223:10-17:15:MU:,366:10-17:5:MU:,370:10-17:25:MU:,746:10-17:25:MU:
Hau'oli City|MU|surf|72:15-18:40:MU:,278:15-18:20:MU:,456:15-18:20:MU:,458:15-18:20:MU:
Hau'oli City|MUmu|walk|19:5-8:20:mu:,52:5-8:10:mu:,52:6-9:10:MU:,63:5-8:25:mu:,63:6-9:20:MU:,81:5-8:10:mu:,81:6-9:10:MU:,88:5-8:10:mu:,88:6-9:10:MU:,172:5-8:5:mu:,278:5-8:20:mu:,278:6-9:5:MU:,439:6-9:20:MU:,676:6-9:25:MU:,734:5-8:20:mu:
Heahea Beach|MU|gift|20:20::M:,105:25::U:,735:20::U:,738:35::U:,743:50::U:,752:25::M:,754:30::U:,758:30::M:,777:35::M:,778:40::MU:,784:50::M:
Heahea City|MU|gift|25:40::MU:
Iki Town|mu|gift|722:5::mu:,725:5::mu:,728:5::mu:
Kala'e Bay|MUmu|bubbling-spots|90:10-15:20:mu:,90:10-22:35:MU:,129:10-15:50:mu:,129:10-22:25:MU:,223:10-22:15:MU:,746:10-15:30:mu:,746:10-22:25:MU:
Kala'e Bay|MUmu|island-scan|116:18::MUmu:
Kala'e Bay|MUmu|sos|80:15-18:15:MUmu:,130:10-15:15:mu:,130:10-17:15:MU:,199:15-18:15:MU:,223:15-18:15:MU:,224:10-17:15:MU:,372:15-18:15:MUmu:
Kala'e Bay|MUmu|sos-from-bubbling-spot|130:10-15:15:mu:,130:10-22:15:MU:,224:10-22:15:MU:
Kala'e Bay|MUmu|super-rod|90:10-15:1:mu:,90:10-17:5:MU:,129:10-15:79:mu:,129:10-17:35:MU:,223:10-17:25:MU:,746:10-15:20:mu:,746:10-17:35:MU:
Kala'e Bay|MUmu|surf|72:15-18:40:MUmu:,278:15-18:20:MUmu:,456:15-18:40:mu:,456:15-18:20:MU:,458:15-18:20:MU:
Kala'e Bay|MUmu|walk|19:15-18:30:MUmu:,79:15-18:20:MUmu:,278:15-18:40:MUmu:,371:15-18:10:MUmu:,734:15-18:30:MUmu:
Konikoni City|mu|npc-trade|61:22::mu:
Konikoni City|MU|static|132:29::MU:
Lake of the Moone|Mm|gift|789:5::Mm:
Lake of the Sunne|Uu|gift|789:5::Uu:
Lush Jungle|MUmu|bubbling-spots|753:18-21:100:mu:,762:19-22:100:MU:,765:19-22:60:M:,766:19-22:60:U:
Lush Jungle|MUmu|sos|10:19-22:45:MU:,10:18-21:15:mu:,12:19-22:45:MU:,12:18-21:30:mu:,164:19-22:45:MU:,169:41-44:15:MU:,185:19-22:45:MU:,185:18-21:15:mu:,351:18-21:36:mu:,351:19-22:36:MU:,440:19-22:45:MU:,440:18-21:15:mu:,637:41-44:15:MU:,704:18-21:30:mu:,704:19-22:30:MU:,732:18-21:45:mu:,732:19-22:45:MU:,758:41-44:15:MU:
Lush Jungle|MU|sos-from-bubbling-spot|732:19-22:30:MU:
Lush Jungle|MUmu|walk|10:18-21:10:mu:,11:19-22:30:MU:,11:18-21:10:mu:,41:18-21:70:mu:,42:41-44:39:MU:,46:18-21:60:mu:,46:19-22:30:MU:,50:18-21:30:mu:,51:41-44:30:MU:,127:18-21:10:mu:,127:19-22:12:MU:,163:19-22:60:MU:,438:19-22:30:MU:,438:18-21:10:mu:,636:41-44:1:MU:,732:18-21:60:mu:,732:19-22:66:MU:,753:18-21:70:mu:,753:19-22:60:MU:,755:18-21:60:mu:,755:19-22:30:MU:,757:41-44:30:MU:,761:18-21:40:mu:,762:19-22:30:MU:,764:18-21:15:mu:,764:19-22:30:MU:,765:18-21:15:m:,765:19-22:15:M:,766:18-21:15:u:,766:19-22:15:U:,796:65:100:mu:
Mahalo Trail|MU|gift|791:60::U:,792:60::M:
Malie City|mu|npc-trade|440:27::mu:
Malie City|mu|sos|569:24-27:15:mu:
Malie City|MUmu|walk|20:24-27:20:mu:,81:24-27:20:mu:,81:25-28:20:MU:,88:24-27:30:mu:,88:25-28:30:MU:,568:24-27:30:mu:,568:25-28:30:MU:,572:25-28:20:MU:,735:24-27:20:mu:
Malie Garden|MU|bubbling-spots|118:10-33:20:MU:,129:10-33:30:MU:,130:10-33:35:MU:,550:10-33:15:MU:
Malie Garden|MUmu|sos|53:25-28:15:MU:,61:24-27:10:mu:,61:25-28:10:MU:,62:24-27:1:mu:,62:25-28:1:MU:,119:10-27:15:mu:,119:10-28:15:MU:,130:10-27:15:mu:,130:10-28:15:MU:,186:24-27:1:mu:,186:25-28:1:MU:,351:24-27:11:mu:,351:25-28:11:MU:
Malie Garden|MU|sos-from-bubbling-spot|119:10-33:15:MU:,130:10-33:15:MU:
Malie Garden|MUmu|super-rod|118:10-27:40:mu:,118:10-28:30:MU:,129:10-27:60:mu:,129:10-28:40:MU:,130:10-28:5:MU:,550:10-28:25:MU:
Malie Garden|MUmu|walk|52:24-27:20:mu:,52:25-28:20:MU:,54:24-27:10:mu:,54:25-28:10:MU:,60:24-27:20:mu:,61:25-28:20:MU:,166:24-27:20:mu:,166:25-28:20:MU:,168:24-27:20:mu:,168:25-28:20:MU:,284:24-27:20:mu:,284:25-28:20:MU:,546:24-27:10:u:,546:25-28:10:U:,548:24-27:10:m:,548:25-28:10:M:,752:24-27:20:mu:,752:25-28:20:MU:,797:65:100:m:,798:60:100:u:
Melemele Meadow|MUmu|sos|10:9-12:15:Umu:,10:10-12:15:M:,12:9-12:30:Umu:,12:10-12:30:M:
Melemele Meadow|MUmu|walk|10:9-12:10:Umu:,10:10-12:10:M:,11:9-12:9:Umu:,11:10-12:9:M:,12:9-12:1:Umu:,12:10-12:1:M:,546:9-12:30:u:,546:9-12:20:U:,548:9-12:30:m:,548:10-12:20:M:,669:9-12:20:U:,669:10-12:20:M:,741:9-12:20:Umu:,741:10-12:20:M:,742:9-12:30:mu:,742:9-12:20:U:,742:10-12:20:M:,794:65:100:u:
Melemele Sea|MUmu|bubbling-spots|129:10-18:20:mu:,129:10-22:15:MU:,222:10-18:20:mu:,222:10-22:25:MU:,223:10-22:15:MU:,366:10-22:55:MU:,370:10-18:40:mu:,370:10-22:15:MU:,746:10-18:20:mu:,746:10-22:15:MU:
Melemele Sea|MUmu|sos|130:10-18:15:mu:,130:10-17:15:MU:,223:15-18:15:MU:,224:10-17:15:MU:,367:10-17:15:MU:,368:10-17:15:MU:,747:10-18:15:mu:,747:10-17:15:MU:
Melemele Sea|MUmu|sos-from-bubbling-spot|130:10-18:15:mu:,130:10-22:15:MU:,224:10-22:15:MU:,367:10-22:15:MU:,368:10-22:15:MU:,747:10-18:15:mu:,747:10-22:15:MU:
Melemele Sea|MUmu|super-rod|129:10-18:78:mu:,129:10-17:25:MU:,222:10-18:1:mu:,222:10-17:5:MU:,223:10-17:15:MU:,366:10-17:5:MU:,370:10-18:1:mu:,370:10-17:25:MU:,746:10-18:20:mu:,746:10-17:25:MU:
Melemele Sea|MUmu|surf|72:15-18:40:MUmu:,278:15-18:20:MUmu:,456:15-18:40:mu:,456:15-18:20:MU:,458:15-18:20:MU:
Memorial Hill|MU|sos|42:21-24:15:MU:
Memorial Hill|MUmu|walk|41:20-23:20:mu:,41:21-24:20:MU:,92:20-23:50:mu:,92:21-24:50:MU:,708:20-23:30:mu:,708:21-24:30:MU:,796:65:100:mu:
Mount Hokulani|MUmu|island-scan|610:28::mu:,610:30::MU:
Mount Hokulani|MUmu|sos|35:27-30:30:MU:,35:25-28:15:mu:,113:25-28:15:mu:,125:27-30:15:MU:,440:27-30:45:MU:
Mount Hokulani|MUmu|walk|22:27-30:40:MU:,22:25-28:70:mu:,132:27-30:20:MU:,132:25-28:10:mu:,173:27-30:40:MU:,173:25-28:10:mu:,227:27-30:10:MU:,227:25-28:10:mu:,239:27-30:10:MU:,374:27-30:30:MU:,374:25-28:10:mu:,605:27-30:70:MU:,774:27-30:80:MU:,774:25-28:30:mu:
Mount Lanakila Crater|MU|static|800:65::MU:
Mount Lanakila|MUmu|sos|351:42-45:12:mu:,351:30-45:22:MU:,362:42-45:30:mu:,582:30-33:11:MU:,583:42-45:10:mu:,583:47-50:10:MU:,584:42-45:1:MU:
Mount Lanakila|MUmu|walk|20:30-33:20:MU:,27:42-45:30:m:,27:30-50:60:M:,37:42-45:30:u:,37:30-50:60:U:,42:42-45:30:mu:,42:48-51:30:MU:,215:42-45:40:mu:,215:47-51:40:MU:,359:42-45:30:mu:,359:30-51:60:U:,359:30-51:50:M:,361:42-45:60:mu:,361:30-33:30:MU:,362:47-51:60:MU:,735:30-33:20:MU:,780:42-45:10:m:,780:48-51:10:M:
Paniola Ranch|MUmu|gift|133:1::MUmu:
Paniola Ranch|MUmu|sos|128:12-15:15:MUmu:,241:12-15:15:MUmu:
Paniola Ranch|MUmu|walk|128:12-15:5:MUmu:,179:12-15:30:MU:,241:12-15:5:MUmu:,506:12-15:40:mu:,506:12-15:20:MU:,749:12-15:50:mu:,749:12-15:40:MU:
Paniola Town|MUmu|bubbling-spots|129:10-18:50:mu:,129:10-22:40:MU:,339:10-18:50:mu:,339:10-22:60:MU:
Paniola Town|MUmu|sos|130:10-18:15:mu:,130:10-17:15:MU:,340:10-18:15:mu:,340:10-17:15:MU:
Paniola Town|MUmu|sos-from-bubbling-spot|130:10-18:15:mu:,130:10-22:15:MU:,340:10-18:15:mu:,340:10-22:15:MU:
Paniola Town|MUmu|super-rod|129:10-18:99:mu:,129:10-17:90:MU:,339:10-18:1:mu:,339:10-17:10:MU:
Poké Pelago|MUmu|gift|21:21-55::mu:,41:21-55::MUmu:,60:21-55::mu:,64:21-55::mu:,79:21-55::MU:,81:21-55::mu:,86:21-55::MU:,90:21-55::mu:,92:21-55::mu:,120:21-55::MUmu:,122:21-55::MU:,123:49-55::mu:,124:21-55::MU:,127:21-55::MUmu:,131:37-55::MU:,131:49-55::mu:,163:21-55::MU:,177:21-55::MU:,180:21-55::MU:,198:21-55::mu:,200:37-55::MU:,209:49-55::MU:,222:21-55::MU:,227:37-55::mu:,228:37-55::U:,278:21-55::MUmu:,309:37-55::M:,354:37-55::MU:,357:49-55::MU:,375:37-55::mu:,426:21-55::mu:,429:49-55::mu:,430:49-55::MU:,587:49-55::mu:,627:21-55::u:,629:21-55::m:,661:21-55::mu:,667:49-55::MU:,701:21-55::MU:,703:21-55::mu:,707:37-55::mu:,709:21-55::mu:,731:21-55::MUmu:,742:21-55::MU:,764:21-55::MU:,771:21-55::MUmu:
Poni Breaker Coast|MUmu|bubbling-spots|129:10-43:50:mu:,129:10-49:40:MU:,318:10-49:20:MU:,319:10-43:10:mu:,320:10-43:40:mu:,320:10-49:100:MU:,321:41-44:10:MU:,369:10-49:10:MU:,691:41-44:20:M:,693:41-44:20:U:
Poni Breaker Coast|MUmu|sos|130:10-43:15:mu:,130:10-44:15:MU:,319:10-44:15:MU:,321:10-43:15:mu:,321:10-44:15:MU:
Poni Breaker Coast|MUmu|sos-from-bubbling-spot|130:10-43:15:mu:,130:10-49:15:MU:,319:10-49:15:MU:,321:10-43:15:mu:,321:10-49:15:MU:
Poni Breaker Coast|MUmu|static|767:40-43::mu:,767:41-44::MU:
Poni Breaker Coast|MUmu|super-rod|129:10-43:79:mu:,129:10-44:49:MU:,318:10-44:10:MU:,319:10-43:1:mu:,320:10-43:20:mu:,320:10-44:40:MU:,369:10-44:1:MU:
Poni Breaker Coast|MU|surf|73:41-44:30:MU:,131:41-44:5:MU:,279:41-44:20:MU:,423:41-44:20:MU:,457:41-44:25:MU:
Poni Coast|MUmu|bubbling-spots|51:56-59:100:MUmu:
Poni Gauntlet|MUmu|bubbling-spots|129:10-59:50:mu:,129:10-66:50:MU:,147:10-59:10:mu:,147:10-66:10:MU:,339:10-59:40:mu:,339:10-66:40:MU:
Poni Gauntlet|MUmu|island-scan|468:59::mu:,479:61::MU:
Poni Gauntlet|MUmu|npc-trade|128:59::MU:,663:59::mu:
Poni Gauntlet|MUmu|sos|130:10-59:15:mu:,130:10-61:15:MU:,148:10-59:15:mu:,148:10-61:15:MU:,149:10-59:15:mu:,149:10-61:15:MU:,340:10-59:15:mu:,340:10-61:15:MU:
Poni Gauntlet|MUmu|sos-from-bubbling-spot|130:10-59:15:mu:,130:10-66:15:MU:,148:10-59:15:mu:,148:10-66:15:MU:,149:10-59:15:mu:,149:10-66:15:MU:,340:10-59:15:mu:,340:10-66:15:MU:
Poni Gauntlet|MUmu|super-rod|129:10-59:59:mu:,129:10-61:59:MU:,147:10-59:1:mu:,147:10-61:1:MU:,339:10-59:40:mu:,339:10-61:40:MU:
Poni Gauntlet|MUmu|walk|20:56-59:30:mu:,55:56-59:15:mu:,55:58-61:10:MU:,108:58-61:20:MU:,210:56-59:20:mu:,210:58-61:20:MU:,279:56-59:30:mu:,279:58-61:25:MU:,686:58-61:15:MU:,735:56-59:30:mu:,760:56-59:5:mu:,760:58-61:10:MU:
Poni Grove|MUmu|island-scan|604:55::MUmu:
Poni Grove|MUmu|sos|113:52-55:15:mu:,428:52-55:15:MU:,440:52-55:15:MU:,448:52-55:15:MUmu:,733:52-55:15:MU:
Poni Grove|MU|static|805:65::M:,806:65::U:
Poni Grove|MUmu|walk|20:52-55:30:mu:,127:52-55:10:MUmu:,210:52-55:20:mu:,214:52-55:10:MU:,427:52-55:50:MU:,447:52-55:10:MUmu:,571:52-55:20:MU:,732:52-55:30:MUmu:,735:52-55:30:mu:,805:60:100:M:,806:60:100:U:
Poni Meadow|MUmu|bubbling-spots|129:10-57:50:mu:,129:10-62:50:MU:,147:10-57:10:mu:,147:10-62:10:MU:,339:10-57:40:mu:,339:10-62:40:MU:
Poni Meadow|MUmu|island-scan|542:57::MUmu:
Poni Meadow|MUmu|sos|130:10-57:15:MUmu:,148:10-57:15:MUmu:,340:10-57:15:MUmu:
Poni Meadow|MUmu|sos-from-bubbling-spot|130:10-57:15:mu:,130:10-62:15:MU:,148:10-57:15:mu:,148:10-62:15:MU:,340:10-57:15:mu:,340:10-62:15:MU:
Poni Meadow|MUmu|super-rod|129:10-57:59:MUmu:,147:10-57:1:MUmu:,339:10-57:40:MUmu:
Poni Meadow|MUmu|walk|200:54-57:10:MU:,546:54-57:50:u:,546:54-57:30:U:,548:54-57:50:m:,548:54-57:30:M:,670:54-57:20:MU:,741:54-57:20:MUmu:,743:54-57:30:mu:,743:54-57:50:MU:
Poni Plains|MUmu|berry-trees|739:54-57:100:MUmu:
Poni Plains|MUmu|bubbling-spots|20:54-57:70:MUmu:,22:54-57:70:MUmu:,57:54-57:80:mu:,57:54-57:60:MU:,113:54-57:20:MU:,123:54-57:30:MUmu:,190:54-57:20:MU:,297:54-57:30:mu:,546:54-57:70:u:,546:54-57:50:U:,548:54-57:70:m:,548:54-57:50:M:,587:54-57:20:MUmu:,628:54-57:30:Uu:,630:54-57:30:Mm:,668:54-57:30:MU:,735:54-57:70:MUmu:
Poni Plains|MUmu|island-scan|306:57::MU:,534:57::mu:
Poni Plains|MUmu|sos|128:54-57:60:MUmu:,241:54-57:60:MUmu:,733:54-57:60:MU:
Poni Plains|MU|sos-from-bubbling-spot|242:54-57:15:MU:,424:54-57:15:MU:
Poni Plains|MUmu|walk|20:54-57:100:MUmu:,22:54-57:20:MUmu:,97:54-57:20:mu:,97:54-57:30:MU:,128:54-57:40:MUmu:,241:54-57:40:MUmu:,279:54-57:20:MUmu:,297:54-57:30:MU:,546:54-57:80:u:,546:54-57:70:U:,548:54-57:80:m:,548:54-57:70:M:,732:54-57:60:MUmu:,735:54-57:100:MUmu:,750:54-57:20:MUmu:
Poni Wilds|MUmu|berry-trees|739:40-43:100:mu:,739:41-44:100:MU:
Poni Wilds|mu|bubbling-spots|129:10-43:50:mu:,320:10-43:100:mu:,321:40-43:10:mu:,369:10-43:10:mu:
Poni Wilds|MUmu|island-scan|503:43::mu:,658:44::MU:
Poni Wilds|mu|sos|130:10-43:15:mu:,321:10-43:15:mu:,457:40-43:15:mu:
Poni Wilds|mu|sos-from-bubbling-spot|130:10-43:15:mu:,321:10-43:15:mu:
Poni Wilds|mu|static|767:40-43::mu:
Poni Wilds|mu|super-rod|129:10-43:79:mu:,320:10-43:20:mu:,369:10-43:1:mu:
Poni Wilds|mu|surf|73:40-43:30:mu:,131:40-43:5:mu:,279:40-43:20:mu:,423:40-43:20:mu:,457:40-43:25:mu:
Poni Wilds|MUmu|walk|20:40-43:30:mu:,102:40-43:10:mu:,210:40-43:20:mu:,210:41-44:20:MU:,279:40-43:30:mu:,279:41-44:30:MU:,423:40-43:10:mu:,423:41-44:10:MU:,676:41-44:20:MU:,686:41-44:20:MU:,735:40-43:30:mu:
Resolution Cave|MUmu|sos|42:56-59:15:MU:,169:54-57:15:mu:,169:56-59:15:MU:
Resolution Cave|MU|static|718:60::MU:
Resolution Cave|MUmu|walk|42:54-57:70:mu:,42:56-59:40:MU:,51:54-57:30:mu:,51:56-59:30:MU:,621:56-59:15:MU:,715:56-59:15:MU:,799:70:100:mu:
Route 10|MUmu|berry-trees|739:24-27:100:mu:,739:26-29:100:MU:
Route 10|MUmu|bubbling-spots|22:24-27:80:mu:,22:26-29:50:MU:,204:26-29:30:MU:,227:24-27:20:mu:,227:26-29:20:MU:
Route 10|MUmu|island-scan|18:29::MU:,397:27::mu:
Route 10|MUmu|sos|675:24-27:15:mu:,675:26-29:15:MU:
Route 10|MUmu|walk|20:24-27:30:mu:,20:26-29:30:MU:,22:24-27:30:mu:,22:26-29:30:MU:,166:24-27:20:mu:,166:26-29:20:MU:,168:24-27:20:mu:,168:26-29:20:MU:,227:24-27:10:mu:,227:26-29:10:MU:,674:24-27:10:mu:,674:26-29:10:MU:,735:24-27:30:mu:,735:26-29:30:MU:
Route 11|MUmu|island-scan|288:27::mu:,391:29::MU:
Route 11|MUmu|sos|675:24-27:15:mu:,675:26-29:15:MU:,733:26-29:15:MU:
Route 11|MUmu|walk|20:24-27:20:mu:,46:24-27:10:mu:,47:26-29:10:MU:,166:24-27:20:mu:,166:26-29:20:MU:,168:24-27:20:mu:,168:26-29:20:MU:,674:24-27:20:mu:,674:26-29:20:MU:,732:24-27:20:mu:,732:26-29:20:MU:,735:24-27:20:mu:,755:24-27:10:mu:,756:26-29:10:MU:,775:24-27:10:mu:,775:26-29:30:MU:
Route 12|mu|berry-trees|739:27-30:100:mu:
Route 12|MUmu|sos|113:26-29:15:mu:,125:26-29:15:mu:,750:29-32:15:MU:
Route 12|MUmu|walk|74:26-29:40:mu:,75:29-32:30:MU:,229:29-32:20:U:,239:26-29:10:mu:,310:29-32:20:M:,324:26-29:20:mu:,324:29-32:20:MU:,749:26-29:30:mu:,749:29-32:30:MU:
Route 13|MUmu|sos|130:10-30:15:mu:,130:10-33:15:MU:
Route 13|MUmu|super-rod|129:10-30:79:mu:,129:10-33:55:MU:,746:10-30:20:mu:,746:10-33:40:MU:,779:10-30:1:mu:,779:10-33:5:MU:
Route 14|MUmu|bubbling-spots|129:10-31:50:mu:,129:10-39:40:MU:,746:10-31:30:mu:,746:10-39:25:MU:,779:10-31:20:mu:,779:10-39:35:MU:
Route 14|MUmu|sos|130:10-31:15:mu:,130:10-34:15:MU:
Route 14|MUmu|sos-from-bubbling-spot|130:10-31:15:mu:,130:10-39:15:MU:
Route 14|MU|static|592:34::MU:
Route 14|MUmu|super-rod|129:10-31:79:mu:,129:10-34:55:MU:,746:10-31:20:mu:,746:10-34:40:MU:,779:10-31:1:mu:,779:10-34:5:MU:
Route 14|MUmu|surf|72:28-31:40:mu:,73:30-33:30:MU:,279:28-31:20:mu:,279:30-33:20:MU:,456:28-31:40:mu:,456:30-33:30:MU:,592:30-33:20:MU:
Route 14|MUmu|walk|20:28-31:30:mu:,20:30-33:30:MU:,27:28-31:10:m:,27:30-33:10:M:,37:28-31:10:u:,37:30-33:10:U:,279:28-31:30:mu:,279:30-33:30:MU:,359:28-31:10:mu:,359:30-33:10:MU:,361:28-31:20:mu:,361:30-33:20:MU:,735:28-31:30:mu:,735:30-33:30:MU:
Route 15|mu|berry-trees|739:30-33:100:mu:
Route 15|MUmu|bubbling-spots|129:10-33:50:mu:,129:10-40:20:MU:,366:10-40:35:MU:,746:10-33:30:mu:,746:10-40:10:MU:,779:10-33:20:mu:,779:10-40:35:MU:
Route 15|MUmu|gift|137:30::MUmu:
Route 15|MUmu|sos|130:10-33:15:mu:,130:10-35:15:MU:,367:10-35:15:MU:,368:10-35:15:MU:,457:32-35:15:MU:
Route 15|MUmu|sos-from-bubbling-spot|130:10-33:15:mu:,130:10-40:15:MU:,367:10-40:15:MU:,368:10-40:15:MU:
Route 15|M|static|769:30::M:
Route 15|MUmu|super-rod|129:10-33:79:mu:,129:10-35:50:MU:,366:10-35:5:MU:,746:10-33:20:mu:,746:10-35:40:MU:,779:10-33:1:mu:,779:10-35:5:MU:
Route 15|MUmu|surf|72:30-33:40:mu:,73:32-35:40:MU:,279:30-33:20:mu:,279:32-35:20:MU:,456:30-33:40:mu:,456:32-35:40:MU:
Route 15|MUmu|walk|20:30-33:30:MUmu:,79:30-33:20:MUmu:,279:30-33:50:MUmu:,735:30-33:30:MUmu:
Route 16|MUmu|berry-trees|739:30-33:100:mu:,739:32-35:100:MU:
Route 16|MUmu|gift|718:30-50::mu:,718:63::MU:
Route 16|MUmu|island-scan|394:35::MU:,578:33::mu:
Route 16|MUmu|walk|20:30-33:30:mu:,20:32-35:50:MU:,79:30-33:20:mu:,79:32-35:40:MU:,279:30-33:50:mu:,279:32-35:80:MU:,559:32-35:30:MU:,735:30-33:30:mu:,735:32-35:50:MU:
Route 17|MUmu|berry-trees|739:31-34:100:mu:,739:33-36:100:MU:
Route 17|MUmu|sos|22:33-36:15:U:,168:33-36:15:U:,351:31-34:100:mu:,351:33-36:100:MU:,624:33-36:15:MU:,675:31-34:30:mu:,704:31-34:20:mu:,704:33-36:20:MU:
Route 17|u|static|798:60::u:
Route 17|MUmu|walk|20:31-34:60:mu:,20:33-36:40:MU:,22:31-34:60:mu:,22:33-36:40:MU:,75:31-34:20:mu:,75:33-36:20:MU:,166:31-34:20:mu:,166:33-36:20:MU:,168:31-34:20:mu:,168:33-36:20:MU:,227:31-34:10:mu:,227:33-36:15:MU:,559:33-36:60:MU:,625:33-36:5:MU:,674:31-34:30:mu:,735:31-34:60:mu:,735:33-36:40:MU:,798:60:100:u:
Route 1|MU|gift|722:5::MU:,725:5::MU:,728:5::MU:
Route 1|MUmu|sos|10:3-13:30:mu:,25:3-5:15:mu:,25:2-3:15:MU:,143:10-13:15:mu:,185:10-13:15:mu:,440:3-13:45:mu:,440:2-3:15:MU:
Route 1|MU|static|92:19::MU:,425:19::MU:
Route 1|mu|surf|72:15-18:40:mu:,278:15-18:20:mu:,456:15-18:40:mu:
Route 1|MUmu|walk|10:2-13:40:mu:,10:2-3:45:MU:,11:3-13:20:mu:,19:2-13:100:mu:,19:2-14:75:MU:,52:6-8:30:mu:,52:5-8:50:MU:,79:5-7:20:mu:,79:4-7:20:MU:,81:6-8:50:mu:,81:5-8:10:MU:,88:6-8:20:mu:,88:5-8:10:MU:,165:2-13:45:mu:,165:2-3:20:MU:,167:2-13:45:mu:,167:2-3:20:MU:,172:3-5:5:mu:,172:2-3:5:MU:,278:5-7:50:mu:,278:4-7:50:MU:,427:2-3:40:MU:,438:10-13:15:mu:,438:11-14:30:MU:,446:10-13:5:mu:,446:11-14:10:MU:,570:5-8:30:MU:,686:4-7:30:MU:,731:2-13:70:mu:,731:2-14:40:MU:,734:2-13:100:mu:,734:2-14:75:MU:,736:3-5:10:mu:,736:2-3:15:MU:,744:11-14:20:MU:
Route 2|MUmu|berry-trees|739:7-10:100:mu:,739:8-11:100:MU:
Route 2|MUmu|bubbling-spots|19:9-10:100:mu:,23:7-11:100:MU:,96:7-11:70:MU:,206:7-11:30:MU:,296:9-10:60:mu:,296:7-11:70:MU:,734:9-10:100:mu:
Route 2|MUmu|island-scan|1:10::MU:,152:10::mu:
Route 2|MUmu|npc-trade|66:9::mu:,701:8::MU:
Route 2|MUmu|walk|19:7-10:20:mu:,19:6-10:20:MU:,21:7-10:40:mu:,21:7-10:10:MU:,23:6-10:40:MU:,52:7-10:30:mu:,52:6-9:10:MU:,58:7-10:20:mu:,58:7-10:10:MU:,63:7-10:20:mu:,63:6-9:10:MU:,96:6-10:60:MU:,96:7-10:20:mu:,235:7-10:30:mu:,235:6-10:20:MU:,296:6-10:60:MU:,676:6-9:10:MU:,734:7-10:20:mu:,734:6-10:20:MU:,742:7-10:20:mu:,742:7-10:10:MU:
Route 3|MUmu|berry-trees|739:9-12:100:mu:,739:10-13:100:MU:
Route 3|MUmu|bubbling-spots|21:11-12:70:mu:,21:10-13:70:MU:,627:11-12:30:u:,627:10-13:30:U:,629:11-12:30:m:,629:10-13:30:M:
Route 3|MUmu|island-scan|4:12::MU:,155:12::mu:
Route 3|MUmu|sos|373:9-12:15:MUmu:
Route 3|MUmu|walk|19:9-12:20:mu:,21:9-12:89:mu:,21:9-12:59:MU:,56:9-12:40:mu:,56:9-12:60:MU:,225:9-12:10:mu:,371:9-12:1:MUmu:,701:9-12:20:MU:,734:9-12:20:mu:,742:9-12:40:mu:,742:9-12:60:MU:
Route 4|MUmu|berry-trees|739:11-14:100:MUmu:
Route 4|MUmu|island-scan|15:14::MU:,543:14::mu:
Route 4|MUmu|sos|39:11-14:15:MUmu:,196:11-14:15:MUmu:,197:11-14:15:MUmu:,440:11-14:15:MUmu:
Route 4|MUmu|walk|19:11-14:10:MUmu:,133:11-14:5:MUmu:,174:11-14:10:mu:,174:11-14:20:MU:,506:11-14:30:mu:,506:11-14:50:MU:,731:11-14:40:MUmu:,734:11-14:10:MUmu:,736:11-14:10:MUmu:,749:11-14:20:MUmu:
Route 5|MUmu|berry-trees|739:13-16:100:MUmu:
Route 5|MUmu|bubbling-spots|50:18-21:100:MUmu:
Route 5|MUmu|island-scan|69:16::mu:,253:16::MU:
Route 5|MUmu|npc-trade|714:19::MU:,761:16::mu:
Route 5|MUmu|sos|10:13-16:15:MUmu:,12:13-16:30:MUmu:
Route 5|MUmu|walk|10:13-16:10:MUmu:,11:13-16:9:MUmu:,12:13-16:1:MUmu:,506:13-16:30:mu:,506:13-16:20:MU:,731:13-16:20:MUmu:,736:13-16:10:mu:,736:13-16:20:MU:,753:13-16:20:MUmu:
Route 6|MUmu|island-scan|280:17::MU:,574:17::mu:
Route 6|MUmu|sos|39:14-17:30:MUmu:,196:14-17:30:MUmu:,197:14-17:30:MUmu:,440:14-17:30:MUmu:
Route 6|MUmu|walk|19:14-17:20:MUmu:,133:14-17:10:MUmu:,174:14-17:20:mu:,174:14-17:40:MU:,506:14-17:60:mu:,506:14-17:100:MU:,731:14-17:80:MUmu:,734:14-17:20:MUmu:,736:14-17:20:MUmu:,741:14-17:20:MUmu:,749:14-17:20:MUmu:
Route 7|MUmu|bubbling-spots|50:16-19:100:MUmu:,120:10-23:35:MU:,129:10-23:45:MU:,746:10-23:20:MU:
Route 7|MUmu|island-scan|363:19::MUmu:
Route 7|MUmu|sos|121:10-19:15:mu:,121:10-18:15:MU:,130:10-19:15:mu:,130:10-18:15:MU:
Route 7|MU|sos-from-bubbling-spot|121:10-23:15:MU:,130:10-23:15:MU:
Route 7|MUmu|super-rod|120:10-19:1:mu:,120:10-18:5:MU:,129:10-19:79:mu:,129:10-18:55:MU:,746:10-19:20:mu:,746:10-18:40:MU:
Route 7|MUmu|surf|72:16-19:30:MUmu:,278:16-19:20:MUmu:,456:16-19:30:MUmu:,771:16-19:20:MUmu:
Route 8|MUmu|berry-trees|739:17-20:100:MUmu:
Route 8|MUmu|bubbling-spots|129:10-25:60:mu:,129:10-25:40:MU:,170:10-25:20:mu:,170:10-25:35:MU:,223:10-25:5:MU:,746:10-25:20:MUmu:
Route 8|MUmu|gift|138:15::MU:,140:15::MU:,345:15::MU:,347:15::MU:,408:15::MUmu:,410:15::MUmu:,564:15::MUmu:,566:15::MUmu:,696:15::MU:,698:15::MU:
Route 8|MUmu|island-scan|256:20::MU:,404:20::mu:
Route 8|MU|npc-trade|24:22::MU:
Route 8|MUmu|sos|20:17-20:15:MU:,130:10-20:15:MUmu:,171:10-20:15:MU:,224:10-20:15:MU:,662:17-20:15:MU:,731:17-20:15:mu:,735:17-20:15:MU:
Route 8|MUmu|sos-from-bubbling-spot|130:10-25:15:MUmu:,171:10-25:15:MU:,224:10-25:15:MU:
Route 8|MUmu|static|767:17-20::MUmu:
Route 8|MUmu|super-rod|129:10-20:79:mu:,129:10-20:50:MU:,170:10-20:1:mu:,170:10-20:5:MU:,223:10-20:15:MU:,746:10-20:20:mu:,746:10-20:30:MU:
Route 8|MUmu|walk|19:17-20:30:MUmu:,661:17-20:15:MU:,662:17-20:15:mu:,732:17-20:30:MUmu:,734:17-20:30:MUmu:,757:17-20:20:mu:,757:17-20:15:MU:,759:17-20:5:mu:,759:17-20:10:MU:
Route 9|MUmu|sos|130:10-23:15:MUmu:,747:10-23:15:MUmu:
Route 9|MU|static|132:29::MU:
Route 9|MUmu|super-rod|129:10-23:15:mu:,129:10-23:20:MU:,222:10-23:5:mu:,222:10-23:15:MU:,370:10-23:70:mu:,370:10-23:50:MU:,746:10-23:10:mu:,746:10-23:15:MU:
Royal Avenue|MU|npc-trade|339:21::MU:
Royal Avenue|MUmu|sos|94:29-32:15:mu:,94:31-34:15:MU:
Royal Avenue|MUmu|walk|42:29-32:40:mu:,42:31-34:20:MU:,93:29-32:40:mu:,93:31-34:30:MU:,353:31-34:30:MU:,707:29-32:15:mu:,707:31-34:15:MU:,778:29-32:5:mu:,778:31-34:5:MU:
Ruins of Abundance|MUmu|static|787:60::MUmu:
Ruins of Conflict|MUmu|static|785:60::MUmu:
Ruins of Hope|MUmu|static|788:60::MUmu:
Ruins of Life|MUmu|static|786:60::MUmu:
Sandy Cave|MU|walk|41:6-9:70:MU:,54:6-9:30:MU:
Seafolk Village|MUmu|bubbling-spots|129:10-43:50:mu:,129:10-49:40:MU:,320:10-43:40:mu:,320:10-49:25:MU:,781:10-43:10:mu:,781:10-49:35:MU:
Seafolk Village|MUmu|gift|142:40::MUmu:
Seafolk Village|MUmu|npc-trade|422:44::MU:,762:43::mu:
Seafolk Village|MUmu|sos|130:10-43:15:mu:,130:10-44:15:MU:,321:10-43:15:mu:,321:10-44:15:MU:
Seafolk Village|MUmu|sos-from-bubbling-spot|130:10-43:15:mu:,130:10-49:15:MU:,321:10-43:15:mu:,321:10-49:15:MU:
Seafolk Village|MUmu|super-rod|129:10-43:79:mu:,129:10-44:55:MU:,320:10-43:20:mu:,320:10-44:40:MU:,781:10-43:1:mu:,781:10-44:5:MU:
Seaward Cave|MUmu|bubbling-spots|129:10-15:50:mu:,129:10-22:40:MU:,339:10-15:50:mu:,339:10-22:60:MU:
Seaward Cave|MUmu|island-scan|7:12::MU:,158:12::mu:
Seaward Cave|MUmu|sos|41:15-18:15:MU:,124:9-12:15:MU:,130:10-15:15:mu:,130:10-17:15:MU:,340:10-15:15:mu:,340:10-17:15:MU:,440:9-12:15:MU:
Seaward Cave|MUmu|sos-from-bubbling-spot|130:10-15:15:mu:,130:10-22:15:MU:,340:10-15:15:mu:,340:10-22:15:MU:
Seaward Cave|MUmu|super-rod|129:10-15:99:mu:,129:10-17:90:MU:,339:10-15:1:mu:,339:10-17:10:MU:
Seaward Cave|MUmu|surf|41:15-18:80:mu:,41:15-18:55:MU:,54:15-18:20:mu:,54:15-18:5:MU:,86:15-18:30:MU:,225:15-18:10:MU:
Seaward Cave|MUmu|walk|41:9-12:70:mu:,41:9-12:20:MU:,50:9-12:30:mu:,54:9-12:30:MU:,225:9-12:20:MU:,238:9-12:30:MU:
Secluded Shore|mu|sos|130:10-30:15:mu:
Secluded Shore|mu|super-rod|129:10-30:79:mu:,746:10-30:20:mu:,779:10-30:1:mu:
Secluded Shore|mu|surf|72:27-30:40:mu:,279:27-30:20:mu:,456:27-30:40:mu:
Tapu Village|MUmu|bubbling-spots|129:10-31:50:mu:,129:10-39:40:MU:,746:10-31:30:mu:,746:10-39:25:MU:,779:10-31:20:mu:,779:10-39:35:MU:
Tapu Village|MUmu|island-scan|220:31::mu:,220:33::MU:
Tapu Village|MUmu|npc-trade|75:32::mu:,708:33::MU:
Tapu Village|MUmu|sos|130:10-31:15:mu:,130:10-34:15:MU:,351:28-31:11:mu:,351:30-33:12:MU:,582:28-31:10:mu:,582:30-33:10:MU:
Tapu Village|MUmu|sos-from-bubbling-spot|130:10-31:15:mu:,130:10-39:15:MU:
Tapu Village|MUmu|super-rod|129:10-31:79:mu:,129:10-34:55:MU:,746:10-31:20:mu:,746:10-34:40:MU:,779:10-31:1:mu:,779:10-34:5:MU:
Tapu Village|MUmu|walk|20:28-31:30:mu:,20:30-33:30:MU:,27:28-31:10:m:,27:30-33:10:M:,37:28-31:10:u:,37:30-33:10:U:,279:28-31:30:mu:,279:30-33:30:MU:,359:28-31:10:mu:,359:30-33:10:MU:,361:28-31:20:mu:,361:30-33:20:MU:,735:28-31:30:mu:,735:30-33:30:MU:
Team Rocket's Castle|MU|static|101:60::MU:
Ten Carat Hill|MUmu|island-scan|95:14::MU:,633:13::mu:
Ten Carat Hill|MUmu|sos|302:10-13:15:mu:,302:11-14:15:MU:
Ten Carat Hill|MUmu|walk|41:10-13:30:mu:,41:11-14:20:MU:,50:10-13:20:mu:,54:11-14:10:MU:,66:10-13:30:mu:,66:11-14:30:MU:,303:11-14:30:MU:,327:10-13:10:mu:,327:11-14:30:MU:,524:10-13:50:mu:,524:11-14:30:MU:,703:10-13:40:mu:,703:11-14:30:MU:,744:10-13:20:mu:,744:11-14:20:MU:,800:75:100:mu:Captured All Ultra Beasts · After Finished Looker Sidequest
Ula'ula Beach|MU|berry-trees|739:29-32:100:MU:
Ula'ula Meadow|MUmu|island-scan|315:34::mu:,388:36::MU:
Ula'ula Meadow|MUmu|walk|166:31-34:20:mu:,166:33-36:20:MU:,168:31-34:20:mu:,168:33-36:20:MU:,546:31-34:30:u:,546:33-36:20:U:,548:31-34:30:m:,548:33-36:20:M:,670:33-36:20:MU:,741:31-34:20:mu:,741:33-36:20:MU:,743:31-34:30:mu:,743:33-36:20:MU:
Ultra Megalopolis|MU|gift|803:40::MU:
Ultra Space Wilds Cave World|MU|static|377:60::MU:,378:60::MU:,379:60::MU:,383:60::U:,484:60::M:,485:60::U:,486:60::M:,487:60::MU:Dialga Palkia In Party
Ultra Space Wilds Cliff World|MU|static|144:60::MU:,145:60::MU:,146:60::MU:,250:60::U:,384:60::MU:Groudon Kyogre In Party,488:60::MU:,641:60::U:,642:60::M:,645:60::MU:Tornadus Thundurus In Party,717:60::M:
Ultra Space Wilds Rocky World|MU|static|150:60::MU:,243:60::U:,244:60::M:,483:60::U:,638:60::MU:,639:60::MU:,640:60::MU:,643:60::U:,644:60::M:,716:60::U:
Ultra Space Wilds Water World|MU|static|245:60::MU:Raikou Entei In Party,249:60::M:,380:60::M:,381:60::U:,382:60::M:,480:60::MU:,481:60::MU:,482:60::MU:,646:60::MU:Reshiram Zekrom In Party
Ultra Space Wilds|MU|static|144:60::MU:,145:60::MU:,146:60::MU:,150:60::MU:,195:60::MU:,219:60::MU:,243:60::U:,244:60::M:,245:60::MU:,249:60::M:,250:60::U:,271:60::MU:,274:60::MU:,277:60::MU:,308:60::MU:,326:60::MU:,334:60::MU:,377:60::MU:,378:60::MU:,379:60::MU:,380:60::M:,381:60::U:,382:60::M:,383:60::U:,384:60::MU:,419:60::MU:,450:60::MU:,452:60::MU:,460:60::MU:,469:60::MU:,480:60::MU:,481:60::MU:,482:60::MU:,483:60::U:,484:60::M:,485:60::U:,486:60::M:,487:60::MU:,488:60::MU:,531:60::MU:,558:60::MU:,561:60::MU:,581:60::MU:,618:60::MU:,638:60::MU:,639:60::MU:,640:60::MU:,641:60::U:,642:60::M:,643:60::U:,644:60::M:,645:60::MU:,646:60::MU:,689:60::MU:,695:60::MU:,716:60::U:,717:60::M:
Ultra Space|MU|static|793:60::MU:,794:60::U:,795:60::M:,796:60::MU:,797:60::M:,798:60::U:,799:60::MU:
Vast Poni Canyon|MUmu|bubbling-spots|51:41-44:100:mu:,51:42-45:100:MU:,129:10-44:50:mu:,129:10-51:25:MU:,147:10-44:10:mu:,339:10-44:40:mu:,339:10-51:20:MU:,341:10-51:35:MU:,550:10-51:20:MU:
Vast Poni Canyon|MUmu|sos|130:10-44:15:mu:,130:10-46:15:MU:,148:10-44:15:mu:,302:41-44:30:mu:,302:42-45:30:MU:,340:10-44:15:mu:,340:10-46:15:MU:,342:10-46:15:MU:,783:41-44:15:mu:,783:43-46:15:MU:,784:41-44:15:mu:,784:43-46:15:MU:
Vast Poni Canyon|MUmu|sos-from-bubbling-spot|130:10-44:15:mu:,130:10-51:15:MU:,148:10-44:15:mu:,340:10-44:15:mu:,340:10-51:15:MU:,342:10-51:15:MU:
Vast Poni Canyon|MUmu|super-rod|129:10-44:59:mu:,129:10-46:45:MU:,147:10-44:1:mu:,339:10-44:40:mu:,339:10-46:25:MU:,341:10-46:5:MU:,550:10-46:25:MU:
Vast Poni Canyon|MUmu|surf|42:41-44:80:mu:,42:42-45:80:MU:,55:41-44:20:mu:,55:42-45:20:MU:
Vast Poni Canyon|MUmu|walk|42:41-44:60:mu:,42:42-45:60:MU:,51:41-44:40:mu:,51:42-45:40:MU:,67:41-44:30:mu:,67:43-46:20:MU:,198:41-44:10:mu:,227:41-44:10:mu:,227:43-46:10:MU:,525:41-44:70:mu:,525:42-46:70:MU:,619:43-46:20:MU:,703:41-44:55:mu:,703:42-46:55:MU:,745:41-44:40:mu:,745:43-46:40:MU:,782:41-44:5:mu:,782:43-46:5:MU:
Verdant Cavern|MUmu|bubbling-spots|19:11:100:mu:,19:10:100:M:,734:10:100:U:
Verdant Cavern|m|static|795:60::m:
Verdant Cavern|MUmu|walk|41:8-11:70:mu:,41:8-11:35:MU:,50:8-11:30:mu:,50:8-11:35:MU:,714:8-11:30:MU:,795:60:100:m:
Wela Volcano Park|MUmu|sos|115:16-19:15:MUmu:,126:16-19:15:MUmu:,440:16-19:15:MU:,662:16-19:15:MU:,758:16-19:15:MU:
Wela Volcano Park|MUmu|walk|104:16-19:24:MUmu:,115:16-19:1:MUmu:,240:16-19:15:MUmu:,661:16-19:30:MUmu:,757:16-19:30:MUmu:,793:55:100:mu:
`,
  lgpe: `
Celadon City|PV|npc-trade|27:27::P:,37:27::V:
Cerulean Cave|PV|overworld|41:51-56:100:PV:,42:51-56:100:PV:,54:51-56:100:PV:,55:51-56:100:PV:,74:51-56:100:PV:,75:51-56:100:PV:,108:51-56:100:PV:,111:51-56:100:PV:,112:51-56:100:PV:,113:51-56:100:PV:,132:51-56:100:PV:
Cerulean Cave|PV|overworld-special|143:51-56:100:PV:
Cerulean Cave|PV|overworld-water|60:51-56:100:PV:,61:51-56:100:PV:,62:51-56:100:PV:,129:51-56:100:PV:
Cerulean Cave|PV|static|150:70::PV:
Cerulean City|PV|gift|1:12::PV:
Cerulean City|PV|npc-trade|19:12::PV:
Cinnabar Island Cinnabar Lab (Cinnabar Island)|PV|gift|138:44::PV:,140:44::PV:,142:44::PV:
Cinnabar Island|PV|npc-trade|52:44::V:,88:44::P:
Diglett's Cave|PV|overworld|41:13-18:100:PV:,50:13-18:100:PV:,51:13-18:100:PV:
Diglett's Cave|PV|overworld-special|113:13-18:100:PV:
Fuchsia City|PV|npc-trade|105:38::PV:
Indigo Plateau|PV|npc-trade|103:46::PV:
Kanto Power Plant|PV|overworld|81:37-42:100:PV:,82:37-42:100:PV:,88:37-42:100:P:,89:37-42:100:P:,100:37-42:100:PV:,101:37-42:100:PV:,109:37-42:100:V:,110:37-42:100:V:,125:37-42:100:PV:
Kanto Power Plant|PV|overworld-special|113:37-42:100:PV:
Kanto Power Plant|PV|static|101:43::PV:,145:50::PV:
Lavender Town|PV|npc-trade|50:25::PV:
Mt. Moon|PV|overworld|35:5-10:100:PV:,36:5-10:100:PV:,41:5-10:100:PV:,46:5-10:100:PV:,74:5-10:100:PV:,95:5-10:100:PV:
Mt. Moon|PV|overworld-special|113:5-10:100:PV:
Pallet Town|PV|gift|25:5::P:,133:5::V:
Pokémon Mansion|PV|overworld|19:39-44:100:PV:,20:39-44:100:PV:,88:39-44:100:P:,89:39-44:100:P:,109:39-44:100:V:,110:39-44:100:V:,126:39-44:100:PV:,132:39-44:100:PV:
Pokémon Mansion|PV|overworld-special|113:39-44:100:PV:
Pokémon Tower|PV|overworld|41:27-32:100:PV:,42:27-32:100:PV:,92:27-32:100:PV:,93:27-32:100:PV:,104:27-32:100:PV:
Pokémon Tower|PV|overworld-special|113:27-32:100:PV:
Rock Tunnel|PV|overworld|41:18-23:100:PV:,42:18-23:100:PV:,66:18-23:100:PV:,74:18-23:100:PV:,75:18-23:100:PV:,95:18-23:100:PV:,104:18-23:100:PV:,111:18-23:100:PV:,115:18-23:100:PV:
Rock Tunnel|PV|overworld-special|4:18-23:100:PV:
Route 10|PV|overworld|19:18-23:100:PV:,20:18-23:100:PV:,21:18-23:100:PV:,22:18-23:100:PV:,29:18-23:100:PV:,30:18-23:100:PV:,32:18-23:100:PV:,33:18-23:100:PV:,98:18-23:100:PV:
Route 10|PV|overworld-flying|21:3-56:100:PV:,22:3-56:100:PV:
Route 10|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 10|PV|overworld-special|113:18-23:100:PV:
Route 10|PV|overworld-water|72:18-23:100:PV:,73:18-23:100:PV:,129:18-23:100:PV:,147:18-23:100:PV:,148:18-23:100:PV:
Route 11|PV|overworld|16:13-18:100:PV:,17:13-18:100:PV:,19:13-18:100:PV:,20:13-18:100:PV:,96:13-18:100:PV:,122:13-18:100:PV:
Route 11|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 11|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 11|PV|overworld-special|113:13-18:100:PV:
Route 11|PV|overworld-water|72:13-18:100:PV:,73:13-18:100:PV:,116:13-18:100:PV:,117:13-18:100:PV:,129:13-18:100:PV:
Route 12|PV|overworld|16:31-36:100:PV:,17:31-36:100:PV:,43:31-36:100:P:,44:31-36:100:P:,69:31-36:100:V:,70:31-36:100:V:,83:31-36:100:PV:,98:31-36:100:PV:,99:31-36:100:PV:
Route 12|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 12|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 12|PV|overworld-special|113:31-36:100:PV:
Route 12|PV|overworld-water|72:31-36:100:PV:,73:31-36:100:PV:,116:31-36:100:PV:,117:31-36:100:PV:,129:31-36:100:PV:
Route 12|PV|pokeflute|143:34::PV:
Route 13|PV|overworld|16:33-38:100:PV:,17:33-38:100:PV:,43:33-38:100:P:,44:33-38:100:P:,69:33-38:100:V:,70:33-38:100:V:,83:33-38:100:PV:,98:33-38:100:PV:,99:33-38:100:PV:
Route 13|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 13|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 13|PV|overworld-special|113:33-38:100:PV:
Route 13|PV|overworld-water|72:33-38:100:PV:,73:33-38:100:PV:,116:33-38:100:PV:,117:33-38:100:PV:,129:33-38:100:PV:
Route 14|PV|overworld|16:33-38:100:PV:,17:33-38:100:PV:,43:33-38:100:P:,44:33-38:100:P:,48:33-38:100:PV:,49:33-38:100:PV:,69:33-38:100:V:,70:33-38:100:V:,123:33-38:100:P:,127:33-38:100:V:,128:33-38:100:PV:
Route 14|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 14|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 14|PV|overworld-special|113:33-38:100:PV:
Route 15|PV|overworld|16:33-38:100:PV:,17:33-38:100:PV:,43:33-38:100:P:,44:33-38:100:P:,48:33-38:100:PV:,49:33-38:100:PV:,69:33-38:100:V:,70:33-38:100:V:,123:33-38:100:P:,127:33-38:100:V:,128:33-38:100:PV:
Route 15|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 15|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 15|PV|overworld-special|113:33-38:100:PV:
Route 16|PV|overworld|16:31-36:100:PV:,17:31-36:100:PV:,19:31-36:100:PV:,20:31-36:100:PV:,84:31-36:100:PV:,85:31-36:100:PV:
Route 16|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 16|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 16|PV|overworld-special|113:31-36:100:PV:
Route 16|PV|pokeflute|143:34::PV:
Route 17|PV|overworld|16:33-38:100:PV:,17:33-38:100:PV:,19:33-38:100:PV:,20:33-38:100:PV:,54:33-38:100:PV:,77:33-38:100:PV:,78:33-38:100:PV:,84:33-38:100:PV:,85:33-38:100:PV:,133:33-38:100:PV:
Route 17|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 17|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 17|PV|overworld-special|113:33-38:100:PV:
Route 18|PV|overworld|16:33-38:100:PV:,17:33-38:100:PV:,19:33-38:100:PV:,20:33-38:100:PV:,84:33-38:100:PV:,85:33-38:100:PV:
Route 18|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 18|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 18|PV|overworld-special|113:33-38:100:PV:
Route 18|PV|overworld-water|72:33-38:100:PV:,73:33-38:100:PV:,120:33-38:100:PV:,121:33-38:100:PV:,129:33-38:100:PV:
Route 1|PV|overworld|16:3-4:100:PV:,19:3-4:100:PV:,43:3-4:100:P:,69:3-4:100:V:
Route 1|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 1|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 2 Road 2 (north towards Pewter City)|PV|overworld|10:3-8:100:PV:,13:3-8:100:PV:,16:3-8:100:PV:,19:3-8:100:PV:,43:3-8:100:P:,69:3-8:100:V:
Route 2 Road 2 (north towards Pewter City)|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 2 Road 2 (north towards Pewter City)|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 2 Road 2 (south towards Viridian City)|PV|overworld|10:3-4:100:PV:,13:3-4:100:PV:,16:3-4:100:PV:,19:3-4:100:PV:,43:3-4:100:P:,69:3-4:100:V:
Route 2 Road 2 (south towards Viridian City)|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 2 Road 2 (south towards Viridian City)|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 22|PV|overworld|19:3-4:100:PV:,21:3-4:100:PV:,29:3-4:100:PV:,32:3-4:100:PV:
Route 22|PV|overworld-flying|21:3-56:100:PV:,22:3-56:100:PV:
Route 22|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 22|PV|overworld-water|60:3-4:100:PV:,61:3-4:100:PV:,129:3-4:100:PV:
Route 23|PV|overworld|21:41-46:100:PV:,22:41-46:100:PV:,29:41-46:100:PV:,30:41-46:100:PV:,31:41-46:100:PV:,32:41-46:100:PV:,33:41-46:100:PV:,34:41-46:100:PV:,102:41-46:100:PV:,103:41-46:100:PV:
Route 23|PV|overworld-flying|21:3-56:100:PV:,22:3-56:100:PV:
Route 23|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 23|PV|overworld-special|113:41-46:100:PV:
Route 23|PV|overworld-water|60:41-46:100:PV:,61:41-46:100:PV:,129:41-46:100:PV:
Route 24|PV|gift|4:14::PV:
Route 24|PV|overworld|16:7-12:100:PV:,43:7-12:100:P:,48:7-12:100:PV:,52:7-12:100:V:,54:7-12:100:PV:,69:7-12:100:V:
Route 24|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 24|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 24|PV|overworld-special|7:7-12:100:PV:
Route 24|PV|overworld-water|72:7-12:100:PV:,73:7-12:100:PV:,129:7-12:100:PV:
Route 25|PV|overworld|16:9-14:100:PV:,43:9-14:100:P:,48:9-14:100:PV:,52:9-14:100:V:,54:9-14:100:PV:,69:9-14:100:V:
Route 25|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 25|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 25|PV|overworld-special|7:9-14:100:PV:
Route 25|PV|overworld-water|60:9-14:100:PV:,61:9-14:100:PV:,129:9-14:100:PV:
Route 3|PV|overworld|19:3-8:100:PV:,21:3-8:100:PV:,23:3-8:100:V:,27:3-8:100:P:,56:3-8:100:P:
Route 3|PV|overworld-flying|21:3-56:100:PV:,22:3-56:100:PV:
Route 3|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 3|PV|overworld-special|4:3-8:100:PV:
Route 4|PV|gift|129:5::PV:
Route 4|PV|overworld|19:7-12:100:PV:,21:7-12:100:PV:,23:7-12:100:V:,27:7-12:100:P:,54:7-12:100:PV:,56:7-12:100:P:
Route 4|PV|overworld-flying|21:3-56:100:PV:,22:3-56:100:PV:
Route 4|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 4|PV|overworld-special|4:7-12:100:PV:
Route 4|PV|overworld-water|72:7-12:100:PV:,73:7-12:100:PV:,129:7-12:100:PV:
Route 5|PV|overworld|16:11-16:100:PV:,17:11-16:100:PV:,19:11-16:100:PV:,37:11-16:100:V:,39:11-16:100:PV:,58:11-16:100:P:,63:11-16:100:PV:
Route 5|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 5|PV|overworld-special|113:11-16:100:PV:
Route 6|PV|overworld|16:11-16:100:PV:,17:11-16:100:PV:,19:11-16:100:PV:,37:11-16:100:V:,39:11-16:100:PV:,54:11-16:100:PV:,58:11-16:100:P:,63:11-16:100:PV:
Route 6|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 6|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 6|PV|overworld-special|113:11-16:100:PV:
Route 6|PV|overworld-water|118:11-16:100:PV:,119:11-16:100:PV:,129:11-16:100:PV:
Route 7|PV|overworld|16:22-27:100:PV:,17:22-27:100:PV:,19:22-27:100:PV:,20:22-27:100:PV:,37:22-27:100:V:,38:22-27:100:V:,39:22-27:100:PV:,58:22-27:100:P:,59:22-27:100:P:,63:22-27:100:PV:,64:22-27:100:PV:
Route 7|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 7|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 7|PV|overworld-special|137:22-27:100:PV:
Route 8|PV|overworld|16:22-27:100:PV:,17:22-27:100:PV:,19:22-27:100:PV:,20:22-27:100:PV:,37:22-27:100:V:,38:22-27:100:V:,39:22-27:100:PV:,58:22-27:100:P:,59:22-27:100:P:,63:22-27:100:PV:,64:22-27:100:PV:
Route 8|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Route 8|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 8|PV|overworld-special|113:22-27:100:PV:
Route 9|PV|overworld|19:17-22:100:PV:,20:17-22:100:PV:,21:17-22:100:PV:,22:17-22:100:PV:,29:17-22:100:PV:,30:17-22:100:PV:,32:17-22:100:PV:,33:17-22:100:PV:
Route 9|PV|overworld-flying|21:3-56:100:PV:,22:3-56:100:PV:
Route 9|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Route 9|PV|overworld-special|113:17-22:100:PV:
Saffron City Fighting Dojo|PV|gift|106:30::PV:,107:30::PV:
Saffron City Silph Co.|PV|gift|137:36::PV:
Saffron City|PV|npc-trade|26:30::PV:
Sea Route 19|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Sea Route 19|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Sea Route 19|PV|overworld-water|72:37-42:100:PV:,73:37-42:100:PV:,120:37-42:100:PV:,121:37-42:100:PV:,129:37-42:100:PV:
Sea Route 19|PV|overworld-water-special|131:37-42:100:PV:
Sea Route 20|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Sea Route 20|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:,145:3-56:100:PV:,146:3-56:100:PV:,149:3-56:100:PV:
Sea Route 20|PV|overworld-water|72:37-42:100:PV:,73:37-42:100:PV:,129:37-42:100:PV:,130:37-42:100:PV:
Sea Route 20|PV|overworld-water-special|131:37-42:100:PV:
Sea Route 21|PV|overworld|16:37-42:100:PV:,17:37-42:100:PV:,19:37-42:100:PV:,20:37-42:100:PV:,43:37-42:100:P:,44:37-42:100:P:,45:37-42:100:P:,69:37-42:100:V:,70:37-42:100:V:,71:37-42:100:V:,114:37-42:100:PV:
Sea Route 21|PV|overworld-flying|16:3-56:100:PV:,17:3-56:100:PV:,18:3-56:100:PV:
Sea Route 21|PV|overworld-flying-special|6:3-56:100:PV:,144:3-56:100:PV:Caught Articuno,145:3-56:100:PV:Caught Zapdos,146:3-56:100:PV:Caught Moltres,149:3-56:100:PV:
Sea Route 21|PV|overworld-special|113:37-42:100:PV:
Sea Route 21|PV|overworld-water|72:37-42:100:PV:,73:37-42:100:PV:,120:37-42:100:PV:,121:37-42:100:PV:,129:37-42:100:PV:
Seafoam Islands|PV|overworld|41:39-44:100:PV:,42:39-44:100:PV:,79:39-44:100:PV:,80:39-44:100:PV:,86:39-44:100:PV:,87:39-44:100:PV:,124:39-44:100:PV:
Seafoam Islands|PV|overworld-special|7:39-44:100:PV:
Seafoam Islands|PV|overworld-water|72:39-44:100:PV:,73:39-44:100:PV:,90:39-44:100:PV:,91:39-44:100:PV:,129:39-44:100:PV:
Seafoam Islands|PV|static|144:50::PV:
Vermilion City|PV|gift|7:16::PV:,53:32::P:,59:32::V:
Vermilion City|PV|npc-trade|74:16::PV:
Victory Road|PV|overworld|41:41-46:100:PV:,42:41-46:100:PV:,66:41-46:100:PV:,67:41-46:100:PV:,74:41-46:100:PV:,75:41-46:100:PV:,95:41-46:100:PV:,111:41-46:100:PV:,112:41-46:100:PV:
Victory Road|PV|overworld-special|106:41-46:100:PV:,107:41-46:100:PV:,113:41-46:100:PV:
Victory Road|PV|static|146:50::PV:
Viridian Forest|PV|overworld|10:3-6:100:PV:,11:3-6:100:PV:,12:3-6:100:P:,13:3-6:100:PV:,14:3-6:100:PV:,15:3-6:100:V:,16:3-6:100:PV:,25:3-6:100:PV:,43:3-6:100:P:,69:3-6:100:V:
Viridian Forest|PV|overworld-special|1:3-6:100:PV:
`
});
