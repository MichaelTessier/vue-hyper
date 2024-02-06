import { ICON_NAMES } from '../../lib/base/HypIcon/HypIcon.model'
import { TYPO_TYPES, TYPO_WEIGHTS } from '../../lib/base/HypTypo/HypTypo.model'
import {
  UNO_BACKGROUND_COLORS,
  UNO_BORDER_COLORS,
  UNO_COLORS,
  UNO_RADIUSES,
  UNO_TEXT_COLORS,
} from './unocss.const'

const safelistIcons = () => {
  const safelist: string[] = []

  ICON_NAMES.forEach((icon) => {
    safelist.push(`i-mdi-${icon}`)
  })

  return safelist
}

const safelistColors = () => {
  const safelist: string[] = []
  const props = ['text', 'bg', 'border', 'shadow-btn']

  props.forEach((prop) => {
    Object.keys(UNO_COLORS).forEach((color) => {
      safelist.push(`${prop}-${color}`)
    })
  })

  return safelist
}

const safelistTextColors = () => {
  const safelist: string[] = []

  Object.keys(UNO_TEXT_COLORS).forEach((color) => {
    safelist.push(`text-${color}`)
  })

  return safelist
}

const safelistBorderColors = () => {
  const safelist: string[] = []

  Object.keys(UNO_BORDER_COLORS).forEach((color) => {
    safelist.push(`border-${color}`)
  })

  return safelist
}

const safelistBackgroundColors = () => {
  const safelist: string[] = []

  Object.keys(UNO_BACKGROUND_COLORS).forEach((color) => {
    safelist.push(`bg-${color}`)
  })

  return safelist
}

const safelistRadius = () => {
  const safelist: string[] = []

  Object.keys(UNO_RADIUSES).forEach((radius) => {
    safelist.push(`rounded-${radius}`)
  })

  return safelist
}

const safelistTypo = () => {
  const safelist: string[] = []

  TYPO_TYPES.forEach((type) => {
    safelist.push(`hyp-${type}`)
  })

  return safelist
}

const safelistFontWeight = () => {
  const safelist: string[] = []

  TYPO_WEIGHTS.forEach((weight) => {
    safelist.push(`font-${weight}`)
  })

  return safelist
}

export const safelist = [
  ...safelistBackgroundColors(),
  ...safelistBorderColors(),
  ...safelistColors(),
  ...safelistFontWeight(),
  ...safelistIcons(),
  ...safelistRadius(),
  ...safelistTextColors(),
  ...safelistTypo(),
]
