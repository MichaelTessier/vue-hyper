describe('useTheme', () => {
  it('should have values from localStorage', () => {
    const theme = useTheme()

    expect(theme.colorScheme.value).toEqual(ColorScheme.light)
    expect(theme.variantTheme.value).toEqual(VariantTheme.blue)

    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, ColorScheme.dark)
    localStorage.setItem(VARIANT_THEME_STORAGE_KEY, VariantTheme.purple)

    theme.init()

    expect(theme.colorScheme.value).toEqual(ColorScheme.dark)
    expect(theme.variantTheme.value).toEqual(VariantTheme.purple)
  })
})
