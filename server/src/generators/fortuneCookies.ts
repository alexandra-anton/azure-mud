var tracery = require('tracery-grammar')

export const actionString = (fortune: string) => {
  return `${fortune}`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#goodFortune#'
    ],
    goodFortune: [
      'Mmm, yeah.',
      'Just like auntie used to make it. Or maybe she works in catering now, who knows.',
      'You live for this free food business, don\’t you?',
      'Take it easy now…',
      'Yummy, yummy in your tummy.',
      'I wonder if the gyms are open. Why? No reason.',
      'I hope this is healthier than getting pasta from downstairs.',
      'Well, it\’s no Sare și Piper, but this will have to do.',
      'Well, it\’s no Tarab, but it’s alright.',
      'Good, good. Could use more bread, though.',
      'You might consider joining <a href=https://ncchat.slack.com/archives/C01FYUQJ7AR target="_blank">fun-ncfit</a> after this...'
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
