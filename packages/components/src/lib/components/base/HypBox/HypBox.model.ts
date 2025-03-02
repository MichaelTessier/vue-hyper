export const BOX_ELEVATION = {
  NONE: '0',
  MEDIUM: '1',
  LARGE: '2',
} as const
export const BOX_ELEVATIONS = Object.values(BOX_ELEVATION)
export type BoxElevation = (typeof BOX_ELEVATIONS)[number]
export const BOX_ELEVATION_DEFAULT = BOX_ELEVATION.NONE

export const BOX_PADDING = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

export const BOX_PADDINGS = Object.values(BOX_PADDING)
export type BoxPadding = (typeof BOX_PADDINGS)[number]
export const BOX_PADDING_DEFAULT = BOX_PADDING.NONE
