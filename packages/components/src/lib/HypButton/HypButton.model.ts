export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  LIGHT: 'light',
  DARK: 'dark',
} as const
export const BUTTON_VARIANTS = Object.values(BUTTON_VARIANT)
export type ButtonVariants = (typeof BUTTON_VARIANTS)[number]

export const BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const
export const BUTTON_SIZES = Object.values(BUTTON_SIZE)
export type ButtonSizes = (typeof BUTTON_SIZES)[number]

export const BUTTON_RADIUS = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full'
} as const
export const BUTTON_RADIUSES = Object.values(BUTTON_RADIUS)
export type ButtonRadiuses = (typeof BUTTON_RADIUSES)[number]
