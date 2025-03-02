export const BASE_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const
export const BASE_SIZES = Object.values(BASE_SIZE)
export type BaseSize = (typeof BASE_SIZES)[number]
