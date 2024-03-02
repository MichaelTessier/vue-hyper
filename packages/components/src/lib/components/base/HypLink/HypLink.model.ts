export const LINK_COLOR_DEFAULT = TYPO_COLOR_DEFAULT
export const LINK_COLORS = [...TYPO_COLORS]
export type LinkColor = (typeof LINK_COLORS)[number]

export const LINK_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const
export const LINK_SIZES = Object.values(LINK_SIZE)
export type LinkSize = (typeof LINK_SIZES)[number]
