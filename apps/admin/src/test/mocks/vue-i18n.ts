const t = vi.fn((key: string) => key)
const d = vi.fn((key: string) => key)

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t,
    d,
  }),
}))

export const useI18nMock = {
  t,
  d,
}
