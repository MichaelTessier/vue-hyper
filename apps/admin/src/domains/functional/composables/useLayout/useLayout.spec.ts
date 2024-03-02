describe('useLayout', () => {
  it('should have values from localStorage', () => {
    const theme = useLayout()

    expect(theme.layout.value).toEqual(Layout.classic)

    localStorage.setItem(LAYOUT_THEME_STORAGE_KEY, Layout.compact)

    theme.initLayout()

    expect(theme.layout.value).toEqual(Layout.compact)
  })
})
