export const unconference = {
  id: 'unconference',
  displayName: 'MM Area',
  shortName: 'the MM area',
  description: 'Winding corridors lead to a large dungeon-like room. Sticky notes and magic markers are piled up on tables along with assorted adventuring gear. White banners with blocky black text label several hallways leading to the unconferencing rooms - [[Minetown->minetown]], [[Oracle->oracle]], [[Sokoban->sokoban]], [[Castle->castle]], [[Vlad\'s Tower->tower]], and [[Astral Plane->astralPlane]]. You can also return back to the [[theater]].',
  allowsMedia: true,
  hasNoteWall: true,
  noteWallData: {
    roomWallDescription: 'One wall of this room is taken up by a large whiteboard titled "UNCONFERENCE TOPIC SUGGESTIONS!" Smaller font clarifies "Write what you want to chat with others about, and upvote topics you find interesting. Moderators will assign the top six topics rooms, 5 minutes into each unconference block. Have fun!"',
    noteWallButton: 'Inspect the topics',
    addNoteLinkText: 'suggest a topic',
    addNotePrompt: 'What would you like to suggest?',
    noteWallDescription: 'Topics for unconferencing discussion, ranked by upvotes.'
  }
}

export const minetown = {
  id: 'minetown',
  displayName: 'Afara la Tigara',
  shortName: 'minetown',
  description: 'The clink of picks and sound of distant crashing rock forms a percussive backbeat to this underground town square. Dozens of candles are set into the walls, casting the space in a warm glow. A fountain stands in the center of the square, along with a large sign reading "NO SPLASHING"<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/87156694099?pwd=bVN4WHZTeG9NREk0VFMwQk9DRExaZz09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 302165)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Oracle->oracle]], [[Castle->castle]], [[Vlad\'s Tower->tower]], [[Sokoban->sokoban]], and [[Astral Plane->astralPlane]]. Or you can climb the stairs back up to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const oracle = {
  id: 'oracle',
  displayName: 'Support',
  shortName: 'support',
  description: 'This peaceful space is decorated with burbling fountains, stately marble columns, and finely carved statues of centaurs in various poses. A small temple is the focal point, but the doors are currently closed and barred, with a stern note on the door reading "The oracle is in no mood for consultations." A smaller, more hastily written sign underneath, reads "Tea time @ Vlad\'s, be back soon!"<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/85830277530?pwd=RDNFTnNMSFdhVExya0pYOUJRRDNOUT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 984338)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Castle->castle]], [[Vlad\'s Tower->tower]], [[Sokoban->sokoban]], and [[Astral Plane->astralPlane]]. Or you can go back to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const tower = {
  id: 'tower',
  displayName: 'MOPS',
  shortName: 'MOPS',
  description: 'Squeaking bats and howling wolves give a festive October ambiance to this gothic tower, as you stand in the center courtyard. Small niches holding antique weaponry or suits of armour surround the yard, which can function as uncomfortably crowded break out rooms in a pinch. From far above you can hear two voices laughing, one Greek and one Transylvanian - but the reclining dragon by the stairs opens a warning eye if you venture too close.<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/83018980256?pwd=R21NU2lsV2UxTXRKeW52WU43bGJwUT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 955148)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Sokoban->sokoban]], and [[Astral Plane->astralPlane]]. Or you can go back down to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const castle = {
  id: 'castle',
  displayName: 'Acvariu',
  shortName: 'the aquarium',
  description: `The moment you step through the glass doors, cheerful voices overlap with this strange music. Where is this coming from?
  <br/>
  Around you, the desks are littered with abandoned notebooks, pens, and last year’s tree decorations. Someone should really put these away in January! A [[green toy snake->item]] is on the floor, chairs and backpacks spread chaotically around.
  <br/>
  A Christmas tree has been set up in the corner, and crumpled wrapping paper reminds us of last week’s party.
  <br/>
  If you really have to leave this cosy place, you can head over to [[elevator A->shippingContainer]], [[elevator B->lounge]], [[bran]], or join the rest of the team in the [[MM area->unconference]].`,
  hasNoteWall: true
}

