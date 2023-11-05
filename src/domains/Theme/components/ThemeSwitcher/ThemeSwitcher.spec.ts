import { mount } from '@vue/test-utils'
import ThemeSwitcher from './ThemeSwitcher.vue'
import { Mock } from 'vitest'

vi.mock('@/domains/Theme/composables/useTheme/useTheme.ts', () => ({
  useTheme: vi.fn(),
}))

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    ;(useTheme as Mock).mockReturnValue({
      setColorScheme: vi.fn(),
      availableColorScheme: ['light', 'dark'],
      setVariantTheme: vi.fn(),
      availableVariantTheme: ['blue', 'green', 'purple'],
    })
  })

  afterEach(() => {
    ;(useTheme as Mock).mockReset()
  })

  it('should update color scheme', async () => {
    const wrapper = mount(ThemeSwitcher)

    await wrapper.find('[data-test="color-scheme"]').setValue('dark')
    expect(useTheme().setColorScheme).toHaveBeenCalledWith('dark')
  })

  it('should update variant theme', async () => {
    const wrapper = mount(ThemeSwitcher)

    await wrapper.find('[data-test="variant-theme"]').setValue('green')
    expect(useTheme().setVariantTheme).toHaveBeenCalledWith('green')
  })
})
