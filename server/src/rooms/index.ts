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
    <div style="width: 100%">
            <video class="showcase-video" controls style="margin: auto; width: 420px; height: 50px;">
                <source src="https://streaming.radiostreamlive.com/radiosantaclaus_devices" type="video/mp4">
              Your browser does not support the video tag.
            </video>
    </div>
    <div style="width: 100%; font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://www.radiosantaclaus.com/live" target="_blank" style="color: #cccccc; text-decoration: none;">  Radio Santa Claus</a> · live from North Pole</div><br/>`,
    allowsMedia: true,
    hasNoteWall: true
  },
  kitchenTableA: {
    id: 'kitchenTableA',
    displayName: 'Kitchen Table A',
    shortName: 'table A in the kitchen',
    description: `You get closer to the first table. There’s nothing on it, so you can only assume this is where you bring the food from the other table in order to eat it. Such a well thought-out system.
      From here, you can see tables [[the Fußball Table->kitchenTableB]] or [[B->kitchenTableC]], and the [[general kitchen area->kitchen]].`,
    allowsMedia: true
  },
  kitchenTableB: {
    id: 'kitchenTableB',
    displayName: 'Kitchen Fußball Table',
    shortName: 'fußball table in the kitchen',
    description: `As you aproach the table the only thing you can hear is a never-ending sequence of bangs and from time to time "Damn this ball is not round anymore". You can't really see what is happening because some unknown individuals are there and they are closely looking at 8 guys how they professionaly maneuver the mini football players and make the ball reach the goal.
    <br/><br/>
    <a href="https://www.haxball.com/" target="_blank">Haxball</a> is the online version of the old childhood game 'Fotbal cu nasturi'. Create a private room, share its name and password in the chat and play with your fellow friends and have fun. It's not exacly <a href="https://ncchat.slack.com/archives/CB8S5V2M7" target="_blank">Fußball</a> but it comes pretty close.
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
      From here, you can see tables [[A->kitchenTableA]] or [[the Fußball Table->kitchenTableB]], and the [[general kitchen area->kitchen]]`,
    allowsMedia: true
  },
  bar: {
    id: 'bar',
    displayName: 'Bar',
    shortName: 'the bar',
    description: `You approach the bar. There is atmospheric dim lighting and smooth music in the background. The bartender has tattooed forearms, a checkered shirt and a long, exquisitely groomed beard. 
    <br/>You feel like this is the place where elegant people go to relax and savor a sophisticated drink. You get a little bit closer. The bartender smiles and greets you with a “Ho Ho Ho!”. 
    <br/><br/>
    He'll happily make you whatever you want. A laminated sign on the bartop advertises tonight's specials: [[a Naughty Rudolph Cocktail->item]], [[a Berry Merry Christmas Cocktail->item]], [[a gin and tonic with cinnamon infused syrup->item]] or [[a Japanese whisky on the rocks->item]].
    <br/>A self-serve table behind the bartender has two cauldrons. One is loaded with [[a bubbling purple goo->drinkPolymorph]], and the other with [[plain hot chocolate->drinkCancellation]]<br/><br/>
    You whisper to the bartender that you’re looking for an 'investment opportunity'. The bartender’s eyes light up and he gives you a mischievous smirk. 'Of course, please come with me'. He takes you to a quiet corner of the office, and there you see them. The slot machines, the păcănele. The bartender opens a sack of tokens. You pull out your wallet. It's <a href="https://www.freeslots.com/" target="_blank">party time</a>.
    <br/><br/>Go back to the [[dance floor->danceFloor]] or the [[MM area->unconference]]. The bar will probably be there next time you appear.`,
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
    description: `Here you are, in TNB, where you first see a tiny elf with a huge camera in his hands. You remember last year you were queuing the photo booth with some Christmasy props and drinks in your hands, waiting to take some pictures with your team.
    <br/><br/>
    No time for memories now, the elf is gesturing you and your team to hurry up and take a photo. You might want to look for your elf years or your Santa hat, to put on. If nothing in reach, a festive Webex virtual background or Snap camera filter will do.
    <br/><br/>
    Once you're done, post your photos <a href="https://photos.app.goo.gl/ps8bBJjwE1LTdL929" target="_blank">here</a>.`,
    hasNoteWall: true,
    allowsMedia: true
  },
  danceFloor: {
    id: 'danceFloor',
    displayName: 'Dance Floor',
    shortName: 'the dance floor',
    description: `Unexpectedly once you step into this room the rythm starts pumping in your veins and your limbs seem to move on their own. You glance from side to side and notice the DJ booth near the wall and from it curiously hang face masks - it must be the Covid effect.
    <br/><br/>
    <div id="dance-floor-showcase" class="showcase-container">
        <div id="discord-entry" class="showcase-entry" style="display: inline-flex;">
          <div id="discord-text">
            <p>Instructions for using Discord bot
            </p>
            <p>Steps for using Discord:
            <ul>
              <li>step 1</li>
              <li>step 2</li>
            </ul>
            </p>
          </div>
          <iframe src="https://discord.com/widget?id=780867772749840384&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
    </div>
    <br/><br/>
    From here, you can reach the [[Nostalgia Dance Floor->westShowcaseHall]], grab a drink from the [[bar]] or head back to [[the MM area->unconference]].`,
    hasNoteWall: true,
    noteWallData: {
      roomWallDescription: 'There is a board next to the DJ that says "PLAYLISTS" on the top.',
      noteWallButton: 'Add a playlist link',
      addNoteLinkText: 'add a playlist link',
      addNotePrompt: 'What would you like to link to?',
      noteWallDescription: 'Links to people\'s playlists.'
    }
  },
  shippingContainer: {
    id: 'shippingContainer',
    displayName: 'Elevator A',
    shortName: 'the elevator A',
    description: `
      It's not quite clear what's wrong with this elevator, you push the button and nothing happens. In the past, somebody even fell with it all the way to the main lobby. Seems pretty scary, no?<br/><br/>
      After you hurry to come out of it, you can wait for [[elevator B->lounge]] or get back to [[Reception->foyer]].`,
    allowsMedia: true
  },
  entryway: {
    id: 'entryway',
    displayName: 'Downstairs Registration Desk',
    shortName: 'the registration desk',
    description: 'A big banner reads \'Welcome back to the Bucharest Netcentric office!\' Once you\'ve got your bearings about you, you can move to the [[Reception->foyer]].',
    hidden: true
  },
  foyer: {
    id: 'foyer',
    displayName: 'Reception',
    shortName: 'the reception',
    description: `A familiar, purple, sight awaits you the moment you step off the elevator. Welcome back to the office! 
    A partially decorated [[Christmas Tree->study]] sits in the corner, with scattered decorations around it - someone really needs to finish setting up these lights!
    <br/><br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3uycy7s-kvc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/><br/>
    You can see the coffee machine sitting on the [[reception bar->swag]] in the corner, and can also leave towards the HR area, join the main party in Ateneu, or the guys in Coltul Vesel for a chat. Or take [[elevator A->shippingContainer]] or [[elevator B->lounge]] to get outside.<br/><br/>`,
    specialFeatures: [SpecialFeature.RainbowDoor, SpecialFeature.DullDoor]
  },
  swag: {
    id: 'swag',
    displayName: 'Reception Bar',
    shortName: 'the reception bar',
    description: `The well-known bar covered in a giant messy pile of mismatched swag. At the top of the pile, you see items such as [[a purple Netcentric t-shirt->item]], [[a purple Christmas tree decoration->item]], [[a #makeNetcentricAFunPlanceToWork sticker->item]], [[a 'Keep Calm and Do Your Tempo' sticker->item]], and (surprisingly!) [[an unidentified piece of candy->item]].<br/><br/>
    The coffee machine is also working and you can prepare yourself [[a cup of the good coffee->item]] or [[a tasty latte->item]]. 
    <br/><br/>
    From here, you can walk back to the rest of the [[Reception->foyer]].`
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
    displayName: 'Christmas Tree',
    shortName: 'the Christmas tree',
    description: `A comfy and cozy couch awaits you, to sit back, listen to some tradional romanian Christmas carols and admire the talent of your colleagues who decorated the tree. Even if it's not yet finished. 
    <br/><br/>Or you could pick up the tinsel from the floor and <a href="https://www.abcya.com/games/make-a-christmas-tree" target="_blank" rel="noreferrer">show</a> them what you've got. If you're feeling particularly inspired, you could even add your final work-of-art to the <a href="https://photos.app.goo.gl/9r7SbhgQstsJioGH7" target="_blank" rel="noreferrer">Christmas tree collection</a>. <br/><br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3HXk4rRa09o?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/><br/>
    From here, you can walk back to the rest of the [[Reception->foyer]].`
  },
  workbench: {
    id: 'workbench',
    displayName: 'Coltul Vesel',
    shortName: 'the happy corner',
    description: `A cluttered workspace that clearly belongs to a cheerful bunch of people. A soft light fills this corner of the office from the ceiling high windows, while giggly voices discuss the latest news from behind one of the computer screens. A cute stuffed tiger sits on one of the desks, a reminder from last year’s summit - someone won the arcade games for sure!
    From here, you can get to the MOPS area to say “Hi” or go to the Reception for a cup of coffee.`
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