export const sokoban = {
  id: 'sokoban',
  displayName: 'Sys Eng Corner',
  shortName: 'sokoban',
  description: 'This strange room is made up of blue walls with large circular pits dotting the floor, accompanied by many boulders of matching size. The boulders are strangely easy to roll from place to place - and even stranger is how often moving a boulder reveals a flattened snack underneath. Something about being in this room fills you with a subtle feeling of frustration.<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/88300705663?pwd=ZTZ6N2x0Sks4a21qTTlSREt5NGJhQT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 418594)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Vlad\'s Tower->tower]], and [[Astral Plane->astralPlane]]. Or you can go back to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const astralPlane = {
  id: 'astralPlane',
  displayName: 'HR Area',
  shortName: 'HR area',
  description: 'Your steps feel lighter in this glowing realm among the clouds. The majestic rays of golden light and pure sweet air would make it almost heavenly - if not for the awkward company of several strange and intimidating characters further inside by the three great temples. The way they keep shooting you suspicious glances and murmering to themselves gives you the distinct feeling they don\'t think you should be here.<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/85608238055?pwd=MXIvWHQ2OS85MlFFeHVucHQ1R3g1QT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 753544)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Vlad\'s Tower->tower]], and [[Sokoban->sokoban]]. Or you can float back down to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const phoneBooth1 = {
  id: 'phoneBooth1',
  displayName: 'Phone Booth 1',
  shortName: 'phone booth 1',
  description: 'Your steps feel lighter in this glowing realm among the clouds. The majestic rays of golden light and pure sweet air would make it almost heavenly - if not for the awkward company of several strange and intimidating characters further inside by the three great temples. The way they keep shooting you suspicious glances and murmering to themselves gives you the distinct feeling they don\'t think you should be here.<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/85608238055?pwd=MXIvWHQ2OS85MlFFeHVucHQ1R3g1QT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 753544)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Vlad\'s Tower->tower]], and [[Sokoban->sokoban]]. Or you can float back down to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const phoneBooth2 = {
  id: 'phoneBooth2',
  displayName: 'Phone Booth 2',
  shortName: 'phone booth 2',
  description: 'Your steps feel lighter in this glowing realm among the clouds. The majestic rays of golden light and pure sweet air would make it almost heavenly - if not for the awkward company of several strange and intimidating characters further inside by the three great temples. The way they keep shooting you suspicious glances and murmering to themselves gives you the distinct feeling they don\'t think you should be here.<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/85608238055?pwd=MXIvWHQ2OS85MlFFeHVucHQ1R3g1QT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 753544)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Vlad\'s Tower->tower]], and [[Sokoban->sokoban]]. Or you can float back down to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const bran = {
  id: 'bran',
  displayName: 'Bran',
  shortName: 'Bran',
  description: 'Your steps feel lighter in this glowing realm among the clouds. The majestic rays of golden light and pure sweet air would make it almost heavenly - if not for the awkward company of several strange and intimidating characters further inside by the three great temples. The way they keep shooting you suspicious glances and murmering to themselves gives you the distinct feeling they don\'t think you should be here.<br/><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://us02web.zoom.us/j/85608238055?pwd=MXIvWHQ2OS85MlFFeHVucHQ1R3g1QT09" target="_blank">the Zoom meeting for this room</a>, which you can access at any time during the conference. (Passcode 753544)<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Vlad\'s Tower->tower]], and [[Sokoban->sokoban]]. Or you can float back down to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}

export const secretRoom = {
  id: 'secretRoom',
  displayName: 'Unconferencing: Alexa\'s Secret Room',
  shortName: 'Secret Room',
  description: 'You have finally made it here. <br/><iframe src="https://discord.com/widget?id=780867772749840384&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/GxNoy8DbQD0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/284684673&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ru-tenone" title="Ru Tenone" target="_blank" style="color: #cccccc; text-decoration: none;">Ru Tenone</a> · <a href="https://soundcloud.com/ru-tenone/portishead-sos1" title="Portishead SOS" target="_blank" style="color: #cccccc; text-decoration: none;">Portishead SOS</a></div><br/><iframe src="https://open.spotify.com/embed/track/4Dg5moVCTqxAb7Wr8Dq2T5" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><br/>We encourage you to use this space to talk "face-to-face" using <a href="https://cognizantcorp.webex.com/meet/Alexandra.Anton" target="_blank">Alexa\'s Webex room</a> for this room.<br/><br/>This is a room for unconferencing! The other unconferencing rooms are [[Minetown->minetown]], [[Oracle->oracle]], [[Castle->castle]], [[Sokoban->sokoban]], and [[Astral Plane->astralPlane]]. Or you can go back down to the [[unconferencing lobby->unconference]].',
  hasNoteWall: true
}
