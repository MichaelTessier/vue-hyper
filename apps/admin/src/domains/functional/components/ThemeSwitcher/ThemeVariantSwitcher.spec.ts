import { mount } from '@vue/test-utils'
import ThemeVariantSwitcher from './ThemeVariantSwitcher.vue'

const useThemeMock = {
  setVariantTheme: vi.fn(),
  availableVariantTheme: ['blue', 'green', 'purple'],
}

vi.mock('@/domains/functional/composables/useTheme/useTheme.ts', () => ({
  useTheme: () => useThemeMock,
}))

describe('ThemeVariantSwitcher', () => {
  afterEach(() => {
    useThemeMock.setVariantTheme.mockReset()
  })

  it('should update variant theme', async () => {
    const wrapper = mount(ThemeVariantSwitcher)

    await wrapper.find('[data-test="variant-theme"]').setValue('green')
    expect(useThemeMock.setVariantTheme).toHaveBeenCalledWith('green')
  })
})
