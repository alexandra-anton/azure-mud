import { User } from './user'
import generators from '../src/generators'
import { Result } from './endpoint'

export function cookie (user: User, messageId: string): Result {
  const generator = generators.fortuneCookies

  if (!generator) {
    return {
      httpResponse: {
        status: 400,
        body: { error: 'You included an invalid list: fortuneCookies' }
      }
    }
  }

  const fortune = generator.generate()
  const privateActionString = generator.actionString(fortune)

  return {
    messages: [
      /* {
        groupName: user.roomId,
        target: 'emote'//,
        arguments: [messageId, user.id, 'eats a large portion of food.']
      }, */
      {
        groupName: user.id,
        target: 'privateCommand',
        arguments: [privateActionString]
      }
    ]
  }
}
