import { TYPO_COLOR_DEFAULT, TYPO_COLORS } from '../HypTypo/HypTypo.model'

// https://icones.js.org/collection/mdi
export const ICON_NAME = {
  CHEVRON_LEFT: 'chevron-left',
  CHEVRON_RIGHT: 'chevron-right',
  CHEVRON_UP: 'chevron-up',
  CHEVRON_DOWN: 'chevron-down',
  ACCOUNT: 'account',
  EYE_OUTLINE: 'eye-outline',
  EYE_OFF_OUTLINE: 'eye-off-outline',
  CHECKBOX_MULTIPLE_BLANK_OUTLINE: 'checkbox-multiple-blank-outline',
} as const

export const ICON_NAMES = Object.values(ICON_NAME)
export type IconName = (typeof ICON_NAMES)[number]

export const ICON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const

export const ICON_SIZES = Object.values(ICON_SIZE)
export type IconSize = (typeof ICON_SIZES)[number]

export const ICON_COLOR_DEFAULT = TYPO_COLOR_DEFAULT
export const ICON_COLORS = [...TYPO_COLORS]
export type IconColor = (typeof ICON_COLORS)[number]
