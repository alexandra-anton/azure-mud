import { SpecialFeature } from ".";

export const elevatorQuestRoomData = {
  elevatorQuestSpawnPoint: {
    id: 'elevatorQuestSpawnPoint',
    displayName: 'Parking Lot',
    shortName: 'the parking lot',
    description: `
    <img src="images/quest/spawn.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You awake lying in the bracken of a dark, twisted forest. Your back and head are killing you. Reaching up to touch your temple, you wince with pain and your fingertips come away bloody.
    <br/><br/>
    You see faint, flickering light to the East of you. There's a frenzied stomping and snorting coming from the North. To the West there's nothing but more black, twisted forest. Suddenly, you hear rustling coming from the underbrush to the South.
    <br/><br/>
    [[Go North->elevatorQuestGoNorth]]<br/>
    [[Go East->elevatorQuestGoEast]]<br/>
    [[Go South->elevatorQuestGoSouth]]<br/>
    [[Go West->elevatorQuestGoWest]]<br/>
    `,
    hidden: true
  },
  elevatorQuestGoNorth: {
    id: 'elevatorQuestGoNorth',
    displayName: 'Go North',
    shortName: 'go North',
    description: `
    <img src="images/quest/go-north.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You struggle to your feet, momentarily dizzy as you stand. You decide to investigate the noises coming from the North.
    <br/><br/>
    Following the snorting and stomping, you are relieved to find your trusty steed Freneculon! His reins have tangled in some low branches and he is frantically trying to free himself in his panic.
    <br/><br/>
    You hear a roar from the East, and the flickering light is getting brighter. You smell smoke in the air.
    <br/><br/>
    You calm the frenzied horse enough to try and disentangle him, but the knots are too tight. Another bellow cuts the night air, and it sounds far too close for comfort.
    <br/><br/>
    [[Abandon Freneculon->elevatorQuestAbandonFreneculon]]<br/>
    [[Keep trying->elevatorQuestKeepTrying]]<br/>
    `,
    hidden: true
  },
  elevatorQuestGoEast: {
    id: 'elevatorQuestGoEast',
    displayName: 'Go East',
    shortName: 'go East',
    description: `
    <img src="images/quest/go-east.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You slowly get to your feet, waiting for the dizziness to pass. Your head is killing you! What the hell happened?
    <br/><br/>
    You decide to investigate the flickering light to the east. As you walk through the forest, the light grows brighter and you can smell smoke in the air. Suddenly, the sound of running footsteps is coming right for you!! Quick, what do you do?
    <br/><br/>
    [[Hide behind a tree->elevatorQuestHideBehindATree]]<br/>
    [[Stay put->elevatorQuestStayPut]]<br/>
    `,
    hidden: true
  },
  elevatorQuestGoSouth: {
    id: 'elevatorQuestGoSouth',
    displayName: 'Go South',
    shortName: 'go south',
    description: `
    <img src="images/quest/go-south.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You slowly get up and dust yourself off. Either the curiosity or the concussion gets the better of you, and you decide to invesitgate the rustling noises to the south.
    <br/><br/>
    As you walk towards the noise, your heart starts beating harder. Was this a mistake? You get closer... and a bit closer... the rustling intensifies. You hold your breath as you move a bit closer... 
    <br/><br/>
    ...and almost shit yourself as a rabbit bursts out of the underbrush and runs off! You fall on your ass and can't help but laugh. As you begin to get up, the sharp crack of a twig ahead of you makes you freeze in place.
    <br/><br/>
    Your eyes travel upwards to find a huge, shaggy black wolf watching your every move.
    <br/><br/>
    Oh fuck.
    <br/><br/>
    [[RUN!->elevatorQuestRUN]]<br/>
    [[Don't move a muscle->elevatorQuestDontMoveAMuscle]]<br/>
    `,
    hidden: true
  },
  elevatorQuestGoWest: {
    id: 'elevatorQuestGoWest',
    displayName: 'Go West',
    shortName: 'go West',
    description: `
    <img src="images/quest/go-west.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You get to your feet, wincing in pain. It feels like you're bruised all over. What were you even doing on the ground, anyway...? A roar from the east cuts through the night. Oh yeah.
    <br/><br/>
    You decide the safest direction to go right now is away from that thing. You head west. A glint in the moonlight catches your eye. Yes! It's your sword! It must have been knocked out of your hand when you were attacked earlier! You pick it up.
    <br/><br/>
    The flickering light through the trees is getting brighter. You smell smoke. You still hear stomping and a nervous whinnying to the Northeast.
    <br/><br/>
    [[Go towards the whinnying (Northeast)->elevatorQuestGoTowardsTheWhinnying]]<br/>
    [[Go towards the fire (East)->elevatorQuestGoTowardsTheFire]]<br/>
    [[Go towards the get me the heck out of here (Home)->elevatorQuestGoTowardsTheGetMeTheHeckOutOfHere]]<br/>
    `,
    hidden: true
  },
  elevatorQuestAbandonFreneculon: {
    id: 'elevatorQuestAbandonFreneculon',
    displayName: 'Abandon Freneculon',
    shortName: 'abandon Freneculon',
    description: `
    <img src="images/quest/abandon-freneculon.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    The bone-chilling bellow shakes you to your core, and you suddenly remember why you were lying on your back in the woods first place.
    <br/><br/>
    "Sorry old boy, but I just can't do it. Thanks for all the years of service." You pat your oldest friend and he looks into your eyes, horse tears brimming. You start to run, away from the quickly spreading fire, away from the bellowing creature to the east. Your cold heart thaws just enough to look back at your trusty steed, and you see him trying to free himself, whinnying in despair.
    <br/><br/>
    [[Keep running->elevatorQuestKeepRunning]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestKeepTrying: {
    id: 'elevatorQuestKeepTrying',
    displayName: 'Keep trying',
    shortName: 'keep trying',
    description: `
    <img src="images/quest/keep-trying.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    No! There's no way you can abandon your horse friend at a time like this! You frantically struggle at the tangled mess, and manage to tear the reins free at last. You jump onto Freneculon's back and spur him onwards. You hear a crashing sound coming through the woods to the east, and the smell of smoke is getting stronger.
    <br/><br/>
    [[Gallop towards the smoke and noise->elevatorQuestGallopTowardsTheSmokeAndNoise]]<br/>
    [[Run away->elevatorQuestRunAway]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestHideBehindATree: {
    id: 'elevatorQuestHideBehindATree',
    displayName: 'Hide Behind A Tree',
    shortName: 'hide Behind a Tree',
    description: `
    <img src="images/quest/hide-tree.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Your reflexes are quick, and you duck behind a tree in order to avoid whatever's rushing towards you.
    <br/><br/>
    A villager suddenly bursts into view, sobbing. He catches his foot and stumbles, falling to the ground. He desperately tries to struggle back to his feet.
    <br/><br/>
    You gasp as you see another figure emerge from the trees. This one is much bigger... much hairier... and a hell of a lot angrier. The beast growls and advances on the poor villager, who is cowering and sobbing on the forest floor.
    <br/><br/>
    [[Attack!!!->elevatorQuestAttack]]<br/>
    [[Do nothing->elevatorQuestDoNothing]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestStayPut: {
    id: 'elevatorQuestStayPut',
    displayName: 'Stay Put',
    shortName: 'stay Put',
    description: `
    <img src="images/quest/stay-put.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You stand your ground, ready to face whatever is coming towards you. The footsteps draw nearer and a panicked villager bursts through the trees, slamming into you, sobbing and out of breath.
    <br/><br/>
    "Please... please! No!" He sobs desperately, trying to free himself.
    <br/><br/>
    "Stop! Calm down! Tell me what's happening!" You hold fast until his breathing slows, but the tears are still streaming down his face. The villager sobs, "They're all dying...they're coming...! We have to get out of here!"
    <br/><br/>
    Both of you turn your heads sharply as a branch cracks behind you.
    <br/><br/>
    "No... no! They're here! They're in the forest! We have to run!". The villager grabs your arm and pulls you along the path you were following, towards the flickering lights.
    <br/><br/>
    Your heart is racing and you follow along. What the hell is happening? The smell of smoke and blood is thick in the air.
    <br/><br/>
    [[Try to make conversation->elevatorQuestTryToMakeConversation]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestRUN: {
    id: 'elevatorQuestRUN',
    displayName: 'RUN!',
    shortName: 'run',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You scream and shuffle backwards, trying to get to your feet and run the fuck away. Unfortunately the burst of energy was just what the wolf was waiting for, and in one swift movement it lunges for your neck as you struggle on the ground.
    <br/><br/>
    You really didn't have a chance, and it's over as quickly as it began.
    <br/><br/>
    THE END (01/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDontMoveAMuscle: {
    id: 'elevatorQuestDontMoveAMuscle',
    displayName: 'Don\'t Move A Muscle',
    shortName: 'don\'t move a muscle',
    description: `
    <img src="images/quest/dont-move.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You stay frozen in fear, barely daring to breathe. Time stands still as the wolf moves slowly towards you. Your eyes widen in fear as it moves... that's no wolf. It rears onto its hind legs, stalking forward like a person might, and staring you dead in the eye the whole time. It growls deep in its throat, drool dripping from its terrible jaws. 
    <br/><br/>
    You shake violently, and one of your hands desperately fishes in the leaves, closing around a stone on the ground next to you.
    <br/><br/>
    Suddenly a high-pitched scream cuts the air to the northeast, distracting the beast! Its head snaps up and it growls.
    <br/><br/>
    [[Hit it with the rock->elevatorQuestHitItWithTheRock]]<br/>
    [[Run->elevatorQuestRun]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestGoTowardsTheWhinnying: {
    id: 'elevatorQuestGoTowardsTheWhinnying',
    displayName: 'Go Towards The Whinnying (Northeast)',
    shortName: 'go towards the whinnying',
    description: `
    <img src="images/quest/whinnying.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You decide to investigate the panicked whinnying and head northeast.
    <br/><br/>
    Following the snorting and stomping, you are relieved to find your trusty steed Freneculon! His reins have tangled in some low branches and he is frantically trying to free himself in his panic.
    <br/><br/>
    You hear another roar from the East, and the flickering light is getting brighter. The smell of smoke is becoming almost unbearable.
    <br/><br/>
    You calm the frenzied horse enough to try and disentangle him, but the knots are too tight. Another bellow cuts the night air, and it sounds far too close for comfort.
    <br/><br/>
    [[Abandon Freneculon->elevatorQuestAbandonFreneculonNE]]<br/>
    [[Use the sword to cut him free->elevatorQuestUseTheSwordToCutHimFree]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestGoTowardsTheFire: {
    id: 'elevatorQuestGoTowardsTheFire',
    displayName: 'Go Towards The Fire (East)',
    shortName: 'go towards the fire',
    description: `
    <img src="images/quest/go-fire.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Feeling a surge of bravery with your sword in hand, you decide to head towards the fire. You know there's an ancient evil waiting for you, and you're ready to take it on again.
    <br/><br/>
    As you stalk towards your prey, a dragon's massive head rears up from the treetops. The dragon roars and spits a jet of flame into the sky. You feel the bass in your bones as it parts its terrible jaws and bellows, "YOU AGAIN? TENACIOUS HUMANS... I THOUGHT I SWATTED THE LIFE OUT OF YOU ALREADY."
    <br/><br/>
    It snarls and raises a tremendous clawed hand, ready to crush you once and for all.
    <br/><br/>
    [[Fight! Fight! Fight!->elevatorQuestFightFightFight]]<br/>
    [[Try diplomacy->elevatorQuestTryDiplomacy]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestGoTowardsTheGetMeTheHeckOutOfHere: {
    id: 'elevatorQuestGoTowardsTheGetMeTheHeckOutOfHere',
    displayName: 'Go Towards The Get Me The Heck Out Of Here (Home)',
    shortName: 'Go Towards The Get Me The Heck Out Of Here',
    description: `
    <img src="images/quest/out-of-here.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    There's no way you can face ANYTHING with a headache like this, sword in hand or no. You decide to try and find your way home.
    <br/><br/>
    Unfortunately, you're very concussed and have absolutely no idea in what direction home lies. The smoke is getting very strong now, and you can hear the crackle of flames creeping ever closer.
    <br/><br/>
    You're definitely walking in circles! You cough, eyes stinging. How can you get out of this damned forest?? The heat is too intense, and you see flames all around you. There's no way out.
    <br/><br/>
    How would you like your adventurer: Medium rare? Well done? It's a funny joke because you have no choice in the matter. You sadly burn up in the forest fire.
    <br/><br/>
    THE END (02/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestKeepRunning: {
    id: 'elevatorQuestKeepRunning',
    displayName: 'Keep Running',
    shortName: 'keep running',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You keep running, abandoning your trusted horse friend. You monster! Unfortunately, looking back was a bad idea: in your haste, your foot catches a root and you slam to the ground. Your already battered temple strikes a rock, and it's lights out forever.
    <br/><br/>
    THE END (03/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestGallopTowardsTheSmokeAndNoise: {
    id: 'elevatorQuestGallopTowardsTheSmokeAndNoise',
    displayName: 'Gallop Towards The Smoke And Noise',
    shortName: 'gallop towards the smoke and noise',
    description: `
    <img src="images/quest/gallop-towards.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You give a great shout and steer your horse towards the chaos in the forest. With Freneculon free, you can finally finish what you started. You can finally end your village's constant torment, and kill this mighty dragon! It rears its massive head above the trees as it hears you approach, jaws wide as it bellows into the night. Jets of flame spurt from its gaping maw. 
    <br/><br/>
    As you get closer, you let loose your fearsome battle cry, passed down through your family for generations! The dragon peers down at you, and takes a deeeep breath in...
    <br/><br/>
    ...spilling forth a massive jet of flame, aimed right towards you!
    <br/><br/>
    [[Dodge right->elevatorQuestDodgeRight]]<br/>
    [[Dodge left->elevatorQuestDodgeLeft]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestRunAway: {
    id: 'elevatorQuestRunAway',
    displayName: 'Run Away',
    shortName: 'run away',
    description: `
    <img src="images/quest/run-away.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Freneculon is panicked and you're starting to lose control. You wheel him around to run away from the smoke and noise. The fire in the forest is spreading quickly, and there's no way you can face it in this condition. You spur your horse to gallop faster.
    <br/><br/>
    Suddenly, with a great roar, a mighty dragon rears its head from the treetops! You recall bitterly that this beast has already bested you once, knocking you from Freneculon's back earlier. It sprays flame in a wide arc, setting more of the forest ablaze.
    <br/><br/>
    [[Fuck this, I'm out!->elevatorQuestFuckThisImOut]]<br/>
    [[Turn back and fight->elevatorQuestTurnBackAndFight]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestAttack: {
    id: 'elevatorQuestAttack',
    displayName: 'Attack!!!',
    shortName: 'attack',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You brave soul. You step out from behind the tree and run towards the wolf man, screaming your head off. It was a valiant effort, but unfortunately there's only so much an unarmed, injured person can do to a fully grown werewolf.
    <br/><br/>
    Your sacrifice did mean the villager could escape, however. Good for you!
    <br/><br/>
    He was able to run for a little while longer before tripping once again. God damn it, villager. His clumsy ass was then consumed.
    <br/><br/>
    Thanks for trying anyway, I guess.
    <br/><br/>
    THE END (04/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDoNothing: {
    id: 'elevatorQuestDoNothing',
    displayName: 'Do Nothing',
    shortName: 'do nothing',
    description: `
    <img src="images/quest/do-nothing.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You can't will your legs to move. There's no way you're putting yourself out there. You watch, horrified, as the wolf man descends on the poor, innocent villager. You close your eyes and press yourself against the tree, trying to make no noise.
    <br/><br/>
    It sounds like the struggle is over quickly. The villager's cries are cut short. You chance a quick peek and see the wolf straighten up from the bloody mess on the ground, licking its chops. It braces itself and howls into the night. Your blood freezes and you let out an involuntary whimper.
    <br/><br/>
    The wolf's head snaps in your direction.
    <br/><br/>
    Oops.
    <br/><br/>
    At least it's over quickly for you, too.
    <br/><br/>
    THE END (05/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestTryToMakeConversation: {
    id: 'elevatorQuestTryToMakeConversation',
    displayName: 'Try To Make Conversation',
    shortName: 'try to make conversation',
    description: `
    <img src="images/quest/make-conversation.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You're confused and scared, and try to distract yourself by talking out loud. "Please tell me what is going on!"
    <br/><br/>
    The villager shudders and presses onwards. "We... we were attacked and scattered... I just hope there are more survivors...". You also learn his name is Thomas.
    <br/><br/>
    The smell of blood is getting stronger. It's making you feel sick and dizzy.
    <br/><br/>
    [[Continue onwards->elevatorQuestContinueOnwards]]<br/>
    [[Stop to catch your breath->elevatorQuestStopToCatchYourBreath]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestHitItWithTheRock: {
    id: 'elevatorQuestHitItWithTheRock',
    displayName: 'Hit It With The Rock',
    shortName: 'hit it with the rock',
    description: `
    <img src="images/quest/hit-rock.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You grip the rock tight, and using the beast's temporary distraction you smash it in the temple. It howls in anguish and you're able to scurry to your feet and run! You hear it crashing through the underbrush behind you but eventually you seem to lose it in the woods.
    <br/><br/>
    You have no idea where you are, and it seems to be getting darker...
    <br/><br/>
    ...you hear a howl behind you.
    <br/><br/>
    Another howl to the left. Oh god.
    <br/><br/>
    Maybe it didn't lose your trail after all... and it sounds like there are more. 
    <br/><br/>
    As more howls erupt all around you, you suddenly realize you're not going to make it. "Goodbye, world" you think, as the wolves close in. "I should have never left the internet."
    <br/><br/>
    THE END (06/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestRun: {
    id: 'elevatorQuestRun',
    displayName: 'Run',
    shortName: 'runmove',
    description: `
    <img src="images/quest/run.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Using the wolf's temporary distraction, you scramble backwards to your feet and run madly in the other direction!
    <br/><br/>
    You run wildly through the forest, breath catching in your throat. Wait, you think you might have lost him... BUT YOUR LEG! Aah! It's caught in a bear trap!!!
    <br/><br/>
    Gnawing off your leg (quiet, quiet)
    <br/><br/>
    But the wolves can smell your blood now (quiet, quiet)
    <br/><br/>
    Their howls all around youuuu...
    <br/><br/>
    And... scene.
    <br/><br/>
    THE END (07/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestAbandonFreneculonNE: {
    id: 'elevatorQuestAbandonFreneculonNE',
    displayName: 'Abandon Freneculon',
    shortName: 'abandon freneculon ne',
    description: `
    <img src="images/quest/abandon-freneculon.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    The bone-chilling bellow shakes you to your core, and you have a flashback to why you were lying on your back in the woods first place.
    <br/><br/>
    "Sorry old boy, but I just can't do it. Thanks for all the years of service." You pat your oldest friend and he looks into your eyes, horse tears brimming. You start to run, away from the quickly spreading fire, away from the bellowing creature to the east. Your cold heart thaws just enough to look back at your trusty steed, and you see him trying to free himself, whinnying in despair.
    <br/><br/>
    [[Keep running->elevatorQuestKeepRunningAbandon]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestUseTheSwordToCutHimFree: {
    id: 'elevatorQuestUseTheSwordToCutHimFree',
    displayName: 'Use The Sword To Cut Him Free',
    shortName: 'use the sword to cut him free',
    description: `
    <img src="images/quest/use-sword.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    No! There's no way you can abandon your horse friend at a time like this! You swipe wildly at the branches with your sword and accidentally sever the reins. Whoops! Oh well, at least your horse is free!
    <br/><br/>
    You jump onto Freneculon's back and spur him onwards. You hear a crashing sound coming through the woods to the east, and the smell of smoke is getting stronger.
    <br/><br/>
    [[Gallop towards the smoke and noise->elevatorQuestGallopTowardsTheSmokeAndNoiseSword]]<br/>
    [[Run away->elevatorQuestRunAwaySword]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestFightFightFight: {
    id: 'elevatorQuestFightFightFight',
    displayName: 'Fight! Fight! Fight!',
    shortName: 'fight fight fight',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You scream right back at the dragon, squaring your shoulders and brandishing your sword. Feeling fierce enough to take on the world, you sprint towards your terrible adversary! Unfortunately, you are way too slow on foot. You're a human covered in heavy armour, after all! You're crushed by the heavy paw. Crushed like an eggshell. The dragon laughs.
    <br/><br/>
    THE END (08/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestTryDiplomacy: {
    id: 'elevatorQuestTryDiplomacy',
    displayName: 'Try Diplomacy',
    shortName: 'try diplomacy',
    description: `
    <img src="images/quest/diplomacy.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You panic, and desperately wave your arms. You shout at the top of your lungs, "DRAGON! WAAAIIIIT!!! I HAVE AN INCREDIBLE OFFER FOR YOU!!". You wince as you wait for the terrible blow.
    <br/><br/>
    The dragon's paw stops above your head. "WHAT. WHAT IS IT. YOU HAVE MY ATTENTION, HUMAN, NOW CHOOSE YOUR WORDS CAREFULLY."
    <br/><br/>
    [["When's the best time to go to the dentist?"->elevatorQuestWhensTheBestTimeToGoToTheDentist]]<br/>
    [["Hey, don't you like gold?"->elevatorQuestHeyDontYouLikeGold]]<br/>
    [["How about that weather?"->elevatorQuestHowAboutThatWeather]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDodgeRight: {
    id: 'elevatorQuestDodgeRight',
    displayName: 'Dodge Right',
    shortName: 'dodge right',
    description: `
    <img src="images/quest/dodge-right.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Oh, did I mention the dragon only has one eye? The huge, towering, ancient dragon only has one eye. Unfortunately, it is his left eye, so he can see you attempt to dodge his flame. The dragon adjusts its aim accordingly, and you end up extremely well toasted. Burnt to an absolute crisp. 
    <br/><br/>
    I guess I should have mentioned it earlier. Sorry about that.
    <br/><br/>
    THE END (09/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDodgeLeft: {
    id: 'elevatorQuestDodgeLeft',
    displayName: 'Dodge Left',
    shortName: 'dodge left',
    description: `
    <img src="images/quest/dodge-left.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Did I mention the dragon only has one eye? Fortunately you already knew this having fought it before. You dodge into the dragon's blind spot to the left and successfully avoid the flame. The dragon severely misjudged your speed, and you gallop in to finish the job with the spare sword you conveniently carry all the time in Freneculon's saddlebag. You never know when you'll need a spare.
    <br/><br/>
    After a very exciting fight (trust me), you slay the dragon, and come away victorious! Holding your head high, you ride Freneculon back to your village, boasting what no other knight was able to do. You have saved the day, and your people will never again be tormented by that creature.
    <br/><br/>
    When you return, you go straight to the castle and demand to see the princess.
    <br/><br/>
    "Darling, I've returned to you like I promised! Now we can finally be wed! I love you."
    <br/><br/>
    She blushes and takes your hand. "I love you too... VICTORIA"
    <br/><br/>
    #OHSNAP #youwereawomanallalong #progressivemedievaltimes
    <br/><br/>
    You wed the love of your life. When any of the male villagers joke about joining you on your honeymoon, you politely punch them in the face and live happily ever after.
    <br/><br/>
    THE END (10/26)
    <br/><br/>
    "Congratulations! Before you rush off exploring other realms, grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 10 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Start again->elevatorQuestSpawnPoint]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestTurnBackAndFight: {
    id: 'elevatorQuestTurnBackAndFight',
    displayName: 'Turn Back And Fight',
    shortName: 'turn back and fight',
    description: `
    <img src="images/quest/turn-and-fight.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    As you begin to ride on, another shrieking dragon's bellow stops you. Your heart leaps into your throat as you realize you just can't run anymore. You set out to stop this beast. You set out to save your village, and you can't let them down!
    <br/><br/>
    "Ye olde BALLS. We can't do this, horse friend. We can't run away again!". You wheel Freneculon around and race towards the flaming trees, towards your scaly adversary. 
    <br/><br/>
    The ancient dragon spots you, and lets loose a mighty roar to welcome your challenge. As you gallop towards its waiting jaws, it takes a deep breath in... 
    <br/><br/>
    ...and a HUGE jet of flame spills forth, coming right for you.
    <br/><br/>
    [[Dodge right->elevatorQuestDodgeRightTurn]]<br/>
    [[Dodge left->elevatorQuestDodgeLeftTurn]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestFuckThisImOut: {
    id: 'elevatorQuestFuckThisImOut',
    displayName: 'Fuck This, I\'m Out!',
    shortName: 'fuck this im out',
    description: `
    <img src="images/quest/fuck-im-out.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You spur Freneculon to run faster. You just can't face this massive beast again. You run and run, leaving the dragon behind in a forest-destroying frenzy.
    <br/><br/>
    You ride through the night, finally coming to the edge of your village. You slump in the saddle and weep in your exhaustion. You couldn't do what you set out to do. You couldn't save your village, and now the dragon will surely return. It will surely destroy you all.
    <br/><br/>
    You hear ominous wingbeats behind you, and in your heart of hearts you know all is lost.
    <br/><br/>
    THE END (11/26)
    <br/><br/>
    "A bit of a chicken, are we?! Nonetheless, you earned your prize! Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 5 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestContinueOnwards: {
    id: 'elevatorQuestContinueOnwards',
    displayName: 'Continue Onwards',
    shortName: 'continue onwards',
    description: `
    <img src="images/quest/continue-onwards.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You try to shake your head clear, but the smell in the air is overpowering. You desperately try to keep Thomas talking to distract you from throwing up.
    <br/><br/>
    He tells you how at first it was the village livestock that started disappearing, and then the random people that had gone missing over the past few months. He sobs as he recounts the tale. Something terrible stirs in the back of your memory.
    <br/><br/>
    He quickens his pace, and as you break through the trees you see the terrible fate that has befallen his village. Flames dance through the huts and there are broken bodies lying everywhere. The smell of blood hits you full on and your mouth starts to water.
    <br/><br/>
    Your vision fades to red as you hear shouting in the distance. You dimly register a man running towards you. An ache rises from your bones and you double over, clutching your head and moaning. Thomas shouts, "FATHER!" to the approaching figure, but turns to help you up.
    <br/><br/>
    [[Bite Thomas->elevatorQuestBiteThomas]]<br/>
    [[Resist the urge to bite Thomas->elevatorQuestResistTheUrgeToBiteThomas]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestStopToCatchYourBreath: {
    id: 'elevatorQuestStopToCatchYourBreath',
    displayName: 'Stop To Catch Your Breath',
    shortName: 'stop to catch your breath',
    description: `
    <img src="images/quest/stop-breath.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You feel too dizzy to continue, and you motion for Thomas to stop. You lean against a tree and close your eyes, taking several deep breaths. 
    <br/><br/>
    The smell of blood is overpowering, and the memories hit you all at once. Stalking the villagers. Stealing the children. Now tonight, with the strength of the full moon, setting the village alight and attacking full-on. You were hit earlier in the woods, knocked unconscious... Who knows where that villager ran off to? But Thomas is here... Thomas will do.
    <br/><br/>
    With a howl of anguish you transform once again. Thomas' expression moves from shock to terror as he realizes you were the enemy this whole time. He tries to cry out but you silence him quickly. You howl again, and laugh as the howls of your brethren answer you. You head towards the flames of the village to finish what you began.
    <br/><br/>
    THE END (12/26)
    <br/><br/>
    "A bit of a chicken, are we?! Nonetheless, you earned your prize! Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 5 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestKeepRunningAbandon: {
    id: 'elevatorQuestKeepRunningAbandon',
    displayName: 'Keep Running',
    shortName: 'keep running abandon',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You keep running, abandoning your trusted horse friend. You heartless monster! You were holding a sword and everything!! Unfortunately, looking back was a bad idea: in your haste, your foot catches a root and you slam to the ground. You know how your momma always told you never to run with swords? There's a good reason for that.
    <br/><br/>
    THE END (13/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestGallopTowardsTheSmokeAndNoiseSword: {
    id: 'elevatorQuestGallopTowardsTheSmokeAndNoiseSword',
    displayName: 'Gallop Towards The Smoke And Noise',
    shortName: 'gallop towards the smoke and noise',
    description: `
    <img src="images/quest/gallop-towards.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You give a great shout and steer your horse towards the chaos in the forest. With Freneculon free, you can finally finish what you started. You can finally end your village's constant torment, and kill this mighty dragon! 
    <br/><br/>
    You use your free hand to grab Freneculon's mane and drive him ever faster towards your dreaded foe. The dragon rears its massive head above the trees as it hears you approach, jaws wide as it bellows into the night. Jets of flame spurt from its gaping maw. 
    <br/><br/>
    As you get closer you let loose your fearsome battle cry, passed down through your family for generations! The dragon peers down at you, and takes a deeeep breath in...
    <br/><br/>
    ...spilling forth a massive jet of flame, aimed right towards you!
    <br/><br/>
    [[Dodge right->elevatorQuestDodgeRightSmoke]]<br/>
    [[Dodge left->elevatorQuestDodgeLeftSmoke]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestRunAwaySword: {
    id: 'elevatorQuestRunAwaySword',
    displayName: 'Run Away',
    shortName: 'run away sword',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Well, you tried once and failed, and you KNOW what's waiting for you in that forest. You decide to run as fast as you can in the other direction.
    <br/><br/>
    Unfortunately, having severed the reins you have nothing to grab when Freneculon suddenly rears in fright! You're thrown off your horse, striking your head on the ground and dying instantly! 
    <br/><br/>
    Always wear your seatbelt, friends.
    <br/><br/>
    THE END (14/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestWhensTheBestTimeToGoToTheDentist: {
    id: 'elevatorQuestWhensTheBestTimeToGoToTheDentist',
    displayName: 'When\'s The Best Time To Go To The Dentist?',
    shortName: 'whens the best time to go to the dentist',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    "Tooth h--"
    <br/><br/>
    The dragon crushes you. It has no time for your dentists. It has no time for your jokes.
    <br/><br/>
    THE END (15/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestHeyDontYouLikeGold: {
    id: 'elevatorQuestHeyDontYouLikeGold',
    displayName: 'Hey, Don\'t You Like Gold?',
    shortName: 'hey dont you like gold',
    description: `
    <img src="images/quest/diplomacy.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    The dragon scoffs. "I LOVE GOLD."
    <br/><br/>
    [["Yeah well, I hate it!"->elevatorQuestYeahWellIHateIt]]<br/>
    [["I love gold too!"->elevatorQuestILoveGoldToo]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestHowAboutThatWeather: {
    id: 'elevatorQuestHowAboutThatWeather',
    displayName: 'How About That Weather?',
    shortName: 'how about that weather',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    The last thing you see is a dragon's disgusted look. It crushes you to death. liek so ded.
    <br/><br/>
    THE END (16/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDodgeRightTurn: {
    id: 'elevatorQuestDodgeRightTurn',
    displayName: 'Dodge Right',
    shortName: 'dodge right turn',
    description: `
    <img src="images/quest/dodge-right.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Oh, did I mention the dragon only has one eye? The huge, towering, ancient dragon only has one eye. Unfortunately, it is his left eye, so he can see you attempt to dodge his flame. The dragon adjusts its aim accordingly, and you end up extremely well toasted. Burnt to an absolute crisp. 
    <br/><br/>
    I guess I should have mentioned it earlier. Sorry about that.
    <br/><br/>
    THE END (17/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDodgeLeftTurn: {
    id: 'elevatorQuestDodgeLeftTurn',
    displayName: 'Dodge Left',
    shortName: 'dodge left turn',
    description: `
    <img src="images/quest/dodge-left.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Did I mention the dragon only has one eye? Fortunately you already knew this having fought it before. You dodge into the dragon's blind spot to the left and successfully avoid the flame. The dragon severely misjudged your speed, and you gallop in to finish the job with the spare sword you conveniently carry all the time in Freneculon's saddlebag. You never know when you'll need a spare.
    <br/><br/>
    After a very exciting fight (trust me), you slay the dragon, and come away victorious! Holding your head high, you ride Freneculon back to your village, boasting what no other knight was able to do. You have saved the day, and your people will never again be tormented by that creature.
    <br/><br/>
    When you return, you go straight to the castle and demand to see the princess.
    <br/><br/>
    "Darling, I've returned to you like I promised! Now we can finally be wed! I love you."
    <br/><br/>
    She blushes and takes your hand. "I love you too... VICTORIA"
    <br/><br/>
    #OHSNAP #youwereawomanallalong #progressivemedievaltimes
    <br/><br/>
    You wed the love of your life. When any of the male villagers joke about joining you on your honeymoon, you politely punch them in the face and live happily ever after.
    <br/><br/>
    THE END (18/26) 
    <br/><br/>
    "Congratulations! Before you rush off exploring other realms, grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 10 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Start again->elevatorQuestSpawnPoint]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestBiteThomas: {
    id: 'elevatorQuestBiteThomas',
    displayName: 'Bite Thomas',
    shortName: 'bite thomas',
    description: `
    <img src="images/quest/bite-thomas.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    As Thomas reaches back to help you up, the scent of blood overwhelms you and you lunge, sinking your rapidly lengthening jaws into his neck. He doesn't even have time to cry out. The delicious taste of blood fills your mouth. You drop him, straighten up and howl, your transformation complete.
    <br/><br/>
    The villagers running towards you stop, crying out in shock and terror. Thomas' father has dropped to his knees, a wail of anguish escaping his throat. Many of the villagers are brandishing weapons.
    <br/><br/>
    [[Go on rampage->elevatorQuestGoOnRampage]]<br/>
    [[Run away->elevatorQuestRunAwayBite]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestResistTheUrgeToBiteThomas: {
    id: 'elevatorQuestResistTheUrgeToBiteThomas',
    displayName: 'Resist The Urge To Bite Thomas',
    shortName: 'resist the urge to bite thomas',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    As Thomas reaches back to help you, you have the sudden overwhelming urge to bite into his soft flesh. You somehow retain your last shreds of humanity, however, and turn your face away. 
    <br/><br/>
    Thomas' father runs up, shouting at his son to get away. "It's him, Thomas!! It's the creature that attacked our village!". He grabs Thomas and shoves him away. You see the shotgun in his hands. You try to cry out, but you're cut short- "You'll never harm us again, beast!" He shouts as he pulls the trigger.
    <br/><br/>
    They learned to get silver bullets, this time.
    <br/><br/>
    THE END (19/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDodgeRightSmoke: {
    id: 'elevatorQuestDodgeRightSmoke',
    displayName: 'Dodge Right',
    shortName: 'dodge right smoke',
    description: `
    <img src="images/quest/dodge-right.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Oh, did I mention the dragon only has one eye? The huge, towering, ancient dragon only has one eye. Unfortunately, it is his left eye, so he can see you attempt to dodge his flame. The dragon adjusts its aim accordingly, and you end up extremely well toasted. Burnt to an absolute crisp. 
    <br/><br/>
    I guess I should have mentioned it earlier. Sorry about that.
    <br/><br/>
    THE END (20/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestDodgeLeftSmoke: {
    id: 'elevatorQuestDodgeLeftSmoke',
    displayName: 'Dodge Left',
    shortName: 'dodge left smoke',
    description: `
    <img src="images/quest/dodge-left.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Did I mention the dragon only has one eye? Fortunately you already knew this having fought it before. You dodge into the dragon's blind spot to the left and successfully avoid the flame. The dragon severely misjudged your speed, and you gallop in to finish the job with your precious sword held tight in your fist.
    <br/><br/>
    After a very exciting fight (trust me), you slay the dragon, and come away victorious! Holding your head high, you ride Freneculon back to your village, boasting what no other knight was able to do. You have saved the day, and your people will never again be tormented by that creature.
    <br/><br/>
    When you return, you go straight to the castle and demand to see the princess.
    <br/><br/>
    "Darling, I've returned to you like I promised! Now we can finally be wed! I love you."
    <br/><br/>
    She blushes and takes your hand. "I love you too... VICTORIA"
    <br/><br/>
    #OHSNAP #youwereawomanallalong #progressivemedievaltimes
    <br/><br/>
    You wed the love of your life. When any of the male villagers joke about joining you on your honeymoon, you politely punch them in the face and live happily ever after.
    <br/><br/>
    THE END (21/26) 
    <br/><br/>
    "Congratulations! Before you rush off exploring other realms, grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 10 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Start again->elevatorQuestSpawnPoint]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestYeahWellIHateIt: {
    id: 'elevatorQuestYeahWellIHateIt',
    displayName: 'Yeah Well, I Hate It!',
    shortName: 'yeah well i hate it',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    I hope you're happy, you just delivered a sick burn to a dragon. Unfortunately no one will ever know about it, as you are now crushed to death.
    <br/><br/>
    THE END (22/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestILoveGoldToo: {
    id: 'elevatorQuestILoveGoldToo',
    displayName: 'I Love Gold Too!',
    shortName: 'i love gold too',
    description: `
    <img src="images/quest/diplomacy.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    The dragon pauses. "...REALLY?"
    <br/><br/>
    [["No!"->elevatorQuestNo]]<br/>
    [["Yes!"->elevatorQuestYes]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestGoOnRampage: {
    id: 'elevatorQuestGoOnRampage',
    displayName: 'Go On Rampage',
    shortName: 'go on rampage',
    description: `
    <img src="images/quest/rampage.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Welp, you have the bloodlust now.¯\\_(ツ)_/¯
    <br/><br/>
    You clench your terrible clawed hands and howl wildly, blood dripping from your jaws. Your eyes narrow and all your racing mind can focus on is the scent of blood...the taste of raw meat... the fresh kills... and finishing what you began!
    <br/><br/>
    You swat aside those brave enough to try and attack you. They don't stand a chance. You destroy everything and everyone in sight, and feast until dawn.
    <br/><br/>
    You regain conciousness with the sun shining in your eyes. You're human once again, covered in blood and surrounded by destruction. No one has been spared, and the village is no more. This time when you come to, you remember. Everything.
    <br/><br/>
    THE END (23/26)
    <br/><br/>
    "A bit of a chicken, are we?! Nonetheless, you earned your prize! Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 5 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestRunAwayBite: {
    id: 'elevatorQuestRunAwayBite',
    displayName: 'Run Away',
    shortName: 'run away bite',
    description: `
    <img src="images/quest/run-away-ww.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    Werewolves don't run away.
    <br/><br/>
    You clench your terrible clawed hands and howl wildly, blood dripping from your jaws. Your eyes narrow and all your racing mind can focus on is the scent of blood...the taste of raw meat... the fresh kills... and finishing what you began!
    <br/><br/>
    You swat aside those brave enough to try and attack you. They don't stand a chance. You destroy everything and everyone in sight, and feast until dawn.
    <br/><br/>
    You regain conciousness with the sun shining in your eyes. You're human once again, covered in blood and surrounded by destruction. No one has been spared, and the village is no more. This time when you come to, you remember. Everything.
    <br/><br/>
    THE END (24/26)
    <br/><br/>
    "A bit of a chicken, are we?! Nonetheless, you earned your prize! Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 5 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestNo: {
    id: 'elevatorQuestNo',
    displayName: 'No!',
    shortName: 'no',
    description: `
    <img src="images/quest/rip.jpg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    You were so close to not getting dragon-crushed. I hope you're proud of yourself, you sweet dumdum.
    <br/><br/>
    THE END (25/26)
    <br/><br/>
    "Well... you tried :sigh: Here, take your prize... Grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 2 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
  elevatorQuestYes: {
    id: 'elevatorQuestYes',
    displayName: 'Yes!',
    shortName: 'yes',
    description: `
    <img src="images/quest/yes.jpeg" style="display:block;margin-left:auto;margin-right:auto" /><br/>
    The dragon gasps. "I THOUGHT I WAS THE ONLY ONE." You high-five.
    <br/><br/>
    The two of you become best friends, fuck shit up, and laugh forever.
    <br/><br/>
    THE END (26/26)
    <br/><br/>
    "Congratulations! Before you rush off exploring other realms, grab a screenshot including your name and the log mentioning your entry in this room and post it to #l-ro-studios-admin - the first explorer that reaches this end is offered a one time only bounty of 10 bonus.ly. Each Netcentrico is entitled to only one bounty."
    <br/><br/>
    [[Try again->elevatorQuestSpawnPoint]]<br/>
    [[Get me out of this nightmare!?!?!->lounge]]<br/>
    `,
    hidden: true,
  },
}
