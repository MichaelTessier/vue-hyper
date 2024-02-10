export type Type = 'select' | 'text' | 'number' | 'color' | 'boolean'

export interface Controls {
  model: string | string[] | number | boolean
  type: Type
  title: string
  options?: string[]
  steps?: number
  min?: number
  max?: number
}
