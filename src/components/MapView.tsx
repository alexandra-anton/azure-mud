/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react'
import { Room } from '../room'
import { moveToRoom } from '../networking'
import { HideModalAction } from '../Actions'
import { DispatchContext } from '../App'

/**
 * This renders a clickable ASCII map!
 *
 * The map itself is just plaintext ASCII pasted in here, generated using the
 * Mac app MonoDraw app (see the map.monopic file in the root of this repo)
 *
 * There are two additional data sources in here:
 *
 * 1. To make rooms clickable, there is an array of ClickableArea objects
 * that define clickable squares that move to a given roomId.
 * Coordinates are given using ASCII character coordinates, not pixels.
 *
 * 2. To add real-time presence numbers to rooms, there's an array of roomIds
 * that correspond to the number in parenthesis that lives in the ASCII map itself
 * This number is monotonically increasing. To add a new room, add its name to the
 * end of the array and then make the number you use in the ASCII map the array index + 1
 * (because the ASCII map numbers are 1-indexed)
 */

 interface Props {
  roomData: { [roomId: string]: Room };
  currentRoomId: string
  isMiniMap?: boolean
 }

  interface ClickableArea {
    x: number,
    y: number,
    height: number,
    width: number,
    roomId: string
  }

export default function MapView (props: Props) {
  const dispatch = useContext(DispatchContext)
  const { roomData, currentRoomId } = props

  // Pixel size of one ASCII character
  let w, h
  if (props.isMiniMap) {
    w = 8
    h = 13
  } else {
    w = 10
    h = 21
  }

  // Scroll to make sure that the user's location is visible
  // The empty array at the end means we only run this on first render, not every time it re-renders
  // This ensures it only scrolls on load, not every time new presence data comes in
  React.useEffect(() => {
    console.log('Attempting to scroll', `${props.isMiniMap ? 'minimap-' : ''}clickable-room-${currentRoomId}`)
    const location = document.getElementById(`${props.isMiniMap ? 'minimap-' : ''}clickable-room-${currentRoomId}`)
    if (location) {
      console.log(location)
      location.scrollIntoView({ block: 'center', inline: 'center' })
    } else {
      console.log('NO LOCATION')
    }
  }, (props.isMiniMap ? null : []))

  if (!roomData) { return <div/> }

  let map = mapText

  presenceMapping.forEach((roomId, idx) => {
    let replaceString = '(0)'

    if (roomData[roomId] && roomData[roomId].users && roomData[roomId].users.length > 0) {
      replaceString = `(${roomData[roomId].users.length})`
    }

    replaceString = replaceString.padEnd(4, '.')
    map = map.replace(`(${idx.toString().padStart(2, '0')})`, replaceString)
  })

  const handleClick = (e) => {
    const roomId =
      e.target && e.target.getAttribute && e.target.getAttribute('data-room')
    if (roomId) {
      moveToRoom(roomId)
      dispatch(HideModalAction())
    }
  }

  const clickableDivs = clickableAreas.map(a => {
    return <div
      style={{
        position: 'absolute',
        left: `${a.x * w}px`,
        top: `${a.y * h}px`,
        width: `${a.width * w}px`,
        height: `${a.height * h}px`,
        cursor: 'pointer'
      }}
      key={a.roomId}
      onClick={handleClick}
      data-room={a.roomId}
      id={`${props.isMiniMap ? 'minimap-' : ''}clickable-room-${a.roomId}`} />
  })

  return <div className='map' style={{ position: 'relative', margin: '15px' }}>
    {clickableDivs}
    <pre style={{ letterSpacing: '2px', fontFamily: 'IBM Plex Mono' }}><code>
      {map}
    </code></pre>
  </div>
}

