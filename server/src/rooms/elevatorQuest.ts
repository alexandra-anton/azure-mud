import { SpecialFeature } from ".";

export const elevatorQuestRoomData = {
  elevatorQuestSpawnPoint: {
    id: 'elevatorQuestSpawnPoint',
    displayName: 'Parking Lot',
    shortName: 'the parking lot',
    description: `You awake lying in the bracken of a dark, twisted forest. Your back and head are killing you. Reaching up to touch your temple, you wince with pain and your fingertips come away bloody.
    <br/><br/>
    You see faint, flickering light to the [[East->elevatorQuestEast]] of you. There's a frenzied stomping and snorting coming from the [[North->elevatorQuestNorth]]. To the [[West->elevatorQuestWest]] there's nothing but more black, twisted forest. Suddenly, you hear rustling coming from the underbrush to the [[South->elevatorQuestSouth]].
    `,
    hidden: true
  },
  elevatorQuestNorth: {
    id: 'elevatorQuestNorth',
    displayName: 'Go North',
    shortName: 'go North',
    description: `You struggle to your feet, momentarily dizzy as you stand. You decide to investigate the noises coming from the North.
    <br/><br/>
    Following the snorting and stomping, you are relieved to find your trusty steed Freneculon! His reins have tangled in some low branches and he is frantically trying to free himself in his panic.
    <br/><br/>
    You hear a roar from the East, and the flickering light is getting brighter. You smell smoke in the air.
    <br/><br/>
    You calm the frenzied horse enough to try and disentangle him, but the knots are too tight. Another bellow cuts the night air, and it sounds far too close for comfort.
    `,
    hidden: true
  },
  elevatorQuestEast: {
    id: 'elevatorQuestEast',
    displayName: 'Go East',
    shortName: 'go East',
    description: `You slowly get to your feet, waiting for the dizziness to pass. Your head is killing you! What the hell happened?
    <br/><br/>
    You decide to investigate the flickering light to the east. As you walk through the forest, the light grows brighter and you can smell smoke in the air. Suddenly, the sound of running footsteps is coming right for you!! Quick, what do you do?
    `,
    hidden: true
  },
  elevatorQuestSouth: {
    id: 'elevatorQuestSouth',
    displayName: 'Go South',
    shortName: 'go South',
    description: `You slowly get up and dust yourself off. Either the curiosity or the concussion gets the better of you, and you decide to invesitgate the rustling noises to the south.
    <br/><br/>
    As you walk towards the noise, your heart starts beating harder. Was this a mistake? You get closer... and a bit closer... the rustling intensifies. You hold your breath as you move a bit closer... 
    <br/><br/>
    ...and almost shit yourself as a rabbit bursts out of the underbrush and runs off! You fall on your ass and can't help but laugh. As you begin to get up, the sharp crack of a twig ahead of you makes you freeze in place.
    <br/><br/>
    Your eyes travel upwards to find a huge, shaggy black wolf watching your every move.
    <br/><br/>
    Oh fuck.
    `,
    hidden: true
  },
  elevatorQuestWest: {
    id: 'elevatorQuestWest',
    displayName: 'Go West',
    shortName: 'go West',
    description: `You get to your feet, wincing in pain. It feels like you're bruised all over. What were you even doing on the ground, anyway...? A roar from the east cuts through the night. Oh yeah.
    <br/><br/>
    You decide the safest direction to go right now is away from that thing. You head west. A glint in the moonlight catches your eye. Yes! It's your sword! It must have been knocked out of your hand when you were attacked earlier! You pick it up.
    `,
    hidden: true
  }
}
