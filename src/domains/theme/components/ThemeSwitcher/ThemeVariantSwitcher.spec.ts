import { mount } from '@vue/test-utils'
import ThemeVariantSwitcher from './ThemeVariantSwitcher.vue'
import { Mock } from 'vitest'

vi.mock('@/domains/theme/composables/useTheme/useTheme.ts', () => ({
  useTheme: vi.fn(),
}))

describe('ThemeVariantSwitcher', () => {
  beforeEach(() => {
    ;(useTheme as Mock).mockReturnValue({
      setVariantTheme: vi.fn(),
      availableVariantTheme: ['blue', 'green', 'purple'],
    })
  })

  afterEach(() => {
    ;(useTheme as Mock).mockReset()
  })

  it('should update variant theme', async () => {
    const wrapper = mount(ThemeVariantSwitcher)

    await wrapper.find('[data-test="variant-theme"]').setValue('green')
    expect(useTheme().setVariantTheme).toHaveBeenCalledWith('green')
  })
})
