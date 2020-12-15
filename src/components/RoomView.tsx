import * as React from 'react'
import { Room } from '../room'
import {
  moveToRoom,
  getNetworkMediaChatStatus, pickUpRandomItemFromList, pickUpItem, dropItem, eatItem, sendChatMessage
} from '../networking'
import NameView from './NameView'
import { DispatchContext, UserMapContext } from '../App'
import { StopVideoChatAction, ShowModalAction, PrepareToStartVideoChatAction } from '../Actions'
import { FaVideo } from 'react-icons/fa'

import '../../style/room.css'
import { Modal } from '../modals'
import { SpecialFeature } from '../../server/src/rooms'
import { RainbowGateRoomView } from './feature/RainbowGateViews'
import { DullDoorRoomView } from './feature/DullDoorViews'
import { FullRoomIndexRoomView } from './feature/FullRoomIndexViews'
import { linkActions } from '../linkActions'
import { useContext } from 'react'

// import {isSeriousFood} from '../../server/src/generators/seriousFood'
import { v4 as uuidv4 } from 'uuid'

const VIDEO_CHAT_MAX_SIZE = 8
let isKitchenTableA = false

interface Props {
  room: Room;
  userId: string;
  roomData: { [roomId: string]: Room };
}

export default function RoomView (props: Props) {
  const dispatch = React.useContext(DispatchContext)
  const { room } = props

  // This is very silly.
  // Since we're manually setting raw HTML, we can't get refs to add proper click handlers
  // Instead, we just hijack ALL clicks in the description, and check if they're for a link
  const descriptionClick = (e) => {
    const roomId =
      e.target && e.target.getAttribute && e.target.getAttribute('data-room')
    if (roomId) {
      moveToRoom(roomId)
      return
    }

    const itemName = e.target && e.target.getAttribute && e.target.getAttribute('data-item')
    if (itemName) {
      pickUpItem(itemName)
    }

    const actionName = e.target && e.target.getAttribute && e.target.getAttribute('data-action')
    if (actionName) {
      linkActions[actionName]()
    }
  }

  const joinVideoChat = async () => {
    dispatch(PrepareToStartVideoChatAction())
  }

  const leaveVideoChat = () => {
    dispatch(StopVideoChatAction())
  }

  const showNoteWall = () => {
    dispatch(ShowModalAction(Modal.NoteWall))
  }

  let noteWallView
  if (room && room.hasNoteWall) {
    if (room.noteWallData) {
      noteWallView = <div>{room.noteWallData.roomWallDescription} <button onClick={showNoteWall}>{room.noteWallData.noteWallButton}</button></div>
    } else {
      noteWallView = <div>One of the walls has space for Netcentricos to put up sticky notes. <button onClick={showNoteWall}>View note wall</button></div>
    }
  }

  if (room && room.id === 'kitchenTableA') {
    isKitchenTableA = true
  }
  else  
  isKitchenTableA = false

  let videoChatButton
  // if (room && room.allowsMedia) {
  //   if (getNetworkMediaChatStatus()) {
  //     videoChatButton = (
  //       <button onClick={leaveVideoChat} id='join-video-chat'>
  //         Leave Video Chat
  //       </button>
  //     )
  //   } else if (room.videoUsers && room.videoUsers.length >= VIDEO_CHAT_MAX_SIZE) {
  //     // Maybe make it more transparent? I think this is probably fine, but I'm no UI expert!
  //     videoChatButton = (
  //       <button id='join-video-chat'>
  //         Video Chat Is Full (limit {VIDEO_CHAT_MAX_SIZE})
  //       </button>
  //     )
  //   } else {
  //     videoChatButton = (
  //       <button onClick={joinVideoChat} id='join-video-chat'>
  //         Join Video Chat (Beta) {room.videoUsers && room.videoUsers.length > 0 ? `(${room.videoUsers.length})` : ''}
  //       </button>
  //     )
  //   }
  // }

  // TODO: Don't hard-code order of features
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div id="room">
      <h1 id="room-name">{room ? room.name : 'Loading...'}{videoChatButton}</h1>
      <div
        id="static-room-description"
        onClick={descriptionClick}
        dangerouslySetInnerHTML={{
          __html: room
            ? parseDescription(room.description, props.roomData)
            : 'Loading current room...'
        }}
      />
      {room && room.specialFeatures && room.specialFeatures.includes(SpecialFeature.RainbowDoor) ? <RainbowGateRoomView /> : ''}
      {room && room.specialFeatures && room.specialFeatures.includes(SpecialFeature.DullDoor) ? <DullDoorRoomView /> : ''}
      {room && room.specialFeatures && room.specialFeatures.includes(SpecialFeature.FullRoomIndex) ? <FullRoomIndexRoomView /> : ''}
      {room ? <PresenceView users={room.users} userId={props.userId} videoUsers={room.videoUsers} roomId={room.id} /> : ''}
      {noteWallView}
    </div>
  )
}

