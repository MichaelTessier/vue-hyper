import { mount } from '@vue/test-utils'
import ThemeSchemeSwitcher from './ThemeSchemeSwitcher.vue'
import type { Mock } from 'vitest'

vi.mock('@/domains/theme/composables/useTheme/useTheme.ts', () => ({
  useTheme: vi.fn(),
}))

describe('ThemeSchemeSwitcher', () => {
  beforeEach(() => {
    ;(useTheme as Mock).mockReturnValue({
      setColorScheme: vi.fn(),
      availableColorScheme: ['light', 'dark'],
    })
  })

  afterEach(() => {
    ;(useTheme as Mock).mockReset()
  })

  it('should update color scheme', async () => {
    const wrapper = mount(ThemeSchemeSwitcher)

    await wrapper.find('[data-test="color-scheme"]').setValue('dark')
    expect(useTheme().setColorScheme).toHaveBeenCalledWith('dark')
  })
})
