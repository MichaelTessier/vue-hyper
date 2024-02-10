export const BUTTON_VARIANT_DEFAULT = COLOR.PRIMARY
export const BUTTON_VARIANTS = [
  COLOR.PRIMARY,
  COLOR.SECONDARY,
  COLOR.SUCCESS,
  COLOR.WARNING,
  COLOR.ERROR,
  COLOR.INFO,
  COLOR.LIGHT,
  COLOR.DARK,
]
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

export const BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const
export const BUTTON_SIZES = Object.values(BUTTON_SIZE)
export type ButtonSize = (typeof BUTTON_SIZES)[number]

export const BUTTON_RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full',
} as const
export const BUTTON_RADIUSES = Object.values(BUTTON_RADIUS)
export type ButtonRadius = (typeof BUTTON_RADIUSES)[number]
