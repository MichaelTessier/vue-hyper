export const TYPO_TAG_DEFAULT = 'p'

export const TYPO_TYPE = {
  DISPLAY_HEADING_LARGE: 'display-heading-large',
  DISPLAY_HEADING_MEDIUM: 'display-heading-medium',
  DISPLAY_HEADING_SMALL: 'display-heading-small',
  HEADING_LARGE: 'heading-large',
  HEADING_MEDIUM: 'heading-medium',
  HEADING_SMALL: 'heading-small',
  TEXT_LARGE: 'text-large',
  TEXT_MEDIUM: 'text-medium',
  TEXT_SMALL: 'text-small',
} as const
export const TYPO_TYPES = Object.values(TYPO_TYPE)
export type TypoType = (typeof TYPO_TYPES)[number]

export const TYPO_WEIGHT = {
  BOLD: 'bold',
  MEDIUM: 'medium',
  REGULAR: 'regular',
} as const
export const TYPO_WEIGHTS = Object.values(TYPO_WEIGHT)
export type TypoWeight = (typeof TYPO_WEIGHTS)[number]

export const TYPO_COLOR = {
  DARK: 'dark',
  WHITE: 'white',
  LIGHT: 'light',
} as const
export const TYPO_COLORS = Object.values(TYPO_COLOR)
export type TypoColor = (typeof TYPO_COLORS)[number]
