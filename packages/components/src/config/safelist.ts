import { ICON_NAMES } from '../lib/base/HypIcon/HypIcon.model'

const safelistIcons = () => {
  const safelist: string[] = []

  ICON_NAMES.forEach((icon) => {
    safelist.push(`i-mdi-${icon}`)
  })

  return safelist
}

export const safelist = [...safelistIcons()]
