export const COLOR_SCHEME_STORAGE_KEY = 'color-scheme'
export const VARIANT_THEME_STORAGE_KEY = 'variant-theme'

export enum ColorScheme {
  dark = 'dark',
  light = 'light',
}

export enum VariantTheme {
  blue = 'blue',
  green = 'green',
  purple = 'purple',
}

const colorScheme = ref(ColorScheme.light)
const variantTheme = ref(VariantTheme.blue)

export const useTheme = () => {
  function init() {
    const localColorScheme = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY)

    if (localColorScheme) {
      colorScheme.value = localColorScheme as ColorScheme
    } else {
      colorScheme.value = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? ColorScheme.dark
        : ColorScheme.light
    }

    setColorScheme(colorScheme.value)

    const localVariantTheme = localStorage.getItem(VARIANT_THEME_STORAGE_KEY)

    if (localVariantTheme) {
      variantTheme.value = localVariantTheme as VariantTheme
    }

    setVariantTheme(variantTheme.value)
  }

  function setColorScheme(colorScheme: ColorScheme) {
    document.documentElement.setAttribute('data-color-scheme', colorScheme)
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, colorScheme)
  }

  function setVariantTheme(variantTheme: VariantTheme) {
    document.documentElement.setAttribute('data-variant-theme', variantTheme)
    localStorage.setItem(VARIANT_THEME_STORAGE_KEY, variantTheme)
  }

  return {
    colorScheme,
    availableColorScheme: Object.values(ColorScheme),
    variantTheme,
    availableVariantTheme: Object.values(VariantTheme),
    init,
    setColorScheme,
    setVariantTheme,
  }
}
