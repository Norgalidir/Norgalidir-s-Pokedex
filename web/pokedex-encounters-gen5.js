// Encounter data for Black, White, Black 2 and White 2, generated from PokéAPI.
// Same line format as pokedex-encounters-hoenn.js:
//   Location|games|method|dex:levels:rate:games:condition, ...
// Game codes: b Black, w White, B Black 2, W White 2, x X, y Y,
// o Omega Ruby, a Alpha Sapphire, u Sun, m Moon, U Ultra Sun, M Ultra Moon,
// P Let's Go Pikachu, V Let's Go Eevee, S Sword, H Shield.
// Rates are summed slot chances for that game and condition. Max Raid dens
// list the star range instead of a rate.
window.ENCOUNTERS_MORE = Object.assign(window.ENCOUNTERS_MORE || {}, {
  unova: `
Unova|b|roam|641:40::b:Tornadus — roams Unova after the Hall of Fame
Unova|w|roam|642:40::w:Thundurus — roams Unova after the Hall of Fame
Abundant Shrine (Hidden Grotto – Near Youngster)|BW|hidden-grotto|37:35-39:5:BW:,436:35-39:20:BW:,591:35-39:75:BW:
Abundant Shrine (Hidden Grotto – Shrine)|BW|hidden-grotto|55:35-39:20:BW:,333:35-39:5:BW:,591:35-39:75:BW:
Abundant Shrine|BWbw|dark-grass|37:57:20:bw:,37:37:20:BW:,55:38:10:BW:,164:58-60:15:bw:,183:38:10:BW:,198:58:5:b:,200:58:5:w:,234:58:10:bw:,334:38-40:15:BW:,358:57-59:30:bw:,437:58-60:10:bw:,437:36:10:BW:,546:58:10:b:,546:37-39:35:B:,548:58:10:w:,548:37-39:35:W:
Abundant Shrine|BWbw|grass-spots|38:50:5:bw:,38:36:5:BW:,184:36:5:W:,429:50:5:w:,430:50:5:b:,531:47-50:75:bw:,531:33-36:80:B:,531:33-36:75:W:,547:50:5:b:,547:36:5:B:,549:50:5:w:,549:36:5:W:,587:48:10:bw:,587:34:10:BW:
Abundant Shrine|bw|static|645:70::b:If not caught earlier,645:70::w:
Abundant Shrine|BWbw|super-rod|118:35-55:60:bw:,118:40-70:60:BW:,550:35-55:40:bw:,550:40-60:40:BW:
Abundant Shrine|BWbw|super-rod-spots|118:35-60:40:bw:,118:40-60:40:BW:,119:35-70:20:bw:,119:50-70:20:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Abundant Shrine|BWbw|surf|79:25-55:30:bw:,183:25-40:30:BW:,550:25-55:70:bw:,550:25-40:70:BW:
Abundant Shrine|BWbw|surf-spots|79:25-60:60:bw:,80:35-70:5:bw:,183:25-40:60:BW:,184:30-40:5:BW:,199:35-70:5:bw:,550:25-60:30:bw:,550:25-40:35:BW:
Abundant Shrine|BWbw|walk|37:47:20:bw:,37:34:10:BW:,55:34:10:BW:,164:48-50:15:bw:,183:34:10:BW:,198:48:5:b:,200:48:5:w:,234:48:10:bw:,333:33:20:BW:,334:36:5:BW:,358:47-49:30:bw:,436:32:15:BW:,437:48-50:10:bw:,546:48:10:b:,546:33-35:30:B:,548:48:10:w:,548:33-35:30:W:
Accumula Town|BW|npc-trade|65:40::BW:Trade for Hippowdon,424:40::BW:Trade for Excadrill
Aspertia City|BW|gift|495:5::BW:,498:5::BW:,501:5::BW:
Aspertia City|BW|super-rod|118:40-70:60:BW:,550:40-60:40:BW:
Aspertia City|BW|super-rod-spots|118:40-60:40:BW:,119:50-70:20:BW:,550:40-60:40:BW:
Aspertia City|BW|surf|550:5-15:100:BW:
Aspertia City|BW|surf-spots|550:5-15:100:BW:
Castelia City Game Freak HQ 1F (Castelia City)|bw|gift|570:10::bw:
Castelia City|BW|dark-grass|19:16-17:30:BW:,133:19:5:BW:,300:16-17:15:W:,427:16-17:15:B:,519:16-17:15:BW:,546:16-18:35:B:,548:16-18:35:W:
Castelia City|BW|gift|133:10::BW:
Castelia City|BW|grass-spots|301:18:5:W:,428:18:5:B:,531:15-18:90:BW:,547:18:5:B:,549:18:5:W:
Castelia City|BW|walk|19:15-16:30:BW:,133:18:5:BW:,300:15-16:15:W:,427:15-16:15:B:,519:15-16:15:BW:,546:15-17:35:B:,548:15-17:35:W:
Castelia Sewers (unknown area 38)|BW|super-rod|88:40-70:100:BW:
Castelia Sewers (unknown area 38)|BW|super-rod-spots|88:60:80:BW:,89:70:20:BW:
Castelia Sewers (unknown area 38)|BW|surf|88:5-15:100:BW:
Castelia Sewers (unknown area 38)|BW|surf-spots|88:5-20:95:BW:,89:5-20:5:BW:
Castelia Sewers (unknown area 38)|BW|walk|19:14-17:45:BW:,41:14-17:45:BW:,88:15-17:10:BW:
Castelia Sewers|BW|super-rod|88:40-70:100:BW:
Castelia Sewers|BW|super-rod-spots|88:40-60:80:BW:,89:50-70:20:BW:
Castelia Sewers|BW|surf|88:5-15:100:BW:
Castelia Sewers|BW|surf-spots|88:5-20:95:BW:,89:5-20:5:BW:
Castelia Sewers|BW|walk|19:14-17:45:BW:,41:14-17:45:BW:,88:15-17:10:BW:
Celestial Tower|BW|static|481:65::BW:After Juniper Cave Of Being
Celestial Tower|BWbw|walk|42:31-33:35:BW:,605:26-29:95:bw:,605:30-33:80:BW:,607:26-29:100:bw:,607:27-33:100:BW:
Challenger's Cave|bw|cave-spots|530:47-50:100:bw:
Challenger's Cave|bw|super-rod|60:35-55:45:bw:,61:35-55:15:bw:,550:35-55:40:bw:
Challenger's Cave|bw|super-rod-spots|61:35-70:55:bw:,62:45-70:5:bw:,550:35-60:40:bw:
Challenger's Cave|bw|surf|550:25-55:100:bw:
Challenger's Cave|bw|surf-spots|550:25-70:100:bw:
Challenger's Cave|bw|walk|75:47-49:60:bw:,108:49-50:45:bw:,302:49:30:bw:,303:49:30:bw:,447:49-50:15:bw:,525:48:60:bw:,527:47:60:bw:
Chargestone Cave|BWbw|cave-spots|529:24-27:100:bw:,529:25-31:100:BW:
Chargestone Cave|BWbw|walk|299:27-30:30:BW:,525:24:30:bw:,525:25-28:15:BW:,595:24-27:100:bw:,595:25-31:100:BW:,597:24-27:60:bw:,597:26-31:60:BW:,599:25-27:84:bw:,599:26-31:69:BW:,602:27:12:bw:,602:28-31:12:BW:
Clay Tunnel|BW|cave-spots|95:54:20:BW:,208:57:5:BW:,530:54-57:75:BW:
Clay Tunnel|BW|super-rod|60:50-70:60:BW:,550:50-60:40:BW:
Clay Tunnel|BW|super-rod-spots|61:50-60:55:BW:,62:60:5:BW:,550:50-60:40:BW:
Clay Tunnel|BW|surf|550:45-60:100:BW:
Clay Tunnel|BW|surf-spots|550:45-60:100:BW:
Clay Tunnel|BW|walk|95:57:5:BW:,299:55-57:15:BW:,305:55-57:15:BW:,525:54-56:35:BW:,527:54:10:BW:,632:54:20:BW:
Cold Storage|bw|dark-grass|507:25-27:35:bw:,532:25-26:15:bw:,572:24:20:bw:,582:24-27:30:bw:
Cold Storage|bw|grass-spots|508:23:5:bw:,531:20-23:90:bw:,573:23:5:bw:
Cold Storage|bw|walk|507:21-23:35:bw:,532:21-22:15:bw:,572:20:20:bw:,582:20-23:30:bw:
Desert Resort (entrance)|BWbw|walk|27:19-20:10:BW:,551:19-22:40:bw:,551:18-19:30:BW:,554:19-20:30:bw:,554:18-19:30:BW:,556:20:10:bw:,556:19:10:BW:,557:20-22:10:bw:,557:19-21:10:BW:,559:20:10:bw:,559:19:10:BW:
Desert Resort|BWbw|walk|27:19-20:15:BW:,328:21:5:BW:,551:19-22:40:bw:,551:18-19:30:BW:,554:19-20:30:bw:,554:18:20:BW:,556:20:10:bw:,556:19:10:BW:,557:20-22:10:bw:,557:19-21:10:BW:,561:20:10:bw:,561:19:10:BW:
Dragonspiral Tower (entrance)|BWbw|dark-grass|583:35-37:30:bw:Winter,583:63-65:25:BW:Winter,586:34-36:30:bw:Winter,586:63-65:30:BW:Winter,614:37:10:bw:Winter,614:65-66:15:BW:Winter,619:34-37:30:bw:Winter,619:66:1:BW:Winter,620:64-66:29:BW:Winter
Dragonspiral Tower (entrance)|BWbw|grass-spots|521:33:5:bw:Spring,521:58:5:BW:Spring,521:33:5:bw:Summer,521:58:5:BW:Summer,521:33:5:bw:Autumn,521:58:5:BW:Autumn,531:30-33:85:bw:,531:55-58:85:BW:,531:33:5:bw:Winter,584:58:5:BW:Winter,587:31:10:bw:,587:56:10:BW:
Dragonspiral Tower (entrance)|BWbw|walk|520:30-32:30:bw:Spring,520:55-58:35:BW:Spring,520:30-32:30:bw:Summer,520:55-58:35:BW:Summer,520:30-32:30:bw:Autumn,520:55-58:35:BW:Autumn,582:31-33:30:bw:Winter,583:55-57:25:BW:Winter,585:31:20:bw:Spring,585:31:20:bw:Summer,585:31:20:bw:Autumn,585:30:20:bw:Winter,585:32:10:bw:,586:55-57:30:BW:,586:58:5:BW:Spring,586:58:5:BW:Summer,586:58:5:BW:Autumn,613:33:10:bw:Winter,614:57-58:15:BW:Winter,619:30-33:30:bw:,620:56-58:25:BW:,620:58:5:BW:Winter,621:31-33:10:bw:Spring,621:58:5:BW:Spring,621:31-33:10:bw:Summer,621:58:5:BW:Summer,621:31-33:10:bw:Autumn,621:58:5:BW:Autumn
Dragonspiral Tower (outside)|BWbw|dark-grass|520:35-36:30:bw:Spring,520:63-66:35:BW:Spring,520:35-36:30:bw:Summer,520:63-66:35:BW:Summer,520:35-36:30:bw:Autumn,520:63-66:35:BW:Autumn,583:35-37:30:bw:Winter,583:63-65:25:BW:Winter,586:34-36:30:bw:,586:63-65:30:BW:,586:66:5:BW:Spring,586:66:5:BW:Summer,586:66:5:BW:Autumn,614:37:10:bw:Winter,614:65-66:15:BW:Winter,619:34-37:30:bw:,620:64-66:25:BW:,621:35-37:10:bw:Spring,621:35-37:10:bw:Summer,621:35-37:10:bw:Autumn,621:66:5:BW:
Dragonspiral Tower (outside)|BWbw|grass-spots|521:33:5:bw:Spring,521:57:5:BW:Spring,521:33:5:bw:Summer,521:57:5:BW:Summer,521:33:5:bw:Autumn,521:57:5:BW:Autumn,531:30-33:85:bw:,531:55-57:85:BW:,531:33:5:bw:Winter,584:57:5:BW:Winter,587:31:10:bw:,587:56:10:BW:
Dragonspiral Tower (outside)|BWbw|super-rod|147:35-55:55:bw:,147:40-70:60:BW:,148:35-55:5:bw:,550:35-55:40:bw:,550:40-60:40:BW:
Dragonspiral Tower (outside)|BWbw|super-rod-spots|147:35-60:40:bw:,147:40-60:40:BW:,148:35-70:19:bw:,148:50-70:19:BW:,149:50-70:1:BWbw:,550:35-60:40:bw:,550:40-60:40:BW:
Dragonspiral Tower (outside)|BWbw|surf|550:15-35:100:bw:,550:45-60:100:BW:
Dragonspiral Tower (outside)|BWbw|surf-spots|550:15-40:100:bw:,550:45-60:100:BW:
Dragonspiral Tower (outside)|BWbw|walk|520:31-32:30:bw:Spring,520:55-58:35:BW:Spring,520:31-32:30:bw:Summer,520:55-58:35:BW:Summer,520:31-32:30:bw:Autumn,520:55-58:35:BW:Autumn,582:31-33:30:bw:Winter,583:55-57:25:BW:Winter,585:30-32:30:bw:,586:55-57:30:BW:,586:58:5:BW:Spring,586:58:5:BW:Summer,586:58:5:BW:Autumn,613:33:10:bw:Winter,614:57-58:15:BW:Winter,619:30-33:30:bw:,620:56-58:25:BW:,621:31-33:10:bw:Spring,621:31-33:10:bw:Summer,621:31-33:10:bw:Autumn,621:58:5:BW:
Dragonspiral Tower|BWbw|static|643:50::b:If not caught earlier,643:70::W:Needs Light Stone,644:50::w:,644:70::B:Needs Dark Stone
Dragonspiral Tower|BWbw|walk|619:33:20:bw:,620:55:20:BW:,621:30-33:30:bw:,621:56-58:30:BW:,622:30-33:100:bw:,623:55-58:100:BW:
Dreamyard|BWbw|dark-grass|20:47-50:45:bw:,20:64-67:35:BW:,39:65:20:BW:,42:64-67:35:BW:,49:48-50:10:bw:,166:49:15:bw:,168:49:15:bw:,402:47-50:45:bw:,505:64-67:35:BW:,505:47:20:bw:,510:64-67:35:BW:,510:47:20:bw:,517:48-49:30:bw:,517:65-66:40:BW:
Dreamyard|bw|gift|511:10::bw:,513:10::bw:,515:10::bw:
Dreamyard|BWbw|grass-spots|40:59:5:BW:,169:59:5:BW:,206:57:10:BW:,518:11:5:bw:,518:59:5:BW:,531:8-11:95:bw:,531:56-59:75:BW:
Dreamyard|BWbw|static|380:68::W:,381:68::B:,518:50::bw:,518:50::bw:Fridays · After defeating Ghetsis
Dreamyard|BWbw|walk|20:57:10:BW:,39:57:10:BW:,42:57-58:10:BW:,504:8-11:40:bw:,505:56-59:25:BW:,509:8-11:40:bw:,510:56-59:25:BW:,517:8-10:20:bw:,517:57-58:20:BW:
Driftveil City|BW|gift|570:25::BW:
Driftveil City|bw|super-rod|98:35-55:55:bw:,170:35-55:40:bw:,370:35-55:5:bw:
Driftveil City|bw|super-rod-spots|99:35-70:15:bw:,170:35-60:40:bw:,171:45-70:5:bw:,370:35-60:40:bw:
Driftveil City|bw|surf|592:10-25:100:bw:
Driftveil City|bw|surf-spots|593:10-30:5:bw:,594:10-30:95:bw:
Driftveil Drawbridge|BWbw|bridge-spots|580:22-25:100:bw:,580:23-26:100:BW:
Floccesy Ranch (Hidden Grotto)|BW|hidden-grotto|183:10-14:75:BW:,206:10-14:5:BW:,507:10-14:20:BW:
Floccesy Ranch (inner)|BW|grass-spots|206:5:10:BW:,531:4-7:90:BW:
Floccesy Ranch (inner)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Floccesy Ranch (inner)|BW|super-rod-spots|61:40-70:55:BW:,186:50-70:5:BW:,550:40-60:40:BW:
Floccesy Ranch (inner)|BW|surf|298:5-15:30:BW:,550:5-15:70:BW:
Floccesy Ranch (inner)|BW|surf-spots|183:5-15:30:BW:,184:5-15:5:BW:,550:5-15:65:BW:
Floccesy Ranch (inner)|BW|walk|54:5:10:BW:,179:5:10:BW:,298:5:20:BW:,447:5-7:5:BW:,504:5:10:BW:,506:4-7:40:BW:,519:7:5:BW:
Floccesy Ranch (outer)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Floccesy Ranch (outer)|BW|super-rod-spots|61:40-70:55:BW:,186:50-70:5:BW:,550:40-60:40:BW:
Floccesy Ranch (outer)|BW|surf|298:5-15:30:BW:,550:5-15:70:BW:
Floccesy Ranch (outer)|BW|surf-spots|183:5-15:30:BW:,184:5-15:5:BW:,550:5-15:65:BW:
Floccesy Town|BW|gift|147:1::W:,443:1::B:
Giant Chasm (Hidden Grotto)|BW|hidden-grotto|35:45-49:75:BW:,132:45-49:5:BW:,215:45-49:10:BW:,375:45-49:10:BW:
Giant Chasm (forest cave)|bw|cave-spots|530:57-60:100:bw:
Giant Chasm (forest cave)|BW|dark-grass|35:50:20:BW:,132:50-52:15:BW:,221:49-51:30:BW:,225:49:5:BW:,337:51:10:BW:,338:51:10:BW:,375:50-52:10:BW:
Giant Chasm (forest cave)|BW|grass-spots|36:47:5:BW:,376:47:5:BW:,473:47:5:BW:,531:44-47:85:BW:
Giant Chasm (forest cave)|BWbw|static|646:75::bw:,646:70::BW:Captured Reshiram Or Zekrom
Giant Chasm (forest cave)|bw|super-rod|60:35-55:45:bw:,61:35-55:15:bw:,550:35-55:40:bw:
Giant Chasm (forest cave)|bw|super-rod-spots|61:35-70:55:bw:,62:45-70:5:bw:,550:35-60:40:bw:
Giant Chasm (forest cave)|bw|surf|86:25-55:30:bw:,550:25-55:70:bw:
Giant Chasm (forest cave)|bw|surf-spots|86:25-60:60:bw:,87:35-70:10:bw:,550:25-60:30:bw:
Giant Chasm (forest cave)|BWbw|walk|35:45:20:BW:,42:57:20:bw:,124:58-60:10:bw:,132:45-47:15:BW:,215:58:10:bw:,221:57-59:25:bw:,221:44-46:30:BW:,225:58:10:bw:,225:44:5:BW:,337:60:10:bw:,337:46:10:BW:,338:60:10:bw:,338:46:10:BW:,375:45-47:10:BW:,525:59:5:bw:
Giant Chasm (forest)|BWbw|dark-grass|35:62-64:30:bw:,35:50:20:BW:,132:63-65:15:bw:,132:50-52:15:BW:,221:62-64:25:bw:,221:49-51:30:BW:,225:49:5:BW:,337:65:10:bw:,337:51:10:BW:,338:65:10:bw:,338:51:10:BW:,375:63-65:10:bw:,375:50-52:10:BW:
Giant Chasm (forest)|BWbw|grass-spots|36:55:5:bw:,36:47:5:BW:,376:55:5:bw:,376:47:5:BW:,473:55:5:bw:,473:47:5:BW:,531:52-55:85:bw:,531:44-47:85:BW:
Giant Chasm (forest)|BWbw|walk|35:52-54:30:bw:,35:45:20:BW:,132:53-55:15:bw:,132:45-47:15:BW:,221:52-54:25:bw:,221:44-46:30:BW:,225:44:5:BW:,337:55:10:bw:,337:46:10:BW:,338:55:10:bw:,338:46:10:BW:,375:53-55:10:bw:,375:45-47:10:BW:
Giant Chasm (outside)|BWbw|dark-grass|35:50-52:15:BW:,42:58-60:15:bw:,114:57-59:25:bw:,114:49-50:30:BW:,225:49:5:BW:,277:57:20:bw:,279:50:20:BW:,337:58:10:bw:,337:50:10:BW:,338:58:10:bw:,338:51:10:BW:,359:58-60:10:bw:,426:59:10:bw:,583:50-52:10:BW:
Giant Chasm (outside)|BWbw|grass-spots|36:47:5:BW:,169:50:5:bw:,465:50:5:bw:,465:47:5:BW:,531:47-50:80:bw:,531:44-47:85:BW:,584:47:5:BW:,587:48:10:bw:
Giant Chasm (outside)|BWbw|walk|35:45-47:15:BW:,42:48-50:15:bw:,114:47-49:25:bw:,114:44-45:30:BW:,225:44:5:BW:,277:47:20:bw:,279:45:20:BW:,337:48:10:bw:,337:45:10:BW:,338:48:10:bw:,338:46:10:BW:,359:48-50:10:bw:,426:49:10:bw:,583:45-47:10:BW:
Giant Chasm|BWbw|cave-spots|530:47-50:100:bw:,530:44-47:100:BW:
Giant Chasm|BWbw|super-rod|60:35-55:45:bw:,60:40-70:60:BW:,61:35-55:15:bw:,550:35-55:40:bw:,550:40-60:40:BW:
Giant Chasm|BWbw|super-rod-spots|61:35-70:55:bw:,61:40-70:55:BW:,62:45-70:5:bw:,62:50-70:5:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Giant Chasm|BWbw|surf|86:25-55:30:bw:,86:35-50:30:BW:,550:25-55:70:bw:,550:35-50:70:BW:
Giant Chasm|BWbw|surf-spots|86:25-60:60:bw:,86:35-50:60:BW:,87:35-70:10:bw:,87:40-50:10:BW:,550:25-60:30:bw:,550:35-50:30:BW:
Giant Chasm|BWbw|walk|35:44-46:15:BW:,42:47:20:bw:,124:48-50:10:bw:,215:48:10:bw:,215:44:20:BW:,221:47-49:25:bw:,221:44-46:25:BW:,225:48:10:bw:,225:47:5:BW:,337:50:10:bw:,337:46:10:BW:,338:50:10:bw:,338:46:10:BW:,525:49:5:bw:,583:45-47:15:BW:
Glacier Room|BW|cave-spots|95:54:20:BW:,208:57:5:BW:,530:54-57:75:BW:
Glacier Room|BW|walk|95:57:5:BW:,299:55-57:15:BW:,305:55-57:15:BW:,525:54-56:35:BW:,527:54:10:BW:,632:54:20:BW:
Guidance Chamber|BWbw|cave-spots|529:28-31:100:bw:,529:27-30:100:BW:
Guidance Chamber|BWbw|walk|304:29-30:20:BW:,525:28-31:50:bw:,525:27-28:30:BW:,527:28-30:30:bw:,527:27-28:30:BW:,610:30-31:20:bw:,610:29-30:20:BW:
Humilau City|BW|npc-trade|465:45::BW:Trade for Mantine
Humilau City|BW|super-rod|90:40-60:40:BW:,370:40-70:60:BW:
Humilau City|BW|super-rod-spots|90:40-70:55:BW:,91:50-70:5:BW:,370:40-60:40:BW:
Humilau City|BW|surf|120:30-45:30:BW:,550:35-45:5:BW:,592:30-45:65:BW:
Humilau City|BW|surf-spots|121:35-45:5:BW:,222:35-45:30:BW:,550:35-45:5:BW:,593:35-45:60:BW:
Icirrus City|BWbw|super-rod|339:35-55:60:bw:,339:45-60:40:BW:,339:60:20:BW:Spring,339:60:20:BW:Summer,339:60:20:BW:Autumn,339:50-60:20:BW:Winter,618:35-55:40:bw:,618:45-60:40:BW:
Icirrus City|BWbw|super-rod-spots|339:35-60:40:bw:,339:45-60:40:BW:,340:35-70:20:bw:,340:60:20:BW:Spring,340:60:20:BW:Summer,340:60:20:BW:Autumn,340:50-60:20:BW:Winter,618:35-60:40:bw:,618:45-60:40:BW:
Icirrus City|BWbw|surf|618:15-35:100:bw:,618:45-60:90:BW:,618:60:10:BW:Spring,618:60:10:BW:Summer,618:60:10:BW:Autumn,618:50-60:10:BW:Winter
Icirrus City|BWbw|surf-spots|537:15-40:5:bw:,537:60:5:BW:Spring,537:60:5:BW:Summer,537:60:5:BW:Autumn,537:50-60:5:BW:Winter,618:15-40:95:bw:,618:45-60:90:BW:,618:60:5:BW:Spring,618:60:5:BW:Summer,618:60:5:BW:Autumn,618:50-60:5:BW:Winter
Icirrus City|BWbw|walk|453:55-56:15:BW:Spring,453:55-56:15:BW:Summer,453:55-56:15:BW:Autumn,536:30-33:40:bw:Spring,536:54-57:40:BW:Spring,536:30-33:40:bw:Summer,536:54-57:40:BW:Summer,536:30-33:40:bw:Autumn,536:54-57:40:BW:Autumn,588:57:5:B:Spring,588:54:20:W:Spring,588:57:5:B:Summer,588:54:20:W:Summer,588:57:5:B:Autumn,588:54:20:W:Autumn,616:30-33:40:bw:Spring,616:54:20:B:Spring,616:57:5:W:Spring,616:30-33:40:bw:Summer,616:54:20:B:Summer,616:57:5:W:Summer,616:30-33:40:bw:Autumn,616:54:20:B:Autumn,616:57:5:W:Autumn,618:31-32:20:bw:Spring,618:55-56:20:BW:Spring,618:31-32:20:bw:Summer,618:55-56:20:BW:Summer,618:31-32:20:bw:Autumn,618:55-56:20:BW:Autumn
Iron Room|BW|cave-spots|95:54:20:BW:,208:57:5:BW:,530:54-57:75:BW:
Iron Room|BW|walk|95:57:5:BW:,299:55-57:15:BW:,305:55-57:15:BW:,525:54-56:35:BW:,527:54:10:BW:,632:54:20:BW:
Liberty Garden Lighthouse Basement|bw|static|494:15::bw:
Lostlorn Forest (Hidden Grotto)|BW|hidden-grotto|127:20-24:4:B:,127:20-24:1:W:,214:20-24:1:B:,214:20-24:4:W:,415:20-24:75:BW:,542:20-24:20:BW:
Lostlorn Forest|BWbw|dark-grass|127:26:5:W:,214:26:5:B:,315:25-26:15:BW:,415:24:10:BW:,520:24-25:15:bw:,541:23-25:35:bw:,541:23-26:25:BW:,543:23-24:15:bw:,544:23:20:BW:,546:22-25:35:b:,546:23-26:25:B:,548:22-25:35:w:,548:23-26:25:W:
Lostlorn Forest|BWbw|grass-spots|407:24:5:BW:,416:24:5:BW:,511:20:10:bw:,511:22:10:BW:,513:20:10:bw:,513:22:10:BW:,515:20:10:bw:,515:22:10:BW:,521:22:5:bw:,531:19-21:45:bw:,531:21-23:40:BW:,542:22:5:bw:,542:24:5:BW:,547:22:5:b:,547:24:5:B:,549:22:5:w:,549:24:5:W:,587:20:10:bw:,587:22:10:BW:
Lostlorn Forest|bw|static|571:25::bw:
Lostlorn Forest|BWbw|super-rod|60:40-70:60:BW:,118:35-55:60:bw:,550:35-55:40:bw:,550:40-60:40:BW:
Lostlorn Forest|BWbw|super-rod-spots|61:40-70:55:BW:,118:35-70:60:bw:,186:50-70:5:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Lostlorn Forest|BWbw|surf|418:10-25:30:BW:,550:5-20:100:bw:,550:10-25:70:BW:
Lostlorn Forest|BWbw|surf-spots|418:10-30:60:BW:,419:10-30:10:BW:,550:5-20:100:bw:,550:10-30:30:BW:
Lostlorn Forest|BWbw|walk|127:24:5:W:,214:24:5:B:,315:23-24:15:BW:,415:22:10:BW:,520:21-22:15:bw:,541:20-22:35:bw:,541:21-24:25:BW:,543:20-21:15:bw:,543:21:20:BW:,546:19-22:35:b:,546:21-24:25:B:,548:19-22:35:w:,548:21-24:25:W:
Marvelous Bridge|BWbw|bridge-spots|581:47-50:100:bw:,581:54-57:100:BW:
Marvelous Bridge|BWbw|gift|129:5::BWbw:
Marvelous Bridge|BW|static|488:68::BW:Needs Lunar Wing
Mistralton Cave|BWbw|cave-spots|529:28-31:100:bw:,529:27-30:100:BW:
Mistralton Cave|bw|static|638:42::bw:
Mistralton Cave|BWbw|walk|304:29-30:20:BW:,525:28-31:50:bw:,525:27-28:30:BW:,527:28-30:30:bw:,527:27-28:30:BW:,610:30-31:20:bw:,610:29-30:20:BW:
Moor of Icirrus|BWbw|super-rod|339:35-55:60:bw:,339:45-60:40:BW:,339:60:20:BW:Spring,339:60:20:BW:Summer,339:60:20:BW:Autumn,339:50-60:20:BW:Winter,618:35-55:40:bw:,618:45-60:40:BW:
Moor of Icirrus|BWbw|super-rod-spots|339:35-60:40:bw:,339:45-60:40:BW:,340:35-70:20:bw:,340:60:20:BW:Spring,340:60:20:BW:Summer,340:60:20:BW:Autumn,340:50-60:20:BW:Winter,618:35-60:40:bw:,618:45-60:40:BW:
Moor of Icirrus|BWbw|surf|618:15-35:100:bw:,618:45-60:90:BW:,618:60:10:BW:Spring,618:60:10:BW:Summer,618:60:10:BW:Autumn,618:50-60:10:BW:Winter
Moor of Icirrus|BWbw|surf-spots|537:15-40:5:bw:,537:60:5:BW:Spring,537:60:5:BW:Summer,537:60:5:BW:Autumn,537:50-60:5:BW:Winter,618:15-40:95:bw:,618:45-60:90:BW:,618:60:5:BW:Spring,618:60:5:BW:Summer,618:60:5:BW:Autumn,618:50-60:5:BW:Winter
Moor of Icirrus|BWbw|walk|453:55-56:15:BW:Spring,453:55-56:15:BW:Summer,453:55-56:15:BW:Autumn,536:30-33:40:bw:Spring,536:54-57:40:BW:Spring,536:30-33:40:bw:Summer,536:54-57:40:BW:Summer,536:30-33:40:bw:Autumn,536:54-57:40:BW:Autumn,588:57:5:B:Spring,588:54:20:W:Spring,588:57:5:B:Summer,588:54:20:W:Summer,588:57:5:B:Autumn,588:54:20:W:Autumn,616:30-33:40:bw:Spring,616:54:20:B:Spring,616:57:5:W:Spring,616:30-33:40:bw:Summer,616:54:20:B:Summer,616:57:5:W:Summer,616:30-33:40:bw:Autumn,616:54:20:B:Autumn,616:57:5:W:Autumn,618:31-32:20:bw:Spring,618:55-56:20:BW:Spring,618:31-32:20:bw:Summer,618:55-56:20:BW:Summer,618:31-32:20:bw:Autumn,618:55-56:20:BW:Autumn
N's Castle|bw|static|643:50::b:,644:50::w:
Nacrene City (west gate)|BW|gift-egg|440:1::BW:
Nacrene City (west gate)|BW|static|480:65::BW:After Juniper Cave Of Being
Nacrene City Nacrene Museum|BWbw|gift|138:25::BWbw:Needs Helix Fossil,140:25::BWbw:Needs Dome Fossil,142:25::BWbw:Needs Old Amber,345:25::BWbw:Needs Root Fossil,347:25::BWbw:Needs Claw Fossil,408:25::BWbw:Needs Skull Fossil,410:25::BWbw:Needs Armor Fossil,564:25::BWbw:Needs Cover Fossil,566:25::BWbw:Needs Plume Fossil
Nature Sanctuary|BW|dark-grass|55:65:10:BW:,164:66:10:BW:,203:66-67:15:BW:,274:64-65:30:BW:,334:64:20:BW:,352:65-67:5:BW:,611:65-67:10:BW:
Nature Sanctuary|BW|grass-spots|206:57:10:BW:,275:59:5:BW:,531:56-59:85:BW:
Nature Sanctuary|BW|static|612:60::BW:
Nature Sanctuary|BW|super-rod|129:1-100:60:BW:,550:40-60:40:BW:
Nature Sanctuary|BW|super-rod-spots|129:40-60:40:BW:,130:1-100:20:BW:,550:40-60:40:BW:
Nature Sanctuary|BW|surf|418:45-60:30:BW:,550:45-60:70:BW:
Nature Sanctuary|BW|surf-spots|418:45-60:60:BW:,419:50-60:5:BW:,550:45-60:35:BW:
Nature Sanctuary|BW|walk|55:57:10:BW:,164:58:10:BW:,203:58-59:15:BW:,274:56-57:30:BW:,334:56:20:BW:,352:57-59:5:BW:,611:57-59:10:BW:
Nuvema Town|bw|gift|495:5::bw:,498:5::bw:,501:5::bw:
P2 Laboratory|BWbw|grass-spots|462:59:5:BW:,508:31:5:bw:,508:59:5:BW:,531:28-31:95:bw:,531:56-59:85:BW:,601:59:5:BW:
P2 Laboratory|BWbw|super-rod|116:35-55:55:BWbw:,456:35-55:45:BWbw:
P2 Laboratory|BWbw|super-rod-spots|117:35-60:40:BWbw:,211:35-60:40:BWbw:,230:45-70:5:BWbw:,457:35-70:15:BWbw:
P2 Laboratory|BWbw|surf|592:5-15:100:bw:,592:45-60:100:BW:
P2 Laboratory|BWbw|surf-spots|593:5-20:5:bw:,593:50-60:5:BW:,594:5-20:95:bw:,594:45-60:95:BW:
P2 Laboratory|BWbw|walk|82:57-59:15:BW:,110:57-58:15:BW:,505:28-31:36:bw:,505:56:20:BW:,507:28-31:36:bw:,507:56:20:BW:,559:29-31:14:bw:,560:57-58:15:BW:,599:29-31:14:bw:,600:57-59:15:BW:
Pinwheel Forest (Hidden Grotto – Inner area)|BW|hidden-grotto|12:55-59:20:W:,15:55-59:20:B:,198:55-59:5:BW:,286:55-59:19:BW:,591:55-59:56:BW:
Pinwheel Forest (Hidden Grotto – Outer area)|BW|hidden-grotto|61:55-59:5:BW:,297:55-59:75:B:,297:55-59:5:W:,308:55-59:5:B:,308:55-59:75:W:,371:55-59:15:BW:
Pinwheel Forest (inside)|BWbw|dark-grass|288:63-65:15:BW:,520:23-24:15:bw:,541:22-25:35:bw:,541:62-64:25:BW:,544:23-24:15:bw:,544:63-65:15:BW:,546:22-25:35:b:,546:62-65:45:B:,548:22-25:35:w:,548:62-65:45:W:
Pinwheel Forest (inside)|BWbw|grass-spots|289:57:5:BW:,511:15:10:bw:,511:55:10:BW:,513:15:10:bw:,513:55:10:BW:,515:15:10:bw:,515:55:10:BW:,531:14-17:65:bw:,531:54-64:55:B:,531:54-57:55:W:,545:57:5:BW:,547:17:5:b:,547:57:5:B:,549:17:5:w:,549:57:5:W:
Pinwheel Forest (inside)|BWbw|super-rod|118:35-55:60:bw:,118:40-70:60:BW:,550:35-55:40:bw:,550:40-60:40:BW:
Pinwheel Forest (inside)|BWbw|super-rod-spots|118:35-60:40:BWbw:,119:35-70:20:BWbw:,550:35-60:40:BWbw:
Pinwheel Forest (inside)|BWbw|surf|183:45-60:30:BW:,550:5-20:100:bw:,550:45-60:70:BW:
Pinwheel Forest (inside)|BWbw|surf-spots|183:45-60:60:BW:,184:50-60:5:BW:,550:5-20:100:bw:,550:45-60:35:BW:
Pinwheel Forest (inside)|BWbw|walk|288:55-57:15:BW:,519:15-16:15:bw:,540:14-17:35:bw:,541:54-56:25:BW:,543:15-16:15:bw:,544:55-57:15:BW:,546:14-17:35:b:,546:54-57:45:B:,548:14-17:35:w:,548:54-57:45:W:
Pinwheel Forest (outside)|BWbw|dark-grass|193:63:10:BW:,454:63:10:BW:,519:14-15:30:bw:,532:15-16:20:bw:,533:63-64:40:BW:,535:14-17:40:bw:,536:64-65:25:BW:,538:14-17:10:w:,538:63-65:15:W:,539:14-17:10:b:,539:63-65:15:B:
Pinwheel Forest (outside)|BWbw|grass-spots|469:57:5:BW:,531:12-15:95:bw:,531:54-57:85:BW:,537:57:5:BW:,538:15:5:b:,538:57:5:B:,539:15:5:w:,539:57:5:W:
Pinwheel Forest (outside)|BWbw|walk|193:55:10:BW:,454:55:10:BW:,519:12-13:30:bw:,532:13-14:20:bw:,533:54-56:40:BW:,535:12-15:40:bw:,536:54-57:25:BW:,538:12-15:10:w:,538:55-57:15:W:,539:12-15:10:b:,539:55-57:15:B:
Pinwheel Forest|bw|static|640:42::bw:
Relic Castle|BWbw|static|637:70::bw:,637:35::BW:After Quake Badge,637:65::BW:If not caught earlier
Relic Castle|BWbw|walk|27:19-20:20:BW:,28:47-49:30:bw:,28:28-29:20:BW:,95:48-49:15:bw:,343:27-30:100:BW:,344:47-50:100:bw:,551:19-22:50:bw:,551:18-28:70:BW:,552:34-50:85:bw:,552:29-30:10:BW:,562:19-22:50:bw:,562:18-30:80:BW:,563:34-50:70:bw:
Relic Passage Relic Tunnel (Castelia Sewers entrance)|BW|cave-spots|95:16:20:BW:,529:16-19:80:BW:
Relic Passage Relic Tunnel (Castelia Sewers entrance)|BW|walk|19:17:10:BW:,95:18:5:BW:,524:16-18:34:BW:,527:16-18:31:BW:,532:17-18:20:BW:
Relic Passage Relic Tunnel (PWT entrance)|BW|cave-spots|95:27:20:BW:,529:27-30:80:BW:
Relic Passage Relic Tunnel (PWT entrance)|BW|walk|95:30:5:BW:,525:27-30:39:BW:,527:27-30:36:BW:,533:28-30:20:BW:
Relic Passage Relic Tunnel (Relic Castle entrance)|BW|cave-spots|95:27:20:BW:,529:27-30:80:BW:
Relic Passage Relic Tunnel (Relic Castle entrance)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Relic Passage Relic Tunnel (Relic Castle entrance)|BW|super-rod-spots|61:40-70:55:BW:,62:50-70:5:BW:,550:40-60:40:BW:
Relic Passage Relic Tunnel (Relic Castle entrance)|BW|surf|183:10-30:30:BW:,550:10-30:70:BW:
Relic Passage Relic Tunnel (Relic Castle entrance)|BW|surf-spots|183:10-30:60:BW:,184:10-30:5:BW:,550:10-30:35:BW:
Relic Passage Relic Tunnel (Relic Castle entrance)|BW|walk|20:29:10:BW:,95:30:5:BW:,525:27-30:34:BW:,527:27-30:31:BW:,533:28-30:20:BW:
Reversal Mountain (unknown area 48)|BW|dark-grass|227:36-38:15:BW:,323:35-37:30:W:,326:35-37:30:B:,329:38:5:BW:,426:36-37:20:BW:,451:35-37:30:BW:
Reversal Mountain (unknown area 48)|BW|grass-spots|531:31-34:100:BW:
Reversal Mountain (unknown area 48)|BW|walk|227:34:5:BW:,322:31:20:W:,323:33:10:W:,325:31:20:B:,326:33:10:B:,328:32-34:15:BW:,426:32-33:20:BW:,451:31-33:30:BW:
Reversal Mountain (unknown area 49)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 49)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 50)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 50)|BW|walk|322:31:5:W:,323:35:20:W:,325:31:5:B:,326:35:20:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 51)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 51)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 52)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 52)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 53)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 53)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 54)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 54)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 55)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 55)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 56)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 56)|BW|walk|322:31:5:W:,323:35:20:W:,325:31:5:B:,326:35:20:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 57)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 57)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 58)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 58)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 59)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 59)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain (unknown area 60)|BW|cave-spots|530:32-35:100:BW:
Reversal Mountain (unknown area 60)|BW|walk|322:31:20:W:,323:35:5:W:,325:31:20:B:,326:35:5:B:,451:33-35:15:BW:,525:32-35:25:BW:,527:32-35:35:BW:
Reversal Mountain|BW|static|485:68::BW:
Rocky Mountain Room|BW|cave-spots|95:54:20:BW:,208:57:5:BW:,530:54-57:75:BW:
Rocky Mountain Room|BW|walk|95:57:5:BW:,299:55-57:15:BW:,305:55-57:15:BW:,525:54-56:35:BW:,527:54:10:BW:,632:54:20:BW:
Route 10 Road 10 (Victory Road gate)|bw|dark-grass|507:38-39:30:bw:,538:38-41:10:w:,539:38-41:10:b:,591:38-40:10:bw:,626:39-40:20:bw:,627:39-41:30:w:,629:39-41:30:b:
Route 10 Road 10 (Victory Road gate)|bw|grass-spots|508:36:5:bw:,531:33-36:80:bw:,538:36:5:b:,539:36:5:w:,587:34:10:bw:
Route 10 Road 10 (Victory Road gate)|bw|walk|507:33-34:30:bw:,538:33-36:10:w:,539:33-36:10:b:,590:33-35:10:bw:,626:34-35:20:bw:,627:34-36:30:w:,629:34-36:30:b:
Route 10|bw|dark-grass|507:38-39:30:bw:,538:38-41:10:w:,539:38-41:10:b:,591:39-40:10:bw:,626:39-40:20:bw:,627:39-41:30:w:,629:39-41:30:b:
Route 10|bw|grass-spots|508:36:5:bw:,531:33-36:80:bw:,538:36:5:b:,539:36:5:w:,587:34:10:bw:
Route 10|bw|static|590:30::bw:,591:40::bw:
Route 10|bw|walk|507:33-34:30:bw:,538:33-36:10:w:,539:33-36:10:b:,590:34-35:10:bw:,626:34-35:20:bw:,627:34-36:30:w:,629:34-36:30:b:
Route 11|BWbw|dark-grass|55:57:20:bw:,55:40:20:BW:,183:40:10:BW:,207:57-60:15:bw:,207:41-43:15:BW:,335:58:10:bw:,335:42:10:BW:,336:58:10:bw:,336:42:10:BW:,588:59:5:bw:,588:40:5:B:,588:40-43:25:W:,591:58:10:bw:,591:41:5:BW:,616:40-43:25:B:,616:40:5:W:,625:60:5:bw:,628:58-60:25:w:,630:58-60:25:b:
Route 11|BWbw|grass-spots|184:39:5:BW:,472:50:5:bw:,472:39:5:BW:,531:47-50:85:bw:,531:36-39:80:BW:,587:48:10:bw:,587:37:10:BW:
Route 11|BW|static|591:47::BW:,640:45::BW:,640:65::BW:If not caught earlier
Route 11|BWbw|super-rod|118:35-55:60:bw:,118:40-60:60:B:,118:40-70:60:W:,550:35-55:40:bw:,550:40-50:40:B:,550:40-60:40:W:
Route 11|BWbw|super-rod-spots|118:35-60:40:bw:,118:40-60:40:BW:,119:35-70:20:bw:,119:50-70:20:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Route 11|BWbw|surf|418:25-55:30:bw:,418:25-40:30:BW:,550:25-55:70:bw:,550:25-40:70:BW:
Route 11|BWbw|surf-spots|418:25-60:60:bw:,418:25-40:60:BW:,419:35-70:10:bw:,419:30-40:10:BW:,550:25-60:30:bw:,550:25-40:30:BW:
Route 11|BWbw|walk|55:47:20:bw:,55:36:20:BW:,183:36:10:BW:,207:47-50:15:bw:,207:37-39:15:BW:,335:48:10:bw:,335:38:10:BW:,336:48:10:bw:,336:38:10:BW:,588:49:5:bw:,588:36:5:B:,588:36-39:25:W:,591:48:10:bw:,591:37:5:BW:,616:36-39:25:B:,616:36:5:W:,624:50:5:bw:,627:48-50:25:w:,629:48-50:25:b:
Route 12|BWbw|dark-grass|11:59:10:w:,14:59:10:b:,78:59:10:bw:,127:60:5:bw:,127:40-42:15:W:,191:57:20:bw:,206:59:5:bw:,214:60:5:bw:,214:40-42:15:B:,315:39-41:25:BW:,415:57:20:bw:,415:39:20:BW:,421:58:10:bw:,520:58-60:15:bw:,520:40-42:25:BW:,540:40-42:15:BW:
Route 12|BWbw|grass-spots|12:50:5:w:,15:50:5:b:,192:50:5:bw:,206:36:10:BW:,407:38:5:BW:,416:50:5:bw:,416:38:5:BW:,521:50:5:bw:,521:38:5:BW:,531:47-50:70:bw:,531:35-37:60:BW:,542:38:5:BW:,587:48:10:bw:,587:36:10:BW:
Route 12|BWbw|walk|11:48:10:w:,14:48:10:b:,78:49:10:bw:,127:50:5:bw:,127:36-38:15:W:,191:47:20:bw:,206:48:5:bw:,214:50:5:bw:,214:36-38:15:B:,315:35-37:25:BW:,415:47:20:bw:,415:35:20:BW:,421:48:10:bw:,520:48-50:15:bw:,520:36-38:25:BW:,540:36-38:15:BW:
Route 13 (Hidden Grotto – Giant Chasm)|BW|hidden-grotto|114:35-39:20:BW:,451:35-39:5:BW:,590:35-39:75:BW:
Route 13 (Hidden Grotto – Stairs)|BW|hidden-grotto|363:35-39:5:BW:,425:35-39:20:BW:,590:35-39:75:BW:
Route 13|BWbw|dark-grass|42:58-60:15:bw:,114:57-59:25:bw:,114:38-41:25:BW:,277:57:20:bw:,279:38-41:25:BW:,337:58:10:bw:,337:40:10:BW:,338:58:10:bw:,338:40:10:BW:,359:58-60:10:bw:,359:39-41:15:BW:,426:59:10:bw:,426:38-39:15:BW:
Route 13|BWbw|grass-spots|169:50:5:bw:,465:50:5:bw:,465:37:5:BW:,531:47-50:80:bw:,531:34-37:85:BW:,587:48:10:bw:,587:35:10:BW:
Route 13|BW|static|638:45::BW:,638:65::BW:If not caught earlier
Route 13|BWbw|super-rod|90:35-55:40:bw:,90:40-60:40:BW:,98:35-55:55:bw:,370:35-55:5:bw:,370:40-70:60:BW:
Route 13|BWbw|super-rod-spots|90:35-60:40:bw:,90:40-70:55:BW:,91:45-70:5:bw:,91:50-70:5:BW:,99:35-70:15:bw:,370:35-60:40:bw:,370:40-60:40:BW:
Route 13|BWbw|surf|120:25-55:30:bw:,120:25-40:30:BW:,278:25-55:60:bw:,279:25-55:10:bw:,550:30-40:5:BW:,592:25-40:65:BW:
Route 13|BWbw|surf-spots|120:25-60:60:bw:,120:25-40:60:BW:,121:35-70:10:bw:,121:30-40:5:BW:,222:25-60:30:bw:,550:30-40:5:BW:,593:25-40:30:BW:
Route 13|BWbw|walk|42:48-50:15:bw:,114:47-49:25:bw:,114:34-37:25:BW:,277:47:20:bw:,279:34-37:25:BW:,337:48:10:bw:,337:36:10:BW:,338:48:10:bw:,338:36:10:BW:,359:48-50:10:bw:,359:35-37:15:BW:,426:49:10:bw:,426:34-35:15:BW:
Route 14|BWbw|dark-grass|39:58:20:bw:,55:57:20:bw:,55:37-39:25:B:,55:38-39:25:W:,213:59:5:bw:,334:59:10:bw:,334:37-40:15:BW:,357:58-60:15:bw:,359:38-40:15:BW:,426:59:10:bw:,426:38-39:15:BW:,606:58-60:10:bw:,619:37-39:30:BW:,620:59:10:bw:
Route 14|BWbw|grass-spots|40:50:5:bw:,531:47-50:85:bw:,531:33-36:90:BW:,587:48:10:bw:,587:34:10:BW:
Route 14|BWbw|super-rod|118:35-55:60:bw:,118:40-70:60:BW:,550:35-55:40:bw:,550:40-60:40:BW:
Route 14|BWbw|super-rod-spots|118:35-60:40:bw:,118:40-60:40:BW:,119:35-70:20:bw:,119:50-70:20:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Route 14|BWbw|surf|418:25-55:30:bw:,418:15-35:30:B:,418:25-40:30:W:,550:25-55:70:bw:,550:15-35:70:B:,550:25-40:70:W:
Route 14|BWbw|surf-spots|418:25-60:60:bw:,418:15-40:60:B:,418:25-40:60:W:,419:35-70:10:bw:,419:25-40:10:B:,419:30-40:10:W:,550:25-60:30:bw:,550:25-40:30:W:,550:15-40:30:B:
Route 14|BWbw|walk|39:48:20:bw:,55:47:20:bw:,55:34-35:25:BW:,213:49:5:bw:,333:33:20:BW:,334:49:10:bw:,334:36:5:BW:,357:48-50:15:bw:,359:34-36:15:BW:,426:49:10:bw:,426:34-35:15:BW:,606:48-50:10:bw:,619:49:10:bw:,619:33-35:20:BW:
Route 15|BWbw|dark-grass|22:58-60:30:bw:,28:62-64:30:BW:,105:57:20:bw:,115:59:10:bw:,207:57:10:bw:,207:63-65:25:BW:,247:58-59:10:bw:,247:63-65:15:BW:,505:60:5:bw:,538:58-59:15:w:,538:63-65:20:W:,539:58-59:15:b:,539:63-65:20:B:,560:63:10:BW:
Route 15|BWbw|grass-spots|248:50:5:bw:,248:57:5:BW:,472:50:5:bw:,472:57:5:BW:,531:47-50:75:bw:,531:54-57:75:BW:,538:50:5:b:,538:57:5:B:,539:50:5:w:,539:57:5:W:,587:48:10:bw:,587:55:10:BW:
Route 15|BW|npc-trade|479:60::BW:Trade for Ditto
Route 15|BWbw|walk|22:48-50:30:bw:,28:54-56:30:BW:,105:47:20:bw:,115:49:10:bw:,207:47-49:15:bw:,207:55-57:25:BW:,247:48-50:10:bw:,247:55-57:15:BW:,538:48-49:15:w:,538:55-57:20:W:,539:48-49:15:b:,539:55-57:20:B:,560:55:10:BW:
Route 16|BWbw|dark-grass|510:23-25:20:bw:,510:24-26:20:BW:,568:22-24:20:bw:,568:23-25:20:B:,568:23-26:20:W:,572:22-25:30:bw:,572:23-26:30:B:,572:23-25:30:W:,574:22-25:30:b:,574:23-26:30:B:,577:22-25:30:w:,577:23-26:30:W:
Route 16|BWbw|grass-spots|531:19-22:85:bw:,531:21-24:85:BW:,573:22:5:bw:,573:24:5:BW:,587:20:10:bw:,587:22:10:BW:
Route 16|BWbw|walk|510:20-22:20:bw:,510:22-24:20:BW:,568:19-21:20:bw:,568:21-23:20:B:,568:21-24:20:W:,572:19-22:30:bw:,572:21-24:30:B:,572:21-23:30:W:,574:19-22:30:b:,574:21-24:30:B:,577:19-22:30:w:,577:21-24:30:W:
Route 17|BWbw|super-rod|116:35-55:55:bw:,116:50-60:40:BW:,456:35-55:45:bw:,456:50-70:60:BW:
Route 17|BWbw|super-rod-spots|116:50-60:40:BW:,117:35-60:40:bw:,117:60-70:15:BW:,211:35-60:40:bw:,230:45-70:5:bw:,230:60-70:5:BW:,457:35-70:15:bw:,457:50-60:40:BW:
Route 17|BWbw|surf|592:5-15:100:bw:,592:45-60:100:BW:
Route 17|BWbw|surf-spots|593:5-20:5:bw:,593:50-60:5:BW:,594:5-20:95:bw:,594:45-60:95:BW:
Route 18 (Hidden Grotto)|BW|hidden-grotto|99:55-59:38:BW:,149:55-59:5:BW:,222:55-59:38:BW:,441:55-59:20:BW:
Route 18|BWbw|dark-grass|357:66:10:BW:,455:66:10:BW:,505:32-34:20:bw:,505:64:10:BW:,538:33-35:10:w:,538:65-67:20:W:,539:33-35:10:b:,539:65-67:20:B:,558:34-35:30:bw:,558:65:20:BW:,559:32-35:40:bw:,560:65-66:30:BW:
Route 18|bw|gift-egg|636:1::bw:
Route 18|BWbw|grass-spots|206:57:10:BW:,531:28-31:95:bw:,531:56-59:85:BW:,538:31:5:b:,538:59:5:B:,539:31:5:w:,539:59:5:W:
Route 18|BWbw|super-rod|116:35-55:55:bw:,116:50-60:40:BW:,170:35-55:1:bw:,222:60-70:5:BW:,456:35-55:44:bw:,456:50-70:55:BW:
Route 18|BWbw|super-rod-spots|116:50-60:40:BW:,117:35-60:40:bw:,117:60-70:15:BW:,211:35-60:40:bw:,230:45-70:5:bw:,230:60-70:5:BW:,457:35-70:15:bw:,457:50-60:40:BW:
Route 18|BWbw|surf|592:5-15:100:bw:,592:45-60:100:BW:
Route 18|BWbw|surf-spots|593:5-20:5:bw:,593:50-60:5:BW:,594:5-20:95:bw:,594:45-60:95:BW:
Route 18|BWbw|walk|357:58:10:BW:,455:58:10:BW:,505:28-30:20:bw:,505:56:10:BW:,538:29-31:10:w:,538:57-59:20:W:,539:29-31:10:b:,539:57-59:20:B:,557:30-31:30:bw:,558:57:20:BW:,559:28-31:40:bw:,560:57-58:30:BW:
Route 19|BW|grass-spots|504:2-4:100:BW:
Route 19|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Route 19|BW|super-rod-spots|61:40-70:55:BW:,186:50-70:5:BW:,550:40-60:40:BW:
Route 19|BW|surf|550:5-15:100:BW:
Route 19|BW|surf-spots|550:5-15:100:BW:
Route 19|BW|walk|504:2-4:50:BW:,509:2-4:50:BW:
Route 1|BWbw|dark-grass|39:65:10:BW:,505:32-35:36:bw:,505:64-67:40:BW:,507:32-34:39:bw:,507:64-67:39:BW:,559:32-35:25:bw:,560:66-67:11:BW:
Route 1|BWbw|grass-spots|40:59:5:BW:,206:57:10:BW:,508:59:5:BW:,531:2-4:100:bw:,531:56-59:80:BW:
Route 1|BWbw|super-rod|349:35-55:5:bw:,349:50-70:5:BW:,550:35-55:95:bw:,550:40-70:95:BW:
Route 1|BWbw|super-rod-spots|349:35-60:40:bw:,349:40-70:55:BW:,350:45-70:5:bw:,350:50-70:5:BW:,550:35-70:55:bw:,550:40-60:40:BW:
Route 1|BWbw|surf|550:5-15:100:bw:,550:45-60:100:BW:
Route 1|BWbw|surf-spots|550:5-20:100:bw:,550:45-60:100:BW:
Route 1|BWbw|walk|39:57:10:BW:,504:2-4:50:bw:,505:56-59:40:BW:,506:2-4:50:bw:,507:56-59:50:BW:
Route 2 (Hidden Grotto)|BW|hidden-grotto|29:55-59:10:BW:,32:55-59:10:BW:,210:55-59:5:BW:,505:55-59:75:BW:
Route 20|BW|dark-grass|191:9-11:25:BW:Summer,191:11:4:BW:Spring,191:11:4:BW:Autumn,191:11:4:BW:Winter,191:11:1:BW:,504:10:20:BW:,509:10-11:14:BW:,509:11:1:BW:Spring,509:11:1:BW:Autumn,509:11:1:BW:Winter,519:9:20:BW:Spring,519:9:20:BW:Autumn,519:9:20:BW:Winter,519:10:5:BW:,540:10-11:15:BW:,543:10:20:BW:
Route 20|BW|grass-spots|206:3:10:BW:,531:2-4:90:BW:
Route 20|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Route 20|BW|super-rod-spots|61:40-70:55:BW:,186:50-70:5:BW:,550:40-60:40:BW:
Route 20|BW|surf|298:5-15:30:BW:,550:5-15:70:BW:
Route 20|BW|surf-spots|183:5-15:30:BW:,184:5-15:5:BW:,550:5-15:65:BW:
Route 20|BW|walk|191:2-4:25:BW:Summer,191:4:4:BW:Spring,191:4:4:BW:Autumn,191:4:4:BW:Winter,191:4:1:BW:,504:3:20:BW:,509:3-4:14:BW:,509:4:1:BW:Spring,509:4:1:BW:Autumn,509:4:1:BW:Winter,519:2:20:BW:Spring,519:2:20:BW:Autumn,519:2:20:BW:Winter,519:4:5:BW:,540:2-4:35:BW:
Route 21|BW|super-rod|223:40-60:40:BW:,370:40-70:60:BW:
Route 21|BW|super-rod-spots|223:40-70:55:BW:,224:50-70:5:BW:,370:40-60:40:BW:
Route 21|BW|surf|223:35-45:5:BW:,458:30-45:30:BW:,592:30-45:65:BW:
Route 21|BW|surf-spots|226:35-45:5:BW:,593:30-45:60:BW:,594:30-45:35:BW:
Route 22 (Hidden Grotto)|BW|hidden-grotto|279:40-44:20:BW:,591:40-44:75:BW:,619:40-44:5:BW:
Route 22|BW|dark-grass|55:45:10:BW:,183:45-47:10:BW:,225:44:5:BW:,279:45:10:BW:,337:46:10:BW:,338:46:10:BW:,591:44:20:BW:,619:44-47:25:BW:
Route 22|BW|grass-spots|184:42:5:BW:,531:39-42:85:BW:,587:40:10:BW:
Route 22|BW|static|591:47::BW:,639:45::BW:,639:65::BW:If not caught earlier
Route 22|BW|super-rod|118:40-70:60:BW:,550:40-60:40:BW:
Route 22|BW|super-rod-spots|118:40-60:40:BW:,119:50-70:20:BW:,550:40-60:40:BW:
Route 22|BW|surf|183:15-40:30:BW:,550:15-40:70:BW:
Route 22|BW|surf-spots|183:15-40:60:BW:,184:25-45:5:BW:,550:15-45:35:BW:
Route 22|BW|walk|55:40:10:BW:,183:40-42:10:BW:,225:39:5:BW:,279:40:10:BW:,337:41:10:BW:,338:41:10:BW:,591:39:20:BW:,619:39-42:25:BW:
Route 23 (Hidden Grotto)|BW|hidden-grotto|55:50-54:10:BW:,207:50-54:5:BW:,335:50-54:38:BW:,336:50-54:38:BW:,359:50-54:10:BW:
Route 23|BW|dark-grass|55:55:10:BW:,207:54:10:BW:,538:53-54:25:W:,539:53-54:25:B:,591:54:10:BW:,620:53:15:BW:,626:54-56:25:BW:,627:52:5:W:,629:52:5:B:
Route 23|BW|grass-spots|472:51:5:BW:,531:48-51:80:BW:,538:51:5:B:,539:51:5:W:,587:49:10:BW:
Route 23|BW|static|482:65::BW:After Juniper Cave Of Being,591:56::BW:
Route 23|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Route 23|BW|super-rod-spots|61:40-70:55:BW:,62:50-70:5:BW:,550:40-60:40:BW:
Route 23|BW|surf|418:40-55:30:BW:,550:40-55:70:BW:
Route 23|BW|surf-spots|418:40-55:60:BW:,419:45-55:10:BW:,550:40-55:30:BW:
Route 23|BW|walk|55:50:10:BW:,207:49:10:BW:,538:48-49:25:W:,539:48-49:25:B:,591:49:10:BW:,619:48:15:BW:,626:49-51:25:BW:,627:47:5:W:,629:47:5:B:
Route 2|BWbw|grass-spots|40:59:5:BW:,206:57:10:BW:,463:59:5:BW:,508:59:5:BW:,531:4-7:100:bw:,531:56-59:75:BW:
Route 2|BWbw|walk|39:57:10:BW:,108:58:10:BW:,504:4-7:40:bw:,505:56-59:30:BW:,506:4-7:40:bw:,507:56-59:30:BW:,509:4-5:20:bw:,510:57-58:20:BW:
Route 3 (Hidden Grotto – Dark Grass)|BW|hidden-grotto|310:55-59:20:BW:,417:55-59:75:BW:,523:55-59:5:BW:
Route 3 (Hidden Grotto – Pond)|BW|hidden-grotto|48:55-59:20:BW:,271:55-59:5:BW:,400:55-59:75:BW:
Route 3|BWbw|dark-grass|193:64:10:BW:,504:10:20:bw:,505:63:20:BW:,506:11:10:bw:,507:65:10:BW:,509:11:10:bw:,509:65:10:BW:,519:10-13:40:bw:,520:63-65:30:BW:,522:10-13:20:bw:,523:64-66:20:BW:
Route 3|BWbw|grass-spots|469:58:5:BW:,508:58:5:BW:,521:58:5:BW:,531:8-11:100:bw:,531:55-58:85:BW:
Route 3|BWbw|super-rod|118:35-55:60:bw:,118:40-70:60:BW:,550:35-55:40:bw:,550:40-60:40:BW:
Route 3|BWbw|super-rod-spots|118:35-60:40:bw:,118:40-60:40:BW:,119:35-70:20:bw:,119:50-70:20:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Route 3|BWbw|surf|341:45-60:30:BW:,550:5-15:100:bw:,550:45-60:70:BW:
Route 3|BWbw|surf-spots|341:45-60:60:BW:,342:50-60:10:BW:,550:5-20:100:bw:,550:45-60:30:BW:
Route 3|BWbw|walk|193:56:10:BW:,504:8:20:bw:,505:55:20:BW:,506:9:10:bw:,507:57:10:BW:,509:9:10:bw:,509:57:10:BW:,519:8-11:40:bw:,520:55-57:30:BW:,522:8-11:20:bw:,523:56-58:20:BW:
Route 4|BW|npc-trade|546:20::W:Trade for Petilil,548:20::B:Trade for Cottonee
Route 4|BW|static|628:25::W:,630:25::B:
Route 4|BWbw|super-rod|98:35-55:55:bw:,211:50-70:5:BW:,366:35-55:40:bw:,366:40-60:40:BW:,370:35-55:5:bw:,456:40-70:55:BW:
Route 4|BWbw|super-rod-spots|99:35-70:15:bw:,211:40-60:40:BW:,367:45-70:5:b:,367:50-70:5:B:,368:45-70:5:w:,368:50-70:5:W:,369:35-60:40:bw:,369:50-70:15:BW:,370:35-60:40:bw:,457:40-60:40:BW:
Route 4|BWbw|surf|592:5-15:100:BWbw:
Route 4|BWbw|surf-spots|593:5-20:5:BWbw:,594:5-20:95:BWbw:
Route 4|BWbw|walk|551:15-18:40:bw:,551:14-17:35:BW:,554:15-18:40:bw:,554:14-17:35:BW:,559:16-17:20:bw:,559:17:5:BW:,568:14-17:25:B:,572:14-17:25:W:
Route 5 (Hidden Grotto)|BW|hidden-grotto|510:20-24:20:BW:,572:20-24:5:BW:,590:20-24:75:BW:
Route 5|BWbw|dark-grass|510:23-25:20:bw:,510:24-26:20:BW:,568:22-24:20:bw:,568:23-25:20:B:,568:23-26:20:W:,572:22-25:30:bw:,572:23-26:30:B:,572:23-25:30:W:,574:22-25:30:b:,574:23-26:30:B:,577:22-25:30:w:,577:23-26:30:W:
Route 5|BWbw|grass-spots|531:19-22:85:bw:,531:21-24:85:BW:,573:22:5:bw:,573:24:5:BW:,587:20:10:bw:,587:22:10:BW:
Route 5|BWbw|walk|510:20-22:20:bw:,510:22-24:20:BW:,568:19-21:20:bw:,568:21-23:20:B:,568:21-24:20:W:,572:19-22:30:bw:,572:21-24:30:B:,572:21-23:30:W:,574:19-22:30:b:,574:21-24:30:B:,577:19-22:30:w:,577:21-24:30:W:
Route 6 (Hidden Grotto – Mistralton Cave)|BW|hidden-grotto|299:25-29:5:BW:,527:25-29:20:BW:,590:25-29:75:BW:
Route 6 (Hidden Grotto – Near Pokemon Breeder)|BW|hidden-grotto|206:25-29:5:BW:,527:25-29:20:BW:,590:25-29:75:BW:
Route 6 Weather Institute (Road 6)|BW|gift|585:30::BW:
Route 6|BWbw|dark-grass|183:28:5:BW:,520:27-29:15:bw:Spring,520:27-29:15:bw:Summer,520:27-29:15:bw:Autumn,520:29:15:BW:,541:27:10:bw:,541:29:10:BW:,582:27-29:15:bw:Winter,585:26-28:35:bw:,585:26-28:30:BW:,588:26-28:25:bw:,588:26:5:B:,588:26-29:25:W:,590:27-29:15:bw:,590:29:10:BW:,616:26-29:25:B:,616:26:5:W:
Route 6|BWbw|grass-spots|184:26:5:BW:,206:25:10:BW:,351:26:5:BW:,521:25:5:bw:Spring,521:25:5:bw:Summer,521:25:5:bw:Autumn,521:26:5:BW:,531:22-25:70:bw:,531:23-25:50:BW:,531:25:5:bw:Winter,542:25:5:bw:,542:26:5:BW:,587:23-25:20:bw:,587:24-25:20:BW:
Route 6|BWbw|static|590:20::bw:,590:29::BW:
Route 6|BWbw|super-rod|60:35-55:45:bw:,60:40-70:60:BW:,61:35-55:15:bw:,550:35-55:40:bw:,550:40-60:40:BW:
Route 6|BWbw|super-rod-spots|61:35-70:55:bw:,61:40-70:55:BW:,186:45-70:5:bw:,186:50-70:5:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Route 6|BWbw|surf|183:10-25:30:B:,183:10-30:30:W:,550:10-25:100:bw:,550:10-25:70:B:,550:10-30:70:W:
Route 6|BWbw|surf-spots|183:10-30:60:B:,183:10-35:60:W:,184:10-30:5:B:,184:10-35:5:W:,550:10-30:100:bw:,550:10-35:35:W:,550:10-30:35:B:
Route 6|BWbw|walk|183:25:5:BW:,520:23-25:15:bw:Spring,520:23-25:15:bw:Summer,520:23-25:15:bw:Autumn,520:26:15:BW:,541:23:10:bw:,541:26:10:BW:,582:23-25:15:bw:Winter,585:22-24:35:bw:,585:23-25:30:BW:,588:22-24:25:bw:,588:23:5:B:,588:23-26:25:W:,590:23-25:15:bw:,590:26:10:BW:,616:23-26:25:B:,616:23:5:W:
Route 7 (Hidden Grotto)|BW|hidden-grotto|335:30-34:38:BW:,336:30-34:38:BW:,505:30-34:20:BW:,613:30-34:5:BW:
Route 7|BWbw|dark-grass|335:35:5:BW:,336:35:5:BW:,505:31-33:20:bw:,505:34:10:BW:,505:36:5:BW:Spring,505:36:5:BW:Summer,505:36:5:BW:Autumn,520:30-32:30:bw:Spring,520:33-35:30:BW:Spring,520:30-32:30:bw:Summer,520:33-35:30:BW:Summer,520:30-32:30:bw:Autumn,520:33-35:30:BW:Autumn,520:33:10:BW:Winter,523:31-33:20:bw:,523:34-36:20:BW:,585:30:20:bw:,585:33:20:BW:,590:31-33:10:bw:,590:36:5:BW:,613:30-32:30:bw:Winter,613:33-36:25:BW:Winter
Route 7|BWbw|grass-spots|521:29:5:bw:Spring,521:29:5:bw:Summer,521:29:5:bw:Autumn,521:33:5:BW:,531:26-29:85:bw:,531:30-33:85:BW:,531:29:5:bw:Winter,587:27:10:bw:,587:31:10:BW:
Route 7|BW|npc-trade|526:35::BW:Trade for Emolga
Route 7|BW|static|590:36::BW:
Route 7|BWbw|walk|335:32:5:BW:,336:32:5:BW:,505:27-29:20:bw:,505:31:10:BW:,505:33:5:BW:Spring,505:33:5:BW:Summer,505:33:5:BW:Autumn,520:26-28:30:bw:Spring,520:30-32:30:BW:Spring,520:26-28:30:bw:Summer,520:30-32:30:BW:Summer,520:26-28:30:bw:Autumn,520:30-32:30:BW:Autumn,520:30:10:BW:Winter,523:27-29:20:bw:,523:31-33:20:BW:,585:26:20:bw:,585:30:20:BW:,590:27-29:10:bw:,590:33:5:BW:,613:26-28:30:bw:Winter,613:30-33:25:BW:Winter
Route 8|BWbw|super-rod|339:35-55:60:bw:,339:45-60:40:BW:,339:60:20:BW:Spring,339:50-60:20:BW:Summer,339:50-60:20:BW:Autumn,339:50-60:20:BW:Winter,618:35-55:40:bw:,618:45-60:40:BW:
Route 8|BWbw|super-rod-spots|339:35-60:40:bw:,339:45-60:40:BW:,340:35-70:20:bw:,340:60:20:BW:Spring,340:50-60:20:BW:Summer,340:50-60:20:BW:Autumn,340:50-60:20:BW:Winter,618:35-60:40:bw:,618:45-60:40:BW:
Route 8|BWbw|surf|536:45-60:30:BW:,618:15-35:100:bw:,618:45-60:60:BW:,618:60:10:BW:Spring,618:50-60:10:BW:Summer,618:50-60:10:BW:Autumn,618:50-60:10:BW:Winter
Route 8|BWbw|surf-spots|536:45-60:30:BW:,537:15-40:5:bw:,537:60:5:BW:Spring,537:50-60:5:BW:Summer,537:50-60:5:BW:Autumn,537:50-60:5:BW:Winter,618:15-40:95:bw:,618:45-60:60:BW:,618:60:5:BW:Spring,618:50-60:5:BW:Summer,618:50-60:5:BW:Autumn,618:50-60:5:BW:Winter
Route 8|BWbw|walk|453:55-56:15:BW:Spring,453:55-56:15:BW:Summer,453:55-56:15:BW:Autumn,536:30-33:40:bw:Spring,536:54-57:40:BW:Spring,536:30-33:40:bw:Summer,536:54-57:40:BW:Summer,536:30-33:40:bw:Autumn,536:54-57:40:BW:Autumn,588:57:5:B:Spring,588:54:20:W:Spring,588:57:5:B:Summer,588:54:20:W:Summer,588:57:5:B:Autumn,588:54:20:W:Autumn,616:30-33:40:bw:Spring,616:54:20:B:Spring,616:57:5:W:Spring,616:30-33:40:bw:Summer,616:54:20:B:Summer,616:57:5:W:Summer,616:30-33:40:bw:Autumn,616:54:20:B:Autumn,616:57:5:W:Autumn,618:31-32:20:bw:Spring,618:55-56:20:BW:Spring,618:31-32:20:bw:Summer,618:55-56:20:BW:Summer,618:31-32:20:bw:Autumn,618:55-56:20:BW:Autumn
Route 9 (Hidden Grotto)|BW|hidden-grotto|89:35-39:10:BW:,510:35-39:75:BW:,569:35-39:10:BW:,626:35-39:5:BW:
Route 9|BWbw|dark-grass|89:44:5:BW:,510:38:10:bw:,510:44:10:BW:,569:36-38:20:bw:,569:42-44:15:BW:,572:37:20:bw:,572:41-43:30:BW:,575:36-39:30:b:,575:41-43:25:B:,578:36-39:30:w:,578:41-43:25:W:,624:31-39:20:b:,624:36-39:20:w:,624:42-44:15:BW:
Route 9|BWbw|grass-spots|531:31-34:80:bw:,531:37-40:80:BW:,573:34:5:bw:,573:40:5:BW:,576:34:5:b:,576:40:5:B:,579:34:5:w:,579:40:5:W:,587:32:10:bw:,587:38:10:BW:
Route 9|BWbw|walk|89:40:5:BW:,510:33:10:bw:,510:40:10:BW:,569:31-33:20:bw:,569:38-40:15:BW:,572:32:20:bw:,572:37-39:30:BW:,575:31-34:30:b:,575:37-39:25:B:,578:31-34:30:w:,578:37-39:25:W:,624:31-34:20:bw:,624:38-40:15:BW:
Seaside Cave|BW|cave-spots|530:34-42:100:BW:
Seaside Cave|BW|static|558:42::BW:
Seaside Cave|BW|super-rod|90:40-60:40:BW:,370:40-70:60:BW:
Seaside Cave|BW|super-rod-spots|90:40-70:55:BW:,91:50-70:5:BW:,370:40-60:40:BW:
Seaside Cave|BW|surf|86:25-40:30:BW:,592:25-40:70:BW:
Seaside Cave|BW|surf-spots|86:25-40:60:BW:,87:30-40:10:BW:,593:25-40:30:BW:
Seaside Cave|BW|walk|55:34-40:55:BW:,86:35:10:BW:,213:41:5:BW:,525:35-42:50:BW:,527:34-41:70:BW:,602:37:5:BW:,603:42:5:BW:
Strange House|BW|walk|20:32-33:30:BW:,42:32-33:30:BW:,354:32-34:30:BW:,574:31:40:B:,575:33-34:20:B:,577:31:40:W:,578:33-34:20:W:,607:31-33:50:BW:
Striaton City|BWbw|super-rod|118:35-55:60:bw:,118:40-70:60:BW:,550:35-55:40:bw:,550:40-60:40:BW:
Striaton City|BWbw|super-rod-spots|118:35-60:40:bw:,118:40-60:40:BW:,119:35-70:20:bw:,119:50-70:20:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Striaton City|BWbw|surf|341:45-60:30:BW:,550:5-15:100:bw:,550:45-60:70:BW:
Striaton City|BWbw|surf-spots|342:50-60:10:BW:,550:5-20:100:bw:,550:45-60:90:BW:
Trial Chamber|bw|grass-spots|530:39-42:100:bw:
Trial Chamber|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Twist Mountain|BWbw|cave-spots|95:54:20:BW:,208:57:5:BW:,529:28-31:100:bw:,530:54-57:75:BW:
Twist Mountain|BW|static|486:68::BW:Regirock Regice Registeel In Party
Twist Mountain|BWbw|walk|95:57:5:BW:,525:28-31:39:bw:Spring,525:54-55:40:BW:Spring,525:28-31:35:bw:Summer,525:54:20:BW:Summer,525:28-31:39:bw:Autumn,525:54-55:40:BW:Autumn,525:29:20:bw:Winter,525:55:20:BW:Winter,525:30:10:bw:,527:28-31:20:bw:Summer,527:29-31:10:bw:Spring,527:29-31:10:bw:Autumn,527:28-30:10:bw:Winter,527:54:10:BW:,533:28-30:30:bw:Spring,533:55:10:BW:Spring,533:28-30:30:bw:Summer,533:55:20:BW:Summer,533:28-30:30:bw:Autumn,533:55:10:BW:Autumn,533:29:10:bw:Winter,533:55:10:BW:Winter,613:28-31:45:bw:Winter,613:28:10:bw:Spring,613:28:10:bw:Autumn,613:28:4:bw:Summer,614:54:20:BW:Winter,614:56:10:BW:Spring,614:56:10:BW:Autumn,614:56:5:BW:Summer,615:31:5:bw:Winter,615:56:10:BW:Winter,615:31:1:bw:Spring,615:28:1:bw:Summer,615:31:1:bw:Autumn,615:57:5:BW:,631:55-56:20:BW:Summer,631:56:5:BW:Spring,631:56:5:BW:Autumn,631:56:5:BW:Winter,632:56-57:15:BW:
Undella Bay|BW|static|593:40::BW:
Undella Bay|BWbw|super-rod|90:35-55:40:bw:,170:40-70:60:BW:,223:35-55:55:bw:,223:40-60:40:BW:,370:35-55:5:bw:
Undella Bay|BWbw|super-rod-spots|90:35-60:40:bw:,91:45-70:5:bw:,170:40-60:40:BW:,171:50-70:15:BW:,223:40-60:40:BW:,224:35-70:15:bw:,224:50-70:5:BW:,370:35-60:40:bw:
Undella Bay|BWbw|surf|223:30-40:5:BW:,278:25-55:60:bw:,279:25-55:10:bw:,363:25-55:30:bw:Winter,363:25-40:30:BW:Winter,458:25-55:30:bw:Spring,458:25-40:30:BW:Spring,458:25-55:30:bw:Summer,458:25-40:30:BW:Summer,458:25-55:30:bw:Autumn,458:25-40:30:BW:Autumn,592:25-40:65:BW:
Undella Bay|BWbw|surf-spots|226:35-70:5:bw:Spring,226:30-40:5:BW:Spring,226:35-70:5:bw:Summer,226:30-40:5:BW:Summer,226:35-70:5:bw:Autumn,226:30-40:5:BW:Autumn,320:25-60:60:bw:,320:25-60:30:bw:Spring,320:25-40:30:BW:Spring,320:25-60:30:bw:Summer,320:25-40:30:BW:Summer,320:25-60:30:bw:Autumn,320:25-40:30:BW:Autumn,320:25-40:60:BW:Winter,321:35-70:5:bw:Winter,321:35-70:5:bw:Spring,321:35-70:5:bw:Summer,321:35-70:5:bw:Autumn,321:30-40:5:BW:,364:25-60:30:bw:Winter,364:25-40:30:BW:Winter,365:35-70:5:bw:Winter,365:30-40:5:BW:Winter,593:25-40:60:BW:Spring,593:25-40:60:BW:Summer,593:25-40:60:BW:Autumn
Undella Town|BWbw|super-rod|90:35-55:40:bw:,90:40-60:40:BW:,223:35-55:55:bw:,370:35-55:5:bw:,370:40-70:60:BW:
Undella Town|BWbw|super-rod-spots|90:35-60:40:bw:,90:40-70:55:BW:,91:45-70:5:bw:,91:50-70:5:BW:,224:35-70:15:bw:,370:35-60:40:bw:,370:40-60:40:BW:
Undella Town|BWbw|surf|120:25-40:30:BW:,278:25-55:60:bw:,279:25-55:10:bw:,458:25-55:30:bw:,550:30-40:5:BW:,592:25-40:65:BW:
Undella Town|BWbw|surf-spots|120:25-40:60:BW:,121:30-40:5:BW:,222:25-60:30:bw:,226:35-70:10:bw:,320:25-60:60:bw:,550:30-40:5:BW:,593:25-40:30:BW:
Underground Ruins|BW|cave-spots|95:54:20:BW:,208:57:5:BW:,530:54-57:75:BW:
Underground Ruins|BW|static|377:65::BW:,378:65::BW:Needs Ice Key,379:65::BW:Needs Iron Key
Underground Ruins|BW|walk|95:57:5:BW:,299:55-57:15:BW:,305:55-57:15:BW:,525:54-56:35:BW:,527:54:10:BW:,632:54:20:BW:
Victory Road (4f Middle Room)|bw|grass-spots|530:39-42:100:bw:
Victory Road (4f Middle Room)|bw|static|639:42::bw:
Victory Road (4f Middle Room)|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Victory Road (outside)|bw|walk|611:40:5:bw:,619:38-40:15:bw:,627:37-40:35:w:,629:37-40:35:b:,631:37-40:45:bw:
Victory Road (unknown area 53)|bw|cave-spots|530:37-40:100:bw:
Victory Road (unknown area 53)|bw|super-rod|60:35-55:45:bw:,61:35-55:15:bw:,550:35-55:40:bw:
Victory Road (unknown area 53)|bw|super-rod-spots|61:35-70:55:bw:,62:45-70:5:bw:,550:35-60:40:bw:
Victory Road (unknown area 53)|bw|surf|550:20-45:100:bw:
Victory Road (unknown area 53)|bw|surf-spots|550:20-50:100:bw:
Victory Road (unknown area 53)|bw|walk|525:39:20:bw:,527:37:10:bw:,619:39:10:bw:,632:37-40:40:bw:,633:38-40:20:bw:
Victory Road (unknown area 54)|bw|grass-spots|530:37-40:100:bw:
Victory Road (unknown area 54)|bw|walk|525:37-39:30:bw:,527:37-40:20:bw:,619:39:10:bw:,632:37-40:40:bw:
Victory Road (unknown area 55)|bw|grass-spots|530:37-40:100:bw:
Victory Road (unknown area 55)|bw|walk|525:37-39:30:bw:,527:37-40:20:bw:,619:39:10:bw:,632:37-40:40:bw:
Victory Road (unknown area 57)|bw|grass-spots|530:37-40:100:bw:
Victory Road (unknown area 57)|bw|walk|525:37-39:30:bw:,527:37-40:20:bw:,619:39:10:bw:,632:37-40:40:bw:
Victory Road (unknown area 58)|bw|cave-spots|530:37-40:100:bw:
Victory Road (unknown area 58)|bw|super-rod|60:35-55:45:bw:,61:35-55:15:bw:,550:35-55:40:bw:
Victory Road (unknown area 58)|bw|super-rod-spots|61:35-70:55:bw:,62:45-70:5:bw:,550:35-60:40:bw:
Victory Road (unknown area 58)|bw|surf|550:20-45:100:bw:
Victory Road (unknown area 58)|bw|surf-spots|550:20-50:100:bw:
Victory Road (unknown area 58)|bw|walk|525:39:20:bw:,527:37:10:bw:,619:39:10:bw:,632:37-40:40:bw:,633:38-40:20:bw:
Victory Road (unknown area 59)|bw|grass-spots|530:37-40:100:bw:
Victory Road (unknown area 59)|bw|walk|525:37-39:30:bw:,527:37-40:20:bw:,619:39:10:bw:,632:37-40:40:bw:
Victory Road (unknown area 60)|bw|grass-spots|530:37-40:100:bw:
Victory Road (unknown area 60)|bw|walk|525:37-39:30:bw:,527:37-40:20:bw:,619:39:10:bw:,632:37-40:40:bw:
Victory Road (unknown area 61)|bw|grass-spots|530:37-40:100:bw:
Victory Road (unknown area 61)|bw|walk|525:37-39:30:bw:,527:37-40:20:bw:,619:39:10:bw:,632:37-40:40:bw:
Victory Road (unknown area 62)|bw|grass-spots|530:39-42:100:bw:
Victory Road (unknown area 62)|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Victory Road (unknown area 63)|bw|grass-spots|530:39-42:100:bw:
Victory Road (unknown area 63)|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Victory Road (unknown area 64)|bw|grass-spots|530:39-42:100:bw:
Victory Road (unknown area 64)|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Victory Road (unknown area 65)|bw|grass-spots|530:39-42:100:bw:
Victory Road (unknown area 65)|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Victory Road (unknown area 66)|bw|grass-spots|530:39-42:100:bw:
Victory Road (unknown area 66)|bw|walk|525:39-41:30:bw:,527:39-42:20:bw:,619:41:10:bw:,632:39-42:40:bw:
Victory Road 2 (unknown area 71)|BW|super-rod|60:40-55:60:BW:,550:40-55:40:BW:
Victory Road 2 (unknown area 71)|BW|super-rod-spots|61:40-60:55:BW:,62:50-60:5:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 71)|BW|surf|183:35-50:30:BW:,550:35-50:70:BW:
Victory Road 2 (unknown area 71)|BW|surf-spots|183:35-50:60:BW:,184:40-50:5:BW:,550:35-50:35:BW:
Victory Road 2 (unknown area 71)|BW|walk|354:47-50:70:BW:,623:48-50:30:BW:
Victory Road 2 (unknown area 72)|BW|dark-grass|315:53-55:30:BW:,546:52-55:70:B:,548:52-55:70:W:
Victory Road 2 (unknown area 72)|BW|grass-spots|206:49:10:BW:,407:50:5:BW:,531:47-50:80:BW:,547:50:5:B:,549:50:5:W:
Victory Road 2 (unknown area 72)|BW|walk|315:48-50:30:BW:,546:47-50:70:B:,548:47-50:70:W:
Victory Road 2 (unknown area 73)|BW|dark-grass|334:54-55:20:BW:,520:52-55:80:BW:
Victory Road 2 (unknown area 73)|BW|grass-spots|206:49:10:BW:,521:50:5:BW:,531:47-50:85:BW:
Victory Road 2 (unknown area 73)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 73)|BW|super-rod-spots|61:40-70:55:BW:,186:50-70:5:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 73)|BW|surf|418:35-50:30:BW:,550:35-50:70:BW:
Victory Road 2 (unknown area 73)|BW|surf-spots|418:35-50:60:BW:,419:40-50:10:BW:,550:35-50:30:BW:
Victory Road 2 (unknown area 73)|BW|walk|334:49-50:20:BW:,520:47-50:80:BW:
Victory Road 2 (unknown area 74)|BW|cave-spots|95:41:20:BW:,530:41-44:80:BW:
Victory Road 2 (unknown area 74)|BW|walk|95:43-44:20:BW:,525:41-44:80:BW:
Victory Road 2 (unknown area 75)|BW|cave-spots|95:47:20:BW:,530:47-50:80:BW:
Victory Road 2 (unknown area 75)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 75)|BW|super-rod-spots|61:40-70:55:BW:,62:50-70:5:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 75)|BW|surf|183:35-50:30:BW:,550:35-50:70:BW:
Victory Road 2 (unknown area 75)|BW|surf-spots|183:35-60:60:B:,183:35-50:60:W:,184:40-70:5:B:,184:40-50:5:W:,550:35-50:35:W:,550:35-70:35:B:
Victory Road 2 (unknown area 75)|BW|walk|95:49-50:20:BW:,525:47-50:80:BW:
Victory Road 2 (unknown area 76)|BW|dark-grass|533:52-55:70:BW:,538:53-55:30:BW:
Victory Road 2 (unknown area 76)|BW|grass-spots|531:47-50:95:BW:,539:50:5:BW:
Victory Road 2 (unknown area 76)|BW|walk|533:47-50:70:BW:,538:48-50:30:BW:
Victory Road 2 (unknown area 77)|BW|cave-spots|95:47:20:BW:,530:47-50:80:BW:
Victory Road 2 (unknown area 77)|BW|walk|621:47-50:80:BW:,634:49-50:20:BW:
Victory Road 2 (unknown area 78)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 78)|BW|super-rod-spots|61:40-70:55:BW:,62:50-70:5:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 78)|BW|surf|183:35-50:30:BW:,550:35-50:70:BW:
Victory Road 2 (unknown area 78)|BW|surf-spots|183:35-50:60:BW:,184:40-50:5:BW:,550:35-50:35:BW:
Victory Road 2 (unknown area 78)|BW|walk|354:47-50:70:BW:,623:48-50:30:BW:
Victory Road 2 (unknown area 79)|BW|dark-grass|334:54-55:20:BW:,520:52-55:80:BW:
Victory Road 2 (unknown area 79)|BW|grass-spots|206:49:10:BW:,521:50:5:BW:,531:47-50:85:BW:
Victory Road 2 (unknown area 79)|BW|super-rod|60:40-70:60:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 79)|BW|super-rod-spots|61:40-70:55:BW:,186:50-70:5:BW:,550:40-60:40:BW:
Victory Road 2 (unknown area 79)|BW|surf|418:35-50:30:BW:,550:35-50:70:BW:
Victory Road 2 (unknown area 79)|BW|surf-spots|418:35-50:60:BW:,419:40-50:10:BW:,550:35-50:30:BW:
Victory Road 2 (unknown area 79)|BW|walk|334:49-50:20:BW:,520:47-50:80:BW:
Victory Road 2 (unknown area 80)|BW|cave-spots|95:47:20:BW:,530:47-50:80:BW:
Victory Road 2 (unknown area 80)|BW|walk|621:47-50:80:BW:,634:49-50:20:BW:
Victory Road|BW|cave-spots|530:47-50:100:BW:
Victory Road|BW|walk|525:47-50:100:BW:
Village Bridge|BWbw|dark-grass|55:57-59:25:bw:,55:40-42:35:BW:,183:40-42:35:BW:,335:58-60:15:bw:,335:41-43:15:BW:,336:58-60:15:bw:,336:41-43:15:BW:,400:57-59:25:bw:,628:58-60:20:w:,630:58-60:20:b:
Village Bridge|BWbw|grass-spots|184:39:5:BW:,206:37:10:BW:,531:47-50:90:bw:,531:36-39:75:BW:,587:48:10:bw:,587:37:10:BW:
Village Bridge|BWbw|super-rod|318:35-55:60:bw:,318:40-70:60:BW:,550:35-55:40:bw:,550:40-60:40:BW:
Village Bridge|BWbw|super-rod-spots|318:35-60:40:bw:,318:40-60:40:BW:,319:35-70:20:bw:,319:50-70:20:BW:,550:35-60:40:bw:,550:40-60:40:BW:
Village Bridge|BWbw|surf|183:25-40:30:BW:,550:25-55:100:bw:,550:25-40:70:BW:
Village Bridge|BWbw|surf-spots|131:35-70:5:bw:,131:30-40:5:BW:,183:25-40:60:BW:,184:30-40:5:BW:,550:25-70:95:bw:,550:25-40:30:BW:
Village Bridge|BWbw|walk|55:47-49:25:bw:,55:36-38:35:BW:,183:36-38:35:BW:,335:48-50:15:bw:,335:37-39:15:BW:,336:48-50:15:bw:,336:37-39:15:BW:,400:47-49:25:bw:,627:48-50:20:w:,629:48-50:20:b:
Virbank City|BW|super-rod|98:40-60:40:BW:,211:50-70:5:BW:,456:40-70:55:BW:
Virbank City|BW|super-rod-spots|98:40-60:40:BW:,99:50-70:20:BW:,457:40-60:40:BW:
Virbank City|BW|surf|592:5-15:100:BW:
Virbank City|BW|surf-spots|593:5-15:5:BW:,594:5-15:95:BW:
Virbank Complex (inner)|BW|dark-grass|58:12-14:20:BW:,81:11-13:25:BW:,109:11-14:15:BW:,239:11-13:25:W:,240:11-13:25:B:,504:11-14:15:BW:
Virbank Complex (inner)|BW|grass-spots|531:10-13:100:BW:
Virbank Complex (inner)|BW|walk|58:11-13:20:BW:,81:10-12:25:BW:,109:10-13:15:BW:,239:10-12:25:W:,240:10-12:25:B:,504:10-13:15:BW:
Virbank Complex (outer)|BW|grass-spots|531:10-13:100:BW:
Virbank Complex (outer)|BW|super-rod|98:40-60:40:BW:,211:50-70:5:BW:,456:40-70:55:BW:
Virbank Complex (outer)|BW|super-rod-spots|98:40-60:40:BW:,99:50-70:20:BW:,457:40-60:40:BW:
Virbank Complex (outer)|BW|surf|592:5-15:100:BW:
Virbank Complex (outer)|BW|surf-spots|593:5-15:5:BW:,594:5-15:95:BW:
Virbank Complex (outer)|BW|walk|81:10-11:15:BW:,239:10-11:15:W:,240:10-11:15:B:,504:10-13:35:BW:,519:10-13:35:BW:
Wellspring Cave|BWbw|cave-spots|529:10-13:100:bw:,530:55-58:100:BW:
Wellspring Cave|BWbw|super-rod|60:35-55:45:bw:,60:50-70:60:BW:,61:35-55:15:bw:,550:35-55:40:bw:,550:50-60:40:BW:
Wellspring Cave|BWbw|super-rod-spots|61:35-60:55:bw:,61:50-60:55:BW:,62:35-60:5:bw:,62:60:5:BW:,550:35-60:40:bw:,550:50-60:40:BW:
Wellspring Cave|BWbw|surf|550:5-15:100:bw:,550:45-60:100:BW:
Wellspring Cave|BWbw|surf-spots|550:5-20:100:bw:,550:45-60:100:BW:
Wellspring Cave|BWbw|walk|524:10-13:50:bw:,525:55-58:50:BW:,527:10-13:50:bw:,527:55-58:50:BW:
`
});
