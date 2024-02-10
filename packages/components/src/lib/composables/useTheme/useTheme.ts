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

// export enum LayoutTheme {
//   classic = 'classic',
//   compact = 'compact',
//   modern = 'modern',
// }

const colorScheme = ref(ColorScheme.light)
const variantTheme = ref(VariantTheme.blue)
// const layoutTheme = ref(LayoutTheme.classic)

export const useTheme = () => {
  function init() {
    initColorScheme()
    initVariantTheme()
    // initLayoutTheme()
  }

  const settings = reactive({
    // layout: layoutTheme,
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

  // function initLayoutTheme() {
  //   const localLayoutTheme = localStorage.getItem(LAYOUT_THEME_STORAGE_KEY)

  //   if (localLayoutTheme) {
  //     layoutTheme.value = localLayoutTheme as LayoutTheme
  //   }

  //   setLayoutTheme(layoutTheme.value)
  // }

  // function setLayoutTheme(layoutTheme: LayoutTheme) {
  //   localStorage.setItem(LAYOUT_THEME_STORAGE_KEY, layoutTheme)
  // }

  // const isClassicLayout = computed(
  //   () => layoutTheme.value === LayoutTheme.classic
  // )
  // const isCompactLayout = computed(
  //   () => layoutTheme.value === LayoutTheme.compact
  // )
  // const isModernLayout = computed(
  //   () => layoutTheme.value === LayoutTheme.modern
  // )

  return {
    init,
    colorScheme,
    availableColorScheme: Object.values(ColorScheme),
    setColorScheme,
    isDark: isDark,
    variantTheme,
    availableVariantTheme: Object.values(VariantTheme),
    setVariantTheme,
    // layoutTheme,
    // availableLayoutTheme: Object.values(LayoutTheme),
    // setLayoutTheme,
    // isClassicLayout: isClassicLayout,
    // isCompactLayout: isCompactLayout,
    // isModernLayout: isModernLayout,
    settings,
  }
}
