// export enum VARIANT {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   DANGER = 'danger',
//   WARNING = 'warning',
//   INFO = 'info',
//   DARK = 'dark',
// }
export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
} as const

export const VARIANTS = Object.values(VARIANT)
export type Variants = (typeof VARIANTS)[number]
