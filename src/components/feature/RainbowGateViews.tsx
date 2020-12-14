import React, { useContext, useEffect, useState } from 'react'
import { DispatchContext, UserMapContext } from '../../App'
import { ValidColors } from '../../../server/src/types'
import { UpdateProfileColorAction, ShowModalAction } from '../../Actions'
import { Modal } from '../../modals'
import { getGateVisits, incrementGateVisits } from '../../storage'

// When you pass through the ranbow door enough times, you get a randomly colored username
export const RainbowGateRoomView = () => {
  function randomEnum<T> (anEnum: T): T[keyof T] {
    const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    return enumValues[randomIndex]
  }

  const dispatch = React.useContext(DispatchContext)

  const jumpThroughGate = async () => {
    const newVisits = await incrementGateVisits()
    if (newVisits > 3) {
      dispatch(UpdateProfileColorAction(randomEnum(ValidColors)))
    }

    dispatch(ShowModalAction(Modal.FeatureRainbowGate))
  }

  return <div id="rainbow-gate-div" className="feature-room-view">
    <p>You look to your left and notice that there is a big purple curtain blocking the entrance to the wardrobe, through which you see someone moving. In front of the entrance is a
      sloppily-written paper sign. It reads &quot;Please do not enter the wardrobe.&quot; <button id="rainbow-gate-button" className='link-styled-button' onClick={jumpThroughGate}>Look behind the curtain!</button></p>
  </div>
}

export default function RainbowGateModalView () {
  const { userMap, myId } = useContext(UserMapContext)

  const [visits, setVisits] = useState(0)

  useEffect(() => {
    (async () => {
      setVisits(await getGateVisits())
    })()
  }, [])

  if (visits === 1) {
    return (
      <div>
        <h1>You experience something truly wonderful.</h1>
        <p>You look behind the curtain, and immediately your senses are overwhelmed with the colors and, uh. The, uh, colors of
          the...unimaginable! It is a truly mindbending experience. You can feel indigo and smell purple, which, okay, yes, I&apos;ve
          heard of synesthesia before, yes, no, no, I&apos;m aware.</p>
        <p>Look, Dragos, I told you, I&apos;m an engineer, not Santa Claus.</p>
        <p>Okay there&apos;s a reason why I put that sign up, we&apos;ll just have to deal with these nosy people coming through here until
          we figure out who delivers everybody&apos;'s presents and then -
        </p>
        <p>Yes, yes, okay, look, thanks for dropping by, sorry we&apos;re a little bit busy, would you mind just closing the curtains and
          being on your way? Yes, thank you. We appreciate it.</p>
      </div>
    )
  } else if (visits === 2) {
    return (
      <div>
        <h1>Oh, it&apos;s you again.</h1>
        <p>Oh, hey, not to be, uh, not to be touchy or anything but we&apos;d appreciate it if you stopped opening this curtain.
          You might not notice but uh, you&apos;re kind of ruining everybody&apos;s surprise and it&apos;'s going to be really annoying to
          fix it, so...we would really appreciate if you stopped.
        </p>
      </div>
    )
  } else if (visits === 3) {
    return (
      <div>
        <h1>Please stop it.</h1>
        <p>No, seriously. I&apos;ve asked you politely and Dragos is getting very cross. If you come back through there will be Consequences.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Okay, that&apos;s enough.</h1>
        <p>You won&apos;t listen. You&apos;ve been asked repeatedly not to, and you won&apos;t listen. I&apos;m breaking out the curses now and
          you&apos;ve nobody to blame but yourself.</p>
        <p><em>Your chat name color is now <span className={`name ${userMap[myId].nameColor}`}>{userMap[myId].nameColor}</span></em>.</p>
      </div>
    )
  }
}
