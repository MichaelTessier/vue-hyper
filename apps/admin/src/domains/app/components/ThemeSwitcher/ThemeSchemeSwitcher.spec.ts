import { mount } from '@vue/test-utils'
import ThemeSchemeSwitcher from './ThemeSchemeSwitcher.vue'

const useThemeMock = {
  setColorScheme: vi.fn(),
  availableColorScheme: ['light', 'dark'],
}

vi.mock('@/domains/app/composables/useTheme/useTheme.ts', () => ({
  useTheme: () => useThemeMock,
}))

describe('ThemeSchemeSwitcher', () => {
  afterEach(() => {
    useThemeMock.setColorScheme.mockReset()
  })

  it('should update color scheme', async () => {
    const wrapper = mount(ThemeSchemeSwitcher)

    await wrapper.find('[data-test="color-scheme"]').setValue('dark')
    expect(useThemeMock.setColorScheme).toHaveBeenCalledWith('dark')
  })
})
