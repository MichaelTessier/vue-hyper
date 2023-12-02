export const ICON_NAME = {
  CHEVRON_LEFT: 'chevron-left',
  CHEVRON_RIGHT: 'chevron-right',
  CHEVRON_UP: 'chevron-up',
  CHEVRON_DOWN: 'chevron-down',
  ACCOUNT: 'account',
  EYE_OUTLINE: 'eye-outline',
  EYE_OFF_OUTLINE: 'eye-off-outline',
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
