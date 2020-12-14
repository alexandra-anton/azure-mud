import React, { useContext, useEffect, useState } from 'react'
import { DispatchContext, UserMapContext } from '../../App'
import { UpdateProfileColorAction, ShowModalAction, HideModalAction } from '../../Actions'
import { Modal } from '../../modals'
import * as Storage from '../../storage'

// When you pass through the ranbow door enough times, you get a randomly colored username
export const DullDoorRoomView = () => {
  const dispatch = React.useContext(DispatchContext)
  const { userMap, myId } = useContext(UserMapContext)

  const user = userMap[myId]

  const walkThroughDoor = () => {
    if (user.nameColor) {
      Storage.setWasColoredEntering(true)
    } else {
      Storage.setWasColoredEntering(false)
    }
    dispatch(ShowModalAction(Modal.FeatureDullDoor))
  }

  return <div id="dull-door-div" className="feature-room-view">
    <p>You look to your right and see the door to Peles meeting room and all its glass walls covered. <button id="dull-door-button" className='link-styled-button' onClick={walkThroughDoor}>Walk through the door</button>.</p>
  </div>
}

export default function DullDoorModalView () {
  const dispatch = React.useContext(DispatchContext)

  const [wasColoredEntering, setWasColoredEntering] = useState(false)

  useEffect(() => {
    (async () => {
      setWasColoredEntering(await Storage.getWasColoredEntering())
    })()
  }, [])

  const giveColor = () => {
    dispatch(UpdateProfileColorAction(null))
    dispatch(HideModalAction())
  }
  const leave = () => {
    dispatch(HideModalAction())
  }

  if (!wasColoredEntering) {
    return (
      <div>
        <h1>You see a very, very bored Dan Beldiman, dressed as a Christmas elf, sitting in Peles.</h1>
        <p>He&apos;s poking unenthusiastically at his computer with his Christmas Elf gloves and eating his lunch with the rest. He
          looks very tired. You wave to catch his attention, and he glances over at you. You can see him trying to muster some
          effort for a greeting, but then he sighs and sinks into his seat. &quot;I&apos;m sorry,&quot; he says, &quot;these reports were due two
          days ago. I don&apos;t have the time or energy to chat.&quot;
        </p>
        <p>You leave him to his reports.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You see a very, very bored Dan Beldiman, dressed as a Christmas elf, sitting in Peles.</h1>
        <p>He&apos;s poking unenthusiastically at his computer with his Christmas Elf gloves and eating his lunch with the rest. As he spots you, his eyes go wide. A coffee mug in one of his hands drops to his desk with a loud thump, and a fork in another clatters to the ground.
        </p>
        <p>&quot;Oh!&quot; he shouts, &quot;Stay right where you are!&quot;. Before you can even turn to the door, Dan jets in front of you
          in a cloud of dark gray smoke.</p>
        <p>&quot;Look,&quot; says Dan, &quot;I&apos;m begging you! You don&apos;t know how dull this place is, and I&apos;ve been
          stuck here for the last four nights doing these reports! They&apos;re overdue two days and they won&apos;t let me leave
          until they&apos;re done!&quot;</p>

        <p>&quot;That color you have in your name, that&apos;ll do the trick! I don&apos;t have time to explain, but suffice it to say I&apos;m in a very tight spot and that color will fix things.&quot;</p>
        <p>&quot;You&apos;re free to go either way, but I&apos;d be really grateful if you could leave me your
          color.&quot;</p>

        <p><strong>Leave your name color behind?</strong></p>
        <button id='dull-door-agree' onClick={giveColor}>Agree</button>
        <button id='dull-door-agree' onClick={leave}>Leave</button>
      </div>
    )
  }
}