const HeldItemView = () => {
  const { userMap, myId } = useContext(UserMapContext)
  const user = userMap[myId]

  const dropHeldItem = () => {
    dropItem()
  }

const eatHeldFood = () => {
  eatItem()
  sendChatMessage(uuidv4(), '/get fortune cookie')
}
  const isSeriousFood = (i) => { return true };

  if (user.item) {
    const customButtonAction = user.item.includes('green toy snake') ? 'Throw it against the floor' : 'Drop it'
    if (isKitchenTableA) {
      if (isSeriousFood(user.item))
        return <span>Luckily enough, you do happen to have {user.item}. <button className='link-styled-button' onClick={eatHeldFood}>Go eat it</button>.</span>
      else {
        return <span>Since you don’t have any food with you, it’s starting to feel a bit awkward just sitting around here. Go to get some food, or stay here some more. You are holding {user.item.replace('office cat','the office cat').replace('green toy snake','a green toy snake')}. <button className='link-styled-button' onClick={dropHeldItem}>{customButtonAction}</button>.</span>
      }
    }
    else  
      return <span>You are holding {user.item.replace('office cat','the office cat').replace('green toy snake','a green toy snake')}. <button className='link-styled-button' onClick={dropHeldItem}>{customButtonAction}</button>.</span>
  } else {
    if (isKitchenTableA) {
      return <span>Since you don’t have any food with you, it’s starting to feel a bit awkward just sitting around here. Go to get some food, or stay here some more.</span>
    }
    else 
      return null
  }
}

const PresenceView = (props: { users?: string[]; userId?: string, videoUsers: string[], roomId: string }) => {
  const { userMap, myId } = React.useContext(UserMapContext)

  let { users, userId, videoUsers } = props

  // Shep: Issue 43, reminder to myself that this is the code making sure users don't appear in their own client lists.
  if (users && userId) {
    users = users.filter((u) => u !== userId)
  }

  if (users) {
    // TODO: This should happen in the reducer
    let names

    if (users.length === 0) {
      return <div id="dynamic-room-description">You are all alone here. <HeldItemView /></div>
    }

    if (props.roomId === 'theater') {
      return <div id="dynamic-room-description">There are {users.length} other people sitting in here.</div>
    }

    const userViews = users.map((u, idx) => {
      const user = userMap[u]
      if (!user) { return <span /> }
      const id = `presence-${idx}`
      return (
        <span key={`room-presence-${id}`}>
          <NameView userId={u} id={id} key={id} />
          {videoUsers && videoUsers.includes(u) ? <FaVideo /> : null}
          {user.item ? ` (holding ${user.item.replace('office cat', 'the office cat').replace('green toy snake','a green toy snake')})` : null}
        </span>
      )
    })

    if (users.length === 1) {
      names = userViews[0]
    } else if (users.length === 2) {
      names = (
        <span>
          {userViews[0]} and {userViews[1]}
        </span>
      )
    } else {
      names = (
        <span>
          {intersperse(userViews.slice(0, users.length - 1), ', ')}, and{' '}
          {userViews[userViews.length - 1]}
        </span>
      )
    }

    return (
      <div id="dynamic-room-description">
        Also here {users.length === 1 ? 'is' : 'are'} {names}. <HeldItemView />
      </div>
    )
  } else {
    return <div id="dynamic-room-description" />
  }
}

// https://stackoverflow.com/questions/23618744/rendering-comma-separated-list-of-links
/* intersperse: Return an array with the separator interspersed between
 * each element of the input array.
 *
 * > _([1,2,3]).intersperse(0)
 * [1,0,2,0,3]
 */
function intersperse (arr, sep) {
  if (arr.length === 0) {
    return []
  }

  return arr.slice(1).reduce(
    function (xs, x, i) {
      return xs.concat([sep, x])
    },
    [arr[0]]
  )
}

function parseDescription (description: string, roomData: { [roomId: string]: Room }): string {
  // eslint-disable-next-line no-useless-escape
  const complexLinkRegex = /\[\[([^\]]*?)\-\>([^\]]*?)\]\]/g
  const simpleLinkRegex = /\[\[(.+?)\]\]/g

  description = description.replace(complexLinkRegex, (match, text, roomId) => {
    const room = roomData[roomId]
    if (roomId === 'item') {
      return `<a class='room-link' href='#' data-item='${text}'>${text}</a>`
    } else if (room) {
      const userCount = room && room.users && room.users.length > 0 ? ` (${room.users.length})` : ''
      return `<a class='room-link' href='#' data-room='${roomId}'>${text}${userCount}</a>`
    } else if (linkActions[roomId]) {
      return `<a class='room-link' href='#' data-action='${roomId}'>${text}</a>`
    } else {
      console.log(`Dev warning: tried to link to room ${roomId}, which doesn't exist`)
    }
  })

  description = description.replace(simpleLinkRegex, (match, roomId) => {
    const room = roomData[roomId]
    if (!room) {
      console.log(`Dev warning: tried to link to room ${roomId}, which doesn't exist`)
    }
    const userCount = room && room.users && room.users.length > 0 ? ` (${room.users.length})` : ''
    return `<a class='room-link' href='#' data-room='${roomId}'>${roomId}${userCount}</a>`
  })
  return description
}

export function StreamEmbed () {
  const streamRef = React.useRef<HTMLIFrameElement>(null)
  const captionsRef = React.useRef<HTMLIFrameElement>(null)

  return (
    <div id="iframes" style={{ margin: 'auto' }}>
      <iframe width="560" title="stream" ref={streamRef} height="315" src="https://www.youtube.com/embed/live_stream?channel=UCKv_QzXft4mD6TXmQBZtzIA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe id="captions" title="captions" ref={captionsRef} width="560" height="100" src="https://www.streamtext.net/player/?event=RoguelikeCelebration&chat=false&header=false&footer=false&indicator=false&ff=Consolas&fgc=93a1a1" frameBorder="0" allow="autoplay; encrypted-media;" allowFullScreen></iframe>
    </div>
  )
}
