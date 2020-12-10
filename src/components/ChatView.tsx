import React, { useContext } from 'react'

import MessageView from './MessageView'
import { Message, MessageType, ConnectedMessage, DisconnectedMessage, EnteredMessage, LeftMessage, ChatMessage } from '../message'

import '../../style/chat.css'
import { DispatchContext } from '../App'
import { ActivateAutoscrollAction, DeactivateAutoscrollAction } from '../Actions'
import { ServerSettings } from '../../server/src/types'
import { FaLessThanEqual } from 'react-icons/fa'

function isMovementMessage (message: Message): message is ConnectedMessage | DisconnectedMessage | EnteredMessage | LeftMessage {
  return message.type === MessageType.Connected || message.type === MessageType.Disconnected ||
    message.type === MessageType.Entered || message.type === MessageType.Left
}

export default function ChatView (props: { messages: Message[], roomId: string, autoscrollChat: Boolean, serverSettings: ServerSettings}) {
  const dispatch = useContext(DispatchContext)

  const handleScroll = () => {
    const messageWindow = document.querySelector('#messages')
    const isScrolledToBottom = messageWindow.scrollHeight === messageWindow.scrollTop + messageWindow.clientHeight

    if (isScrolledToBottom && !props.autoscrollChat) {
      dispatch(ActivateAutoscrollAction())
    } else if (!isScrolledToBottom && props.autoscrollChat) {
      dispatch(DeactivateAutoscrollAction())
    }
  }

  React.useEffect(() => {
    const lastMessage = document.querySelector(
      '#messages .message-wrapper:last-of-type'
    )
    if (lastMessage && props.autoscrollChat) {
      // I was using lastMessage.scrollIntoView()
      // But I was seeing odd behavior when there was only one message on-screen.
      // This very TS-unfriendly code fixes taht.
      (lastMessage.parentNode as Element).scrollTop =
        (lastMessage as any).offsetTop -
        (lastMessage.parentNode as any).offsetTop
    }
  })

  function isChatMessage(message: Message): message is ChatMessage {
    return message.type === MessageType.Chat
  }

  function isDifferentRoom(m: Message) {
    console.log('Filtering', m);
    if (isChatMessage(m)) { return m.roomId === props.roomId }
    return false;
  }

  // This message filtering logic is kinda ugly and hard to read
  function shouldRemoveMessage (m: Message) {
    return isMovementMessage(m) &&
      (
        props.serverSettings.movementMessagesHideRoomIds.includes(m.roomId) ||
        m.numUsersInRoom > props.serverSettings.movementMessagesHideThreshold
      )
  }
  const messagesAfterMovementFilter = props.messages.filter((msg) => {
    return !shouldRemoveMessage(msg) && !isDifferentRoom(msg)
  })

  return (
    <div id="messages" onScroll={handleScroll}>
      {messagesAfterMovementFilter.slice(-150).map((m, idx) => {
        let hideTimestamp = false
        const previousMessage = props.messages[idx - 1]
        if (previousMessage) {
          // TODO: Give all messages a userId for this to be meaningful
          if ((previousMessage as any).userId && (m as any).userId && (previousMessage as any).userId === (m as any).userId) {
            const diff = (new Date(m.timestamp).getTime() - new Date(previousMessage.timestamp).getTime())
            // This is a bad way to calculate '3 minutes' and I should feel bad -em
            if (diff < 1000 * 60 * 3) {
              hideTimestamp = true
            }
          }
        }

        const id = `message-${idx}`
        return <MessageView message={m} key={id} id={id} hideTimestamp={hideTimestamp} />
      })}
    </div>
  )
}
