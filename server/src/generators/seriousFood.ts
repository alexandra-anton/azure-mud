var tracery = require('tracery-grammar')

export const actionString = (item: string) => {
  return `The vending machine whirrs and sputters for a few seconds before spitting out ${item}.`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#adjective# #food#',
      '#adjective# #food#',
      '#adjective# #beverage#',
      '#adjective# #food##postAdjectiveFood#',
      '#adjective# #food##postAdjectiveFood#',
      '#adjective# #beverage##postAdjectiveBeverage#'
    ],
    adjective: [
      'a fresh',
      'a pungent',
      'an aromatic',
      'a seared',
      'a moist',
      'a chunky',
      'a smooth',
      'a delicate',
      'a hefty'
    ],
    food: [
      'Turbo bubblegum',
      'chicken sandwich',
      'turkey sandwich',
      'grilled cheese sandwich',
      'salam de biscuiti',
      'nougat',
      'bag of Bake Rolls',
      'bag of chips',
      'Mars bar',
      'Twix bar',
      'Lembas bread',
      'Knoppers bar',
      'Granola bar',
      'apple',
      'banana'
    ],
    beverage: [
      'bottle of yoghurt',
      'bottle of sana',
      'can of Red Bull',
      'can of Coca Cola',
      'can of Coca Cola Zero',
      'can of Fanta',
      'can of Sprite',
      'bottle of Lipton'
    ],
    postAdjectiveFood: [
      ', still in the wrapper',
      ' with a bite taken out of it',
      ' past its expiration date',
      ' that smells AMAZING',
      ', still frozen',
      ', with a sauce packet attached',
      ', with an @ on the packaging'
    ],
    postAdjectiveBeverage: [
      ' with a sip taken out of it',
      ' past its expiration date',
      ' that tastes AMAZING',
      ', still frozen',
      ', with a sauce packet attached',
      ', with an @ on the packaging'
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
