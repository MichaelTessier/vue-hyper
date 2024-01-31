export const LINK_COLOR = {
  DARK: 'dark',
  WHITE: 'white',
  LIGHT: 'light',
} as const
export const LINK_COLORS = Object.values(LINK_COLOR)
export type LinkColor = (typeof LINK_COLORS)[number]

export const LINK_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const
export const LINK_SIZES = Object.values(LINK_SIZE)
export type LinkSize = (typeof LINK_SIZES)[number]
