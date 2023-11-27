import { type Preset, defineConfig, presetUno, presetIcons } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { TYPO_TYPES, TYPO_WEIGHTS } from './src/lib/base/HypTypo/HypTypo.model'
import { safelist } from './src/config/safelist'

const COLORS = {
  primary: 'var(--hyp-color-primary)',
  secondary: 'var(--hyp-color-secondary)',
  white: 'var(--hyp-color-white)',
  light: 'var(--hyp-color-light)',
  dark: 'var(--hyp-color-dark)',
  info: 'var(--hyp-color-info)',
  success: 'var(--hyp-color-success)',
  warning: 'var(--hyp-color-warning)',
  danger: 'var(--hyp-color-danger)',
}

const RADIUSES = {
  none: '0',
  small: '0.15rem',
  medium: '0.30rem',
  large: '0.45rem',
  full: '9999px',
}

const safelistColors = () => {
  const safelist: string[] = []
  const props = ['text', 'bg', 'border', 'shadow-btn']

  props.forEach((prop) => {
    Object.keys(COLORS).forEach((color) => {
      safelist.push(`${prop}-${color}`)
    })
  })

  return safelist
}

const safelistRadius = () => {
  const safelist: string[] = []

  Object.keys(RADIUSES).forEach((radius) => {
    safelist.push(`rounded-${radius}`)
  })

  return safelist
}

const safelistTypo = () => {
  const safelist: string[] = []

  TYPO_TYPES.forEach((type) => {
    safelist.push(`hyp-${type}`)
  })

  return safelist
}

const safelistFontWeight = () => {
  const safelist: string[] = []

  TYPO_WEIGHTS.forEach((weight) => {
    safelist.push(`font-${weight}`)
  })

  return safelist
}

export default defineConfig({
  theme: {
    colors: COLORS,
    borderRadius: RADIUSES,
  },

  rules: [
    [
      /^shadow-btn-(.+)$/,
      ([, name]) => ({
        'box-shadow': `0px 2px 5px rgb(from var(--hyp-color-${name}) r g b / 0.5)`,
      }),
    ],
  ],
  safelist: [
    ...safelistColors(),
    ...safelistRadius(),
    ...safelistTypo(),
    ...safelistFontWeight(),
    ...safelist,
  ],

  presets: [
    presetUno(),
    presetRemToPx() as Preset,
    presetIcons({
      collections: {
        mdi: () =>
          import('@iconify-json/mdi/icons.json').then((i) => i.default),
      },
    }),
  ],

  shortcuts: {
    'hyp-display-heading-large': 'text-11  font-medium leading-tight ',
    'hyp-display-heading-medium': 'text-9 font-medium leading-tight',
    'hyp-display-heading-small': 'text-8 font-medium leading-tight',
    'hyp-heading-large': 'text-7 font-bold leading-tight',
    'hyp-heading-medium': 'text-6 font-bold leading-tight',
    'hyp-heading-small': 'text-5 font-bold leading-tight',
    'hyp-text-large': 'text-5 leading-tight',
    'hyp-text-medium': 'text-4 leading-tight',
    'hyp-text-small': 'text-3 leading-tight',
  },
})
