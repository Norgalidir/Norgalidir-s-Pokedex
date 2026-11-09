// Encounter data for Brilliant Diamond (I) and Shining Pearl (J).
// Derived from the Diamond and Pearl tables: the remakes keep the original
// wild encounters almost unchanged. Dual-slot (GBA cartridge) encounters are
// dropped because the remakes have no equivalent. The Grand Underground's
// hideaways aren't included yet. Levels and rates may differ slightly from
// the remakes in places.
window.ENCOUNTERS_MORE = Object.assign(window.ENCOUNTERS_MORE || {}, {
  bdsp: `
Turnback Cave|IJ|static|487:70::IJ:Giratina — after getting the National Dex
Ramanas Park|IJ|static|144:70::IJ:Ramanas Park, with its Slate,145:70::IJ:Ramanas Park, with its Slate,146:70::IJ:Ramanas Park, with its Slate,150:70::IJ:Ramanas Park, with its Slate,243:70::IJ:Ramanas Park, with its Slate,244:70::IJ:Ramanas Park, with its Slate,245:70::IJ:Ramanas Park, with its Slate,250:70::I:Ramanas Park, with its Slate — Brilliant Diamond only,249:70::J:Ramanas Park, with its Slate — Shining Pearl only,381:70::I:Ramanas Park, with its Slate — Brilliant Diamond only,380:70::J:Ramanas Park, with its Slate — Shining Pearl only,383:70::I:Ramanas Park, with its Slate — Brilliant Diamond only,382:70::J:Ramanas Park, with its Slate — Shining Pearl only,384:70::IJ:Ramanas Park, with its Slate,377:70::IJ:Ramanas Park, with its Slate,378:70::IJ:Ramanas Park, with its Slate,379:70::IJ:Ramanas Park, with its Slate
Canalave City|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Canalave City|IJ|super-rod|120:20-40:15:IJ:,130:30-40:40:IJ:,457:20-50:45:IJ:
Canalave City|IJ|old-rod|129:3-10:100:IJ:
Canalave City|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Eterna City|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Eterna City|IJ|old-rod|129:3-10:100:IJ:
Eterna City|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Eterna City|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Eterna City Eterna Condominiums|IJ|trade|441:1-100::IJ:Trade a Buizel
Pastoria City|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Pastoria City|IJ|old-rod|129:3-10:100:IJ:
Pastoria City|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Pastoria City|IJ|super-rod|130:30-55:55:IJ:,224:20-50:45:IJ:
Sunyshore City|IJ|surf|73:35-45:60:IJ:,279:35-45:30:IJ:,458:30-45:10:IJ:
Sunyshore City|IJ|super-rod|120:20-40:15:IJ:,130:30-40:40:IJ:,224:20-50:45:IJ:
Sunyshore City|IJ|old-rod|129:3-10:100:IJ:
Sunyshore City|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Pokémon League|IJ|surf|73:35-45:35:IJ:,279:35-45:65:IJ:
Pokémon League|IJ|old-rod|129:3-10:100:IJ:
Pokémon League|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Pokémon League|IJ|super-rod|130:30-40:40:IJ:,224:20-50:45:IJ:,370:20-30:15:IJ:
Oreburgh Mine 1F|IJ|walk|41:7:20:IJ:,74:5-9:70:IJ:,95:8:10:IJ:
Oreburgh Mine B1F|IJ|walk|41:8:20:IJ:,74:6-10:70:IJ:,95:9:10:IJ:
Valley Windworks|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Valley Windworks|IJ|super-rod|90:20-40:15:IJ:,130:30-40:40:IJ:,457:30-50:45:IJ:
Valley Windworks|IJ|old-rod|129:3-10:100:IJ:
Valley Windworks|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Valley Windworks|IJ|walk|179:7-9:22:IJ:Poké Radar,309:7:40:IJ:Swarm,399:8:10:IJ:,417:7-8:25:IJ:,418:7-9:35:IJ:,422:7-9:30:IJ:
Valley Windworks|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Valley Windworks|IJ|static|425:22::IJ:Fridays / Story  defeat mars
Eterna Forest|IJ|walk|198:10-11:20:I:Night,200:10-11:20:J:Night,265:10:20:IJ:,265:11:10:IJ:Morning,265:11:10:IJ:Day,266:10:20:I:,267:12:2:I:,268:10:20:J:,269:12:2:J:,287:10:40:IJ:Swarm,290:10-12:22:IJ:Poké Radar,406:10:10:IJ:Morning,406:10:10:IJ:Day,406:11-12:19:IJ:,427:10-12:19:IJ:
Eterna Forest|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Fuego Ironworks|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Fuego Ironworks|IJ|walk|81:28-29:40:IJ:Swarm,187:29:20:J:Poké Radar,188:30:2:J:Poké Radar,278:29:10:IJ:,304:29-30:22:I:Poké Radar,403:28:10:IJ:,404:29:10:IJ:,417:29:10:IJ:,419:29-30:25:IJ:,422:28:20:IJ:,423:29-30:15:IJ:
Fuego Ironworks|IJ|super-rod|90:20-40:15:IJ:,130:30-40:40:IJ:,457:20-50:45:IJ:
Fuego Ironworks|IJ|old-rod|129:3-10:100:IJ:
Fuego Ironworks|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Fuego Ironworks|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Mt. Coronet 1F Route 207|IJ|walk|41:14:10:IJ:Day,41:14:10:IJ:Night,41:15:10:IJ:,66:15-16:25:IJ:,74:15:20:IJ:,74:14:10:IJ:Day,74:14:10:IJ:Night,173:14:20:IJ:Morning,173:14:5:IJ:,307:15:10:IJ:,433:15:10:IJ:
Mt. Coronet 1F Route 207|IJ|surf|41:20-40:90:IJ:,42:20-40:10:IJ:
Mt. Coronet 1F Route 207|IJ|old-rod|129:3-10:100:IJ:
Mt. Coronet 1F Route 207|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Mt. Coronet 1F Route 207|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Mt. Coronet 2F|IJ|walk|35:36-38:15:IJ:,42:37:10:IJ:,67:37:10:IJ:,75:36:20:IJ:,308:37:10:IJ:,433:37-38:10:IJ:,436:36:5:IJ:,437:38:20:IJ:
Mt. Coronet 3F|IJ|walk|35:36-38:15:IJ:,42:37:10:IJ:,67:37:10:IJ:,75:36:20:IJ:,308:37:10:IJ:,433:37-38:10:IJ:,436:36:5:IJ:,437:38:20:IJ:
Mt. Coronet Exterior Snowfall|IJ|walk|35:38-39:5:IJ:,42:39:10:IJ:Night,67:39:10:IJ:Morning,67:39:10:IJ:Day,67:40:10:IJ:,164:39:10:IJ:Night,294:39-40:22:IJ:Poké Radar,308:39:10:IJ:Morning,308:39:10:IJ:Day,308:40:10:IJ:,433:39-40:10:IJ:,437:39-40:5:IJ:,459:38:20:IJ:,460:40:20:IJ:
Mt. Coronet Exterior Blizzard|IJ|walk|35:38-39:5:IJ:,42:39:10:IJ:Night,67:39:10:IJ:Morning,67:39:10:IJ:Day,67:40:10:IJ:,164:39:10:IJ:Night,294:39-40:22:IJ:Poké Radar,308:39:10:IJ:Morning,308:39:10:IJ:Day,308:40:10:IJ:,433:39-40:10:IJ:,437:39-40:5:IJ:,459:38:20:IJ:,460:40:20:IJ:
Mt. Coronet 4F|IJ|walk|35:38-40:15:IJ:,42:39:10:IJ:,67:39:10:IJ:,75:38:20:IJ:,308:39:10:IJ:,433:39-40:10:IJ:,437:38-40:25:IJ:
Mt. Coronet 4F|IJ|surf|41:20-40:90:IJ:,42:20-40:10:IJ:
Mt. Coronet 4F|IJ|old-rod|129:3-10:100:IJ:
Mt. Coronet 4F|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Mt. Coronet 4F|IJ|super-rod|130:30-55:55:IJ:,147:15-20:40:IJ:,148:15-40:5:IJ:
Mt. Coronet 4F Small Room|IJ|walk|35:38-40:15:IJ:,42:39:10:IJ:,67:39:10:IJ:,75:38:20:IJ:,308:39:10:IJ:,358:40:5:IJ:,433:40:5:IJ:,437:38-40:25:IJ:
Mt. Coronet 5F|IJ|walk|35:40-42:15:IJ:,42:41:10:IJ:,67:41:10:IJ:,75:40:20:IJ:,308:41:10:IJ:,358:41-42:10:IJ:,437:40-42:25:IJ:
Mt. Coronet 6F|IJ|walk|35:40-42:15:IJ:,42:41:10:IJ:,67:41:10:IJ:,75:40:20:IJ:,308:41:10:IJ:,358:41-42:10:IJ:,437:40-42:25:IJ:
Mt. Coronet 1F From Exterior|IJ|walk|35:38-40:15:IJ:,42:39:10:IJ:,67:40:10:IJ:,75:39-40:40:IJ:,308:40:10:IJ:,433:38-40:10:IJ:,437:39-40:5:IJ:
Mt. Coronet 1F Route 216|IJ|walk|35:30-32:15:IJ:,42:31-32:20:IJ:,67:31:10:IJ:,75:31:20:IJ:,307:31-32:25:IJ:,433:30:10:IJ:
Mt. Coronet 1F Route 211|IJ|walk|41:12:10:IJ:Day,41:12:10:IJ:Night,41:13:10:IJ:,66:13:10:IJ:,74:13:20:IJ:,74:12:10:IJ:Day,74:12:10:IJ:Night,173:12:20:IJ:Morning,173:12:5:IJ:,307:13-14:25:IJ:,433:13:10:IJ:
Mt. Coronet B1F|IJ|walk|35:30-32:15:IJ:,42:31-32:20:IJ:,67:31:10:IJ:,75:31:20:IJ:,307:31-32:25:IJ:,433:30:10:IJ:
Mt. Coronet B1F|IJ|surf|41:20-40:90:IJ:,42:20-40:10:IJ:
Mt. Coronet B1F|IJ|old-rod|129:3-10:100:IJ:
Mt. Coronet B1F|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Mt. Coronet B1F|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Mt. Coronet B1F|IJ|feebas|349:10-20:50:IJ:
Great Marsh Area 1|IJ|walk|54:24-26:8:IJ:,163:24:10:IJ:Night,164:26:10:IJ:Night,183:25-26:15:IJ:,194:24:20:IJ:,195:25-26:15:IJ:,298:24:1:IJ:,396:26:10:IJ:Morning,396:26:10:IJ:Day,399:26:1:IJ:,400:25:20:IJ:,406:24:10:IJ:Morning,406:24:10:IJ:Day
Great Marsh Area 1|IJ|surf|54:20-40:5:IJ:,183:20-30:30:IJ:,194:20-30:60:IJ:,195:20-40:5:IJ:
Great Marsh Area 1|IJ|old-rod|129:3-10:100:IJ:
Great Marsh Area 1|IJ|good-rod|129:10-25:55:IJ:,130:15-30:5:IJ:,339:15-20:40:IJ:
Great Marsh Area 1|IJ|super-rod|130:40-55:15:IJ:,318:15-30:45:IJ:,340:30-55:40:IJ:
Great Marsh Area 2|IJ|walk|54:24-26:8:IJ:,163:24:10:IJ:Night,164:26:10:IJ:Night,183:25-26:15:IJ:,194:24:20:IJ:,195:25-26:15:IJ:,298:24:1:IJ:,396:26:10:IJ:Morning,396:26:10:IJ:Day,399:26:1:IJ:,400:25:20:IJ:,406:24:10:IJ:Morning,406:24:10:IJ:Day
Great Marsh Area 2|IJ|surf|54:20-40:5:IJ:,183:20-30:30:IJ:,194:20-30:60:IJ:,195:20-40:5:IJ:
Great Marsh Area 2|IJ|old-rod|129:3-10:100:IJ:
Great Marsh Area 2|IJ|good-rod|129:10-25:55:IJ:,130:15-30:5:IJ:,339:15-20:40:IJ:
Great Marsh Area 2|IJ|super-rod|130:40-55:15:IJ:,318:15-30:45:IJ:,340:30-55:40:IJ:
Great Marsh Area 3|IJ|walk|54:22-24:8:IJ:,163:22-24:20:IJ:Night,183:23-24:15:IJ:,194:22:20:IJ:,195:23-24:15:IJ:,298:22:1:IJ:,396:24:10:IJ:Morning,396:24:10:IJ:Day,399:24:1:IJ:,400:23:20:IJ:,406:22:10:IJ:Morning,406:22:10:IJ:Day
Great Marsh Area 3|IJ|surf|54:20-40:5:IJ:,183:20-30:30:IJ:,194:20-30:60:IJ:,195:20-40:5:IJ:
Great Marsh Area 3|IJ|old-rod|129:3-10:100:IJ:
Great Marsh Area 3|IJ|good-rod|129:10-25:55:IJ:,130:15-30:5:IJ:,339:15-20:40:IJ:
Great Marsh Area 3|IJ|super-rod|130:40-55:15:IJ:,318:15-30:45:IJ:,340:30-55:40:IJ:
Great Marsh Area 4|IJ|walk|54:22-24:8:IJ:,163:22-24:20:IJ:Night,183:23-24:15:IJ:,194:22:20:IJ:,195:23-24:15:IJ:,298:22:1:IJ:,396:24:10:IJ:Morning,396:24:10:IJ:Day,399:24:1:IJ:,400:23:20:IJ:,406:22:10:IJ:Morning,406:22:10:IJ:Day
Great Marsh Area 4|IJ|surf|54:20-40:5:IJ:,183:20-30:30:IJ:,194:20-30:60:IJ:,195:20-40:5:IJ:
Great Marsh Area 4|IJ|old-rod|129:3-10:100:IJ:
Great Marsh Area 4|IJ|good-rod|129:10-25:55:IJ:,130:15-30:5:IJ:,339:15-20:40:IJ:
Great Marsh Area 4|IJ|super-rod|130:40-55:15:IJ:,318:15-30:45:IJ:,340:30-55:40:IJ:
Great Marsh Area 5|IJ|walk|163:20-22:20:IJ:Night,183:21-22:15:IJ:,194:20:20:IJ:,195:21-22:15:IJ:,298:20:5:IJ:,396:22:10:IJ:Morning,396:22:10:IJ:Day,399:22:5:IJ:,400:21:20:IJ:,406:20:10:IJ:Morning,406:20:10:IJ:Day
Great Marsh Area 6|IJ|walk|54:20-22:8:IJ:,163:20-22:20:IJ:Night,183:21-22:15:IJ:,194:20:20:IJ:,195:21-22:15:IJ:,298:20:1:IJ:,396:22:10:IJ:Morning,396:22:10:IJ:Day,399:22:1:IJ:,400:21:20:IJ:,406:20:10:IJ:Morning,406:20:10:IJ:Day
Great Marsh Area 6|IJ|surf|54:20-40:5:IJ:,183:20-30:30:IJ:,194:20-30:60:IJ:,195:20-40:5:IJ:
Great Marsh Area 6|IJ|old-rod|129:3-10:100:IJ:
Great Marsh Area 6|IJ|good-rod|129:10-25:55:IJ:,130:15-30:5:IJ:,339:15-20:40:IJ:
Great Marsh Area 6|IJ|super-rod|130:40-55:15:IJ:,318:15-30:45:IJ:,340:30-55:40:IJ:
Solaceon Ruins 2F|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins 1F|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B1F A|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B1F B|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B1F C|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B2F A|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B2F B|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B2F C|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B3F A|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B3F B|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B3F C|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B3F D|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B3F E|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B4F A|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B4F B|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B4F C|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B4F D|IJ|walk|201:14-25:100:IJ:
Solaceon Ruins B5F|IJ|walk|201:14-25:100:IJ:
Victory Road 1F|IJ|walk|42:44-46:20:IJ:,67:44-46:25:IJ:,75:45:20:IJ:,95:44:10:IJ:,208:46:10:IJ:,308:44-46:15:IJ:
Victory Road 2F|IJ|walk|42:45-47:20:IJ:,64:45-47:25:IJ:,75:46:20:IJ:,95:45:10:IJ:,208:47:10:IJ:,308:45-47:15:IJ:
Victory Road B1F|IJ|walk|42:44-46:20:IJ:,67:44-46:25:IJ:,208:46:10:IJ:,308:44-46:15:IJ:,419:44-45:30:IJ:
Victory Road B1F|IJ|surf|42:35-50:100:IJ:
Victory Road B1F|IJ|old-rod|129:3-10:100:IJ:
Victory Road B1F|IJ|good-rod|129:10-25:100:IJ:
Victory Road B1F|IJ|super-rod|130:20-55:100:IJ:
Victory Road Inside B1F|IJ|walk|42:50-52:20:IJ:,67:50-52:25:IJ:,208:52:10:IJ:,308:50-52:15:IJ:,419:50-51:30:IJ:
Victory Road Inside B1F|IJ|surf|42:40-55:90:IJ:,131:40-60:10:IJ:
Victory Road Inside B1F|IJ|old-rod|129:3-10:100:IJ:
Victory Road Inside B1F|IJ|good-rod|129:10-25:100:IJ:
Victory Road Inside B1F|IJ|super-rod|130:20-55:100:IJ:
Victory Road Inside|IJ|walk|42:50-52:20:IJ:,67:50-52:25:IJ:,75:51:20:IJ:,95:50:10:IJ:,208:52:10:IJ:,308:50-52:15:IJ:
Victory Road Inside Exit|IJ|walk|42:50-52:20:IJ:,67:50-52:25:IJ:,75:51:20:IJ:,95:50:10:IJ:,208:52:10:IJ:,308:50-52:15:IJ:
Ravaged Path|IJ|walk|41:4-6:78:IJ:,54:5:2:IJ:,74:5:20:IJ:
Ravaged Path|IJ|surf|41:20-30:60:IJ:,42:20-40:5:IJ:,54:20-30:30:IJ:,55:20-40:5:IJ:
Ravaged Path|IJ|old-rod|129:3-10:100:IJ:
Ravaged Path|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Ravaged Path|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Oreburgh Gate 1F|IJ|walk|41:6:20:IJ:,74:4-8:80:IJ:
Oreburgh Gate B1F|IJ|walk|41:8-10:60:IJ:,54:8-10:30:IJ:,74:9:10:IJ:
Oreburgh Gate B1F|IJ|surf|41:20-30:60:IJ:,42:20-40:5:IJ:,54:20-30:30:IJ:,55:20-40:5:IJ:
Oreburgh Gate B1F|IJ|old-rod|129:3-10:100:IJ:
Oreburgh Gate B1F|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Oreburgh Gate B1F|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Stark Mountain|IJ|walk|22:54:10:IJ:Morning,22:54:10:IJ:Day,22:55:10:IJ:,42:54:10:IJ:Night,75:54:10:IJ:Morning,75:54:10:IJ:Day,75:56:5:IJ:,110:55:10:IJ:,111:22-24:5:IJ:,112:55:20:IJ:,227:56:5:IJ:,322:22-24:5:IJ:,323:55:20:IJ:,324:24-55:22:IJ:Poké Radar,354:54:10:IJ:Night
Stark Mountain Entrance|IJ|walk|42:54:10:IJ:,67:56:10:IJ:,74:25-27:5:IJ:,75:55:20:IJ:,95:54:5:IJ:,110:56:10:IJ:,218:25-27:5:IJ:,219:55-56:30:IJ:,323:56:5:IJ:
Stark Mountain Inside|IJ|walk|42:56:10:IJ:,67:58:10:IJ:,74:27-29:5:IJ:,75:57:20:IJ:,95:56:5:IJ:,110:58:10:IJ:,218:27-29:5:IJ:,219:57-58:30:IJ:,323:58:5:IJ:
Stark Mountain Heatran Chamber|IJ|static|485:70::IJ:
Turnback Cave Pillar 1|IJ|walk|42:55-56:30:IJ:,93:54-56:30:IJ:,436:54:5:IJ:,437:55-56:35:IJ:
Turnback Cave Pillar 2|IJ|walk|42:55-56:30:IJ:,93:54-56:30:IJ:,436:54:5:IJ:,437:55-56:35:IJ:
Turnback Cave Pillar 3|IJ|walk|42:55-56:30:IJ:,93:54-56:30:IJ:,436:54:5:IJ:,437:55-56:35:IJ:
Turnback Cave Before Pillar 1|IJ|walk|42:45-46:30:IJ:,93:44-46:30:IJ:,436:44:5:IJ:,437:45-46:35:IJ:
Turnback Cave Between Pillars 1 And 2|IJ|walk|42:55-56:30:IJ:,93:54-56:30:IJ:,436:54:5:IJ:,437:55-56:35:IJ:
Turnback Cave Between Pillars 2 And 3|IJ|walk|42:65-66:30:IJ:,93:64-66:30:IJ:,436:64:5:IJ:,437:65-66:35:IJ:
Turnback Cave After Pillar 3|IJ|walk|42:55-56:30:IJ:,93:54-56:30:IJ:,436:54:5:IJ:,437:55-56:35:IJ:
Snowpoint Temple 1F|IJ|walk|42:50-52:35:IJ:,75:52:10:IJ:,95:50-52:15:IJ:,208:52:5:IJ:,215:50-52:35:IJ:
Snowpoint Temple B1F|IJ|walk|42:52-54:35:IJ:,75:54:10:IJ:,95:52-53:5:IJ:,208:53-54:15:IJ:,215:52-54:35:IJ:
Snowpoint Temple B2F|IJ|walk|42:52-54:35:IJ:,75:54:10:IJ:,95:52-53:5:IJ:,208:53-54:15:IJ:,215:52-54:35:IJ:
Snowpoint Temple B3F|IJ|walk|42:52-54:35:IJ:,75:54:10:IJ:,95:52-53:5:IJ:,208:53-54:15:IJ:,215:52-54:35:IJ:
Snowpoint Temple B4F|IJ|walk|42:54-56:35:IJ:,75:56:10:IJ:,208:54-56:20:IJ:,215:54-56:35:IJ:
Snowpoint Temple B5F|IJ|walk|42:54-56:35:IJ:,75:56:10:IJ:,208:54-56:20:IJ:,215:54-56:35:IJ:
Snowpoint Temple B5F|IJ|static|486:70::IJ:Regirock regice registeel in party
Wayward Cave 1F|IJ|walk|41:14-16:45:IJ:,74:15-16:15:IJ:,436:14-16:40:IJ:
Wayward Cave B1F|IJ|walk|41:15-17:35:IJ:,74:16:10:IJ:,436:15-17:40:IJ:,443:15-17:15:IJ:
Ruin Maniac Cave 0 9 Different Unown Caught|IJ|walk|74:22:95:IJ:,449:22-23:5:IJ:
Ruin Maniac Cave 10 25 Different Unown Caught|IJ|walk|74:23:90:IJ:,449:22-24:10:IJ:
Trophy Garden|IJ|walk|25:18:10:IJ:,35:16-18:10:IJ:Story  national dex / Backlot mentioned,39:16-18:10:IJ:Story  national dex / Backlot mentioned,52:16-18:10:IJ:Story  national dex / Backlot mentioned,113:16-18:10:IJ:Story  national dex / Backlot mentioned,133:16-18:10:IJ:Story  national dex / Backlot mentioned,137:16-18:10:IJ:Story  national dex / Backlot mentioned,172:16:20:IJ:Morning,172:16:10:IJ:,173:16-18:10:IJ:Story  national dex / Backlot mentioned,174:16-18:10:IJ:Story  national dex / Backlot mentioned,183:16-18:10:IJ:Story  national dex / Backlot mentioned,298:16-18:10:IJ:Story  national dex / Backlot mentioned,311:16-18:10:IJ:Story  national dex / Backlot mentioned,312:16-18:10:IJ:Story  national dex / Backlot mentioned,315:16-17:30:IJ:,351:16-18:10:IJ:Story  national dex / Backlot mentioned,397:17:20:IJ:,397:16:20:IJ:Day,402:16:20:IJ:Night,402:17:10:IJ:,438:16-18:10:IJ:Story  national dex / Backlot mentioned,439:16-18:10:IJ:Story  national dex / Backlot mentioned,440:16-18:10:IJ:Story  national dex / Backlot mentioned
Iron Island|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Iron Island|IJ|old-rod|129:3-10:100:IJ:
Iron Island|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Iron Island|IJ|super-rod|130:30-40:40:IJ:,211:20-40:15:IJ:,457:20-50:45:IJ:
Iron Island 1F|IJ|walk|41:30:10:IJ:,42:31:10:IJ:,74:29-31:35:IJ:,75:31-33:35:IJ:,95:32-33:10:IJ:
Iron Island B1F Left|IJ|walk|42:30-31:20:IJ:,74:31:1:IJ:,75:29-33:69:IJ:,95:32-33:10:IJ:
Iron Island B1F Right|IJ|walk|42:30-31:20:IJ:,74:31:1:IJ:,75:29-33:69:IJ:,95:32-33:10:IJ:
Iron Island B2F Right|IJ|walk|42:30-31:20:IJ:,74:31:1:IJ:,75:29-33:49:IJ:,95:31-33:30:IJ:
Iron Island B2F Left|IJ|walk|42:31-32:20:IJ:,74:32:1:IJ:,75:30-34:39:IJ:,95:32-33:30:IJ:,208:33-34:10:IJ:
Iron Island B2F Left|IJ|gift-egg|447:1::IJ:Story  beat team galactic iron island
Iron Island B3F|IJ|walk|42:31-32:20:IJ:,74:32:1:IJ:,75:30-34:39:IJ:,95:32-33:30:IJ:,208:33-34:10:IJ:
Old Chateau Entrance|IJ|walk|92:12-16:100:IJ:
Old Chateau Dining Room|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F Private Room|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F Leftmost Room|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F Left Room|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F Left Room|IJ|static|479:15::IJ:Story  national dex / Night
Old Chateau 2F Middle Room|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F Right Room|IJ|walk|92:12-16:100:IJ:
Old Chateau 2F Rightmost Room|IJ|walk|92:12-16:100:IJ:
Lake Verity Before Galactic Intervention|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Lake Verity Before Galactic Intervention|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Lake Verity Before Galactic Intervention|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Lake Verity Before Galactic Intervention|IJ|old-rod|129:3-10:100:IJ:
Lake Verity Before Galactic Intervention|IJ|walk|202:3-4:22:IJ:Poké Radar,283:2:40:IJ:Swarm,396:2-4:40:IJ:,396:3:10:IJ:Morning,396:3:10:IJ:Day,399:2-4:50:IJ:,399:3:10:IJ:Night
Lake Verity Before Galactic Intervention|IJ|gift|387:5::IJ:,390:5::IJ:,393:5::IJ:
Lake Verity After Galactic Intervention|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Lake Verity After Galactic Intervention|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Lake Verity After Galactic Intervention|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Lake Verity After Galactic Intervention|IJ|old-rod|129:3-10:100:IJ:
Lake Verity After Galactic Intervention|IJ|walk|202:3-4:22:IJ:Poké Radar,283:2:40:IJ:Swarm,396:2-4:40:IJ:,396:3:10:IJ:Morning,396:3:10:IJ:Day,399:2-4:50:IJ:,399:3:10:IJ:Night
Lake Valor|IJ|walk|54:35-36:20:IJ:,108:34-36:40:IJ:Swarm,164:34-36:20:IJ:Night,202:35-36:22:IJ:Poké Radar,397:34-36:20:IJ:Morning,397:34-36:20:IJ:Day,397:35:5:IJ:,400:34-36:45:IJ:,433:35-36:10:IJ:
Lake Valor|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Lake Valor|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Lake Valor|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Lake Valor|IJ|old-rod|129:3-10:100:IJ:
Lake Valor Cavern|IJ|static|482:50::IJ:
Lake Acuity|IJ|walk|54:36:10:IJ:Morning,54:36:10:IJ:Day,54:34-35:20:IJ:,164:34-36:20:IJ:Night,202:34-36:22:IJ:Poké Radar,215:35-36:25:IJ:,238:35:40:IJ:Swarm,400:34-35:25:IJ:,400:34:10:IJ:Morning,400:34:10:IJ:Day,433:34-36:10:IJ:
Lake Acuity|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Lake Acuity|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Lake Acuity|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Lake Acuity|IJ|old-rod|129:3-10:100:IJ:
Lake Acuity Cavern|IJ|static|480:50::IJ:
Valor Lakefront|IJ|walk|30:21-22:20:I:Poké Radar,30:22:2:J:Poké Radar,33:22:2:I:Poké Radar,33:21-22:20:J:Poké Radar,74:20:20:IJ:,75:21:10:IJ:Morning,75:21:10:IJ:Day,75:22:5:IJ:,203:21-22:30:IJ:,397:21:10:IJ:Morning,397:21:10:IJ:Day,397:22:5:IJ:,400:21-22:15:IJ:,402:21:20:IJ:Night,402:22:5:IJ:
Acuity Lakefront|IJ|walk|41:35:10:IJ:Night,67:35:10:IJ:Morning,67:35:10:IJ:Day,67:36:10:IJ:,164:35:10:IJ:Night,215:34-35:25:IJ:,307:35:10:IJ:Morning,307:35:10:IJ:Day,308:35-36:20:IJ:,361:35-36:22:IJ:Poké Radar,459:34-35:25:IJ:
Route 201|IJ|walk|29:3:20:I:Poké Radar,29:2:2:J:Poké Radar,32:2:2:I:Poké Radar,32:3:20:J:Poké Radar,84:2:40:IJ:Swarm,396:2-3:40:IJ:,396:3:10:IJ:Morning,396:3:10:IJ:Day,399:2-3:50:IJ:,399:3:10:IJ:Night
Route 202|IJ|walk|161:2-4:22:IJ:Poké Radar,263:3:40:IJ:Swarm,396:4:10:IJ:Morning,396:3-4:20:IJ:Day,396:2-4:20:IJ:,399:2-4:30:IJ:,401:3-4:20:IJ:Night,401:3:10:IJ:Morning,403:3-4:30:IJ:
Route 203|IJ|walk|41:5:10:IJ:Night,63:4-5:15:IJ:,104:4:40:IJ:Swarm,280:4-6:21:IJ:Poké Radar,281:6:1:IJ:Poké Radar,396:4-6:25:IJ:,396:5:10:IJ:Morning,396:4-5:20:IJ:Day,399:4-6:15:IJ:,401:4:10:IJ:Morning,401:4:10:IJ:Night,403:4-5:25:IJ:
Route 203|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 203|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Route 203|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Route 203|IJ|old-rod|129:3-10:100:IJ:
Route 204 South Towards Jubilife City|IJ|walk|41:4:10:IJ:Night,280:4-6:21:IJ:Poké Radar,281:6:1:IJ:Poké Radar,396:4-6:25:IJ:,396:4:10:IJ:Day,399:4-6:25:IJ:,401:4:10:IJ:Morning,401:4:10:IJ:Night,403:4-5:15:IJ:,406:4:10:IJ:Morning,406:4:10:IJ:Day,406:4-5:15:IJ:
Route 204 South Towards Jubilife City|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 204 South Towards Jubilife City|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Route 204 South Towards Jubilife City|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Route 204 South Towards Jubilife City|IJ|old-rod|129:3-10:100:IJ:
Route 204 North Towards Floaroma Town|IJ|walk|41:6:10:IJ:Night,191:6-8:22:IJ:Poké Radar,396:6-8:25:IJ:,396:6:10:IJ:Day,399:6-8:25:IJ:,401:6:10:IJ:Morning,401:6:10:IJ:Night,403:6-7:15:IJ:,406:6:10:IJ:Morning,406:6:10:IJ:Day,406:6-7:15:IJ:
Route 204 North Towards Floaroma Town|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 204 North Towards Floaroma Town|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Route 204 North Towards Floaroma Town|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Route 204 North Towards Floaroma Town|IJ|old-rod|129:3-10:100:IJ:
Route 205 South Towards Floaroma Town|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Route 205 South Towards Floaroma Town|IJ|super-rod|90:20-40:15:IJ:,130:30-40:40:IJ:,457:20-50:45:IJ:
Route 205 South Towards Floaroma Town|IJ|old-rod|129:3-10:100:IJ:
Route 205 South Towards Floaroma Town|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Route 205 South Towards Floaroma Town|IJ|walk|187:9-10:22:IJ:Poké Radar,399:9:10:IJ:,417:9:10:IJ:,418:8-10:35:IJ:,422:8-10:45:IJ:
Route 205 South Towards Floaroma Town|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 205 East Towards Eterna City|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 205 East Towards Eterna City|IJ|walk|79:11-12:22:J:Poké Radar,187:11:20:I:Poké Radar,188:12:2:I:Poké Radar,399:10-12:45:IJ:,417:11:10:IJ:,418:10-12:35:IJ:,422:11:10:IJ:
Route 205 East Towards Eterna City|IJ|old-rod|129:3-10:100:IJ:
Route 205 East Towards Eterna City|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Route 205 East Towards Eterna City|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Route 205 East Towards Eterna City|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 206|IJ|walk|41:15:10:IJ:Night,74:14:10:I:,74:14-16:35:J:,77:14-16:25:IJ:,77:15:10:IJ:Morning,77:14-15:20:IJ:Day,299:14:40:IJ:Swarm,343:14-16:22:IJ:Poké Radar,401:14:10:IJ:Morning,402:14:10:IJ:Night,402:15:10:IJ:,434:14-16:25:I:,436:15:10:IJ:
Route 206|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 207|IJ|walk|41:6:10:IJ:Night,66:5-7:25:IJ:,66:6:10:IJ:Morning,66:6:20:IJ:Day,74:5-7:55:IJ:,231:5:40:IJ:Swarm,234:6-7:22:J:Poké Radar,246:6-7:22:I:Poké Radar,401:6:10:IJ:Morning,401:6:10:IJ:Night
Route 207|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 208|IJ|walk|41:16:20:IJ:Night,54:16-18:30:IJ:,66:16:10:IJ:Morning,66:16:10:IJ:Day,66:17:10:IJ:,206:16:40:IJ:Swarm,236:17-18:22:IJ:Poké Radar,307:16:10:IJ:Morning,307:16:10:IJ:Day,307:17:10:IJ:,399:16:20:IJ:,400:17-18:10:IJ:
Route 208|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 208|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Route 208|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Route 208|IJ|old-rod|129:3-10:100:IJ:
Route 208|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 209|IJ|walk|41:16:10:IJ:Night,92:16:10:IJ:Night,113:16:5:IJ:,128:17:20:I:Poké Radar,128:16:2:J:Poké Radar,209:16:40:IJ:Swarm,241:16:2:I:Poké Radar,241:17:20:J:Poké Radar,396:16:20:IJ:,397:16:10:IJ:Day,397:17-18:15:IJ:,400:16-18:35:IJ:,400:16:10:IJ:Day,438:16:20:J:Morning,438:16:5:J:,439:16:20:I:Morning,439:16:5:I:
Route 209|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 209|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Route 209|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Route 209|IJ|old-rod|129:3-10:100:IJ:
Route 209|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 209|IJ|static|442:25::IJ:Holding the Odd Keystone / Talked to 32 people underground
Lost Tower 1F|IJ|walk|41:16-18:40:IJ:,41:17:10:IJ:Morning,41:17:10:IJ:Day,92:16-18:40:IJ:,92:17:10:IJ:Morning,92:17:10:IJ:Day,198:17:20:I:Night,200:17:20:J:Night
Lost Tower 2F|IJ|walk|41:17-19:40:IJ:,41:18:10:IJ:Morning,41:18:10:IJ:Day,92:17-19:40:IJ:,92:18:10:IJ:Morning,92:18:10:IJ:Day,198:18:20:I:Night,200:18:20:J:Night
Lost Tower 3F|IJ|walk|41:18-20:39:IJ:,41:19:10:IJ:Morning,41:19:10:IJ:Day,42:19:1:IJ:,92:18-20:40:IJ:,92:19:10:IJ:Morning,92:19:10:IJ:Day,198:19:20:I:Night,200:19:20:J:Night
Lost Tower 4F|IJ|walk|41:19-21:35:IJ:,41:20:10:IJ:Morning,41:20:10:IJ:Day,42:20-21:5:IJ:,92:19-21:40:IJ:,92:20:10:IJ:Morning,92:20:10:IJ:Day,198:20:20:I:Night,200:20:20:J:Night
Lost Tower 5F|IJ|walk|41:20-21:30:IJ:,41:21:10:IJ:Morning,41:21:10:IJ:Day,42:21-23:10:IJ:,92:20-22:40:IJ:,92:21:10:IJ:Morning,92:21:10:IJ:Day,198:21:20:I:Night,200:21:20:J:Night
Route 210 South Towards Solaceon Town|IJ|walk|74:19:30:IJ:,77:18-20:30:IJ:,77:18:20:IJ:Day,113:18-20:5:IJ:,128:19:20:I:Poké Radar,128:20:2:J:Poké Radar,241:20:2:I:Poké Radar,241:19:20:J:Poké Radar,402:18:20:IJ:Night,402:19:10:IJ:,438:18:20:J:Morning,438:20:5:J:,439:18:20:I:Morning,439:20:5:I:
Route 210 South Towards Solaceon Town|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 210 West Towards Celestic Town|IJ|walk|54:25:20:IJ:,66:25:10:IJ:Morning,66:25:10:IJ:Day,66:26:10:IJ:,67:26:10:IJ:,163:24:10:IJ:Night,164:25:10:IJ:Night,307:24:10:IJ:Morning,307:24:10:IJ:Day,307:25-26:20:IJ:,352:25-26:22:I:Poké Radar,371:25-26:22:J:Poké Radar,400:24:20:IJ:
Route 210 West Towards Celestic Town|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 210 West Towards Celestic Town|IJ|old-rod|129:3-10:100:IJ:
Route 210 West Towards Celestic Town|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Route 210 West Towards Celestic Town|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Route 210 West Towards Celestic Town|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 211 West Towards Eterna City|IJ|walk|41:12:10:IJ:Night,74:13:10:IJ:,77:13:10:IJ:,163:14:10:IJ:Night,236:12-14:22:IJ:Poké Radar,307:13-14:25:IJ:,307:12:10:IJ:Morning,307:12:10:IJ:Day,399:12-13:25:IJ:,399:14:10:IJ:Morning,399:14:10:IJ:Day,433:13:10:IJ:
Route 211 East Towards Celestic Town|IJ|walk|41:26:10:IJ:Night,67:28:10:IJ:Morning,67:28:10:IJ:Day,67:27:10:IJ:,75:27:20:IJ:,77:26:10:IJ:Morning,77:26:10:IJ:Day,77:27-28:5:IJ:,164:28:10:IJ:Night,307:27-28:35:IJ:,333:27-28:22:IJ:Poké Radar,433:27-28:10:IJ:
Route 211 East Towards Celestic Town|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 212 North Towards Hearthome City|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 212 North Towards Hearthome City|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Route 212 North Towards Hearthome City|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Route 212 North Towards Hearthome City|IJ|old-rod|129:3-10:100:IJ:
Route 212 North Towards Hearthome City|IJ|walk|235:16-18:22:IJ:Poké Radar,315:16-17:15:IJ:,396:16:20:IJ:,397:17:10:IJ:Morning,397:17:20:IJ:Day,397:18:5:IJ:,402:17:20:IJ:Night,402:17:10:IJ:Morning,402:17-18:10:IJ:,406:16:30:IJ:
Route 212 North Towards Hearthome City|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 212 East Towards Pastoria City|IJ|walk|88:18-20:22:IJ:Poké Radar,194:18:30:IJ:,315:19:10:IJ:Morning,315:19:10:IJ:Day,315:18-20:15:IJ:,400:18-20:25:IJ:,400:19:10:IJ:Morning,400:19:10:IJ:Day,402:19:20:IJ:Night,402:18:10:IJ:
Route 212 East Towards Pastoria City|IJ|surf|194:20-40:90:IJ:,195:20-40:10:IJ:
Route 212 East Towards Pastoria City|IJ|old-rod|129:3-10:100:IJ:
Route 212 East Towards Pastoria City|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Route 212 East Towards Pastoria City|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Route 212 East Towards Pastoria City|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 213|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Route 213|IJ|old-rod|129:3-10:100:IJ:
Route 213|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Route 213|IJ|super-rod|130:30-40:40:IJ:,224:20-50:45:IJ:,319:40-55:15:IJ:
Route 213|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 213|IJ|walk|277:20-22:22:IJ:Poké Radar,278:20:10:IJ:Morning,278:20:10:IJ:Day,278:20:10:IJ:,359:20:40:IJ:Swarm,418:20-21:30:IJ:,419:22:10:IJ:,422:20-22:40:IJ:,422:20:10:IJ:Night
Route 214|IJ|walk|74:22:20:IJ:,75:23:10:IJ:Morning,75:23:10:IJ:Day,75:24:5:IJ:,77:23-24:25:IJ:,77:23:10:IJ:Morning,77:23:10:IJ:Day,185:23-24:15:J:,203:24:10:IJ:,229:23-24:22:J:Poké Radar,262:23-24:22:I:Poké Radar,325:22-23:40:IJ:Swarm,402:23:20:IJ:Night,402:24:5:IJ:,434:23-24:15:I:
Route 214|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Route 214|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Route 214|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Route 214|IJ|old-rod|129:3-10:100:IJ:
Route 214|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 215|IJ|walk|63:20:10:IJ:,64:20-22:15:IJ:,74:20-22:25:IJ:,74:21:10:IJ:Morning,77:21:20:IJ:,77:22:10:IJ:Morning,77:21-22:20:IJ:Day,96:20-21:40:IJ:Swarm,229:20-22:22:J:Poké Radar,262:20-22:22:I:Poké Radar,402:21-22:20:IJ:Night,402:20:10:IJ:
Route 215|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 216|IJ|walk|41:33:10:IJ:Night,67:33:10:IJ:Morning,67:33:10:IJ:Day,67:34:10:IJ:,75:33-34:10:IJ:,164:33:10:IJ:Night,215:32-33:25:IJ:,225:32:40:IJ:Swarm,307:33:10:IJ:Morning,307:33:10:IJ:Day,307:34:10:IJ:,361:33-34:22:IJ:Poké Radar,459:32-33:25:IJ:
Route 217|IJ|walk|41:35:10:IJ:Night,67:35:10:IJ:Morning,67:35:10:IJ:Day,67:36:10:IJ:,164:35:10:IJ:Night,215:34-35:25:IJ:,220:34:40:IJ:Swarm,307:35:10:IJ:Morning,307:35:10:IJ:Day,308:35-36:20:IJ:,361:35-36:22:IJ:Poké Radar,459:34-35:25:IJ:
Route 218|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Route 218|IJ|walk|100:28:40:IJ:Swarm,122:29-30:15:I:,132:29-30:22:IJ:Poké Radar,278:29:10:IJ:,419:28-30:35:IJ:,422:28:20:IJ:,423:28-30:20:IJ:,431:29-30:15:J:
Route 218|IJ|old-rod|129:3-10:100:IJ:
Route 218|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Route 218|IJ|super-rod|130:30-55:55:IJ:,457:20-50:45:IJ:
Route 218|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 219|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Route 219|IJ|old-rod|129:3-10:100:IJ:
Route 219|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Route 219|IJ|super-rod|130:30-40:40:IJ:,366:20-30:15:IJ:,457:20-50:45:IJ:
Route 221|IJ|walk|30:29:20:I:Poké Radar,30:30:2:J:Poké Radar,33:30:2:I:Poké Radar,33:29:20:J:Poké Radar,83:28:40:IJ:Swarm,185:29-30:15:J:,278:29:10:IJ:,315:29:10:IJ:,419:28-30:25:IJ:,422:28:10:IJ:,423:29-30:10:I:,423:28-30:30:J:,434:28:20:I:,435:29-30:15:I:
Route 221|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Route 221|IJ|old-rod|129:3-10:100:IJ:
Route 221|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Route 221|IJ|super-rod|130:30-40:40:IJ:,366:20-30:15:IJ:,457:20-50:45:IJ:
Route 221|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 222|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Route 222|IJ|walk|122:41-42:15:I:,180:41-42:22:IJ:Poké Radar,278:41:10:IJ:,300:40:40:IJ:Swarm,419:40-42:25:IJ:,419:41:10:IJ:Night,423:40-42:30:I:,423:41-42:10:J:,423:40:10:IJ:Night,431:40:20:J:,432:41-42:15:J:,441:40-41:20:IJ:Morning,441:40-41:20:IJ:Day
Route 222|IJ|old-rod|129:3-10:100:IJ:
Route 222|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Route 222|IJ|super-rod|130:30-40:40:IJ:,224:20-50:45:IJ:,319:40-55:15:IJ:
Route 222|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Route 224|IJ|walk|44:53:5:IJ:,70:53:5:IJ:,177:53:40:IJ:Swarm,267:23:5:IJ:,315:52-54:20:IJ:,355:23:2:IJ:Poké Radar,356:52-54:20:IJ:Poké Radar,418:23:4:IJ:,419:53:20:IJ:,419:54:10:IJ:Night,422:23:1:IJ:,423:53:20:IJ:,423:52:10:IJ:Night,441:52-54:20:IJ:Morning,441:52-54:20:IJ:Day
Route 224|IJ|surf|73:40-55:35:IJ:,279:40-55:65:IJ:
Route 224|IJ|old-rod|129:3-10:100:IJ:
Route 224|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Route 224|IJ|super-rod|130:30-40:40:IJ:,224:20-50:45:IJ:,370:20-30:15:IJ:
Route 225|IJ|walk|19:20-22:5:IJ:,20:50-52:30:IJ:,21:20-22:5:IJ:,22:51:20:IJ:,22:50-52:20:IJ:Morning,22:50-52:20:IJ:Day,56:22:2:IJ:Poké Radar,57:51-52:20:IJ:Poké Radar,67:51:5:IJ:,296:50-51:40:IJ:Swarm,315:51:5:I:,315:51:15:J:,354:50-52:20:IJ:Night,435:51:10:I:
Route 225|IJ|surf|55:40-55:70:IJ:,61:40-50:30:IJ:
Route 225|IJ|good-rod|60:10-25:45:IJ:,129:10-25:55:IJ:
Route 225|IJ|super-rod|61:30-55:45:IJ:,130:30-55:55:IJ:
Route 225|IJ|old-rod|129:3-10:100:IJ:
Route 227|IJ|walk|22:54:10:IJ:Morning,22:54:10:IJ:Day,22:55:10:IJ:,42:54:10:IJ:Night,75:54:10:IJ:Morning,75:54:10:IJ:Day,75:56:5:IJ:,110:55:10:IJ:,111:22-24:5:IJ:,112:55:20:IJ:,227:56:5:IJ:,322:22-24:5:IJ:,323:55:20:IJ:,324:24-55:22:IJ:Poké Radar,327:55:40:IJ:Swarm,354:54:10:IJ:Night
Route 227|IJ|surf|60:20-30:30:IJ:,61:40-55:70:IJ:
Route 227|IJ|old-rod|129:3-10:100:IJ:
Route 227|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Route 227|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Route 228|IJ|walk|50:23-25:5:IJ:,51:52-54:30:IJ:,112:52:10:IJ:Morning,112:52:10:IJ:Day,112:53:10:IJ:,328:25:2:IJ:Poké Radar,329:53-54:20:IJ:Poké Radar,331:23-25:5:IJ:,332:53:20:IJ:,332:52:20:IJ:Night,374:53:40:IJ:Swarm,450:52:10:IJ:Morning,450:52:10:IJ:Day,450:54:10:IJ:
Route 228|IJ|surf|60:20-30:30:IJ:,61:40-55:70:IJ:
Route 228|IJ|old-rod|129:3-10:100:IJ:
Route 228|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Route 228|IJ|super-rod|130:30-55:55:IJ:,340:20-50:45:IJ:
Route 229|IJ|walk|16:51:40:IJ:Swarm,43:20-22:5:IJ:,44:51:20:IJ:,44:52:10:IJ:Day,48:22:2:IJ:Poké Radar,49:50:20:IJ:Poké Radar,69:20-22:5:IJ:,70:51:20:IJ:,70:52:10:IJ:Day,123:52:5:I:,127:52:5:J:,166:52:20:IJ:Morning,168:52:20:IJ:Night,313:50:5:I:,313:50:10:J:,314:50:10:I:,314:50:5:J:,315:50:10:I:,432:50:10:J:
Route 229|IJ|good-rod|129:10-25:100:IJ:
Route 229|IJ|super-rod|130:20-55:100:IJ:
Route 229|IJ|old-rod|129:3-10:100:IJ:
Route 229|IJ|surf|278:40-55:70:IJ:,279:45-55:30:IJ:
Twinleaf Town|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Twinleaf Town|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Twinleaf Town|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Twinleaf Town|IJ|old-rod|129:3-10:100:IJ:
Celestic Town|IJ|surf|54:20-40:90:IJ:,55:20-40:10:IJ:
Celestic Town|IJ|good-rod|129:10-25:55:IJ:,339:10-25:45:IJ:
Celestic Town|IJ|super-rod|130:30-40:40:IJ:,340:40-55:15:IJ:,341:30-40:40:IJ:,342:35-55:5:IJ:
Celestic Town|IJ|old-rod|129:3-10:100:IJ:
Resort Area|IJ|surf|55:40-55:100:IJ:
Resort Area|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Resort Area|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Resort Area|IJ|old-rod|129:3-10:100:IJ:
Sea Route 220|IJ|surf|72:20-30:60:IJ:,73:20-40:5:IJ:,278:20-30:30:IJ:,279:20-40:5:IJ:
Sea Route 220|IJ|old-rod|129:3-10:100:IJ:
Sea Route 220|IJ|good-rod|129:10-25:55:IJ:,456:10-25:45:IJ:
Sea Route 220|IJ|super-rod|130:30-40:40:IJ:,170:15-25:40:IJ:,171:20-45:5:IJ:,457:30-40:15:IJ:
Sea Route 223|IJ|surf|73:35-45:60:IJ:,279:35-45:30:IJ:,458:30-45:10:IJ:
Sea Route 223|IJ|old-rod|129:3-10:100:IJ:
Sea Route 223|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Sea Route 223|IJ|super-rod|130:30-40:40:IJ:,224:40-55:15:IJ:,320:30-40:40:IJ:,321:35-55:5:IJ:
Sea Route 226|IJ|walk|19:20-22:5:IJ:,20:51-52:30:IJ:,21:20-22:5:IJ:,22:52:20:IJ:,22:51-53:20:IJ:Morning,22:51-53:20:IJ:Day,55:51-53:10:IJ:,56:22:2:IJ:Poké Radar,57:51-53:20:IJ:Poké Radar,67:53:10:IJ:,98:52:40:IJ:Swarm,354:51-53:20:IJ:Night
Sea Route 226|IJ|surf|73:40-55:5:IJ:,86:35-45:30:I:,87:40-55:5:I:,279:40-55:60:IJ:,363:35-45:30:J:,364:40-55:5:J:
Sea Route 226|IJ|good-rod|116:10-25:45:IJ:,129:10-25:55:IJ:
Sea Route 226|IJ|super-rod|117:30-55:45:IJ:,130:30-40:40:IJ:,369:40-50:15:IJ:
Sea Route 226|IJ|old-rod|129:3-10:100:IJ:
Sea Route 226 Island House|IJ|trade|129:1-100::IJ:Trade a Finneon
Sea Route 230|IJ|walk|43:18-23:11:IJ:,44:50:20:IJ:,55:52:10:IJ:,69:18-23:11:IJ:,70:50:20:IJ:,175:18-23:22:IJ:Poké Radar,222:50:40:IJ:Swarm,267:51:10:I:,269:51:10:J:,419:50-52:13:IJ:,423:51:5:IJ:
Sea Route 230|IJ|surf|73:40-55:5:IJ:,86:35-45:30:I:,87:40-55:5:I:,279:40-55:60:IJ:,363:35-45:30:J:,364:40-55:5:J:
Sea Route 230|IJ|old-rod|129:3-10:100:IJ:
Sea Route 230|IJ|good-rod|129:10-25:55:IJ:,223:10-25:45:IJ:
Sea Route 230|IJ|super-rod|130:30-40:40:IJ:,224:40-55:15:IJ:,320:30-40:40:IJ:,321:35-55:5:IJ:
Oreburgh City Oreburgh Mining Museum|IJ|gift|138:20::IJ:Revived from the Helix Fossil,140:20::IJ:Revived from the Dome Fossil,142:20::IJ:Revived from the Old Amber,345:20::IJ:Revived from the Root Fossil,347:20::IJ:Revived from the Claw Fossil,408:20::IJ:Revived from the Skull Fossil,410:20::IJ:Revived from the Armor Fossil
Oreburgh City North West House|IJ|trade|63:1-100::IJ:Trade a Machop
Hearthome City|IJ|gift|133:5::IJ:Story  national dex
Hearthome City West Gate|IJ|gift-egg|440:1::IJ:
Snowpoint City|IJ|trade|93:37-100::IJ:Trade a Medicham
Spear Pillar|IJ|static|483:47::I:,484:47::J:
Floaroma Meadow|IJ|honey-tree|190:5-15:10:IJ:Honey tree group B,190:5-15:5:IJ:Honey tree group A,214:5-15:5:IJ:Honey tree group B,265:5-15:40:IJ:Honey tree group A,265:5-15:5:IJ:Honey tree group B,266:5-15:20:I:Honey tree group A,268:5-15:20:J:Honey tree group A,412:5-15:20:IJ:Honey tree group B,412:5-15:10:IJ:Honey tree group A,415:5-15:40:IJ:Honey tree group B,415:5-15:20:IJ:Honey tree group A,420:5-15:20:IJ:Honey tree group B,420:5-15:5:IJ:Honey tree group A,446:5-15:100:IJ:Honey tree group C
Sendoff Spring|IJ|walk|55:53-54:20:IJ:,164:53-54:20:IJ:Night,358:52-54:10:IJ:,397:53-54:20:IJ:Morning,397:53-54:20:IJ:Day,397:52:5:IJ:,400:52-54:45:IJ:
Sendoff Spring|IJ|surf|55:40-55:100:IJ:
Sendoff Spring|IJ|good-rod|118:10-25:45:IJ:,129:10-25:55:IJ:
Sendoff Spring|IJ|super-rod|119:20-50:45:IJ:,130:30-55:55:IJ:
Sendoff Spring|IJ|old-rod|129:3-10:100:IJ:
Flower Paradise|IJ|static|492:30::IJ:
Maniac Tunnel|IJ|walk|74:24:80:IJ:,449:22-25:20:IJ:
Newmoon Island|IJ|static|491:40::IJ:
Hall of Origin|IJ|static|493:80::IJ:
Roaming Sinnoh|IJ|roam|481:50::IJ:Story  beat galactic coronet,488:50::IJ:Story  cure eldritch nightmares
`
});
