import { defineConfig } from 'unocss'

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

const safelistColorsGenerator = () => {
  const safelist: string[] = []
  const props = ['text', 'bg', 'border']

  props.forEach((prop) => {
    Object.keys(COLORS).forEach((color) => {
      safelist.push(`${prop}-${color}`)
    })
  })

  return safelist
}

const safelistRadiusGenerator = () => {
  const safelist: string[] = []

    Object.keys(RADIUSES).forEach((radius) => {
      safelist.push(`rounded-${radius}`)
    })

  return safelist
}

export default defineConfig({
  theme: {
    colors: COLORS,
    borderRadius: RADIUSES

  },

  safelist: [...safelistColorsGenerator(), ...safelistRadiusGenerator()],
})
