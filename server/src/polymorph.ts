import generators from '../src/generators'
import { Result } from './endpoint'
import { minimizeUser, updateUserProfile, User } from './user'

export async function polymorph (user: User, messageId: string): Promise<Result> {
  const generator = generators.polymorph

  if (!generator) {
    return {
      httpResponse: {
        status: 400,
        body: { error: 'You included an invalid list: polymorph' }
      }
    }
  }

  const actionText = generator.generate()
  const polymorph = generator.actionString(actionText)

  const newProfile = await updateUserProfile(user.id, { polymorph })

  return {
    messages: [
      {
        groupName: user.roomId,
        target: 'emote',
        arguments: [messageId, user.id, 'drinks from that bubbling purple goo and changes form!']
      },
      {
        groupName: user.id,
        target: 'privateCommand',
        arguments: [actionText]
      },
      {
        target: 'usernameMap',
        arguments: [{ [user.id]: minimizeUser(newProfile) }]
      }
    ]
  }
}

export async function cancellation (user: User, messageId: string): Promise<Result> {
  const polymorph = ''
  const newProfile = await updateUserProfile(user.id, { polymorph })

  return {
    messages: [
      {
        groupName: user.roomId,
        target: 'emote',
        arguments: [messageId, user.id, 'drinks a cup of plain hot chocolate and returns to normal.']
      },
      {
        groupName: user.id,
        target: 'privateCommand',
        arguments: ['You quaff the cup of hot chocolate and return to your usual self.']
      },
      {
        target: 'usernameMap',
        arguments: [{ [user.id]: minimizeUser(newProfile) }]
      }
    ]
  }
}
