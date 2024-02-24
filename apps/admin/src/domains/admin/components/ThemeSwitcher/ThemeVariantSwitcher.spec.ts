import { mount } from '@vue/test-utils'
import ThemeVariantSwitcher from './ThemeVariantSwitcher.vue'

const useLayoutMock = {
  setVariantTheme: vi.fn(),
  availableVariantTheme: ['blue', 'green', 'purple'],
}

vi.mock('@/domains/functional/composables/useLayout/useLayout.ts', () => ({
  useLayout: () => useLayoutMock,
}))

describe('ThemeVariantSwitcher', () => {
  afterEach(() => {
    useLayoutMock.setVariantTheme.mockReset()
  })

  it('should update variant theme', async () => {
    const wrapper = mount(ThemeVariantSwitcher)

    await wrapper.find('[data-test="variant-theme"]').setValue('green')
    expect(useLayoutMock.setVariantTheme).toHaveBeenCalledWith('green')
  })
})
