export const useThemeMock = {
  setColorScheme: vi.fn(),
  availableColorScheme: ['light', 'dark'],
  setVariantTheme: vi.fn(),
  availableVariantTheme: ['blue', 'green', 'purple'],
}

vi.mock('vue-hyper-components', () => ({
  useTheme: () => useThemeMock,
}))
