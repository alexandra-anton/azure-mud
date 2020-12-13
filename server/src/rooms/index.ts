import northShowcaseHall from './northShowcaseHall'
import southShowcaseHall from './southShowcaseHall'
import eastShowcaseHall from './eastShowcaseHall'
import westShowcaseHall from './westShowcaseHall'
import { unconference, minetown, oracle, tower, castle, sokoban, astralPlane, phoneBooth1, phoneBooth2, bran } from './unconfRooms'
import theater from './theater'
import { loungeDungeonRoomData } from './loungeDungeon'

export interface NoteWallData {
  roomWallDescription: string
  noteWallButton: string
  addNoteLinkText: string
  addNotePrompt: string
  noteWallDescription: string
}

export enum SpecialFeature {
  RainbowDoor = 'RAINBOW_DOOR',
  DullDoor = 'DULL_DOOR',
  FullRoomIndex = 'FULL_ROOM_INDEX',
  VendingMachine = 'VENDING_MACHINE',
  SeriousFood = 'SERIOUS_FOOD'
}

export interface Room {
  // e.g. "kitchen"
  id: string

  // e.g. "GitHub HQ: Kitchen"
  displayName: string

  // e.g. "the kitchen"
  shortName: string

  description: string

  // If true, webRTC audio/video chat can happen
  allowsMedia?: boolean

  // Indicates whether the room should let users place post-it notes
  // As we add more pieces of one-off functionality,
  // having a bunch of ad-hoc flags like this will probably get frustrating quickly.
  // We may want to eventually refactor to something resembling an ECS.
  hasNoteWall?: boolean
  noteWallData?: NoteWallData

  // If true, don't show the room in the side list
  hidden?: boolean

  specialFeatures?: SpecialFeature[]
}

