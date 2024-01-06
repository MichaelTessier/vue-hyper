import { mount } from '@vue/test-utils'
import ThemeLayoutSwitcher from './ThemeLayoutSwitcher.vue'
import type { Mock } from 'vitest'

vi.mock('@/domains/theme/composables/useTheme/useTheme.ts', () => ({
  useTheme: vi.fn(),
}))

describe('ThemeLayoutSwitcher', () => {
  beforeEach(() => {
    ;(useTheme as Mock).mockReturnValue({
      setLayoutTheme: vi.fn(),
      availableLayoutTheme: ['modern', 'classic', 'compact'],
    })
  })

  afterEach(() => {
    ;(useTheme as Mock).mockReset()
  })

  it('should update layout theme', async () => {
    const wrapper = mount(ThemeLayoutSwitcher)

    await wrapper.find('[data-test="layout-theme"]').setValue('modern')
    expect(useTheme().setLayoutTheme).toHaveBeenCalledWith('modern')
  })
})
