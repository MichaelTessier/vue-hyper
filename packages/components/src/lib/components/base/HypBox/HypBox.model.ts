export const BOX_ELEVATION = {
  0: '0',
  1: '1',
  2: '2',
} as const
export const BOX_ELEVATIONS = Object.values(BOX_ELEVATION)
export type BaseSize = (typeof BOX_ELEVATIONS)[number]
