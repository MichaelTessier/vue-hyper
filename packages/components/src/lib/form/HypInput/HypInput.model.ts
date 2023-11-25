export const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  PASSWORD: 'password',
  EMAIL: 'email',
} as const

export const INPUT_TYPES = Object.values(INPUT_TYPE)
export type InputTypes = (typeof INPUT_TYPES)[number]
