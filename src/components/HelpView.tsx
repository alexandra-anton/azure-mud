import React from 'react'
import { SlashCommands } from '../SlashCommands'

export default function HelpView() {
  const rows = SlashCommands.map(command => {
    return (
      <tr key={command.type}>
        <td>{command.invocations.join(', ')}</td>
        <td>{command.description}</td>
      </tr>
    )
  })

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Welcome to the Netcentric virtual studio <span role="img" aria-label="tada">🎉</span> </p>
      <p>Many of us wondered when we will be able to return to the office. We did some redecoration in the meantime and now it's ready again.</p>
      <p>You can sip a coffee at the reception, take the elevator to a cigarette break, talk to other colleagues, explore unknown corners and interact with your surroundings.</p>
      <p>Talk to each other off Slack and make this Christmas celebration feel a little more like a real-world interaction. </p>
      <p>Happy wandering, and be wary of reading scrolls without identifying them first <span role="img" aria-label="wink">😉</span></p><p></p>
      <p>You can access this reference at any time by clicking the <strong>Help</strong> button in the left sidebar or by typing <strong>/help</strong> into the chat box.</p>
      <p>If you have questions, feedback, or need to report a code of conduct violation, you can contact us via the <strong>/mod</strong> command.</p>
      <h2>Command Reference</h2>
      <p>You can enter any of these commands by typing directly into the chat box.</p>
      <table>
        {rows}
      </table>
    </div>
  )
}
