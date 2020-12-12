import * as vendingMachineFood from './vendingMachineFood'
import * as seriousFood from './seriousFood'
import * as fortuneCookies from './fortuneCookies'
import * as polymorph from './polymorph'

interface Generator {
    generate(): string
    actionString(item: string): string
}

const generators: {[name: string]: Generator} = {
  vendingMachineFood,
  seriousFood,
  fortuneCookies,
  polymorph
}

export default generators
