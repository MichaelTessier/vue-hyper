import { type Preset, defineConfig, presetUno, presetIcons } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { safelist } from './src/config/unocss/safelist'
import { theme } from './src/config/unocss/theme'

export default defineConfig({
  theme,

  rules: [
    [
      /^shadow-btn-(.+)$/,
      ([, name]) => ({
        'box-shadow': `0px 2px 5px rgb(from var(--hyp-color-${name}) r g b / 0.5)`,
      }),
    ],
    [
      /^grid-auto-(.+)$/,
      ([, size]) => ({
        'grid-template-columns': `repeat(auto-fit, minmax(${size}px, 1fr))`,
      }),
    ],
    [
      /^text-(.*)$/,
      ([, c], { theme }: any) => {
        if (theme.textColors[c]) return { color: theme.textColors[c] }
      },
    ],
    [
      /^bg-(.*)$/,
      ([, c], { theme }: any) => {
        if (theme.backgroundColors[c])
          return { 'background-color': theme.backgroundColors[c] }
      },
    ],
    [
      /^border-(.*)$/,
      ([, c], { theme }: any) => {
        if (theme.borderColors[c])
          return { 'border-color': theme.borderColors[c] }
      },
    ],
  ],

  safelist: [...safelist],

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
