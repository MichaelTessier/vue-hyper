export const COLOR_SCHEME_STORAGE_KEY = 'color-scheme'
export const VARIANT_THEME_STORAGE_KEY = 'variant-theme'
export const LAYOUT_THEME_STORAGE_KEY = 'layout-theme'

export enum ColorScheme {
  light = 'light',
  dark = 'dark',
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
    initColorScheme()
    initVariantTheme()
  }

  const settings = reactive({
    variant: variantTheme.value,
    scheme: colorScheme.value,
  })

  function initColorScheme() {
    const localColorScheme = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY)

    if (localColorScheme) {
      colorScheme.value = localColorScheme as ColorScheme
    } else {
      colorScheme.value = window?.matchMedia?.('(prefers-color-scheme: dark)')
        .matches
        ? ColorScheme.dark
        : ColorScheme.light
    }

    setColorScheme(colorScheme.value)
  }

  function setColorScheme(_colorScheme: ColorScheme) {
    document.documentElement.setAttribute('data-color-scheme', _colorScheme)
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, _colorScheme)
    colorScheme.value = _colorScheme
  }

  const isDark = computed(() => colorScheme.value === ColorScheme.dark)

  function initVariantTheme() {
    const localVariantTheme = localStorage.getItem(VARIANT_THEME_STORAGE_KEY)

    if (localVariantTheme) {
      variantTheme.value = localVariantTheme as VariantTheme
    }

    setVariantTheme(variantTheme.value)
  }

  function setVariantTheme(_variantTheme: VariantTheme) {
    document.documentElement.setAttribute('data-variant-theme', _variantTheme)
    localStorage.setItem(VARIANT_THEME_STORAGE_KEY, _variantTheme)
    variantTheme.value = _variantTheme
  }

  return {
    init,
    colorScheme,
    availableColorScheme: Object.values(ColorScheme),
    setColorScheme,
    isDark: isDark,
    variantTheme,
    availableVariantTheme: Object.values(VariantTheme),
    setVariantTheme,
    settings,
  }
}
