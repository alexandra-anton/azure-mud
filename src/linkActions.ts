import { pickUpRandomItemFromList, pickUpItem, sendChatMessage } from './networking'
import { v4 as uuidv4 } from 'uuid'

export const linkActions = {
  generateFood: () => {
    pickUpRandomItemFromList('vendingMachineFood')
  },
  generateSeriousFood: () => {
    pickUpRandomItemFromList('seriousFood')
  },
  pickUpPuppy: () => {
    pickUpItem('a tiny puppy')
  },
  drinkPolymorph: () => { // Listen. Is this the correct way? No. Does it save me needing to write a new httpTrigger? Yes.
    sendChatMessage(uuidv4(), '/get colourful potion')
  },
  drinkCancellation: () => {
    sendChatMessage(uuidv4(), '/get clear potion')
  },
  getFortune: () => {
    sendChatMessage(uuidv4(), '/get fortune cookie')
  }
}
