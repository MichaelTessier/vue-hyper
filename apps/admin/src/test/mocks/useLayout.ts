export const useLayoutMock = {
  setLayout: vi.fn(),
  availableLayout: ['modern', 'classic', 'compact'],
}

vi.mock('@/domains/functional/composables/useLayout/useLayout.ts', () => ({
  useLayout: () => useLayoutMock,
}))
