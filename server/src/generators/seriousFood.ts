var tracery = require('tracery-grammar')

export const actionString = (item: string) => {
  return `You get ...${item}.`
}

const seriousFoodList = [
  'an assortment of tobă, lebăr and caltaboș, with a bit of mustard on the side',
  'vegetarian sarmale, with mushrooms, lentils and rice',
  'two fat papanași swimming in sour cream and cranberry jam',
  'a shaorma',
  'some pork roast, marinated in a little bit of chilli and smoked paprika',
  'some pork roast that was left way too much in the oven',
  'șorici',
  'some slices of vegetarian nutloaf, with walnuts, sweet potatoes and mushrooms caramelized in soy sauce',
  'Stollen cake',
  'a wonderfully sour ciorbă, with fresh tăiței',
  'pasta from downstairs',
  'cozonaaaaaac :partyparrot:'
]

export const isSeriousFood = (item: string) => {
  return seriousFoodList.includes(item);
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#food#'
    ],
    food: seriousFoodList
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
