export const LINK_COLOR = {
  DARK: 'dark',
  WHITE: 'white',
  LIGHT: 'light',
} as const
export const LINK_COLORS = Object.values(LINK_COLOR)
export type LinkColor = (typeof LINK_COLORS)[number]