const mapText = `     ┌───────────────────────────┐                               ┌──────────────────────────┐
     │...........................│                               │..........................│
     │.....Yellow Table(11)......│┌────────────────────────┐     │.....................*....│
     │...........................││........................│     │.....................|_...│
     └────────────────────────#──┘│......Kitchen (01)......│     │.....................(O)..│
┌──────────────────────┐       #  │........................│     │........Support......|#|..│
│......................│      #   │........................###   │..........(19).......'-'..│
│......................│       #  │...Table A (03).........│  #  │..........................│
│.........MOPS.........│        ###.....┌───┐..............│   ###..........................│
│.........(23).........│# ##   #  │.....└───┘..............│  #  │..........................│
│......................# #  ###   │........................│ #   │..........................│
│......................│       #  │..........Table B (04)..│  #  └───────#──────────────#───┘
└────────#─────────────┘      #   │.............┌───┐......│  #      ┌───#──────┐┌──────#───┐
     ┌───#──────────────────┐  #  │.............└───┘......│ #       │..........││..........│
     │......................│  #  │........................│  #      │..Phone...││..Phone...│
     │.....Coltul Vesel.....│   # │......Fußball (02)......│  #      │..Booth...││..Booth...│
     │.........(16).........│  #  │..........┌───┐.........│ #       │...(24)...││...(25)...│
     │......................###   │..........└───┘.........│  #      │..........││..........│
     └──#───────────────#───┘  #  └────────────────────────┘  #      └───#──────┘└───────#──┘
┌───────#───────────────#───┐ #   ┌────────────────────────┐ #   ┌───────#───────────────#──┐
│.Reception Bar (14)........│  #  │........................│  #  │..........................│
│┌─────────┐................###   │........................│   ###..........................│
││  !!%!   │................│  #  │....Afara la tigara.....│  #  │...........Bran...........│
│└─────────┘................│   # │..........(18)..........│ #   │...........(26)...........│
│...........................│  #  │........................│  #  │..........................│
│............Reception (15).│  #  ├───────────┬┬─────#─────┤  #  └──────────────##──────────┘
│..../\\.....................│   ##│.Elevator .││.Elevator..│ #       ┌──────────##──────────┐
│.../\\*\\....................│  #  #..A (07)...││..B (06)...## #  ### │......................│
│../\\O\\*\\...................###   │...........││...........│   ##   ##......................│
│./*/\\/\\/\\..................│  #  └───────────┘└───────────┘  #      │......................│
│....||.(27)................│ #   ┌───────────┐┌───────────┐ #       │......................│
└───────────────────────────┘  #  │...........││...........│  #      │........Acvariu.......│
┌──────────────────────┐       #  │...........││...........│ #       │..........(20)........│
│......................│      #   │...........##...........│  #      │......................│
│....Tineretului(12)...│       # ##..Ateneu...││..TNB (13).│ #       │......................│
│......................│        # │...(08)....││...........##        │.............../\\.....│
└──────────────────#───┘       #  │...........##...........│ #       │............../\\*\\....│
     ┌─────────────#────────┐ #   │...........││...........│  #      │............./\\O\\*\\...│
     │......................│  #  │...........││...........│ #       │...............||.....│
     │.......HR Area........###   └─────#─────┘└─────#─────+  #      └──────────##──────────┘
     │.........(22).........│  #  ┌─────#────────────#─────┐  #  ┌──────────────##──────────┐
     │......................│   ###........................│ #   │..........................│
     └──────────────────#───┘  #  │........................│  #  │..........................│
┌───────────────────────#───┐ #   │........MM Area.........###   │.........Pet Zone ........│
│....Peretele de pluta .....│  #  │..........(17)..........│  #  │...........(09)...........│
│...........(10)............│  #  │........................│   ###..........................│
└────────##─────────────────┘ #   │........................│     │....................=^_^=.│
     ┌───##─────────────────┐  #  └───#─────────────#──────┘     └──────────────────────────┘
     │......................│  #  ┌───#────┐┌───────#──────┐                                 
     │......................│ #   │........││..............│                                 
     │....Sys Eng Corner....│  #  │........││..............│                                 
     │.........(21).........│ #   │..Bar...##....Dance.....│                                 
     │......................##    │..(05)..##....Floor.....│                                 
     │..>_<.................│     │........││....(00)......│                                 
     └──────────────────────┘     │........││..............│                                 
                                  │........││..............│                                 
                                  └────────┘└──────────────┘                                                                                             
   `