const indexRoomData: { [name: string]: Room } = {
  theater,
  northShowcaseHall,
  eastShowcaseHall,
  southShowcaseHall,
  westShowcaseHall,
  unconference,
  minetown,
  oracle,
  tower,
  castle,
  sokoban,
  astralPlane,
  phoneBooth1,
  phoneBooth2,
  bran,
  kitchen: {
    id: 'kitchen',
    displayName: 'Kitchen',
    shortName: 'the kitchen',
    description: `A series of long, white, tables spread across the glass-walled kitchen await the first guests. As Christmas music fills the room, along the smell of fresh brewed coffee, you notice familiar items. The fridge is filled with [[cinnamon-spiced apple juice->item]] and the espresso maker sits patiently in its corner, in case you missed the [[Nespresso coffee->item]].
    <br/><br/>
    There are two tables you can sit at, labelled [[A->kitchenTableA]] and [[B->kitchenTableC]]. You can also join the [[Fußball->kitchenTableB]] table or, if you’d like a little snack or refreshing beverage before moving to more serious food, you can get something from the [[Vending Machine->generateFood]] (card payment is working again!).
    <br/><br/>
    From here you can walk over to the [[MOPS->tower]] or [[Support->oracle]] areas and see who you encounter there. Or you can use the wall to share with us what's your favourite Christmas treat.
    <br/></br>
    <div style="width: 100%; align: center;">
    
    <video id="my-video" class="video-js" controls autoplay preload="auto"
            data-setup="{}">
            <source src="https://streaming.radiostreamlive.com/radiosantaclaus_devices" type="video/mp4" />
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
    </video><script src="https://vjs.zencdn.net/7.10.2/video.min.js"></script>
    </div>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://www.radiosantaclaus.com/live" target="_blank" style="color: #cccccc; text-decoration: none;">  Radio Santa Claus</a> · live from North Pole</div><br/>`,
    allowsMedia: true,
    hasNoteWall: true
  },
  kitchenTableA: {
    id: 'kitchenTableA',
    displayName: 'Kitchen Table A',
    shortName: 'table A in the kitchen',
    description: `You get closer to the first table. There’s nothing on it, so you can only assume this is where you bring the food from the other table in order to eat it. Such a well thought-out system.
      From here, you can see tables [[the Fussball Table->kitchenTableB]] or [[B->kitchenTableC]], and the [[general kitchen area->kitchen]].`,
    allowsMedia: true
  },
  kitchenTableB: {
    id: 'kitchenTableB',
    displayName: 'Kitchen Fussball Table',
    shortName: 'fussball table in the kitchen',
    description: `As you aproach the table the only thing you can hear is a never-ending sequence of bangs and from time to time "Damn this ball is not round anymore". You can't really see what is happening because some unknown individuals are there and they are closely looking at 8 guys how they professionaly maneuver the mini football players and make the ball reach the goal.
    <br/><br/>
    <a href="https://www.haxball.com/" target="_blank">Haxball</a> is the online version of the old childhood game \'Fotbal cu nasturi\'. Create a private room, share its name and password in the chat and play with your fellow friends and have fun. It's not exacly <a href="https://ncchat.slack.com/archives/CB8S5V2M7" target="_blank">Fußball</a> but it comes pretty close.
    <br/><br/>
      From here, you can see tables [[A->kitchenTableA]] or [[B->kitchenTableC]], and the [[general kitchen area->kitchen]].`,
    allowsMedia: true
  },
  kitchenTableC: {
    id: 'kitchenTableC',
    displayName: 'Kitchen Table B',
    shortName: 'table B in the kitchen',
    description: `You arrive at the second table. There is A LOT of food. Like, a lot. Who on earth is going to eat all this?<br/><br/>
    Well, someone has to step up and be a hero. Get [[something->generateSeriousFood]] to eat.<br/><br/>
      From here, you can see tables [[A->kitchenTableA]] or [[the Fussball Table->kitchenTableB]], and the [[general kitchen area->kitchen]]`,
    allowsMedia: true
  },
  bar: {
    id: 'bar',
    displayName: 'Bar',
    shortName: 'the bar',
    description: 'A beautiful long bar with hundreds of bottles spanning up to the ceiling. A friendly bartender will happily make you whatever you want. A laminated sign on the bartop advertises tonight\'s specials: [[the Tourist->item]] (a non-alcoholic drink with lots of fruit and a fun umbrella), [[the Berlin Interpretation->item]] (a mojito made with some sort of hyper-caffeinated soda), and [[the Walls Are Shifting->item]] (a Long Island Iced Tea).<br/>A self-serve table has two coolers packed to the brim with potions. One is loaded with [[colourful potions->drinkPolymorph]] of many shapes and hues, and the other with [[plain potions of clear liquid->drinkCancellation]]<br/><br/>You\'re a stone\'s throw away from the [[kitchen]], the [[@-sign statue->statue]], the [[dance floor->danceFloor]], and the [[North Showcase Hall->northShowcaseHall]]. You can also crawl into the [[shipping container->shippingContainer]].',
    allowsMedia: true
  },
  lounge: {
    id: 'lounge',
    displayName: 'Elevator B',
    shortName: 'elevator B',
    description: 'A chill space to hang away from the hustle and bustle of the main space. Comfy chairs, TVs showing the latest scores in some incomprehensible splort, and a fridge full of La Croix.<br/><br/>From here, you can get to the [[drawing room->loungeDungeonDrawingRoom]], the [[dance floor->danceFloor]], or the [[kitchen]].',
    allowsMedia: true
  },
  statue: {
    id: 'statue',
    displayName: 'TNB',
    shortName: 'the TNB',
    description: `A memorial to countless adventurers who have helped build this social space.<br/><br/>A plaque on the statue shows a list of <a href="https://github.com/lazerwalker/azure-mud/graphs/contributors" target="_blank" rel="noreferrer">code contributors</a>.<br/>There's also a suggestion wall for people to add comments about the social space.
      From here, you can reach the [[kitchen]], the [[bar]], the [[theater]], or the [[North Showcase Hall->northShowcaseHall]]. You can also climb into the [[shipping container->shippingContainer]].`,
    hasNoteWall: true,
    allowsMedia: true
  },
  danceFloor: {
    id: 'danceFloor',
    displayName: 'Dance Floor',
    shortName: 'the dance floor',
    description: 'The ping-pong table has been pushed to the side for a makeshift dance floor. Colourful skeletons raise and lower their arms to the beat of chiptune music coming from a DJ booth near the wall. The DJ smoothly transitions between old favourites and requests from years past.<br/><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511460973&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/funkip" title="Funkip ♥" target="_blank" style="color: #cccccc; text-decoration: none;">Funkip ♥</a> · <a href="https://soundcloud.com/funkip/roguelike-celebration-2018-saturday-night" title="Roguelike Celebration 2018" target="_blank" style="color: #cccccc; text-decoration: none;">Roguelike Celebration 2018</a></div><br/><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/699462760&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/funkip" title="Funkip ♥" target="_blank" style="color: #cccccc; text-decoration: none;">Funkip ♥</a> · <a href="https://soundcloud.com/funkip/rand-gen-mem" title="💖 Roguelike Celebration 2019 Mix" target="_blank" style="color: #cccccc; text-decoration: none;">💖 Roguelike Celebration 2019 Mix</a></div><br/><br/>From here, you can reach the [[Nostalgia Dance Floor->westShowcaseHall]], the [[kitchen]], or the [[bar]].'
  },
  shippingContainer: {
    id: 'shippingContainer',
    displayName: 'Elevator A',
    shortName: 'the elevator A',
    description: `
      It's not quite clear why there's a shipping container in the middle of the space. Seems pretty chill, though? Somebody's set up a makeshift bench.<br/><br/>
      After you climb out, you can get back to the [[bar]], the [[theater]], the [[kitchen]], or the [[@-sign statue->statue]].`,
    allowsMedia: true
  },
  entryway: {
    id: 'entryway',
    displayName: 'Registration Desk',
    shortName: 'the registration desk',
    description: 'A big banner reads \'Welcome to Roguelike Celebration 2020!\' Once you\'ve got your bearings about you, you can move to the [[foyer]].',
    hidden: true
  },
  foyer: {
    id: 'foyer',
    displayName: 'Reception',
    shortName: 'the reception',
    description: `A grand opulent foyer leading into the theater. A chill runs down your spine as you walk in; something just feels <em>off</em> about this place.<br/><br/>
    You can see a [[swag table->swag]] in the corner, and can also leave to the [[theater]] or the [[west showcase hall->westShowcaseHall]].`,
    specialFeatures: [SpecialFeature.RainbowDoor, SpecialFeature.DullDoor]
  },
  swag: {
    id: 'swag',
    displayName: 'Reception Bar',
    shortName: 'the reception bar',
    description: `A table covered in a giant messy pile of mismatched swag. At the top of the pile, you see items such as [[Roguelike Celebration socks->item]], [[a +1 longbow->item]], [[an unidentified scroll->item]], and (surprisingly!) [[a tiny puppy->item]].<br/><br/>
    There are also a whole bunch of absolutely beautiful <a href="https://roguelike-celebration.myshopify.com/" target="_blank" rel="noreferrer">conference t-shirts</a> (actual physical shirts!) available <a href="https://roguelike-celebration.myshopify.com/" target="_blank" rel="noreferrer">for sale</a>.
    <br/><br/>
    From here, you can walk back to the rest of the [[foyer]].`
  },
  atelier: {
    id: 'atelier',
    displayName: 'Pets Zone',
    shortName: 'the pets zone',
    description: `Woof! This sun-lit corner of the office is perfect for our little furry friends to run around! The desks have all been set aside, leaving an empty space filled with pet games, colourful balls and squeaky toys. The [[office cat->item]] looks down from the cat tree, judgementally, as [[a cheerful puppy->item]] takes down <a href="https://photos.app.goo.gl/udUNPw68BeoFSNjHA" target="_blank" rel="noreferrer">a photo from the wall</a>, and runs away with it.
    <br/><br/>
    You can’t honestly say if this happy chaos is intended or not, but all pets are welcome here to join in the fun!
    <br/><br/> 
    From here, you can get to the [[Acvariu->castle]], or join the rest of the gang in the [[MM area->unconference]].`
  },
  study: {
    id: 'study',
    displayName: 'Procedural Generation Study',
    shortName: 'the proc-gen study',
    description: `A comfy and cozy library that is curiously shaped like a hexagon. One side of the room has a couple of well-worn leather armchairs, while the other four walls are filled top-to-bottom with books. The majority of them are apparent gibberish, but many of them contain insightful writings about the art of procedural content generation.<br/><br/>
    From here, you can get to the the [[engineer's workbench->workbench]] or the [[artists' atelier->atelier]].`,
    hasNoteWall: true,
    noteWallData: {
      roomWallDescription: 'There is a chalkboard that says "BOOKMARKS" on the top.',
      noteWallButton: 'Add a link',
      addNoteLinkText: 'add a link',
      addNotePrompt: 'What would you like to link to?',
      noteWallDescription: 'Links to slides, videos, files, and articles of interest.'
    }
  },
  workbench: {
    id: 'workbench',
    displayName: 'Coltul Vesel',
    shortName: 'the happy corner',
    description: `A cluttered workspace that clearly belongs to someone who loves to tinker. A dim hum fills the room from server racks sitting in the corner, and there are blinking lights coming from every crevice. A blueprint sitting on the workbench outlines intricate plans for something called an 'entity-component system'.<br/><br/>
    From here, you can get to the [[proc-gen study->study]] or the [[artists' atelier->atelier]].`
  },
  hiddenPortalRoom: {
    id: 'hiddenPortalRoom',
    displayName: 'Portal Room',
    shortName: 'the portal room',
    description: `In the center of the room is a shimmering portal. Next to the portal is a pedestal with an open book. To your right is a table with a sign hung behind it, reading "Lending Table" in flowery wizard script. On the table you can see [[a wand of digging->item]], [[a Proof of Stremf->item]], [[a pair of seven league boots->item]], and [[Planepacked->item]], the legendary limestone statue.<br/><br/>
      Once you've finished here, you can [[leap into the shimmering portal->statue]]`,
    specialFeatures: [SpecialFeature.FullRoomIndex],
    hidden: true
  }
}

export const roomData: { [name: string]: Room } = {
  ...indexRoomData,
  ...loungeDungeonRoomData
}