const presenceMapping = [
  'danceFloor', //Dance Floor 00
  'kitchen', // Kitchen 01
  'kitchenTableB', // Fußball 02
  'kitchenTableA', // Table A 03
  'kitchenTableC', // Table B 04
  'bar', // Bar 05
  'lounge', // Elevator B 06
  'shippingContainer', // Elevator A 07
  'theater', // Ateneu 08
  'atelier', // Pets Zone 09
  'southShowcaseHall', //Peretele de pluta 10
  'northShowcaseHall', // Yellow Table 11
  //'westShowcaseHall', //---hidden---
  'eastShowcaseHall', // Tineretului 12
  'statue', // TNB 13
  'swag', // Reception Bar 14
  'foyer', // Reception 15
  'workbench', // * Coltul Vesel 16
  'unconference', // MM Area 17
  'minetown', // Afara la tigara 18
  'oracle', // Support Area 19
  'castle', // Acvariu 20
  'sokoban', // Sys Eng Corner 21
  'astralPlane', // * HR Area 22
  'tower', // MOPS 23
  'phoneBooth1', // * Phone Booth 24
  'phoneBooth2', // * Phone Booth 25
  'bran', // * Bran 26
  'study', // Christmas Tree 27
]

const clickableAreas: ClickableArea[] = [
  {
    roomId: 'lounge',
    x: 47,
    y: 25,
    width: 13,
    height: 5
  },
  {
    roomId: 'danceFloor',
    x: 44,
    y: 48,
    width: 16,
    height: 9
  },
  {
    roomId: 'kitchen',
    x: 34,
    y: 2,
    width: 26,
    height: 17
  },
  {
    roomId: 'kitchenTableA',
    x: 38,
    y: 7,
    height: 3,
    width: 12
  },
  {
    roomId: 'kitchenTableB',
    x: 40,
    y: 15,
    height: 3,
    width: 13
  },
  {
    roomId: 'kitchenTableC',
    x: 45,
    y: 11,
    width: 12,
    height: 3
  },
  {
    roomId: 'bar',
    x: 34,
    y: 48,
    width: 10,
    height: 9
  },
  {
    roomId: 'shippingContainer',
    x: 34,
    y: 25,
    width: 13,
    height: 5
  },
  {
    roomId: 'southShowcaseHall',
    x: 0,
    y: 43,
    width: 29,
    height: 4
  },
  {
    roomId: 'theater',
    x: 34,
    y: 30,
    width: 13,
    height: 10
  },
  {
    roomId: 'foyer',
    x: 0,
    y: 24,
    width: 29,
    height: 8
  },
  {
    roomId: 'swag',
    x: 0,
    y: 19,
    width: 29,
    height: 5
  },
  {
    roomId: 'workbench',
    x: 5,
    y: 13,
    width: 24,
    height: 6
  },
  {
    roomId: 'atelier',
    x: 65,
    y: 40,
    width: 28,
    height: 8
  },
  {
    roomId: 'study',
    x: 1,
    y: 26,
    width: 19,
    height: 5
  },
  {
    roomId: 'northShowcaseHall',
    x: 5,
    y: 0,
    width: 29,
    height: 5
  },
  {
    roomId: 'statue',
    x: 47,
    y: 30,
    width: 13,
    height: 10
  },
  /*{
    roomId: 'westShowcaseHall',
    x: 28,
    y: 28,
    width: 15,
    height: 8
  },*/
  {
    roomId: 'eastShowcaseHall',
    x: 0,
    y: 32,
    width: 24,
    height: 5
  },
  {
    roomId: 'unconference',
    x: 34,
    y: 40,
    width: 26,
    height: 8
  },
  {
    roomId: 'minetown',
    x: 34,
    y: 19,
    width: 26,
    height: 6
  },
  {
    roomId: 'oracle',
    x: 65,
    y: 0,
    width: 28,
    height: 12
  },
  {
    roomId: 'sokoban',
    x: 5,
    y: 47,
    width: 24,
    height: 8
  },
  {
    roomId: 'castle',
    x: 69,
    y: 26,
    width: 24,
    height: 14
  },
  {
    roomId: 'astralPlane',
    x: 6,
    y: 37,
    width: 24,
    height: 6
  },
  {
    roomId: 'tower',
    x: 0,
    y: 5,
    width: 24,
    height: 8
  },
  {
    roomId: 'phoneBooth1',
    x: 69,
    y: 12,
    width: 12,
    height: 7
  },
  {
    roomId: 'phoneBooth2',
    x: 81,
    y: 12,
    width: 12,
    height: 7
  },
  {
    roomId: 'bran',
    x: 65,
    y: 19,
    width: 28,
    height: 7
  }
]
